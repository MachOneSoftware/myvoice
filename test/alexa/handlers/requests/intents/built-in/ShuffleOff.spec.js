const { exportsHandlerTest, getFile } = require("../util");
const handler = getFile(__filename);

describe("ShuffleOffIntent", function () {
    it("exports handler", exportsHandlerTest(handler));
});