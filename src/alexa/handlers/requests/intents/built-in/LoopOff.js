/**
 * Common Utterances: 
 *  • loop off
 * 
 * Purpose:
 *  Lets the user request that the skill turn off a loop or repeat mode, usually for audio skills that stream a playlist of tracks.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.LoopOffIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Code to handle loop off

        return handlerInput.responseBuilder.getResponse();
    }
};