import{T as Ye}from"./badgeCustomConfig-DUXiHpL4.js";import{j as M}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as de}from"./index-DpH9cx3q.js";import{b as V,x as Qe,s as pe,y as C,i as F}from"./lit-element-Caih-Nwg.js";import{i as et,t as tt,e as ot,c as nt,a as it,b as rt,d as at,l as U}from"./directive-C-zbuPWM.js";import{c as A,g as st}from"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DO8khQO4.js";function J(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...de(),...e.components};return M.jsxs(M.Fragment,{children:[M.jsx(t.h1,{id:"location-finder",children:"Location finder"}),`
`,M.jsx(t.h2,{id:"example-from-toujou",children:"Example from TOUJOU"}),`
`,M.jsx(t.pre,{children:M.jsx(t.code,{className:"language-html",children:`<toujou-location-finder
    class="location-finder"
    bounds="{mapBounds}"
    teaserUrl="{teaserUrl}"
    geoJsonUrl="{geoJsonUrl}"
    filterParams="{filterParams}"
    map-style="mapbox://styles/mapbox/light-v10"
    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
    <f:render partial="Content/LocationFinder/Layers" />
</toujou-location-finder>
`})})]})}function lt(e={}){const{wrapper:t}={...de(),...e.components};return t?M.jsx(t,{...e,children:M.jsx(J,{...e})}):J(e)}var he=ut,ct=Object.prototype.hasOwnProperty;function ut(){for(var e={},t=0;t<arguments.length;t++){var o=arguments[t];for(var n in o)ct.call(o,n)&&(e[n]=o[n])}return e}var ge={exports:{}};(function(e,t){(function(){var o={};e.exports=o,o.simpleFilter=function(n,i){return i.filter(function(r){return o.test(n,r)})},o.test=function(n,i){return o.match(n,i)!==null},o.match=function(n,i,r){r=r||{};var a=0,s=[],l=i.length,c=0,u=0,d=r.pre||"",f=r.post||"",_=r.caseSensitive&&i||i.toLowerCase(),b;n=r.caseSensitive&&n||n.toLowerCase();for(var h=0;h<l;h++)b=i[h],_[h]===n[a]?(b=d+b+f,a+=1,u+=1+u):u=0,c+=u,s[s.length]=b;return a===n.length?(c=_===n?1/0:c,{rendered:s.join(""),score:c}):null},o.filter=function(n,i,r){return!i||i.length===0?[]:typeof n!="string"?i:(r=r||{},i.reduce(function(a,s,l,c){var u=s;r.extract&&(u=r.extract(s));var d=o.match(n,u,r);return d!=null&&(a[a.length]={string:d.rendered,score:d.score,index:l,original:s}),a},[]).sort(function(a,s){var l=s.score-a.score;return l||a.index-s.index}))}})()})(ge);var dt=ge.exports,w=function(e){return this.component=e,this.items=[],this.active=e.options.noInitialSelection?-1:0,this.wrapper=document.createElement("div"),this.wrapper.className="suggestions-wrapper",this.element=document.createElement("ul"),this.element.className="suggestions",this.wrapper.appendChild(this.element),this.selectingListItem=!1,e.el.parentNode.insertBefore(this.wrapper,e.el.nextSibling),this};w.prototype.show=function(){this.element.style.display="block"};w.prototype.hide=function(){this.element.style.display="none"};w.prototype.add=function(e){this.items.push(e)};w.prototype.clear=function(){this.items=[],this.active=this.component.options.noInitialSelection?-1:0};w.prototype.isEmpty=function(){return!this.items.length};w.prototype.isVisible=function(){return this.element.style.display==="block"};w.prototype.draw=function(){if(this.element.innerHTML="",this.items.length===0){this.hide();return}for(var e=0;e<this.items.length;e++)this.drawItem(this.items[e],this.active===e);this.show()};w.prototype.drawItem=function(e,t){var o=document.createElement("li"),n=document.createElement("a");t&&(o.className+=" active"),n.innerHTML=e.string,o.appendChild(n),this.element.appendChild(o),o.addEventListener("mousedown",(function(){this.selectingListItem=!0}).bind(this)),o.addEventListener("mouseup",(function(){this.handleMouseUp.call(this,e)}).bind(this))};w.prototype.handleMouseUp=function(e){this.selectingListItem=!1,this.component.value(e.original),this.clear(),this.draw()};w.prototype.move=function(e){this.active=e,this.draw()};w.prototype.previous=function(){this.move(this.active<=0?this.items.length-1:this.active-1)};w.prototype.next=function(){this.move(this.active>=this.items.length-1?0:this.active+1)};w.prototype.drawError=function(e){var t=document.createElement("li");t.innerHTML=e,this.element.appendChild(t),this.show()};var pt=w,ht=he,gt=dt,ft=pt,j=function(e,t,o){return o=o||{},this.options=ht({minLength:2,limit:5,filter:!0,hideOnBlur:!0,noInitialSelection:!0},o),this.el=e,this.data=t||[],this.list=new ft(this),this.query="",this.selected=null,this.list.draw(),this.el.addEventListener("keyup",(function(n){this.handleKeyUp(n.keyCode,n)}).bind(this),!1),this.el.addEventListener("keydown",(function(n){this.handleKeyDown(n)}).bind(this)),this.el.addEventListener("focus",(function(){this.handleFocus()}).bind(this)),this.el.addEventListener("blur",(function(){this.handleBlur()}).bind(this)),this.el.addEventListener("paste",(function(n){this.handlePaste(n)}).bind(this)),this.render=this.options.render?this.options.render.bind(this):this.render.bind(this),this.getItemValue=this.options.getItemValue?this.options.getItemValue.bind(this):this.getItemValue.bind(this),this};j.prototype.handleKeyUp=function(e,t){if(!(e===40||e===38||e===27||e===9)){if(e===13){this.list.items[this.list.active]&&(this.list.handleMouseUp(this.list.items[this.list.active]),t.stopPropagation());return}this.handleInputChange(this.el.value)}};j.prototype.handleKeyDown=function(e){switch(e.keyCode){case 13:this.list.active>=0&&(this.list.selectingListItem=!0);break;case 9:this.list.isEmpty()||(this.list.isVisible()&&e.preventDefault(),this.value(this.list.active>=0?this.list.items[this.list.active].original:null),this.list.hide());break;case 27:this.list.isEmpty()||this.list.hide();break;case 38:this.list.previous();break;case 40:this.list.next();break}};j.prototype.handleBlur=function(){!this.list.selectingListItem&&this.options.hideOnBlur&&this.list.hide()};j.prototype.handlePaste=function(e){if(e.clipboardData)this.handleInputChange(e.clipboardData.getData("Text"));else{var t=this;setTimeout(function(){t.handleInputChange(e.target.value)},100)}};j.prototype.handleInputChange=function(e){if(this.query=this.normalize(e),this.list.clear(),this.query.length<this.options.minLength){this.list.draw();return}this.getCandidates((function(t){for(var o=0;o<t.length&&(this.list.add(t[o]),o!==this.options.limit-1);o++);this.list.draw()}).bind(this))};j.prototype.handleFocus=function(){this.list.isEmpty()||this.list.show(),this.list.selectingListItem=!1};j.prototype.update=function(e){this.data=e,this.handleKeyUp()};j.prototype.clear=function(){this.data=[],this.list.clear()};j.prototype.normalize=function(e){return e=e.toLowerCase(),e};j.prototype.match=function(e,t){return e.indexOf(t)>-1};j.prototype.value=function(e){if(this.selected=e,this.el.value=this.getItemValue(e||{place_name:this.query}),document.createEvent){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),this.el.dispatchEvent(t)}else this.el.fireEvent("onchange")};j.prototype.getCandidates=function(e){var t={pre:"<strong>",post:"</strong>",extract:(function(n){return this.getItemValue(n)}).bind(this)},o;this.options.filter?(o=gt.filter(this.query,this.data,t),o=o.map((function(n){return{original:n.original,string:this.render(n.original,n.string)}}).bind(this))):o=this.data.map((function(n){var i=this.render(n);return{original:n,string:i}}).bind(this)),e(o)};j.prototype.getItemValue=function(e){return e};j.prototype.render=function(e,t){if(t)return t;for(var o=e.original?this.getItemValue(e.original):this.getItemValue(e),n=this.normalize(o),i=n.lastIndexOf(this.query);i>-1;){var r=i+this.query.length;o=o.slice(0,i)+"<strong>"+o.slice(i,r)+"</strong>"+o.slice(r),i=n.slice(0,i).lastIndexOf(this.query)}return o};j.prototype.renderError=function(e){this.list.drawError(e)};var mt=j,fe=mt,vt=fe;typeof window<"u"&&(window.Suggestions=fe);var _t="Expected a function",q=NaN,bt="[object Symbol]",yt=/^\s+|\s+$/g,jt=/^[-+]0x[0-9a-f]+$/i,xt=/^0b[01]+$/i,wt=/^0o[0-7]+$/i,kt=parseInt,Et=typeof A=="object"&&A&&A.Object===Object&&A,Lt=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Et||Lt||Function("return this")(),Ct=Object.prototype,Mt=Ct.toString,Tt=Math.max,St=Math.min,B=function(){return Pt.Date.now()};function At(e,t,o){var n,i,r,a,s,l,c=0,u=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(_t);t=Z(t)||0,N(o)&&(u=!!o.leading,d="maxWait"in o,r=d?Tt(Z(o.maxWait)||0,t):r,f="trailing"in o?!!o.trailing:f);function _(g){var v=n,S=i;return n=i=void 0,c=g,a=e.apply(S,v),a}function b(g){return c=g,s=setTimeout(m,t),u?_(g):a}function h(g){var v=g-l,S=g-c,G=t-v;return d?St(G,r-S):G}function x(g){var v=g-l,S=g-c;return l===void 0||v>=t||v<0||d&&S>=r}function m(){var g=B();if(x(g))return y(g);s=setTimeout(m,h(g))}function y(g){return s=void 0,f&&n?_(g):(n=i=void 0,a)}function E(){s!==void 0&&clearTimeout(s),c=0,n=l=i=s=void 0}function L(){return s===void 0?a:y(B())}function P(){var g=B(),v=x(g);if(n=arguments,i=this,l=g,v){if(s===void 0)return b(l);if(d)return s=setTimeout(m,t),_(l)}return s===void 0&&(s=setTimeout(m,t)),a}return P.cancel=E,P.flush=L,P}function N(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ot(e){return!!e&&typeof e=="object"}function It(e){return typeof e=="symbol"||Ot(e)&&Mt.call(e)==bt}function Z(e){if(typeof e=="number")return e;if(It(e))return q;if(N(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=N(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(yt,"");var o=xt.test(e);return o||wt.test(e)?kt(e.slice(2),o?2:8):jt.test(e)?q:+e}var Rt=At,H={exports:{}},T=typeof Reflect=="object"?Reflect:null,K=T&&typeof T.apply=="function"?T.apply:function(t,o,n){return Function.prototype.apply.call(t,o,n)},I;T&&typeof T.ownKeys=="function"?I=T.ownKeys:Object.getOwnPropertySymbols?I=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:I=function(t){return Object.getOwnPropertyNames(t)};function Ft(e){console&&console.warn&&console.warn(e)}var me=Number.isNaN||function(t){return t!==t};function p(){p.init.call(this)}H.exports=p;H.exports.once=Nt;p.EventEmitter=p;p.prototype._events=void 0;p.prototype._eventsCount=0;p.prototype._maxListeners=void 0;var W=10;function z(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(p,"defaultMaxListeners",{enumerable:!0,get:function(){return W},set:function(e){if(typeof e!="number"||e<0||me(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");W=e}});p.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};p.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||me(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function ve(e){return e._maxListeners===void 0?p.defaultMaxListeners:e._maxListeners}p.prototype.getMaxListeners=function(){return ve(this)};p.prototype.emit=function(t){for(var o=[],n=1;n<arguments.length;n++)o.push(arguments[n]);var i=t==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var a;if(o.length>0&&(a=o[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=r[t];if(l===void 0)return!1;if(typeof l=="function")K(l,this,o);else for(var c=l.length,u=xe(l,c),n=0;n<c;++n)K(u[n],this,o);return!0};function _e(e,t,o,n){var i,r,a;if(z(o),r=e._events,r===void 0?(r=e._events=Object.create(null),e._eventsCount=0):(r.newListener!==void 0&&(e.emit("newListener",t,o.listener?o.listener:o),r=e._events),a=r[t]),a===void 0)a=r[t]=o,++e._eventsCount;else if(typeof a=="function"?a=r[t]=n?[o,a]:[a,o]:n?a.unshift(o):a.push(o),i=ve(e),i>0&&a.length>i&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,Ft(s)}return e}p.prototype.addListener=function(t,o){return _e(this,t,o,!1)};p.prototype.on=p.prototype.addListener;p.prototype.prependListener=function(t,o){return _e(this,t,o,!0)};function zt(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function be(e,t,o){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:o},i=zt.bind(n);return i.listener=o,n.wrapFn=i,i}p.prototype.once=function(t,o){return z(o),this.on(t,be(this,t,o)),this};p.prototype.prependOnceListener=function(t,o){return z(o),this.prependListener(t,be(this,t,o)),this};p.prototype.removeListener=function(t,o){var n,i,r,a,s;if(z(o),i=this._events,i===void 0)return this;if(n=i[t],n===void 0)return this;if(n===o||n.listener===o)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||o));else if(typeof n!="function"){for(r=-1,a=n.length-1;a>=0;a--)if(n[a]===o||n[a].listener===o){s=n[a].listener,r=a;break}if(r<0)return this;r===0?n.shift():Dt(n,r),n.length===1&&(i[t]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",t,s||o)}return this};p.prototype.off=p.prototype.removeListener;p.prototype.removeAllListeners=function(t){var o,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[t]),this;if(arguments.length===0){var r=Object.keys(n),a;for(i=0;i<r.length;++i)a=r[i],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(o=n[t],typeof o=="function")this.removeListener(t,o);else if(o!==void 0)for(i=o.length-1;i>=0;i--)this.removeListener(t,o[i]);return this};function ye(e,t,o){var n=e._events;if(n===void 0)return[];var i=n[t];return i===void 0?[]:typeof i=="function"?o?[i.listener||i]:[i]:o?Bt(i):xe(i,i.length)}p.prototype.listeners=function(t){return ye(this,t,!0)};p.prototype.rawListeners=function(t){return ye(this,t,!1)};p.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):je.call(e,t)};p.prototype.listenerCount=je;function je(e){var t=this._events;if(t!==void 0){var o=t[e];if(typeof o=="function")return 1;if(o!==void 0)return o.length}return 0}p.prototype.eventNames=function(){return this._eventsCount>0?I(this._events):[]};function xe(e,t){for(var o=new Array(t),n=0;n<t;++n)o[n]=e[n];return o}function Dt(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function Bt(e){for(var t=new Array(e.length),o=0;o<t.length;++o)t[o]=e[o].listener||e[o];return t}function Nt(e,t){return new Promise(function(o,n){function i(a){e.removeListener(t,r),n(a)}function r(){typeof e.removeListener=="function"&&e.removeListener("error",i),o([].slice.call(arguments))}we(e,t,r,{once:!0}),t!=="error"&&$t(e,i,{once:!0})})}function $t(e,t,o){typeof e.on=="function"&&we(e,"error",t,o)}function we(e,t,o,n){if(typeof e.on=="function")n.once?e.once(t,o):e.on(t,o);else if(typeof e.addEventListener=="function")e.addEventListener(t,function i(r){n.once&&e.removeEventListener(t,i),o(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}var Ht=H.exports,Gt={fr:{name:"France",bbox:[[-4.59235,41.380007],[9.560016,51.148506]]},us:{name:"United States",bbox:[[-171.791111,18.91619],[-66.96466,71.357764]]},ru:{name:"Russia",bbox:[[19.66064,41.151416],[190.10042,81.2504]]},ca:{name:"Canada",bbox:[[-140.99778,41.675105],[-52.648099,83.23324]]}},Vt={de:"Suche",it:"Ricerca",en:"Search",nl:"Zoeken",fr:"Chercher",ca:"Cerca",he:"לחפש",ja:"サーチ",lv:"Meklēt",pt:"Procurar",sr:"Претрага",zh:"搜索",cs:"Vyhledávání",hu:"Keresés",ka:"ძიება",nb:"Søke",sk:"Vyhľadávanie",th:"ค้นหา",fi:"Hae",is:"Leita",ko:"수색",pl:"Szukaj",sl:"Iskanje",fa:"جستجو",ru:"Поиск"},Ut={placeholder:Vt},ke={exports:{}};(function(e){(function(t,o,n){e.exports?e.exports=n():t[o]=n()})(A,"subtag",function(){var t="",o=/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;function n(l){return l.match(o)||[]}function i(l){return n(l).filter(function(c,u){return c&&u})}function r(l){return l=n(l),{language:l[1]||t,extlang:l[2]||t,script:l[3]||t,region:l[4]||t}}function a(l,c,u){Object.defineProperty(l,c,{value:u,enumerable:!0})}function s(l,c,u){function d(f){return n(f)[l]||t}a(d,"pattern",c),a(r,u,d)}return s(1,/^[a-zA-Z]{2,3}$/,"language"),s(2,/^[a-zA-Z]{3}$/,"extlang"),s(3,/^[a-zA-Z]{4}$/,"script"),s(4,/^[a-zA-Z]{2}$|^[0-9]{3}$/,"region"),a(r,"split",i),r})})(ke);var Jt=ke.exports,qt=vt,Zt=Rt,k=he,Kt=Ht.EventEmitter,X=Gt,Wt=Ut,Xt=Jt;function Ee(e,t){this._eventEmitter=new Kt,this.options=k({},this.options,t),this.inputString="",this.fresh=!0,this.lastSelected=null,this.geocoderApi=e}Ee.prototype={options:{zoom:16,flyTo:!0,trackProximity:!0,showResultsWhileTyping:!1,minLength:2,reverseGeocode:!1,limit:5,enableEventLogging:!0,marker:!0,popup:!1,maplibregl:null,collapsed:!1,clearAndBlurOnEsc:!1,clearOnBlur:!1,getItemValue:function(e){return e.text!==void 0?e.text:e.place_name},render:function(e){if(e.geometry){var s=e.place_name.split(",");return'<div class="mapboxgl-ctrl-geocoder--result maplibregl-ctrl-geocoder--result"><svg class="mapboxgl-ctrl-geocoder--result-icon maplibre-ctrl-geocoder--result-icon" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36571 0 0 5.38676 0 12.0471C0 21.0824 12 32 12 32C12 32 24 21.0824 24 12.0471C24 5.38676 18.6343 0 12 0ZM12 16.3496C9.63428 16.3496 7.71429 14.4221 7.71429 12.0471C7.71429 9.67207 9.63428 7.74454 12 7.74454C14.3657 7.74454 16.2857 9.67207 16.2857 12.0471C16.2857 14.4221 14.3657 16.3496 12 16.3496Z" fill="#687078"/></svg><div><div class="mapboxgl-ctrl-geocoder--result-title maplibregl-ctrl-geocoder--result-title">'+s[0]+'</div><div class="mapboxgl-ctrl-geocoder--result-address maplibregl-ctrl-geocoder--result-address">'+s.splice(1,s.length).join(",")+"</div></div></div>"}else{var t=e.text,o=t.toLowerCase().indexOf(this.query.toLowerCase()),n=this.query.length,i=t.substring(0,o),r=t.substring(o,o+n),a=t.substring(o+n);return'<div class="mapboxgl-ctrl-geocoder--suggestion maplibregl-ctrl-geocoder--suggestion"><svg class="mapboxgl-ctrl-geocoder--suggestion-icon maplibre-ctrl-geocoder--suggestion-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22.8702 20.1258H21.4248L20.9125 19.6318C22.7055 17.546 23.785 14.8382 23.785 11.8925C23.785 5.32419 18.4608 0 11.8925 0C5.32419 0 0 5.32419 0 11.8925C0 18.4608 5.32419 23.785 11.8925 23.785C14.8382 23.785 17.546 22.7055 19.6318 20.9125L20.1258 21.4248V22.8702L29.2739 32L32 29.2739L22.8702 20.1258ZM11.8925 20.1258C7.33676 20.1258 3.65923 16.4483 3.65923 11.8925C3.65923 7.33676 7.33676 3.65923 11.8925 3.65923C16.4483 3.65923 20.1258 7.33676 20.1258 11.8925C20.1258 16.4483 16.4483 20.1258 11.8925 20.1258Z" fill="#687078"/></svg><div class="mapboxgl-ctrl-geocoder--suggestion-info maplibregl-ctrl-geocoder--suggestion-info"><div class="mapboxgl-ctrl-geocoder--suggestion-title maplibregl-ctrl-geocoder--suggestion-title">'+i+'<span class="mapboxgl-ctrl-geocoder--suggestion-match maplibregl-ctrl-geocoder--suggestion-match">'+r+"</span>"+a+"</div></div></div>"}},popupRender:function(e){var t=e.place_name.split(",");return'<div class="mapboxgl-ctrl-geocoder--suggestion maplibre-ctrl-geocoder--suggestion popup-suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title maplibre-ctrl-geocoder--suggestion-title popup-suggestion-title">'+t[0]+'</div><div class="mapboxgl-ctrl-geocoder--suggestion-address maplibre-ctrl-geocoder--suggestion-address popup-suggestion-address">'+t.splice(1,t.length).join(",")+"</div></div>"},showResultMarkers:!0,debounceSearch:200},addTo:function(e){function t(n,i){if(!document.body.contains(i))throw new Error("Element provided to #addTo() exists, but is not in the DOM");var r=n.onAdd();i.appendChild(r)}if(e._controlContainer)e.addControl(this);else if(e instanceof HTMLElement)t(this,e);else if(typeof e=="string"){var o=document.querySelectorAll(e);if(o.length===0)throw new Error("Element ",e,"not found.");if(o.length>1)throw new Error("Geocoder can only be added to a single html element");t(this,o[0])}else throw new Error("Error: addTo must be a maplibre-gl-js map, an html element, or a CSS selector query for a single html element")},onAdd:function(e){if(e&&typeof e!="string"&&(this._map=e),this.setLanguage(),this.options.localGeocoderOnly&&!this.options.localGeocoder)throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");this._onChange=this._onChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onPaste=this._onPaste.bind(this),this._onBlur=this._onBlur.bind(this),this._showButton=this._showButton.bind(this),this._hideButton=this._hideButton.bind(this),this._onQueryResult=this._onQueryResult.bind(this),this.clear=this.clear.bind(this),this._updateProximity=this._updateProximity.bind(this),this._collapse=this._collapse.bind(this),this._unCollapse=this._unCollapse.bind(this),this._clear=this._clear.bind(this),this._clearOnBlur=this._clearOnBlur.bind(this);var t=this.container=document.createElement("div");t.className="mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl";var o=this.createIcon("search",'<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');this._inputEl=document.createElement("input"),this._inputEl.type="text",this._inputEl.className="mapboxgl-ctrl-geocoder--input maplibregl-ctrl-geocoder--input",this.setPlaceholder(),this.options.collapsed&&(this._collapse(),this.container.addEventListener("mouseenter",this._unCollapse),this.container.addEventListener("mouseleave",this._collapse),this._inputEl.addEventListener("focus",this._unCollapse)),(this.options.collapsed||this.options.clearOnBlur)&&this._inputEl.addEventListener("blur",this._onBlur),this._inputEl.addEventListener("keydown",Zt(this._onKeyDown,this.options.debounceSearch)),this._inputEl.addEventListener("paste",this._onPaste),this._inputEl.addEventListener("change",this._onChange),this.container.addEventListener("mouseenter",this._showButton),this.container.addEventListener("mouseleave",this._hideButton);var n=document.createElement("div");n.classList.add("mapboxgl-ctrl-geocoder--pin-right","maplibregl-ctrl-geocoder--pin-right"),this._clearEl=document.createElement("button"),this._clearEl.setAttribute("aria-label","Clear"),this._clearEl.addEventListener("click",this.clear),this._clearEl.className="mapboxgl-ctrl-geocoder--button maplibregl-ctrl-geocoder--button";var i=this.createIcon("close",'<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');return this._clearEl.appendChild(i),this._loadingEl=this.createIcon("loading",'<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'),n.appendChild(this._clearEl),n.appendChild(this._loadingEl),t.appendChild(o),t.appendChild(this._inputEl),t.appendChild(n),this._typeahead=new qt(this._inputEl,[],{filter:!1,minLength:this.options.minLength,limit:this.options.limit,noInitialSelection:!0}),this.setRenderFunction(this.options.render),this._typeahead.getItemValue=this.options.getItemValue,this.mapMarker=null,this.resultMarkers=[],this._handleMarker=this._handleMarker.bind(this),this._handleResultMarkers=this._handleResultMarkers.bind(this),this._map&&(this.options.trackProximity&&(this._updateProximity(),this._map.on("moveend",this._updateProximity)),this._maplibregl=this.options.maplibregl,!this._maplibregl&&this.options.marker&&(console.error("No maplibregl detected in options. Map markers are disabled. Please set options.maplibregl."),this.options.marker=!1)),t},createIcon:function(e,t){var o=document.createElementNS("http://www.w3.org/2000/svg","svg");if(o.setAttribute("class","mapboxgl-ctrl-geocoder--icon mapboxgl-ctrl-geocoder--icon-"+e+" maplibregl-ctrl-geocoder--icon maplibregl-ctrl-geocoder--icon-"+e),o.setAttribute("viewBox","0 0 18 18"),o.setAttribute("xml:space","preserve"),o.setAttribute("width",18),o.setAttribute("height",18),"innerHTML"in o)o.innerHTML=t;else{var n=document.createElement("div");n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";var i=n.firstChild,r=i.firstChild;o.appendChild(r)}return o},onRemove:function(){return this.container.parentNode.removeChild(this.container),this.options.trackProximity&&this._map&&this._map.off("moveend",this._updateProximity),this._removeMarker(),this._map=null,this},_onPaste:function(e){var t=(e.clipboardData||window.clipboardData).getData("text");t.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(t)},_onKeyDown:function(e){var t=27,o=9;if(e.keyCode===t&&this.options.clearAndBlurOnEsc)return this._clear(e),this._inputEl.blur();var n=e.target&&e.target.shadowRoot?e.target.shadowRoot.activeElement:e.target,i=n?n.value:"";if(!i)return this.fresh=!0,e.keyCode!==o&&this.clear(e),this._clearEl.style.display="none";if(!(e.metaKey||[o,t,37,39,38,40].indexOf(e.keyCode)!==-1)){if(e.keyCode===13)if(!this.options.showResultsWhileTyping)this._typeahead.selected||this._geocode(n.value);else{this._typeahead.selected==null&&this.geocoderApi.getSuggestions?this._geocode(n.value,!0):this._typeahead.selected==null&&this.options.showResultMarkers&&this._fitBoundsForMarkers();return}n.value.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(n.value)}},_showButton:function(){this._inputEl.value.length>0&&(this._clearEl.style.display="block")},_hideButton:function(){this._typeahead.selected&&(this._clearEl.style.display="none")},_onBlur:function(e){this.options.clearOnBlur&&this._clearOnBlur(e),this.options.collapsed&&this._collapse()},_onChange:function(){var e=this._typeahead.selected;if(e&&!e.geometry)e.placeId?this._geocode(e.placeId,!0,!0):this._geocode(e.text,!0);else if(e&&JSON.stringify(e)!==this.lastSelected){if(this._clearEl.style.display="none",this.options.flyTo){var t;if(this._removeResultMarkers(),e.properties&&X[e.properties.short_code])t=k({},this.options.flyTo),this._map&&this._map.fitBounds(X[e.properties.short_code].bbox,t);else if(e.bbox){var o=e.bbox;t=k({},this.options.flyTo),this._map&&this._map.fitBounds([[o[0],o[1]],[o[2],o[3]]],t)}else{var n={zoom:this.options.zoom};t=k({},n,this.options.flyTo),e.center?t.center=e.center:e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(t.center=e.geometry.coordinates),this._map&&this._map.flyTo(t)}}this.options.marker&&this._maplibregl&&this._handleMarker(e),this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0),this.lastSelected=JSON.stringify(e),this._typeahead.selected=null,this._eventEmitter.emit("result",{result:e})}},_getConfigForRequest:function(){var e=["bbox","limit","proximity","countries","types","language","reverseMode"],t=this,o=e.reduce(function(n,i){return t.options[i]&&(["countries","types","language"].indexOf(i)>-1?n[i]=t.options[i].split(/[\s,]+/):n[i]=t.options[i],i==="proximity"&&t.options[i]&&typeof t.options[i].longitude=="number"&&typeof t.options[i].latitude=="number"&&(n[i]=[t.options[i].longitude,t.options[i].latitude])),n},{});return o},_geocode:function(e,t,o){this._loadingEl.style.display="block",this._eventEmitter.emit("loading",{query:e}),this.inputString=e;var n=null,i=this._getConfigForRequest(),r;if(this.options.localGeocoderOnly)r=Promise.resolve();else if(this.options.reverseGeocode&&/(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(e)){var a=e.split(/[\s(,)?]+/).map(function(c){return parseFloat(c,10)}).reverse();i.types&&i.types[0],i=k(i,{query:a,limit:1}),"proximity"in i&&delete i.proximity,r=this.geocoderApi.reverseGeocode(i)}else i=k(i,{query:e}),this.geocoderApi.getSuggestions?t?this.geocoderApi.searchByPlaceId&&o?r=this.geocoderApi.searchByPlaceId(i):r=this.geocoderApi.forwardGeocode(i):r=this.geocoderApi.getSuggestions(i):r=this.geocoderApi.forwardGeocode(i);var s=[];this.options.localGeocoder&&(s=this.options.localGeocoder(e),s||(s=[]));var l=[];return r.catch((function(c){n=c}).bind(this)).then((function(c){this._loadingEl.style.display="none";var u={};return c?u=c:u={type:"FeatureCollection",features:[]},u.config=i,this.fresh&&(this.fresh=!1),u.features=u.features?s.concat(u.features):s,this.options.externalGeocoder?(l=this.options.externalGeocoder(e,u.features,i)||[],l.then(function(d){return u.features=u.features?d.concat(u.features):d,u},function(){return u})):u}).bind(this)).then((function(c){if(n)throw n;this.options.filter&&c.features.length&&(c.features=c.features.filter(this.options.filter));var u=[];c.suggestions?u=c.suggestions:c.place?u=[c.place]:u=c.features,u.length?(this._clearEl.style.display="block",this._typeahead.update(u),(!this.options.showResultsWhileTyping||t)&&this.options.showResultMarkers&&(c.features.length>0||c.place)&&this._fitBoundsForMarkers(),this._eventEmitter.emit("results",c)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderNoResults(),this._eventEmitter.emit("results",c))}).bind(this)).catch((function(c){this._loadingEl.style.display="none",s.length&&this.options.localGeocoder||l.length&&this.options.externalGeocoder?(this._clearEl.style.display="block",this._typeahead.update(s)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderError()),this._eventEmitter.emit("results",{features:s}),this._eventEmitter.emit("error",{error:c})}).bind(this)),r},_clear:function(e){e&&e.preventDefault(),this._inputEl.value="",this._typeahead.selected=null,this._typeahead.clear(),this._onChange(),this._clearEl.style.display="none",this._removeMarker(),this._removeResultMarkers(),this.lastSelected=null,this._eventEmitter.emit("clear"),this.fresh=!0},clear:function(e){this._clear(e),this._inputEl.focus()},_clearOnBlur:function(e){var t=this;e.relatedTarget&&t._clear(e)},_onQueryResult:function(e){var t=e;if(t.features.length){var o=t.features[0];this._typeahead.selected=o,this._inputEl.value=o.place_name,this._onChange()}},_updateProximity:function(){if(this._map)if(this._map.getZoom()>9){var e=this._map.getCenter().wrap();this.setProximity({longitude:e.lng,latitude:e.lat})}else this.setProximity(null)},_collapse:function(){!this._inputEl.value&&this._inputEl!==document.activeElement&&this.container.classList.add("mapboxgl-ctrl-geocoder--collapsed","maplibregl-ctrl-geocoder--collapsed")},_unCollapse:function(){this.container.classList.remove("mapboxgl-ctrl-geocoder--collapsed","maplibregl-ctrl-geocoder--collapsed")},query:function(e){return this._geocode(e).then(this._onQueryResult),this},_renderError:function(){var e="<div class='mapbox-gl-geocoder--error maplibre-gl-geocoder--error'>There was an error reaching the server</div>";this._renderMessage(e)},_renderNoResults:function(){var e="<div class='mapbox-gl-geocoder--error mapbox-gl-geocoder--no-results maplibre-gl-geocoder--error maplibre-gl-geocoder--no-results'>No results found</div>";this._renderMessage(e)},_renderMessage:function(e){this._typeahead.update([]),this._typeahead.selected=null,this._typeahead.clear(),this._typeahead.renderError(e)},_getPlaceholderText:function(){if(this.options.placeholder)return this.options.placeholder;if(this.options.language){var e=this.options.language.split(",")[0],t=Xt.language(e),o=Wt.placeholder[t];if(o)return o}return"Search"},_fitBoundsForMarkers:function(){if(!(this._typeahead.data.length<1)){var e=this._typeahead.data.filter(function(i){return typeof i!="string"}).slice(0,this.options.limit);if(this._clearEl.style.display="none",this.options.flyTo&&this._maplibregl&&this._map){var t={padding:100},o=k({},t,this.options.flyTo),n=new this._maplibregl.LngLatBounds;e.forEach(function(i){n.extend(i.geometry.coordinates)}),this._map.fitBounds(n.toArray(),o)}return e.length>0&&this._maplibregl&&this._handleResultMarkers(e),this}},setInput:function(e){return this._inputEl.value=e,this._typeahead.selected=null,this._typeahead.clear(),e.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(e),this},setProximity:function(e){return this.options.proximity=e,this},getProximity:function(){return this.options.proximity},setRenderFunction:function(e){return e&&typeof e=="function"&&(this._typeahead.render=e),this},getRenderFunction:function(){return this._typeahead.render},setLanguage:function(e){var t=navigator.language||navigator.userLanguage||navigator.browserLanguage;return this.options.language=e||this.options.language||t,this},getLanguage:function(){return this.options.language},getZoom:function(){return this.options.zoom},setZoom:function(e){return this.options.zoom=e,this},getFlyTo:function(){return this.options.flyTo},setFlyTo:function(e){return this.options.flyTo=e,this},getPlaceholder:function(){return this.options.placeholder},setPlaceholder:function(e){return this.placeholder=e||this._getPlaceholderText(),this._inputEl.placeholder=this.placeholder,this._inputEl.setAttribute("aria-label",this.placeholder),this},getBbox:function(){return this.options.bbox},setBbox:function(e){return this.options.bbox=e,this},getCountries:function(){return this.options.countries},setCountries:function(e){return this.options.countries=e,this},getTypes:function(){return this.options.types},setTypes:function(e){return this.options.types=e,this},getMinLength:function(){return this.options.minLength},setMinLength:function(e){return this.options.minLength=e,this._typeahead&&(this._typeahead.options.minLength=e),this},getLimit:function(){return this.options.limit},setLimit:function(e){return this.options.limit=e,this._typeahead&&(this._typeahead.options.limit=e),this},getFilter:function(){return this.options.filter},setFilter:function(e){return this.options.filter=e,this},setGeocoderApi:function(e){return this.geocoderApi=e,this},getGeocoderApi:function(){return this.geocoderApi},_handleMarker:function(e){if(this._map){this._removeMarker();var t={color:"#4668F2"},o=k({},t,this.options.marker);this.mapMarker=new this._maplibregl.Marker(o);var n;if(this.options.popup){var i={},r=k({},i,this.options.popup);n=new this._maplibregl.Popup(r).setHTML(this.options.popupRender(e))}return e.center?(this.mapMarker.setLngLat(e.center).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(n)):e.geometry&&e.geometry.type&&e.geometry.type==="Point"&&e.geometry.coordinates&&(this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(n)),this}},_removeMarker:function(){this.mapMarker&&(this.mapMarker.remove(),this.mapMarker=null)},_handleResultMarkers:function(e){if(this._map){this._removeResultMarkers();var t={color:"#4668F2"},o=k({},t,this.options.showResultMarkers);return e.forEach((function(n){if(this.options.showResultMarkers&&this.options.showResultMarkers.element){var i=this.options.showResultMarkers.element.cloneNode(!0);o=k(o,{element:i})}var r=new this._maplibregl.Marker(k({},o,{element:i})),a;if(this.options.popup){var s={},l=k({},s,this.options.popup);a=new this._maplibregl.Popup(l).setHTML(this.options.popupRender(n))}n.center?(r.setLngLat(n.center).addTo(this._map),this.options.popup&&r.setPopup(a)):n.geometry&&n.geometry.type&&n.geometry.type==="Point"&&n.geometry.coordinates&&(r.setLngLat(n.geometry.coordinates).addTo(this._map),this.options.popup&&r.setPopup(a)),this.resultMarkers.push(r)}).bind(this)),this}},_removeResultMarkers:function(){this.resultMarkers&&this.resultMarkers.length>0&&(this.resultMarkers.forEach(function(e){e.remove()}),this.resultMarkers=[])},on:function(e,t){return this._eventEmitter.on(e,t),this},off:function(e,t){return this._eventEmitter.removeListener(e,t),this}};var Yt=Ee;const Qt=st(Yt);function Le(e){var t=function(n){var i=n.dispatch,r=n.getState;return function(a){return function(s){return typeof s=="function"?s(i,r,e):a(s)}}};return t}var Pe=Le();Pe.withExtraArgument=Le;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends et{constructor(t){if(super(t),this.it=V,t.type!==tt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||t==null)return this._t=void 0,this.it=t;if(t===Qe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}$.directiveName="unsafeHTML",$.resultType=1;const Y=ot($);var R="NOT_FOUND";function eo(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:R},put:function(n,i){t={key:n,value:i}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function to(e,t){var o=[];function n(s){var l=o.findIndex(function(u){return t(s,u.key)});if(l>-1){var c=o[l];return l>0&&(o.splice(l,1),o.unshift(c)),c.value}return R}function i(s,l){n(s)===R&&(o.unshift({key:s,value:l}),o.length>e&&o.pop())}function r(){return o}function a(){o=[]}return{get:n,put:i,getEntries:r,clear:a}}var oo=function(t,o){return t===o};function no(e){return function(o,n){if(o===null||n===null||o.length!==n.length)return!1;for(var i=o.length,r=0;r<i;r++)if(!e(o[r],n[r]))return!1;return!0}}function io(e,t){var o=typeof t=="object"?t:{equalityCheck:t},n=o.equalityCheck,i=n===void 0?oo:n,r=o.maxSize,a=r===void 0?1:r,s=o.resultEqualityCheck,l=no(i),c=a===1?eo(l):to(a,l);function u(){var d=c.get(arguments);if(d===R){if(d=e.apply(null,arguments),s){var f=c.getEntries(),_=f.find(function(b){return s(b.value,d)});_&&(d=_.value)}c.put(arguments,d)}return d}return u.clearCache=function(){return c.clear()},u}function ro(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var o=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return t}function ao(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var i=function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];var c=0,u,d={memoizeOptions:void 0},f=s.pop();if(typeof f=="object"&&(d=f,f=s.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var _=d,b=_.memoizeOptions,h=b===void 0?o:b,x=Array.isArray(h)?h:[h],m=ro(s),y=e.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(x)),E=e(function(){for(var P=[],g=m.length,v=0;v<g;v++)P.push(m[v].apply(null,arguments));return u=y.apply(null,P),u});return Object.assign(E,{resultFunc:f,memoizedResultFunc:y,dependencies:m,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),E};return i}var Ce=ao(io);const Me="SET_LOCATOR_LOADING_START",Te="SET_LOCATOR_LOADING_END",so={isLoading:!1},Se="MOUSE_ENTER_FEATURE",Ae="MOUSE_LEAVE_FEATURE",lo={highlightedFeature:null,isLoading:!1},Oe="RESET_PAGINATION",Ie="SET_PREV_PAGINATION_PAGE",Re="SET_NEXT_PAGINATION_PAGE",Fe="SET_HAS_PAGINATION",ze="SET_HAS_NO_PAGINATION",De="SET_DATA_GEOJSON",Be="SET_DATA_TEASERS",Ne="SET_DATA_LOAD_START",$e="SET_DATA_LOAD_END",He="SET_CURRENT_VISIBLE_FEATURES",Q=()=>({type:Ne}),ee=()=>({type:$e}),te=e=>({type:He,payload:e}),co=(e,t)=>t.properties.search_boost-e.properties.search_boost||e.properties.name.localeCompare(t.properties.name),uo=(e,t,o,n)=>new Promise((i,r)=>{e.getClusterLeaves(t,o,n,(a,s)=>{a?r(a):i(s)})}),po=(e,t,o,n,i,r)=>async(a,s)=>{const{currentPage:l}=s().pagination;a(Q());try{const c=await(async u=>fetch(u).then(d=>d.json()))(e);a({type:De,payload:c}),o.once("idle",async()=>{a(Q());const u=[];for(const h of((x,m,y)=>{const E=[];let L=[];return y.forEach(P=>{m&&m.getLayer(P)&&E.push(P)}),E.length&&(L=m.queryRenderedFeatures({layers:E})),L})(0,o,n))if(Object.prototype.hasOwnProperty.call(h.properties,"cluster_id")){const x=o.getSource(h.source),m=await uo(x,h.properties.cluster_id,h.properties.point_count,0);u.push(...m)}else u.push(h);const d=(h=>{if(!h.length)return[];const x={};return h.filter(m=>{const{uid:y}=m.properties;return!x[y]&&(x[y]=!0,!0)})})(u),f=d.map(h=>h.properties.uid);if(a(f.length>r?{type:Fe}:{type:ze}),a(te(f)),_=i,b=f,!(Array.isArray(_)&&Array.isArray(b)&&_.length===b.length&&_.every((h,x)=>h===b[x]))){const h=((m,y)=>({offset:(m-1)*y,limit:y}))(l,r),x=await(async(m,y,E)=>{if(!m.length)return null;const L=m.filter(v=>v.properties.search_boost||v.properties.name).sort(co).splice(E.offset,E.limit).map(v=>v.properties.uid),P=new URLSearchParams({ids:L.join(",")}),g=y+(y.match(/[?]/g)?"&":"?")+P.toString();return fetch(g).then(v=>v.text())})(d,t,h);a({type:Be,payload:x}),a(te(f.sort()))}var _,b;a(ee())})}catch(c){console.error("Could not load the location finder geoJSON",c)}a(ee())},ho={geojson:null,teasers:null,isLoading:!1,currentlyVisibleFeatures:[]},Ge="SET_SEARCH_LOADING_START",Ve="SET_SEARCH_LOADING_END",go={isLoading:!1},fo={hasPagination:!1,currentPage:1},Ue="SET_POPUP_LOADING_START",Je="SET_POPUP_LOADING_END",qe="RESET_POPUP_FEATURE",Ze="SET_POPUP_FEATURE",Ke="SET_POPUP_COORDINATES",We="RESET_POPUP_COORDINATES",mo=(e,t)=>async o=>{o({type:Ue});try{const n=new URLSearchParams({ids:e}),i=t+(t.match(/[?]/g)?"&":"?")+n.toString();o((r=>({type:Ze,payload:r}))(await fetch(i).then(r=>r.text())))}catch(n){console.error("Could not get popup content",n)}o({type:Je})},vo={feature:null,coordinates:null,isLoading:!1},_o=nt({features:function(e=lo,t){switch(t.type){case Ae:return{...e,highlightedFeature:null};case Se:return{...e,highlightedFeature:t.payload}}return e},locator:function(e=so,t){switch(t.type){case Me:return{...e,isLoading:!0};case Te:return{...e,isLoading:!1}}return e},data:function(e=ho,t){switch(t.type){case De:return{...e,geojson:t.payload};case Be:return{...e,teasers:t.payload};case Ne:return{...e,isLoading:!0};case $e:return{...e,isLoading:!1};case He:return{...e,currentlyVisibleFeatures:t.payload}}return e},search:function(e=go,t){switch(t.type){case Ge:return{...e,isLoading:!0};case Ve:return{...e,isLoading:!1}}return e},pagination:function(e=fo,t){switch(t.type){case Oe:return{...e,currentPage:1};case Ie:{const o=e.currentPage===1?1:e.currentPage-1;return{...e,currentPage:o}}case Re:{const o=e.currentPage+1;return{...e,currentPage:o}}case Fe:return{...e,hasPagination:!0};case ze:return{...e,hasPagination:!1}}return e},popup:function(e=vo,t){switch(t.type){case Ue:return{...e,isLoading:!0};case Je:return{...e,isLoading:!1};case qe:return{...e,feature:null};case Ze:return{...e,feature:t.payload};case Ke:return{...e,coordinates:t.payload};case We:return{...e,coordinates:null}}return e}}),Xe=function(){const e=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):it)(rt(Pe.withExtraArgument({})));return at(_o,e)}();function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var oe;customElements.define("toujou-location-finder-teaser",class extends pe{constructor(){super(),this.isHighlightedAttribute="is-highlighted",this.teaserLinkSelector=".teaser",this.onStateChange=this.onStateChange.bind(this),this._featureUid=this.getAttribute("feature-uid"),this._teaserLinkEl=this.querySelector(this.teaserLinkSelector),this.store=Xe,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}render(){return C`<slot id="slot"></slot>`}set _highlightedFeature(e){e==this._featureUid?this._teaserLinkEl.setAttribute(this.isHighlightedAttribute,""):this._teaserLinkEl.removeAttribute(this.isHighlightedAttribute)}onStateChange(){this._state=this.store.getState(),this._highlightedFeature=this._state.features.highlightedFeature}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave)}_onMouseEnter(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-enter",{composed:!0,detail:{featureUid:this.getAttribute("feature-uid")}}))}_onMouseLeave(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-leave",{composed:!0}))}});var ne,ie,re,bo=F(oe||(oe=D([`* {
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
`]))),yo=F(ne||(ne=D([`/* TEASER */
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
`]))),jo=F(ie||(ie=D([`/* POPUP */
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
`]))),xo=F(re||(re=D([`/* Basics */
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
.maplibre-ctrl-geocoder--suggestion-icon {
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
.maplibre-ctrl-geocoder--result-icon {
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
`])));const wo=Ce(e=>e,e=>e.data.isLoading||e.locator.isLoading||e.search.isLoading||e.popup.isLoading),ko=Ce(e=>e.data.geojson,e=>e.features.highlightedFeature,(e,t)=>e&&Object.prototype.hasOwnProperty.call(e,"features")?{...e,features:e.features.map(o=>({type:o.type,geometry:o.geometry,properties:{...o.properties,isHighlighted:t===o.properties.uid}}))}:e);class ae extends pe{static get is(){return"toujou-location-finder"}static get styles(){return[bo,yo,jo,xo]}static get properties(){return{isLoading:{type:Boolean,reflect:!0},reducedMotion:{type:Boolean,attribute:"reduced-motion"},_geoJsonData:{type:Object},_geoJsonPoints:{type:Object},_geoJsonPolygons:{type:Object},_geoJsonLines:{type:Object},_map:{type:Object},_teasersData:{type:String},hasPagination:{type:Boolean,reflect:!0},_currentPage:{type:Number},bounds:{type:Array},geoJsonUrl:{type:String},filterParams:{type:String},teaserUrl:{type:String},_popupFeature:{type:Object},_popupCoordinates:{type:Array},isMobile:{type:Boolean,reflect:!0},accessToken:{type:String,attribute:"access-token"},mapStyle:{type:String,attribute:"map-style"},maxZoom:{type:Number},fitBoundsMaxZoom:{type:Number,attribute:"fit-bounds-max-zoom"},minZoom:{type:Number},_hideMap:{type:Boolean,attribute:"map-is-hidden",reflect:!0},locatorButtonLabel:{type:String,attribute:"locator-button-label"},paginationPrevButtonTitle:{type:String,attribute:"pagination-prev-button-title"},paginationNextButtonTitle:{type:String,attribute:"pagination-next-button-title"}}}get _geoJsonEndpointFull(){return this._bounds=this._map.getBounds(),`${this.geoJsonUrl}?north=${this._bounds._ne.lat}&south=${this._bounds._sw.lat}&east=${this._bounds._ne.lng}&west=${this._bounds._sw.lng}${this.filterParams}`}render(){const t=this.querySelectorAll('[slot="layers"]').length>0;return C`
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
          ${t?C`<slot name="layers"></slot>`:this.renderLayers()}

          <toujou-map-geojson
            id="geoJsonSourcePolygons"
            ?cluster="${this._clusterRadius>0}"
            .clusterRadius="${this._clusterRadius}"
            .clusterMaxZoom="${this._clusterMaxZoom}"
            .sourceData='${this._geoJsonData}'
            source-id="geoJsonData">
          </toujou-map-geojson>

          ${this._popupFeature&&this._popupCoordinates?C`
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
    `}renderLayers(){const t={"fill-color":["case",["!=",["get","isHighlighted"],!0],this._mapPolygonColor,this._mapPolygonColorHover],"fill-opacity":.5},o={"circle-color":["case",["!=",["get","isHighlighted"],!0],this._mapPointColor,this._mapPointColorHover],"circle-radius":6,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"},n={"line-color":["case",["!=",["get","isHighlighted"],!0],this._mapLineColor,this._mapLineColorHover],"line-opacity":1,"line-width":3};return C`
        <!-- POLYGONS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_polygons"
          source="geoJsonData"
          type="fill"
          .paint='${t}'
          filter='["==", "$type", "Polygon"]'
        ></toujou-map-layer>

        <!-- POINTS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_points"
          source="geoJsonData"
          type="circle"
          .paint='${o}'
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
      ></toujou-map-layer>`}constructor(){super(),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this.hasPagination=!1,this.bounds=[],this.accessToken=null,this.reducedMotion=!1,this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this._locatorIsLoading=!1,this._mql=null,this._layers=[],this._cssVarsFallbacks={mapPadding:16,mapPointColor:"var(--primary-color)",mapPointColorHover:"var(--primary-color--dark)",mapPolygonColor:"var(--primary-color)",mapPolygonColorHover:"var(--primary-color--dark)",mapLineColor:"var(--primary-color)",mapLineColorHover:"var(--primary-color--dark)",breakpoint:"840px",clusterBgColor:"var(--primary-color)",clusterBorderWidth:2,clusterBorderColor:"var(--primary-color)",clusterTextColor:"var(--bg-color)",clusterTextSize:16,clusterRadius:50,clusterMaxZoom:20},this.onStateChange=this.onStateChange.bind(this),this._onLocatorSuccess=this._onLocatorSuccess.bind(this),this._onLocatorError=this._onLocatorError.bind(this),this._onMapFeatureHoverEnter=this._onMapFeatureHoverEnter.bind(this),this._onMapFeatureHoverLeave=this._onMapFeatureHoverLeave.bind(this),this._onMapFeatureClick=this._onMapFeatureClick.bind(this),this._onMapClick=this._onMapClick.bind(this),this._onMapMoveEnd=this._onMapMoveEnd.bind(this),this._initGeocoder=this._initGeocoder.bind(this),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this.hasPagination=!1,this.bounds=[],this._locatorIsLoading=!1,this.accessToken=null,this._mql=null,this._hideMap=!1,this._deviceCanHover=window.matchMedia("(hover: hover)").matches,this._layers=[],this.locatorButtonLabel="Find my location",this.paginationPrevButtonTitle="Previous page",this.paginationNextButtonTitle="Next page",this.store=Xe,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.reducedMotion=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.addEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser),this._getCustomProperties()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.removeEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser)}updated(t){super.updated(t),t.has("_map")&&this._init(),t.has("_currentPage")&&this._map&&this._fetchData(),t.has("filterParams")&&this._map&&this._fetchData()}onStateChange(){this._state=this.store.getState(),this.isLoading=wo(this._state),this._geoJsonData=ko(this._state),this._teasersData=this._state.data.teasers,this._currentlyVisibleFeaturesUids=this._state.data.currentlyVisibleFeatures,this.hasPagination=this._state.pagination.hasPagination,this._currentPage=this._state.pagination.currentPage,this._popupFeature=this._state.popup.feature,this._popupCoordinates=this._state.popup.coordinates,this._locatorIsLoading=this._state.locator.isLoading}async _init(){this._map&&this._fetchData()}_setHighlightedFeatureID(t){this.store.dispatch((o=>({type:Se,payload:o}))(t))}_resetHighlightedFeatureID(){this.store.dispatch({type:Ae})}_setLocatorLoadingStatus(t){this.store.dispatch(t?{type:Me}:{type:Te})}_onToujouMapReady(t){this._map=t.detail,this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop),this.bounds&&this._map.fitBounds(this.bounds,{animate:!this.reducedMotion}),this._initGeocoder(),this._initFullscreenControl(),this._map.on("moveend",this._onMapMoveEnd),this.dispatchEvent(new CustomEvent("toujou-location-finder-ready",{bubbles:!0,composed:!0,detail:this}))}onMapLayerAdded(t){const o=t.detail.id;this._layers.push(o),this._map.on("mouseover",o,this._onMapFeatureHoverEnter),this._map.on("mouseleave",o,this._onMapFeatureHoverLeave),this._map.on("click",o,this._onMapFeatureClick),this._map.on("click",this._onMapClick)}onMapLayerRemoved(t){const o=t.detail.id;this._layers=this._layers.filter(n=>n!==o),this._map.off("mouseover",o,this._onMapFeatureHoverEnter),this._map.off("mouseleave",o,this._onMapFeatureHoverLeave),this._map.off("click",o,this._onMapFeatureClick),this._map.off("click",this._onMapClick)}_onMouseEnterTeaser(t){this._setHighlightedFeatureID(+t.detail.featureUid)}_onMouseLeaveTeaser(){this._resetHighlightedFeatureID()}_onLocatorClick(){this._setLocatorLoadingStatus(!0),this._geocoder.clear(),this._geocoder._inputEl.blur(),navigator.geolocation?navigator.geolocation.getCurrentPosition(this._onLocatorSuccess,this._onLocatorError):console.error("Cannot get your location because Geolocation is not supported by your browser")}_onLocatorSuccess(t){const{latitude:o,longitude:n}=t.coords;this._map.flyTo({center:[n,o]}),this._setLocatorLoadingStatus(!1)}_onLocatorError(t){console.error("Could not get your location",t),this._setLocatorLoadingStatus(!1)}_onMapFeatureHoverEnter(t){this._deviceCanHover&&(this._map.getCanvas().style.cursor="pointer",this._setHighlightedFeatureID(t.features[0].properties.uid))}_onMapFeatureClick(t){t.features[0].properties.uid&&this._showPopup(t)}_onMapClick(){this._popupFeature&&(this.store.dispatch({type:qe}),this.store.dispatch({type:We}))}_onMapFeatureHoverLeave(){this._deviceCanHover&&(this._map.getCanvas().style.cursor="grab",this._resetHighlightedFeatureID())}_onMapMoveEnd(){this.store.dispatch({type:Oe}),this._fetchData()}_onPaginationButtonClick(t){const o=t.currentTarget.getAttribute("paginationAction");o==="prev"&&this.store.dispatch({type:Ie}),o==="next"&&this.store.dispatch({type:Re})}_showPopup(t){const o=t.features[0].geometry.type==="Point"?t.features[0].geometry.coordinates:t.lngLat;this.store.dispatch(mo(t.features[0].properties.uid,this.teaserUrl)),o&&this.store.dispatch({type:Ke,payload:o})}_getCustomProperties(){const t=window.getComputedStyle(document.body);this._mapPointColor=t.getPropertyValue("--toujou-location-finder-map-point-color")||this._cssVarsFallbacks.mapPointColor,this._mapPointColorHover=t.getPropertyValue("--toujou-location-finder-map-point-color-hover")||this._cssVarsFallbacks.mapPointColorHover,this._mapPolygonColor=t.getPropertyValue("--toujou-location-finder-map-polygon-color")||this._cssVarsFallbacks.mapPolygonColor,this._mapPolygonColorHover=t.getPropertyValue("--toujou-location-finder-map-polygon-color-hover")||this._cssVarsFallbacks.mapPolygonColorHover,this._mapLineColor=t.getPropertyValue("--toujou-location-finder-map-line-color")||this._cssVarsFallbacks.mapLineColor,this._mapLineColorHover=t.getPropertyValue("--toujou-location-finder-map-line-color-hover")||this._cssVarsFallbacks.mapLineColorHover,this._breakpoint=t.getPropertyValue("--toujou-location-finder-breakpoint")||this._cssVarsFallbacks.breakpoint,this._clusterBgColor=t.getPropertyValue("--toujou-location-finder-cluster-background-color")||this._cssVarsFallbacks.clusterBgColor,this._clusterBorderWidth=t.getPropertyValue("--toujou-location-finder-cluster-border-width")||this._cssVarsFallbacks.clusterBorderWidth,this._clusterBorderColor=t.getPropertyValue("--toujou-location-finder-cluster-border-color")||this._cssVarsFallbacks.clusterBorderColor,this._clusterTextColor=t.getPropertyValue("--toujou-location-finder-cluster-text-color")||this._cssVarsFallbacks.clusterTextColor,this._clusterTextSize=t.getPropertyValue("--toujou-location-finder-cluster-text-size")||this._cssVarsFallbacks.clusterTextSize,this._clusterRadius=parseInt(t.getPropertyValue("--toujou-location-finder-cluster-radius"),10)||this._cssVarsFallbacks.clusterRadius,this._clusterMaxZoom=t.getPropertyValue("--toujou-location-finder-cluster-max-zoom")||this._cssVarsFallbacks.clusterMaxZoom,this._mapPaddingMobile={top:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-mobile-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-mobile-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-mobile-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-mobile-right"),10)||this._cssVarsFallbacks.mapPadding},this._mapPaddingDesktop={top:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-desktop-top"),10)||this._cssVarsFallbacks.mapPadding,bottom:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-desktop-bottom"),10)||this._cssVarsFallbacks.mapPadding,left:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-desktop-left"),10)||this._cssVarsFallbacks.mapPadding,right:parseInt(t.getPropertyValue("--toujou-location-finder-map-padding-desktop-right"),10)||this._cssVarsFallbacks.mapPadding},this._initMatchMedia()}_fetchData(){this.store.dispatch(po(this._geoJsonEndpointFull,this.teaserUrl,this._map,this._layers,this._currentlyVisibleFeaturesUids,this._maxTeasersPerPage))}_renderTeasers(){return C`
        <div class="teasers" part="teasers">
          ${Y(this._teasersData)}
        </div>
    `}_renderPagination(){return C`
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
    `}_renderPopupContent(){return C`
        <div class="location-finder-popup" part="popup">
          ${Y(this._popupFeature)}
        </div>
    `}_initGeocoder(){const t={forwardGeocode:async n=>{let i=[];try{const r=`https://nominatim.openstreetmap.org/search?q=${n.query}&format=geojson&polygon_geojson=1&addressdetails=1`;i=(await(await fetch(r)).json()).features.map(s=>{const l=[s.bbox[0]+(s.bbox[2]-s.bbox[0])/2,s.bbox[1]+(s.bbox[3]-s.bbox[1])/2];return{type:"Feature",geometry:{type:"Point",coordinates:l},place_name:s.properties.display_name,properties:s.properties,text:s.properties.display_name,place_type:["place"],bbox:s.bbox,center:l}})}catch(r){console.error(`Failed to forwardGeocode with error: ${r}`)}return{features:i}}};this._geocoder=new Qt(t,{maplibregl:U,showResultsWhileTyping:!0,showResultMarkers:!1,marker:!1}),this.shadowRoot.querySelector(".geocoder-container").appendChild(this._geocoder.onAdd(this._map)),this._geocoder.on("loading",()=>{this.store.dispatch({type:Ge})}),this._geocoder.on("results",()=>{this.store.dispatch({type:Ve})});const o=document.documentElement.lang==="en"?"Search location":"Standort suchen";this._geocoder.setPlaceholder(o)}_initFullscreenControl(){this._map.addControl(new U.FullscreenControl({container:this}))}_initMatchMedia(){this._mql=window.matchMedia(`(max-width: ${this._breakpoint})`),this.isMobile=this._mql.matches,this._mql.addListener(t=>{this.isMobile=t.matches,this._updateMapPadding()})}_updateMapPadding(){this._map&&this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop)}_handleMapToggleClick(){this._hideMap=!this._hideMap}}customElements.define(ae.is,ae);const Eo={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["8.666475","50.107672"]},properties:{uid:9,name:"dkd Internet Service GmbH",search_boost:1,categories:[0],distance:195927.05143468693}},{type:"Feature",geometry:{type:"Point",coordinates:["8.56679","48.92848"]},properties:{uid:6,name:"G.K.M.B. GmbH",search_boost:1,categories:[0],distance:176281.53005033717}},{type:"Feature",geometry:{type:"Point",coordinates:["9.206144","48.676871"]},properties:{uid:5,name:"jweiland.net",search_boost:1,categories:[0],distance:229457.30072080903}},{type:"Feature",geometry:{type:"Point",coordinates:["8.383444","49.010315"]},properties:{uid:4,name:"punkt.de GmbH",search_boost:1,categories:[0],distance:161022.2575388874}}]},Lo=`
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
`,Po=`
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
`,Fo={title:"COMPONENTS/LocationFinder",parameters:{badges:[Ye.DONE],docs:{page:lt},layout:"fullscreen",fetchMock:{mocks:[{matcher:{name:"placesGeo",url:"begin:/placesgeo.json"},response:(e,t,o)=>(se("placesGeo",e,t,o),Eo)},{matcher:{name:"placesTeaser",url:"begin:/placesteaser.html"},response:(e,t,o)=>{se("placesTeaser",e,t,o);const n=new URLSearchParams(e);if(!n)return;const i=n.get("ids");return i&&i.split(",").length>1?Lo:Po}}]}}};function se(e,t,o,n){console.groupCollapsed(`%c====== MOCK REQUEST: ${e} ======`,"color: #4DB6AC; font-weight: bold;"),console.log(`%cURL: %c${t}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.log(`%cOptions %c${o}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.log(`%cRequest %c${n}`,"color: #E57373; font-weight: bold;","color: #4DB6AC"),console.groupEnd()}const Co=()=>`
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
    `,O=Co.bind({});var le,ce,ue;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ue=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const zo=["LocationFinder"];export{O as LocationFinder,zo as __namedExportsOrder,Fo as default};
