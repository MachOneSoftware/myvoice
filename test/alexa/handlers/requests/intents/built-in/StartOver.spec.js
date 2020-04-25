const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("StartOverIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});