import{a1 as i,a2 as v,a3 as g,a4 as s}from"./iframe.b4615042.js";var d=i,l=v,f=g,m=s,u=l.RangeError,t=String.fromCharCode,e=String.fromCodePoint,C=f([].join),x=!!e&&e.length!=1;d({target:"String",stat:!0,arity:1,forced:x},{fromCodePoint:function(c){for(var a=[],n=arguments.length,o=0,r;n>o;){if(r=+arguments[o++],m(r,1114111)!==r)throw u(r+" is not a valid code point");a[o]=r<65536?t(r):t(((r-=65536)>>10)+55296,r%1024+56320)}return C(a,"")}});
//# sourceMappingURL=es.string.from-code-point.e288ddd5.js.map