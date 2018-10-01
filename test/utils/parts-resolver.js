"use strict";

const d               = require("d")
    , test            = require("tape")
    , requireUncached = require("cjs-module/require-uncached")
    , overrideEnv     = require("process-utils/override-env");

const resolveUncached = callback => {
	const { restoreEnv } = overrideEnv();
	try {
		return requireUncached(
			[
				require.resolve("log4/writer-utils/emitter"), require.resolve("log4"),
				require.resolve("../../utils/parts-resolver"), require.resolve("supports-color"),
				require.resolve("../../lib/colors-support-level"),
				require.resolve("../../lib/inspect-depth")
			],
			() => {
				callback();
				return require("../../utils/parts-resolver");
			}
		);
	} finally {
		restoreEnv();
	}
};

test("formatPartsResolver", t => {
	t.test(t => {
		const formatPartsResolver = resolveUncached(
			() => (require("supports-color").stderr = false)
		);
		const testObj = Object.defineProperties({ foo: "bar" }, { hidden: d("elo") });
		t.deepEqual(
			formatPartsResolver(
				"foo bar %d %f %i %j %o %O then%s", 20.2, 21.21, 22.22, testObj, testObj, testObj,
				"maro", "rest", "arg"
			),
			{
				literals: ["foo bar ", " ", " ", " ", " ", " ", " then", ""],
				substitutions: [
					"20.2", "21.21", "22", "{ \"foo\": \"bar\" }",
					"{ foo: 'bar', [hidden]: 'elo' }", "{ foo: 'bar' }", "maro"
				],
				rest: " 'rest' 'arg'"
			},
			"Supports sprintf formatting with rest params"
		);
		t.end();
	});
	t.test(t => {
		const formatPartsResolver = resolveUncached(
			() => (require("supports-color").stderr = { level: 1 })
		);

		t.deepEqual(
			formatPartsResolver("%j %j", { foo: "bar" }, 1),
			{
				literals: ["", " ", ""],
				substitutions: ["{ \"foo\": \x1b[32m\"bar\"\x1b[39m }", "\x1b[33m1\x1b[39m"],
				rest: null
			},
			"Supports sprintf formatting with colors"
		);
		t.end();
	});
	t.test(t => {
		const formatPartsResolver = resolveUncached(() => {
			process.env.LOG_INSPECT_DEPTH = "1";
			require("supports-color").stderr = false;
		});
		t.deepEqual(
			formatPartsResolver({ foo: 12, bar: { elo: { frelo: 22 } } }),
			{ literals: [], substitutions: [], rest: "{ foo: 12, bar: { elo: [Object] } }" },
			"Supports customization of inspect depth via LOG_INSPECT_DEPTH var"
		);
		t.end();
	});

	t.end();
});