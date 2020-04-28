module.exports = {
    handle(handlerInput) {
        const speechText = 'Hello World!';

        // 72dpi - Small images are 720px x 480px - Large images are 1200px x 800px
        return handlerInput.responseBuilder
            .speak(speechText)
            .withStandardCard('Hello World', speechText, "https://picsum.photos/720/480", "https://picsum.photos/1200/800")
            .getResponse();
    }
};