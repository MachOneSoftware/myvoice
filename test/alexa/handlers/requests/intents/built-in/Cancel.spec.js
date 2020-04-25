const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("CancelIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});