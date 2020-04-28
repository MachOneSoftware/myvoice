const { assert } = require("chai");
const { exportsHandlerTest } = require("../util");
const getFile = require("../../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../getTestRequest");

describe("HelloWorldIntent", function () {
    it("exports handler", exportsHandlerTest(handler));

    describe("responds with", async () => {
        const speech = "Hello World!";
        const request = getTestRequest();
        const input = request.input;
        const response = await handler.handle(input);

        it("speech", () => {
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], speech, "Unexpected returned speech");
        });

        it("standard card title", () => {
            assert.isTrue(input.responseBuilder.withStandardCard.calledOnce, "withStandardCard not called once");
            assert.strictEqual(input.responseBuilder.withStandardCard.args[0][0], "Hello World", "Unexpected card title");
        });

        it("standard card text", () => {
            assert.isTrue(input.responseBuilder.withStandardCard.calledOnce, "withStandardCard not called once");
            assert.strictEqual(input.responseBuilder.withStandardCard.args[0][1], speech, "Unexpected card body");
        });

        it("standard card small image", () => {
            assert.isTrue(input.responseBuilder.withStandardCard.calledOnce, "withStandardCard not called once");
            assert.strictEqual(input.responseBuilder.withStandardCard.args[0][2], "https://picsum.photos/720/480", "Unexpected card body");
        });

        it("standard card large image", () => {
            assert.isTrue(input.responseBuilder.withStandardCard.calledOnce, "withStandardCard not called once");
            assert.strictEqual(input.responseBuilder.withStandardCard.args[0][3], "https://picsum.photos/1200/800", "Unexpected card body");
        });

        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});