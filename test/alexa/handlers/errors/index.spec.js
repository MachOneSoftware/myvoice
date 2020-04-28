const { assert } = require("chai");
const getFile = require("../../../getFile");
const index = getFile(__filename);

describe("errors/index", () => {
    it("exports error handlers", () => {
        assert.isArray(index);
        assert.lengthOf(index, 1);
    });
});