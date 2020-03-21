const path = require("path");

module.exports.getIntentName = function (fileName, isAmazonIntent) {
    let intentName = "";
    if (isAmazonIntent) intentName = "AMAZON.";
    intentName += path
        .basename(fileName)
        .replace(path.extname(filename), "Intent");
    return intentName;
}

/**
 * Returns a canHandle function for the given IntentHandler file.
 */
module.exports.canHandleIntent = (fileName, isAmazonIntent) =>
    (handlerInput) =>
        handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === getIntentName(fileName, isAmazonIntent);
