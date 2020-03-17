// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v7.0.0 ID_Continue characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var _\u08FF\u0C00\u0C81\u0D01\u0DE6\u0DE7\u0DE8\u0DE9\u0DEA\u0DEB\u0DEC\u0DED\u0DEE\u0DEF\u1AB0\u1AB1\u1AB2\u1AB3\u1AB4\u1AB5\u1AB6\u1AB7\u1AB8\u1AB9\u1ABA\u1ABB\u1ABC\u1ABD\u1CF8\u1CF9\u1DE7\u1DE8\u1DE9\u1DEA\u1DEB\u1DEC\u1DED\u1DEE\u1DEF\u1DF0\u1DF1\u1DF2\u1DF3\u1DF4\u1DF5\uA9E5\uA9F0\uA9F1\uA9F2\uA9F3\uA9F4\uA9F5\uA9F6\uA9F7\uA9F8\uA9F9\uAA7C\uAA7D\uFE27\uFE28\uFE29\uFE2A\uFE2B\uFE2C\uFE2D\u{102E0}\u{10376}\u{10377}\u{10378}\u{10379}\u{1037A}\u{10AE5}\u{10AE6}\u{1107F}\u{11173}\u{1122C}\u{1122D}\u{1122E}\u{1122F}\u{11230}\u{11231}\u{11232}\u{11233}\u{11234}\u{11235}\u{11236}\u{11237}\u{112DF}\u{112E0}\u{112E1}\u{112E2}\u{112E3}\u{112E4}\u{112E5}\u{112E6}\u{112E7}\u{112E8}\u{112E9}\u{112EA}\u{112F0}\u{112F1}\u{112F2}\u{112F3}\u{112F4}\u{112F5}\u{112F6}\u{112F7}\u{112F8}\u{112F9}\u{11301}\u{11302}\u{11303}\u{1133C}\u{1133E}\u{1133F}\u{11340}\u{11341}\u{11342}\u{11343}\u{11344}\u{11347}\u{11348}\u{1134B}\u{1134C}\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}\u{11367}\u{11368}\u{11369}\u{1136A}\u{1136B}\u{1136C}\u{11370}\u{11371}\u{11372}\u{11373}\u{11374}\u{114B0}\u{114B1}\u{114B2}\u{114B3}\u{114B4}\u{114B5}\u{114B6}\u{114B7}\u{114B8}\u{114B9}\u{114BA}\u{114BB}\u{114BC}\u{114BD}\u{114BE}\u{114BF}\u{114C0}\u{114C1}\u{114C2}\u{114C3}\u{114D0}\u{114D1}\u{114D2}\u{114D3}\u{114D4}\u{114D5}\u{114D6}\u{114D7}\u{114D8}\u{114D9}\u{115AF}\u{115B0}\u{115B1}\u{115B2}\u{115B3}\u{115B4}\u{115B5}\u{115B8}\u{115B9}\u{115BA}\u{115BB}\u{115BC}\u{115BD}\u{115BE}\u{115BF}\u{115C0}\u{11630}\u{11631}\u{11632}\u{11633}\u{11634}\u{11635}\u{11636}\u{11637}\u{11638}\u{11639}\u{1163A}\u{1163B}\u{1163C}\u{1163D}\u{1163E}\u{1163F}\u{11640}\u{11650}\u{11651}\u{11652}\u{11653}\u{11654}\u{11655}\u{11656}\u{11657}\u{11658}\u{11659}\u{118E0}\u{118E1}\u{118E2}\u{118E3}\u{118E4}\u{118E5}\u{118E6}\u{118E7}\u{118E8}\u{118E9}\u{16A60}\u{16A61}\u{16A62}\u{16A63}\u{16A64}\u{16A65}\u{16A66}\u{16A67}\u{16A68}\u{16A69}\u{16AF0}\u{16AF1}\u{16AF2}\u{16AF3}\u{16AF4}\u{16B30}\u{16B31}\u{16B32}\u{16B33}\u{16B34}\u{16B35}\u{16B36}\u{16B50}\u{16B51}\u{16B52}\u{16B53}\u{16B54}\u{16B55}\u{16B56}\u{16B57}\u{16B58}\u{16B59}\u{1BC9D}\u{1BC9E}\u{1E8D0}\u{1E8D1}\u{1E8D2}\u{1E8D3}\u{1E8D4}\u{1E8D5}\u{1E8D6};
