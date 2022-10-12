var It=Object.defineProperty;var Rt=(c,e,n)=>e in c?It(c,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[e]=n;var je=(c,e,n)=>(Rt(c,typeof e!="symbol"?e+"":e,n),n);import{r as Ne,s as Be,$ as de,x as At}from"./lit-element-f92abbea.js";import"./query-assigned-elements-39dd8e72.js";import{c as zt,d as Pt,u as Lt,a as Nt,b as Bt}from"./consentsStore-eaa8b07b.js";function Wt(c){if(Array.isArray(c)){for(var e=0,n=Array(c.length);e<c.length;e++)n[e]=c[e];return n}else return Array.from(c)}var rt=!1;if(typeof window<"u"){var wt={get passive(){rt=!0}};window.addEventListener("testPassive",null,wt),window.removeEventListener("testPassive",null,wt)}var Pe=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),he=[],Le=!1,gt=-1,Xe=void 0,Ee=void 0,Qe=void 0,kt=function(e){return he.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},Ze=function(e){var n=e||window.event;return kt(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Ht=function(e){if(Qe===void 0){var n=!!e&&e.reserveScrollBarGap===!0,u=window.innerWidth-document.documentElement.clientWidth;if(n&&u>0){var d=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Qe=document.body.style.paddingRight,document.body.style.paddingRight=d+u+"px"}}Xe===void 0&&(Xe=document.body.style.overflow,document.body.style.overflow="hidden")},xt=function(){Qe!==void 0&&(document.body.style.paddingRight=Qe,Qe=void 0),Xe!==void 0&&(document.body.style.overflow=Xe,Xe=void 0)},Dt=function(){return window.requestAnimationFrame(function(){if(Ee===void 0){Ee={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,u=e.scrollX,d=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-u,setTimeout(function(){return window.requestAnimationFrame(function(){var E=d-window.innerHeight;E&&n>=d&&(document.body.style.top=-(n+E))})},300)}})},Tt=function(){if(Ee!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Ee.position,document.body.style.top=Ee.top,document.body.style.left=Ee.left,window.scrollTo(n,e),Ee=void 0}},qt=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Vt=function(e,n){var u=e.targetTouches[0].clientY-gt;return kt(e.target)?!1:n&&n.scrollTop===0&&u>0||qt(n)&&u<0?Ze(e):(e.stopPropagation(),!0)},Ut=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!he.some(function(d){return d.targetElement===e})){var u={targetElement:e,options:n||{}};he=[].concat(Wt(he),[u]),Pe?Dt():Ht(n),Pe&&(e.ontouchstart=function(d){d.targetTouches.length===1&&(gt=d.targetTouches[0].clientY)},e.ontouchmove=function(d){d.targetTouches.length===1&&Vt(d,e)},Le||(document.addEventListener("touchmove",Ze,rt?{passive:!1}:void 0),Le=!0))}},Jt=function(){Pe&&(he.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Le&&(document.removeEventListener("touchmove",Ze,rt?{passive:!1}:void 0),Le=!1),gt=-1),Pe?Tt():xt(),he=[]},Yt=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}he=he.filter(function(n){return n.targetElement!==e}),Pe&&(e.ontouchstart=null,e.ontouchmove=null,Le&&he.length===0&&(document.removeEventListener("touchmove",Ze,rt?{passive:!1}:void 0),Le=!1)),Pe?Tt():xt()},jt={exports:{}},st={},Et={exports:{}};(function(c){(function(e){if(typeof window>"u")return;var n=0,u=!1,d=!1,E="message",U=E.length,Z="[iFrameSizer]",D=Z.length,F=null,J=window.requestAnimationFrame,We={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},r={},ie=null,fe={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){V("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function L(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function re(o,s,p){o.addEventListener(s,p,!1)}function $e(o,s,p){o.removeEventListener(s,p,!1)}function be(){var o=["moz","webkit","o","ms"],s;for(s=0;s<o.length&&!J;s+=1)J=window[o[s]+"RequestAnimationFrame"];J?J=J.bind(window):y("setup","RequestAnimationFrame not supported")}function se(o){var s="Host page: "+o;return window.top!==window.self&&(s=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+o:"Nested host page: "+o),s}function et(o){return Z+"["+se(o)+"]"}function Se(o){return r[o]?r[o].log:u}function y(o,s){me("log",o,s,Se(o))}function ve(o,s){me("info",o,s,Se(o))}function V(o,s){me("warn",o,s,!0)}function me(o,s,p,h){h===!0&&typeof window.console=="object"&&console[o](et(s),p)}function tt(o){function s(){function l(){pe(j),we(g),le("onResized",j)}w("Height"),w("Width"),qe(l,j,"init")}function p(){var l=q.substr(D).split(":"),b=l[1]?parseInt(l[1],10):0,S=r[l[0]]&&r[l[0]].iframe,x=getComputedStyle(S);return{iframe:S,id:l[0],height:b+h(x)+k(x),width:l[2],type:l[3]}}function h(l){if(l.boxSizing!=="border-box")return 0;var b=l.paddingTop?parseInt(l.paddingTop,10):0,S=l.paddingBottom?parseInt(l.paddingBottom,10):0;return b+S}function k(l){if(l.boxSizing!=="border-box")return 0;var b=l.borderTopWidth?parseInt(l.borderTopWidth,10):0,S=l.borderBottomWidth?parseInt(l.borderBottomWidth,10):0;return b+S}function w(l){var b=Number(r[g]["max"+l]),S=Number(r[g]["min"+l]),x=l.toLowerCase(),_=Number(j[x]);y(g,"Checking "+x+" is in range "+S+"-"+b),_<S&&(_=S,y(g,"Set "+x+" to min value")),_>b&&(_=b,y(g,"Set "+x+" to max value")),j[x]=""+_}function K(){function l(){function x(){var B=0,ee=!1;for(y(g,"Checking connection is from allowed list of origins: "+S);B<S.length;B++)if(S[B]===b){ee=!0;break}return ee}function _(){var B=r[g]&&r[g].remoteHost;return y(g,"Checking connection is from: "+B),b===B}return S.constructor===Array?x():_()}var b=o.origin,S=r[g]&&r[g].checkOrigin;if(S&&""+b!="null"&&!l())throw new Error("Unexpected message received from: "+b+" for "+j.iframe.id+". Message was: "+o.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function ue(){return Z===(""+q).substr(0,D)&&q.substr(D).split(":")[0]in r}function Y(){var l=j.type in{true:1,false:1,undefined:1};return l&&y(g,"Ignoring init message from meta parent page"),l}function $(l){return q.substr(q.indexOf(":")+U+l)}function ne(l){y(g,"onMessage passed: {iframe: "+j.iframe.id+", message: "+l+"}"),le("onMessage",{iframe:j.iframe,message:JSON.parse(l)}),y(g,"--")}function z(){var l=document.body.getBoundingClientRect(),b=j.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:b.height,iframeWidth:b.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(b.top-l.top,10),offsetLeft:parseInt(b.left-l.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Te(l,b){function S(){I("Send Page Info","pageInfo:"+z(),l,b)}Ue(S,32,b)}function Oe(){function l(_,B){function ee(){r[x]?Te(r[x].iframe,x):b()}["scroll","resize"].forEach(function(oe){y(x,_+oe+" listener for sendPageInfo"),B(window,oe,ee)})}function b(){l("Remove ",$e)}function S(){l("Add ",re)}var x=g;S(),r[x]&&(r[x].stopPageInfo=b)}function Fe(){r[g]&&r[g].stopPageInfo&&(r[g].stopPageInfo(),delete r[g].stopPageInfo)}function Ie(){var l=!0;return j.iframe===null&&(V(g,"IFrame ("+j.id+") not found"),l=!1),l}function f(l){var b=l.getBoundingClientRect();return Ce(g),{x:Math.floor(Number(b.left)+Number(F.x)),y:Math.floor(Number(b.top)+Number(F.y))}}function m(l){function b(){F=B,A(),y(g,"--")}function S(){return{x:Number(j.width)+_.x,y:Number(j.height)+_.y}}function x(){window.parentIFrame?window.parentIFrame["scrollTo"+(l?"Offset":"")](B.x,B.y):V(g,"Unable to scroll to requested position, window.parentIFrame not found")}var _=l?f(j.iframe):{x:0,y:0},B=S();y(g,"Reposition requested from iFrame (offset x:"+_.x+" y:"+_.y+")"),window.top!==window.self?x():b()}function A(){le("onScroll",F)!==!1?we(g):De()}function N(l){function b(){var ee=f(B);y(g,"Moving to in page link (#"+x+") at x: "+ee.x+" y: "+ee.y),F={x:ee.x,y:ee.y},A(),y(g,"--")}function S(){window.parentIFrame?window.parentIFrame.moveToAnchor(x):y(g,"In page link #"+x+" not found and window.parentIFrame not found")}var x=l.split("#")[1]||"",_=decodeURIComponent(x),B=document.getElementById(_)||document.getElementsByName(_)[0];B?b():window.top!==window.self?S():y(g,"In page link #"+x+" not found")}function G(l){var b={};if(Number(j.width)===0&&Number(j.height)===0){var S=$(9).split(":");b={x:S[1],y:S[0]}}else b={x:j.width,y:j.height};le(l,{iframe:j.iframe,screenX:Number(b.x),screenY:Number(b.y),type:j.type})}function le(l,b){return ye(g,l,b)}function Ye(){switch(r[g]&&r[g].firstRun&&Ke(),j.type){case"close":ae(j.iframe);break;case"message":ne($(6));break;case"mouseenter":G("onMouseEnter");break;case"mouseleave":G("onMouseLeave");break;case"autoResize":r[g].autoResize=JSON.parse($(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":Te(r[g]&&r[g].iframe,g),Oe();break;case"pageInfoStop":Fe();break;case"inPageLink":N($(9));break;case"reset":ge(j);break;case"init":s(),le("onInit",j.iframe);break;default:Number(j.width)===0&&Number(j.height)===0?V("Unsupported message received ("+j.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):s()}}function Re(l){var b=!0;return r[l]||(b=!1,V(j.type+" No settings for "+l+". Message was: "+q)),b}function Ge(){for(var l in r)I("iFrame requested init",nt(l),r[l].iframe,l)}function Ke(){r[g]&&(r[g].firstRun=!1)}var q=o.data,j={},g=null;q==="[iFrameResizerChild]Ready"?Ge():ue()?(j=p(),g=j.id,r[g]&&(r[g].loaded=!0),!Y()&&Re(g)&&(y(g,"Received: "+q),Ie()&&K()&&Ye())):ve(g,"Ignored: "+q)}function ye(o,s,p){var h=null,k=null;if(r[o])if(h=r[o][s],typeof h=="function")k=h(p);else throw new TypeError(s+" on iFrame["+o+"] is not a function");return k}function He(o){var s=o.id;delete r[s]}function ae(o){var s=o.id;if(ye(s,"onClose",s)===!1){y(s,"Close iframe cancelled by onClose event");return}y(s,"Removing iFrame: "+s);try{o.parentNode&&o.parentNode.removeChild(o)}catch(p){V(p)}ye(s,"onClosed",s),y(s,"--"),He(o)}function Ce(o){F===null&&(F={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},y(o,"Get page position: "+F.x+","+F.y))}function we(o){F!==null&&(window.scrollTo(F.x,F.y),y(o,"Set page position: "+F.x+","+F.y),De())}function De(){F=null}function ge(o){function s(){pe(o),I("reset","reset",o.iframe,o.id)}y(o.id,"Size reset requested by "+(o.type==="init"?"host page":"iFrame")),Ce(o.id),qe(s,o,"reset")}function pe(o){function s(w){if(!o.id){y("undefined","messageData id not set");return}o.iframe.style[w]=o[w]+"px",y(o.id,"IFrame ("+k+") "+w+" set to "+o[w]+"px")}function p(w){!d&&o[w]==="0"&&(d=!0,y(k,"Hidden iFrame detected, creating visibility listener"),ot())}function h(w){s(w),p(w)}var k=o.iframe.id;r[k]&&(r[k].sizeHeight&&h("height"),r[k].sizeWidth&&h("width"))}function qe(o,s,p){p!==s.type&&J&&!window.jasmine?(y(s.id,"Requesting animation frame"),J(o)):o()}function I(o,s,p,h,k){function w(){var ne=r[h]&&r[h].targetOrigin;y(h,"["+o+"] Sending msg to iframe["+h+"] ("+s+") targetOrigin: "+ne),p.contentWindow.postMessage(Z+s,ne)}function K(){V(h,"["+o+"] IFrame("+h+") not found")}function ue(){p&&"contentWindow"in p&&p.contentWindow!==null?w():K()}function Y(){function ne(){r[h]&&!r[h].loaded&&!$&&($=!0,V(h,"IFrame has not responded within "+r[h].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}!!k&&r[h]&&!!r[h].warningTimeout&&(r[h].msgTimeout=setTimeout(ne,r[h].warningTimeout))}var $=!1;h=h||p.id,r[h]&&(ue(),Y())}function nt(o){return o+":"+r[o].bodyMarginV1+":"+r[o].sizeWidth+":"+r[o].log+":"+r[o].interval+":"+r[o].enablePublicMethods+":"+r[o].autoResize+":"+r[o].bodyMargin+":"+r[o].heightCalculationMethod+":"+r[o].bodyBackground+":"+r[o].bodyPadding+":"+r[o].tolerance+":"+r[o].inPageLinks+":"+r[o].resizeFrom+":"+r[o].widthCalculationMethod+":"+r[o].mouseEvents}function Ve(o){return typeof o=="number"}function _e(o,s){function p(){function m(N){var G=r[f][N];G!==1/0&&G!==0&&(o.style[N]=Ve(G)?G+"px":G,y(f,"Set "+N+" = "+o.style[N]))}function A(N){if(r[f]["min"+N]>r[f]["max"+N])throw new Error("Value for min"+N+" can not be greater than max"+N)}A("Height"),A("Width"),m("maxHeight"),m("minHeight"),m("maxWidth"),m("minWidth")}function h(){var m=s&&s.id||fe.id+n++;return document.getElementById(m)!==null&&(m+=n++),m}function k(m){return m===""&&(o.id=m=h(),u=(s||{}).log,y(m,"Added missing iframe ID: "+m+" ("+o.src+")")),m}function w(){switch(y(f,"IFrame scrolling "+(r[f]&&r[f].scrolling?"enabled":"disabled")+" for "+f),o.style.overflow=(r[f]&&r[f].scrolling)===!1?"hidden":"auto",r[f]&&r[f].scrolling){case"omit":break;case!0:o.scrolling="yes";break;case!1:o.scrolling="no";break;default:o.scrolling=r[f]?r[f].scrolling:"no"}}function K(){(typeof(r[f]&&r[f].bodyMargin)=="number"||(r[f]&&r[f].bodyMargin)==="0")&&(r[f].bodyMarginV1=r[f].bodyMargin,r[f].bodyMargin=""+r[f].bodyMargin+"px")}function ue(){var m=r[f]&&r[f].firstRun,A=r[f]&&r[f].heightCalculationMethod in We;!m&&A&&ge({iframe:o,height:0,width:0,type:"init"})}function Y(){r[f]&&(r[f].iframe.iFrameResizer={close:ae.bind(null,r[f].iframe),removeListeners:He.bind(null,r[f].iframe),resize:I.bind(null,"Window resize","resize",r[f].iframe),moveToAnchor:function(m){I("Move to anchor","moveToAnchor:"+m,r[f].iframe,f)},sendMessage:function(m){m=JSON.stringify(m),I("Send Message","message:"+m,r[f].iframe,f)}})}function $(m){function A(){I("iFrame.onload",m,o,e,!0),ue()}function N(le){if(!!o.parentNode){var Ye=new le(function(Re){Re.forEach(function(Ge){var Ke=Array.prototype.slice.call(Ge.removedNodes);Ke.forEach(function(q){q===o&&ae(o)})})});Ye.observe(o.parentNode,{childList:!0})}}var G=L();G&&N(G),re(o,"load",A),I("init",m,o,e,!0)}function ne(m){if(typeof m!="object")throw new TypeError("Options is not an object")}function z(m){for(var A in fe)Object.prototype.hasOwnProperty.call(fe,A)&&(r[f][A]=Object.prototype.hasOwnProperty.call(m,A)?m[A]:fe[A])}function Te(m){return m===""||m.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":m}function Oe(m){var A=m.split("Callback");if(A.length===2){var N="on"+A[0].charAt(0).toUpperCase()+A[0].slice(1);this[N]=this[m],delete this[m],V(f,"Deprecated: '"+m+"' has been renamed '"+N+"'. The old method will be removed in the next major version.")}}function Fe(m){m=m||{},r[f]={firstRun:!0,iframe:o,remoteHost:o.src&&o.src.split("/").slice(0,3).join("/")},ne(m),Object.keys(m).forEach(Oe,m),z(m),r[f]&&(r[f].targetOrigin=r[f].checkOrigin===!0?Te(r[f].remoteHost):"*")}function Ie(){return f in r&&"iFrameResizer"in o}var f=k(o.id);Ie()?V(f,"Ignored iFrame, already setup."):(Fe(s),w(),p(),K(),$(nt(f)),Y())}function ke(o,s){ie===null&&(ie=setTimeout(function(){ie=null,o()},s))}var xe={};function Ue(o,s,p){xe[p]||(xe[p]=setTimeout(function(){xe[p]=null,o()},s))}function ot(){function o(){function k(w){function K(Y){return(r[w]&&r[w].iframe.style[Y])==="0px"}function ue(Y){return Y.offsetParent!==null}r[w]&&ue(r[w].iframe)&&(K("height")||K("width"))&&I("Visibility change","resize",r[w].iframe,w)}Object.keys(r).forEach(function(w){k(w)})}function s(k){y("window","Mutation observed: "+k[0].target+" "+k[0].type),ke(o,16)}function p(){var k=document.querySelector("body"),w={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},K=new h(s);K.observe(k,w)}var h=L();h&&p()}function it(o){function s(){ce("Window "+o,"resize")}y("window","Trigger event: "+o),ke(s,16)}function Je(){function o(){ce("Tab Visable","resize")}document.visibilityState!=="hidden"&&(y("document","Trigger event: Visiblity change"),ke(o,16))}function ce(o,s){function p(h){return r[h]&&r[h].resizeFrom==="parent"&&r[h].autoResize&&!r[h].firstRun}Object.keys(r).forEach(function(h){p(h)&&I(o,s,r[h].iframe,h)})}function at(){re(window,"message",tt),re(window,"resize",function(){it("resize")}),re(document,"visibilitychange",Je),re(document,"-webkit-visibilitychange",Je)}function Me(){function o(h,k){function w(){if(k.tagName){if(k.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+k.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}k&&(w(),_e(k,h),p.push(k))}function s(h){h&&h.enablePublicMethods&&V("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var p;return be(),at(),function(k,w){switch(p=[],s(k),typeof w){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(w||"iframe"),o.bind(e,k));break;case"object":o(k,w);break;default:throw new TypeError("Unexpected data type ("+typeof w+")")}return p}}function ct(o){o.fn?o.fn.iFrameResize||(o.fn.iFrameResize=function(p){function h(k,w){_e(w,p)}return this.filter("iframe").each(h).end()}):ve("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&ct(window.jQuery),typeof e=="function"&&e.amd?e([],Me):c.exports=Me(),window.iFrameResize=window.iFrameResize||Me()})()})(Et);var St={exports:{}};(function(c){(function(e){if(typeof window>"u")return;var n=!0,u=10,d="",E=0,U="",Z=null,D="",F=!1,J={resize:1,click:1},We=128,r=!0,ie=1,fe="bodyOffset",L=fe,re=!0,$e="",be={},se=32,et=null,Se=!1,y=!1,ve="[iFrameSizer]",V=ve.length,me="",tt={max:1,min:1,bodyScroll:1,documentElementScroll:1},ye="child",He=window.parent,ae="*",Ce=0,we=!1,De=null,ge=16,pe=1,qe="scroll",I=qe,nt=window,Ve=function(){p("onMessage function not defined")},_e=function(){},ke=function(){},xe={height:function(){return p("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return p("Custom width calculation function not defined"),document.body.scrollWidth}},Ue={},ot=!1;function it(){}try{var Je=Object.create({},{passive:{get:function(){ot=!0}}});window.addEventListener("test",it,Je),window.removeEventListener("test",it,Je)}catch{}function ce(t,i,a,v){t.addEventListener(i,a,ot?v||{}:!1)}function at(t,i,a){t.removeEventListener(i,a,!1)}function Me(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ct(t){var i,a,v,C=null,P=0,H=function(){P=Date.now(),C=null,v=t.apply(i,a),C||(i=a=null)};return function(){var W=Date.now();P||(P=W);var M=ge-(W-P);return i=this,a=arguments,M<=0||M>ge?(C&&(clearTimeout(C),C=null),P=W,v=t.apply(i,a),C||(i=a=null)):C||(C=setTimeout(H,M)),v}}function o(t){return ve+"["+me+"] "+t}function s(t){Se&&typeof window.console=="object"&&console.log(o(t))}function p(t){typeof window.console=="object"&&console.warn(o(t))}function h(){k(),s("Initialising iFrame ("+window.location.href+")"),K(),$(),Y("background",d),Y("padding",D),N(),Fe(),Ie(),ne(),Ye(),le(),f(),be=G(),oe("init","Init message from host page"),_e()}function k(){function t(a){return a==="true"}var i=$e.substr(V).split(":");me=i[0],E=e!==i[1]?Number(i[1]):E,F=e!==i[2]?t(i[2]):F,Se=e!==i[3]?t(i[3]):Se,se=e!==i[4]?Number(i[4]):se,n=e!==i[6]?t(i[6]):n,U=i[7],L=e!==i[8]?i[8]:L,d=i[9],D=i[10],Ce=e!==i[11]?Number(i[11]):Ce,be.enable=e!==i[12]?t(i[12]):!1,ye=e!==i[13]?i[13]:ye,I=e!==i[14]?i[14]:I,y=e!==i[15]?Boolean(i[15]):y}function w(t){var i=t.split("Callback");if(i.length===2){var a="on"+i[0].charAt(0).toUpperCase()+i[0].slice(1);this[a]=this[t],delete this[t],p("Deprecated: '"+t+"' has been renamed '"+a+"'. The old method will be removed in the next major version.")}}function K(){function t(){var a=window.iFrameResizer;s("Reading data from page: "+JSON.stringify(a)),Object.keys(a).forEach(w,a),Ve="onMessage"in a?a.onMessage:Ve,_e="onReady"in a?a.onReady:_e,ae="targetOrigin"in a?a.targetOrigin:ae,L="heightCalculationMethod"in a?a.heightCalculationMethod:L,I="widthCalculationMethod"in a?a.widthCalculationMethod:I}function i(a,v){return typeof a=="function"&&(s("Setup custom "+v+"CalcMethod"),xe[v]=a,a="custom"),a}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t(),L=i(L,"height"),I=i(I,"width")),s("TargetOrigin for parent set to: "+ae)}function ue(t,i){return i.indexOf("-")!==-1&&(p("Negative CSS value ignored for "+t),i=""),i}function Y(t,i){e!==i&&i!==""&&i!=="null"&&(document.body.style[t]=i,s("Body "+t+' set to "'+i+'"'))}function $(){e===U&&(U=E+"px"),Y("margin",ue("margin",U))}function ne(){document.documentElement.style.height="",document.body.style.height="",s('HTML & body height set to "auto"')}function z(t){var i={add:function(a){function v(){oe(t.eventName,t.eventType)}Ue[a]=v,ce(window,a,v,{passive:!0})},remove:function(a){var v=Ue[a];delete Ue[a],at(window,a,v)}};t.eventNames&&Array.prototype.map?(t.eventName=t.eventNames[0],t.eventNames.map(i[t.method])):i[t.method](t.eventName),s(Me(t.method)+" event listener: "+t.eventType)}function Te(t){z({method:t,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),z({method:t,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),z({method:t,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),z({method:t,eventType:"Input",eventName:"input"}),z({method:t,eventType:"Mouse Up",eventName:"mouseup"}),z({method:t,eventType:"Mouse Down",eventName:"mousedown"}),z({method:t,eventType:"Orientation Change",eventName:"orientationchange"}),z({method:t,eventType:"Print",eventName:["afterprint","beforeprint"]}),z({method:t,eventType:"Ready State Change",eventName:"readystatechange"}),z({method:t,eventType:"Touch Start",eventName:"touchstart"}),z({method:t,eventType:"Touch End",eventName:"touchend"}),z({method:t,eventType:"Touch Cancel",eventName:"touchcancel"}),z({method:t,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),z({method:t,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),z({method:t,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ye==="child"&&z({method:t,eventType:"IFrame Resized",eventName:"resize"})}function Oe(t,i,a,v){return i!==t&&(t in a||(p(t+" is not a valid option for "+v+"CalculationMethod."),t=i),s(v+' calculation method set to "'+t+'"')),t}function Fe(){L=Oe(L,fe,x,"height")}function Ie(){I=Oe(I,qe,_,"width")}function f(){n===!0?(Te("add"),Ke()):s("Auto Resize disabled")}function m(){Z!==null&&Z.disconnect()}function A(){Te("remove"),m(),clearInterval(et)}function N(){var t=document.createElement("div");t.style.clear="both",t.style.display="block",t.style.height="0",document.body.appendChild(t)}function G(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function i(M){var R=M.getBoundingClientRect(),O=t();return{x:parseInt(R.left,10)+parseInt(O.x,10),y:parseInt(R.top,10)+parseInt(O.y,10)}}function a(M){function R(te){var Ae=i(te);s("Moving to in page link (#"+O+") at x: "+Ae.x+" y: "+Ae.y),X(Ae.y,Ae.x,"scrollToOffset")}var O=M.split("#")[1]||M,T=decodeURIComponent(O),Q=document.getElementById(T)||document.getElementsByName(T)[0];e!==Q?R(Q):(s("In page link (#"+O+") not found in iFrame, so sending to parent"),X(0,0,"inPageLink","#"+O))}function v(){var M=window.location.hash,R=window.location.href;M!==""&&M!=="#"&&a(R)}function C(){function M(R){function O(T){T.preventDefault(),a(this.getAttribute("href"))}R.getAttribute("href")!=="#"&&ce(R,"click",O)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),M)}function P(){ce(window,"hashchange",v)}function H(){setTimeout(v,We)}function W(){Array.prototype.forEach&&document.querySelectorAll?(s("Setting up location.hash handlers"),C(),P(),H()):p("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return be.enable?W():s("In page linking not enabled"),{findTarget:a}}function le(){if(y!==!0)return;function t(a){X(0,0,a.type,a.screenY+":"+a.screenX)}function i(a,v){s("Add event listener: "+v),ce(window.document,a,t)}i("mouseenter","Mouse Enter"),i("mouseleave","Mouse Leave")}function Ye(){s("Enable public methods"),nt.parentIFrame={autoResize:function(i){return i===!0&&n===!1?(n=!0,f()):i===!1&&n===!0&&(n=!1,A()),X(0,0,"autoResize",JSON.stringify(n)),n},close:function(){X(0,0,"close")},getId:function(){return me},getPageInfo:function(i){typeof i=="function"?(ke=i,X(0,0,"pageInfo")):(ke=function(){},X(0,0,"pageInfoStop"))},moveToAnchor:function(i){be.findTarget(i)},reset:function(){vt("parentIFrame.reset")},scrollTo:function(i,a){X(a,i,"scrollTo")},scrollToOffset:function(i,a){X(a,i,"scrollToOffset")},sendMessage:function(i,a){X(0,0,"message",JSON.stringify(i),a)},setHeightCalculationMethod:function(i){L=i,Fe()},setWidthCalculationMethod:function(i){I=i,Ie()},setTargetOrigin:function(i){s("Set targetOrigin: "+i),ae=i},size:function(i,a){var v=""+(i||"")+(a?","+a:"");oe("size","parentIFrame.size("+v+")",i,a)}}}function Re(){se!==0&&(s("setInterval: "+se+"ms"),et=setInterval(function(){oe("interval","setInterval: "+se)},Math.abs(se)))}function Ge(){function t(T){function Q(te){te.complete===!1&&(s("Attach listeners to "+te.src),te.addEventListener("load",C,!1),te.addEventListener("error",P,!1),M.push(te))}T.type==="attributes"&&T.attributeName==="src"?Q(T.target):T.type==="childList"&&Array.prototype.forEach.call(T.target.querySelectorAll("img"),Q)}function i(T){M.splice(M.indexOf(T),1)}function a(T){s("Remove listeners from "+T.src),T.removeEventListener("load",C,!1),T.removeEventListener("error",P,!1),i(T)}function v(T,Q,te){a(T.target),oe(Q,te+": "+T.target.src)}function C(T){v(T,"imageLoad","Image loaded")}function P(T){v(T,"imageLoadFailed","Image load failed")}function H(T){oe("mutationObserver","mutationObserver: "+T[0].target+" "+T[0].type),T.forEach(t)}function W(){var T=document.querySelector("body"),Q={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return O=new R(H),s("Create body MutationObserver"),O.observe(T,Q),O}var M=[],R=window.MutationObserver||window.WebKitMutationObserver,O=W();return{disconnect:function(){"disconnect"in O&&(s("Disconnect body MutationObserver"),O.disconnect(),M.forEach(a))}}}function Ke(){var t=0>se;window.MutationObserver||window.WebKitMutationObserver?t?Re():Z=Ge():(s("MutationObserver not supported in this browser!"),Re())}function q(t,i){var a=0;return i=i||document.body,a=document.defaultView.getComputedStyle(i,null),a=a!==null?a[t]:0,parseInt(a,u)}function j(t){t>ge/2&&(ge=2*t,s("Event throttle increased to "+ge+"ms"))}function g(t,i){for(var a=i.length,v=0,C=0,P=Me(t),H=Date.now(),W=0;W<a;W++)v=i[W].getBoundingClientRect()[t]+q("margin"+P,i[W]),v>C&&(C=v);return H=Date.now()-H,s("Parsed "+a+" HTML elements"),s("Element position calculated in "+H+"ms"),j(H),C}function l(t){return[t.bodyOffset(),t.bodyScroll(),t.documentElementOffset(),t.documentElementScroll()]}function b(t,i){function a(){return p("No tagged elements ("+i+") found on page"),document.querySelectorAll("body *")}var v=document.querySelectorAll("["+i+"]");return v.length===0&&a(),g(t,v)}function S(){return document.querySelectorAll("body *")}var x={bodyOffset:function(){return document.body.offsetHeight+q("marginTop")+q("marginBottom")},offset:function(){return x.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return xe.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,l(x))},min:function(){return Math.min.apply(null,l(x))},grow:function(){return x.max()},lowestElement:function(){return Math.max(x.bodyOffset()||x.documentElementOffset(),g("bottom",S()))},taggedElement:function(){return b("bottom","data-iframe-height")}},_={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return xe.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(_.bodyScroll(),_.documentElementScroll())},max:function(){return Math.max.apply(null,l(_))},min:function(){return Math.min.apply(null,l(_))},rightMostElement:function(){return g("right",S())},taggedElement:function(){return b("right","data-iframe-width")}};function B(t,i,a,v){function C(){ie=O,pe=T,X(ie,pe,t)}function P(){function Q(te,Ae){var Ft=Math.abs(te-Ae)<=Ce;return!Ft}return O=e!==a?a:x[L](),T=e!==v?v:_[I](),Q(ie,O)||F&&Q(pe,T)}function H(){return!(t in{init:1,interval:1,size:1})}function W(){return L in tt||F&&I in tt}function M(){s("No change in size detected")}function R(){H()&&W()?vt(i):t in{interval:1}||M()}var O,T;P()||t==="init"?(pt(),C()):R()}var ee=ct(B);function oe(t,i,a,v){function C(){t in{reset:1,resetPage:1,init:1}||s("Trigger event: "+i)}function P(){return we&&t in J}P()?s("Trigger event cancelled: "+t):(C(),t==="init"?B(t,i,a,v):ee(t,i,a,v))}function pt(){we||(we=!0,s("Trigger event lock on")),clearTimeout(De),De=setTimeout(function(){we=!1,s("Trigger event lock off"),s("--")},We)}function bt(t){ie=x[L](),pe=_[I](),X(ie,pe,t)}function vt(t){var i=L;L=fe,s("Reset trigger event: "+t),pt(),bt("reset"),L=i}function X(t,i,a,v,C){function P(){e===C?C=ae:s("Message targetOrigin: "+C)}function H(){var W=t+":"+i,M=me+":"+W+":"+a+(e!==v?":"+v:"");s("Sending message to host page ("+M+")"),He.postMessage(ve+M,C)}P(),H()}function Ot(t){var i={init:function(){$e=t.data,He=t.source,h(),r=!1,setTimeout(function(){re=!1},We)},reset:function(){re?s("Page reset ignored by init"):(s("Page size reset by host page"),bt("resetPage"))},resize:function(){oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){be.findTarget(C())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var O=C();s("PageInfoFromParent called from parent: "+O),ke(JSON.parse(O)),s(" --")},message:function(){var O=C();s("onMessage called from parent: "+O),Ve(JSON.parse(O)),s(" --")}};function a(){return ve===(""+t.data).substr(0,V)}function v(){return t.data.split("]")[1].split(":")[0]}function C(){return t.data.substr(t.data.indexOf(":")+1)}function P(){return!c.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function H(){return t.data.split(":")[2]in{true:1,false:1}}function W(){var R=v();R in i?i[R]():!P()&&!H()&&p("Unexpected message ("+t.data+")")}function M(){r===!1?W():H()?i.init():s('Ignored message of type "'+v()+'". Received before initialization.')}a()&&M()}function yt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}ce(window,"message",Ot),ce(window,"readystatechange",yt),yt()})()})(St);var Ct=Et.exports;st.iframeResize=Ct;st.iframeResizer=Ct;st.iframeResizerContentWindow=St.exports;(function(c){c.exports=st})(jt);function Gt(c){const e=document.createElement("a");return e.href=c,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function Kt(c){const e=Gt(c),n=e.href.substr(0,e.href.length-e.hash.length),u=window.location.href.replace(/#.*$/,"");return e.hash&&n===u}function _t(c,e){const n=JSON.stringify(e);let u=0;if(n.length===0)return u;for(let d=0;d<n.length;d++){const E=n.charCodeAt(d);u=(u<<5)-u+E,u&=u}return`${c}-${u}`}function Xt(c,e,n){const u=document.createElement("form"),d=document.createElement("input");return u.action=c,u.method="POST",u.target=n,e.forEach(([E,U])=>{d.name=E,d.value=U.toString(),u.appendChild(d.cloneNode())}),u.style.visibility="hidden",u}function Qt(c){const e=c.composedPath();for(let n=0;n<e.indexOf(document.body);n++){const u=e[n];if(u.hasAttribute&&u.hasAttribute("target")&&u!==document.body)return u}}function Zt(c,e){if(c.hasAttribute("data-modal-post")){const n=c.getAttribute("data-modal-post");e.method="POST",e.body=n;const u=[];return new URL(`http://localhost/?${n}`).searchParams.forEach((d,E)=>{u.push([E,d])}),[u,e]}return[null,e]}function $t(c,e,n,u,d){const E=document.createElement("toujou-modal"),U=document.createElement("iframe"),Z=_t("iframe",e);if(E.id=c,U.name=Z,document.body.appendChild(E),Kt(n)){const D=document.querySelector(n),F=D instanceof HTMLTemplateElement?document.importNode(D.content,!0).children:D.childNodes;D.title&&(E.title=D.title);for(let J=0;J<F.length;J++)E.appendChild(F[J])}else if(d&&u==="POST"){const D=Xt(n,d,Z);E.appendChild(D),E.appendChild(U),D.submit(),D.remove()}else u==="GET"&&(U.src=n,E.appendChild(U));return E}function en(c,e,n,u){const d=_t("toujou-modal",c),E=document.getElementById(d)||$t(d,c,e,n,u);setTimeout(()=>{E.open()})}const tn=c=>{if(c.metaKey||c.ctrlKey)return;const e=Qt(c);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const n=e.getAttribute("href"),u=n.indexOf("?")!==-1?n.split("?")[0]+"?toujou-ajax-modal=1&"+n.split("?")[1]:n.indexOf("#")!==-1?n.split("#")[0]+"?toujou-ajax-modal=1#"+n.split("#")[1]:n+"?toujou-ajax-modal=1",[d,E]=Zt(e,{src:u});en(E,u,d?"POST":"GET",d),c.preventDefault(),c.stopPropagation()}},nn=Ne`
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

`,on={reserveScrollBarGap:!0},ze=[];function rn(c){ze.forEach(e=>e.close()),ze.push(c)}function sn(c){if(c===ze[ze.length-1]){ze.pop();const e=ze.pop();e&&e.open()}}class ut extends Be{static get is(){return"toujou-modal"}render(){return de`
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
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(n=>{n[0]&&this.onPosition(n[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Jt()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Ut(this.$.scroller,on),rn(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),sn(this),this.allowOutsideScroll?document.body.style.position="":Yt(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const n=e.composedPath();(!n.includes(this.$.modalContent)||n.some(u=>u instanceof HTMLElement&&u.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const n=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=n?`${n}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(n=>n instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((n,u)=>{e.includes(u)||this.iframeResizerMap.delete(u)}),e.forEach(n=>{this.loading=!0,n.addEventListener("load",()=>{this.iframeResizerMap.has(n)||this.listenToIframeReadyState(n)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let n={};try{n=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(u){(console.error||console.log).call(console,u.stack||u)}return n.initCallback=()=>{this.loading=!1},n.closedCallback=()=>{this.close()},jt.exports.iframeResizer(n,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}je(ut,"styles",[nn]);customElements.define(ut.is,ut);document.addEventListener("click",tn);const an=Ne`
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

`;class lt extends Be{static get is(){return"toujou-snackbar"}render(){return de`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return styles}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?this.setAttribute("visible",""):this.removeAttribute("visible")}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(e){super(e),this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",n=>{this._handleAddSnackbar(n)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this)}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar(this.cue[0]):e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer(this._animationStart,this._duration)),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced){this._removeSnackbarFromCue(),this._wasReplaced=!1,cancelAnimationFrame(this._timer);return}e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}}je(lt,"styles",[an]);customElements.define(lt.is,lt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const cn=Ne`
  .exit-warning__message {
    background-color: var(--bg-color);
    overflow: hidden;
    padding: var(--spacing-normal) var(--spacing-normal) var(--spacing-l);
  }
`;class dt extends Be{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return de`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&At(this._messageTemplate(de,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}}je(dt,"styles",[cn]);customElements.define(dt.is,dt);function un(c){const e=c.composedPath();for(let n=0;n<e.indexOf(document.body);n++){const u=e[n];if(u.hasAttribute&&u.hasAttribute("target")&&u!==document.body)return u}}function Mt(c){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:c},window.location.origin),!0):(new URL(c).hostname===window.location.hostname?window.location.href=c:(e.targetUrl=c,e.open()),!0):!1}function ln(c){if(c.metaKey||c.ctrlKey)return;const e=un(c);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const n=e.getAttribute("href");Mt(n)&&(c.preventDefault(),c.stopPropagation())}}function dn(c){c.origin!==window.location.origin||c.data.action===void 0||c.data.action!=="toujou-exit-warning"||!c.data.targetUrl||Mt(c.data.targetUrl)}document.addEventListener("click",ln);window.addEventListener("message",dn);const hn=Ne`
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

`;class ht extends Be{static get is(){return"toujou-spinner"}static get styles(){return styles}render(){return de`
      <svg class="spinner__svg" viewBox="25 25 50 50">
        <circle class="spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}}je(ht,"styles",[hn]);customElements.define(ht.is,ht);const fn=Ne`
  :host {
    display: var(--toujou-consent-display, block);
  }
`;class ft extends Be{static get is(){return"toujou-consent"}render(){return de`
      <slot id="content"></slot>
    `}static get styles(){return styles}static get properties(){return{consentState:{type:Boolean},listenTo:{type:String},listenOn:{type:String}}}set consentState(e){this.consentInputType==="checkbox"&&(this.querySelector(".consent__checkbox").checked=e)}set listenTo(e){e.split(/\s+/).forEach(n=>{this.addEventListener(n,this._handleEvent)})}constructor(e){super(e),this._handleEvent=this._handleEvent.bind(this),this.listenOn="*",this._consentType=this.getAttribute("consenttype"),this._consentInputType=this._getConsentInputType(),this.consentState=null}connectedCallback(){super.connectedCallback()}_handleEvent(e){e.type==="click"?this._dispatchClickEvent():e.type==="change"&&this._dispatchChangeEvent()}firstUpdated(){this._dispatchReadyEvent()}_dispatchChangeEvent(){const e=new CustomEvent("toujou-consent-checkbox-changed",{bubbles:!0,composed:!0,detail:{consentElement:this}});this.dispatchEvent(e)}_dispatchClickEvent(){const e=new CustomEvent("toujou-consent-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchReadyEvent(){const e=new CustomEvent("toujou-consent-connected",{bubbles:!0,composed:!0,detail:{consentType:this._consentType}});this.dispatchEvent(e)}_getConsentInputType(){const e=this.querySelectorAll(".consent__checkbox"),n=this.querySelectorAll(".consent__button");e.length>0?this.consentInputType="checkbox":n.length>0&&(this.consentInputType="button")}}je(ft,"styles",[fn]);customElements.define(ft.is,ft);const mn=Ne`
  :host {
    display: var(--toujou-consent-widget-display, block);
  }
`;class mt extends Be{static get is(){return"toujou-consent-widget"}render(){return de`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `}static get styles(){return styles}set _warningVisible(e){this.setAttribute("warningvisible",e)}static get properties(){return{inPage:{type:Boolean,attribute:"in-page"},listenTo:{type:String},listenOn:{type:String},_warningVisible:{type:Boolean},deactivated:{type:Boolean}}}set listenTo(e){e.split(/\s+/).forEach(n=>{this.addEventListener(n,this._handleEvent)})}set _dismissedBox(e){this.inPage||(e?this.setAttribute("hidden",""):this.removeAttribute("hidden")),this._warningVisible=this.inPage&&!e}constructor(e){super(e),this.onStateChange=this.onStateChange.bind(this),this._handleEvent=this._handleEvent.bind(this),this.inPage=!1,this.deactivated=!1,this.store=zt,this.store.subscribe(this.onStateChange),this.consentTypeNames=["tracking","html","maps","video"],this._state=this.store.getState(),this.listenOn="*",this._warningVisible=this.inPage,window.location.hash==="#aaa"&&(this.deactivated=!0),this.addEventListener("toujou-consent-connected",this._handleConsentConnected),this.addEventListener("toujou-consent-checkbox-changed",this._handleConsentCheckboxChanged)}connectedCallback(){super.connectedCallback(),this._inPage=this.inPage,this._dismissedBox=this._state.consents.consentBoxDismissed?this._state.consents.consentBoxDismissed:!1,this.deactivated&&setTimeout(()=>{this._prepareToSaveConsents(),this._dismissConsentBox(),this._dispatchConsentDeactivated()})}firstUpdated(){this.consentTypeNames.forEach(e=>{const n=this.querySelector(`toujou-consent[consenttype="${e}"]`);this._state.consents.consentBoxDismissed&&!this._state.consents[e]&&n&&this._undismissConsentBox()})}onStateChange(){this._state=this.store.getState(),this._dismissedBox=this._state.consents.consentBoxDismissed,this._updateAllConsentElementsStates()}_handleEvent(e){e.stopPropagation(),e.type==="click"&&!this._inPage&&e.target.matches(this.listenOn)&&this._handleConsentBoxSaveButtonClick(e.target)}_handleConsentCheckboxChanged(e){this.inPage&&this._state.consents.consentBoxDismissed===!0&&(this._prepareToSaveConsents(),this._dispatchAddSnackbar(e.target.getAttribute("snackbarmessage")))}_handleConsentBoxSaveButtonClick(e){this._prepareToSaveConsents(e.hasAttribute("accept-all")?!0:null),this._dismissConsentBox()}_prepareToSaveConsents(e=null){const n=this._getAllConsents(e);this._saveAllConsents(n)}_getAllConsents(e=null){const n={},u=this.querySelectorAll("toujou-consent");return u&&u.forEach(d=>{const E=d.getAttribute("consenttype");n[E]=this._createNewConsentData(d,e)}),n}_createNewConsentData(e,n=null){const u=e.querySelector(".consent__checkbox");n!==null&&(u.checked=n);const d=this._createConsentLifeInMillis(e.getAttribute("consenttype"),e.getAttribute("consentlifetime"));return{consentGiven:u.checked,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+d,consentLifetime:d}}_createConsentLifeInMillis(e,n){return e==="tracking"?n==="0"?24*60*60*1e3*730:0:n*24*60*60}_dismissConsentBox(){this.store.dispatch(Pt()),this._dispatchConsentWidgetDismissedEvent()}_undismissConsentBox(){this.store.dispatch(Lt())}_saveAllConsents(e){this.store.dispatch(Nt(e))}_handleConsentConnected(e){this._setConsentElementState(e.target)}_setConsentElementState(e){if(e.tagName==="TOUJOU-CONSENT"){const n=e.getAttribute("consenttype"),u=e.getAttribute("prechecked")==="1";e.consentState=this._getConsentTypeState(this._state,n,u)}}_updateAllConsentElementsStates(){this.querySelectorAll("toujou-consent").forEach(n=>{this._setConsentElementState(n)})}_getConsentTypeState(e,n,u){let d=null;return!e||!e.consents||!e.consents[n]?d=null:d=e.consents[n],d?d&&this._isConsentExpired(d)?(this.store.dispatch(Bt(n)),this._dispatchConsentExpiredEvent(n),this._undismissConsentBox(),u):d&&!this._isConsentExpired(d)?d.consentGiven:d:u}_isConsentExpired(e){return e.consentCreationDate+e.consentLifetime>e.consentExpirationDate}_dispatchConsentExpiredEvent(e){const n=new CustomEvent("toujou-consent-expired",{bubbles:!0,composed:!0,detail:{consentType:e}});this.dispatchEvent(n)}_dispatchAddSnackbar(e){const n=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:e,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(n)}_dispatchConsentWidgetDismissedEvent(){const e=new CustomEvent("toujou-consent-widget-dismissed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_dispatchConsentDeactivated(){const e=new CustomEvent("toujou-consent-widget-deactivated",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}je(mt,"styles",[mn]);customElements.define(mt.is,mt);
//# sourceMappingURL=base.js.map
