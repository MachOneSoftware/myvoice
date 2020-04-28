module.exports = {
    handle(handlerInput) {
        const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        if (!accessToken) {
            // The request did not include a token, so tell the user to link
            // accounts and return a LinkAccount card
            const speechText = "Please use the Alexa app to link your account.";

            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            // Do accounty stuff with appropriate response....
        }
    }
};