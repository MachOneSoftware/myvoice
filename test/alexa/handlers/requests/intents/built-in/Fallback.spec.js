const { exportsHandlerTest } = require("../../util");
const getFile = require("../../../../../getFile");
const handler = getFile(__filename);

describe("FallbackIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});