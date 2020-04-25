const fs = require("fs");
const path = require('path');

/**
 * Returns the intent name based on the file name.
 * @param {String} fileName 
 * @param {Boolean} isAmazonIntent 
 */
const getIntentName = (fileName, isAmazonIntent) =>
    isAmazonIntent ? "AMAZON." : "" +
        path.basename(fileName)
            .replace(path.extname(fileName), "Intent");

/**
 * Returns a canHandle function for the given IntentHandler file.
 * @param {String} fileName 
 * @param {Boolean} isAmazonIntent 
 */
const canHandleIntent = (fileName, isAmazonIntent) =>
    (handlerInput) =>
        handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name.toLowerCase() === getIntentName(fileName, isAmazonIntent).toLowerCase();

const typeOf = (obj, type) => typeof obj === type;

function importDirectory(dir) {
    let req = [];
    const files = fs.readdirSync(dir);
    console.log(files)
    for (let f of files) {
        if (f.startsWith("_") || f === "index.js") continue;

        const fullPath = path.join(dir, f);
        const stats = fs.lstatSync(fullPath);

        if (stats.isDirectory()) {
            req = req.concat(importDirectory(fullPath));
        } else if (stats.isFile() && [".js", ".ts"].includes(path.extname(f))) {
            const module = require(fullPath);
            if (typeOf(module, "object") && module.handle && typeOf(module.handle, "function")) {
                if (!module.canHandle) {
                    if (dir === "built-in")
                        module.canHandle = canHandleIntent(f, true);
                    else
                        module.canHandle = canHandleIntent(f);
                } else if (!typeOf(module.canHandle, "function")) {
                    throw new Error(`${f}: Invalid property canHandle. Expected function, found ${typeof module.canHandle}.`);
                }
                req.push(module);
            } else {
                throw new Error(`Tried to import invalid intent handler: ${path.join(dir, f)}. Module must export an object containing a handle() function. If this file should not be imported, prepend the file name with an underscore, as in: "_notAHandler.js".`);
            }
        }
    }
    return req;
}

module.exports = importDirectory(__dirname);