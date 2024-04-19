var tn=Object.defineProperty;var nn=(s,e,a)=>e in s?tn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Pt=(s,e,a)=>(nn(s,typeof e!="symbol"?e+"":e,a),a);import{i as on}from"./main-nav.js";import{i as vt,s as lt,y as _e,Z as rn}from"./lit-element-6fe74b4f.js";import{_ as Ne,a as wt}from"./tslib.es6-c85c2c5e.js";import{e as $t}from"./custom-element-73470d87.js";import{e as et}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";/*! (c) Andrea Giammarchi @webreflection ISC */(function(){var s=function(l,o){var d=function(O){for(var j=0,C=O.length;j<C;j++)m(O[j])},m=function(O){var j=O.target,C=O.attributeName,V=O.oldValue;j.attributeChangedCallback(C,V,j.getAttribute(C))};return function(v,O){var j=v.constructor.observedAttributes;return j&&l(O).then(function(){new o(d).observe(v,{attributes:!0,attributeOldValue:!0,attributeFilter:j});for(var C=0,V=j.length;C<V;C++)v.hasAttribute(j[C])&&m({target:v,attributeName:j[C],oldValue:null})}),v}};function e(l,o){if(l){if(typeof l=="string")return a(l,o);var d=Object.prototype.toString.call(l).slice(8,-1);if(d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set")return Array.from(l);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return a(l,o)}}function a(l,o){(o==null||o>l.length)&&(o=l.length);for(var d=0,m=new Array(o);d<o;d++)m[d]=l[d];return m}function h(l,o){var d=typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(!d){if(Array.isArray(l)||(d=e(l))||o&&l&&typeof l.length=="number"){d&&(l=d);var m=0,v=function(){};return{s:v,n:function(){return m>=l.length?{done:!0}:{done:!1,value:l[m++]}},e:function(V){throw V},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,j=!1,C;return{s:function(){d=d.call(l)},n:function(){var V=d.next();return O=V.done,V},e:function(V){j=!0,C=V},f:function(){try{!O&&d.return!=null&&d.return()}finally{if(j)throw C}}}}/*! (c) Andrea Giammarchi - ISC */var x=!0,F=!1,te="querySelectorAll",ae=function(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:MutationObserver,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:["*"],O=function V(Y,ze,ee,t,n,c){var g=h(Y),A;try{for(g.s();!(A=g.n()).done;){var R=A.value;(c||te in R)&&(n?ee.has(R)||(ee.add(R),t.delete(R),o(R,n)):t.has(R)||(t.add(R),ee.delete(R),o(R,n)),c||V(R[te](ze),ze,ee,t,n,x))}}catch(J){g.e(J)}finally{g.f()}},j=new m(function(V){if(v.length){var Y=v.join(","),ze=new Set,ee=new Set,t=h(V),n;try{for(t.s();!(n=t.n()).done;){var c=n.value,g=c.addedNodes,A=c.removedNodes;O(A,Y,ze,ee,F,F),O(g,Y,ze,ee,x,F)}}catch(R){t.e(R)}finally{t.f()}}}),C=j.observe;return(j.observe=function(V){return C.call(j,V,{subtree:x,childList:x})})(d),j},Q="querySelectorAll",P=self,oe=P.document,He=P.Element,i=P.MutationObserver,ve=P.Set,Se=P.WeakMap,U=function(o){return Q in o},le=[].filter,We=function(l){var o=new Se,d=function(t){for(var n=0,c=t.length;n<c;n++)o.delete(t[n])},m=function(){for(var t=Y.takeRecords(),n=0,c=t.length;n<c;n++)j(le.call(t[n].removedNodes,U),!1),j(le.call(t[n].addedNodes,U),!0)},v=function(t){return t.matches||t.webkitMatchesSelector||t.msMatchesSelector},O=function(t,n){var c;if(n)for(var g,A=v(t),R=0,J=C.length;R<J;R++)A.call(t,g=C[R])&&(o.has(t)||o.set(t,new ve),c=o.get(t),c.has(g)||(c.add(g),l.handle(t,n,g)));else o.has(t)&&(c=o.get(t),o.delete(t),c.forEach(function(K){l.handle(t,n,K)}))},j=function(t){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,c=0,g=t.length;c<g;c++)O(t[c],n)},C=l.query,V=l.root||oe,Y=ae(O,V,i,C),ze=He.prototype.attachShadow;return ze&&(He.prototype.attachShadow=function(ee){var t=ze.call(this,ee);return Y.observe(t),t}),C.length&&j(V[Q](C)),{drop:d,flush:m,observer:Y,parse:j}},G=self,D=G.document,se=G.Map,Ce=G.MutationObserver,S=G.Object,je=G.Set,ne=G.WeakMap,be=G.Element,nt=G.HTMLElement,Me=G.Node,De=G.Error,ce=G.TypeError,qe=G.Reflect,de=S.defineProperty,Ge=S.keys,Oe=S.getOwnPropertyNames,ie=S.setPrototypeOf,ye=!self.customElements,L=function(o){for(var d=Ge(o),m=[],v=new je,O=d.length,j=0;j<O;j++){m[j]=o[d[j]];try{delete o[d[j]]}catch{v.add(j)}}return function(){for(var C=0;C<O;C++)v.has(C)||(o[d[C]]=m[C])}};if(ye){var Ve=function(){var o=this.constructor;if(!Ee.has(o))throw new ce("Illegal constructor");var d=Ee.get(o);if($e)return rt($e,d);var m=Ue.call(D,d);return rt(ie(m,o.prototype),d)},Ue=D.createElement,Ee=new se,fe=new se,Ae=new se,we=new se,Ke=[],ot=function(o,d,m){var v=Ae.get(m);if(d&&!v.isPrototypeOf(o)){var O=L(o);$e=ie(o,v);try{new v.constructor}finally{$e=null,O()}}var j="".concat(d?"":"dis","connectedCallback");j in v&&o[j]()},Qe=We({query:Ke,handle:ot}),ke=Qe.parse,$e=null,Re=function(o){if(!fe.has(o)){var d,m=new Promise(function(v){d=v});fe.set(o,{$:m,_:d})}return fe.get(o).$},rt=s(Re,Ce);self.customElements={define:function(o,d){if(we.has(o))throw new De('the name "'.concat(o,'" has already been used with this registry'));Ee.set(d,o),Ae.set(o,d.prototype),we.set(o,d),Ke.push(o),Re(o).then(function(){ke(D.querySelectorAll(o))}),fe.get(o)._(d)},get:function(o){return we.get(o)},whenDefined:Re},de(Ve.prototype=nt.prototype,"constructor",{value:Ve}),self.HTMLElement=Ve,D.createElement=function(l,o){var d=o&&o.is,m=d?we.get(d):we.get(l);return m?new m:Ue.call(D,l)},"isConnected"in Me.prototype||de(Me.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(ye=!self.customElements.get("extends-br"),ye)try{var r=function l(){return self.Reflect.construct(HTMLBRElement,[],l)};r.prototype=HTMLLIElement.prototype;var u="extends-br";self.customElements.define("extends-br",r,{extends:"br"}),ye=D.createElement("br",{is:u}).outerHTML.indexOf(u)<0;var k=self.customElements,b=k.get,E=k.whenDefined;self.customElements.whenDefined=function(l){var o=this;return E.call(this,l).then(function(d){return d||b.call(o,l)})}}catch{}if(ye){var M=function(o){var d=Fe.get(o);Je(d.querySelectorAll(this),o.isConnected)},H=self.customElements,he=D.createElement,re=H.define,ue=H.get,me=H.upgrade,q=qe||{construct:function(o){return o.call(this)}},Pe=q.construct,Fe=new ne,Ie=new je,Te=new se,p=new se,y=new se,N=new se,$=[],X=[],ge=function(o){return N.get(o)||ue.call(H,o)},Xe=function(o,d,m){var v=y.get(m);if(d&&!v.isPrototypeOf(o)){var O=L(o);T=ie(o,v);try{new v.constructor}finally{T=null,O()}}var j="".concat(d?"":"dis","connectedCallback");j in v&&o[j]()},Ye=We({query:X,handle:Xe}),Je=Ye.parse,Ze=We({query:$,handle:function(o,d){Fe.has(o)&&(d?Ie.add(o):Ie.delete(o),X.length&&M.call(X,o))}}),Z=Ze.parse,I=be.prototype.attachShadow;I&&(be.prototype.attachShadow=function(l){var o=I.call(this,l);return Fe.set(this,o),o});var w=function(o){if(!p.has(o)){var d,m=new Promise(function(v){d=v});p.set(o,{$:m,_:d})}return p.get(o).$},f=s(w,Ce),T=null;Oe(self).filter(function(l){return/^HTML.*Element$/.test(l)}).forEach(function(l){var o=self[l];function d(){var m=this.constructor;if(!Te.has(m))throw new ce("Illegal constructor");var v=Te.get(m),O=v.is,j=v.tag;if(O){if(T)return f(T,O);var C=he.call(D,j);return C.setAttribute("is",O),f(ie(C,m.prototype),O)}else return Pe.call(this,o,[],m)}de(d.prototype=o.prototype,"constructor",{value:d}),de(self,l,{value:d})}),D.createElement=function(l,o){var d=o&&o.is;if(d){var m=N.get(d);if(m&&Te.get(m).tag===l)return new m}var v=he.call(D,l);return d&&v.setAttribute("is",d),v},H.get=ge,H.whenDefined=w,H.upgrade=function(l){var o=l.getAttribute("is");if(o){var d=N.get(o);if(d){f(ie(l,d.prototype),o);return}}me.call(H,l)},H.define=function(l,o,d){if(ge(l))throw new De("'".concat(l,"' has already been defined as a custom element"));var m,v=d&&d.extends;Te.set(o,v?{is:l,tag:v}:{is:"",tag:l}),v?(m="".concat(v,'[is="').concat(l,'"]'),y.set(m,o.prototype),N.set(l,o),X.push(m)):(re.apply(H,arguments),$.push(m=l)),w(l).then(function(){v?(Je(D.querySelectorAll(m)),Ie.forEach(M,[m])):Z(D.querySelectorAll(m))}),p.get(l)._(o)}}})();let kt=0,Lt=0;const Yt=getComputedStyle(document.documentElement),an=".topbar, .inpage-nav, .navigation--inpage";function sn(){const s=parseInt(Yt.getPropertyValue("--toujou-scroll-padding-offset"));s&&(kt+=s);const e=Array.from(document.querySelectorAll(an));e&&(e.forEach(a=>{Lt+=a.offsetHeight}),kt+=Lt),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${kt}px`)}function un(){Yt.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||sn()}function Nt(){on(),un()}document.readyState!=="loading"?setTimeout(()=>{Nt()}):document.addEventListener("DOMContentLoaded",()=>{Nt()});function ln(s){if(Array.isArray(s)){for(var e=0,a=Array(s.length);e<s.length;e++)a[e]=s[e];return a}else return Array.from(s)}var bt=!1;if(typeof window<"u"){var _t={get passive(){bt=!0}};window.addEventListener("testPassive",null,_t),window.removeEventListener("testPassive",null,_t)}var st=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Be=[],ut=!1,Ct=-1,ct=void 0,tt=void 0,dt=void 0,Jt=function(e){return Be.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},ft=function(e){var a=e||window.event;return Jt(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},cn=function(e){if(dt===void 0){var a=!!e&&e.reserveScrollBarGap===!0,h=window.innerWidth-document.documentElement.clientWidth;if(a&&h>0){var x=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);dt=document.body.style.paddingRight,document.body.style.paddingRight=x+h+"px"}}ct===void 0&&(ct=document.body.style.overflow,document.body.style.overflow="hidden")},Gt=function(){dt!==void 0&&(document.body.style.paddingRight=dt,dt=void 0),ct!==void 0&&(document.body.style.overflow=ct,ct=void 0)},dn=function(){return window.requestAnimationFrame(function(){if(tt===void 0){tt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,a=e.scrollY,h=e.scrollX,x=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-a,document.body.style.left=-h,setTimeout(function(){return window.requestAnimationFrame(function(){var F=x-window.innerHeight;F&&a>=x&&(document.body.style.top=-(a+F))})},300)}})},Kt=function(){if(tt!==void 0){var e=-parseInt(document.body.style.top,10),a=-parseInt(document.body.style.left,10);document.body.style.position=tt.position,document.body.style.top=tt.top,document.body.style.left=tt.left,window.scrollTo(a,e),tt=void 0}},fn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},hn=function(e,a){var h=e.targetTouches[0].clientY-Ct;return Jt(e.target)?!1:a&&a.scrollTop===0&&h>0||fn(a)&&h<0?ft(e):(e.stopPropagation(),!0)},mn=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Be.some(function(x){return x.targetElement===e})){var h={targetElement:e,options:a||{}};Be=[].concat(ln(Be),[h]),st?dn():cn(a),st&&(e.ontouchstart=function(x){x.targetTouches.length===1&&(Ct=x.targetTouches[0].clientY)},e.ontouchmove=function(x){x.targetTouches.length===1&&hn(x,e)},ut||(document.addEventListener("touchmove",ft,bt?{passive:!1}:void 0),ut=!0))}},gn=function(){st&&(Be.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),ut&&(document.removeEventListener("touchmove",ft,bt?{passive:!1}:void 0),ut=!1),Ct=-1),st?Kt():Gt(),Be=[]},pn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Be=Be.filter(function(a){return a.targetElement!==e}),st&&(e.ontouchstart=null,e.ontouchmove=null,ut&&Be.length===0&&(document.removeEventListener("touchmove",ft,bt?{passive:!1}:void 0),ut=!1)),st?Kt():Gt()},At={},vn={get exports(){return At},set exports(s){At=s}},yt={},Rt={},bn={get exports(){return Rt},set exports(s){Rt=s}};(function(s){(function(e){if(typeof window>"u")return;var a=0,h=!1,x=!1,F="message",te=F.length,ae="[iFrameSizer]",Q=ae.length,P=null,oe=window.requestAnimationFrame,He={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ve=null,Se={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){ne("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function U(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function le(r,u,k){r.addEventListener(u,k,!1)}function We(r,u,k){r.removeEventListener(u,k,!1)}function G(){var r=["moz","webkit","o","ms"],u;for(u=0;u<r.length&&!oe;u+=1)oe=window[r[u]+"RequestAnimationFrame"];oe?oe=oe.bind(window):S("setup","RequestAnimationFrame not supported")}function D(r){var u="Host page: "+r;return window.top!==window.self&&(u=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+r:"Nested host page: "+r),u}function se(r){return ae+"["+D(r)+"]"}function Ce(r){return i[r]?i[r].log:h}function S(r,u){be("log",r,u,Ce(r))}function je(r,u){be("info",r,u,Ce(r))}function ne(r,u){be("warn",r,u,!0)}function be(r,u,k,b){b===!0&&typeof window.console=="object"&&console[r](se(u),k)}function nt(r){function u(){function f(){ie(I),de(w),ge("onResized",I)}M("Height"),M("Width"),ye(f,I,"init")}function k(){var f=Z.substr(Q).split(":"),T=f[1]?parseInt(f[1],10):0,l=i[f[0]]&&i[f[0]].iframe,o=getComputedStyle(l);return{iframe:l,id:f[0],height:T+b(o)+E(o),width:f[2],type:f[3]}}function b(f){if(f.boxSizing!=="border-box")return 0;var T=f.paddingTop?parseInt(f.paddingTop,10):0,l=f.paddingBottom?parseInt(f.paddingBottom,10):0;return T+l}function E(f){if(f.boxSizing!=="border-box")return 0;var T=f.borderTopWidth?parseInt(f.borderTopWidth,10):0,l=f.borderBottomWidth?parseInt(f.borderBottomWidth,10):0;return T+l}function M(f){var T=Number(i[w]["max"+f]),l=Number(i[w]["min"+f]),o=f.toLowerCase(),d=Number(I[o]);S(w,"Checking "+o+" is in range "+l+"-"+T),d<l&&(d=l,S(w,"Set "+o+" to min value")),d>T&&(d=T,S(w,"Set "+o+" to max value")),I[o]=""+d}function H(){function f(){function o(){var m=0,v=!1;for(S(w,"Checking connection is from allowed list of origins: "+l);m<l.length;m++)if(l[m]===T){v=!0;break}return v}function d(){var m=i[w]&&i[w].remoteHost;return S(w,"Checking connection is from: "+m),T===m}return l.constructor===Array?o():d()}var T=r.origin,l=i[w]&&i[w].checkOrigin;if(l&&""+T!="null"&&!f())throw new Error("Unexpected message received from: "+T+" for "+I.iframe.id+". Message was: "+r.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function he(){return ae===(""+Z).substr(0,Q)&&Z.substr(Q).split(":")[0]in i}function re(){var f=I.type in{true:1,false:1,undefined:1};return f&&S(w,"Ignoring init message from meta parent page"),f}function ue(f){return Z.substr(Z.indexOf(":")+te+f)}function me(f){S(w,"onMessage passed: {iframe: "+I.iframe.id+", message: "+f+"}"),ge("onMessage",{iframe:I.iframe,message:JSON.parse(f)}),S(w,"--")}function q(){var f=document.body.getBoundingClientRect(),T=I.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:T.height,iframeWidth:T.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(T.top-f.top,10),offsetLeft:parseInt(T.left-f.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Pe(f,T){function l(){L("Send Page Info","pageInfo:"+q(),f,T)}we(l,32,T)}function Fe(){function f(d,m){function v(){i[o]?Pe(i[o].iframe,o):T()}["scroll","resize"].forEach(function(O){S(o,d+O+" listener for sendPageInfo"),m(window,O,v)})}function T(){f("Remove ",We)}function l(){f("Add ",le)}var o=w;l(),i[o]&&(i[o].stopPageInfo=T)}function Ie(){i[w]&&i[w].stopPageInfo&&(i[w].stopPageInfo(),delete i[w].stopPageInfo)}function Te(){var f=!0;return I.iframe===null&&(ne(w,"IFrame ("+I.id+") not found"),f=!1),f}function p(f){var T=f.getBoundingClientRect();return qe(w),{x:Math.floor(Number(T.left)+Number(P.x)),y:Math.floor(Number(T.top)+Number(P.y))}}function y(f){function T(){P=m,N(),S(w,"--")}function l(){return{x:Number(I.width)+d.x,y:Number(I.height)+d.y}}function o(){window.parentIFrame?window.parentIFrame["scrollTo"+(f?"Offset":"")](m.x,m.y):ne(w,"Unable to scroll to requested position, window.parentIFrame not found")}var d=f?p(I.iframe):{x:0,y:0},m=l();S(w,"Reposition requested from iFrame (offset x:"+d.x+" y:"+d.y+")"),window.top!==window.self?o():T()}function N(){ge("onScroll",P)!==!1?de(w):Ge()}function $(f){function T(){var v=p(m);S(w,"Moving to in page link (#"+o+") at x: "+v.x+" y: "+v.y),P={x:v.x,y:v.y},N(),S(w,"--")}function l(){window.parentIFrame?window.parentIFrame.moveToAnchor(o):S(w,"In page link #"+o+" not found and window.parentIFrame not found")}var o=f.split("#")[1]||"",d=decodeURIComponent(o),m=document.getElementById(d)||document.getElementsByName(d)[0];m?T():window.top!==window.self?l():S(w,"In page link #"+o+" not found")}function X(f){var T={};if(Number(I.width)===0&&Number(I.height)===0){var l=ue(9).split(":");T={x:l[1],y:l[0]}}else T={x:I.width,y:I.height};ge(f,{iframe:I.iframe,screenX:Number(T.x),screenY:Number(T.y),type:I.type})}function ge(f,T){return Me(w,f,T)}function Xe(){switch(i[w]&&i[w].firstRun&&Ze(),I.type){case"close":ce(I.iframe);break;case"message":me(ue(6));break;case"mouseenter":X("onMouseEnter");break;case"mouseleave":X("onMouseLeave");break;case"autoResize":i[w].autoResize=JSON.parse(ue(9));break;case"scrollTo":y(!1);break;case"scrollToOffset":y(!0);break;case"pageInfo":Pe(i[w]&&i[w].iframe,w),Fe();break;case"pageInfoStop":Ie();break;case"inPageLink":$(ue(9));break;case"reset":Oe(I);break;case"init":u(),ge("onInit",I.iframe);break;default:Number(I.width)===0&&Number(I.height)===0?ne("Unsupported message received ("+I.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):u()}}function Ye(f){var T=!0;return i[f]||(T=!1,ne(I.type+" No settings for "+f+". Message was: "+Z)),T}function Je(){for(var f in i)L("iFrame requested init",Ve(f),i[f].iframe,f)}function Ze(){i[w]&&(i[w].firstRun=!1)}var Z=r.data,I={},w=null;Z==="[iFrameResizerChild]Ready"?Je():he()?(I=k(),w=I.id,i[w]&&(i[w].loaded=!0),!re()&&Ye(w)&&(S(w,"Received: "+Z),Te()&&H()&&Xe())):je(w,"Ignored: "+Z)}function Me(r,u,k){var b=null,E=null;if(i[r])if(b=i[r][u],typeof b=="function")E=b(k);else throw new TypeError(u+" on iFrame["+r+"] is not a function");return E}function De(r){var u=r.id;delete i[u]}function ce(r){var u=r.id;if(Me(u,"onClose",u)===!1){S(u,"Close iframe cancelled by onClose event");return}S(u,"Removing iFrame: "+u);try{r.parentNode&&r.parentNode.removeChild(r)}catch(k){ne(k)}Me(u,"onClosed",u),S(u,"--"),De(r)}function qe(r){P===null&&(P={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},S(r,"Get page position: "+P.x+","+P.y))}function de(r){P!==null&&(window.scrollTo(P.x,P.y),S(r,"Set page position: "+P.x+","+P.y),Ge())}function Ge(){P=null}function Oe(r){function u(){ie(r),L("reset","reset",r.iframe,r.id)}S(r.id,"Size reset requested by "+(r.type==="init"?"host page":"iFrame")),qe(r.id),ye(u,r,"reset")}function ie(r){function u(M){if(!r.id){S("undefined","messageData id not set");return}r.iframe.style[M]=r[M]+"px",S(r.id,"IFrame ("+E+") "+M+" set to "+r[M]+"px")}function k(M){!x&&r[M]==="0"&&(x=!0,S(E,"Hidden iFrame detected, creating visibility listener"),Ke())}function b(M){u(M),k(M)}var E=r.iframe.id;i[E]&&(i[E].sizeHeight&&b("height"),i[E].sizeWidth&&b("width"))}function ye(r,u,k){k!==u.type&&oe&&!window.jasmine?(S(u.id,"Requesting animation frame"),oe(r)):r()}function L(r,u,k,b,E){function M(){var me=i[b]&&i[b].targetOrigin;S(b,"["+r+"] Sending msg to iframe["+b+"] ("+u+") targetOrigin: "+me),k.contentWindow.postMessage(ae+u,me)}function H(){ne(b,"["+r+"] IFrame("+b+") not found")}function he(){k&&"contentWindow"in k&&k.contentWindow!==null?M():H()}function re(){function me(){i[b]&&!i[b].loaded&&!ue&&(ue=!0,ne(b,"IFrame has not responded within "+i[b].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}E&&i[b]&&i[b].warningTimeout&&(i[b].msgTimeout=setTimeout(me,i[b].warningTimeout))}var ue=!1;b=b||k.id,i[b]&&(he(),re())}function Ve(r){return r+":"+i[r].bodyMarginV1+":"+i[r].sizeWidth+":"+i[r].log+":"+i[r].interval+":"+i[r].enablePublicMethods+":"+i[r].autoResize+":"+i[r].bodyMargin+":"+i[r].heightCalculationMethod+":"+i[r].bodyBackground+":"+i[r].bodyPadding+":"+i[r].tolerance+":"+i[r].inPageLinks+":"+i[r].resizeFrom+":"+i[r].widthCalculationMethod+":"+i[r].mouseEvents}function Ue(r){return typeof r=="number"}function Ee(r,u){function k(){function y($){var X=i[p][$];X!==1/0&&X!==0&&(r.style[$]=Ue(X)?X+"px":X,S(p,"Set "+$+" = "+r.style[$]))}function N($){if(i[p]["min"+$]>i[p]["max"+$])throw new Error("Value for min"+$+" can not be greater than max"+$)}N("Height"),N("Width"),y("maxHeight"),y("minHeight"),y("maxWidth"),y("minWidth")}function b(){var y=u&&u.id||Se.id+a++;return document.getElementById(y)!==null&&(y+=a++),y}function E(y){return y===""&&(r.id=y=b(),h=(u||{}).log,S(y,"Added missing iframe ID: "+y+" ("+r.src+")")),y}function M(){switch(S(p,"IFrame scrolling "+(i[p]&&i[p].scrolling?"enabled":"disabled")+" for "+p),r.style.overflow=(i[p]&&i[p].scrolling)===!1?"hidden":"auto",i[p]&&i[p].scrolling){case"omit":break;case!0:r.scrolling="yes";break;case!1:r.scrolling="no";break;default:r.scrolling=i[p]?i[p].scrolling:"no"}}function H(){(typeof(i[p]&&i[p].bodyMargin)=="number"||(i[p]&&i[p].bodyMargin)==="0")&&(i[p].bodyMarginV1=i[p].bodyMargin,i[p].bodyMargin=""+i[p].bodyMargin+"px")}function he(){var y=i[p]&&i[p].firstRun,N=i[p]&&i[p].heightCalculationMethod in He;!y&&N&&Oe({iframe:r,height:0,width:0,type:"init"})}function re(){i[p]&&(i[p].iframe.iFrameResizer={close:ce.bind(null,i[p].iframe),removeListeners:De.bind(null,i[p].iframe),resize:L.bind(null,"Window resize","resize",i[p].iframe),moveToAnchor:function(y){L("Move to anchor","moveToAnchor:"+y,i[p].iframe,p)},sendMessage:function(y){y=JSON.stringify(y),L("Send Message","message:"+y,i[p].iframe,p)}})}function ue(y){function N(){L("iFrame.onload",y,r,e,!0),he()}function $(ge){if(r.parentNode){var Xe=new ge(function(Ye){Ye.forEach(function(Je){var Ze=Array.prototype.slice.call(Je.removedNodes);Ze.forEach(function(Z){Z===r&&ce(r)})})});Xe.observe(r.parentNode,{childList:!0})}}var X=U();X&&$(X),le(r,"load",N),L("init",y,r,e,!0)}function me(y){if(typeof y!="object")throw new TypeError("Options is not an object")}function q(y){for(var N in Se)Object.prototype.hasOwnProperty.call(Se,N)&&(i[p][N]=Object.prototype.hasOwnProperty.call(y,N)?y[N]:Se[N])}function Pe(y){return y===""||y.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":y}function Fe(y){var N=y.split("Callback");if(N.length===2){var $="on"+N[0].charAt(0).toUpperCase()+N[0].slice(1);this[$]=this[y],delete this[y],ne(p,"Deprecated: '"+y+"' has been renamed '"+$+"'. The old method will be removed in the next major version.")}}function Ie(y){y=y||{},i[p]={firstRun:!0,iframe:r,remoteHost:r.src&&r.src.split("/").slice(0,3).join("/")},me(y),Object.keys(y).forEach(Fe,y),q(y),i[p]&&(i[p].targetOrigin=i[p].checkOrigin===!0?Pe(i[p].remoteHost):"*")}function Te(){return p in i&&"iFrameResizer"in r}var p=E(r.id);Te()?ne(p,"Ignored iFrame, already setup."):(Ie(u),M(),k(),H(),ue(Ve(p)),re())}function fe(r,u){ve===null&&(ve=setTimeout(function(){ve=null,r()},u))}var Ae={};function we(r,u,k){Ae[k]||(Ae[k]=setTimeout(function(){Ae[k]=null,r()},u))}function Ke(){function r(){function E(M){function H(re){return(i[M]&&i[M].iframe.style[re])==="0px"}function he(re){return re.offsetParent!==null}i[M]&&he(i[M].iframe)&&(H("height")||H("width"))&&L("Visibility change","resize",i[M].iframe,M)}Object.keys(i).forEach(function(M){E(M)})}function u(E){S("window","Mutation observed: "+E[0].target+" "+E[0].type),fe(r,16)}function k(){var E=document.querySelector("body"),M={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},H=new b(u);H.observe(E,M)}var b=U();b&&k()}function ot(r){function u(){ke("Window "+r,"resize")}S("window","Trigger event: "+r),fe(u,16)}function Qe(){function r(){ke("Tab Visable","resize")}document.visibilityState!=="hidden"&&(S("document","Trigger event: Visiblity change"),fe(r,16))}function ke(r,u){function k(b){return i[b]&&i[b].resizeFrom==="parent"&&i[b].autoResize&&!i[b].firstRun}Object.keys(i).forEach(function(b){k(b)&&L(r,u,i[b].iframe,b)})}function $e(){le(window,"message",nt),le(window,"resize",function(){ot("resize")}),le(document,"visibilitychange",Qe),le(document,"-webkit-visibilitychange",Qe)}function Re(){function r(b,E){function M(){if(E.tagName){if(E.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+E.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}E&&(M(),Ee(E,b),k.push(E))}function u(b){b&&b.enablePublicMethods&&ne("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var k;return G(),$e(),function(E,M){switch(k=[],u(E),typeof M){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(M||"iframe"),r.bind(e,E));break;case"object":r(E,M);break;default:throw new TypeError("Unexpected data type ("+typeof M+")")}return k}}function rt(r){r.fn?r.fn.iFrameResize||(r.fn.iFrameResize=function(k){function b(E,M){Ee(M,k)}return this.filter("iframe").each(b).end()}):je("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&rt(window.jQuery),typeof e=="function"&&e.amd?e([],Re):s.exports=Re(),window.iFrameResize=window.iFrameResize||Re()})()})(bn);var Ft={},yn={get exports(){return Ft},set exports(s){Ft=s}};(function(s){(function(e){if(typeof window>"u")return;var a=!0,h=10,x="",F=0,te="",ae=null,Q="",P=!1,oe={resize:1,click:1},He=128,i=!0,ve=1,Se="bodyOffset",U=Se,le=!0,We="",G={},D=32,se=null,Ce=!1,S=!1,je="[iFrameSizer]",ne=je.length,be="",nt={max:1,min:1,bodyScroll:1,documentElementScroll:1},Me="child",De=window.parent,ce="*",qe=0,de=!1,Ge=null,Oe=16,ie=1,ye="scroll",L=ye,Ve=window,Ue=function(){k("onMessage function not defined")},Ee=function(){},fe=function(){},Ae={height:function(){return k("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return k("Custom width calculation function not defined"),document.body.scrollWidth}},we={},Ke=!1;function ot(){}try{var Qe=Object.create({},{passive:{get:function(){Ke=!0}}});window.addEventListener("test",ot,Qe),window.removeEventListener("test",ot,Qe)}catch{}function ke(t,n,c,g){t.addEventListener(n,c,Ke?g||{}:!1)}function $e(t,n,c){t.removeEventListener(n,c,!1)}function Re(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rt(t){var n,c,g,A=null,R=0,J=function(){R=Date.now(),A=null,g=t.apply(n,c),A||(n=c=null)};return function(){var K=Date.now();R||(R=K);var _=Oe-(K-R);return n=this,c=arguments,_<=0||_>Oe?(A&&(clearTimeout(A),A=null),R=K,g=t.apply(n,c),A||(n=c=null)):A||(A=setTimeout(J,_)),g}}function r(t){return je+"["+be+"] "+t}function u(t){Ce&&typeof window.console=="object"&&console.log(r(t))}function k(t){typeof window.console=="object"&&console.warn(r(t))}function b(){E(),u("Initialising iFrame ("+window.location.href+")"),H(),ue(),re("background",x),re("padding",Q),$(),Ie(),Te(),me(),Xe(),ge(),p(),G=X(),O("init","Init message from host page"),Ee()}function E(){function t(c){return c==="true"}var n=We.substr(ne).split(":");be=n[0],F=e!==n[1]?Number(n[1]):F,P=e!==n[2]?t(n[2]):P,Ce=e!==n[3]?t(n[3]):Ce,D=e!==n[4]?Number(n[4]):D,a=e!==n[6]?t(n[6]):a,te=n[7],U=e!==n[8]?n[8]:U,x=n[9],Q=n[10],qe=e!==n[11]?Number(n[11]):qe,G.enable=e!==n[12]?t(n[12]):!1,Me=e!==n[13]?n[13]:Me,L=e!==n[14]?n[14]:L,S=e!==n[15]?Boolean(n[15]):S}function M(t){var n=t.split("Callback");if(n.length===2){var c="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[c]=this[t],delete this[t],k("Deprecated: '"+t+"' has been renamed '"+c+"'. The old method will be removed in the next major version.")}}function H(){function t(){var c=window.iFrameResizer;u("Reading data from page: "+JSON.stringify(c)),Object.keys(c).forEach(M,c),Ue="onMessage"in c?c.onMessage:Ue,Ee="onReady"in c?c.onReady:Ee,ce="targetOrigin"in c?c.targetOrigin:ce,U="heightCalculationMethod"in c?c.heightCalculationMethod:U,L="widthCalculationMethod"in c?c.widthCalculationMethod:L}function n(c,g){return typeof c=="function"&&(u("Setup custom "+g+"CalcMethod"),Ae[g]=c,c="custom"),c}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),U=n(U,"height"),L=n(L,"width")),u("TargetOrigin for parent set to: "+ce)}function he(t,n){return n.indexOf("-")!==-1&&(k("Negative CSS value ignored for "+t),n=""),n}function re(t,n){e!==n&&n!==""&&n!=="null"&&(document.body.style[t]=n,u("Body "+t+' set to "'+n+'"'))}function ue(){e===te&&(te=F+"px"),re("margin",he("margin",te))}function me(){document.documentElement.style.height="",document.body.style.height="",u('HTML & body height set to "auto"')}function q(t){var n={add:function(c){function g(){O(t.eventName,t.eventType)}we[c]=g,ke(window,c,g,{passive:!0})},remove:function(c){var g=we[c];delete we[c],$e(window,c,g)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(n[t.method])):n[t.method](t.eventName),u(Re(t.method)+" event listener: "+t.eventType)}function Pe(t){q({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),q({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),q({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),q({method:t,eventType:"Input",eventName:"input"}),q({method:t,eventType:"Mouse Up",eventName:"mouseup"}),q({method:t,eventType:"Mouse Down",eventName:"mousedown"}),q({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),q({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),q({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),q({method:t,eventType:"Touch Start",eventName:"touchstart"}),q({method:t,eventType:"Touch End",eventName:"touchend"}),q({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),q({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),q({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),q({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),Me==="child"&&q({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Fe(t,n,c,g){return n!==t&&(t in c||(k(t+" is not a valid option for "+g+"CalculationMethod."),t=n),u(g+' calculation method set to "'+t+'"')),t}function Ie(){U=Fe(U,Se,o,"height")}function Te(){L=Fe(L,ye,d,"width")}function p(){a===!0?(Pe("add"),Ze()):u("Auto Resize disabled")}function y(){ae!==null&&ae.disconnect()}function N(){Pe("remove"),y(),clearInterval(se)}function $(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function X(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function n(_){var W=_.getBoundingClientRect(),B=t();return{x:parseInt(W.left,10)+parseInt(B.x,10),y:parseInt(W.top,10)+parseInt(B.y,10)}}function c(_){function W(xe){var it=n(xe);u("Moving to in page link (#"+B+") at x: "+it.x+" y: "+it.y),Y(it.y,it.x,"scrollToOffset")}var B=_.split("#")[1]||_,z=decodeURIComponent(B),pe=document.getElementById(z)||document.getElementsByName(z)[0];e!==pe?W(pe):(u("In page link (#"+B+") not found in iFrame, so sending to parent"),Y(0,0,"inPageLink","#"+B))}function g(){var _=window.location.hash,W=window.location.href;_!==""&&_!=="#"&&c(W)}function A(){function _(W){function B(z){z.preventDefault(),c(this.getAttribute("href"))}W.getAttribute("href")!=="#"&&ke(W,"click",B)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),_)}function R(){ke(window,"hashchange",g)}function J(){setTimeout(g,He)}function K(){Array.prototype.forEach&&document.querySelectorAll?(u("Setting up location.hash handlers"),A(),R(),J()):k("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return G.enable?K():u("In page linking not enabled"),{findTarget:c}}function ge(){if(S!==!0)return;function t(c){Y(0,0,c.type,c.screenY+":"+c.screenX)}function n(c,g){u("Add event listener: "+g),ke(window.document,c,t)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}function Xe(){u("Enable public methods"),Ve.parentIFrame={autoResize:function(n){return n===!0&&a===!1?(a=!0,p()):n===!1&&a===!0&&(a=!1,N()),Y(0,0,"autoResize",JSON.stringify(a)),a},close:function(){Y(0,0,"close")},getId:function(){return be},getPageInfo:function(n){typeof n=="function"?(fe=n,Y(0,0,"pageInfo")):(fe=function(){},Y(0,0,"pageInfoStop"))},moveToAnchor:function(n){G.findTarget(n)},reset:function(){V("parentIFrame.reset")},scrollTo:function(n,c){Y(c,n,"scrollTo")},scrollToOffset:function(n,c){Y(c,n,"scrollToOffset")},sendMessage:function(n,c){Y(0,0,"message",JSON.stringify(n),c)},setHeightCalculationMethod:function(n){U=n,Ie()},setWidthCalculationMethod:function(n){L=n,Te()},setTargetOrigin:function(n){u("Set targetOrigin: "+n),ce=n},size:function(n,c){var g=""+(n||"")+(c?","+c:"");O("size","parentIFrame.size("+g+")",n,c)}}}function Ye(){D!==0&&(u("setInterval: "+D+"ms"),se=setInterval(function(){O("interval","setInterval: "+D)},Math.abs(D)))}function Je(){function t(z){function pe(xe){xe.complete===!1&&(u("Attach listeners to "+xe.src),xe.addEventListener("load",A,!1),xe.addEventListener("error",R,!1),_.push(xe))}z.type==="attributes"&&z.attributeName==="src"?pe(z.target):z.type==="childList"&&Array.prototype.forEach.call(z.target.querySelectorAll("img"),pe)}function n(z){_.splice(_.indexOf(z),1)}function c(z){u("Remove listeners from "+z.src),z.removeEventListener("load",A,!1),z.removeEventListener("error",R,!1),n(z)}function g(z,pe,xe){c(z.target),O(pe,xe+": "+z.target.src)}function A(z){g(z,"imageLoad","Image loaded")}function R(z){g(z,"imageLoadFailed","Image load failed")}function J(z){O("mutationObserver","mutationObserver: "+z[0].target+" "+z[0].type),z.forEach(t)}function K(){var z=document.querySelector("body"),pe={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return B=new W(J),u("Create body MutationObserver"),B.observe(z,pe),B}var _=[],W=window.MutationObserver||window.WebKitMutationObserver,B=K();return{disconnect:function(){"disconnect"in B&&(u("Disconnect body MutationObserver"),B.disconnect(),_.forEach(c))}}}function Ze(){var t=0>D;window.MutationObserver||window.WebKitMutationObserver?t?Ye():ae=Je():(u("MutationObserver not supported in this browser!"),Ye())}function Z(t,n){var c=0;return n=n||document.body,c=document.defaultView.getComputedStyle(n,null),c=c!==null?c[t]:0,parseInt(c,h)}function I(t){t>Oe/2&&(Oe=2*t,u("Event throttle increased to "+Oe+"ms"))}function w(t,n){for(var c=n.length,g=0,A=0,R=Re(t),J=Date.now(),K=0;K<c;K++)g=n[K].getBoundingClientRect()[t]+Z("margin"+R,n[K]),g>A&&(A=g);return J=Date.now()-J,u("Parsed "+c+" HTML elements"),u("Element position calculated in "+J+"ms"),I(J),A}function f(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function T(t,n){function c(){return k("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}var g=document.querySelectorAll("["+n+"]");return g.length===0&&c(),w(t,g)}function l(){return document.querySelectorAll("body *")}var o={bodyOffset:function(){return document.body.offsetHeight+Z("marginTop")+Z("marginBottom")},offset:function(){return o.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ae.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,f(o))},min:function(){return Math.min.apply(null,f(o))},grow:function(){return o.max()},lowestElement:function(){return Math.max(o.bodyOffset()||o.documentElementOffset(),w("bottom",l()))},taggedElement:function(){return T("bottom","data-iframe-height")}},d={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ae.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(d.bodyScroll(),d.documentElementScroll())},max:function(){return Math.max.apply(null,f(d))},min:function(){return Math.min.apply(null,f(d))},rightMostElement:function(){return w("right",l())},taggedElement:function(){return T("right","data-iframe-width")}};function m(t,n,c,g){function A(){ve=B,ie=z,Y(ve,ie,t)}function R(){function pe(xe,it){var en=Math.abs(xe-it)<=qe;return!en}return B=e!==c?c:o[U](),z=e!==g?g:d[L](),pe(ve,B)||P&&pe(ie,z)}function J(){return!(t in{init:1,interval:1,size:1})}function K(){return U in nt||P&&L in nt}function _(){u("No change in size detected")}function W(){J()&&K()?V(n):t in{interval:1}||_()}var B,z;R()||t==="init"?(j(),A()):W()}var v=rt(m);function O(t,n,c,g){function A(){t in{reset:1,resetPage:1,init:1}||u("Trigger event: "+n)}function R(){return de&&t in oe}R()?u("Trigger event cancelled: "+t):(A(),t==="init"?m(t,n,c,g):v(t,n,c,g))}function j(){de||(de=!0,u("Trigger event lock on")),clearTimeout(Ge),Ge=setTimeout(function(){de=!1,u("Trigger event lock off"),u("--")},He)}function C(t){ve=o[U](),ie=d[L](),Y(ve,ie,t)}function V(t){var n=U;U=Se,u("Reset trigger event: "+t),j(),C("reset"),U=n}function Y(t,n,c,g,A){function R(){e===A?A=ce:u("Message targetOrigin: "+A)}function J(){var K=t+":"+n,_=be+":"+K+":"+c+(e!==g?":"+g:"");u("Sending message to host page ("+_+")"),De.postMessage(je+_,A)}R(),J()}function ze(t){var n={init:function(){We=t.data,De=t.source,b(),i=!1,setTimeout(function(){le=!1},He)},reset:function(){le?u("Page reset ignored by init"):(u("Page size reset by host page"),C("resetPage"))},resize:function(){O("resizeParent","Parent window requested size check")},moveToAnchor:function(){G.findTarget(A())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var B=A();u("PageInfoFromParent called from parent: "+B),fe(JSON.parse(B)),u(" --")},message:function(){var B=A();u("onMessage called from parent: "+B),Ue(JSON.parse(B)),u(" --")}};function c(){return je===(""+t.data).substr(0,ne)}function g(){return t.data.split("]")[1].split(":")[0]}function A(){return t.data.substr(t.data.indexOf(":")+1)}function R(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function J(){return t.data.split(":")[2]in{true:1,false:1}}function K(){var W=g();W in n?n[W]():!R()&&!J()&&k("Unexpected message ("+t.data+")")}function _(){i===!1?K():J()?n.init():u('Ignored message of type "'+g()+'". Received before initialization.')}c()&&_()}function ee(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ke(window,"message",ze),ke(window,"readystatechange",ee),ee()})()})(yn);var Qt=Rt;yt.iframeResize=Qt;yt.iframeResizer=Qt;yt.iframeResizerContentWindow=Ft;(function(s){s.exports=yt})(vn);function wn(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function kn(s){const e=wn(s),a=e.href.substr(0,e.href.length-e.hash.length),h=window.location.href.replace(/#.*$/,"");return e.hash&&a===h}function Xt(s,e){const a=JSON.stringify(e);let h=0;if(a.length===0)return h;for(let x=0;x<a.length;x++){const F=a.charCodeAt(x);h=(h<<5)-h+F,h&=h}return`${s}-${h}`}function Tn(s,e,a){const h=document.createElement("form"),x=document.createElement("input");return h.action=s,h.method="POST",h.target=a,e.forEach(([F,te])=>{x.name=F,x.value=te.toString(),h.appendChild(x.cloneNode())}),h.style.visibility="hidden",h}function xn(s){const e=s.composedPath();for(let a=0;a<e.indexOf(document.body);a++){const h=e[a];if(h.hasAttribute&&h.hasAttribute("target")&&h!==document.body)return h}}function Sn(s,e){if(s.hasAttribute("data-modal-post")){const a=s.getAttribute("data-modal-post");e.method="POST",e.body=a;const h=[];return new URL(`http://localhost/?${a}`).searchParams.forEach((x,F)=>{h.push([F,x])}),[h,e]}return[null,e]}function jn(s,e,a,h,x){const F=document.createElement("toujou-modal"),te=document.createElement("iframe"),ae=Xt("iframe",e);if(F.id=s,te.name=ae,document.body.appendChild(F),kn(a)){const Q=document.querySelector(a),P=Q instanceof HTMLTemplateElement?document.importNode(Q.content,!0).children:Q.childNodes;Q.title&&(F.title=Q.title);for(let oe=0;oe<P.length;oe++)F.appendChild(P[oe])}else if(x&&h==="POST"){const Q=Tn(a,x,ae);F.appendChild(Q),F.appendChild(te),Q.submit(),Q.remove()}else h==="GET"&&(te.src=a,F.appendChild(te));return F}function Mn(s,e,a,h){const x=Xt("toujou-modal",s),F=document.getElementById(x)||jn(x,s,e,a,h);setTimeout(()=>{F.open()})}const On=s=>{if(s.metaKey||s.ctrlKey)return;const e=xn(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const a=e.getAttribute("href"),h=a.indexOf("?")!==-1?a.split("?")[0]+"?toujou-ajax-modal=1&"+a.split("?")[1]:a.indexOf("#")!==-1?a.split("#")[0]+"?toujou-ajax-modal=1#"+a.split("#")[1]:a+"?toujou-ajax-modal=1",[x,F]=Sn(e,{src:h});Mn(F,h,x?"POST":"GET",x),s.preventDefault(),s.stopPropagation()}},En=vt`
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

`,An={reserveScrollBarGap:!0},at=[];function Rn(s){at.forEach(e=>e.close()),at.push(s)}function Fn(s){if(s===at[at.length-1]){at.pop();const e=at.pop();e&&e.open()}}class It extends lt{static get is(){return"toujou-modal"}render(){return _e`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?_e`
                    <button id="dog-ear-close" dialog-dismiss></button>`:_e`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(a=>{a[0]&&this.onPosition(a[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){gn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":mn(this.$.scroller,An),Rn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Fn(this),this.allowOutsideScroll?document.body.style.position="":pn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const a=e.composedPath();(!a.includes(this.$.modalContent)||a.some(h=>h instanceof HTMLElement&&h.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const a=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=a?`${a}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(a=>a instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((a,h)=>{e.includes(h)||this.iframeResizerMap.delete(h)}),e.forEach(a=>{this.loading=!0,a.addEventListener("load",()=>{this.iframeResizerMap.has(a)||this.listenToIframeReadyState(a)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let a={};try{a=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(h){(console.error||console.log).call(console,h.stack||h)}return a.initCallback=()=>{this.loading=!1},a.closedCallback=()=>{this.close()},At.iframeResizer(a,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Pt(It,"styles",[En]);customElements.define(It.is,It);document.addEventListener("click",On);var mt,gt,pt;(function(s){s.PRIMARY="primary",s.SECONDARY="secondary",s.FONT="font"})(mt||(mt={})),function(s){s.DEFAULT="default",s.BORDER="border",s.GHOST="ghost"}(gt||(gt={})),function(s){s.TINY="tiny",s.SMALL="small",s.NORMAL="normal",s.LARGE="large"}(pt||(pt={}));let In=class extends HTMLButtonElement{constructor(){super(),this.defaultButtonVariant=mt.PRIMARY,this.defaultButtonType=gt.DEFAULT,this.defaultButtonSize=pt.NORMAL}connectedCallback(){this._checkRequiredAttributes()}_checkRequiredAttributes(){const e=this.getAttribute("button-variant");e?Object.values(mt).includes(e)||(console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`),this.setAttribute("button-variant",this.defaultButtonVariant)):this.setAttribute("button-variant",this.defaultButtonVariant);const a=this.getAttribute("button-size");a?Object.values(pt).includes(a)||(console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`),this.setAttribute("button-size",this.defaultButtonSize)):this.setAttribute("button-size",this.defaultButtonSize);const h=this.getAttribute("button-type");h?Object.values(gt).includes(h)||(console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`),this.setAttribute("button-type",this.defaultButtonType)):this.setAttribute("button-type",this.defaultButtonType)}};customElements.define("toujou-button",In,{extends:"button"});var zt,ht,Zt;let Le=class extends lt{get result(){const e=Math.round(this.duration);return e===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:e===1?`1 ${this.minutesSingularText}`:`${e} ${this.minutesPluralText}`}render(){return _e`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),zt.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,ht.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=wt(this,zt,"m",Zt).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(wt(this,ht,"f")):document.addEventListener("DOMContentLoaded",wt(this,ht,"f"))}updated(e){e.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};ht=new WeakMap,zt=new WeakSet,Zt=function(s){const e=s.textContent,a=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),h=a==null?void 0:a.trim(),x=h==null?void 0:h.split(" ");return(x==null?void 0:x.length)||0},Ne([et({type:Number})],Le.prototype,"wordCount",void 0),Ne([et({type:Number})],Le.prototype,"duration",void 0),Ne([et({type:String,attribute:"target-selector"})],Le.prototype,"targetSelector",void 0),Ne([et({type:String,attribute:"minutes-singular-text"})],Le.prototype,"minutesSingularText",void 0),Ne([et({type:String,attribute:"minutes-plural-text"})],Le.prototype,"minutesPluralText",void 0),Ne([et({type:String,attribute:"less-than-text"})],Le.prototype,"lessThanText",void 0),Ne([et({type:Number,attribute:"reading-speed"})],Le.prototype,"readingSpeed",void 0),Le=Ne([$t("toujou-estimated-reading-time")],Le);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Bt,Tt,xt,zn=vt(Bt||(Tt=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],xt||(xt=Tt.slice(0)),Bt=Object.freeze(Object.defineProperties(Tt,{raw:{value:Object.freeze(xt)}}))));let St=class extends lt{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return _e`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const s=this.querySelector("template");s&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+s.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(s){this._messageTemplate&&rn(this._messageTemplate(_e,this.targetUrl,this.secondsRemaining),this)}firstUpdated(s){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Ht(s){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}St.styles=[zn],St=Ne([$t("exit-warning")],St),document.addEventListener("click",function(s){if(s.metaKey||s.ctrlKey)return;const e=function(a){const h=a.composedPath();for(let x=0;x<h.indexOf(document.body);x++){const F=h[x];if(F.hasAttribute&&F.hasAttribute("target")&&F!==document.body)return F}}(s);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Ht(e.getAttribute("href"))&&(s.preventDefault(),s.stopPropagation())}),window.addEventListener("message",function(s){s.origin===window.location.origin&&s.data.action!==void 0&&s.data.action==="toujou-exit-warning"&&s.data.targetUrl&&Ht(s.data.targetUrl)});let Wt=class extends lt{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return _e`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(a=>a.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const a=document.importNode(e.content,!0);e.parentNode.insertBefore(a,e)})}};customElements.define(Wt.is,Wt);var Dt,jt,Mt,Cn=vt(Dt||(jt=[`:host {
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
`],Mt||(Mt=jt.slice(0)),Dt=Object.freeze(Object.defineProperties(jt,{raw:{value:Object.freeze(Mt)}}))));let qt=class extends lt{static get is(){return"toujou-snackbar"}render(){return _e`
      <p class="snackbar__message">${this.message}</p>
      <button
        class="snackbar__button"
        @click="${this._handleButtonClick}"
        aria-label="${this.buttonAriaLabel}"
      >${this.buttonText}</button>
    `}static get styles(){return[Cn]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String},buttonAriaLabel:{type:String,attribute:"button-aria-label"}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],this.buttonAriaLabel="Close the snackbar",window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define(qt.is,qt);var Vt,Ot,Et,Pn=vt(Vt||(Ot=[`* {
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
`],Et||(Et=Ot.slice(0)),Vt=Object.freeze(Object.defineProperties(Ot,{raw:{value:Object.freeze(Et)}}))));class Ut extends lt{static get is(){return"toujou-spinner"}static get styles(){return Pn}render(){return _e`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(Ut.is,Ut);
//# sourceMappingURL=base.js.map
