module.exports = [
    require("./LaunchHandler"),
    require("./SessionEndedHandler"),
    ...require("./intent")
];