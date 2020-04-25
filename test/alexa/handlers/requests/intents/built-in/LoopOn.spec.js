const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("LoopOnIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});