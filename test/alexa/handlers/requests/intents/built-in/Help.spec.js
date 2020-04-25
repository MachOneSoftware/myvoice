const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("HelpIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});