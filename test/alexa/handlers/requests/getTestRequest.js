const sinon = require("sinon");

module.exports = function (requestType, intentName) {
    const response = { response: true };

    const id = "abc123";
    const responseBuilder = {};
    responseBuilder.speak = sinon.fake.returns(responseBuilder);
    responseBuilder.reprompt = sinon.fake.returns(responseBuilder);
    responseBuilder.withSimpleCard = sinon.fake.returns(responseBuilder);
    responseBuilder.withStandardCard = sinon.fake.returns(responseBuilder);
    responseBuilder.withLinkAccountCard = sinon.fake.returns(responseBuilder);
    responseBuilder.withAskForPermissionsConsentCard = sinon.fake.returns(responseBuilder);
    responseBuilder.withShouldEndSession = sinon.fake.returns(responseBuilder);
    responseBuilder.getResponse = sinon.fake.returns(response);

    const listClient = {
        createList: sinon.fake.resolves({ listId: id }),
        createListItem: sinon.fake.resolves({ id: id }),
        deleteList: sinon.fake(),
        deleteListItem: sinon.fake(),
        getList: sinon.fake.resolves({ listId: id, items: [] }),
        getListItem: sinon.fake(),
        getListsMetadata: sinon.fake.resolves({ lists: [] }),
        updateList: sinon.fake(),
        updateListItem: sinon.fake()
    };

    const intent = {};
    intent.name = intentName || "HelloWorldIntent";

    const request = {};
    request.type = requestType || "IntentRequest";
    request.intent = intent;

    return {
        response,
        listClient,
        input: {
            serviceClientFactory: {
                getListManagementServiceClient: sinon.fake.returns(listClient)
            },
            requestEnvelope: {
                context: { System: { apiAccessToken: id, user: {} } },
                request
            },
            responseBuilder
        }
    };
};