const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("ShuffleOnIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});