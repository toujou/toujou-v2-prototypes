var En=Object.defineProperty;var _n=(r,e,t)=>e in r?En(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Wt=(r,e,t)=>(_n(r,typeof e!="symbol"?e+"":e,t),t);import{i as Cn}from"./main-nav.js";import{i as Qe,s as je,y as se,Z as xn}from"./lit-element-6fe74b4f.js";import{_ as xe,a as Tt}from"./tslib.es6-c85c2c5e.js";import{e as Bt}from"./custom-element-73470d87.js";import{e as Xe}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";import{a as jn,d as On}from"./redux-1fbc3ebb.js";/*! (c) Andrea Giammarchi @webreflection ISC */(function(){var r=function(c,a){var d=function(_){for(var C=0,R=_.length;C<R;C++)b(_[C])},b=function(_){var C=_.target,R=_.attributeName,G=_.oldValue;C.attributeChangedCallback(R,G,C.getAttribute(R))};return function(v,_){var C=v.constructor.observedAttributes;return C&&c(_).then(function(){new a(d).observe(v,{attributes:!0,attributeOldValue:!0,attributeFilter:C});for(var R=0,G=C.length;R<G;R++)v.hasAttribute(C[R])&&b({target:v,attributeName:C[R],oldValue:null})}),v}};function e(c,a){if(c){if(typeof c=="string")return t(c,a);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return t(c,a)}}function t(c,a){(a==null||a>c.length)&&(a=c.length);for(var d=0,b=new Array(a);d<a;d++)b[d]=c[d];return b}function o(c,a){var d=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!d){if(Array.isArray(c)||(d=e(c))||a&&c&&typeof c.length=="number"){d&&(c=d);var b=0,v=function(){};return{s:v,n:function(){return b>=c.length?{done:!0}:{done:!1,value:c[b++]}},e:function(G){throw G},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _=!0,C=!1,R;return{s:function(){d=d.call(c)},n:function(){var G=d.next();return _=G.done,G},e:function(G){C=!0,R=G},f:function(){try{!_&&d.return!=null&&d.return()}finally{if(C)throw R}}}}/*! (c) Andrea Giammarchi - ISC */var u=!0,f=!1,g="querySelectorAll",z=function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:MutationObserver,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:["*"],_=function G(J,_e,ee,n,s,h){var y=o(J),A;try{for(y.s();!(A=y.n()).done;){var I=A.value;(h||g in I)&&(s?ee.has(I)||(ee.add(I),n.delete(I),a(I,s)):n.has(I)||(n.add(I),ee.delete(I),a(I,s)),h||G(I[g](_e),_e,ee,n,s,u))}}catch(Y){y.e(Y)}finally{y.f()}},C=new b(function(G){if(v.length){var J=v.join(","),_e=new Set,ee=new Set,n=o(G),s;try{for(n.s();!(s=n.n()).done;){var h=s.value,y=h.addedNodes,A=h.removedNodes;_(A,J,_e,ee,f,f),_(y,J,_e,ee,u,f)}}catch(I){n.e(I)}finally{n.f()}}}),R=C.observe;return(C.observe=function(G){return R.call(C,G,{subtree:u,childList:u})})(d),C},N="querySelectorAll",W=self,P=W.document,te=W.Element,rt=W.MutationObserver,l=W.Set,Ie=W.WeakMap,q=function(a){return N in a},We=[].filter,ce=function(c){var a=new Ie,d=function(n){for(var s=0,h=n.length;s<h;s++)a.delete(n[s])},b=function(){for(var n=J.takeRecords(),s=0,h=n.length;s<h;s++)C(We.call(n[s].removedNodes,q),!1),C(We.call(n[s].addedNodes,q),!0)},v=function(n){return n.matches||n.webkitMatchesSelector||n.msMatchesSelector},_=function(n,s){var h;if(s)for(var y,A=v(n),I=0,Y=R.length;I<Y;I++)A.call(n,y=R[I])&&(a.has(n)||a.set(n,new l),h=a.get(n),h.has(y)||(h.add(y),c.handle(n,s,y)));else a.has(n)&&(h=a.get(n),a.delete(n),h.forEach(function(K){c.handle(n,s,K)}))},C=function(n){for(var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,h=0,y=n.length;h<y;h++)_(n[h],s)},R=c.query,G=c.root||P,J=z(_,G,rt,R),_e=te.prototype.attachShadow;return _e&&(te.prototype.attachShadow=function(ee){var n=_e.call(this,ee);return J.observe(n),n}),R.length&&C(G[N](R)),{drop:d,flush:b,observer:J,parse:C}},X=self,V=X.document,le=X.Map,qe=X.MutationObserver,ge=X.Object,x=X.Set,Ze=X.WeakMap,Q=X.Element,Ue=X.HTMLElement,$e=X.Node,Le=X.Error,be=X.TypeError,Re=X.Reflect,me=ge.defineProperty,et=ge.keys,Oe=ge.getOwnPropertyNames,ae=ge.setPrototypeOf,ve=!self.customElements,Z=function(a){for(var d=et(a),b=[],v=new x,_=d.length,C=0;C<_;C++){b[C]=a[d[C]];try{delete a[d[C]]}catch{v.add(C)}}return function(){for(var R=0;R<_;R++)v.has(R)||(a[d[R]]=b[R])}};if(ve){var ne=function(){var a=this.constructor;if(!Pe.has(a))throw new be("Illegal constructor");var d=Pe.get(a);if(Fe)return Ge(Fe,d);var b=ze.call(V,d);return Ge(ae(b,a.prototype),d)},ze=V.createElement,Pe=new le,ye=new le,Me=new le,ue=new le,tt=[],at=function(a,d,b){var v=Me.get(b);if(d&&!v.isPrototypeOf(a)){var _=Z(a);Fe=ae(a,v);try{new v.constructor}finally{Fe=null,_()}}var C="".concat(d?"":"dis","connectedCallback");C in v&&a[C]()},st=ce({query:tt,handle:at}),we=st.parse,Fe=null,Ve=function(a){if(!ye.has(a)){var d,b=new Promise(function(v){d=v});ye.set(a,{$:b,_:d})}return ye.get(a).$},Ge=r(Ve,qe);self.customElements={define:function(a,d){if(ue.has(a))throw new Le('the name "'.concat(a,'" has already been used with this registry'));Pe.set(d,a),Me.set(a,d.prototype),ue.set(a,d),tt.push(a),Ve(a).then(function(){we(V.querySelectorAll(a))}),ye.get(a)._(d)},get:function(a){return ue.get(a)},whenDefined:Ve},me(ne.prototype=Ue.prototype,"constructor",{value:ne}),self.HTMLElement=ne,V.createElement=function(c,a){var d=a&&a.is,b=d?ue.get(d):ue.get(c);return b?new b:ze.call(V,c)},"isConnected"in $e.prototype||me($e.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(ve=!self.customElements.get("extends-br"),ve)try{var nt=function c(){return self.Reflect.construct(HTMLBRElement,[],c)};nt.prototype=HTMLLIElement.prototype;var i="extends-br";self.customElements.define("extends-br",nt,{extends:"br"}),ve=V.createElement("br",{is:i}).outerHTML.indexOf(i)<0;var m=self.customElements,j=m.get,S=m.whenDefined;self.customElements.whenDefined=function(c){var a=this;return S.call(this,c).then(function(d){return d||j.call(a,c)})}}catch{}if(ve){var M=function(a){var d=ke.get(a);Ye(d.querySelectorAll(this),a.isConnected)},E=self.customElements,re=V.createElement,de=E.define,he=E.get,fe=E.upgrade,F=Re||{construct:function(a){return a.call(this)}},Je=F.construct,ke=new Ze,Ae=new x,Se=new le,Te=new le,k=new le,w=new le,H=[],U=[],oe=function(a){return w.get(a)||he.call(E,a)},Ee=function(a,d,b){var v=k.get(b);if(d&&!v.isPrototypeOf(a)){var _=Z(a);p=ae(a,v);try{new v.constructor}finally{p=null,_()}}var C="".concat(d?"":"dis","connectedCallback");C in v&&a[C]()},Ne=ce({query:U,handle:Ee}),Ye=Ne.parse,ot=ce({query:H,handle:function(a,d){ke.has(a)&&(d?Ae.add(a):Ae.delete(a),U.length&&M.call(U,a))}}),Be=ot.parse,ie=Q.prototype.attachShadow;ie&&(Q.prototype.attachShadow=function(c){var a=ie.call(this,c);return ke.set(this,a),a});var O=function(a){if(!Te.has(a)){var d,b=new Promise(function(v){d=v});Te.set(a,{$:b,_:d})}return Te.get(a).$},T=r(O,qe),p=null;Oe(self).filter(function(c){return/^HTML.*Element$/.test(c)}).forEach(function(c){var a=self[c];function d(){var b=this.constructor;if(!Se.has(b))throw new be("Illegal constructor");var v=Se.get(b),_=v.is,C=v.tag;if(_){if(p)return T(p,_);var R=re.call(V,C);return R.setAttribute("is",_),T(ae(R,b.prototype),_)}else return Je.call(this,a,[],b)}me(d.prototype=a.prototype,"constructor",{value:d}),me(self,c,{value:d})}),V.createElement=function(c,a){var d=a&&a.is;if(d){var b=w.get(d);if(b&&Se.get(b).tag===c)return new b}var v=re.call(V,c);return d&&v.setAttribute("is",d),v},E.get=oe,E.whenDefined=O,E.upgrade=function(c){var a=c.getAttribute("is");if(a){var d=w.get(a);if(d){T(ae(c,d.prototype),a);return}}fe.call(E,c)},E.define=function(c,a,d){if(oe(c))throw new Le("'".concat(c,"' has already been defined as a custom element"));var b,v=d&&d.extends;Se.set(a,v?{is:c,tag:v}:{is:"",tag:c}),v?(b="".concat(v,'[is="').concat(c,'"]'),k.set(b,a.prototype),w.set(c,a),U.push(b)):(de.apply(E,arguments),H.push(b=c)),O(c).then(function(){v?(Ye(V.querySelectorAll(b)),Ae.forEach(M,[b])):Be(V.querySelectorAll(b))}),Te.get(c)._(a)}}})();function qt(){Cn()}document.readyState!=="loading"?setTimeout(()=>{qt()}):document.addEventListener("DOMContentLoaded",()=>{qt()});function Mn(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}else return Array.from(r)}var kt=!1;if(typeof window<"u"){var Ut={get passive(){kt=!0}};window.addEventListener("testPassive",null,Ut),window.removeEventListener("testPassive",null,Ut)}var ut=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),He=[],dt=!1,Dt=-1,ft=void 0,it=void 0,mt=void 0,dn=function(e){return He.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},pt=function(e){var t=e||window.event;return dn(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},An=function(e){if(mt===void 0){var t=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var u=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);mt=document.body.style.paddingRight,document.body.style.paddingRight=u+o+"px"}}ft===void 0&&(ft=document.body.style.overflow,document.body.style.overflow="hidden")},hn=function(){mt!==void 0&&(document.body.style.paddingRight=mt,mt=void 0),ft!==void 0&&(document.body.style.overflow=ft,ft=void 0)},In=function(){return window.requestAnimationFrame(function(){if(it===void 0){it={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,u=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var f=u-window.innerHeight;f&&t>=u&&(document.body.style.top=-(t+f))})},300)}})},fn=function(){if(it!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=it.position,document.body.style.top=it.top,document.body.style.left=it.left,window.scrollTo(t,e),it=void 0}},Ln=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Rn=function(e,t){var o=e.targetTouches[0].clientY-Dt;return dn(e.target)?!1:t&&t.scrollTop===0&&o>0||Ln(t)&&o<0?pt(e):(e.stopPropagation(),!0)},zn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!He.some(function(u){return u.targetElement===e})){var o={targetElement:e,options:t||{}};He=[].concat(Mn(He),[o]),ut?In():An(t),ut&&(e.ontouchstart=function(u){u.targetTouches.length===1&&(Dt=u.targetTouches[0].clientY)},e.ontouchmove=function(u){u.targetTouches.length===1&&Rn(u,e)},dt||(document.addEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!0))}},Pn=function(){ut&&(He.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),dt&&(document.removeEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!1),Dt=-1),ut?fn():hn(),He=[]},Fn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}He=He.filter(function(t){return t.targetElement!==e}),ut&&(e.ontouchstart=null,e.ontouchmove=null,dt&&He.length===0&&(document.removeEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!1)),ut?fn():hn()},Lt={},Nn={get exports(){return Lt},set exports(r){Lt=r}};(function(r){console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`),function(e){if(typeof window>"u")return;var t=0,o,u=!1,f=!1,g="message",z=g.length,N="[iFrameSizer]",W=N.length,P=null,te=window.requestAnimationFrame,rt=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),l={},Ie=null,q=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,license:"1jqr0si6pnt",log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){Q("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}});function We(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function ce(i,m,j){i.addEventListener(m,j,!1)}function X(i,m,j){i.removeEventListener(m,j,!1)}function V(){var i=["moz","webkit","o","ms"],m;for(m=0;m<i.length&&!te;m+=1)te=window[i[m]+"RequestAnimationFrame"];te?te=te.bind(window):x("setup","RequestAnimationFrame not supported")}function le(i){var m="Host page: "+i;return window.top!==window.self&&(m=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+i:"Nested host page: "+i),m}function qe(i){return N+"["+le(i)+"]"}function ge(i){return l[i]?l[i].log:u}function x(i,m){Ue("log",i,m,ge(i))}function Ze(i,m){Ue("info",i,m,ge(i))}function Q(i,m){Ue("warn",i,m,!0)}function Ue(i,m,j,S){S===!0&&typeof window.console=="object"&&console[i](qe(m),j)}function $e(i){function m(){function p(){ve(O),et(T),Ee("onResized",O)}E("Height"),E("Width"),Z(p,O,"init")}function j(){var p=ie.slice(W).split(":"),c=p[1]?parseInt(p[1],10):0,a=l[p[0]]&&l[p[0]].iframe,d=getComputedStyle(a);return{iframe:a,id:p[0],height:c+S(d)+M(d),width:p[2],type:p[3]}}function S(p){if(p.boxSizing!=="border-box")return 0;var c=p.paddingTop?parseInt(p.paddingTop,10):0,a=p.paddingBottom?parseInt(p.paddingBottom,10):0;return c+a}function M(p){if(p.boxSizing!=="border-box")return 0;var c=p.borderTopWidth?parseInt(p.borderTopWidth,10):0,a=p.borderBottomWidth?parseInt(p.borderBottomWidth,10):0;return c+a}function E(p){var c=Number(l[T]["max"+p]),a=Number(l[T]["min"+p]),d=p.toLowerCase(),b=Number(O[d]);x(T,"Checking "+d+" is in range "+a+"-"+c),b<a&&(b=a,x(T,"Set "+d+" to min value")),b>c&&(b=c,x(T,"Set "+d+" to max value")),O[d]=""+b}function re(){function p(){function d(){var v=0,_=!1;for(x(T,"Checking connection is from allowed list of origins: "+a);v<a.length;v++)if(a[v]===c){_=!0;break}return _}function b(){var v=l[T]&&l[T].remoteHost;return x(T,"Checking connection is from: "+v),c===v}return a.constructor===Array?d():b()}var c=i.origin,a=l[T]&&l[T].checkOrigin;if(a&&""+c!="null"&&!p())throw new Error("Unexpected message received from: "+c+" for "+O.iframe.id+". Message was: "+i.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function de(){return N===(""+ie).slice(0,W)&&ie.slice(W).split(":")[0]in l}function he(){var p=O.type in{true:1,false:1,undefined:1};return p&&x(T,"Ignoring init message from meta parent page"),p}function fe(p){return ie.slice(ie.indexOf(":")+z+p)}function F(p){x(T,"onMessage passed: {iframe: "+O.iframe.id+", message: "+p+"}"),Ee("onMessage",{iframe:O.iframe,message:JSON.parse(p)}),x(T,"--")}function Je(){var p=document.body.getBoundingClientRect(),c=O.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:c.height,iframeWidth:c.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(c.top-p.top,10),offsetLeft:parseInt(c.left-p.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function ke(p,c){function a(){ne("Send Page Info","pageInfo:"+Je(),p,c)}tt(a,32,c)}function Ae(){function p(b,v){function _(){l[d]?ke(l[d].iframe,d):c()}["scroll","resize"].forEach(function(C){x(d,b+C+" listener for sendPageInfo"),v(window,C,_)})}function c(){p("Remove ",X)}function a(){p("Add ",ce)}var d=T;a(),l[d]&&(l[d].stopPageInfo=c)}function Se(){l[T]&&l[T].stopPageInfo&&(l[T].stopPageInfo(),delete l[T].stopPageInfo)}function Te(){var p=!0;return O.iframe===null&&(Q(T,"IFrame ("+O.id+") not found"),p=!1),p}function k(p){var c=p.getBoundingClientRect();return me(T),{x:Math.floor(Number(c.left)+Number(P.x)),y:Math.floor(Number(c.top)+Number(P.y))}}function w(p){function c(){P=v,H(),x(T,"--")}function a(){return{x:Number(O.width)+b.x,y:Number(O.height)+b.y}}function d(){window.parentIFrame?window.parentIFrame["scrollTo"+(p?"Offset":"")](v.x,v.y):Q(T,"Unable to scroll to requested position, window.parentIFrame not found")}var b=p?k(O.iframe):{x:0,y:0},v=a();x(T,"Reposition requested from iFrame (offset x:"+b.x+" y:"+b.y+")"),window.top===window.self?c():d()}function H(){Ee("onScroll",P)===!1?Oe():et(T)}function U(p){function c(){var _=k(v);x(T,"Moving to in page link (#"+d+") at x: "+_.x+" y: "+_.y),P={x:_.x,y:_.y},H(),x(T,"--")}function a(){window.parentIFrame?window.parentIFrame.moveToAnchor(d):x(T,"In page link #"+d+" not found and window.parentIFrame not found")}var d=p.split("#")[1]||"",b=decodeURIComponent(d),v=document.getElementById(b)||document.getElementsByName(b)[0];v?c():window.top===window.self?x(T,"In page link #"+d+" not found"):a()}function oe(p){var c={};if(Number(O.width)===0&&Number(O.height)===0){var a=fe(9).split(":");c={x:a[1],y:a[0]}}else c={x:O.width,y:O.height};Ee(p,{iframe:O.iframe,screenX:Number(c.x),screenY:Number(c.y),type:O.type})}function Ee(p,c){return Le(T,p,c)}function Ne(){switch(l[T]&&l[T].firstRun&&Be(),O.type){case"close":{Re(O.iframe);break}case"message":{F(fe(6));break}case"mouseenter":{oe("onMouseEnter");break}case"mouseleave":{oe("onMouseLeave");break}case"autoResize":{l[T].autoResize=JSON.parse(fe(9));break}case"scrollTo":{w(!1);break}case"scrollToOffset":{w(!0);break}case"pageInfo":{ke(l[T]&&l[T].iframe,T),Ae();break}case"pageInfoStop":{Se();break}case"inPageLink":{U(fe(9));break}case"reset":{ae(O);break}case"init":{m(),Ee("onInit",O.iframe);break}default:Number(O.width)===0&&Number(O.height)===0?Q("Unsupported message received ("+O.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):m()}}function Ye(p){var c=!0;return l[p]||(c=!1,Q(O.type+" No settings for "+p+". Message was: "+ie)),c}function ot(){for(var p in l)ne("iFrame requested init",ze(p),l[p].iframe,p)}function Be(){l[T]&&(l[T].firstRun=!1)}var ie=i.data,O={},T=null;ie==="[iFrameResizerChild]Ready"?ot():de()?(O=j(),T=O.id,l[T]&&(l[T].loaded=!0),!he()&&Ye(T)&&(x(T,"Received: "+ie),Te()&&re()&&Ne())):Ze(T,"Ignored: "+ie)}function Le(i,m,j){var S=null,M=null;if(l[i])if(S=l[i][m],typeof S=="function")M=S(j);else throw new TypeError(m+" on iFrame["+i+"] is not a function");return M}function be(i){var m=i.id;delete l[m]}function Re(i){var m=i.id;if(Le(m,"onClose",m)===!1){x(m,"Close iframe cancelled by onClose event");return}x(m,"Removing iFrame: "+m);try{i.parentNode&&i.parentNode.removeChild(i)}catch(j){Q(j)}Le(m,"onClosed",m),x(m,"--"),be(i),o&&(o.disconnect(),o=null)}function me(i){P===null&&(P={x:window.pageXOffset===e?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===e?document.documentElement.scrollTop:window.pageYOffset},x(i,"Get page position: "+P.x+","+P.y))}function et(i){P!==null&&(window.scrollTo(P.x,P.y),x(i,"Set page position: "+P.x+","+P.y),Oe())}function Oe(){P=null}function ae(i){function m(){ve(i),ne("reset","reset",i.iframe,i.id)}x(i.id,"Size reset requested by "+(i.type==="init"?"host page":"iFrame")),me(i.id),Z(m,i,"reset")}function ve(i){function m(E){if(!i.id){x("undefined","messageData id not set");return}i.iframe.style[E]=i[E]+"px",x(i.id,"IFrame ("+M+") "+E+" set to "+i[E]+"px")}function j(E){!f&&i[E]==="0"&&(f=!0,x(M,"Hidden iFrame detected, creating visibility listener"),at())}function S(E){m(E),j(E)}var M=i.iframe.id;l[M]&&(l[M].sizeHeight&&S("height"),l[M].sizeWidth&&S("width"))}function Z(i,m,j){j!==m.type&&te&&!window.jasmine?(x(m.id,"Requesting animation frame"),te(i)):i()}function ne(i,m,j,S,M){function E(){var F=l[S]&&l[S].targetOrigin;x(S,"["+i+"] Sending msg to iframe["+S+"] ("+m+") targetOrigin: "+F),j.contentWindow.postMessage(N+m,F)}function re(){Q(S,"["+i+"] IFrame("+S+") not found")}function de(){j&&"contentWindow"in j&&j.contentWindow!==null?E():re()}function he(){function F(){l[S]&&!l[S].loaded&&!fe&&(fe=!0,Q(S,"IFrame has not responded within "+l[S].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}M&&l[S]&&l[S].warningTimeout&&(l[S].msgTimeout=setTimeout(F,l[S].warningTimeout))}var fe=!1;S=S||j.id,l[S]&&(de(),he())}function ze(i){return i+":"+l[i].bodyMarginV1+":"+l[i].sizeWidth+":"+l[i].log+":"+l[i].interval+":"+l[i].enablePublicMethods+":"+l[i].autoResize+":"+l[i].bodyMargin+":"+l[i].heightCalculationMethod+":"+l[i].bodyBackground+":"+l[i].bodyPadding+":"+l[i].tolerance+":"+l[i].inPageLinks+":"+l[i].resizeFrom+":"+l[i].widthCalculationMethod+":"+l[i].mouseEvents}function Pe(i){return typeof i=="number"}function ye(i,m){function j(){function w(U){var oe=l[k][U];oe!==1/0&&oe!==0&&(i.style[U]=Pe(oe)?oe+"px":oe,x(k,"Set "+U+" = "+i.style[U]))}function H(U){if(l[k]["min"+U]>l[k]["max"+U])throw new Error("Value for min"+U+" can not be greater than max"+U)}H("Height"),H("Width"),w("maxHeight"),w("minHeight"),w("maxWidth"),w("minWidth")}function S(){var w=m&&m.id||q.id+t++;return document.getElementById(w)!==null&&(w+=t++),w}function M(w){if(typeof w!="string")throw new TypeError("Invaild id for iFrame. Expected String");return w===""&&(i.id=w=S(),u=(m||{}).log,x(w,"Added missing iframe ID: "+w+" ("+i.src+")")),w}function E(){switch(x(k,"IFrame scrolling "+(l[k]&&l[k].scrolling?"enabled":"disabled")+" for "+k),i.style.overflow=(l[k]&&l[k].scrolling)===!1?"hidden":"auto",l[k]&&l[k].scrolling){case"omit":break;case!0:{i.scrolling="yes";break}case!1:{i.scrolling="no";break}default:i.scrolling=l[k]?l[k].scrolling:"no"}}function re(){(typeof(l[k]&&l[k].bodyMargin)=="number"||(l[k]&&l[k].bodyMargin)==="0")&&(l[k].bodyMarginV1=l[k].bodyMargin,l[k].bodyMargin=""+l[k].bodyMargin+"px")}function de(){var w=l[k]&&l[k].firstRun,H=l[k]&&l[k].heightCalculationMethod in rt;!w&&H&&ae({iframe:i,height:0,width:0,type:"init"})}function he(){l[k]&&(l[k].iframe.iFrameResizer={close:Re.bind(null,l[k].iframe),removeListeners:be.bind(null,l[k].iframe),resize:ne.bind(null,"Window resize","resize",l[k].iframe),moveToAnchor:function(w){ne("Move to anchor","moveToAnchor:"+w,l[k].iframe,k)},sendMessage:function(w){w=JSON.stringify(w),ne("Send Message","message:"+w,l[k].iframe,k)}})}function fe(w){function H(){ne("iFrame.onload",w,i,e,!0),de()}function U(Ee){if(!i.parentNode)return null;var Ne=new Ee(function(Ye){Ye.forEach(function(ot){var Be=Array.prototype.slice.call(ot.removedNodes);Be.forEach(function(ie){ie===i&&Re(i)})})});return Ne.observe(i.parentNode,{childList:!0}),Ne}var oe=We();oe&&(o=U(oe)),ce(i,"load",H),ne("init",w,i,e,!0)}function F(w){if(typeof w!="object")throw new TypeError("Options is not an object")}function Je(w){for(var H in q)Object.prototype.hasOwnProperty.call(q,H)&&(l[k][H]=Object.prototype.hasOwnProperty.call(w,H)?w[H]:q[H])}function ke(w){return w===""||w.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":w}function Ae(w){var H=w.split("Callback");if(H.length===2){var U="on"+H[0].charAt(0).toUpperCase()+H[0].slice(1);this[U]=this[w],delete this[w],Q(k,"Deprecated: '"+w+"' has been renamed '"+U+"'. The old method will be removed in the next major version.")}}function Se(w){w=w||{},l[k]=Object.create(null),l[k].iframe=i,l[k].firstRun=!0,l[k].remoteHost=i.src&&i.src.split("/").slice(0,3).join("/"),F(w),Object.keys(w).forEach(Ae,w),Je(w),l[k]&&(l[k].targetOrigin=l[k].checkOrigin===!0?ke(l[k].remoteHost):"*")}function Te(){return k in l&&"iFrameResizer"in i}var k=M(i.id);Te()?Q(k,"Ignored iFrame, already setup."):(Se(m),E(),j(),re(),fe(ze(k)),he())}function Me(i,m){Ie===null&&(Ie=setTimeout(function(){Ie=null,i()},m))}var ue={};function tt(i,m,j){ue[j]||(ue[j]=setTimeout(function(){ue[j]=null,i()},m))}function at(){function i(){function M(E){function re(he){return(l[E]&&l[E].iframe.style[he])==="0px"}function de(he){return he.offsetParent!==null}l[E]&&de(l[E].iframe)&&(re("height")||re("width"))&&ne("Visibility change","resize",l[E].iframe,E)}Object.keys(l).forEach(function(E){M(E)})}function m(M){x("window","Mutation observed: "+M[0].target+" "+M[0].type),Me(i,16)}function j(){var M=document.querySelector("body"),E={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},re=new S(m);re.observe(M,E)}var S=We();S&&j()}function st(i){function m(){Fe("Window "+i,"resize")}x("window","Trigger event: "+i),Me(m,16)}function we(){function i(){Fe("Tab Visible","resize")}document.visibilityState!=="hidden"&&(x("document","Trigger event: Visibility change"),Me(i,16))}function Fe(i,m){function j(S){return l[S]&&l[S].resizeFrom==="parent"&&l[S].autoResize&&!l[S].firstRun}Object.keys(l).forEach(function(S){j(S)&&ne(i,m,l[S].iframe,S)})}function Ve(){ce(window,"message",$e),ce(window,"resize",function(){st("resize")}),ce(document,"visibilitychange",we),ce(document,"-webkit-visibilitychange",we)}function Ge(){function i(S,M){function E(){if(M.tagName){if(M.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+M.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}M&&(E(),ye(M,S),j.push(M))}function m(S){S&&S.enablePublicMethods&&Q("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var j;return V(),Ve(),function(M,E){switch(j=[],m(M),typeof E){case"undefined":case"string":{Array.prototype.forEach.call(document.querySelectorAll(E||"iframe"),i.bind(e,M));break}case"object":{i(M,E);break}default:throw new TypeError("Unexpected data type ("+typeof E+")")}return j}}function nt(i){i.fn?i.fn.iFrameResize||(i.fn.iFrameResize=function(j){function S(M,E){ye(E,j)}return this.filter("iframe").each(S).end()}):Ze("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery!==e&&nt(window.jQuery),typeof e=="function"&&e.amd?e([],Ge):r.exports=Ge(),window.iFrameResize=window.iFrameResize||Ge()}()})(Nn);var Rt={},Bn={get exports(){return Rt},set exports(r){Rt=r}};(function(r){(function(e){if(typeof window>"u")return;var t=!0,o=10,u="",f=0,g="",z=null,N="",W=!1,P={resize:1,click:1},te=128,rt=!0,l=1,Ie="bodyOffset",q=Ie,We=!0,ce="",X={},V=32,le=null,qe=!1,ge=!1,x="[iFrameSizer]",Ze=x.length,Q="",Ue={max:1,min:1,bodyScroll:1,documentElementScroll:1},$e="child",Le=window.parent,be="*",Re=0,me=!1,et=null,Oe=16,ae=1,ve="scroll",Z=ve,ne=window,ze=function(){m("onMessage function not defined")},Pe=function(){},ye=function(){},Me={height:function(){return m("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return m("Custom width calculation function not defined"),document.body.scrollWidth}},ue={},tt=!1;function at(){}try{var st=Object.create({},{passive:{get:function(){tt=!0}}});window.addEventListener("test",at,st),window.removeEventListener("test",at,st)}catch{}function we(n,s,h,y){n.addEventListener(s,h,tt?y||{}:!1)}function Fe(n,s,h){n.removeEventListener(s,h,!1)}function Ve(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ge(n){var s,h,y,A=null,I=0,Y=function(){I=Date.now(),A=null,y=n.apply(s,h),A||(s=h=null)};return function(){var K=Date.now();I||(I=K);var B=Oe-(K-I);return s=this,h=arguments,B<=0||B>Oe?(A&&(clearTimeout(A),A=null),I=K,y=n.apply(s,h),A||(s=h=null)):A||(A=setTimeout(Y,B)),y}}function nt(n){return x+"["+Q+"] "+n}function i(n){qe&&typeof window.console=="object"&&console.log(nt(n))}function m(n){typeof window.console=="object"&&console.warn(nt(n))}function j(){S(),i("Initialising iFrame ("+window.location.href+")"),E(),he(),de("background",u),de("padding",N),H(),Ae(),Se(),fe(),Ee(),oe(),Te(),X=U(),_("init","Init message from host page"),Pe()}function S(){function n(h){return h==="true"}var s=ce.slice(Ze).split(":");Q=s[0],f=e===s[1]?f:Number(s[1]),W=e===s[2]?W:n(s[2]),qe=e===s[3]?qe:n(s[3]),V=e===s[4]?V:Number(s[4]),t=e===s[6]?t:n(s[6]),g=s[7],q=e===s[8]?q:s[8],u=s[9],N=s[10],Re=e===s[11]?Re:Number(s[11]),X.enable=e===s[12]?!1:n(s[12]),$e=e===s[13]?$e:s[13],Z=e===s[14]?Z:s[14],ge=e===s[15]?ge:n(s[15])}function M(n){var s=n.split("Callback");if(s.length===2){var h="on"+s[0].charAt(0).toUpperCase()+s[0].slice(1);this[h]=this[n],delete this[n],m("Deprecated: '"+n+"' has been renamed '"+h+"'. The old method will be removed in the next major version.")}}function E(){function n(){var h=window.iFrameResizer;i("Reading data from page: "+JSON.stringify(h)),Object.keys(h).forEach(M,h),ze="onMessage"in h?h.onMessage:ze,Pe="onReady"in h?h.onReady:Pe,be="targetOrigin"in h?h.targetOrigin:be,q="heightCalculationMethod"in h?h.heightCalculationMethod:q,Z="widthCalculationMethod"in h?h.widthCalculationMethod:Z}function s(h,y){return typeof h=="function"&&(i("Setup custom "+y+"CalcMethod"),Me[y]=h,h="custom"),h}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(n(),q=s(q,"height"),Z=s(Z,"width")),i("TargetOrigin for parent set to: "+be)}function re(n,s){return s.indexOf("-")!==-1&&(m("Negative CSS value ignored for "+n),s=""),s}function de(n,s){e!==s&&s!==""&&s!=="null"&&(document.body.style[n]=s,i("Body "+n+' set to "'+s+'"'))}function he(){e===g&&(g=f+"px"),de("margin",re("margin",g))}function fe(){document.documentElement.style.height="",document.body.style.height="",i('HTML & body height set to "auto"')}function F(n){var s={add:function(h){function y(){_(n.eventName,n.eventType)}ue[h]=y,we(window,h,y,{passive:!0})},remove:function(h){var y=ue[h];delete ue[h],Fe(window,h,y)}};n.eventNames&&Array.prototype.map?(n.eventName=n.eventNames[0],n.eventNames.map(s[n.method])):s[n.method](n.eventName),i(Ve(n.method)+" event listener: "+n.eventType)}function Je(n){F({method:n,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),F({method:n,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),F({method:n,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),F({method:n,eventType:"Input",eventName:"input"}),F({method:n,eventType:"Mouse Up",eventName:"mouseup"}),F({method:n,eventType:"Mouse Down",eventName:"mousedown"}),F({method:n,eventType:"Orientation Change",eventName:"orientationchange"}),F({method:n,eventType:"Print",eventNames:["afterprint","beforeprint"]}),F({method:n,eventType:"Ready State Change",eventName:"readystatechange"}),F({method:n,eventType:"Touch Start",eventName:"touchstart"}),F({method:n,eventType:"Touch End",eventName:"touchend"}),F({method:n,eventType:"Touch Cancel",eventName:"touchcancel"}),F({method:n,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),F({method:n,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),F({method:n,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),$e==="child"&&F({method:n,eventType:"IFrame Resized",eventName:"resize"})}function ke(n,s,h,y){return s!==n&&(n in h||(m(n+" is not a valid option for "+y+"CalculationMethod."),n=s),i(y+' calculation method set to "'+n+'"')),n}function Ae(){q=ke(q,Ie,a,"height")}function Se(){Z=ke(Z,ve,d,"width")}function Te(){t===!0?(Je("add"),ot()):i("Auto Resize disabled")}function k(){z!==null&&z.disconnect()}function w(){Je("remove"),k(),clearInterval(le)}function H(){var n=document.createElement("div");n.style.clear="both",n.style.display="block",n.style.height="0",document.body.appendChild(n)}function U(){function n(){return{x:window.pageXOffset===e?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===e?document.documentElement.scrollTop:window.pageYOffset}}function s(B){var $=B.getBoundingClientRect(),D=n();return{x:parseInt($.left,10)+parseInt(D.x,10),y:parseInt($.top,10)+parseInt(D.y,10)}}function h(B){function $(Ce){var ct=s(Ce);i("Moving to in page link (#"+D+") at x: "+ct.x+" y: "+ct.y),J(ct.y,ct.x,"scrollToOffset")}var D=B.split("#")[1]||B,L=decodeURIComponent(D),pe=document.getElementById(L)||document.getElementsByName(L)[0];e===pe?(i("In page link (#"+D+") not found in iFrame, so sending to parent"),J(0,0,"inPageLink","#"+D)):$(pe)}function y(){var B=window.location.hash,$=window.location.href;B!==""&&B!=="#"&&h($)}function A(){function B($){function D(L){L.preventDefault(),h(this.getAttribute("href"))}$.getAttribute("href")!=="#"&&we($,"click",D)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),B)}function I(){we(window,"hashchange",y)}function Y(){setTimeout(y,te)}function K(){Array.prototype.forEach&&document.querySelectorAll?(i("Setting up location.hash handlers"),A(),I(),Y()):m("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return X.enable?K():i("In page linking not enabled"),{findTarget:h}}function oe(){if(ge!==!0)return;function n(h){J(0,0,h.type,h.screenY+":"+h.screenX)}function s(h,y){i("Add event listener: "+y),we(window.document,h,n)}s("mouseenter","Mouse Enter"),s("mouseleave","Mouse Leave")}function Ee(){i("Enable public methods"),ne.parentIFrame={autoResize:function(s){return s===!0&&t===!1?(t=!0,Te()):s===!1&&t===!0&&(t=!1,w()),J(0,0,"autoResize",JSON.stringify(t)),t},close:function(){J(0,0,"close")},getId:function(){return Q},getPageInfo:function(s){typeof s=="function"?(ye=s,J(0,0,"pageInfo")):(ye=function(){},J(0,0,"pageInfoStop"))},moveToAnchor:function(s){X.findTarget(s)},reset:function(){G("parentIFrame.reset")},scrollTo:function(s,h){J(h,s,"scrollTo")},scrollToOffset:function(s,h){J(h,s,"scrollToOffset")},sendMessage:function(s,h){J(0,0,"message",JSON.stringify(s),h)},setHeightCalculationMethod:function(s){q=s,Ae()},setWidthCalculationMethod:function(s){Z=s,Se()},setTargetOrigin:function(s){i("Set targetOrigin: "+s),be=s},size:function(s,h){var y=""+(s||"")+(h?","+h:"");_("size","parentIFrame.size("+y+")",s,h)}}}function Ne(){V!==0&&(i("setInterval: "+V+"ms"),le=setInterval(function(){_("interval","setInterval: "+V)},Math.abs(V)))}function Ye(){function n(L){function pe(Ce){Ce.complete===!1&&(i("Attach listeners to "+Ce.src),Ce.addEventListener("load",A,!1),Ce.addEventListener("error",I,!1),B.push(Ce))}L.type==="attributes"&&L.attributeName==="src"?pe(L.target):L.type==="childList"&&Array.prototype.forEach.call(L.target.querySelectorAll("img"),pe)}function s(L){B.splice(B.indexOf(L),1)}function h(L){i("Remove listeners from "+L.src),L.removeEventListener("load",A,!1),L.removeEventListener("error",I,!1),s(L)}function y(L,pe,Ce){h(L.target),_(pe,Ce+": "+L.target.src)}function A(L){y(L,"imageLoad","Image loaded")}function I(L){y(L,"imageLoadFailed","Image load failed")}function Y(L){_("mutationObserver","mutationObserver: "+L[0].target+" "+L[0].type),L.forEach(n)}function K(){var L=document.querySelector("body"),pe={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return D=new $(Y),i("Create body MutationObserver"),D.observe(L,pe),D}var B=[],$=window.MutationObserver||window.WebKitMutationObserver,D=K();return{disconnect:function(){"disconnect"in D&&(i("Disconnect body MutationObserver"),D.disconnect(),B.forEach(h))}}}function ot(){var n=0>V;window.MutationObserver||window.WebKitMutationObserver?n?Ne():z=Ye():(i("MutationObserver not supported in this browser!"),Ne())}function Be(n,s){var h=0;return s=s||document.body,h=document.defaultView.getComputedStyle(s,null),h=h===null?0:h[n],parseInt(h,o)}function ie(n){n>Oe/2&&(Oe=2*n,i("Event throttle increased to "+Oe+"ms"))}function O(n,s){for(var h=s.length,y=0,A=0,I=Ve(n),Y=Date.now(),K=0;K<h;K++)y=s[K].getBoundingClientRect()[n]+Be("margin"+I,s[K]),y>A&&(A=y);return Y=Date.now()-Y,i("Parsed "+h+" HTML elements"),i("Element position calculated in "+Y+"ms"),ie(Y),A}function T(n){return[n.bodyOffset(),n.bodyScroll(),n.documentElementOffset(),n.documentElementScroll()]}function p(n,s){function h(){return m("No tagged elements ("+s+") found on page"),document.querySelectorAll("body *")}var y=document.querySelectorAll("["+s+"]");return y.length===0&&h(),O(n,y)}function c(){return document.querySelectorAll("body *")}var a={bodyOffset:function(){return document.body.offsetHeight+Be("marginTop")+Be("marginBottom")},offset:function(){return a.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Me.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,T(a))},min:function(){return Math.min.apply(null,T(a))},grow:function(){return a.max()},lowestElement:function(){return Math.max(a.bodyOffset()||a.documentElementOffset(),O("bottom",c()))},taggedElement:function(){return p("bottom","data-iframe-height")}},d={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Me.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(d.bodyScroll(),d.documentElementScroll())},max:function(){return Math.max.apply(null,T(d))},min:function(){return Math.min.apply(null,T(d))},rightMostElement:function(){return O("right",c())},taggedElement:function(){return p("right","data-iframe-width")}};function b(n,s,h,y){function A(){l=D,ae=L,J(l,ae,n)}function I(){function pe(Ce,ct){var Tn=Math.abs(Ce-ct)<=Re;return!Tn}return D=e===h?a[q]():h,L=e===y?d[Z]():y,pe(l,D)||W&&pe(ae,L)}function Y(){return!(n in{init:1,interval:1,size:1})}function K(){return q in Ue||W&&Z in Ue}function B(){i("No change in size detected")}function $(){Y()&&K()?G(s):n in{interval:1}||B()}var D,L;I()||n==="init"?(C(),A()):$()}var v=Ge(b);function _(n,s,h,y){function A(){n in{reset:1,resetPage:1,init:1}||i("Trigger event: "+s)}function I(){return me&&n in P}I()?i("Trigger event cancelled: "+n):(A(),n==="init"?b(n,s,h,y):v(n,s,h,y))}function C(){me||(me=!0,i("Trigger event lock on")),clearTimeout(et),et=setTimeout(function(){me=!1,i("Trigger event lock off"),i("--")},te)}function R(n){l=a[q](),ae=d[Z](),J(l,ae,n)}function G(n){var s=q;q=Ie,i("Reset trigger event: "+n),C(),R("reset"),q=s}function J(n,s,h,y,A){function I(){e===A?A=be:i("Message targetOrigin: "+A)}function Y(){var K=n+":"+s,B=Q+":"+K+":"+h+(e===y?"":":"+y);i("Sending message to host page ("+B+")"),Le.postMessage(x+B,A)}I(),Y()}function _e(n){var s={init:function(){ce=n.data,Le=n.source,j(),rt=!1,setTimeout(function(){We=!1},te)},reset:function(){We?i("Page reset ignored by init"):(i("Page size reset by host page"),R("resetPage"))},resize:function(){_("resizeParent","Parent window requested size check")},moveToAnchor:function(){X.findTarget(A())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var D=A();i("PageInfoFromParent called from parent: "+D),ye(JSON.parse(D)),i(" --")},message:function(){var D=A();i("onMessage called from parent: "+D),ze(JSON.parse(D)),i(" --")}};function h(){return x===(""+n.data).slice(0,Ze)}function y(){return n.data.split("]")[1].split(":")[0]}function A(){return n.data.slice(n.data.indexOf(":")+1)}function I(){return!r.exports&&"iFrameResize"in window||window.jQuery!==e&&"iFrameResize"in window.jQuery.prototype}function Y(){return n.data.split(":")[2]in{true:1,false:1}}function K(){var $=y();$ in s?s[$]():!I()&&!Y()&&m("Unexpected message ("+n.data+")")}function B(){rt===!1?K():Y()?s.init():i('Ignored message of type "'+y()+'". Received before initialization.')}h()&&B()}function ee(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}"iframeResizer"in window||(window.iframeChildListener=function(n){_e({data:n,sameDomian:!0})},we(window,"message",_e),we(window,"readystatechange",ee),ee())})()})(Bn);const $t=Lt;var mn={iframeResize:$t,iframeResizer:$t,contentWindow:Rt};function Dn(r){const e=document.createElement("a");return e.href=r,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function Hn(r){const e=Dn(r),t=e.href.substr(0,e.href.length-e.hash.length),o=window.location.href.replace(/#.*$/,"");return e.hash&&t===o}function pn(r,e){const t=JSON.stringify(e);let o=0;if(t.length===0)return o;for(let u=0;u<t.length;u++){const f=t.charCodeAt(u);o=(o<<5)-o+f,o&=o}return`${r}-${o}`}function Wn(r,e,t){const o=document.createElement("form"),u=document.createElement("input");return o.action=r,o.method="POST",o.target=t,e.forEach(([f,g])=>{u.name=f,u.value=g.toString(),o.appendChild(u.cloneNode())}),o.style.visibility="hidden",o}function qn(r){const e=r.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const o=e[t];if(o.hasAttribute&&o.hasAttribute("target")&&o!==document.body)return o}}function Un(r,e){if(r.hasAttribute("data-modal-post")){const t=r.getAttribute("data-modal-post");e.method="POST",e.body=t;const o=[];return new URL(`http://localhost/?${t}`).searchParams.forEach((u,f)=>{o.push([f,u])}),[o,e]}return[null,e]}function $n(r,e,t,o,u){const f=document.createElement("toujou-modal"),g=document.createElement("iframe"),z=pn("iframe",e);if(f.id=r,g.name=z,document.body.appendChild(f),Hn(t)){const N=document.querySelector(t),W=N instanceof HTMLTemplateElement?document.importNode(N.content,!0).children:N.childNodes;N.title&&(f.title=N.title);for(let P=0;P<W.length;P++)f.appendChild(W[P])}else if(u&&o==="POST"){const N=Wn(t,u,z);f.appendChild(N),f.appendChild(g),N.submit(),N.remove()}else o==="GET"&&(g.src=t,f.appendChild(g));return f}function Vn(r,e,t,o){const u=pn("toujou-modal",r),f=document.getElementById(u)||$n(u,r,e,t,o);setTimeout(()=>{f.open()})}const Gn=r=>{if(r.metaKey||r.ctrlKey)return;const e=qn(r);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const t=e.getAttribute("href"),o=t.indexOf("?")!==-1?t.split("?")[0]+"?toujou-ajax-modal=1&"+t.split("?")[1]:t.indexOf("#")!==-1?t.split("#")[0]+"?toujou-ajax-modal=1#"+t.split("#")[1]:t+"?toujou-ajax-modal=1",[u,f]=Un(e,{src:o});Vn(f,o,u?"POST":"GET",u),r.preventDefault(),r.stopPropagation()}},Jn=Qe`
  * {
    box-sizing: border-box;
  }

  :host {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: var(--toujou-modal-z-index, 15);
    background: var(--toujou-modal-backdrop-color, rgba(0,0,0,.6));
    visibility: hidden;
  }

  :host([allow-outside-scroll]) {
    position: absolute;
    height: 100%;
    min-height: 100vh;
  }

  :host([no-backdrop]) {
    background: transparent;
  }

  :host([visible]) {
    visibility: visible;
  }

  #scroller {
    overflow-y: auto;
    height: 100vh;
  }

  :host([allow-outside-scroll]) #scroller {
    height: 100%;
  }

  #content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: var(--toujou-modal-container-justify-content, center);
    min-height: var(--toujou-modal-container-min-height, 100%);
    height: var(--toujou-modal-container-height, 100vh);
    width: var(--toujou-modal-container-width, 100vw);
  }

  #modal-content {
    margin: var(--toujou-modal-content-margin, 2rem auto);
    width: var(--toujou-modal-content-width, 100%);
    max-width: var(--toujou-modal-content-max-width, calc(100vw - 1rem));
    background: var(--toujou-modal-content-background, #fff);
    box-shadow: var(--toujou-modal-content-shadow, 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.4));
    border: var(--toujou-modal-content-border, none);
    border-radius: var(--toujou-modal-content-border-radius, 0px 0px 0px 0px);
    max-height: var(--toujou-modal-content-max-height, 100vh);
    overflow: var(--toujou-modal-content-overflow, auto);
    scroll-behavior: var(--toujou-modal-scroll-behavior, smooth);
  }

  @media only screen and (min-width: 51rem) {
    #modal-content {
      min-width: var(--toujou-modal-content-min-width, 42.5rem);
      max-width: var(--toujou-modal-content-max-width, 50rem);
    }
  }

  #modal-header {
    position: var(--toujou-modal-header-position, relative);
    padding: var(--toujou-modal-header-padding, .5rem);
    background: var(--toujou-modal-header-background, var(--neutral-color--050));
    border-bottom: var(--toujou-modal-header-border-bottom, 1px solid var(--neutral-color--200));
    user-select: none;
    display: var(--toujou-modal-header-display, flex);
    justify-content: var(--toujou-modal-header-justify, space-between);
    width: var(--toujou-modal-header-width, 100%);
    top: var(--toujou-modal-header-top, unset);
    box-shadow: var(--toujou-modal-header-box-shadow, none);
  }

  :host([no-header]) #modal-header {
    padding: 0;
    border-bottom: none;
  }

  #modal-header h3 {
    color: var(--toujou-modal-title-color, var(--secondary-color));
    display: var(--toujou-modal-title-display, flex);
    align-items: center;
    justify-content: var(--toujou-modal-title-align, flex-start);
    font-family: var(--toujou-modal-title-font-family, var(--headline__family));
    font-weight: var(--toujou-modal-title-font-weight, 500);
    font-size: var(--toujou-modal-title-font-size, 1.21875rem);
    line-height: 1.1;
    margin: 0;
    padding: var(--toujou-modal-title-padding, 0 .5rem);
    text-align: left;
    width: 100%;
  }

  #modal-header-close {
    display: var(--toujou-modal-close-display, block);
    position: var(--toujou-modal-close-position, relative);
    font-weight: bold;
    line-height: 1;
    font-family: var(--toujou-modal-close-font-family, var(--headline__family));
    font-size: var(--toujou-modal-close-font-size, 2em);
    padding: var(--toujou-modal-close-padding, .25rem .675rem);
    background: var(--toujou-modal-close-background, var(--primary-color));
    background-size: var(--toujou-modal-close-background-size, contain);
    background-position: var(--toujou-modal-close-background-position, center);
    background-repeat: var(--toujou-modal-close-background-repeat, no-repeat);
    border: var(--toujou-modal-close-border, 1px solid var(--primary-color));
    border-radius: var(--toujou-modal-close-border-radius, 2px);
    color: var(--toujou-modal-close-color, #fff);
    cursor: pointer;
    margin: var(--toujou-modal-close-margin, 0 0 0 1.5rem);
    outline: none;
    text-align: center;
    transition: all .1s ease-in-out;
    user-select: none;
    vertical-align: middle;
    width: auto;
    top: var(--toujou-modal-close-top, 0);
    bottom: var(--toujou-modal-close-bottom, 0);
    left: var(--toujou-modal-close-left, 0);
    right: var(--toujou-modal-close-right, 0);
  }

  #modal-header-close:hover, #modal-header-close:focus {
    background: var(--toujou-modal-close-hover-background, var(--primary-color--dark));
    background-size: var(--toujou-modal-close-hover-background-size, contain);
    background-position: var(--toujou-modal-close-hover-background-position, center);
    background-repeat: var(--toujou-modal-close-hover-background-repeat, no-repeat);
    border: var(--toujou-modal-close-hover-border, 1px solid var(--primary-color--dark));
    color: var(--toujou-modal-close-hover-color, #fff);
  }

  #dog-ear-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 0;
    height: 0;
    border: none;
    border-top: 3rem solid var(--primary-color);
    border-left: 3rem solid transparent;
    padding: 0;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  #dog-ear-close:before,
  #dog-ear-close:after {
    content: '';
    background: white;
    position: absolute;
    display: block;
    height: 2px;
    width: .75rem;
    right: .375rem;
    top: -2.25rem;
  }

  #dog-ear-close:before {
    transform: rotate(45deg);
  }

  #dog-ear-close:after {
    transform: rotate(-45deg);
  }

  #progress-bar {
    display: none;
    position: absolute;
    bottom: -2px;
    left: 0;
    height: var(--toujou-modal-progressbar-height, 4px);
    width: 100%;
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }

  :host([loading]) #progress-bar {
    display: block;
    opacity: 1;
  }

  #progress-bar:before {
    content: '';
    display: block;
    height: 4px;
    width: 50%;
    background: var(--toujou-modal-progressbar-color, var(--primary-color));
    animation: var(--toujou-modal-progressbar-animation, progress 6s linear infinite);
  }

  @keyframes progress {
    0%   { width: 0; }
    18% { width: 3%; }
    20% { width: 20%; }
    38% { width: 23%; }
    40% { width: 40%; }
    58% { width: 43%; }
    60% { width: 60%; }
    78% { width: 63%; }
    80% { width: 80%; }
    98% { width: 83%; }
    100% { width: 100%; }
  }

  @media only screen and (min-width: 42.5rem) {
    #modal-header h3 {
      font-size: var(--toujou-modal-title-font-size, 1.625rem);
    }
  }

  #modal-content ::slotted(iframe) {
    border: none;
    width: 100%;
  }

`,Yn={reserveScrollBarGap:!0},lt=[];function Xn(r){lt.forEach(e=>e.close()),lt.push(r)}function Kn(r){if(r===lt[lt.length-1]){lt.pop();const e=lt.pop();e&&e.open()}}class zt extends je{static get is(){return"toujou-modal"}render(){return se`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?se`
                    <button id="dog-ear-close" dialog-dismiss></button>`:se`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(t=>{t[0]&&this.onPosition(t[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Pn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":zn(this.$.scroller,Yn),Xn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Kn(this),this.allowOutsideScroll?document.body.style.position="":Fn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const t=e.composedPath();(!t.includes(this.$.modalContent)||t.some(o=>o instanceof HTMLElement&&o.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const t=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=t?`${t}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(t=>t instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((t,o)=>{e.includes(o)||this.iframeResizerMap.delete(o)}),e.forEach(t=>{this.loading=!0,t.addEventListener("load",()=>{this.iframeResizerMap.has(t)||this.listenToIframeReadyState(t)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let t={};try{t=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(o){(console.error||console.log).call(console,o.stack||o)}return t.initCallback=()=>{this.loading=!1},t.closedCallback=()=>{this.close()},mn.iframeResizer(t,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Wt(zt,"styles",[Jn]);customElements.define(zt.is,zt);document.addEventListener("click",Gn);var vt,yt,wt;(function(r){r.PRIMARY="primary",r.SECONDARY="secondary",r.FONT="font"})(vt||(vt={})),function(r){r.DEFAULT="default",r.BORDER="border",r.GHOST="ghost"}(yt||(yt={})),function(r){r.TINY="tiny",r.SMALL="small",r.NORMAL="normal",r.LARGE="large"}(wt||(wt={}));let Qn=class extends HTMLButtonElement{constructor(){super(),this.defaultButtonVariant=vt.PRIMARY,this.defaultButtonType=yt.DEFAULT,this.defaultButtonSize=wt.NORMAL}connectedCallback(){this._checkRequiredAttributes()}_checkRequiredAttributes(){const e=this.getAttribute("button-variant");e?Object.values(vt).includes(e)||(console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`),this.setAttribute("button-variant",this.defaultButtonVariant)):this.setAttribute("button-variant",this.defaultButtonVariant);const t=this.getAttribute("button-size");t?Object.values(wt).includes(t)||(console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`),this.setAttribute("button-size",this.defaultButtonSize)):this.setAttribute("button-size",this.defaultButtonSize);const o=this.getAttribute("button-type");o?Object.values(yt).includes(o)||(console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`),this.setAttribute("button-type",this.defaultButtonType)):this.setAttribute("button-type",this.defaultButtonType)}};customElements.define("toujou-button",Qn,{extends:"button"});var Pt,bt,gn;let De=class extends je{get result(){const e=Math.round(this.duration);return e===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:e===1?`1 ${this.minutesSingularText}`:`${e} ${this.minutesPluralText}`}render(){return se`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),Pt.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,bt.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=Tt(this,Pt,"m",gn).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(Tt(this,bt,"f")):document.addEventListener("DOMContentLoaded",Tt(this,bt,"f"))}updated(e){e.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};bt=new WeakMap,Pt=new WeakSet,gn=function(r){const e=r.textContent,t=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),o=t==null?void 0:t.trim(),u=o==null?void 0:o.split(" ");return(u==null?void 0:u.length)||0},xe([Xe({type:Number})],De.prototype,"wordCount",void 0),xe([Xe({type:Number})],De.prototype,"duration",void 0),xe([Xe({type:String,attribute:"target-selector"})],De.prototype,"targetSelector",void 0),xe([Xe({type:String,attribute:"minutes-singular-text"})],De.prototype,"minutesSingularText",void 0),xe([Xe({type:String,attribute:"minutes-plural-text"})],De.prototype,"minutesPluralText",void 0),xe([Xe({type:String,attribute:"less-than-text"})],De.prototype,"lessThanText",void 0),xe([Xe({type:Number,attribute:"reading-speed"})],De.prototype,"readingSpeed",void 0),De=xe([Bt("toujou-estimated-reading-time")],De);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Vt,Et,_t,Zn=Qe(Vt||(Et=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],_t||(_t=Et.slice(0)),Vt=Object.freeze(Object.defineProperties(Et,{raw:{value:Object.freeze(_t)}}))));let Ct=class extends je{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return se`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&xn(this._messageTemplate(se,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Gt(r){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:r},window.location.origin),!0):(new URL(r).hostname===window.location.hostname?window.location.href=r:(e.targetUrl=r,e.open()),!0):!1}Ct.styles=[Zn],Ct=xe([Bt("exit-warning")],Ct),document.addEventListener("click",function(r){if(r.metaKey||r.ctrlKey)return;const e=function(t){const o=t.composedPath();for(let u=0;u<o.indexOf(document.body);u++){const f=o[u];if(f.hasAttribute&&f.hasAttribute("target")&&f!==document.body)return f}}(r);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Gt(e.getAttribute("href"))&&(r.preventDefault(),r.stopPropagation())}),window.addEventListener("message",function(r){r.origin===window.location.origin&&r.data.action!==void 0&&r.data.action==="toujou-exit-warning"&&r.data.targetUrl&&Gt(r.data.targetUrl)});let Jt=class extends je{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return se`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const t=document.importNode(e.content,!0);e.parentNode.insertBefore(t,e)})}};customElements.define(Jt.is,Jt);var Yt,xt,jt,eo=Qe(Yt||(xt=[`:host {
    background-color: var(--toujou-snackbar-bg-color, #2c2c2c);
    border: var(--toujou-snackbar-border, 1px solid var(--bg-color));
    display: var(--toujou-snackbar-display, flex);
    width: var(--toujou-snackbar-width, calc(100% - 2rem));
    max-width: var(--toujou-snackbar-max-width, 640px);
    position: var(--toujou-snackbar-position, fixed);
    bottom: var(--toujou-snackbar-bottom, 1rem);
    left: var(--toujou-snackbar-left, 1rem);
    padding: var(--toujou-snackbar-padding, 1rem);
    border-radius: var(--toujou-snackbar-border-radius, .25rem);
    z-index: var(--toujou-snackbar-z-index, 100);
    -webkit-transform: var(--toujou-snackbar-transform, translateY(calc(100% + 1rem)));
            transform: var(--toujou-snackbar-transform, translateY(calc(100% + 1rem)));
    opacity: var(--toujou-snackbar-opacity, 0);
    -webkit-transition: var(--toujou-snackbar-transition, all .25s ease-out);
    transition: var(--toujou-snackbar-transition, all .25s ease-out);
}

:host([visible]) {
    -webkit-transform: var(--toujou-snackbar-visible-transform, translateY(0));
            transform: var(--toujou-snackbar-visible-transform, translateY(0));
    opacity: var(--toujou-snackbar-visible-opacity, 1);
}

:host(:focus-visible) {
    outline: var(--toujou-snackbar-focus-outline);
    outline-offset: var(--toujou-snackbar-focus-outline-offset);
}

.snackbar__message {
    -webkit-box-flex: var(--toujou-snackbar-message-grow, 1);
        -ms-flex-positive: var(--toujou-snackbar-message-grow, 1);
            flex-grow: var(--toujou-snackbar-message-grow, 1);
    color: var(--toujou-snackbar-message-color, white);
    margin: var(--toujou-snackbar-message-margin, 0);
    padding: var(--toujou-snackbar-message-padding, 0 1rem 0 0);
}

.snackbar__button {
    border: var(--toujou-snackbar-button-border, none);
    background: var(--toujou-snackbar-button-bg, none);
    font-size: var(--toujou-snackbar-button-font-size, .875rem);
    font-family: var(--toujou-snackbar-button-font-family, var(--paragraph__family));
    text-transform: var(--toujou-snackbar-button--text-transform, uppercase);
    color: var(--toujou-snackbar-button-color, var(--primary-color));
    margin: var(--toujou-snackbar-button-margin, 0);
    outline: var(--toujou-snackbar-button-outline, none);
}

.snackbar__button:hover {
    cursor: var(--toujou-snackbar-button-hover-cursor, pointer);
    opacity: var(--toujou-snackbar-button-hover-opacity, .75);
}

:host([snackbartype='auto']) .snackbar__button {
    display: none;
}

/* VARIANT SUCCESS */

:host([success]) {
    border: var(--toujou-snackbar-success-border, 1px solid var(--success-color));
}

:host([success]) .snackbar__message {
    color: var(--toujou-snackbar-success-message-color, var(--success-color));
}

:host([success]) .snackbar__button {
    color: var(--toujou-snackbar-success-button-color, white);
}

/* VARIANT WARNING */

:host([warning]) {
    border: var(--toujou-snackbar-warning-border, 1px solid var(--warning-color));
}

:host([warning]) .snackbar__message {
    color: var(--toujou-snackbar-warning-message-color, var(--warning-color));
}

:host([warning]) .snackbar__button {
    color: var(--toujou-snackbar-warning-button-color, white);
}

/* VARIANT ERROR */

:host([error]) {
    border: var(--toujou-snackbar-error-border, 1px solid var(--error-color));
}

:host([error]) .snackbar__message {
    color: var(--toujou-snackbar-error-message-color, var(--error-color));
}

:host([error]) .snackbar__button {
    color: var(--toujou-snackbar-error-button-color, white);
}

/* VARIANT INFO */

:host([info]) {
    border: var(--toujou-snackbar-info-border, 1px solid #81d4fa);
}

:host([info]) .snackbar__message {
    color: var(--toujou-snackbar-info-message-color, #81d4fa);
}

:host([info]) .snackbar__button {
    color: var(--toujou-snackbar-info-button-color, white);
}
`],jt||(jt=xt.slice(0)),Yt=Object.freeze(Object.defineProperties(xt,{raw:{value:Object.freeze(jt)}}))));let Xt=class extends je{static get is(){return"toujou-snackbar"}render(){return se`
      <p class="snackbar__message">${this.message}</p>
      <button
        class="snackbar__button"
        @click="${this._handleButtonClick}"
        aria-label="${this.buttonAriaLabel}"
      >${this.buttonText}</button>
    `}static get styles(){return[eo]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String},buttonAriaLabel:{type:String,attribute:"button-aria-label"}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],this.buttonAriaLabel="Close the snackbar",window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define(Xt.is,Xt);var Kt,Ot,Mt,to=Qe(Kt||(Ot=[`* {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

:host {
    --toujou-spinner-size: 5rem;
    --toujou-spinner-thickness: 4;
    --toujou-spinner-start-color: var(--primary-color--light);
    --toujou-spinner-end-color: var(--primary-color--dark);
    --toujou-spinner-animation-duration: 2s;
    --toujou-spinner-dash-animation-duration: 1.4s;
    --toujou-spinner-display: inline-flex;

    width: var(--toujou-spinner-size);
    height: var(--toujou-spinner-size);
    position: relative;
    display: var(--toujou-spinner-display);
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}

:host([centered-on-page]) {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    z-index: 100;
}

.toujou-spinner__spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}

.toujou-spinner__svg {
    -webkit-animation: rotationAnimation var(--toujou-spinner-animation-duration) linear infinite;
            animation: rotationAnimation var(--toujou-spinner-animation-duration) linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
            transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.toujou-spinner__circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dashAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite,
               colorAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite;
            animation: dashAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite,
               colorAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: var(--toujou-spinner-thickness);
    fill: none;
}

@-webkit-keyframes rotationAnimation {
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}

@keyframes rotationAnimation {
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}

@-webkit-keyframes dashAnimation {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes dashAnimation {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@-webkit-keyframes colorAnimation {
    0%, 20% {
        stroke: var(--toujou-spinner-start-color);
    }
    80%, 100% {
        stroke: var(--toujou-spinner-end-color);
    }
}

@keyframes colorAnimation {
    0%, 20% {
        stroke: var(--toujou-spinner-start-color);
    }
    80%, 100% {
        stroke: var(--toujou-spinner-end-color);
    }
}
`],Mt||(Mt=Ot.slice(0)),Kt=Object.freeze(Object.defineProperties(Ot,{raw:{value:Object.freeze(Mt)}}))));class Qt extends je{static get is(){return"toujou-spinner"}static get styles(){return to}render(){return se`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(Qt.is,Qt);var Zt,At,It,no=Qe(Zt||(At=[` .open-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  :host([open]) .open-button {
    display: none;
  }

  .close-button {
    display: none;
  }

  :host([open]) .close-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`],It||(It=At.slice(0)),Zt=Object.freeze(Object.defineProperties(At,{raw:{value:Object.freeze(It)}}))));let gt=class extends je{constructor(){super(...arguments),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=e=>{e.preventDefault(),e.stopPropagation()},this.handleToggleClick=()=>{this.isOpen=!this.isOpen}}render(){return se`
            <slot name="open-button" class="open-button"  @click="${this.handleToggleClick}"></slot>
            <slot name="close-button" class="close-button" @click="${this.handleToggleClick}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}updated(e){var t,o;e.has("isOpen")&&(this.isOpen?(t=this.parentElement)===null||t===void 0||t.setAttribute(this.isOpenParentAttribute,""):(o=this.parentElement)===null||o===void 0||o.removeAttribute(this.isOpenParentAttribute))}};gt.styles=[no],xe([Xe({type:Boolean,reflect:!0,attribute:"open"})],gt.prototype,"isOpen",void 0),gt=xe([Bt("toujou-media-info")],gt);/*!
  * Cookie-store v4.0.0-next.4
  * https://github.com/markcellus/cookie-store
  *
  * Copyright (c) 2023 Mark
  * Licensed under the MIT license
 */const oo=decodeURIComponent,io=/; */;function ro(r,e){try{return typeof e=="boolean"?decodeURIComponent(r):e(r)}catch{return r}}var Ke;(function(r){r.strict="strict",r.lax="lax",r.none="none"})(Ke||(Ke={}));function ao(r,e={}){if(typeof r!="string")throw new TypeError("argument str must be a string");const t=[],o=e||{},u=r.split(io),f=o.decode||oo;for(let g=0;g<u.length;g++){const z=u[g];let N=z.indexOf("=");if(N<0)continue;const W=z.substr(0,N).trim();let P=z.substr(++N,z.length).trim();P[0]=='"'&&(P=P.slice(1,-1)),t[W]==null&&t.push({name:W,value:ro(P,f)})}return t}class so extends Event{constructor(e,t={changed:[],deleted:[]}){super(e,t),this.changed=t.changed||[],this.deleted=t.deleted||[]}}class co extends EventTarget{constructor(){throw super(),new TypeError("Illegal Constructor")}get[Symbol.toStringTag](){return"CookieStore"}async get(e){if(e==null)throw new TypeError("CookieStoreGetOptions must not be empty");if(e instanceof Object&&!Object.keys(e).length)throw new TypeError("CookieStoreGetOptions must not be empty");return(await this.getAll(e))[0]}async set(e,t){var o,u,f;const g={name:"",value:"",path:"/",secure:!1,sameSite:Ke.strict,expires:null,domain:null};if(typeof e=="string")g.name=e,g.value=t;else{if(Object.assign(g,e),g.path&&!g.path.startsWith("/"))throw new TypeError('Cookie path must start with "/"');if(!((o=g.domain)===null||o===void 0)&&o.startsWith("."))throw new TypeError('Cookie domain cannot start with "."');if(g.domain&&g.domain!==window.location.hostname)throw new TypeError("Cookie domain must domain-match current host");if(!((u=g.name)===null||u===void 0)&&u.startsWith("__Host")&&g.domain)throw new TypeError("Cookie domain must not be specified for host cookies");if(!((f=g.name)===null||f===void 0)&&f.startsWith("__Host")&&g.path!="/")throw new TypeError("Cookie path must not be specified for host cookies");g.path&&g.path.endsWith("/")&&(g.path=g.path.slice(0,-1)),g.path===""&&(g.path="/")}if(g.name===""&&g.value&&g.value.includes("="))throw new TypeError("Cookie value cannot contain '=' if the name is empty");g.name&&g.name.startsWith("__Host")&&(g.secure=!0);let z=`${g.name}=${encodeURIComponent(g.value)}`;switch(g.domain&&(z+="; Domain="+g.domain),g.path&&(z+="; Path="+g.path),typeof g.expires=="number"?z+="; Expires="+new Date(g.expires).toUTCString():g.expires instanceof Date&&(z+="; Expires="+g.expires.toUTCString()),(g.name&&g.name.startsWith("__Secure")||g.secure)&&(g.sameSite=Ke.lax,z+="; Secure"),g.sameSite){case Ke.lax:z+="; SameSite=Lax";break;case Ke.strict:z+="; SameSite=Strict";break;case Ke.none:z+="; SameSite=None";break}const N=this.get(g);if(document.cookie=z,this.onchange){const W=[],P=[];N&&!await this.get(g)?P.push({...g,value:void 0}):W.push(g);const te=new so("change",{changed:W,deleted:P});this.onchange(te)}}async getAll(e){const t=ao(document.cookie);if(e==null||Object.keys(e).length===0)return t;let o,u;if(typeof e=="string"?o=e:(o=e.name,u=e.url),u){const f=new URL(u,window.location.origin);if(window.location.href!==f.href||window.location.origin!==f.origin)throw new TypeError("URL must match the document URL");return t.slice(0,1)}return t.filter(f=>f.name===o)}async delete(e){const t={name:"",value:"",path:"/",secure:!1,sameSite:Ke.strict,expires:null,domain:null};typeof e=="string"?t.name=e:Object.assign(t,e),t.expires=0,await this.set(t)}}const ht=new WeakMap,Ft=new WeakMap;class lo{get[Symbol.toStringTag](){return"CookieStoreManager"}constructor(){throw new TypeError("Illegal Constructor")}async subscribe(e){const t=ht.get(this)||[],o=Ft.get(this);if(!o)throw new TypeError("Illegal invocation");for(const u of e){const f=u.name,g=new URL(u.url||"",o.scope).toString();t.some(z=>z.name===f&&z.url===g)||t.push({name:u.name,url:g})}ht.set(this,t)}async getSubscriptions(){return(ht.get(this)||[]).map(({name:e,url:t})=>({name:e,url:t}))}async unsubscribe(e){let t=ht.get(this)||[];const o=Ft.get(this);if(!o)throw new TypeError("Illegal invocation");for(const u of e){const f=u.name,g=new URL(u.url||"",o.scope).toString();t=t.filter(z=>z.name!==f||z.url!==g)}ht.set(this,t)}}"cookies"in ServiceWorkerRegistration.prototype||Object.defineProperty(ServiceWorkerRegistration.prototype,"cookies",{configurable:!0,enumerable:!0,get(){const r=Object.create(lo.prototype);return Ft.set(r,this),Object.defineProperty(this,"cookies",{value:r}),r}});const Nt=Object.create(co.prototype);function Ht(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}var en,tn,uo=Qe(en||(en=Ht([`:host {
    display: var(--toujou-consent-display, block);
}`])));class nn extends je{static get is(){return"toujou-consent"}render(){return se`
      <slot id="content"></slot>
    `}static get styles(){return uo}static get properties(){return{consentState:{type:Boolean},listenTo:{type:String},listenOn:{type:String}}}set consentState(e){this.consentInputType==="checkbox"&&(this.querySelector(".consent__checkbox").checked=e)}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}constructor(){super(),this._handleEvent=this._handleEvent.bind(this),this.listenOn="*",this._consentType=this.getAttribute("consenttype"),this._getConsentInputType(),this.consentState=null}connectedCallback(){super.connectedCallback()}_handleEvent(e){e.type==="click"?this._dispatchClickEvent():e.type==="change"&&this._dispatchChangeEvent()}firstUpdated(){this._dispatchReadyEvent()}_dispatchChangeEvent(){const e=new CustomEvent("toujou-consent-checkbox-changed",{bubbles:!0,composed:!0,detail:{consentElement:this}});this.dispatchEvent(e)}_dispatchClickEvent(){const e=new CustomEvent("toujou-consent-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchReadyEvent(){const e=new CustomEvent("toujou-consent-connected",{bubbles:!0,composed:!0,detail:{consentType:this._consentType}});this.dispatchEvent(e)}_getConsentInputType(){const e=this.querySelectorAll(".consent__checkbox"),t=this.querySelectorAll(".consent__button");e.length>0?this.consentInputType="checkbox":t.length>0&&(this.consentInputType="button")}}customElements.define(nn.is,nn);var ho=Qe(tn||(tn=Ht([`:host {
    display: var(--toujou-consent-widget-display, block);
}

`])));const bn={setItem(r,e){document.cookie=`${r}=${e};path=/;`},getItem(r){const e=`${r}=`,t=document.cookie.split(";");for(let o=0,u=t.length;o<u;o++){let f=t[o];for(;f.charAt(0)===" ";)f=f.substring(1,f.length);if(f.indexOf(e)===0)return f.substring(e.length,f.length)}return null}},on=(r,e,t)=>{try{const o=JSON.stringify(r);return void e.setItem(t,o)}catch(o){console.error(`There was an error while saving the consents data to storage: Error: ${o}`)}},rn=(r,e)=>{try{const t=r.getItem(e);return t===null?{}:JSON.parse(t)}catch(t){return console.error(`There was a problem loading the consents data from storage. Error: ${t}`),{}}},fo=r=>{const e={},t={};for(const o in r)o==="consentBoxDismissed"?t[o]=r[o]:o==="tracking"&&r[o].consentLifetime===0?e[o]=r[o]:o==="tracking"&&r[o].consentLifetime>0?t[o]=r[o]:r[o].consentLifetime===0?e[o]=r[o]:r[o].consentLifetime>0&&(t[o]=r[o]);on({consents:e},bn,"consentsState"),on({consents:t},localStorage,"consentsState")},vn="CLEAR_CONSENT_TYPE_DATA",yn="SAVE_ALL_CONSENTS",wn="SAVE_SINGLE_CONSENT",kn="DISMISS_CONSENT_BOX",Sn="UNDISMISS_CONSENT_BOX",mo={consents:{consentBoxDismissed:!1}};let an=!1;function po(r=mo,e){const t=function(o,u){switch(u.type){case vn:{const f={...o.consents};return delete f[u.payload],{...o,consents:f}}case yn:{const f={...o.consents,...u.payload};return{...o,consents:f}}case wn:{const f={...o.consents};return f[u.payload.consentType]={...u.payload.consentData},{...o,consents:f}}case kn:{const f={...o.consents};return f.consentBoxDismissed=!0,{...o,consents:f}}case Sn:{const f={...o.consents};return f.consentBoxDismissed=!1,{...o,consents:f}}}return o}(r,e);return(o=>{for(const u in o){if(u!=="consents")return void console.error('Unknown data "key" found while saving to session / local Storage');fo(o.consents)}})(t),typeof window.dataLayer=="object"&&(!an||t.consents.consentBoxDismissed!==void 0&&t.consents.consentBoxDismissed)&&(window.dataLayer.push({event:"consent-changed",...t.consents}),an=!0),t}const St=function(){const r=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):jn)(),e=(()=>{const t=rn(bn,"consentsState"),o=rn(localStorage,"consentsState");return{consents:{...t.consents,...o.consents}}})();return On(po,e,r)}();class sn extends je{static get is(){return"toujou-consent-widget"}render(){return se`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `}static get styles(){return ho}set _warningVisible(e){this.setAttribute("warningvisible",e)}static get properties(){return{inPage:{type:Boolean},listenTo:{type:String},listenOn:{type:String},_warningVisible:{type:Boolean},deactivated:{type:Boolean}}}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}set _dismissedBox(e){this.inPage||(e?this.setAttribute("hidden",""):this.removeAttribute("hidden")),this._warningVisible=this.inPage&&!e}constructor(){super(),this.inPage=!1,this.deactivated=!1,this.consentTypeNames=["tracking","html","maps","video"],this.listenOn="*",this.onStateChange=this.onStateChange.bind(this),this._handleEvent=this._handleEvent.bind(this),this.store=St,this.store.subscribe(this.onStateChange),this.consentTypeNames=["tracking","html","maps","video"],this._state=this.store.getState(),this._warningVisible=this.inPage,window.location.hash==="#aaa"&&(this.deactivated=!0),this.addEventListener("toujou-consent-connected",this._handleConsentConnected),this.addEventListener("toujou-consent-checkbox-changed",this._handleConsentCheckboxChanged)}connectedCallback(){super.connectedCallback(),this._dismissedBox=!!this._state.consents&&this._state.consents.consentBoxDismissed,this.deactivated?setTimeout(()=>{this._prepareToSaveConsents(),this._dismissConsentBox(),this._dispatchConsentDeactivated()}):setTimeout(()=>{const e=this.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length>0&&e[0].focus()})}firstUpdated(){this.consentTypeNames.forEach(e=>{const t=this.querySelector(`toujou-consent[consenttype="${e}"]`);this._state.consents.consentBoxDismissed&&!this._state.consents[e]&&t&&this._undismissConsentBox()})}onStateChange(){this._state=this.store.getState(),this._dismissedBox=this._state.consents.consentBoxDismissed,this._updateAllConsentElementsStates()}_handleEvent(e){e.stopPropagation(),e.type==="click"&&!this.inPage&&e.target.matches(this.listenOn)&&this._handleConsentBoxSaveButtonClick(e.target)}_handleConsentCheckboxChanged(e){this.inPage&&this._state.consents.consentBoxDismissed===!0&&(this._prepareToSaveConsents(),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))}_handleConsentBoxSaveButtonClick(e){e.hasAttribute("accept-all")?this._prepareToSaveConsents(!0):e.hasAttribute("deny-all")?this._prepareToSaveConsents(!1):this._prepareToSaveConsents(null),this._dismissConsentBox()}_prepareToSaveConsents(e=null){const t=this._getAllConsents(e);this._saveAllConsents(t)}_getAllConsents(e=null){const t={},o=this.querySelectorAll("toujou-consent");return o&&o.forEach(u=>{const f=u.getAttribute("consenttype");t[f]=this._createNewConsentData(u,e)}),t}_createNewConsentData(e,t=null){const o=e.querySelector(".consent__checkbox");t!==null&&(o.checked=t);const u=this._createConsentLifeInMillis(e.getAttribute("consenttype"),e.getAttribute("consentlifetime"));return{consentGiven:o.checked,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+u,consentLifetime:u}}_createConsentLifeInMillis(e,t){return e==="tracking"?t==="0"?63072e6:0:24*t*60*60}_dismissConsentBox(){this.store.dispatch({type:kn}),this._dispatchConsentWidgetDismissedEvent()}_undismissConsentBox(){this.store.dispatch({type:Sn})}_saveAllConsents(e){this.store.dispatch((t=>({type:yn,payload:t}))(e))}_handleConsentConnected(e){this._setConsentElementState(e.target)}_setConsentElementState(e){if(e.tagName==="TOUJOU-CONSENT"){const t=e.getAttribute("consenttype"),o=e.getAttribute("prechecked")==="1";e.consentState=this._getConsentTypeState(this._state,t,o)}}_updateAllConsentElementsStates(){this.querySelectorAll("toujou-consent").forEach(e=>{this._setConsentElementState(e)})}_getConsentTypeState(e,t,o){let u=null;return u=e&&e.consents&&e.consents[t]?e.consents[t]:null,u?u&&this._isConsentExpired(u)?(this.store.dispatch((f=>({type:vn,payload:f}))(t)),this._dispatchConsentExpiredEvent(t),this._undismissConsentBox(),o):u&&!this._isConsentExpired(u)?u.consentGiven:u:o}_isConsentExpired(e){return e.consentCreationDate+e.consentLifetime>e.consentExpirationDate}_dispatchConsentExpiredEvent(e){const t=new CustomEvent("toujou-consent-expired",{bubbles:!0,composed:!0,detail:{consentType:e}});this.dispatchEvent(t)}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_dispatchConsentWidgetDismissedEvent(){const e=new CustomEvent("toujou-consent-widget-dismissed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchConsentDeactivated(){const e=new CustomEvent("toujou-consent-widget-deactivated",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}customElements.define(sn.is,sn);class go extends HTMLElement{get analyticsid(){return this.getAttribute("analyticsid")}constructor(){super(),this.hidden=!0,this.style.display="contents",this.onStateChange=this.onStateChange.bind(this),this.store=St,this.store.subscribe(this.onStateChange),this.consentState=this.store.getState().consents.tracking}connectedCallback(){this._handleConsentState(this.consentState),this._storeUnsubscribe=this.store.subscribe(this.onStateChange)}disconnectedCallback(){this._storeUnsubscribe&&this._storeUnsubscribe()}onStateChange(){this.consentState=this.store.getState().consents.tracking||null,this._handleConsentState(this.consentState)}_handleConsentState(e){typeof e=="object"&&e!==null&&e.consentGiven?this._instantiateGoogleAnalytics(e):this._removeGoogleAnalyticsCookies()}_instantiateGoogleAnalytics(e){if(this.gaIsInstantiated)return;const t=this.analyticsid;window[`ga-disable-${t}`]=!1;const o={cookie_expires:e.consentExpirationDate,anonymize_ip:!0};function u(...f){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],window.gtag=u,this._ga||(this._ga=this._addAnalyticsScriptTag(t),u("js",new Date)),u("config",t,o),this.gaIsInstantiated=!0,this._dispatchGtagLoadedEvent()}_addAnalyticsScriptTag(e){const t=`https://www.googletagmanager.com/gtag/js?id=${e}`,o=document.createElement("script"),u=document.getElementsByTagName("script")[0];return o.async=!0,o.src=t,u.parentNode.insertBefore(o,u),!0}_removeGoogleAnalyticsCookies(){["_ga","_gid","_gat"].forEach(e=>{Nt.delete(e)}),window[`ga-disable-${this.analyticsid}`]=!0,this.gaIsInstantiated=!1}_dispatchGtagLoadedEvent(){const e=new CustomEvent("toujou-gtag-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}customElements.define("toujou-tracking-google-analytics",go);class bo extends HTMLElement{get url(){return this.getAttribute("url").replace(/^\/\//,`${window.location.protocol}//`)}get siteid(){return this.getAttribute("siteid")}constructor(){super(),this.hidden=!0,this.style.display="contents",this.onStateChange=this.onStateChange.bind(this),this.store=St,this.store.subscribe(this.onStateChange),this.consentState=this.store.getState().consents.tracking}connectedCallback(){this._handleConsentState(this.consentState),this._storeUnsubscribe=this.store.subscribe(this.onStateChange)}disconnectedCallback(){this._storeUnsubscribe&&this._storeUnsubscribe()}onStateChange(){this.consentState=this.store.getState().consents.tracking||null,this._handleConsentState(this.consentState)}_handleConsentState(e){typeof e=="object"&&e!==null&&e.consentGiven?this._instantiateMatomo(e):this._disableMatomoTracking()}_instantiateMatomo(e){if(this.matomoIsInstantiated)return;const t=new URL(this.url),o=new URL(t);o.pathname="/matomo.php";const u=new URL(t);u.pathname="/matomo.js",window._paq=window._paq||[];const{_paq:f}=window;f.push(["requireConsent"]),f.push(["trackPageView"]),f.push(["enableLinkTracking"]),f.push(["setTrackerUrl",o.toString()]),f.push(["setSiteId",this.siteid]),e.consentLifetime===0?f.push(["setConsentGiven"]):f.push(["rememberConsentGiven",e.consentLifetime/1e3/60/60]),this._matomo||(this._matomo=this._addMatomoScriptTag(u)),this.matomoIsInstantiated=!0,this._dispatchMatomoLoadedEvent()}_addMatomoScriptTag(e){const t=document.createElement("script"),o=document.getElementsByTagName("script")[0];return t.async=!0,t.src=e.toString(),o.parentNode.insertBefore(t,o),!0}_disableMatomoTracking(){if(this.matomoIsInstantiated){window._paq=window._paq||[];const{_paq:e}=window;e.push(["forgetConsentGiven"])}Nt.getAll().then(e=>e.forEach(t=>{t.name.match(/^_pk.*$/)&&Nt.delete(t.name)})),this.matomoIsInstantiated=!1}_dispatchMatomoLoadedEvent(){const e=new CustomEvent("toujou-matomo-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}var cn;customElements.define("toujou-tracking-matomo",bo);var vo=Qe(cn||(cn=Ht([`:host {
    display: var(--toujou-third-party-content-display, flex);
    -webkit-box-align: var(--toujou-third-party-content-align-items, stretch);
        -ms-flex-align: var(--toujou-third-party-content-align-items, stretch);
            align-items: var(--toujou-third-party-content-align-items, stretch);
    -webkit-box-pack: var(--toujou-third-party-content-justify-content, center);
        -ms-flex-pack: var(--toujou-third-party-content-justify-content, center);
            justify-content: var(--toujou-third-party-content-justify-content, center);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: var(--toujou-third-party-content-flex-direction, column);
            flex-direction: var(--toujou-third-party-content-flex-direction, column);
    position: var(--toujou-third-party-content-position, relative);
    top: var(--toujou-third-party-content-top, 0);
    left: var(--toujou-third-party-content-left, 0);
    height: var(--toujou-third-party-content-height, 100%);
    width: var(--toujou-third-party-content-width, 100%);
}

:host([contenttype='maps']) {
    position: var(--toujou-third-party-content-maps-position, absolute);
}

iframe {
    border: var(--toujou-third-party-content-iframe-border, none);
    position: var(--toujou-third-party-content-iframe-position, absolute);
    height: var(--toujou-third-party-content-iframe-height, 100%);
    width: var(--toujou-third-party-content-iframe-width, 100%);
}

:host([contenttype='html']) iframe {
    position: var(--toujou-third-party-content-html-iframe-position, relative);
}
`])));class ln extends je{static get is(){return"toujou-third-party-content"}static get styles(){return vo}render(){return se`
      <slot id="templatedContent" @slotchange="${this._handleSlotChange}"></slot>
      <div @click="${this._handlePlaceholderClick}">
        <slot name="placeholder" id="placeholderContainer" class="placeholder-slot"></slot>
      </div>
    `}static get properties(){return{contentType:{type:String},contentTypeAllowed:{type:Boolean},contentID:{type:String},isIntersecting:{type:Boolean},show:{type:Boolean}}}constructor(){super(),this.contentTypeAllowed=!1,this.isIntersecting=!1,this.show=!1,this.onStateChange=this.onStateChange.bind(this),this._handleConsentButtonClick=this._handleConsentButtonClick.bind(this),this.store=St,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}connectedCallback(){super.connectedCallback(),this._isContentTypeAllowed(),this._checkIfShouldShow(),this._addEventListeners(),this._addIntersectionObserver()}updated(e){e.forEach((t,o)=>{o==="isIntersecting"&&this.isIntersecting&&!this.show&&(this.show=!0,this._checkIfShouldShow())})}onStateChange(){this._state=this.store.getState(),this._isContentTypeAllowed(),this._checkIfShouldShow()}_addEventListeners(){window.addEventListener("toujou-consent-widget-dismissed",()=>{this._isContentTypeAllowed(),this._checkIfShouldShow()}),window.addEventListener("toujou-consent-button-clicked",this._handleConsentButtonClick)}_handleConsentButtonClick(e){const t=e.target;this.querySelectorAll(".consent").forEach(o=>{o===t&&(this._saveSingleConsent(e.target.getAttribute("consenttype"),this._createNewConsentData(e.target)),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))})}_createNewConsentData(e){const t=24*e.getAttribute("consentLifetime")*60*60;return{consentGiven:!0,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+t,consentLifetime:t}}_saveSingleConsent(e,t){this.store.dispatch(((o,u)=>({type:wn,payload:{consentType:o,consentData:u}}))(e,t))}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_handlePlaceholderClick(e){e.target.hasAttribute("ttpc-showcontentonce")&&this._handleShowContentOnceClick()}_handleShowContentOnceClick(){this._showContent()}_addIntersectionObserver(){new IntersectionObserver((e,t)=>{this.isIntersecting=e[0].isIntersecting,this.isIntersecting&&t.unobserve(this)}).observe(this)}_appendNonScriptTag(e){this.querySelector(".toujou-third-party-content__templated-content").appendChild(e)}_appendScriptTag(e){const t=document.createElement("script"),o=this._copyScriptAttributesAndContent(e,t);return this.querySelector(".toujou-third-party-content__templated-content").appendChild(o),!o.hasAttribute("src")||o.hasAttribute("async")||o.hasAttribute("defer")?new Promise(u=>{u()}):new Promise(u=>{o.addEventListener("load",u)})}async _appendTags(e){for(let t=0;t<e.length;t++)await new Promise(o=>{e[t].tagName!=="SCRIPT"?o(this._appendNonScriptTag(e[t])):o(this._appendScriptTag(e[t]))})}_checkIfShouldShow(){this.contentTypeAllowed&&this.show&&this._showContent()}_clearRenderedContent(){this.querySelector(".toujou-third-party-content__templated-content").innerHTML=""}_copyScriptAttributesAndContent(e,t){for(let o=0;o<e.attributes.length;o++){const u=e.attributes[o];t.setAttribute(u.name,u.value)}return t.innerHTML=e.innerHTML,t}_getTemplateTags(e){const t=[],o=document.createElement("div");o.innerHTML=e;for(const u in o.childNodes)o.childNodes[u].nodeType!==3&&o.childNodes[u].parentElement===o&&t.push(o.childNodes[u]);return t}_handleSlotChange(){this._checkIfShouldShow()}_isCommentedTemplate(e){return e.startsWith("<!--")&&e.endsWith("-->")}_isContentTypeAllowed(){this._state.consents[this.contentType]?this.contentTypeAllowed=this._state.consents[this.contentType].consentGiven||!1:this.contentTypeAllowed=!1,window.location.hash==="#aaa"&&(this.contentTypeAllowed=!0)}_showContent(){this._clearRenderedContent(),this.shadowRoot.querySelector("#templatedContent").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE").forEach(e=>{if(this.contentType==="html"){const t=this._uncommentTemplate(e),o=this._getTemplateTags(t);this._appendTags(o)}else{const t=document.importNode(e.content,!0);this.querySelector(".toujou-third-party-content__templated-content").appendChild(t)}}),this.setAttribute("showingcontent","")}_uncommentTemplate(e){return this._isCommentedTemplate(e.innerHTML)?e.innerHTML.substr(4,e.innerHTML.length-7):null}}customElements.define(ln.is,ln);class un extends je{static get is(){return"toujou-iframe-resizer"}render(){return se`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(e){e.target.assignedNodes({flatten:!0}).filter(t=>t instanceof HTMLIFrameElement).forEach(t=>{let o={};try{o=JSON.parse(t.getAttribute("toujou-iframe"))||{}}catch(u){(console.error||console.log).call(console,u.stack||u)}mn.iframeResizer(o,t)})}}customElements.define(un.is,un);
//# sourceMappingURL=base.js.map
