const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("LoopOffIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});