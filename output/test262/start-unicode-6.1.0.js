// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v6.1.0 ID_Start characters are accepted as
  identifier start characters.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var ࢠࢢࢣࢤࢥࢦࢧࢨࢩࢪࢫࢬໞໟჇჍჽჾჿᮺᮻᮼᮽᮾᮿᳵᳶⳲⳳⴧⴭⵦⵧ鿌ꞒꞓꞪꟸꟹꫠꫡꫢꫣꫤꫥꫦꫧꫨꫩꫪꫲꫳꫴ郞隷𐦀𐦁𐦂𐦃𐦄𐦅𐦆𐦇𐦈𐦉𐦊𐦋𐦌𐦍𐦎𐦏𐦐𐦑𐦒𐦓𐦔𐦕𐦖𐦗𐦘𐦙𐦚𐦛𐦜𐦝𐦞𐦟𐦠𐦡𐦢𐦣𐦤𐦥𐦦𐦧𐦨𐦩𐦪𐦫𐦬𐦭𐦮𐦯𐦰𐦱𐦲𐦳𐦴𐦵𐦶𐦷𐦾𐦿𑃐𑃑𑃒𑃓𑃔𑃕𑃖𑃗𑃘𑃙𑃚𑃛𑃜𑃝𑃞𑃟𑃠𑃡𑃢𑃣𑃤𑃥𑃦𑃧𑃨𑄃𑄄𑄅𑄆𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑆃𑆄𑆅𑆆𑆇𑆈𑆉𑆊𑆋𑆌𑆍𑆎𑆏𑆐𑆑𑆒𑆓𑆔𑆕𑆖𑆗𑆘𑆙𑆚𑆛𑆜𑆝𑆞𑆟𑆠𑆡𑆢𑆣𑆤𑆥𑆦𑆧𑆨𑆩𑆪𑆫𑆬𑆭𑆮𑆯𑆰𑆱𑆲𑇁𑇂𑇃𑇄𑚀𑚁𑚂𑚃𑚄𑚅𑚆𑚇𑚈𑚉𑚊𑚋𑚌𑚍𑚎𑚏𑚐𑚑𑚒𑚓𑚔𑚕𑚖𑚗𑚘𑚙𑚚𑚛𑚜𑚝𑚞𑚟𑚠𑚡𑚢𑚣𑚤𑚥𑚦𑚧𑚨𑚩𑚪𖼀𖼁𖼂𖼃𖼄𖼅𖼆𖼇𖼈𖼉𖼊𖼋𖼌𖼍𖼎𖼏𖼐𖼑𖼒𖼓𖼔𖼕𖼖𖼗𖼘𖼙𖼚𖼛𖼜𖼝𖼞𖼟𖼠𖼡𖼢𖼣𖼤𖼥𖼦𖼧𖼨𖼩𖼪𖼫𖼬𖼭𖼮𖼯𖼰𖼱𖼲𖼳𖼴𖼵𖼶𖼷𖼸𖼹𖼺𖼻𖼼𖼽𖼾𖼿𖽀𖽁𖽂𖽃𖽄𖽐𖾓𖾔𖾕𖾖𖾗𖾘𖾙𖾚𖾛𖾜𖾝𖾞𖾟𞸀𞸁𞸂𞸃𞸅𞸆𞸇𞸈𞸉𞸊𞸋𞸌𞸍𞸎𞸏𞸐𞸑𞸒𞸓𞸔𞸕𞸖𞸗𞸘𞸙𞸚𞸛𞸜𞸝𞸞𞸟𞸡𞸢𞸤𞸧𞸩𞸪𞸫𞸬𞸭𞸮𞸯𞸰𞸱𞸲𞸴𞸵𞸶𞸷𞸹𞸻𞹂𞹇𞹉𞹋𞹍𞹎𞹏𞹑𞹒𞹔𞹗𞹙𞹛𞹝𞹟𞹡𞹢𞹤𞹧𞹨𞹩𞹪𞹬𞹭𞹮𞹯𞹰𞹱𞹲𞹴𞹵𞹶𞹷𞹹𞹺𞹻𞹼𞹾𞺀𞺁𞺂𞺃𞺄𞺅𞺆𞺇𞺈𞺉𞺋𞺌𞺍𞺎𞺏𞺐𞺑𞺒𞺓𞺔𞺕𞺖𞺗𞺘𞺙𞺚𞺛𞺡𞺢𞺣𞺥𞺦𞺧𞺨𞺩𞺫𞺬𞺭𞺮𞺯𞺰𞺱𞺲𞺳𞺴𞺵𞺶𞺷𞺸𞺹𞺺𞺻;
