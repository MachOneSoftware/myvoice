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
    const req = [];
    const files = fs.readdirSync(dir);
    for (let f in files) {
        const relPath = path.join(dir, f);
        const stats = fs.lstatSync(relPath);

        if (stats.isDirectory() && !relPath.startsWith("_")) {
            // Non-ignored directory
            req = req.concat(importDirectory(relPath));
        } else if (stats.isFile() && !relPath.startsWith("_") && path.basename(relPath) !== path.basename(__filename) && [".js", ".ts"].includes(path.extname(relPath))) {
            // Non-ignored file, is not this file, is a JavaScript or TypeScript file
            const module = require(`./${relPath}`);
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

module.exports = importDirectory("./");