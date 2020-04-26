const { assert } = require("chai");
const { exportsHandlerTest } = require("../../util");
const getFile = require("../../../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../../getTestRequest");

describe("StopIntent", function () {
    it("exports handler", exportsHandlerTest(handler));

    describe("responds with", async () => {
        const speech = "Goodbye!";
        const request = getTestRequest();
        const input = request.input;
        const response = await handler.handle(input);

        it("speech", () => {
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], speech, "Unexpected returned speech");
        });

        it("simple card title", () => {
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.strictEqual(input.responseBuilder.withSimpleCard.args[0][0], "Hello World", "Unexpected card title");
        });

        it("simple card text", () => {
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.strictEqual(input.responseBuilder.withSimpleCard.args[0][1], speech, "Unexpected card body");
        });

        it("should end session", () => {
            assert.isTrue(input.responseBuilder.withShouldEndSession.calledOnce, "withShouldEndSession not called once");
            assert.isTrue(input.responseBuilder.withShouldEndSession.args[0][0]);
        });

        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});