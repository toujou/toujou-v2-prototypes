var Dt=Object.defineProperty;var Ut=(s,e,r)=>e in s?Dt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var Mt=(s,e,r)=>(Ut(s,typeof e!="symbol"?e+"":e,r),r);import{i as ot,s as $e,y as pe,Z as Yt}from"./lit-element-6fe74b4f.js";import{_ as Jt}from"./tslib.es6-c85c2c5e.js";import"./query-assigned-elements-acf341e1.js";import{e as Kt}from"./custom-element-73470d87.js";let ut=0,St=0;const Pt=getComputedStyle(document.documentElement),Xt=".topbar, .inpage-nav, .navigation--inpage";function $t(){const s=parseInt(Pt.getPropertyValue("--toujou-scroll-padding-offset"));s&&(ut+=s);const e=Array.from(document.querySelectorAll(Xt));e&&(e.forEach(r=>{St+=r.offsetHeight}),ut+=St),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${ut}px`)}function Et(){Pt.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||$t()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{Et()}):document.addEventListener("DOMContentLoaded",()=>{Et()});function Gt(s){if(Array.isArray(s)){for(var e=0,r=Array(s.length);e<s.length;e++)r[e]=s[e];return r}else return Array.from(s)}var it=!1;if(typeof window<"u"){var Ot={get passive(){it=!0}};window.addEventListener("testPassive",null,Ot),window.removeEventListener("testPassive",null,Ot)}var _e=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Pe=!1,yt=-1,Je=void 0,Te=void 0,Ke=void 0,Lt=function(e){return de.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},Xe=function(e){var r=e||window.event;return Lt(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},Qt=function(e){if(Ke===void 0){var r=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(r&&c>0){var v=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Ke=document.body.style.paddingRight,document.body.style.paddingRight=v+c+"px"}}Je===void 0&&(Je=document.body.style.overflow,document.body.style.overflow="hidden")},Nt=function(){Ke!==void 0&&(document.body.style.paddingRight=Ke,Ke=void 0),Je!==void 0&&(document.body.style.overflow=Je,Je=void 0)},Zt=function(){return window.requestAnimationFrame(function(){if(Te===void 0){Te={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,c=e.scrollX,v=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var M=v-window.innerHeight;M&&r>=v&&(document.body.style.top=-(r+M))})},300)}})},Ht=function(){if(Te!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=Te.position,document.body.style.top=Te.top,document.body.style.left=Te.left,window.scrollTo(r,e),Te=void 0}},en=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},tn=function(e,r){var c=e.targetTouches[0].clientY-yt;return Lt(e.target)?!1:r&&r.scrollTop===0&&c>0||en(r)&&c<0?Xe(e):(e.stopPropagation(),!0)},nn=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(v){return v.targetElement===e})){var c={targetElement:e,options:r||{}};de=[].concat(Gt(de),[c]),_e?Zt():Qt(r),_e&&(e.ontouchstart=function(v){v.targetTouches.length===1&&(yt=v.targetTouches[0].clientY)},e.ontouchmove=function(v){v.targetTouches.length===1&&tn(v,e)},Pe||(document.addEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!0))}},on=function(){_e&&(de.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Pe&&(document.removeEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!1),yt=-1),_e?Ht():Nt(),de=[]},rn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(r){return r.targetElement!==e}),_e&&(e.ontouchstart=null,e.ontouchmove=null,Pe&&de.length===0&&(document.removeEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!1)),_e?Ht():Nt()},pt={},an={get exports(){return pt},set exports(s){pt=s}},rt={},bt={},sn={get exports(){return bt},set exports(s){bt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=0,c=!1,v=!1,M="message",U=M.length,Q="[iFrameSizer]",q=Q.length,z=null,Y=window.requestAnimationFrame,Le={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){D("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(n,a,g){n.addEventListener(a,g,!1)}function Ge(n,a,g){n.removeEventListener(a,g,!1)}function be(){var n=["moz","webkit","o","ms"],a;for(a=0;a<n.length&&!Y;a+=1)Y=window[n[a]+"RequestAnimationFrame"];Y?Y=Y.bind(window):w("setup","RequestAnimationFrame not supported")}function ae(n){var a="Host page: "+n;return window.top!==window.self&&(a=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),a}function Qe(n){return Q+"["+ae(n)+"]"}function Me(n){return i[n]?i[n].log:c}function w(n,a){me("log",n,a,Me(n))}function ve(n,a){me("info",n,a,Me(n))}function D(n,a){me("warn",n,a,!0)}function me(n,a,g,d){d===!0&&typeof window.console=="object"&&console[n](Qe(a),g)}function Ze(n){function a(){function l(){ge(T),ye(h),ce("onResized",T)}y("Height"),y("Width"),Be(l,T,"init")}function g(){var l=V.substr(q).split(":"),p=l[1]?parseInt(l[1],10):0,S=i[l[0]]&&i[l[0]].iframe,j=getComputedStyle(S);return{iframe:S,id:l[0],height:p+d(j)+k(j),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,S=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+S}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,S=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+S}function y(l){var p=Number(i[h]["max"+l]),S=Number(i[h]["min"+l]),j=l.toLowerCase(),O=Number(T[j]);w(h,"Checking "+j+" is in range "+S+"-"+p),O<S&&(O=S,w(h,"Set "+j+" to min value")),O>p&&(O=p,w(h,"Set "+j+" to max value")),T[j]=""+O}function X(){function l(){function j(){var H=0,ee=!1;for(w(h,"Checking connection is from allowed list of origins: "+S);H<S.length;H++)if(S[H]===p){ee=!0;break}return ee}function O(){var H=i[h]&&i[h].remoteHost;return w(h,"Checking connection is from: "+H),p===H}return S.constructor===Array?j():O()}var p=n.origin,S=i[h]&&i[h].checkOrigin;if(S&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+T.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return Q===(""+V).substr(0,q)&&V.substr(q).split(":")[0]in i}function J(){var l=T.type in{true:1,false:1,undefined:1};return l&&w(h,"Ignoring init message from meta parent page"),l}function Z(l){return V.substr(V.indexOf(":")+U+l)}function ne(l){w(h,"onMessage passed: {iframe: "+T.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:T.iframe,message:JSON.parse(l)}),w(h,"--")}function _(){var l=document.body.getBoundingClientRect(),p=T.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function xe(l,p){function S(){I("Send Page Info","pageInfo:"+_(),l,p)}qe(S,32,p)}function Fe(){function l(O,H){function ee(){i[j]?xe(i[j].iframe,j):p()}["scroll","resize"].forEach(function(oe){w(j,O+oe+" listener for sendPageInfo"),H(window,oe,ee)})}function p(){l("Remove ",Ge)}function S(){l("Add ",re)}var j=h;S(),i[j]&&(i[j].stopPageInfo=p)}function Re(){i[h]&&i[h].stopPageInfo&&(i[h].stopPageInfo(),delete i[h].stopPageInfo)}function ze(){var l=!0;return T.iframe===null&&(D(h,"IFrame ("+T.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return Se(h),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function m(l){function p(){z=H,A(),w(h,"--")}function S(){return{x:Number(T.width)+O.x,y:Number(T.height)+O.y}}function j(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):D(h,"Unable to scroll to requested position, window.parentIFrame not found")}var O=l?f(T.iframe):{x:0,y:0},H=S();w(h,"Reposition requested from iFrame (offset x:"+O.x+" y:"+O.y+")"),window.top!==window.self?j():p()}function A(){ce("onScroll",z)!==!1?ye(h):He()}function N(l){function p(){var ee=f(H);w(h,"Moving to in page link (#"+j+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},A(),w(h,"--")}function S(){window.parentIFrame?window.parentIFrame.moveToAnchor(j):w(h,"In page link #"+j+" not found and window.parentIFrame not found")}var j=l.split("#")[1]||"",O=decodeURIComponent(j),H=document.getElementById(O)||document.getElementsByName(O)[0];H?p():window.top!==window.self?S():w(h,"In page link #"+j+" not found")}function K(l){var p={};if(Number(T.width)===0&&Number(T.height)===0){var S=Z(9).split(":");p={x:S[1],y:S[0]}}else p={x:T.width,y:T.height};ce(l,{iframe:T.iframe,screenX:Number(p.x),screenY:Number(p.y),type:T.type})}function ce(l,p){return we(h,l,p)}function De(){switch(i[h]&&i[h].firstRun&&Ye(),T.type){case"close":se(T.iframe);break;case"message":ne(Z(6));break;case"mouseenter":K("onMouseEnter");break;case"mouseleave":K("onMouseLeave");break;case"autoResize":i[h].autoResize=JSON.parse(Z(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":xe(i[h]&&i[h].iframe,h),Fe();break;case"pageInfoStop":Re();break;case"inPageLink":N(Z(9));break;case"reset":he(T);break;case"init":a(),ce("onInit",T.iframe);break;default:Number(T.width)===0&&Number(T.height)===0?D("Unsupported message received ("+T.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):a()}}function Ie(l){var p=!0;return i[l]||(p=!1,D(T.type+" No settings for "+l+". Message was: "+V)),p}function Ue(){for(var l in i)I("iFrame requested init",et(l),i[l].iframe,l)}function Ye(){i[h]&&(i[h].firstRun=!1)}var V=n.data,T={},h=null;V==="[iFrameResizerChild]Ready"?Ue():le()?(T=g(),h=T.id,i[h]&&(i[h].loaded=!0),!J()&&Ie(h)&&(w(h,"Received: "+V),ze()&&X()&&De())):ve(h,"Ignored: "+V)}function we(n,a,g){var d=null,k=null;if(i[n])if(d=i[n][a],typeof d=="function")k=d(g);else throw new TypeError(a+" on iFrame["+n+"] is not a function");return k}function Ne(n){var a=n.id;delete i[a]}function se(n){var a=n.id;if(we(a,"onClose",a)===!1){w(a,"Close iframe cancelled by onClose event");return}w(a,"Removing iFrame: "+a);try{n.parentNode&&n.parentNode.removeChild(n)}catch(g){D(g)}we(a,"onClosed",a),w(a,"--"),Ne(n)}function Se(n){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},w(n,"Get page position: "+z.x+","+z.y))}function ye(n){z!==null&&(window.scrollTo(z.x,z.y),w(n,"Set page position: "+z.x+","+z.y),He())}function He(){z=null}function he(n){function a(){ge(n),I("reset","reset",n.iframe,n.id)}w(n.id,"Size reset requested by "+(n.type==="init"?"host page":"iFrame")),Se(n.id),Be(a,n,"reset")}function ge(n){function a(y){if(!n.id){w("undefined","messageData id not set");return}n.iframe.style[y]=n[y]+"px",w(n.id,"IFrame ("+k+") "+y+" set to "+n[y]+"px")}function g(y){!v&&n[y]==="0"&&(v=!0,w(k,"Hidden iFrame detected, creating visibility listener"),tt())}function d(y){a(y),g(y)}var k=n.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function Be(n,a,g){g!==a.type&&Y&&!window.jasmine?(w(a.id,"Requesting animation frame"),Y(n)):n()}function I(n,a,g,d,k){function y(){var ne=i[d]&&i[d].targetOrigin;w(d,"["+n+"] Sending msg to iframe["+d+"] ("+a+") targetOrigin: "+ne),g.contentWindow.postMessage(Q+a,ne)}function X(){D(d,"["+n+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?y():X()}function J(){function ne(){i[d]&&!i[d].loaded&&!Z&&(Z=!0,D(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}k&&i[d]&&i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(ne,i[d].warningTimeout))}var Z=!1;d=d||g.id,i[d]&&(le(),J())}function et(n){return n+":"+i[n].bodyMarginV1+":"+i[n].sizeWidth+":"+i[n].log+":"+i[n].interval+":"+i[n].enablePublicMethods+":"+i[n].autoResize+":"+i[n].bodyMargin+":"+i[n].heightCalculationMethod+":"+i[n].bodyBackground+":"+i[n].bodyPadding+":"+i[n].tolerance+":"+i[n].inPageLinks+":"+i[n].resizeFrom+":"+i[n].widthCalculationMethod+":"+i[n].mouseEvents}function We(n){return typeof n=="number"}function Ee(n,a){function g(){function m(N){var K=i[f][N];K!==1/0&&K!==0&&(n.style[N]=We(K)?K+"px":K,w(f,"Set "+N+" = "+n.style[N]))}function A(N){if(i[f]["min"+N]>i[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}A("Height"),A("Width"),m("maxHeight"),m("minHeight"),m("maxWidth"),m("minWidth")}function d(){var m=a&&a.id||fe.id+r++;return document.getElementById(m)!==null&&(m+=r++),m}function k(m){return m===""&&(n.id=m=d(),c=(a||{}).log,w(m,"Added missing iframe ID: "+m+" ("+n.src+")")),m}function y(){switch(w(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),n.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=i[f]?i[f].scrolling:"no"}}function X(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function le(){var m=i[f]&&i[f].firstRun,A=i[f]&&i[f].heightCalculationMethod in Le;!m&&A&&he({iframe:n,height:0,width:0,type:"init"})}function J(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:Ne.bind(null,i[f].iframe),resize:I.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(m){I("Move to anchor","moveToAnchor:"+m,i[f].iframe,f)},sendMessage:function(m){m=JSON.stringify(m),I("Send Message","message:"+m,i[f].iframe,f)}})}function Z(m){function A(){I("iFrame.onload",m,n,e,!0),le()}function N(ce){if(n.parentNode){var De=new ce(function(Ie){Ie.forEach(function(Ue){var Ye=Array.prototype.slice.call(Ue.removedNodes);Ye.forEach(function(V){V===n&&se(n)})})});De.observe(n.parentNode,{childList:!0})}}var K=L();K&&N(K),re(n,"load",A),I("init",m,n,e,!0)}function ne(m){if(typeof m!="object")throw new TypeError("Options is not an object")}function _(m){for(var A in fe)Object.prototype.hasOwnProperty.call(fe,A)&&(i[f][A]=Object.prototype.hasOwnProperty.call(m,A)?m[A]:fe[A])}function xe(m){return m===""||m.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":m}function Fe(m){var A=m.split("Callback");if(A.length===2){var N="on"+A[0].charAt(0).toUpperCase()+A[0].slice(1);this[N]=this[m],delete this[m],D(f,"Deprecated: '"+m+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Re(m){m=m||{},i[f]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("/").slice(0,3).join("/")},ne(m),Object.keys(m).forEach(Fe,m),_(m),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?xe(i[f].remoteHost):"*")}function ze(){return f in i&&"iFrameResizer"in n}var f=k(n.id);ze()?D(f,"Ignored iFrame, already setup."):(Re(a),y(),g(),X(),Z(et(f)),J())}function ke(n,a){ie===null&&(ie=setTimeout(function(){ie=null,n()},a))}var je={};function qe(n,a,g){je[g]||(je[g]=setTimeout(function(){je[g]=null,n()},a))}function tt(){function n(){function k(y){function X(J){return(i[y]&&i[y].iframe.style[J])==="0px"}function le(J){return J.offsetParent!==null}i[y]&&le(i[y].iframe)&&(X("height")||X("width"))&&I("Visibility change","resize",i[y].iframe,y)}Object.keys(i).forEach(function(y){k(y)})}function a(k){w("window","Mutation observed: "+k[0].target+" "+k[0].type),ke(n,16)}function g(){var k=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},X=new d(a);X.observe(k,y)}var d=L();d&&g()}function nt(n){function a(){ue("Window "+n,"resize")}w("window","Trigger event: "+n),ke(a,16)}function Ve(){function n(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(w("document","Trigger event: Visiblity change"),ke(n,16))}function ue(n,a){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&I(n,a,i[d].iframe,d)})}function at(){re(window,"message",Ze),re(window,"resize",function(){nt("resize")}),re(document,"visibilitychange",Ve),re(document,"-webkit-visibilitychange",Ve)}function Oe(){function n(d,k){function y(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(y(),Ee(k,d),g.push(k))}function a(d){d&&d.enablePublicMethods&&D("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return be(),at(),function(k,y){switch(g=[],a(k),typeof y){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(y||"iframe"),n.bind(e,k));break;case"object":n(k,y);break;default:throw new TypeError("Unexpected data type ("+typeof y+")")}return g}}function st(n){n.fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(g){function d(k,y){Ee(y,g)}return this.filter("iframe").each(d).end()}):ve("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&st(window.jQuery),typeof e=="function"&&e.amd?e([],Oe):s.exports=Oe(),window.iFrameResize=window.iFrameResize||Oe()})()})(sn);var vt={},un={get exports(){return vt},set exports(s){vt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=!0,c=10,v="",M=0,U="",Q=null,q="",z=!1,Y={resize:1,click:1},Le=128,i=!0,ie=1,fe="bodyOffset",L=fe,re=!0,Ge="",be={},ae=32,Qe=null,Me=!1,w=!1,ve="[iFrameSizer]",D=ve.length,me="",Ze={max:1,min:1,bodyScroll:1,documentElementScroll:1},we="child",Ne=window.parent,se="*",Se=0,ye=!1,He=null,he=16,ge=1,Be="scroll",I=Be,et=window,We=function(){g("onMessage function not defined")},Ee=function(){},ke=function(){},je={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},qe={},tt=!1;function nt(){}try{var Ve=Object.create({},{passive:{get:function(){tt=!0}}});window.addEventListener("test",nt,Ve),window.removeEventListener("test",nt,Ve)}catch{}function ue(t,o,u,b){t.addEventListener(o,u,tt?b||{}:!1)}function at(t,o,u){t.removeEventListener(o,u,!1)}function Oe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function st(t){var o,u,b,E=null,P=0,W=function(){P=Date.now(),E=null,b=t.apply(o,u),E||(o=u=null)};return function(){var B=Date.now();P||(P=B);var F=he-(B-P);return o=this,u=arguments,F<=0||F>he?(E&&(clearTimeout(E),E=null),P=B,b=t.apply(o,u),E||(o=u=null)):E||(E=setTimeout(W,F)),b}}function n(t){return ve+"["+me+"] "+t}function a(t){Me&&typeof window.console=="object"&&console.log(n(t))}function g(t){typeof window.console=="object"&&console.warn(n(t))}function d(){k(),a("Initialising iFrame ("+window.location.href+")"),X(),Z(),J("background",v),J("padding",q),N(),Re(),ze(),ne(),De(),ce(),f(),be=K(),oe("init","Init message from host page"),Ee()}function k(){function t(u){return u==="true"}var o=Ge.substr(D).split(":");me=o[0],M=e!==o[1]?Number(o[1]):M,z=e!==o[2]?t(o[2]):z,Me=e!==o[3]?t(o[3]):Me,ae=e!==o[4]?Number(o[4]):ae,r=e!==o[6]?t(o[6]):r,U=o[7],L=e!==o[8]?o[8]:L,v=o[9],q=o[10],Se=e!==o[11]?Number(o[11]):Se,be.enable=e!==o[12]?t(o[12]):!1,we=e!==o[13]?o[13]:we,I=e!==o[14]?o[14]:I,w=e!==o[15]?Boolean(o[15]):w}function y(t){var o=t.split("Callback");if(o.length===2){var u="on"+o[0].charAt(0).toUpperCase()+o[0].slice(1);this[u]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function X(){function t(){var u=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(y,u),We="onMessage"in u?u.onMessage:We,Ee="onReady"in u?u.onReady:Ee,se="targetOrigin"in u?u.targetOrigin:se,L="heightCalculationMethod"in u?u.heightCalculationMethod:L,I="widthCalculationMethod"in u?u.widthCalculationMethod:I}function o(u,b){return typeof u=="function"&&(a("Setup custom "+b+"CalcMethod"),je[b]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=o(L,"height"),I=o(I,"width")),a("TargetOrigin for parent set to: "+se)}function le(t,o){return o.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),o=""),o}function J(t,o){e!==o&&o!==""&&o!=="null"&&(document.body.style[t]=o,a("Body "+t+' set to "'+o+'"'))}function Z(){e===U&&(U=M+"px"),J("margin",le("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function _(t){var o={add:function(u){function b(){oe(t.eventName,t.eventType)}qe[u]=b,ue(window,u,b,{passive:!0})},remove:function(u){var b=qe[u];delete qe[u],at(window,u,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(o[t.method])):o[t.method](t.eventName),a(Oe(t.method)+" event listener: "+t.eventType)}function xe(t){_({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),_({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),_({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),_({method:t,eventType:"Input",eventName:"input"}),_({method:t,eventType:"Mouse Up",eventName:"mouseup"}),_({method:t,eventType:"Mouse Down",eventName:"mousedown"}),_({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),_({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),_({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),_({method:t,eventType:"Touch Start",eventName:"touchstart"}),_({method:t,eventType:"Touch End",eventName:"touchend"}),_({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),_({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),_({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),_({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),we==="child"&&_({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Fe(t,o,u,b){return o!==t&&(t in u||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=o),a(b+' calculation method set to "'+t+'"')),t}function Re(){L=Fe(L,fe,j,"height")}function ze(){I=Fe(I,Be,O,"width")}function f(){r===!0?(xe("add"),Ye()):a("Auto Resize disabled")}function m(){Q!==null&&Q.disconnect()}function A(){xe("remove"),m(),clearInterval(Qe)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function K(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(F){var C=F.getBoundingClientRect(),R=t();return{x:parseInt(C.left,10)+parseInt(R.x,10),y:parseInt(C.top,10)+parseInt(R.y,10)}}function u(F){function C(te){var Ce=o(te);a("Moving to in page link (#"+R+") at x: "+Ce.x+" y: "+Ce.y),$(Ce.y,Ce.x,"scrollToOffset")}var R=F.split("#")[1]||F,x=decodeURIComponent(R),G=document.getElementById(x)||document.getElementsByName(x)[0];e!==G?C(G):(a("In page link (#"+R+") not found in iFrame, so sending to parent"),$(0,0,"inPageLink","#"+R))}function b(){var F=window.location.hash,C=window.location.href;F!==""&&F!=="#"&&u(C)}function E(){function F(C){function R(x){x.preventDefault(),u(this.getAttribute("href"))}C.getAttribute("href")!=="#"&&ue(C,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),F)}function P(){ue(window,"hashchange",b)}function W(){setTimeout(b,Le)}function B(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),E(),P(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return be.enable?B():a("In page linking not enabled"),{findTarget:u}}function ce(){if(w!==!0)return;function t(u){$(0,0,u.type,u.screenY+":"+u.screenX)}function o(u,b){a("Add event listener: "+b),ue(window.document,u,t)}o("mouseenter","Mouse Enter"),o("mouseleave","Mouse Leave")}function De(){a("Enable public methods"),et.parentIFrame={autoResize:function(o){return o===!0&&r===!1?(r=!0,f()):o===!1&&r===!0&&(r=!1,A()),$(0,0,"autoResize",JSON.stringify(r)),r},close:function(){$(0,0,"close")},getId:function(){return me},getPageInfo:function(o){typeof o=="function"?(ke=o,$(0,0,"pageInfo")):(ke=function(){},$(0,0,"pageInfoStop"))},moveToAnchor:function(o){be.findTarget(o)},reset:function(){xt("parentIFrame.reset")},scrollTo:function(o,u){$(u,o,"scrollTo")},scrollToOffset:function(o,u){$(u,o,"scrollToOffset")},sendMessage:function(o,u){$(0,0,"message",JSON.stringify(o),u)},setHeightCalculationMethod:function(o){L=o,Re()},setWidthCalculationMethod:function(o){I=o,ze()},setTargetOrigin:function(o){a("Set targetOrigin: "+o),se=o},size:function(o,u){var b=""+(o||"")+(u?","+u:"");oe("size","parentIFrame.size("+b+")",o,u)}}}function Ie(){ae!==0&&(a("setInterval: "+ae+"ms"),Qe=setInterval(function(){oe("interval","setInterval: "+ae)},Math.abs(ae)))}function Ue(){function t(x){function G(te){te.complete===!1&&(a("Attach listeners to "+te.src),te.addEventListener("load",E,!1),te.addEventListener("error",P,!1),F.push(te))}x.type==="attributes"&&x.attributeName==="src"?G(x.target):x.type==="childList"&&Array.prototype.forEach.call(x.target.querySelectorAll("img"),G)}function o(x){F.splice(F.indexOf(x),1)}function u(x){a("Remove listeners from "+x.src),x.removeEventListener("load",E,!1),x.removeEventListener("error",P,!1),o(x)}function b(x,G,te){u(x.target),oe(G,te+": "+x.target.src)}function E(x){b(x,"imageLoad","Image loaded")}function P(x){b(x,"imageLoadFailed","Image load failed")}function W(x){oe("mutationObserver","mutationObserver: "+x[0].target+" "+x[0].type),x.forEach(t)}function B(){var x=document.querySelector("body"),G={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new C(W),a("Create body MutationObserver"),R.observe(x,G),R}var F=[],C=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(a("Disconnect body MutationObserver"),R.disconnect(),F.forEach(u))}}}function Ye(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?Ie():Q=Ue():(a("MutationObserver not supported in this browser!"),Ie())}function V(t,o){var u=0;return o=o||document.body,u=document.defaultView.getComputedStyle(o,null),u=u!==null?u[t]:0,parseInt(u,c)}function T(t){t>he/2&&(he=2*t,a("Event throttle increased to "+he+"ms"))}function h(t,o){for(var u=o.length,b=0,E=0,P=Oe(t),W=Date.now(),B=0;B<u;B++)b=o[B].getBoundingClientRect()[t]+V("margin"+P,o[B]),b>E&&(E=b);return W=Date.now()-W,a("Parsed "+u+" HTML elements"),a("Element position calculated in "+W+"ms"),T(W),E}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,o){function u(){return g("No tagged elements ("+o+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+o+"]");return b.length===0&&u(),h(t,b)}function S(){return document.querySelectorAll("body *")}var j={bodyOffset:function(){return document.body.offsetHeight+V("marginTop")+V("marginBottom")},offset:function(){return j.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return je.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(j))},min:function(){return Math.min.apply(null,l(j))},grow:function(){return j.max()},lowestElement:function(){return Math.max(j.bodyOffset()||j.documentElementOffset(),h("bottom",S()))},taggedElement:function(){return p("bottom","data-iframe-height")}},O={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return je.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(O.bodyScroll(),O.documentElementScroll())},max:function(){return Math.max.apply(null,l(O))},min:function(){return Math.min.apply(null,l(O))},rightMostElement:function(){return h("right",S())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,o,u,b){function E(){ie=R,ge=x,$(ie,ge,t)}function P(){function G(te,Ce){var Vt=Math.abs(te-Ce)<=Se;return!Vt}return R=e!==u?u:j[L](),x=e!==b?b:O[I](),G(ie,R)||z&&G(ge,x)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return L in Ze||z&&I in Ze}function F(){a("No change in size detected")}function C(){W()&&B()?xt(o):t in{interval:1}||F()}var R,x;P()||t==="init"?(kt(),E()):C()}var ee=st(H);function oe(t,o,u,b){function E(){t in{reset:1,resetPage:1,init:1}||a("Trigger event: "+o)}function P(){return ye&&t in Y}P()?a("Trigger event cancelled: "+t):(E(),t==="init"?H(t,o,u,b):ee(t,o,u,b))}function kt(){ye||(ye=!0,a("Trigger event lock on")),clearTimeout(He),He=setTimeout(function(){ye=!1,a("Trigger event lock off"),a("--")},Le)}function jt(t){ie=j[L](),ge=O[I](),$(ie,ge,t)}function xt(t){var o=L;L=fe,a("Reset trigger event: "+t),kt(),jt("reset"),L=o}function $(t,o,u,b,E){function P(){e===E?E=se:a("Message targetOrigin: "+E)}function W(){var B=t+":"+o,F=me+":"+B+":"+u+(e!==b?":"+b:"");a("Sending message to host page ("+F+")"),Ne.postMessage(ve+F,E)}P(),W()}function qt(t){var o={init:function(){Ge=t.data,Ne=t.source,d(),i=!1,setTimeout(function(){re=!1},Le)},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),jt("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){be.findTarget(E())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=E();a("PageInfoFromParent called from parent: "+R),ke(JSON.parse(R)),a(" --")},message:function(){var R=E();a("onMessage called from parent: "+R),We(JSON.parse(R)),a(" --")}};function u(){return ve===(""+t.data).substr(0,D)}function b(){return t.data.split("]")[1].split(":")[0]}function E(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var C=b();C in o?o[C]():!P()&&!W()&&g("Unexpected message ("+t.data+")")}function F(){i===!1?B():W()?o.init():a('Ignored message of type "'+b()+'". Received before initialization.')}u()&&F()}function Tt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",qt),ue(window,"readystatechange",Tt),Tt()})()})(un);var Bt=bt;rt.iframeResize=Bt;rt.iframeResizer=Bt;rt.iframeResizerContentWindow=vt;(function(s){s.exports=rt})(an);function ln(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function cn(s){const e=ln(s),r=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&r===c}function Wt(s,e){const r=JSON.stringify(e);let c=0;if(r.length===0)return c;for(let v=0;v<r.length;v++){const M=r.charCodeAt(v);c=(c<<5)-c+M,c&=c}return`${s}-${c}`}function dn(s,e,r){const c=document.createElement("form"),v=document.createElement("input");return c.action=s,c.method="POST",c.target=r,e.forEach(([M,U])=>{v.name=M,v.value=U.toString(),c.appendChild(v.cloneNode())}),c.style.visibility="hidden",c}function fn(s){const e=s.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function mn(s,e){if(s.hasAttribute("data-modal-post")){const r=s.getAttribute("data-modal-post");e.method="POST",e.body=r;const c=[];return new URL(`http://localhost/?${r}`).searchParams.forEach((v,M)=>{c.push([M,v])}),[c,e]}return[null,e]}function hn(s,e,r,c,v){const M=document.createElement("toujou-modal"),U=document.createElement("iframe"),Q=Wt("iframe",e);if(M.id=s,U.name=Q,document.body.appendChild(M),cn(r)){const q=document.querySelector(r),z=q instanceof HTMLTemplateElement?document.importNode(q.content,!0).children:q.childNodes;q.title&&(M.title=q.title);for(let Y=0;Y<z.length;Y++)M.appendChild(z[Y])}else if(v&&c==="POST"){const q=dn(r,v,Q);M.appendChild(q),M.appendChild(U),q.submit(),q.remove()}else c==="GET"&&(U.src=r,M.appendChild(U));return M}function gn(s,e,r,c){const v=Wt("toujou-modal",s),M=document.getElementById(v)||hn(v,s,e,r,c);setTimeout(()=>{M.open()})}const pn=s=>{if(s.metaKey||s.ctrlKey)return;const e=fn(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const r=e.getAttribute("href"),c=r.indexOf("?")!==-1?r.split("?")[0]+"?toujou-ajax-modal=1&"+r.split("?")[1]:r.indexOf("#")!==-1?r.split("#")[0]+"?toujou-ajax-modal=1#"+r.split("#")[1]:r+"?toujou-ajax-modal=1",[v,M]=mn(e,{src:c});gn(M,c,v?"POST":"GET",v),s.preventDefault(),s.stopPropagation()}},bn=ot`
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

`,vn={reserveScrollBarGap:!0},Ae=[];function wn(s){Ae.forEach(e=>e.close()),Ae.push(s)}function yn(s){if(s===Ae[Ae.length-1]){Ae.pop();const e=Ae.pop();e&&e.open()}}class wt extends $e{static get is(){return"toujou-modal"}render(){return pe`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?pe`
                    <button id="dog-ear-close" dialog-dismiss></button>`:pe`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(r=>{r[0]&&this.onPosition(r[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){on()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":nn(this.$.scroller,vn),wn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),yn(this),this.allowOutsideScroll?document.body.style.position="":rn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const r=e.composedPath();(!r.includes(this.$.modalContent)||r.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const r=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=r?`${r}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(r=>r instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((r,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(r=>{this.loading=!0,r.addEventListener("load",()=>{this.iframeResizerMap.has(r)||this.listenToIframeReadyState(r)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let r={};try{r=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return r.initCallback=()=>{this.loading=!1},r.closedCallback=()=>{this.close()},pt.iframeResizer(r,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Mt(wt,"styles",[bn]);customElements.define(wt.is,wt);document.addEventListener("click",pn);var Ft,lt,ct,kn=ot(Ft||(lt=[`* {
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
`],ct||(ct=lt.slice(0)),Ft=Object.freeze(Object.defineProperties(lt,{raw:{value:Object.freeze(ct)}}))));let Rt=class extends $e{static get is(){return"toujou-spinner"}static get styles(){return kn}render(){return pe`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}};customElements.define(Rt.is,Rt);var zt,dt,ft,jn=ot(zt||(dt=[`:host {
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
`],ft||(ft=dt.slice(0)),zt=Object.freeze(Object.defineProperties(dt,{raw:{value:Object.freeze(ft)}}))));class It extends $e{static get is(){return"toujou-snackbar"}render(){return pe`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return[jn]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}}customElements.define(It.is,It);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Ct,mt,ht,xn=ot(Ct||(mt=[`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`],ht||(ht=mt.slice(0)),Ct=Object.freeze(Object.defineProperties(mt,{raw:{value:Object.freeze(ht)}}))));let gt=class extends $e{static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return pe`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const s=this.querySelector("template");s&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+s.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(s){this._messageTemplate&&Yt(this._messageTemplate(pe,this.targetUrl,this.secondsRemaining),this)}firstUpdated(s){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};function At(s){console.log("11111");const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}gt.styles=[xn],gt=Jt([Kt("exit-warning")],gt),document.addEventListener("click",function(s){if(s.metaKey||s.ctrlKey)return;const e=function(r){const c=r.composedPath();for(let v=0;v<c.indexOf(document.body);v++){const M=c[v];if(M.hasAttribute&&M.hasAttribute("target")&&M!==document.body)return M}}(s);e instanceof HTMLElement&&!(e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"&&At(e.getAttribute("href"))&&(s.preventDefault(),s.stopPropagation())}),window.addEventListener("message",function(s){s.origin===window.location.origin&&s.data.action!==void 0&&s.data.action==="toujou-exit-warning"&&s.data.targetUrl&&At(s.data.targetUrl)});class _t extends $e{static get is(){return"toujou-lazy-render"}get templates(){return this.shadowRoot.querySelector("#slot").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE")}render(){return pe`
      <slot id="slot"></slot>`}connectedCallback(){super.connectedCallback(),this.intersectionObserver=new IntersectionObserver(e=>{e.some(r=>r.isIntersecting)&&(this.renderTemplates(),this.intersectionObserver.disconnect())}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}renderTemplates(){this.templates.forEach(e=>{const r=document.importNode(e.content,!0);e.parentNode.insertBefore(r,e)})}}customElements.define(_t.is,_t);
//# sourceMappingURL=base.js.map
