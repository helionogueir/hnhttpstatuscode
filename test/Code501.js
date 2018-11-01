/**
 * Test Status Code 200
 */
describe("Code 501", function () {

    const code = 501;

    it("Test Success", function () {
        let assert = require('assert');
        let hhttpstatuscode = require(require('path').resolve("./index.js"));
        let result = hhttpstatuscode.get(code);
        assert.ok(typeof result.code === 'number');
        assert.ok(typeof result.message === 'string');
        assert.equal(result.code, code);
        assert.ok(result.message.length >= 1);
    });

    it("Test Error", function () {
        let assert = require('assert');
        let hhttpstatuscode = require(require('path').resolve("./index.js"));
        let success = hhttpstatuscode.get(code);
        let fail = hhttpstatuscode.get(0);
        assert.ok(success.code !== fail.code);
        assert.ok(success.message !== fail.message);
    });

});