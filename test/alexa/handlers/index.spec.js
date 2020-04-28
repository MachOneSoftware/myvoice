const { assert } = require("chai");
const getFile = require("../../getFile");
const index = getFile(__filename);

describe("handlers/index", () => {
    describe("exports", () => {
        it("request handlers", () => {
            assert.isObject(index);
            assert.isArray(index.requests);
            assert.lengthOf(index.requests, 22);
        });

        it("error handlers", () => {
            assert.isObject(index);
            assert.isArray(index.errors);
            assert.lengthOf(index.errors, 1);
        });
    })
});