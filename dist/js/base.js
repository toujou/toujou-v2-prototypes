var Yt=Object.defineProperty;var Gt=(o,e,t)=>e in o?Yt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ke=(o,e,t)=>(Gt(o,typeof e!="symbol"?e+"":e,t),t);import{r as Oe,s as Me,$ as de,x as Kt}from"./lit-element-f92abbea.js";import"./query-assigned-elements-39dd8e72.js";function Qt(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var st=!1;if(typeof window<"u"){var Tt={get passive(){st=!0}};window.addEventListener("testPassive",null,Tt),window.removeEventListener("testPassive",null,Tt)}var He=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),ge=[],Ve=!1,vt=-1,Ze=void 0,xe=void 0,et=void 0,Ot=function(e){return ge.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},tt=function(e){var t=e||window.event;return Ot(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},$t=function(e){if(et===void 0){var t=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(t&&i>0){var l=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);et=document.body.style.paddingRight,document.body.style.paddingRight=l+i+"px"}}Ze===void 0&&(Ze=document.body.style.overflow,document.body.style.overflow="hidden")},Mt=function(){et!==void 0&&(document.body.style.paddingRight=et,et=void 0),Ze!==void 0&&(document.body.style.overflow=Ze,Ze=void 0)},Zt=function(){return window.requestAnimationFrame(function(){if(xe===void 0){xe={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,i=e.scrollX,l=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var y=l-window.innerHeight;y&&t>=l&&(document.body.style.top=-(t+y))})},300)}})},It=function(){if(xe!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=xe.position,document.body.style.top=xe.top,document.body.style.left=xe.left,window.scrollTo(t,e),xe=void 0}},en=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},tn=function(e,t){var i=e.targetTouches[0].clientY-vt;return Ot(e.target)?!1:t&&t.scrollTop===0&&i>0||en(t)&&i<0?tt(e):(e.stopPropagation(),!0)},nn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!ge.some(function(l){return l.targetElement===e})){var i={targetElement:e,options:t||{}};ge=[].concat(Qt(ge),[i]),He?Zt():$t(t),He&&(e.ontouchstart=function(l){l.targetTouches.length===1&&(vt=l.targetTouches[0].clientY)},e.ontouchmove=function(l){l.targetTouches.length===1&&tn(l,e)},Ve||(document.addEventListener("touchmove",tt,st?{passive:!1}:void 0),Ve=!0))}},on=function(){He&&(ge.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Ve&&(document.removeEventListener("touchmove",tt,st?{passive:!1}:void 0),Ve=!1),vt=-1),He?It():Mt(),ge=[]},rn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}ge=ge.filter(function(t){return t.targetElement!==e}),He&&(e.ontouchstart=null,e.ontouchmove=null,Ve&&ge.length===0&&(document.removeEventListener("touchmove",tt,st?{passive:!1}:void 0),Ve=!1)),He?It():Mt()},At={exports:{}},at={},Rt={exports:{}};(function(o){(function(e){if(typeof window>"u")return;var t=0,i=!1,l=!1,y="message",B=y.length,D="[iFrameSizer]",R=D.length,O=null,X=window.requestAnimationFrame,be={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},s={},oe=null,ae={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){G("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function E(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function q(r,c,g){r.addEventListener(c,g,!1)}function ce(r,c,g){r.removeEventListener(c,g,!1)}function J(){var r=["moz","webkit","o","ms"],c;for(c=0;c<r.length&&!X;c+=1)X=window[r[c]+"RequestAnimationFrame"];X?X=X.bind(window):w("setup","RequestAnimationFrame not supported")}function $(r){var c="Host page: "+r;return window.top!==window.self&&(c=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+r:"Nested host page: "+r),c}function Ie(r){return D+"["+$(r)+"]"}function Ae(r){return s[r]?s[r].log:i}function w(r,c){ve("log",r,c,Ae(r))}function Se(r,c){ve("info",r,c,Ae(r))}function G(r,c){ve("warn",r,c,!0)}function ve(r,c,g,h){h===!0&&typeof window.console=="object"&&console[r](Ie(c),g)}function nt(r){function c(){function d(){we(C),Ee(p),pe("onResized",C)}k("Height"),k("Width"),Xe(d,C,"init")}function g(){var d=Y.substr(R).split(":"),b=d[1]?parseInt(d[1],10):0,j=s[d[0]]&&s[d[0]].iframe,T=getComputedStyle(j);return{iframe:j,id:d[0],height:b+h(T)+S(T),width:d[2],type:d[3]}}function h(d){if(d.boxSizing!=="border-box")return 0;var b=d.paddingTop?parseInt(d.paddingTop,10):0,j=d.paddingBottom?parseInt(d.paddingBottom,10):0;return b+j}function S(d){if(d.boxSizing!=="border-box")return 0;var b=d.borderTopWidth?parseInt(d.borderTopWidth,10):0,j=d.borderBottomWidth?parseInt(d.borderBottomWidth,10):0;return b+j}function k(d){var b=Number(s[p]["max"+d]),j=Number(s[p]["min"+d]),T=d.toLowerCase(),M=Number(C[T]);w(p,"Checking "+T+" is in range "+j+"-"+b),M<j&&(M=j,w(p,"Set "+T+" to min value")),M>b&&(M=b,w(p,"Set "+T+" to max value")),C[T]=""+M}function Z(){function d(){function T(){var H=0,re=!1;for(w(p,"Checking connection is from allowed list of origins: "+j);H<j.length;H++)if(j[H]===b){re=!0;break}return re}function M(){var H=s[p]&&s[p].remoteHost;return w(p,"Checking connection is from: "+H),b===H}return j.constructor===Array?T():M()}var b=r.origin,j=s[p]&&s[p].checkOrigin;if(j&&""+b!="null"&&!d())throw new Error("Unexpected message received from: "+b+" for "+C.iframe.id+". Message was: "+r.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function me(){return D===(""+Y).substr(0,R)&&Y.substr(R).split(":")[0]in s}function K(){var d=C.type in{true:1,false:1,undefined:1};return d&&w(p,"Ignoring init message from meta parent page"),d}function ie(d){return Y.substr(Y.indexOf(":")+B+d)}function ue(d){w(p,"onMessage passed: {iframe: "+C.iframe.id+", message: "+d+"}"),pe("onMessage",{iframe:C.iframe,message:JSON.parse(d)}),w(p,"--")}function P(){var d=document.body.getBoundingClientRect(),b=C.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:b.height,iframeWidth:b.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(b.top-d.top,10),offsetLeft:parseInt(b.left-d.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function je(d,b){function j(){L("Send Page Info","pageInfo:"+P(),d,b)}Ye(j,32,b)}function Ne(){function d(M,H){function re(){s[T]?je(s[T].iframe,T):b()}["scroll","resize"].forEach(function(le){w(T,M+le+" listener for sendPageInfo"),H(window,le,re)})}function b(){d("Remove ",ce)}function j(){d("Add ",q)}var T=p;j(),s[T]&&(s[T].stopPageInfo=b)}function Pe(){s[p]&&s[p].stopPageInfo&&(s[p].stopPageInfo(),delete s[p].stopPageInfo)}function ze(){var d=!0;return C.iframe===null&&(G(p,"IFrame ("+C.id+") not found"),d=!1),d}function f(d){var b=d.getBoundingClientRect();return Re(p),{x:Math.floor(Number(b.left)+Number(O.x)),y:Math.floor(Number(b.top)+Number(O.y))}}function m(d){function b(){O=H,N(),w(p,"--")}function j(){return{x:Number(C.width)+M.x,y:Number(C.height)+M.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(d?"Offset":"")](H.x,H.y):G(p,"Unable to scroll to requested position, window.parentIFrame not found")}var M=d?f(C.iframe):{x:0,y:0},H=j();w(p,"Reposition requested from iFrame (offset x:"+M.x+" y:"+M.y+")"),window.top!==window.self?T():b()}function N(){pe("onScroll",O)!==!1?Ee(p):Ue()}function W(d){function b(){var re=f(H);w(p,"Moving to in page link (#"+T+") at x: "+re.x+" y: "+re.y),O={x:re.x,y:re.y},N(),w(p,"--")}function j(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):w(p,"In page link #"+T+" not found and window.parentIFrame not found")}var T=d.split("#")[1]||"",M=decodeURIComponent(T),H=document.getElementById(M)||document.getElementsByName(M)[0];H?b():window.top!==window.self?j():w(p,"In page link #"+T+" not found")}function Q(d){var b={};if(Number(C.width)===0&&Number(C.height)===0){var j=ie(9).split(":");b={x:j[1],y:j[0]}}else b={x:C.width,y:C.height};pe(d,{iframe:C.iframe,screenX:Number(b.x),screenY:Number(b.y),type:C.type})}function pe(d,b){return Te(p,d,b)}function Ke(){switch(s[p]&&s[p].firstRun&&$e(),C.type){case"close":he(C.iframe);break;case"message":ue(ie(6));break;case"mouseenter":Q("onMouseEnter");break;case"mouseleave":Q("onMouseLeave");break;case"autoResize":s[p].autoResize=JSON.parse(ie(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":je(s[p]&&s[p].iframe,p),Ne();break;case"pageInfoStop":Pe();break;case"inPageLink":W(ie(9));break;case"reset":ye(C);break;case"init":c(),pe("onInit",C.iframe);break;default:Number(C.width)===0&&Number(C.height)===0?G("Unsupported message received ("+C.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):c()}}function Be(d){var b=!0;return s[d]||(b=!1,G(C.type+" No settings for "+d+". Message was: "+Y)),b}function Qe(){for(var d in s)L("iFrame requested init",ot(d),s[d].iframe,d)}function $e(){s[p]&&(s[p].firstRun=!1)}var Y=r.data,C={},p=null;Y==="[iFrameResizerChild]Ready"?Qe():me()?(C=g(),p=C.id,s[p]&&(s[p].loaded=!0),!K()&&Be(p)&&(w(p,"Received: "+Y),ze()&&Z()&&Ke())):Se(p,"Ignored: "+Y)}function Te(r,c,g){var h=null,S=null;if(s[r])if(h=s[r][c],typeof h=="function")S=h(g);else throw new TypeError(c+" on iFrame["+r+"] is not a function");return S}function qe(r){var c=r.id;delete s[c]}function he(r){var c=r.id;if(Te(c,"onClose",c)===!1){w(c,"Close iframe cancelled by onClose event");return}w(c,"Removing iFrame: "+c);try{r.parentNode&&r.parentNode.removeChild(r)}catch(g){G(g)}Te(c,"onClosed",c),w(c,"--"),qe(r)}function Re(r){O===null&&(O={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},w(r,"Get page position: "+O.x+","+O.y))}function Ee(r){O!==null&&(window.scrollTo(O.x,O.y),w(r,"Set page position: "+O.x+","+O.y),Ue())}function Ue(){O=null}function ye(r){function c(){we(r),L("reset","reset",r.iframe,r.id)}w(r.id,"Size reset requested by "+(r.type==="init"?"host page":"iFrame")),Re(r.id),Xe(c,r,"reset")}function we(r){function c(k){if(!r.id){w("undefined","messageData id not set");return}r.iframe.style[k]=r[k]+"px",w(r.id,"IFrame ("+S+") "+k+" set to "+r[k]+"px")}function g(k){!l&&r[k]==="0"&&(l=!0,w(S,"Hidden iFrame detected, creating visibility listener"),it())}function h(k){c(k),g(k)}var S=r.iframe.id;s[S]&&(s[S].sizeHeight&&h("height"),s[S].sizeWidth&&h("width"))}function Xe(r,c,g){g!==c.type&&X&&!window.jasmine?(w(c.id,"Requesting animation frame"),X(r)):r()}function L(r,c,g,h,S){function k(){var ue=s[h]&&s[h].targetOrigin;w(h,"["+r+"] Sending msg to iframe["+h+"] ("+c+") targetOrigin: "+ue),g.contentWindow.postMessage(D+c,ue)}function Z(){G(h,"["+r+"] IFrame("+h+") not found")}function me(){g&&"contentWindow"in g&&g.contentWindow!==null?k():Z()}function K(){function ue(){s[h]&&!s[h].loaded&&!ie&&(ie=!0,G(h,"IFrame has not responded within "+s[h].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}!!S&&s[h]&&!!s[h].warningTimeout&&(s[h].msgTimeout=setTimeout(ue,s[h].warningTimeout))}var ie=!1;h=h||g.id,s[h]&&(me(),K())}function ot(r){return r+":"+s[r].bodyMarginV1+":"+s[r].sizeWidth+":"+s[r].log+":"+s[r].interval+":"+s[r].enablePublicMethods+":"+s[r].autoResize+":"+s[r].bodyMargin+":"+s[r].heightCalculationMethod+":"+s[r].bodyBackground+":"+s[r].bodyPadding+":"+s[r].tolerance+":"+s[r].inPageLinks+":"+s[r].resizeFrom+":"+s[r].widthCalculationMethod+":"+s[r].mouseEvents}function Je(r){return typeof r=="number"}function Le(r,c){function g(){function m(W){var Q=s[f][W];Q!==1/0&&Q!==0&&(r.style[W]=Je(Q)?Q+"px":Q,w(f,"Set "+W+" = "+r.style[W]))}function N(W){if(s[f]["min"+W]>s[f]["max"+W])throw new Error("Value for min"+W+" can not be greater than max"+W)}N("Height"),N("Width"),m("maxHeight"),m("minHeight"),m("maxWidth"),m("minWidth")}function h(){var m=c&&c.id||ae.id+t++;return document.getElementById(m)!==null&&(m+=t++),m}function S(m){return m===""&&(r.id=m=h(),i=(c||{}).log,w(m,"Added missing iframe ID: "+m+" ("+r.src+")")),m}function k(){switch(w(f,"IFrame scrolling "+(s[f]&&s[f].scrolling?"enabled":"disabled")+" for "+f),r.style.overflow=(s[f]&&s[f].scrolling)===!1?"hidden":"auto",s[f]&&s[f].scrolling){case"omit":break;case!0:r.scrolling="yes";break;case!1:r.scrolling="no";break;default:r.scrolling=s[f]?s[f].scrolling:"no"}}function Z(){(typeof(s[f]&&s[f].bodyMargin)=="number"||(s[f]&&s[f].bodyMargin)==="0")&&(s[f].bodyMarginV1=s[f].bodyMargin,s[f].bodyMargin=""+s[f].bodyMargin+"px")}function me(){var m=s[f]&&s[f].firstRun,N=s[f]&&s[f].heightCalculationMethod in be;!m&&N&&ye({iframe:r,height:0,width:0,type:"init"})}function K(){s[f]&&(s[f].iframe.iFrameResizer={close:he.bind(null,s[f].iframe),removeListeners:qe.bind(null,s[f].iframe),resize:L.bind(null,"Window resize","resize",s[f].iframe),moveToAnchor:function(m){L("Move to anchor","moveToAnchor:"+m,s[f].iframe,f)},sendMessage:function(m){m=JSON.stringify(m),L("Send Message","message:"+m,s[f].iframe,f)}})}function ie(m){function N(){L("iFrame.onload",m,r,e,!0),me()}function W(pe){if(!!r.parentNode){var Ke=new pe(function(Be){Be.forEach(function(Qe){var $e=Array.prototype.slice.call(Qe.removedNodes);$e.forEach(function(Y){Y===r&&he(r)})})});Ke.observe(r.parentNode,{childList:!0})}}var Q=E();Q&&W(Q),q(r,"load",N),L("init",m,r,e,!0)}function ue(m){if(typeof m!="object")throw new TypeError("Options is not an object")}function P(m){for(var N in ae)Object.prototype.hasOwnProperty.call(ae,N)&&(s[f][N]=Object.prototype.hasOwnProperty.call(m,N)?m[N]:ae[N])}function je(m){return m===""||m.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":m}function Ne(m){var N=m.split("Callback");if(N.length===2){var W="on"+N[0].charAt(0).toUpperCase()+N[0].slice(1);this[W]=this[m],delete this[m],G(f,"Deprecated: '"+m+"' has been renamed '"+W+"'. The old method will be removed in the next major version.")}}function Pe(m){m=m||{},s[f]={firstRun:!0,iframe:r,remoteHost:r.src&&r.src.split("/").slice(0,3).join("/")},ue(m),Object.keys(m).forEach(Ne,m),P(m),s[f]&&(s[f].targetOrigin=s[f].checkOrigin===!0?je(s[f].remoteHost):"*")}function ze(){return f in s&&"iFrameResizer"in r}var f=S(r.id);ze()?G(f,"Ignored iFrame, already setup."):(Pe(c),k(),g(),Z(),ie(ot(f)),K())}function _e(r,c){oe===null&&(oe=setTimeout(function(){oe=null,r()},c))}var Ce={};function Ye(r,c,g){Ce[g]||(Ce[g]=setTimeout(function(){Ce[g]=null,r()},c))}function it(){function r(){function S(k){function Z(K){return(s[k]&&s[k].iframe.style[K])==="0px"}function me(K){return K.offsetParent!==null}s[k]&&me(s[k].iframe)&&(Z("height")||Z("width"))&&L("Visibility change","resize",s[k].iframe,k)}Object.keys(s).forEach(function(k){S(k)})}function c(S){w("window","Mutation observed: "+S[0].target+" "+S[0].type),_e(r,16)}function g(){var S=document.querySelector("body"),k={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},Z=new h(c);Z.observe(S,k)}var h=E();h&&g()}function rt(r){function c(){fe("Window "+r,"resize")}w("window","Trigger event: "+r),_e(c,16)}function Ge(){function r(){fe("Tab Visable","resize")}document.visibilityState!=="hidden"&&(w("document","Trigger event: Visiblity change"),_e(r,16))}function fe(r,c){function g(h){return s[h]&&s[h].resizeFrom==="parent"&&s[h].autoResize&&!s[h].firstRun}Object.keys(s).forEach(function(h){g(h)&&L(r,c,s[h].iframe,h)})}function ct(){q(window,"message",nt),q(window,"resize",function(){rt("resize")}),q(document,"visibilitychange",Ge),q(document,"-webkit-visibilitychange",Ge)}function Fe(){function r(h,S){function k(){if(S.tagName){if(S.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+S.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}S&&(k(),Le(S,h),g.push(S))}function c(h){h&&h.enablePublicMethods&&G("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return J(),ct(),function(S,k){switch(g=[],c(S),typeof k){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(k||"iframe"),r.bind(e,S));break;case"object":r(S,k);break;default:throw new TypeError("Unexpected data type ("+typeof k+")")}return g}}function ut(r){r.fn?r.fn.iFrameResize||(r.fn.iFrameResize=function(g){function h(S,k){Le(k,g)}return this.filter("iframe").each(h).end()}):Se("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&ut(window.jQuery),typeof e=="function"&&e.amd?e([],Fe):o.exports=Fe(),window.iFrameResize=window.iFrameResize||Fe()})()})(Rt);var Lt={exports:{}};(function(o){(function(e){if(typeof window>"u")return;var t=!0,i=10,l="",y=0,B="",D=null,R="",O=!1,X={resize:1,click:1},be=128,s=!0,oe=1,ae="bodyOffset",E=ae,q=!0,ce="",J={},$=32,Ie=null,Ae=!1,w=!1,Se="[iFrameSizer]",G=Se.length,ve="",nt={max:1,min:1,bodyScroll:1,documentElementScroll:1},Te="child",qe=window.parent,he="*",Re=0,Ee=!1,Ue=null,ye=16,we=1,Xe="scroll",L=Xe,ot=window,Je=function(){g("onMessage function not defined")},Le=function(){},_e=function(){},Ce={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},Ye={},it=!1;function rt(){}try{var Ge=Object.create({},{passive:{get:function(){it=!0}}});window.addEventListener("test",rt,Ge),window.removeEventListener("test",rt,Ge)}catch{}function fe(n,a,u,v){n.addEventListener(a,u,it?v||{}:!1)}function ct(n,a,u){n.removeEventListener(a,u,!1)}function Fe(n){return n.charAt(0).toUpperCase()+n.slice(1)}function ut(n){var a,u,v,x=null,z=0,U=function(){z=Date.now(),x=null,v=n.apply(a,u),x||(a=u=null)};return function(){var V=Date.now();z||(z=V);var I=ye-(V-z);return a=this,u=arguments,I<=0||I>ye?(x&&(clearTimeout(x),x=null),z=V,v=n.apply(a,u),x||(a=u=null)):x||(x=setTimeout(U,I)),v}}function r(n){return Se+"["+ve+"] "+n}function c(n){Ae&&typeof window.console=="object"&&console.log(r(n))}function g(n){typeof window.console=="object"&&console.warn(r(n))}function h(){S(),c("Initialising iFrame ("+window.location.href+")"),Z(),ie(),K("background",l),K("padding",R),W(),Pe(),ze(),ue(),Ke(),pe(),f(),J=Q(),le("init","Init message from host page"),Le()}function S(){function n(u){return u==="true"}var a=ce.substr(G).split(":");ve=a[0],y=e!==a[1]?Number(a[1]):y,O=e!==a[2]?n(a[2]):O,Ae=e!==a[3]?n(a[3]):Ae,$=e!==a[4]?Number(a[4]):$,t=e!==a[6]?n(a[6]):t,B=a[7],E=e!==a[8]?a[8]:E,l=a[9],R=a[10],Re=e!==a[11]?Number(a[11]):Re,J.enable=e!==a[12]?n(a[12]):!1,Te=e!==a[13]?a[13]:Te,L=e!==a[14]?a[14]:L,w=e!==a[15]?Boolean(a[15]):w}function k(n){var a=n.split("Callback");if(a.length===2){var u="on"+a[0].charAt(0).toUpperCase()+a[0].slice(1);this[u]=this[n],delete this[n],g("Deprecated: '"+n+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function Z(){function n(){var u=window.iFrameResizer;c("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(k,u),Je="onMessage"in u?u.onMessage:Je,Le="onReady"in u?u.onReady:Le,he="targetOrigin"in u?u.targetOrigin:he,E="heightCalculationMethod"in u?u.heightCalculationMethod:E,L="widthCalculationMethod"in u?u.widthCalculationMethod:L}function a(u,v){return typeof u=="function"&&(c("Setup custom "+v+"CalcMethod"),Ce[v]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(n(),E=a(E,"height"),L=a(L,"width")),c("TargetOrigin for parent set to: "+he)}function me(n,a){return a.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+n),a=""),a}function K(n,a){e!==a&&a!==""&&a!=="null"&&(document.body.style[n]=a,c("Body "+n+' set to "'+a+'"'))}function ie(){e===B&&(B=y+"px"),K("margin",me("margin",B))}function ue(){document.documentElement.style.height="",document.body.style.height="",c('HTML & body height set to "auto"')}function P(n){var a={add:function(u){function v(){le(n.eventName,n.eventType)}Ye[u]=v,fe(window,u,v,{passive:!0})},remove:function(u){var v=Ye[u];delete Ye[u],ct(window,u,v)}};n.eventNames&&Array.prototype.map?(n.eventName=n.eventNames[0],n.eventNames.map(a[n.method])):a[n.method](n.eventName),c(Fe(n.method)+" event listener: "+n.eventType)}function je(n){P({method:n,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),P({method:n,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),P({method:n,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),P({method:n,eventType:"Input",eventName:"input"}),P({method:n,eventType:"Mouse Up",eventName:"mouseup"}),P({method:n,eventType:"Mouse Down",eventName:"mousedown"}),P({method:n,eventType:"Orientation Change",eventName:"orientationchange"}),P({method:n,eventType:"Print",eventName:["afterprint","beforeprint"]}),P({method:n,eventType:"Ready State Change",eventName:"readystatechange"}),P({method:n,eventType:"Touch Start",eventName:"touchstart"}),P({method:n,eventType:"Touch End",eventName:"touchend"}),P({method:n,eventType:"Touch Cancel",eventName:"touchcancel"}),P({method:n,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),P({method:n,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),P({method:n,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),Te==="child"&&P({method:n,eventType:"IFrame Resized",eventName:"resize"})}function Ne(n,a,u,v){return a!==n&&(n in u||(g(n+" is not a valid option for "+v+"CalculationMethod."),n=a),c(v+' calculation method set to "'+n+'"')),n}function Pe(){E=Ne(E,ae,T,"height")}function ze(){L=Ne(L,Xe,M,"width")}function f(){t===!0?(je("add"),$e()):c("Auto Resize disabled")}function m(){D!==null&&D.disconnect()}function N(){je("remove"),m(),clearInterval(Ie)}function W(){var n=document.createElement("div");n.style.clear="both",n.style.display="block",n.style.height="0",document.body.appendChild(n)}function Q(){function n(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function a(I){var F=I.getBoundingClientRect(),A=n();return{x:parseInt(F.left,10)+parseInt(A.x,10),y:parseInt(F.top,10)+parseInt(A.y,10)}}function u(I){function F(se){var De=a(se);c("Moving to in page link (#"+A+") at x: "+De.x+" y: "+De.y),ee(De.y,De.x,"scrollToOffset")}var A=I.split("#")[1]||I,_=decodeURIComponent(A),te=document.getElementById(_)||document.getElementsByName(_)[0];e!==te?F(te):(c("In page link (#"+A+") not found in iFrame, so sending to parent"),ee(0,0,"inPageLink","#"+A))}function v(){var I=window.location.hash,F=window.location.href;I!==""&&I!=="#"&&u(F)}function x(){function I(F){function A(_){_.preventDefault(),u(this.getAttribute("href"))}F.getAttribute("href")!=="#"&&fe(F,"click",A)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),I)}function z(){fe(window,"hashchange",v)}function U(){setTimeout(v,be)}function V(){Array.prototype.forEach&&document.querySelectorAll?(c("Setting up location.hash handlers"),x(),z(),U()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return J.enable?V():c("In page linking not enabled"),{findTarget:u}}function pe(){if(w!==!0)return;function n(u){ee(0,0,u.type,u.screenY+":"+u.screenX)}function a(u,v){c("Add event listener: "+v),fe(window.document,u,n)}a("mouseenter","Mouse Enter"),a("mouseleave","Mouse Leave")}function Ke(){c("Enable public methods"),ot.parentIFrame={autoResize:function(a){return a===!0&&t===!1?(t=!0,f()):a===!1&&t===!0&&(t=!1,N()),ee(0,0,"autoResize",JSON.stringify(t)),t},close:function(){ee(0,0,"close")},getId:function(){return ve},getPageInfo:function(a){typeof a=="function"?(_e=a,ee(0,0,"pageInfo")):(_e=function(){},ee(0,0,"pageInfoStop"))},moveToAnchor:function(a){J.findTarget(a)},reset:function(){kt("parentIFrame.reset")},scrollTo:function(a,u){ee(u,a,"scrollTo")},scrollToOffset:function(a,u){ee(u,a,"scrollToOffset")},sendMessage:function(a,u){ee(0,0,"message",JSON.stringify(a),u)},setHeightCalculationMethod:function(a){E=a,Pe()},setWidthCalculationMethod:function(a){L=a,ze()},setTargetOrigin:function(a){c("Set targetOrigin: "+a),he=a},size:function(a,u){var v=""+(a||"")+(u?","+u:"");le("size","parentIFrame.size("+v+")",a,u)}}}function Be(){$!==0&&(c("setInterval: "+$+"ms"),Ie=setInterval(function(){le("interval","setInterval: "+$)},Math.abs($)))}function Qe(){function n(_){function te(se){se.complete===!1&&(c("Attach listeners to "+se.src),se.addEventListener("load",x,!1),se.addEventListener("error",z,!1),I.push(se))}_.type==="attributes"&&_.attributeName==="src"?te(_.target):_.type==="childList"&&Array.prototype.forEach.call(_.target.querySelectorAll("img"),te)}function a(_){I.splice(I.indexOf(_),1)}function u(_){c("Remove listeners from "+_.src),_.removeEventListener("load",x,!1),_.removeEventListener("error",z,!1),a(_)}function v(_,te,se){u(_.target),le(te,se+": "+_.target.src)}function x(_){v(_,"imageLoad","Image loaded")}function z(_){v(_,"imageLoadFailed","Image load failed")}function U(_){le("mutationObserver","mutationObserver: "+_[0].target+" "+_[0].type),_.forEach(n)}function V(){var _=document.querySelector("body"),te={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return A=new F(U),c("Create body MutationObserver"),A.observe(_,te),A}var I=[],F=window.MutationObserver||window.WebKitMutationObserver,A=V();return{disconnect:function(){"disconnect"in A&&(c("Disconnect body MutationObserver"),A.disconnect(),I.forEach(u))}}}function $e(){var n=0>$;window.MutationObserver||window.WebKitMutationObserver?n?Be():D=Qe():(c("MutationObserver not supported in this browser!"),Be())}function Y(n,a){var u=0;return a=a||document.body,u=document.defaultView.getComputedStyle(a,null),u=u!==null?u[n]:0,parseInt(u,i)}function C(n){n>ye/2&&(ye=2*n,c("Event throttle increased to "+ye+"ms"))}function p(n,a){for(var u=a.length,v=0,x=0,z=Fe(n),U=Date.now(),V=0;V<u;V++)v=a[V].getBoundingClientRect()[n]+Y("margin"+z,a[V]),v>x&&(x=v);return U=Date.now()-U,c("Parsed "+u+" HTML elements"),c("Element position calculated in "+U+"ms"),C(U),x}function d(n){return[n.bodyOffset(),n.bodyScroll(),n.documentElementOffset(),n.documentElementScroll()]}function b(n,a){function u(){return g("No tagged elements ("+a+") found on page"),document.querySelectorAll("body *")}var v=document.querySelectorAll("["+a+"]");return v.length===0&&u(),p(n,v)}function j(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+Y("marginTop")+Y("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ce.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,d(T))},min:function(){return Math.min.apply(null,d(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),p("bottom",j()))},taggedElement:function(){return b("bottom","data-iframe-height")}},M={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ce.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(M.bodyScroll(),M.documentElementScroll())},max:function(){return Math.max.apply(null,d(M))},min:function(){return Math.min.apply(null,d(M))},rightMostElement:function(){return p("right",j())},taggedElement:function(){return b("right","data-iframe-width")}};function H(n,a,u,v){function x(){oe=A,we=_,ee(oe,we,n)}function z(){function te(se,De){var Jt=Math.abs(se-De)<=Re;return!Jt}return A=e!==u?u:T[E](),_=e!==v?v:M[L](),te(oe,A)||O&&te(we,_)}function U(){return!(n in{init:1,interval:1,size:1})}function V(){return E in nt||O&&L in nt}function I(){c("No change in size detected")}function F(){U()&&V()?kt(a):n in{interval:1}||I()}var A,_;z()||n==="init"?(yt(),x()):F()}var re=ut(H);function le(n,a,u,v){function x(){n in{reset:1,resetPage:1,init:1}||c("Trigger event: "+a)}function z(){return Ee&&n in X}z()?c("Trigger event cancelled: "+n):(x(),n==="init"?H(n,a,u,v):re(n,a,u,v))}function yt(){Ee||(Ee=!0,c("Trigger event lock on")),clearTimeout(Ue),Ue=setTimeout(function(){Ee=!1,c("Trigger event lock off"),c("--")},be)}function wt(n){oe=T[E](),we=M[L](),ee(oe,we,n)}function kt(n){var a=E;E=ae,c("Reset trigger event: "+n),yt(),wt("reset"),E=a}function ee(n,a,u,v,x){function z(){e===x?x=he:c("Message targetOrigin: "+x)}function U(){var V=n+":"+a,I=ve+":"+V+":"+u+(e!==v?":"+v:"");c("Sending message to host page ("+I+")"),qe.postMessage(Se+I,x)}z(),U()}function Xt(n){var a={init:function(){ce=n.data,qe=n.source,h(),s=!1,setTimeout(function(){q=!1},be)},reset:function(){q?c("Page reset ignored by init"):(c("Page size reset by host page"),wt("resetPage"))},resize:function(){le("resizeParent","Parent window requested size check")},moveToAnchor:function(){J.findTarget(x())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var A=x();c("PageInfoFromParent called from parent: "+A),_e(JSON.parse(A)),c(" --")},message:function(){var A=x();c("onMessage called from parent: "+A),Je(JSON.parse(A)),c(" --")}};function u(){return Se===(""+n.data).substr(0,G)}function v(){return n.data.split("]")[1].split(":")[0]}function x(){return n.data.substr(n.data.indexOf(":")+1)}function z(){return!o.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function U(){return n.data.split(":")[2]in{true:1,false:1}}function V(){var F=v();F in a?a[F]():!z()&&!U()&&g("Unexpected message ("+n.data+")")}function I(){s===!1?V():U()?a.init():c('Ignored message of type "'+v()+'". Received before initialization.')}u()&&I()}function St(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}fe(window,"message",Xt),fe(window,"readystatechange",St),St()})()})(Lt);var Ft=Rt.exports;at.iframeResize=Ft;at.iframeResizer=Ft;at.iframeResizerContentWindow=Lt.exports;(function(o){o.exports=at})(At);function sn(o){const e=document.createElement("a");return e.href=o,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function an(o){const e=sn(o),t=e.href.substr(0,e.href.length-e.hash.length),i=window.location.href.replace(/#.*$/,"");return e.hash&&t===i}function Nt(o,e){const t=JSON.stringify(e);let i=0;if(t.length===0)return i;for(let l=0;l<t.length;l++){const y=t.charCodeAt(l);i=(i<<5)-i+y,i&=i}return`${o}-${i}`}function cn(o,e,t){const i=document.createElement("form"),l=document.createElement("input");return i.action=o,i.method="POST",i.target=t,e.forEach(([y,B])=>{l.name=y,l.value=B.toString(),i.appendChild(l.cloneNode())}),i.style.visibility="hidden",i}function un(o){const e=o.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const i=e[t];if(i.hasAttribute&&i.hasAttribute("target")&&i!==document.body)return i}}function ln(o,e){if(o.hasAttribute("data-modal-post")){const t=o.getAttribute("data-modal-post");e.method="POST",e.body=t;const i=[];return new URL(`http://localhost/?${t}`).searchParams.forEach((l,y)=>{i.push([y,l])}),[i,e]}return[null,e]}function dn(o,e,t,i,l){const y=document.createElement("toujou-modal"),B=document.createElement("iframe"),D=Nt("iframe",e);if(y.id=o,B.name=D,document.body.appendChild(y),an(t)){const R=document.querySelector(t),O=R instanceof HTMLTemplateElement?document.importNode(R.content,!0).children:R.childNodes;R.title&&(y.title=R.title);for(let X=0;X<O.length;X++)y.appendChild(O[X])}else if(l&&i==="POST"){const R=cn(t,l,D);y.appendChild(R),y.appendChild(B),R.submit(),R.remove()}else i==="GET"&&(B.src=t,y.appendChild(B));return y}function hn(o,e,t,i){const l=Nt("toujou-modal",o),y=document.getElementById(l)||dn(l,o,e,t,i);setTimeout(()=>{y.open()})}const fn=o=>{if(o.metaKey||o.ctrlKey)return;const e=un(o);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const t=e.getAttribute("href"),i=t.indexOf("?")!==-1?t.split("?")[0]+"?toujou-ajax-modal=1&"+t.split("?")[1]:t.indexOf("#")!==-1?t.split("#")[0]+"?toujou-ajax-modal=1#"+t.split("#")[1]:t+"?toujou-ajax-modal=1",[l,y]=ln(e,{src:i});hn(y,i,l?"POST":"GET",l),o.preventDefault(),o.stopPropagation()}},mn=Oe`
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

`,pn={reserveScrollBarGap:!0},We=[];function gn(o){We.forEach(e=>e.close()),We.push(o)}function bn(o){if(o===We[We.length-1]){We.pop();const e=We.pop();e&&e.open()}}class dt extends Me{static get is(){return"toujou-modal"}render(){return de`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?de`
                    <button id="dog-ear-close" dialog-dismiss></button>`:de`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(t=>{t[0]&&this.onPosition(t[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){on()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":nn(this.$.scroller,pn),gn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),bn(this),this.allowOutsideScroll?document.body.style.position="":rn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const t=e.composedPath();(!t.includes(this.$.modalContent)||t.some(i=>i instanceof HTMLElement&&i.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const t=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=t?`${t}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(t=>t instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((t,i)=>{e.includes(i)||this.iframeResizerMap.delete(i)}),e.forEach(t=>{this.loading=!0,t.addEventListener("load",()=>{this.iframeResizerMap.has(t)||this.listenToIframeReadyState(t)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let t={};try{t=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(i){(console.error||console.log).call(console,i.stack||i)}return t.initCallback=()=>{this.loading=!1},t.closedCallback=()=>{this.close()},At.exports.iframeResizer(t,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}ke(dt,"styles",[mn]);customElements.define(dt.is,dt);document.addEventListener("click",fn);const vn=Oe`
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

`;class ht extends Me{static get is(){return"toujou-snackbar"}render(){return de`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return styles}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?this.setAttribute("visible",""):this.removeAttribute("visible")}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(e){super(e),this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",t=>{this._handleAddSnackbar(t)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this)}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar(this.cue[0]):e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer(this._animationStart,this._duration)),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced){this._removeSnackbarFromCue(),this._wasReplaced=!1,cancelAnimationFrame(this._timer);return}e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}}ke(ht,"styles",[vn]);customElements.define(ht.is,ht);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const yn=Oe`
  .exit-warning__message {
    background-color: var(--bg-color);
    overflow: hidden;
    padding: var(--spacing-normal) var(--spacing-normal) var(--spacing-l);
  }
`;class ft extends Me{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return de`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&Kt(this._messageTemplate(de,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}}ke(ft,"styles",[yn]);customElements.define(ft.is,ft);function wn(o){const e=o.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const i=e[t];if(i.hasAttribute&&i.hasAttribute("target")&&i!==document.body)return i}}function Pt(o){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:o},window.location.origin),!0):(new URL(o).hostname===window.location.hostname?window.location.href=o:(e.targetUrl=o,e.open()),!0):!1}function kn(o){if(o.metaKey||o.ctrlKey)return;const e=wn(o);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const t=e.getAttribute("href");Pt(t)&&(o.preventDefault(),o.stopPropagation())}}function Sn(o){o.origin!==window.location.origin||o.data.action===void 0||o.data.action!=="toujou-exit-warning"||!o.data.targetUrl||Pt(o.data.targetUrl)}document.addEventListener("click",kn);window.addEventListener("message",Sn);const Tn=Oe`
  * {
    box-sizing: border-box;
  }

  :host {
    --toujou-spinner-size: 5rem;
    --toujou-spinner-thickness: 4;
    --toujou-spinner-start-color: var(--color-primary-light);
    --toujou-spinner-end-color: var(--color-primary-dark);
    --toujou-spinner-animation-duration: 2s;
    --toujou-spinner-dash-animation-duration: 1.4s;
    --toujou-spinner-display: inline-flex;
    --toujou-spinner-align-items: center;
    --toujou-spinner-justify-content: center;
    --toujou-spinner-position: relative;
    --toujou-spinner-top: unset;
    --toujou-spinner-left: unset;
    --toujou-spinner-transform: unset;
    --toujou-spinner-z-index: auto;
    
    width: var(--toujou-spinner-size);
    height: var(--toujou-spinner-size);
    display: var(--toujou-spinner-display);
    align-items: var(--toujou-spinner-align-items);
    justify-content: var(--toujou-spinner-justify-content);
    position: var(--toujou-spinner-position);
    top: var(--toujou-spinner-top);
    left: var(--toujou-spinner-left);
    transform: var(--toujou-spinner-transform);
    z-index: var(--toujou-spinner-z-index);
  }

  :host([centered-on-page]) {
    --toujou-spinner-position: fixed;
    --toujou-spinner-top: 50%;
    --toujou-spinner-left: 50%;
    --toujou-spinner-transform: translate(-50%, -50%);
    --toujou-spinner-z-index: var(--z-index-spinner, 75);
  }

  .spinner__spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .spinner__svg {
    animation: rotationAnimation var(--toujou-spinner-animation-duration) linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .spinner__circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dashAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite,
    colorAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: var(--toujou-spinner-thickness);
    fill: none;
  }

  @keyframes rotationAnimation {
    100% {
      transform: rotate(360deg);
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

  @keyframes colorAnimation {
    0%, 20% {
      stroke: var(--toujou-spinner-start-color);
    }
    80%, 100% {
      stroke: var(--toujou-spinner-end-color);
    }
  }

`;class mt extends Me{static get is(){return"toujou-spinner"}static get styles(){return styles}render(){return de`
      <svg class="spinner__svg" viewBox="25 25 50 50">
        <circle class="spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}ke(mt,"styles",[Tn]);customElements.define(mt.is,mt);const En=Oe`
  :host {
    display: var(--toujou-consent-display, block);
  }
`;class pt extends Me{static get is(){return"toujou-consent"}render(){return de`
      <slot id="content"></slot>
    `}static get styles(){return styles}static get properties(){return{consentState:{type:Boolean},listenTo:{type:String},listenOn:{type:String}}}set consentState(e){this.consentInputType==="checkbox"&&(this.querySelector(".consent__checkbox").checked=e)}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}constructor(e){super(e),this._handleEvent=this._handleEvent.bind(this),this.listenOn="*",this._consentType=this.getAttribute("consenttype"),this._consentInputType=this._getConsentInputType(),this.consentState=null}connectedCallback(){super.connectedCallback()}_handleEvent(e){e.type==="click"?this._dispatchClickEvent():e.type==="change"&&this._dispatchChangeEvent()}firstUpdated(){this._dispatchReadyEvent()}_dispatchChangeEvent(){const e=new CustomEvent("toujou-consent-checkbox-changed",{bubbles:!0,composed:!0,detail:{consentElement:this}});this.dispatchEvent(e)}_dispatchClickEvent(){const e=new CustomEvent("toujou-consent-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchReadyEvent(){const e=new CustomEvent("toujou-consent-connected",{bubbles:!0,composed:!0,detail:{consentType:this._consentType}});this.dispatchEvent(e)}_getConsentInputType(){const e=this.querySelectorAll(".consent__checkbox"),t=this.querySelectorAll(".consent__button");e.length>0?this.consentInputType="checkbox":t.length>0&&(this.consentInputType="button")}}ke(pt,"styles",[En]);customElements.define(pt.is,pt);function ne(o){return"Minified Redux error #"+o+"; visit https://redux.js.org/Errors?code="+o+" for the full message or use the non-minified dev environment for full errors. "}var Et=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),lt=function(){return Math.random().toString(36).substring(7).split("").join(".")},_t={INIT:"@@redux/INIT"+lt(),REPLACE:"@@redux/REPLACE"+lt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+lt()}};function _n(o){if(typeof o!="object"||o===null)return!1;for(var e=o;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(o)===e}function zt(o,e,t){var i;if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ne(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ne(1));return t(zt)(o,e)}if(typeof o!="function")throw new Error(ne(2));var l=o,y=e,B=[],D=B,R=!1;function O(){D===B&&(D=B.slice())}function X(){if(R)throw new Error(ne(3));return y}function be(E){if(typeof E!="function")throw new Error(ne(4));if(R)throw new Error(ne(5));var q=!0;return O(),D.push(E),function(){if(!!q){if(R)throw new Error(ne(6));q=!1,O();var J=D.indexOf(E);D.splice(J,1),B=null}}}function s(E){if(!_n(E))throw new Error(ne(7));if(typeof E.type>"u")throw new Error(ne(8));if(R)throw new Error(ne(9));try{R=!0,y=l(y,E)}finally{R=!1}for(var q=B=D,ce=0;ce<q.length;ce++){var J=q[ce];J()}return E}function oe(E){if(typeof E!="function")throw new Error(ne(10));l=E,s({type:_t.REPLACE})}function ae(){var E,q=be;return E={subscribe:function(J){if(typeof J!="object"||J===null)throw new Error(ne(11));function $(){J.next&&J.next(X())}$();var Ie=q($);return{unsubscribe:Ie}}},E[Et]=function(){return this},E}return s({type:_t.INIT}),i={dispatch:s,subscribe:be,getState:X,replaceReducer:oe},i[Et]=ae,i}function Cn(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,l){return function(){return i(l.apply(void 0,arguments))}})}const Bt={setItem(o,e){document.cookie=`${o}=${e};path=/;`},getItem(o){const e=`${o}=`,t=document.cookie.split(";");for(let i=0,l=t.length;i<l;i++){let y=t[i];for(;y.charAt(0)===" ";)y=y.substring(1,y.length);if(y.indexOf(e)===0)return y.substring(e.length,y.length)}return null}},Ct=(o,e,t)=>{try{const i=JSON.stringify(o);e.setItem(t,i);return}catch(i){console.error(`There was an error while saving the consents data to storage: Error: ${i}`)}},jt=(o,e)=>{try{const t=o.getItem(e);return t===null?{}:JSON.parse(t)}catch(t){return console.error(`There was a problem loading the consents data from storage. Error: ${t}`),{}}},jn=()=>{const o=jt(Bt,"consentsState"),e=jt(localStorage,"consentsState"),t={};return t.consents={...o.consents,...e.consents},t},xn=o=>{const e={},t={};for(const i in o)i==="consentBoxDismissed"?t[i]=o[i]:i==="tracking"&&o[i].consentLifetime===0?e[i]=o[i]:i==="tracking"&&o[i].consentLifetime>0?t[i]=o[i]:o[i].consentLifetime===0?e[i]=o[i]:o[i].consentLifetime>0&&(t[i]=o[i]);Ct({consents:e},Bt,"consentsState"),Ct({consents:t},localStorage,"consentsState")},On=o=>{for(const e in o){if(e!=="consents"){console.error('Unknown data "key" found while saving to session / local Storage');return}xn(o.consents)}},Dt="CLEAR_CONSENT_TYPE_DATA",Wt="SAVE_ALL_CONSENTS",Ht="SAVE_SINGLE_CONSENT",Vt="DISMISS_CONSENT_BOX",qt="UNDISMISS_CONSENT_BOX",Mn={consents:{consentBoxDismissed:!1}},In=o=>({type:Dt,payload:o}),An=o=>({type:Wt,payload:o}),Rn=(o,e)=>({type:Ht,payload:{consentType:o,consentData:e}}),Ln=()=>({type:Vt}),Fn=()=>({type:qt});function Nn(o,e){switch(e.type){case Dt:{const t={...o.consents};return delete t[e.payload],{...o,consents:t}}case Wt:{const t={...o.consents,...e.payload};return{...o,consents:t}}case Ht:{const t={...o.consents};return t[e.payload.consentType]={...e.payload.consentData},{...o,consents:t}}case Vt:{const t={...o.consents};return t.consentBoxDismissed=!0,{...o,consents:t}}case qt:{const t={...o.consents};return t.consentBoxDismissed=!1,{...o,consents:t}}}return o}let xt=!1;function Pn(o=Mn,e){const t=Nn(o,e);return On(t),typeof window.dataLayer=="object"&&(!xt||t.consents.consentBoxDismissed!==void 0&&t.consents.consentBoxDismissed)&&(window.dataLayer.push({event:"consent-changed",...t.consents}),xt=!0),t}function zn(){const e=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||Cn)(),t=jn();return zt(Pn,t,e)}const Ut=zn(),Bn=Oe`
  :host {
    display: var(--toujou-consent-widget-display, block);
  }
`;class gt extends Me{static get is(){return"toujou-consent-widget"}render(){return de`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `}static get styles(){return styles}set _warningVisible(e){this.setAttribute("warningvisible",e)}static get properties(){return{inPage:{type:Boolean,attribute:"in-page"},listenTo:{type:String},listenOn:{type:String},_warningVisible:{type:Boolean},deactivated:{type:Boolean}}}set listenTo(e){e.split(/\s+/).forEach(t=>{this.addEventListener(t,this._handleEvent)})}set _dismissedBox(e){this.inPage||(e?this.setAttribute("hidden",""):this.removeAttribute("hidden")),this._warningVisible=this.inPage&&!e}constructor(e){super(e),this.onStateChange=this.onStateChange.bind(this),this._handleEvent=this._handleEvent.bind(this),this.inPage=!1,this.deactivated=!1,this.store=Ut,this.store.subscribe(this.onStateChange),this.consentTypeNames=["tracking","html","maps","video"],this._state=this.store.getState(),this.listenOn="*",this._warningVisible=this.inPage,window.location.hash==="#aaa"&&(this.deactivated=!0),this.addEventListener("toujou-consent-connected",this._handleConsentConnected),this.addEventListener("toujou-consent-checkbox-changed",this._handleConsentCheckboxChanged)}connectedCallback(){super.connectedCallback(),this._inPage=this.inPage,this._dismissedBox=this._state.consents.consentBoxDismissed?this._state.consents.consentBoxDismissed:!1,this.deactivated&&setTimeout(()=>{this._prepareToSaveConsents(),this._dismissConsentBox(),this._dispatchConsentDeactivated()})}firstUpdated(){this.consentTypeNames.forEach(e=>{const t=this.querySelector(`toujou-consent[consenttype="${e}"]`);this._state.consents.consentBoxDismissed&&!this._state.consents[e]&&t&&this._undismissConsentBox()})}onStateChange(){this._state=this.store.getState(),this._dismissedBox=this._state.consents.consentBoxDismissed,this._updateAllConsentElementsStates()}_handleEvent(e){e.stopPropagation(),e.type==="click"&&!this._inPage&&e.target.matches(this.listenOn)&&this._handleConsentBoxSaveButtonClick(e.target)}_handleConsentCheckboxChanged(e){this.inPage&&this._state.consents.consentBoxDismissed===!0&&(this._prepareToSaveConsents(),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))}_handleConsentBoxSaveButtonClick(e){this._prepareToSaveConsents(e.hasAttribute("accept-all")?!0:null),this._dismissConsentBox()}_prepareToSaveConsents(e=null){const t=this._getAllConsents(e);this._saveAllConsents(t)}_getAllConsents(e=null){const t={},i=this.querySelectorAll("toujou-consent");return i&&i.forEach(l=>{const y=l.getAttribute("consenttype");t[y]=this._createNewConsentData(l,e)}),t}_createNewConsentData(e,t=null){const i=e.querySelector(".consent__checkbox");t!==null&&(i.checked=t);const l=this._createConsentLifeInMillis(e.getAttribute("consenttype"),e.getAttribute("consentlifetime"));return{consentGiven:i.checked,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+l,consentLifetime:l}}_createConsentLifeInMillis(e,t){return e==="tracking"?t==="0"?24*60*60*1e3*730:0:t*24*60*60}_dismissConsentBox(){this.store.dispatch(Ln()),this._dispatchConsentWidgetDismissedEvent()}_undismissConsentBox(){this.store.dispatch(Fn())}_saveAllConsents(e){this.store.dispatch(An(e))}_handleConsentConnected(e){this._setConsentElementState(e.target)}_setConsentElementState(e){if(e.tagName==="TOUJOU-CONSENT"){const t=e.getAttribute("consenttype"),i=e.getAttribute("prechecked")==="1";e.consentState=this._getConsentTypeState(this._state,t,i)}}_updateAllConsentElementsStates(){this.querySelectorAll("toujou-consent").forEach(t=>{this._setConsentElementState(t)})}_getConsentTypeState(e,t,i){let l=null;return!e||!e.consents||!e.consents[t]?l=null:l=e.consents[t],l?l&&this._isConsentExpired(l)?(this.store.dispatch(In(t)),this._dispatchConsentExpiredEvent(t),this._undismissConsentBox(),i):l&&!this._isConsentExpired(l)?l.consentGiven:l:i}_isConsentExpired(e){return e.consentCreationDate+e.consentLifetime>e.consentExpirationDate}_dispatchConsentExpiredEvent(e){const t=new CustomEvent("toujou-consent-expired",{bubbles:!0,composed:!0,detail:{consentType:e}});this.dispatchEvent(t)}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_dispatchConsentWidgetDismissedEvent(){const e=new CustomEvent("toujou-consent-widget-dismissed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchConsentDeactivated(){const e=new CustomEvent("toujou-consent-widget-deactivated",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}ke(gt,"styles",[Bn]);customElements.define(gt.is,gt);const Dn=Oe`
  :host {
    display: var(--toujou-third-party-content-display, flex);
    align-items: var(--toujou-third-party-content-align-items, stretch);
    justify-content: var(--toujou-third-party-content-justify-content, center);
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
`;class bt extends Me{static get is(){return"toujou-third-party-content"}static get styles(){return styles}render(){return de`
      <slot id="templatedContent" @slotchange="${this._handleSlotChange}"></slot>
      <div @click="${this._handlePlaceholderClick}">
        <slot name="placeholder" id="placeholderContainer" class="placeholder-slot"></slot>
      </div>
    `}static get properties(){return{contentType:{type:String},contentTypeAllowed:{type:Boolean},contentID:{type:String},isIntersecting:{type:Boolean},show:{type:Boolean}}}constructor(e){super(e),this.onStateChange=this.onStateChange.bind(this),this._handleConsentButtonClick=this._handleConsentButtonClick.bind(this),this.store=Ut,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.contentTypeAllowed=!1,this.isIntersecting=!1,this.show=!1}connectedCallback(){super.connectedCallback(),this._isContentTypeAllowed(),this._checkIfShouldShow(),this._addEventListeners(),this._addIntersectionObserver()}updated(e){e.forEach((t,i)=>{i==="isIntersecting"&&this.isIntersecting&&!this.show&&(this.show=!0,this._checkIfShouldShow())})}onStateChange(){this._state=this.store.getState(),this._isContentTypeAllowed(),this._checkIfShouldShow()}_addEventListeners(){window.addEventListener("toujou-consent-widget-dismissed",()=>{this._isContentTypeAllowed(),this._checkIfShouldShow()}),window.addEventListener("toujou-consent-button-clicked",this._handleConsentButtonClick)}_handleConsentButtonClick(e){const t=e.target;this.querySelectorAll(".consent").forEach(l=>{l===t&&(this._saveSingleConsent(e.target.getAttribute("consenttype"),this._createNewConsentData(e.target)),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))})}_createNewConsentData(e){const i=e.getAttribute("consentLifetime")*24*60*60;return{consentGiven:!0,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+i,consentLifetime:i}}_saveSingleConsent(e,t){this.store.dispatch(Rn(e,t))}_dispatchAddSnackbar(e){const t=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(t)}_handlePlaceholderClick(e){e.target.hasAttribute("ttpc-showcontentonce")&&this._handleShowContentOnceClick()}_handleShowContentOnceClick(){this._showContent()}_addIntersectionObserver(){new IntersectionObserver((t,i)=>{this.isIntersecting=t[0].isIntersecting,this.isIntersecting&&i.unobserve(this)}).observe(this)}_appendNonScriptTag(e){this.querySelector(".toujou-third-party-content__templated-content").appendChild(e)}_appendScriptTag(e){const t=document.createElement("script"),i=this._copyScriptAttributesAndContent(e,t);return this.querySelector(".toujou-third-party-content__templated-content").appendChild(i),!i.hasAttribute("src")||i.hasAttribute("async")||i.hasAttribute("defer")?new Promise(l=>{l()}):new Promise(l=>{i.addEventListener("load",l)})}async _appendTags(e){for(let t=0;t<e.length;t++)await new Promise(i=>{e[t].tagName!=="SCRIPT"?i(this._appendNonScriptTag(e[t])):i(this._appendScriptTag(e[t]))})}_checkIfShouldShow(){this.contentTypeAllowed&&this.show&&this._showContent()}_clearRenderedContent(){this.querySelector(".toujou-third-party-content__templated-content").innerHTML=""}_copyScriptAttributesAndContent(e,t){for(let i=0;i<e.attributes.length;i++){const l=e.attributes[i];t.setAttribute(l.name,l.value)}return t.innerHTML=e.innerHTML,t}_getTemplateTags(e){const t=[],i=document.createElement("div");i.innerHTML=e;for(const l in i.childNodes)i.childNodes[l].nodeType!==3&&i.childNodes[l].parentElement===i&&t.push(i.childNodes[l]);return t}_handleSlotChange(){this._checkIfShouldShow()}_isCommentedTemplate(e){return e.startsWith("<!--")&&e.endsWith("-->")}_isContentTypeAllowed(){this._state.consents[this.contentType]?this.contentTypeAllowed=this._state.consents[this.contentType].consentGiven||!1:this.contentTypeAllowed=!1,window.location.hash==="#aaa"&&(this.contentTypeAllowed=!0)}_showContent(){this._clearRenderedContent(),this.shadowRoot.querySelector("#templatedContent").assignedNodes({flatten:!0}).filter(t=>t.tagName==="TEMPLATE").forEach(t=>{if(this.contentType==="html"){const i=this._uncommentTemplate(t),l=this._getTemplateTags(i);this._appendTags(l)}else{const i=document.importNode(t.content,!0);this.querySelector(".toujou-third-party-content__templated-content").appendChild(i)}}),this.setAttribute("showingcontent","")}_uncommentTemplate(e){return this._isCommentedTemplate(e.innerHTML)?e.innerHTML.substr(4,e.innerHTML.length-7):null}}ke(bt,"styles",[Dn]);customElements.define(bt.is,bt);
//# sourceMappingURL=base.js.map
