const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("PauseIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});