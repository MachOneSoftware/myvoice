const { exportsHandlerTest, getFile } = require("./util");
const handler = getFile(__filename);

describe("ListIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});