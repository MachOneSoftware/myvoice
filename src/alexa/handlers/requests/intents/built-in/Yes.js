/**
 * Common Utterances: 
 *  • yes
 *  • yes please
 *  • sure
 * 
 * Purpose:
 *  Lets the user provide a positive response to a yes/no question for confirmation.
 */

module.exports = {
    handle(handlerInput) {
        // Code to handle yes

        return handlerInput.responseBuilder.getResponse();
    }
};