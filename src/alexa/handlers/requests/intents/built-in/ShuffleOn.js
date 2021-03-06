/**
 * Common Utterances: 
 *  • shuffle
 *  • shuffle on
 *  • shuffle the music
 *  • shuffle mode
 * 
 * Purpose:
 *  Lets the user request that the skill turn on a shuffle mode, usually for audio skills that stream a playlist of tracks.
 *  For skills that stream audio using the AudioPlayer interface, users can invoke this intent without using your 
 *  invocation name if your skill is currently playing audio or was the most recent skill to play audio. 
 *  The intent is sent to your skill in this case even if AMAZON.ShuffleOnIntent is not in your intent schema.
 */

module.exports = {
    handle(handlerInput) {
        // Code to handle shuffle on

        return handlerInput.responseBuilder.getResponse();
    }
};