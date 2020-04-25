const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("FallbackIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});