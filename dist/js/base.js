var Ft=Object.defineProperty;var Rt=(u,e,r)=>e in u?Ft(u,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[e]=r;var ot=(u,e,r)=>(Rt(u,typeof e!="symbol"?e+"":e,r),r);import{r as ct,s as dt,$ as Pe,x as It}from"./lit-element-4f5b1f7c.js";import"./query-assigned-elements-39dd8e72.js";function zt(u){if(Array.isArray(u)){for(var e=0,r=Array(u.length);e<u.length;e++)r[e]=u[e];return r}else return Array.from(u)}var nt=!1;if(typeof window<"u"){var bt={get passive(){nt=!0}};window.addEventListener("testPassive",null,bt),window.removeEventListener("testPassive",null,bt)}var Le=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),de=[],Ae=!1,ft=-1,Ye=void 0,Me=void 0,Ke=void 0,vt=function(e){return de.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},Xe=function(e){var r=e||window.event;return vt(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},Ct=function(e){if(Ke===void 0){var r=!!e&&e.reserveScrollBarGap===!0,c=window.innerWidth-document.documentElement.clientWidth;if(r&&c>0){var y=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Ke=document.body.style.paddingRight,document.body.style.paddingRight=y+c+"px"}}Ye===void 0&&(Ye=document.body.style.overflow,document.body.style.overflow="hidden")},wt=function(){Ke!==void 0&&(document.body.style.paddingRight=Ke,Ke=void 0),Ye!==void 0&&(document.body.style.overflow=Ye,Ye=void 0)},Pt=function(){return window.requestAnimationFrame(function(){if(Me===void 0){Me={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,c=e.scrollX,y=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-c,setTimeout(function(){return window.requestAnimationFrame(function(){var S=y-window.innerHeight;S&&r>=y&&(document.body.style.top=-(r+S))})},300)}})},yt=function(){if(Me!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=Me.position,document.body.style.top=Me.top,document.body.style.left=Me.left,window.scrollTo(r,e),Me=void 0}},Lt=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},At=function(e,r){var c=e.targetTouches[0].clientY-ft;return vt(e.target)?!1:r&&r.scrollTop===0&&c>0||Lt(r)&&c<0?Xe(e):(e.stopPropagation(),!0)},_t=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!de.some(function(y){return y.targetElement===e})){var c={targetElement:e,options:r||{}};de=[].concat(zt(de),[c]),Le?Pt():Ct(r),Le&&(e.ontouchstart=function(y){y.targetTouches.length===1&&(ft=y.targetTouches[0].clientY)},e.ontouchmove=function(y){y.targetTouches.length===1&&At(y,e)},Ae||(document.addEventListener("touchmove",Xe,nt?{passive:!1}:void 0),Ae=!0))}},Nt=function(){Le&&(de.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Ae&&(document.removeEventListener("touchmove",Xe,nt?{passive:!1}:void 0),Ae=!1),ft=-1),Le?yt():wt(),de=[]},Ht=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}de=de.filter(function(r){return r.targetElement!==e}),Le&&(e.ontouchstart=null,e.ontouchmove=null,Ae&&de.length===0&&(document.removeEventListener("touchmove",Xe,nt?{passive:!1}:void 0),Ae=!1)),Le?yt():wt()},kt={exports:{}},it={},Tt={exports:{}};(function(u){(function(e){if(typeof window>"u")return;var r=0,c=!1,y=!1,S="message",U=S.length,Z="[iFrameSizer]",V=Z.length,I=null,J=window.requestAnimationFrame,_e={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},i={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){D("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function _(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(o,a,g){o.addEventListener(a,g,!1)}function Ge(o,a,g){o.removeEventListener(a,g,!1)}function pe(){var o=["moz","webkit","o","ms"],a;for(a=0;a<o.length&&!J;a+=1)J=window[o[a]+"RequestAnimationFrame"];J?J=J.bind(window):v("setup","RequestAnimationFrame not supported")}function ae(o){var a="Host page: "+o;return window.top!==window.self&&(a=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+o:"Nested host page: "+o),a}function Qe(o){return Z+"["+ae(o)+"]"}function xe(o){return i[o]?i[o].log:c}function v(o,a){he("log",o,a,xe(o))}function be(o,a){he("info",o,a,xe(o))}function D(o,a){he("warn",o,a,!0)}function he(o,a,g,d){d===!0&&typeof window.console=="object"&&console[o](Qe(a),g)}function Ze(o){function a(){function l(){ge(x),we(m),ce("onResized",x)}w("Height"),w("Width"),Be(l,x,"init")}function g(){var l=q.substr(V).split(":"),p=l[1]?parseInt(l[1],10):0,j=i[l[0]]&&i[l[0]].iframe,T=getComputedStyle(j);return{iframe:j,id:l[0],height:p+d(T)+k(T),width:l[2],type:l[3]}}function d(l){if(l.boxSizing!=="border-box")return 0;var p=l.paddingTop?parseInt(l.paddingTop,10):0,j=l.paddingBottom?parseInt(l.paddingBottom,10):0;return p+j}function k(l){if(l.boxSizing!=="border-box")return 0;var p=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,j=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return p+j}function w(l){var p=Number(i[m]["max"+l]),j=Number(i[m]["min"+l]),T=l.toLowerCase(),O=Number(x[T]);v(m,"Checking "+T+" is in range "+j+"-"+p),O<j&&(O=j,v(m,"Set "+T+" to min value")),O>p&&(O=p,v(m,"Set "+T+" to max value")),x[T]=""+O}function X(){function l(){function T(){var H=0,ee=!1;for(v(m,"Checking connection is from allowed list of origins: "+j);H<j.length;H++)if(j[H]===p){ee=!0;break}return ee}function O(){var H=i[m]&&i[m].remoteHost;return v(m,"Checking connection is from: "+H),p===H}return j.constructor===Array?T():O()}var p=o.origin,j=i[m]&&i[m].checkOrigin;if(j&&""+p!="null"&&!l())throw new Error("Unexpected message received from: "+p+" for "+x.iframe.id+". Message was: "+o.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function le(){return Z===(""+q).substr(0,V)&&q.substr(V).split(":")[0]in i}function Y(){var l=x.type in{true:1,false:1,undefined:1};return l&&v(m,"Ignoring init message from meta parent page"),l}function $(l){return q.substr(q.indexOf(":")+U+l)}function oe(l){v(m,"onMessage passed: {iframe: "+x.iframe.id+", message: "+l+"}"),ce("onMessage",{iframe:x.iframe,message:JSON.parse(l)}),v(m,"--")}function L(){var l=document.body.getBoundingClientRect(),p=x.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:p.height,iframeWidth:p.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(p.top-l.top,10),offsetLeft:parseInt(p.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Te(l,p){function j(){z("Send Page Info","pageInfo:"+L(),l,p)}Ve(j,32,p)}function Oe(){function l(O,H){function ee(){i[T]?Te(i[T].iframe,T):p()}["scroll","resize"].forEach(function(ne){v(T,O+ne+" listener for sendPageInfo"),H(window,ne,ee)})}function p(){l("Remove ",Ge)}function j(){l("Add ",re)}var T=m;j(),i[T]&&(i[T].stopPageInfo=p)}function Fe(){i[m]&&i[m].stopPageInfo&&(i[m].stopPageInfo(),delete i[m].stopPageInfo)}function Re(){var l=!0;return x.iframe===null&&(D(m,"IFrame ("+x.id+") not found"),l=!1),l}function f(l){var p=l.getBoundingClientRect();return je(m),{x:Math.floor(Number(p.left)+Number(I.x)),y:Math.floor(Number(p.top)+Number(I.y))}}function h(l){function p(){I=H,P(),v(m,"--")}function j(){return{x:Number(x.width)+O.x,y:Number(x.height)+O.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](H.x,H.y):D(m,"Unable to scroll to requested position, window.parentIFrame not found")}var O=l?f(x.iframe):{x:0,y:0},H=j();v(m,"Reposition requested from iFrame (offset x:"+O.x+" y:"+O.y+")"),window.top!==window.self?T():p()}function P(){ce("onScroll",I)!==!1?we(m):He()}function N(l){function p(){var ee=f(H);v(m,"Moving to in page link (#"+T+") at x: "+ee.x+" y: "+ee.y),I={x:ee.x,y:ee.y},P(),v(m,"--")}function j(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):v(m,"In page link #"+T+" not found and window.parentIFrame not found")}var T=l.split("#")[1]||"",O=decodeURIComponent(T),H=document.getElementById(O)||document.getElementsByName(O)[0];H?p():window.top!==window.self?j():v(m,"In page link #"+T+" not found")}function K(l){var p={};if(Number(x.width)===0&&Number(x.height)===0){var j=$(9).split(":");p={x:j[1],y:j[0]}}else p={x:x.width,y:x.height};ce(l,{iframe:x.iframe,screenX:Number(p.x),screenY:Number(p.y),type:x.type})}function ce(l,p){return ve(m,l,p)}function De(){switch(i[m]&&i[m].firstRun&&Je(),x.type){case"close":se(x.iframe);break;case"message":oe($(6));break;case"mouseenter":K("onMouseEnter");break;case"mouseleave":K("onMouseLeave");break;case"autoResize":i[m].autoResize=JSON.parse($(9));break;case"scrollTo":h(!1);break;case"scrollToOffset":h(!0);break;case"pageInfo":Te(i[m]&&i[m].iframe,m),Oe();break;case"pageInfoStop":Fe();break;case"inPageLink":N($(9));break;case"reset":me(x);break;case"init":a(),ce("onInit",x.iframe);break;default:Number(x.width)===0&&Number(x.height)===0?D("Unsupported message received ("+x.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):a()}}function Ie(l){var p=!0;return i[l]||(p=!1,D(x.type+" No settings for "+l+". Message was: "+q)),p}function Ue(){for(var l in i)z("iFrame requested init",$e(l),i[l].iframe,l)}function Je(){i[m]&&(i[m].firstRun=!1)}var q=o.data,x={},m=null;q==="[iFrameResizerChild]Ready"?Ue():le()?(x=g(),m=x.id,i[m]&&(i[m].loaded=!0),!Y()&&Ie(m)&&(v(m,"Received: "+q),Re()&&X()&&De())):be(m,"Ignored: "+q)}function ve(o,a,g){var d=null,k=null;if(i[o])if(d=i[o][a],typeof d=="function")k=d(g);else throw new TypeError(a+" on iFrame["+o+"] is not a function");return k}function Ne(o){var a=o.id;delete i[a]}function se(o){var a=o.id;if(ve(a,"onClose",a)===!1){v(a,"Close iframe cancelled by onClose event");return}v(a,"Removing iFrame: "+a);try{o.parentNode&&o.parentNode.removeChild(o)}catch(g){D(g)}ve(a,"onClosed",a),v(a,"--"),Ne(o)}function je(o){I===null&&(I={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},v(o,"Get page position: "+I.x+","+I.y))}function we(o){I!==null&&(window.scrollTo(I.x,I.y),v(o,"Set page position: "+I.x+","+I.y),He())}function He(){I=null}function me(o){function a(){ge(o),z("reset","reset",o.iframe,o.id)}v(o.id,"Size reset requested by "+(o.type==="init"?"host page":"iFrame")),je(o.id),Be(a,o,"reset")}function ge(o){function a(w){if(!o.id){v("undefined","messageData id not set");return}o.iframe.style[w]=o[w]+"px",v(o.id,"IFrame ("+k+") "+w+" set to "+o[w]+"px")}function g(w){!y&&o[w]==="0"&&(y=!0,v(k,"Hidden iFrame detected, creating visibility listener"),et())}function d(w){a(w),g(w)}var k=o.iframe.id;i[k]&&(i[k].sizeHeight&&d("height"),i[k].sizeWidth&&d("width"))}function Be(o,a,g){g!==a.type&&J&&!window.jasmine?(v(a.id,"Requesting animation frame"),J(o)):o()}function z(o,a,g,d,k){function w(){var oe=i[d]&&i[d].targetOrigin;v(d,"["+o+"] Sending msg to iframe["+d+"] ("+a+") targetOrigin: "+oe),g.contentWindow.postMessage(Z+a,oe)}function X(){D(d,"["+o+"] IFrame("+d+") not found")}function le(){g&&"contentWindow"in g&&g.contentWindow!==null?w():X()}function Y(){function oe(){i[d]&&!i[d].loaded&&!$&&($=!0,D(d,"IFrame has not responded within "+i[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}!!k&&i[d]&&!!i[d].warningTimeout&&(i[d].msgTimeout=setTimeout(oe,i[d].warningTimeout))}var $=!1;d=d||g.id,i[d]&&(le(),Y())}function $e(o){return o+":"+i[o].bodyMarginV1+":"+i[o].sizeWidth+":"+i[o].log+":"+i[o].interval+":"+i[o].enablePublicMethods+":"+i[o].autoResize+":"+i[o].bodyMargin+":"+i[o].heightCalculationMethod+":"+i[o].bodyBackground+":"+i[o].bodyPadding+":"+i[o].tolerance+":"+i[o].inPageLinks+":"+i[o].resizeFrom+":"+i[o].widthCalculationMethod+":"+i[o].mouseEvents}function We(o){return typeof o=="number"}function Ee(o,a){function g(){function h(N){var K=i[f][N];K!==1/0&&K!==0&&(o.style[N]=We(K)?K+"px":K,v(f,"Set "+N+" = "+o.style[N]))}function P(N){if(i[f]["min"+N]>i[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}P("Height"),P("Width"),h("maxHeight"),h("minHeight"),h("maxWidth"),h("minWidth")}function d(){var h=a&&a.id||fe.id+r++;return document.getElementById(h)!==null&&(h+=r++),h}function k(h){return h===""&&(o.id=h=d(),c=(a||{}).log,v(h,"Added missing iframe ID: "+h+" ("+o.src+")")),h}function w(){switch(v(f,"IFrame scrolling "+(i[f]&&i[f].scrolling?"enabled":"disabled")+" for "+f),o.style.overflow=(i[f]&&i[f].scrolling)===!1?"hidden":"auto",i[f]&&i[f].scrolling){case"omit":break;case!0:o.scrolling="yes";break;case!1:o.scrolling="no";break;default:o.scrolling=i[f]?i[f].scrolling:"no"}}function X(){(typeof(i[f]&&i[f].bodyMargin)=="number"||(i[f]&&i[f].bodyMargin)==="0")&&(i[f].bodyMarginV1=i[f].bodyMargin,i[f].bodyMargin=""+i[f].bodyMargin+"px")}function le(){var h=i[f]&&i[f].firstRun,P=i[f]&&i[f].heightCalculationMethod in _e;!h&&P&&me({iframe:o,height:0,width:0,type:"init"})}function Y(){i[f]&&(i[f].iframe.iFrameResizer={close:se.bind(null,i[f].iframe),removeListeners:Ne.bind(null,i[f].iframe),resize:z.bind(null,"Window resize","resize",i[f].iframe),moveToAnchor:function(h){z("Move to anchor","moveToAnchor:"+h,i[f].iframe,f)},sendMessage:function(h){h=JSON.stringify(h),z("Send Message","message:"+h,i[f].iframe,f)}})}function $(h){function P(){z("iFrame.onload",h,o,e,!0),le()}function N(ce){if(!!o.parentNode){var De=new ce(function(Ie){Ie.forEach(function(Ue){var Je=Array.prototype.slice.call(Ue.removedNodes);Je.forEach(function(q){q===o&&se(o)})})});De.observe(o.parentNode,{childList:!0})}}var K=_();K&&N(K),re(o,"load",P),z("init",h,o,e,!0)}function oe(h){if(typeof h!="object")throw new TypeError("Options is not an object")}function L(h){for(var P in fe)Object.prototype.hasOwnProperty.call(fe,P)&&(i[f][P]=Object.prototype.hasOwnProperty.call(h,P)?h[P]:fe[P])}function Te(h){return h===""||h.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":h}function Oe(h){var P=h.split("Callback");if(P.length===2){var N="on"+P[0].charAt(0).toUpperCase()+P[0].slice(1);this[N]=this[h],delete this[h],D(f,"Deprecated: '"+h+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Fe(h){h=h||{},i[f]={firstRun:!0,iframe:o,remoteHost:o.src&&o.src.split("/").slice(0,3).join("/")},oe(h),Object.keys(h).forEach(Oe,h),L(h),i[f]&&(i[f].targetOrigin=i[f].checkOrigin===!0?Te(i[f].remoteHost):"*")}function Re(){return f in i&&"iFrameResizer"in o}var f=k(o.id);Re()?D(f,"Ignored iFrame, already setup."):(Fe(a),w(),g(),X(),$($e(f)),Y())}function ye(o,a){ie===null&&(ie=setTimeout(function(){ie=null,o()},a))}var ke={};function Ve(o,a,g){ke[g]||(ke[g]=setTimeout(function(){ke[g]=null,o()},a))}function et(){function o(){function k(w){function X(Y){return(i[w]&&i[w].iframe.style[Y])==="0px"}function le(Y){return Y.offsetParent!==null}i[w]&&le(i[w].iframe)&&(X("height")||X("width"))&&z("Visibility change","resize",i[w].iframe,w)}Object.keys(i).forEach(function(w){k(w)})}function a(k){v("window","Mutation observed: "+k[0].target+" "+k[0].type),ye(o,16)}function g(){var k=document.querySelector("body"),w={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},X=new d(a);X.observe(k,w)}var d=_();d&&g()}function tt(o){function a(){ue("Window "+o,"resize")}v("window","Trigger event: "+o),ye(a,16)}function qe(){function o(){ue("Tab Visable","resize")}document.visibilityState!=="hidden"&&(v("document","Trigger event: Visiblity change"),ye(o,16))}function ue(o,a){function g(d){return i[d]&&i[d].resizeFrom==="parent"&&i[d].autoResize&&!i[d].firstRun}Object.keys(i).forEach(function(d){g(d)&&z(o,a,i[d].iframe,d)})}function rt(){re(window,"message",Ze),re(window,"resize",function(){tt("resize")}),re(document,"visibilitychange",qe),re(document,"-webkit-visibilitychange",qe)}function Se(){function o(d,k){function w(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(w(),Ee(k,d),g.push(k))}function a(d){d&&d.enablePublicMethods&&D("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var g;return pe(),rt(),function(k,w){switch(g=[],a(k),typeof w){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(w||"iframe"),o.bind(e,k));break;case"object":o(k,w);break;default:throw new TypeError("Unexpected data type ("+typeof w+")")}return g}}function at(o){o.fn?o.fn.iFrameResize||(o.fn.iFrameResize=function(g){function d(k,w){Ee(w,g)}return this.filter("iframe").each(d).end()}):be("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&at(window.jQuery),typeof e=="function"&&e.amd?e([],Se):u.exports=Se(),window.iFrameResize=window.iFrameResize||Se()})()})(Tt);var Mt={exports:{}};(function(u){(function(e){if(typeof window>"u")return;var r=!0,c=10,y="",S=0,U="",Z=null,V="",I=!1,J={resize:1,click:1},_e=128,i=!0,ie=1,fe="bodyOffset",_=fe,re=!0,Ge="",pe={},ae=32,Qe=null,xe=!1,v=!1,be="[iFrameSizer]",D=be.length,he="",Ze={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",Ne=window.parent,se="*",je=0,we=!1,He=null,me=16,ge=1,Be="scroll",z=Be,$e=window,We=function(){g("onMessage function not defined")},Ee=function(){},ye=function(){},ke={height:function(){return g("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return g("Custom width calculation function not defined"),document.body.scrollWidth}},Ve={},et=!1;function tt(){}try{var qe=Object.create({},{passive:{get:function(){et=!0}}});window.addEventListener("test",tt,qe),window.removeEventListener("test",tt,qe)}catch{}function ue(t,n,s,b){t.addEventListener(n,s,et?b||{}:!1)}function rt(t,n,s){t.removeEventListener(n,s,!1)}function Se(t){return t.charAt(0).toUpperCase()+t.slice(1)}function at(t){var n,s,b,E=null,A=0,W=function(){A=Date.now(),E=null,b=t.apply(n,s),E||(n=s=null)};return function(){var B=Date.now();A||(A=B);var F=me-(B-A);return n=this,s=arguments,F<=0||F>me?(E&&(clearTimeout(E),E=null),A=B,b=t.apply(n,s),E||(n=s=null)):E||(E=setTimeout(W,F)),b}}function o(t){return be+"["+he+"] "+t}function a(t){xe&&typeof window.console=="object"&&console.log(o(t))}function g(t){typeof window.console=="object"&&console.warn(o(t))}function d(){k(),a("Initialising iFrame ("+window.location.href+")"),X(),$(),Y("background",y),Y("padding",V),N(),Fe(),Re(),oe(),De(),ce(),f(),pe=K(),ne("init","Init message from host page"),Ee()}function k(){function t(s){return s==="true"}var n=Ge.substr(D).split(":");he=n[0],S=e!==n[1]?Number(n[1]):S,I=e!==n[2]?t(n[2]):I,xe=e!==n[3]?t(n[3]):xe,ae=e!==n[4]?Number(n[4]):ae,r=e!==n[6]?t(n[6]):r,U=n[7],_=e!==n[8]?n[8]:_,y=n[9],V=n[10],je=e!==n[11]?Number(n[11]):je,pe.enable=e!==n[12]?t(n[12]):!1,ve=e!==n[13]?n[13]:ve,z=e!==n[14]?n[14]:z,v=e!==n[15]?Boolean(n[15]):v}function w(t){var n=t.split("Callback");if(n.length===2){var s="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[s]=this[t],delete this[t],g("Deprecated: '"+t+"' has been renamed '"+s+"'. The old method will be removed in the next major version.")}}function X(){function t(){var s=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(s)),Object.keys(s).forEach(w,s),We="onMessage"in s?s.onMessage:We,Ee="onReady"in s?s.onReady:Ee,se="targetOrigin"in s?s.targetOrigin:se,_="heightCalculationMethod"in s?s.heightCalculationMethod:_,z="widthCalculationMethod"in s?s.widthCalculationMethod:z}function n(s,b){return typeof s=="function"&&(a("Setup custom "+b+"CalcMethod"),ke[b]=s,s="custom"),s}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),_=n(_,"height"),z=n(z,"width")),a("TargetOrigin for parent set to: "+se)}function le(t,n){return n.indexOf("-")!==-1&&(g("Negative CSS value ignored for "+t),n=""),n}function Y(t,n){e!==n&&n!==""&&n!=="null"&&(document.body.style[t]=n,a("Body "+t+' set to "'+n+'"'))}function $(){e===U&&(U=S+"px"),Y("margin",le("margin",U))}function oe(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function L(t){var n={add:function(s){function b(){ne(t.eventName,t.eventType)}Ve[s]=b,ue(window,s,b,{passive:!0})},remove:function(s){var b=Ve[s];delete Ve[s],rt(window,s,b)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(n[t.method])):n[t.method](t.eventName),a(Se(t.method)+" event listener: "+t.eventType)}function Te(t){L({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),L({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),L({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),L({method:t,eventType:"Input",eventName:"input"}),L({method:t,eventType:"Mouse Up",eventName:"mouseup"}),L({method:t,eventType:"Mouse Down",eventName:"mousedown"}),L({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),L({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),L({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),L({method:t,eventType:"Touch Start",eventName:"touchstart"}),L({method:t,eventType:"Touch End",eventName:"touchend"}),L({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),L({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),L({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),L({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ve==="child"&&L({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Oe(t,n,s,b){return n!==t&&(t in s||(g(t+" is not a valid option for "+b+"CalculationMethod."),t=n),a(b+' calculation method set to "'+t+'"')),t}function Fe(){_=Oe(_,fe,T,"height")}function Re(){z=Oe(z,Be,O,"width")}function f(){r===!0?(Te("add"),Je()):a("Auto Resize disabled")}function h(){Z!==null&&Z.disconnect()}function P(){Te("remove"),h(),clearInterval(Qe)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function K(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function n(F){var C=F.getBoundingClientRect(),R=t();return{x:parseInt(C.left,10)+parseInt(R.x,10),y:parseInt(C.top,10)+parseInt(R.y,10)}}function s(F){function C(te){var ze=n(te);a("Moving to in page link (#"+R+") at x: "+ze.x+" y: "+ze.y),G(ze.y,ze.x,"scrollToOffset")}var R=F.split("#")[1]||F,M=decodeURIComponent(R),Q=document.getElementById(M)||document.getElementsByName(M)[0];e!==Q?C(Q):(a("In page link (#"+R+") not found in iFrame, so sending to parent"),G(0,0,"inPageLink","#"+R))}function b(){var F=window.location.hash,C=window.location.href;F!==""&&F!=="#"&&s(C)}function E(){function F(C){function R(M){M.preventDefault(),s(this.getAttribute("href"))}C.getAttribute("href")!=="#"&&ue(C,"click",R)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),F)}function A(){ue(window,"hashchange",b)}function W(){setTimeout(b,_e)}function B(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),E(),A(),W()):g("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return pe.enable?B():a("In page linking not enabled"),{findTarget:s}}function ce(){if(v!==!0)return;function t(s){G(0,0,s.type,s.screenY+":"+s.screenX)}function n(s,b){a("Add event listener: "+b),ue(window.document,s,t)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}function De(){a("Enable public methods"),$e.parentIFrame={autoResize:function(n){return n===!0&&r===!1?(r=!0,f()):n===!1&&r===!0&&(r=!1,P()),G(0,0,"autoResize",JSON.stringify(r)),r},close:function(){G(0,0,"close")},getId:function(){return he},getPageInfo:function(n){typeof n=="function"?(ye=n,G(0,0,"pageInfo")):(ye=function(){},G(0,0,"pageInfoStop"))},moveToAnchor:function(n){pe.findTarget(n)},reset:function(){gt("parentIFrame.reset")},scrollTo:function(n,s){G(s,n,"scrollTo")},scrollToOffset:function(n,s){G(s,n,"scrollToOffset")},sendMessage:function(n,s){G(0,0,"message",JSON.stringify(n),s)},setHeightCalculationMethod:function(n){_=n,Fe()},setWidthCalculationMethod:function(n){z=n,Re()},setTargetOrigin:function(n){a("Set targetOrigin: "+n),se=n},size:function(n,s){var b=""+(n||"")+(s?","+s:"");ne("size","parentIFrame.size("+b+")",n,s)}}}function Ie(){ae!==0&&(a("setInterval: "+ae+"ms"),Qe=setInterval(function(){ne("interval","setInterval: "+ae)},Math.abs(ae)))}function Ue(){function t(M){function Q(te){te.complete===!1&&(a("Attach listeners to "+te.src),te.addEventListener("load",E,!1),te.addEventListener("error",A,!1),F.push(te))}M.type==="attributes"&&M.attributeName==="src"?Q(M.target):M.type==="childList"&&Array.prototype.forEach.call(M.target.querySelectorAll("img"),Q)}function n(M){F.splice(F.indexOf(M),1)}function s(M){a("Remove listeners from "+M.src),M.removeEventListener("load",E,!1),M.removeEventListener("error",A,!1),n(M)}function b(M,Q,te){s(M.target),ne(Q,te+": "+M.target.src)}function E(M){b(M,"imageLoad","Image loaded")}function A(M){b(M,"imageLoadFailed","Image load failed")}function W(M){ne("mutationObserver","mutationObserver: "+M[0].target+" "+M[0].type),M.forEach(t)}function B(){var M=document.querySelector("body"),Q={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return R=new C(W),a("Create body MutationObserver"),R.observe(M,Q),R}var F=[],C=window.MutationObserver||window.WebKitMutationObserver,R=B();return{disconnect:function(){"disconnect"in R&&(a("Disconnect body MutationObserver"),R.disconnect(),F.forEach(s))}}}function Je(){var t=0>ae;window.MutationObserver||window.WebKitMutationObserver?t?Ie():Z=Ue():(a("MutationObserver not supported in this browser!"),Ie())}function q(t,n){var s=0;return n=n||document.body,s=document.defaultView.getComputedStyle(n,null),s=s!==null?s[t]:0,parseInt(s,c)}function x(t){t>me/2&&(me=2*t,a("Event throttle increased to "+me+"ms"))}function m(t,n){for(var s=n.length,b=0,E=0,A=Se(t),W=Date.now(),B=0;B<s;B++)b=n[B].getBoundingClientRect()[t]+q("margin"+A,n[B]),b>E&&(E=b);return W=Date.now()-W,a("Parsed "+s+" HTML elements"),a("Element position calculated in "+W+"ms"),x(W),E}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function p(t,n){function s(){return g("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")}var b=document.querySelectorAll("["+n+"]");return b.length===0&&s(),m(t,b)}function j(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+q("marginTop")+q("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return ke.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(T))},min:function(){return Math.min.apply(null,l(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),m("bottom",j()))},taggedElement:function(){return p("bottom","data-iframe-height")}},O={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return ke.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(O.bodyScroll(),O.documentElementScroll())},max:function(){return Math.max.apply(null,l(O))},min:function(){return Math.min.apply(null,l(O))},rightMostElement:function(){return m("right",j())},taggedElement:function(){return p("right","data-iframe-width")}};function H(t,n,s,b){function E(){ie=R,ge=M,G(ie,ge,t)}function A(){function Q(te,ze){var Ot=Math.abs(te-ze)<=je;return!Ot}return R=e!==s?s:T[_](),M=e!==b?b:O[z](),Q(ie,R)||I&&Q(ge,M)}function W(){return!(t in{init:1,interval:1,size:1})}function B(){return _ in Ze||I&&z in Ze}function F(){a("No change in size detected")}function C(){W()&&B()?gt(n):t in{interval:1}||F()}var R,M;A()||t==="init"?(ht(),E()):C()}var ee=at(H);function ne(t,n,s,b){function E(){t in{reset:1,resetPage:1,init:1}||a("Trigger event: "+n)}function A(){return we&&t in J}A()?a("Trigger event cancelled: "+t):(E(),t==="init"?H(t,n,s,b):ee(t,n,s,b))}function ht(){we||(we=!0,a("Trigger event lock on")),clearTimeout(He),He=setTimeout(function(){we=!1,a("Trigger event lock off"),a("--")},_e)}function mt(t){ie=T[_](),ge=O[z](),G(ie,ge,t)}function gt(t){var n=_;_=fe,a("Reset trigger event: "+t),ht(),mt("reset"),_=n}function G(t,n,s,b,E){function A(){e===E?E=se:a("Message targetOrigin: "+E)}function W(){var B=t+":"+n,F=he+":"+B+":"+s+(e!==b?":"+b:"");a("Sending message to host page ("+F+")"),Ne.postMessage(be+F,E)}A(),W()}function St(t){var n={init:function(){Ge=t.data,Ne=t.source,d(),i=!1,setTimeout(function(){re=!1},_e)},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),mt("resetPage"))},resize:function(){ne("resizeParent","Parent window requested size check")},moveToAnchor:function(){pe.findTarget(E())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var R=E();a("PageInfoFromParent called from parent: "+R),ye(JSON.parse(R)),a(" --")},message:function(){var R=E();a("onMessage called from parent: "+R),We(JSON.parse(R)),a(" --")}};function s(){return be===(""+t.data).substr(0,D)}function b(){return t.data.split("]")[1].split(":")[0]}function E(){return t.data.substr(t.data.indexOf(":")+1)}function A(){return!u.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function W(){return t.data.split(":")[2]in{true:1,false:1}}function B(){var C=b();C in n?n[C]():!A()&&!W()&&g("Unexpected message ("+t.data+")")}function F(){i===!1?B():W()?n.init():a('Ignored message of type "'+b()+'". Received before initialization.')}s()&&F()}function pt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ue(window,"message",St),ue(window,"readystatechange",pt),pt()})()})(Mt);var xt=Tt.exports;it.iframeResize=xt;it.iframeResizer=xt;it.iframeResizerContentWindow=Mt.exports;(function(u){u.exports=it})(kt);function Bt(u){const e=document.createElement("a");return e.href=u,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function Wt(u){const e=Bt(u),r=e.href.substr(0,e.href.length-e.hash.length),c=window.location.href.replace(/#.*$/,"");return e.hash&&r===c}function jt(u,e){const r=JSON.stringify(e);let c=0;if(r.length===0)return c;for(let y=0;y<r.length;y++){const S=r.charCodeAt(y);c=(c<<5)-c+S,c&=c}return`${u}-${c}`}function Vt(u,e,r){const c=document.createElement("form"),y=document.createElement("input");return c.action=u,c.method="POST",c.target=r,e.forEach(([S,U])=>{y.name=S,y.value=U.toString(),c.appendChild(y.cloneNode())}),c.style.visibility="hidden",c}function qt(u){const e=u.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function Dt(u,e){if(u.hasAttribute("data-modal-post")){const r=u.getAttribute("data-modal-post");e.method="POST",e.body=r;const c=[];return new URL(`http://localhost/?${r}`).searchParams.forEach((y,S)=>{c.push([S,y])}),[c,e]}return[null,e]}function Ut(u,e,r,c,y){const S=document.createElement("toujou-modal"),U=document.createElement("iframe"),Z=jt("iframe",e);if(S.id=u,U.name=Z,document.body.appendChild(S),Wt(r)){const V=document.querySelector(r),I=V instanceof HTMLTemplateElement?document.importNode(V.content,!0).children:V.childNodes;V.title&&(S.title=V.title);for(let J=0;J<I.length;J++)S.appendChild(I[J])}else if(y&&c==="POST"){const V=Vt(r,y,Z);S.appendChild(V),S.appendChild(U),V.submit(),V.remove()}else c==="GET"&&(U.src=r,S.appendChild(U));return S}function Jt(u,e,r,c){const y=jt("toujou-modal",u),S=document.getElementById(y)||Ut(y,u,e,r,c);setTimeout(()=>{S.open()})}const Yt=u=>{if(u.metaKey||u.ctrlKey)return;const e=qt(u);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const r=e.getAttribute("href"),c=r.indexOf("?")!==-1?r.split("?")[0]+"?toujou-ajax-modal=1&"+r.split("?")[1]:r.indexOf("#")!==-1?r.split("#")[0]+"?toujou-ajax-modal=1#"+r.split("#")[1]:r+"?toujou-ajax-modal=1",[y,S]=Dt(e,{src:c});Jt(S,c,y?"POST":"GET",y),u.preventDefault(),u.stopPropagation()}},Kt=ct`
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

`,Xt={reserveScrollBarGap:!0},Ce=[];function Gt(u){Ce.forEach(e=>e.close()),Ce.push(u)}function Qt(u){if(u===Ce[Ce.length-1]){Ce.pop();const e=Ce.pop();e&&e.open()}}class st extends dt{static get is(){return"toujou-modal"}render(){return Pe`
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
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(r=>{r[0]&&this.onPosition(r[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Nt()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":_t(this.$.scroller,Xt),Gt(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),Qt(this),this.allowOutsideScroll?document.body.style.position="":Ht(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const r=e.composedPath();(!r.includes(this.$.modalContent)||r.some(c=>c instanceof HTMLElement&&c.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const r=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=r?`${r}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(r=>r instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((r,c)=>{e.includes(c)||this.iframeResizerMap.delete(c)}),e.forEach(r=>{this.loading=!0,r.addEventListener("load",()=>{this.iframeResizerMap.has(r)||this.listenToIframeReadyState(r)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let r={};try{r=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(c){(console.error||console.log).call(console,c.stack||c)}return r.initCallback=()=>{this.loading=!1},r.closedCallback=()=>{this.close()},kt.exports.iframeResizer(r,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}ot(st,"styles",[Kt]);customElements.define(st.is,st);document.addEventListener("click",Yt);const Zt=ct`
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

`;class ut extends dt{static get is(){return"toujou-snackbar"}render(){return Pe`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return styles}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?this.setAttribute("visible",""):this.removeAttribute("visible")}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(e){super(e),this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",r=>{this._handleAddSnackbar(r)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this)}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar(this.cue[0]):e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer(this._animationStart,this._duration)),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced){this._removeSnackbarFromCue(),this._wasReplaced=!1,cancelAnimationFrame(this._timer);return}e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}}ot(ut,"styles",[Zt]);customElements.define(ut.is,ut);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const $t=ct`
  .exit-warning__message {
    background-color: var(--bg-color);
    overflow: hidden;
    padding: 1em 1em 0;
  }
`;class lt extends dt{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=5,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return Pe`
      <toujou-modal title="${this.title}">
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback(),this.addEventListener("opened-changed",r=>{console.log(r)})}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&It(this._messageTemplate(Pe,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}}ot(lt,"styles",[$t]);customElements.define(lt.is,lt);function eo(u){const e=u.composedPath();for(let r=0;r<e.indexOf(document.body);r++){const c=e[r];if(c.hasAttribute&&c.hasAttribute("target")&&c!==document.body)return c}}function Et(u){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:u},window.location.origin),!0):(new URL(u).hostname===window.location.hostname?window.location.href=u:(e.targetUrl=u,e.open()),!0):!1}function to(u){if(u.metaKey||u.ctrlKey)return;const e=eo(u);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const r=e.getAttribute("href");Et(r)&&(u.preventDefault(),u.stopPropagation())}}function oo(u){u.origin!==window.location.origin||u.data.action===void 0||u.data.action!=="toujou-exit-warning"||!u.data.targetUrl||Et(u.data.targetUrl)}document.addEventListener("click",to);window.addEventListener("message",oo);
//# sourceMappingURL=base.js.map
