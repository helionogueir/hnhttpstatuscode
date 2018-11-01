/**
 * Index
 */
module.exports = function () {
    let HttpStatusCode = require(require('path').resolve('./src/business/HttpStatusCode'));
    return (new HttpStatusCode());
}();