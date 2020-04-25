const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("SelectIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});