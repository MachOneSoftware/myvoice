const { assert } = require("chai");
const sinon = require("sinon");
const { exportsHandlerTest, getFile } = require("./util");
const handler = getFile(__filename);

describe("ListIntent", function () {
    let input, responseBuilder,
        createList, createListItem, deleteList, deleteListItem, getList, getListItem, getListsMetadata, updateList, updateListItem;

    beforeEach(() => {
        createList = sinon.fake.resolves({ listId: 123 });
        createListItem = sinon.fake.resolves({ id: 123 });
        deleteList = sinon.fake();
        deleteListItem = sinon.fake();
        getList = sinon.fake.resolves({ listId: 123, items: [] });
        getListItem = sinon.fake();
        getListsMetadata = sinon.fake.resolves({ lists: [] });
        updateList = sinon.fake();
        updateListItem = sinon.fake();

        responseBuilder = {};
        responseBuilder.speak = sinon.fake.returns(responseBuilder);
        responseBuilder.withSimpleCard = sinon.fake.returns(responseBuilder);
        responseBuilder.withAskForPermissionsConsentCard = sinon.fake.returns(responseBuilder);
        responseBuilder.getResponse = sinon.fake.returns(true);

        input = {
            serviceClientFactory: {
                getListManagementServiceClient: () => ({
                    createList, createListItem, deleteList, deleteListItem, getList, getListItem, getListsMetadata, updateList, updateListItem
                })
            },
            requestEnvelope: {
                context: { System: { apiAccessToken: 123 } }
            }, responseBuilder
        };
    });

    it("exports handler", exportsHandlerTest(handler));

    describe("returns ask for permission", () => {
        beforeEach(() => {
            input.requestEnvelope.context.System = null;
        });

        it("speech response", async () => {
            await handler.handle(input);
            assert.isTrue(responseBuilder.speak.calledOnce, "Speak not called once");
            assert.equal(responseBuilder.speak.args[0][0], "Please enable List permissions in the Alexa app.", "Unexpected returned speech");
        });

        it("card", async () => {
            await handler.handle(input);
            assert.isTrue(responseBuilder.withAskForPermissionsConsentCard.calledOnce, "withAskForPermissionsConsentCard not called once");
            assert.isArray(responseBuilder.withAskForPermissionsConsentCard.args[0], "withAskForPermissionsConsentCard did not receive an array");
            assert.sameMembers(responseBuilder.withAskForPermissionsConsentCard.args[0][0], ["read::alexa:household:list", "write::alexa:household:list"],
                "withAskForPermissionsConsentCard did not ask for the correct permissions");
        });
    });

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


    it("all list functions called", async () => {
        await handler.handle(input);
        assert.isTrue(createList.calledOnce, "createList was not called once");
        assert.isTrue(createListItem.calledOnce, "createListItem was not called once");
        assert.isTrue(deleteList.calledOnce, "deleteList was not called once");
        assert.isTrue(deleteListItem.calledOnce, "deleteListItem was not called once");
        assert.isTrue(getList.calledOnce, "getList was not called once");
        assert.isTrue(getListItem.calledOnce, "getListItem was not called once");
        assert.isTrue(getListsMetadata.calledOnce, "getListsMetadata was not called once");
        assert.isTrue(updateList.calledOnce, "updateList was not called once");
        assert.isTrue(updateListItem.calledOnce, "updateListItem was not called once");
    });
});