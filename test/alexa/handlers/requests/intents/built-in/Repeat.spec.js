const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("RepeatIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});