/**
 * More info
 * https://developer.amazon.com/en-US/docs/alexa/custom-skills/access-the-alexa-shopping-and-to-do-lists.html
 * http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/classes/services.listmanagement.listmanagementserviceclient.html
 */

module.exports = {
    async handle(handlerInput) {
        // Check for the list write permission. Respond with a request for permission if we don't have it.
        const requestPermission = checkListPermission(handlerInput);
        if (requestPermission) return requestPermission;

        // Get the list client object
        const listClient = handlerInput.serviceClientFactory.getListManagementServiceClient();

        // Get all user's lists
        const meta = await listClient.getListsMetadata();

        // Find the right list
        let list = meta.lists.find(l => l.state === "active" && l.name === "Cool List");

        // If the list doesn't exist, create it
        if (!list)
            list = await listClient.createList({ name: "Cool List", state: "active" });

        // Update name or state for an existing list. State is "active" or "archived".
        const updatedList = await listClient.updateList(list.listId, { name: "My Cool List", state: "archived", version: list.version });

        // Delete the list
        await listClient.deleteList(list.listId);

        // Get list info including items
        const myList = await listClient.getList(list.listId, "active");

        // Find an item
        const listItem = myList.items.find(i => i.value === "Pet the cats");

        // Update/Complete an item
        const updatedListItem = await listClient.updateListItem(list.listId, listItem.id, { status: "completed", value: "Pet the dogs", version: listItem.version });

        // Add to the list. Status is "active" or "completed".
        const newListItem = await listClient.createListItem(list.listId, { status: "active", value: "Design cool Alexa Skill" });

        // Delete list item
        await listClient.deleteListItem(newListItem.id);

        // Get list item by ID
        const myItem = await listClient.getListItem(myList.listId, newListItem.id);


        const speechText = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

/**
 * Checks whether the user has enabled allowed list access.
 * If yes, returns null; otherwise returns a reponse to ask for permission.
 */
function checkListPermission(handlerInput) {
    const { requestEnvelope, responseBuilder } = handlerInput;
    const token = requestEnvelope.context.System
        && requestEnvelope.context.System.apiAccessToken;

    if (!token) {
        return responseBuilder
            .speak(permissionResponse.list)
            .withAskForPermissionsConsentCard([
                "read::alexa:household:list",
                "write::alexa:household:list"
            ])
            .getResponse();
    }
    return null;
}