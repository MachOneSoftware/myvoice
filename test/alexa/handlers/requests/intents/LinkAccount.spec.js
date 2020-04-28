const { assert } = require("chai");
const { exportsHandlerTest } = require("../util");
const getFile = require("../../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../getTestRequest");

describe("HelloWorldIntent", function () {
    it("exports handler", exportsHandlerTest(handler));

    describe("responds with", async () => {
        const request = getTestRequest();
        const input = request.input;
        const response = await handler.handle(input);

        it("speech", () => {
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], "Please use the Alexa app to link your account.", "Unexpected returned speech");
        });

        it("link account card", () => {
            assert.isTrue(input.responseBuilder.withLinkAccountCard.calledOnce, "withLinkAccountCard not called once");
        });

        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});