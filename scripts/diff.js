const regenerate = require('regenerate');
const writeDelta = require('./write-delta.js');
const writeTest262Tests = require('./write-test262-tests.js');

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

const compare = ({ newVersion, oldVersion }) => {
	const ID_Start = newIdStart({ newVersion, oldVersion });
	const ID_Continue = newIdContinueOnly({ newVersion, oldVersion });

	// No identifier changes in this Unicode version.
	if (!ID_Start.length && !ID_Continue.length) return;

	const start = String.fromCodePoint(...ID_Start);
	const part = String.fromCodePoint(...ID_Continue);

	writeDelta({
		newVersion: newVersion,
		oldVersion: oldVersion,
		identifierStart: start,
		identifierPart: part,
	})

	writeTest262Tests({
		version: newVersion,
		identifierStart: start,
		identifierPart: part,
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
