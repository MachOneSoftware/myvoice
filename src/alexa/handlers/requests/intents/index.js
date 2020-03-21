const fs = require("fs");
const path = require('path');

const exclude = [path.basename(__filename), "util.js"];
const req = [];

const files = fs.readdirSync("./");
for (let f in files) {
    if (!exclude.includes(f) && path.extname(f) === ".js")
        req.push(require(`./${f}`));
}

module.exports = req;