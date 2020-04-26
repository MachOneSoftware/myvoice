const { assert } = require("chai");
const getFile = require("../../../getFile");
const index = getFile(__filename);

describe("requests/index", () => {
    it("exports request handlers", () => {
        assert.isArray(index);
        assert.lengthOf(index,21);
    });
});