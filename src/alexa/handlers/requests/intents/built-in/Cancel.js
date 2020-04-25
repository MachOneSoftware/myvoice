/**
 * Common Utterances: 
 *  • cancel
 *  • never mind
 *  • forget it
 * 
 * Purpose:
 *  Either of the following:
 *      • Lets the user cancel a transaction or task (but remain in the skill)
 *      • Lets the user completely exit the skill
 * 
 *  For more about canceling and stopping, see https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html#about-canceling-and-stopping.
 *  
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using 
 *  your invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.CancelIntent is not in your intent schema.
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