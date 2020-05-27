const isSupportedPropertyEscape = (propertyEscape) => {
	try {
		RegExp(`\\p{${ propertyEscape }}`, 'u');
		return true;
	} catch {
		return false;
	}
};

const isSupportedIdentifier = (id) => {
	try {
		Function(`var ${ id };`);
		return true;
	} catch {
		return false;
	}
};

// Note: String.raw is used to work around https://bugs.webkit.org/show_bug.cgi?id=208998.
// It should not be necessary.
// Appropriate `propertyEscape` values can be found by reading
// https://github.com/tc39/ecma262/issues?q=label%3Aunicode.
const testData = new Map([
	[
		'v13.0.0',
		{
			propertyEscape: 'Script=Yezidi',
			identifierStart: String.raw`\u08BE`,
			identifierPart: String.raw`\u0B55`,
		},
	],
	[
		'v12.0.0',
		{
			propertyEscape: 'Script=Wancho',
			identifierStart: String.raw`\u0E86`,
			identifierPart: String.raw`\u0EBA`,
		},
	],
	[
		'v11.0.0',
		{
			propertyEscape: 'Script=Dogra',
			identifierStart: String.raw`\u0560`,
			identifierPart: String.raw`\u07FD`,
		},
	],
	[
		'v10.0.0',
		{
			// The initial property escapes spec was based on Unicode v10, so this is the baseline.
			propertyEscape: 'Script=Devanagari',
			identifierStart: String.raw`\u0860`,
			identifierPart: String.raw`\u0AFA`,
		},
	],
	[
		'v9.0.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u08B6`,
			identifierPart: String.raw`\u08D4`,
		},
	],
	[
		'v8.0.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u08B3`,
			identifierPart: String.raw`\u08E3`,
		},
	],
	[
		'v7.0.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u037F`,
			identifierPart: String.raw`\u08FF`,
		},
	],
	[
		'v6.1.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u08A0`,
			identifierPart: String.raw`\u08E4`,
		},
	],
	[
		'v6.0.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u0526`,
			identifierPart: String.raw`\u065F`,
		},
	],
	[
		'v5.2.0',
		{
			propertyEscape: false,
			identifierStart: String.raw`\u0524`,
			identifierPart: String.raw`\u0816`,
		},
	],
]);

const findSupportedUnicodeVersionProperty = () => {
	for (const [version, data] of testData) {
		const { propertyEscape } = data;
		if (!propertyEscape) {
			return false;
		}
		if (isSupportedPropertyEscape(propertyEscape)) {
			return version;
		}
	}
	return false;
};

const findSupportedUnicodeVersionIdentifier = () => {
	for (const [version, data] of testData) {
		const { identifierStart, identifierPart } = data;
		const identifier = `${identifierStart}${identifierPart}`;
		if (isSupportedIdentifier(identifier)) {
			return version;
		}
	}
	return false;
};

const LATEST_UNICODE_VERSION = 'v13.0.0';
const findSupportedUnicodeVersions = () => {
	const propertyVersion = findSupportedUnicodeVersionProperty();
	const identifierVersion = findSupportedUnicodeVersionIdentifier();
	const propertySupportListItem = document.querySelector('.feature-support-property-escapes .environment-current-browser');
	const propertySupportVersion = propertySupportListItem.querySelector('.version');
	if (propertyVersion) {
		const element = document.querySelector('.version-property-escapes');
		propertySupportListItem.classList.replace('unknown-support', propertyVersion === LATEST_UNICODE_VERSION ? 'has-support' : 'partial-support');
		element.textContent = propertyVersion;
		propertySupportVersion.textContent = propertyVersion;
	} else {
		const element = document.querySelector('.supports-property-escapes');
		element.textContent = element.dataset.noSupportText;
		propertySupportListItem.classList.replace('unknown-support', 'no-support');
		propertySupportVersion.remove();
	}
	document.querySelector('.version-identifiers').textContent = identifierVersion;
	const identifierSupportListItem = document.querySelector('.feature-support-identifiers .environment-current-browser');
	identifierSupportListItem.classList.replace('unknown-support', identifierVersion === LATEST_UNICODE_VERSION ? 'has-support' : 'partial-support');
	const identifierSupportVersion = identifierSupportListItem.querySelector('.version');
	identifierSupportVersion.textContent = identifierVersion;
};

findSupportedUnicodeVersions();
