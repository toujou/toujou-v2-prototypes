var Bt=Object.defineProperty;var Wt=(s,e,r)=>e in s?Bt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var ut=(s,e,r)=>(Wt(s,typeof e!="symbol"?e+"":e,r),r);import{i as nt,s as ot,y as xe,Z as qt}from"./lit-element-6fe74b4f.js";import"./query-assigned-elements-acf341e1.js";let lt=0,xt=0;const zt=getComputedStyle(document.documentElement),Vt=".topbar, .inpage-nav, .navigation--inpage";function Dt(){const s=parseInt(zt.getPropertyValue("--toujou-scroll-padding-offset"));s&&(lt+=s);const e=Array.from(document.querySelectorAll(Vt));e&&(e.forEach(r=>{xt+=r.offsetHeight}),lt+=xt),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${lt}px`)}function Mt(){zt.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||Dt()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{Mt()}):document.addEventListener("DOMContentLoaded",()=>{Mt()});function Ut(s){if(Array.isArray(s)){for(var e=0,r=Array(s.length);e<s.length;e++)r[e]=s[e];return r}else return Array.from(s)}var it=!1;if(typeof window<"u"){var Et={get passive(){it=!0}};window.addEventListener("testPassive",null,Et),window.removeEventListener("testPassive",null,Et)}var _e=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Pe=!1,wt=-1,Je=void 0,Te=void 0,Ke=void 0,It=function(e){return de.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},Xe=function(e){var r=e||window.event;return It(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},Yt=function(e){if(Ke===void 0){var r=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(r&&c>0){var y=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Ke=document.body.style.paddingRight,document.body.style.paddingRight=y+c+"px"}}Je===void 0&&(Je=document.body.style.overflow,document.body.style.overflow="hidden")},Ct=function(){Ke!==void 0&&(document.body.style.paddingRight=Ke,Ke=void 0),Je!==void 0&&(document.body.style.overflow=Je,Je=void 0)},Jt=function(){return window.requestAnimationFrame(function(){if(Te===void 0){Te={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,c=e.scrollX,y=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var S=y-window.innerHeight;S&&r>=y&&(document.body.style.top=-(r+S))})},300)}})},At=function(){if(Te!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=Te.position,document.body.style.top=Te.top,document.body.style.left=Te.left,window.scrollTo(r,e),Te=void 0}},Kt=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Xt=function(e,r){var c=e.targetTouches[0].clientY-wt;return It(e.target)?!1:r&&r.scrollTop===0&&c>0||Kt(r)&&c<0?Xe(e):(e.stopPropagation(),!0)},Gt=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(y){return y.targetElement===e})){var c={targetElement:e,options:r||{}};de=[].concat(Ut(de),[c]),_e?Jt():Yt(r),_e&&(e.ontouchstart=function(y){y.targetTouches.length===1&&(wt=y.targetTouches[0].clientY)},e.ontouchmove=function(y){y.targetTouches.length===1&&Xt(y,e)},Pe||(document.addEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!0))}},Qt=function(){_e&&(de.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Pe&&(document.removeEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!1),wt=-1),_e?At():Ct(),de=[]},$t=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(r){return r.targetElement!==e}),_e&&(e.ontouchstart=null,e.ontouchmove=null,Pe&&de.length===0&&(document.removeEventListener("touchmove",Xe,it?{passive:!1}:void 0),Pe=!1)),_e?At():Ct()},mt={},Zt={get exports(){return mt},set exports(s){mt=s}},rt={},gt={},en={get exports(){return gt},set exports(s){gt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=0,c=!1,y=!1,S="message",U=S.length,$="[iFrameSizer]",q=$.length,z=null,Y=window.requestAnimationFrame,Le={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){D("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(n,a,g){n.addEventListener(a,g,!1)}function Ge(n,a,g){n.removeEventListener(a,g,!1)}function pe(){var n=["moz","webkit","o","ms"],a;for(a=0;a<n.length&&!Y;a+=1)Y=window[n[a]+"RequestAnimationFrame"];Y?Y=Y.bind(window):v("setup","RequestAnimationFrame not supported")}function ae(n){var a="Host page: "+n;return window.top!==window.self&&(a=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),a}function Qe(n){return $+"["+ae(n)+"]"}function Me(n){return i[n]?i[n].log:c}function v(n,a){he("log",n,a,Me(n))}function be(n,a){he("info",n,a,Me(n))}function D(n,a){he("warn",n,a,!0)}function he(n,a,g,d){d===!0&&typeof window.console=="object"&&console[n](Qe(a),g)}function $e(n){function a(){function l(){ge(x),we(m),ce("onResized",x)}w("Height"),w("Width"),Be(l,x,"init")}function g(){var l=V.substr(q).split(":"),p=l[1]?parseInt(l[1],10):0,M=i[l[0]]&&i[l[0]].iframe,j=getComputedStyle(M);return{iframe:M,id:l[0],height:p+d(j)+k(j),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,M=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+M}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,M=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+M}function w(l){var p=Number(i[m]["max"+l]),M=Number(i[m]["min"+l]),j=l.toLowerCase(),O=Number(x[j]);v(m,"Checking "+j+" is in range "+M+"-"+p),O<M&&(O=M,v(m,"Set "+j+" to min value")),O>p&&(O=p,v(m,"Set "+j+" to max value")),x[j]=""+O}function X(){function l(){function j(){var H=0,ee=!1;for(v(m,"Checking connection is from allowed list of origins: "+M);H<M.length;H++)if(M[H]===p){ee=!0;break}return ee}function O(){var H=i[m]&&i[m].remoteHost;return v(m,"Checking connection is from: "+H),p===H}return M.constructor===Array?j():O()}var p=n.origin,M=i[m]&&i[m].checkOrigin;if(M&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+x.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return $===(""+V).substr(0,q)&&V.substr(q).split(":")[0]in i}function J(){var l=x.type in{true:1,false:1,undefined:1};return l&&v(m,"Ignoring init message from meta parent page"),l}function Z(l){return V.substr(V.indexOf(":")+U+l)}function ne(l){v(m,"onMessage passed: {iframe: "+x.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:x.iframe,message:JSON.parse(l)}),v(m,"--")}function _(){var l=document.body.getBoundingClientRect(),p=x.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function je(l,p){function M(){I("Send Page Info","pageInfo:"+_(),l,p)}qe(M,32,p)}function Fe(){function l(O,H){function ee(){i[j]?je(i[j].iframe,j):p()}["scroll","resize"].forEach(function(oe){v(j,O+oe+" listener for sendPageInfo"),H(window,oe,ee)})}function p(){l("Remove ",Ge)}function M(){l("Add ",re)}var j=m;M(),i[j]&&(i[j].stopPageInfo=p)}function Re(){i[m]&&i[m].stopPageInfo&&(i[m].stopPageInfo(),delete i[m].stopPageInfo)}function ze(){var l=!0;return x.iframe===null&&(D(m,"IFrame ("+x.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return Ee(m),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function h(l){function p(){z=H,A(),v(m,"--")}function M(){return{x:Number(x.width)+O.x,y:Number(x.height)+O.y}}function j(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):D(m,"Unable to scroll to requested position, window.parentIFrame not found")}var O=l?f(x.iframe):{x:0,y:0},H=M();v(m,"Reposition requested from iFrame (offset x:"+O.x+" y:"+O.y+")"),window.top!==window.self?j():p()}function A(){ce("onScroll",z)!==!1?we(m):He()}function N(l){function p(){var ee=f(H);v(m,"Moving to in page link (#"+j+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},A(),v(m,"--")}function M(){window.parentIFrame?window.parentIFrame.moveToAnchor(j):v(m,"In page link #"+j+" not found and window.parentIFrame not found")}var j=l.split("#")[1]||"",O=decodeURIComponent(j),H=document.getElementById(O)||document.getElementsByName(O)[0];H?p():window.top!==window.self?M():v(m,"In page link #"+j+" not found")}function K(l){var p={};if(Number(x.width)===0&&Number(x.height)===0){var M=Z(9).split(":");p={x:M[1],y:M[0]}}else p={x:x.width,y:x.height};ce(l,{iframe:x.iframe,screenX:Number(p.x),screenY:Number(p.y),type:x.type})}function ce(l,p){return ve(m,l,p)}function De(){switch(i[m]&&i[m].firstRun&&Ye(),x.type){case"close":se(x.iframe);break;case"message":ne(Z(6));break;case"mouseenter":K("onMouseEnter");break;case"mouseleave":K("onMouseLeave");break;case"autoResize":i[m].autoResize=JSON.parse(Z(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":je(i[m]&&i[m].iframe,m),Fe();break;case"pageInfoStop":Re();break;case"inPageLink":N(Z(9));break;case"reset":me(x);break;case"init":a(),ce("onInit",x.iframe);break;default:Number(x.width)===0&&Number(x.height)===0?D("Unsupported message received ("+x.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):a()}}function Ie(l){var p=!0;return i[l]||(p=!1,D(x.type+" No settings for "+l+". Message was: "+V)),p}function Ue(){for(var l in i)I("iFrame requested init",Ze(l),i[l].iframe,l)}function Ye(){i[m]&&(i[m].firstRun=!1)}var V=n.data,x={},m=null;V==="[iFrameResizerChild]Ready"?Ue():le()?(x=g(),m=x.id,i[m]&&(i[m].loaded=!0),!J()&&Ie(m)&&(v(m,"Received: "+V),ze()&&X()&&De())):be(m,"Ignored: "+V)}function ve(n,a,g){var d=null,k=null;if(i[n])if(d=i[n][a],typeof d=="function")k=d(g);else throw new TypeError(a+" on iFrame["+n+"] is not a function");return k}function Ne(n){var a=n.id;delete i[a]}function se(n){var a=n.id;if(ve(a,"onClose",a)===!1){v(a,"Close iframe cancelled by onClose event");return}v(a,"Removing iFrame: "+a);try{n.parentNode&&n.parentNode.removeChild(n)}catch(g){D(g)}ve(a,"onClosed",a),v(a,"--"),Ne(n)}function Ee(n){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},v(n,"Get page position: "+z.x+","+z.y))}function we(n){z!==null&&(window.scrollTo(z.x,z.y),v(n,"Set page position: "+z.x+","+z.y),He())}function He(){z=null}function me(n){function a(){ge(n),I("reset","reset",n.iframe,n.id)}v(n.id,"Size reset requested by "+(n.type==="init"?"host page":"iFrame")),Ee(n.id),Be(a,n,"reset")}function ge(n){function a(w){if(!n.id){v("undefined","messageData id not set");return}n.iframe.style[w]=n[w]+"px",v(n.id,"IFrame ("+k+") "+w+" set to "+n[w]+"px")}function g(w){!y&&n[w]==="0"&&(y=!0,v(k,"Hidden iFrame detected, creating visibility listener"),et())}function d(w){a(w),g(w)}var k=n.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function Be(n,a,g){g!==a.type&&Y&&!window.jasmine?(v(a.id,"Requesting animation frame"),Y(n)):n()}function I(n,a,g,d,k){function w(){var ne=i[d]&&i[d].targetOrigin;v(d,"["+n+"] Sending msg to iframe["+d+"] ("+a+") targetOrigin: "+ne),g.contentWindow.postMessage($+a,ne)}function X(){D(d,"["+n+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?w():X()}function J(){function ne(){i[d]&&!i[d].loaded&&!Z&&(Z=!0,D(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}k&&i[d]&&i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(ne,i[d].warningTimeout))}var Z=!1;d=d||g.id,i[d]&&(le(),J())}function Ze(n){return n+":"+i[n].bodyMarginV1+":"+i[n].sizeWidth+":"+i[n].log+":"+i[n].interval+":"+i[n].enablePublicMethods+":"+i[n].autoResize+":"+i[n].bodyMargin+":"+i[n].heightCalculationMethod+":"+i[n].bodyBackground+":"+i[n].bodyPadding+":"+i[n].tolerance+":"+i[n].inPageLinks+":"+i[n].resizeFrom+":"+i[n].widthCalculationMethod+":"+i[n].mouseEvents}function We(n){return typeof n=="number"}function Se(n,a){function g(){function h(N){var K=i[f][N];K!==1/0&&K!==0&&(n.style[N]=We(K)?K+"px":K,v(f,"Set "+N+" = "+n.style[N]))}function A(N){if(i[f]["min"+N]>i[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}A("Height"),A("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=a&&a.id||fe.id+r++;return document.getElementById(h)!==null&&(h+=r++),h}function k(h){return h===""&&(n.id=h=d(),c=(a||{}).log,v(h,"Added missing iframe ID: "+h+" ("+n.src+")")),h}function w(){switch(v(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),n.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=i[f]?i[f].scrolling:"no"}}function X(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function le(){var h=i[f]&&i[f].firstRun,A=i[f]&&i[f].heightCalculationMethod in Le;!h&&A&&me({iframe:n,height:0,width:0,type:"init"})}function J(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:Ne.bind(null,i[f].iframe),resize:I.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(h){I("Move to anchor","moveToAnchor:"+h,i[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),I("Send Message","message:"+h,i[f].iframe,f)}})}function Z(h){function A(){I("iFrame.onload",h,n,e,!0),le()}function N(ce){if(n.parentNode){var De=new ce(function(Ie){Ie.forEach(function(Ue){var Ye=Array.prototype.slice.call(Ue.removedNodes);Ye.forEach(function(V){V===n&&se(n)})})});De.observe(n.parentNode,{childList:!0})}}var K=L();K&&N(K),re(n,"load",A),I("init",h,n,e,!0)}function ne(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function _(h){for(var A in fe)Object.prototype.hasOwnProperty.call(fe,A)&&(i[f][A]=Object.prototype.hasOwnProperty.call(h,A)?h[A]:fe[A])}function je(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Fe(h){var A=h.split("Callback");if(A.length===2){var N="on"+A[0].charAt(0).toUpperCase()+A[0].slice(1);this[N]=this[h],delete this[h],D(f,"Deprecated: '"+h+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Re(h){h=h||{},i[f]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("/").slice(0,3).join("/")},ne(h),Object.keys(h).forEach(Fe,h),_(h),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?je(i[f].remoteHost):"*")}function ze(){return f in i&&"iFrameResizer"in n}var f=k(n.id);ze()?D(f,"Ignored iFrame, already setup."):(Re(a),w(),g(),X(),Z(Ze(f)),J())}function ye(n,a){ie===null&&(ie=setTimeout(function(){ie=null,n()},a))}var ke={};function qe(n,a,g){ke[g]||(ke[g]=setTimeout(function(){ke[g]=null,n()},a))}function et(){function n(){function k(w){function X(J){return(i[w]&&i[w].iframe.style[J])==="0px"}function le(J){return J.offsetParent!==null}i[w]&&le(i[w].iframe)&&(X("height")||X("width"))&&I("Visibility change","resize",i[w].iframe,w)}Object.keys(i).forEach(function(w){k(w)})}function a(k){v("window","Mutation observed: "+k[0].target+" "+k[0].type),ye(n,16)}function g(){var k=document.querySelector("body"),w={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},X=new d(a);X.observe(k,w)}var d=L();d&&g()}function tt(n){function a(){ue("Window "+n,"resize")}v("window","Trigger event: "+n),ye(a,16)}function Ve(){function n(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(v("document","Trigger event: Visiblity change"),ye(n,16))}function ue(n,a){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&I(n,a,i[d].iframe,d)})}function at(){re(window,"message",$e),re(window,"resize",function(){tt("resize")}),re(document,"visibilitychange",Ve),re(document,"-webkit-visibilitychange",Ve)}function Oe(){function n(d,k){function w(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(w(),Se(k,d),g.push(k))}function a(d){d&&d.enablePublicMethods&&D("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return pe(),at(),function(k,w){switch(g=[],a(k),typeof w){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(w||"iframe"),n.bind(e,k));break;case"object":n(k,w);break;default:throw new TypeError("Unexpected data type ("+typeof w+")")}return g}}function st(n){n.fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(g){function d(k,w){Se(w,g)}return this.filter("iframe").each(d).end()}):be("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&st(window.jQuery),typeof e=="function"&&e.amd?e([],Oe):s.exports=Oe(),window.iFrameResize=window.iFrameResize||Oe()})()})(en);var pt={},tn={get exports(){return pt},set exports(s){pt=s}};(function(s){(function(e){if(typeof window>"u")return;var r=!0,c=10,y="",S=0,U="",$=null,q="",z=!1,Y={resize:1,click:1},Le=128,i=!0,ie=1,fe="bodyOffset",L=fe,re=!0,Ge="",pe={},ae=32,Qe=null,Me=!1,v=!1,be="[iFrameSizer]",D=be.length,he="",$e={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",Ne=window.parent,se="*",Ee=0,we=!1,He=null,me=16,ge=1,Be="scroll",I=Be,Ze=window,We=function(){g("onMessage function not defined")},Se=function(){},ye=function(){},ke={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},qe={},et=!1;function tt(){}try{var Ve=Object.create({},{passive:{get:function(){et=!0}}});window.addEventListener("test",tt,Ve),window.removeEventListener("test",tt,Ve)}catch{}function ue(t,o,u,b){t.addEventListener(o,u,et?b||{}:!1)}function at(t,o,u){t.removeEventListener(o,u,!1)}function Oe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function st(t){var o,u,b,E=null,P=0,W=function(){P=Date.now(),E=null,b=t.apply(o,u),E||(o=u=null)};return function(){var B=Date.now();P||(P=B);var F=me-(B-P);return o=this,u=arguments,F<=0||F>me?(E&&(clearTimeout(E),E=null),P=B,b=t.apply(o,u),E||(o=u=null)):E||(E=setTimeout(W,F)),b}}function n(t){return be+"["+he+"] "+t}function a(t){Me&&typeof window.console=="object"&&console.log(n(t))}function g(t){typeof window.console=="object"&&console.warn(n(t))}function d(){k(),a("Initialising iFrame ("+window.location.href+")"),X(),Z(),J("background",y),J("padding",q),N(),Re(),ze(),ne(),De(),ce(),f(),pe=K(),oe("init","Init message from host page"),Se()}function k(){function t(u){return u==="true"}var o=Ge.substr(D).split(":");he=o[0],S=e!==o[1]?Number(o[1]):S,z=e!==o[2]?t(o[2]):z,Me=e!==o[3]?t(o[3]):Me,ae=e!==o[4]?Number(o[4]):ae,r=e!==o[6]?t(o[6]):r,U=o[7],L=e!==o[8]?o[8]:L,y=o[9],q=o[10],Ee=e!==o[11]?Number(o[11]):Ee,pe.enable=e!==o[12]?t(o[12]):!1,ve=e!==o[13]?o[13]:ve,I=e!==o[14]?o[14]:I,v=e!==o[15]?Boolean(o[15]):v}function w(t){var o=t.split("Callback");if(o.length===2){var u="on"+o[0].charAt(0).toUpperCase()+o[0].slice(1);this[u]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function X(){function t(){var u=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(w,u),We="onMessage"in u?u.onMessage:We,Se="onReady"in u?u.onReady:Se,se="targetOrigin"in u?u.targetOrigin:se,L="heightCalculationMethod"in u?u.heightCalculationMethod:L,I="widthCalculationMethod"in u?u.widthCalculationMethod:I}function o(u,b){return typeof u=="function"&&(a("Setup custom "+b+"CalcMethod"),ke[b]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=o(L,"height"),I=o(I,"width")),a("TargetOrigin for parent set to: "+se)}function le(t,o){return o.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),o=""),o}function J(t,o){e!==o&&o!==""&&o!=="null"&&(document.body.style[t]=o,a("Body "+t+' set to "'+o+'"'))}function Z(){e===U&&(U=S+"px"),J("margin",le("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function _(t){var o={add:function(u){function b(){oe(t.eventName,t.eventType)}qe[u]=b,ue(window,u,b,{passive:!0})},remove:function(u){var b=qe[u];delete qe[u],at(window,u,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(o[t.method])):o[t.method](t.eventName),a(Oe(t.method)+" event listener: "+t.eventType)}function je(t){_({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),_({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),_({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),_({method:t,eventType:"Input",eventName:"input"}),_({method:t,eventType:"Mouse Up",eventName:"mouseup"}),_({method:t,eventType:"Mouse Down",eventName:"mousedown"}),_({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),_({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),_({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),_({method:t,eventType:"Touch Start",eventName:"touchstart"}),_({method:t,eventType:"Touch End",eventName:"touchend"}),_({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),_({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),_({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),_({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ve==="child"&&_({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Fe(t,o,u,b){return o!==t&&(t in u||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=o),a(b+' calculation method set to "'+t+'"')),t}function Re(){L=Fe(L,fe,j,"height")}function ze(){I=Fe(I,Be,O,"width")}function f(){r===!0?(je("add"),Ye()):a("Auto Resize disabled")}function h(){$!==null&&$.disconnect()}function A(){je("remove"),h(),clearInterval(Qe)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function K(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(F){var C=F.getBoundingClientRect(),R=t();return{x:parseInt(C.left,10)+parseInt(R.x,10),y:parseInt(C.top,10)+parseInt(R.y,10)}}function u(F){function C(te){var Ce=o(te);a("Moving to in page link (#"+R+") at x: "+Ce.x+" y: "+Ce.y),G(Ce.y,Ce.x,"scrollToOffset")}var R=F.split("#")[1]||F,T=decodeURIComponent(R),Q=document.getElementById(T)||document.getElementsByName(T)[0];e!==Q?C(Q):(a("In page link (#"+R+") not found in iFrame, so sending to parent"),G(0,0,"inPageLink","#"+R))}function b(){var F=window.location.hash,C=window.location.href;F!==""&&F!=="#"&&u(C)}function E(){function F(C){function R(T){T.preventDefault(),u(this.getAttribute("href"))}C.getAttribute("href")!=="#"&&ue(C,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),F)}function P(){ue(window,"hashchange",b)}function W(){setTimeout(b,Le)}function B(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),E(),P(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return pe.enable?B():a("In page linking not enabled"),{findTarget:u}}function ce(){if(v!==!0)return;function t(u){G(0,0,u.type,u.screenY+":"+u.screenX)}function o(u,b){a("Add event listener: "+b),ue(window.document,u,t)}o("mouseenter","Mouse Enter"),o("mouseleave","Mouse Leave")}function De(){a("Enable public methods"),Ze.parentIFrame={autoResize:function(o){return o===!0&&r===!1?(r=!0,f()):o===!1&&r===!0&&(r=!1,A()),G(0,0,"autoResize",JSON.stringify(r)),r},close:function(){G(0,0,"close")},getId:function(){return he},getPageInfo:function(o){typeof o=="function"?(ye=o,G(0,0,"pageInfo")):(ye=function(){},G(0,0,"pageInfoStop"))},moveToAnchor:function(o){pe.findTarget(o)},reset:function(){jt("parentIFrame.reset")},scrollTo:function(o,u){G(u,o,"scrollTo")},scrollToOffset:function(o,u){G(u,o,"scrollToOffset")},sendMessage:function(o,u){G(0,0,"message",JSON.stringify(o),u)},setHeightCalculationMethod:function(o){L=o,Re()},setWidthCalculationMethod:function(o){I=o,ze()},setTargetOrigin:function(o){a("Set targetOrigin: "+o),se=o},size:function(o,u){var b=""+(o||"")+(u?","+u:"");oe("size","parentIFrame.size("+b+")",o,u)}}}function Ie(){ae!==0&&(a("setInterval: "+ae+"ms"),Qe=setInterval(function(){oe("interval","setInterval: "+ae)},Math.abs(ae)))}function Ue(){function t(T){function Q(te){te.complete===!1&&(a("Attach listeners to "+te.src),te.addEventListener("load",E,!1),te.addEventListener("error",P,!1),F.push(te))}T.type==="attributes"&&T.attributeName==="src"?Q(T.target):T.type==="childList"&&Array.prototype.forEach.call(T.target.querySelectorAll("img"),Q)}function o(T){F.splice(F.indexOf(T),1)}function u(T){a("Remove listeners from "+T.src),T.removeEventListener("load",E,!1),T.removeEventListener("error",P,!1),o(T)}function b(T,Q,te){u(T.target),oe(Q,te+": "+T.target.src)}function E(T){b(T,"imageLoad","Image loaded")}function P(T){b(T,"imageLoadFailed","Image load failed")}function W(T){oe("mutationObserver","mutationObserver: "+T[0].target+" "+T[0].type),T.forEach(t)}function B(){var T=document.querySelector("body"),Q={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new C(W),a("Create body MutationObserver"),R.observe(T,Q),R}var F=[],C=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(a("Disconnect body MutationObserver"),R.disconnect(),F.forEach(u))}}}function Ye(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?Ie():$=Ue():(a("MutationObserver not supported in this browser!"),Ie())}function V(t,o){var u=0;return o=o||document.body,u=document.defaultView.getComputedStyle(o,null),u=u!==null?u[t]:0,parseInt(u,c)}function x(t){t>me/2&&(me=2*t,a("Event throttle increased to "+me+"ms"))}function m(t,o){for(var u=o.length,b=0,E=0,P=Oe(t),W=Date.now(),B=0;B<u;B++)b=o[B].getBoundingClientRect()[t]+V("margin"+P,o[B]),b>E&&(E=b);return W=Date.now()-W,a("Parsed "+u+" HTML elements"),a("Element position calculated in "+W+"ms"),x(W),E}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,o){function u(){return g("No tagged elements ("+o+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+o+"]");return b.length===0&&u(),m(t,b)}function M(){return document.querySelectorAll("body *")}var j={bodyOffset:function(){return document.body.offsetHeight+V("marginTop")+V("marginBottom")},offset:function(){return j.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return ke.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(j))},min:function(){return Math.min.apply(null,l(j))},grow:function(){return j.max()},lowestElement:function(){return Math.max(j.bodyOffset()||j.documentElementOffset(),m("bottom",M()))},taggedElement:function(){return p("bottom","data-iframe-height")}},O={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return ke.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(O.bodyScroll(),O.documentElementScroll())},max:function(){return Math.max.apply(null,l(O))},min:function(){return Math.min.apply(null,l(O))},rightMostElement:function(){return m("right",M())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,o,u,b){function E(){ie=R,ge=T,G(ie,ge,t)}function P(){function Q(te,Ce){var Ht=Math.abs(te-Ce)<=Ee;return!Ht}return R=e!==u?u:j[L](),T=e!==b?b:O[I](),Q(ie,R)||z&&Q(ge,T)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return L in $e||z&&I in $e}function F(){a("No change in size detected")}function C(){W()&&B()?jt(o):t in{interval:1}||F()}var R,T;P()||t==="init"?(yt(),E()):C()}var ee=st(H);function oe(t,o,u,b){function E(){t in{reset:1,resetPage:1,init:1}||a("Trigger event: "+o)}function P(){return we&&t in Y}P()?a("Trigger event cancelled: "+t):(E(),t==="init"?H(t,o,u,b):ee(t,o,u,b))}function yt(){we||(we=!0,a("Trigger event lock on")),clearTimeout(He),He=setTimeout(function(){we=!1,a("Trigger event lock off"),a("--")},Le)}function kt(t){ie=j[L](),ge=O[I](),G(ie,ge,t)}function jt(t){var o=L;L=fe,a("Reset trigger event: "+t),yt(),kt("reset"),L=o}function G(t,o,u,b,E){function P(){e===E?E=se:a("Message targetOrigin: "+E)}function W(){var B=t+":"+o,F=he+":"+B+":"+u+(e!==b?":"+b:"");a("Sending message to host page ("+F+")"),Ne.postMessage(be+F,E)}P(),W()}function Nt(t){var o={init:function(){Ge=t.data,Ne=t.source,d(),i=!1,setTimeout(function(){re=!1},Le)},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),kt("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){pe.findTarget(E())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=E();a("PageInfoFromParent called from parent: "+R),ye(JSON.parse(R)),a(" --")},message:function(){var R=E();a("onMessage called from parent: "+R),We(JSON.parse(R)),a(" --")}};function u(){return be===(""+t.data).substr(0,D)}function b(){return t.data.split("]")[1].split(":")[0]}function E(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var C=b();C in o?o[C]():!P()&&!W()&&g("Unexpected message ("+t.data+")")}function F(){i===!1?B():W()?o.init():a('Ignored message of type "'+b()+'". Received before initialization.')}u()&&F()}function Tt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",Nt),ue(window,"readystatechange",Tt),Tt()})()})(tn);var _t=gt;rt.iframeResize=_t;rt.iframeResizer=_t;rt.iframeResizerContentWindow=pt;(function(s){s.exports=rt})(Zt);function nn(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function on(s){const e=nn(s),r=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&r===c}function Pt(s,e){const r=JSON.stringify(e);let c=0;if(r.length===0)return c;for(let y=0;y<r.length;y++){const S=r.charCodeAt(y);c=(c<<5)-c+S,c&=c}return`${s}-${c}`}function rn(s,e,r){const c=document.createElement("form"),y=document.createElement("input");return c.action=s,c.method="POST",c.target=r,e.forEach(([S,U])=>{y.name=S,y.value=U.toString(),c.appendChild(y.cloneNode())}),c.style.visibility="hidden",c}function an(s){const e=s.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function sn(s,e){if(s.hasAttribute("data-modal-post")){const r=s.getAttribute("data-modal-post");e.method="POST",e.body=r;const c=[];return new URL(`http://localhost/?${r}`).searchParams.forEach((y,S)=>{c.push([S,y])}),[c,e]}return[null,e]}function un(s,e,r,c,y){const S=document.createElement("toujou-modal"),U=document.createElement("iframe"),$=Pt("iframe",e);if(S.id=s,U.name=$,document.body.appendChild(S),on(r)){const q=document.querySelector(r),z=q instanceof HTMLTemplateElement?document.importNode(q.content,!0).children:q.childNodes;q.title&&(S.title=q.title);for(let Y=0;Y<z.length;Y++)S.appendChild(z[Y])}else if(y&&c==="POST"){const q=rn(r,y,$);S.appendChild(q),S.appendChild(U),q.submit(),q.remove()}else c==="GET"&&(U.src=r,S.appendChild(U));return S}function ln(s,e,r,c){const y=Pt("toujou-modal",s),S=document.getElementById(y)||un(y,s,e,r,c);setTimeout(()=>{S.open()})}const cn=s=>{if(s.metaKey||s.ctrlKey)return;const e=an(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const r=e.getAttribute("href"),c=r.indexOf("?")!==-1?r.split("?")[0]+"?toujou-ajax-modal=1&"+r.split("?")[1]:r.indexOf("#")!==-1?r.split("#")[0]+"?toujou-ajax-modal=1#"+r.split("#")[1]:r+"?toujou-ajax-modal=1",[y,S]=sn(e,{src:c});ln(S,c,y?"POST":"GET",y),s.preventDefault(),s.stopPropagation()}},dn=nt`
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

`,fn={reserveScrollBarGap:!0},Ae=[];function hn(s){Ae.forEach(e=>e.close()),Ae.push(s)}function mn(s){if(s===Ae[Ae.length-1]){Ae.pop();const e=Ae.pop();e&&e.open()}}class bt extends ot{static get is(){return"toujou-modal"}render(){return xe`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?xe`
                    <button id="dog-ear-close" dialog-dismiss></button>`:xe`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(r=>{r[0]&&this.onPosition(r[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Qt()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Gt(this.$.scroller,fn),hn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),mn(this),this.allowOutsideScroll?document.body.style.position="":$t(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const r=e.composedPath();(!r.includes(this.$.modalContent)||r.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const r=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=r?`${r}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(r=>r instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((r,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(r=>{this.loading=!0,r.addEventListener("load",()=>{this.iframeResizerMap.has(r)||this.listenToIframeReadyState(r)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let r={};try{r=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return r.initCallback=()=>{this.loading=!1},r.closedCallback=()=>{this.close()},mt.iframeResizer(r,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}ut(bt,"styles",[dn]);customElements.define(bt.is,bt);document.addEventListener("click",cn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const gn=nt`
  .exit-warning__message {
    background-color: var(--bg-color);
    overflow: hidden;
    padding: var(--spacing-normal) var(--spacing-normal) var(--spacing-l);
  }
`;class vt extends ot{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return xe`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&qt(this._messageTemplate(xe,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}}ut(vt,"styles",[gn]);customElements.define(vt.is,vt);function pn(s){const e=s.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function Lt(s){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}function bn(s){if(s.metaKey||s.ctrlKey)return;const e=pn(s);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const r=e.getAttribute("href");Lt(r)&&(s.preventDefault(),s.stopPropagation())}}function vn(s){s.origin!==window.location.origin||s.data.action===void 0||s.data.action!=="toujou-exit-warning"||!s.data.targetUrl||Lt(s.data.targetUrl)}document.addEventListener("click",bn);window.addEventListener("message",vn);var St,ct,dt,wn=nt(St||(ct=[`* {
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
`],dt||(dt=ct.slice(0)),St=Object.freeze(Object.defineProperties(ct,{raw:{value:Object.freeze(dt)}}))));let Ot=class extends ot{static get is(){return"toujou-spinner"}static get styles(){return wn}render(){return xe`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}};customElements.define(Ot.is,Ot);var Ft,ft,ht,yn=nt(Ft||(ft=[`:host {
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
`],ht||(ht=ft.slice(0)),Ft=Object.freeze(Object.defineProperties(ft,{raw:{value:Object.freeze(ht)}}))));class Rt extends ot{static get is(){return"toujou-snackbar"}render(){return xe`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return[yn]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}}customElements.define(Rt.is,Rt);
//# sourceMappingURL=base.js.map
