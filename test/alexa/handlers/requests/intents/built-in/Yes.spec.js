const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("YesIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});