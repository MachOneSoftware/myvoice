/**
 * Common Utterances: 
 *  • repeat
 *  • say that again
 *  • repeat that
 * 
 * Purpose:
 *  Lets the user request to repeat the last action.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.RepeatIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Code to handle repeat

        return handlerInput.responseBuilder.getResponse();
    }
};