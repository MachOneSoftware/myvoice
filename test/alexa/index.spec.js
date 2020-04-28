const { assert } = require("chai");
const sinon = require("sinon");
const getFile = require("../getFile");

const Alexa = require('ask-sdk');
const response = { lambda: true };
const lambda = sinon.fake.returns(response);
const addErrorHandlers = sinon.fake.returns({ lambda });
const addRequestHandlers = sinon.fake.returns({ addErrorHandlers });
Alexa.SkillBuilders.custom = sinon.fake.returns({ addRequestHandlers })

const index = getFile(__filename);

describe("alexa/index", function () {
    describe("exports lambda handler", () => {

        it("custom called once", () => {
            assert.isTrue(Alexa.SkillBuilders.custom.calledOnce);
        });

        it("addRequestHandlers called with requests array", () => {
            assert.isTrue(addRequestHandlers.calledOnce, "addRequestHandlers not called once");
            assert.isArray(addRequestHandlers.args[0][0]);
            assert.lengthOf(addRequestHandlers.args[0][0], 22);
        });

        it("addErrorHandlers called with errors array", () => {
            assert.isTrue(addErrorHandlers.calledOnce, "addErrorHandlers not called once");
            assert.isArray(addErrorHandlers.args[0][0]);
            assert.lengthOf(addErrorHandlers.args[0][0], 1);
        });

        it("returns lambda", () => {
            assert.deepStrictEqual(index, response);
        });
    });
});