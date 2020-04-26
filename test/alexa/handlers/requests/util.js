const { assert } = require("chai");
module.exports.exportsHandlerTest = (handler) =>
    () => {
        assert.isObject(handler, "Handler did not export anything");
        assert.isFunction(handler.handle, "handle is not a function");
    };