const { exportsHandlerTest } = require("../../util");
const getFile = require("../../../../../getFile");
const handler = getFile(__filename);

describe("HelpIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});