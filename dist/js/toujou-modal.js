var kt=Object.defineProperty;var xt=(u,t,a)=>t in u?kt(u,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[t]=a;var ft=(u,t,a)=>(xt(u,typeof t!="symbol"?t+"":t,a),a);import{r as Ot,s as Ft,$ as rt}from"./lit-element-a6bf029f.js";function St(u){if(Array.isArray(u)){for(var t=0,a=Array(u.length);t<u.length;t++)a[t]=u[t];return a}else return Array.from(u)}var tt=!1;if(typeof window<"u"){var mt={get passive(){tt=!0}};window.addEventListener("testPassive",null,mt),window.removeEventListener("testPassive",null,mt)}var Ce=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Le=!1,st=-1,Ye=void 0,Ee=void 0,Xe=void 0,ht=function(t){return de.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(t))})},Qe=function(t){var a=t||window.event;return ht(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},zt=function(t){if(Xe===void 0){var a=!!t&&t.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(a&&c>0){var w=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Xe=document.body.style.paddingRight,document.body.style.paddingRight=w+c+"px"}}Ye===void 0&&(Ye=document.body.style.overflow,document.body.style.overflow="hidden")},gt=function(){Xe!==void 0&&(document.body.style.paddingRight=Xe,Xe=void 0),Ye!==void 0&&(document.body.style.overflow=Ye,Ye=void 0)},It=function(){return window.requestAnimationFrame(function(){if(Ee===void 0){Ee={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,a=t.scrollY,c=t.scrollX,w=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-a,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var F=w-window.innerHeight;F&&a>=w&&(document.body.style.top=-(a+F))})},300)}})},pt=function(){if(Ee!==void 0){var t=-parseInt(document.body.style.top,10),a=-parseInt(document.body.style.left,10);document.body.style.position=Ee.position,document.body.style.top=Ee.top,document.body.style.left=Ee.left,window.scrollTo(a,t),Ee=void 0}},jt=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},Rt=function(t,a){var c=t.targetTouches[0].clientY-st;return ht(t.target)?!1:a&&a.scrollTop===0&&c>0||jt(a)&&c<0?Qe(t):(t.stopPropagation(),!0)},Pt=function(t,a){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(w){return w.targetElement===t})){var c={targetElement:t,options:a||{}};de=[].concat(St(de),[c]),Ce?It():zt(a),Ce&&(t.ontouchstart=function(w){w.targetTouches.length===1&&(st=w.targetTouches[0].clientY)},t.ontouchmove=function(w){w.targetTouches.length===1&&Rt(w,t)},Le||(document.addEventListener("touchmove",Qe,tt?{passive:!1}:void 0),Le=!0))}},Ct=function(){Ce&&(de.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),Le&&(document.removeEventListener("touchmove",Qe,tt?{passive:!1}:void 0),Le=!1),st=-1),Ce?pt():gt(),de=[]},Lt=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(a){return a.targetElement!==t}),Ce&&(t.ontouchstart=null,t.ontouchmove=null,Le&&de.length===0&&(document.removeEventListener("touchmove",Qe,tt?{passive:!1}:void 0),Le=!1)),Ce?pt():gt()},vt={exports:{}},ot={},bt={exports:{}};(function(u){(function(t){if(typeof window>"u")return;var a=0,c=!1,w=!1,F="message",J=F.length,Z="[iFrameSizer]",D=Z.length,j=null,Y=window.requestAnimationFrame,Ne={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){U("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function A(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(o,r,g){o.addEventListener(r,g,!1)}function Ge(o,r,g){o.removeEventListener(r,g,!1)}function pe(){var o=["moz","webkit","o","ms"],r;for(r=0;r<o.length&&!Y;r+=1)Y=window[o[r]+"RequestAnimationFrame"];Y?Y=Y.bind(window):b("setup","RequestAnimationFrame not supported")}function ae(o){var r="Host page: "+o;return window.top!==window.self&&(r=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+o:"Nested host page: "+o),r}function Ke(o){return Z+"["+ae(o)+"]"}function ke(o){return i[o]?i[o].log:c}function b(o,r){me("log",o,r,ke(o))}function ve(o,r){me("info",o,r,ke(o))}function U(o,r){me("warn",o,r,!0)}function me(o,r,g,d){d===!0&&typeof window.console=="object"&&console[o](Ke(r),g)}function _e(o){function r(){function l(){ge(k),ye(h),ce("onResized",k)}y("Height"),y("Width"),He(l,k,"init")}function g(){var l=V.substr(D).split(":"),p=l[1]?parseInt(l[1],10):0,x=i[l[0]]&&i[l[0]].iframe,T=getComputedStyle(x);return{iframe:x,id:l[0],height:p+d(T)+M(T),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,x=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+x}function M(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,x=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+x}function y(l){var p=Number(i[h]["max"+l]),x=Number(i[h]["min"+l]),T=l.toLowerCase(),S=Number(k[T]);b(h,"Checking "+T+" is in range "+x+"-"+p),S<x&&(S=x,b(h,"Set "+T+" to min value")),S>p&&(S=p,b(h,"Set "+T+" to max value")),k[T]=""+S}function G(){function l(){function T(){var H=0,ee=!1;for(b(h,"Checking connection is from allowed list of origins: "+x);H<x.length;H++)if(x[H]===p){ee=!0;break}return ee}function S(){var H=i[h]&&i[h].remoteHost;return b(h,"Checking connection is from: "+H),p===H}return x.constructor===Array?T():S()}var p=o.origin,x=i[h]&&i[h].checkOrigin;if(x&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+k.iframe.id+". Message was: "+o.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function ue(){return Z===(""+V).substr(0,D)&&V.substr(D).split(":")[0]in i}function X(){var l=k.type in{true:1,false:1,undefined:1};return l&&b(h,"Ignoring init message from meta parent page"),l}function $(l){return V.substr(V.indexOf(":")+J+l)}function oe(l){b(h,"onMessage passed: {iframe: "+k.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:k.iframe,message:JSON.parse(l)}),b(h,"--")}function L(){var l=document.body.getBoundingClientRect(),p=k.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Te(l,p){function x(){R("Send Page Info","pageInfo:"+L(),l,p)}qe(x,32,p)}function Se(){function l(S,H){function ee(){i[T]?Te(i[T].iframe,T):p()}["scroll","resize"].forEach(function(ne){b(T,S+ne+" listener for sendPageInfo"),H(window,ne,ee)})}function p(){l("Remove ",Ge)}function x(){l("Add ",re)}var T=h;x(),i[T]&&(i[T].stopPageInfo=p)}function ze(){i[h]&&i[h].stopPageInfo&&(i[h].stopPageInfo(),delete i[h].stopPageInfo)}function Ie(){var l=!0;return k.iframe===null&&(U(h,"IFrame ("+k.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return xe(h),{x:Math.floor(Number(p.left)+Number(j.x)),y:Math.floor(Number(p.top)+Number(j.y))}}function m(l){function p(){j=H,C(),b(h,"--")}function x(){return{x:Number(k.width)+S.x,y:Number(k.height)+S.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):U(h,"Unable to scroll to requested position, window.parentIFrame not found")}var S=l?f(k.iframe):{x:0,y:0},H=x();b(h,"Reposition requested from iFrame (offset x:"+S.x+" y:"+S.y+")"),window.top!==window.self?T():p()}function C(){ce("onScroll",j)!==!1?ye(h):Be()}function B(l){function p(){var ee=f(H);b(h,"Moving to in page link (#"+T+") at x: "+ee.x+" y: "+ee.y),j={x:ee.x,y:ee.y},C(),b(h,"--")}function x(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):b(h,"In page link #"+T+" not found and window.parentIFrame not found")}var T=l.split("#")[1]||"",S=decodeURIComponent(T),H=document.getElementById(S)||document.getElementsByName(S)[0];H?p():window.top!==window.self?x():b(h,"In page link #"+T+" not found")}function Q(l){var p={};if(Number(k.width)===0&&Number(k.height)===0){var x=$(9).split(":");p={x:x[1],y:x[0]}}else p={x:k.width,y:k.height};ce(l,{iframe:k.iframe,screenX:Number(p.x),screenY:Number(p.y),type:k.type})}function ce(l,p){return be(h,l,p)}function Ve(){switch(i[h]&&i[h].firstRun&&Je(),k.type){case"close":se(k.iframe);break;case"message":oe($(6));break;case"mouseenter":Q("onMouseEnter");break;case"mouseleave":Q("onMouseLeave");break;case"autoResize":i[h].autoResize=JSON.parse($(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":Te(i[h]&&i[h].iframe,h),Se();break;case"pageInfoStop":ze();break;case"inPageLink":B($(9));break;case"reset":he(k);break;case"init":r(),ce("onInit",k.iframe);break;default:Number(k.width)===0&&Number(k.height)===0?U("Unsupported message received ("+k.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):r()}}function je(l){var p=!0;return i[l]||(p=!1,U(k.type+" No settings for "+l+". Message was: "+V)),p}function Ue(){for(var l in i)R("iFrame requested init",Ze(l),i[l].iframe,l)}function Je(){i[h]&&(i[h].firstRun=!1)}var V=o.data,k={},h=null;V==="[iFrameResizerChild]Ready"?Ue():ue()?(k=g(),h=k.id,i[h]&&(i[h].loaded=!0),!X()&&je(h)&&(b(h,"Received: "+V),Ie()&&G()&&Ve())):ve(h,"Ignored: "+V)}function be(o,r,g){var d=null,M=null;if(i[o])if(d=i[o][r],typeof d=="function")M=d(g);else throw new TypeError(r+" on iFrame["+o+"] is not a function");return M}function Ae(o){var r=o.id;delete i[r]}function se(o){var r=o.id;if(be(r,"onClose",r)===!1){b(r,"Close iframe cancelled by onClose event");return}b(r,"Removing iFrame: "+r);try{o.parentNode&&o.parentNode.removeChild(o)}catch(g){U(g)}be(r,"onClosed",r),b(r,"--"),Ae(o)}function xe(o){j===null&&(j={x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop},b(o,"Get page position: "+j.x+","+j.y))}function ye(o){j!==null&&(window.scrollTo(j.x,j.y),b(o,"Set page position: "+j.x+","+j.y),Be())}function Be(){j=null}function he(o){function r(){ge(o),R("reset","reset",o.iframe,o.id)}b(o.id,"Size reset requested by "+(o.type==="init"?"host page":"iFrame")),xe(o.id),He(r,o,"reset")}function ge(o){function r(y){if(!o.id){b("undefined","messageData id not set");return}o.iframe.style[y]=o[y]+"px",b(o.id,"IFrame ("+M+") "+y+" set to "+o[y]+"px")}function g(y){!w&&o[y]==="0"&&(w=!0,b(M,"Hidden iFrame detected, creating visibility listener"),$e())}function d(y){r(y),g(y)}var M=o.iframe.id;i[M]&&(i[M].sizeHeight&&d("height"),i[M].sizeWidth&&d("width"))}function He(o,r,g){g!==r.type&&Y&&!window.jasmine?(b(r.id,"Requesting animation frame"),Y(o)):o()}function R(o,r,g,d,M){function y(){var oe=i[d]&&i[d].targetOrigin;b(d,"["+o+"] Sending msg to iframe["+d+"] ("+r+") targetOrigin: "+oe),g.contentWindow.postMessage(Z+r,oe)}function G(){U(d,"["+o+"] IFrame("+d+") not found")}function ue(){g&&"contentWindow"in g&&g.contentWindow!==null?y():G()}function X(){function oe(){i[d]&&!i[d].loaded&&!$&&($=!0,U(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}!!M&&i[d]&&!!i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(oe,i[d].warningTimeout))}var $=!1;d=d||g.id,i[d]&&(ue(),X())}function Ze(o){return o+":"+i[o].bodyMarginV1+":"+i[o].sizeWidth+":"+i[o].log+":"+i[o].interval+":"+i[o].enablePublicMethods+":"+i[o].autoResize+":"+i[o].bodyMargin+":"+i[o].heightCalculationMethod+":"+i[o].bodyBackground+":"+i[o].bodyPadding+":"+i[o].tolerance+":"+i[o].inPageLinks+":"+i[o].resizeFrom+":"+i[o].widthCalculationMethod+":"+i[o].mouseEvents}function We(o){return typeof o=="number"}function Oe(o,r){function g(){function m(B){var Q=i[f][B];Q!==1/0&&Q!==0&&(o.style[B]=We(Q)?Q+"px":Q,b(f,"Set "+B+" = "+o.style[B]))}function C(B){if(i[f]["min"+B]>i[f]["max"+B])throw new Error("Value for min"+B+" can not be greater than max"+B)}C("Height"),C("Width"),m("maxHeight"),m("minHeight"),m("maxWidth"),m("minWidth")}function d(){var m=r&&r.id||fe.id+a++;return document.getElementById(m)!==null&&(m+=a++),m}function M(m){return m===""&&(o.id=m=d(),c=(r||{}).log,b(m,"Added missing iframe ID: "+m+" ("+o.src+")")),m}function y(){switch(b(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),o.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:o.scrolling="yes";break;case!1:o.scrolling="no";break;default:o.scrolling=i[f]?i[f].scrolling:"no"}}function G(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function ue(){var m=i[f]&&i[f].firstRun,C=i[f]&&i[f].heightCalculationMethod in Ne;!m&&C&&he({iframe:o,height:0,width:0,type:"init"})}function X(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:Ae.bind(null,i[f].iframe),resize:R.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(m){R("Move to anchor","moveToAnchor:"+m,i[f].iframe,f)},sendMessage:function(m){m=JSON.stringify(m),R("Send Message","message:"+m,i[f].iframe,f)}})}function $(m){function C(){R("iFrame.onload",m,o,t,!0),ue()}function B(ce){if(!!o.parentNode){var Ve=new ce(function(je){je.forEach(function(Ue){var Je=Array.prototype.slice.call(Ue.removedNodes);Je.forEach(function(V){V===o&&se(o)})})});Ve.observe(o.parentNode,{childList:!0})}}var Q=A();Q&&B(Q),re(o,"load",C),R("init",m,o,t,!0)}function oe(m){if(typeof m!="object")throw new TypeError("Options is not an object")}function L(m){for(var C in fe)Object.prototype.hasOwnProperty.call(fe,C)&&(i[f][C]=Object.prototype.hasOwnProperty.call(m,C)?m[C]:fe[C])}function Te(m){return m===""||m.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":m}function Se(m){var C=m.split("Callback");if(C.length===2){var B="on"+C[0].charAt(0).toUpperCase()+C[0].slice(1);this[B]=this[m],delete this[m],U(f,"Deprecated: '"+m+"' has been renamed '"+B+"'. The old method will be removed in the next major version.")}}function ze(m){m=m||{},i[f]={firstRun:!0,iframe:o,remoteHost:o.src&&o.src.split("/").slice(0,3).join("/")},oe(m),Object.keys(m).forEach(Se,m),L(m),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?Te(i[f].remoteHost):"*")}function Ie(){return f in i&&"iFrameResizer"in o}var f=M(o.id);Ie()?U(f,"Ignored iFrame, already setup."):(ze(r),y(),g(),G(),$(Ze(f)),X())}function we(o,r){ie===null&&(ie=setTimeout(function(){ie=null,o()},r))}var Me={};function qe(o,r,g){Me[g]||(Me[g]=setTimeout(function(){Me[g]=null,o()},r))}function $e(){function o(){function M(y){function G(X){return(i[y]&&i[y].iframe.style[X])==="0px"}function ue(X){return X.offsetParent!==null}i[y]&&ue(i[y].iframe)&&(G("height")||G("width"))&&R("Visibility change","resize",i[y].iframe,y)}Object.keys(i).forEach(function(y){M(y)})}function r(M){b("window","Mutation observed: "+M[0].target+" "+M[0].type),we(o,16)}function g(){var M=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},G=new d(r);G.observe(M,y)}var d=A();d&&g()}function et(o){function r(){le("Window "+o,"resize")}b("window","Trigger event: "+o),we(r,16)}function De(){function o(){le("Tab Visable","resize")}document.visibilityState!=="hidden"&&(b("document","Trigger event: Visiblity change"),we(o,16))}function le(o,r){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&R(o,r,i[d].iframe,d)})}function nt(){re(window,"message",_e),re(window,"resize",function(){et("resize")}),re(document,"visibilitychange",De),re(document,"-webkit-visibilitychange",De)}function Fe(){function o(d,M){function y(){if(M.tagName){if(M.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+M.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}M&&(y(),Oe(M,d),g.push(M))}function r(d){d&&d.enablePublicMethods&&U("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return pe(),nt(),function(M,y){switch(g=[],r(M),typeof y){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(y||"iframe"),o.bind(t,M));break;case"object":o(M,y);break;default:throw new TypeError("Unexpected data type ("+typeof y+")")}return g}}function it(o){o.fn?o.fn.iFrameResize||(o.fn.iFrameResize=function(g){function d(M,y){Oe(y,g)}return this.filter("iframe").each(d).end()}):ve("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&it(window.jQuery),typeof t=="function"&&t.amd?t([],Fe):u.exports=Fe(),window.iFrameResize=window.iFrameResize||Fe()})()})(bt);var yt={exports:{}};(function(u){(function(t){if(typeof window>"u")return;var a=!0,c=10,w="",F=0,J="",Z=null,D="",j=!1,Y={resize:1,click:1},Ne=128,i=!0,ie=1,fe="bodyOffset",A=fe,re=!0,Ge="",pe={},ae=32,Ke=null,ke=!1,b=!1,ve="[iFrameSizer]",U=ve.length,me="",_e={max:1,min:1,bodyScroll:1,documentElementScroll:1},be="child",Ae=window.parent,se="*",xe=0,ye=!1,Be=null,he=16,ge=1,He="scroll",R=He,Ze=window,We=function(){g("onMessage function not defined")},Oe=function(){},we=function(){},Me={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},qe={},$e=!1;function et(){}try{var De=Object.create({},{passive:{get:function(){$e=!0}}});window.addEventListener("test",et,De),window.removeEventListener("test",et,De)}catch{}function le(e,n,s,v){e.addEventListener(n,s,$e?v||{}:!1)}function nt(e,n,s){e.removeEventListener(n,s,!1)}function Fe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function it(e){var n,s,v,O=null,N=0,q=function(){N=Date.now(),O=null,v=e.apply(n,s),O||(n=s=null)};return function(){var W=Date.now();N||(N=W);var z=he-(W-N);return n=this,s=arguments,z<=0||z>he?(O&&(clearTimeout(O),O=null),N=W,v=e.apply(n,s),O||(n=s=null)):O||(O=setTimeout(q,z)),v}}function o(e){return ve+"["+me+"] "+e}function r(e){ke&&typeof window.console=="object"&&console.log(o(e))}function g(e){typeof window.console=="object"&&console.warn(o(e))}function d(){M(),r("Initialising iFrame ("+window.location.href+")"),G(),$(),X("background",w),X("padding",D),B(),ze(),Ie(),oe(),Ve(),ce(),f(),pe=Q(),ne("init","Init message from host page"),Oe()}function M(){function e(s){return s==="true"}var n=Ge.substr(U).split(":");me=n[0],F=t!==n[1]?Number(n[1]):F,j=t!==n[2]?e(n[2]):j,ke=t!==n[3]?e(n[3]):ke,ae=t!==n[4]?Number(n[4]):ae,a=t!==n[6]?e(n[6]):a,J=n[7],A=t!==n[8]?n[8]:A,w=n[9],D=n[10],xe=t!==n[11]?Number(n[11]):xe,pe.enable=t!==n[12]?e(n[12]):!1,be=t!==n[13]?n[13]:be,R=t!==n[14]?n[14]:R,b=t!==n[15]?Boolean(n[15]):b}function y(e){var n=e.split("Callback");if(n.length===2){var s="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[s]=this[e],delete this[e],g("Deprecated: '"+e+"' has been renamed '"+s+"'. The old method will be removed in the next major version.")}}function G(){function e(){var s=window.iFrameResizer;r("Reading data from page: "+JSON.stringify(s)),Object.keys(s).forEach(y,s),We="onMessage"in s?s.onMessage:We,Oe="onReady"in s?s.onReady:Oe,se="targetOrigin"in s?s.targetOrigin:se,A="heightCalculationMethod"in s?s.heightCalculationMethod:A,R="widthCalculationMethod"in s?s.widthCalculationMethod:R}function n(s,v){return typeof s=="function"&&(r("Setup custom "+v+"CalcMethod"),Me[v]=s,s="custom"),s}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),A=n(A,"height"),R=n(R,"width")),r("TargetOrigin for parent set to: "+se)}function ue(e,n){return n.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+e),n=""),n}function X(e,n){t!==n&&n!==""&&n!=="null"&&(document.body.style[e]=n,r("Body "+e+' set to "'+n+'"'))}function $(){t===J&&(J=F+"px"),X("margin",ue("margin",J))}function oe(){document.documentElement.style.height="",document.body.style.height="",r('HTML & body height set to "auto"')}function L(e){var n={add:function(s){function v(){ne(e.eventName,e.eventType)}qe[s]=v,le(window,s,v,{passive:!0})},remove:function(s){var v=qe[s];delete qe[s],nt(window,s,v)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(n[e.method])):n[e.method](e.eventName),r(Fe(e.method)+" event listener: "+e.eventType)}function Te(e){L({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),L({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),L({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),L({method:e,eventType:"Input",eventName:"input"}),L({method:e,eventType:"Mouse Up",eventName:"mouseup"}),L({method:e,eventType:"Mouse Down",eventName:"mousedown"}),L({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),L({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),L({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),L({method:e,eventType:"Touch Start",eventName:"touchstart"}),L({method:e,eventType:"Touch End",eventName:"touchend"}),L({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),L({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),L({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),L({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),be==="child"&&L({method:e,eventType:"IFrame Resized",eventName:"resize"})}function Se(e,n,s,v){return n!==e&&(e in s||(g(e+" is not a valid option for "+v+"CalculationMethod."),e=n),r(v+' calculation method set to "'+e+'"')),e}function ze(){A=Se(A,fe,T,"height")}function Ie(){R=Se(R,He,S,"width")}function f(){a===!0?(Te("add"),Je()):r("Auto Resize disabled")}function m(){Z!==null&&Z.disconnect()}function C(){Te("remove"),m(),clearInterval(Ke)}function B(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function Q(){function e(){return{x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}}function n(z){var P=z.getBoundingClientRect(),I=e();return{x:parseInt(P.left,10)+parseInt(I.x,10),y:parseInt(P.top,10)+parseInt(I.y,10)}}function s(z){function P(te){var Re=n(te);r("Moving to in page link (#"+I+") at x: "+Re.x+" y: "+Re.y),K(Re.y,Re.x,"scrollToOffset")}var I=z.split("#")[1]||z,E=decodeURIComponent(I),_=document.getElementById(E)||document.getElementsByName(E)[0];t!==_?P(_):(r("In page link (#"+I+") not found in iFrame, so sending to parent"),K(0,0,"inPageLink","#"+I))}function v(){var z=window.location.hash,P=window.location.href;z!==""&&z!=="#"&&s(P)}function O(){function z(P){function I(E){E.preventDefault(),s(this.getAttribute("href"))}P.getAttribute("href")!=="#"&&le(P,"click",I)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),z)}function N(){le(window,"hashchange",v)}function q(){setTimeout(v,Ne)}function W(){Array.prototype.forEach&&document.querySelectorAll?(r("Setting up location.hash handlers"),O(),N(),q()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return pe.enable?W():r("In page linking not enabled"),{findTarget:s}}function ce(){if(b!==!0)return;function e(s){K(0,0,s.type,s.screenY+":"+s.screenX)}function n(s,v){r("Add event listener: "+v),le(window.document,s,e)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}function Ve(){r("Enable public methods"),Ze.parentIFrame={autoResize:function(n){return n===!0&&a===!1?(a=!0,f()):n===!1&&a===!0&&(a=!1,C()),K(0,0,"autoResize",JSON.stringify(a)),a},close:function(){K(0,0,"close")},getId:function(){return me},getPageInfo:function(n){typeof n=="function"?(we=n,K(0,0,"pageInfo")):(we=function(){},K(0,0,"pageInfoStop"))},moveToAnchor:function(n){pe.findTarget(n)},reset:function(){ct("parentIFrame.reset")},scrollTo:function(n,s){K(s,n,"scrollTo")},scrollToOffset:function(n,s){K(s,n,"scrollToOffset")},sendMessage:function(n,s){K(0,0,"message",JSON.stringify(n),s)},setHeightCalculationMethod:function(n){A=n,ze()},setWidthCalculationMethod:function(n){R=n,Ie()},setTargetOrigin:function(n){r("Set targetOrigin: "+n),se=n},size:function(n,s){var v=""+(n||"")+(s?","+s:"");ne("size","parentIFrame.size("+v+")",n,s)}}}function je(){ae!==0&&(r("setInterval: "+ae+"ms"),Ke=setInterval(function(){ne("interval","setInterval: "+ae)},Math.abs(ae)))}function Ue(){function e(E){function _(te){te.complete===!1&&(r("Attach listeners to "+te.src),te.addEventListener("load",O,!1),te.addEventListener("error",N,!1),z.push(te))}E.type==="attributes"&&E.attributeName==="src"?_(E.target):E.type==="childList"&&Array.prototype.forEach.call(E.target.querySelectorAll("img"),_)}function n(E){z.splice(z.indexOf(E),1)}function s(E){r("Remove listeners from "+E.src),E.removeEventListener("load",O,!1),E.removeEventListener("error",N,!1),n(E)}function v(E,_,te){s(E.target),ne(_,te+": "+E.target.src)}function O(E){v(E,"imageLoad","Image loaded")}function N(E){v(E,"imageLoadFailed","Image load failed")}function q(E){ne("mutationObserver","mutationObserver: "+E[0].target+" "+E[0].type),E.forEach(e)}function W(){var E=document.querySelector("body"),_={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return I=new P(q),r("Create body MutationObserver"),I.observe(E,_),I}var z=[],P=window.MutationObserver||window.WebKitMutationObserver,I=W();return{disconnect:function(){"disconnect"in I&&(r("Disconnect body MutationObserver"),I.disconnect(),z.forEach(s))}}}function Je(){var e=0>ae;window.MutationObserver||window.WebKitMutationObserver?e?je():Z=Ue():(r("MutationObserver not supported in this browser!"),je())}function V(e,n){var s=0;return n=n||document.body,s=document.defaultView.getComputedStyle(n,null),s=s!==null?s[e]:0,parseInt(s,c)}function k(e){e>he/2&&(he=2*e,r("Event throttle increased to "+he+"ms"))}function h(e,n){for(var s=n.length,v=0,O=0,N=Fe(e),q=Date.now(),W=0;W<s;W++)v=n[W].getBoundingClientRect()[e]+V("margin"+N,n[W]),v>O&&(O=v);return q=Date.now()-q,r("Parsed "+s+" HTML elements"),r("Element position calculated in "+q+"ms"),k(q),O}function l(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function p(e,n){function s(){return g("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}var v=document.querySelectorAll("["+n+"]");return v.length===0&&s(),h(e,v)}function x(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+V("marginTop")+V("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Me.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(T))},min:function(){return Math.min.apply(null,l(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),h("bottom",x()))},taggedElement:function(){return p("bottom","data-iframe-height")}},S={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Me.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(S.bodyScroll(),S.documentElementScroll())},max:function(){return Math.max.apply(null,l(S))},min:function(){return Math.min.apply(null,l(S))},rightMostElement:function(){return h("right",x())},taggedElement:function(){return p("right","data-iframe-width")}};function H(e,n,s,v){function O(){ie=I,ge=E,K(ie,ge,e)}function N(){function _(te,Re){var Et=Math.abs(te-Re)<=xe;return!Et}return I=t!==s?s:T[A](),E=t!==v?v:S[R](),_(ie,I)||j&&_(ge,E)}function q(){return!(e in{init:1,interval:1,size:1})}function W(){return A in _e||j&&R in _e}function z(){r("No change in size detected")}function P(){q()&&W()?ct(n):e in{interval:1}||z()}var I,E;N()||e==="init"?(lt(),O()):P()}var ee=it(H);function ne(e,n,s,v){function O(){e in{reset:1,resetPage:1,init:1}||r("Trigger event: "+n)}function N(){return ye&&e in Y}N()?r("Trigger event cancelled: "+e):(O(),e==="init"?H(e,n,s,v):ee(e,n,s,v))}function lt(){ye||(ye=!0,r("Trigger event lock on")),clearTimeout(Be),Be=setTimeout(function(){ye=!1,r("Trigger event lock off"),r("--")},Ne)}function ut(e){ie=T[A](),ge=S[R](),K(ie,ge,e)}function ct(e){var n=A;A=fe,r("Reset trigger event: "+e),lt(),ut("reset"),A=n}function K(e,n,s,v,O){function N(){t===O?O=se:r("Message targetOrigin: "+O)}function q(){var W=e+":"+n,z=me+":"+W+":"+s+(t!==v?":"+v:"");r("Sending message to host page ("+z+")"),Ae.postMessage(ve+z,O)}N(),q()}function Tt(e){var n={init:function(){Ge=e.data,Ae=e.source,d(),i=!1,setTimeout(function(){re=!1},Ne)},reset:function(){re?r("Page reset ignored by init"):(r("Page size reset by host page"),ut("resetPage"))},resize:function(){ne("resizeParent","Parent window requested size check")},moveToAnchor:function(){pe.findTarget(O())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var I=O();r("PageInfoFromParent called from parent: "+I),we(JSON.parse(I)),r(" --")},message:function(){var I=O();r("onMessage called from parent: "+I),We(JSON.parse(I)),r(" --")}};function s(){return ve===(""+e.data).substr(0,U)}function v(){return e.data.split("]")[1].split(":")[0]}function O(){return e.data.substr(e.data.indexOf(":")+1)}function N(){return!u.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function q(){return e.data.split(":")[2]in{true:1,false:1}}function W(){var P=v();P in n?n[P]():!N()&&!q()&&g("Unexpected message ("+e.data+")")}function z(){i===!1?W():q()?n.init():r('Ignored message of type "'+v()+'". Received before initialization.')}s()&&z()}function dt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}le(window,"message",Tt),le(window,"readystatechange",dt),dt()})()})(yt);var wt=bt.exports;ot.iframeResize=wt;ot.iframeResizer=wt;ot.iframeResizerContentWindow=yt.exports;(function(u){u.exports=ot})(vt);function Nt(u){const t=document.createElement("a");return t.href=u,{protocol:t.protocol,href:t.href,path:t.pathname,search:t.search,hash:t.hash}}function At(u){const t=Nt(u),a=t.href.substr(0,t.href.length-t.hash.length),c=window.location.href.replace(/#.*$/,"");return t.hash&&a===c}function Mt(u,t){const a=JSON.stringify(t);let c=0;if(a.length===0)return c;for(let w=0;w<a.length;w++){const F=a.charCodeAt(w);c=(c<<5)-c+F,c&=c}return`${u}-${c}`}function Bt(u,t,a){const c=document.createElement("form"),w=document.createElement("input");return c.action=u,c.method="POST",c.target=a,t.forEach(([F,J])=>{w.name=F,w.value=J.toString(),c.appendChild(w.cloneNode())}),c.style.visibility="hidden",c}function Ht(u){const t=u.composedPath();for(let a=0;a<t.indexOf(document.body);a++){const c=t[a];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function Wt(u,t){if(u.hasAttribute("data-modal-post")){const a=u.getAttribute("data-modal-post");t.method="POST",t.body=a;const c=[];return new URL(`http://localhost/?${a}`).searchParams.forEach((w,F)=>{c.push([F,w])}),[c,t]}return[null,t]}function qt(u,t,a,c,w){const F=document.createElement("toujou-modal"),J=document.createElement("iframe"),Z=Mt("iframe",t);if(F.id=u,J.name=Z,document.body.appendChild(F),At(a)){const D=document.querySelector(a),j=D instanceof HTMLTemplateElement?document.importNode(D.content,!0).children:D.childNodes;D.title&&(F.title=D.title);for(let Y=0;Y<j.length;Y++)F.appendChild(j[Y])}else if(w&&c==="POST"){const D=Bt(a,w,Z);F.appendChild(D),F.appendChild(J),D.submit(),D.remove()}else c==="GET"&&(J.src=a,F.appendChild(J));return F}function Dt(u,t,a,c){const w=Mt("toujou-modal",u),F=document.getElementById(w)||qt(w,u,t,a,c);setTimeout(()=>{F.open()})}const Vt=u=>{if(u.metaKey||u.ctrlKey)return;const t=Ht(u);if(!(!(t instanceof HTMLElement||t instanceof SVGElement)||t instanceof HTMLFormElement)&&t.getAttribute("target")==="toujou-modal"){const a=t.getAttribute("href"),c=a.indexOf("?")!==-1?a.split("?")[0]+"?toujou-ajax-modal=1&"+a.split("?")[1]:a.indexOf("#")!==-1?a.split("#")[0]+"?toujou-ajax-modal=1#"+a.split("#")[1]:a+"?toujou-ajax-modal=1",[w,F]=Wt(t,{src:c});Dt(F,c,w?"POST":"GET",w),u.preventDefault(),u.stopPropagation()}},Ut=Ot`
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

`,Jt={reserveScrollBarGap:!0},Pe=[];function Yt(u){Pe.forEach(t=>t.close()),Pe.push(u)}function Xt(u){if(u===Pe[Pe.length-1]){Pe.pop();const t=Pe.pop();t&&t.open()}}class at extends Ft{static get is(){return"toujou-modal"}render(){return rt`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?rt`
                    <button id="dog-ear-close" dialog-dismiss></button>`:rt`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(t){super(t),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(a=>{a[0]&&this.onPosition(a[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Ct()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(t){t.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Pt(this.$.scroller,Jt),Yt(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Xt(this),this.allowOutsideScroll?document.body.style.position="":Lt(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(t){this.loading=t}onClick(t){if(!t.composed)return;const a=t.composedPath();(!a.includes(this.$.modalContent)||a.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(t){const a=Math.max(t.intersectionRect.y,Math.abs(t.boundingClientRect.y));this.$.content.style["min-height"]=`${t.intersectionRect.height}px`,this.$.content.style.top=a?`${a}px`:""}onSlotchange(){const t=this.$.slot.assignedNodes().filter(a=>a instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((a,c)=>{t.includes(c)||this.iframeResizerMap.delete(c)}),t.forEach(a=>{this.loading=!0,a.addEventListener("load",()=>{this.iframeResizerMap.has(a)||this.listenToIframeReadyState(a)})})}listenToIframeReadyState(t){this.loading=!0,this.iframeResizerMap.set(t,this.createIframeResizer(t)),t.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=t.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(t){let a={};try{a=JSON.parse(t.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return a.initCallback=()=>{this.loading=!1},a.closedCallback=()=>{this.close()},vt.exports.iframeResizer(a,t)}dispatchModalEvent(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}}ft(at,"styles",[Ut]);customElements.define(at.is,at);document.addEventListener("click",Vt);
//# sourceMappingURL=toujou-modal.js.map
