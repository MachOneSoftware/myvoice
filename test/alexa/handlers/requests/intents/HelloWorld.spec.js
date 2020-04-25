const { exportsHandlerTest, getFile } = require("./util");
const handler = getFile(__filename);

describe("HelloWorldIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});