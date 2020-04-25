/**
 * Common Utterances: 
 *  • stop
 *  • off
 *  • shut up
 * 
 * Purpose:
 *  Exits the skill. Your skill must implement this intent and shouldEndSession must be true or null in the response.
 *  For more about canceling and stopping, see https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html#about-canceling-and-stopping
 */

module.exports = {
    handle(handlerInput) {
        const speechText = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};