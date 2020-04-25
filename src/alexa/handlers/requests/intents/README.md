# Intent Handlers

Your custom intent handlers will go in this folder. They will automatically be loaded into your skill's intent handlers when you add a file. Files are loaded recursively, so subfolders will also be loaded. To exclude a file or subdirectory from being loaded as a handler, simply prepend its name with an underscore, as in "_notAHandler.js". 

Each handler should export an object containing a handle() function, and an optional canHandle() function. These are the standard functions required by the ASK SDK. If canHandle is not provided, the default canHandle function checks the following:

* The request type is an IntentRequest
* The requested intent name matches \<FileNameWithoutExtension\>Intent

For example, the file HelloWorld.js would handle an intent called HelloWorldIntent. Intent name matching is not case sensitive.

## Standard Built-in Intents

Handler files for the [Amazon Standard Built-in Intents](https://developer.amazon.com/en-US/docs/alexa/custom-skills/implement-the-built-in-intents.html) are included in the [built-in](./built-in) directory.