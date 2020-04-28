const { assert } = require("chai");
const getFile = require("../../../../getFile");
const handlers = getFile(__filename);
const getTestRequest = require("../getTestRequest");

describe("Intents index", function () {
    it("exports intent handlers", () => {
        assert.isArray(handlers, "Index did not return an array of handlers");
        assert.lengthOf(handlers, 20, "Array of handlers was not the expected length");

        for (let h of handlers) {
            assert.isFunction(h.handle, `"${h.intent}" handler handle property is not a function`);
            assert.isFunction(h.canHandle, `"${h.intent}" handler canHandle property is not a function`);
        }
    });

    describe("canHandle", () => {
        describe("returns true with correct request", () => {
            it("HelloWorldIntent", () => {
                const request = getTestRequest("IntentRequest", "HelloWorldIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "HelloWorld")
                    .canHandle(request.input)
                );
            });
            it("ListIntent", () => {
                const request = getTestRequest("IntentRequest", "ListIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "List")
                    .canHandle(request.input)
                );
            });
            it("StandardCardIntent", () => {
                const request = getTestRequest("IntentRequest", "StandardCardIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "StandardCard")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.CancelIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.CancelIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Cancel")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.FallbackIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.FallbackIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Fallback")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.HelpIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.HelpIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Help")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.LoopOffIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.LoopOffIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "LoopOff")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.LoopOnIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.LoopOnIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "LoopOn")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.NextIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.NextIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Next")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.NoIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.NoIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "No")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.PauseIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.PauseIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Pause")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.PreviousIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.PreviousIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Previous")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.RepeatIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.RepeatIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Repeat")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.ResumeIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.ResumeIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Resume")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.SelectIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.SelectIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Select")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.ShuffleOffIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.ShuffleOffIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "ShuffleOff")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.ShuffleOnIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.ShuffleOnIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "ShuffleOn")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.StartOverIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.StartOverIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "StartOver")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.StopIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.StopIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Stop")
                    .canHandle(request.input)
                );
            });
            it("AMAZON.YesIntent", () => {
                const request = getTestRequest("IntentRequest", "AMAZON.YesIntent");
                assert.isTrue(handlers
                    .find(h => h.intent === "Yes")
                    .canHandle(request.input)
                );
            });
        });

        describe("returns false", () => {
            describe("with wrong request type", () => {
                it("HelloWorldIntent", () => {
                    const request = getTestRequest("LaunchRequest", "HelloWorldIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "HelloWorld")
                        .canHandle(request.input)
                    );
                });
                it("ListIntent", () => {
                    const request = getTestRequest("LaunchRequest", "ListIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "List")
                        .canHandle(request.input)
                    );
                });
                it("StandardCardIntent", () => {
                    const request = getTestRequest("LaunchRequest", "StandardCardIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "StandardCard")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.CancelIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.CancelIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Cancel")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.FallbackIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.FallbackIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Fallback")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.HelpIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.HelpIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Help")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.LoopOffIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.LoopOffIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOff")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.LoopOnIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.LoopOnIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "LoopOn")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.NextIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.NextIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Next")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.NoIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.NoIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "No")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.PauseIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.PauseIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Pause")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.PreviousIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.PreviousIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Previous")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.RepeatIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.RepeatIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Repeat")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.ResumeIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.ResumeIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Resume")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.SelectIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.SelectIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Select")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.ShuffleOffIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.ShuffleOffIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOff")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.ShuffleOnIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.ShuffleOnIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "ShuffleOn")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.StartOverIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.StartOverIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "StartOver")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.StopIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.StopIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Stop")
                        .canHandle(request.input)
                    );
                });
                it("AMAZON.YesIntent", () => {
                    const request = getTestRequest("LaunchRequest", "AMAZON.YesIntent");
                    assert.isFalse(handlers
                        .find(h => h.intent === "Yes")
                        .canHandle(request.input)
                    );
                });
            });

            describe("with wrong intent name", () => {
                const input = getTestRequest("IntentRequest", "NotAnIntentIntent").input;

                it("HelloWorldIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "HelloWorld")
                        .canHandle(input)
                    );
                });
                it("ListIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "List")
                        .canHandle(input)
                    );
                });
                it("StandardCardIntent", () => {
                    assert.isFalse(handlers
                        .find(h => h.intent === "StandardCard")
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