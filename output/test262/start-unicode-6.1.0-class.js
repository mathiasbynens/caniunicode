// Copyright 2023 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v6.1.0 ID_Start characters are accepted as
  identifier start characters in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #ࢠ;
  #ࢢ;
  #ࢣ;
  #ࢤ;
  #ࢥ;
  #ࢦ;
  #ࢧ;
  #ࢨ;
  #ࢩ;
  #ࢪ;
  #ࢫ;
  #ࢬ;
  #ໞ;
  #ໟ;
  #Ⴧ;
  #Ⴭ;
  #ჽ;
  #ჾ;
  #ჿ;
  #ᮺ;
  #ᮻ;
  #ᮼ;
  #ᮽ;
  #ᮾ;
  #ᮿ;
  #ᳵ;
  #ᳶ;
  #Ⳳ;
  #ⳳ;
  #ⴧ;
  #ⴭ;
  #ⵦ;
  #ⵧ;
  #鿌;
  #Ꞓ;
  #ꞓ;
  #Ɦ;
  #ꟸ;
  #ꟹ;
  #ꫠ;
  #ꫡ;
  #ꫢ;
  #ꫣ;
  #ꫤ;
  #ꫥ;
  #ꫦ;
  #ꫧ;
  #ꫨ;
  #ꫩ;
  #ꫪ;
  #ꫲ;
  #ꫳ;
  #ꫴ;
  #郞;
  #隷;
  #𐦀;
  #𐦁;
  #𐦂;
  #𐦃;
  #𐦄;
  #𐦅;
  #𐦆;
  #𐦇;
  #𐦈;
  #𐦉;
  #𐦊;
  #𐦋;
  #𐦌;
  #𐦍;
  #𐦎;
  #𐦏;
  #𐦐;
  #𐦑;
  #𐦒;
  #𐦓;
  #𐦔;
  #𐦕;
  #𐦖;
  #𐦗;
  #𐦘;
  #𐦙;
  #𐦚;
  #𐦛;
  #𐦜;
  #𐦝;
  #𐦞;
  #𐦟;
  #𐦠;
  #𐦡;
  #𐦢;
  #𐦣;
  #𐦤;
  #𐦥;
  #𐦦;
  #𐦧;
  #𐦨;
  #𐦩;
  #𐦪;
  #𐦫;
  #𐦬;
  #𐦭;
  #𐦮;
  #𐦯;
  #𐦰;
  #𐦱;
  #𐦲;
  #𐦳;
  #𐦴;
  #𐦵;
  #𐦶;
  #𐦷;
  #𐦾;
  #𐦿;
  #𑃐;
  #𑃑;
  #𑃒;
  #𑃓;
  #𑃔;
  #𑃕;
  #𑃖;
  #𑃗;
  #𑃘;
  #𑃙;
  #𑃚;
  #𑃛;
  #𑃜;
  #𑃝;
  #𑃞;
  #𑃟;
  #𑃠;
  #𑃡;
  #𑃢;
  #𑃣;
  #𑃤;
  #𑃥;
  #𑃦;
  #𑃧;
  #𑃨;
  #𑄃;
  #𑄄;
  #𑄅;
  #𑄆;
  #𑄇;
  #𑄈;
  #𑄉;
  #𑄊;
  #𑄋;
  #𑄌;
  #𑄍;
  #𑄎;
  #𑄏;
  #𑄐;
  #𑄑;
  #𑄒;
  #𑄓;
  #𑄔;
  #𑄕;
  #𑄖;
  #𑄗;
  #𑄘;
  #𑄙;
  #𑄚;
  #𑄛;
  #𑄜;
  #𑄝;
  #𑄞;
  #𑄟;
  #𑄠;
  #𑄡;
  #𑄢;
  #𑄣;
  #𑄤;
  #𑄥;
  #𑄦;
  #𑆃;
  #𑆄;
  #𑆅;
  #𑆆;
  #𑆇;
  #𑆈;
  #𑆉;
  #𑆊;
  #𑆋;
  #𑆌;
  #𑆍;
  #𑆎;
  #𑆏;
  #𑆐;
  #𑆑;
  #𑆒;
  #𑆓;
  #𑆔;
  #𑆕;
  #𑆖;
  #𑆗;
  #𑆘;
  #𑆙;
  #𑆚;
  #𑆛;
  #𑆜;
  #𑆝;
  #𑆞;
  #𑆟;
  #𑆠;
  #𑆡;
  #𑆢;
  #𑆣;
  #𑆤;
  #𑆥;
  #𑆦;
  #𑆧;
  #𑆨;
  #𑆩;
  #𑆪;
  #𑆫;
  #𑆬;
  #𑆭;
  #𑆮;
  #𑆯;
  #𑆰;
  #𑆱;
  #𑆲;
  #𑇁;
  #𑇂;
  #𑇃;
  #𑇄;
  #𑚀;
  #𑚁;
  #𑚂;
  #𑚃;
  #𑚄;
  #𑚅;
  #𑚆;
  #𑚇;
  #𑚈;
  #𑚉;
  #𑚊;
  #𑚋;
  #𑚌;
  #𑚍;
  #𑚎;
  #𑚏;
  #𑚐;
  #𑚑;
  #𑚒;
  #𑚓;
  #𑚔;
  #𑚕;
  #𑚖;
  #𑚗;
  #𑚘;
  #𑚙;
  #𑚚;
  #𑚛;
  #𑚜;
  #𑚝;
  #𑚞;
  #𑚟;
  #𑚠;
  #𑚡;
  #𑚢;
  #𑚣;
  #𑚤;
  #𑚥;
  #𑚦;
  #𑚧;
  #𑚨;
  #𑚩;
  #𑚪;
  #𖼀;
  #𖼁;
  #𖼂;
  #𖼃;
  #𖼄;
  #𖼅;
  #𖼆;
  #𖼇;
  #𖼈;
  #𖼉;
  #𖼊;
  #𖼋;
  #𖼌;
  #𖼍;
  #𖼎;
  #𖼏;
  #𖼐;
  #𖼑;
  #𖼒;
  #𖼓;
  #𖼔;
  #𖼕;
  #𖼖;
  #𖼗;
  #𖼘;
  #𖼙;
  #𖼚;
  #𖼛;
  #𖼜;
  #𖼝;
  #𖼞;
  #𖼟;
  #𖼠;
  #𖼡;
  #𖼢;
  #𖼣;
  #𖼤;
  #𖼥;
  #𖼦;
  #𖼧;
  #𖼨;
  #𖼩;
  #𖼪;
  #𖼫;
  #𖼬;
  #𖼭;
  #𖼮;
  #𖼯;
  #𖼰;
  #𖼱;
  #𖼲;
  #𖼳;
  #𖼴;
  #𖼵;
  #𖼶;
  #𖼷;
  #𖼸;
  #𖼹;
  #𖼺;
  #𖼻;
  #𖼼;
  #𖼽;
  #𖼾;
  #𖼿;
  #𖽀;
  #𖽁;
  #𖽂;
  #𖽃;
  #𖽄;
  #𖽐;
  #𖾓;
  #𖾔;
  #𖾕;
  #𖾖;
  #𖾗;
  #𖾘;
  #𖾙;
  #𖾚;
  #𖾛;
  #𖾜;
  #𖾝;
  #𖾞;
  #𖾟;
  #𞸀;
  #𞸁;
  #𞸂;
  #𞸃;
  #𞸅;
  #𞸆;
  #𞸇;
  #𞸈;
  #𞸉;
  #𞸊;
  #𞸋;
  #𞸌;
  #𞸍;
  #𞸎;
  #𞸏;
  #𞸐;
  #𞸑;
  #𞸒;
  #𞸓;
  #𞸔;
  #𞸕;
  #𞸖;
  #𞸗;
  #𞸘;
  #𞸙;
  #𞸚;
  #𞸛;
  #𞸜;
  #𞸝;
  #𞸞;
  #𞸟;
  #𞸡;
  #𞸢;
  #𞸤;
  #𞸧;
  #𞸩;
  #𞸪;
  #𞸫;
  #𞸬;
  #𞸭;
  #𞸮;
  #𞸯;
  #𞸰;
  #𞸱;
  #𞸲;
  #𞸴;
  #𞸵;
  #𞸶;
  #𞸷;
  #𞸹;
  #𞸻;
  #𞹂;
  #𞹇;
  #𞹉;
  #𞹋;
  #𞹍;
  #𞹎;
  #𞹏;
  #𞹑;
  #𞹒;
  #𞹔;
  #𞹗;
  #𞹙;
  #𞹛;
  #𞹝;
  #𞹟;
  #𞹡;
  #𞹢;
  #𞹤;
  #𞹧;
  #𞹨;
  #𞹩;
  #𞹪;
  #𞹬;
  #𞹭;
  #𞹮;
  #𞹯;
  #𞹰;
  #𞹱;
  #𞹲;
  #𞹴;
  #𞹵;
  #𞹶;
  #𞹷;
  #𞹹;
  #𞹺;
  #𞹻;
  #𞹼;
  #𞹾;
  #𞺀;
  #𞺁;
  #𞺂;
  #𞺃;
  #𞺄;
  #𞺅;
  #𞺆;
  #𞺇;
  #𞺈;
  #𞺉;
  #𞺋;
  #𞺌;
  #𞺍;
  #𞺎;
  #𞺏;
  #𞺐;
  #𞺑;
  #𞺒;
  #𞺓;
  #𞺔;
  #𞺕;
  #𞺖;
  #𞺗;
  #𞺘;
  #𞺙;
  #𞺚;
  #𞺛;
  #𞺡;
  #𞺢;
  #𞺣;
  #𞺥;
  #𞺦;
  #𞺧;
  #𞺨;
  #𞺩;
  #𞺫;
  #𞺬;
  #𞺭;
  #𞺮;
  #𞺯;
  #𞺰;
  #𞺱;
  #𞺲;
  #𞺳;
  #𞺴;
  #𞺵;
  #𞺶;
  #𞺷;
  #𞺸;
  #𞺹;
  #𞺺;
  #𞺻;
};
