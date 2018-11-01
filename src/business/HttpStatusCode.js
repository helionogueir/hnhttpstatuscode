/**
 * HTTP Status Codes
 */
module.exports = class HttpStatusCode {

    /**
     * Construct object
     * @param int code
     * @returns Object Code and Message
     */
    constructor() {
        try {
            Object.freeze(this);
        } catch (err) {
            throw err;
        }
    }

    /**
     * Get code and message by code
     * @param int code
     * @returns Object Code and message
     */
    get(code) {
        let result = new Object({
            code: 0,
            message: 'Undefined'
        });
        try {
            let statusCode = require(`../entity/Code${code}.json`);
            if (statusCode instanceof Object) {
                if ((undefined !== statusCode.code) && undefined !== statusCode.message) {
                    if (('' !== statusCode.code) && '' !== statusCode.message) {
                        result = statusCode;
                    }
                }
            }
        } catch (err) {
            //continue;
        }
        return result;
    }
};