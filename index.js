/**
 * Index
 */
module.exports = function () {
    let HttpStatusCode = require('./src/business/HttpStatusCode');
    return (new HttpStatusCode());
}();