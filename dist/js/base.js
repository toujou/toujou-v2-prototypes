var Lt=Object.defineProperty;var Nt=(s,e,n)=>e in s?Lt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Ye=(s,e,n)=>(Nt(s,typeof e!="symbol"?e+"":e,n),n);import{i as ot,s as it,y as xe,Z as Ht}from"./lit-element-6fe74b4f.js";import"./query-assigned-elements-acf341e1.js";let lt=0,Tt=0;const Ot=getComputedStyle(document.documentElement),Bt=".topbar, .inpage-nav, .navigation--inpage";function Wt(){const s=parseInt(Ot.getPropertyValue("--toujou-scroll-padding-offset"));s&&(lt+=s);const e=Array.from(document.querySelectorAll(Bt));e&&(e.forEach(n=>{Tt+=n.offsetHeight}),lt+=Tt),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${lt}px`)}function xt(){Ot.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||Wt()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{xt()}):document.addEventListener("DOMContentLoaded",()=>{xt()});function Vt(s){if(Array.isArray(s)){for(var e=0,n=Array(s.length);e<s.length;e++)n[e]=s[e];return n}else return Array.from(s)}var rt=!1;if(typeof window<"u"){var Mt={get passive(){rt=!0}};window.addEventListener("testPassive",null,Mt),window.removeEventListener("testPassive",null,Mt)}var _e=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Pe=!1,vt=-1,Ke=void 0,Te=void 0,Xe=void 0,Ft=function(e){return de.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},Ge=function(e){var n=e||window.event;return Ft(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Dt=function(e){if(Xe===void 0){var n=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(n&&c>0){var w=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Xe=document.body.style.paddingRight,document.body.style.paddingRight=w+c+"px"}}Ke===void 0&&(Ke=document.body.style.overflow,document.body.style.overflow="hidden")},Rt=function(){Xe!==void 0&&(document.body.style.paddingRight=Xe,Xe=void 0),Ke!==void 0&&(document.body.style.overflow=Ke,Ke=void 0)},qt=function(){return window.requestAnimationFrame(function(){if(Te===void 0){Te={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,c=e.scrollX,w=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var S=w-window.innerHeight;S&&n>=w&&(document.body.style.top=-(n+S))})},300)}})},zt=function(){if(Te!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Te.position,document.body.style.top=Te.top,document.body.style.left=Te.left,window.scrollTo(n,e),Te=void 0}},Ut=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Jt=function(e,n){var c=e.targetTouches[0].clientY-vt;return Ft(e.target)?!1:n&&n.scrollTop===0&&c>0||Ut(n)&&c<0?Ge(e):(e.stopPropagation(),!0)},Yt=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(w){return w.targetElement===e})){var c={targetElement:e,options:n||{}};de=[].concat(Vt(de),[c]),_e?qt():Dt(n),_e&&(e.ontouchstart=function(w){w.targetTouches.length===1&&(vt=w.targetTouches[0].clientY)},e.ontouchmove=function(w){w.targetTouches.length===1&&Jt(w,e)},Pe||(document.addEventListener("touchmove",Ge,rt?{passive:!1}:void 0),Pe=!0))}},Kt=function(){_e&&(de.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Pe&&(document.removeEventListener("touchmove",Ge,rt?{passive:!1}:void 0),Pe=!1),vt=-1),_e?zt():Rt(),de=[]},Xt=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(n){return n.targetElement!==e}),_e&&(e.ontouchstart=null,e.ontouchmove=null,Pe&&de.length===0&&(document.removeEventListener("touchmove",Ge,rt?{passive:!1}:void 0),Pe=!1)),_e?zt():Rt()},ft={},Gt={get exports(){return ft},set exports(s){ft=s}},at={},ht={},Qt={get exports(){return ht},set exports(s){ht=s}};(function(s){(function(e){if(typeof window>"u")return;var n=0,c=!1,w=!1,S="message",U=S.length,Z="[iFrameSizer]",V=Z.length,z=null,J=window.requestAnimationFrame,Le={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},r={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){q("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(o,a,g){o.addEventListener(a,g,!1)}function Qe(o,a,g){o.removeEventListener(a,g,!1)}function pe(){var o=["moz","webkit","o","ms"],a;for(a=0;a<o.length&&!J;a+=1)J=window[o[a]+"RequestAnimationFrame"];J?J=J.bind(window):v("setup","RequestAnimationFrame not supported")}function ae(o){var a="Host page: "+o;return window.top!==window.self&&(a=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+o:"Nested host page: "+o),a}function Ze(o){return Z+"["+ae(o)+"]"}function Me(o){return r[o]?r[o].log:c}function v(o,a){he("log",o,a,Me(o))}function be(o,a){he("info",o,a,Me(o))}function q(o,a){he("warn",o,a,!0)}function he(o,a,g,d){d===!0&&typeof window.console=="object"&&console[o](Ze(a),g)}function $e(o){function a(){function l(){ge(x),ye(m),ce("onResized",x)}y("Height"),y("Width"),Be(l,x,"init")}function g(){var l=D.substr(V).split(":"),p=l[1]?parseInt(l[1],10):0,M=r[l[0]]&&r[l[0]].iframe,j=getComputedStyle(M);return{iframe:M,id:l[0],height:p+d(j)+k(j),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,M=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+M}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,M=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+M}function y(l){var p=Number(r[m]["max"+l]),M=Number(r[m]["min"+l]),j=l.toLowerCase(),O=Number(x[j]);v(m,"Checking "+j+" is in range "+M+"-"+p),O<M&&(O=M,v(m,"Set "+j+" to min value")),O>p&&(O=p,v(m,"Set "+j+" to max value")),x[j]=""+O}function X(){function l(){function j(){var H=0,ee=!1;for(v(m,"Checking connection is from allowed list of origins: "+M);H<M.length;H++)if(M[H]===p){ee=!0;break}return ee}function O(){var H=r[m]&&r[m].remoteHost;return v(m,"Checking connection is from: "+H),p===H}return M.constructor===Array?j():O()}var p=o.origin,M=r[m]&&r[m].checkOrigin;if(M&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+x.iframe.id+". Message was: "+o.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return Z===(""+D).substr(0,V)&&D.substr(V).split(":")[0]in r}function Y(){var l=x.type in{true:1,false:1,undefined:1};return l&&v(m,"Ignoring init message from meta parent page"),l}function $(l){return D.substr(D.indexOf(":")+U+l)}function ne(l){v(m,"onMessage passed: {iframe: "+x.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:x.iframe,message:JSON.parse(l)}),v(m,"--")}function _(){var l=document.body.getBoundingClientRect(),p=x.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function je(l,p){function M(){I("Send Page Info","pageInfo:"+_(),l,p)}Ve(M,32,p)}function Fe(){function l(O,H){function ee(){r[j]?je(r[j].iframe,j):p()}["scroll","resize"].forEach(function(oe){v(j,O+oe+" listener for sendPageInfo"),H(window,oe,ee)})}function p(){l("Remove ",Qe)}function M(){l("Add ",re)}var j=m;M(),r[j]&&(r[j].stopPageInfo=p)}function Re(){r[m]&&r[m].stopPageInfo&&(r[m].stopPageInfo(),delete r[m].stopPageInfo)}function ze(){var l=!0;return x.iframe===null&&(q(m,"IFrame ("+x.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return Ee(m),{x:Math.floor(Number(p.left)+Number(z.x)),y:Math.floor(Number(p.top)+Number(z.y))}}function h(l){function p(){z=H,A(),v(m,"--")}function M(){return{x:Number(x.width)+O.x,y:Number(x.height)+O.y}}function j(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):q(m,"Unable to scroll to requested position, window.parentIFrame not found")}var O=l?f(x.iframe):{x:0,y:0},H=M();v(m,"Reposition requested from iFrame (offset x:"+O.x+" y:"+O.y+")"),window.top!==window.self?j():p()}function A(){ce("onScroll",z)!==!1?ye(m):He()}function N(l){function p(){var ee=f(H);v(m,"Moving to in page link (#"+j+") at x: "+ee.x+" y: "+ee.y),z={x:ee.x,y:ee.y},A(),v(m,"--")}function M(){window.parentIFrame?window.parentIFrame.moveToAnchor(j):v(m,"In page link #"+j+" not found and window.parentIFrame not found")}var j=l.split("#")[1]||"",O=decodeURIComponent(j),H=document.getElementById(O)||document.getElementsByName(O)[0];H?p():window.top!==window.self?M():v(m,"In page link #"+j+" not found")}function K(l){var p={};if(Number(x.width)===0&&Number(x.height)===0){var M=$(9).split(":");p={x:M[1],y:M[0]}}else p={x:x.width,y:x.height};ce(l,{iframe:x.iframe,screenX:Number(p.x),screenY:Number(p.y),type:x.type})}function ce(l,p){return ve(m,l,p)}function qe(){switch(r[m]&&r[m].firstRun&&Je(),x.type){case"close":se(x.iframe);break;case"message":ne($(6));break;case"mouseenter":K("onMouseEnter");break;case"mouseleave":K("onMouseLeave");break;case"autoResize":r[m].autoResize=JSON.parse($(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":je(r[m]&&r[m].iframe,m),Fe();break;case"pageInfoStop":Re();break;case"inPageLink":N($(9));break;case"reset":me(x);break;case"init":a(),ce("onInit",x.iframe);break;default:Number(x.width)===0&&Number(x.height)===0?q("Unsupported message received ("+x.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):a()}}function Ie(l){var p=!0;return r[l]||(p=!1,q(x.type+" No settings for "+l+". Message was: "+D)),p}function Ue(){for(var l in r)I("iFrame requested init",et(l),r[l].iframe,l)}function Je(){r[m]&&(r[m].firstRun=!1)}var D=o.data,x={},m=null;D==="[iFrameResizerChild]Ready"?Ue():le()?(x=g(),m=x.id,r[m]&&(r[m].loaded=!0),!Y()&&Ie(m)&&(v(m,"Received: "+D),ze()&&X()&&qe())):be(m,"Ignored: "+D)}function ve(o,a,g){var d=null,k=null;if(r[o])if(d=r[o][a],typeof d=="function")k=d(g);else throw new TypeError(a+" on iFrame["+o+"] is not a function");return k}function Ne(o){var a=o.id;delete r[a]}function se(o){var a=o.id;if(ve(a,"onClose",a)===!1){v(a,"Close iframe cancelled by onClose event");return}v(a,"Removing iFrame: "+a);try{o.parentNode&&o.parentNode.removeChild(o)}catch(g){q(g)}ve(a,"onClosed",a),v(a,"--"),Ne(o)}function Ee(o){z===null&&(z={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},v(o,"Get page position: "+z.x+","+z.y))}function ye(o){z!==null&&(window.scrollTo(z.x,z.y),v(o,"Set page position: "+z.x+","+z.y),He())}function He(){z=null}function me(o){function a(){ge(o),I("reset","reset",o.iframe,o.id)}v(o.id,"Size reset requested by "+(o.type==="init"?"host page":"iFrame")),Ee(o.id),Be(a,o,"reset")}function ge(o){function a(y){if(!o.id){v("undefined","messageData id not set");return}o.iframe.style[y]=o[y]+"px",v(o.id,"IFrame ("+k+") "+y+" set to "+o[y]+"px")}function g(y){!w&&o[y]==="0"&&(w=!0,v(k,"Hidden iFrame detected, creating visibility listener"),tt())}function d(y){a(y),g(y)}var k=o.iframe.id;r[k]&&(r[k].sizeHeight&&d("height"),r[k].sizeWidth&&d("width"))}function Be(o,a,g){g!==a.type&&J&&!window.jasmine?(v(a.id,"Requesting animation frame"),J(o)):o()}function I(o,a,g,d,k){function y(){var ne=r[d]&&r[d].targetOrigin;v(d,"["+o+"] Sending msg to iframe["+d+"] ("+a+") targetOrigin: "+ne),g.contentWindow.postMessage(Z+a,ne)}function X(){q(d,"["+o+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?y():X()}function Y(){function ne(){r[d]&&!r[d].loaded&&!$&&($=!0,q(d,"IFrame has not responded within "+r[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}k&&r[d]&&r[d].warningTimeout&&(r[d].msgTimeout=setTimeout(ne,r[d].warningTimeout))}var $=!1;d=d||g.id,r[d]&&(le(),Y())}function et(o){return o+":"+r[o].bodyMarginV1+":"+r[o].sizeWidth+":"+r[o].log+":"+r[o].interval+":"+r[o].enablePublicMethods+":"+r[o].autoResize+":"+r[o].bodyMargin+":"+r[o].heightCalculationMethod+":"+r[o].bodyBackground+":"+r[o].bodyPadding+":"+r[o].tolerance+":"+r[o].inPageLinks+":"+r[o].resizeFrom+":"+r[o].widthCalculationMethod+":"+r[o].mouseEvents}function We(o){return typeof o=="number"}function Se(o,a){function g(){function h(N){var K=r[f][N];K!==1/0&&K!==0&&(o.style[N]=We(K)?K+"px":K,v(f,"Set "+N+" = "+o.style[N]))}function A(N){if(r[f]["min"+N]>r[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}A("Height"),A("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=a&&a.id||fe.id+n++;return document.getElementById(h)!==null&&(h+=n++),h}function k(h){return h===""&&(o.id=h=d(),c=(a||{}).log,v(h,"Added missing iframe ID: "+h+" ("+o.src+")")),h}function y(){switch(v(f,"IFrame scrolling "+(r[f]&&r[f].scrolling?"enabled":"disabled")+" for "+f),o.style.overflow=(r[f]&&r[f].scrolling)===!1?"hidden":"auto",r[f]&&r[f].scrolling){case"omit":break;case!0:o.scrolling="yes";break;case!1:o.scrolling="no";break;default:o.scrolling=r[f]?r[f].scrolling:"no"}}function X(){(typeof(r[f]&&r[f].bodyMargin)=="number"||(r[f]&&r[f].bodyMargin)==="0")&&(r[f].bodyMarginV1=r[f].bodyMargin,r[f].bodyMargin=""+r[f].bodyMargin+"px")}function le(){var h=r[f]&&r[f].firstRun,A=r[f]&&r[f].heightCalculationMethod in Le;!h&&A&&me({iframe:o,height:0,width:0,type:"init"})}function Y(){r[f]&&(r[f].iframe.iFrameResizer={close:se.bind(null,r[f].iframe),removeListeners:Ne.bind(null,r[f].iframe),resize:I.bind(null,"Window resize","resize",r[f].iframe),moveToAnchor:function(h){I("Move to anchor","moveToAnchor:"+h,r[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),I("Send Message","message:"+h,r[f].iframe,f)}})}function $(h){function A(){I("iFrame.onload",h,o,e,!0),le()}function N(ce){if(o.parentNode){var qe=new ce(function(Ie){Ie.forEach(function(Ue){var Je=Array.prototype.slice.call(Ue.removedNodes);Je.forEach(function(D){D===o&&se(o)})})});qe.observe(o.parentNode,{childList:!0})}}var K=L();K&&N(K),re(o,"load",A),I("init",h,o,e,!0)}function ne(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function _(h){for(var A in fe)Object.prototype.hasOwnProperty.call(fe,A)&&(r[f][A]=Object.prototype.hasOwnProperty.call(h,A)?h[A]:fe[A])}function je(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Fe(h){var A=h.split("Callback");if(A.length===2){var N="on"+A[0].charAt(0).toUpperCase()+A[0].slice(1);this[N]=this[h],delete this[h],q(f,"Deprecated: '"+h+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Re(h){h=h||{},r[f]={firstRun:!0,iframe:o,remoteHost:o.src&&o.src.split("/").slice(0,3).join("/")},ne(h),Object.keys(h).forEach(Fe,h),_(h),r[f]&&(r[f].targetOrigin=r[f].checkOrigin===!0?je(r[f].remoteHost):"*")}function ze(){return f in r&&"iFrameResizer"in o}var f=k(o.id);ze()?q(f,"Ignored iFrame, already setup."):(Re(a),y(),g(),X(),$(et(f)),Y())}function we(o,a){ie===null&&(ie=setTimeout(function(){ie=null,o()},a))}var ke={};function Ve(o,a,g){ke[g]||(ke[g]=setTimeout(function(){ke[g]=null,o()},a))}function tt(){function o(){function k(y){function X(Y){return(r[y]&&r[y].iframe.style[Y])==="0px"}function le(Y){return Y.offsetParent!==null}r[y]&&le(r[y].iframe)&&(X("height")||X("width"))&&I("Visibility change","resize",r[y].iframe,y)}Object.keys(r).forEach(function(y){k(y)})}function a(k){v("window","Mutation observed: "+k[0].target+" "+k[0].type),we(o,16)}function g(){var k=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},X=new d(a);X.observe(k,y)}var d=L();d&&g()}function nt(o){function a(){ue("Window "+o,"resize")}v("window","Trigger event: "+o),we(a,16)}function De(){function o(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(v("document","Trigger event: Visiblity change"),we(o,16))}function ue(o,a){function g(d){return r[d]&&r[d].resizeFrom==="parent"&&r[d].autoResize&&!r[d].firstRun}Object.keys(r).forEach(function(d){g(d)&&I(o,a,r[d].iframe,d)})}function st(){re(window,"message",$e),re(window,"resize",function(){nt("resize")}),re(document,"visibilitychange",De),re(document,"-webkit-visibilitychange",De)}function Oe(){function o(d,k){function y(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(y(),Se(k,d),g.push(k))}function a(d){d&&d.enablePublicMethods&&q("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return pe(),st(),function(k,y){switch(g=[],a(k),typeof y){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(y||"iframe"),o.bind(e,k));break;case"object":o(k,y);break;default:throw new TypeError("Unexpected data type ("+typeof y+")")}return g}}function ut(o){o.fn?o.fn.iFrameResize||(o.fn.iFrameResize=function(g){function d(k,y){Se(y,g)}return this.filter("iframe").each(d).end()}):be("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&ut(window.jQuery),typeof e=="function"&&e.amd?e([],Oe):s.exports=Oe(),window.iFrameResize=window.iFrameResize||Oe()})()})(Qt);var mt={},Zt={get exports(){return mt},set exports(s){mt=s}};(function(s){(function(e){if(typeof window>"u")return;var n=!0,c=10,w="",S=0,U="",Z=null,V="",z=!1,J={resize:1,click:1},Le=128,r=!0,ie=1,fe="bodyOffset",L=fe,re=!0,Qe="",pe={},ae=32,Ze=null,Me=!1,v=!1,be="[iFrameSizer]",q=be.length,he="",$e={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",Ne=window.parent,se="*",Ee=0,ye=!1,He=null,me=16,ge=1,Be="scroll",I=Be,et=window,We=function(){g("onMessage function not defined")},Se=function(){},we=function(){},ke={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},Ve={},tt=!1;function nt(){}try{var De=Object.create({},{passive:{get:function(){tt=!0}}});window.addEventListener("test",nt,De),window.removeEventListener("test",nt,De)}catch{}function ue(t,i,u,b){t.addEventListener(i,u,tt?b||{}:!1)}function st(t,i,u){t.removeEventListener(i,u,!1)}function Oe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ut(t){var i,u,b,E=null,P=0,W=function(){P=Date.now(),E=null,b=t.apply(i,u),E||(i=u=null)};return function(){var B=Date.now();P||(P=B);var F=me-(B-P);return i=this,u=arguments,F<=0||F>me?(E&&(clearTimeout(E),E=null),P=B,b=t.apply(i,u),E||(i=u=null)):E||(E=setTimeout(W,F)),b}}function o(t){return be+"["+he+"] "+t}function a(t){Me&&typeof window.console=="object"&&console.log(o(t))}function g(t){typeof window.console=="object"&&console.warn(o(t))}function d(){k(),a("Initialising iFrame ("+window.location.href+")"),X(),$(),Y("background",w),Y("padding",V),N(),Re(),ze(),ne(),qe(),ce(),f(),pe=K(),oe("init","Init message from host page"),Se()}function k(){function t(u){return u==="true"}var i=Qe.substr(q).split(":");he=i[0],S=e!==i[1]?Number(i[1]):S,z=e!==i[2]?t(i[2]):z,Me=e!==i[3]?t(i[3]):Me,ae=e!==i[4]?Number(i[4]):ae,n=e!==i[6]?t(i[6]):n,U=i[7],L=e!==i[8]?i[8]:L,w=i[9],V=i[10],Ee=e!==i[11]?Number(i[11]):Ee,pe.enable=e!==i[12]?t(i[12]):!1,ve=e!==i[13]?i[13]:ve,I=e!==i[14]?i[14]:I,v=e!==i[15]?Boolean(i[15]):v}function y(t){var i=t.split("Callback");if(i.length===2){var u="on"+i[0].charAt(0).toUpperCase()+i[0].slice(1);this[u]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+u+"'. The old method will be removed in the next major version.")}}function X(){function t(){var u=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(u)),Object.keys(u).forEach(y,u),We="onMessage"in u?u.onMessage:We,Se="onReady"in u?u.onReady:Se,se="targetOrigin"in u?u.targetOrigin:se,L="heightCalculationMethod"in u?u.heightCalculationMethod:L,I="widthCalculationMethod"in u?u.widthCalculationMethod:I}function i(u,b){return typeof u=="function"&&(a("Setup custom "+b+"CalcMethod"),ke[b]=u,u="custom"),u}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=i(L,"height"),I=i(I,"width")),a("TargetOrigin for parent set to: "+se)}function le(t,i){return i.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),i=""),i}function Y(t,i){e!==i&&i!==""&&i!=="null"&&(document.body.style[t]=i,a("Body "+t+' set to "'+i+'"'))}function $(){e===U&&(U=S+"px"),Y("margin",le("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function _(t){var i={add:function(u){function b(){oe(t.eventName,t.eventType)}Ve[u]=b,ue(window,u,b,{passive:!0})},remove:function(u){var b=Ve[u];delete Ve[u],st(window,u,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(i[t.method])):i[t.method](t.eventName),a(Oe(t.method)+" event listener: "+t.eventType)}function je(t){_({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),_({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),_({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),_({method:t,eventType:"Input",eventName:"input"}),_({method:t,eventType:"Mouse Up",eventName:"mouseup"}),_({method:t,eventType:"Mouse Down",eventName:"mousedown"}),_({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),_({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),_({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),_({method:t,eventType:"Touch Start",eventName:"touchstart"}),_({method:t,eventType:"Touch End",eventName:"touchend"}),_({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),_({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),_({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),_({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ve==="child"&&_({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Fe(t,i,u,b){return i!==t&&(t in u||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=i),a(b+' calculation method set to "'+t+'"')),t}function Re(){L=Fe(L,fe,j,"height")}function ze(){I=Fe(I,Be,O,"width")}function f(){n===!0?(je("add"),Je()):a("Auto Resize disabled")}function h(){Z!==null&&Z.disconnect()}function A(){je("remove"),h(),clearInterval(Ze)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function K(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function i(F){var C=F.getBoundingClientRect(),R=t();return{x:parseInt(C.left,10)+parseInt(R.x,10),y:parseInt(C.top,10)+parseInt(R.y,10)}}function u(F){function C(te){var Ce=i(te);a("Moving to in page link (#"+R+") at x: "+Ce.x+" y: "+Ce.y),G(Ce.y,Ce.x,"scrollToOffset")}var R=F.split("#")[1]||F,T=decodeURIComponent(R),Q=document.getElementById(T)||document.getElementsByName(T)[0];e!==Q?C(Q):(a("In page link (#"+R+") not found in iFrame, so sending to parent"),G(0,0,"inPageLink","#"+R))}function b(){var F=window.location.hash,C=window.location.href;F!==""&&F!=="#"&&u(C)}function E(){function F(C){function R(T){T.preventDefault(),u(this.getAttribute("href"))}C.getAttribute("href")!=="#"&&ue(C,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),F)}function P(){ue(window,"hashchange",b)}function W(){setTimeout(b,Le)}function B(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),E(),P(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return pe.enable?B():a("In page linking not enabled"),{findTarget:u}}function ce(){if(v!==!0)return;function t(u){G(0,0,u.type,u.screenY+":"+u.screenX)}function i(u,b){a("Add event listener: "+b),ue(window.document,u,t)}i("mouseenter","Mouse Enter"),i("mouseleave","Mouse Leave")}function qe(){a("Enable public methods"),et.parentIFrame={autoResize:function(i){return i===!0&&n===!1?(n=!0,f()):i===!1&&n===!0&&(n=!1,A()),G(0,0,"autoResize",JSON.stringify(n)),n},close:function(){G(0,0,"close")},getId:function(){return he},getPageInfo:function(i){typeof i=="function"?(we=i,G(0,0,"pageInfo")):(we=function(){},G(0,0,"pageInfoStop"))},moveToAnchor:function(i){pe.findTarget(i)},reset:function(){kt("parentIFrame.reset")},scrollTo:function(i,u){G(u,i,"scrollTo")},scrollToOffset:function(i,u){G(u,i,"scrollToOffset")},sendMessage:function(i,u){G(0,0,"message",JSON.stringify(i),u)},setHeightCalculationMethod:function(i){L=i,Re()},setWidthCalculationMethod:function(i){I=i,ze()},setTargetOrigin:function(i){a("Set targetOrigin: "+i),se=i},size:function(i,u){var b=""+(i||"")+(u?","+u:"");oe("size","parentIFrame.size("+b+")",i,u)}}}function Ie(){ae!==0&&(a("setInterval: "+ae+"ms"),Ze=setInterval(function(){oe("interval","setInterval: "+ae)},Math.abs(ae)))}function Ue(){function t(T){function Q(te){te.complete===!1&&(a("Attach listeners to "+te.src),te.addEventListener("load",E,!1),te.addEventListener("error",P,!1),F.push(te))}T.type==="attributes"&&T.attributeName==="src"?Q(T.target):T.type==="childList"&&Array.prototype.forEach.call(T.target.querySelectorAll("img"),Q)}function i(T){F.splice(F.indexOf(T),1)}function u(T){a("Remove listeners from "+T.src),T.removeEventListener("load",E,!1),T.removeEventListener("error",P,!1),i(T)}function b(T,Q,te){u(T.target),oe(Q,te+": "+T.target.src)}function E(T){b(T,"imageLoad","Image loaded")}function P(T){b(T,"imageLoadFailed","Image load failed")}function W(T){oe("mutationObserver","mutationObserver: "+T[0].target+" "+T[0].type),T.forEach(t)}function B(){var T=document.querySelector("body"),Q={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new C(W),a("Create body MutationObserver"),R.observe(T,Q),R}var F=[],C=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(a("Disconnect body MutationObserver"),R.disconnect(),F.forEach(u))}}}function Je(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?Ie():Z=Ue():(a("MutationObserver not supported in this browser!"),Ie())}function D(t,i){var u=0;return i=i||document.body,u=document.defaultView.getComputedStyle(i,null),u=u!==null?u[t]:0,parseInt(u,c)}function x(t){t>me/2&&(me=2*t,a("Event throttle increased to "+me+"ms"))}function m(t,i){for(var u=i.length,b=0,E=0,P=Oe(t),W=Date.now(),B=0;B<u;B++)b=i[B].getBoundingClientRect()[t]+D("margin"+P,i[B]),b>E&&(E=b);return W=Date.now()-W,a("Parsed "+u+" HTML elements"),a("Element position calculated in "+W+"ms"),x(W),E}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,i){function u(){return g("No tagged elements ("+i+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+i+"]");return b.length===0&&u(),m(t,b)}function M(){return document.querySelectorAll("body *")}var j={bodyOffset:function(){return document.body.offsetHeight+D("marginTop")+D("marginBottom")},offset:function(){return j.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return ke.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(j))},min:function(){return Math.min.apply(null,l(j))},grow:function(){return j.max()},lowestElement:function(){return Math.max(j.bodyOffset()||j.documentElementOffset(),m("bottom",M()))},taggedElement:function(){return p("bottom","data-iframe-height")}},O={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return ke.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(O.bodyScroll(),O.documentElementScroll())},max:function(){return Math.max.apply(null,l(O))},min:function(){return Math.min.apply(null,l(O))},rightMostElement:function(){return m("right",M())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,i,u,b){function E(){ie=R,ge=T,G(ie,ge,t)}function P(){function Q(te,Ce){var Pt=Math.abs(te-Ce)<=Ee;return!Pt}return R=e!==u?u:j[L](),T=e!==b?b:O[I](),Q(ie,R)||z&&Q(ge,T)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return L in $e||z&&I in $e}function F(){a("No change in size detected")}function C(){W()&&B()?kt(i):t in{interval:1}||F()}var R,T;P()||t==="init"?(yt(),E()):C()}var ee=ut(H);function oe(t,i,u,b){function E(){t in{reset:1,resetPage:1,init:1}||a("Trigger event: "+i)}function P(){return ye&&t in J}P()?a("Trigger event cancelled: "+t):(E(),t==="init"?H(t,i,u,b):ee(t,i,u,b))}function yt(){ye||(ye=!0,a("Trigger event lock on")),clearTimeout(He),He=setTimeout(function(){ye=!1,a("Trigger event lock off"),a("--")},Le)}function wt(t){ie=j[L](),ge=O[I](),G(ie,ge,t)}function kt(t){var i=L;L=fe,a("Reset trigger event: "+t),yt(),wt("reset"),L=i}function G(t,i,u,b,E){function P(){e===E?E=se:a("Message targetOrigin: "+E)}function W(){var B=t+":"+i,F=he+":"+B+":"+u+(e!==b?":"+b:"");a("Sending message to host page ("+F+")"),Ne.postMessage(be+F,E)}P(),W()}function _t(t){var i={init:function(){Qe=t.data,Ne=t.source,d(),r=!1,setTimeout(function(){re=!1},Le)},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),wt("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){pe.findTarget(E())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=E();a("PageInfoFromParent called from parent: "+R),we(JSON.parse(R)),a(" --")},message:function(){var R=E();a("onMessage called from parent: "+R),We(JSON.parse(R)),a(" --")}};function u(){return be===(""+t.data).substr(0,q)}function b(){return t.data.split("]")[1].split(":")[0]}function E(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!s.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var C=b();C in i?i[C]():!P()&&!W()&&g("Unexpected message ("+t.data+")")}function F(){r===!1?B():W()?i.init():a('Ignored message of type "'+b()+'". Received before initialization.')}u()&&F()}function jt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",_t),ue(window,"readystatechange",jt),jt()})()})(Zt);var It=ht;at.iframeResize=It;at.iframeResizer=It;at.iframeResizerContentWindow=mt;(function(s){s.exports=at})(Gt);function $t(s){const e=document.createElement("a");return e.href=s,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function en(s){const e=$t(s),n=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&n===c}function Ct(s,e){const n=JSON.stringify(e);let c=0;if(n.length===0)return c;for(let w=0;w<n.length;w++){const S=n.charCodeAt(w);c=(c<<5)-c+S,c&=c}return`${s}-${c}`}function tn(s,e,n){const c=document.createElement("form"),w=document.createElement("input");return c.action=s,c.method="POST",c.target=n,e.forEach(([S,U])=>{w.name=S,w.value=U.toString(),c.appendChild(w.cloneNode())}),c.style.visibility="hidden",c}function nn(s){const e=s.composedPath();for(let n=0;n<e.indexOf(document.body);n++){const c=e[n];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function on(s,e){if(s.hasAttribute("data-modal-post")){const n=s.getAttribute("data-modal-post");e.method="POST",e.body=n;const c=[];return new URL(`http://localhost/?${n}`).searchParams.forEach((w,S)=>{c.push([S,w])}),[c,e]}return[null,e]}function rn(s,e,n,c,w){const S=document.createElement("toujou-modal"),U=document.createElement("iframe"),Z=Ct("iframe",e);if(S.id=s,U.name=Z,document.body.appendChild(S),en(n)){const V=document.querySelector(n),z=V instanceof HTMLTemplateElement?document.importNode(V.content,!0).children:V.childNodes;V.title&&(S.title=V.title);for(let J=0;J<z.length;J++)S.appendChild(z[J])}else if(w&&c==="POST"){const V=tn(n,w,Z);S.appendChild(V),S.appendChild(U),V.submit(),V.remove()}else c==="GET"&&(U.src=n,S.appendChild(U));return S}function an(s,e,n,c){const w=Ct("toujou-modal",s),S=document.getElementById(w)||rn(w,s,e,n,c);setTimeout(()=>{S.open()})}const sn=s=>{if(s.metaKey||s.ctrlKey)return;const e=nn(s);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const n=e.getAttribute("href"),c=n.indexOf("?")!==-1?n.split("?")[0]+"?toujou-ajax-modal=1&"+n.split("?")[1]:n.indexOf("#")!==-1?n.split("#")[0]+"?toujou-ajax-modal=1#"+n.split("#")[1]:n+"?toujou-ajax-modal=1",[w,S]=on(e,{src:c});an(S,c,w?"POST":"GET",w),s.preventDefault(),s.stopPropagation()}},un=ot`
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

`,ln={reserveScrollBarGap:!0},Ae=[];function cn(s){Ae.forEach(e=>e.close()),Ae.push(s)}function dn(s){if(s===Ae[Ae.length-1]){Ae.pop();const e=Ae.pop();e&&e.open()}}class gt extends it{static get is(){return"toujou-modal"}render(){return xe`
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
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(n=>{n[0]&&this.onPosition(n[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Kt()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Yt(this.$.scroller,ln),cn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),dn(this),this.allowOutsideScroll?document.body.style.position="":Xt(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const n=e.composedPath();(!n.includes(this.$.modalContent)||n.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const n=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=n?`${n}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(n=>n instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((n,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(n=>{this.loading=!0,n.addEventListener("load",()=>{this.iframeResizerMap.has(n)||this.listenToIframeReadyState(n)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let n={};try{n=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return n.initCallback=()=>{this.loading=!1},n.closedCallback=()=>{this.close()},ft.iframeResizer(n,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Ye(gt,"styles",[un]);customElements.define(gt.is,gt);document.addEventListener("click",sn);const fn=ot`
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
  
  :host(:focus-visible) {
    outline: var(--toujou-snackbar-focus-outline);
    outline-offset: var(--toujou-snackbar-focus-outline-offset);
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

`;class pt extends it{constructor(n){super(n);Ye(this,"keyCodes",{escape:27,enter:13});this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",c=>{this._handleAddSnackbar(c)})}static get is(){return"toujou-snackbar"}render(){return xe`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return styles}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(n){n?(this.setAttribute("visible",""),this.setAttribute("tabindex",0),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex",-1),this.blur())}set snackbarType(n){this.setAttribute("snackbarType",n)}set variant(n){this.setAttribute(n,"")}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(n){n.has("cue")&&this.cue.length>0?this._showSnackbar(this.cue[0]):n.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():n.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(n){this.cue=[...this.cue,n.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(n=>{this.hasAttribute(n)&&this.removeAttribute(n)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer(this._animationStart,this._duration)),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const n=Date.now();if(this._wasReplaced){this._removeSnackbarFromCue(),this._wasReplaced=!1,cancelAnimationFrame(this._timer);return}n-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer)}_setSnackbarValues(n){n.message&&(this.message=n.message),n.variant&&this._possibleVariants.includes(n.variant)&&(this.variant=n.variant),this.buttonText=n.buttonText||"OK",this._duration=n.duration||2500}_handleKeyDown(n){this.getAttribute("snackbartype")!=="auto"&&(n.key==="Escape"||n.keyCode===this.keyCodes.escape||n.key==="Enter"||n.keyCode===this.keyCodes.enter)&&(this._hideSnackbar(),this._afterHide())}}Ye(pt,"styles",[fn]);customElements.define(pt.is,pt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const hn=ot`
  .exit-warning__message {
    background-color: var(--bg-color);
    overflow: hidden;
    padding: var(--spacing-normal) var(--spacing-normal) var(--spacing-l);
  }
`;class bt extends it{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return xe`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&Ht(this._messageTemplate(xe,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}}Ye(bt,"styles",[hn]);customElements.define(bt.is,bt);function mn(s){const e=s.composedPath();for(let n=0;n<e.indexOf(document.body);n++){const c=e[n];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function At(s){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:s},window.location.origin),!0):(new URL(s).hostname===window.location.hostname?window.location.href=s:(e.targetUrl=s,e.open()),!0):!1}function gn(s){if(s.metaKey||s.ctrlKey)return;const e=mn(s);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const n=e.getAttribute("href");At(n)&&(s.preventDefault(),s.stopPropagation())}}function pn(s){s.origin!==window.location.origin||s.data.action===void 0||s.data.action!=="toujou-exit-warning"||!s.data.targetUrl||At(s.data.targetUrl)}document.addEventListener("click",gn);window.addEventListener("message",pn);var Et,ct,dt,bn=ot(Et||(ct=[`* {
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
`],dt||(dt=ct.slice(0)),Et=Object.freeze(Object.defineProperties(ct,{raw:{value:Object.freeze(dt)}}))));class St extends it{static get is(){return"toujou-spinner"}static get styles(){return bn}render(){return xe`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}customElements.define(St.is,St);
//# sourceMappingURL=base.js.map
