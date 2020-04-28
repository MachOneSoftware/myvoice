module.exports = {
    canHandle: () => true,

    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        const speech = "Sorry, something went wrong. Please try again.";
        return handlerInput.responseBuilder
            .speak(speech)
            .reprompt(speech)
            .getResponse();
    },
};