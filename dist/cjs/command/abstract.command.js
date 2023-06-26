"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCommand = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
const exception_1 = require("../exception");
const logger_1 = require("../logger");
const util_1 = require("../util");
class AbstractCommand extends (0, logger_1.LoggableMixin)(Function) {
    constructor(httpClient, ..._args) {
        super();
        this.httpClient = httpClient;
    }
    static queryClass() {
        throw new Error('AbstractCommand.queryClass: not implemented');
    }
    /**
     * @example If the provider doesn't provide separate information about house number, then AccuracyEnum.STREET_NAME should be set.
     * @important This information will be used to ignore the provider if query.accuracy is specified.
     */
    static getMaxAccuracy() {
        throw new Error('AbstractCommand.getMaxAccuracy: not implemented');
    }
    static getUrl() {
        throw new Error('AbstractCommand.getUrl: not implemented');
    }
    async buildQuery(_query) {
        throw new Error('AbstractCommand.buildQuery: not implemented');
    }
    /**
     * Must return void or throw one of GeocoderException
     * @throws {GeocoderException}
     */
    async validateResponse(_response) {
        throw new Error('AbstractCommand.validateResponse: not implemented');
    }
    async parseResponse(_response, _query) {
        throw new Error('AbstractCommand.parseResponse: not implemented');
    }
    static isProvidesAccuracy(accuracy) {
        return (0, util_1.getAvailableAccuracies)(this.getMaxAccuracy()).includes(accuracy);
    }
    async execute(_query) {
        const query = (0, class_transformer_1.plainToInstance)(this.constructor.queryClass(), _query);
        try {
            await (0, class_validator_1.validateOrReject)(query, {
                whitelist: true,
                forbidNonWhitelisted: true,
                validationError: { target: false, value: false },
            });
        }
        catch (err) {
            this.getLogger().error(err, query);
            throw new exception_1.ValidationException(err);
        }
        if (query.accuracy && !this.constructor.isProvidesAccuracy(query.accuracy)) {
            throw new exception_1.UnsupportedAccuracyException(`Command ${this.constructor.name} doesn't support "${query.accuracy}" accuracy (max accuracy is "${this.constructor.getMaxAccuracy()}")`);
        }
        const params = await this.buildQuery(query);
        let response;
        try {
            response = await this.getResponse(params);
        }
        catch (err) {
            if (err.response && err.response.status) {
                const statusCode = err.response.status;
                if (statusCode === 401 || statusCode === 403) {
                    throw new exception_1.InvalidCredentialsException(`API key is invalid`, err.response);
                }
                else if (statusCode === 429) {
                    throw new exception_1.QuotaExceededException('Quota exceeded', err.response);
                }
                throw new exception_1.InvalidServerResponseException('Server error', err.response);
            }
            else {
                throw new exception_1.InvalidServerResponseException(err.message);
            }
        }
        if ((0, lodash_isempty_1.default)(response.data)) {
            throw new exception_1.InvalidServerResponseException('Empty response data', response);
        }
        await this.validateResponse(response);
        const transformers = await this.parseResponse(response, query);
        return Promise.all(transformers.map(async (transformer) => {
            return transformer.transform({
                groups: query.withRaw ? ['raw'] : undefined,
            });
        }));
    }
    async getResponse(params) {
        return this.httpClient.get(this.constructor.getUrl(), {
            params,
        });
    }
}
exports.AbstractCommand = AbstractCommand;
//# sourceMappingURL=abstract.command.js.map