const fs = require('fs');
const jsesc = require('jsesc');

const stringify = (codePoints) => {
	const output = jsesc(codePoints, {
		compact: false,
		es6: true,
		wrap: true,
	});
	return output;
};

const writeDelta = ({ newVersion, oldVersion, identifierStart, identifierPart }) => {
	const identifierData = { identifierStart, identifierPart };
	const output = `// New ID_Start & ID_Continue symbols in Unicode v${
		newVersion } compared to Unicode v${ oldVersion }:\nmodule.exports = ${ stringify(identifierData) };\n`;
	fs.writeFileSync(`./output/delta/identifier-${newVersion}.js`, output);
};

module.exports = writeDelta;
