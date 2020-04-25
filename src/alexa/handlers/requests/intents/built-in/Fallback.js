/**
 * Common Utterances: 
 *  Varies. This intent uses an out-of-domain model generated based on your interaction model.
 *  See https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html#fallback
 * 
 * Purpose:
 *  Provides a fallback for user utterances that do not match any of your skill's intents. 
 *  Your AMAZON.FallbackIntent handler can give the user more details on what your skill does and how they can interact with it.
 */

module.exports = {
    handle(handlerInput) {
        const speechText = "I can't help with that. You can say hello to me.";

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};