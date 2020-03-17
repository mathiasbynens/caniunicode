// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v11.0.0 ID_Continue characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var _\u07FD\u08D3\u09FE\u0C04\uA8FF\u{10D24}\u{10D25}\u{10D26}\u{10D27}\u{10D30}\u{10D31}\u{10D32}\u{10D33}\u{10D34}\u{10D35}\u{10D36}\u{10D37}\u{10D38}\u{10D39}\u{10F46}\u{10F47}\u{10F48}\u{10F49}\u{10F4A}\u{10F4B}\u{10F4C}\u{10F4D}\u{10F4E}\u{10F4F}\u{10F50}\u{11145}\u{11146}\u{111C9}\u{1133B}\u{1145E}\u{1182C}\u{1182D}\u{1182E}\u{1182F}\u{11830}\u{11831}\u{11832}\u{11833}\u{11834}\u{11835}\u{11836}\u{11837}\u{11838}\u{11839}\u{1183A}\u{11D8A}\u{11D8B}\u{11D8C}\u{11D8D}\u{11D8E}\u{11D90}\u{11D91}\u{11D93}\u{11D94}\u{11D95}\u{11D96}\u{11D97}\u{11DA0}\u{11DA1}\u{11DA2}\u{11DA3}\u{11DA4}\u{11DA5}\u{11DA6}\u{11DA7}\u{11DA8}\u{11DA9}\u{11EF3}\u{11EF4}\u{11EF5}\u{11EF6};
