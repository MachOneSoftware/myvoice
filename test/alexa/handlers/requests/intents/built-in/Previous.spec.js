const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("PreviousIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});