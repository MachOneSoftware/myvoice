const { assert } = require("chai");
const { exportsHandlerTest } = require("../requests/util");
const getFile = require("../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../requests/getTestRequest");

describe("ErrorHandler", () => {
    describe("exports", () => {
        it("handle()", () => exportsHandlerTest(handler));

        it("canHandle()", () => {
            assert.isObject(handler);
            assert.isFunction(handler.canHandle, "canHandle is not a function");
        });
    });

    describe("canHandle", () => {
        describe("returns true with request", () => {
            const request = getTestRequest("LaunchRequest");
            assert.isTrue(handler.canHandle(request.input));
        });
        describe("returns true with another request", () => {
            const request = getTestRequest("IntentRequest", "ErrorIntent");
            assert.isTrue(handler.canHandle(request.input));
        });
    })

    describe("responds with", () => {
        const speech = "Sorry, something went wrong. Please try again.";
        const request = getTestRequest();
        const input = request.input;
        const response = handler.handle(input, { message: "hi" });

        it("speech", () => {
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], speech, "Unexpected returned speech");
        });
        it("reprompt", () => {
            assert.isTrue(input.responseBuilder.reprompt.calledOnce, "Reprompt not called once");
            assert.strictEqual(input.responseBuilder.reprompt.args[0][0], speech, "Unexpected reprompt");
        });
        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});