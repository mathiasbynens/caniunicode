const fs = require('fs');
const jsesc = require('jsesc');

const template = require('lodash.template');
const TEMPLATE_OPTIONS = {
	interpolate: /<%=([\s\S]+?)%>/g,
};
const TEST_VAR_TEMPLATE = fs.readFileSync('./templates/var.template', 'utf8');
const createVarTest = template(TEST_VAR_TEMPLATE, TEMPLATE_OPTIONS);
const TEST_CLASS_TEMPLATE = fs.readFileSync('./templates/class.template', 'utf8');
const createClassTest = template(TEST_CLASS_TEMPLATE, TEMPLATE_OPTIONS);
const TEST_VAR_ESCAPED_TEMPLATE = fs.readFileSync('./templates/var-escaped.template', 'utf8');
const createVarEscapedTest = template(TEST_VAR_ESCAPED_TEMPLATE, TEMPLATE_OPTIONS);
const TEST_CLASS_ESCAPED_TEMPLATE = fs.readFileSync('./templates/class-escaped.template', 'utf8');
const createClassEscapedTest = template(TEST_CLASS_ESCAPED_TEMPLATE, TEMPLATE_OPTIONS);

const writeTest262Tests = ({ version, identifierStart, identifierPart }) => {

	// Create IdentifierStart tests.

	fs.writeFileSync(`./output/test262/start-unicode-${version}.js`, createVarTest({
		version: version,
		property: 'ID_Start',
		identifier: identifierStart,
	}));
	fs.writeFileSync(`./output/test262/start-unicode-${version}-class.js`, createClassTest({
		version: version,
		property: 'ID_Start',
		identifier: identifierStart,
	}));

	fs.writeFileSync(`./output/test262/start-unicode-${version}-escaped.js`, createVarEscapedTest({
		version: version,
		property: 'ID_Start',
		escapedIdentifier: jsesc(identifierStart, { wrap: false, es6: true, }),
	}));
	fs.writeFileSync(`./output/test262/start-unicode-${version}-class-escaped.js`, createClassEscapedTest({
		version: version,
		property: 'ID_Start',
		escapedIdentifier: jsesc(identifierStart, { wrap: false, es6: true, }),
	}));

	// Create IdentifierPart tests.

	fs.writeFileSync(`./output/test262/part-unicode-${version}.js`, createVarTest({
		version: version,
		property: 'ID_Continue',
		identifier: identifierPart,
	}));
	fs.writeFileSync(`./output/test262/part-unicode-${version}-class.js`, createClassTest({
		version: version,
		property: 'ID_Continue',
		identifier: identifierPart,
	}));

	fs.writeFileSync(`./output/test262/part-unicode-${version}-escaped.js`, createVarEscapedTest({
		version: version,
		property: 'ID_Continue',
		escapedIdentifier: jsesc(identifierPart, { wrap: false, es6: true, }),
	}));
	fs.writeFileSync(`./output/test262/part-unicode-${version}-class-escaped.js`, createClassEscapedTest({
		version: version,
		property: 'ID_Continue',
		escapedIdentifier: jsesc(identifierPart, { wrap: false, es6: true, }),
	}));

};

module.exports = writeTest262Tests;
