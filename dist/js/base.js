var nn=Object.defineProperty;var on=(s,e,i)=>e in s?nn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var _t=(s,e,i)=>(on(s,typeof e!="symbol"?e+"":e,i),i);import{i as rn}from"./main-nav.js";import{i as ht,s as nt,y as Pe,Z as an}from"./lit-element-6fe74b4f.js";import{_ as je,a as kt}from"./tslib.es6-c85c2c5e.js";import{e as Lt}from"./custom-element-73470d87.js";import{e as Ge}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";/*! (c) Andrea Giammarchi @webreflection ISC */(function(){var s=function(l,o){var d=function(M){for(var O=0,C=M.length;O<C;O++)m(M[O])},m=function(M){var O=M.target,C=M.attributeName,V=M.oldValue;O.attributeChangedCallback(C,V,O.getAttribute(C))};return function(v,M){var O=v.constructor.observedAttributes;return O&&l(M).then(function(){new o(d).observe(v,{attributes:!0,attributeOldValue:!0,attributeFilter:O});for(var C=0,V=O.length;C<V;C++)v.hasAttribute(O[C])&&m({target:v,attributeName:O[C],oldValue:null})}),v}};function e(l,o){if(l){if(typeof l=="string")return i(l,o);var d=Object.prototype.toString.call(l).slice(8,-1);if(d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set")return Array.from(l);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(l,o)}}function i(l,o){(o==null||o>l.length)&&(o=l.length);for(var d=0,m=new Array(o);d<o;d++)m[d]=l[d];return m}function h(l,o){var d=typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(!d){if(Array.isArray(l)||(d=e(l))||o&&l&&typeof l.length=="number"){d&&(l=d);var m=0,v=function(){};return{s:v,n:function(){return m>=l.length?{done:!0}:{done:!1,value:l[m++]}},e:function(V){throw V},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M=!0,O=!1,C;return{s:function(){d=d.call(l)},n:function(){var V=d.next();return M=V.done,V},e:function(V){O=!0,C=V},f:function(){try{!M&&d.return!=null&&d.return()}finally{if(O)throw C}}}}/*! (c) Andrea Giammarchi - ISC */var x=!0,F=!1,te="querySelectorAll",ae=function(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:MutationObserver,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:["*"],M=function V(Y,Ce,ee,t,n,c){var g=h(Y),A;try{for(g.s();!(A=g.n()).done;){var R=A.value;(c||te in R)&&(n?ee.has(R)||(ee.add(R),t.delete(R),o(R,n)):t.has(R)||(t.add(R),ee.delete(R),o(R,n)),c||V(R[te](Ce),Ce,ee,t,n,x))}}catch(J){g.e(J)}finally{g.f()}},O=new m(function(V){if(v.length){var Y=v.join(","),Ce=new Set,ee=new Set,t=h(V),n;try{for(t.s();!(n=t.n()).done;){var c=n.value,g=c.addedNodes,A=c.removedNodes;M(A,Y,Ce,ee,F,F),M(g,Y,Ce,ee,x,F)}}catch(R){t.e(R)}finally{t.f()}}}),C=O.observe;return(O.observe=function(V){return C.call(O,V,{subtree:x,childList:x})})(d),O},Q="querySelectorAll",P=self,oe=P.document,He=P.Element,a=P.MutationObserver,ve=P.Set,Oe=P.WeakMap,$=function(o){return Q in o},le=[].filter,We=function(l){var o=new Oe,d=function(t){for(var n=0,c=t.length;n<c;n++)o.delete(t[n])},m=function(){for(var t=Y.takeRecords(),n=0,c=t.length;n<c;n++)O(le.call(t[n].removedNodes,$),!1),O(le.call(t[n].addedNodes,$),!0)},v=function(t){return t.matches||t.webkitMatchesSelector||t.msMatchesSelector},M=function(t,n){var c;if(n)for(var g,A=v(t),R=0,J=C.length;R<J;R++)A.call(t,g=C[R])&&(o.has(t)||o.set(t,new ve),c=o.get(t),c.has(g)||(c.add(g),l.handle(t,n,g)));else o.has(t)&&(c=o.get(t),o.delete(t),c.forEach(function(K){l.handle(t,n,K)}))},O=function(t){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,c=0,g=t.length;c<g;c++)M(t[c],n)},C=l.query,V=l.root||oe,Y=ae(M,V,a,C),Ce=He.prototype.attachShadow;return Ce&&(He.prototype.attachShadow=function(ee){var t=Ce.call(this,ee);return Y.observe(t),t}),C.length&&O(V[Q](C)),{drop:d,flush:m,observer:Y,parse:O}},G=self,D=G.document,se=G.Map,Le=G.MutationObserver,j=G.Object,Se=G.Set,ne=G.WeakMap,be=G.Element,ot=G.HTMLElement,Me=G.Node,De=G.Error,ce=G.TypeError,qe=G.Reflect,de=j.defineProperty,Ke=j.keys,Ee=j.getOwnPropertyNames,ie=j.setPrototypeOf,ye=!self.customElements,L=function(o){for(var d=Ke(o),m=[],v=new Se,M=d.length,O=0;O<M;O++){m[O]=o[d[O]];try{delete o[d[O]]}catch{v.add(O)}}return function(){for(var C=0;C<M;C++)v.has(C)||(o[d[C]]=m[C])}};if(ye){var Ve=function(){var o=this.constructor;if(!Ae.has(o))throw new ce("Illegal constructor");var d=Ae.get(o);if(Ue)return it(Ue,d);var m=$e.call(D,d);return it(ie(m,o.prototype),d)},$e=D.createElement,Ae=new se,fe=new se,Re=new se,we=new se,Qe=[],rt=function(o,d,m){var v=Re.get(m);if(d&&!v.isPrototypeOf(o)){var M=L(o);Ue=ie(o,v);try{new v.constructor}finally{Ue=null,M()}}var O="".concat(d?"":"dis","connectedCallback");O in v&&o[O]()},Xe=We({query:Qe,handle:rt}),ke=Xe.parse,Ue=null,Fe=function(o){if(!fe.has(o)){var d,m=new Promise(function(v){d=v});fe.set(o,{$:m,_:d})}return fe.get(o).$},it=s(Fe,Le);self.customElements={define:function(o,d){if(we.has(o))throw new De('the name "'.concat(o,'" has already been used with this registry'));Ae.set(d,o),Re.set(o,d.prototype),we.set(o,d),Qe.push(o),Fe(o).then(function(){ke(D.querySelectorAll(o))}),fe.get(o)._(d)},get:function(o){return we.get(o)},whenDefined:Fe},de(Ve.prototype=ot.prototype,"constructor",{value:Ve}),self.HTMLElement=Ve,D.createElement=function(l,o){var d=o&&o.is,m=d?we.get(d):we.get(l);return m?new m:$e.call(D,l)},"isConnected"in Me.prototype||de(Me.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(ye=!self.customElements.get("extends-br"),ye)try{var r=function l(){return self.Reflect.construct(HTMLBRElement,[],l)};r.prototype=HTMLLIElement.prototype;var u="extends-br";self.customElements.define("extends-br",r,{extends:"br"}),ye=D.createElement("br",{is:u}).outerHTML.indexOf(u)<0;var k=self.customElements,b=k.get,E=k.whenDefined;self.customElements.whenDefined=function(l){var o=this;return E.call(this,l).then(function(d){return d||b.call(o,l)})}}catch{}if(ye){var S=function(o){var d=Ie.get(o);Je(d.querySelectorAll(this),o.isConnected)},H=self.customElements,he=D.createElement,re=H.define,ue=H.get,me=H.upgrade,q=qe||{construct:function(o){return o.call(this)}},Ne=q.construct,Ie=new ne,ze=new Se,Te=new se,p=new se,y=new se,N=new se,U=[],X=[],ge=function(o){return N.get(o)||ue.call(H,o)},Ze=function(o,d,m){var v=y.get(m);if(d&&!v.isPrototypeOf(o)){var M=L(o);T=ie(o,v);try{new v.constructor}finally{T=null,M()}}var O="".concat(d?"":"dis","connectedCallback");O in v&&o[O]()},Ye=We({query:X,handle:Ze}),Je=Ye.parse,et=We({query:U,handle:function(o,d){Ie.has(o)&&(d?ze.add(o):ze.delete(o),X.length&&S.call(X,o))}}),Z=et.parse,I=be.prototype.attachShadow;I&&(be.prototype.attachShadow=function(l){var o=I.call(this,l);return Ie.set(this,o),o});var w=function(o){if(!p.has(o)){var d,m=new Promise(function(v){d=v});p.set(o,{$:m,_:d})}return p.get(o).$},f=s(w,Le),T=null;Ee(self).filter(function(l){return/^HTML.*Element$/.test(l)}).forEach(function(l){var o=self[l];function d(){var m=this.constructor;if(!Te.has(m))throw new ce("Illegal constructor");var v=Te.get(m),M=v.is,O=v.tag;if(M){if(T)return f(T,M);var C=he.call(D,O);return C.setAttribute("is",M),f(ie(C,m.prototype),M)}else return Ne.call(this,o,[],m)}de(d.prototype=o.prototype,"constructor",{value:d}),de(self,l,{value:d})}),D.createElement=function(l,o){var d=o&&o.is;if(d){var m=N.get(d);if(m&&Te.get(m).tag===l)return new m}var v=he.call(D,l);return d&&v.setAttribute("is",d),v},H.get=ge,H.whenDefined=w,H.upgrade=function(l){var o=l.getAttribute("is");if(o){var d=N.get(o);if(d){f(ie(l,d.prototype),o);return}}me.call(H,l)},H.define=function(l,o,d){if(ge(l))throw new De("'".concat(l,"' has already been defined as a custom element"));var m,v=d&&d.extends;Te.set(o,v?{is:l,tag:v}:{is:"",tag:l}),v?(m="".concat(v,'[is="').concat(l,'"]'),y.set(m,o.prototype),N.set(l,o),X.push(m)):(re.apply(H,arguments),U.push(m=l)),w(l).then(function(){v?(Je(D.querySelectorAll(m)),ze.forEach(S,[m])):Z(D.querySelectorAll(m))}),p.get(l)._(o)}}})();function Bt(){rn()}document.readyState!=="loading"?setTimeout(()=>{Bt()}):document.addEventListener("DOMContentLoaded",()=>{Bt()});function sn(s){if(Array.isArray(s)){for(var e=0,i=Array(s.length);e<s.length;e++)i[e]=s[e];return i}else return Array.from(s)}var yt=!1;if(typeof window<"u"){var Ht={get passive(){yt=!0}};window.addEventListener("testPassive",null,Ht),window.removeEventListener("testPassive",null,Ht)}var ut=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Be=[],lt=!1,Nt=-1,ct=void 0,tt=void 0,dt=void 0,Gt=function(e){return Be.some(function(i){return!!(i.options.allowTouchMove&&i.options.allowTouchMove(e))})},ft=function(e){var i=e||window.event;return Gt(i.target)||i.touches.length>1?!0:(i.preventDefault&&i.preventDefault(),!1)},un=function(e){if(dt===void 0){var i=!!e&&e.reserveScrollBarGap===!0,h=window.innerWidth-document.documentElement.clientWidth;if(i&&h>0){var x=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);dt=document.body.style.paddingRight,document.body.style.paddingRight=x+h+"px"}}ct===void 0&&(ct=document.body.style.overflow,document.body.style.overflow="hidden")},Kt=function(){dt!==void 0&&(document.body.style.paddingRight=dt,dt=void 0),ct!==void 0&&(document.body.style.overflow=ct,ct=void 0)},ln=function(){return window.requestAnimationFrame(function(){if(tt===void 0){tt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,i=e.scrollY,h=e.scrollX,x=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-i,document.body.style.left=-h,setTimeout(function(){return window.requestAnimationFrame(function(){var F=x-window.innerHeight;F&&i>=x&&(document.body.style.top=-(i+F))})},300)}})},Qt=function(){if(tt!==void 0){var e=-parseInt(document.body.style.top,10),i=-parseInt(document.body.style.left,10);document.body.style.position=tt.position,document.body.style.top=tt.top,document.body.style.left=tt.left,window.scrollTo(i,e),tt=void 0}},cn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},dn=function(e,i){var h=e.targetTouches[0].clientY-Nt;return Gt(e.target)?!1:i&&i.scrollTop===0&&h>0||cn(i)&&h<0?ft(e):(e.stopPropagation(),!0)},fn=function(e,i){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Be.some(function(x){return x.targetElement===e})){var h={targetElement:e,options:i||{}};Be=[].concat(sn(Be),[h]),ut?ln():un(i),ut&&(e.ontouchstart=function(x){x.targetTouches.length===1&&(Nt=x.targetTouches[0].clientY)},e.ontouchmove=function(x){x.targetTouches.length===1&&dn(x,e)},lt||(document.addEventListener("touchmove",ft,yt?{passive:!1}:void 0),lt=!0))}},hn=function(){ut&&(Be.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),lt&&(document.removeEventListener("touchmove",ft,yt?{passive:!1}:void 0),lt=!1),Nt=-1),ut?Qt():Kt(),Be=[]},mn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Be=Be.filter(function(i){return i.targetElement!==e}),ut&&(e.ontouchstart=null,e.ontouchmove=null,lt&&Be.length===0&&(document.removeEventListener("touchmove",ft,yt?{passive:!1}:void 0),lt=!1)),ut?Qt():Kt()},Ft={},gn={get exports(){return Ft},set exports(s){Ft=s}},wt={},It={},pn={get exports(){return It},set exports(s){It=s}};(function(s){(function(e){if(typeof window>"u")return;var i=0,h=!1,x=!1,F="message",te=F.length,ae="[iFrameSizer]",Q=ae.length,P=null,oe=window.requestAnimationFrame,He={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},a={},ve=null,Oe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){ne("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function $(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function le(r,u,k){r.addEventListener(u,k,!1)}function We(r,u,k){r.removeEventListener(u,k,!1)}function G(){var r=["moz","webkit","o","ms"],u;for(u=0;u<r.length&&!oe;u+=1)oe=window[r[u]+"RequestAnimationFrame"];oe?oe=oe.bind(window):j("setup","RequestAnimationFrame not supported")}function D(r){var u="Host page: "+r;return window.top!==window.self&&(u=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+r:"Nested host page: "+r),u}function se(r){return ae+"["+D(r)+"]"}function Le(r){return a[r]?a[r].log:h}function j(r,u){be("log",r,u,Le(r))}function Se(r,u){be("info",r,u,Le(r))}function ne(r,u){be("warn",r,u,!0)}function be(r,u,k,b){b===!0&&typeof window.console=="object"&&console[r](se(u),k)}function ot(r){function u(){function f(){ie(I),de(w),ge("onResized",I)}S("Height"),S("Width"),ye(f,I,"init")}function k(){var f=Z.substr(Q).split(":"),T=f[1]?parseInt(f[1],10):0,l=a[f[0]]&&a[f[0]].iframe,o=getComputedStyle(l);return{iframe:l,id:f[0],height:T+b(o)+E(o),width:f[2],type:f[3]}}function b(f){if(f.boxSizing!=="border-box")return 0;var T=f.paddingTop?parseInt(f.paddingTop,10):0,l=f.paddingBottom?parseInt(f.paddingBottom,10):0;return T+l}function E(f){if(f.boxSizing!=="border-box")return 0;var T=f.borderTopWidth?parseInt(f.borderTopWidth,10):0,l=f.borderBottomWidth?parseInt(f.borderBottomWidth,10):0;return T+l}function S(f){var T=Number(a[w]["max"+f]),l=Number(a[w]["min"+f]),o=f.toLowerCase(),d=Number(I[o]);j(w,"Checking "+o+" is in range "+l+"-"+T),d<l&&(d=l,j(w,"Set "+o+" to min value")),d>T&&(d=T,j(w,"Set "+o+" to max value")),I[o]=""+d}function H(){function f(){function o(){var m=0,v=!1;for(j(w,"Checking connection is from allowed list of origins: "+l);m<l.length;m++)if(l[m]===T){v=!0;break}return v}function d(){var m=a[w]&&a[w].remoteHost;return j(w,"Checking connection is from: "+m),T===m}return l.constructor===Array?o():d()}var T=r.origin,l=a[w]&&a[w].checkOrigin;if(l&&""+T!="null"&&!f())throw new Error("Unexpected message received from: "+T+" for "+I.iframe.id+". Message was: "+r.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function he(){return ae===(""+Z).substr(0,Q)&&Z.substr(Q).split(":")[0]in a}function re(){var f=I.type in{true:1,false:1,undefined:1};return f&&j(w,"Ignoring init message from meta parent page"),f}function ue(f){return Z.substr(Z.indexOf(":")+te+f)}function me(f){j(w,"onMessage passed: {iframe: "+I.iframe.id+", message: "+f+"}"),ge("onMessage",{iframe:I.iframe,message:JSON.parse(f)}),j(w,"--")}function q(){var f=document.body.getBoundingClientRect(),T=I.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:T.height,iframeWidth:T.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(T.top-f.top,10),offsetLeft:parseInt(T.left-f.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Ne(f,T){function l(){L("Send Page Info","pageInfo:"+q(),f,T)}we(l,32,T)}function Ie(){function f(d,m){function v(){a[o]?Ne(a[o].iframe,o):T()}["scroll","resize"].forEach(function(M){j(o,d+M+" listener for sendPageInfo"),m(window,M,v)})}function T(){f("Remove ",We)}function l(){f("Add ",le)}var o=w;l(),a[o]&&(a[o].stopPageInfo=T)}function ze(){a[w]&&a[w].stopPageInfo&&(a[w].stopPageInfo(),delete a[w].stopPageInfo)}function Te(){var f=!0;return I.iframe===null&&(ne(w,"IFrame ("+I.id+") not found"),f=!1),f}function p(f){var T=f.getBoundingClientRect();return qe(w),{x:Math.floor(Number(T.left)+Number(P.x)),y:Math.floor(Number(T.top)+Number(P.y))}}function y(f){function T(){P=m,N(),j(w,"--")}function l(){return{x:Number(I.width)+d.x,y:Number(I.height)+d.y}}function o(){window.parentIFrame?window.parentIFrame["scrollTo"+(f?"Offset":"")](m.x,m.y):ne(w,"Unable to scroll to requested position, window.parentIFrame not found")}var d=f?p(I.iframe):{x:0,y:0},m=l();j(w,"Reposition requested from iFrame (offset x:"+d.x+" y:"+d.y+")"),window.top!==window.self?o():T()}function N(){ge("onScroll",P)!==!1?de(w):Ke()}function U(f){function T(){var v=p(m);j(w,"Moving to in page link (#"+o+") at x: "+v.x+" y: "+v.y),P={x:v.x,y:v.y},N(),j(w,"--")}function l(){window.parentIFrame?window.parentIFrame.moveToAnchor(o):j(w,"In page link #"+o+" not found and window.parentIFrame not found")}var o=f.split("#")[1]||"",d=decodeURIComponent(o),m=document.getElementById(d)||document.getElementsByName(d)[0];m?T():window.top!==window.self?l():j(w,"In page link #"+o+" not found")}function X(f){var T={};if(Number(I.width)===0&&Number(I.height)===0){var l=ue(9).split(":");T={x:l[1],y:l[0]}}else T={x:I.width,y:I.height};ge(f,{iframe:I.iframe,screenX:Number(T.x),screenY:Number(T.y),type:I.type})}function ge(f,T){return Me(w,f,T)}function Ze(){switch(a[w]&&a[w].firstRun&&et(),I.type){case"close":ce(I.iframe);break;case"message":me(ue(6));break;case"mouseenter":X("onMouseEnter");break;case"mouseleave":X("onMouseLeave");break;case"autoResize":a[w].autoResize=JSON.parse(ue(9));break;case"scrollTo":y(!1);break;case"scrollToOffset":y(!0);break;case"pageInfo":Ne(a[w]&&a[w].iframe,w),Ie();break;case"pageInfoStop":ze();break;case"inPageLink":U(ue(9));break;case"reset":Ee(I);break;case"init":u(),ge("onInit",I.iframe);break;default:Number(I.width)===0&&Number(I.height)===0?ne("Unsupported message received ("+I.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):u()}}function Ye(f){var T=!0;return a[f]||(T=!1,ne(I.type+" No settings for "+f+". Message was: "+Z)),T}function Je(){for(var f in a)L("iFrame requested init",Ve(f),a[f].iframe,f)}function et(){a[w]&&(a[w].firstRun=!1)}var Z=r.data,I={},w=null;Z==="[iFrameResizerChild]Ready"?Je():he()?(I=k(),w=I.id,a[w]&&(a[w].loaded=!0),!re()&&Ye(w)&&(j(w,"Received: "+Z),Te()&&H()&&Ze())):Se(w,"Ignored: "+Z)}function Me(r,u,k){var b=null,E=null;if(a[r])if(b=a[r][u],typeof b=="function")E=b(k);else throw new TypeError(u+" on iFrame["+r+"] is not a function");return E}function De(r){var u=r.id;delete a[u]}function ce(r){var u=r.id;if(Me(u,"onClose",u)===!1){j(u,"Close iframe cancelled by onClose event");return}j(u,"Removing iFrame: "+u);try{r.parentNode&&r.parentNode.removeChild(r)}catch(k){ne(k)}Me(u,"onClosed",u),j(u,"--"),De(r)}function qe(r){P===null&&(P={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},j(r,"Get page position: "+P.x+","+P.y))}function de(r){P!==null&&(window.scrollTo(P.x,P.y),j(r,"Set page position: "+P.x+","+P.y),Ke())}function Ke(){P=null}function Ee(r){function u(){ie(r),L("reset","reset",r.iframe,r.id)}j(r.id,"Size reset requested by "+(r.type==="init"?"host page":"iFrame")),qe(r.id),ye(u,r,"reset")}function ie(r){function u(S){if(!r.id){j("undefined","messageData id not set");return}r.iframe.style[S]=r[S]+"px",j(r.id,"IFrame ("+E+") "+S+" set to "+r[S]+"px")}function k(S){!x&&r[S]==="0"&&(x=!0,j(E,"Hidden iFrame detected, creating visibility listener"),Qe())}function b(S){u(S),k(S)}var E=r.iframe.id;a[E]&&(a[E].sizeHeight&&b("height"),a[E].sizeWidth&&b("width"))}function ye(r,u,k){k!==u.type&&oe&&!window.jasmine?(j(u.id,"Requesting animation frame"),oe(r)):r()}function L(r,u,k,b,E){function S(){var me=a[b]&&a[b].targetOrigin;j(b,"["+r+"] Sending msg to iframe["+b+"] ("+u+") targetOrigin: "+me),k.contentWindow.postMessage(ae+u,me)}function H(){ne(b,"["+r+"] IFrame("+b+") not found")}function he(){k&&"contentWindow"in k&&k.contentWindow!==null?S():H()}function re(){function me(){a[b]&&!a[b].loaded&&!ue&&(ue=!0,ne(b,"IFrame has not responded within "+a[b].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}E&&a[b]&&a[b].warningTimeout&&(a[b].msgTimeout=setTimeout(me,a[b].warningTimeout))}var ue=!1;b=b||k.id,a[b]&&(he(),re())}function Ve(r){return r+":"+a[r].bodyMarginV1+":"+a[r].sizeWidth+":"+a[r].log+":"+a[r].interval+":"+a[r].enablePublicMethods+":"+a[r].autoResize+":"+a[r].bodyMargin+":"+a[r].heightCalculationMethod+":"+a[r].bodyBackground+":"+a[r].bodyPadding+":"+a[r].tolerance+":"+a[r].inPageLinks+":"+a[r].resizeFrom+":"+a[r].widthCalculationMethod+":"+a[r].mouseEvents}function $e(r){return typeof r=="number"}function Ae(r,u){function k(){function y(U){var X=a[p][U];X!==1/0&&X!==0&&(r.style[U]=$e(X)?X+"px":X,j(p,"Set "+U+" = "+r.style[U]))}function N(U){if(a[p]["min"+U]>a[p]["max"+U])throw new Error("Value for min"+U+" can not be greater than max"+U)}N("Height"),N("Width"),y("maxHeight"),y("minHeight"),y("maxWidth"),y("minWidth")}function b(){var y=u&&u.id||Oe.id+i++;return document.getElementById(y)!==null&&(y+=i++),y}function E(y){return y===""&&(r.id=y=b(),h=(u||{}).log,j(y,"Added missing iframe ID: "+y+" ("+r.src+")")),y}function S(){switch(j(p,"IFrame scrolling "+(a[p]&&a[p].scrolling?"enabled":"disabled")+" for "+p),r.style.overflow=(a[p]&&a[p].scrolling)===!1?"hidden":"auto",a[p]&&a[p].scrolling){case"omit":break;case!0:r.scrolling="yes";break;case!1:r.scrolling="no";break;default:r.scrolling=a[p]?a[p].scrolling:"no"}}function H(){(typeof(a[p]&&a[p].bodyMargin)=="number"||(a[p]&&a[p].bodyMargin)==="0")&&(a[p].bodyMarginV1=a[p].bodyMargin,a[p].bodyMargin=""+a[p].bodyMargin+"px")}function he(){var y=a[p]&&a[p].firstRun,N=a[p]&&a[p].heightCalculationMethod in He;!y&&N&&Ee({iframe:r,height:0,width:0,type:"init"})}function re(){a[p]&&(a[p].iframe.iFrameResizer={close:ce.bind(null,a[p].iframe),removeListeners:De.bind(null,a[p].iframe),resize:L.bind(null,"Window resize","resize",a[p].iframe),moveToAnchor:function(y){L("Move to anchor","moveToAnchor:"+y,a[p].iframe,p)},sendMessage:function(y){y=JSON.stringify(y),L("Send Message","message:"+y,a[p].iframe,p)}})}function ue(y){function N(){L("iFrame.onload",y,r,e,!0),he()}function U(ge){if(r.parentNode){var Ze=new ge(function(Ye){Ye.forEach(function(Je){var et=Array.prototype.slice.call(Je.removedNodes);et.forEach(function(Z){Z===r&&ce(r)})})});Ze.observe(r.parentNode,{childList:!0})}}var X=$();X&&U(X),le(r,"load",N),L("init",y,r,e,!0)}function me(y){if(typeof y!="object")throw new TypeError("Options is not an object")}function q(y){for(var N in Oe)Object.prototype.hasOwnProperty.call(Oe,N)&&(a[p][N]=Object.prototype.hasOwnProperty.call(y,N)?y[N]:Oe[N])}function Ne(y){return y===""||y.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":y}function Ie(y){var N=y.split("Callback");if(N.length===2){var U="on"+N[0].charAt(0).toUpperCase()+N[0].slice(1);this[U]=this[y],delete this[y],ne(p,"Deprecated: '"+y+"' has been renamed '"+U+"'. The old method will be removed in the next major version.")}}function ze(y){y=y||{},a[p]={firstRun:!0,iframe:r,remoteHost:r.src&&r.src.split("/").slice(0,3).join("/")},me(y),Object.keys(y).forEach(Ie,y),q(y),a[p]&&(a[p].targetOrigin=a[p].checkOrigin===!0?Ne(a[p].remoteHost):"*")}function Te(){return p in a&&"iFrameResizer"in r}var p=E(r.id);Te()?ne(p,"Ignored iFrame, already setup."):(ze(u),S(),k(),H(),ue(Ve(p)),re())}function fe(r,u){ve===null&&(ve=setTimeout(function(){ve=null,r()},u))}var Re={};function we(r,u,k){Re[k]||(Re[k]=setTimeout(function(){Re[k]=null,r()},u))}function Qe(){function r(){function E(S){function H(re){return(a[S]&&a[S].iframe.style[re])==="0px"}function he(re){return re.offsetParent!==null}a[S]&&he(a[S].iframe)&&(H("height")||H("width"))&&L("Visibility change","resize",a[S].iframe,S)}Object.keys(a).forEach(function(S){E(S)})}function u(E){j("window","Mutation observed: "+E[0].target+" "+E[0].type),fe(r,16)}function k(){var E=document.querySelector("body"),S={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},H=new b(u);H.observe(E,S)}var b=$();b&&k()}function rt(r){function u(){ke("Window "+r,"resize")}j("window","Trigger event: "+r),fe(u,16)}function Xe(){function r(){ke("Tab Visable","resize")}document.visibilityState!=="hidden"&&(j("document","Trigger event: Visiblity change"),fe(r,16))}function ke(r,u){function k(b){return a[b]&&a[b].resizeFrom==="parent"&&a[b].autoResize&&!a[b].firstRun}Object.keys(a).forEach(function(b){k(b)&&L(r,u,a[b].iframe,b)})}function Ue(){le(window,"message",ot),le(window,"resize",function(){rt("resize")}),le(document,"visibilitychange",Xe),le(document,"-webkit-visibilitychange",Xe)}function Fe(){function r(b,E){function S(){if(E.tagName){if(E.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+E.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}E&&(S(),Ae(E,b),k.push(E))}function u(b){b&&b.enablePublicMethods&&ne("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var k;return G(),Ue(),function(E,S){switch(k=[],u(E),typeof S){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(S||"iframe"),r.bind(e,E));break;case"object":r(E,S);break;default:throw new TypeError("Unexpected data type ("+typeof S+")")}return k}}function it(r){r.fn?r.fn.iFrameResize||(r.fn.iFrameResize=function(k){function b(E,S){Ae(S,k)}return this.filter("iframe").each(b).end()}):Se("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&it(window.jQuery),typeof e=="function"&&e.amd?e([],Fe):s.exports=Fe(),window.iFrameResize=window.iFrameResize||Fe()})()})(pn);var zt={},vn={get exports(){return zt},set exports(s){zt=s}};(function(s){(function(e){if(typeof window>"u")return;var i=!0,h=10,x="",F=0,te="",ae=null,Q="",P=!1,oe={resize:1,click:1},He=128,a=!0,ve=1,Oe="bodyOffset",$=Oe,le=!0,We="",G={},D=32,se=null,Le=!1,j=!1,Se="[iFrameSizer]",ne=Se.length,be="",ot={max:1,min:1,bodyScroll:1,documentElementScroll:1},Me="child",De=window.parent,ce="*",qe=0,de=!1,Ke=null,Ee=16,ie=1,ye="scroll",L=ye,Ve=window,$e=function(){k("onMessage function not defined")},Ae=function(){},fe=function(){},Re={height:function(){return k("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return k("Custom width calculation function not defined"),document.body.scrollWidth}},we={},Qe=!1;function rt(){}try{var Xe=Object.create({},{passive:{get:function(){Qe=!0}}});window.addEventListener("test",rt,Xe),window.removeEventListener("test",rt,Xe)}catch{}function ke(t,n,c,g){t.addEventListener(n,c,Qe?g||{}:!1)}function Ue(t,n,c){t.removeEventListener(n,c,!1)}function Fe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function it(t){var n,c,g,A=null,R=0,J=function(){R=Date.now(),A=null,g=t.apply(n,c),A||(n=c=null)};return function(){var K=Date.now();R||(R=K);var _=Ee-(K-R);return n=this,c=arguments,_<=0||_>Ee?(A&&(clearTimeout(A),A=null),R=K,g=t.apply(n,c),A||(n=c=null)):A||(A=setTimeout(J,_)),g}}function r(t){return Se+"["+be+"] "+t}function u(t){Le&&typeof window.console=="object"&&console.log(r(t))}function k(t){typeof window.console=="object"&&console.warn(r(t))}function b(){E(),u("Initialising iFrame ("+window.location.href+")"),H(),ue(),re("background",x),re("padding",Q),U(),ze(),Te(),me(),Ze(),ge(),p(),G=X(),M("init","Init message from host page"),Ae()}function E(){function t(c){return c==="true"}var n=We.substr(ne).split(":");be=n[0],F=e!==n[1]?Number(n[1]):F,P=e!==n[2]?t(n[2]):P,Le=e!==n[3]?t(n[3]):Le,D=e!==n[4]?Number(n[4]):D,i=e!==n[6]?t(n[6]):i,te=n[7],$=e!==n[8]?n[8]:$,x=n[9],Q=n[10],qe=e!==n[11]?Number(n[11]):qe,G.enable=e!==n[12]?t(n[12]):!1,Me=e!==n[13]?n[13]:Me,L=e!==n[14]?n[14]:L,j=e!==n[15]?Boolean(n[15]):j}function S(t){var n=t.split("Callback");if(n.length===2){var c="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[c]=this[t],delete this[t],k("Deprecated: '"+t+"' has been renamed '"+c+"'. The old method will be removed in the next major version.")}}function H(){function t(){var c=window.iFrameResizer;u("Reading data from page: "+JSON.stringify(c)),Object.keys(c).forEach(S,c),$e="onMessage"in c?c.onMessage:$e,Ae="onReady"in c?c.onReady:Ae,ce="targetOrigin"in c?c.targetOrigin:ce,$="heightCalculationMethod"in c?c.heightCalculationMethod:$,L="widthCalculationMethod"in c?c.widthCalculationMethod:L}function n(c,g){return typeof c=="function"&&(u("Setup custom "+g+"CalcMethod"),Re[g]=c,c="custom"),c}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),$=n($,"height"),L=n(L,"width")),u("TargetOrigin for parent set to: "+ce)}function he(t,n){return n.indexOf("-")!==-1&&(k("Negative CSS value ignored for "+t),n=""),n}function re(t,n){e!==n&&n!==""&&n!=="null"&&(document.body.style[t]=n,u("Body "+t+' set to "'+n+'"'))}function ue(){e===te&&(te=F+"px"),re("margin",he("margin",te))}function me(){document.documentElement.style.height="",document.body.style.height="",u('HTML & body height set to "auto"')}function q(t){var n={add:function(c){function g(){M(t.eventName,t.eventType)}we[c]=g,ke(window,c,g,{passive:!0})},remove:function(c){var g=we[c];delete we[c],Ue(window,c,g)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(n[t.method])):n[t.method](t.eventName),u(Fe(t.method)+" event listener: "+t.eventType)}function Ne(t){q({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),q({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),q({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),q({method:t,eventType:"Input",eventName:"input"}),q({method:t,eventType:"Mouse Up",eventName:"mouseup"}),q({method:t,eventType:"Mouse Down",eventName:"mousedown"}),q({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),q({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),q({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),q({method:t,eventType:"Touch Start",eventName:"touchstart"}),q({method:t,eventType:"Touch End",eventName:"touchend"}),q({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),q({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),q({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),q({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),Me==="child"&&q({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Ie(t,n,c,g){return n!==t&&(t in c||(k(t+" is not a valid option for "+g+"CalculationMethod."),t=n),u(g+' calculation method set to "'+t+'"')),t}function ze(){$=Ie($,Oe,o,"height")}function Te(){L=Ie(L,ye,d,"width")}function p(){i===!0?(Ne("add"),et()):u("Auto Resize disabled")}function y(){ae!==null&&ae.disconnect()}function N(){Ne("remove"),y(),clearInterval(se)}function U(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function X(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function n(_){var W=_.getBoundingClientRect(),B=t();return{x:parseInt(W.left,10)+parseInt(B.x,10),y:parseInt(W.top,10)+parseInt(B.y,10)}}function c(_){function W(xe){var at=n(xe);u("Moving to in page link (#"+B+") at x: "+at.x+" y: "+at.y),Y(at.y,at.x,"scrollToOffset")}var B=_.split("#")[1]||_,z=decodeURIComponent(B),pe=document.getElementById(z)||document.getElementsByName(z)[0];e!==pe?W(pe):(u("In page link (#"+B+") not found in iFrame, so sending to parent"),Y(0,0,"inPageLink","#"+B))}function g(){var _=window.location.hash,W=window.location.href;_!==""&&_!=="#"&&c(W)}function A(){function _(W){function B(z){z.preventDefault(),c(this.getAttribute("href"))}W.getAttribute("href")!=="#"&&ke(W,"click",B)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),_)}function R(){ke(window,"hashchange",g)}function J(){setTimeout(g,He)}function K(){Array.prototype.forEach&&document.querySelectorAll?(u("Setting up location.hash handlers"),A(),R(),J()):k("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return G.enable?K():u("In page linking not enabled"),{findTarget:c}}function ge(){if(j!==!0)return;function t(c){Y(0,0,c.type,c.screenY+":"+c.screenX)}function n(c,g){u("Add event listener: "+g),ke(window.document,c,t)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}function Ze(){u("Enable public methods"),Ve.parentIFrame={autoResize:function(n){return n===!0&&i===!1?(i=!0,p()):n===!1&&i===!0&&(i=!1,N()),Y(0,0,"autoResize",JSON.stringify(i)),i},close:function(){Y(0,0,"close")},getId:function(){return be},getPageInfo:function(n){typeof n=="function"?(fe=n,Y(0,0,"pageInfo")):(fe=function(){},Y(0,0,"pageInfoStop"))},moveToAnchor:function(n){G.findTarget(n)},reset:function(){V("parentIFrame.reset")},scrollTo:function(n,c){Y(c,n,"scrollTo")},scrollToOffset:function(n,c){Y(c,n,"scrollToOffset")},sendMessage:function(n,c){Y(0,0,"message",JSON.stringify(n),c)},setHeightCalculationMethod:function(n){$=n,ze()},setWidthCalculationMethod:function(n){L=n,Te()},setTargetOrigin:function(n){u("Set targetOrigin: "+n),ce=n},size:function(n,c){var g=""+(n||"")+(c?","+c:"");M("size","parentIFrame.size("+g+")",n,c)}}}function Ye(){D!==0&&(u("setInterval: "+D+"ms"),se=setInterval(function(){M("interval","setInterval: "+D)},Math.abs(D)))}function Je(){function t(z){function pe(xe){xe.complete===!1&&(u("Attach listeners to "+xe.src),xe.addEventListener("load",A,!1),xe.addEventListener("error",R,!1),_.push(xe))}z.type==="attributes"&&z.attributeName==="src"?pe(z.target):z.type==="childList"&&Array.prototype.forEach.call(z.target.querySelectorAll("img"),pe)}function n(z){_.splice(_.indexOf(z),1)}function c(z){u("Remove listeners from "+z.src),z.removeEventListener("load",A,!1),z.removeEventListener("error",R,!1),n(z)}function g(z,pe,xe){c(z.target),M(pe,xe+": "+z.target.src)}function A(z){g(z,"imageLoad","Image loaded")}function R(z){g(z,"imageLoadFailed","Image load failed")}function J(z){M("mutationObserver","mutationObserver: "+z[0].target+" "+z[0].type),z.forEach(t)}function K(){var z=document.querySelector("body"),pe={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return B=new W(J),u("Create body MutationObserver"),B.observe(z,pe),B}var _=[],W=window.MutationObserver||window.WebKitMutationObserver,B=K();return{disconnect:function(){"disconnect"in B&&(u("Disconnect body MutationObserver"),B.disconnect(),_.forEach(c))}}}function et(){var t=0>D;window.MutationObserver||window.WebKitMutationObserver?t?Ye():ae=Je():(u("MutationObserver not supported in this browser!"),Ye())}function Z(t,n){var c=0;return n=n||document.body,c=document.defaultView.getComputedStyle(n,null),c=c!==null?c[t]:0,parseInt(c,h)}function I(t){t>Ee/2&&(Ee=2*t,u("Event throttle increased to "+Ee+"ms"))}function w(t,n){for(var c=n.length,g=0,A=0,R=Fe(t),J=Date.now(),K=0;K<c;K++)g=n[K].getBoundingClientRect()[t]+Z("margin"+R,n[K]),g>A&&(A=g);return J=Date.now()-J,u("Parsed "+c+" HTML elements"),u("Element position calculated in "+J+"ms"),I(J),A}function f(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function T(t,n){function c(){return k("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}var g=document.querySelectorAll("["+n+"]");return g.length===0&&c(),w(t,g)}function l(){return document.querySelectorAll("body *")}var o={bodyOffset:function(){return document.body.offsetHeight+Z("marginTop")+Z("marginBottom")},offset:function(){return o.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Re.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,f(o))},min:function(){return Math.min.apply(null,f(o))},grow:function(){return o.max()},lowestElement:function(){return Math.max(o.bodyOffset()||o.documentElementOffset(),w("bottom",l()))},taggedElement:function(){return T("bottom","data-iframe-height")}},d={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Re.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(d.bodyScroll(),d.documentElementScroll())},max:function(){return Math.max.apply(null,f(d))},min:function(){return Math.min.apply(null,f(d))},rightMostElement:function(){return w("right",l())},taggedElement:function(){return T("right","data-iframe-width")}};function m(t,n,c,g){function A(){ve=B,ie=z,Y(ve,ie,t)}function R(){function pe(xe,at){var tn=Math.abs(xe-at)<=qe;return!tn}return B=e!==c?c:o[$](),z=e!==g?g:d[L](),pe(ve,B)||P&&pe(ie,z)}function J(){return!(t in{init:1,interval:1,size:1})}function K(){return $ in ot||P&&L in ot}function _(){u("No change in size detected")}function W(){J()&&K()?V(n):t in{interval:1}||_()}var B,z;R()||t==="init"?(O(),A()):W()}var v=it(m);function M(t,n,c,g){function A(){t in{reset:1,resetPage:1,init:1}||u("Trigger event: "+n)}function R(){return de&&t in oe}R()?u("Trigger event cancelled: "+t):(A(),t==="init"?m(t,n,c,g):v(t,n,c,g))}function O(){de||(de=!0,u("Trigger event lock on")),clearTimeout(Ke),Ke=setTimeout(function(){de=!1,u("Trigger event lock off"),u("--")},He)}function C(t){ve=o[$](),ie=d[L](),Y(ve,ie,t)}function V(t){var n=$;$=Oe,u("Reset trigger event: "+t),O(),C("reset"),$=n}function Y(t,n,c,g,A){function R(){e===A?A=ce:u("Message targetOrigin: "+A)}function J(){var K=t+":"+n,_=be+":"+K+":"+c+(e!==g?":"+g:"");u("Sending message to host page ("+_+")"),De.postMessage(Se+_,A)}R(),J()}function Ce(t){var n={init:function(){We=t.data,De=t.source,b(),a=!1,setTimeout(function(){le=!1},He)},reset:function(){le?u("Page reset ignored by init"):(u("Page size reset by host page"),C("resetPage"))},resize:function(){M("resizeParent","Parent window requested size check")},moveToAnchor:function(){G.findTarget(A())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var B=A();u("PageInfoFromParent called from parent: "+B),fe(JSON.parse(B)),u(" --")},message:function(){var B=A();u("onMessage called from parent: "+B),$e(JSON.parse(B)),u(" --")}};function c(){return Se===(""+t.data).substr(0,ne)}function g(){return t.data.split("]")[1].split(":")[0]}function A(){return t.data.substr(t.data.indexOf(":")+1)}function R(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function J(){return t.data.split(":")[2]in{true:1,false:1}}function K(){var W=g();W in n?n[W]():!R()&&!J()&&k("Unexpected message ("+t.data+")")}function _(){a===!1?K():J()?n.init():u('Ignored message of type "'+g()+'". Received before initialization.')}c()&&_()}function ee(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ke(window,"message",Ce),ke(window,"readystatechange",ee),ee()})()})(vn);var Xt=It;wt.iframeResize=Xt;wt.iframeResizer=Xt;wt.iframeResizerContentWindow=zt;(function(s){s.exports=wt})(gn);function bn(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function yn(s){const e=bn(s),i=e.href.substr(0,e.href.length-e.hash.length),h=window.location.href.replace(/#.*$/,"");return e.hash&&i===h}function Zt(s,e){const i=JSON.stringify(e);let h=0;if(i.length===0)return h;for(let x=0;x<i.length;x++){const F=i.charCodeAt(x);h=(h<<5)-h+F,h&=h}return`${s}-${h}`}function wn(s,e,i){const h=document.createElement("form"),x=document.createElement("input");return h.action=s,h.method="POST",h.target=i,e.forEach(([F,te])=>{x.name=F,x.value=te.toString(),h.appendChild(x.cloneNode())}),h.style.visibility="hidden",h}function kn(s){const e=s.composedPath();for(let i=0;i<e.indexOf(document.body);i++){const h=e[i];if(h.hasAttribute&&h.hasAttribute("target")&&h!==document.body)return h}}function Tn(s,e){if(s.hasAttribute("data-modal-post")){const i=s.getAttribute("data-modal-post");e.method="POST",e.body=i;const h=[];return new URL(`http://localhost/?${i}`).searchParams.forEach((x,F)=>{h.push([F,x])}),[h,e]}return[null,e]}function xn(s,e,i,h,x){const F=document.createElement("toujou-modal"),te=document.createElement("iframe"),ae=Zt("iframe",e);if(F.id=s,te.name=ae,document.body.appendChild(F),yn(i)){const Q=document.querySelector(i),P=Q instanceof HTMLTemplateElement?document.importNode(Q.content,!0).children:Q.childNodes;Q.title&&(F.title=Q.title);for(let oe=0;oe<P.length;oe++)F.appendChild(P[oe])}else if(x&&h==="POST"){const Q=wn(i,x,ae);F.appendChild(Q),F.appendChild(te),Q.submit(),Q.remove()}else h==="GET"&&(te.src=i,F.appendChild(te));return F}function jn(s,e,i,h){const x=Zt("toujou-modal",s),F=document.getElementById(x)||xn(x,s,e,i,h);setTimeout(()=>{F.open()})}const On=s=>{if(s.metaKey||s.ctrlKey)return;const e=kn(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const i=e.getAttribute("href"),h=i.indexOf("?")!==-1?i.split("?")[0]+"?toujou-ajax-modal=1&"+i.split("?")[1]:i.indexOf("#")!==-1?i.split("#")[0]+"?toujou-ajax-modal=1#"+i.split("#")[1]:i+"?toujou-ajax-modal=1",[x,F]=Tn(e,{src:h});jn(F,h,x?"POST":"GET",x),s.preventDefault(),s.stopPropagation()}},Sn=ht`
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

`,Mn={reserveScrollBarGap:!0},st=[];function En(s){st.forEach(e=>e.close()),st.push(s)}function An(s){if(s===st[st.length-1]){st.pop();const e=st.pop();e&&e.open()}}class Ct extends nt{static get is(){return"toujou-modal"}render(){return Pe`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?Pe`
                    <button id="dog-ear-close" dialog-dismiss></button>`:Pe`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(i=>{i[0]&&this.onPosition(i[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){hn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":fn(this.$.scroller,Mn),En(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),An(this),this.allowOutsideScroll?document.body.style.position="":mn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const i=e.composedPath();(!i.includes(this.$.modalContent)||i.some(h=>h instanceof HTMLElement&&h.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const i=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=i?`${i}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(i=>i instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((i,h)=>{e.includes(h)||this.iframeResizerMap.delete(h)}),e.forEach(i=>{this.loading=!0,i.addEventListener("load",()=>{this.iframeResizerMap.has(i)||this.listenToIframeReadyState(i)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let i={};try{i=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(h){(console.error||console.log).call(console,h.stack||h)}return i.initCallback=()=>{this.loading=!1},i.closedCallback=()=>{this.close()},Ft.iframeResizer(i,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}_t(Ct,"styles",[Sn]);customElements.define(Ct.is,Ct);document.addEventListener("click",On);var pt,vt,bt;(function(s){s.PRIMARY="primary",s.SECONDARY="secondary",s.FONT="font"})(pt||(pt={})),function(s){s.DEFAULT="default",s.BORDER="border",s.GHOST="ghost"}(vt||(vt={})),function(s){s.TINY="tiny",s.SMALL="small",s.NORMAL="normal",s.LARGE="large"}(bt||(bt={}));let Rn=class extends HTMLButtonElement{constructor(){super(),this.defaultButtonVariant=pt.PRIMARY,this.defaultButtonType=vt.DEFAULT,this.defaultButtonSize=bt.NORMAL}connectedCallback(){this._checkRequiredAttributes()}_checkRequiredAttributes(){const e=this.getAttribute("button-variant");e?Object.values(pt).includes(e)||(console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`),this.setAttribute("button-variant",this.defaultButtonVariant)):this.setAttribute("button-variant",this.defaultButtonVariant);const i=this.getAttribute("button-size");i?Object.values(bt).includes(i)||(console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`),this.setAttribute("button-size",this.defaultButtonSize)):this.setAttribute("button-size",this.defaultButtonSize);const h=this.getAttribute("button-type");h?Object.values(vt).includes(h)||(console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`),this.setAttribute("button-type",this.defaultButtonType)):this.setAttribute("button-type",this.defaultButtonType)}};customElements.define("toujou-button",Rn,{extends:"button"});var Pt,gt,en;let _e=class extends nt{get result(){const e=Math.round(this.duration);return e===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:e===1?`1 ${this.minutesSingularText}`:`${e} ${this.minutesPluralText}`}render(){return Pe`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),Pt.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,gt.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=kt(this,Pt,"m",en).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(kt(this,gt,"f")):document.addEventListener("DOMContentLoaded",kt(this,gt,"f"))}updated(e){e.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};gt=new WeakMap,Pt=new WeakSet,en=function(s){const e=s.textContent,i=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),h=i==null?void 0:i.trim(),x=h==null?void 0:h.split(" ");return(x==null?void 0:x.length)||0},je([Ge({type:Number})],_e.prototype,"wordCount",void 0),je([Ge({type:Number})],_e.prototype,"duration",void 0),je([Ge({type:String,attribute:"target-selector"})],_e.prototype,"targetSelector",void 0),je([Ge({type:String,attribute:"minutes-singular-text"})],_e.prototype,"minutesSingularText",void 0),je([Ge({type:String,attribute:"minutes-plural-text"})],_e.prototype,"minutesPluralText",void 0),je([Ge({type:String,attribute:"less-than-text"})],_e.prototype,"lessThanText",void 0),je([Ge({type:Number,attribute:"reading-speed"})],_e.prototype,"readingSpeed",void 0),_e=je([Lt("toujou-estimated-reading-time")],_e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Wt,Tt,xt,Fn=ht(Wt||(Tt=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],xt||(xt=Tt.slice(0)),Wt=Object.freeze(Object.defineProperties(Tt,{raw:{value:Object.freeze(xt)}}))));let jt=class extends nt{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return Pe`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&an(this._messageTemplate(Pe,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Dt(s){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}jt.styles=[Fn],jt=je([Lt("exit-warning")],jt),document.addEventListener("click",function(s){if(s.metaKey||s.ctrlKey)return;const e=function(i){const h=i.composedPath();for(let x=0;x<h.indexOf(document.body);x++){const F=h[x];if(F.hasAttribute&&F.hasAttribute("target")&&F!==document.body)return F}}(s);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Dt(e.getAttribute("href"))&&(s.preventDefault(),s.stopPropagation())}),window.addEventListener("message",function(s){s.origin===window.location.origin&&s.data.action!==void 0&&s.data.action==="toujou-exit-warning"&&s.data.targetUrl&&Dt(s.data.targetUrl)});let qt=class extends nt{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return Pe`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(i=>i.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const i=document.importNode(e.content,!0);e.parentNode.insertBefore(i,e)})}};customElements.define(qt.is,qt);var Vt,Ot,St,In=ht(Vt||(Ot=[`:host {
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
`],St||(St=Ot.slice(0)),Vt=Object.freeze(Object.defineProperties(Ot,{raw:{value:Object.freeze(St)}}))));let $t=class extends nt{static get is(){return"toujou-snackbar"}render(){return Pe`
      <p class="snackbar__message">${this.message}</p>
      <button
        class="snackbar__button"
        @click="${this._handleButtonClick}"
        aria-label="${this.buttonAriaLabel}"
      >${this.buttonText}</button>
    `}static get styles(){return[In]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String},buttonAriaLabel:{type:String,attribute:"button-aria-label"}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],this.buttonAriaLabel="Close the snackbar",window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define($t.is,$t);var Ut,Mt,Et,zn=ht(Ut||(Mt=[`* {
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
`],Et||(Et=Mt.slice(0)),Ut=Object.freeze(Object.defineProperties(Mt,{raw:{value:Object.freeze(Et)}}))));class Yt extends nt{static get is(){return"toujou-spinner"}static get styles(){return zn}render(){return Pe`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(Yt.is,Yt);var Jt,At,Rt,Cn=ht(Jt||(At=[` .open-button {
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
`],Rt||(Rt=At.slice(0)),Jt=Object.freeze(Object.defineProperties(At,{raw:{value:Object.freeze(Rt)}}))));let mt=class extends nt{constructor(){super(...arguments),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=s=>{s.preventDefault(),s.stopPropagation()},this.handleToggleClick=()=>{this.isOpen=!this.isOpen}}render(){return Pe`
            <slot name="open-button" class="open-button"  @click="${this.handleToggleClick}"></slot>
            <slot name="close-button" class="close-button" @click="${this.handleToggleClick}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}updated(s){var e,i;s.has("isOpen")&&(this.isOpen?(e=this.parentElement)===null||e===void 0||e.setAttribute(this.isOpenParentAttribute,""):(i=this.parentElement)===null||i===void 0||i.removeAttribute(this.isOpenParentAttribute))}};mt.styles=[Cn],je([Ge({type:Boolean,reflect:!0,attribute:"open"})],mt.prototype,"isOpen",void 0),mt=je([Lt("toujou-media-info")],mt);
//# sourceMappingURL=base.js.map
