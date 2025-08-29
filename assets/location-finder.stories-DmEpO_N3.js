import{T as ht}from"./badgeCustomConfig-DUXiHpL4.js";import{j as R}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as Re}from"./index-DpH9cx3q.js";import{A as ce,T as ft,s as Ie,x as A,i as U}from"./lit-element-BBH-C6Hg.js";import{i as gt,t as mt,e as _t,c as bt,a as vt,b as yt,d as jt,f as ue}from"./directive-BgIYWM1R.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";function de(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...Re(),...n.components};return R.jsxs(R.Fragment,{children:[R.jsx(e.h1,{id:"location-finder",children:"Location finder"}),`
`,R.jsx(e.h2,{id:"example-from-toujou",children:"Example from TOUJOU"}),`
`,R.jsx(e.pre,{children:R.jsx(e.code,{className:"language-html",children:`<toujou-location-finder
    class="location-finder"
    bounds="{mapBounds}"
    teaserUrl="{teaserUrl}"
    geoJsonUrl="{geoJsonUrl}"
    filterParams="{filterParams}"
    map-style="mapbox://styles/mapbox/light-v10"
    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
    <f:render partial="Content/LocationFinder/Layers" />
</toujou-location-finder>
`})})]})}function wt(n={}){const{wrapper:e}={...Re(),...n.components};return e?R.jsx(e,{...n,children:R.jsx(de,{...n})}):de(n)}function Y(n,e,t,o){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function u(g){try{f(o.next(g))}catch(_){s(_)}}function p(g){try{f(o.throw(g))}catch(_){s(_)}}function f(g){g.done?r(g.value):i(g.value).then(u,p)}f((o=o.apply(n,e||[])).next())})}var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var X,pe;function Fe(){if(pe)return X;pe=1,X=e;var n=Object.prototype.hasOwnProperty;function e(){for(var t={},o=0;o<arguments.length;o++){var i=arguments[o];for(var r in i)n.call(i,r)&&(t[r]=i[r])}return t}return X}var Q={exports:{}},he;function xt(){return he||(he=1,function(n,e){(function(){var t={};n.exports=t,t.simpleFilter=function(o,i){return i.filter(function(r){return t.test(o,r)})},t.test=function(o,i){return t.match(o,i)!==null},t.match=function(o,i,r){r=r||{};var s=0,u=[],p=i.length,f=0,g=0,_=r.pre||"",y=r.post||"",k=r.caseSensitive&&i||i.toLowerCase(),w;o=r.caseSensitive&&o||o.toLowerCase();for(var v=0;v<p;v++)w=i[v],k[v]===o[s]?(w=_+w+y,s+=1,g+=1+g):g=0,f+=g,u[u.length]=w;return s===o.length?(f=k===o?1/0:f,{rendered:u.join(""),score:f}):null},t.filter=function(o,i,r){return!i||i.length===0?[]:typeof o!="string"?i:(r=r||{},i.reduce(function(s,u,p,f){var g=u;r.extract&&(g=r.extract(u));var _=t.match(o,g,r);return _!=null&&(s[s.length]={string:_.rendered,score:_.score,index:p,original:u}),s},[]).sort(function(s,u){var p=u.score-s.score;return p||s.index-u.index}))}})()}(Q)),Q.exports}var ee,fe;function Et(){if(fe)return ee;fe=1;var n=function(e){return this.component=e,this.items=[],this.active=e.options.noInitialSelection?-1:0,this.wrapper=document.createElement("div"),this.wrapper.className="suggestions-wrapper",this.element=document.createElement("ul"),this.element.className="suggestions",this.wrapper.appendChild(this.element),this.selectingListItem=!1,e.el.parentNode.insertBefore(this.wrapper,e.el.nextSibling),this};return n.prototype.show=function(){this.element.style.display="block"},n.prototype.hide=function(){this.element.style.display="none"},n.prototype.add=function(e){this.items.push(e)},n.prototype.clear=function(){this.items=[],this.active=this.component.options.noInitialSelection?-1:0},n.prototype.isEmpty=function(){return!this.items.length},n.prototype.isVisible=function(){return this.element.style.display==="block"},n.prototype.draw=function(){if(this.element.innerHTML="",this.items.length===0){this.hide();return}for(var e=0;e<this.items.length;e++)this.drawItem(this.items[e],this.active===e);this.show()},n.prototype.drawItem=function(e,t){var o=document.createElement("li"),i=document.createElement("a");t&&(o.className+=" active"),i.innerHTML=e.string,o.appendChild(i),this.element.appendChild(o),o.addEventListener("mousedown",(function(){this.selectingListItem=!0}).bind(this)),o.addEventListener("mouseup",(function(){this.handleMouseUp.call(this,e)}).bind(this))},n.prototype.handleMouseUp=function(e){this.selectingListItem=!1,this.component.value(e.original),this.clear(),this.draw()},n.prototype.move=function(e){this.active=e,this.draw()},n.prototype.previous=function(){this.move(this.active<=0?this.items.length-1:this.active-1)},n.prototype.next=function(){this.move(this.active>=this.items.length-1?0:this.active+1)},n.prototype.drawError=function(e){var t=document.createElement("li");t.innerHTML=e,this.element.appendChild(t),this.show()},ee=n,ee}var te,ge;function kt(){if(ge)return te;ge=1;var n=Fe(),e=xt(),t=Et(),o=function(i,r,s){return s=s||{},this.options=n({minLength:2,limit:5,filter:!0,hideOnBlur:!0,noInitialSelection:!0},s),this.el=i,this.data=r||[],this.list=new t(this),this.query="",this.selected=null,this.list.draw(),this.el.addEventListener("keyup",(function(u){this.handleKeyUp(u.keyCode,u)}).bind(this),!1),this.el.addEventListener("keydown",(function(u){this.handleKeyDown(u)}).bind(this)),this.el.addEventListener("focus",(function(){this.handleFocus()}).bind(this)),this.el.addEventListener("blur",(function(){this.handleBlur()}).bind(this)),this.el.addEventListener("paste",(function(u){this.handlePaste(u)}).bind(this)),this.render=this.options.render?this.options.render.bind(this):this.render.bind(this),this.getItemValue=this.options.getItemValue?this.options.getItemValue.bind(this):this.getItemValue.bind(this),this};return o.prototype.handleKeyUp=function(i,r){if(!(i===40||i===38||i===27||i===9)){if(i===13){this.list.items[this.list.active]&&(this.list.handleMouseUp(this.list.items[this.list.active]),r.stopPropagation());return}this.handleInputChange(this.el.value)}},o.prototype.handleKeyDown=function(i){switch(i.keyCode){case 13:this.list.active>=0&&(this.list.selectingListItem=!0);break;case 9:this.list.isEmpty()||(this.list.isVisible()&&i.preventDefault(),this.value(this.list.active>=0?this.list.items[this.list.active].original:null),this.list.hide());break;case 27:this.list.isEmpty()||this.list.hide();break;case 38:this.list.previous();break;case 40:this.list.next();break}},o.prototype.handleBlur=function(){!this.list.selectingListItem&&this.options.hideOnBlur&&this.list.hide()},o.prototype.handlePaste=function(i){if(i.clipboardData)this.handleInputChange(i.clipboardData.getData("Text"));else{var r=this;setTimeout(function(){r.handleInputChange(i.target.value)},100)}},o.prototype.handleInputChange=function(i){if(this.query=this.normalize(i),this.list.clear(),this.query.length<this.options.minLength){this.list.draw();return}this.getCandidates((function(r){for(var s=0;s<r.length&&(this.list.add(r[s]),s!==this.options.limit-1);s++);this.list.draw()}).bind(this))},o.prototype.handleFocus=function(){this.list.isEmpty()||this.list.show(),this.list.selectingListItem=!1},o.prototype.update=function(i){this.data=i,this.handleKeyUp()},o.prototype.clear=function(){this.data=[],this.list.clear()},o.prototype.normalize=function(i){return i=i.toLowerCase(),i},o.prototype.match=function(i,r){return i.indexOf(r)>-1},o.prototype.value=function(i){if(this.selected=i,this.el.value=this.getItemValue(i||{place_name:this.query}),document.createEvent){var r=document.createEvent("HTMLEvents");r.initEvent("change",!0,!1),this.el.dispatchEvent(r)}else this.el.fireEvent("onchange")},o.prototype.getCandidates=function(i){var r={pre:"<strong>",post:"</strong>",extract:(function(u){return this.getItemValue(u)}).bind(this)},s;this.options.filter?(s=e.filter(this.query,this.data,r),s=s.map((function(u){return{original:u.original,string:this.render(u.original,u.string)}}).bind(this))):s=this.data.map((function(u){var p=this.render(u);return{original:u,string:p}}).bind(this)),i(s)},o.prototype.getItemValue=function(i){return i},o.prototype.render=function(i,r){if(r)return r;for(var s=i.original?this.getItemValue(i.original):this.getItemValue(i),u=this.normalize(s),p=u.lastIndexOf(this.query);p>-1;){var f=p+this.query.length;s=s.slice(0,p)+"<strong>"+s.slice(p,f)+"</strong>"+s.slice(f),p=u.slice(0,p).lastIndexOf(this.query)}return s},o.prototype.renderError=function(i){this.list.drawError(i)},te=o,te}var oe,me;function Lt(){if(me)return oe;me=1;var n=kt();return oe=n,typeof window<"u"&&(window.Suggestions=n),oe}var Ct=Lt(),Pt=q(Ct),G={exports:{}},Mt=G.exports,_e;function Tt(){return _e||(_e=1,function(n){(function(e,t,o){n.exports?n.exports=o():e[t]=o()})(Mt,"subtag",function(){var e="",t=/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;function o(p){return p.match(t)||[]}function i(p){return o(p).filter(function(f,g){return f&&g})}function r(p){return p=o(p),{language:p[1]||e,extlang:p[2]||e,script:p[3]||e,region:p[4]||e}}function s(p,f,g){Object.defineProperty(p,f,{value:g,enumerable:!0})}function u(p,f,g){function _(y){return o(y)[p]||e}s(_,"pattern",f),s(r,g,_)}return u(1,/^[a-zA-Z]{2,3}$/,"language"),u(2,/^[a-zA-Z]{3}$/,"extlang"),u(3,/^[a-zA-Z]{4}$/,"script"),u(4,/^[a-zA-Z]{2}$|^[0-9]{3}$/,"region"),s(r,"split",i),r})}(G)),G.exports}var St=Tt(),Ot=q(St),ne,be;function At(){if(be)return ne;be=1;var n="Expected a function",e=NaN,t="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,p=typeof B=="object"&&B&&B.Object===Object&&B,f=typeof self=="object"&&self&&self.Object===Object&&self,g=p||f||Function("return this")(),_=Object.prototype,y=_.toString,k=Math.max,w=Math.min,v=function(){return g.Date.now()};function P(a,c,d){var h,b,m,E,C,S,I=0,re=!1,F=!1,Z=!0;if(typeof a!="function")throw new TypeError(n);c=l(c)||0,j(d)&&(re=!!d.leading,F="maxWait"in d,m=F?k(l(d.maxWait)||0,c):m,Z="trailing"in d?!!d.trailing:Z);function K(x){var O=h,z=b;return h=b=void 0,I=x,E=a.apply(z,O),E}function ct(x){return I=x,C=setTimeout(N,c),re?K(x):E}function ut(x){var O=x-S,z=x-I,le=c-O;return F?w(le,m-z):le}function ae(x){var O=x-S,z=x-I;return S===void 0||O>=c||O<0||F&&z>=m}function N(){var x=v();if(ae(x))return se(x);C=setTimeout(N,ut(x))}function se(x){return C=void 0,Z&&h?K(x):(h=b=void 0,E)}function dt(){C!==void 0&&clearTimeout(C),I=0,h=S=b=C=void 0}function pt(){return C===void 0?E:se(v())}function W(){var x=v(),O=ae(x);if(h=arguments,b=this,S=x,O){if(C===void 0)return ct(S);if(F)return C=setTimeout(N,c),K(S)}return C===void 0&&(C=setTimeout(N,c)),E}return W.cancel=dt,W.flush=pt,W}function j(a){var c=typeof a;return!!a&&(c=="object"||c=="function")}function L(a){return!!a&&typeof a=="object"}function M(a){return typeof a=="symbol"||L(a)&&y.call(a)==t}function l(a){if(typeof a=="number")return a;if(M(a))return e;if(j(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=j(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=a.replace(o,"");var d=r.test(a);return d||s.test(a)?u(a.slice(2),d?2:8):i.test(a)?e:+a}return ne=P,ne}var Rt=At(),It=q(Rt),Ft=Fe(),T=q(Ft),H={exports:{}},ve;function zt(){if(ve)return H.exports;ve=1;var n=typeof Reflect=="object"?Reflect:null,e=n&&typeof n.apply=="function"?n.apply:function(a,c,d){return Function.prototype.apply.call(a,c,d)},t;n&&typeof n.ownKeys=="function"?t=n.ownKeys:Object.getOwnPropertySymbols?t=function(a){return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))}:t=function(a){return Object.getOwnPropertyNames(a)};function o(l){console&&console.warn&&console.warn(l)}var i=Number.isNaN||function(a){return a!==a};function r(){r.init.call(this)}H.exports=r,H.exports.once=j,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var s=10;function u(l){if(typeof l!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof l)}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(l){if(typeof l!="number"||l<0||i(l))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+l+".");s=l}}),r.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(a){if(typeof a!="number"||a<0||i(a))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+a+".");return this._maxListeners=a,this};function p(l){return l._maxListeners===void 0?r.defaultMaxListeners:l._maxListeners}r.prototype.getMaxListeners=function(){return p(this)},r.prototype.emit=function(a){for(var c=[],d=1;d<arguments.length;d++)c.push(arguments[d]);var h=a==="error",b=this._events;if(b!==void 0)h=h&&b.error===void 0;else if(!h)return!1;if(h){var m;if(c.length>0&&(m=c[0]),m instanceof Error)throw m;var E=new Error("Unhandled error."+(m?" ("+m.message+")":""));throw E.context=m,E}var C=b[a];if(C===void 0)return!1;if(typeof C=="function")e(C,this,c);else for(var S=C.length,I=w(C,S),d=0;d<S;++d)e(I[d],this,c);return!0};function f(l,a,c,d){var h,b,m;if(u(c),b=l._events,b===void 0?(b=l._events=Object.create(null),l._eventsCount=0):(b.newListener!==void 0&&(l.emit("newListener",a,c.listener?c.listener:c),b=l._events),m=b[a]),m===void 0)m=b[a]=c,++l._eventsCount;else if(typeof m=="function"?m=b[a]=d?[c,m]:[m,c]:d?m.unshift(c):m.push(c),h=p(l),h>0&&m.length>h&&!m.warned){m.warned=!0;var E=new Error("Possible EventEmitter memory leak detected. "+m.length+" "+String(a)+" listeners added. Use emitter.setMaxListeners() to increase limit");E.name="MaxListenersExceededWarning",E.emitter=l,E.type=a,E.count=m.length,o(E)}return l}r.prototype.addListener=function(a,c){return f(this,a,c,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(a,c){return f(this,a,c,!0)};function g(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _(l,a,c){var d={fired:!1,wrapFn:void 0,target:l,type:a,listener:c},h=g.bind(d);return h.listener=c,d.wrapFn=h,h}r.prototype.once=function(a,c){return u(c),this.on(a,_(this,a,c)),this},r.prototype.prependOnceListener=function(a,c){return u(c),this.prependListener(a,_(this,a,c)),this},r.prototype.removeListener=function(a,c){var d,h,b,m,E;if(u(c),h=this._events,h===void 0)return this;if(d=h[a],d===void 0)return this;if(d===c||d.listener===c)--this._eventsCount===0?this._events=Object.create(null):(delete h[a],h.removeListener&&this.emit("removeListener",a,d.listener||c));else if(typeof d!="function"){for(b=-1,m=d.length-1;m>=0;m--)if(d[m]===c||d[m].listener===c){E=d[m].listener,b=m;break}if(b<0)return this;b===0?d.shift():v(d,b),d.length===1&&(h[a]=d[0]),h.removeListener!==void 0&&this.emit("removeListener",a,E||c)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(a){var c,d,h;if(d=this._events,d===void 0)return this;if(d.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):d[a]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete d[a]),this;if(arguments.length===0){var b=Object.keys(d),m;for(h=0;h<b.length;++h)m=b[h],m!=="removeListener"&&this.removeAllListeners(m);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(c=d[a],typeof c=="function")this.removeListener(a,c);else if(c!==void 0)for(h=c.length-1;h>=0;h--)this.removeListener(a,c[h]);return this};function y(l,a,c){var d=l._events;if(d===void 0)return[];var h=d[a];return h===void 0?[]:typeof h=="function"?c?[h.listener||h]:[h]:c?P(h):w(h,h.length)}r.prototype.listeners=function(a){return y(this,a,!0)},r.prototype.rawListeners=function(a){return y(this,a,!1)},r.listenerCount=function(l,a){return typeof l.listenerCount=="function"?l.listenerCount(a):k.call(l,a)},r.prototype.listenerCount=k;function k(l){var a=this._events;if(a!==void 0){var c=a[l];if(typeof c=="function")return 1;if(c!==void 0)return c.length}return 0}r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function w(l,a){for(var c=new Array(a),d=0;d<a;++d)c[d]=l[d];return c}function v(l,a){for(;a+1<l.length;a++)l[a]=l[a+1];l.pop()}function P(l){for(var a=new Array(l.length),c=0;c<a.length;++c)a[c]=l[c].listener||l[c];return a}function j(l,a){return new Promise(function(c,d){function h(m){l.removeListener(a,b),d(m)}function b(){typeof l.removeListener=="function"&&l.removeListener("error",h),c([].slice.call(arguments))}M(l,a,b,{once:!0}),a!=="error"&&L(l,h,{once:!0})})}function L(l,a,c){typeof l.on=="function"&&M(l,"error",a,c)}function M(l,a,c,d){if(typeof l.on=="function")d.once?l.once(a,c):l.on(a,c);else if(typeof l.addEventListener=="function")l.addEventListener(a,function h(b){d.once&&l.removeEventListener(a,h),c(b)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof l)}return H.exports}var Dt=zt();const ye={fr:{name:"France",bbox:[[-4.59235,41.380007],[9.560016,51.148506]]},us:{name:"United States",bbox:[[-171.791111,18.91619],[-66.96466,71.357764]]},ru:{name:"Russia",bbox:[[19.66064,41.151416],[190.10042,81.2504]]},ca:{name:"Canada",bbox:[[-140.99778,41.675105],[-52.648099,83.23324]]}},Nt={de:"Suche",it:"Ricerca",en:"Search",nl:"Zoeken",fr:"Chercher",ca:"Cerca",he:"לחפש",ja:"サーチ",lv:"Meklēt",pt:"Procurar",sr:"Претрага",zh:"搜索",cs:"Vyhledávání",hu:"Keresés",ka:"ძიება",nb:"Søke",sk:"Vyhľadávanie",th:"ค้นหา",fi:"Hae",is:"Leita",ko:"수색",pl:"Szukaj",sl:"Iskanje",fa:"جستجو",ru:"Поиск",es:"Buscar"},Bt={en:"No results found",de:"Keine Ergebnisse gefunden",es:"No hay resultados"},Ht={en:"There was an error reaching the server",de:"Verbindung fehlgeschlagen",es:"Error al conectarse al servidor"};var D={placeholder:Nt,errorNoResults:Bt,errorConnectionFailed:Ht};const $t=/(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/;class Gt{constructor(e,t){this.options={zoom:16,flyTo:!0,trackProximity:!0,showResultsWhileTyping:!1,minLength:2,reverseGeocode:!1,limit:5,enableEventLogging:!0,marker:!0,popup:!1,maplibregl:void 0,collapsed:!1,clearAndBlurOnEsc:!1,clearOnBlur:!1,proximityMinZoom:9,getItemValue:o=>o.text!==void 0?o.text:o.place_name,render:function(o){if(!o.geometry){const r=o.text,s=r.toLowerCase().indexOf(this.query.toLowerCase()),u=this.query.length,p=r.substring(0,s),f=r.substring(s,s+u),g=r.substring(s+u);return'<div class="maplibregl-ctrl-geocoder--suggestion"><svg class="maplibregl-ctrl-geocoder--suggestion-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22.8702 20.1258H21.4248L20.9125 19.6318C22.7055 17.546 23.785 14.8382 23.785 11.8925C23.785 5.32419 18.4608 0 11.8925 0C5.32419 0 0 5.32419 0 11.8925C0 18.4608 5.32419 23.785 11.8925 23.785C14.8382 23.785 17.546 22.7055 19.6318 20.9125L20.1258 21.4248V22.8702L29.2739 32L32 29.2739L22.8702 20.1258ZM11.8925 20.1258C7.33676 20.1258 3.65923 16.4483 3.65923 11.8925C3.65923 7.33676 7.33676 3.65923 11.8925 3.65923C16.4483 3.65923 20.1258 7.33676 20.1258 11.8925C20.1258 16.4483 16.4483 20.1258 11.8925 20.1258Z" fill="#687078"/></svg><div class="maplibregl-ctrl-geocoder--suggestion-info"><div class="maplibregl-ctrl-geocoder--suggestion-title">'+p+'<span class="maplibregl-ctrl-geocoder--suggestion-match">'+f+"</span>"+g+"</div></div></div>"}const i=o.place_name.split(",");return'<div class="maplibregl-ctrl-geocoder--result"><svg class="maplibregl-ctrl-geocoder--result-icon" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36571 0 0 5.38676 0 12.0471C0 21.0824 12 32 12 32C12 32 24 21.0824 24 12.0471C24 5.38676 18.6343 0 12 0ZM12 16.3496C9.63428 16.3496 7.71429 14.4221 7.71429 12.0471C7.71429 9.67207 9.63428 7.74454 12 7.74454C14.3657 7.74454 16.2857 9.67207 16.2857 12.0471C16.2857 14.4221 14.3657 16.3496 12 16.3496Z" fill="#687078"/></svg><div><div class="maplibregl-ctrl-geocoder--result-title">'+i[0]+'</div><div class="maplibregl-ctrl-geocoder--result-address">'+i.splice(1,i.length).join(",")+"</div></div></div>"},popupRender:o=>{const i=o.place_name.split(",");return'<div class="maplibregl-ctrl-geocoder--suggestion popup-suggestion"><div class="maplibregl-ctrl-geocoder--suggestion-title popup-suggestion-title">'+i[0]+'</div><div class="maplibregl-ctrl-geocoder--suggestion-address popup-suggestion-address">'+i.splice(1,i.length).join(",")+"</div></div>"},showResultMarkers:!0,debounceSearch:200},this._eventEmitter=new Dt.EventEmitter,this.options=T({},this.options,t),this.fresh=!0,this.lastSelected=null,this.geocoderApi=e}addTo(e){function t(o,i){if(!document.body.contains(i))throw new Error("Element provided to #addTo() exists, but is not in the DOM");const r=o.onAdd();i.appendChild(r)}if(e instanceof HTMLElement)t(this,e);else if(typeof e=="string"){const o=document.querySelectorAll(e);if(o.length===0)throw new Error("Element "+e+"not found.");if(o.length>1)throw new Error("Geocoder can only be added to a single html element");t(this,o[0])}else if("addControl"in e)e.addControl(this);else throw new Error("Error: addTo must be a maplibre-gl-js map, an html element, or a CSS selector query for a single html element")}onAdd(e){if(e&&typeof e!="string"&&(this._map=e),this.setLanguage(),this.options.localGeocoderOnly&&!this.options.localGeocoder)throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");this._onChange=this._onChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onPaste=this._onPaste.bind(this),this._onBlur=this._onBlur.bind(this),this._showButton=this._showButton.bind(this),this._hideButton=this._hideButton.bind(this),this._onQueryResult=this._onQueryResult.bind(this),this.clear=this.clear.bind(this),this._updateProximity=this._updateProximity.bind(this),this._collapse=this._collapse.bind(this),this._unCollapse=this._unCollapse.bind(this),this._clear=this._clear.bind(this),this._clearOnBlur=this._clearOnBlur.bind(this);const t=this.container=document.createElement("div");t.className="maplibregl-ctrl-geocoder maplibregl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl";const o=this.createIcon("search",'<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');this._inputEl=document.createElement("input"),this._inputEl.type="text",this._inputEl.className="maplibregl-ctrl-geocoder--input",this.setPlaceholder(),this.options.collapsed&&(this._collapse(),this.container.addEventListener("mouseenter",this._unCollapse),this.container.addEventListener("mouseleave",this._collapse),this._inputEl.addEventListener("focus",this._unCollapse)),(this.options.collapsed||this.options.clearOnBlur)&&this._inputEl.addEventListener("blur",this._onBlur),this._inputEl.addEventListener("keydown",It(this._onKeyDown,this.options.debounceSearch)),this._inputEl.addEventListener("paste",this._onPaste),this._inputEl.addEventListener("change",this._onChange),this.container.addEventListener("mouseenter",this._showButton),this.container.addEventListener("mouseleave",this._hideButton);const i=document.createElement("div");i.classList.add("maplibregl-ctrl-geocoder--pin-right"),this._clearEl=document.createElement("button"),this._clearEl.setAttribute("type","button"),this._clearEl.setAttribute("aria-label","Clear"),this._clearEl.addEventListener("click",this.clear),this._clearEl.className="maplibregl-ctrl-geocoder--button";const r=this.createIcon("close",'<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');return this._clearEl.appendChild(r),this._loadingEl=this.createIcon("loading",'<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'),i.appendChild(this._clearEl),i.appendChild(this._loadingEl),t.appendChild(o),t.appendChild(this._inputEl),t.appendChild(i),this._typeahead=new Pt(this._inputEl,[],{filter:!1,minLength:this.options.minLength,limit:this.options.limit,noInitialSelection:!0}),this.container.addEventListener("click",()=>{this._typeahead.update(this._typeahead.data)}),this.setRenderFunction(this.options.render),this._typeahead.getItemValue=this.options.getItemValue,this.mapMarker=null,this.resultMarkers=[],this._handleMarker=this._handleMarker.bind(this),this._handleResultMarkers=this._handleResultMarkers.bind(this),this._map&&(this.options.trackProximity&&(this._updateProximity(),this._map.on("moveend",this._updateProximity)),this._maplibregl=this.options.maplibregl,!this._maplibregl&&this.options.marker&&(console.error("No maplibregl detected in options. Map markers are disabled. Please set options.maplibregl."),this.options.marker=!1)),t}createIcon(e,t){const o=document.createElementNS("http://www.w3.org/2000/svg","svg");if(o.setAttribute("class","maplibregl-ctrl-geocoder--icon maplibregl-ctrl-geocoder--icon-"+e),o.setAttribute("viewBox","0 0 18 18"),o.setAttribute("xml:space","preserve"),o.setAttribute("width","18"),o.setAttribute("height","18"),"innerHTML"in o)o.innerHTML=t;else{const i=document.createElement("div");i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";const r=i.firstChild,s=r.firstChild;o.appendChild(s)}return o}onRemove(){return this.container.remove(),this.options.trackProximity&&this._map&&this._map.off("moveend",this._updateProximity),this._removeMarker(),this._map=null,this}_onPaste(e){const t=(e.clipboardData||window.clipboardData).getData("text");t.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(t)}_onKeyDown(e){if(e.keyCode===27&&this.options.clearAndBlurOnEsc)return this._clear(e),this._inputEl.blur();const r=this._inputEl.value;if(!r)return this.fresh=!0,e.keyCode!==9&&this.clear(e),this._clearEl.style.display="none";if(!(e.metaKey||[9,27,37,39,38,40].indexOf(e.keyCode)!==-1)){if(e.keyCode===13)if(!this.options.showResultsWhileTyping)this._typeahead.selected||this._geocode(r);else{this._typeahead.selected==null&&this.geocoderApi.getSuggestions?this._geocode(r,!0):this._typeahead.selected==null&&this.options.showResultMarkers&&this._fitBoundsForMarkers();return}r.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(r)}}_showButton(){this._inputEl.value.length>0&&(this._clearEl.style.display="block")}_hideButton(){this._typeahead.selected&&(this._clearEl.style.display="none")}_onBlur(e){this.options.clearOnBlur&&this._clearOnBlur(e),this.options.collapsed&&this._collapse()}_onChange(){const e=this._typeahead.selected;if(e&&!e.geometry)e.placeId?this._geocode(e.placeId,!0,!0):this._geocode(e.text,!0);else if(e&&JSON.stringify(e)!==this.lastSelected){if(this._clearEl.style.display="none",this.options.flyTo){let t;if(this._removeResultMarkers(),e.properties&&ye[e.properties.short_code])t=T({},this.options.flyTo),this._map&&this._map.fitBounds(ye[e.properties.short_code].bbox,t);else if(e.bbox){const o=e.bbox;t=T({},this.options.flyTo),this._map&&this._map.fitBounds([[o[0],o[1]],[o[2],o[3]]],t)}else{const o={zoom:this.options.zoom};t=T({},o,this.options.flyTo),e.center?t.center=e.center:e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(t.center=e.geometry.coordinates),this._map&&this._map.flyTo(t)}}this.options.marker&&this._maplibregl&&this._handleMarker(e),this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0),this.lastSelected=JSON.stringify(e),this._typeahead.selected=null,this._eventEmitter.emit("result",{result:e})}}_getConfigForRequest(){return["bbox","limit","proximity","countries","types","language","reverseMode"].reduce((o,i)=>(this.options[i]&&(["countries","types","language"].indexOf(i)>-1?o[i]=this.options[i].split(/[\s,]+/):o[i]=this.options[i],i==="proximity"&&this.options[i]&&typeof this.options[i].longitude=="number"&&typeof this.options[i].latitude=="number"&&(o[i]=[this.options[i].longitude,this.options[i].latitude])),o),{})}_geocode(e){return Y(this,arguments,void 0,function*(t,o=!1,i=!1){this._loadingEl.style.display="block",this._eventEmitter.emit("loading",{query:t});const r=this._getConfigForRequest(),s=this._createGeocodeRequest(r,t,o,i),u=this.options.localGeocoder?this.options.localGeocoder(t)||[]:[];try{const p=yield s;yield this._handleGeocodeResponse(p,r,t,o,u)}catch(p){this._handleGeocodeErrorResponse(p,u)}return s})}_createGeocodeRequest(e,t,o,i){return this.options.localGeocoderOnly?Promise.resolve({}):this.options.reverseGeocode&&$t.test(t)?this._createReverseGeocodeRequest(t,e):(e.query=t,this.geocoderApi.getSuggestions?o?this.geocoderApi.searchByPlaceId&&i?this.geocoderApi.searchByPlaceId(e):this.geocoderApi.forwardGeocode(e):this.geocoderApi.getSuggestions(e):this.geocoderApi.forwardGeocode(e))}_createReverseGeocodeRequest(e,t){const o=e.split(/[\s(,)?]+/).map(i=>parseFloat(i)).reverse();return t.query=o,t.limit=1,"proximity"in t&&delete t.proximity,this.geocoderApi.reverseGeocode(t)}_handleGeocodeResponse(e,t,o,i,r){return Y(this,void 0,void 0,function*(){this._loadingEl.style.display="none";let s={};e?s=e:s={type:"FeatureCollection",features:[]},s.config=t,this.fresh&&(this.fresh=!1),s.features=s.features?r.concat(s.features):r;const u=this.options.externalGeocoder?this.options.externalGeocoder(o,s.features,t)||Promise.resolve([]):Promise.resolve([]);try{const f=yield u;s.features=s.features?f.concat(s.features):f}catch{}this.options.filter&&s.features.length&&(s.features=s.features.filter(this.options.filter));let p=[];"suggestions"in s?p=s.suggestions:"place"in s?p=[s.place]:p=s.features,p.length?(this._clearEl.style.display="block",this._typeahead.update(p),(!this.options.showResultsWhileTyping||i)&&this.options.showResultMarkers&&(s.features.length>0||"place"in s)&&this._fitBoundsForMarkers(),this._eventEmitter.emit("results",s)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderNoResults(),this._eventEmitter.emit("results",s))})}_handleGeocodeErrorResponse(e,t){this._loadingEl.style.display="none",t.length&&this.options.localGeocoder?(this._clearEl.style.display="block",this._typeahead.update(t)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderError()),this._eventEmitter.emit("results",{features:t}),this._eventEmitter.emit("error",{error:e})}_clear(e){e&&e.preventDefault(),this._inputEl.value="",this._typeahead.selected=null,this._typeahead.clear(),this._onChange(),this._clearEl.style.display="none",this._removeMarker(),this._removeResultMarkers(),this.lastSelected=null,this._eventEmitter.emit("clear"),this.fresh=!0}clear(e){this._clear(e),this._inputEl.focus()}_clearOnBlur(e){e.relatedTarget&&this._clear(e)}_onQueryResult(e){if(!("features"in e)||!e.features.length)return;const t=e.features[0];this._typeahead.selected=t,this._inputEl.value=t.place_name,this._onChange()}_updateProximity(){if(this._map)if(this._map.getZoom()>this.options.proximityMinZoom){const e=this._map.getCenter().wrap();this.setProximity({longitude:e.lng,latitude:e.lat})}else this.setProximity(null)}_collapse(){!this._inputEl.value&&this._inputEl!==document.activeElement&&this.container.classList.add("maplibregl-ctrl-geocoder--collapsed")}_unCollapse(){this.container.classList.remove("maplibregl-ctrl-geocoder--collapsed")}query(e){return Y(this,void 0,void 0,function*(){const t=yield this._geocode(e);this._onQueryResult(t)})}_renderError(){const e=`<div class='maplibre-gl-geocoder--error'>${this._localize("errorConnectionFailed")}</div>`;this._renderMessage(e)}_renderNoResults(){const e=`<div class='maplibre-gl-geocoder--error maplibre-gl-geocoder--no-results'>
        ${this._localize("errorNoResults")}</div>`;this._renderMessage(e)}_renderMessage(e){this._typeahead.update([]),this._typeahead.selected=null,this._typeahead.clear(),this._typeahead.renderError(e)}_localize(e){const t=Ot.language(this.options.language.split(",")[0]);return this.options.language&&(D!=null&&D[e][t])?D[e][t]:D[e].en}_fitBoundsForMarkers(){if(this._typeahead.data.length<1)return;const e=this._typeahead.data.filter(t=>typeof t!="string").slice(0,this.options.limit);if(this._clearEl.style.display="none",this.options.flyTo&&this._maplibregl&&this._map){const o=T({},{padding:100},this.options.flyTo),i=new this._maplibregl.LngLatBounds;for(const r of e)i.extend(r.geometry.coordinates);this._map.fitBounds(i,o)}return e.length>0&&this._maplibregl&&this._handleResultMarkers(e),this}setInput(e){return this._inputEl.value=e,this._typeahead.selected=null,this._typeahead.clear(),e.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(e),this}setProximity(e){return this.options.proximity=e,this}getProximity(){return this.options.proximity}setRenderFunction(e){return e&&typeof e=="function"&&(this._typeahead.render=e),this}getRenderFunction(){return this._typeahead.render}setLanguage(e){return this.options.language=e||this.options.language||navigator.language,this}getLanguage(){return this.options.language}getZoom(){return this.options.zoom}setZoom(e){return this.options.zoom=e,this}getFlyTo(){return this.options.flyTo}setFlyTo(e){return this.options.flyTo=e,this}getPlaceholder(){return this.options.placeholder}setPlaceholder(e){return this.placeholder=e||this.options.placeholder||this._localize("placeholder"),this._inputEl.placeholder=this.placeholder,this._inputEl.setAttribute("aria-label",this.placeholder),this}getBbox(){return this.options.bbox}setBbox(e){return this.options.bbox=e,this}getCountries(){return this.options.countries}setCountries(e){return this.options.countries=e,this}getTypes(){return this.options.types}setTypes(e){return this.options.types=e,this}getMinLength(){return this.options.minLength}setMinLength(e){return this.options.minLength=e,this._typeahead&&(this._typeahead.options.minLength=e),this}getLimit(){return this.options.limit}setLimit(e){return this.options.limit=e,this._typeahead&&(this._typeahead.options.limit=e),this}getFilter(){return this.options.filter}setFilter(e){return this.options.filter=e,this}setGeocoderApi(e){return this.geocoderApi=e,this}getGeocoderApi(){return this.geocoderApi}_handleMarker(e){if(!this._map)return;this._removeMarker();const o=T({},{color:"#4668F2"},this.options.marker);this.mapMarker=new this._maplibregl.Marker(o);let i;if(this.options.popup){const s=T({},{},this.options.popup);i=new this._maplibregl.Popup(s).setHTML(this.options.popupRender(e))}return e.center?(this.mapMarker.setLngLat(e.center).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(i)):e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(i)),this}_removeMarker(){this.mapMarker&&(this.mapMarker.remove(),this.mapMarker=null)}_handleResultMarkers(e){if(!this._map)return;this._removeResultMarkers();let o=T({},{color:"#4668F2"},this.options.showResultMarkers);for(const i of e){let r;if(this.options.showResultMarkers){this.options.showResultMarkers&&this.options.showResultMarkers.element&&(r=this.options.showResultMarkers.element.cloneNode(!0),o=T(o,{element:r}));const s=new this._maplibregl.Marker(T({},o,{element:r}));let u;if(this.options.popup){const f=T({},{},this.options.popup);u=new this._maplibregl.Popup(f).setHTML(this.options.popupRender(i))}i.center?(s.setLngLat(i.center).addTo(this._map),this.options.popup&&s.setPopup(u)):i.geometry&&i.geometry.type&&i.geometry.type==="Point"&&i.geometry.coordinates&&(s.setLngLat(i.geometry.coordinates).addTo(this._map),this.options.popup&&s.setPopup(u)),this.resultMarkers.push(s)}}return this}_removeResultMarkers(){this.resultMarkers&&this.resultMarkers.length>0&&(this.resultMarkers.forEach(function(e){e.remove()}),this.resultMarkers=[])}on(e,t){return this._eventEmitter.on(e,t),this}once(e){return new Promise(t=>{this._eventEmitter.once(e,t)})}off(e,t){return this._eventEmitter.removeListener(e,t),this}}function ze(n){var e=function(o){var i=o.dispatch,r=o.getState;return function(s){return function(u){return typeof u=="function"?u(i,r,n):s(u)}}};return e}var De=ze();De.withExtraArgument=ze;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ie extends gt{constructor(e){if(super(e),this.et=ce,e.type!==mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ce||e==null)return this.ft=void 0,this.et=e;if(e===ft)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ie.directiveName="unsafeHTML",ie.resultType=1;const je=_t(ie);var V="NOT_FOUND";function Vt(n){var e;return{get:function(o){return e&&n(e.key,o)?e.value:V},put:function(o,i){e={key:o,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Ut(n,e){var t=[];function o(u){var p=t.findIndex(function(g){return e(u,g.key)});if(p>-1){var f=t[p];return p>0&&(t.splice(p,1),t.unshift(f)),f.value}return V}function i(u,p){o(u)===V&&(t.unshift({key:u,value:p}),t.length>n&&t.pop())}function r(){return t}function s(){t=[]}return{get:o,put:i,getEntries:r,clear:s}}var qt=function(e,t){return e===t};function Jt(n){return function(t,o){if(t===null||o===null||t.length!==o.length)return!1;for(var i=t.length,r=0;r<i;r++)if(!n(t[r],o[r]))return!1;return!0}}function Zt(n,e){var t=typeof e=="object"?e:{equalityCheck:e},o=t.equalityCheck,i=o===void 0?qt:o,r=t.maxSize,s=r===void 0?1:r,u=t.resultEqualityCheck,p=Jt(i),f=s===1?Vt(p):Ut(s,p);function g(){var _=f.get(arguments);if(_===V){if(_=n.apply(null,arguments),u){var y=f.getEntries(),k=y.find(function(w){return u(w.value,_)});k&&(_=k.value)}f.put(arguments,_)}return _}return g.clearCache=function(){return f.clear()},g}function Kt(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every(function(o){return typeof o=="function"})){var t=e.map(function(o){return typeof o=="function"?"function "+(o.name||"unnamed")+"()":typeof o}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function Wt(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];var i=function(){for(var s=arguments.length,u=new Array(s),p=0;p<s;p++)u[p]=arguments[p];var f=0,g,_={memoizeOptions:void 0},y=u.pop();if(typeof y=="object"&&(_=y,y=u.pop()),typeof y!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof y+"]");var k=_,w=k.memoizeOptions,v=w===void 0?t:w,P=Array.isArray(v)?v:[v],j=Kt(u),L=n.apply(void 0,[function(){return f++,y.apply(null,arguments)}].concat(P)),M=n(function(){for(var a=[],c=j.length,d=0;d<c;d++)a.push(j[d].apply(null,arguments));return g=L.apply(null,a),g});return Object.assign(M,{resultFunc:y,memoizedResultFunc:L,dependencies:j,lastResult:function(){return g},recomputations:function(){return f},resetRecomputations:function(){return f=0}}),M};return i}var Ne=Wt(Zt);const Be="SET_LOCATOR_LOADING_START",He="SET_LOCATOR_LOADING_END",Yt={isLoading:!1},$e="MOUSE_ENTER_FEATURE",Ge="MOUSE_LEAVE_FEATURE",Xt={highlightedFeature:null,isLoading:!1},Ve="RESET_PAGINATION",Ue="SET_PREV_PAGINATION_PAGE",qe="SET_NEXT_PAGINATION_PAGE",Je="SET_HAS_PAGINATION",Ze="SET_HAS_NO_PAGINATION",Ke="SET_DATA_GEOJSON",We="SET_DATA_TEASERS",Ye="SET_DATA_LOAD_START",Xe="SET_DATA_LOAD_END",Qe="SET_CURRENT_VISIBLE_FEATURES",we=()=>({type:Ye}),xe=()=>({type:Xe}),Ee=n=>({type:Qe,payload:n}),Qt=(n,e)=>e.properties.search_boost-n.properties.search_boost||n.properties.name.localeCompare(e.properties.name),eo=(n,e,t,o)=>n.getClusterLeaves(e,t,o),to=(n,e,t,o,i,r)=>async(s,u)=>{const{currentPage:p}=u().pagination;s(we());try{const f=await(async g=>fetch(g).then(_=>_.json()))(n);s({type:Ke,payload:f}),t.once("idle",async()=>{s(we());const g=[];for(const v of((P,j,L)=>{const M=[];let l=[];return L.forEach(a=>{j&&j.getLayer(a)&&M.push(a)}),M.length&&(l=j.queryRenderedFeatures({layers:M})),l})(0,t,o))if(Object.prototype.hasOwnProperty.call(v.properties,"cluster_id")){const P=t.getSource(v.source),j=await eo(P,v.properties.cluster_id,v.properties.point_count,0);g.push(...j)}else g.push(v);const _=(v=>{if(!v.length)return[];const P={};return v.filter(j=>{const{uid:L}=j.properties;return!P[L]&&(P[L]=!0,!0)})})(g),y=_.map(v=>v.properties.uid);if(s(y.length>r?{type:Je}:{type:Ze}),s(Ee(y)),k=i,w=y,!(Array.isArray(k)&&Array.isArray(w)&&k.length===w.length&&k.every((v,P)=>v===w[P]))){const v=((j,L)=>({offset:(j-1)*L,limit:L}))(p,r),P=await(async(j,L,M)=>{if(!j.length)return null;const l=j.filter(d=>d.properties.search_boost||d.properties.name).sort(Qt).splice(M.offset,M.limit).map(d=>d.properties.uid),a=new URLSearchParams({ids:l.join(",")}),c=L+(L.match(/[?]/g)?"&":"?")+a.toString();return fetch(c).then(d=>d.text())})(_,e,v);s({type:We,payload:P}),s(Ee(y.sort()))}var k,w;s(xe())})}catch(f){console.error("Could not load the location finder geoJSON",f)}s(xe())},oo={geojson:null,teasers:null,isLoading:!1,currentlyVisibleFeatures:[]},et="SET_SEARCH_LOADING_START",tt="SET_SEARCH_LOADING_END",no={isLoading:!1},io={hasPagination:!1,currentPage:1},ot="SET_POPUP_LOADING_START",nt="SET_POPUP_LOADING_END",it="RESET_POPUP_FEATURE",rt="SET_POPUP_FEATURE",at="SET_POPUP_COORDINATES",st="RESET_POPUP_COORDINATES",ro=(n,e)=>async t=>{t({type:ot});try{const o=new URLSearchParams({ids:n}),i=e+(e.match(/[?]/g)?"&":"?")+o.toString();t((r=>({type:rt,payload:r}))(await fetch(i).then(r=>r.text())))}catch(o){console.error("Could not get popup content",o)}t({type:nt})},ao={feature:null,coordinates:null,isLoading:!1},so=bt({features:function(n=Xt,e){switch(e.type){case Ge:return{...n,highlightedFeature:null};case $e:return{...n,highlightedFeature:e.payload}}return n},locator:function(n=Yt,e){switch(e.type){case Be:return{...n,isLoading:!0};case He:return{...n,isLoading:!1}}return n},data:function(n=oo,e){switch(e.type){case Ke:return{...n,geojson:e.payload};case We:return{...n,teasers:e.payload};case Ye:return{...n,isLoading:!0};case Xe:return{...n,isLoading:!1};case Qe:return{...n,currentlyVisibleFeatures:e.payload}}return n},search:function(n=no,e){switch(e.type){case et:return{...n,isLoading:!0};case tt:return{...n,isLoading:!1}}return n},pagination:function(n=io,e){switch(e.type){case Ve:return{...n,currentPage:1};case Ue:{const t=n.currentPage===1?1:n.currentPage-1;return{...n,currentPage:t}}case qe:{const t=n.currentPage+1;return{...n,currentPage:t}}case Je:return{...n,hasPagination:!0};case Ze:return{...n,hasPagination:!1}}return n},popup:function(n=ao,e){switch(e.type){case ot:return{...n,isLoading:!0};case nt:return{...n,isLoading:!1};case it:return{...n,feature:null};case rt:return{...n,feature:e.payload};case at:return{...n,coordinates:e.payload};case st:return{...n,coordinates:null}}return n}}),lt=function(){const n=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):vt)(yt(De.withExtraArgument({})));return jt(so,n)}();function J(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var ke;customElements.define("toujou-location-finder-teaser",class extends Ie{constructor(){super(),this.isHighlightedAttribute="is-highlighted",this.teaserLinkSelector=".teaser",this.onStateChange=this.onStateChange.bind(this),this._featureUid=this.getAttribute("feature-uid"),this._teaserLinkEl=this.querySelector(this.teaserLinkSelector),this.store=lt,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}render(){return A`<slot id="slot"></slot>`}set _highlightedFeature(n){n==this._featureUid?this._teaserLinkEl.setAttribute(this.isHighlightedAttribute,""):this._teaserLinkEl.removeAttribute(this.isHighlightedAttribute)}onStateChange(){this._state=this.store.getState(),this._highlightedFeature=this._state.features.highlightedFeature}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave)}_onMouseEnter(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-enter",{composed:!0,detail:{featureUid:this.getAttribute("feature-uid")}}))}_onMouseLeave(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-leave",{composed:!0}))}});var Le,Ce,Pe,lo=U(ke||(ke=J([`* {
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
`]))),co=U(Le||(Le=J([`/* TEASER */
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
`]))),uo=U(Ce||(Ce=J([`/* POPUP */
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
`]))),po=U(Pe||(Pe=J([`/* Basics */
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
`])));const ho=Ne(n=>n,n=>n.data.isLoading||n.locator.isLoading||n.search.isLoading||n.popup.isLoading),fo=Ne(n=>{var e;return(e=n.data.geojson)!==null&&e!==void 0?e:{type:"FeatureCollection",features:[]}},n=>n.features.highlightedFeature,(n,e)=>n&&Object.prototype.hasOwnProperty.call(n,"features")?{...n,features:n.features.map(t=>({type:t.type,geometry:t.geometry,properties:{...t.properties,isHighlighted:e===t.properties.uid}}))}:n);class Me extends Ie{static get is(){return"toujou-location-finder"}static get styles(){return[lo,co,uo,po]}static get properties(){return{isLoading:{type:Boolean,reflect:!0},reducedMotion:{type:Boolean,attribute:"reduced-motion"},_geoJsonData:{type:Object},_geoJsonPoints:{type:Object},_geoJsonPolygons:{type:Object},_geoJsonLines:{type:Object},_map:{type:Object},_teasersData:{type:String},hasPagination:{type:Boolean,reflect:!0},_currentPage:{type:Number},bounds:{type:Array},geoJsonUrl:{type:String},filterParams:{type:String},teaserUrl:{type:String},_popupFeature:{type:Object},_popupCoordinates:{type:Array},isMobile:{type:Boolean,reflect:!0},accessToken:{type:String,attribute:"access-token"},mapStyle:{type:String,attribute:"map-style"},maxZoom:{type:Number},fitBoundsMaxZoom:{type:Number,attribute:"fit-bounds-max-zoom"},minZoom:{type:Number},_hideMap:{type:Boolean,attribute:"map-is-hidden",reflect:!0},locatorButtonLabel:{type:String,attribute:"locator-button-label"},paginationPrevButtonTitle:{type:String,attribute:"pagination-prev-button-title"},paginationNextButtonTitle:{type:String,attribute:"pagination-next-button-title"}}}get _geoJsonEndpointFull(){return this._bounds=this._map.getBounds(),`${this.geoJsonUrl}?north=${this._bounds._ne.lat}&south=${this._bounds._sw.lat}&east=${this._bounds._ne.lng}&west=${this._bounds._sw.lng}${this.filterParams}`}render(){const e=this.querySelectorAll('[slot="layers"]').length>0;return A`
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
          ${e?A`<slot name="layers"></slot>`:this.renderLayers()}

          <toujou-map-geojson
            id="geoJsonSourcePolygons"
            ?cluster="${this._clusterRadius>0}"
            .clusterRadius="${this._clusterRadius}"
            .clusterMaxZoom="${Math.min(this._clusterMaxZoom,this.maxZoom)}"
            .sourceData='${this._geoJsonData}'
            source-id="geoJsonData">
          </toujou-map-geojson>

          ${this._popupFeature&&this._popupCoordinates?A`
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
    `}renderLayers(){const e={"fill-color":["case",["!=",["get","isHighlighted"],!0],this._mapPolygonColor,this._mapPolygonColorHover],"fill-opacity":.5},t={"circle-color":["case",["!=",["get","isHighlighted"],!0],this._mapPointColor,this._mapPointColorHover],"circle-radius":6,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"},o={"line-color":["case",["!=",["get","isHighlighted"],!0],this._mapLineColor,this._mapLineColorHover],"line-opacity":1,"line-width":3};return A`
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
        .paint='${o}'
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
      ></toujou-map-layer>`}constructor(){super(),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this.hasPagination=!1,this.bounds=[],this.accessToken=null,this.reducedMotion=!1,this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this._locatorIsLoading=!1,this._mql=null,this._layers=[],this._cssVarsFallbacks={mapPadding:16,mapPointColor:"var(--primary-color)",mapPointColorHover:"var(--primary-color--dark)",mapPolygonColor:"var(--primary-color)",mapPolygonColorHover:"var(--primary-color--dark)",mapLineColor:"var(--primary-color)",mapLineColorHover:"var(--primary-color--dark)",breakpoint:"840px",clusterBgColor:"var(--primary-color)",clusterBorderWidth:2,clusterBorderColor:"var(--primary-color)",clusterTextColor:"var(--bg-color)",clusterTextSize:16,clusterRadius:50,clusterMaxZoom:12},this.onStateChange=this.onStateChange.bind(this),this._onLocatorSuccess=this._onLocatorSuccess.bind(this),this._onLocatorError=this._onLocatorError.bind(this),this._onMapFeatureHoverEnter=this._onMapFeatureHoverEnter.bind(this),this._onMapFeatureHoverLeave=this._onMapFeatureHoverLeave.bind(this),this._onMapFeatureClick=this._onMapFeatureClick.bind(this),this._onMapClick=this._onMapClick.bind(this),this._onMapMoveEnd=this._onMapMoveEnd.bind(this),this._initGeocoder=this._initGeocoder.bind(this),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this.hasPagination=!1,this.bounds=[],this._locatorIsLoading=!1,this.accessToken=null,this._mql=null,this._hideMap=!1,this._deviceCanHover=window.matchMedia("(hover: hover)").matches,this._layers=[],this.locatorButtonLabel="Find my location",this.paginationPrevButtonTitle="Previous page",this.paginationNextButtonTitle="Next page",this.store=lt,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.reducedMotion=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.addEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser),this._getCustomProperties()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.removeEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser)}updated(e){super.updated(e),e.has("_map")&&this._init(),e.has("_currentPage")&&this._map&&this._fetchData(),e.has("filterParams")&&this._map&&this._fetchData()}onStateChange(){this._state=this.store.getState(),this.isLoading=ho(this._state);const e=fo(this._state);e&&(this._geoJsonData=e),this._teasersData=this._state.data.teasers,this._currentlyVisibleFeaturesUids=this._state.data.currentlyVisibleFeatures,this.hasPagination=this._state.pagination.hasPagination,this._currentPage=this._state.pagination.currentPage,this._popupFeature=this._state.popup.feature,this._popupCoordinates=this._state.popup.coordinates,this._locatorIsLoading=this._state.locator.isLoading}async _init(){this._map&&this._fetchData()}_setHighlightedFeatureID(e){this.store.dispatch((t=>({type:$e,payload:t}))(e))}_resetHighlightedFeatureID(){this.store.dispatch({type:Ge})}_setLocatorLoadingStatus(e){this.store.dispatch(e?{type:Be}:{type:He})}_onToujouMapReady(e){this._map=e.detail,this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop),this.bounds&&this._map.fitBounds(this.bounds,{animate:!this.reducedMotion}),this._initGeocoder(),this._initFullscreenControl(),this._map.on("moveend",this._onMapMoveEnd),this.dispatchEvent(new CustomEvent("toujou-location-finder-ready",{bubbles:!0,composed:!0,detail:this}))}onMapLayerAdded(e){const t=e.detail.id;this._layers.push(t),this._map.on("mouseover",t,this._onMapFeatureHoverEnter),this._map.on("mouseleave",t,this._onMapFeatureHoverLeave),this._map.on("click",t,this._onMapFeatureClick),this._map.on("click",this._onMapClick)}onMapLayerRemoved(e){const t=e.detail.id;this._layers=this._layers.filter(o=>o!==t),this._map.off("mouseover",t,this._onMapFeatureHoverEnter),this._map.off("mouseleave",t,this._onMapFeatureHoverLeave),this._map.off("click",t,this._onMapFeatureClick),this._map.off("click",this._onMapClick)}_onMouseEnterTeaser(e){this._setHighlightedFeatureID(+e.detail.featureUid)}_onMouseLeaveTeaser(){this._resetHighlightedFeatureID()}_onLocatorClick(){this._setLocatorLoadingStatus(!0),this._geocoder.clear(),navigator.geolocation?navigator.geolocation.getCurrentPosition(this._onLocatorSuccess,this._onLocatorError):console.error("Cannot get your location because Geolocation is not supported by your browser")}_onLocatorSuccess(e){const{latitude:t,longitude:o}=e.coords;this._map.flyTo({center:[o,t]}),this._setLocatorLoadingStatus(!1)}_onLocatorError(e){console.error("Could not get your location",e),this._setLocatorLoadingStatus(!1)}_onMapFeatureHoverEnter(e){this._deviceCanHover&&(this._map.getCanvas().style.cursor="pointer",this._setHighlightedFeatureID(e.features[0].properties.uid))}_onMapFeatureClick(e){e.features[0].properties.uid&&this._showPopup(e)}_onMapClick(){this._popupFeature&&(this.store.dispatch({type:it}),this.store.dispatch({type:st}))}_onMapFeatureHoverLeave(){this._deviceCanHover&&(this._map.getCanvas().style.cursor="grab",this._resetHighlightedFeatureID())}_onMapMoveEnd(){this.store.dispatch({type:Ve}),this._fetchData()}_onPaginationButtonClick(e){const t=e.currentTarget.getAttribute("paginationAction");t==="prev"&&this.store.dispatch({type:Ue}),t==="next"&&this.store.dispatch({type:qe})}_showPopup(e){const t=e.features[0].geometry.type==="Point"?e.features[0].geometry.coordinates:e.lngLat;this.store.dispatch(ro(e.features[0].properties.uid,this.teaserUrl)),t&&this.store.dispatch({type:at,payload:t})}_getCustomProperties(){const e=window.getComputedStyle(document.body);this._mapPointColor=e.getPropertyValue("--toujou-location-finder-map-point-color")||this._cssVarsFallbacks.mapPointColor,this._mapPointColorHover=e.getPropertyValue("--toujou-location-finder-map-point-color-hover")||this._cssVarsFallbacks.mapPointColorHover,this._mapPolygonColor=e.getPropertyValue("--toujou-location-finder-map-polygon-color")||this._cssVarsFallbacks.mapPolygonColor,this._mapPolygonColorHover=e.getPropertyValue("--toujou-location-finder-map-polygon-color-hover")||this._cssVarsFallbacks.mapPolygonColorHover,this._mapLineColor=e.getPropertyValue("--toujou-location-finder-map-line-color")||this._cssVarsFallbacks.mapLineColor,this._mapLineColorHover=e.getPropertyValue("--toujou-location-finder-map-line-color-hover")||this._cssVarsFallbacks.mapLineColorHover,this._breakpoint=e.getPropertyValue("--toujou-location-finder-breakpoint")||this._cssVarsFallbacks.breakpoint,this._clusterBgColor=e.getPropertyValue("--toujou-location-finder-cluster-background-color")||this._cssVarsFallbacks.clusterBgColor,this._clusterBorderWidth=e.getPropertyValue("--toujou-location-finder-cluster-border-width")||this._cssVarsFallbacks.clusterBorderWidth,this._clusterBorderColor=e.getPropertyValue("--toujou-location-finder-cluster-border-color")||this._cssVarsFallbacks.clusterBorderColor,this._clusterTextColor=e.getPropertyValue("--toujou-location-finder-cluster-text-color")||this._cssVarsFallbacks.clusterTextColor,this._clusterTextSize=e.getPropertyValue("--toujou-location-finder-cluster-text-size")||this._cssVarsFallbacks.clusterTextSize,this._clusterRadius=parseInt(e.getPropertyValue("--toujou-location-finder-cluster-radius"),10)||this._cssVarsFallbacks.clusterRadius,this._clusterMaxZoom=e.getPropertyValue("--toujou-location-finder-cluster-max-zoom")||this._cssVarsFallbacks.clusterMaxZoom,this._mapPaddingMobile={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-right"),10)||this._cssVarsFallbacks.mapPadding},this._mapPaddingDesktop={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-right"),10)||this._cssVarsFallbacks.mapPadding},this._initMatchMedia()}_fetchData(){this.store.dispatch(to(this._geoJsonEndpointFull,this.teaserUrl,this._map,this._layers,this._currentlyVisibleFeaturesUids,this._maxTeasersPerPage))}_renderTeasers(){return A`
        <div class="teasers" part="teasers">
          ${je(this._teasersData)}
        </div>
    `}_renderPagination(){return A`
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
    `}_renderPopupContent(){return A`
        <div class="location-finder-popup" part="popup">
          ${je(this._popupFeature)}
        </div>
    `}_initGeocoder(){const e={forwardGeocode:async o=>{let i=[];try{const r=`https://nominatim.openstreetmap.org/search?q=${o.query}&format=geojson&polygon_geojson=1&addressdetails=1`;i=(await(await fetch(r)).json()).features.map(u=>{const p=[u.bbox[0]+(u.bbox[2]-u.bbox[0])/2,u.bbox[1]+(u.bbox[3]-u.bbox[1])/2];return{type:"Feature",geometry:{type:"Point",coordinates:p},place_name:u.properties.display_name,properties:u.properties,text:u.properties.display_name,place_type:["place"],bbox:u.bbox,center:p}})}catch(r){console.error(`Failed to forwardGeocode with error: ${r}`)}return{type:"FeatureCollection",features:i}}};this._geocoder=new Gt(e,{maplibregl:ue,showResultsWhileTyping:!0,showResultMarkers:!1,marker:!1}),this.shadowRoot.querySelector(".geocoder-container").appendChild(this._geocoder.onAdd(this._map)),this._geocoder.on("loading",()=>{this.store.dispatch({type:et})}),this._geocoder.on("results",()=>{this.store.dispatch({type:tt})});const t=document.documentElement.lang==="en"?"Search location":"Standort suchen";this._geocoder.setPlaceholder(t)}_initFullscreenControl(){this._map.addControl(new ue.FullscreenControl({container:this}))}_initMatchMedia(){this._mql=window.matchMedia(`(max-width: ${this._breakpoint})`),this.isMobile=this._mql.matches,this._mql.addListener(e=>{this.isMobile=e.matches,this._updateMapPadding()})}_updateMapPadding(){this._map&&this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop)}_handleMapToggleClick(){this._hideMap=!this._hideMap}}customElements.define(Me.is,Me);const go={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["8.666475","50.107672"]},properties:{uid:9,name:"dkd Internet Service GmbH",search_boost:1,categories:[0],distance:195927.05143468693}},{type:"Feature",geometry:{type:"Point",coordinates:["8.56679","48.92848"]},properties:{uid:6,name:"G.K.M.B. GmbH",search_boost:1,categories:[0],distance:176281.53005033717}},{type:"Feature",geometry:{type:"Point",coordinates:["9.206144","48.676871"]},properties:{uid:5,name:"jweiland.net",search_boost:1,categories:[0],distance:229457.30072080903}},{type:"Feature",geometry:{type:"Point",coordinates:["8.383444","49.010315"]},properties:{uid:4,name:"punkt.de GmbH",search_boost:1,categories:[0],distance:161022.2575388874}}]},mo=`
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/240x100/049bd6/ffffff?text=Logo" width="100" height="22" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/100x100/0da367/ffffff?text=Logo" width="99" height="100" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/100x100/a30c4d/ffffff?text=Logo" width="100" height="86" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/100x100/7b0ca3/ffffff?text=Logo" width="100" height="100" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/100x100/0ca38c/ffffff?text=Logo" width="100" height="100" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/0/2/csm_gkmb_Logo_c4783b955c.png" width="100" height="75" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/c/2/csm_GIGATEC_ea9c3ec783.png" width="100" height="21" alt="" />
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
        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/7/c/csm_Goldwild_Logo_Schwarz_c1f876b007.png" width="100" height="80" alt="" />
    </figure>
   </a>
</toujou-location-finder-teaser>
`,_o=`
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
            <img class="teaser__image teaser__image--logo" loading="lazy" src="https://fakeimg.pl/100x100/049bd6/ffffff?text=Logo" width="100" height="22" alt="" />
        </figure>
    </a>
</toujou-location-finder-teaser>
`,Lo={title:"COMPONENTS/LocationFinder",parameters:{badges:[ht.DONE],docs:{page:wt},layout:"fullscreen",fetchMock:{mocks:[{matcher:{name:"placesGeo",url:"begin:/placesgeo.json"},response:(n,e,t)=>(Te("placesGeo",n,e,t),go)},{matcher:{name:"placesTeaser",url:"begin:/placesteaser.html"},response:(n,e,t)=>{Te("placesTeaser",n,e,t);const o=new URLSearchParams(n);if(!o)return;const i=o.get("ids");return i&&i.split(",").length>1?mo:_o}}]}}};function Te(n,e,t,o){console.groupCollapsed(`%c====== MOCK REQUEST: ${n} ======`,"color: #4DB6AC; font-weight: bold;"),console.log(`%cURL: %c${e}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.log(`%cOptions %c${t}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.log(`%cRequest %c${o}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.groupEnd()}const bo=()=>`
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
    `,$=bo.bind({});var Se,Oe,Ae;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};const Co=["LocationFinder"];export{$ as LocationFinder,Co as __namedExportsOrder,Lo as default};
