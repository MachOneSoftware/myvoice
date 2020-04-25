const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("NextIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});