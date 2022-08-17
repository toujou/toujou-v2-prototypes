var Et=Object.defineProperty;var Ft=(c,e,a)=>e in c?Et(c,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[e]=a;var at=(c,e,a)=>(Ft(c,typeof e!="symbol"?e+"":e,a),a);import{r as gt,s as pt,$ as tt}from"./lit-element-a6bf029f.js";function Ot(c){if(Array.isArray(c)){for(var e=0,a=Array(c.length);e<c.length;e++)a[e]=c[e];return a}else return Array.from(c)}var ot=!1;if(typeof window<"u"){var mt={get passive(){ot=!0}};window.addEventListener("testPassive",null,mt),window.removeEventListener("testPassive",null,mt)}var Pe=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Ae=!1,ct=-1,Je=void 0,Me=void 0,Ye=void 0,bt=function(e){return de.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},Xe=function(e){var a=e||window.event;return bt(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},Rt=function(e){if(Ye===void 0){var a=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;if(a&&l>0){var w=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Ye=document.body.style.paddingRight,document.body.style.paddingRight=w+l+"px"}}Je===void 0&&(Je=document.body.style.overflow,document.body.style.overflow="hidden")},vt=function(){Ye!==void 0&&(document.body.style.paddingRight=Ye,Ye=void 0),Je!==void 0&&(document.body.style.overflow=Je,Je=void 0)},zt=function(){return window.requestAnimationFrame(function(){if(Me===void 0){Me={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,a=e.scrollY,l=e.scrollX,w=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-a,document.body.style.left=-l,setTimeout(function(){return window.requestAnimationFrame(function(){var E=w-window.innerHeight;E&&a>=w&&(document.body.style.top=-(a+E))})},300)}})},yt=function(){if(Me!==void 0){var e=-parseInt(document.body.style.top,10),a=-parseInt(document.body.style.left,10);document.body.style.position=Me.position,document.body.style.top=Me.top,document.body.style.left=Me.left,window.scrollTo(a,e),Me=void 0}},It=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Ct=function(e,a){var l=e.targetTouches[0].clientY-ct;return bt(e.target)?!1:a&&a.scrollTop===0&&l>0||It(a)&&l<0?Xe(e):(e.stopPropagation(),!0)},Pt=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(w){return w.targetElement===e})){var l={targetElement:e,options:a||{}};de=[].concat(Ot(de),[l]),Pe?zt():Rt(a),Pe&&(e.ontouchstart=function(w){w.targetTouches.length===1&&(ct=w.targetTouches[0].clientY)},e.ontouchmove=function(w){w.targetTouches.length===1&&Ct(w,e)},Ae||(document.addEventListener("touchmove",Xe,ot?{passive:!1}:void 0),Ae=!0))}},At=function(){Pe&&(de.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Ae&&(document.removeEventListener("touchmove",Xe,ot?{passive:!1}:void 0),Ae=!1),ct=-1),Pe?yt():vt(),de=[]},Lt=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(a){return a.targetElement!==e}),Pe&&(e.ontouchstart=null,e.ontouchmove=null,Ae&&de.length===0&&(document.removeEventListener("touchmove",Xe,ot?{passive:!1}:void 0),Ae=!1)),Pe?yt():vt()},wt={exports:{}},nt={},kt={exports:{}};(function(c){(function(e){if(typeof window>"u")return;var a=0,l=!1,w=!1,E="message",U=E.length,Z="[iFrameSizer]",V=Z.length,z=null,J=window.requestAnimationFrame,Le={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){D("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function N(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(o,r,g){o.addEventListener(r,g,!1)}function Ge(o,r,g){o.removeEventListener(r,g,!1)}function pe(){var o=["moz","webkit","o","ms"],r;for(r=0;r<o.length&&!J;r+=1)J=window[o[r]+"RequestAnimationFrame"];J?J=J.bind(window):v("setup","RequestAnimationFrame not supported")}function ae(o){var r="Host page: "+o;return window.top!==window.self&&(r=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+o:"Nested host page: "+o),r}function Ke(o){return Z+"["+ae(o)+"]"}function Se(o){return i[o]?i[o].log:l}function v(o,r){he("log",o,r,Se(o))}function be(o,r){he("info",o,r,Se(o))}function D(o,r){he("warn",o,r,!0)}function he(o,r,g,d){d===!0&&typeof window.console=="object"&&console[o](Ke(r),g)}function Qe(o){function r(){function u(){ge(S),ye(m),le("onResized",S)}y("Height"),y("Width"),He(u,S,"init")}function g(){var u=q.substr(V).split(":"),p=u[1]?parseInt(u[1],10):0,x=i[u[0]]&&i[u[0]].iframe,T=getComputedStyle(x);return{iframe:x,id:u[0],height:p+d(T)+k(T),width:u[2],type:u[3]}}function d(u){if(u.boxSizing!=="border-box")return 0;var p=u.paddingTop?parseInt(u.paddingTop,10):0,x=u.paddingBottom?parseInt(u.paddingBottom,10):0;return p+x}function k(u){if(u.boxSizing!=="border-box")return 0;var p=u.borderTopWidth?parseInt(u.borderTopWidth,10):0,x=u.borderBottomWidth?parseInt(u.borderBottomWidth,10):0;return p+x}function y(u){var p=Number(i[m]["max"+u]),x=Number(i[m]["min"+u]),T=u.toLowerCase(),F=Number(S[T]);v(m,"Checking "+T+" is in range "+x+"-"+p),F<x&&(F=x,v(m,"Set "+T+" to min value")),F>p&&(F=p,v(m,"Set "+T+" to max value")),S[T]=""+F}function G(){function u(){function T(){var H=0,ee=!1;for(v(m,"Checking connection is from allowed list of origins: "+x);H<x.length;H++)if(x[H]===p){ee=!0;break}return ee}function F(){var H=i[m]&&i[m].remoteHost;return v(m,"Checking connection is from: "+H),p===H}return x.constructor===Array?T():F()}var p=o.origin,x=i[m]&&i[m].checkOrigin;if(x&&""+p!="null"&&!u())throw new Error("Unexpected message received from: "+p+" for "+S.iframe.id+". Message was: "+o.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function ce(){return Z===(""+q).substr(0,V)&&q.substr(V).split(":")[0]in i}function Y(){var u=S.type in{true:1,false:1,undefined:1};return u&&v(m,"Ignoring init message from meta parent page"),u}function $(u){return q.substr(q.indexOf(":")+U+u)}function oe(u){v(m,"onMessage passed: {iframe: "+S.iframe.id+", message: "+u+"}"),le("onMessage",{iframe:S.iframe,message:JSON.parse(u)}),v(m,"--")}function A(){var u=document.body.getBoundingClientRect(),p=S.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-u.top,10),offsetLeft:parseInt(p.left-u.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Te(u,p){function x(){I("Send Page Info","pageInfo:"+A(),u,p)}We(x,32,p)}function Fe(){function u(F,H){function ee(){i[T]?Te(i[T].iframe,T):p()}["scroll","resize"].forEach(function(ne){v(T,F+ne+" listener for sendPageInfo"),H(window,ne,ee)})}function p(){u("Remove ",Ge)}function x(){u("Add ",re)}var T=m;x(),i[T]&&(i[T].stopPageInfo=p)}function Oe(){i[m]&&i[m].stopPageInfo&&(i[m].stopPageInfo(),delete i[m].stopPageInfo)}function Re(){var u=!0;return S.iframe===null&&(D(m,"IFrame ("+S.id+") not found"),u=!1),u}function f(u){var p=u.getBoundingClientRect();return xe(m),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function h(u){function p(){z=H,P(),v(m,"--")}function x(){return{x:Number(S.width)+F.x,y:Number(S.height)+F.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(u?"Offset":"")](H.x,H.y):D(m,"Unable to scroll to requested position, window.parentIFrame not found")}var F=u?f(S.iframe):{x:0,y:0},H=x();v(m,"Reposition requested from iFrame (offset x:"+F.x+" y:"+F.y+")"),window.top!==window.self?T():p()}function P(){le("onScroll",z)!==!1?ye(m):_e()}function _(u){function p(){var ee=f(H);v(m,"Moving to in page link (#"+T+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},P(),v(m,"--")}function x(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):v(m,"In page link #"+T+" not found and window.parentIFrame not found")}var T=u.split("#")[1]||"",F=decodeURIComponent(T),H=document.getElementById(F)||document.getElementsByName(F)[0];H?p():window.top!==window.self?x():v(m,"In page link #"+T+" not found")}function X(u){var p={};if(Number(S.width)===0&&Number(S.height)===0){var x=$(9).split(":");p={x:x[1],y:x[0]}}else p={x:S.width,y:S.height};le(u,{iframe:S.iframe,screenX:Number(p.x),screenY:Number(p.y),type:S.type})}function le(u,p){return ve(m,u,p)}function qe(){switch(i[m]&&i[m].firstRun&&Ue(),S.type){case"close":se(S.iframe);break;case"message":oe($(6));break;case"mouseenter":X("onMouseEnter");break;case"mouseleave":X("onMouseLeave");break;case"autoResize":i[m].autoResize=JSON.parse($(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":Te(i[m]&&i[m].iframe,m),Fe();break;case"pageInfoStop":Oe();break;case"inPageLink":_($(9));break;case"reset":me(S);break;case"init":r(),le("onInit",S.iframe);break;default:Number(S.width)===0&&Number(S.height)===0?D("Unsupported message received ("+S.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):r()}}function ze(u){var p=!0;return i[u]||(p=!1,D(S.type+" No settings for "+u+". Message was: "+q)),p}function De(){for(var u in i)I("iFrame requested init",Ze(u),i[u].iframe,u)}function Ue(){i[m]&&(i[m].firstRun=!1)}var q=o.data,S={},m=null;q==="[iFrameResizerChild]Ready"?De():ce()?(S=g(),m=S.id,i[m]&&(i[m].loaded=!0),!Y()&&ze(m)&&(v(m,"Received: "+q),Re()&&G()&&qe())):be(m,"Ignored: "+q)}function ve(o,r,g){var d=null,k=null;if(i[o])if(d=i[o][r],typeof d=="function")k=d(g);else throw new TypeError(r+" on iFrame["+o+"] is not a function");return k}function Ne(o){var r=o.id;delete i[r]}function se(o){var r=o.id;if(ve(r,"onClose",r)===!1){v(r,"Close iframe cancelled by onClose event");return}v(r,"Removing iFrame: "+r);try{o.parentNode&&o.parentNode.removeChild(o)}catch(g){D(g)}ve(r,"onClosed",r),v(r,"--"),Ne(o)}function xe(o){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},v(o,"Get page position: "+z.x+","+z.y))}function ye(o){z!==null&&(window.scrollTo(z.x,z.y),v(o,"Set page position: "+z.x+","+z.y),_e())}function _e(){z=null}function me(o){function r(){ge(o),I("reset","reset",o.iframe,o.id)}v(o.id,"Size reset requested by "+(o.type==="init"?"host page":"iFrame")),xe(o.id),He(r,o,"reset")}function ge(o){function r(y){if(!o.id){v("undefined","messageData id not set");return}o.iframe.style[y]=o[y]+"px",v(o.id,"IFrame ("+k+") "+y+" set to "+o[y]+"px")}function g(y){!w&&o[y]==="0"&&(w=!0,v(k,"Hidden iFrame detected, creating visibility listener"),$e())}function d(y){r(y),g(y)}var k=o.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function He(o,r,g){g!==r.type&&J&&!window.jasmine?(v(r.id,"Requesting animation frame"),J(o)):o()}function I(o,r,g,d,k){function y(){var oe=i[d]&&i[d].targetOrigin;v(d,"["+o+"] Sending msg to iframe["+d+"] ("+r+") targetOrigin: "+oe),g.contentWindow.postMessage(Z+r,oe)}function G(){D(d,"["+o+"] IFrame("+d+") not found")}function ce(){g&&"contentWindow"in g&&g.contentWindow!==null?y():G()}function Y(){function oe(){i[d]&&!i[d].loaded&&!$&&($=!0,D(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}!!k&&i[d]&&!!i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(oe,i[d].warningTimeout))}var $=!1;d=d||g.id,i[d]&&(ce(),Y())}function Ze(o){return o+":"+i[o].bodyMarginV1+":"+i[o].sizeWidth+":"+i[o].log+":"+i[o].interval+":"+i[o].enablePublicMethods+":"+i[o].autoResize+":"+i[o].bodyMargin+":"+i[o].heightCalculationMethod+":"+i[o].bodyBackground+":"+i[o].bodyPadding+":"+i[o].tolerance+":"+i[o].inPageLinks+":"+i[o].resizeFrom+":"+i[o].widthCalculationMethod+":"+i[o].mouseEvents}function Be(o){return typeof o=="number"}function je(o,r){function g(){function h(_){var X=i[f][_];X!==1/0&&X!==0&&(o.style[_]=Be(X)?X+"px":X,v(f,"Set "+_+" = "+o.style[_]))}function P(_){if(i[f]["min"+_]>i[f]["max"+_])throw new Error("Value for min"+_+" can not be greater than max"+_)}P("Height"),P("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=r&&r.id||fe.id+a++;return document.getElementById(h)!==null&&(h+=a++),h}function k(h){return h===""&&(o.id=h=d(),l=(r||{}).log,v(h,"Added missing iframe ID: "+h+" ("+o.src+")")),h}function y(){switch(v(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),o.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:o.scrolling="yes";break;case!1:o.scrolling="no";break;default:o.scrolling=i[f]?i[f].scrolling:"no"}}function G(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function ce(){var h=i[f]&&i[f].firstRun,P=i[f]&&i[f].heightCalculationMethod in Le;!h&&P&&me({iframe:o,height:0,width:0,type:"init"})}function Y(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:Ne.bind(null,i[f].iframe),resize:I.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(h){I("Move to anchor","moveToAnchor:"+h,i[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),I("Send Message","message:"+h,i[f].iframe,f)}})}function $(h){function P(){I("iFrame.onload",h,o,e,!0),ce()}function _(le){if(!!o.parentNode){var qe=new le(function(ze){ze.forEach(function(De){var Ue=Array.prototype.slice.call(De.removedNodes);Ue.forEach(function(q){q===o&&se(o)})})});qe.observe(o.parentNode,{childList:!0})}}var X=N();X&&_(X),re(o,"load",P),I("init",h,o,e,!0)}function oe(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function A(h){for(var P in fe)Object.prototype.hasOwnProperty.call(fe,P)&&(i[f][P]=Object.prototype.hasOwnProperty.call(h,P)?h[P]:fe[P])}function Te(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Fe(h){var P=h.split("Callback");if(P.length===2){var _="on"+P[0].charAt(0).toUpperCase()+P[0].slice(1);this[_]=this[h],delete this[h],D(f,"Deprecated: '"+h+"' has been renamed '"+_+"'. The old method will be removed in the next major version.")}}function Oe(h){h=h||{},i[f]={firstRun:!0,iframe:o,remoteHost:o.src&&o.src.split("/").slice(0,3).join("/")},oe(h),Object.keys(h).forEach(Fe,h),A(h),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?Te(i[f].remoteHost):"*")}function Re(){return f in i&&"iFrameResizer"in o}var f=k(o.id);Re()?D(f,"Ignored iFrame, already setup."):(Oe(r),y(),g(),G(),$(Ze(f)),Y())}function we(o,r){ie===null&&(ie=setTimeout(function(){ie=null,o()},r))}var ke={};function We(o,r,g){ke[g]||(ke[g]=setTimeout(function(){ke[g]=null,o()},r))}function $e(){function o(){function k(y){function G(Y){return(i[y]&&i[y].iframe.style[Y])==="0px"}function ce(Y){return Y.offsetParent!==null}i[y]&&ce(i[y].iframe)&&(G("height")||G("width"))&&I("Visibility change","resize",i[y].iframe,y)}Object.keys(i).forEach(function(y){k(y)})}function r(k){v("window","Mutation observed: "+k[0].target+" "+k[0].type),we(o,16)}function g(){var k=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},G=new d(r);G.observe(k,y)}var d=N();d&&g()}function et(o){function r(){ue("Window "+o,"resize")}v("window","Trigger event: "+o),we(r,16)}function Ve(){function o(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(v("document","Trigger event: Visiblity change"),we(o,16))}function ue(o,r){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&I(o,r,i[d].iframe,d)})}function it(){re(window,"message",Qe),re(window,"resize",function(){et("resize")}),re(document,"visibilitychange",Ve),re(document,"-webkit-visibilitychange",Ve)}function Ee(){function o(d,k){function y(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(y(),je(k,d),g.push(k))}function r(d){d&&d.enablePublicMethods&&D("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return pe(),it(),function(k,y){switch(g=[],r(k),typeof y){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(y||"iframe"),o.bind(e,k));break;case"object":o(k,y);break;default:throw new TypeError("Unexpected data type ("+typeof y+")")}return g}}function rt(o){o.fn?o.fn.iFrameResize||(o.fn.iFrameResize=function(g){function d(k,y){je(y,g)}return this.filter("iframe").each(d).end()}):be("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&rt(window.jQuery),typeof e=="function"&&e.amd?e([],Ee):c.exports=Ee(),window.iFrameResize=window.iFrameResize||Ee()})()})(kt);var Tt={exports:{}};(function(c){(function(e){if(typeof window>"u")return;var a=!0,l=10,w="",E=0,U="",Z=null,V="",z=!1,J={resize:1,click:1},Le=128,i=!0,ie=1,fe="bodyOffset",N=fe,re=!0,Ge="",pe={},ae=32,Ke=null,Se=!1,v=!1,be="[iFrameSizer]",D=be.length,he="",Qe={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",Ne=window.parent,se="*",xe=0,ye=!1,_e=null,me=16,ge=1,He="scroll",I=He,Ze=window,Be=function(){g("onMessage function not defined")},je=function(){},we=function(){},ke={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},We={},$e=!1;function et(){}try{var Ve=Object.create({},{passive:{get:function(){$e=!0}}});window.addEventListener("test",et,Ve),window.removeEventListener("test",et,Ve)}catch{}function ue(t,n,s,b){t.addEventListener(n,s,$e?b||{}:!1)}function it(t,n,s){t.removeEventListener(n,s,!1)}function Ee(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rt(t){var n,s,b,j=null,L=0,W=function(){L=Date.now(),j=null,b=t.apply(n,s),j||(n=s=null)};return function(){var B=Date.now();L||(L=B);var O=me-(B-L);return n=this,s=arguments,O<=0||O>me?(j&&(clearTimeout(j),j=null),L=B,b=t.apply(n,s),j||(n=s=null)):j||(j=setTimeout(W,O)),b}}function o(t){return be+"["+he+"] "+t}function r(t){Se&&typeof window.console=="object"&&console.log(o(t))}function g(t){typeof window.console=="object"&&console.warn(o(t))}function d(){k(),r("Initialising iFrame ("+window.location.href+")"),G(),$(),Y("background",w),Y("padding",V),_(),Oe(),Re(),oe(),qe(),le(),f(),pe=X(),ne("init","Init message from host page"),je()}function k(){function t(s){return s==="true"}var n=Ge.substr(D).split(":");he=n[0],E=e!==n[1]?Number(n[1]):E,z=e!==n[2]?t(n[2]):z,Se=e!==n[3]?t(n[3]):Se,ae=e!==n[4]?Number(n[4]):ae,a=e!==n[6]?t(n[6]):a,U=n[7],N=e!==n[8]?n[8]:N,w=n[9],V=n[10],xe=e!==n[11]?Number(n[11]):xe,pe.enable=e!==n[12]?t(n[12]):!1,ve=e!==n[13]?n[13]:ve,I=e!==n[14]?n[14]:I,v=e!==n[15]?Boolean(n[15]):v}function y(t){var n=t.split("Callback");if(n.length===2){var s="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[s]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+s+"'. The old method will be removed in the next major version.")}}function G(){function t(){var s=window.iFrameResizer;r("Reading data from page: "+JSON.stringify(s)),Object.keys(s).forEach(y,s),Be="onMessage"in s?s.onMessage:Be,je="onReady"in s?s.onReady:je,se="targetOrigin"in s?s.targetOrigin:se,N="heightCalculationMethod"in s?s.heightCalculationMethod:N,I="widthCalculationMethod"in s?s.widthCalculationMethod:I}function n(s,b){return typeof s=="function"&&(r("Setup custom "+b+"CalcMethod"),ke[b]=s,s="custom"),s}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),N=n(N,"height"),I=n(I,"width")),r("TargetOrigin for parent set to: "+se)}function ce(t,n){return n.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),n=""),n}function Y(t,n){e!==n&&n!==""&&n!=="null"&&(document.body.style[t]=n,r("Body "+t+' set to "'+n+'"'))}function $(){e===U&&(U=E+"px"),Y("margin",ce("margin",U))}function oe(){document.documentElement.style.height="",document.body.style.height="",r('HTML & body height set to "auto"')}function A(t){var n={add:function(s){function b(){ne(t.eventName,t.eventType)}We[s]=b,ue(window,s,b,{passive:!0})},remove:function(s){var b=We[s];delete We[s],it(window,s,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(n[t.method])):n[t.method](t.eventName),r(Ee(t.method)+" event listener: "+t.eventType)}function Te(t){A({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),A({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),A({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),A({method:t,eventType:"Input",eventName:"input"}),A({method:t,eventType:"Mouse Up",eventName:"mouseup"}),A({method:t,eventType:"Mouse Down",eventName:"mousedown"}),A({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),A({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),A({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),A({method:t,eventType:"Touch Start",eventName:"touchstart"}),A({method:t,eventType:"Touch End",eventName:"touchend"}),A({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),A({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),A({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),A({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ve==="child"&&A({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Fe(t,n,s,b){return n!==t&&(t in s||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=n),r(b+' calculation method set to "'+t+'"')),t}function Oe(){N=Fe(N,fe,T,"height")}function Re(){I=Fe(I,He,F,"width")}function f(){a===!0?(Te("add"),Ue()):r("Auto Resize disabled")}function h(){Z!==null&&Z.disconnect()}function P(){Te("remove"),h(),clearInterval(Ke)}function _(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function X(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function n(O){var C=O.getBoundingClientRect(),R=t();return{x:parseInt(C.left,10)+parseInt(R.x,10),y:parseInt(C.top,10)+parseInt(R.y,10)}}function s(O){function C(te){var Ie=n(te);r("Moving to in page link (#"+R+") at x: "+Ie.x+" y: "+Ie.y),K(Ie.y,Ie.x,"scrollToOffset")}var R=O.split("#")[1]||O,M=decodeURIComponent(R),Q=document.getElementById(M)||document.getElementsByName(M)[0];e!==Q?C(Q):(r("In page link (#"+R+") not found in iFrame, so sending to parent"),K(0,0,"inPageLink","#"+R))}function b(){var O=window.location.hash,C=window.location.href;O!==""&&O!=="#"&&s(C)}function j(){function O(C){function R(M){M.preventDefault(),s(this.getAttribute("href"))}C.getAttribute("href")!=="#"&&ue(C,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),O)}function L(){ue(window,"hashchange",b)}function W(){setTimeout(b,Le)}function B(){Array.prototype.forEach&&document.querySelectorAll?(r("Setting up location.hash handlers"),j(),L(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return pe.enable?B():r("In page linking not enabled"),{findTarget:s}}function le(){if(v!==!0)return;function t(s){K(0,0,s.type,s.screenY+":"+s.screenX)}function n(s,b){r("Add event listener: "+b),ue(window.document,s,t)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}function qe(){r("Enable public methods"),Ze.parentIFrame={autoResize:function(n){return n===!0&&a===!1?(a=!0,f()):n===!1&&a===!0&&(a=!1,P()),K(0,0,"autoResize",JSON.stringify(a)),a},close:function(){K(0,0,"close")},getId:function(){return he},getPageInfo:function(n){typeof n=="function"?(we=n,K(0,0,"pageInfo")):(we=function(){},K(0,0,"pageInfoStop"))},moveToAnchor:function(n){pe.findTarget(n)},reset:function(){ft("parentIFrame.reset")},scrollTo:function(n,s){K(s,n,"scrollTo")},scrollToOffset:function(n,s){K(s,n,"scrollToOffset")},sendMessage:function(n,s){K(0,0,"message",JSON.stringify(n),s)},setHeightCalculationMethod:function(n){N=n,Oe()},setWidthCalculationMethod:function(n){I=n,Re()},setTargetOrigin:function(n){r("Set targetOrigin: "+n),se=n},size:function(n,s){var b=""+(n||"")+(s?","+s:"");ne("size","parentIFrame.size("+b+")",n,s)}}}function ze(){ae!==0&&(r("setInterval: "+ae+"ms"),Ke=setInterval(function(){ne("interval","setInterval: "+ae)},Math.abs(ae)))}function De(){function t(M){function Q(te){te.complete===!1&&(r("Attach listeners to "+te.src),te.addEventListener("load",j,!1),te.addEventListener("error",L,!1),O.push(te))}M.type==="attributes"&&M.attributeName==="src"?Q(M.target):M.type==="childList"&&Array.prototype.forEach.call(M.target.querySelectorAll("img"),Q)}function n(M){O.splice(O.indexOf(M),1)}function s(M){r("Remove listeners from "+M.src),M.removeEventListener("load",j,!1),M.removeEventListener("error",L,!1),n(M)}function b(M,Q,te){s(M.target),ne(Q,te+": "+M.target.src)}function j(M){b(M,"imageLoad","Image loaded")}function L(M){b(M,"imageLoadFailed","Image load failed")}function W(M){ne("mutationObserver","mutationObserver: "+M[0].target+" "+M[0].type),M.forEach(t)}function B(){var M=document.querySelector("body"),Q={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new C(W),r("Create body MutationObserver"),R.observe(M,Q),R}var O=[],C=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(r("Disconnect body MutationObserver"),R.disconnect(),O.forEach(s))}}}function Ue(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?ze():Z=De():(r("MutationObserver not supported in this browser!"),ze())}function q(t,n){var s=0;return n=n||document.body,s=document.defaultView.getComputedStyle(n,null),s=s!==null?s[t]:0,parseInt(s,l)}function S(t){t>me/2&&(me=2*t,r("Event throttle increased to "+me+"ms"))}function m(t,n){for(var s=n.length,b=0,j=0,L=Ee(t),W=Date.now(),B=0;B<s;B++)b=n[B].getBoundingClientRect()[t]+q("margin"+L,n[B]),b>j&&(j=b);return W=Date.now()-W,r("Parsed "+s+" HTML elements"),r("Element position calculated in "+W+"ms"),S(W),j}function u(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,n){function s(){return g("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+n+"]");return b.length===0&&s(),m(t,b)}function x(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+q("marginTop")+q("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return ke.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,u(T))},min:function(){return Math.min.apply(null,u(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),m("bottom",x()))},taggedElement:function(){return p("bottom","data-iframe-height")}},F={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return ke.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(F.bodyScroll(),F.documentElementScroll())},max:function(){return Math.max.apply(null,u(F))},min:function(){return Math.min.apply(null,u(F))},rightMostElement:function(){return m("right",x())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,n,s,b){function j(){ie=R,ge=M,K(ie,ge,t)}function L(){function Q(te,Ie){var jt=Math.abs(te-Ie)<=xe;return!jt}return R=e!==s?s:T[N](),M=e!==b?b:F[I](),Q(ie,R)||z&&Q(ge,M)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return N in Qe||z&&I in Qe}function O(){r("No change in size detected")}function C(){W()&&B()?ft(n):t in{interval:1}||O()}var R,M;L()||t==="init"?(lt(),j()):C()}var ee=rt(H);function ne(t,n,s,b){function j(){t in{reset:1,resetPage:1,init:1}||r("Trigger event: "+n)}function L(){return ye&&t in J}L()?r("Trigger event cancelled: "+t):(j(),t==="init"?H(t,n,s,b):ee(t,n,s,b))}function lt(){ye||(ye=!0,r("Trigger event lock on")),clearTimeout(_e),_e=setTimeout(function(){ye=!1,r("Trigger event lock off"),r("--")},Le)}function dt(t){ie=T[N](),ge=F[I](),K(ie,ge,t)}function ft(t){var n=N;N=fe,r("Reset trigger event: "+t),lt(),dt("reset"),N=n}function K(t,n,s,b,j){function L(){e===j?j=se:r("Message targetOrigin: "+j)}function W(){var B=t+":"+n,O=he+":"+B+":"+s+(e!==b?":"+b:"");r("Sending message to host page ("+O+")"),Ne.postMessage(be+O,j)}L(),W()}function xt(t){var n={init:function(){Ge=t.data,Ne=t.source,d(),i=!1,setTimeout(function(){re=!1},Le)},reset:function(){re?r("Page reset ignored by init"):(r("Page size reset by host page"),dt("resetPage"))},resize:function(){ne("resizeParent","Parent window requested size check")},moveToAnchor:function(){pe.findTarget(j())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=j();r("PageInfoFromParent called from parent: "+R),we(JSON.parse(R)),r(" --")},message:function(){var R=j();r("onMessage called from parent: "+R),Be(JSON.parse(R)),r(" --")}};function s(){return be===(""+t.data).substr(0,D)}function b(){return t.data.split("]")[1].split(":")[0]}function j(){return t.data.substr(t.data.indexOf(":")+1)}function L(){return!c.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var C=b();C in n?n[C]():!L()&&!W()&&g("Unexpected message ("+t.data+")")}function O(){i===!1?B():W()?n.init():r('Ignored message of type "'+b()+'". Received before initialization.')}s()&&O()}function ht(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",xt),ue(window,"readystatechange",ht),ht()})()})(Tt);var Mt=kt.exports;nt.iframeResize=Mt;nt.iframeResizer=Mt;nt.iframeResizerContentWindow=Tt.exports;(function(c){c.exports=nt})(wt);function Nt(c){const e=document.createElement("a");return e.href=c,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function _t(c){const e=Nt(c),a=e.href.substr(0,e.href.length-e.hash.length),l=window.location.href.replace(/#.*$/,"");return e.hash&&a===l}function St(c,e){const a=JSON.stringify(e);let l=0;if(a.length===0)return l;for(let w=0;w<a.length;w++){const E=a.charCodeAt(w);l=(l<<5)-l+E,l&=l}return`${c}-${l}`}function Ht(c,e,a){const l=document.createElement("form"),w=document.createElement("input");return l.action=c,l.method="POST",l.target=a,e.forEach(([E,U])=>{w.name=E,w.value=U.toString(),l.appendChild(w.cloneNode())}),l.style.visibility="hidden",l}function Bt(c){const e=c.composedPath();for(let a=0;a<e.indexOf(document.body);a++){const l=e[a];if(l.hasAttribute&&l.hasAttribute("target")&&l!==document.body)return l}}function Wt(c,e){if(c.hasAttribute("data-modal-post")){const a=c.getAttribute("data-modal-post");e.method="POST",e.body=a;const l=[];return new URL(`http://localhost/?${a}`).searchParams.forEach((w,E)=>{l.push([E,w])}),[l,e]}return[null,e]}function Vt(c,e,a,l,w){const E=document.createElement("toujou-modal"),U=document.createElement("iframe"),Z=St("iframe",e);if(E.id=c,U.name=Z,document.body.appendChild(E),_t(a)){const V=document.querySelector(a),z=V instanceof HTMLTemplateElement?document.importNode(V.content,!0).children:V.childNodes;V.title&&(E.title=V.title);for(let J=0;J<z.length;J++)E.appendChild(z[J])}else if(w&&l==="POST"){const V=Ht(a,w,Z);E.appendChild(V),E.appendChild(U),V.submit(),V.remove()}else l==="GET"&&(U.src=a,E.appendChild(U));return E}function qt(c,e,a,l){const w=St("toujou-modal",c),E=document.getElementById(w)||Vt(w,c,e,a,l);setTimeout(()=>{E.open()})}const Dt=c=>{if(c.metaKey||c.ctrlKey)return;const e=Bt(c);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const a=e.getAttribute("href"),l=a.indexOf("?")!==-1?a.split("?")[0]+"?toujou-ajax-modal=1&"+a.split("?")[1]:a.indexOf("#")!==-1?a.split("#")[0]+"?toujou-ajax-modal=1#"+a.split("#")[1]:a+"?toujou-ajax-modal=1",[w,E]=Wt(e,{src:l});qt(E,l,w?"POST":"GET",w),c.preventDefault(),c.stopPropagation()}},Ut=gt`
  * {
    box-sizing: border-box;
  }

  :host {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 15;
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

`,Jt={reserveScrollBarGap:!0},Ce=[];function Yt(c){Ce.forEach(e=>e.close()),Ce.push(c)}function Xt(c){if(c===Ce[Ce.length-1]){Ce.pop();const e=Ce.pop();e&&e.open()}}class st extends pt{static get is(){return"toujou-modal"}render(){return tt`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?tt`
                    <button id="dog-ear-close" dialog-dismiss></button>`:tt`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(a=>{a[0]&&this.onPosition(a[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){At()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Pt(this.$.scroller,Jt),Yt(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Xt(this),this.allowOutsideScroll?document.body.style.position="":Lt(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const a=e.composedPath();(!a.includes(this.$.modalContent)||a.some(l=>l instanceof HTMLElement&&l.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const a=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=a?`${a}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(a=>a instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((a,l)=>{e.includes(l)||this.iframeResizerMap.delete(l)}),e.forEach(a=>{this.loading=!0,a.addEventListener("load",()=>{this.iframeResizerMap.has(a)||this.listenToIframeReadyState(a)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let a={};try{a=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(l){(console.error||console.log).call(console,l.stack||l)}return a.initCallback=()=>{this.loading=!1},a.closedCallback=()=>{this.close()},wt.exports.iframeResizer(a,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}at(st,"styles",[Ut]);customElements.define(st.is,st);document.addEventListener("click",Dt);const Gt=gt`
  :host {
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
    transform: var(--toujou-snackbar-transform, translateY(calc(100% + 1rem)));
    opacity: var(--toujou-snackbar-opacity, 0);
    transition: var(--toujou-snackbar-transition, all .25s ease-out);
  }

  :host([visible]) {
    transform: var(--toujou-snackbar-visible-transform, translateY(0));
    opacity: var(--toujou-snackbar-visible-opacity, 1);
  }

  .snackbar__message {
    flex-grow: var(--toujou-snackbar-message-grow, 1);
    color: var(--toujou-snackbar-message-color, white);
    margin: var(--toujou-snackbar-message-margin, 0);
    padding: var(--toujou-snackbar-message-padding, 0 1rem 0 0);
  }

  .snackbar__button {
    border: var(--toujou-snackbar-button-border, none);
    background: var(--toujou-snackbar-button-bg, none);
    font-size: var(--toujou-snackbar-button-font-size, .875rem);
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

`;class ut extends pt{static get is(){return"toujou-snackbar"}render(){return tt`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return styles}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?this.setAttribute("visible",""):this.removeAttribute("visible")}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(e){super(e),this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",a=>{this._handleAddSnackbar(a)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this)}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar(this.cue[0]):e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer(this._animationStart,this._duration)),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced){this._removeSnackbarFromCue(),this._wasReplaced=!1,cancelAnimationFrame(this._timer);return}e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}}at(ut,"styles",[Gt]);customElements.define(ut.is,ut);
//# sourceMappingURL=base.js.map
