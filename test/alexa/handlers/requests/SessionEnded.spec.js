const { assert } = require("chai");
const { exportsHandlerTest } = require("./util");
const getFile = require("../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("./getTestRequest");

describe("SessionEndedHandler", () => {
    describe("exports", () => {
        it("handle()", () => exportsHandlerTest(handler));

        it("canHandle()", () => {
            assert.isObject(handler, "Handler did not export anything");
            assert.isFunction(handler.canHandle, "canHandle is not a function");
        });
    });

    describe("canHandle", () => {
        describe("returns true with correct request", () => {
            const request = getTestRequest("SessionEndedRequest");
            assert.isTrue(handler.canHandle(request.input));
        });
        describe("returns false with wrong request type", () => {
            const request = getTestRequest("IntentRequest");
            assert.isFalse(handler.canHandle(request.input));
        });
    });

    describe("getResponse", () => {
        const request = getTestRequest();
        const response = handler.handle(request.input);

        it("called once", () => {
            assert.isTrue(request.input.responseBuilder.getResponse.calledOnce, "getResponse not called once");
        });

        it("returned", () => {
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });
});