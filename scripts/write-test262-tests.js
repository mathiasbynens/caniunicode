const fs = require('fs');
const jsesc = require('jsesc');

const template = require('lodash.template');
const TEST_TEMPLATE = fs.readFileSync('./templates/test.template', 'utf8');
const createTest = template(TEST_TEMPLATE, {
	interpolate: /<%=([\s\S]+?)%>/g,
});
const TEST_ESCAPED_TEMPLATE = fs.readFileSync('./templates/test-escaped.template', 'utf8');
const createEscapedTest = template(TEST_ESCAPED_TEMPLATE, {
	interpolate: /<%=([\s\S]+?)%>/g,
});

const writeTest262Tests = ({ version, identifierStart, identifierPart }) => {
	// Create IdentifierStart tests.
	fs.writeFileSync(`./output/test262/start-unicode-${version}.js`, createTest({
		version: version,
		property: 'ID_Start',
		identifier: identifierStart,
	}));
	fs.writeFileSync(`./output/test262/start-unicode-${version}-escaped.js`, createEscapedTest({
		version: version,
		property: 'ID_Start',
		escapedIdentifier: jsesc(identifierStart, { wrap: false, es6: true, }),
	}));
	// Create IdentifierPart tests.
	fs.writeFileSync(`./output/test262/part-unicode-${version}.js`, createTest({
		version: version,
		property: 'ID_Continue',
		identifier: identifierPart,
	}));
	fs.writeFileSync(`./output/test262/part-unicode-${version}-escaped.js`, createEscapedTest({
		version: version,
		property: 'ID_Continue',
		escapedIdentifier: jsesc(identifierPart, { wrap: false, es6: true, }),
	}));
};

module.exports = writeTest262Tests;
