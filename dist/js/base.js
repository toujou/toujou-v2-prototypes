var tn=Object.defineProperty;var nn=(a,e,r)=>e in a?tn(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var Ct=(a,e,r)=>(nn(a,typeof e!="symbol"?e+"":e,r),r);import{i as ct,s as He,y as he,Z as on}from"./lit-element-6fe74b4f.js";import{_ as fe,a as gt}from"./tslib.es6-c85c2c5e.js";import{e as Ut}from"./custom-element-73470d87.js";import{e as Me}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";let pt=0,_t=0;const $t=getComputedStyle(document.documentElement),rn=".topbar, .inpage-nav, .navigation--inpage";function an(){const a=parseInt($t.getPropertyValue("--toujou-scroll-padding-offset"));a&&(pt+=a);const e=Array.from(document.querySelectorAll(rn));e&&(e.forEach(r=>{_t+=r.offsetHeight}),pt+=_t),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${pt}px`)}function Pt(){$t.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||an()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{Pt()}):document.addEventListener("DOMContentLoaded",()=>{Pt()});function sn(a){if(Array.isArray(a)){for(var e=0,r=Array(a.length);e<a.length;e++)r[e]=a[e];return r}else return Array.from(a)}var dt=!1;if(typeof window<"u"){var Lt={get passive(){dt=!0}};window.addEventListener("testPassive",null,Lt),window.removeEventListener("testPassive",null,Lt)}var Ne=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),me=[],Be=!1,Rt=-1,Xe=void 0,Oe=void 0,Qe=void 0,Yt=function(e){return me.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},Ze=function(e){var r=e||window.event;return Yt(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},un=function(e){if(Qe===void 0){var r=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(r&&c>0){var v=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Qe=document.body.style.paddingRight,document.body.style.paddingRight=v+c+"px"}}Xe===void 0&&(Xe=document.body.style.overflow,document.body.style.overflow="hidden")},Jt=function(){Qe!==void 0&&(document.body.style.paddingRight=Qe,Qe=void 0),Xe!==void 0&&(document.body.style.overflow=Xe,Xe=void 0)},ln=function(){return window.requestAnimationFrame(function(){if(Oe===void 0){Oe={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,c=e.scrollX,v=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var S=v-window.innerHeight;S&&r>=v&&(document.body.style.top=-(r+S))})},300)}})},Kt=function(){if(Oe!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=Oe.position,document.body.style.top=Oe.top,document.body.style.left=Oe.left,window.scrollTo(r,e),Oe=void 0}},cn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},dn=function(e,r){var c=e.targetTouches[0].clientY-Rt;return Yt(e.target)?!1:r&&r.scrollTop===0&&c>0||cn(r)&&c<0?Ze(e):(e.stopPropagation(),!0)},fn=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!me.some(function(v){return v.targetElement===e})){var c={targetElement:e,options:r||{}};me=[].concat(sn(me),[c]),Ne?ln():un(r),Ne&&(e.ontouchstart=function(v){v.targetTouches.length===1&&(Rt=v.targetTouches[0].clientY)},e.ontouchmove=function(v){v.targetTouches.length===1&&dn(v,e)},Be||(document.addEventListener("touchmove",Ze,dt?{passive:!1}:void 0),Be=!0))}},hn=function(){Ne&&(me.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Be&&(document.removeEventListener("touchmove",Ze,dt?{passive:!1}:void 0),Be=!1),Rt=-1),Ne?Kt():Jt(),me=[]},mn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}me=me.filter(function(r){return r.targetElement!==e}),Ne&&(e.ontouchstart=null,e.ontouchmove=null,Be&&me.length===0&&(document.removeEventListener("touchmove",Ze,dt?{passive:!1}:void 0),Be=!1)),Ne?Kt():Jt()},xt={},gn={get exports(){return xt},set exports(a){xt=a}},ft={},St={},pn={get exports(){return St},set exports(a){St=a}};(function(a){(function(e){if(typeof window>"u")return;var r=0,c=!1,v=!1,S="message",U=S.length,Q="[iFrameSizer]",q=Q.length,z=null,$=window.requestAnimationFrame,We={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,ge={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){V("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(n,s,g){n.addEventListener(s,g,!1)}function et(n,s,g){n.removeEventListener(s,g,!1)}function ye(){var n=["moz","webkit","o","ms"],s;for(s=0;s<n.length&&!$;s+=1)$=window[n[s]+"RequestAnimationFrame"];$?$=$.bind(window):y("setup","RequestAnimationFrame not supported")}function ae(n){var s="Host page: "+n;return window.top!==window.self&&(s=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),s}function tt(n){return Q+"["+ae(n)+"]"}function Ee(n){return i[n]?i[n].log:c}function y(n,s){pe("log",n,s,Ee(n))}function we(n,s){pe("info",n,s,Ee(n))}function V(n,s){pe("warn",n,s,!0)}function pe(n,s,g,d){d===!0&&typeof window.console=="object"&&console[n](tt(s),g)}function nt(n){function s(){function l(){ve(x),Te(m),ce("onResized",x)}w("Height"),w("Width"),Ve(l,x,"init")}function g(){var l=D.substr(q).split(":"),p=l[1]?parseInt(l[1],10):0,M=i[l[0]]&&i[l[0]].iframe,T=getComputedStyle(M);return{iframe:M,id:l[0],height:p+d(T)+k(T),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,M=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+M}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,M=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+M}function w(l){var p=Number(i[m]["max"+l]),M=Number(i[m]["min"+l]),T=l.toLowerCase(),E=Number(x[T]);y(m,"Checking "+T+" is in range "+M+"-"+p),E<M&&(E=M,y(m,"Set "+T+" to min value")),E>p&&(E=p,y(m,"Set "+T+" to max value")),x[T]=""+E}function K(){function l(){function T(){var B=0,ee=!1;for(y(m,"Checking connection is from allowed list of origins: "+M);B<M.length;B++)if(M[B]===p){ee=!0;break}return ee}function E(){var B=i[m]&&i[m].remoteHost;return y(m,"Checking connection is from: "+B),p===B}return M.constructor===Array?T():E()}var p=n.origin,M=i[m]&&i[m].checkOrigin;if(M&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+x.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return Q===(""+D).substr(0,q)&&D.substr(q).split(":")[0]in i}function Y(){var l=x.type in{true:1,false:1,undefined:1};return l&&y(m,"Ignoring init message from meta parent page"),l}function Z(l){return D.substr(D.indexOf(":")+U+l)}function ne(l){y(m,"onMessage passed: {iframe: "+x.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:x.iframe,message:JSON.parse(l)}),y(m,"--")}function _(){var l=document.body.getBoundingClientRect(),p=x.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Se(l,p){function M(){A("Send Page Info","pageInfo:"+_(),l,p)}$e(M,32,p)}function Ae(){function l(E,B){function ee(){i[T]?Se(i[T].iframe,T):p()}["scroll","resize"].forEach(function(oe){y(T,E+oe+" listener for sendPageInfo"),B(window,oe,ee)})}function p(){l("Remove ",et)}function M(){l("Add ",re)}var T=m;M(),i[T]&&(i[T].stopPageInfo=p)}function Ie(){i[m]&&i[m].stopPageInfo&&(i[m].stopPageInfo(),delete i[m].stopPageInfo)}function Ce(){var l=!0;return x.iframe===null&&(V(m,"IFrame ("+x.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return Re(m),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function h(l){function p(){z=B,C(),y(m,"--")}function M(){return{x:Number(x.width)+E.x,y:Number(x.height)+E.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](B.x,B.y):V(m,"Unable to scroll to requested position, window.parentIFrame not found")}var E=l?f(x.iframe):{x:0,y:0},B=M();y(m,"Reposition requested from iFrame (offset x:"+E.x+" y:"+E.y+")"),window.top!==window.self?T():p()}function C(){ce("onScroll",z)!==!1?Te(m):De()}function N(l){function p(){var ee=f(B);y(m,"Moving to in page link (#"+T+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},C(),y(m,"--")}function M(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):y(m,"In page link #"+T+" not found and window.parentIFrame not found")}var T=l.split("#")[1]||"",E=decodeURIComponent(T),B=document.getElementById(E)||document.getElementsByName(E)[0];B?p():window.top!==window.self?M():y(m,"In page link #"+T+" not found")}function J(l){var p={};if(Number(x.width)===0&&Number(x.height)===0){var M=Z(9).split(":");p={x:M[1],y:M[0]}}else p={x:x.width,y:x.height};ce(l,{iframe:x.iframe,screenX:Number(p.x),screenY:Number(p.y),type:x.type})}function ce(l,p){return ke(m,l,p)}function Je(){switch(i[m]&&i[m].firstRun&&Ge(),x.type){case"close":se(x.iframe);break;case"message":ne(Z(6));break;case"mouseenter":J("onMouseEnter");break;case"mouseleave":J("onMouseLeave");break;case"autoResize":i[m].autoResize=JSON.parse(Z(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":Se(i[m]&&i[m].iframe,m),Ae();break;case"pageInfoStop":Ie();break;case"inPageLink":N(Z(9));break;case"reset":be(x);break;case"init":s(),ce("onInit",x.iframe);break;default:Number(x.width)===0&&Number(x.height)===0?V("Unsupported message received ("+x.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):s()}}function _e(l){var p=!0;return i[l]||(p=!1,V(x.type+" No settings for "+l+". Message was: "+D)),p}function Ke(){for(var l in i)A("iFrame requested init",ot(l),i[l].iframe,l)}function Ge(){i[m]&&(i[m].firstRun=!1)}var D=n.data,x={},m=null;D==="[iFrameResizerChild]Ready"?Ke():le()?(x=g(),m=x.id,i[m]&&(i[m].loaded=!0),!Y()&&_e(m)&&(y(m,"Received: "+D),Ce()&&K()&&Je())):we(m,"Ignored: "+D)}function ke(n,s,g){var d=null,k=null;if(i[n])if(d=i[n][s],typeof d=="function")k=d(g);else throw new TypeError(s+" on iFrame["+n+"] is not a function");return k}function qe(n){var s=n.id;delete i[s]}function se(n){var s=n.id;if(ke(s,"onClose",s)===!1){y(s,"Close iframe cancelled by onClose event");return}y(s,"Removing iFrame: "+s);try{n.parentNode&&n.parentNode.removeChild(n)}catch(g){V(g)}ke(s,"onClosed",s),y(s,"--"),qe(n)}function Re(n){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},y(n,"Get page position: "+z.x+","+z.y))}function Te(n){z!==null&&(window.scrollTo(z.x,z.y),y(n,"Set page position: "+z.x+","+z.y),De())}function De(){z=null}function be(n){function s(){ve(n),A("reset","reset",n.iframe,n.id)}y(n.id,"Size reset requested by "+(n.type==="init"?"host page":"iFrame")),Re(n.id),Ve(s,n,"reset")}function ve(n){function s(w){if(!n.id){y("undefined","messageData id not set");return}n.iframe.style[w]=n[w]+"px",y(n.id,"IFrame ("+k+") "+w+" set to "+n[w]+"px")}function g(w){!v&&n[w]==="0"&&(v=!0,y(k,"Hidden iFrame detected, creating visibility listener"),it())}function d(w){s(w),g(w)}var k=n.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function Ve(n,s,g){g!==s.type&&$&&!window.jasmine?(y(s.id,"Requesting animation frame"),$(n)):n()}function A(n,s,g,d,k){function w(){var ne=i[d]&&i[d].targetOrigin;y(d,"["+n+"] Sending msg to iframe["+d+"] ("+s+") targetOrigin: "+ne),g.contentWindow.postMessage(Q+s,ne)}function K(){V(d,"["+n+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?w():K()}function Y(){function ne(){i[d]&&!i[d].loaded&&!Z&&(Z=!0,V(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}k&&i[d]&&i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(ne,i[d].warningTimeout))}var Z=!1;d=d||g.id,i[d]&&(le(),Y())}function ot(n){return n+":"+i[n].bodyMarginV1+":"+i[n].sizeWidth+":"+i[n].log+":"+i[n].interval+":"+i[n].enablePublicMethods+":"+i[n].autoResize+":"+i[n].bodyMargin+":"+i[n].heightCalculationMethod+":"+i[n].bodyBackground+":"+i[n].bodyPadding+":"+i[n].tolerance+":"+i[n].inPageLinks+":"+i[n].resizeFrom+":"+i[n].widthCalculationMethod+":"+i[n].mouseEvents}function Ue(n){return typeof n=="number"}function Fe(n,s){function g(){function h(N){var J=i[f][N];J!==1/0&&J!==0&&(n.style[N]=Ue(J)?J+"px":J,y(f,"Set "+N+" = "+n.style[N]))}function C(N){if(i[f]["min"+N]>i[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}C("Height"),C("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=s&&s.id||ge.id+r++;return document.getElementById(h)!==null&&(h+=r++),h}function k(h){return h===""&&(n.id=h=d(),c=(s||{}).log,y(h,"Added missing iframe ID: "+h+" ("+n.src+")")),h}function w(){switch(y(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),n.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=i[f]?i[f].scrolling:"no"}}function K(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function le(){var h=i[f]&&i[f].firstRun,C=i[f]&&i[f].heightCalculationMethod in We;!h&&C&&be({iframe:n,height:0,width:0,type:"init"})}function Y(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:qe.bind(null,i[f].iframe),resize:A.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(h){A("Move to anchor","moveToAnchor:"+h,i[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),A("Send Message","message:"+h,i[f].iframe,f)}})}function Z(h){function C(){A("iFrame.onload",h,n,e,!0),le()}function N(ce){if(n.parentNode){var Je=new ce(function(_e){_e.forEach(function(Ke){var Ge=Array.prototype.slice.call(Ke.removedNodes);Ge.forEach(function(D){D===n&&se(n)})})});Je.observe(n.parentNode,{childList:!0})}}var J=L();J&&N(J),re(n,"load",C),A("init",h,n,e,!0)}function ne(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function _(h){for(var C in ge)Object.prototype.hasOwnProperty.call(ge,C)&&(i[f][C]=Object.prototype.hasOwnProperty.call(h,C)?h[C]:ge[C])}function Se(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Ae(h){var C=h.split("Callback");if(C.length===2){var N="on"+C[0].charAt(0).toUpperCase()+C[0].slice(1);this[N]=this[h],delete this[h],V(f,"Deprecated: '"+h+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Ie(h){h=h||{},i[f]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("/").slice(0,3).join("/")},ne(h),Object.keys(h).forEach(Ae,h),_(h),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?Se(i[f].remoteHost):"*")}function Ce(){return f in i&&"iFrameResizer"in n}var f=k(n.id);Ce()?V(f,"Ignored iFrame, already setup."):(Ie(s),w(),g(),K(),Z(ot(f)),Y())}function je(n,s){ie===null&&(ie=setTimeout(function(){ie=null,n()},s))}var xe={};function $e(n,s,g){xe[g]||(xe[g]=setTimeout(function(){xe[g]=null,n()},s))}function it(){function n(){function k(w){function K(Y){return(i[w]&&i[w].iframe.style[Y])==="0px"}function le(Y){return Y.offsetParent!==null}i[w]&&le(i[w].iframe)&&(K("height")||K("width"))&&A("Visibility change","resize",i[w].iframe,w)}Object.keys(i).forEach(function(w){k(w)})}function s(k){y("window","Mutation observed: "+k[0].target+" "+k[0].type),je(n,16)}function g(){var k=document.querySelector("body"),w={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},K=new d(s);K.observe(k,w)}var d=L();d&&g()}function rt(n){function s(){ue("Window "+n,"resize")}y("window","Trigger event: "+n),je(s,16)}function Ye(){function n(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(y("document","Trigger event: Visiblity change"),je(n,16))}function ue(n,s){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&A(n,s,i[d].iframe,d)})}function ht(){re(window,"message",nt),re(window,"resize",function(){rt("resize")}),re(document,"visibilitychange",Ye),re(document,"-webkit-visibilitychange",Ye)}function ze(){function n(d,k){function w(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(w(),Fe(k,d),g.push(k))}function s(d){d&&d.enablePublicMethods&&V("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return ye(),ht(),function(k,w){switch(g=[],s(k),typeof w){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(w||"iframe"),n.bind(e,k));break;case"object":n(k,w);break;default:throw new TypeError("Unexpected data type ("+typeof w+")")}return g}}function mt(n){n.fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(g){function d(k,w){Fe(w,g)}return this.filter("iframe").each(d).end()}):we("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&mt(window.jQuery),typeof e=="function"&&e.amd?e([],ze):a.exports=ze(),window.iFrameResize=window.iFrameResize||ze()})()})(pn);var Mt={},bn={get exports(){return Mt},set exports(a){Mt=a}};(function(a){(function(e){if(typeof window>"u")return;var r=!0,c=10,v="",S=0,U="",Q=null,q="",z=!1,$={resize:1,click:1},We=128,i=!0,ie=1,ge="bodyOffset",L=ge,re=!0,et="",ye={},ae=32,tt=null,Ee=!1,y=!1,we="[iFrameSizer]",V=we.length,pe="",nt={max:1,min:1,bodyScroll:1,documentElementScroll:1},ke="child",qe=window.parent,se="*",Re=0,Te=!1,De=null,be=16,ve=1,Ve="scroll",A=Ve,ot=window,Ue=function(){g("onMessage function not defined")},Fe=function(){},je=function(){},xe={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},$e={},it=!1;function rt(){}try{var Ye=Object.create({},{passive:{get:function(){it=!0}}});window.addEventListener("test",rt,Ye),window.removeEventListener("test",rt,Ye)}catch{}function ue(t,o,u,b){t.addEventListener(o,u,it?b||{}:!1)}function ht(t,o,u){t.removeEventListener(o,u,!1)}function ze(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mt(t){var o,u,b,O=null,P=0,W=function(){P=Date.now(),O=null,b=t.apply(o,u),O||(o=u=null)};return function(){var H=Date.now();P||(P=H);var R=be-(H-P);return o=this,u=arguments,R<=0||R>be?(O&&(clearTimeout(O),O=null),P=H,b=t.apply(o,u),O||(o=u=null)):O||(O=setTimeout(W,R)),b}}function n(t){return we+"["+pe+"] "+t}function s(t){Ee&&typeof window.console=="object"&&console.log(n(t))}function g(t){typeof window.console=="object"&&console.warn(n(t))}function d(){k(),s("Initialising iFrame ("+window.location.href+")"),K(),Z(),Y("background",v),Y("padding",q),N(),Ie(),Ce(),ne(),Je(),ce(),f(),ye=J(),oe("init","Init message from host page"),Fe()}function k(){function t(u){return u==="true"}var o=et.substr(V).split(":");pe=o[0],S=e!==o[1]?Number(o[1]):S,z=e!==o[2]?t(o[2]):z,Ee=e!==o[3]?t(o[3]):Ee,ae=e!==o[4]?Number(o[4]):ae,r=e!==o[6]?t(o[6]):r,U=o[7],L=e!==o[8]?o[8]:L,v=o[9],q=o[10],Re=e!==o[11]?Number(o[11]):Re,ye.enable=e!==o[12]?t(o[12]):!1,ke=e!==o[13]?o[13]:ke,A=e!==o[14]?o[14]:A,y=e!==o[15]?Boolean(o[15]):y}function w(t){var o=t.split("Callback");if(o.length===2){var u="on"+o[0].charAt(0).toUpperCase()+o[0].slice(1);this[u]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function K(){function t(){var u=window.iFrameResizer;s("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(w,u),Ue="onMessage"in u?u.onMessage:Ue,Fe="onReady"in u?u.onReady:Fe,se="targetOrigin"in u?u.targetOrigin:se,L="heightCalculationMethod"in u?u.heightCalculationMethod:L,A="widthCalculationMethod"in u?u.widthCalculationMethod:A}function o(u,b){return typeof u=="function"&&(s("Setup custom "+b+"CalcMethod"),xe[b]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=o(L,"height"),A=o(A,"width")),s("TargetOrigin for parent set to: "+se)}function le(t,o){return o.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),o=""),o}function Y(t,o){e!==o&&o!==""&&o!=="null"&&(document.body.style[t]=o,s("Body "+t+' set to "'+o+'"'))}function Z(){e===U&&(U=S+"px"),Y("margin",le("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",s('HTML & body height set to "auto"')}function _(t){var o={add:function(u){function b(){oe(t.eventName,t.eventType)}$e[u]=b,ue(window,u,b,{passive:!0})},remove:function(u){var b=$e[u];delete $e[u],ht(window,u,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(o[t.method])):o[t.method](t.eventName),s(ze(t.method)+" event listener: "+t.eventType)}function Se(t){_({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),_({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),_({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),_({method:t,eventType:"Input",eventName:"input"}),_({method:t,eventType:"Mouse Up",eventName:"mouseup"}),_({method:t,eventType:"Mouse Down",eventName:"mousedown"}),_({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),_({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),_({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),_({method:t,eventType:"Touch Start",eventName:"touchstart"}),_({method:t,eventType:"Touch End",eventName:"touchend"}),_({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),_({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),_({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),_({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ke==="child"&&_({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Ae(t,o,u,b){return o!==t&&(t in u||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=o),s(b+' calculation method set to "'+t+'"')),t}function Ie(){L=Ae(L,ge,T,"height")}function Ce(){A=Ae(A,Ve,E,"width")}function f(){r===!0?(Se("add"),Ge()):s("Auto Resize disabled")}function h(){Q!==null&&Q.disconnect()}function C(){Se("remove"),h(),clearInterval(tt)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function J(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(R){var I=R.getBoundingClientRect(),F=t();return{x:parseInt(I.left,10)+parseInt(F.x,10),y:parseInt(I.top,10)+parseInt(F.y,10)}}function u(R){function I(te){var Pe=o(te);s("Moving to in page link (#"+F+") at x: "+Pe.x+" y: "+Pe.y),G(Pe.y,Pe.x,"scrollToOffset")}var F=R.split("#")[1]||R,j=decodeURIComponent(F),X=document.getElementById(j)||document.getElementsByName(j)[0];e!==X?I(X):(s("In page link (#"+F+") not found in iFrame, so sending to parent"),G(0,0,"inPageLink","#"+F))}function b(){var R=window.location.hash,I=window.location.href;R!==""&&R!=="#"&&u(I)}function O(){function R(I){function F(j){j.preventDefault(),u(this.getAttribute("href"))}I.getAttribute("href")!=="#"&&ue(I,"click",F)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),R)}function P(){ue(window,"hashchange",b)}function W(){setTimeout(b,We)}function H(){Array.prototype.forEach&&document.querySelectorAll?(s("Setting up location.hash handlers"),O(),P(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ye.enable?H():s("In page linking not enabled"),{findTarget:u}}function ce(){if(y!==!0)return;function t(u){G(0,0,u.type,u.screenY+":"+u.screenX)}function o(u,b){s("Add event listener: "+b),ue(window.document,u,t)}o("mouseenter","Mouse Enter"),o("mouseleave","Mouse Leave")}function Je(){s("Enable public methods"),ot.parentIFrame={autoResize:function(o){return o===!0&&r===!1?(r=!0,f()):o===!1&&r===!0&&(r=!1,C()),G(0,0,"autoResize",JSON.stringify(r)),r},close:function(){G(0,0,"close")},getId:function(){return pe},getPageInfo:function(o){typeof o=="function"?(je=o,G(0,0,"pageInfo")):(je=function(){},G(0,0,"pageInfoStop"))},moveToAnchor:function(o){ye.findTarget(o)},reset:function(){At("parentIFrame.reset")},scrollTo:function(o,u){G(u,o,"scrollTo")},scrollToOffset:function(o,u){G(u,o,"scrollToOffset")},sendMessage:function(o,u){G(0,0,"message",JSON.stringify(o),u)},setHeightCalculationMethod:function(o){L=o,Ie()},setWidthCalculationMethod:function(o){A=o,Ce()},setTargetOrigin:function(o){s("Set targetOrigin: "+o),se=o},size:function(o,u){var b=""+(o||"")+(u?","+u:"");oe("size","parentIFrame.size("+b+")",o,u)}}}function _e(){ae!==0&&(s("setInterval: "+ae+"ms"),tt=setInterval(function(){oe("interval","setInterval: "+ae)},Math.abs(ae)))}function Ke(){function t(j){function X(te){te.complete===!1&&(s("Attach listeners to "+te.src),te.addEventListener("load",O,!1),te.addEventListener("error",P,!1),R.push(te))}j.type==="attributes"&&j.attributeName==="src"?X(j.target):j.type==="childList"&&Array.prototype.forEach.call(j.target.querySelectorAll("img"),X)}function o(j){R.splice(R.indexOf(j),1)}function u(j){s("Remove listeners from "+j.src),j.removeEventListener("load",O,!1),j.removeEventListener("error",P,!1),o(j)}function b(j,X,te){u(j.target),oe(X,te+": "+j.target.src)}function O(j){b(j,"imageLoad","Image loaded")}function P(j){b(j,"imageLoadFailed","Image load failed")}function W(j){oe("mutationObserver","mutationObserver: "+j[0].target+" "+j[0].type),j.forEach(t)}function H(){var j=document.querySelector("body"),X={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return F=new I(W),s("Create body MutationObserver"),F.observe(j,X),F}var R=[],I=window.MutationObserver||window.WebKitMutationObserver,F=H();return{disconnect:function(){"disconnect"in F&&(s("Disconnect body MutationObserver"),F.disconnect(),R.forEach(u))}}}function Ge(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?_e():Q=Ke():(s("MutationObserver not supported in this browser!"),_e())}function D(t,o){var u=0;return o=o||document.body,u=document.defaultView.getComputedStyle(o,null),u=u!==null?u[t]:0,parseInt(u,c)}function x(t){t>be/2&&(be=2*t,s("Event throttle increased to "+be+"ms"))}function m(t,o){for(var u=o.length,b=0,O=0,P=ze(t),W=Date.now(),H=0;H<u;H++)b=o[H].getBoundingClientRect()[t]+D("margin"+P,o[H]),b>O&&(O=b);return W=Date.now()-W,s("Parsed "+u+" HTML elements"),s("Element position calculated in "+W+"ms"),x(W),O}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,o){function u(){return g("No tagged elements ("+o+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+o+"]");return b.length===0&&u(),m(t,b)}function M(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+D("marginTop")+D("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return xe.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(T))},min:function(){return Math.min.apply(null,l(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),m("bottom",M()))},taggedElement:function(){return p("bottom","data-iframe-height")}},E={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return xe.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(E.bodyScroll(),E.documentElementScroll())},max:function(){return Math.max.apply(null,l(E))},min:function(){return Math.min.apply(null,l(E))},rightMostElement:function(){return m("right",M())},taggedElement:function(){return p("right","data-iframe-width")}};function B(t,o,u,b){function O(){ie=F,ve=j,G(ie,ve,t)}function P(){function X(te,Pe){var en=Math.abs(te-Pe)<=Re;return!en}return F=e!==u?u:T[L](),j=e!==b?b:E[A](),X(ie,F)||z&&X(ve,j)}function W(){return!(t in{init:1,interval:1,size:1})}function H(){return L in nt||z&&A in nt}function R(){s("No change in size detected")}function I(){W()&&H()?At(o):t in{interval:1}||R()}var F,j;P()||t==="init"?(Ft(),O()):I()}var ee=mt(B);function oe(t,o,u,b){function O(){t in{reset:1,resetPage:1,init:1}||s("Trigger event: "+o)}function P(){return Te&&t in $}P()?s("Trigger event cancelled: "+t):(O(),t==="init"?B(t,o,u,b):ee(t,o,u,b))}function Ft(){Te||(Te=!0,s("Trigger event lock on")),clearTimeout(De),De=setTimeout(function(){Te=!1,s("Trigger event lock off"),s("--")},We)}function zt(t){ie=T[L](),ve=E[A](),G(ie,ve,t)}function At(t){var o=L;L=ge,s("Reset trigger event: "+t),Ft(),zt("reset"),L=o}function G(t,o,u,b,O){function P(){e===O?O=se:s("Message targetOrigin: "+O)}function W(){var H=t+":"+o,R=pe+":"+H+":"+u+(e!==b?":"+b:"");s("Sending message to host page ("+R+")"),qe.postMessage(we+R,O)}P(),W()}function Zt(t){var o={init:function(){et=t.data,qe=t.source,d(),i=!1,setTimeout(function(){re=!1},We)},reset:function(){re?s("Page reset ignored by init"):(s("Page size reset by host page"),zt("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){ye.findTarget(O())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var F=O();s("PageInfoFromParent called from parent: "+F),je(JSON.parse(F)),s(" --")},message:function(){var F=O();s("onMessage called from parent: "+F),Ue(JSON.parse(F)),s(" --")}};function u(){return we===(""+t.data).substr(0,V)}function b(){return t.data.split("]")[1].split(":")[0]}function O(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!a.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function H(){var I=b();I in o?o[I]():!P()&&!W()&&g("Unexpected message ("+t.data+")")}function R(){i===!1?H():W()?o.init():s('Ignored message of type "'+b()+'". Received before initialization.')}u()&&R()}function It(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",Zt),ue(window,"readystatechange",It),It()})()})(bn);var Gt=St;ft.iframeResize=Gt;ft.iframeResizer=Gt;ft.iframeResizerContentWindow=Mt;(function(a){a.exports=ft})(gn);function vn(a){const e=document.createElement("a");return e.href=a,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function yn(a){const e=vn(a),r=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&r===c}function Xt(a,e){const r=JSON.stringify(e);let c=0;if(r.length===0)return c;for(let v=0;v<r.length;v++){const S=r.charCodeAt(v);c=(c<<5)-c+S,c&=c}return`${a}-${c}`}function wn(a,e,r){const c=document.createElement("form"),v=document.createElement("input");return c.action=a,c.method="POST",c.target=r,e.forEach(([S,U])=>{v.name=S,v.value=U.toString(),c.appendChild(v.cloneNode())}),c.style.visibility="hidden",c}function kn(a){const e=a.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function Tn(a,e){if(a.hasAttribute("data-modal-post")){const r=a.getAttribute("data-modal-post");e.method="POST",e.body=r;const c=[];return new URL(`http://localhost/?${r}`).searchParams.forEach((v,S)=>{c.push([S,v])}),[c,e]}return[null,e]}function jn(a,e,r,c,v){const S=document.createElement("toujou-modal"),U=document.createElement("iframe"),Q=Xt("iframe",e);if(S.id=a,U.name=Q,document.body.appendChild(S),yn(r)){const q=document.querySelector(r),z=q instanceof HTMLTemplateElement?document.importNode(q.content,!0).children:q.childNodes;q.title&&(S.title=q.title);for(let $=0;$<z.length;$++)S.appendChild(z[$])}else if(v&&c==="POST"){const q=wn(r,v,Q);S.appendChild(q),S.appendChild(U),q.submit(),q.remove()}else c==="GET"&&(U.src=r,S.appendChild(U));return S}function xn(a,e,r,c){const v=Xt("toujou-modal",a),S=document.getElementById(v)||jn(v,a,e,r,c);setTimeout(()=>{S.open()})}const Sn=a=>{if(a.metaKey||a.ctrlKey)return;const e=kn(a);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const r=e.getAttribute("href"),c=r.indexOf("?")!==-1?r.split("?")[0]+"?toujou-ajax-modal=1&"+r.split("?")[1]:r.indexOf("#")!==-1?r.split("#")[0]+"?toujou-ajax-modal=1#"+r.split("#")[1]:r+"?toujou-ajax-modal=1",[v,S]=Tn(e,{src:c});xn(S,c,v?"POST":"GET",v),a.preventDefault(),a.stopPropagation()}},Mn=ct`
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

`,On={reserveScrollBarGap:!0},Le=[];function En(a){Le.forEach(e=>e.close()),Le.push(a)}function Rn(a){if(a===Le[Le.length-1]){Le.pop();const e=Le.pop();e&&e.open()}}class Ot extends He{static get is(){return"toujou-modal"}render(){return he`
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
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(r=>{r[0]&&this.onPosition(r[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){hn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":fn(this.$.scroller,On),En(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Rn(this),this.allowOutsideScroll?document.body.style.position="":mn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const r=e.composedPath();(!r.includes(this.$.modalContent)||r.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const r=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=r?`${r}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(r=>r instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((r,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(r=>{this.loading=!0,r.addEventListener("load",()=>{this.iframeResizerMap.has(r)||this.listenToIframeReadyState(r)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let r={};try{r=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return r.initCallback=()=>{this.loading=!1},r.closedCallback=()=>{this.close()},xt.iframeResizer(r,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Ct(Ot,"styles",[Mn]);customElements.define(Ot.is,Ot);document.addEventListener("click",Sn);var st,ut,lt;(function(a){a.PRIMARY="primary",a.SECONDARY="secondary",a.FONT="font"})(st||(st={})),function(a){a.DEFAULT="default",a.BORDER="border",a.GHOST="ghost"}(ut||(ut={})),function(a){a.TINY="tiny",a.SMALL="small",a.NORMAL="normal",a.LARGE="large"}(lt||(lt={}));let Fn=class extends HTMLButtonElement{constructor(){super(),this.defaultButtonVariant=st.PRIMARY,this.defaultButtonType=ut.DEFAULT,this.defaultButtonSize=lt.NORMAL}connectedCallback(){this._checkRequiredAttributes()}_checkRequiredAttributes(){const e=this.getAttribute("button-variant");e?Object.values(st).includes(e)||(console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`),this.setAttribute("button-variant",this.defaultButtonVariant)):this.setAttribute("button-variant",this.defaultButtonVariant);const r=this.getAttribute("button-size");r?Object.values(lt).includes(r)||(console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`),this.setAttribute("button-size",this.defaultButtonSize)):this.setAttribute("button-size",this.defaultButtonSize);const c=this.getAttribute("button-type");c?Object.values(ut).includes(c)||(console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`),this.setAttribute("button-type",this.defaultButtonType)):this.setAttribute("button-type",this.defaultButtonType)}};customElements.define("toujou-button",Fn,{extends:"button"});var Et,at,Qt;let de=class extends He{get result(){const e=Math.round(this.duration);return e===0?`${this.lessThanText} 1 ${this.minutesSingularText}`:e===1?`1 ${this.minutesSingularText}`:`${e} ${this.minutesPluralText}`}render(){return he`
      <slot name="label" class="label"></slot>
      ${this.result}
    `}constructor(){super(),Et.add(this),this.wordCount=0,this.duration=0,this.targetSelector="body",this.minutesSingularText="minute",this.minutesPluralText="minutes",this.lessThanText="under",this.readingSpeed=250,at.set(this,()=>{this.targetEl=document.querySelector(`${this.targetSelector}`),this.targetEl&&(this.wordCount+=gt(this,Et,"m",Qt).call(this,this.targetEl))}),document.readyState==="complete"||document.readyState==="interactive"?setTimeout(gt(this,at,"f")):document.addEventListener("DOMContentLoaded",gt(this,at,"f"))}updated(e){e.has("wordCount")&&(this.duration=Math.ceil(this.wordCount/this.readingSpeed))}};at=new WeakMap,Et=new WeakSet,Qt=function(a){const e=a.textContent,r=e==null?void 0:e.replace(/[\n\r]+|[\s]{2,}/g," "),c=r==null?void 0:r.trim(),v=c==null?void 0:c.split(" ");return(v==null?void 0:v.length)||0},fe([Me({type:Number})],de.prototype,"wordCount",void 0),fe([Me({type:Number})],de.prototype,"duration",void 0),fe([Me({type:String,attribute:"target-selector"})],de.prototype,"targetSelector",void 0),fe([Me({type:String,attribute:"minutes-singular-text"})],de.prototype,"minutesSingularText",void 0),fe([Me({type:String,attribute:"minutes-plural-text"})],de.prototype,"minutesPluralText",void 0),fe([Me({type:String,attribute:"less-than-text"})],de.prototype,"lessThanText",void 0),fe([Me({type:Number,attribute:"reading-speed"})],de.prototype,"readingSpeed",void 0),de=fe([Ut("toujou-estimated-reading-time")],de);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Nt,bt,vt,zn=ct(Nt||(bt=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],vt||(vt=bt.slice(0)),Nt=Object.freeze(Object.defineProperties(bt,{raw:{value:Object.freeze(vt)}}))));let yt=class extends He{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return he`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const a=this.querySelector("template");a&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+a.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(a){this._messageTemplate&&on(this._messageTemplate(he,this.targetUrl,this.secondsRemaining),this)}firstUpdated(a){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function Bt(a){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:a},window.location.origin),!0):(new URL(a).hostname===window.location.hostname?window.location.href=a:(e.targetUrl=a,e.open()),!0):!1}yt.styles=[zn],yt=fe([Ut("exit-warning")],yt),document.addEventListener("click",function(a){if(a.metaKey||a.ctrlKey)return;const e=function(r){const c=r.composedPath();for(let v=0;v<c.indexOf(document.body);v++){const S=c[v];if(S.hasAttribute&&S.hasAttribute("target")&&S!==document.body)return S}}(a);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&Bt(e.getAttribute("href"))&&(a.preventDefault(),a.stopPropagation())}),window.addEventListener("message",function(a){a.origin===window.location.origin&&a.data.action!==void 0&&a.data.action==="toujou-exit-warning"&&a.data.targetUrl&&Bt(a.data.targetUrl)});let Ht=class extends He{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return he`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(r=>r.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const r=document.importNode(e.content,!0);e.parentNode.insertBefore(r,e)})}};customElements.define(Ht.is,Ht);var Wt,wt,kt,An=ct(Wt||(wt=[`:host {
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
`],kt||(kt=wt.slice(0)),Wt=Object.freeze(Object.defineProperties(wt,{raw:{value:Object.freeze(kt)}}))));let qt=class extends He{static get is(){return"toujou-snackbar"}render(){return he`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return[An]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define(qt.is,qt);var Dt,Tt,jt,In=ct(Dt||(Tt=[`* {
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
`],jt||(jt=Tt.slice(0)),Dt=Object.freeze(Object.defineProperties(Tt,{raw:{value:Object.freeze(jt)}}))));class Vt extends He{static get is(){return"toujou-spinner"}static get styles(){return In}render(){return he`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(Vt.is,Vt);
//# sourceMappingURL=base.js.map
