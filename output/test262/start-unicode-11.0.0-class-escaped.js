// Copyright 2023 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v11.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
  in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #\u0560;
  #\u0588;
  #\u05EF;
  #\u1878;
  #\u1C90;
  #\u1C91;
  #\u1C92;
  #\u1C93;
  #\u1C94;
  #\u1C95;
  #\u1C96;
  #\u1C97;
  #\u1C98;
  #\u1C99;
  #\u1C9A;
  #\u1C9B;
  #\u1C9C;
  #\u1C9D;
  #\u1C9E;
  #\u1C9F;
  #\u1CA0;
  #\u1CA1;
  #\u1CA2;
  #\u1CA3;
  #\u1CA4;
  #\u1CA5;
  #\u1CA6;
  #\u1CA7;
  #\u1CA8;
  #\u1CA9;
  #\u1CAA;
  #\u1CAB;
  #\u1CAC;
  #\u1CAD;
  #\u1CAE;
  #\u1CAF;
  #\u1CB0;
  #\u1CB1;
  #\u1CB2;
  #\u1CB3;
  #\u1CB4;
  #\u1CB5;
  #\u1CB6;
  #\u1CB7;
  #\u1CB8;
  #\u1CB9;
  #\u1CBA;
  #\u1CBD;
  #\u1CBE;
  #\u1CBF;
  #\u312F;
  #\u9FEB;
  #\u9FEC;
  #\u9FED;
  #\u9FEE;
  #\u9FEF;
  #\uA7AF;
  #\uA7B8;
  #\uA7B9;
  #\uA8FE;
  #\u{10A34};
  #\u{10A35};
  #\u{10D00};
  #\u{10D01};
  #\u{10D02};
  #\u{10D03};
  #\u{10D04};
  #\u{10D05};
  #\u{10D06};
  #\u{10D07};
  #\u{10D08};
  #\u{10D09};
  #\u{10D0A};
  #\u{10D0B};
  #\u{10D0C};
  #\u{10D0D};
  #\u{10D0E};
  #\u{10D0F};
  #\u{10D10};
  #\u{10D11};
  #\u{10D12};
  #\u{10D13};
  #\u{10D14};
  #\u{10D15};
  #\u{10D16};
  #\u{10D17};
  #\u{10D18};
  #\u{10D19};
  #\u{10D1A};
  #\u{10D1B};
  #\u{10D1C};
  #\u{10D1D};
  #\u{10D1E};
  #\u{10D1F};
  #\u{10D20};
  #\u{10D21};
  #\u{10D22};
  #\u{10D23};
  #\u{10F00};
  #\u{10F01};
  #\u{10F02};
  #\u{10F03};
  #\u{10F04};
  #\u{10F05};
  #\u{10F06};
  #\u{10F07};
  #\u{10F08};
  #\u{10F09};
  #\u{10F0A};
  #\u{10F0B};
  #\u{10F0C};
  #\u{10F0D};
  #\u{10F0E};
  #\u{10F0F};
  #\u{10F10};
  #\u{10F11};
  #\u{10F12};
  #\u{10F13};
  #\u{10F14};
  #\u{10F15};
  #\u{10F16};
  #\u{10F17};
  #\u{10F18};
  #\u{10F19};
  #\u{10F1A};
  #\u{10F1B};
  #\u{10F1C};
  #\u{10F27};
  #\u{10F30};
  #\u{10F31};
  #\u{10F32};
  #\u{10F33};
  #\u{10F34};
  #\u{10F35};
  #\u{10F36};
  #\u{10F37};
  #\u{10F38};
  #\u{10F39};
  #\u{10F3A};
  #\u{10F3B};
  #\u{10F3C};
  #\u{10F3D};
  #\u{10F3E};
  #\u{10F3F};
  #\u{10F40};
  #\u{10F41};
  #\u{10F42};
  #\u{10F43};
  #\u{10F44};
  #\u{10F45};
  #\u{11144};
  #\u{1171A};
  #\u{11800};
  #\u{11801};
  #\u{11802};
  #\u{11803};
  #\u{11804};
  #\u{11805};
  #\u{11806};
  #\u{11807};
  #\u{11808};
  #\u{11809};
  #\u{1180A};
  #\u{1180B};
  #\u{1180C};
  #\u{1180D};
  #\u{1180E};
  #\u{1180F};
  #\u{11810};
  #\u{11811};
  #\u{11812};
  #\u{11813};
  #\u{11814};
  #\u{11815};
  #\u{11816};
  #\u{11817};
  #\u{11818};
  #\u{11819};
  #\u{1181A};
  #\u{1181B};
  #\u{1181C};
  #\u{1181D};
  #\u{1181E};
  #\u{1181F};
  #\u{11820};
  #\u{11821};
  #\u{11822};
  #\u{11823};
  #\u{11824};
  #\u{11825};
  #\u{11826};
  #\u{11827};
  #\u{11828};
  #\u{11829};
  #\u{1182A};
  #\u{1182B};
  #\u{11A9D};
  #\u{11D60};
  #\u{11D61};
  #\u{11D62};
  #\u{11D63};
  #\u{11D64};
  #\u{11D65};
  #\u{11D67};
  #\u{11D68};
  #\u{11D6A};
  #\u{11D6B};
  #\u{11D6C};
  #\u{11D6D};
  #\u{11D6E};
  #\u{11D6F};
  #\u{11D70};
  #\u{11D71};
  #\u{11D72};
  #\u{11D73};
  #\u{11D74};
  #\u{11D75};
  #\u{11D76};
  #\u{11D77};
  #\u{11D78};
  #\u{11D79};
  #\u{11D7A};
  #\u{11D7B};
  #\u{11D7C};
  #\u{11D7D};
  #\u{11D7E};
  #\u{11D7F};
  #\u{11D80};
  #\u{11D81};
  #\u{11D82};
  #\u{11D83};
  #\u{11D84};
  #\u{11D85};
  #\u{11D86};
  #\u{11D87};
  #\u{11D88};
  #\u{11D89};
  #\u{11D98};
  #\u{11EE0};
  #\u{11EE1};
  #\u{11EE2};
  #\u{11EE3};
  #\u{11EE4};
  #\u{11EE5};
  #\u{11EE6};
  #\u{11EE7};
  #\u{11EE8};
  #\u{11EE9};
  #\u{11EEA};
  #\u{11EEB};
  #\u{11EEC};
  #\u{11EED};
  #\u{11EEE};
  #\u{11EEF};
  #\u{11EF0};
  #\u{11EF1};
  #\u{11EF2};
  #\u{16E40};
  #\u{16E41};
  #\u{16E42};
  #\u{16E43};
  #\u{16E44};
  #\u{16E45};
  #\u{16E46};
  #\u{16E47};
  #\u{16E48};
  #\u{16E49};
  #\u{16E4A};
  #\u{16E4B};
  #\u{16E4C};
  #\u{16E4D};
  #\u{16E4E};
  #\u{16E4F};
  #\u{16E50};
  #\u{16E51};
  #\u{16E52};
  #\u{16E53};
  #\u{16E54};
  #\u{16E55};
  #\u{16E56};
  #\u{16E57};
  #\u{16E58};
  #\u{16E59};
  #\u{16E5A};
  #\u{16E5B};
  #\u{16E5C};
  #\u{16E5D};
  #\u{16E5E};
  #\u{16E5F};
  #\u{16E60};
  #\u{16E61};
  #\u{16E62};
  #\u{16E63};
  #\u{16E64};
  #\u{16E65};
  #\u{16E66};
  #\u{16E67};
  #\u{16E68};
  #\u{16E69};
  #\u{16E6A};
  #\u{16E6B};
  #\u{16E6C};
  #\u{16E6D};
  #\u{16E6E};
  #\u{16E6F};
  #\u{16E70};
  #\u{16E71};
  #\u{16E72};
  #\u{16E73};
  #\u{16E74};
  #\u{16E75};
  #\u{16E76};
  #\u{16E77};
  #\u{16E78};
  #\u{16E79};
  #\u{16E7A};
  #\u{16E7B};
  #\u{16E7C};
  #\u{16E7D};
  #\u{16E7E};
  #\u{16E7F};
  #\u{187ED};
  #\u{187EE};
  #\u{187EF};
  #\u{187F0};
  #\u{187F1};
};
