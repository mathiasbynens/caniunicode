const r=r=>{try{return RegExp(`\\p{${r}}`,"u"),!0}catch{return!1}},t=r=>{try{return Function(`var ${r};`),!0}catch{return!1}},e=new Map([["v16.0.0",{propertyEscape:"Script=Garay",identifierStart:String.raw`\u1C89`,identifierPart:String.raw`\u0897`}],["v15.1.0",{propertyEscape:"Script=Kawi",identifierStart:String.raw`\u{1123F}`,identifierPart:String.raw`\u200C`}],["v15.0.0",{propertyEscape:"Script=Kawi",identifierStart:String.raw`\u{1123F}`,identifierPart:String.raw`\u0CF3`}],["v14.0.0",{propertyEscape:"Script=Toto",identifierStart:String.raw`\u0870`,identifierPart:String.raw`\u0898`}],["v13.0.0",{propertyEscape:"Script=Yezidi",identifierStart:String.raw`\u08BE`,identifierPart:String.raw`\u0B55`}],["v12.0.0",{propertyEscape:"Script=Wancho",identifierStart:String.raw`\u0E86`,identifierPart:String.raw`\u0EBA`}],["v11.0.0",{propertyEscape:"Script=Dogra",identifierStart:String.raw`\u0560`,identifierPart:String.raw`\u07FD`}],["v10.0.0",{propertyEscape:"Script=Devanagari",identifierStart:String.raw`\u0860`,identifierPart:String.raw`\u0AFA`}],["v9.0.0",{propertyEscape:!1,identifierStart:String.raw`\u08B6`,identifierPart:String.raw`\u08D4`}],["v8.0.0",{propertyEscape:!1,identifierStart:String.raw`\u08B3`,identifierPart:String.raw`\u08E3`}],["v7.0.0",{propertyEscape:!1,identifierStart:String.raw`\u037F`,identifierPart:String.raw`\u08FF`}],["v6.1.0",{propertyEscape:!1,identifierStart:String.raw`\u08A0`,identifierPart:String.raw`\u08E4`}],["v6.0.0",{propertyEscape:!1,identifierStart:String.raw`\u0526`,identifierPart:String.raw`\u065F`}],["v5.2.0",{propertyEscape:!1,identifierStart:String.raw`\u0524`,identifierPart:String.raw`\u0816`}]]),i="v16.0.0";(()=>{const n=(()=>{for(const[t,i]of e){const{propertyEscape:e}=i;if(!e)return!1;if(r(e))return t}return!1})(),a=(()=>{for(const[r,i]of e){const{identifierStart:e,identifierPart:n}=i;if(t(`${e}${n}`))return r}return!1})(),p=document.querySelector(".feature-support-property-escapes .environment-current-browser"),o=p.querySelector(".version");if(n){const r=document.querySelector(".version-property-escapes");p.classList.replace("unknown-support",n===i?"has-support":"partial-support"),r.textContent=n,o.textContent=n}else{const r=document.querySelector(".supports-property-escapes");r.textContent=r.dataset.noSupportText,p.classList.replace("unknown-support","no-support"),o.remove()}document.querySelector(".version-identifiers").textContent=a;const u=document.querySelector(".feature-support-identifiers .environment-current-browser");u.classList.replace("unknown-support",a===i?"has-support":"partial-support");u.querySelector(".version").textContent=a})();