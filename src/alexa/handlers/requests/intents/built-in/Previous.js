/**
 * Common Utterances: 
 *  • go back
 *  • skip back
 *  • back up
 * 
 * Purpose:
 *  Lets the user go back to a previous item in a list.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.PreviousIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Code to play the previous track
    }
};