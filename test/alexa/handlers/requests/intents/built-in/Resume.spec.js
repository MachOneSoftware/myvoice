const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("ResumeIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});