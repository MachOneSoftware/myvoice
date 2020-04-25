const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("NoIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});