const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("StopIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});