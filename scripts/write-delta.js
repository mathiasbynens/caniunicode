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

const writeIdentifierDelta = ({ newVersion, oldVersion, identifierStart, identifierPart }) => {
	const data = { identifierStart, identifierPart };
	const output = `// New ID_Start & ID_Continue symbols in Unicode v${
		newVersion } compared to Unicode v${ oldVersion }:\nmodule.exports = ${ stringify(data) };\n`;
	fs.writeFileSync(`./output/delta/identifier-${newVersion}.js`, output);
};

const writeRgiEmojiDelta = ({ newVersion, oldVersion, rgiEmoji }) => {
	const data = { rgiEmoji };
	const output = `// New RGI_Emoji strings in Emoji v${
		newVersion } compared to Emoji v${ oldVersion }:\nmodule.exports = ${ stringify(data) };\n`;
	fs.writeFileSync(`./output/delta/rgi-emoji-${newVersion}.js`, output);
};

module.exports = {
	writeIdentifierDelta,
	writeRgiEmojiDelta,
};
