const { exportsHandlerTest } = require("../../util");
const getFile = require("../../../../../getFile");
const handler = getFile(__filename);

describe("ShuffleOnIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});