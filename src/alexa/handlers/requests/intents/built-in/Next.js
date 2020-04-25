/**
 * Common Utterances: 
 *  • next
 *  • skip
 *  • skip forward
 * 
 * Purpose:
 *  Lets the user navigate to the next item in a list.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.NextIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Code to skip to the next track
    }
};