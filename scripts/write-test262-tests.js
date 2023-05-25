const fs = require('fs');
const jsesc = require('jsesc');

const _template = require('lodash.template');

const escapeIdentifier = (identifier) => {
	return jsesc(identifier, {
		wrap: false,
		es6: true,
	});
};


const escapeMatchStrings = (matchStrings) => {
	return jsesc(matchStrings, {
		wrap: false,
		es6: true,
		compact: false,
		indent: '  ',
		indentLevel: 1,
		quotes: 'double',
	});
};

const TEMPLATE_OPTIONS = {
	interpolate: /<%=([\s\S]+?)%>/g,
	imports: {
		escapeIdentifier,
	},
};
const template = (input) => {
	const fn = _template(input, TEMPLATE_OPTIONS);
	return fn;
};

const fixLineEndings = (string) => {
	return string.replaceAll(';\n\n}', ';\n}').trimEnd() + '\n';
};

const TEST_VAR_TEMPLATE = fs.readFileSync('./templates/var.template', 'utf8');
const createVarTest = template(TEST_VAR_TEMPLATE);
const TEST_CLASS_TEMPLATE = fs.readFileSync('./templates/class.template', 'utf8');
const createClassTest = template(TEST_CLASS_TEMPLATE);
const TEST_VAR_ESCAPED_TEMPLATE = fs.readFileSync('./templates/var-escaped.template', 'utf8');
const createVarEscapedTest = template(TEST_VAR_ESCAPED_TEMPLATE);
const TEST_CLASS_ESCAPED_TEMPLATE = fs.readFileSync('./templates/class-escaped.template', 'utf8');
const createClassEscapedTest = template(TEST_CLASS_ESCAPED_TEMPLATE);
const PROPERTY_OF_STRINGS_TEMPLATE = fs.readFileSync('./templates/property-of-strings.template', 'utf8');
const createPropertyOfStringsTest = template(PROPERTY_OF_STRINGS_TEMPLATE);

const writeTest262Tests = ({ version, identifierStart, identifierPart }) => {

	// Create IdentifierStart tests.

	if (identifierStart.length) {
		fs.writeFileSync(`./output/test262/start-unicode-${version}.js`, fixLineEndings(createVarTest({
			version: version,
			property: 'ID_Start',
			identifier: identifierStart,
		})));
		fs.writeFileSync(`./output/test262/start-unicode-${version}-class.js`, fixLineEndings(createClassTest({
			version: version,
			property: 'ID_Start',
			identifier: identifierStart,
		})));

		fs.writeFileSync(`./output/test262/start-unicode-${version}-escaped.js`, fixLineEndings(createVarEscapedTest({
			version: version,
			property: 'ID_Start',
			identifier: identifierStart,
			escapedIdentifier: null,
		})));
		fs.writeFileSync(`./output/test262/start-unicode-${version}-class-escaped.js`, fixLineEndings(createClassEscapedTest({
			version: version,
			property: 'ID_Start',
			identifier: identifierStart,
			escapedIdentifier: null,
		})));
	}

	// Create IdentifierPart tests.

	if (identifierPart.length) {
		fs.writeFileSync(`./output/test262/part-unicode-${version}.js`, fixLineEndings(createVarTest({
			version: version,
			property: 'ID_Continue',
			identifier: identifierPart,
		})));
		fs.writeFileSync(`./output/test262/part-unicode-${version}-class.js`, fixLineEndings(createClassTest({
			version: version,
			property: 'ID_Continue',
			identifier: identifierPart,
		})));

		fs.writeFileSync(`./output/test262/part-unicode-${version}-escaped.js`, fixLineEndings(createVarEscapedTest({
			version: version,
			property: 'ID_Continue',
			identifier: null,
			escapedIdentifier: escapeIdentifier(identifierPart),
		})));
		fs.writeFileSync(`./output/test262/part-unicode-${version}-class-escaped.js`, fixLineEndings(createClassEscapedTest({
			version: version,
			property: 'ID_Continue',
			identifier: null,
			escapedIdentifier: escapeIdentifier(identifierPart),
		})));
	}

};

const writeEmojiTest262Tests = ({ version, rgiEmoji }) => {
	// Create RGI_Emoji tests.
	if (rgiEmoji) {
		fs.writeFileSync(`./output/test262/rgi-emoji-${version}.js`, fixLineEndings(createPropertyOfStringsTest({
			version: version,
			matchStrings: escapeMatchStrings(rgiEmoji),
		})));
	}
};

module.exports = {
	writeTest262Tests,
	writeEmojiTest262Tests,
};
