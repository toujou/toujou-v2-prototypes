var Qt=Object.defineProperty;var Zt=(s,e,r)=>e in s?Qt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var zt=(s,e,r)=>(Zt(s,typeof e!="symbol"?e+"":e,r),r);import{i as st,s as Be,y as he,Z as en}from"./lit-element-6fe74b4f.js";import{_ as fe,a as ft}from"./tslib.es6-c85c2c5e.js";import"./query-assigned-elements-acf341e1.js";import{e as qt}from"./custom-element-73470d87.js";import{e as Me}from"./property-1027a1df.js";let ht=0,Ct=0;const Dt=getComputedStyle(document.documentElement),tn=".topbar, .inpage-nav, .navigation--inpage";function nn(){const s=parseInt(Dt.getPropertyValue("--toujou-scroll-padding-offset"));s&&(ht+=s);const e=Array.from(document.querySelectorAll(tn));e&&(e.forEach(r=>{Ct+=r.offsetHeight}),ht+=Ct),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${ht}px`)}function It(){Dt.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||nn()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{It()}):document.addEventListener("DOMContentLoaded",()=>{It()});function on(s){if(Array.isArray(s)){for(var e=0,r=Array(s.length);e<s.length;e++)r[e]=s[e];return r}else return Array.from(s)}var ut=!1;if(typeof window<"u"){var _t={get passive(){ut=!0}};window.addEventListener("testPassive",null,_t),window.removeEventListener("testPassive",null,_t)}var Ne=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),me=[],He=!1,Mt=-1,Ge=void 0,Ee=void 0,Qe=void 0,Vt=function(e){return me.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},Ze=function(e){var r=e||window.event;return Vt(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},rn=function(e){if(Qe===void 0){var r=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(r&&c>0){var v=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Qe=document.body.style.paddingRight,document.body.style.paddingRight=v+c+"px"}}Ge===void 0&&(Ge=document.body.style.overflow,document.body.style.overflow="hidden")},Ut=function(){Qe!==void 0&&(document.body.style.paddingRight=Qe,Qe=void 0),Ge!==void 0&&(document.body.style.overflow=Ge,Ge=void 0)},an=function(){return window.requestAnimationFrame(function(){if(Ee===void 0){Ee={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,c=e.scrollX,v=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var S=v-window.innerHeight;S&&r>=v&&(document.body.style.top=-(r+S))})},300)}})},$t=function(){if(Ee!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=Ee.position,document.body.style.top=Ee.top,document.body.style.left=Ee.left,window.scrollTo(r,e),Ee=void 0}},sn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},un=function(e,r){var c=e.targetTouches[0].clientY-Mt;return Vt(e.target)?!1:r&&r.scrollTop===0&&c>0||sn(r)&&c<0?Ze(e):(e.stopPropagation(),!0)},ln=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!me.some(function(v){return v.targetElement===e})){var c={targetElement:e,options:r||{}};me=[].concat(on(me),[c]),Ne?an():rn(r),Ne&&(e.ontouchstart=function(v){v.targetTouches.length===1&&(Mt=v.targetTouches[0].clientY)},e.ontouchmove=function(v){v.targetTouches.length===1&&un(v,e)},He||(document.addEventListener("touchmove",Ze,ut?{passive:!1}:void 0),He=!0))}},cn=function(){Ne&&(me.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),He&&(document.removeEventListener("touchmove",Ze,ut?{passive:!1}:void 0),He=!1),Mt=-1),Ne?$t():Ut(),me=[]},dn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}me=me.filter(function(r){return r.targetElement!==e}),Ne&&(e.ontouchstart=null,e.ontouchmove=null,He&&me.length===0&&(document.removeEventListener("touchmove",Ze,ut?{passive:!1}:void 0),He=!1)),Ne?$t():Ut()},kt={},fn={get exports(){return kt},set exports(s){kt=s}},lt={},xt={},hn={get exports(){return xt},set exports(s){xt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=0,c=!1,v=!1,S="message",U=S.length,Q="[iFrameSizer]",q=Q.length,z=null,$=window.requestAnimationFrame,We={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,ge={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){V("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(n,a,g){n.addEventListener(a,g,!1)}function et(n,a,g){n.removeEventListener(a,g,!1)}function we(){var n=["moz","webkit","o","ms"],a;for(a=0;a<n.length&&!$;a+=1)$=window[n[a]+"RequestAnimationFrame"];$?$=$.bind(window):w("setup","RequestAnimationFrame not supported")}function ae(n){var a="Host page: "+n;return window.top!==window.self&&(a=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),a}function tt(n){return Q+"["+ae(n)+"]"}function Oe(n){return i[n]?i[n].log:c}function w(n,a){pe("log",n,a,Oe(n))}function ye(n,a){pe("info",n,a,Oe(n))}function V(n,a){pe("warn",n,a,!0)}function pe(n,a,g,d){d===!0&&typeof window.console=="object"&&console[n](tt(a),g)}function nt(n){function a(){function l(){ve(T),xe(m),ce("onResized",T)}y("Height"),y("Width"),Ve(l,T,"init")}function g(){var l=D.substr(q).split(":"),p=l[1]?parseInt(l[1],10):0,M=i[l[0]]&&i[l[0]].iframe,x=getComputedStyle(M);return{iframe:M,id:l[0],height:p+d(x)+k(x),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,M=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+M}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,M=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+M}function y(l){var p=Number(i[m]["max"+l]),M=Number(i[m]["min"+l]),x=l.toLowerCase(),O=Number(T[x]);w(m,"Checking "+x+" is in range "+M+"-"+p),O<M&&(O=M,w(m,"Set "+x+" to min value")),O>p&&(O=p,w(m,"Set "+x+" to max value")),T[x]=""+O}function K(){function l(){function x(){var H=0,ee=!1;for(w(m,"Checking connection is from allowed list of origins: "+M);H<M.length;H++)if(M[H]===p){ee=!0;break}return ee}function O(){var H=i[m]&&i[m].remoteHost;return w(m,"Checking connection is from: "+H),p===H}return M.constructor===Array?x():O()}var p=n.origin,M=i[m]&&i[m].checkOrigin;if(M&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+T.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return Q===(""+D).substr(0,q)&&D.substr(q).split(":")[0]in i}function Y(){var l=T.type in{true:1,false:1,undefined:1};return l&&w(m,"Ignoring init message from meta parent page"),l}function Z(l){return D.substr(D.indexOf(":")+U+l)}function ne(l){w(m,"onMessage passed: {iframe: "+T.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:T.iframe,message:JSON.parse(l)}),w(m,"--")}function A(){var l=document.body.getBoundingClientRect(),p=T.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Se(l,p){function M(){C("Send Page Info","pageInfo:"+A(),l,p)}$e(M,32,p)}function Ce(){function l(O,H){function ee(){i[x]?Se(i[x].iframe,x):p()}["scroll","resize"].forEach(function(oe){w(x,O+oe+" listener for sendPageInfo"),H(window,oe,ee)})}function p(){l("Remove ",et)}function M(){l("Add ",re)}var x=m;M(),i[x]&&(i[x].stopPageInfo=p)}function Ie(){i[m]&&i[m].stopPageInfo&&(i[m].stopPageInfo(),delete i[m].stopPageInfo)}function _e(){var l=!0;return T.iframe===null&&(V(m,"IFrame ("+T.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return Fe(m),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function h(l){function p(){z=H,_(),w(m,"--")}function M(){return{x:Number(T.width)+O.x,y:Number(T.height)+O.y}}function x(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):V(m,"Unable to scroll to requested position, window.parentIFrame not found")}var O=l?f(T.iframe):{x:0,y:0},H=M();w(m,"Reposition requested from iFrame (offset x:"+O.x+" y:"+O.y+")"),window.top!==window.self?x():p()}function _(){ce("onScroll",z)!==!1?xe(m):De()}function N(l){function p(){var ee=f(H);w(m,"Moving to in page link (#"+x+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},_(),w(m,"--")}function M(){window.parentIFrame?window.parentIFrame.moveToAnchor(x):w(m,"In page link #"+x+" not found and window.parentIFrame not found")}var x=l.split("#")[1]||"",O=decodeURIComponent(x),H=document.getElementById(O)||document.getElementsByName(O)[0];H?p():window.top!==window.self?M():w(m,"In page link #"+x+" not found")}function J(l){var p={};if(Number(T.width)===0&&Number(T.height)===0){var M=Z(9).split(":");p={x:M[1],y:M[0]}}else p={x:T.width,y:T.height};ce(l,{iframe:T.iframe,screenX:Number(p.x),screenY:Number(p.y),type:T.type})}function ce(l,p){return ke(m,l,p)}function Je(){switch(i[m]&&i[m].firstRun&&Xe(),T.type){case"close":se(T.iframe);break;case"message":ne(Z(6));break;case"mouseenter":J("onMouseEnter");break;case"mouseleave":J("onMouseLeave");break;case"autoResize":i[m].autoResize=JSON.parse(Z(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":Se(i[m]&&i[m].iframe,m),Ce();break;case"pageInfoStop":Ie();break;case"inPageLink":N(Z(9));break;case"reset":be(T);break;case"init":a(),ce("onInit",T.iframe);break;default:Number(T.width)===0&&Number(T.height)===0?V("Unsupported message received ("+T.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):a()}}function Ae(l){var p=!0;return i[l]||(p=!1,V(T.type+" No settings for "+l+". Message was: "+D)),p}function Ke(){for(var l in i)C("iFrame requested init",ot(l),i[l].iframe,l)}function Xe(){i[m]&&(i[m].firstRun=!1)}var D=n.data,T={},m=null;D==="[iFrameResizerChild]Ready"?Ke():le()?(T=g(),m=T.id,i[m]&&(i[m].loaded=!0),!Y()&&Ae(m)&&(w(m,"Received: "+D),_e()&&K()&&Je())):ye(m,"Ignored: "+D)}function ke(n,a,g){var d=null,k=null;if(i[n])if(d=i[n][a],typeof d=="function")k=d(g);else throw new TypeError(a+" on iFrame["+n+"] is not a function");return k}function qe(n){var a=n.id;delete i[a]}function se(n){var a=n.id;if(ke(a,"onClose",a)===!1){w(a,"Close iframe cancelled by onClose event");return}w(a,"Removing iFrame: "+a);try{n.parentNode&&n.parentNode.removeChild(n)}catch(g){V(g)}ke(a,"onClosed",a),w(a,"--"),qe(n)}function Fe(n){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},w(n,"Get page position: "+z.x+","+z.y))}function xe(n){z!==null&&(window.scrollTo(z.x,z.y),w(n,"Set page position: "+z.x+","+z.y),De())}function De(){z=null}function be(n){function a(){ve(n),C("reset","reset",n.iframe,n.id)}w(n.id,"Size reset requested by "+(n.type==="init"?"host page":"iFrame")),Fe(n.id),Ve(a,n,"reset")}function ve(n){function a(y){if(!n.id){w("undefined","messageData id not set");return}n.iframe.style[y]=n[y]+"px",w(n.id,"IFrame ("+k+") "+y+" set to "+n[y]+"px")}function g(y){!v&&n[y]==="0"&&(v=!0,w(k,"Hidden iFrame detected, creating visibility listener"),it())}function d(y){a(y),g(y)}var k=n.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function Ve(n,a,g){g!==a.type&&$&&!window.jasmine?(w(a.id,"Requesting animation frame"),$(n)):n()}function C(n,a,g,d,k){function y(){var ne=i[d]&&i[d].targetOrigin;w(d,"["+n+"] Sending msg to iframe["+d+"] ("+a+") targetOrigin: "+ne),g.contentWindow.postMessage(Q+a,ne)}function K(){V(d,"["+n+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?y():K()}function Y(){function ne(){i[d]&&!i[d].loaded&&!Z&&(Z=!0,V(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}k&&i[d]&&i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(ne,i[d].warningTimeout))}var Z=!1;d=d||g.id,i[d]&&(le(),Y())}function ot(n){return n+":"+i[n].bodyMarginV1+":"+i[n].sizeWidth+":"+i[n].log+":"+i[n].interval+":"+i[n].enablePublicMethods+":"+i[n].autoResize+":"+i[n].bodyMargin+":"+i[n].heightCalculationMethod+":"+i[n].bodyBackground+":"+i[n].bodyPadding+":"+i[n].tolerance+":"+i[n].inPageLinks+":"+i[n].resizeFrom+":"+i[n].widthCalculationMethod+":"+i[n].mouseEvents}function Ue(n){return typeof n=="number"}function Re(n,a){function g(){function h(N){var J=i[f][N];J!==1/0&&J!==0&&(n.style[N]=Ue(J)?J+"px":J,w(f,"Set "+N+" = "+n.style[N]))}function _(N){if(i[f]["min"+N]>i[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}_("Height"),_("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=a&&a.id||ge.id+r++;return document.getElementById(h)!==null&&(h+=r++),h}function k(h){return h===""&&(n.id=h=d(),c=(a||{}).log,w(h,"Added missing iframe ID: "+h+" ("+n.src+")")),h}function y(){switch(w(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),n.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=i[f]?i[f].scrolling:"no"}}function K(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function le(){var h=i[f]&&i[f].firstRun,_=i[f]&&i[f].heightCalculationMethod in We;!h&&_&&be({iframe:n,height:0,width:0,type:"init"})}function Y(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:qe.bind(null,i[f].iframe),resize:C.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(h){C("Move to anchor","moveToAnchor:"+h,i[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),C("Send Message","message:"+h,i[f].iframe,f)}})}function Z(h){function _(){C("iFrame.onload",h,n,e,!0),le()}function N(ce){if(n.parentNode){var Je=new ce(function(Ae){Ae.forEach(function(Ke){var Xe=Array.prototype.slice.call(Ke.removedNodes);Xe.forEach(function(D){D===n&&se(n)})})});Je.observe(n.parentNode,{childList:!0})}}var J=L();J&&N(J),re(n,"load",_),C("init",h,n,e,!0)}function ne(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function A(h){for(var _ in ge)Object.prototype.hasOwnProperty.call(ge,_)&&(i[f][_]=Object.prototype.hasOwnProperty.call(h,_)?h[_]:ge[_])}function Se(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Ce(h){var _=h.split("Callback");if(_.length===2){var N="on"+_[0].charAt(0).toUpperCase()+_[0].slice(1);this[N]=this[h],delete this[h],V(f,"Deprecated: '"+h+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Ie(h){h=h||{},i[f]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("/").slice(0,3).join("/")},ne(h),Object.keys(h).forEach(Ce,h),A(h),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?Se(i[f].remoteHost):"*")}function _e(){return f in i&&"iFrameResizer"in n}var f=k(n.id);_e()?V(f,"Ignored iFrame, already setup."):(Ie(a),y(),g(),K(),Z(ot(f)),Y())}function je(n,a){ie===null&&(ie=setTimeout(function(){ie=null,n()},a))}var Te={};function $e(n,a,g){Te[g]||(Te[g]=setTimeout(function(){Te[g]=null,n()},a))}function it(){function n(){function k(y){function K(Y){return(i[y]&&i[y].iframe.style[Y])==="0px"}function le(Y){return Y.offsetParent!==null}i[y]&&le(i[y].iframe)&&(K("height")||K("width"))&&C("Visibility change","resize",i[y].iframe,y)}Object.keys(i).forEach(function(y){k(y)})}function a(k){w("window","Mutation observed: "+k[0].target+" "+k[0].type),je(n,16)}function g(){var k=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},K=new d(a);K.observe(k,y)}var d=L();d&&g()}function rt(n){function a(){ue("Window "+n,"resize")}w("window","Trigger event: "+n),je(a,16)}function Ye(){function n(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(w("document","Trigger event: Visiblity change"),je(n,16))}function ue(n,a){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&C(n,a,i[d].iframe,d)})}function ct(){re(window,"message",nt),re(window,"resize",function(){rt("resize")}),re(document,"visibilitychange",Ye),re(document,"-webkit-visibilitychange",Ye)}function ze(){function n(d,k){function y(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(y(),Re(k,d),g.push(k))}function a(d){d&&d.enablePublicMethods&&V("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return we(),ct(),function(k,y){switch(g=[],a(k),typeof y){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(y||"iframe"),n.bind(e,k));break;case"object":n(k,y);break;default:throw new TypeError("Unexpected data type ("+typeof y+")")}return g}}function dt(n){n.fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(g){function d(k,y){Re(y,g)}return this.filter("iframe").each(d).end()}):ye("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&dt(window.jQuery),typeof e=="function"&&e.amd?e([],ze):s.exports=ze(),window.iFrameResize=window.iFrameResize||ze()})()})(hn);var jt={},mn={get exports(){return jt},set exports(s){jt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=!0,c=10,v="",S=0,U="",Q=null,q="",z=!1,$={resize:1,click:1},We=128,i=!0,ie=1,ge="bodyOffset",L=ge,re=!0,et="",we={},ae=32,tt=null,Oe=!1,w=!1,ye="[iFrameSizer]",V=ye.length,pe="",nt={max:1,min:1,bodyScroll:1,documentElementScroll:1},ke="child",qe=window.parent,se="*",Fe=0,xe=!1,De=null,be=16,ve=1,Ve="scroll",C=Ve,ot=window,Ue=function(){g("onMessage function not defined")},Re=function(){},je=function(){},Te={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},$e={},it=!1;function rt(){}try{var Ye=Object.create({},{passive:{get:function(){it=!0}}});window.addEventListener("test",rt,Ye),window.removeEventListener("test",rt,Ye)}catch{}function ue(t,o,u,b){t.addEventListener(o,u,it?b||{}:!1)}function ct(t,o,u){t.removeEventListener(o,u,!1)}function ze(t){return t.charAt(0).toUpperCase()+t.slice(1)}function dt(t){var o,u,b,E=null,P=0,W=function(){P=Date.now(),E=null,b=t.apply(o,u),E||(o=u=null)};return function(){var B=Date.now();P||(P=B);var F=be-(B-P);return o=this,u=arguments,F<=0||F>be?(E&&(clearTimeout(E),E=null),P=B,b=t.apply(o,u),E||(o=u=null)):E||(E=setTimeout(W,F)),b}}function n(t){return ye+"["+pe+"] "+t}function a(t){Oe&&typeof window.console=="object"&&console.log(n(t))}function g(t){typeof window.console=="object"&&console.warn(n(t))}function d(){k(),a("Initialising iFrame ("+window.location.href+")"),K(),Z(),Y("background",v),Y("padding",q),N(),Ie(),_e(),ne(),Je(),ce(),f(),we=J(),oe("init","Init message from host page"),Re()}function k(){function t(u){return u==="true"}var o=et.substr(V).split(":");pe=o[0],S=e!==o[1]?Number(o[1]):S,z=e!==o[2]?t(o[2]):z,Oe=e!==o[3]?t(o[3]):Oe,ae=e!==o[4]?Number(o[4]):ae,r=e!==o[6]?t(o[6]):r,U=o[7],L=e!==o[8]?o[8]:L,v=o[9],q=o[10],Fe=e!==o[11]?Number(o[11]):Fe,we.enable=e!==o[12]?t(o[12]):!1,ke=e!==o[13]?o[13]:ke,C=e!==o[14]?o[14]:C,w=e!==o[15]?Boolean(o[15]):w}function y(t){var o=t.split("Callback");if(o.length===2){var u="on"+o[0].charAt(0).toUpperCase()+o[0].slice(1);this[u]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function K(){function t(){var u=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(y,u),Ue="onMessage"in u?u.onMessage:Ue,Re="onReady"in u?u.onReady:Re,se="targetOrigin"in u?u.targetOrigin:se,L="heightCalculationMethod"in u?u.heightCalculationMethod:L,C="widthCalculationMethod"in u?u.widthCalculationMethod:C}function o(u,b){return typeof u=="function"&&(a("Setup custom "+b+"CalcMethod"),Te[b]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=o(L,"height"),C=o(C,"width")),a("TargetOrigin for parent set to: "+se)}function le(t,o){return o.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),o=""),o}function Y(t,o){e!==o&&o!==""&&o!=="null"&&(document.body.style[t]=o,a("Body "+t+' set to "'+o+'"'))}function Z(){e===U&&(U=S+"px"),Y("margin",le("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function A(t){var o={add:function(u){function b(){oe(t.eventName,t.eventType)}$e[u]=b,ue(window,u,b,{passive:!0})},remove:function(u){var b=$e[u];delete $e[u],ct(window,u,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(o[t.method])):o[t.method](t.eventName),a(ze(t.method)+" event listener: "+t.eventType)}function Se(t){A({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),A({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),A({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),A({method:t,eventType:"Input",eventName:"input"}),A({method:t,eventType:"Mouse Up",eventName:"mouseup"}),A({method:t,eventType:"Mouse Down",eventName:"mousedown"}),A({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),A({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),A({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),A({method:t,eventType:"Touch Start",eventName:"touchstart"}),A({method:t,eventType:"Touch End",eventName:"touchend"}),A({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),A({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),A({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),A({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ke==="child"&&A({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Ce(t,o,u,b){return o!==t&&(t in u||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=o),a(b+' calculation method set to "'+t+'"')),t}function Ie(){L=Ce(L,ge,x,"height")}function _e(){C=Ce(C,Ve,O,"width")}function f(){r===!0?(Se("add"),Xe()):a("Auto Resize disabled")}function h(){Q!==null&&Q.disconnect()}function _(){Se("remove"),h(),clearInterval(tt)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function J(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(F){var I=F.getBoundingClientRect(),R=t();return{x:parseInt(I.left,10)+parseInt(R.x,10),y:parseInt(I.top,10)+parseInt(R.y,10)}}function u(F){function I(te){var Pe=o(te);a("Moving to in page link (#"+R+") at x: "+Pe.x+" y: "+Pe.y),X(Pe.y,Pe.x,"scrollToOffset")}var R=F.split("#")[1]||F,j=decodeURIComponent(R),G=document.getElementById(j)||document.getElementsByName(j)[0];e!==G?I(G):(a("In page link (#"+R+") not found in iFrame, so sending to parent"),X(0,0,"inPageLink","#"+R))}function b(){var F=window.location.hash,I=window.location.href;F!==""&&F!=="#"&&u(I)}function E(){function F(I){function R(j){j.preventDefault(),u(this.getAttribute("href"))}I.getAttribute("href")!=="#"&&ue(I,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),F)}function P(){ue(window,"hashchange",b)}function W(){setTimeout(b,We)}function B(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),E(),P(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return we.enable?B():a("In page linking not enabled"),{findTarget:u}}function ce(){if(w!==!0)return;function t(u){X(0,0,u.type,u.screenY+":"+u.screenX)}function o(u,b){a("Add event listener: "+b),ue(window.document,u,t)}o("mouseenter","Mouse Enter"),o("mouseleave","Mouse Leave")}function Je(){a("Enable public methods"),ot.parentIFrame={autoResize:function(o){return o===!0&&r===!1?(r=!0,f()):o===!1&&r===!0&&(r=!1,_()),X(0,0,"autoResize",JSON.stringify(r)),r},close:function(){X(0,0,"close")},getId:function(){return pe},getPageInfo:function(o){typeof o=="function"?(je=o,X(0,0,"pageInfo")):(je=function(){},X(0,0,"pageInfoStop"))},moveToAnchor:function(o){we.findTarget(o)},reset:function(){Ft("parentIFrame.reset")},scrollTo:function(o,u){X(u,o,"scrollTo")},scrollToOffset:function(o,u){X(u,o,"scrollToOffset")},sendMessage:function(o,u){X(0,0,"message",JSON.stringify(o),u)},setHeightCalculationMethod:function(o){L=o,Ie()},setWidthCalculationMethod:function(o){C=o,_e()},setTargetOrigin:function(o){a("Set targetOrigin: "+o),se=o},size:function(o,u){var b=""+(o||"")+(u?","+u:"");oe("size","parentIFrame.size("+b+")",o,u)}}}function Ae(){ae!==0&&(a("setInterval: "+ae+"ms"),tt=setInterval(function(){oe("interval","setInterval: "+ae)},Math.abs(ae)))}function Ke(){function t(j){function G(te){te.complete===!1&&(a("Attach listeners to "+te.src),te.addEventListener("load",E,!1),te.addEventListener("error",P,!1),F.push(te))}j.type==="attributes"&&j.attributeName==="src"?G(j.target):j.type==="childList"&&Array.prototype.forEach.call(j.target.querySelectorAll("img"),G)}function o(j){F.splice(F.indexOf(j),1)}function u(j){a("Remove listeners from "+j.src),j.removeEventListener("load",E,!1),j.removeEventListener("error",P,!1),o(j)}function b(j,G,te){u(j.target),oe(G,te+": "+j.target.src)}function E(j){b(j,"imageLoad","Image loaded")}function P(j){b(j,"imageLoadFailed","Image load failed")}function W(j){oe("mutationObserver","mutationObserver: "+j[0].target+" "+j[0].type),j.forEach(t)}function B(){var j=document.querySelector("body"),G={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new I(W),a("Create body MutationObserver"),R.observe(j,G),R}var F=[],I=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(a("Disconnect body MutationObserver"),R.disconnect(),F.forEach(u))}}}function Xe(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?Ae():Q=Ke():(a("MutationObserver not supported in this browser!"),Ae())}function D(t,o){var u=0;return o=o||document.body,u=document.defaultView.getComputedStyle(o,null),u=u!==null?u[t]:0,parseInt(u,c)}function T(t){t>be/2&&(be=2*t,a("Event throttle increased to "+be+"ms"))}function m(t,o){for(var u=o.length,b=0,E=0,P=ze(t),W=Date.now(),B=0;B<u;B++)b=o[B].getBoundingClientRect()[t]+D("margin"+P,o[B]),b>E&&(E=b);return W=Date.now()-W,a("Parsed "+u+" HTML elements"),a("Element position calculated in "+W+"ms"),T(W),E}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,o){function u(){return g("No tagged elements ("+o+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+o+"]");return b.length===0&&u(),m(t,b)}function M(){return document.querySelectorAll("body *")}var x={bodyOffset:function(){return document.body.offsetHeight+D("marginTop")+D("marginBottom")},offset:function(){return x.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Te.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(x))},min:function(){return Math.min.apply(null,l(x))},grow:function(){return x.max()},lowestElement:function(){return Math.max(x.bodyOffset()||x.documentElementOffset(),m("bottom",M()))},taggedElement:function(){return p("bottom","data-iframe-height")}},O={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Te.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(O.bodyScroll(),O.documentElementScroll())},max:function(){return Math.max.apply(null,l(O))},min:function(){return Math.min.apply(null,l(O))},rightMostElement:function(){return m("right",M())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,o,u,b){function E(){ie=R,ve=j,X(ie,ve,t)}function P(){function G(te,Pe){var Gt=Math.abs(te-Pe)<=Fe;return!Gt}return R=e!==u?u:x[L](),j=e!==b?b:O[C](),G(ie,R)||z&&G(ve,j)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return L in nt||z&&C in nt}function F(){a("No change in size detected")}function I(){W()&&B()?Ft(o):t in{interval:1}||F()}var R,j;P()||t==="init"?(Et(),E()):I()}var ee=dt(H);function oe(t,o,u,b){function E(){t in{reset:1,resetPage:1,init:1}||a("Trigger event: "+o)}function P(){return xe&&t in $}P()?a("Trigger event cancelled: "+t):(E(),t==="init"?H(t,o,u,b):ee(t,o,u,b))}function Et(){xe||(xe=!0,a("Trigger event lock on")),clearTimeout(De),De=setTimeout(function(){xe=!1,a("Trigger event lock off"),a("--")},We)}function Ot(t){ie=x[L](),ve=O[C](),X(ie,ve,t)}function Ft(t){var o=L;L=ge,a("Reset trigger event: "+t),Et(),Ot("reset"),L=o}function X(t,o,u,b,E){function P(){e===E?E=se:a("Message targetOrigin: "+E)}function W(){var B=t+":"+o,F=pe+":"+B+":"+u+(e!==b?":"+b:"");a("Sending message to host page ("+F+")"),qe.postMessage(ye+F,E)}P(),W()}function Xt(t){var o={init:function(){et=t.data,qe=t.source,d(),i=!1,setTimeout(function(){re=!1},We)},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),Ot("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){we.findTarget(E())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=E();a("PageInfoFromParent called from parent: "+R),je(JSON.parse(R)),a(" --")},message:function(){var R=E();a("onMessage called from parent: "+R),Ue(JSON.parse(R)),a(" --")}};function u(){return ye===(""+t.data).substr(0,V)}function b(){return t.data.split("]")[1].split(":")[0]}function E(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var I=b();I in o?o[I]():!P()&&!W()&&g("Unexpected message ("+t.data+")")}function F(){i===!1?B():W()?o.init():a('Ignored message of type "'+b()+'". Received before initialization.')}u()&&F()}function Rt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",Xt),ue(window,"readystatechange",Rt),Rt()})()})(mn);var Yt=xt;lt.iframeResize=Yt;lt.iframeResizer=Yt;lt.iframeResizerContentWindow=jt;(function(s){s.exports=lt})(fn);function gn(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function pn(s){const e=gn(s),r=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&r===c}function Jt(s,e){const r=JSON.stringify(e);let c=0;if(r.length===0)return c;for(let v=0;v<r.length;v++){const S=r.charCodeAt(v);c=(c<<5)-c+S,c&=c}return`${s}-${c}`}function bn(s,e,r){const c=document.createElement("form"),v=document.createElement("input");return c.action=s,c.method="POST",c.target=r,e.forEach(([S,U])=>{v.name=S,v.value=U.toString(),c.appendChild(v.cloneNode())}),c.style.visibility="hidden",c}function vn(s){const e=s.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function wn(s,e){if(s.hasAttribute("data-modal-post")){const r=s.getAttribute("data-modal-post");e.method="POST",e.body=r;const c=[];return new URL(`http://localhost/?${r}`).searchParams.forEach((v,S)=>{c.push([S,v])}),[c,e]}return[null,e]}function yn(s,e,r,c,v){const S=document.createElement("toujou-modal"),U=document.createElement("iframe"),Q=Jt("iframe",e);if(S.id=s,U.name=Q,document.body.appendChild(S),pn(r)){const q=document.querySelector(r),z=q instanceof HTMLTemplateElement?document.importNode(q.content,!0).children:q.childNodes;q.title&&(S.title=q.title);for(let $=0;$<z.length;$++)S.appendChild(z[$])}else if(v&&c==="POST"){const q=bn(r,v,Q);S.appendChild(q),S.appendChild(U),q.submit(),q.remove()}else c==="GET"&&(U.src=r,S.appendChild(U));return S}function kn(s,e,r,c){const v=Jt("toujou-modal",s),S=document.getElementById(v)||yn(v,s,e,r,c);setTimeout(()=>{S.open()})}const xn=s=>{if(s.metaKey||s.ctrlKey)return;const e=vn(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const r=e.getAttribute("href"),c=r.indexOf("?")!==-1?r.split("?")[0]+"?toujou-ajax-modal=1&"+r.split("?")[1]:r.indexOf("#")!==-1?r.split("#")[0]+"?toujou-ajax-modal=1#"+r.split("#")[1]:r+"?toujou-ajax-modal=1",[v,S]=wn(e,{src:c});kn(S,c,v?"POST":"GET",v),s.preventDefault(),s.stopPropagation()}},jn=st`
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

`,Tn={reserveScrollBarGap:!0},Le=[];function Sn(s){Le.forEach(e=>e.close()),Le.push(s)}function Mn(s){if(s===Le[Le.length-1]){Le.pop();const e=Le.pop();e&&e.open()}}class Tt extends Be{static get is(){return"toujou-modal"}render(){return he`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?he`
                    <button id="dog-ear-close" dialog-dismiss></button>`:he`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(r=>{r[0]&&this.onPosition(r[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){cn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":ln(this.$.scroller,Tn),Sn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Mn(this),this.allowOutsideScroll?document.body.style.position="":dn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const r=e.composedPath();(!r.includes(this.$.modalContent)||r.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const r=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=r?`${r}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(r=>r instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((r,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(r=>{this.loading=!0,r.addEventListener("load",()=>{this.iframeResizerMap.has(r)||this.listenToIframeReadyState(r)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let r={};try{r=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return r.initCallback=()=>{this.loading=!1},r.closedCallback=()=>{this.close()},kt.iframeResizer(r,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}zt(Tt,"styles",[jn]);customElements.define(Tt.is,Tt);document.addEventListener("click",xn);var At,mt,gt,En=st(At||(mt=[`* {
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
`],gt||(gt=mt.slice(0)),At=Object.freeze(Object.defineProperties(mt,{raw:{value:Object.freeze(gt)}}))));let Pt=class extends Be{static get is(){return"toujou-spinner"}static get styles(){return En}render(){return he`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}};customElements.define(Pt.is,Pt);var Lt,pt,bt,On=st(Lt||(pt=[`:host {
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
`],bt||(bt=pt.slice(0)),Lt=Object.freeze(Object.defineProperties(pt,{raw:{value:Object.freeze(bt)}}))));class Nt extends Be{static get is(){return"toujou-snackbar"}render(){return he`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return[On]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}}customElements.define(Nt.is,Nt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Ht,vt,wt,Fn=st(Ht||(vt=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],wt||(wt=vt.slice(0)),Ht=Object.freeze(Object.defineProperties(vt,{raw:{value:Object.freeze(wt)}}))));let yt=class extends Be{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return he`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const s=this.querySelector("template");s&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+s.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(s){this._messageTemplate&&en(this._messageTemplate(he,this.targetUrl,this.secondsRemaining),this)}firstUpdated(s){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Bt(s){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}yt.styles=[Fn],yt=fe([qt("exit-warning")],yt),document.addEventListener("click",function(s){if(s.metaKey||s.ctrlKey)return;const e=function(r){const c=r.composedPath();for(let v=0;v<c.indexOf(document.body);v++){const S=c[v];if(S.hasAttribute&&S.hasAttribute("target")&&S!==document.body)return S}}(s);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Bt(e.getAttribute("href"))&&(s.preventDefault(),s.stopPropagation())}),window.addEventListener("message",function(s){s.origin===window.location.origin&&s.data.action!==void 0&&s.data.action==="toujou-exit-warning"&&s.data.targetUrl&&Bt(s.data.targetUrl)});class Wt extends Be{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return he`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(r=>r.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const r=document.importNode(e.content,!0);e.parentNode.insertBefore(r,e)})}}customElements.define(Wt.is,Wt);var St,at,Kt;let de=class extends Be{get result(){const s=Math.round(this.duration);return s===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:s===1?`1 ${this.minutesSingularText}`:`${s} ${this.minutesPluralText}`}render(){return he`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),St.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,at.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=ft(this,St,"m",Kt).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(ft(this,at,"f")):document.addEventListener("DOMContentLoaded",ft(this,at,"f"))}updated(s){s.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};at=new WeakMap,St=new WeakSet,Kt=function(s){const e=s.textContent,r=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),c=r==null?void 0:r.trim(),v=c==null?void 0:c.split(" ");return(v==null?void 0:v.length)||0},fe([Me({type:Number})],de.prototype,"wordCount",void 0),fe([Me({type:Number})],de.prototype,"duration",void 0),fe([Me({type:String,attribute:"target-selector"})],de.prototype,"targetSelector",void 0),fe([Me({type:String,attribute:"minutes-singular-text"})],de.prototype,"minutesSingularText",void 0),fe([Me({type:String,attribute:"minutes-plural-text"})],de.prototype,"minutesPluralText",void 0),fe([Me({type:String,attribute:"less-than-text"})],de.prototype,"lessThanText",void 0),fe([Me({type:Number,attribute:"reading-speed"})],de.prototype,"readingSpeed",void 0),de=fe([qt("toujou-estimated-reading-time")],de);
//# sourceMappingURL=base.js.map
