const { assert } = require("chai");
const sinon = require("sinon");
const { exportsHandlerTest, getFile } = require("./util");
const handler = getFile(__filename);

describe("HelloWorldIntent", function () {
    let input = { responseBuilder: {} }, responseBuilder;

    beforeEach(() => {
        responseBuilder = {};
        responseBuilder.speak = sinon.fake.returns(responseBuilder);
        responseBuilder.withSimpleCard = sinon.fake.returns(responseBuilder);
        responseBuilder.getResponse = sinon.fake.returns(true);

        input.responseBuilder = responseBuilder;
    });

    it("exports handler", exportsHandlerTest(handler));

    describe("returns hello world", () => {
        it("speech response", async () => {
            await handler.handle(input);
            assert.isTrue(responseBuilder.speak.calledOnce, "Speak not called once");
            assert.equal(responseBuilder.speak.args[0][0], "Hello World!", "Unexpected returned speech");
        });

        it("card title", async () => {
            await handler.handle(input);
            assert.isTrue(responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.equal(responseBuilder.withSimpleCard.args[0][0], "Hello World", "Unexpected card title");
        });

        it("card body", async () => {
            await handler.handle(input);
            assert.isTrue(responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.equal(responseBuilder.withSimpleCard.args[0][1], "Hello World!", "Unexpected card body");
        });
    });
});