var Rt=Object.defineProperty;var At=(o,e,t)=>e in o?Rt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ve=(o,e,t)=>At(o,typeof e!="symbol"?e+"":e,t);import{s as It,j as Ft,R as zt,k as ue,t as Dt,l as Nt,m as Bt,n as B,o as $t,q as Ut,A as _e,u as Ht,v as qt,w as Gt,z as Vt,B as Jt,C as Zt,D as Wt,F as Je,G as I,H as Y,J as be}from"./iframe-CHogCwWt.js";import{j as z}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as Ze}from"./index-b9Z6YEkR.js";import"./preload-helper-C1FmrZbK.js";function Kt(o,e){return o.toLowerCase()===e.toLowerCase()}function Yt(o){return o<300?"#69AB32":o<400?"#F0BB4B":"#E95F5D"}async function Xt(o){const t=await o.clone().text();return{url:new URL(o.url),method:o.method,headers:Object.fromEntries(o.headers.entries()),body:t}}const{message:Qt}=It;async function eo(o){const e=o.clone(),t=await e.text(),n=e.status||200,r=e.statusText||Qt[n]||"OK";return{status:n,statusText:r,headers:Object.fromEntries(e.headers.entries()),body:t}}function to(o){for(var e=[],t=0;t<o.length;){var n=o[t];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:t,value:o[t++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:o[t++]});continue}if(n==="{"){e.push({type:"OPEN",index:t,value:o[t++]});continue}if(n==="}"){e.push({type:"CLOSE",index:t,value:o[t++]});continue}if(n===":"){for(var r="",i=t+1;i<o.length;){var a=o.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){r+=o[i++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=i;continue}if(n==="("){var c=1,d="",i=t+1;if(o[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<o.length;){if(o[i]==="\\"){d+=o[i++]+o[i++];continue}if(o[i]===")"){if(c--,c===0){i++;break}}else if(o[i]==="("&&(c++,o[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));d+=o[i++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(t));if(!d)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:d}),t=i;continue}e.push({type:"CHAR",index:t,value:o[t++]})}return e.push({type:"END",index:t,value:""}),e}function oo(o,e){e===void 0&&(e={});for(var t=to(o),n=e.prefixes,r=n===void 0?"./":n,i=e.delimiter,a=i===void 0?"/#?":i,c=[],d=0,h=0,v="",b=function(w){if(h<t.length&&t[h].type===w)return t[h++].value},E=function(w){var f=b(w);if(f!==void 0)return f;var C=t[h],P=C.type,S=C.index;throw new TypeError("Unexpected ".concat(P," at ").concat(S,", expected ").concat(w))},k=function(){for(var w="",f;f=b("CHAR")||b("ESCAPED_CHAR");)w+=f;return w},_=function(w){for(var f=0,C=a;f<C.length;f++){var P=C[f];if(w.indexOf(P)>-1)return!0}return!1},y=function(w){var f=c[c.length-1],C=w||(f&&typeof f=="string"?f:"");if(f&&!C)throw new TypeError('Must have text between two parameters, missing text after "'.concat(f.name,'"'));return!C||_(C)?"[^".concat(D(a),"]+?"):"(?:(?!".concat(D(C),")[^").concat(D(a),"])+?")};h<t.length;){var g=b("CHAR"),x=b("NAME"),L=b("PATTERN");if(x||L){var j=g||"";r.indexOf(j)===-1&&(v+=j,j=""),v&&(c.push(v),v=""),c.push({name:x||d++,prefix:j,suffix:"",pattern:L||y(j),modifier:b("MODIFIER")||""});continue}var l=g||b("ESCAPED_CHAR");if(l){v+=l;continue}v&&(c.push(v),v="");var s=b("OPEN");if(s){var j=k(),u=b("NAME")||"",p=b("PATTERN")||"",m=k();E("CLOSE"),c.push({name:u||(p?d++:""),pattern:u&&!p?y(j):p,prefix:j,suffix:m,modifier:b("MODIFIER")||""});continue}E("END")}return c}function no(o,e){var t=[],n=Ke(o,t,e);return ro(n,t,e)}function ro(o,e,t){t===void 0&&(t={});var n=t.decode,r=n===void 0?function(i){return i}:n;return function(i){var a=o.exec(i);if(!a)return!1;for(var c=a[0],d=a.index,h=Object.create(null),v=function(E){if(a[E]===void 0)return"continue";var k=e[E-1];k.modifier==="*"||k.modifier==="+"?h[k.name]=a[E].split(k.prefix+k.suffix).map(function(_){return r(_,k)}):h[k.name]=r(a[E],k)},b=1;b<a.length;b++)v(b);return{path:c,index:d,params:h}}}function D(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function We(o){return o&&o.sensitive?"":"i"}function io(o,e){if(!e)return o;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=t.exec(o.source);r;)e.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=t.exec(o.source);return o}function ao(o,e,t){var n=o.map(function(r){return Ke(r,e,t).source});return new RegExp("(?:".concat(n.join("|"),")"),We(t))}function so(o,e,t){return lo(oo(o,t),e,t)}function lo(o,e,t){t===void 0&&(t={});for(var n=t.strict,r=n===void 0?!1:n,i=t.start,a=i===void 0?!0:i,c=t.end,d=c===void 0?!0:c,h=t.encode,v=h===void 0?function(f){return f}:h,b=t.delimiter,E=b===void 0?"/#?":b,k=t.endsWith,_=k===void 0?"":k,y="[".concat(D(_),"]|$"),g="[".concat(D(E),"]"),x=a?"^":"",L=0,j=o;L<j.length;L++){var l=j[L];if(typeof l=="string")x+=D(v(l));else{var s=D(v(l.prefix)),u=D(v(l.suffix));if(l.pattern)if(e&&e.push(l),s||u)if(l.modifier==="+"||l.modifier==="*"){var p=l.modifier==="*"?"?":"";x+="(?:".concat(s,"((?:").concat(l.pattern,")(?:").concat(u).concat(s,"(?:").concat(l.pattern,"))*)").concat(u,")").concat(p)}else x+="(?:".concat(s,"(").concat(l.pattern,")").concat(u,")").concat(l.modifier);else{if(l.modifier==="+"||l.modifier==="*")throw new TypeError('Can not repeat "'.concat(l.name,'" without a prefix and suffix'));x+="(".concat(l.pattern,")").concat(l.modifier)}else x+="(?:".concat(s).concat(u,")").concat(l.modifier)}}if(d)r||(x+="".concat(g,"?")),x+=t.endsWith?"(?=".concat(y,")"):"$";else{var m=o[o.length-1],w=typeof m=="string"?g.indexOf(m[m.length-1])>-1:m===void 0;r||(x+="(?:".concat(g,"(?=").concat(y,"))?")),w||(x+="(?=".concat(g,"|").concat(y,")"))}return new RegExp(x,We(t))}function Ke(o,e,t){return o instanceof RegExp?io(o,e):Array.isArray(o)?ao(o,e,t):so(o,e,t)}new TextEncoder;function co(o){try{return new URL(o),!0}catch{return!1}}function ye(o,e){const n=Object.getOwnPropertySymbols(e).find(r=>r.description===o);if(n)return Reflect.get(e,n)}var $=class extends Response{static isConfigurableStatusCode(o){return o>=200&&o<=599}static isRedirectResponse(o){return $.STATUS_CODES_WITH_REDIRECT.includes(o)}static isResponseWithBody(o){return!$.STATUS_CODES_WITHOUT_BODY.includes(o)}static setUrl(o,e){if(!o||o==="about:"||!co(o))return;const t=ye("state",e);t?t.urlList.push(new URL(o)):Object.defineProperty(e,"url",{value:o,enumerable:!0,configurable:!0,writable:!1})}static parseRawHeaders(o){const e=new Headers;for(let t=0;t<o.length;t+=2)e.append(o[t],o[t+1]);return e}constructor(o,e={}){var t;const n=(t=e.status)!=null?t:200,r=$.isConfigurableStatusCode(n)?n:200,i=$.isResponseWithBody(n)?o:null;if(super(i,{status:r,statusText:e.statusText,headers:e.headers}),n!==r){const a=ye("state",this);a?a.status=n:Object.defineProperty(this,"status",{value:n,enumerable:!0,configurable:!0,writable:!1})}$.setUrl(e.url,this)}},pe=$;pe.STATUS_CODES_WITHOUT_BODY=[101,103,204,205,304];pe.STATUS_CODES_WITH_REDIRECT=[301,302,303,307,308];function uo(o,e=!0){return[e&&o.origin,o.pathname].filter(Boolean).join("")}const po=/[\?|#].*$/g;function ho(o){return new URL(`/${o}`,"http://localhost").searchParams}function Ye(o){return o.endsWith("?")?o:o.replace(po,"")}function fo(o){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(o)}function go(o,e){if(fo(o)||o.startsWith("*"))return o;const t=e||typeof location<"u"&&location.href;return t?decodeURI(new URL(encodeURI(o),t).href):o}function mo(o,e){if(o instanceof RegExp)return o;const t=go(o,e);return Ye(t)}function vo(o){return o.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,t,n)=>{const r="(.*)";return t?t.startsWith(":")?`${t}${n}`:`${t}${r}`:r}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function _o(o,e,t){const n=mo(e,t),r=typeof n=="string"?vo(n):n,i=uo(o),a=no(r,{decode:decodeURIComponent})(i),c=a&&a.params||{};return{matches:a!==!1,params:c}}var bo=Object.create,Xe=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,Qe=Object.getOwnPropertyNames,wo=Object.getPrototypeOf,jo=Object.prototype.hasOwnProperty,xo=(o,e)=>function(){return e||(0,o[Qe(o)[0]])((e={exports:{}}).exports,e),e.exports},Eo=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Qe(e))!jo.call(o,r)&&r!==t&&Xe(o,r,{get:()=>e[r],enumerable:!(n=yo(e,r))||n.enumerable});return o},ko=(o,e,t)=>(t=o!=null?bo(wo(o)):{},Eo(Xe(t,"default",{value:o,enumerable:!0}),o)),Co=xo({"node_modules/cookie/index.js"(o){o.parse=c,o.serialize=v;var e=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,r=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/;function c(_,y){if(typeof _!="string")throw new TypeError("argument str must be a string");var g={},x=_.length;if(x<2)return g;var L=y&&y.decode||b,j=0,l=0,s=0;do{if(l=_.indexOf("=",j),l===-1)break;if(s=_.indexOf(";",j),s===-1)s=x;else if(l>s){j=_.lastIndexOf(";",l-1)+1;continue}var u=d(_,j,l),p=h(_,l,u),m=_.slice(u,p);if(!t.call(g,m)){var w=d(_,l+1,s),f=h(_,s,w);_.charCodeAt(w)===34&&_.charCodeAt(f-1)===34&&(w++,f--);var C=_.slice(w,f);g[m]=k(C,L)}j=s+1}while(j<x);return g}function d(_,y,g){do{var x=_.charCodeAt(y);if(x!==32&&x!==9)return y}while(++y<g);return g}function h(_,y,g){for(;y>g;){var x=_.charCodeAt(--y);if(x!==32&&x!==9)return y+1}return g}function v(_,y,g){var x=g&&g.encode||encodeURIComponent;if(typeof x!="function")throw new TypeError("option encode is invalid");if(!n.test(_))throw new TypeError("argument name is invalid");var L=x(y);if(!r.test(L))throw new TypeError("argument val is invalid");var j=_+"="+L;if(!g)return j;if(g.maxAge!=null){var l=Math.floor(g.maxAge);if(!isFinite(l))throw new TypeError("option maxAge is invalid");j+="; Max-Age="+l}if(g.domain){if(!i.test(g.domain))throw new TypeError("option domain is invalid");j+="; Domain="+g.domain}if(g.path){if(!a.test(g.path))throw new TypeError("option path is invalid");j+="; Path="+g.path}if(g.expires){var s=g.expires;if(!E(s)||isNaN(s.valueOf()))throw new TypeError("option expires is invalid");j+="; Expires="+s.toUTCString()}if(g.httpOnly&&(j+="; HttpOnly"),g.secure&&(j+="; Secure"),g.partitioned&&(j+="; Partitioned"),g.priority){var u=typeof g.priority=="string"?g.priority.toLowerCase():g.priority;switch(u){case"low":j+="; Priority=Low";break;case"medium":j+="; Priority=Medium";break;case"high":j+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(g.sameSite){var p=typeof g.sameSite=="string"?g.sameSite.toLowerCase():g.sameSite;switch(p){case!0:j+="; SameSite=Strict";break;case"lax":j+="; SameSite=Lax";break;case"strict":j+="; SameSite=Strict";break;case"none":j+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return j}function b(_){return _.indexOf("%")!==-1?decodeURIComponent(_):_}function E(_){return e.call(_)==="[object Date]"}function k(_,y){try{return y(_)}catch{return _}}}}),Lo=ko(Co()),et=Lo.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function tt(o){const e=et.parse(o),t={};for(const n in e)typeof e[n]<"u"&&(t[n]=e[n]);return t}function we(){return tt(document.cookie)}function Po(o){if(typeof document>"u"||typeof location>"u")return{};switch(o.credentials){case"same-origin":{const e=new URL(o.url);return location.origin===e.origin?we():{}}case"include":return we();default:return{}}}function To(o){const e=o.headers.get("cookie"),t=e?tt(e):{},n=Po(o);for(const a in n)o.headers.append("cookie",et.serialize(a,n[a]));const r=Ft.getCookiesSync(o.url),i=Object.fromEntries(r.map(a=>[a.key,a.value]));for(const a of r)o.headers.append("cookie",a.toString());return{...n,...i,...t}}var F=(o=>(o.HEAD="HEAD",o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.OPTIONS="OPTIONS",o.DELETE="DELETE",o))(F||{});class So extends zt{constructor(e,t,n,r){super({info:{header:`${e} ${t}`,path:t,method:e},resolver:n,options:r}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:t}=this.info;if(t instanceof RegExp||Ye(t)===t)return;ho(t).forEach((i,a)=>{}),ue.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`)}async parse(e){var i;const t=new URL(e.request.url),n=_o(t,this.info.path,(i=e.resolutionContext)==null?void 0:i.baseUrl),r=To(e.request);return{match:n,cookies:r}}predicate(e){const t=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return t&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):Kt(this.info.method,e)}extendResolverArgs(e){var t;return{params:((t=e.parsedResult.match)==null?void 0:t.params)||{},cookies:e.parsedResult.cookies}}async log(e){const t=Dt(e.request.url),n=await Xt(e.request),r=await eo(e.response),i=Yt(r.status);console.groupCollapsed(ue.formatMessage(`${Nt()} ${e.request.method} ${t} (%c${r.status} ${r.statusText}%c)`),`color:${i}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",r),console.groupEnd()}}function A(o){return(e,t,n={})=>new So(o,e,t,n)}const je={all:A(/.+/),head:A(F.HEAD),get:A(F.GET),post:A(F.POST),put:A(F.PUT),delete:A(F.DELETE),patch:A(F.PATCH),options:A(F.OPTIONS)};function Oo(){Bt(typeof URL<"u",ue.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}const Mo=Symbol("bodyType");var Ue,He;class M extends(He=pe,Ue=Mo,He){constructor(t,n){const r=B(n);super(t,r);ve(this,Ue,null);$t(this,r)}static error(){return super.error()}static text(t,n){const r=B(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/plain"),r.headers.has("Content-Length")||r.headers.set("Content-Length",t?new Blob([t]).size.toString():"0"),new M(t,r)}static json(t,n){const r=B(n);r.headers.has("Content-Type")||r.headers.set("Content-Type","application/json");const i=JSON.stringify(t);return r.headers.has("Content-Length")||r.headers.set("Content-Length",i?new Blob([i]).size.toString():"0"),new M(i,r)}static xml(t,n){const r=B(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/xml"),new M(t,r)}static html(t,n){const r=B(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/html"),new M(t,r)}static arrayBuffer(t,n){const r=B(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","application/octet-stream"),t&&!r.headers.has("Content-Length")&&r.headers.set("Content-Length",t.byteLength.toString()),new M(t,r)}static formData(t,n){return new M(t,B(n))}}Oo();function xe(o){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...Ze(),...o.components};return z.jsxs(z.Fragment,{children:[z.jsx(e.h1,{id:"location-finder",children:"Location finder"}),`
`,z.jsx(e.h2,{id:"example-from-toujou",children:"Example from TOUJOU"}),`
`,z.jsx(e.pre,{children:z.jsx(e.code,{className:"language-html",children:`<toujou-location-finder
    class="location-finder"
    bounds="{mapBounds}"
    teaserUrl="{teaserUrl}"
    geoJsonUrl="{geoJsonUrl}"
    filterParams="{filterParams}"
    map-style="mapbox://styles/mapbox/light-v10"
    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
    <f:render partial="Content/LocationFinder/Layers" />
</toujou-location-finder>
`})})]})}function Ro(o={}){const{wrapper:e}={...Ze(),...o.components};return e?z.jsx(e,{...o,children:z.jsx(xe,{...o})}):xe(o)}function ne(o,e,t,n){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function c(v){try{h(n.next(v))}catch(b){a(b)}}function d(v){try{h(n.throw(v))}catch(b){a(b)}}function h(v){v.done?i(v.value):r(v.value).then(c,d)}h((n=n.apply(o,e||[])).next())})}var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var re,Ee;function ot(){if(Ee)return re;Ee=1,re=e;var o=Object.prototype.hasOwnProperty;function e(){for(var t={},n=0;n<arguments.length;n++){var r=arguments[n];for(var i in r)o.call(r,i)&&(t[i]=r[i])}return t}return re}var ie={exports:{}},ke;function Ao(){return ke||(ke=1,function(o,e){(function(){var t={};o.exports=t,t.simpleFilter=function(n,r){return r.filter(function(i){return t.test(n,i)})},t.test=function(n,r){return t.match(n,r)!==null},t.match=function(n,r,i){i=i||{};var a=0,c=[],d=r.length,h=0,v=0,b=i.pre||"",E=i.post||"",k=i.caseSensitive&&r||r.toLowerCase(),_;n=i.caseSensitive&&n||n.toLowerCase();for(var y=0;y<d;y++)_=r[y],k[y]===n[a]?(_=b+_+E,a+=1,v+=1+v):v=0,h+=v,c[c.length]=_;return a===n.length?(h=k===n?1/0:h,{rendered:c.join(""),score:h}):null},t.filter=function(n,r,i){return!r||r.length===0?[]:typeof n!="string"?r:(i=i||{},r.reduce(function(a,c,d,h){var v=c;i.extract&&(v=i.extract(c));var b=t.match(n,v,i);return b!=null&&(a[a.length]={string:b.rendered,score:b.score,index:d,original:c}),a},[]).sort(function(a,c){var d=c.score-a.score;return d||a.index-c.index}))}})()}(ie)),ie.exports}var ae,Ce;function Io(){if(Ce)return ae;Ce=1;var o=function(e){return this.component=e,this.items=[],this.active=e.options.noInitialSelection?-1:0,this.wrapper=document.createElement("div"),this.wrapper.className="suggestions-wrapper",this.element=document.createElement("ul"),this.element.className="suggestions",this.wrapper.appendChild(this.element),this.selectingListItem=!1,e.el.parentNode.insertBefore(this.wrapper,e.el.nextSibling),this};return o.prototype.show=function(){this.element.style.display="block"},o.prototype.hide=function(){this.element.style.display="none"},o.prototype.add=function(e){this.items.push(e)},o.prototype.clear=function(){this.items=[],this.active=this.component.options.noInitialSelection?-1:0},o.prototype.isEmpty=function(){return!this.items.length},o.prototype.isVisible=function(){return this.element.style.display==="block"},o.prototype.draw=function(){if(this.element.innerHTML="",this.items.length===0){this.hide();return}for(var e=0;e<this.items.length;e++)this.drawItem(this.items[e],this.active===e);this.show()},o.prototype.drawItem=function(e,t){var n=document.createElement("li"),r=document.createElement("a");t&&(n.className+=" active"),r.innerHTML=e.string,n.appendChild(r),this.element.appendChild(n),n.addEventListener("mousedown",(function(){this.selectingListItem=!0}).bind(this)),n.addEventListener("mouseup",(function(){this.handleMouseUp.call(this,e)}).bind(this))},o.prototype.handleMouseUp=function(e){this.selectingListItem=!1,this.component.value(e.original),this.clear(),this.draw()},o.prototype.move=function(e){this.active=e,this.draw()},o.prototype.previous=function(){this.move(this.active<=0?this.items.length-1:this.active-1)},o.prototype.next=function(){this.move(this.active>=this.items.length-1?0:this.active+1)},o.prototype.drawError=function(e){var t=document.createElement("li");t.innerHTML=e,this.element.appendChild(t),this.show()},ae=o,ae}var se,Le;function Fo(){if(Le)return se;Le=1;var o=ot(),e=Ao(),t=Io(),n=function(r,i,a){return a=a||{},this.options=o({minLength:2,limit:5,filter:!0,hideOnBlur:!0,noInitialSelection:!0},a),this.el=r,this.data=i||[],this.list=new t(this),this.query="",this.selected=null,this.list.draw(),this.el.addEventListener("keyup",(function(c){this.handleKeyUp(c.keyCode,c)}).bind(this),!1),this.el.addEventListener("keydown",(function(c){this.handleKeyDown(c)}).bind(this)),this.el.addEventListener("focus",(function(){this.handleFocus()}).bind(this)),this.el.addEventListener("blur",(function(){this.handleBlur()}).bind(this)),this.el.addEventListener("paste",(function(c){this.handlePaste(c)}).bind(this)),this.render=this.options.render?this.options.render.bind(this):this.render.bind(this),this.getItemValue=this.options.getItemValue?this.options.getItemValue.bind(this):this.getItemValue.bind(this),this};return n.prototype.handleKeyUp=function(r,i){if(!(r===40||r===38||r===27||r===9)){if(r===13){this.list.items[this.list.active]&&(this.list.handleMouseUp(this.list.items[this.list.active]),i.stopPropagation());return}this.handleInputChange(this.el.value)}},n.prototype.handleKeyDown=function(r){switch(r.keyCode){case 13:this.list.active>=0&&(this.list.selectingListItem=!0);break;case 9:this.list.isEmpty()||(this.list.isVisible()&&r.preventDefault(),this.value(this.list.active>=0?this.list.items[this.list.active].original:null),this.list.hide());break;case 27:this.list.isEmpty()||this.list.hide();break;case 38:this.list.previous();break;case 40:this.list.next();break}},n.prototype.handleBlur=function(){!this.list.selectingListItem&&this.options.hideOnBlur&&this.list.hide()},n.prototype.handlePaste=function(r){if(r.clipboardData)this.handleInputChange(r.clipboardData.getData("Text"));else{var i=this;setTimeout(function(){i.handleInputChange(r.target.value)},100)}},n.prototype.handleInputChange=function(r){if(this.query=this.normalize(r),this.list.clear(),this.query.length<this.options.minLength){this.list.draw();return}this.getCandidates((function(i){for(var a=0;a<i.length&&(this.list.add(i[a]),a!==this.options.limit-1);a++);this.list.draw()}).bind(this))},n.prototype.handleFocus=function(){this.list.isEmpty()||this.list.show(),this.list.selectingListItem=!1},n.prototype.update=function(r){this.data=r,this.handleKeyUp()},n.prototype.clear=function(){this.data=[],this.list.clear()},n.prototype.normalize=function(r){return r=r.toLowerCase(),r},n.prototype.match=function(r,i){return r.indexOf(i)>-1},n.prototype.value=function(r){if(this.selected=r,this.el.value=this.getItemValue(r||{place_name:this.query}),document.createEvent){var i=document.createEvent("HTMLEvents");i.initEvent("change",!0,!1),this.el.dispatchEvent(i)}else this.el.fireEvent("onchange")},n.prototype.getCandidates=function(r){var i={pre:"<strong>",post:"</strong>",extract:(function(c){return this.getItemValue(c)}).bind(this)},a;this.options.filter?(a=e.filter(this.query,this.data,i),a=a.map((function(c){return{original:c.original,string:this.render(c.original,c.string)}}).bind(this))):a=this.data.map((function(c){var d=this.render(c);return{original:c,string:d}}).bind(this)),r(a)},n.prototype.getItemValue=function(r){return r},n.prototype.render=function(r,i){if(i)return i;for(var a=r.original?this.getItemValue(r.original):this.getItemValue(r),c=this.normalize(a),d=c.lastIndexOf(this.query);d>-1;){var h=d+this.query.length;a=a.slice(0,d)+"<strong>"+a.slice(d,h)+"</strong>"+a.slice(h),d=c.slice(0,d).lastIndexOf(this.query)}return a},n.prototype.renderError=function(r){this.list.drawError(r)},se=n,se}var le,Pe;function zo(){if(Pe)return le;Pe=1;var o=Fo();return le=o,typeof window<"u"&&(window.Suggestions=o),le}var Do=zo(),No=X(Do),W={exports:{}},Bo=W.exports,Te;function $o(){return Te||(Te=1,function(o){(function(e,t,n){o.exports?o.exports=n():e[t]=n()})(Bo,"subtag",function(){var e="",t=/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;function n(d){return d.match(t)||[]}function r(d){return n(d).filter(function(h,v){return h&&v})}function i(d){return d=n(d),{language:d[1]||e,extlang:d[2]||e,script:d[3]||e,region:d[4]||e}}function a(d,h,v){Object.defineProperty(d,h,{value:v,enumerable:!0})}function c(d,h,v){function b(E){return n(E)[d]||e}a(b,"pattern",h),a(i,v,b)}return c(1,/^[a-zA-Z]{2,3}$/,"language"),c(2,/^[a-zA-Z]{3}$/,"extlang"),c(3,/^[a-zA-Z]{4}$/,"script"),c(4,/^[a-zA-Z]{2}$|^[0-9]{3}$/,"region"),a(i,"split",r),i})}(W)),W.exports}var Uo=$o(),Ho=X(Uo),ce,Se;function qo(){if(Se)return ce;Se=1;var o="Expected a function",e=NaN,t="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,d=typeof V=="object"&&V&&V.Object===Object&&V,h=typeof self=="object"&&self&&self.Object===Object&&self,v=d||h||Function("return this")(),b=Object.prototype,E=b.toString,k=Math.max,_=Math.min,y=function(){return v.Date.now()};function g(s,u,p){var m,w,f,C,P,S,N=0,he=!1,U=!1,ee=!0;if(typeof s!="function")throw new TypeError(o);u=l(u)||0,x(p)&&(he=!!p.leading,U="maxWait"in p,f=U?k(l(p.maxWait)||0,u):f,ee="trailing"in p?!!p.trailing:ee);function te(T){var R=m,H=w;return m=w=void 0,N=T,C=s.apply(H,R),C}function Tt(T){return N=T,P=setTimeout(G,u),he?te(T):C}function St(T){var R=T-S,H=T-N,me=u-R;return U?_(me,f-H):me}function fe(T){var R=T-S,H=T-N;return S===void 0||R>=u||R<0||U&&H>=f}function G(){var T=y();if(fe(T))return ge(T);P=setTimeout(G,St(T))}function ge(T){return P=void 0,ee&&m?te(T):(m=w=void 0,C)}function Ot(){P!==void 0&&clearTimeout(P),N=0,m=S=w=P=void 0}function Mt(){return P===void 0?C:ge(y())}function oe(){var T=y(),R=fe(T);if(m=arguments,w=this,S=T,R){if(P===void 0)return Tt(S);if(U)return P=setTimeout(G,u),te(S)}return P===void 0&&(P=setTimeout(G,u)),C}return oe.cancel=Ot,oe.flush=Mt,oe}function x(s){var u=typeof s;return!!s&&(u=="object"||u=="function")}function L(s){return!!s&&typeof s=="object"}function j(s){return typeof s=="symbol"||L(s)&&E.call(s)==t}function l(s){if(typeof s=="number")return s;if(j(s))return e;if(x(s)){var u=typeof s.valueOf=="function"?s.valueOf():s;s=x(u)?u+"":u}if(typeof s!="string")return s===0?s:+s;s=s.replace(n,"");var p=i.test(s);return p||a.test(s)?c(s.slice(2),p?2:8):r.test(s)?e:+s}return ce=g,ce}var Go=qo(),Vo=X(Go),Jo=ot(),O=X(Jo),J={exports:{}},Oe;function Zo(){if(Oe)return J.exports;Oe=1;var o=typeof Reflect=="object"?Reflect:null,e=o&&typeof o.apply=="function"?o.apply:function(s,u,p){return Function.prototype.apply.call(s,u,p)},t;o&&typeof o.ownKeys=="function"?t=o.ownKeys:Object.getOwnPropertySymbols?t=function(s){return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s))}:t=function(s){return Object.getOwnPropertyNames(s)};function n(l){console&&console.warn&&console.warn(l)}var r=Number.isNaN||function(s){return s!==s};function i(){i.init.call(this)}J.exports=i,J.exports.once=x,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var a=10;function c(l){if(typeof l!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof l)}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(l){if(typeof l!="number"||l<0||r(l))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+l+".");a=l}}),i.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(s){if(typeof s!="number"||s<0||r(s))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+s+".");return this._maxListeners=s,this};function d(l){return l._maxListeners===void 0?i.defaultMaxListeners:l._maxListeners}i.prototype.getMaxListeners=function(){return d(this)},i.prototype.emit=function(s){for(var u=[],p=1;p<arguments.length;p++)u.push(arguments[p]);var m=s==="error",w=this._events;if(w!==void 0)m=m&&w.error===void 0;else if(!m)return!1;if(m){var f;if(u.length>0&&(f=u[0]),f instanceof Error)throw f;var C=new Error("Unhandled error."+(f?" ("+f.message+")":""));throw C.context=f,C}var P=w[s];if(P===void 0)return!1;if(typeof P=="function")e(P,this,u);else for(var S=P.length,N=_(P,S),p=0;p<S;++p)e(N[p],this,u);return!0};function h(l,s,u,p){var m,w,f;if(c(u),w=l._events,w===void 0?(w=l._events=Object.create(null),l._eventsCount=0):(w.newListener!==void 0&&(l.emit("newListener",s,u.listener?u.listener:u),w=l._events),f=w[s]),f===void 0)f=w[s]=u,++l._eventsCount;else if(typeof f=="function"?f=w[s]=p?[u,f]:[f,u]:p?f.unshift(u):f.push(u),m=d(l),m>0&&f.length>m&&!f.warned){f.warned=!0;var C=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(s)+" listeners added. Use emitter.setMaxListeners() to increase limit");C.name="MaxListenersExceededWarning",C.emitter=l,C.type=s,C.count=f.length,n(C)}return l}i.prototype.addListener=function(s,u){return h(this,s,u,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(s,u){return h(this,s,u,!0)};function v(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function b(l,s,u){var p={fired:!1,wrapFn:void 0,target:l,type:s,listener:u},m=v.bind(p);return m.listener=u,p.wrapFn=m,m}i.prototype.once=function(s,u){return c(u),this.on(s,b(this,s,u)),this},i.prototype.prependOnceListener=function(s,u){return c(u),this.prependListener(s,b(this,s,u)),this},i.prototype.removeListener=function(s,u){var p,m,w,f,C;if(c(u),m=this._events,m===void 0)return this;if(p=m[s],p===void 0)return this;if(p===u||p.listener===u)--this._eventsCount===0?this._events=Object.create(null):(delete m[s],m.removeListener&&this.emit("removeListener",s,p.listener||u));else if(typeof p!="function"){for(w=-1,f=p.length-1;f>=0;f--)if(p[f]===u||p[f].listener===u){C=p[f].listener,w=f;break}if(w<0)return this;w===0?p.shift():y(p,w),p.length===1&&(m[s]=p[0]),m.removeListener!==void 0&&this.emit("removeListener",s,C||u)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(s){var u,p,m;if(p=this._events,p===void 0)return this;if(p.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):p[s]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete p[s]),this;if(arguments.length===0){var w=Object.keys(p),f;for(m=0;m<w.length;++m)f=w[m],f!=="removeListener"&&this.removeAllListeners(f);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(u=p[s],typeof u=="function")this.removeListener(s,u);else if(u!==void 0)for(m=u.length-1;m>=0;m--)this.removeListener(s,u[m]);return this};function E(l,s,u){var p=l._events;if(p===void 0)return[];var m=p[s];return m===void 0?[]:typeof m=="function"?u?[m.listener||m]:[m]:u?g(m):_(m,m.length)}i.prototype.listeners=function(s){return E(this,s,!0)},i.prototype.rawListeners=function(s){return E(this,s,!1)},i.listenerCount=function(l,s){return typeof l.listenerCount=="function"?l.listenerCount(s):k.call(l,s)},i.prototype.listenerCount=k;function k(l){var s=this._events;if(s!==void 0){var u=s[l];if(typeof u=="function")return 1;if(u!==void 0)return u.length}return 0}i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function _(l,s){for(var u=new Array(s),p=0;p<s;++p)u[p]=l[p];return u}function y(l,s){for(;s+1<l.length;s++)l[s]=l[s+1];l.pop()}function g(l){for(var s=new Array(l.length),u=0;u<s.length;++u)s[u]=l[u].listener||l[u];return s}function x(l,s){return new Promise(function(u,p){function m(f){l.removeListener(s,w),p(f)}function w(){typeof l.removeListener=="function"&&l.removeListener("error",m),u([].slice.call(arguments))}j(l,s,w,{once:!0}),s!=="error"&&L(l,m,{once:!0})})}function L(l,s,u){typeof l.on=="function"&&j(l,"error",s,u)}function j(l,s,u,p){if(typeof l.on=="function")p.once?l.once(s,u):l.on(s,u);else if(typeof l.addEventListener=="function")l.addEventListener(s,function m(w){p.once&&l.removeEventListener(s,m),u(w)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof l)}return J.exports}var Wo=Zo();const Me={fr:{name:"France",bbox:[[-4.59235,41.380007],[9.560016,51.148506]]},us:{name:"United States",bbox:[[-171.791111,18.91619],[-66.96466,71.357764]]},ru:{name:"Russia",bbox:[[19.66064,41.151416],[190.10042,81.2504]]},ca:{name:"Canada",bbox:[[-140.99778,41.675105],[-52.648099,83.23324]]}},Ko={de:"Suche",it:"Ricerca",en:"Search",nl:"Zoeken",fr:"Chercher",ca:"Cerca",he:"לחפש",ja:"サーチ",lv:"Meklēt",pt:"Procurar",sr:"Претрага",zh:"搜索",cs:"Vyhledávání",hu:"Keresés",ka:"ძიება",nb:"Søke",sk:"Vyhľadávanie",th:"ค้นหา",fi:"Hae",is:"Leita",ko:"수색",pl:"Szukaj",sl:"Iskanje",fa:"جستجو",ru:"Поиск",es:"Buscar"},Yo={en:"No results found",de:"Keine Ergebnisse gefunden",es:"No hay resultados"},Xo={en:"There was an error reaching the server",de:"Verbindung fehlgeschlagen",es:"Error al conectarse al servidor"};var q={placeholder:Ko,errorNoResults:Yo,errorConnectionFailed:Xo};const Qo=/(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/;class en{constructor(e,t){this.options={zoom:16,flyTo:!0,trackProximity:!0,showResultsWhileTyping:!1,minLength:2,reverseGeocode:!1,limit:5,enableEventLogging:!0,marker:!0,popup:!1,maplibregl:void 0,collapsed:!1,clearAndBlurOnEsc:!1,clearOnBlur:!1,proximityMinZoom:9,getItemValue:n=>n.text!==void 0?n.text:n.place_name,render:function(n){if(!n.geometry){const i=n.text,a=i.toLowerCase().indexOf(this.query.toLowerCase()),c=this.query.length,d=i.substring(0,a),h=i.substring(a,a+c),v=i.substring(a+c);return'<div class="maplibregl-ctrl-geocoder--suggestion"><svg class="maplibregl-ctrl-geocoder--suggestion-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22.8702 20.1258H21.4248L20.9125 19.6318C22.7055 17.546 23.785 14.8382 23.785 11.8925C23.785 5.32419 18.4608 0 11.8925 0C5.32419 0 0 5.32419 0 11.8925C0 18.4608 5.32419 23.785 11.8925 23.785C14.8382 23.785 17.546 22.7055 19.6318 20.9125L20.1258 21.4248V22.8702L29.2739 32L32 29.2739L22.8702 20.1258ZM11.8925 20.1258C7.33676 20.1258 3.65923 16.4483 3.65923 11.8925C3.65923 7.33676 7.33676 3.65923 11.8925 3.65923C16.4483 3.65923 20.1258 7.33676 20.1258 11.8925C20.1258 16.4483 16.4483 20.1258 11.8925 20.1258Z" fill="#687078"/></svg><div class="maplibregl-ctrl-geocoder--suggestion-info"><div class="maplibregl-ctrl-geocoder--suggestion-title">'+d+'<span class="maplibregl-ctrl-geocoder--suggestion-match">'+h+"</span>"+v+"</div></div></div>"}const r=n.place_name.split(",");return'<div class="maplibregl-ctrl-geocoder--result"><svg class="maplibregl-ctrl-geocoder--result-icon" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36571 0 0 5.38676 0 12.0471C0 21.0824 12 32 12 32C12 32 24 21.0824 24 12.0471C24 5.38676 18.6343 0 12 0ZM12 16.3496C9.63428 16.3496 7.71429 14.4221 7.71429 12.0471C7.71429 9.67207 9.63428 7.74454 12 7.74454C14.3657 7.74454 16.2857 9.67207 16.2857 12.0471C16.2857 14.4221 14.3657 16.3496 12 16.3496Z" fill="#687078"/></svg><div><div class="maplibregl-ctrl-geocoder--result-title">'+r[0]+'</div><div class="maplibregl-ctrl-geocoder--result-address">'+r.splice(1,r.length).join(",")+"</div></div></div>"},popupRender:n=>{const r=n.place_name.split(",");return'<div class="maplibregl-ctrl-geocoder--suggestion popup-suggestion"><div class="maplibregl-ctrl-geocoder--suggestion-title popup-suggestion-title">'+r[0]+'</div><div class="maplibregl-ctrl-geocoder--suggestion-address popup-suggestion-address">'+r.splice(1,r.length).join(",")+"</div></div>"},showResultMarkers:!0,debounceSearch:200},this._eventEmitter=new Wo.EventEmitter,this.options=O({},this.options,t),this.fresh=!0,this.lastSelected=null,this.geocoderApi=e}addTo(e){function t(n,r){if(!document.body.contains(r))throw new Error("Element provided to #addTo() exists, but is not in the DOM");const i=n.onAdd();r.appendChild(i)}if(e instanceof HTMLElement)t(this,e);else if(typeof e=="string"){const n=document.querySelectorAll(e);if(n.length===0)throw new Error("Element "+e+"not found.");if(n.length>1)throw new Error("Geocoder can only be added to a single html element");t(this,n[0])}else if("addControl"in e)e.addControl(this);else throw new Error("Error: addTo must be a maplibre-gl-js map, an html element, or a CSS selector query for a single html element")}onAdd(e){if(e&&typeof e!="string"&&(this._map=e),this.setLanguage(),this.options.localGeocoderOnly&&!this.options.localGeocoder)throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");this._onChange=this._onChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onPaste=this._onPaste.bind(this),this._onBlur=this._onBlur.bind(this),this._showButton=this._showButton.bind(this),this._hideButton=this._hideButton.bind(this),this._onQueryResult=this._onQueryResult.bind(this),this.clear=this.clear.bind(this),this._updateProximity=this._updateProximity.bind(this),this._collapse=this._collapse.bind(this),this._unCollapse=this._unCollapse.bind(this),this._clear=this._clear.bind(this),this._clearOnBlur=this._clearOnBlur.bind(this);const t=this.container=document.createElement("div");t.className="maplibregl-ctrl-geocoder maplibregl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl";const n=this.createIcon("search",'<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');this._inputEl=document.createElement("input"),this._inputEl.type="text",this._inputEl.className="maplibregl-ctrl-geocoder--input",this.setPlaceholder(),this.options.collapsed&&(this._collapse(),this.container.addEventListener("mouseenter",this._unCollapse),this.container.addEventListener("mouseleave",this._collapse),this._inputEl.addEventListener("focus",this._unCollapse)),(this.options.collapsed||this.options.clearOnBlur)&&this._inputEl.addEventListener("blur",this._onBlur),this._inputEl.addEventListener("keydown",Vo(this._onKeyDown,this.options.debounceSearch)),this._inputEl.addEventListener("paste",this._onPaste),this._inputEl.addEventListener("change",this._onChange),this.container.addEventListener("mouseenter",this._showButton),this.container.addEventListener("mouseleave",this._hideButton);const r=document.createElement("div");r.classList.add("maplibregl-ctrl-geocoder--pin-right"),this._clearEl=document.createElement("button"),this._clearEl.setAttribute("type","button"),this._clearEl.setAttribute("aria-label","Clear"),this._clearEl.addEventListener("click",this.clear),this._clearEl.className="maplibregl-ctrl-geocoder--button";const i=this.createIcon("close",'<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');return this._clearEl.appendChild(i),this._loadingEl=this.createIcon("loading",'<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'),r.appendChild(this._clearEl),r.appendChild(this._loadingEl),t.appendChild(n),t.appendChild(this._inputEl),t.appendChild(r),this._typeahead=new No(this._inputEl,[],{filter:!1,minLength:this.options.minLength,limit:this.options.limit,noInitialSelection:!0}),this.container.addEventListener("click",()=>{this._typeahead.update(this._typeahead.data)}),this.setRenderFunction(this.options.render),this._typeahead.getItemValue=this.options.getItemValue,this.mapMarker=null,this.resultMarkers=[],this._handleMarker=this._handleMarker.bind(this),this._handleResultMarkers=this._handleResultMarkers.bind(this),this._map&&(this.options.trackProximity&&(this._updateProximity(),this._map.on("moveend",this._updateProximity)),this._maplibregl=this.options.maplibregl,!this._maplibregl&&this.options.marker&&(console.error("No maplibregl detected in options. Map markers are disabled. Please set options.maplibregl."),this.options.marker=!1)),t}createIcon(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");if(n.setAttribute("class","maplibregl-ctrl-geocoder--icon maplibregl-ctrl-geocoder--icon-"+e),n.setAttribute("viewBox","0 0 18 18"),n.setAttribute("xml:space","preserve"),n.setAttribute("width","18"),n.setAttribute("height","18"),"innerHTML"in n)n.innerHTML=t;else{const r=document.createElement("div");r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";const i=r.firstChild,a=i.firstChild;n.appendChild(a)}return n}onRemove(){return this.container.remove(),this.options.trackProximity&&this._map&&this._map.off("moveend",this._updateProximity),this._removeMarker(),this._map=null,this}_onPaste(e){const t=(e.clipboardData||window.clipboardData).getData("text");t.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(t)}_onKeyDown(e){if(e.keyCode===27&&this.options.clearAndBlurOnEsc)return this._clear(e),this._inputEl.blur();const i=this._inputEl.value;if(!i)return this.fresh=!0,e.keyCode!==9&&this.clear(e),this._clearEl.style.display="none";if(!(e.metaKey||[9,27,37,39,38,40].indexOf(e.keyCode)!==-1)){if(e.keyCode===13)if(!this.options.showResultsWhileTyping)this._typeahead.selected||this._geocode(i);else{this._typeahead.selected==null&&this.geocoderApi.getSuggestions?this._geocode(i,!0):this._typeahead.selected==null&&this.options.showResultMarkers&&this._fitBoundsForMarkers();return}i.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(i)}}_showButton(){this._inputEl.value.length>0&&(this._clearEl.style.display="block")}_hideButton(){this._typeahead.selected&&(this._clearEl.style.display="none")}_onBlur(e){this.options.clearOnBlur&&this._clearOnBlur(e),this.options.collapsed&&this._collapse()}_onChange(){const e=this._typeahead.selected;if(e&&!e.geometry)e.placeId?this._geocode(e.placeId,!0,!0):this._geocode(e.text,!0);else if(e&&JSON.stringify(e)!==this.lastSelected){if(this._clearEl.style.display="none",this.options.flyTo){let t;if(this._removeResultMarkers(),e.properties&&Me[e.properties.short_code])t=O({},this.options.flyTo),this._map&&this._map.fitBounds(Me[e.properties.short_code].bbox,t);else if(e.bbox){const n=e.bbox;t=O({},this.options.flyTo),this._map&&this._map.fitBounds([[n[0],n[1]],[n[2],n[3]]],t)}else{const n={zoom:this.options.zoom};t=O({},n,this.options.flyTo),e.center?t.center=e.center:e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(t.center=e.geometry.coordinates),this._map&&this._map.flyTo(t)}}this.options.marker&&this._maplibregl&&this._handleMarker(e),this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0),this.lastSelected=JSON.stringify(e),this._typeahead.selected=null,this._eventEmitter.emit("result",{result:e})}}_getConfigForRequest(){return["bbox","limit","proximity","countries","types","language","reverseMode"].reduce((n,r)=>(this.options[r]&&(["countries","types","language"].indexOf(r)>-1?n[r]=this.options[r].split(/[\s,]+/):n[r]=this.options[r],r==="proximity"&&this.options[r]&&typeof this.options[r].longitude=="number"&&typeof this.options[r].latitude=="number"&&(n[r]=[this.options[r].longitude,this.options[r].latitude])),n),{})}_geocode(e){return ne(this,arguments,void 0,function*(t,n=!1,r=!1){this._loadingEl.style.display="block",this._eventEmitter.emit("loading",{query:t});const i=this._getConfigForRequest(),a=this._createGeocodeRequest(i,t,n,r),c=this.options.localGeocoder?this.options.localGeocoder(t)||[]:[];try{const d=yield a;yield this._handleGeocodeResponse(d,i,t,n,c)}catch(d){this._handleGeocodeErrorResponse(d,c)}return a})}_createGeocodeRequest(e,t,n,r){return this.options.localGeocoderOnly?Promise.resolve({}):this.options.reverseGeocode&&Qo.test(t)?this._createReverseGeocodeRequest(t,e):(e.query=t,this.geocoderApi.getSuggestions?n?this.geocoderApi.searchByPlaceId&&r?this.geocoderApi.searchByPlaceId(e):this.geocoderApi.forwardGeocode(e):this.geocoderApi.getSuggestions(e):this.geocoderApi.forwardGeocode(e))}_createReverseGeocodeRequest(e,t){const n=e.split(/[\s(,)?]+/).map(r=>parseFloat(r)).reverse();return t.query=n,t.limit=1,"proximity"in t&&delete t.proximity,this.geocoderApi.reverseGeocode(t)}_handleGeocodeResponse(e,t,n,r,i){return ne(this,void 0,void 0,function*(){this._loadingEl.style.display="none";let a={};e?a=e:a={type:"FeatureCollection",features:[]},a.config=t,this.fresh&&(this.fresh=!1),a.features=a.features?i.concat(a.features):i;const c=this.options.externalGeocoder?this.options.externalGeocoder(n,a.features,t)||Promise.resolve([]):Promise.resolve([]);try{const h=yield c;a.features=a.features?h.concat(a.features):h}catch{}this.options.filter&&a.features.length&&(a.features=a.features.filter(this.options.filter));let d=[];"suggestions"in a?d=a.suggestions:"place"in a?d=[a.place]:d=a.features,d.length?(this._clearEl.style.display="block",this._typeahead.update(d),(!this.options.showResultsWhileTyping||r)&&this.options.showResultMarkers&&(a.features.length>0||"place"in a)&&this._fitBoundsForMarkers(),this._eventEmitter.emit("results",a)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderNoResults(),this._eventEmitter.emit("results",a))})}_handleGeocodeErrorResponse(e,t){this._loadingEl.style.display="none",t.length&&this.options.localGeocoder?(this._clearEl.style.display="block",this._typeahead.update(t)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderError()),this._eventEmitter.emit("results",{features:t}),this._eventEmitter.emit("error",{error:e})}_clear(e){e&&e.preventDefault(),this._inputEl.value="",this._typeahead.selected=null,this._typeahead.clear(),this._onChange(),this._clearEl.style.display="none",this._removeMarker(),this._removeResultMarkers(),this.lastSelected=null,this._eventEmitter.emit("clear"),this.fresh=!0}clear(e){this._clear(e),this._inputEl.focus()}_clearOnBlur(e){e.relatedTarget&&this._clear(e)}_onQueryResult(e){if(!("features"in e)||!e.features.length)return;const t=e.features[0];this._typeahead.selected=t,this._inputEl.value=t.place_name,this._onChange()}_updateProximity(){if(this._map)if(this._map.getZoom()>this.options.proximityMinZoom){const e=this._map.getCenter().wrap();this.setProximity({longitude:e.lng,latitude:e.lat})}else this.setProximity(null)}_collapse(){!this._inputEl.value&&this._inputEl!==document.activeElement&&this.container.classList.add("maplibregl-ctrl-geocoder--collapsed")}_unCollapse(){this.container.classList.remove("maplibregl-ctrl-geocoder--collapsed")}query(e){return ne(this,void 0,void 0,function*(){const t=yield this._geocode(e);this._onQueryResult(t)})}_renderError(){const e=`<div class='maplibre-gl-geocoder--error'>${this._localize("errorConnectionFailed")}</div>`;this._renderMessage(e)}_renderNoResults(){const e=`<div class='maplibre-gl-geocoder--error maplibre-gl-geocoder--no-results'>
        ${this._localize("errorNoResults")}</div>`;this._renderMessage(e)}_renderMessage(e){this._typeahead.update([]),this._typeahead.selected=null,this._typeahead.clear(),this._typeahead.renderError(e)}_localize(e){const t=Ho.language(this.options.language.split(",")[0]);return this.options.language&&(q!=null&&q[e][t])?q[e][t]:q[e].en}_fitBoundsForMarkers(){if(this._typeahead.data.length<1)return;const e=this._typeahead.data.filter(t=>typeof t!="string").slice(0,this.options.limit);if(this._clearEl.style.display="none",this.options.flyTo&&this._maplibregl&&this._map){const n=O({},{padding:100},this.options.flyTo),r=new this._maplibregl.LngLatBounds;for(const i of e)r.extend(i.geometry.coordinates);this._map.fitBounds(r,n)}return e.length>0&&this._maplibregl&&this._handleResultMarkers(e),this}setInput(e){return this._inputEl.value=e,this._typeahead.selected=null,this._typeahead.clear(),e.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(e),this}setProximity(e){return this.options.proximity=e,this}getProximity(){return this.options.proximity}setRenderFunction(e){return e&&typeof e=="function"&&(this._typeahead.render=e),this}getRenderFunction(){return this._typeahead.render}setLanguage(e){return this.options.language=e||this.options.language||navigator.language,this}getLanguage(){return this.options.language}getZoom(){return this.options.zoom}setZoom(e){return this.options.zoom=e,this}getFlyTo(){return this.options.flyTo}setFlyTo(e){return this.options.flyTo=e,this}getPlaceholder(){return this.options.placeholder}setPlaceholder(e){return this.placeholder=e||this.options.placeholder||this._localize("placeholder"),this._inputEl.placeholder=this.placeholder,this._inputEl.setAttribute("aria-label",this.placeholder),this}getBbox(){return this.options.bbox}setBbox(e){return this.options.bbox=e,this}getCountries(){return this.options.countries}setCountries(e){return this.options.countries=e,this}getTypes(){return this.options.types}setTypes(e){return this.options.types=e,this}getMinLength(){return this.options.minLength}setMinLength(e){return this.options.minLength=e,this._typeahead&&(this._typeahead.options.minLength=e),this}getLimit(){return this.options.limit}setLimit(e){return this.options.limit=e,this._typeahead&&(this._typeahead.options.limit=e),this}getFilter(){return this.options.filter}setFilter(e){return this.options.filter=e,this}setGeocoderApi(e){return this.geocoderApi=e,this}getGeocoderApi(){return this.geocoderApi}_handleMarker(e){if(!this._map)return;this._removeMarker();const n=O({},{color:"#4668F2"},this.options.marker);this.mapMarker=new this._maplibregl.Marker(n);let r;if(this.options.popup){const a=O({},{},this.options.popup);r=new this._maplibregl.Popup(a).setHTML(this.options.popupRender(e))}return e.center?(this.mapMarker.setLngLat(e.center).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(r)):e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(r)),this}_removeMarker(){this.mapMarker&&(this.mapMarker.remove(),this.mapMarker=null)}_handleResultMarkers(e){if(!this._map)return;this._removeResultMarkers();let n=O({},{color:"#4668F2"},this.options.showResultMarkers);for(const r of e){let i;if(this.options.showResultMarkers){this.options.showResultMarkers&&this.options.showResultMarkers.element&&(i=this.options.showResultMarkers.element.cloneNode(!0),n=O(n,{element:i}));const a=new this._maplibregl.Marker(O({},n,{element:i}));let c;if(this.options.popup){const h=O({},{},this.options.popup);c=new this._maplibregl.Popup(h).setHTML(this.options.popupRender(r))}r.center?(a.setLngLat(r.center).addTo(this._map),this.options.popup&&a.setPopup(c)):r.geometry&&r.geometry.type&&r.geometry.type==="Point"&&r.geometry.coordinates&&(a.setLngLat(r.geometry.coordinates).addTo(this._map),this.options.popup&&a.setPopup(c)),this.resultMarkers.push(a)}}return this}_removeResultMarkers(){this.resultMarkers&&this.resultMarkers.length>0&&(this.resultMarkers.forEach(function(e){e.remove()}),this.resultMarkers=[])}on(e,t){return this._eventEmitter.on(e,t),this}once(e){return new Promise(t=>{this._eventEmitter.once(e,t)})}off(e,t){return this._eventEmitter.removeListener(e,t),this}}function nt(o){var e=function(n){var r=n.dispatch,i=n.getState;return function(a){return function(c){return typeof c=="function"?c(r,i,o):a(c)}}};return e}var rt=nt();rt.withExtraArgument=nt;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends Ut{constructor(e){if(super(e),this.et=_e,e.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_e||e==null)return this.ft=void 0,this.et=e;if(e===qt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}de.directiveName="unsafeHTML",de.resultType=1;const Re=Gt(de);var K="NOT_FOUND";function tn(o){var e;return{get:function(n){return e&&o(e.key,n)?e.value:K},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function on(o,e){var t=[];function n(c){var d=t.findIndex(function(v){return e(c,v.key)});if(d>-1){var h=t[d];return d>0&&(t.splice(d,1),t.unshift(h)),h.value}return K}function r(c,d){n(c)===K&&(t.unshift({key:c,value:d}),t.length>o&&t.pop())}function i(){return t}function a(){t=[]}return{get:n,put:r,getEntries:i,clear:a}}var nn=function(e,t){return e===t};function rn(o){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!o(t[i],n[i]))return!1;return!0}}function an(o,e){var t=typeof e=="object"?e:{equalityCheck:e},n=t.equalityCheck,r=n===void 0?nn:n,i=t.maxSize,a=i===void 0?1:i,c=t.resultEqualityCheck,d=rn(r),h=a===1?tn(d):on(a,d);function v(){var b=h.get(arguments);if(b===K){if(b=o.apply(null,arguments),c){var E=h.getEntries(),k=E.find(function(_){return c(_.value,b)});k&&(b=k.value)}h.put(arguments,b)}return b}return v.clearCache=function(){return h.clear()},v}function sn(o){var e=Array.isArray(o[0])?o[0]:o;if(!e.every(function(n){return typeof n=="function"})){var t=e.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function ln(o){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var h=0,v,b={memoizeOptions:void 0},E=c.pop();if(typeof E=="object"&&(b=E,E=c.pop()),typeof E!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof E+"]");var k=b,_=k.memoizeOptions,y=_===void 0?t:_,g=Array.isArray(y)?y:[y],x=sn(c),L=o.apply(void 0,[function(){return h++,E.apply(null,arguments)}].concat(g)),j=o(function(){for(var s=[],u=x.length,p=0;p<u;p++)s.push(x[p].apply(null,arguments));return v=L.apply(null,s),v});return Object.assign(j,{resultFunc:E,memoizedResultFunc:L,dependencies:x,lastResult:function(){return v},recomputations:function(){return h},resetRecomputations:function(){return h=0}}),j};return r}var it=ln(an);const at="SET_LOCATOR_LOADING_START",st="SET_LOCATOR_LOADING_END",cn={isLoading:!1},lt="MOUSE_ENTER_FEATURE",ct="MOUSE_LEAVE_FEATURE",un={highlightedFeature:null,isLoading:!1},ut="RESET_PAGINATION",dt="SET_PREV_PAGINATION_PAGE",pt="SET_NEXT_PAGINATION_PAGE",ht="SET_HAS_PAGINATION",ft="SET_HAS_NO_PAGINATION",gt="SET_DATA_GEOJSON",mt="SET_DATA_TEASERS",vt="SET_DATA_LOAD_START",_t="SET_DATA_LOAD_END",bt="SET_CURRENT_VISIBLE_FEATURES",Ae=()=>({type:vt}),Ie=()=>({type:_t}),Fe=o=>({type:bt,payload:o}),dn=(o,e)=>e.properties.search_boost-o.properties.search_boost||o.properties.name.localeCompare(e.properties.name),pn=(o,e,t,n)=>o.getClusterLeaves(e,t,n),hn=(o,e,t,n,r,i)=>async(a,c)=>{const{currentPage:d}=c().pagination;a(Ae());try{const h=await(async v=>fetch(v).then(b=>b.json()))(o);a({type:gt,payload:h}),t.once("idle",async()=>{a(Ae());const v=[];for(const y of((g,x,L)=>{const j=[];let l=[];return L.forEach(s=>{x&&x.getLayer(s)&&j.push(s)}),j.length&&(l=x.queryRenderedFeatures({layers:j})),l})(0,t,n))if(Object.prototype.hasOwnProperty.call(y.properties,"cluster_id")){const g=t.getSource(y.source),x=await pn(g,y.properties.cluster_id,y.properties.point_count,0);v.push(...x)}else v.push(y);const b=(y=>{if(!y.length)return[];const g={};return y.filter(x=>{const{uid:L}=x.properties;return!g[L]&&(g[L]=!0,!0)})})(v),E=b.map(y=>y.properties.uid);if(a(E.length>i?{type:ht}:{type:ft}),a(Fe(E)),k=r,_=E,!(Array.isArray(k)&&Array.isArray(_)&&k.length===_.length&&k.every((y,g)=>y===_[g]))){const y=((x,L)=>({offset:(x-1)*L,limit:L}))(d,i),g=await(async(x,L,j)=>{if(!x.length)return null;const l=x.filter(p=>p.properties.search_boost||p.properties.name).sort(dn).splice(j.offset,j.limit).map(p=>p.properties.uid),s=new URLSearchParams({ids:l.join(",")}),u=L+(L.match(/[?]/g)?"&":"?")+s.toString();return fetch(u).then(p=>p.text())})(b,e,y);a({type:mt,payload:g}),a(Fe(E.sort()))}var k,_;a(Ie())})}catch(h){console.error("Could not load the location finder geoJSON",h)}a(Ie())},fn={geojson:null,teasers:null,isLoading:!1,currentlyVisibleFeatures:[]},yt="SET_SEARCH_LOADING_START",wt="SET_SEARCH_LOADING_END",gn={isLoading:!1},mn={hasPagination:!1,currentPage:1},jt="SET_POPUP_LOADING_START",xt="SET_POPUP_LOADING_END",Et="RESET_POPUP_FEATURE",kt="SET_POPUP_FEATURE",Ct="SET_POPUP_COORDINATES",Lt="RESET_POPUP_COORDINATES",vn=(o,e)=>async t=>{t({type:jt});try{const n=new URLSearchParams({ids:o}),r=e+(e.match(/[?]/g)?"&":"?")+n.toString();t((i=>({type:kt,payload:i}))(await fetch(r).then(i=>i.text())))}catch(n){console.error("Could not get popup content",n)}t({type:xt})},_n={feature:null,coordinates:null,isLoading:!1},bn=Vt({features:function(o=un,e){switch(e.type){case ct:return{...o,highlightedFeature:null};case lt:return{...o,highlightedFeature:e.payload}}return o},locator:function(o=cn,e){switch(e.type){case at:return{...o,isLoading:!0};case st:return{...o,isLoading:!1}}return o},data:function(o=fn,e){switch(e.type){case gt:return{...o,geojson:e.payload};case mt:return{...o,teasers:e.payload};case vt:return{...o,isLoading:!0};case _t:return{...o,isLoading:!1};case bt:return{...o,currentlyVisibleFeatures:e.payload}}return o},search:function(o=gn,e){switch(e.type){case yt:return{...o,isLoading:!0};case wt:return{...o,isLoading:!1}}return o},pagination:function(o=mn,e){switch(e.type){case ut:return{...o,currentPage:1};case dt:{const t=o.currentPage===1?1:o.currentPage-1;return{...o,currentPage:t}}case pt:{const t=o.currentPage+1;return{...o,currentPage:t}}case ht:return{...o,hasPagination:!0};case ft:return{...o,hasPagination:!1}}return o},popup:function(o=_n,e){switch(e.type){case jt:return{...o,isLoading:!0};case xt:return{...o,isLoading:!1};case Et:return{...o,feature:null};case kt:return{...o,feature:e.payload};case Ct:return{...o,coordinates:e.payload};case Lt:return{...o,coordinates:null}}return o}}),Pt=function(){const o=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):Jt)(Zt(rt.withExtraArgument({})));return Wt(bn,o)}();function Q(o,e){return e||(e=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(e)}}))}var ze;customElements.define("toujou-location-finder-teaser",class extends Je{constructor(){super(),this.isHighlightedAttribute="is-highlighted",this.teaserLinkSelector=".teaser",this.onStateChange=this.onStateChange.bind(this),this._featureUid=this.getAttribute("feature-uid"),this._teaserLinkEl=this.querySelector(this.teaserLinkSelector),this.store=Pt,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}render(){return I`<slot id="slot"></slot>`}set _highlightedFeature(o){o==this._featureUid?this._teaserLinkEl.setAttribute(this.isHighlightedAttribute,""):this._teaserLinkEl.removeAttribute(this.isHighlightedAttribute)}onStateChange(){this._state=this.store.getState(),this._highlightedFeature=this._state.features.highlightedFeature}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave)}_onMouseEnter(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-enter",{composed:!0,detail:{featureUid:this.getAttribute("feature-uid")}}))}_onMouseLeave(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-leave",{composed:!0}))}});var De,Ne,Be,yn=Y(ze||(ze=Q([`* {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

:host {
    display: var(--toujou-location-finder-host-display, grid);
    grid-template-columns: var(--toujou-location-finder-host-grid-template-columns, 1fr);
    grid-gap: var(--toujou-location-finder-host-grid-gap, 1rem);
    position: var(--toujou-location-finder-host-position, relative);
}

.location-finder__map {
    height: var(--toujou-location-finder-map-height, auto);
    max-height: var(--toujou-location-finder-map-max-height, 50vh);
    grid-row: var(--toujou-location-finder-map-grid-row, 2);
}

.sidebar__ui-button {
    display: var(--toujou-location-finder-search-ui-button-display, block);
    height: var(--toujou-location-finder-search-ui-button-height, var(--toujou-location-finder-search-height));
    width: var(--toujou-location-finder-search-ui-button-width, var(--toujou-location-finder-search-height));
    border-radius: var(--toujou-location-finder-search-border-radius, .25rem);
    background-color: var(--toujou-location-finder-sidebar-buttons-bg, var(--bg-color));
    position: var(--toujou-location-finder-sidebar-buttons-position, absolute);
    border: var(--toujou-location-finder-sidebar-buttons-border, none);
    outline: var(--toujou-location-finder-sidebar-buttons-outline, none);
    -webkit-box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
            box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
    cursor: var(--toujou-location-finder-sidebar-buttons-cursor, pointer);
}

.sidebar__ui-button:after {
    content: '';
    height: var(--toujou-location-finder-sidebar-io-button-after-height, 1rem);
    width: var(--toujou-location-finder-sidebar-io-button-after-width, 1rem);
    background-color: var(--toujou-location-finder-sidebar-io-button-after-background-color, var(--font-color));
    -webkit-mask-size: var(--toujou-location-finder-sidebar-io-button-after-mask-size, contain);
    mask-size: var(--toujou-location-finder-sidebar-io-button-after-mask-size, contain);
    -webkit-mask-position: var(--toujou-location-finder-sidebar-io-button-after-mask-position, center);
    mask-position: var(--toujou-location-finder-sidebar-io-button-after-mask-position, center);
    -webkit-mask-repeat: var(--toujou-location-finder-sidebar-io-button-after-mask-repeat, no-repeat);
    mask-repeat: var(--toujou-location-finder-sidebar-io-button-after-mask-repeat, no-repeat);
    position: var(--toujou-location-finder-sidebar-io-button-after-position, absolute);
    top: var(--toujou-location-finder-sidebar-io-button-after-top, 50%);
    left: var(--toujou-location-finder-sidebar-io-button-after-left, 50%);
    opacity: var(--toujou-location-finder-sidebar-io-button-after-opacity, .5);
}

.sidebar__ui-button--locator {
    top: var(--toujou-location-finder-locator-top, calc(var(--toujou-location-finder-search-height) + 1rem + var(--toujou-location-finder-padding)));
    left: var(--toujou-location-finder-locator-left, var(--toujou-location-finder-padding));
    -webkit-transition: var(--toujou-location-finder-locator-transform, transform var(--toujou-location-finder-transition-settings));
    transition: var(--toujou-location-finder-locator-transform, transform var(--toujou-location-finder-transition-settings));
}

.sidebar__ui-button--locator:after {
    height: var(--toujou-location-finder-sidebar-locator-icon-height, 1.5rem);
    width: var(--toujou-location-finder-sidebar-locator-icon-width, 1.5rem);
    -webkit-mask-image: var(--toujou-location-finder-sidebar-locator-icon-image, var(--toujou-location-finder-icon-target));
    mask-image: var(--toujou-location-finder-sidebar-locator-icon-image, var(--toujou-location-finder-icon-target));
    -webkit-transform: var(--toujou-location-finder-sidebar-locator-icon-transform, translate(-50%, -50%));
            transform: var(--toujou-location-finder-sidebar-locator-icon-transform, translate(-50%, -50%));
    -webkit-transition: var(--toujou-location-finder-sidebar-locator-icon-transition, transform .25s ease-in-out);
    transition: var(--toujou-location-finder-sidebar-locator-icon-transition, transform .25s ease-in-out);
}

.sidebar__ui-button--locator[locatorisloading]:after {
    height: var(--toujou-location-finder-sidebar-locator-loader-height, 1rem);
    width: var(--toujou-location-finder-sidebar-locator-loader-width, 1rem);
    mask-image: var(--toujou-location-finder-sidebar-locator-loader-image, none);
    -webkit-mask-image: var(--toujou-location-finder-sidebar-locator-loader-image, none);
    border-radius: var(--toujou-location-finder-sidebar-locator-loader-border-radius, 50%);
    border: var(--toujou-location-finder-sidebar-locator-loader-border, 3px solid transparent);
    border-top-color: var(--toujou-location-finder-sidebar-locator-loader-border-top-color, var(--primary-color));
    -webkit-animation: var(--toujou-location-finder-sidebar-locator-loader-animation, locatorLoadingAnimation 1s linear infinite);
            animation: var(--toujou-location-finder-sidebar-locator-loader-animation, locatorLoadingAnimation 1s linear infinite);
    opacity: var(--toujou-location-finder-sidebar-locator-loader-opacity, 1);
    background-color: var(--toujou-location-finder-sidebar-locator-loader-background-color, transparent);
}

@-webkit-keyframes locatorLoadingAnimation {
    0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
    100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes locatorLoadingAnimation {
    0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
    100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}

@media (hover: hover) {
    .sidebar__ui-button:hover:after {
        opacity: 1;
    }
    .sidebar__ui-button--locator[locatorisloading] {
        pointer-events: none;
    }
}

/* SIDEBAR PANEL */

.sidebar__panel {
    position: var(--toujou-location-finder-panel-position, relative);
    background-color: var(--toujou-location-finder-panel-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-panel-width, 100%);
    border-radius: var(--toujou-location-finder-panel-border-radius, var(--toujou-location-finder-radius));
    -webkit-box-shadow: var(--toujou-location-finder-panel-shadow, var(--toujou-location-finder-shadow));
            box-shadow: var(--toujou-location-finder-panel-shadow, var(--toujou-location-finder-shadow));
    display: var(--toujou-location-finder-panel-display, flex);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: var(--toujou-location-finder-panel-flex-direction, column);
            flex-direction: var(--toujou-location-finder-panel-flex-direction, column);
    overflow: var(--toujou-location-finder-panel-overflow, hidden);
    z-index: var(--toujou-location-finder-panel-z-index, 1);
    padding: var(--toujou-location-finder-panel-padding, 0);
}

/* TEASERS */

.teasers {
    background-color: var(--toujou-location-finder-teasers-bg-color, var(--bg-color));
    position: var(--toujou-location-finder-teasers-position, relative);
    width: var(--toujou-location-finder-teasers-width, 100%);
}

:host([hasPagination]) .teasers {
    padding-bottom: var(--toujou-location-finder-teasers-no-pagination-padding-bottom, 0);
}

/* LOADING BAR */

.loading-bar {
    height: var(--toujou-location-finder-loading-bar-height, 4px);
    width: var(--toujou-location-finder-loading-bar-width, 100%);
    position: var(--toujou-location-finder-loading-bar-position, absolute);
    top: calc(var(--toujou-location-finder-search-height) + 1rem );
    left: var(--toujou-location-finder-loading-bar-left, 0);
    background-color: var(--toujou-location-finder-loading-bar-bg-color, var(--font-color--light));
    z-index: var(--toujou-location-finder-loading-bar-z-index, 1);
    pointer-events: var(--toujou-location-finder-loading-bar-pointer-events, none);
    opacity: 0;
}

:host([isLoading]) .loading-bar {
    opacity: var(--toujou-location-finder-loading-bar-opacity, .875);
}

.loading-bar:after {
    content: '';
    display: block;
    height: var(--toujou-location-finder-loading-bar-height);
    background-color: var(--toujou-location-finder-loading-bar-mover-color, var(--primary-color));
    position: var(--toujou-location-finder-loading-bar-after-position, absolute);
    top: var(--toujou-location-finder-loading-bar-top, 0);
    left: var(--toujou-location-finder-loading-bar-left, 0);
    right: var(--toujou-location-finder-loading-bar-right, 100%);
    -webkit-animation-name: var(--toujou-location-finder-loading-bar-animation-name, loadingBarAnimation);
            animation-name: var(--toujou-location-finder-loading-bar-animation-name, loadingBarAnimation);
    -webkit-animation-duration: var(--toujou-location-finder-loading-bar-animation-duration, 1.5s);
            animation-duration: var(--toujou-location-finder-loading-bar-animation-duration, 1.5s);
    -webkit-animation-timing-function: var(--toujou-location-finder-loading-bar-animation-easing, linear);
            animation-timing-function: var(--toujou-location-finder-loading-bar-animation-easing, linear);
    -webkit-animation-iteration-count: var(--toujou-location-finder-loading-bar-animation-iteration-count, infinite);
            animation-iteration-count: var(--toujou-location-finder-loading-bar-animation-iteration-count, infinite);
}

@-webkit-keyframes loadingBarAnimation {
    0% {
        left: 0;
        right: 100%;
    }
    35%, 50% {
        left: 0;
        right: 0;
    }
    85%, 100% {
        left: 100%;
        right: 0;
    }
}

@keyframes loadingBarAnimation {
    0% {
        left: 0;
        right: 100%;
    }
    35%, 50% {
        left: 0;
        right: 0;
    }
    85%, 100% {
        left: 100%;
        right: 0;
    }
}

/* PAGINATION */

.pagination {
    width: var(--toujou-location-finder-pagination-width, var(--toujou-location-finder-sidebar-width));
    height: var(--toujou-location-finder-pagination-height, var(--toujou-location-finder-search-height));
    display: var(--toujou-location-finder-pagination-display, flex);
    -webkit-box-align: var(--toujou-location-finder-pagination-align-items, center);
        -ms-flex-align: var(--toujou-location-finder-pagination-align-items, center);
            align-items: var(--toujou-location-finder-pagination-align-items, center);
    -webkit-box-pack: var(--toujou-location-finder-pagination-justify-content, space-between);
        -ms-flex-pack: var(--toujou-location-finder-pagination-justify-content, space-between);
            justify-content: var(--toujou-location-finder-pagination-justify-content, space-between);
    background-color: var(--toujou-location-finder-pagination-bg-color, var(--bg-color));
    padding: var(--toujou-location-finder-pagination-padding, 0 calc(var(--toujou-location-finder-padding) / 4));
    border-top: var(--toujou-location-finder-pagination-border-top, 1px solid var(--font-color--light));
}

.pagination__button {
    border: var(--toujou-location-finder-pagination-button-border, none);
    outline: var(--toujou-location-finder-pagination-button-outline, none);
    height: var(--toujou-location-finder-pagination-button-height, 1.5rem);
    width: var(--toujou-location-finder-pagination-button-width, 1.5rem);
    background-color: var(--toujou-location-finder-pagination-button-bg-color, var(--font-color));
    mask-position: var(--toujou-location-finder-pagination-button-mask-position, center);
    -webkit-mask-position: var(--toujou-location-finder-pagination-button-mask-position, center);
    mask-repeat: var(--toujou-location-finder-pagination-button--mask-repeat, no-repeat);
    -webkit-mask-repeat: var(--toujou-location-finder-pagination-button--mask-repeat, no-repeat);
    mask-size: var(--toujou-location-finder-pagination-button-mask-size, contain);
    -webkit-mask-size: var(--toujou-location-finder-pagination-button-mask-size, contain);
    mask-image: var(--toujou-location-finder-pagination-button-image, var(--medatsu-icon-chevron-down));
    -webkit-mask-image: var(--toujou-location-finder-pagination-button-image, var(--medatsu-icon-chevron-down));
    opacity: var(--toujou-location-finder-pagination-button-opacity, .5);
    cursor: var(--toujou-location-finder-pagination-button-cursor, pointer);
}

.pagination__button[disabled] {
    pointer-events: none;
    opacity: 0;
}

.pagination__button--prev {
    -webkit-transform: var(--toujou-location-finder-pagination-button-prev-transform, rotate(90deg));
            transform: var(--toujou-location-finder-pagination-button-prev-transform, rotate(90deg));
}

.pagination__button--next {
    -webkit-transform: var(--toujou-location-finder-pagination-button-next-transform, rotate(-90deg));
            transform: var(--toujou-location-finder-pagination-button-next-transform, rotate(-90deg));
}

.pagination__text {
    font-size: var(--toujou-location-finder-pagination-text-size, .875rem);
}

@media (hover: hover) {
    .pagination__button:hover {
        background-color: var(--toujou-location-finder-pagination-button-bg-color-hover, var(--primary-color));
        opacity: var(--toujou-location-finder-pagination-button-opacity-hover, 1);
    }
}

@media screen and (min-width: 840px) {
    :host {
        display: block;
    }

    .loading-bar {
        top: 0;
    }

    .location-finder__map {
        max-height: var(--toujou-location-finder-map-max-height, 75vh);
    }

    .sidebar__ui-button--locator {
        left: var(--toujou-location-finder-locator-left, calc(var(--toujou-location-finder-sidebar-width) + calc(var(--toujou-location-finder-padding) * 2) ));
        top: var(--toujou-location-finder-locator-top, var(--toujou-location-finder-padding));
    }

    .sidebar__panel {
        position: var(--toujou-location-finder-panel-position, absolute);
        width: var(--toujou-location-finder-panel-width, var(--toujou-location-finder-sidebar-width));
        top: var(--toujou-location-finder-panel-top, calc(var(--toujou-location-finder-padding) + var(--toujou-location-finder-search-height) + 2px));
        left: var(--toujou-location-finder-panel-left, var(--toujou-location-finder-padding));
        -webkit-transform: var(--toujou-location-finder-panel-transform, translateX(0));
                transform: var(--toujou-location-finder-panel-transform, translateX(0));
        -webkit-transition: var(--toujou-location-finder-panel-transition, transform var(--toujou-location-finder-transition-settings));
        transition: var(--toujou-location-finder-panel-transition, transform var(--toujou-location-finder-transition-settings));
        height: var(--toujou-location-finder-panel-height, calc(100% - calc(var(--toujou-location-finder-padding) * 3) - calc(var(--toujou-location-finder-search-height)) - 1.5rem));
    }

    .teasers {
        width: var(--toujou-location-finder-teasers-width, var(--toujou-location-finder-sidebar-width));
        max-height: var(--toujou-location-finder-teasers-max-height, calc(var(--toujou-location-finder-map-height) - (var(--toujou-location-finder-padding) * 3) - var(--toujou-location-finder-search-height)));
        overflow: var(--toujou-location-finder-teasers--overflow, auto);
        padding: var(--toujou-location-finder-teasers-padding, calc(var(--toujou-location-finder-padding) / 4) 0);
    }
}
`]))),wn=Y(De||(De=Q([`/* TEASER */
.teaser {
    --toujou-location-finder-teaser-border-bottom: 1px solid var(--font-color--light);

    padding: var(--toujou-location-finder-teaser--padding, .5rem);
    display: var(--toujou-location-finder-teaser-display, grid);
    grid-template-columns: var(--toujou-location-finder-teaser-grid-columns, 1fr var(--toujou-location-finder-image-size));
    grid-gap: var(--toujou-location-finder-teaser-gap, .5rem);
    -webkit-text-decoration: var(--toujou-location-finder-teaser-text-decoration, none);
            text-decoration: var(--toujou-location-finder-teaser-text-decoration, none);
}
toujou-location-finder-teaser:not(:last-child) .teaser {
    border-bottom: var(--toujou-location-finder-teaser-not-last-child-teaser-border-bottom, var(--toujou-location-finder-teaser-border-bottom));
}
.teaser[teaserhasnoimage] {
    grid-template-columns: var(--toujou-location-finder-teaser-no-image-grid-template-columns, var(--toujou-location-finder-teaser-grid-columns-no-image, 1fr));
}
.teaser:not(:last-child) {
    border-bottom: var(--toujou-location-finder-teaser-last-child-border-bottom, var(--toujou-location-finder-teaser-separator));
}
.teaser__image,
.teaser__logo-container {
    min-height: var(--toujou-location-finder-image-size, 80px);
    height: var(--toujou-location-finder-image-size, 80px);
    width: var(--toujou-location-finder-image-size, 80px);
    -o-object-fit: var(--toujou-location-finder-image-object-fit, cover);
       object-fit: var(--toujou-location-finder-image-object-fit, cover);
    border-radius: var(--toujou-location-finder-teaser-image-radius, 2px);
}
.teaser__image--logo {
    -o-object-fit: var(--toujou-location-finder-logo-object-fit, contain);
       object-fit: var(--toujou-location-finder-logo-object-fit, contain);
}
.teaser__title {
    display: var(--toujou-location-finder-title-display, grid);
    grid-template-columns: var(--toujou-location-finder-title-grid-template-columns, auto 1fr);
    margin-bottom: var(--toujou-location-finder-title-margin-bottom, 0);
}
.teaser__name {
    font-weight: var(--toujou-location-finder-teaser-name-font-weight, var(--paragraph__bold));
    font-size: var(--toujou-location-finder-teaser-name-font-size, 1.25rem);
    font-family: var(--toujou-location-finder-teaser-name-font-family, var(--headline__family));
    margin-top: var(--toujou-location-finder-teaser-name-margin-top, 0);
    margin-bottom: var(--toujou-location-finder-teaser-name-margin-bottom, 0);
    color: var(--toujou-location-finder-teaser-name-color, var(--primary-color));
    display: var(--toujou-location-finder-teaser-name-display, block);
}
.teaser__branch {
    font-size: var(--toujou-location-finder-teaser-branch-font-size, 1rem);
    display: var(--toujou-location-finder-teaser-branch-display, block);
    font-weight:var(--toujou-location-finder-teaser-branch-font-weight,  var(--paragraph__normal));
    font-family: var(--toujou-location-finder-teaser-branch-font-family, var(--paragraph__family));
    margin-top: var(--toujou-location-finder-teaser-branch-margin-top, .125rem);
    color: var(--toujou-location-finder-teaser-branch-color, var(--font-color));
    opacity: var(--toujou-location-finder-teaser-branch-opacity, .75);
}
.teaser__type {
    font-family: var(--toujou-location-finder-teaser-name-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-type-font-size, .75rem);
    font-weight: var(--toujou-location-finder-teaser-type-font-weight, var(--paragraph__bold));
    text-transform: var(--toujou-location-finder-teaser-type-text-transform, uppercase);
    opacity: var(--toujou-location-finder-teaser-type-opacity, .5);
    margin: var(--toujou-location-finder-teaser-type-margin, .5rem 0 0);
    color: var(--toujou-location-finder-teaser-type-color, var(--font-color));
}
.teaser__description {
    font-family: var(--toujou-location-finder-teaser-description-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-description-font-size, .875rem);
    margin: var(--toujou-location-finder-teaser-description-margin, .5rem 0 0);
    overflow: var(--toujou-location-finder-teaser-description-overflow, hidden);
    text-overflow: var(--toujou-location-finder-teaser-description-text-overflow, ellipsis);
    white-space: var(--toujou-location-finder-teaser-description-white-space, initial);
    display: var(--toujou-location-finder-teaser-description-display, -webkit-box);
    -webkit-line-clamp: var(--toujou-location-finder-teaser-description-line-clamp, 2);
    -webkit-box-orient: var(--toujou-location-finder-teaser-description-box-orient, vertical);
    color: var(--toujou-location-finder-teaser-description-color, var(--font-color));
    line-height: var(--toujou-location-finder-teaser-description-line-height, 1.25);
}
.teaser__address {
    margin-bottom: var(--toujou-location-finder-teaser-address-margin-bottom, .25rem);
    margin-top: var(--toujou-location-finder-teaser-address-margin-top, .25rem);
}
.teaser__address-meta,
.teaser__time {
    display:  var(--toujou-location-finder-teaser-meta-display, inline-block);
    font-size: var(--toujou-location-finder-teaser-meta-font-size, .875rem);
    font-family:  var(--toujou-location-finder-teaser-meta-font-family, var(--paragraph__family));
    color: var(--toujou-location-finder-teaser-meta-color, var(--font-color));
    font-style:  var(--toujou-location-finder-teaser-meta-font-style, normal);
    opacity: var(--toujou-location-finder-teaser-meta-opacity, .75);
    line-height: var(--toujou-location-finder-teaser-meta-line-height, 1.2);
}
.teaser__times {
    font-family: var(--toujou-location-finder-teaser-times-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-times-font-size, 1rem);
    line-height:  var(--toujou-location-finder-teaser-times-line-height, 1);
}
.teaser__address-meta--country,
.teaser__address-meta--region {
    display:  var(--toujou-location-finder-teaser-meta-country-display, block);
}
.teaser__address-meta--telephone,
.teaser__address-meta--email,
.teaser__address-meta--description {
    display:  var(--toujou-location-finder-teaser-meta-phone-display, block);
    margin-top:  var(--toujou-location-finder-teaser-meta-phone-margin-top, .25rem);
}
.teaser > *:last-child {
    margin-bottom:  var(--toujou-location-finder-teaser-last-child-inside-margin-bottom, .25rem);
}
.teaser__day {
    display:  var(--toujou-location-finder-teaser-day-display, inline-block);
    width:  var(--toujou-location-finder-teaser-day-width, 75px);
}
toujou-location-finder-teaser[highlighted] .teaser {
    background-color: var(--toujou-location-finder-teaser-highlighted-bg-color, rgba(150, 150, 150, .1));
}
toujou-location-finder-teaser[highlighted] .teaser .teaser__title {
    color: var(--toujou-location-finder-teaser-highlighted-title-color, var(--primary-color));
}
@media (hover: hover) {
    .teaser:hover, .teaser[is-highlighted] {
        background-color: var(--toujou-location-finder-teaser-highlighted-bg-color);
    }

    :is(.teaser:hover, .teaser[is-highlighted]) .teaser__title {
        color: var(--toujou-location-finder-teaser-highlighted-title-color, var(--primary-color));
    }
}
`]))),jn=Y(Ne||(Ne=Q([`/* POPUP */
.location-finder-popup {
    background-color: var(--toujou-location-finder-popup-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-popup-width, var(--toujou-location-finder-sidebar-width));
    max-width: var(--toujou-location-finder-popup-max-width, 100%);
    font-family: var(--paragraph__family);
    font-weight: var(--paragraph__normal);
    padding: var(--toujou-location-finder-popup-padding, .5rem);
    margin: var(--toujou-location-finder-popop-margin, 0);
}
.location-finder-popup .teaser {
    padding: var(--toujou-location-finder-popup-teaser-padding, 0);
}
.location-finder-popup .teaser[teaserhasnoimage] {
    padding: var(--toujou-location-finder-popop-teaser-no-image-padding, 0 .25rem);
}
.location-finder-popup .teaser__details {
    padding: var(--toujou-location-finder-popup-teaser-details-padding, .25rem 0);
}
`]))),xn=Y(Be||(Be=Q([`/* Basics */
.maplibregl-ctrl-geocoder,
.maplibregl-ctrl-geocoder *,
.maplibregl-ctrl-geocoder *:after,
.maplibregl-ctrl-geocoder *:before {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.maplibregl-ctrl-geocoder {
  font-size: 18px;
  line-height: 24px;
  font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fff;
  width: 100%;
  min-width: 240px;
  z-index: 1;
  border-radius: 4px;
  -webkit-transition: width 0.25s, min-width 0.25s;
  transition: width 0.25s, min-width 0.25s;
}
.maplibregl-ctrl-geocoder--input {
  font: inherit;
  width: 100%;
  border: 0;
  background-color: transparent;
  margin: 0;
  height: 50px;
  color: #404040; /* fallback */
  color: rgba(0, 0, 0, 0.75);
  padding: 6px 45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.maplibregl-ctrl-geocoder--input::-ms-clear {
  display: none; /* hide input clear button in IE */
}
.maplibregl-ctrl-geocoder--input:focus {
  color: #404040; /* fallback */
  color: rgba(0, 0, 0, 0.75);
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: thin dotted;
}
.maplibregl-ctrl-geocoder .maplibregl-ctrl-geocoder--pin-right > * {
  z-index: 2;
  position: absolute;
  right: 8px;
  top: 7px;
  display: none;
}
.maplibregl-ctrl-geocoder,
.maplibregl-ctrl-geocoder .suggestions {
  -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
}
/* Collapsed */
.maplibregl-ctrl-geocoder.maplibregl-ctrl-geocoder--collapsed {
  width: 50px;
  min-width: 50px;
  -webkit-transition: width 0.25s, min-width 0.25s;
  transition: width 0.25s, min-width 0.25s;
}
/* Suggestions */
.maplibregl-ctrl-geocoder .suggestions {
  background-color: #fff;
  border-radius: 4px;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 110%; /* fallback */
  top: calc(100% + 6px);
  z-index: 1000;
  overflow: hidden;
  font-size: 15px;
}
.maplibregl-ctrl-bottom-left .suggestions,
.maplibregl-ctrl-bottom-right .suggestions {
  top: auto;
  bottom: 100%;
}
.maplibregl-ctrl-geocoder .suggestions > li > a {
  cursor: default;
  display: block;
  padding: 6px 12px;
  color: #404040;
}
.maplibregl-ctrl-geocoder .suggestions > .active > a,
.maplibregl-ctrl-geocoder .suggestions > li > a:hover {
  color: #404040;
  background-color: #f3f3f3;
  text-decoration: none;
  cursor: pointer;
}
.maplibregl-ctrl-geocoder--suggestion {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.maplibregl-ctrl-geocoder--suggestion-icon {
  min-width: 30px;
  min-height: 24px;
  max-width: 30px;
  max-height: 24px;
  padding-right: 12px;
}
.maplibregl-ctrl-geocoder--suggestion-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.maplibregl-ctrl-geocoder--suggestion-match {
  font-weight: bold;
}
.maplibregl-ctrl-geocoder--suggestion-title,
.maplibregl-ctrl-geocoder--suggestion-address {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.maplibregl-ctrl-geocoder--result {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.maplibregl-ctrl-geocoder--result-icon {
  min-width: 30px;
  min-height: 24px;
  max-width: 30px;
  max-height: 24px;
  padding-right: 12px;
}
.maplibregl-ctrl-geocoder--result-title {
  font-weight: bold;
}
.maplibregl-ctrl-geocoder--result-title,
.maplibregl-ctrl-geocoder--result-address {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/* Icons */
.maplibregl-ctrl-geocoder--icon {
  display: inline-block;
  vertical-align: middle;
  speak: none;
  fill: #757575;
  top: 15px;
}
.maplibregl-ctrl-geocoder--icon-search {
  position: absolute;
  top: 13px;
  left: 12px;
  width: 23px;
  height: 23px;
}
.maplibregl-ctrl-geocoder--button {
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: #fff;
  line-height: 1;
}
.maplibregl-ctrl-geocoder--icon-close {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-right: 3px;
}
.maplibregl-ctrl-geocoder--button:hover .maplibregl-ctrl-geocoder--icon-close {
  fill: #909090;
}
.maplibregl-ctrl-geocoder--icon-loading {
  width: 26px;
  height: 26px;
  margin-top: 5px;
  margin-right: 0px;
  -webkit-animation: rotate 0.8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation: rotate 0.8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
/* Animation */
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/* Media queries*/
@media screen and (min-width: 640px) {
  .maplibregl-ctrl-geocoder.maplibregl-ctrl-geocoder--collapsed {
    width: 36px;
    min-width: 36px;
  }

  .maplibregl-ctrl-geocoder {
    width: 33.3333%;
    font-size: 15px;
    line-height: 20px;
    max-width: 360px;
  }
  .maplibregl-ctrl-geocoder .suggestions {
    font-size: 13px;
  }

  .maplibregl-ctrl-geocoder--icon {
    top: 8px;
  }

  .maplibregl-ctrl-geocoder--icon-close {
    width: 16px;
    height: 16px;
    margin-top: 3px;
    margin-right: 0;
  }

  .maplibregl-ctrl-geocoder--icon-search {
    left: 7px;
    width: 20px;
    height: 20px;
  }

  .maplibregl-ctrl-geocoder--input {
    height: 36px;
    padding: 6px 35px;
  }

  .maplibregl-ctrl-geocoder--icon-loading {
    width: 26px;
    height: 26px;
    margin-top: -2px;
    margin-right: -5px;
  }

  .maplibre-gl-geocoder--error {
    color: #909090;
    padding: 6px 12px;
    font-size: 16px;
    text-align: center;
  }
}
.search {
    display: var(--toujou-location-finder-search-display, block);
    position: var(--toujou-location-finder-search-position, relative);
    background-color: var(--toujou-location-finder-search-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-search-width, 100%);
    max-width: var(--toujou-location-finder-search-max-width, 100%);
    height: var(--toujou-location-finder-search-height, 2.5rem);
    border-radius: var(--toujou-location-finder-search-border-radius, .25rem);
    -webkit-box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
            box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
    padding: var(--toujou-location-finder-search-padding, 0);
    border: var(--toujou-location-finder-search-border, none);
    outline: var(--toujou-location-finder-search-outline, none);
    -webkit-transform: var(--toujou-location-finder-search-transform, translateX(0));
            transform: var(--toujou-location-finder-search-transform, translateX(0));
    -webkit-transition: -webkit-transform var(--toujou-location-finder-transition-settings);
    transition: -webkit-transform var(--toujou-location-finder-transition-settings);
    transition: transform var(--toujou-location-finder-transition-settings);
    transition: transform var(--toujou-location-finder-transition-settings), -webkit-transform var(--toujou-location-finder-transition-settings);
    margin: var(--toujou-location-finder-search-margin, 0);
    z-index: var(--toujou-location-finder-search-z-index, 2);
    grid-row: var(--toujou-location-finder-search-grid-row, 1);
}
:host([ismobile][map-is-hidden]) {
    --toujou-location-finder-search-display: none;
}
/* GEOCODER */
.search .mapboxgl-ctrl-geocoder {
    min-height: var(--toujou-location-finder-search-geocoder-min-height, 100%);
    width: var(--toujou-location-finder-search-geocoder-width, 100%);
    max-width: var(--toujou-location-finder-search-geocoder-max-width, 100%);
    outline: var(--toujou-location-finder-search-outline, none);
    -webkit-box-shadow: var(--toujou-location-finder-search-geocoder-box-shadow, none);
            box-shadow: var(--toujou-location-finder-search-geocoder-box-shadow, none);
    font-family: var(--toujou-location-finder-search-geocoder-font-family, var(--paragraph__family));
    font-weight: var(--toujou-location-finder-search-geocoder-font-weight, var(--paragraph__normal));
    color: var(toujou-location-finder-search-input-color, var(--font-color));
    border: var(--toujou-location-finder-search-geocoder-border, 1px solid var(--font-color--light));
}
.search .mapboxgl-ctrl-geocoder--input {
    height: var(--toujou-location-finder-search-height, 2.5rem);
    background-color: var(--toujou-location-finder-search-bg-color, transparent);
    font-family: var(--toujou-location-finder-search-input-font-family, var(--paragraph__family));
    font-weight: var(--toujou-location-finder-search-input-font-weight, var(--headline__weight));
    border-radius: var(--toujou-location-finder-search-input-border-radius, 0);
    border: var(--toujou-location-finder-search-input-border, none);
    padding: var(--toujou-location-finder-search-input-padding, 6px 35px);
}
.search .mapboxgl-ctrl-geocoder--input:focus {
    outline: var(--toujou-location-finder-search-outline-focus, none);
}
.search .mapboxgl-ctrl-geocoder--icon-search {
    top: var(--toujou-location-finder-search-geocoder-icon-search-top, 50%);
    -webkit-transform: var(--toujou-location-finder-search-geocoder-icon-search-transform, translateY(-50%));
            transform: var(--toujou-location-finder-search-geocoder-icon-search-transform, translateY(-50%));
}
.search .mapboxgl-ctrl-geocoder--icon-search path {
    fill: var(--toujou-location-finder-search-search-icon-color, var(--font-color));
    opacity: var(--toujou-location-finder-search-close-icon-opacity, .5);
}
.search .mapboxgl-ctrl-geocoder--pin-right > * {
    top: var(--toujou-location-finder-search-geocoder-pin-right-top, 50%);
    -webkit-transform: var(--toujou-location-finder-search-geocoder-pin-right-transform, translateY(-50%));
            transform: var(--toujou-location-finder-search-geocoder-pin-right-transform, translateY(-50%));
}
.search .mapboxgl-ctrl-geocoder--icon-close {
    margin-top: var(--toujou-location-finder-search-geocoder-icon-close-margin-top, 0);
}
.search .mapboxgl-ctrl-geocoder--icon-close path {
    fill: var(--toujou-location-finder-search-close-icon-color, var(--font-color));
    opacity: var(--toujou-location-finder-search-close-icon-opacity, .5);
}
.search .mapboxgl-ctrl-geocoder--pin-right .mapboxgl-ctrl-geocoder--icon-loading {
    top: var(--toujou-location-finder-search-geocoder-icon-loading-top, 6px);
}
.search .mapboxgl-ctrl-geocoder--icon-loading path {
    fill: var(--toujou-location-finder-search-loading-icon-color, var(--primary-color));
}
@media (hover: hover) {
    .search .mapboxgl-ctrl-geocoder--icon-close:hover path {
        fill: var(--toujou-location-finder-search-close-icon-color, var(--font-color));
        opacity: var(--toujou-location-finder-search-close-icon-opacity-hover, 1);
    }
}
@media screen and (min-width: 840px) {
    .search {
        position: var(--toujou-location-finder-search-position, absolute);
        top: var(--toujou-location-finder-search-top, var(--toujou-location-finder-padding));
        left: var(--toujou-location-finder-search-left, var(--toujou-location-finder-padding));
        width: var(--toujou-location-finder-search-width, var(--toujou-location-finder-sidebar-width));
        max-width: var(--toujou-location-finder-search-max-width, var(--toujou-location-finder-sidebar-width));
    }

    .search .mapboxgl-ctrl-geocoder {
        border: var(--toujou-location-finder-search-geocoder--border, none);
    }
}
`])));const En=it(o=>o,o=>o.data.isLoading||o.locator.isLoading||o.search.isLoading||o.popup.isLoading),kn=it(o=>{var e;return(e=o.data.geojson)!==null&&e!==void 0?e:{type:"FeatureCollection",features:[]}},o=>o.features.highlightedFeature,(o,e)=>o&&Object.prototype.hasOwnProperty.call(o,"features")?{...o,features:o.features.map(t=>({type:t.type,geometry:t.geometry,properties:{...t.properties,isHighlighted:e===t.properties.uid}}))}:o);class $e extends Je{static get is(){return"toujou-location-finder"}static get styles(){return[yn,wn,jn,xn]}static get properties(){return{isLoading:{type:Boolean,reflect:!0},reducedMotion:{type:Boolean,attribute:"reduced-motion"},_geoJsonData:{type:Object},_geoJsonPoints:{type:Object},_geoJsonPolygons:{type:Object},_geoJsonLines:{type:Object},_map:{type:Object},_teasersData:{type:String},hasPagination:{type:Boolean,reflect:!0},_currentPage:{type:Number},bounds:{type:Array},geoJsonUrl:{type:String},filterParams:{type:String},teaserUrl:{type:String},_popupFeature:{type:Object},_popupCoordinates:{type:Array},isMobile:{type:Boolean,reflect:!0},accessToken:{type:String,attribute:"access-token"},mapStyle:{type:String,attribute:"map-style"},maxZoom:{type:Number},fitBoundsMaxZoom:{type:Number,attribute:"fit-bounds-max-zoom"},minZoom:{type:Number},_hideMap:{type:Boolean,attribute:"map-is-hidden",reflect:!0},locatorButtonLabel:{type:String,attribute:"locator-button-label"},paginationPrevButtonTitle:{type:String,attribute:"pagination-prev-button-title"},paginationNextButtonTitle:{type:String,attribute:"pagination-next-button-title"}}}get _geoJsonEndpointFull(){return this._bounds=this._map.getBounds(),`${this.geoJsonUrl}?north=${this._bounds._ne.lat}&south=${this._bounds._sw.lat}&east=${this._bounds._ne.lng}&west=${this._bounds._sw.lng}${this.filterParams}`}render(){const e=this.querySelectorAll('[slot="layers"]').length>0;return I`
      <div class="loading-bar" part="loading-bar"></div>
      <toujou-map
        class="location-finder__map"
        @toujou-map-ready="${this._onToujouMapReady}"
        .accessToken="${this.accessToken}"
        .mapStyle="${this.mapStyle}"
        .minZoom="${this.minZoom}"
        .maxZoom="${this.maxZoom}"
        .fitBoundsMaxZoom="${this.fitBoundsMaxZoom}"
        @toujou-map-layer-added="${this.onMapLayerAdded}"
        @toujou-map-layer-removed="${this.onMapLayerRemoved}"
        part="map"
      >
          ${e?I`<slot name="layers"></slot>`:this.renderLayers()}

          <toujou-map-geojson
            id="geoJsonSourcePolygons"
            ?cluster="${this._clusterRadius>0}"
            .clusterRadius="${this._clusterRadius}"
            .clusterMaxZoom="${Math.min(this._clusterMaxZoom,this.maxZoom)}"
            .sourceData='${this._geoJsonData}'
            source-id="geoJsonData">
          </toujou-map-geojson>

          ${this._popupFeature&&this._popupCoordinates?I`
            <toujou-map-popup .coordinates="${this._popupCoordinates}" part="map-popup">
                ${this._renderPopupContent()}
            </toujou-map-popup>
          `:""}
      </toujou-map>

      <div class="geocoder-container search" part="geocoder-container"></div>
      <button
        class="sidebar__ui-button sidebar__ui-button--locator"
        @click="${this._onLocatorClick}"
        ?locatorIsLoading="${this._locatorIsLoading}"
        aria-label="${this.locatorButtonLabel}"
        part="geocoder-container-locator-button"
      ></button>

      <slot name="location-finder-map-toggle" @click="${this._handleMapToggleClick}"></slot>

      <div class="sidebar__panel" part="sidebar-panel">
        ${this._teasersData?this._renderTeasers():""}
        ${this.hasPagination?this._renderPagination():""}
      </div>
    `}renderLayers(){const e={"fill-color":["case",["!=",["get","isHighlighted"],!0],this._mapPolygonColor,this._mapPolygonColorHover],"fill-opacity":.5},t={"circle-color":["case",["!=",["get","isHighlighted"],!0],this._mapPointColor,this._mapPointColorHover],"circle-radius":6,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"},n={"line-color":["case",["!=",["get","isHighlighted"],!0],this._mapLineColor,this._mapLineColorHover],"line-opacity":1,"line-width":3};return I`
        <!-- POLYGONS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_polygons"
          source="geoJsonData"
          type="fill"
          .paint='${e}'
          filter='["==", "$type", "Polygon"]'
        ></toujou-map-layer>

        <!-- POINTS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_points"
          source="geoJsonData"
          type="circle"
          .paint='${t}'
          filter='["==", "$type", "Point"]'
        ></toujou-map-layer>

      <!-- LINES LAYER -->
      <toujou-map-layer
        layer-id="geoJson_lines"
        source="geoJsonData"
        type="line"
        layout='{
          "line-join": "round",
          "line-cap": "round"
        }'
        .paint='${n}'
        filter='["==", "$type", "LineString"]'
      ></toujou-map-layer>

      <toujou-map-layer
        layer-id="clusters"
        source="geoJsonData"
        type="circle"
        filter='["has", "point_count"]'
        paint='{
          "circle-radius": [ "step", ["get", "point_count"], 12, 3, 16, 5, 20, 10, 25, 25, 30 ],
          "circle-color": "${this._clusterBgColor}",
          "circle-stroke-width": ${this._clusterBorderWidth},
          "circle-stroke-color": "${this._clusterBorderColor}"
        }'
      ></toujou-map-layer>
      <toujou-map-layer
        layer-id="cluster-count"
        source="geoJsonData"
        type="symbol"
        filter='["has", "point_count"]'
        layout='{ "text-field": "{point_count_abbreviated}", "text-size": ${this._clusterTextSize} }'
        paint='{ "text-color": "${this._clusterTextColor}" }'
      ></toujou-map-layer>`}constructor(){super(),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this.hasPagination=!1,this.bounds=[],this.accessToken=null,this.reducedMotion=!1,this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this._locatorIsLoading=!1,this._mql=null,this._layers=[],this._cssVarsFallbacks={mapPadding:16,mapPointColor:"var(--primary-color)",mapPointColorHover:"var(--primary-color--dark)",mapPolygonColor:"var(--primary-color)",mapPolygonColorHover:"var(--primary-color--dark)",mapLineColor:"var(--primary-color)",mapLineColorHover:"var(--primary-color--dark)",breakpoint:"840px",clusterBgColor:"var(--primary-color)",clusterBorderWidth:2,clusterBorderColor:"var(--primary-color)",clusterTextColor:"var(--bg-color)",clusterTextSize:16,clusterRadius:50,clusterMaxZoom:12},this.onStateChange=this.onStateChange.bind(this),this._onLocatorSuccess=this._onLocatorSuccess.bind(this),this._onLocatorError=this._onLocatorError.bind(this),this._onMapFeatureHoverEnter=this._onMapFeatureHoverEnter.bind(this),this._onMapFeatureHoverLeave=this._onMapFeatureHoverLeave.bind(this),this._onMapFeatureClick=this._onMapFeatureClick.bind(this),this._onMapClick=this._onMapClick.bind(this),this._onMapMoveEnd=this._onMapMoveEnd.bind(this),this._initGeocoder=this._initGeocoder.bind(this),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this.hasPagination=!1,this.bounds=[],this._locatorIsLoading=!1,this.accessToken=null,this._mql=null,this._hideMap=!1,this._deviceCanHover=window.matchMedia("(hover: hover)").matches,this._layers=[],this.locatorButtonLabel="Find my location",this.paginationPrevButtonTitle="Previous page",this.paginationNextButtonTitle="Next page",this.store=Pt,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.reducedMotion=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.addEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser),this._getCustomProperties()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.removeEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser)}updated(e){super.updated(e),e.has("_map")&&this._init(),e.has("_currentPage")&&this._map&&this._fetchData(),e.has("filterParams")&&this._map&&this._fetchData()}onStateChange(){this._state=this.store.getState(),this.isLoading=En(this._state);const e=kn(this._state);e&&(this._geoJsonData=e),this._teasersData=this._state.data.teasers,this._currentlyVisibleFeaturesUids=this._state.data.currentlyVisibleFeatures,this.hasPagination=this._state.pagination.hasPagination,this._currentPage=this._state.pagination.currentPage,this._popupFeature=this._state.popup.feature,this._popupCoordinates=this._state.popup.coordinates,this._locatorIsLoading=this._state.locator.isLoading}async _init(){this._map&&this._fetchData()}_setHighlightedFeatureID(e){this.store.dispatch((t=>({type:lt,payload:t}))(e))}_resetHighlightedFeatureID(){this.store.dispatch({type:ct})}_setLocatorLoadingStatus(e){this.store.dispatch(e?{type:at}:{type:st})}_onToujouMapReady(e){this._map=e.detail,this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop),this.bounds&&this._map.fitBounds(this.bounds,{animate:!this.reducedMotion}),this._initGeocoder(),this._initFullscreenControl(),this._map.on("moveend",this._onMapMoveEnd),this.dispatchEvent(new CustomEvent("toujou-location-finder-ready",{bubbles:!0,composed:!0,detail:this}))}onMapLayerAdded(e){const t=e.detail.id;this._layers.push(t),this._map.on("mouseover",t,this._onMapFeatureHoverEnter),this._map.on("mouseleave",t,this._onMapFeatureHoverLeave),this._map.on("click",t,this._onMapFeatureClick),this._map.on("click",this._onMapClick)}onMapLayerRemoved(e){const t=e.detail.id;this._layers=this._layers.filter(n=>n!==t),this._map.off("mouseover",t,this._onMapFeatureHoverEnter),this._map.off("mouseleave",t,this._onMapFeatureHoverLeave),this._map.off("click",t,this._onMapFeatureClick),this._map.off("click",this._onMapClick)}_onMouseEnterTeaser(e){this._setHighlightedFeatureID(+e.detail.featureUid)}_onMouseLeaveTeaser(){this._resetHighlightedFeatureID()}_onLocatorClick(){this._setLocatorLoadingStatus(!0),this._geocoder.clear(),navigator.geolocation?navigator.geolocation.getCurrentPosition(this._onLocatorSuccess,this._onLocatorError):console.error("Cannot get your location because Geolocation is not supported by your browser")}_onLocatorSuccess(e){const{latitude:t,longitude:n}=e.coords;this._map.flyTo({center:[n,t]}),this._setLocatorLoadingStatus(!1)}_onLocatorError(e){console.error("Could not get your location",e),this._setLocatorLoadingStatus(!1)}_onMapFeatureHoverEnter(e){this._deviceCanHover&&(this._map.getCanvas().style.cursor="pointer",this._setHighlightedFeatureID(e.features[0].properties.uid))}_onMapFeatureClick(e){e.features[0].properties.uid&&this._showPopup(e)}_onMapClick(){this._popupFeature&&(this.store.dispatch({type:Et}),this.store.dispatch({type:Lt}))}_onMapFeatureHoverLeave(){this._deviceCanHover&&(this._map.getCanvas().style.cursor="grab",this._resetHighlightedFeatureID())}_onMapMoveEnd(){this.store.dispatch({type:ut}),this._fetchData()}_onPaginationButtonClick(e){const t=e.currentTarget.getAttribute("paginationAction");t==="prev"&&this.store.dispatch({type:dt}),t==="next"&&this.store.dispatch({type:pt})}_showPopup(e){const t=e.features[0].geometry.type==="Point"?e.features[0].geometry.coordinates:e.lngLat;this.store.dispatch(vn(e.features[0].properties.uid,this.teaserUrl)),t&&this.store.dispatch({type:Ct,payload:t})}_getCustomProperties(){const e=window.getComputedStyle(document.body);this._mapPointColor=e.getPropertyValue("--toujou-location-finder-map-point-color")||this._cssVarsFallbacks.mapPointColor,this._mapPointColorHover=e.getPropertyValue("--toujou-location-finder-map-point-color-hover")||this._cssVarsFallbacks.mapPointColorHover,this._mapPolygonColor=e.getPropertyValue("--toujou-location-finder-map-polygon-color")||this._cssVarsFallbacks.mapPolygonColor,this._mapPolygonColorHover=e.getPropertyValue("--toujou-location-finder-map-polygon-color-hover")||this._cssVarsFallbacks.mapPolygonColorHover,this._mapLineColor=e.getPropertyValue("--toujou-location-finder-map-line-color")||this._cssVarsFallbacks.mapLineColor,this._mapLineColorHover=e.getPropertyValue("--toujou-location-finder-map-line-color-hover")||this._cssVarsFallbacks.mapLineColorHover,this._breakpoint=e.getPropertyValue("--toujou-location-finder-breakpoint")||this._cssVarsFallbacks.breakpoint,this._clusterBgColor=e.getPropertyValue("--toujou-location-finder-cluster-background-color")||this._cssVarsFallbacks.clusterBgColor,this._clusterBorderWidth=e.getPropertyValue("--toujou-location-finder-cluster-border-width")||this._cssVarsFallbacks.clusterBorderWidth,this._clusterBorderColor=e.getPropertyValue("--toujou-location-finder-cluster-border-color")||this._cssVarsFallbacks.clusterBorderColor,this._clusterTextColor=e.getPropertyValue("--toujou-location-finder-cluster-text-color")||this._cssVarsFallbacks.clusterTextColor,this._clusterTextSize=e.getPropertyValue("--toujou-location-finder-cluster-text-size")||this._cssVarsFallbacks.clusterTextSize,this._clusterRadius=parseInt(e.getPropertyValue("--toujou-location-finder-cluster-radius"),10)||this._cssVarsFallbacks.clusterRadius,this._clusterMaxZoom=e.getPropertyValue("--toujou-location-finder-cluster-max-zoom")||this._cssVarsFallbacks.clusterMaxZoom,this._mapPaddingMobile={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-right"),10)||this._cssVarsFallbacks.mapPadding},this._mapPaddingDesktop={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-right"),10)||this._cssVarsFallbacks.mapPadding},this._initMatchMedia()}_fetchData(){this.store.dispatch(hn(this._geoJsonEndpointFull,this.teaserUrl,this._map,this._layers,this._currentlyVisibleFeaturesUids,this._maxTeasersPerPage))}_renderTeasers(){return I`
        <div class="teasers" part="teasers">
          ${Re(this._teasersData)}
        </div>
    `}_renderPagination(){return I`
      <div class="pagination" part="pagination">
        <button
          class="pagination__button pagination__button--prev"
          paginationAction="prev"
          @click="${this._onPaginationButtonClick}"
          ?disabled="${this._currentPage===1}"
          part="pagination-button pagination-button-prev"
          title="${this.paginationPrevButtonTitle}"
        ></button>
        <div
          class="pagination__text"
          part="pagination-text"
        >${(this._currentPage-1)*this._maxTeasersPerPage+1} - ${this._currentPage*this._maxTeasersPerPage}</div>
        <button
          class="pagination__button pagination__button--next"
          paginationAction="next"
          @click="${this._onPaginationButtonClick}"
          ?disabled="${this._currentlyVisibleFeaturesUids.length/this._currentPage<=this._maxTeasersPerPage}"
          part="pagination-button pagination-button-next"
          title="${this.paginationNextButtonTitle}"
        ></button>
      </div>
    `}_renderPopupContent(){return I`
        <div class="location-finder-popup" part="popup">
          ${Re(this._popupFeature)}
        </div>
    `}_initGeocoder(){const e={forwardGeocode:async n=>{let r=[];try{const i=`https://nominatim.openstreetmap.org/search?q=${n.query}&format=geojson&polygon_geojson=1&addressdetails=1`;r=(await(await fetch(i)).json()).features.map(c=>{const d=[c.bbox[0]+(c.bbox[2]-c.bbox[0])/2,c.bbox[1]+(c.bbox[3]-c.bbox[1])/2];return{type:"Feature",geometry:{type:"Point",coordinates:d},place_name:c.properties.display_name,properties:c.properties,text:c.properties.display_name,place_type:["place"],bbox:c.bbox,center:d}})}catch(i){console.error(`Failed to forwardGeocode with error: ${i}`)}return{type:"FeatureCollection",features:r}}};this._geocoder=new en(e,{maplibregl:be,showResultsWhileTyping:!0,showResultMarkers:!1,marker:!1}),this.shadowRoot.querySelector(".geocoder-container").appendChild(this._geocoder.onAdd(this._map)),this._geocoder.on("loading",()=>{this.store.dispatch({type:yt})}),this._geocoder.on("results",()=>{this.store.dispatch({type:wt})});const t=document.documentElement.lang==="en"?"Search location":"Standort suchen";this._geocoder.setPlaceholder(t)}_initFullscreenControl(){this._map.addControl(new be.FullscreenControl({container:this}))}_initMatchMedia(){this._mql=window.matchMedia(`(max-width: ${this._breakpoint})`),this.isMobile=this._mql.matches,this._mql.addListener(e=>{this.isMobile=e.matches,this._updateMapPadding()})}_updateMapPadding(){this._map&&this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop)}_handleMapToggleClick(){this._hideMap=!this._hideMap}}customElements.define($e.is,$e);const Cn={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["8.666475","50.107672"]},properties:{uid:9,name:"dkd Internet Service GmbH",search_boost:1,categories:[0],distance:195927.05143468693}},{type:"Feature",geometry:{type:"Point",coordinates:["8.56679","48.92848"]},properties:{uid:6,name:"G.K.M.B. GmbH",search_boost:1,categories:[0],distance:176281.53005033717}},{type:"Feature",geometry:{type:"Point",coordinates:["9.206144","48.676871"]},properties:{uid:5,name:"jweiland.net",search_boost:1,categories:[0],distance:229457.30072080903}},{type:"Feature",geometry:{type:"Point",coordinates:["8.383444","49.010315"]},properties:{uid:4,name:"punkt.de GmbH",search_boost:1,categories:[0],distance:161022.2575388874}}]},Ln=`
<toujou-location-finder-teaser feature-uid="28">
   <a href="/partner/pluswerk/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
         <h4 class="teaser__title"> 
             <span class="teaser__name">+Pluswerk
                <span class="teaser__branch" part="teaser-branch">ABC123</span>
            </span>
        </h4>
        <p class="teaser__type" part="teaser-type">Teaser Type (Localbusiness)</p>
        <p class="teaser__description" part="teaser-description">This is the disambiguating description</p>
         <address class="teaser__address" part="teaser-address">
             <span class="teaser__address-meta" part="teaser-address-meta teaser-address-meta-address">Blumenstraße 28, 90762 Fürth</span>
             <span class="teaser__address-meta teaser__address-meta--region" part="teaser-address-meta teaser-address-meta-region">Bayern</span>
             <span class="teaser__address-meta teaser__address-meta--country" part="teaser-address-meta teaser-address-meta-country">DE</span>
             <span class="teaser__address-meta teaser__address-meta--telephone" part="teaser-address-meta teaser-address-meta-telephone">Tel: 123456789</span>
             <span class="teaser__address-meta teaser__address-meta--email" part="teaser-address-meta teaser-address-meta-email">local@test.com</span>
             <span class="teaser__address-meta teaser__address-meta--description" part="teaser-address-meta teaser-address-meta-description">This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
         </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="22" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="10">
   <a href="/partner/da-kapo-communication-experts-gmbh/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">da kapo. Communication Experts GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 97075-0</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="99" height="100" alt="" />
        </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="3">
   <a href="/partner/dfau-gmbh/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">DFAU GmbH
                <span class="teaser__branch">TYPO3-Software</span>
            </span>
        </h4>
         <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 23980-870</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="86" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="9">
   <a href="/partner/dkd-internet-service-gmbh/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">dkd Internet Service GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 69 2475218-0</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="100" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="7">
   <a href="/partner/elmografico-gmbh/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">Elmografico GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 40089900</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="100" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="6">
   <a href="/partner/gkmb-gmbh/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">G.K.M.B. GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 7232 37 23 55</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="75" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="21">
   <a href="/partner/gigatec/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
        <h4 class="teaser__title">
            <span class="teaser__name">Gigatec GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 495 2791-0</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="21" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>

<toujou-location-finder-teaser feature-uid="11">
   <a href="/partner/goldwild/" target="" class="teaser" teaserHasImage>
      <div class="teaser__details">
         <h4 class="teaser__title">
            <span class="teaser__name">Goldwild GmbH</span>
        </h4>
        <address class="teaser__address">
            <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 777087</span>
        </address>
      </div>
      <figure class="teaser__logo-container">
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="80" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>
`,Pn=`
<toujou-location-finder-teaser feature-uid="28">
    <a href="/partner/pluswerk/" target="" class="teaser" teaserHasImage>
        <div class="teaser__details">
            <h4 class="teaser__title">
                <span class="teaser__name">+Pluswerk</span>
            </h4>
            <address class="teaser__address">
                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 89 4132580-0</span>
            </address>
        </div>
        <figure class="teaser__logo-container">
            <img class="teaser__image teaser__image--logo" loading="lazy" src="https://picsum.photos/100/100" width="100" height="22" alt="" />
        </figure>
    </a>
</toujou-location-finder-teaser>
`,In={title:"COMPONENTS/LocationFinder",parameters:{docs:{page:Ro},layout:"fullscreen",msw:{handlers:[je.get("/placesgeo.json",()=>M.json(Cn)),je.get("/placesteaser.html",({request:o})=>{const e=new URLSearchParams(o.url);if(!e)return;const t=e.get("ids");return t&&t.split(",").length>1?M.html(Ln):M.html(Pn)})]}}},Tn=()=>`
        <main>
            <toujou-location-finder
                class="location-finder"
                bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
                teaserurl="/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo"
                geojsonurl="/placesgeo.json"
                filterparams="&amp;pagetypes=34&amp;pages=1000435&amp;recursive=2&amp;hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52"
                map-style="mapbox://styles/mapbox/light-v10"
                access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
            >
                <button
                    is="toujou-button"
                    class="button location-finder__map-toggle"
                    button-variant="primary"
                    button-type="border"
                    button-size="small"
                    slot="location-finder-map-toggle"
                >
                    <span class="location-finder__map-toggle-show-text">Show map</span>
                    <span class="location-finder__map-toggle-hide-text">Hide map</span>
                </button>
            </toujou-location-finder>
        </main>
    `,Z=Tn.bind({});var qe,Ge,Ve;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  // testMocks();

  return \`
        <main>
            <toujou-location-finder
                class="location-finder"
                bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
                teaserurl="/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo"
                geojsonurl="/placesgeo.json"
                filterparams="&amp;pagetypes=34&amp;pages=1000435&amp;recursive=2&amp;hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52"
                map-style="mapbox://styles/mapbox/light-v10"
                access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
            >
                <button
                    is="toujou-button"
                    class="button location-finder__map-toggle"
                    button-variant="primary"
                    button-type="border"
                    button-size="small"
                    slot="location-finder-map-toggle"
                >
                    <span class="location-finder__map-toggle-show-text">Show map</span>
                    <span class="location-finder__map-toggle-hide-text">Hide map</span>
                </button>
            </toujou-location-finder>
        </main>
    \`;
}`,...(Ve=(Ge=Z.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};const Fn=["LocationFinder"];export{Z as LocationFinder,Fn as __namedExportsOrder,In as default};
