const { assert } = require("chai");
const { getFile } = require("./util");
const handlers = getFile(__filename);

describe("Intents index", function () {
    it("exports intent handlers", () => {
        assert.exists(handlers, "Index did not return anything");
        assert.isArray(handlers, "Index did not return an array of handlers");
        assert.lengthOf(handlers, 19, "Array of handlers was not the expected length");

        for (let h of handlers) {
            assert.exists(h.handle, `"${h.intent}" handler does not return a handle property`);
            assert.isFunction(h.handle, `"${h.intent}" handler handle property is not a function`);
            assert.exists(h.canHandle, `"${h.intent}" handler does not return a canHandle property`);
            assert.isFunction(h.canHandle, `"${h.intent}" handler canHandle property is not a function`);
        }
    });

    describe("canHandle", () => {
        describe("returns true", () => {
            describe("with correct request", () => {
                const input = {
                    requestEnvelope: { request: { type: "IntentRequest", intent: { name: "" } } }
                };
                const setName = (name) => input.requestEnvelope.request.intent.name = name;

                it("HelloWorldIntent", () => {
                    setName("HelloWorldIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "HelloWorld")
                        .canHandle(input)
                    );
                });
                it("AMAZON.CancelIntent", () => {
                    setName("AMAZON.CancelIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Cancel")
                        .canHandle(input)
                    );
                });
                it("AMAZON.FallbackIntent", () => {
                    setName("AMAZON.FallbackIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Fallback")
                        .canHandle(input)
                    );
                });
                it("AMAZON.HelpIntent", () => {
                    setName("AMAZON.HelpIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Help")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOffIntent", () => {
                    setName("AMAZON.LoopOffIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "LoopOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOnIntent", () => {
                    setName("AMAZON.LoopOnIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "LoopOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NextIntent", () => {
                    setName("AMAZON.NextIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Next")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NoIntent", () => {
                    setName("AMAZON.NoIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "No")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PauseIntent", () => {
                    setName("AMAZON.PauseIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Pause")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PreviousIntent", () => {
                    setName("AMAZON.PreviousIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Previous")
                        .canHandle(input)
                    );
                });
                it("AMAZON.RepeatIntent", () => {
                    setName("AMAZON.RepeatIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Repeat")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ResumeIntent", () => {
                    setName("AMAZON.ResumeIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Resume")
                        .canHandle(input)
                    );
                });
                it("AMAZON.SelectIntent", () => {
                    setName("AMAZON.SelectIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Select")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOffIntent", () => {
                    setName("AMAZON.ShuffleOffIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "ShuffleOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOnIntent", () => {
                    setName("AMAZON.ShuffleOnIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "ShuffleOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StartOverIntent", () => {
                    setName("AMAZON.StartOverIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "StartOver")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StopIntent", () => {
                    setName("AMAZON.StopIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Stop")
                        .canHandle(input)
                    );
                });
                it("AMAZON.YesIntent", () => {
                    setName("AMAZON.YesIntent");
                    assert.isTrue(handlers
                        .find(h => h.intent === "Yes")
                        .canHandle(input)
                    );
                });
            });
        });

        describe("returns false", () => {
            describe("with wrong request type", () => {
                const input = {
                    requestEnvelope: { request: { type: "LaunchRequest", intent: { name: "" } } }
                };
                const setName = (name) => input.requestEnvelope.request.intent.name = name;

                it("HelloWorldIntent", () => {
                    setName("HelloWorldIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "HelloWorld")
                        .canHandle(input)
                    );
                });
                it("AMAZON.CancelIntent", () => {
                    setName("AMAZON.CancelIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Cancel")
                        .canHandle(input)
                    );
                });
                it("AMAZON.FallbackIntent", () => {
                    setName("AMAZON.FallbackIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Fallback")
                        .canHandle(input)
                    );
                });
                it("AMAZON.HelpIntent", () => {
                    setName("AMAZON.HelpIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Help")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOffIntent", () => {
                    setName("AMAZON.LoopOffIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOnIntent", () => {
                    setName("AMAZON.LoopOnIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NextIntent", () => {
                    setName("AMAZON.NextIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Next")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NoIntent", () => {
                    setName("AMAZON.NoIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "No")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PauseIntent", () => {
                    setName("AMAZON.PauseIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Pause")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PreviousIntent", () => {
                    setName("AMAZON.PreviousIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Previous")
                        .canHandle(input)
                    );
                });
                it("AMAZON.RepeatIntent", () => {
                    setName("AMAZON.RepeatIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Repeat")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ResumeIntent", () => {
                    setName("AMAZON.ResumeIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Resume")
                        .canHandle(input)
                    );
                });
                it("AMAZON.SelectIntent", () => {
                    setName("AMAZON.SelectIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Select")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOffIntent", () => {
                    setName("AMAZON.ShuffleOffIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOnIntent", () => {
                    setName("AMAZON.ShuffleOnIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StartOverIntent", () => {
                    setName("AMAZON.StartOverIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "StartOver")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StopIntent", () => {
                    setName("AMAZON.StopIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Stop")
                        .canHandle(input)
                    );
                });
                it("AMAZON.YesIntent", () => {
                    setName("AMAZON.YesIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Yes")
                        .canHandle(input)
                    );
                });
            });

            describe("with wrong intent name", () => {
                const input = {
                    requestEnvelope: { request: { type: "IntentRequest", intent: { name: "NotAnIntentIntent" } } }
                };

                it("HelloWorldIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "HelloWorld")
                        .canHandle(input)
                    );
                });
                it("AMAZON.CancelIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Cancel")
                        .canHandle(input)
                    );
                });
                it("AMAZON.FallbackIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Fallback")
                        .canHandle(input)
                    );
                });
                it("AMAZON.HelpIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Help")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOffIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.LoopOnIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NextIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Next")
                        .canHandle(input)
                    );
                });
                it("AMAZON.NoIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "No")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PauseIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Pause")
                        .canHandle(input)
                    );
                });
                it("AMAZON.PreviousIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Previous")
                        .canHandle(input)
                    );
                });
                it("AMAZON.RepeatIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Repeat")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ResumeIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Resume")
                        .canHandle(input)
                    );
                });
                it("AMAZON.SelectIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Select")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOffIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOff")
                        .canHandle(input)
                    );
                });
                it("AMAZON.ShuffleOnIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOn")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StartOverIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "StartOver")
                        .canHandle(input)
                    );
                });
                it("AMAZON.StopIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Stop")
                        .canHandle(input)
                    );
                });
                it("AMAZON.YesIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "Yes")
                        .canHandle(input)
                    );
                });
            });
        });
    })
});