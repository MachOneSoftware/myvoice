/**
 * Common Utterances: 
 *  • help
 *  • help me
 *  • can you help me
 * 
 * Purpose:
 *  Provides help about how to use the skill. 
 *  For more information about contextualized help, see the Help messages section in the 
 *  Alexa Design Guide (https://developer.amazon.com/en-US/docs/alexa/alexa-design/adaptable.html#provide-contextual-help)
 */

module.exports = {
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};