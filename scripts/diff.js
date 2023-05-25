const regenerate = require('regenerate');
const {writeIdentifierDelta, writeRgiEmojiDelta} = require('./write-delta.js');
const {writeTest262Tests, writeEmojiTest262Tests} = require('./write-test262-tests.js');

const newIdContinueOnly = ({ newVersion, oldVersion }) => {
	const NEW_CONTINUE_ONLY = regenerate()
		.add(require(`@unicode/unicode-${newVersion}/Binary_Property/ID_Continue/code-points.js`))
		.remove(require(`@unicode/unicode-${newVersion}/Binary_Property/ID_Start/code-points.js`));

	const OLD_CONTINUE_ONLY = regenerate()
		.add(require(`@unicode/unicode-${oldVersion}/Binary_Property/ID_Continue/code-points.js`))
		.remove(require(`@unicode/unicode-${oldVersion}/Binary_Property/ID_Start/code-points.js`));

	const DELTA_CONTINUE_ONLY = NEW_CONTINUE_ONLY
		.clone()
		.remove(OLD_CONTINUE_ONLY)
		.toArray();

	return DELTA_CONTINUE_ONLY;
};

const newIdStart = ({ newVersion, oldVersion }) => {
	const NEW_START = regenerate()
		.add(require(`@unicode/unicode-${newVersion}/Binary_Property/ID_Start/code-points.js`));

	const OLD_START = regenerate()
		.add(require(`@unicode/unicode-${oldVersion}/Binary_Property/ID_Start/code-points.js`));

	const DELTA_START = NEW_START
		.clone()
		.remove(OLD_START)
		.toArray();

	return DELTA_START;
};

const newRgiEmoji = ({ newVersion, oldVersion }) => {
	// Check if the old Emoji version exposed RGI_Emoji data.
	const index = require(`unicode-emoji-${oldVersion}`);
	if (!Object.hasOwn(index, 'Sequence_Property') || !index.Sequence_Property.includes('RGI_Emoji')) {
		return;
	}

	const NEW_RGI_EMOJI = new Set(
		require(`unicode-emoji-${newVersion}/Sequence_Property/RGI_Emoji/index.js`));

	const OLD_RGI_EMOJI = new Set(
		require(`unicode-emoji-${oldVersion}/Sequence_Property/RGI_Emoji/index.js`));

	const DELTA_RGI_EMOJI = new Set();

	for (const emoji of NEW_RGI_EMOJI) {
		if (OLD_RGI_EMOJI.has(emoji)) continue;
		DELTA_RGI_EMOJI.add(emoji);
	}

	return Array.from(DELTA_RGI_EMOJI);
};

const compare = ({ newVersion, oldVersion }) => {
	const ID_Start = newIdStart({ newVersion, oldVersion });
	const ID_Continue = newIdContinueOnly({ newVersion, oldVersion });

	// No identifier changes in this Unicode version.
	if (!ID_Start.length && !ID_Continue.length) return;

	const start = String.fromCodePoint(...ID_Start);
	const part = String.fromCodePoint(...ID_Continue);

	writeIdentifierDelta({
		newVersion: newVersion,
		oldVersion: oldVersion,
		identifierStart: start,
		identifierPart: part,
	});

	writeTest262Tests({
		version: newVersion,
		identifierStart: start,
		identifierPart: part,
	});
};

const compareEmoji = ({ newVersion, oldVersion }) => {
	const RGI_Emoji = newRgiEmoji({ newVersion, oldVersion });

	// No RGI_Emoji changes in this Unicode version.
	if (!RGI_Emoji || !RGI_Emoji.length) return;

	writeRgiEmojiDelta({
		newVersion: newVersion,
		oldVersion: oldVersion,
		rgiEmoji: RGI_Emoji,
	});

	writeEmojiTest262Tests({
		version: newVersion,
		rgiEmoji: RGI_Emoji,
	});
};

// ECMAScript 2015 mandated Unicode v5.1.0, so use that as a baseline.
compare({ newVersion:  '5.2.0', oldVersion:  '5.1.0' });
compare({ newVersion:  '6.0.0', oldVersion:  '5.2.0' });
compare({ newVersion:  '6.1.0', oldVersion:  '6.0.0' });
compare({ newVersion:  '6.2.0', oldVersion:  '6.1.0' });
compare({ newVersion:  '6.3.0', oldVersion:  '6.2.0' });
compare({ newVersion:  '7.0.0', oldVersion:  '6.3.0' });
compare({ newVersion:  '8.0.0', oldVersion:  '7.0.0' });
compare({ newVersion:  '9.0.0', oldVersion:  '8.0.0' });
compare({ newVersion: '10.0.0', oldVersion:  '9.0.0' });
compare({ newVersion: '11.0.0', oldVersion: '10.0.0' });
compare({ newVersion: '12.0.0', oldVersion: '11.0.0' });
compare({ newVersion: '13.0.0', oldVersion: '12.0.0' });
compare({ newVersion: '14.0.0', oldVersion: '13.0.0' });
compare({ newVersion: '15.0.0', oldVersion: '14.0.0' });
compare({ newVersion: '15.1.0', oldVersion: '15.0.0' });

// Note that although Unicode Emoji UTS#51 follows the versioning system
// used by the Unicode Standard, the version numbers can be different:
// https://www.unicode.org/reports/tr51/#EmojiVersions
// For example, when Unicode 13.0 was released, so was Emoji 13.0. But
// later, Emoji 13.1 was published while the Unicode version number
// remained at 13.0. Therefore, we use the Emoji version as specified in
// UTS#51 (and not the version of the Unicode Standard itself) to
// version the emoji-specific differences.
compareEmoji({ newVersion: '13.1', oldVersion: '13.0' });
compareEmoji({ newVersion: '14.0', oldVersion: '13.1' });
compareEmoji({ newVersion: '15.0', oldVersion: '14.0' });
compareEmoji({ newVersion: '15.1', oldVersion: '15.0' });
