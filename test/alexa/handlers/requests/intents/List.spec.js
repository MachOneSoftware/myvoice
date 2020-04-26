const { assert } = require("chai");
const { exportsHandlerTest } = require("../util");
const getFile = require("../../../../getFile");
const handler = getFile(__filename);
const getTestRequest = require("../getTestRequest");

describe("ListIntent", function () {
    let request, input, listClient;

    beforeEach(() => {
        request = getTestRequest();
        input = request.input, listClient = request.listClient;
    });

    it("exports handler", exportsHandlerTest(handler));

    describe("returns ask for permission", () => {
        beforeEach(() => {
            input.requestEnvelope.context.System = null;
        });

        it("speech response", async () => {
            await handler.handle(input);
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], "Please enable List permissions in the Alexa app.", "Unexpected returned speech");
        });

        it("card", async () => {
            await handler.handle(input);
            assert.isTrue(input.responseBuilder.withAskForPermissionsConsentCard.calledOnce, "withAskForPermissionsConsentCard not called once");
            assert.isArray(input.responseBuilder.withAskForPermissionsConsentCard.args[0], "withAskForPermissionsConsentCard did not receive an array");
            assert.sameMembers(input.responseBuilder.withAskForPermissionsConsentCard.args[0][0], ["read::alexa:household:list", "write::alexa:household:list"],
                "withAskForPermissionsConsentCard did not ask for the correct permissions");
        });
    });

    describe("responds with", () => {
        it("speech", async () => {
            await handler.handle(input);
            assert.isTrue(input.responseBuilder.speak.calledOnce, "Speak not called once");
            assert.strictEqual(input.responseBuilder.speak.args[0][0], "Hello World!", "Unexpected returned speech");
        });

        it("simple card title", async () => {
            await handler.handle(input);
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.strictEqual(input.responseBuilder.withSimpleCard.args[0][0], "Hello World", "Unexpected card title");
        });

        it("simple card text", async () => {
            await handler.handle(input);
            assert.isTrue(input.responseBuilder.withSimpleCard.calledOnce, "withSimpleCard not called once");
            assert.strictEqual(input.responseBuilder.withSimpleCard.args[0][1], "Hello World!", "Unexpected card body");
        });

        it("getResponse", async () => {
            const response = await handler.handle(input);
            assert.isTrue(input.responseBuilder.getResponse.calledOnce, "getRepsonse not called once");
            assert.deepStrictEqual(response, request.response, "Unexpected response");
        });
    });

    it("getListManagementServiceClient called", async () => {
        await handler.handle(input);
        assert.isTrue(input.serviceClientFactory.getListManagementServiceClient.calledOnce, "getListManagementServiceClient not called once");
    });

    it("createList called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.createList.calledOnce, "createList was not called once");
    });

    it("createListItem called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.createListItem.calledOnce, "createListItem was not called once");
    });

    it("deleteList called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.deleteList.calledOnce, "deleteList was not called once");
    });

    it("deleteListItem called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.deleteListItem.calledOnce, "deleteListItem was not called once");
    });

    it("getList called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.getList.calledOnce, "getList was not called once");
    });

    it("getListItem called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.getListItem.calledOnce, "getListItem was not called once");
    });

    it("getListsMetadata called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.getListsMetadata.calledOnce, "getListsMetadata was not called once");
    });

    it("updateList called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.updateList.calledOnce, "updateList was not called once");
    });

    it("updateListItem called", async () => {
        await handler.handle(input);
        assert.isTrue(listClient.updateListItem.calledOnce, "updateListItem was not called once");
    });
});