const { canHandleIntent } = require("./util");

module.exports = {
    canHandle: canHandleIntent(__filename, true),

    handle(handlerInput) {
        const speechText = 'You can say hello to me!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};