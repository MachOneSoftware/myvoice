/**
 * Common Utterances: 
 *  • start over
 *  • restart
 *  • start again
 * 
 * Purpose:
 *  Lets the user request to restart an action, such as restarting a game, transaction, or audio track.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.StartOverIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Start Over
    }
};