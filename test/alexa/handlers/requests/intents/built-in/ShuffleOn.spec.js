const { assert } = require("chai");
const { exportsHandlerTest } = require("../../util");
const getFile = require("../../../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../../getTestRequest");

describe("ShuffleOnIntent", function () {
    it("exports handler", exportsHandlerTest(handler));

    describe("responds with", async () => {
        const request = getTestRequest();
        const input = request.input;
        const response = await handler.handle(input);

        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});