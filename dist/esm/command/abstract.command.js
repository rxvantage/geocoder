import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import isEmpty from 'lodash.isempty';
import { InvalidCredentialsException, InvalidServerResponseException, QuotaExceededException, UnsupportedAccuracyException, ValidationException, } from '../exception';
import { LoggableMixin } from '../logger';
import { getAvailableAccuracies } from '../util';
export class AbstractCommand extends LoggableMixin(Function) {
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
        return getAvailableAccuracies(this.getMaxAccuracy()).includes(accuracy);
    }
    async execute(_query) {
        const query = plainToInstance(this.constructor.queryClass(), _query);
        try {
            await validateOrReject(query, {
                whitelist: true,
                forbidNonWhitelisted: true,
                validationError: { target: false, value: false },
            });
        }
        catch (err) {
            this.getLogger().error(err, query);
            throw new ValidationException(err);
        }
        if (query.accuracy && !this.constructor.isProvidesAccuracy(query.accuracy)) {
            throw new UnsupportedAccuracyException(`Command ${this.constructor.name} doesn't support "${query.accuracy}" accuracy (max accuracy is "${this.constructor.getMaxAccuracy()}")`);
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
                    throw new InvalidCredentialsException(`API key is invalid`, err.response);
                }
                else if (statusCode === 429) {
                    throw new QuotaExceededException('Quota exceeded', err.response);
                }
                throw new InvalidServerResponseException('Server error', err.response);
            }
            else {
                throw new InvalidServerResponseException(err.message);
            }
        }
        if (isEmpty(response.data)) {
            throw new InvalidServerResponseException('Empty response data', response);
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
//# sourceMappingURL=abstract.command.js.map