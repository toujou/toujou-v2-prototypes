var En=Object.defineProperty;var _n=(i,e,t)=>e in i?En(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ut=(i,e,t)=>(_n(i,typeof e!="symbol"?e+"":e,t),t);import{i as Cn}from"./main-nav.js";import{i as Qe,s as Ne,y as le,Z as xn}from"./lit-element-6fe74b4f.js";import{_ as _e,a as Et}from"./tslib.es6-c85c2c5e.js";import{e as Ht}from"./custom-element-73470d87.js";import{e as Xe}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";import{a as jn,d as On}from"./redux-1fbc3ebb.js";/*! (c) Andrea Giammarchi @webreflection ISC */(function(){var i=function(d,a){var f=function(O){for(var x=0,N=O.length;x<N;x++)b(O[x])},b=function(O){var x=O.target,N=O.attributeName,Y=O.oldValue;x.attributeChangedCallback(N,Y,x.getAttribute(N))};return function(w,O){var x=w.constructor.observedAttributes;return x&&d(O).then(function(){new a(f).observe(w,{attributes:!0,attributeOldValue:!0,attributeFilter:x});for(var N=0,Y=x.length;N<Y;N++)w.hasAttribute(x[N])&&b({target:w,attributeName:x[N],oldValue:null})}),w}};function e(d,a){if(d){if(typeof d=="string")return t(d,a);var f=Object.prototype.toString.call(d).slice(8,-1);if(f==="Object"&&d.constructor&&(f=d.constructor.name),f==="Map"||f==="Set")return Array.from(d);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return t(d,a)}}function t(d,a){(a==null||a>d.length)&&(a=d.length);for(var f=0,b=new Array(a);f<a;f++)b[f]=d[f];return b}function o(d,a){var f=typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(!f){if(Array.isArray(d)||(f=e(d))||a&&d&&typeof d.length=="number"){f&&(d=f);var b=0,w=function(){};return{s:w,n:function(){return b>=d.length?{done:!0}:{done:!1,value:d[b++]}},e:function(Y){throw Y},f:w}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,x=!1,N;return{s:function(){f=f.call(d)},n:function(){var Y=f.next();return O=Y.done,Y},e:function(Y){x=!0,N=Y},f:function(){try{!O&&f.return!=null&&f.return()}finally{if(x)throw N}}}}/*! (c) Andrea Giammarchi - ISC */var l=!0,m=!1,g="querySelectorAll",P=function(a){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:MutationObserver,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:["*"],O=function Y(K,Fe,oe,n,r,h){var v=o(K),A;try{for(v.s();!(A=v.n()).done;){var I=A.value;(h||g in I)&&(r?oe.has(I)||(oe.add(I),n.delete(I),a(I,r)):n.has(I)||(n.add(I),oe.delete(I),a(I,r)),h||Y(I[g](Fe),Fe,oe,n,r,l))}}catch(Q){v.e(Q)}finally{v.f()}},x=new b(function(Y){if(w.length){var K=w.join(","),Fe=new Set,oe=new Set,n=o(Y),r;try{for(n.s();!(r=n.n()).done;){var h=r.value,v=h.addedNodes,A=h.removedNodes;O(A,K,Fe,oe,m,m),O(v,K,Fe,oe,l,m)}}catch(I){n.e(I)}finally{n.f()}}}),N=x.observe;return(x.observe=function(Y){return N.call(x,Y,{subtree:l,childList:l})})(f),x},D="querySelectorAll",R=self,q=R.document,Ce=R.Element,c=R.MutationObserver,ve=R.Set,xe=R.WeakMap,J=function(a){return D in a},ue=[].filter,We=function(d){var a=new xe,f=function(n){for(var r=0,h=n.length;r<h;r++)a.delete(n[r])},b=function(){for(var n=K.takeRecords(),r=0,h=n.length;r<h;r++)x(ue.call(n[r].removedNodes,J),!1),x(ue.call(n[r].addedNodes,J),!0)},w=function(n){return n.matches||n.webkitMatchesSelector||n.msMatchesSelector},O=function(n,r){var h;if(r)for(var v,A=w(n),I=0,Q=N.length;I<Q;I++)A.call(n,v=N[I])&&(a.has(n)||a.set(n,new ve),h=a.get(n),h.has(v)||(h.add(v),d.handle(n,r,v)));else a.has(n)&&(h=a.get(n),a.delete(n),h.forEach(function(ee){d.handle(n,r,ee)}))},x=function(n){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,h=0,v=n.length;h<v;h++)O(n[h],r)},N=d.query,Y=d.root||q,K=P(O,Y,c,N),Fe=Ce.prototype.attachShadow;return Fe&&(Ce.prototype.attachShadow=function(oe){var n=Fe.call(this,oe);return K.observe(n),n}),N.length&&x(Y[D](N)),{drop:f,flush:b,observer:K,parse:x}},Z=self,V=Z.document,se=Z.Map,ze=Z.MutationObserver,C=Z.Object,je=Z.Set,ie=Z.WeakMap,ye=Z.Element,rt=Z.HTMLElement,Oe=Z.Node,qe=Z.Error,de=Z.TypeError,Ue=Z.Reflect,he=C.defineProperty,Ze=C.keys,Me=C.getOwnPropertyNames,ae=C.setPrototypeOf,we=!self.customElements,z=function(a){for(var f=Ze(a),b=[],w=new je,O=f.length,x=0;x<O;x++){b[x]=a[f[x]];try{delete a[f[x]]}catch{w.add(x)}}return function(){for(var N=0;N<O;N++)w.has(N)||(a[f[N]]=b[N])}};if(we){var $e=function(){var a=this.constructor;if(!Ae.has(a))throw new de("Illegal constructor");var f=Ae.get(a);if(Ge)return st(Ge,f);var b=Ve.call(V,f);return st(ae(b,a.prototype),f)},Ve=V.createElement,Ae=new se,fe=new se,Ie=new se,ke=new se,et=[],at=function(a,f,b){var w=Ie.get(b);if(f&&!w.isPrototypeOf(a)){var O=z(a);Ge=ae(a,w);try{new w.constructor}finally{Ge=null,O()}}var x="".concat(f?"":"dis","connectedCallback");x in w&&a[x]()},tt=We({query:et,handle:at}),Se=tt.parse,Ge=null,Le=function(a){if(!fe.has(a)){var f,b=new Promise(function(w){f=w});fe.set(a,{$:b,_:f})}return fe.get(a).$},st=i(Le,ze);self.customElements={define:function(a,f){if(ke.has(a))throw new qe('the name "'.concat(a,'" has already been used with this registry'));Ae.set(f,a),Ie.set(a,f.prototype),ke.set(a,f),et.push(a),Le(a).then(function(){Se(V.querySelectorAll(a))}),fe.get(a)._(f)},get:function(a){return ke.get(a)},whenDefined:Le},he($e.prototype=rt.prototype,"constructor",{value:$e}),self.HTMLElement=$e,V.createElement=function(d,a){var f=a&&a.is,b=f?ke.get(f):ke.get(d);return b?new b:Ve.call(V,d)},"isConnected"in Oe.prototype||he(Oe.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(we=!self.customElements.get("extends-br"),we)try{var s=function d(){return self.Reflect.construct(HTMLBRElement,[],d)};s.prototype=HTMLLIElement.prototype;var u="extends-br";self.customElements.define("extends-br",s,{extends:"br"}),we=V.createElement("br",{is:u}).outerHTML.indexOf(u)<0;var E=self.customElements,k=E.get,M=E.whenDefined;self.customElements.whenDefined=function(d){var a=this;return M.call(this,d).then(function(f){return f||k.call(a,d)})}}catch{}if(we){var j=function(a){var f=Re.get(a);Je(f.querySelectorAll(this),a.isConnected)},U=self.customElements,me=V.createElement,re=U.define,ce=U.get,pe=U.upgrade,G=Ue||{construct:function(a){return a.call(this)}},Be=G.construct,Re=new ie,Pe=new je,Te=new se,y=new se,S=new se,B=new se,X=[],te=[],ge=function(a){return B.get(a)||ce.call(U,a)},nt=function(a,f,b){var w=S.get(b);if(f&&!w.isPrototypeOf(a)){var O=z(a);_=ae(a,w);try{new w.constructor}finally{_=null,O()}}var x="".concat(f?"":"dis","connectedCallback");x in w&&a[x]()},Ye=We({query:te,handle:nt}),Je=Ye.parse,ot=We({query:X,handle:function(a,f){Re.has(a)&&(f?Pe.add(a):Pe.delete(a),te.length&&j.call(te,a))}}),ne=ot.parse,L=ye.prototype.attachShadow;L&&(ye.prototype.attachShadow=function(d){var a=L.call(this,d);return Re.set(this,a),a});var T=function(a){if(!y.has(a)){var f,b=new Promise(function(w){f=w});y.set(a,{$:b,_:f})}return y.get(a).$},p=i(T,ze),_=null;Me(self).filter(function(d){return/^HTML.*Element$/.test(d)}).forEach(function(d){var a=self[d];function f(){var b=this.constructor;if(!Te.has(b))throw new de("Illegal constructor");var w=Te.get(b),O=w.is,x=w.tag;if(O){if(_)return p(_,O);var N=me.call(V,x);return N.setAttribute("is",O),p(ae(N,b.prototype),O)}else return Be.call(this,a,[],b)}he(f.prototype=a.prototype,"constructor",{value:f}),he(self,d,{value:f})}),V.createElement=function(d,a){var f=a&&a.is;if(f){var b=B.get(f);if(b&&Te.get(b).tag===d)return new b}var w=me.call(V,d);return f&&w.setAttribute("is",f),w},U.get=ge,U.whenDefined=T,U.upgrade=function(d){var a=d.getAttribute("is");if(a){var f=B.get(a);if(f){p(ae(d,f.prototype),a);return}}pe.call(U,d)},U.define=function(d,a,f){if(ge(d))throw new qe("'".concat(d,"' has already been defined as a custom element"));var b,w=f&&f.extends;Te.set(a,w?{is:d,tag:w}:{is:"",tag:d}),w?(b="".concat(w,'[is="').concat(d,'"]'),S.set(b,a.prototype),B.set(d,a),te.push(b)):(re.apply(U,arguments),X.push(b=d)),T(d).then(function(){w?(Je(V.querySelectorAll(b)),Pe.forEach(j,[b])):ne(V.querySelectorAll(b))}),y.get(d)._(a)}}})();function $t(){Cn()}document.readyState!=="loading"?setTimeout(()=>{$t()}):document.addEventListener("DOMContentLoaded",()=>{$t()});function Mn(i){if(Array.isArray(i)){for(var e=0,t=Array(i.length);e<i.length;e++)t[e]=i[e];return t}else return Array.from(i)}var kt=!1;if(typeof window<"u"){var Vt={get passive(){kt=!0}};window.addEventListener("testPassive",null,Vt),window.removeEventListener("testPassive",null,Vt)}var ut=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),He=[],dt=!1,Wt=-1,ft=void 0,it=void 0,mt=void 0,dn=function(e){return He.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},pt=function(e){var t=e||window.event;return dn(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},An=function(e){if(mt===void 0){var t=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var l=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);mt=document.body.style.paddingRight,document.body.style.paddingRight=l+o+"px"}}ft===void 0&&(ft=document.body.style.overflow,document.body.style.overflow="hidden")},hn=function(){mt!==void 0&&(document.body.style.paddingRight=mt,mt=void 0),ft!==void 0&&(document.body.style.overflow=ft,ft=void 0)},In=function(){return window.requestAnimationFrame(function(){if(it===void 0){it={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,l=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var m=l-window.innerHeight;m&&t>=l&&(document.body.style.top=-(t+m))})},300)}})},fn=function(){if(it!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=it.position,document.body.style.top=it.top,document.body.style.left=it.left,window.scrollTo(t,e),it=void 0}},Ln=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Rn=function(e,t){var o=e.targetTouches[0].clientY-Wt;return dn(e.target)?!1:t&&t.scrollTop===0&&o>0||Ln(t)&&o<0?pt(e):(e.stopPropagation(),!0)},Pn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!He.some(function(l){return l.targetElement===e})){var o={targetElement:e,options:t||{}};He=[].concat(Mn(He),[o]),ut?In():An(t),ut&&(e.ontouchstart=function(l){l.targetTouches.length===1&&(Wt=l.targetTouches[0].clientY)},e.ontouchmove=function(l){l.targetTouches.length===1&&Rn(l,e)},dt||(document.addEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!0))}},Fn=function(){ut&&(He.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),dt&&(document.removeEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!1),Wt=-1),ut?fn():hn(),He=[]},Nn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}He=He.filter(function(t){return t.targetElement!==e}),ut&&(e.ontouchstart=null,e.ontouchmove=null,dt&&He.length===0&&(document.removeEventListener("touchmove",pt,kt?{passive:!1}:void 0),dt=!1)),ut?fn():hn()},Rt={},zn={get exports(){return Rt},set exports(i){Rt=i}},St={},Pt={},Bn={get exports(){return Pt},set exports(i){Pt=i}};(function(i){(function(e){if(typeof window>"u")return;var t=0,o=!1,l=!1,m="message",g=m.length,P="[iFrameSizer]",D=P.length,R=null,q=window.requestAnimationFrame,Ce={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},c={},ve=null,xe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){ie("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function J(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function ue(s,u,E){s.addEventListener(u,E,!1)}function We(s,u,E){s.removeEventListener(u,E,!1)}function Z(){var s=["moz","webkit","o","ms"],u;for(u=0;u<s.length&&!q;u+=1)q=window[s[u]+"RequestAnimationFrame"];q?q=q.bind(window):C("setup","RequestAnimationFrame not supported")}function V(s){var u="Host page: "+s;return window.top!==window.self&&(u=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+s:"Nested host page: "+s),u}function se(s){return P+"["+V(s)+"]"}function ze(s){return c[s]?c[s].log:o}function C(s,u){ye("log",s,u,ze(s))}function je(s,u){ye("info",s,u,ze(s))}function ie(s,u){ye("warn",s,u,!0)}function ye(s,u,E,k){k===!0&&typeof window.console=="object"&&console[s](se(u),E)}function rt(s){function u(){function p(){ae(L),he(T),ge("onResized",L)}j("Height"),j("Width"),we(p,L,"init")}function E(){var p=ne.substr(D).split(":"),_=p[1]?parseInt(p[1],10):0,d=c[p[0]]&&c[p[0]].iframe,a=getComputedStyle(d);return{iframe:d,id:p[0],height:_+k(a)+M(a),width:p[2],type:p[3]}}function k(p){if(p.boxSizing!=="border-box")return 0;var _=p.paddingTop?parseInt(p.paddingTop,10):0,d=p.paddingBottom?parseInt(p.paddingBottom,10):0;return _+d}function M(p){if(p.boxSizing!=="border-box")return 0;var _=p.borderTopWidth?parseInt(p.borderTopWidth,10):0,d=p.borderBottomWidth?parseInt(p.borderBottomWidth,10):0;return _+d}function j(p){var _=Number(c[T]["max"+p]),d=Number(c[T]["min"+p]),a=p.toLowerCase(),f=Number(L[a]);C(T,"Checking "+a+" is in range "+d+"-"+_),f<d&&(f=d,C(T,"Set "+a+" to min value")),f>_&&(f=_,C(T,"Set "+a+" to max value")),L[a]=""+f}function U(){function p(){function a(){var b=0,w=!1;for(C(T,"Checking connection is from allowed list of origins: "+d);b<d.length;b++)if(d[b]===_){w=!0;break}return w}function f(){var b=c[T]&&c[T].remoteHost;return C(T,"Checking connection is from: "+b),_===b}return d.constructor===Array?a():f()}var _=s.origin,d=c[T]&&c[T].checkOrigin;if(d&&""+_!="null"&&!p())throw new Error("Unexpected message received from: "+_+" for "+L.iframe.id+". Message was: "+s.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function me(){return P===(""+ne).substr(0,D)&&ne.substr(D).split(":")[0]in c}function re(){var p=L.type in{true:1,false:1,undefined:1};return p&&C(T,"Ignoring init message from meta parent page"),p}function ce(p){return ne.substr(ne.indexOf(":")+g+p)}function pe(p){C(T,"onMessage passed: {iframe: "+L.iframe.id+", message: "+p+"}"),ge("onMessage",{iframe:L.iframe,message:JSON.parse(p)}),C(T,"--")}function G(){var p=document.body.getBoundingClientRect(),_=L.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:_.height,iframeWidth:_.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(_.top-p.top,10),offsetLeft:parseInt(_.left-p.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Be(p,_){function d(){z("Send Page Info","pageInfo:"+G(),p,_)}ke(d,32,_)}function Re(){function p(f,b){function w(){c[a]?Be(c[a].iframe,a):_()}["scroll","resize"].forEach(function(O){C(a,f+O+" listener for sendPageInfo"),b(window,O,w)})}function _(){p("Remove ",We)}function d(){p("Add ",ue)}var a=T;d(),c[a]&&(c[a].stopPageInfo=_)}function Pe(){c[T]&&c[T].stopPageInfo&&(c[T].stopPageInfo(),delete c[T].stopPageInfo)}function Te(){var p=!0;return L.iframe===null&&(ie(T,"IFrame ("+L.id+") not found"),p=!1),p}function y(p){var _=p.getBoundingClientRect();return Ue(T),{x:Math.floor(Number(_.left)+Number(R.x)),y:Math.floor(Number(_.top)+Number(R.y))}}function S(p){function _(){R=b,B(),C(T,"--")}function d(){return{x:Number(L.width)+f.x,y:Number(L.height)+f.y}}function a(){window.parentIFrame?window.parentIFrame["scrollTo"+(p?"Offset":"")](b.x,b.y):ie(T,"Unable to scroll to requested position, window.parentIFrame not found")}var f=p?y(L.iframe):{x:0,y:0},b=d();C(T,"Reposition requested from iFrame (offset x:"+f.x+" y:"+f.y+")"),window.top!==window.self?a():_()}function B(){ge("onScroll",R)!==!1?he(T):Ze()}function X(p){function _(){var w=y(b);C(T,"Moving to in page link (#"+a+") at x: "+w.x+" y: "+w.y),R={x:w.x,y:w.y},B(),C(T,"--")}function d(){window.parentIFrame?window.parentIFrame.moveToAnchor(a):C(T,"In page link #"+a+" not found and window.parentIFrame not found")}var a=p.split("#")[1]||"",f=decodeURIComponent(a),b=document.getElementById(f)||document.getElementsByName(f)[0];b?_():window.top!==window.self?d():C(T,"In page link #"+a+" not found")}function te(p){var _={};if(Number(L.width)===0&&Number(L.height)===0){var d=ce(9).split(":");_={x:d[1],y:d[0]}}else _={x:L.width,y:L.height};ge(p,{iframe:L.iframe,screenX:Number(_.x),screenY:Number(_.y),type:L.type})}function ge(p,_){return Oe(T,p,_)}function nt(){switch(c[T]&&c[T].firstRun&&ot(),L.type){case"close":de(L.iframe);break;case"message":pe(ce(6));break;case"mouseenter":te("onMouseEnter");break;case"mouseleave":te("onMouseLeave");break;case"autoResize":c[T].autoResize=JSON.parse(ce(9));break;case"scrollTo":S(!1);break;case"scrollToOffset":S(!0);break;case"pageInfo":Be(c[T]&&c[T].iframe,T),Re();break;case"pageInfoStop":Pe();break;case"inPageLink":X(ce(9));break;case"reset":Me(L);break;case"init":u(),ge("onInit",L.iframe);break;default:Number(L.width)===0&&Number(L.height)===0?ie("Unsupported message received ("+L.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):u()}}function Ye(p){var _=!0;return c[p]||(_=!1,ie(L.type+" No settings for "+p+". Message was: "+ne)),_}function Je(){for(var p in c)z("iFrame requested init",$e(p),c[p].iframe,p)}function ot(){c[T]&&(c[T].firstRun=!1)}var ne=s.data,L={},T=null;ne==="[iFrameResizerChild]Ready"?Je():me()?(L=E(),T=L.id,c[T]&&(c[T].loaded=!0),!re()&&Ye(T)&&(C(T,"Received: "+ne),Te()&&U()&&nt())):je(T,"Ignored: "+ne)}function Oe(s,u,E){var k=null,M=null;if(c[s])if(k=c[s][u],typeof k=="function")M=k(E);else throw new TypeError(u+" on iFrame["+s+"] is not a function");return M}function qe(s){var u=s.id;delete c[u]}function de(s){var u=s.id;if(Oe(u,"onClose",u)===!1){C(u,"Close iframe cancelled by onClose event");return}C(u,"Removing iFrame: "+u);try{s.parentNode&&s.parentNode.removeChild(s)}catch(E){ie(E)}Oe(u,"onClosed",u),C(u,"--"),qe(s)}function Ue(s){R===null&&(R={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},C(s,"Get page position: "+R.x+","+R.y))}function he(s){R!==null&&(window.scrollTo(R.x,R.y),C(s,"Set page position: "+R.x+","+R.y),Ze())}function Ze(){R=null}function Me(s){function u(){ae(s),z("reset","reset",s.iframe,s.id)}C(s.id,"Size reset requested by "+(s.type==="init"?"host page":"iFrame")),Ue(s.id),we(u,s,"reset")}function ae(s){function u(j){if(!s.id){C("undefined","messageData id not set");return}s.iframe.style[j]=s[j]+"px",C(s.id,"IFrame ("+M+") "+j+" set to "+s[j]+"px")}function E(j){!l&&s[j]==="0"&&(l=!0,C(M,"Hidden iFrame detected, creating visibility listener"),et())}function k(j){u(j),E(j)}var M=s.iframe.id;c[M]&&(c[M].sizeHeight&&k("height"),c[M].sizeWidth&&k("width"))}function we(s,u,E){E!==u.type&&q&&!window.jasmine?(C(u.id,"Requesting animation frame"),q(s)):s()}function z(s,u,E,k,M){function j(){var pe=c[k]&&c[k].targetOrigin;C(k,"["+s+"] Sending msg to iframe["+k+"] ("+u+") targetOrigin: "+pe),E.contentWindow.postMessage(P+u,pe)}function U(){ie(k,"["+s+"] IFrame("+k+") not found")}function me(){E&&"contentWindow"in E&&E.contentWindow!==null?j():U()}function re(){function pe(){c[k]&&!c[k].loaded&&!ce&&(ce=!0,ie(k,"IFrame has not responded within "+c[k].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}M&&c[k]&&c[k].warningTimeout&&(c[k].msgTimeout=setTimeout(pe,c[k].warningTimeout))}var ce=!1;k=k||E.id,c[k]&&(me(),re())}function $e(s){return s+":"+c[s].bodyMarginV1+":"+c[s].sizeWidth+":"+c[s].log+":"+c[s].interval+":"+c[s].enablePublicMethods+":"+c[s].autoResize+":"+c[s].bodyMargin+":"+c[s].heightCalculationMethod+":"+c[s].bodyBackground+":"+c[s].bodyPadding+":"+c[s].tolerance+":"+c[s].inPageLinks+":"+c[s].resizeFrom+":"+c[s].widthCalculationMethod+":"+c[s].mouseEvents}function Ve(s){return typeof s=="number"}function Ae(s,u){function E(){function S(X){var te=c[y][X];te!==1/0&&te!==0&&(s.style[X]=Ve(te)?te+"px":te,C(y,"Set "+X+" = "+s.style[X]))}function B(X){if(c[y]["min"+X]>c[y]["max"+X])throw new Error("Value for min"+X+" can not be greater than max"+X)}B("Height"),B("Width"),S("maxHeight"),S("minHeight"),S("maxWidth"),S("minWidth")}function k(){var S=u&&u.id||xe.id+t++;return document.getElementById(S)!==null&&(S+=t++),S}function M(S){return S===""&&(s.id=S=k(),o=(u||{}).log,C(S,"Added missing iframe ID: "+S+" ("+s.src+")")),S}function j(){switch(C(y,"IFrame scrolling "+(c[y]&&c[y].scrolling?"enabled":"disabled")+" for "+y),s.style.overflow=(c[y]&&c[y].scrolling)===!1?"hidden":"auto",c[y]&&c[y].scrolling){case"omit":break;case!0:s.scrolling="yes";break;case!1:s.scrolling="no";break;default:s.scrolling=c[y]?c[y].scrolling:"no"}}function U(){(typeof(c[y]&&c[y].bodyMargin)=="number"||(c[y]&&c[y].bodyMargin)==="0")&&(c[y].bodyMarginV1=c[y].bodyMargin,c[y].bodyMargin=""+c[y].bodyMargin+"px")}function me(){var S=c[y]&&c[y].firstRun,B=c[y]&&c[y].heightCalculationMethod in Ce;!S&&B&&Me({iframe:s,height:0,width:0,type:"init"})}function re(){c[y]&&(c[y].iframe.iFrameResizer={close:de.bind(null,c[y].iframe),removeListeners:qe.bind(null,c[y].iframe),resize:z.bind(null,"Window resize","resize",c[y].iframe),moveToAnchor:function(S){z("Move to anchor","moveToAnchor:"+S,c[y].iframe,y)},sendMessage:function(S){S=JSON.stringify(S),z("Send Message","message:"+S,c[y].iframe,y)}})}function ce(S){function B(){z("iFrame.onload",S,s,e,!0),me()}function X(ge){if(s.parentNode){var nt=new ge(function(Ye){Ye.forEach(function(Je){var ot=Array.prototype.slice.call(Je.removedNodes);ot.forEach(function(ne){ne===s&&de(s)})})});nt.observe(s.parentNode,{childList:!0})}}var te=J();te&&X(te),ue(s,"load",B),z("init",S,s,e,!0)}function pe(S){if(typeof S!="object")throw new TypeError("Options is not an object")}function G(S){for(var B in xe)Object.prototype.hasOwnProperty.call(xe,B)&&(c[y][B]=Object.prototype.hasOwnProperty.call(S,B)?S[B]:xe[B])}function Be(S){return S===""||S.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":S}function Re(S){var B=S.split("Callback");if(B.length===2){var X="on"+B[0].charAt(0).toUpperCase()+B[0].slice(1);this[X]=this[S],delete this[S],ie(y,"Deprecated: '"+S+"' has been renamed '"+X+"'. The old method will be removed in the next major version.")}}function Pe(S){S=S||{},c[y]={firstRun:!0,iframe:s,remoteHost:s.src&&s.src.split("/").slice(0,3).join("/")},pe(S),Object.keys(S).forEach(Re,S),G(S),c[y]&&(c[y].targetOrigin=c[y].checkOrigin===!0?Be(c[y].remoteHost):"*")}function Te(){return y in c&&"iFrameResizer"in s}var y=M(s.id);Te()?ie(y,"Ignored iFrame, already setup."):(Pe(u),j(),E(),U(),ce($e(y)),re())}function fe(s,u){ve===null&&(ve=setTimeout(function(){ve=null,s()},u))}var Ie={};function ke(s,u,E){Ie[E]||(Ie[E]=setTimeout(function(){Ie[E]=null,s()},u))}function et(){function s(){function M(j){function U(re){return(c[j]&&c[j].iframe.style[re])==="0px"}function me(re){return re.offsetParent!==null}c[j]&&me(c[j].iframe)&&(U("height")||U("width"))&&z("Visibility change","resize",c[j].iframe,j)}Object.keys(c).forEach(function(j){M(j)})}function u(M){C("window","Mutation observed: "+M[0].target+" "+M[0].type),fe(s,16)}function E(){var M=document.querySelector("body"),j={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},U=new k(u);U.observe(M,j)}var k=J();k&&E()}function at(s){function u(){Se("Window "+s,"resize")}C("window","Trigger event: "+s),fe(u,16)}function tt(){function s(){Se("Tab Visable","resize")}document.visibilityState!=="hidden"&&(C("document","Trigger event: Visiblity change"),fe(s,16))}function Se(s,u){function E(k){return c[k]&&c[k].resizeFrom==="parent"&&c[k].autoResize&&!c[k].firstRun}Object.keys(c).forEach(function(k){E(k)&&z(s,u,c[k].iframe,k)})}function Ge(){ue(window,"message",rt),ue(window,"resize",function(){at("resize")}),ue(document,"visibilitychange",tt),ue(document,"-webkit-visibilitychange",tt)}function Le(){function s(k,M){function j(){if(M.tagName){if(M.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+M.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}M&&(j(),Ae(M,k),E.push(M))}function u(k){k&&k.enablePublicMethods&&ie("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var E;return Z(),Ge(),function(M,j){switch(E=[],u(M),typeof j){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(j||"iframe"),s.bind(e,M));break;case"object":s(M,j);break;default:throw new TypeError("Unexpected data type ("+typeof j+")")}return E}}function st(s){s.fn?s.fn.iFrameResize||(s.fn.iFrameResize=function(E){function k(M,j){Ae(j,E)}return this.filter("iframe").each(k).end()}):je("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&st(window.jQuery),typeof e=="function"&&e.amd?e([],Le):i.exports=Le(),window.iFrameResize=window.iFrameResize||Le()})()})(Bn);var Ft={},Dn={get exports(){return Ft},set exports(i){Ft=i}};(function(i){(function(e){if(typeof window>"u")return;var t=!0,o=10,l="",m=0,g="",P=null,D="",R=!1,q={resize:1,click:1},Ce=128,c=!0,ve=1,xe="bodyOffset",J=xe,ue=!0,We="",Z={},V=32,se=null,ze=!1,C=!1,je="[iFrameSizer]",ie=je.length,ye="",rt={max:1,min:1,bodyScroll:1,documentElementScroll:1},Oe="child",qe=window.parent,de="*",Ue=0,he=!1,Ze=null,Me=16,ae=1,we="scroll",z=we,$e=window,Ve=function(){E("onMessage function not defined")},Ae=function(){},fe=function(){},Ie={height:function(){return E("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return E("Custom width calculation function not defined"),document.body.scrollWidth}},ke={},et=!1;function at(){}try{var tt=Object.create({},{passive:{get:function(){et=!0}}});window.addEventListener("test",at,tt),window.removeEventListener("test",at,tt)}catch{}function Se(n,r,h,v){n.addEventListener(r,h,et?v||{}:!1)}function Ge(n,r,h){n.removeEventListener(r,h,!1)}function Le(n){return n.charAt(0).toUpperCase()+n.slice(1)}function st(n){var r,h,v,A=null,I=0,Q=function(){I=Date.now(),A=null,v=n.apply(r,h),A||(r=h=null)};return function(){var ee=Date.now();I||(I=ee);var H=Me-(ee-I);return r=this,h=arguments,H<=0||H>Me?(A&&(clearTimeout(A),A=null),I=ee,v=n.apply(r,h),A||(r=h=null)):A||(A=setTimeout(Q,H)),v}}function s(n){return je+"["+ye+"] "+n}function u(n){ze&&typeof window.console=="object"&&console.log(s(n))}function E(n){typeof window.console=="object"&&console.warn(s(n))}function k(){M(),u("Initialising iFrame ("+window.location.href+")"),U(),ce(),re("background",l),re("padding",D),X(),Pe(),Te(),pe(),nt(),ge(),y(),Z=te(),O("init","Init message from host page"),Ae()}function M(){function n(h){return h==="true"}var r=We.substr(ie).split(":");ye=r[0],m=e!==r[1]?Number(r[1]):m,R=e!==r[2]?n(r[2]):R,ze=e!==r[3]?n(r[3]):ze,V=e!==r[4]?Number(r[4]):V,t=e!==r[6]?n(r[6]):t,g=r[7],J=e!==r[8]?r[8]:J,l=r[9],D=r[10],Ue=e!==r[11]?Number(r[11]):Ue,Z.enable=e!==r[12]?n(r[12]):!1,Oe=e!==r[13]?r[13]:Oe,z=e!==r[14]?r[14]:z,C=e!==r[15]?Boolean(r[15]):C}function j(n){var r=n.split("Callback");if(r.length===2){var h="on"+r[0].charAt(0).toUpperCase()+r[0].slice(1);this[h]=this[n],delete this[n],E("Deprecated: '"+n+"' has been renamed '"+h+"'. The old method will be removed in the next major version.")}}function U(){function n(){var h=window.iFrameResizer;u("Reading data from page: "+JSON.stringify(h)),Object.keys(h).forEach(j,h),Ve="onMessage"in h?h.onMessage:Ve,Ae="onReady"in h?h.onReady:Ae,de="targetOrigin"in h?h.targetOrigin:de,J="heightCalculationMethod"in h?h.heightCalculationMethod:J,z="widthCalculationMethod"in h?h.widthCalculationMethod:z}function r(h,v){return typeof h=="function"&&(u("Setup custom "+v+"CalcMethod"),Ie[v]=h,h="custom"),h}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(n(),J=r(J,"height"),z=r(z,"width")),u("TargetOrigin for parent set to: "+de)}function me(n,r){return r.indexOf("-")!==-1&&(E("Negative CSS value ignored for "+n),r=""),r}function re(n,r){e!==r&&r!==""&&r!=="null"&&(document.body.style[n]=r,u("Body "+n+' set to "'+r+'"'))}function ce(){e===g&&(g=m+"px"),re("margin",me("margin",g))}function pe(){document.documentElement.style.height="",document.body.style.height="",u('HTML & body height set to "auto"')}function G(n){var r={add:function(h){function v(){O(n.eventName,n.eventType)}ke[h]=v,Se(window,h,v,{passive:!0})},remove:function(h){var v=ke[h];delete ke[h],Ge(window,h,v)}};n.eventNames&&Array.prototype.map?(n.eventName=n.eventNames[0],n.eventNames.map(r[n.method])):r[n.method](n.eventName),u(Le(n.method)+" event listener: "+n.eventType)}function Be(n){G({method:n,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),G({method:n,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),G({method:n,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),G({method:n,eventType:"Input",eventName:"input"}),G({method:n,eventType:"Mouse Up",eventName:"mouseup"}),G({method:n,eventType:"Mouse Down",eventName:"mousedown"}),G({method:n,eventType:"Orientation Change",eventName:"orientationchange"}),G({method:n,eventType:"Print",eventName:["afterprint","beforeprint"]}),G({method:n,eventType:"Ready State Change",eventName:"readystatechange"}),G({method:n,eventType:"Touch Start",eventName:"touchstart"}),G({method:n,eventType:"Touch End",eventName:"touchend"}),G({method:n,eventType:"Touch Cancel",eventName:"touchcancel"}),G({method:n,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),G({method:n,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),G({method:n,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),Oe==="child"&&G({method:n,eventType:"IFrame Resized",eventName:"resize"})}function Re(n,r,h,v){return r!==n&&(n in h||(E(n+" is not a valid option for "+v+"CalculationMethod."),n=r),u(v+' calculation method set to "'+n+'"')),n}function Pe(){J=Re(J,xe,a,"height")}function Te(){z=Re(z,we,f,"width")}function y(){t===!0?(Be("add"),ot()):u("Auto Resize disabled")}function S(){P!==null&&P.disconnect()}function B(){Be("remove"),S(),clearInterval(se)}function X(){var n=document.createElement("div");n.style.clear="both",n.style.display="block",n.style.height="0",document.body.appendChild(n)}function te(){function n(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function r(H){var $=H.getBoundingClientRect(),W=n();return{x:parseInt($.left,10)+parseInt(W.x,10),y:parseInt($.top,10)+parseInt(W.y,10)}}function h(H){function $(Ee){var ct=r(Ee);u("Moving to in page link (#"+W+") at x: "+ct.x+" y: "+ct.y),K(ct.y,ct.x,"scrollToOffset")}var W=H.split("#")[1]||H,F=decodeURIComponent(W),be=document.getElementById(F)||document.getElementsByName(F)[0];e!==be?$(be):(u("In page link (#"+W+") not found in iFrame, so sending to parent"),K(0,0,"inPageLink","#"+W))}function v(){var H=window.location.hash,$=window.location.href;H!==""&&H!=="#"&&h($)}function A(){function H($){function W(F){F.preventDefault(),h(this.getAttribute("href"))}$.getAttribute("href")!=="#"&&Se($,"click",W)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),H)}function I(){Se(window,"hashchange",v)}function Q(){setTimeout(v,Ce)}function ee(){Array.prototype.forEach&&document.querySelectorAll?(u("Setting up location.hash handlers"),A(),I(),Q()):E("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return Z.enable?ee():u("In page linking not enabled"),{findTarget:h}}function ge(){if(C!==!0)return;function n(h){K(0,0,h.type,h.screenY+":"+h.screenX)}function r(h,v){u("Add event listener: "+v),Se(window.document,h,n)}r("mouseenter","Mouse Enter"),r("mouseleave","Mouse Leave")}function nt(){u("Enable public methods"),$e.parentIFrame={autoResize:function(r){return r===!0&&t===!1?(t=!0,y()):r===!1&&t===!0&&(t=!1,B()),K(0,0,"autoResize",JSON.stringify(t)),t},close:function(){K(0,0,"close")},getId:function(){return ye},getPageInfo:function(r){typeof r=="function"?(fe=r,K(0,0,"pageInfo")):(fe=function(){},K(0,0,"pageInfoStop"))},moveToAnchor:function(r){Z.findTarget(r)},reset:function(){Y("parentIFrame.reset")},scrollTo:function(r,h){K(h,r,"scrollTo")},scrollToOffset:function(r,h){K(h,r,"scrollToOffset")},sendMessage:function(r,h){K(0,0,"message",JSON.stringify(r),h)},setHeightCalculationMethod:function(r){J=r,Pe()},setWidthCalculationMethod:function(r){z=r,Te()},setTargetOrigin:function(r){u("Set targetOrigin: "+r),de=r},size:function(r,h){var v=""+(r||"")+(h?","+h:"");O("size","parentIFrame.size("+v+")",r,h)}}}function Ye(){V!==0&&(u("setInterval: "+V+"ms"),se=setInterval(function(){O("interval","setInterval: "+V)},Math.abs(V)))}function Je(){function n(F){function be(Ee){Ee.complete===!1&&(u("Attach listeners to "+Ee.src),Ee.addEventListener("load",A,!1),Ee.addEventListener("error",I,!1),H.push(Ee))}F.type==="attributes"&&F.attributeName==="src"?be(F.target):F.type==="childList"&&Array.prototype.forEach.call(F.target.querySelectorAll("img"),be)}function r(F){H.splice(H.indexOf(F),1)}function h(F){u("Remove listeners from "+F.src),F.removeEventListener("load",A,!1),F.removeEventListener("error",I,!1),r(F)}function v(F,be,Ee){h(F.target),O(be,Ee+": "+F.target.src)}function A(F){v(F,"imageLoad","Image loaded")}function I(F){v(F,"imageLoadFailed","Image load failed")}function Q(F){O("mutationObserver","mutationObserver: "+F[0].target+" "+F[0].type),F.forEach(n)}function ee(){var F=document.querySelector("body"),be={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return W=new $(Q),u("Create body MutationObserver"),W.observe(F,be),W}var H=[],$=window.MutationObserver||window.WebKitMutationObserver,W=ee();return{disconnect:function(){"disconnect"in W&&(u("Disconnect body MutationObserver"),W.disconnect(),H.forEach(h))}}}function ot(){var n=0>V;window.MutationObserver||window.WebKitMutationObserver?n?Ye():P=Je():(u("MutationObserver not supported in this browser!"),Ye())}function ne(n,r){var h=0;return r=r||document.body,h=document.defaultView.getComputedStyle(r,null),h=h!==null?h[n]:0,parseInt(h,o)}function L(n){n>Me/2&&(Me=2*n,u("Event throttle increased to "+Me+"ms"))}function T(n,r){for(var h=r.length,v=0,A=0,I=Le(n),Q=Date.now(),ee=0;ee<h;ee++)v=r[ee].getBoundingClientRect()[n]+ne("margin"+I,r[ee]),v>A&&(A=v);return Q=Date.now()-Q,u("Parsed "+h+" HTML elements"),u("Element position calculated in "+Q+"ms"),L(Q),A}function p(n){return[n.bodyOffset(),n.bodyScroll(),n.documentElementOffset(),n.documentElementScroll()]}function _(n,r){function h(){return E("No tagged elements ("+r+") found on page"),document.querySelectorAll("body *")}var v=document.querySelectorAll("["+r+"]");return v.length===0&&h(),T(n,v)}function d(){return document.querySelectorAll("body *")}var a={bodyOffset:function(){return document.body.offsetHeight+ne("marginTop")+ne("marginBottom")},offset:function(){return a.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ie.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,p(a))},min:function(){return Math.min.apply(null,p(a))},grow:function(){return a.max()},lowestElement:function(){return Math.max(a.bodyOffset()||a.documentElementOffset(),T("bottom",d()))},taggedElement:function(){return _("bottom","data-iframe-height")}},f={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ie.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(f.bodyScroll(),f.documentElementScroll())},max:function(){return Math.max.apply(null,p(f))},min:function(){return Math.min.apply(null,p(f))},rightMostElement:function(){return T("right",d())},taggedElement:function(){return _("right","data-iframe-width")}};function b(n,r,h,v){function A(){ve=W,ae=F,K(ve,ae,n)}function I(){function be(Ee,ct){var Tn=Math.abs(Ee-ct)<=Ue;return!Tn}return W=e!==h?h:a[J](),F=e!==v?v:f[z](),be(ve,W)||R&&be(ae,F)}function Q(){return!(n in{init:1,interval:1,size:1})}function ee(){return J in rt||R&&z in rt}function H(){u("No change in size detected")}function $(){Q()&&ee()?Y(r):n in{interval:1}||H()}var W,F;I()||n==="init"?(x(),A()):$()}var w=st(b);function O(n,r,h,v){function A(){n in{reset:1,resetPage:1,init:1}||u("Trigger event: "+r)}function I(){return he&&n in q}I()?u("Trigger event cancelled: "+n):(A(),n==="init"?b(n,r,h,v):w(n,r,h,v))}function x(){he||(he=!0,u("Trigger event lock on")),clearTimeout(Ze),Ze=setTimeout(function(){he=!1,u("Trigger event lock off"),u("--")},Ce)}function N(n){ve=a[J](),ae=f[z](),K(ve,ae,n)}function Y(n){var r=J;J=xe,u("Reset trigger event: "+n),x(),N("reset"),J=r}function K(n,r,h,v,A){function I(){e===A?A=de:u("Message targetOrigin: "+A)}function Q(){var ee=n+":"+r,H=ye+":"+ee+":"+h+(e!==v?":"+v:"");u("Sending message to host page ("+H+")"),qe.postMessage(je+H,A)}I(),Q()}function Fe(n){var r={init:function(){We=n.data,qe=n.source,k(),c=!1,setTimeout(function(){ue=!1},Ce)},reset:function(){ue?u("Page reset ignored by init"):(u("Page size reset by host page"),N("resetPage"))},resize:function(){O("resizeParent","Parent window requested size check")},moveToAnchor:function(){Z.findTarget(A())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var W=A();u("PageInfoFromParent called from parent: "+W),fe(JSON.parse(W)),u(" --")},message:function(){var W=A();u("onMessage called from parent: "+W),Ve(JSON.parse(W)),u(" --")}};function h(){return je===(""+n.data).substr(0,ie)}function v(){return n.data.split("]")[1].split(":")[0]}function A(){return n.data.substr(n.data.indexOf(":")+1)}function I(){return!i.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function Q(){return n.data.split(":")[2]in{true:1,false:1}}function ee(){var $=v();$ in r?r[$]():!I()&&!Q()&&E("Unexpected message ("+n.data+")")}function H(){c===!1?ee():Q()?r.init():u('Ignored message of type "'+v()+'". Received before initialization.')}h()&&H()}function oe(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}Se(window,"message",Fe),Se(window,"readystatechange",oe),oe()})()})(Dn);var mn=Pt;St.iframeResize=mn;St.iframeResizer=mn;St.iframeResizerContentWindow=Ft;(function(i){i.exports=St})(zn);function Hn(i){const e=document.createElement("a");return e.href=i,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function Wn(i){const e=Hn(i),t=e.href.substr(0,e.href.length-e.hash.length),o=window.location.href.replace(/#.*$/,"");return e.hash&&t===o}function pn(i,e){const t=JSON.stringify(e);let o=0;if(t.length===0)return o;for(let l=0;l<t.length;l++){const m=t.charCodeAt(l);o=(o<<5)-o+m,o&=o}return`${i}-${o}`}function qn(i,e,t){const o=document.createElement("form"),l=document.createElement("input");return o.action=i,o.method="POST",o.target=t,e.forEach(([m,g])=>{l.name=m,l.value=g.toString(),o.appendChild(l.cloneNode())}),o.style.visibility="hidden",o}function Un(i){const e=i.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const o=e[t];if(o.hasAttribute&&o.hasAttribute("target")&&o!==document.body)return o}}function $n(i,e){if(i.hasAttribute("data-modal-post")){const t=i.getAttribute("data-modal-post");e.method="POST",e.body=t;const o=[];return new URL(`http://localhost/?${t}`).searchParams.forEach((l,m)=>{o.push([m,l])}),[o,e]}return[null,e]}function Vn(i,e,t,o,l){const m=document.createElement("toujou-modal"),g=document.createElement("iframe"),P=pn("iframe",e);if(m.id=i,g.name=P,document.body.appendChild(m),Wn(t)){const D=document.querySelector(t),R=D instanceof HTMLTemplateElement?document.importNode(D.content,!0).children:D.childNodes;D.title&&(m.title=D.title);for(let q=0;q<R.length;q++)m.appendChild(R[q])}else if(l&&o==="POST"){const D=qn(t,l,P);m.appendChild(D),m.appendChild(g),D.submit(),D.remove()}else o==="GET"&&(g.src=t,m.appendChild(g));return m}function Gn(i,e,t,o){const l=pn("toujou-modal",i),m=document.getElementById(l)||Vn(l,i,e,t,o);setTimeout(()=>{m.open()})}const Yn=i=>{if(i.metaKey||i.ctrlKey)return;const e=Un(i);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const t=e.getAttribute("href"),o=t.indexOf("?")!==-1?t.split("?")[0]+"?toujou-ajax-modal=1&"+t.split("?")[1]:t.indexOf("#")!==-1?t.split("#")[0]+"?toujou-ajax-modal=1#"+t.split("#")[1]:t+"?toujou-ajax-modal=1",[l,m]=$n(e,{src:o});Gn(m,o,l?"POST":"GET",l),i.preventDefault(),i.stopPropagation()}},Jn=Qe`
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

`,Xn={reserveScrollBarGap:!0},lt=[];function Kn(i){lt.forEach(e=>e.close()),lt.push(i)}function Qn(i){if(i===lt[lt.length-1]){lt.pop();const e=lt.pop();e&&e.open()}}class Nt extends Ne{static get is(){return"toujou-modal"}render(){return le`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?le`
                    <button id="dog-ear-close" dialog-dismiss></button>`:le`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(t=>{t[0]&&this.onPosition(t[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Fn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Pn(this.$.scroller,Xn),Kn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Qn(this),this.allowOutsideScroll?document.body.style.position="":Nn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const t=e.composedPath();(!t.includes(this.$.modalContent)||t.some(o=>o instanceof HTMLElement&&o.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const t=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=t?`${t}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(t=>t instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((t,o)=>{e.includes(o)||this.iframeResizerMap.delete(o)}),e.forEach(t=>{this.loading=!0,t.addEventListener("load",()=>{this.iframeResizerMap.has(t)||this.listenToIframeReadyState(t)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let t={};try{t=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(o){(console.error||console.log).call(console,o.stack||o)}return t.initCallback=()=>{this.loading=!1},t.closedCallback=()=>{this.close()},Rt.iframeResizer(t,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Ut(Nt,"styles",[Jn]);customElements.define(Nt.is,Nt);document.addEventListener("click",Yn);var vt,yt,wt;(function(i){i.PRIMARY="primary",i.SECONDARY="secondary",i.FONT="font"})(vt||(vt={})),function(i){i.DEFAULT="default",i.BORDER="border",i.GHOST="ghost"}(yt||(yt={})),function(i){i.TINY="tiny",i.SMALL="small",i.NORMAL="normal",i.LARGE="large"}(wt||(wt={}));let Zn=class extends HTMLButtonElement{constructor(){super(),this.defaultButtonVariant=vt.PRIMARY,this.defaultButtonType=yt.DEFAULT,this.defaultButtonSize=wt.NORMAL}connectedCallback(){this._checkRequiredAttributes()}_checkRequiredAttributes(){const e=this.getAttribute("button-variant");e?Object.values(vt).includes(e)||(console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`),this.setAttribute("button-variant",this.defaultButtonVariant)):this.setAttribute("button-variant",this.defaultButtonVariant);const t=this.getAttribute("button-size");t?Object.values(wt).includes(t)||(console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`),this.setAttribute("button-size",this.defaultButtonSize)):this.setAttribute("button-size",this.defaultButtonSize);const o=this.getAttribute("button-type");o?Object.values(yt).includes(o)||(console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`),this.setAttribute("button-type",this.defaultButtonType)):this.setAttribute("button-type",this.defaultButtonType)}};customElements.define("toujou-button",Zn,{extends:"button"});var zt,bt,gn;let De=class extends Ne{get result(){const e=Math.round(this.duration);return e===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:e===1?`1 ${this.minutesSingularText}`:`${e} ${this.minutesPluralText}`}render(){return le`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),zt.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,bt.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=Et(this,zt,"m",gn).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(Et(this,bt,"f")):document.addEventListener("DOMContentLoaded",Et(this,bt,"f"))}updated(e){e.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};bt=new WeakMap,zt=new WeakSet,gn=function(i){const e=i.textContent,t=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),o=t==null?void 0:t.trim(),l=o==null?void 0:o.split(" ");return(l==null?void 0:l.length)||0},_e([Xe({type:Number})],De.prototype,"wordCount",void 0),_e([Xe({type:Number})],De.prototype,"duration",void 0),_e([Xe({type:String,attribute:"target-selector"})],De.prototype,"targetSelector",void 0),_e([Xe({type:String,attribute:"minutes-singular-text"})],De.prototype,"minutesSingularText",void 0),_e([Xe({type:String,attribute:"minutes-plural-text"})],De.prototype,"minutesPluralText",void 0),_e([Xe({type:String,attribute:"less-than-text"})],De.prototype,"lessThanText",void 0),_e([Xe({type:Number,attribute:"reading-speed"})],De.prototype,"readingSpeed",void 0),De=_e([Ht("toujou-estimated-reading-time")],De);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Gt,_t,Ct,eo=Qe(Gt||(_t=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],Ct||(Ct=_t.slice(0)),Gt=Object.freeze(Object.defineProperties(_t,{raw:{value:Object.freeze(Ct)}}))));let xt=class extends Ne{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return le`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&xn(this._messageTemplate(le,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Yt(i){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:i},window.location.origin),!0):(new URL(i).hostname===window.location.hostname?window.location.href=i:(e.targetUrl=i,e.open()),!0):!1}xt.styles=[eo],xt=_e([Ht("exit-warning")],xt),document.addEventListener("click",function(i){if(i.metaKey||i.ctrlKey)return;const e=function(t){const o=t.composedPath();for(let l=0;l<o.indexOf(document.body);l++){const m=o[l];if(m.hasAttribute&&m.hasAttribute("target")&&m!==document.body)return m}}(i);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Yt(e.getAttribute("href"))&&(i.preventDefault(),i.stopPropagation())}),window.addEventListener("message",function(i){i.origin===window.location.origin&&i.data.action!==void 0&&i.data.action==="toujou-exit-warning"&&i.data.targetUrl&&Yt(i.data.targetUrl)});let Jt=class extends Ne{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return le`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const t=document.importNode(e.content,!0);e.parentNode.insertBefore(t,e)})}};customElements.define(Jt.is,Jt);var Xt,jt,Ot,to=Qe(Xt||(jt=[`:host {
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
`],Ot||(Ot=jt.slice(0)),Xt=Object.freeze(Object.defineProperties(jt,{raw:{value:Object.freeze(Ot)}}))));let Kt=class extends Ne{static get is(){return"toujou-snackbar"}render(){return le`
      <p class="snackbar__message">${this.message}</p>
      <button
        class="snackbar__button"
        @click="${this._handleButtonClick}"
        aria-label="${this.buttonAriaLabel}"
      >${this.buttonText}</button>
    `}static get styles(){return[to]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String},buttonAriaLabel:{type:String,attribute:"button-aria-label"}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],this.buttonAriaLabel="Close the snackbar",window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define(Kt.is,Kt);var Qt,Mt,At,no=Qe(Qt||(Mt=[`* {
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
`],At||(At=Mt.slice(0)),Qt=Object.freeze(Object.defineProperties(Mt,{raw:{value:Object.freeze(At)}}))));class Zt extends Ne{static get is(){return"toujou-spinner"}static get styles(){return no}render(){return le`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(Zt.is,Zt);var en,It,Lt,oo=Qe(en||(It=[` .open-button {
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
`],Lt||(Lt=It.slice(0)),en=Object.freeze(Object.defineProperties(It,{raw:{value:Object.freeze(Lt)}}))));let gt=class extends Ne{constructor(){super(...arguments),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=e=>{e.preventDefault(),e.stopPropagation()},this.handleToggleClick=()=>{this.isOpen=!this.isOpen}}render(){return le`
            <slot name="open-button" class="open-button"  @click="${this.handleToggleClick}"></slot>
            <slot name="close-button" class="close-button" @click="${this.handleToggleClick}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}updated(e){var t,o;e.has("isOpen")&&(this.isOpen?(t=this.parentElement)===null||t===void 0||t.setAttribute(this.isOpenParentAttribute,""):(o=this.parentElement)===null||o===void 0||o.removeAttribute(this.isOpenParentAttribute))}};gt.styles=[oo],_e([Xe({type:Boolean,reflect:!0,attribute:"open"})],gt.prototype,"isOpen",void 0),gt=_e([Ht("toujou-media-info")],gt);/*!
  * Cookie-store v4.0.0-next.4
  * https://github.com/markcellus/cookie-store
  *
  * Copyright (c) 2023 Mark
  * Licensed under the MIT license
 */const io=decodeURIComponent,ro=/; */;function ao(i,e){try{return typeof e=="boolean"?decodeURIComponent(i):e(i)}catch{return i}}var Ke;(function(i){i.strict="strict",i.lax="lax",i.none="none"})(Ke||(Ke={}));function so(i,e={}){if(typeof i!="string")throw new TypeError("argument str must be a string");const t=[],o=e||{},l=i.split(ro),m=o.decode||io;for(let g=0;g<l.length;g++){const P=l[g];let D=P.indexOf("=");if(D<0)continue;const R=P.substr(0,D).trim();let q=P.substr(++D,P.length).trim();q[0]=='"'&&(q=q.slice(1,-1)),t[R]==null&&t.push({name:R,value:ao(q,m)})}return t}class co extends Event{constructor(e,t={changed:[],deleted:[]}){super(e,t),this.changed=t.changed||[],this.deleted=t.deleted||[]}}class lo extends EventTarget{constructor(){throw super(),new TypeError("Illegal Constructor")}get[Symbol.toStringTag](){return"CookieStore"}async get(e){if(e==null)throw new TypeError("CookieStoreGetOptions must not be empty");if(e instanceof Object&&!Object.keys(e).length)throw new TypeError("CookieStoreGetOptions must not be empty");return(await this.getAll(e))[0]}async set(e,t){var o,l,m;const g={name:"",value:"",path:"/",secure:!1,sameSite:Ke.strict,expires:null,domain:null};if(typeof e=="string")g.name=e,g.value=t;else{if(Object.assign(g,e),g.path&&!g.path.startsWith("/"))throw new TypeError('Cookie path must start with "/"');if(!((o=g.domain)===null||o===void 0)&&o.startsWith("."))throw new TypeError('Cookie domain cannot start with "."');if(g.domain&&g.domain!==window.location.hostname)throw new TypeError("Cookie domain must domain-match current host");if(!((l=g.name)===null||l===void 0)&&l.startsWith("__Host")&&g.domain)throw new TypeError("Cookie domain must not be specified for host cookies");if(!((m=g.name)===null||m===void 0)&&m.startsWith("__Host")&&g.path!="/")throw new TypeError("Cookie path must not be specified for host cookies");g.path&&g.path.endsWith("/")&&(g.path=g.path.slice(0,-1)),g.path===""&&(g.path="/")}if(g.name===""&&g.value&&g.value.includes("="))throw new TypeError("Cookie value cannot contain '=' if the name is empty");g.name&&g.name.startsWith("__Host")&&(g.secure=!0);let P=`${g.name}=${encodeURIComponent(g.value)}`;switch(g.domain&&(P+="; Domain="+g.domain),g.path&&(P+="; Path="+g.path),typeof g.expires=="number"?P+="; Expires="+new Date(g.expires).toUTCString():g.expires instanceof Date&&(P+="; Expires="+g.expires.toUTCString()),(g.name&&g.name.startsWith("__Secure")||g.secure)&&(g.sameSite=Ke.lax,P+="; Secure"),g.sameSite){case Ke.lax:P+="; SameSite=Lax";break;case Ke.strict:P+="; SameSite=Strict";break;case Ke.none:P+="; SameSite=None";break}const D=this.get(g);if(document.cookie=P,this.onchange){const R=[],q=[];D&&!await this.get(g)?q.push({...g,value:void 0}):R.push(g);const Ce=new co("change",{changed:R,deleted:q});this.onchange(Ce)}}async getAll(e){const t=so(document.cookie);if(e==null||Object.keys(e).length===0)return t;let o,l;if(typeof e=="string"?o=e:(o=e.name,l=e.url),l){const m=new URL(l,window.location.origin);if(window.location.href!==m.href||window.location.origin!==m.origin)throw new TypeError("URL must match the document URL");return t.slice(0,1)}return t.filter(m=>m.name===o)}async delete(e){const t={name:"",value:"",path:"/",secure:!1,sameSite:Ke.strict,expires:null,domain:null};typeof e=="string"?t.name=e:Object.assign(t,e),t.expires=0,await this.set(t)}}const ht=new WeakMap,Bt=new WeakMap;class uo{get[Symbol.toStringTag](){return"CookieStoreManager"}constructor(){throw new TypeError("Illegal Constructor")}async subscribe(e){const t=ht.get(this)||[],o=Bt.get(this);if(!o)throw new TypeError("Illegal invocation");for(const l of e){const m=l.name,g=new URL(l.url||"",o.scope).toString();t.some(P=>P.name===m&&P.url===g)||t.push({name:l.name,url:g})}ht.set(this,t)}async getSubscriptions(){return(ht.get(this)||[]).map(({name:e,url:t})=>({name:e,url:t}))}async unsubscribe(e){let t=ht.get(this)||[];const o=Bt.get(this);if(!o)throw new TypeError("Illegal invocation");for(const l of e){const m=l.name,g=new URL(l.url||"",o.scope).toString();t=t.filter(P=>P.name!==m||P.url!==g)}ht.set(this,t)}}"cookies"in ServiceWorkerRegistration.prototype||Object.defineProperty(ServiceWorkerRegistration.prototype,"cookies",{configurable:!0,enumerable:!0,get(){const i=Object.create(uo.prototype);return Bt.set(i,this),Object.defineProperty(this,"cookies",{value:i}),i}});const Dt=Object.create(lo.prototype);function qt(i,e){return e||(e=i.slice(0)),Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(e)}}))}var tn,nn,ho=Qe(tn||(tn=qt([`:host {
    display: var(--toujou-consent-display, block);
}`])));class on extends Ne{static get is(){return"toujou-consent"}render(){return le`
      <slot id="content"></slot>
    `}static get styles(){return ho}static get properties(){return{consentState:{type:Boolean},listenTo:{type:String},listenOn:{type:String}}}set consentState(e){this.consentInputType==="checkbox"&&(this.querySelector(".consent__checkbox").checked=e)}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}constructor(){super(),this._handleEvent=this._handleEvent.bind(this),this.listenOn="*",this._consentType=this.getAttribute("consenttype"),this._getConsentInputType(),this.consentState=null}connectedCallback(){super.connectedCallback()}_handleEvent(e){e.type==="click"?this._dispatchClickEvent():e.type==="change"&&this._dispatchChangeEvent()}firstUpdated(){this._dispatchReadyEvent()}_dispatchChangeEvent(){const e=new CustomEvent("toujou-consent-checkbox-changed",{bubbles:!0,composed:!0,detail:{consentElement:this}});this.dispatchEvent(e)}_dispatchClickEvent(){const e=new CustomEvent("toujou-consent-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchReadyEvent(){const e=new CustomEvent("toujou-consent-connected",{bubbles:!0,composed:!0,detail:{consentType:this._consentType}});this.dispatchEvent(e)}_getConsentInputType(){const e=this.querySelectorAll(".consent__checkbox"),t=this.querySelectorAll(".consent__button");e.length>0?this.consentInputType="checkbox":t.length>0&&(this.consentInputType="button")}}customElements.define(on.is,on);var fo=Qe(nn||(nn=qt([`:host {
    display: var(--toujou-consent-widget-display, block);
}

`])));const bn={setItem(i,e){document.cookie=`${i}=${e};path=/;`},getItem(i){const e=`${i}=`,t=document.cookie.split(";");for(let o=0,l=t.length;o<l;o++){let m=t[o];for(;m.charAt(0)===" ";)m=m.substring(1,m.length);if(m.indexOf(e)===0)return m.substring(e.length,m.length)}return null}},rn=(i,e,t)=>{try{const o=JSON.stringify(i);return void e.setItem(t,o)}catch(o){console.error(`There was an error while saving the consents data to storage: Error: ${o}`)}},an=(i,e)=>{try{const t=i.getItem(e);return t===null?{}:JSON.parse(t)}catch(t){return console.error(`There was a problem loading the consents data from storage. Error: ${t}`),{}}},mo=i=>{const e={},t={};for(const o in i)o==="consentBoxDismissed"?t[o]=i[o]:o==="tracking"&&i[o].consentLifetime===0?e[o]=i[o]:o==="tracking"&&i[o].consentLifetime>0?t[o]=i[o]:i[o].consentLifetime===0?e[o]=i[o]:i[o].consentLifetime>0&&(t[o]=i[o]);rn({consents:e},bn,"consentsState"),rn({consents:t},localStorage,"consentsState")},vn="CLEAR_CONSENT_TYPE_DATA",yn="SAVE_ALL_CONSENTS",wn="SAVE_SINGLE_CONSENT",kn="DISMISS_CONSENT_BOX",Sn="UNDISMISS_CONSENT_BOX",po={consents:{consentBoxDismissed:!1}};let sn=!1;function go(i=po,e){const t=function(o,l){switch(l.type){case vn:{const m={...o.consents};return delete m[l.payload],{...o,consents:m}}case yn:{const m={...o.consents,...l.payload};return{...o,consents:m}}case wn:{const m={...o.consents};return m[l.payload.consentType]={...l.payload.consentData},{...o,consents:m}}case kn:{const m={...o.consents};return m.consentBoxDismissed=!0,{...o,consents:m}}case Sn:{const m={...o.consents};return m.consentBoxDismissed=!1,{...o,consents:m}}}return o}(i,e);return(o=>{for(const l in o){if(l!=="consents")return void console.error('Unknown data "key" found while saving to session / local Storage');mo(o.consents)}})(t),typeof window.dataLayer=="object"&&(!sn||t.consents.consentBoxDismissed!==void 0&&t.consents.consentBoxDismissed)&&(window.dataLayer.push({event:"consent-changed",...t.consents}),sn=!0),t}const Tt=function(){const i=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):jn)(),e=(()=>{const t=an(bn,"consentsState"),o=an(localStorage,"consentsState");return{consents:{...t.consents,...o.consents}}})();return On(go,e,i)}();class cn extends Ne{static get is(){return"toujou-consent-widget"}render(){return le`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `}static get styles(){return fo}set _warningVisible(e){this.setAttribute("warningvisible",e)}static get properties(){return{inPage:{type:Boolean},listenTo:{type:String},listenOn:{type:String},_warningVisible:{type:Boolean},deactivated:{type:Boolean}}}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}set _dismissedBox(e){this.inPage||(e?this.setAttribute("hidden",""):this.removeAttribute("hidden")),this._warningVisible=this.inPage&&!e}constructor(){super(),this.inPage=!1,this.deactivated=!1,this.consentTypeNames=["tracking","html","maps","video"],this.listenOn="*",this.onStateChange=this.onStateChange.bind(this),this._handleEvent=this._handleEvent.bind(this),this.store=Tt,this.store.subscribe(this.onStateChange),this.consentTypeNames=["tracking","html","maps","video"],this._state=this.store.getState(),this._warningVisible=this.inPage,window.location.hash==="#aaa"&&(this.deactivated=!0),this.addEventListener("toujou-consent-connected",this._handleConsentConnected),this.addEventListener("toujou-consent-checkbox-changed",this._handleConsentCheckboxChanged)}connectedCallback(){super.connectedCallback(),this._dismissedBox=!!this._state.consents&&this._state.consents.consentBoxDismissed,this.deactivated?setTimeout(()=>{this._prepareToSaveConsents(),this._dismissConsentBox(),this._dispatchConsentDeactivated()}):setTimeout(()=>{const e=this.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length>0&&e[0].focus()})}firstUpdated(){this.consentTypeNames.forEach(e=>{const t=this.querySelector(`toujou-consent[consenttype="${e}"]`);this._state.consents.consentBoxDismissed&&!this._state.consents[e]&&t&&this._undismissConsentBox()})}onStateChange(){this._state=this.store.getState(),this._dismissedBox=this._state.consents.consentBoxDismissed,this._updateAllConsentElementsStates()}_handleEvent(e){e.stopPropagation(),e.type==="click"&&!this.inPage&&e.target.matches(this.listenOn)&&this._handleConsentBoxSaveButtonClick(e.target)}_handleConsentCheckboxChanged(e){this.inPage&&this._state.consents.consentBoxDismissed===!0&&(this._prepareToSaveConsents(),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))}_handleConsentBoxSaveButtonClick(e){e.hasAttribute("accept-all")?this._prepareToSaveConsents(!0):e.hasAttribute("deny-all")?this._prepareToSaveConsents(!1):this._prepareToSaveConsents(null),this._dismissConsentBox()}_prepareToSaveConsents(e=null){const t=this._getAllConsents(e);this._saveAllConsents(t)}_getAllConsents(e=null){const t={},o=this.querySelectorAll("toujou-consent");return o&&o.forEach(l=>{const m=l.getAttribute("consenttype");t[m]=this._createNewConsentData(l,e)}),t}_createNewConsentData(e,t=null){const o=e.querySelector(".consent__checkbox");t!==null&&(o.checked=t);const l=this._createConsentLifeInMillis(e.getAttribute("consenttype"),e.getAttribute("consentlifetime"));return{consentGiven:o.checked,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+l,consentLifetime:l}}_createConsentLifeInMillis(e,t){return e==="tracking"?t==="0"?63072e6:0:24*t*60*60}_dismissConsentBox(){this.store.dispatch({type:kn}),this._dispatchConsentWidgetDismissedEvent()}_undismissConsentBox(){this.store.dispatch({type:Sn})}_saveAllConsents(e){this.store.dispatch((t=>({type:yn,payload:t}))(e))}_handleConsentConnected(e){this._setConsentElementState(e.target)}_setConsentElementState(e){if(e.tagName==="TOUJOU-CONSENT"){const t=e.getAttribute("consenttype"),o=e.getAttribute("prechecked")==="1";e.consentState=this._getConsentTypeState(this._state,t,o)}}_updateAllConsentElementsStates(){this.querySelectorAll("toujou-consent").forEach(e=>{this._setConsentElementState(e)})}_getConsentTypeState(e,t,o){let l=null;return l=e&&e.consents&&e.consents[t]?e.consents[t]:null,l?l&&this._isConsentExpired(l)?(this.store.dispatch((m=>({type:vn,payload:m}))(t)),this._dispatchConsentExpiredEvent(t),this._undismissConsentBox(),o):l&&!this._isConsentExpired(l)?l.consentGiven:l:o}_isConsentExpired(e){return e.consentCreationDate+e.consentLifetime>e.consentExpirationDate}_dispatchConsentExpiredEvent(e){const t=new CustomEvent("toujou-consent-expired",{bubbles:!0,composed:!0,detail:{consentType:e}});this.dispatchEvent(t)}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_dispatchConsentWidgetDismissedEvent(){const e=new CustomEvent("toujou-consent-widget-dismissed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchConsentDeactivated(){const e=new CustomEvent("toujou-consent-widget-deactivated",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}customElements.define(cn.is,cn);class bo extends HTMLElement{get analyticsid(){return this.getAttribute("analyticsid")}constructor(){super(),this.hidden=!0,this.style.display="contents",this.onStateChange=this.onStateChange.bind(this),this.store=Tt,this.store.subscribe(this.onStateChange),this.consentState=this.store.getState().consents.tracking}connectedCallback(){this._handleConsentState(this.consentState),this._storeUnsubscribe=this.store.subscribe(this.onStateChange)}disconnectedCallback(){this._storeUnsubscribe&&this._storeUnsubscribe()}onStateChange(){this.consentState=this.store.getState().consents.tracking||null,this._handleConsentState(this.consentState)}_handleConsentState(e){typeof e=="object"&&e!==null&&e.consentGiven?this._instantiateGoogleAnalytics(e):this._removeGoogleAnalyticsCookies()}_instantiateGoogleAnalytics(e){if(this.gaIsInstantiated)return;const t=this.analyticsid;window[`ga-disable-${t}`]=!1;const o={cookie_expires:e.consentExpirationDate,anonymize_ip:!0};function l(...m){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],window.gtag=l,this._ga||(this._ga=this._addAnalyticsScriptTag(t),l("js",new Date)),l("config",t,o),this.gaIsInstantiated=!0,this._dispatchGtagLoadedEvent()}_addAnalyticsScriptTag(e){const t=`https://www.googletagmanager.com/gtag/js?id=${e}`,o=document.createElement("script"),l=document.getElementsByTagName("script")[0];return o.async=!0,o.src=t,l.parentNode.insertBefore(o,l),!0}_removeGoogleAnalyticsCookies(){["_ga","_gid","_gat"].forEach(e=>{Dt.delete(e)}),window[`ga-disable-${this.analyticsid}`]=!0,this.gaIsInstantiated=!1}_dispatchGtagLoadedEvent(){const e=new CustomEvent("toujou-gtag-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}customElements.define("toujou-tracking-google-analytics",bo);class vo extends HTMLElement{get url(){return this.getAttribute("url").replace(/^\/\//,`${window.location.protocol}//`)}get siteid(){return this.getAttribute("siteid")}constructor(){super(),this.hidden=!0,this.style.display="contents",this.onStateChange=this.onStateChange.bind(this),this.store=Tt,this.store.subscribe(this.onStateChange),this.consentState=this.store.getState().consents.tracking}connectedCallback(){this._handleConsentState(this.consentState),this._storeUnsubscribe=this.store.subscribe(this.onStateChange)}disconnectedCallback(){this._storeUnsubscribe&&this._storeUnsubscribe()}onStateChange(){this.consentState=this.store.getState().consents.tracking||null,this._handleConsentState(this.consentState)}_handleConsentState(e){typeof e=="object"&&e!==null&&e.consentGiven?this._instantiateMatomo(e):this._disableMatomoTracking()}_instantiateMatomo(e){if(this.matomoIsInstantiated)return;const t=new URL(this.url),o=new URL(t);o.pathname="/matomo.php";const l=new URL(t);l.pathname="/matomo.js",window._paq=window._paq||[];const{_paq:m}=window;m.push(["requireConsent"]),m.push(["trackPageView"]),m.push(["enableLinkTracking"]),m.push(["setTrackerUrl",o.toString()]),m.push(["setSiteId",this.siteid]),e.consentLifetime===0?m.push(["setConsentGiven"]):m.push(["rememberConsentGiven",e.consentLifetime/1e3/60/60]),this._matomo||(this._matomo=this._addMatomoScriptTag(l)),this.matomoIsInstantiated=!0,this._dispatchMatomoLoadedEvent()}_addMatomoScriptTag(e){const t=document.createElement("script"),o=document.getElementsByTagName("script")[0];return t.async=!0,t.src=e.toString(),o.parentNode.insertBefore(t,o),!0}_disableMatomoTracking(){if(this.matomoIsInstantiated){window._paq=window._paq||[];const{_paq:e}=window;e.push(["forgetConsentGiven"])}Dt.getAll().then(e=>e.forEach(t=>{t.name.match(/^_pk.*$/)&&Dt.delete(t.name)})),this.matomoIsInstantiated=!1}_dispatchMatomoLoadedEvent(){const e=new CustomEvent("toujou-matomo-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}var ln;customElements.define("toujou-tracking-matomo",vo);var yo=Qe(ln||(ln=qt([`:host {
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
`])));class un extends Ne{static get is(){return"toujou-third-party-content"}static get styles(){return yo}render(){return le`
      <slot id="templatedContent" @slotchange="${this._handleSlotChange}"></slot>
      <div @click="${this._handlePlaceholderClick}">
        <slot name="placeholder" id="placeholderContainer" class="placeholder-slot"></slot>
      </div>
    `}static get properties(){return{contentType:{type:String},contentTypeAllowed:{type:Boolean},contentID:{type:String},isIntersecting:{type:Boolean},show:{type:Boolean}}}constructor(){super(),this.contentTypeAllowed=!1,this.isIntersecting=!1,this.show=!1,this.onStateChange=this.onStateChange.bind(this),this._handleConsentButtonClick=this._handleConsentButtonClick.bind(this),this.store=Tt,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}connectedCallback(){super.connectedCallback(),this._isContentTypeAllowed(),this._checkIfShouldShow(),this._addEventListeners(),this._addIntersectionObserver()}updated(e){e.forEach((t,o)=>{o==="isIntersecting"&&this.isIntersecting&&!this.show&&(this.show=!0,this._checkIfShouldShow())})}onStateChange(){this._state=this.store.getState(),this._isContentTypeAllowed(),this._checkIfShouldShow()}_addEventListeners(){window.addEventListener("toujou-consent-widget-dismissed",()=>{this._isContentTypeAllowed(),this._checkIfShouldShow()}),window.addEventListener("toujou-consent-button-clicked",this._handleConsentButtonClick)}_handleConsentButtonClick(e){const t=e.target;this.querySelectorAll(".consent").forEach(o=>{o===t&&(this._saveSingleConsent(e.target.getAttribute("consenttype"),this._createNewConsentData(e.target)),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))})}_createNewConsentData(e){const t=24*e.getAttribute("consentLifetime")*60*60;return{consentGiven:!0,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+t,consentLifetime:t}}_saveSingleConsent(e,t){this.store.dispatch(((o,l)=>({type:wn,payload:{consentType:o,consentData:l}}))(e,t))}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_handlePlaceholderClick(e){e.target.hasAttribute("ttpc-showcontentonce")&&this._handleShowContentOnceClick()}_handleShowContentOnceClick(){this._showContent()}_addIntersectionObserver(){new IntersectionObserver((e,t)=>{this.isIntersecting=e[0].isIntersecting,this.isIntersecting&&t.unobserve(this)}).observe(this)}_appendNonScriptTag(e){this.querySelector(".toujou-third-party-content__templated-content").appendChild(e)}_appendScriptTag(e){const t=document.createElement("script"),o=this._copyScriptAttributesAndContent(e,t);return this.querySelector(".toujou-third-party-content__templated-content").appendChild(o),!o.hasAttribute("src")||o.hasAttribute("async")||o.hasAttribute("defer")?new Promise(l=>{l()}):new Promise(l=>{o.addEventListener("load",l)})}async _appendTags(e){for(let t=0;t<e.length;t++)await new Promise(o=>{e[t].tagName!=="SCRIPT"?o(this._appendNonScriptTag(e[t])):o(this._appendScriptTag(e[t]))})}_checkIfShouldShow(){this.contentTypeAllowed&&this.show&&this._showContent()}_clearRenderedContent(){this.querySelector(".toujou-third-party-content__templated-content").innerHTML=""}_copyScriptAttributesAndContent(e,t){for(let o=0;o<e.attributes.length;o++){const l=e.attributes[o];t.setAttribute(l.name,l.value)}return t.innerHTML=e.innerHTML,t}_getTemplateTags(e){const t=[],o=document.createElement("div");o.innerHTML=e;for(const l in o.childNodes)o.childNodes[l].nodeType!==3&&o.childNodes[l].parentElement===o&&t.push(o.childNodes[l]);return t}_handleSlotChange(){this._checkIfShouldShow()}_isCommentedTemplate(e){return e.startsWith("<!--")&&e.endsWith("-->")}_isContentTypeAllowed(){this._state.consents[this.contentType]?this.contentTypeAllowed=this._state.consents[this.contentType].consentGiven||!1:this.contentTypeAllowed=!1,window.location.hash==="#aaa"&&(this.contentTypeAllowed=!0)}_showContent(){this._clearRenderedContent(),this.shadowRoot.querySelector("#templatedContent").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE").forEach(e=>{if(this.contentType==="html"){const t=this._uncommentTemplate(e),o=this._getTemplateTags(t);this._appendTags(o)}else{const t=document.importNode(e.content,!0);this.querySelector(".toujou-third-party-content__templated-content").appendChild(t)}}),this.setAttribute("showingcontent","")}_uncommentTemplate(e){return this._isCommentedTemplate(e.innerHTML)?e.innerHTML.substr(4,e.innerHTML.length-7):null}}customElements.define(un.is,un);
//# sourceMappingURL=base.js.map
