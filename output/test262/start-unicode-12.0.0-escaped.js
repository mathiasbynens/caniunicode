// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v12.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var \u0E86;
var \u0E89;
var \u0E8C;
var \u0E8E;
var \u0E8F;
var \u0E90;
var \u0E91;
var \u0E92;
var \u0E93;
var \u0E98;
var \u0EA0;
var \u0EA8;
var \u0EA9;
var \u0EAC;
var \u1CF2;
var \u1CF3;
var \u1CFA;
var \uA7BA;
var \uA7BB;
var \uA7BC;
var \uA7BD;
var \uA7BE;
var \uA7BF;
var \uA7C2;
var \uA7C3;
var \uA7C4;
var \uA7C5;
var \uA7C6;
var \uAB66;
var \uAB67;
var \u{10FE0};
var \u{10FE1};
var \u{10FE2};
var \u{10FE3};
var \u{10FE4};
var \u{10FE5};
var \u{10FE6};
var \u{10FE7};
var \u{10FE8};
var \u{10FE9};
var \u{10FEA};
var \u{10FEB};
var \u{10FEC};
var \u{10FED};
var \u{10FEE};
var \u{10FEF};
var \u{10FF0};
var \u{10FF1};
var \u{10FF2};
var \u{10FF3};
var \u{10FF4};
var \u{10FF5};
var \u{10FF6};
var \u{1145F};
var \u{116B8};
var \u{119A0};
var \u{119A1};
var \u{119A2};
var \u{119A3};
var \u{119A4};
var \u{119A5};
var \u{119A6};
var \u{119A7};
var \u{119AA};
var \u{119AB};
var \u{119AC};
var \u{119AD};
var \u{119AE};
var \u{119AF};
var \u{119B0};
var \u{119B1};
var \u{119B2};
var \u{119B3};
var \u{119B4};
var \u{119B5};
var \u{119B6};
var \u{119B7};
var \u{119B8};
var \u{119B9};
var \u{119BA};
var \u{119BB};
var \u{119BC};
var \u{119BD};
var \u{119BE};
var \u{119BF};
var \u{119C0};
var \u{119C1};
var \u{119C2};
var \u{119C3};
var \u{119C4};
var \u{119C5};
var \u{119C6};
var \u{119C7};
var \u{119C8};
var \u{119C9};
var \u{119CA};
var \u{119CB};
var \u{119CC};
var \u{119CD};
var \u{119CE};
var \u{119CF};
var \u{119D0};
var \u{119E1};
var \u{119E3};
var \u{11A84};
var \u{11A85};
var \u{16F45};
var \u{16F46};
var \u{16F47};
var \u{16F48};
var \u{16F49};
var \u{16F4A};
var \u{16FE3};
var \u{187F2};
var \u{187F3};
var \u{187F4};
var \u{187F5};
var \u{187F6};
var \u{187F7};
var \u{1B150};
var \u{1B151};
var \u{1B152};
var \u{1B164};
var \u{1B165};
var \u{1B166};
var \u{1B167};
var \u{1E100};
var \u{1E101};
var \u{1E102};
var \u{1E103};
var \u{1E104};
var \u{1E105};
var \u{1E106};
var \u{1E107};
var \u{1E108};
var \u{1E109};
var \u{1E10A};
var \u{1E10B};
var \u{1E10C};
var \u{1E10D};
var \u{1E10E};
var \u{1E10F};
var \u{1E110};
var \u{1E111};
var \u{1E112};
var \u{1E113};
var \u{1E114};
var \u{1E115};
var \u{1E116};
var \u{1E117};
var \u{1E118};
var \u{1E119};
var \u{1E11A};
var \u{1E11B};
var \u{1E11C};
var \u{1E11D};
var \u{1E11E};
var \u{1E11F};
var \u{1E120};
var \u{1E121};
var \u{1E122};
var \u{1E123};
var \u{1E124};
var \u{1E125};
var \u{1E126};
var \u{1E127};
var \u{1E128};
var \u{1E129};
var \u{1E12A};
var \u{1E12B};
var \u{1E12C};
var \u{1E137};
var \u{1E138};
var \u{1E139};
var \u{1E13A};
var \u{1E13B};
var \u{1E13C};
var \u{1E13D};
var \u{1E14E};
var \u{1E2C0};
var \u{1E2C1};
var \u{1E2C2};
var \u{1E2C3};
var \u{1E2C4};
var \u{1E2C5};
var \u{1E2C6};
var \u{1E2C7};
var \u{1E2C8};
var \u{1E2C9};
var \u{1E2CA};
var \u{1E2CB};
var \u{1E2CC};
var \u{1E2CD};
var \u{1E2CE};
var \u{1E2CF};
var \u{1E2D0};
var \u{1E2D1};
var \u{1E2D2};
var \u{1E2D3};
var \u{1E2D4};
var \u{1E2D5};
var \u{1E2D6};
var \u{1E2D7};
var \u{1E2D8};
var \u{1E2D9};
var \u{1E2DA};
var \u{1E2DB};
var \u{1E2DC};
var \u{1E2DD};
var \u{1E2DE};
var \u{1E2DF};
var \u{1E2E0};
var \u{1E2E1};
var \u{1E2E2};
var \u{1E2E3};
var \u{1E2E4};
var \u{1E2E5};
var \u{1E2E6};
var \u{1E2E7};
var \u{1E2E8};
var \u{1E2E9};
var \u{1E2EA};
var \u{1E2EB};
var \u{1E94B};
