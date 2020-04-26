/**
 * Common Utterances: 
 *  • no
 *  • no thanks
 * 
 * Purpose:
 *  Lets the user provide a negative response to a yes/no question for confirmation.
 */

module.exports = {
    handle(handlerInput) {
        // Code to handle no
        
        return handlerInput.responseBuilder.getResponse();
    }
};