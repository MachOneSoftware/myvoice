const Alexa = require('ask-sdk');
const handlers = require("./handlers");

module.exports = Alexa.SkillBuilders.custom()
    .addRequestHandlers(handlers.requests)
    .addErrorHandlers(handlers.errors)
    .lambda();
