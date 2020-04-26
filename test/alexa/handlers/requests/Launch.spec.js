const { assert } = require("chai");
const { exportsHandlerTest } = require("./util");
const getFile = require("../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("./getTestRequest");

describe("LaunchHandler", () => {
    describe("exports", () => {
        it("handle()", () => exportsHandlerTest(handler));

        it("canHandle()", () => {
            assert.isObject(handler);
            assert.isFunction(handler.canHandle, "canHandle is not a function");
        });
    });

    describe("canHandle", () => {
        describe("returns true with correct request", () => {
            const request = getTestRequest("LaunchRequest");
            assert.isTrue(handler.canHandle(request.input));
        });
        describe("returns false with wrong request type", () => {
            const request = getTestRequest("IntentRequest");
            assert.isFalse(handler.canHandle(request.input));
        });
    })

    describe("returns", () => {
        const speech = "Welcome to the Alexa Skills Kit, you can say hello!";
        const request = getTestRequest();
        const input = request.input;
        const response = handler.handle(input);

        it("speech", () => {
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.equal(input.responseBuilder.speak.args[0][0], speech, "Unexpected returned speech");
        });
        it("reprompt", () => {
            assert.isTrue(input.responseBuilder.reprompt.calledOnce, "Reprompt not called once");
            assert.equal(input.responseBuilder.reprompt.args[0][0], speech, "Unexpected reprompt");
        });
        it("simple card title", () => {
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.equal(input.responseBuilder.withSimpleCard.args[0][0], "Hello World", "Unexpected card title");
        });
        it("simple card text", () => {
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.equal(input.responseBuilder.withSimpleCard.args[0][1], speech, "Unexpected card text");
        });
        it("getRepsonse", () => {
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});