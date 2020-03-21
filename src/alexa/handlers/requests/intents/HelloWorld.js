const { canHandleIntent } = require("./util");

module.exports = {
    canHandle: canHandleIntent(__filename),

    handle(handlerInput) {
        const speechText = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};