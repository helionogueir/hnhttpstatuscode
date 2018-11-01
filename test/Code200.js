/**
 * Test Status Code 200
 */
describe("Code 200", function () {

    const code = 200;

    it("Test Success", function () {
        let assert = require('assert');
        let hnhttpstatuscode = require(require('path').resolve("./index.js"));
        let result = hnhttpstatuscode.get(code);
        assert.ok(typeof result.code === 'number');
        assert.ok(typeof result.message === 'string');
        assert.equal(result.code, code);
        assert.ok(result.message.length >= 1);
    });

    it("Test Error", function () {
        let assert = require('assert');
        let hnhttpstatuscode = require(require('path').resolve("./index.js"));
        let success = hnhttpstatuscode.get(code);
        let fail = hnhttpstatuscode.get(0);
        assert.ok(success.code !== fail.code);
        assert.ok(success.message !== fail.message);
    });

});