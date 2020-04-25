const { assert } = require("chai");
module.exports.exportsHandlerTest = (handler) =>
    () => {
        assert.exists(handler, "Handler did not export anything");
        assert.exists(handler.handle, 'Handler did not export "handle" property');
        assert.isFunction(handler.handle, "handle is not a function");
    };

module.exports.getFile = (testFilePath) => require(testFilePath.replace("/test/", "/src/").replace(".spec.", "."));