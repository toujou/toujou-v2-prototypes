var Pn=Object.defineProperty;var zn=(o,e,t)=>e in o?Pn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Gt=(o,e,t)=>(zn(o,typeof e!="symbol"?e+"":e,t),t);import{i as Ut,s as Wt,y as nt}from"./lit-element-80867ff0.js";let St=0,Qt=0;const yn=getComputedStyle(document.documentElement),Fn=".topbar, .inpage-nav, .navigation--inpage";function In(){const o=parseInt(yn.getPropertyValue("--toujou-scroll-padding-offset"));o&&(St+=o);const e=Array.from(document.querySelectorAll(Fn));e&&(e.forEach(t=>{Qt+=t.offsetHeight}),St+=Qt),document.documentElement.style.setProperty("--toujou-calculated-scroll-padding-top",`${St}px`)}function Zt(){yn.getPropertyValue("--toujou-calculated-scroll-padding-top")||void 0||In()}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>{Zt()}):document.addEventListener("DOMContentLoaded",()=>{Zt()});function Ln(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var wt=!1;if(typeof window<"u"){var en={get passive(){wt=!0}};window.addEventListener("testPassive",null,en),window.removeEventListener("testPassive",null,en)}var He=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),me=[],Be=!1,Dt=-1,ot=void 0,Te=void 0,it=void 0,wn=function(e){return me.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},st=function(e){var t=e||window.event;return wn(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},Nn=function(e){if(it===void 0){var t=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);it=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}ot===void 0&&(ot=document.body.style.overflow,document.body.style.overflow="hidden")},kn=function(){it!==void 0&&(document.body.style.paddingRight=it,it=void 0),ot!==void 0&&(document.body.style.overflow=ot,ot=void 0)},Hn=function(){return window.requestAnimationFrame(function(){if(Te===void 0){Te={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout(function(){return window.requestAnimationFrame(function(){var c=r-window.innerHeight;c&&t>=r&&(document.body.style.top=-(t+c))})},300)}})},_n=function(){if(Te!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=Te.position,document.body.style.top=Te.top,document.body.style.left=Te.left,window.scrollTo(t,e),Te=void 0}},Bn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Un=function(e,t){var n=e.targetTouches[0].clientY-Dt;return wn(e.target)?!1:t&&t.scrollTop===0&&n>0||Bn(t)&&n<0?st(e):(e.stopPropagation(),!0)},Wn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!me.some(function(r){return r.targetElement===e})){var n={targetElement:e,options:t||{}};me=[].concat(Ln(me),[n]),He?Hn():Nn(t),He&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(Dt=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&Un(r,e)},Be||(document.addEventListener("touchmove",st,wt?{passive:!1}:void 0),Be=!0))}},Dn=function(){He&&(me.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Be&&(document.removeEventListener("touchmove",st,wt?{passive:!1}:void 0),Be=!1),Dt=-1),He?_n():kn(),me=[]},Vn=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}me=me.filter(function(t){return t.targetElement!==e}),He&&(e.ontouchstart=null,e.ontouchmove=null,Be&&me.length===0&&(document.removeEventListener("touchmove",st,wt?{passive:!1}:void 0),Be=!1)),He?_n():kn()},Ft={},qn={get exports(){return Ft},set exports(o){Ft=o}},kt={},It={},Jn={get exports(){return It},set exports(o){It=o}};(function(o){(function(e){if(typeof window>"u")return;var t=0,n=!1,r=!1,c="message",d=c.length,S="[iFrameSizer]",p=S.length,m=null,F=window.requestAnimationFrame,j={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},s={},H=null,G={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){X("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}};function I(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function le(a,u,w){a.addEventListener(u,w,!1)}function dt(a,u,w){a.removeEventListener(u,w,!1)}function ye(){var a=["moz","webkit","o","ms"],u;for(u=0;u<a.length&&!F;u+=1)F=window[a[u]+"RequestAnimationFrame"];F?F=F.bind(window):E("setup","RequestAnimationFrame not supported")}function ue(a){var u="Host page: "+a;return window.top!==window.self&&(u=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+a:"Nested host page: "+a),u}function ht(a){return S+"["+ue(a)+"]"}function je(a){return s[a]?s[a].log:n}function E(a,u){pe("log",a,u,je(a))}function we(a,u){pe("info",a,u,je(a))}function X(a,u){pe("warn",a,u,!0)}function pe(a,u,w,g){g===!0&&typeof window.console=="object"&&console[a](ht(u),w)}function ft(a){function u(){function f(){ve(M),_e(y),fe("onResized",M)}x("Height"),x("Width"),Ye(f,M,"init")}function w(){var f=K.substr(p).split(":"),k=f[1]?parseInt(f[1],10):0,O=s[f[0]]&&s[f[0]].iframe,T=getComputedStyle(O);return{iframe:O,id:f[0],height:k+g(T)+A(T),width:f[2],type:f[3]}}function g(f){if(f.boxSizing!=="border-box")return 0;var k=f.paddingTop?parseInt(f.paddingTop,10):0,O=f.paddingBottom?parseInt(f.paddingBottom,10):0;return k+O}function A(f){if(f.boxSizing!=="border-box")return 0;var k=f.borderTopWidth?parseInt(f.borderTopWidth,10):0,O=f.borderBottomWidth?parseInt(f.borderBottomWidth,10):0;return k+O}function x(f){var k=Number(s[y]["max"+f]),O=Number(s[y]["min"+f]),T=f.toLowerCase(),R=Number(M[T]);E(y,"Checking "+T+" is in range "+O+"-"+k),R<O&&(R=O,E(y,"Set "+T+" to min value")),R>k&&(R=k,E(y,"Set "+T+" to max value")),M[T]=""+R}function ee(){function f(){function T(){var V=0,ie=!1;for(E(y,"Checking connection is from allowed list of origins: "+O);V<O.length;V++)if(O[V]===k){ie=!0;break}return ie}function R(){var V=s[y]&&s[y].remoteHost;return E(y,"Checking connection is from: "+V),k===V}return O.constructor===Array?T():R()}var k=a.origin,O=s[y]&&s[y].checkOrigin;if(O&&""+k!="null"&&!f())throw new Error("Unexpected message received from: "+k+" for "+M.iframe.id+". Message was: "+a.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function he(){return S===(""+K).substr(0,p)&&K.substr(p).split(":")[0]in s}function Q(){var f=M.type in{true:1,false:1,undefined:1};return f&&E(y,"Ignoring init message from meta parent page"),f}function oe(f){return K.substr(K.indexOf(":")+d+f)}function se(f){E(y,"onMessage passed: {iframe: "+M.iframe.id+", message: "+f+"}"),fe("onMessage",{iframe:M.iframe,message:JSON.parse(f)}),E(y,"--")}function U(){var f=document.body.getBoundingClientRect(),k=M.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:k.height,iframeWidth:k.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(k.top-f.top,10),offsetLeft:parseInt(k.left-f.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Se(f,k){function O(){L("Send Page Info","pageInfo:"+U(),f,k)}Xe(O,32,k)}function Ce(){function f(R,V){function ie(){s[T]?Se(s[T].iframe,T):k()}["scroll","resize"].forEach(function(ae){E(T,R+ae+" listener for sendPageInfo"),V(window,ae,ie)})}function k(){f("Remove ",dt)}function O(){f("Add ",le)}var T=y;O(),s[T]&&(s[T].stopPageInfo=k)}function Re(){s[y]&&s[y].stopPageInfo&&(s[y].stopPageInfo(),delete s[y].stopPageInfo)}function Pe(){var f=!0;return M.iframe===null&&(X(y,"IFrame ("+M.id+") not found"),f=!1),f}function v(f){var k=f.getBoundingClientRect();return $e(y),{x:Math.floor(Number(k.left)+Number(m.x)),y:Math.floor(Number(k.top)+Number(m.y))}}function b(f){function k(){m=V,B(),E(y,"--")}function O(){return{x:Number(M.width)+R.x,y:Number(M.height)+R.y}}function T(){window.parentIFrame?window.parentIFrame["scrollTo"+(f?"Offset":"")](V.x,V.y):X(y,"Unable to scroll to requested position, window.parentIFrame not found")}var R=f?v(M.iframe):{x:0,y:0},V=O();E(y,"Reposition requested from iFrame (offset x:"+R.x+" y:"+R.y+")"),window.top!==window.self?T():k()}function B(){fe("onScroll",m)!==!1?_e(y):Je()}function D(f){function k(){var ie=v(V);E(y,"Moving to in page link (#"+T+") at x: "+ie.x+" y: "+ie.y),m={x:ie.x,y:ie.y},B(),E(y,"--")}function O(){window.parentIFrame?window.parentIFrame.moveToAnchor(T):E(y,"In page link #"+T+" not found and window.parentIFrame not found")}var T=f.split("#")[1]||"",R=decodeURIComponent(T),V=document.getElementById(R)||document.getElementsByName(R)[0];V?k():window.top!==window.self?O():E(y,"In page link #"+T+" not found")}function Z(f){var k={};if(Number(M.width)===0&&Number(M.height)===0){var O=oe(9).split(":");k={x:O[1],y:O[0]}}else k={x:M.width,y:M.height};fe(f,{iframe:M.iframe,screenX:Number(k.x),screenY:Number(k.y),type:M.type})}function fe(f,k){return ke(y,f,k)}function Qe(){switch(s[y]&&s[y].firstRun&&et(),M.type){case"close":ce(M.iframe);break;case"message":se(oe(6));break;case"mouseenter":Z("onMouseEnter");break;case"mouseleave":Z("onMouseLeave");break;case"autoResize":s[y].autoResize=JSON.parse(oe(9));break;case"scrollTo":b(!1);break;case"scrollToOffset":b(!0);break;case"pageInfo":Se(s[y]&&s[y].iframe,y),Ce();break;case"pageInfoStop":Re();break;case"inPageLink":D(oe(9));break;case"reset":ge(M);break;case"init":u(),fe("onInit",M.iframe);break;default:Number(M.width)===0&&Number(M.height)===0?X("Unsupported message received ("+M.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):u()}}function ze(f){var k=!0;return s[f]||(k=!1,X(M.type+" No settings for "+f+". Message was: "+K)),k}function Ze(){for(var f in s)L("iFrame requested init",mt(f),s[f].iframe,f)}function et(){s[y]&&(s[y].firstRun=!1)}var K=a.data,M={},y=null;K==="[iFrameResizerChild]Ready"?Ze():he()?(M=w(),y=M.id,s[y]&&(s[y].loaded=!0),!Q()&&ze(y)&&(E(y,"Received: "+K),Pe()&&ee()&&Qe())):we(y,"Ignored: "+K)}function ke(a,u,w){var g=null,A=null;if(s[a])if(g=s[a][u],typeof g=="function")A=g(w);else throw new TypeError(u+" on iFrame["+a+"] is not a function");return A}function qe(a){var u=a.id;delete s[u]}function ce(a){var u=a.id;if(ke(u,"onClose",u)===!1){E(u,"Close iframe cancelled by onClose event");return}E(u,"Removing iFrame: "+u);try{a.parentNode&&a.parentNode.removeChild(a)}catch(w){X(w)}ke(u,"onClosed",u),E(u,"--"),qe(a)}function $e(a){m===null&&(m={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop},E(a,"Get page position: "+m.x+","+m.y))}function _e(a){m!==null&&(window.scrollTo(m.x,m.y),E(a,"Set page position: "+m.x+","+m.y),Je())}function Je(){m=null}function ge(a){function u(){ve(a),L("reset","reset",a.iframe,a.id)}E(a.id,"Size reset requested by "+(a.type==="init"?"host page":"iFrame")),$e(a.id),Ye(u,a,"reset")}function ve(a){function u(x){if(!a.id){E("undefined","messageData id not set");return}a.iframe.style[x]=a[x]+"px",E(a.id,"IFrame ("+A+") "+x+" set to "+a[x]+"px")}function w(x){!r&&a[x]==="0"&&(r=!0,E(A,"Hidden iFrame detected, creating visibility listener"),pt())}function g(x){u(x),w(x)}var A=a.iframe.id;s[A]&&(s[A].sizeHeight&&g("height"),s[A].sizeWidth&&g("width"))}function Ye(a,u,w){w!==u.type&&F&&!window.jasmine?(E(u.id,"Requesting animation frame"),F(a)):a()}function L(a,u,w,g,A){function x(){var se=s[g]&&s[g].targetOrigin;E(g,"["+a+"] Sending msg to iframe["+g+"] ("+u+") targetOrigin: "+se),w.contentWindow.postMessage(S+u,se)}function ee(){X(g,"["+a+"] IFrame("+g+") not found")}function he(){w&&"contentWindow"in w&&w.contentWindow!==null?x():ee()}function Q(){function se(){s[g]&&!s[g].loaded&&!oe&&(oe=!0,X(g,"IFrame has not responded within "+s[g].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}A&&s[g]&&s[g].warningTimeout&&(s[g].msgTimeout=setTimeout(se,s[g].warningTimeout))}var oe=!1;g=g||w.id,s[g]&&(he(),Q())}function mt(a){return a+":"+s[a].bodyMarginV1+":"+s[a].sizeWidth+":"+s[a].log+":"+s[a].interval+":"+s[a].enablePublicMethods+":"+s[a].autoResize+":"+s[a].bodyMargin+":"+s[a].heightCalculationMethod+":"+s[a].bodyBackground+":"+s[a].bodyPadding+":"+s[a].tolerance+":"+s[a].inPageLinks+":"+s[a].resizeFrom+":"+s[a].widthCalculationMethod+":"+s[a].mouseEvents}function Ke(a){return typeof a=="number"}function Me(a,u){function w(){function b(D){var Z=s[v][D];Z!==1/0&&Z!==0&&(a.style[D]=Ke(Z)?Z+"px":Z,E(v,"Set "+D+" = "+a.style[D]))}function B(D){if(s[v]["min"+D]>s[v]["max"+D])throw new Error("Value for min"+D+" can not be greater than max"+D)}B("Height"),B("Width"),b("maxHeight"),b("minHeight"),b("maxWidth"),b("minWidth")}function g(){var b=u&&u.id||G.id+t++;return document.getElementById(b)!==null&&(b+=t++),b}function A(b){return b===""&&(a.id=b=g(),n=(u||{}).log,E(b,"Added missing iframe ID: "+b+" ("+a.src+")")),b}function x(){switch(E(v,"IFrame scrolling "+(s[v]&&s[v].scrolling?"enabled":"disabled")+" for "+v),a.style.overflow=(s[v]&&s[v].scrolling)===!1?"hidden":"auto",s[v]&&s[v].scrolling){case"omit":break;case!0:a.scrolling="yes";break;case!1:a.scrolling="no";break;default:a.scrolling=s[v]?s[v].scrolling:"no"}}function ee(){(typeof(s[v]&&s[v].bodyMargin)=="number"||(s[v]&&s[v].bodyMargin)==="0")&&(s[v].bodyMarginV1=s[v].bodyMargin,s[v].bodyMargin=""+s[v].bodyMargin+"px")}function he(){var b=s[v]&&s[v].firstRun,B=s[v]&&s[v].heightCalculationMethod in j;!b&&B&&ge({iframe:a,height:0,width:0,type:"init"})}function Q(){s[v]&&(s[v].iframe.iFrameResizer={close:ce.bind(null,s[v].iframe),removeListeners:qe.bind(null,s[v].iframe),resize:L.bind(null,"Window resize","resize",s[v].iframe),moveToAnchor:function(b){L("Move to anchor","moveToAnchor:"+b,s[v].iframe,v)},sendMessage:function(b){b=JSON.stringify(b),L("Send Message","message:"+b,s[v].iframe,v)}})}function oe(b){function B(){L("iFrame.onload",b,a,e,!0),he()}function D(fe){if(a.parentNode){var Qe=new fe(function(ze){ze.forEach(function(Ze){var et=Array.prototype.slice.call(Ze.removedNodes);et.forEach(function(K){K===a&&ce(a)})})});Qe.observe(a.parentNode,{childList:!0})}}var Z=I();Z&&D(Z),le(a,"load",B),L("init",b,a,e,!0)}function se(b){if(typeof b!="object")throw new TypeError("Options is not an object")}function U(b){for(var B in G)Object.prototype.hasOwnProperty.call(G,B)&&(s[v][B]=Object.prototype.hasOwnProperty.call(b,B)?b[B]:G[B])}function Se(b){return b===""||b.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":b}function Ce(b){var B=b.split("Callback");if(B.length===2){var D="on"+B[0].charAt(0).toUpperCase()+B[0].slice(1);this[D]=this[b],delete this[b],X(v,"Deprecated: '"+b+"' has been renamed '"+D+"'. The old method will be removed in the next major version.")}}function Re(b){b=b||{},s[v]={firstRun:!0,iframe:a,remoteHost:a.src&&a.src.split("/").slice(0,3).join("/")},se(b),Object.keys(b).forEach(Ce,b),U(b),s[v]&&(s[v].targetOrigin=s[v].checkOrigin===!0?Se(s[v].remoteHost):"*")}function Pe(){return v in s&&"iFrameResizer"in a}var v=A(a.id);Pe()?X(v,"Ignored iFrame, already setup."):(Re(u),x(),w(),ee(),oe(mt(v)),Q())}function Ee(a,u){H===null&&(H=setTimeout(function(){H=null,a()},u))}var xe={};function Xe(a,u,w){xe[w]||(xe[w]=setTimeout(function(){xe[w]=null,a()},u))}function pt(){function a(){function A(x){function ee(Q){return(s[x]&&s[x].iframe.style[Q])==="0px"}function he(Q){return Q.offsetParent!==null}s[x]&&he(s[x].iframe)&&(ee("height")||ee("width"))&&L("Visibility change","resize",s[x].iframe,x)}Object.keys(s).forEach(function(x){A(x)})}function u(A){E("window","Mutation observed: "+A[0].target+" "+A[0].type),Ee(a,16)}function w(){var A=document.querySelector("body"),x={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},ee=new g(u);ee.observe(A,x)}var g=I();g&&w()}function gt(a){function u(){de("Window "+a,"resize")}E("window","Trigger event: "+a),Ee(u,16)}function Ge(){function a(){de("Tab Visable","resize")}document.visibilityState!=="hidden"&&(E("document","Trigger event: Visiblity change"),Ee(a,16))}function de(a,u){function w(g){return s[g]&&s[g].resizeFrom==="parent"&&s[g].autoResize&&!s[g].firstRun}Object.keys(s).forEach(function(g){w(g)&&L(a,u,s[g].iframe,g)})}function Et(){le(window,"message",ft),le(window,"resize",function(){gt("resize")}),le(document,"visibilitychange",Ge),le(document,"-webkit-visibilitychange",Ge)}function Oe(){function a(g,A){function x(){if(A.tagName){if(A.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+A.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}A&&(x(),Me(A,g),w.push(A))}function u(g){g&&g.enablePublicMethods&&X("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var w;return ye(),Et(),function(A,x){switch(w=[],u(A),typeof x){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(x||"iframe"),a.bind(e,A));break;case"object":a(A,x);break;default:throw new TypeError("Unexpected data type ("+typeof x+")")}return w}}function xt(a){a.fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(w){function g(A,x){Me(x,w)}return this.filter("iframe").each(g).end()}):we("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery&&xt(window.jQuery),typeof e=="function"&&e.amd?e([],Oe):o.exports=Oe(),window.iFrameResize=window.iFrameResize||Oe()})()})(Jn);var Lt={},Yn={get exports(){return Lt},set exports(o){Lt=o}};(function(o){(function(e){if(typeof window>"u")return;var t=!0,n=10,r="",c=0,d="",S=null,p="",m=!1,F={resize:1,click:1},j=128,s=!0,H=1,G="bodyOffset",I=G,le=!0,dt="",ye={},ue=32,ht=null,je=!1,E=!1,we="[iFrameSizer]",X=we.length,pe="",ft={max:1,min:1,bodyScroll:1,documentElementScroll:1},ke="child",qe=window.parent,ce="*",$e=0,_e=!1,Je=null,ge=16,ve=1,Ye="scroll",L=Ye,mt=window,Ke=function(){w("onMessage function not defined")},Me=function(){},Ee=function(){},xe={height:function(){return w("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return w("Custom width calculation function not defined"),document.body.scrollWidth}},Xe={},pt=!1;function gt(){}try{var Ge=Object.create({},{passive:{get:function(){pt=!0}}});window.addEventListener("test",gt,Ge),window.removeEventListener("test",gt,Ge)}catch{}function de(i,l,h,_){i.addEventListener(l,h,pt?_||{}:!1)}function Et(i,l,h){i.removeEventListener(l,h,!1)}function Oe(i){return i.charAt(0).toUpperCase()+i.slice(1)}function xt(i){var l,h,_,C=null,W=0,Y=function(){W=Date.now(),C=null,_=i.apply(l,h),C||(l=h=null)};return function(){var q=Date.now();W||(W=q);var P=ge-(q-W);return l=this,h=arguments,P<=0||P>ge?(C&&(clearTimeout(C),C=null),W=q,_=i.apply(l,h),C||(l=h=null)):C||(C=setTimeout(Y,P)),_}}function a(i){return we+"["+pe+"] "+i}function u(i){je&&typeof window.console=="object"&&console.log(a(i))}function w(i){typeof window.console=="object"&&console.warn(a(i))}function g(){A(),u("Initialising iFrame ("+window.location.href+")"),ee(),oe(),Q("background",r),Q("padding",p),D(),Re(),Pe(),se(),Qe(),fe(),v(),ye=Z(),ae("init","Init message from host page"),Me()}function A(){function i(h){return h==="true"}var l=dt.substr(X).split(":");pe=l[0],c=e!==l[1]?Number(l[1]):c,m=e!==l[2]?i(l[2]):m,je=e!==l[3]?i(l[3]):je,ue=e!==l[4]?Number(l[4]):ue,t=e!==l[6]?i(l[6]):t,d=l[7],I=e!==l[8]?l[8]:I,r=l[9],p=l[10],$e=e!==l[11]?Number(l[11]):$e,ye.enable=e!==l[12]?i(l[12]):!1,ke=e!==l[13]?l[13]:ke,L=e!==l[14]?l[14]:L,E=e!==l[15]?Boolean(l[15]):E}function x(i){var l=i.split("Callback");if(l.length===2){var h="on"+l[0].charAt(0).toUpperCase()+l[0].slice(1);this[h]=this[i],delete this[i],w("Deprecated: '"+i+"' has been renamed '"+h+"'. The old method will be removed in the next major version.")}}function ee(){function i(){var h=window.iFrameResizer;u("Reading data from page: "+JSON.stringify(h)),Object.keys(h).forEach(x,h),Ke="onMessage"in h?h.onMessage:Ke,Me="onReady"in h?h.onReady:Me,ce="targetOrigin"in h?h.targetOrigin:ce,I="heightCalculationMethod"in h?h.heightCalculationMethod:I,L="widthCalculationMethod"in h?h.widthCalculationMethod:L}function l(h,_){return typeof h=="function"&&(u("Setup custom "+_+"CalcMethod"),xe[_]=h,h="custom"),h}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(i(),I=l(I,"height"),L=l(L,"width")),u("TargetOrigin for parent set to: "+ce)}function he(i,l){return l.indexOf("-")!==-1&&(w("Negative CSS value ignored for "+i),l=""),l}function Q(i,l){e!==l&&l!==""&&l!=="null"&&(document.body.style[i]=l,u("Body "+i+' set to "'+l+'"'))}function oe(){e===d&&(d=c+"px"),Q("margin",he("margin",d))}function se(){document.documentElement.style.height="",document.body.style.height="",u('HTML & body height set to "auto"')}function U(i){var l={add:function(h){function _(){ae(i.eventName,i.eventType)}Xe[h]=_,de(window,h,_,{passive:!0})},remove:function(h){var _=Xe[h];delete Xe[h],Et(window,h,_)}};i.eventNames&&Array.prototype.map?(i.eventName=i.eventNames[0],i.eventNames.map(l[i.method])):l[i.method](i.eventName),u(Oe(i.method)+" event listener: "+i.eventType)}function Se(i){U({method:i,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),U({method:i,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),U({method:i,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),U({method:i,eventType:"Input",eventName:"input"}),U({method:i,eventType:"Mouse Up",eventName:"mouseup"}),U({method:i,eventType:"Mouse Down",eventName:"mousedown"}),U({method:i,eventType:"Orientation Change",eventName:"orientationchange"}),U({method:i,eventType:"Print",eventName:["afterprint","beforeprint"]}),U({method:i,eventType:"Ready State Change",eventName:"readystatechange"}),U({method:i,eventType:"Touch Start",eventName:"touchstart"}),U({method:i,eventType:"Touch End",eventName:"touchend"}),U({method:i,eventType:"Touch Cancel",eventName:"touchcancel"}),U({method:i,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),U({method:i,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),U({method:i,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),ke==="child"&&U({method:i,eventType:"IFrame Resized",eventName:"resize"})}function Ce(i,l,h,_){return l!==i&&(i in h||(w(i+" is not a valid option for "+_+"CalculationMethod."),i=l),u(_+' calculation method set to "'+i+'"')),i}function Re(){I=Ce(I,G,T,"height")}function Pe(){L=Ce(L,Ye,R,"width")}function v(){t===!0?(Se("add"),et()):u("Auto Resize disabled")}function b(){S!==null&&S.disconnect()}function B(){Se("remove"),b(),clearInterval(ht)}function D(){var i=document.createElement("div");i.style.clear="both",i.style.display="block",i.style.height="0",document.body.appendChild(i)}function Z(){function i(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function l(P){var N=P.getBoundingClientRect(),z=i();return{x:parseInt(N.left,10)+parseInt(z.x,10),y:parseInt(N.top,10)+parseInt(z.y,10)}}function h(P){function N(re){var Fe=l(re);u("Moving to in page link (#"+z+") at x: "+Fe.x+" y: "+Fe.y),te(Fe.y,Fe.x,"scrollToOffset")}var z=P.split("#")[1]||P,$=decodeURIComponent(z),ne=document.getElementById($)||document.getElementsByName($)[0];e!==ne?N(ne):(u("In page link (#"+z+") not found in iFrame, so sending to parent"),te(0,0,"inPageLink","#"+z))}function _(){var P=window.location.hash,N=window.location.href;P!==""&&P!=="#"&&h(N)}function C(){function P(N){function z($){$.preventDefault(),h(this.getAttribute("href"))}N.getAttribute("href")!=="#"&&de(N,"click",z)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),P)}function W(){de(window,"hashchange",_)}function Y(){setTimeout(_,j)}function q(){Array.prototype.forEach&&document.querySelectorAll?(u("Setting up location.hash handlers"),C(),W(),Y()):w("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ye.enable?q():u("In page linking not enabled"),{findTarget:h}}function fe(){if(E!==!0)return;function i(h){te(0,0,h.type,h.screenY+":"+h.screenX)}function l(h,_){u("Add event listener: "+_),de(window.document,h,i)}l("mouseenter","Mouse Enter"),l("mouseleave","Mouse Leave")}function Qe(){u("Enable public methods"),mt.parentIFrame={autoResize:function(l){return l===!0&&t===!1?(t=!0,v()):l===!1&&t===!0&&(t=!1,B()),te(0,0,"autoResize",JSON.stringify(t)),t},close:function(){te(0,0,"close")},getId:function(){return pe},getPageInfo:function(l){typeof l=="function"?(Ee=l,te(0,0,"pageInfo")):(Ee=function(){},te(0,0,"pageInfoStop"))},moveToAnchor:function(l){ye.findTarget(l)},reset:function(){Kt("parentIFrame.reset")},scrollTo:function(l,h){te(h,l,"scrollTo")},scrollToOffset:function(l,h){te(h,l,"scrollToOffset")},sendMessage:function(l,h){te(0,0,"message",JSON.stringify(l),h)},setHeightCalculationMethod:function(l){I=l,Re()},setWidthCalculationMethod:function(l){L=l,Pe()},setTargetOrigin:function(l){u("Set targetOrigin: "+l),ce=l},size:function(l,h){var _=""+(l||"")+(h?","+h:"");ae("size","parentIFrame.size("+_+")",l,h)}}}function ze(){ue!==0&&(u("setInterval: "+ue+"ms"),ht=setInterval(function(){ae("interval","setInterval: "+ue)},Math.abs(ue)))}function Ze(){function i($){function ne(re){re.complete===!1&&(u("Attach listeners to "+re.src),re.addEventListener("load",C,!1),re.addEventListener("error",W,!1),P.push(re))}$.type==="attributes"&&$.attributeName==="src"?ne($.target):$.type==="childList"&&Array.prototype.forEach.call($.target.querySelectorAll("img"),ne)}function l($){P.splice(P.indexOf($),1)}function h($){u("Remove listeners from "+$.src),$.removeEventListener("load",C,!1),$.removeEventListener("error",W,!1),l($)}function _($,ne,re){h($.target),ae(ne,re+": "+$.target.src)}function C($){_($,"imageLoad","Image loaded")}function W($){_($,"imageLoadFailed","Image load failed")}function Y($){ae("mutationObserver","mutationObserver: "+$[0].target+" "+$[0].type),$.forEach(i)}function q(){var $=document.querySelector("body"),ne={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return z=new N(Y),u("Create body MutationObserver"),z.observe($,ne),z}var P=[],N=window.MutationObserver||window.WebKitMutationObserver,z=q();return{disconnect:function(){"disconnect"in z&&(u("Disconnect body MutationObserver"),z.disconnect(),P.forEach(h))}}}function et(){var i=0>ue;window.MutationObserver||window.WebKitMutationObserver?i?ze():S=Ze():(u("MutationObserver not supported in this browser!"),ze())}function K(i,l){var h=0;return l=l||document.body,h=document.defaultView.getComputedStyle(l,null),h=h!==null?h[i]:0,parseInt(h,n)}function M(i){i>ge/2&&(ge=2*i,u("Event throttle increased to "+ge+"ms"))}function y(i,l){for(var h=l.length,_=0,C=0,W=Oe(i),Y=Date.now(),q=0;q<h;q++)_=l[q].getBoundingClientRect()[i]+K("margin"+W,l[q]),_>C&&(C=_);return Y=Date.now()-Y,u("Parsed "+h+" HTML elements"),u("Element position calculated in "+Y+"ms"),M(Y),C}function f(i){return[i.bodyOffset(),i.bodyScroll(),i.documentElementOffset(),i.documentElementScroll()]}function k(i,l){function h(){return w("No tagged elements ("+l+") found on page"),document.querySelectorAll("body *")}var _=document.querySelectorAll("["+l+"]");return _.length===0&&h(),y(i,_)}function O(){return document.querySelectorAll("body *")}var T={bodyOffset:function(){return document.body.offsetHeight+K("marginTop")+K("marginBottom")},offset:function(){return T.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return xe.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,f(T))},min:function(){return Math.min.apply(null,f(T))},grow:function(){return T.max()},lowestElement:function(){return Math.max(T.bodyOffset()||T.documentElementOffset(),y("bottom",O()))},taggedElement:function(){return k("bottom","data-iframe-height")}},R={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return xe.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(R.bodyScroll(),R.documentElementScroll())},max:function(){return Math.max.apply(null,f(R))},min:function(){return Math.min.apply(null,f(R))},rightMostElement:function(){return y("right",O())},taggedElement:function(){return k("right","data-iframe-width")}};function V(i,l,h,_){function C(){H=z,ve=$,te(H,ve,i)}function W(){function ne(re,Fe){var Rn=Math.abs(re-Fe)<=$e;return!Rn}return z=e!==h?h:T[I](),$=e!==_?_:R[L](),ne(H,z)||m&&ne(ve,$)}function Y(){return!(i in{init:1,interval:1,size:1})}function q(){return I in ft||m&&L in ft}function P(){u("No change in size detected")}function N(){Y()&&q()?Kt(l):i in{interval:1}||P()}var z,$;W()||i==="init"?(Jt(),C()):N()}var ie=xt(V);function ae(i,l,h,_){function C(){i in{reset:1,resetPage:1,init:1}||u("Trigger event: "+l)}function W(){return _e&&i in F}W()?u("Trigger event cancelled: "+i):(C(),i==="init"?V(i,l,h,_):ie(i,l,h,_))}function Jt(){_e||(_e=!0,u("Trigger event lock on")),clearTimeout(Je),Je=setTimeout(function(){_e=!1,u("Trigger event lock off"),u("--")},j)}function Yt(i){H=T[I](),ve=R[L](),te(H,ve,i)}function Kt(i){var l=I;I=G,u("Reset trigger event: "+i),Jt(),Yt("reset"),I=l}function te(i,l,h,_,C){function W(){e===C?C=ce:u("Message targetOrigin: "+C)}function Y(){var q=i+":"+l,P=pe+":"+q+":"+h+(e!==_?":"+_:"");u("Sending message to host page ("+P+")"),qe.postMessage(we+P,C)}W(),Y()}function Cn(i){var l={init:function(){dt=i.data,qe=i.source,g(),s=!1,setTimeout(function(){le=!1},j)},reset:function(){le?u("Page reset ignored by init"):(u("Page size reset by host page"),Yt("resetPage"))},resize:function(){ae("resizeParent","Parent window requested size check")},moveToAnchor:function(){ye.findTarget(C())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var z=C();u("PageInfoFromParent called from parent: "+z),Ee(JSON.parse(z)),u(" --")},message:function(){var z=C();u("onMessage called from parent: "+z),Ke(JSON.parse(z)),u(" --")}};function h(){return we===(""+i.data).substr(0,X)}function _(){return i.data.split("]")[1].split(":")[0]}function C(){return i.data.substr(i.data.indexOf(":")+1)}function W(){return!o.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function Y(){return i.data.split(":")[2]in{true:1,false:1}}function q(){var N=_();N in l?l[N]():!W()&&!Y()&&w("Unexpected message ("+i.data+")")}function P(){s===!1?q():Y()?l.init():u('Ignored message of type "'+_()+'". Received before initialization.')}h()&&P()}function Xt(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}de(window,"message",Cn),de(window,"readystatechange",Xt),Xt()})()})(Yn);var En=It;kt.iframeResize=En;kt.iframeResizer=En;kt.iframeResizerContentWindow=Lt;(function(o){o.exports=kt})(qn);function Kn(o){const e=document.createElement("a");return e.href=o,{protocol:e.protocol,href:e.href,path:e.pathname,search:e.search,hash:e.hash}}function Xn(o){const e=Kn(o),t=e.href.substr(0,e.href.length-e.hash.length),n=window.location.href.replace(/#.*$/,"");return e.hash&&t===n}function xn(o,e){const t=JSON.stringify(e);let n=0;if(t.length===0)return n;for(let r=0;r<t.length;r++){const c=t.charCodeAt(r);n=(n<<5)-n+c,n&=n}return`${o}-${n}`}function Gn(o,e,t){const n=document.createElement("form"),r=document.createElement("input");return n.action=o,n.method="POST",n.target=t,e.forEach(([c,d])=>{r.name=c,r.value=d.toString(),n.appendChild(r.cloneNode())}),n.style.visibility="hidden",n}function Qn(o){const e=o.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const n=e[t];if(n.hasAttribute&&n.hasAttribute("target")&&n!==document.body)return n}}function Zn(o,e){if(o.hasAttribute("data-modal-post")){const t=o.getAttribute("data-modal-post");e.method="POST",e.body=t;const n=[];return new URL(`http://localhost/?${t}`).searchParams.forEach((r,c)=>{n.push([c,r])}),[n,e]}return[null,e]}function eo(o,e,t,n,r){const c=document.createElement("toujou-modal"),d=document.createElement("iframe"),S=xn("iframe",e);if(c.id=o,d.name=S,document.body.appendChild(c),Xn(t)){const p=document.querySelector(t),m=p instanceof HTMLTemplateElement?document.importNode(p.content,!0).children:p.childNodes;p.title&&(c.title=p.title);for(let F=0;F<m.length;F++)c.appendChild(m[F])}else if(r&&n==="POST"){const p=Gn(t,r,S);c.appendChild(p),c.appendChild(d),p.submit(),p.remove()}else n==="GET"&&(d.src=t,c.appendChild(d));return c}function to(o,e,t,n){const r=xn("toujou-modal",o),c=document.getElementById(r)||eo(r,o,e,t,n);setTimeout(()=>{c.open()})}const no=o=>{if(o.metaKey||o.ctrlKey)return;const e=Qn(o);if(!(!(e instanceof HTMLElement||e instanceof SVGElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-modal"){const t=e.getAttribute("href"),n=t.indexOf("?")!==-1?t.split("?")[0]+"?toujou-ajax-modal=1&"+t.split("?")[1]:t.indexOf("#")!==-1?t.split("#")[0]+"?toujou-ajax-modal=1#"+t.split("#")[1]:t+"?toujou-ajax-modal=1",[r,c]=Zn(e,{src:n});to(c,n,r?"POST":"GET",r),o.preventDefault(),o.stopPropagation()}},oo=Ut`
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

`,io={reserveScrollBarGap:!0},Le=[];function ro(o){Le.forEach(e=>e.close()),Le.push(o)}function so(o){if(o===Le[Le.length-1]){Le.pop();const e=Le.pop();e&&e.open()}}class Nt extends Wt{static get is(){return"toujou-modal"}render(){return nt`
      <div id="scroller" @click="${this.onClick}">
        <div id="content">
          <div id="modal-content">
            <div id="modal-header">
              ${this.noHeader?nt`
                    <button id="dog-ear-close" dialog-dismiss></button>`:nt`
                    <h3>${this.title}</h3>
                    <button id="modal-header-close" dialog-dismiss>×</button>
                `}
              <div id="progress-bar"></div>
            </div>
            <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
          </div>
        </div>
      </div>
`}static get properties(){return{opened:{type:Boolean,reflect:!0},title:{type:String},noHeader:{type:Boolean,attribute:"no-header",reflect:!0},allowOutsideScroll:{type:Boolean,attribute:"allow-outside-scroll",reflect:!0},noBackdrop:{type:Boolean,attribute:"no-backdrop",reflect:!0},loading:{type:Boolean,reflect:!0}}}open(){this.opened=!0}close(){this.opened=!1}constructor(e){super(e),this.opened=!1,this.loading=!1,this.intersectionObserver=new IntersectionObserver(t=>{t[0]&&this.onPosition(t[0])}),this.iframeResizerMap=new Map}disconnectedCallback(){Dn()}toggle(){this.opened=!this.opened}firstUpdated(){this.$={scroller:this.shadowRoot.querySelector("#scroller"),content:this.shadowRoot.querySelector("#content"),modalContent:this.shadowRoot.querySelector("#modal-content"),slot:this.shadowRoot.querySelector("#slot")}}updated(e){e.has("opened")&&(this.opened?this.onOpen():this.onClose(),this.hidden=!this.opened)}onOpen(){this.intersectionObserver.observe(this),this.allowOutsideScroll?document.body.styleposition="relative":Wn(this.$.scroller,io),ro(this),setTimeout(()=>{this.setAttribute("visible",""),this.dispatchModalEvent("toujou-modal-opened")})}onClose(){this.removeAttribute("visible"),so(this),this.allowOutsideScroll?document.body.style.position="":Vn(this.$.scroller),this.intersectionObserver.unobserve(this),this.dispatchModalEvent("toujou-modal-closed")}onLoad(e){this.loading=e}onClick(e){if(!e.composed)return;const t=e.composedPath();(!t.includes(this.$.modalContent)||t.some(n=>n instanceof HTMLElement&&n.hasAttribute("dialog-dismiss")))&&this.close()}onPosition(e){const t=Math.max(e.intersectionRect.y,Math.abs(e.boundingClientRect.y));this.$.content.style["min-height"]=`${e.intersectionRect.height}px`,this.$.content.style.top=t?`${t}px`:""}onSlotchange(){const e=this.$.slot.assignedNodes().filter(t=>t instanceof HTMLIFrameElement);this.iframeResizerMap.forEach((t,n)=>{e.includes(n)||this.iframeResizerMap.delete(n)}),e.forEach(t=>{this.loading=!0,t.addEventListener("load",()=>{this.iframeResizerMap.has(t)||this.listenToIframeReadyState(t)})})}listenToIframeReadyState(e){this.loading=!0,this.iframeResizerMap.set(e,this.createIframeResizer(e)),e.contentWindow.addEventListener("beforeunload",()=>{this.loading=!0});try{this.title=e.contentWindow.document.title||this.title}catch{this.title=""}this.loading=!1,this.dispatchModalEvent("toujou-modal-loaded")}createIframeResizer(e){let t={};try{t=JSON.parse(e.getAttribute("toujou-iframe"))||{}}catch(n){(console.error||console.log).call(console,n.stack||n)}return t.initCallback=()=>{this.loading=!1},t.closedCallback=()=>{this.close()},Ft.iframeResizer(t,e)}dispatchModalEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}}Gt(Nt,"styles",[oo]);customElements.define(Nt.is,Nt);document.addEventListener("click",no);var tn,At,Tt,ao=Ut(tn||(At=[`* {
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
`],Tt||(Tt=At.slice(0)),tn=Object.freeze(Object.defineProperties(At,{raw:{value:Object.freeze(Tt)}}))));let nn=class extends Wt{static get is(){return"toujou-spinner"}static get styles(){return ao}render(){return nt`
      <svg class="toujou-spinner__svg" viewBox="25 25 50 50">
        <circle class="toujou-spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `}};customElements.define(nn.is,nn);var on,jt,$t,lo=Ut(on||(jt=[`:host {
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
`],$t||($t=jt.slice(0)),on=Object.freeze(Object.defineProperties(jt,{raw:{value:Object.freeze($t)}}))));let rn=class extends Wt{static get is(){return"toujou-snackbar"}render(){return nt`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}static get styles(){return[lo]}static get properties(){return{showing:{type:Boolean},cue:{type:Array},message:{type:String},buttonText:{type:String},snackbarType:{type:String}}}set showing(e){e?(this.setAttribute("visible",""),this.setAttribute("tabindex","0"),this.focus()):(this.removeAttribute("visible"),this.setAttribute("tabindex","-1"),this.blur())}set snackbarType(e){this.setAttribute("snackbarType",e)}set variant(e){this.setAttribute(e,"")}constructor(){super(),this.keyCodes={escape:27,enter:13},this.cue=[],this._animationStart=null,this._possibleVariants=["success","warning","error","info"],window.addEventListener("toujou-add-snackbar",()=>{this._removeHiddenState()},{once:!0}),window.addEventListener("toujou-add-snackbar",e=>{this._handleAddSnackbar(e)})}connectedCallback(){super.connectedCallback(),this.showing=!1,this._timer=this._timer.bind(this),this.addEventListener("keydown",this._handleKeyDown.bind(this))}updated(e){e.has("cue")&&this.cue.length>0?this._showSnackbar():e.has("cue")&&this.cue.length>1&&this.cue[0].type==="auto"?this._checkAutoReplacement():e.has("cue")&&this.cue.length===0&&this._resetVisibleValues()}_handleAddSnackbar(e){this.cue=[...this.cue,e.detail]}_checkAutoReplacement(){this.cue.length>1&&this.cue[0].type==="auto"&&(this._wasReplaced=!0)}_handleButtonClick(){this._hideSnackbar()}_hideSnackbar(){this.showing=!1,this.addEventListener("transitionend",this._afterHide)}_afterHide(){this._removeSnackbarFromCue(),this._removeSnackbarVariantAttribute(),this.removeEventListener("transitionend",this._afterHide)}_removeSnackbarFromCue(){this.cue=this.cue.slice(1)}_removeSnackbarVariantAttribute(){this._possibleVariants.forEach(e=>{this.hasAttribute(e)&&this.removeAttribute(e)})}_resetVisibleValues(){this.message=null,this.buttonText=null}_showSnackbar(){setTimeout(()=>{this._setSnackbarValues(this.cue[0]),this.cue[0].type==="auto"&&(this._animationStart=Date.now(),this._timer()),this.showing=!0,this.snackbarType=this.cue[0].type})}_removeHiddenState(){this.removeAttribute("hidden")}_timer(){const e=Date.now();if(this._wasReplaced)return this._removeSnackbarFromCue(),this._wasReplaced=!1,void cancelAnimationFrame(this._animationRequest);e-this._animationStart>=this._duration?(this._hideSnackbar(),cancelAnimationFrame(this._animationRequest)):this._animationRequest=requestAnimationFrame(this._timer)}_setSnackbarValues(e){e.message&&(this.message=e.message),e.variant&&this._possibleVariants.includes(e.variant)&&(this.variant=e.variant),this.buttonText=e.buttonText||"OK",this._duration=e.duration||2500}_handleKeyDown(e){this.getAttribute("snackbartype")!=="auto"&&(e.key!=="Escape"&&e.keyCode!==this.keyCodes.escape&&e.key!=="Enter"&&e.keyCode!==this.keyCodes.enter||(this._hideSnackbar(),this._afterHide()))}};customElements.define(rn.is,rn);function uo(o,e,t,n){var r=arguments.length,c=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,e,t,n);else for(var S=o.length-1;S>=0;S--)(d=o[S])&&(c=(r<3?d(c):r>3?d(e,t,c):d(e,t))||c);return r>3&&c&&Object.defineProperty(e,t,c),c}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window,Vt=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol(),sn=new WeakMap;let Sn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Vt&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=sn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&sn.set(t,e))}return e}toString(){return this.cssText}};const co=o=>new Sn(typeof o=="string"?o:o+"",void 0,qt),ho=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((n,r,c)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[c+1],o[0]);return new Sn(t,o,qt)},fo=(o,e)=>{Vt?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=vt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)})},an=Vt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return co(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mt;const bt=window,ln=bt.trustedTypes,mo=ln?ln.emptyScript:"",un=bt.reactiveElementPolyfillSupport,Ht={toAttribute(o,e){switch(e){case Boolean:o=o?mo:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},An=(o,e)=>e!==o&&(e==e||o==o),Ot={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:An};let Ie=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Ot){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const c=this[e];this[t]=r,this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ot}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(an(r))}else e!==void 0&&t.push(an(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fo(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Ot){var r;const c=this.constructor._$Ep(e,n);if(c!==void 0&&n.reflect===!0){const d=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Ht).toAttribute(t,n.type);this._$El=e,d==null?this.removeAttribute(c):this.setAttribute(c,d),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,c=r._$Ev.get(e);if(c!==void 0&&this._$El!==c){const d=r.getPropertyOptions(c),S=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?d.converter:Ht;this._$El=c,this[c]=S.fromAttribute(t,d.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||An)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,c)=>this[c]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var c;return(c=r.hostUpdate)===null||c===void 0?void 0:c.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ie.finalized=!0,Ie.elementProperties=new Map,Ie.elementStyles=[],Ie.shadowRootOptions={mode:"open"},un==null||un({ReactiveElement:Ie}),((Mt=bt.reactiveElementVersions)!==null&&Mt!==void 0?Mt:bt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const yt=window,Ue=yt.trustedTypes,cn=Ue?Ue.createPolicy("lit-html",{createHTML:o=>o}):void 0,be=`lit$${(Math.random()+"").slice(9)}$`,Tn="?"+be,po=`<${Tn}>`,We=document,at=(o="")=>We.createComment(o),lt=o=>o===null||typeof o!="object"&&typeof o!="function",jn=Array.isArray,go=o=>jn(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dn=/-->/g,hn=/>/g,Ae=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fn=/'/g,mn=/"/g,$n=/^(?:script|style|textarea|title)$/i,vo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),pn=vo(1),De=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),gn=new WeakMap,Ne=We.createTreeWalker(We,129,null,!1),bo=(o,e)=>{const t=o.length-1,n=[];let r,c=e===2?"<svg>":"",d=tt;for(let p=0;p<t;p++){const m=o[p];let F,j,s=-1,H=0;for(;H<m.length&&(d.lastIndex=H,j=d.exec(m),j!==null);)H=d.lastIndex,d===tt?j[1]==="!--"?d=dn:j[1]!==void 0?d=hn:j[2]!==void 0?($n.test(j[2])&&(r=RegExp("</"+j[2],"g")),d=Ae):j[3]!==void 0&&(d=Ae):d===Ae?j[0]===">"?(d=r??tt,s=-1):j[1]===void 0?s=-2:(s=d.lastIndex-j[2].length,F=j[1],d=j[3]===void 0?Ae:j[3]==='"'?mn:fn):d===mn||d===fn?d=Ae:d===dn||d===hn?d=tt:(d=Ae,r=void 0);const G=d===Ae&&o[p+1].startsWith("/>")?" ":"";c+=d===tt?m+po:s>=0?(n.push(F),m.slice(0,s)+"$lit$"+m.slice(s)+be+G):m+be+(s===-2?(n.push(void 0),p):G)}const S=c+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[cn!==void 0?cn.createHTML(S):S,n]};class ut{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let c=0,d=0;const S=e.length-1,p=this.parts,[m,F]=bo(e,t);if(this.el=ut.createElement(m,n),Ne.currentNode=this.el.content,t===2){const j=this.el.content,s=j.firstChild;s.remove(),j.append(...s.childNodes)}for(;(r=Ne.nextNode())!==null&&p.length<S;){if(r.nodeType===1){if(r.hasAttributes()){const j=[];for(const s of r.getAttributeNames())if(s.endsWith("$lit$")||s.startsWith(be)){const H=F[d++];if(j.push(s),H!==void 0){const G=r.getAttribute(H.toLowerCase()+"$lit$").split(be),I=/([.?@])?(.*)/.exec(H);p.push({type:1,index:c,name:I[2],strings:G,ctor:I[1]==="."?wo:I[1]==="?"?_o:I[1]==="@"?Eo:_t})}else p.push({type:6,index:c})}for(const s of j)r.removeAttribute(s)}if($n.test(r.tagName)){const j=r.textContent.split(be),s=j.length-1;if(s>0){r.textContent=Ue?Ue.emptyScript:"";for(let H=0;H<s;H++)r.append(j[H],at()),Ne.nextNode(),p.push({type:2,index:++c});r.append(j[s],at())}}}else if(r.nodeType===8)if(r.data===Tn)p.push({type:2,index:c});else{let j=-1;for(;(j=r.data.indexOf(be,j+1))!==-1;)p.push({type:7,index:c}),j+=be.length-1}c++}}static createElement(e,t){const n=We.createElement("template");return n.innerHTML=e,n}}function Ve(o,e,t=o,n){var r,c,d,S;if(e===De)return e;let p=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const m=lt(e)?void 0:e._$litDirective$;return(p==null?void 0:p.constructor)!==m&&((c=p==null?void 0:p._$AO)===null||c===void 0||c.call(p,!1),m===void 0?p=void 0:(p=new m(o),p._$AT(o,t,n)),n!==void 0?((d=(S=t)._$Co)!==null&&d!==void 0?d:S._$Co=[])[n]=p:t._$Cl=p),p!==void 0&&(e=Ve(o,p._$AS(o,e.values),p,n)),e}class yo{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:n},parts:r}=this._$AD,c=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:We).importNode(n,!0);Ne.currentNode=c;let d=Ne.nextNode(),S=0,p=0,m=r[0];for(;m!==void 0;){if(S===m.index){let F;m.type===2?F=new ct(d,d.nextSibling,this,e):m.type===1?F=new m.ctor(d,m.name,m.strings,this,e):m.type===6&&(F=new xo(d,this,e)),this.u.push(F),m=r[++p]}S!==(m==null?void 0:m.index)&&(d=Ne.nextNode(),S++)}return c}p(e){let t=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ct{constructor(e,t,n,r){var c;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cm=(c=r==null?void 0:r.isConnected)===null||c===void 0||c}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),lt(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==De&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):go(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==J&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:r}=e,c=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ut.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===c)this._$AH.p(n);else{const d=new yo(c,this),S=d.v(this.options);d.p(n),this.T(S),this._$AH=d}}_$AC(e){let t=gn.get(e.strings);return t===void 0&&gn.set(e.strings,t=new ut(e)),t}k(e){jn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const c of e)r===t.length?t.push(n=new ct(this.O(at()),this.O(at()),this,this.options)):n=t[r],n._$AI(c),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class _t{constructor(e,t,n,r,c){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=c,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const c=this.strings;let d=!1;if(c===void 0)e=Ve(this,e,t,0),d=!lt(e)||e!==this._$AH&&e!==De,d&&(this._$AH=e);else{const S=e;let p,m;for(e=c[0],p=0;p<c.length-1;p++)m=Ve(this,S[n+p],t,p),m===De&&(m=this._$AH[p]),d||(d=!lt(m)||m!==this._$AH[p]),m===J?e=J:e!==J&&(e+=(m??"")+c[p+1]),this._$AH[p]=m}d&&!r&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wo extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}const ko=Ue?Ue.emptyScript:"";class _o extends _t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==J?this.element.setAttribute(this.name,ko):this.element.removeAttribute(this.name)}}class Eo extends _t{constructor(e,t,n,r,c){super(e,t,n,r,c),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ve(this,e,t,0))!==null&&n!==void 0?n:J)===De)return;const r=this._$AH,c=e===J&&r!==J||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,d=e!==J&&(r===J||c);c&&this.element.removeEventListener(this.name,this,r),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class xo{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}}const vn=yt.litHtmlPolyfillSupport;vn==null||vn(ut,ct),((Ct=yt.litHtmlVersions)!==null&&Ct!==void 0?Ct:yt.litHtmlVersions=[]).push("2.6.1");const Mn=(o,e,t)=>{var n,r;const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let d=c._$litPart$;if(d===void 0){const S=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;c._$litPart$=d=new ct(e.insertBefore(at(),S),S,void 0,t??{})}return d._$AI(o),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt,Pt;class rt extends Ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return De}}rt.finalized=!0,rt._$litElement$=!0,(Rt=globalThis.litElementHydrateSupport)===null||Rt===void 0||Rt.call(globalThis,{LitElement:rt});const bn=globalThis.litElementPolyfillSupport;bn==null||bn({LitElement:rt});((Pt=globalThis.litElementVersions)!==null&&Pt!==void 0?Pt:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const So=o=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(o,e):((t,n)=>{const{kind:r,elements:c}=n;return{kind:r,elements:c,finisher(d){customElements.define(t,d)}}})(o,e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt;((zt=window.HTMLSlotElement)===null||zt===void 0?void 0:zt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Ao=ho`.exit-warning__message {
    background-color: var(--toujou-exist-warning-message-bg-color, var(--bg-color));
    overflow: var(--toujou-exist-warning-message-overflow, hidden);
    padding: var(--toujou-exist-warning-message-padding, var(--spacing-normal) var(--spacing-normal) var(--spacing-l));
}
`;let Bt=class extends rt{static get is(){return"exit-warning"}static get properties(){return{title:{type:String},targetUrl:{type:String},redirectDelay:{type:Number},secondsRemaining:{type:Number},opened:{type:Boolean},_messageTemplate:{type:Object}}}constructor(){super(),this.targetUrl="http://www.dfau.de",this.redirectDelay=50,this.onIntervalTick=this.onIntervalTick.bind(this),this.onModalOpenedChanged=this.onModalOpenedChanged.bind(this),this._secondsRemainingInterval=null,this._messageTemplate=null,this._modal=null,this._modalOpenedObserver=new MutationObserver(this.onModalOpenedChanged)}render(){return pn`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `}connectedCallback(){const e=this.querySelector("template");e&&(this._messageTemplate=new Function("html","targetUrl","secondsRemaining","return html`"+e.innerHTML+"`")),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._modalOpenedObserver.disconnect()}updated(e){this._messageTemplate&&Mn(this._messageTemplate(pn,this.targetUrl,this.secondsRemaining),this)}firstUpdated(e){this._modal=this.shadowRoot.querySelector("toujou-modal"),this._modal&&this._modalOpenedObserver.observe(this._modal,{attributeFilter:["opened"]})}onModalOpenedChanged(){this._modal.opened?(this.secondsRemaining=this.redirectDelay,this._secondsRemainingInterval=window.setInterval(this.onIntervalTick,1e3)):(this._secondsRemainingInterval&&window.clearInterval(this._secondsRemainingInterval),this._secondsRemainingInterval=null)}onIntervalTick(){this.secondsRemaining--,this.secondsRemaining<=0&&(window.location.href=this.targetUrl,this.close())}open(){this._modal&&this._modal.open()}close(){this._modal&&this._modal.close()}};Bt.styles=[Ao];Bt=uo([So("toujou-exit-warning")],Bt);function To(o){const e=o.composedPath();for(let t=0;t<e.indexOf(document.body);t++){const n=e[t];if(n.hasAttribute&&n.hasAttribute("target")&&n!==document.body)return n}}function On(o){const e=document.querySelector("exit-warning");return e?window.location.href.match(/toujou-ajax-modal=/)&&window.self!==window.parent?(window.parent.postMessage({action:"toujou-exit-warning",targetUrl:o},window.location.origin),!0):(new URL(o).hostname===window.location.hostname?window.location.href=o:(e.targetUrl=o,e.open()),!0):!1}function jo(o){if(o.metaKey||o.ctrlKey)return;const e=To(o);if(!(!(e instanceof HTMLElement)||e instanceof HTMLFormElement)&&e.getAttribute("target")==="toujou-exit-warning"){const t=e.getAttribute("href");On(t)&&(o.preventDefault(),o.stopPropagation())}}function $o(o){o.origin!==window.location.origin||o.data.action===void 0||o.data.action!=="toujou-exit-warning"||!o.data.targetUrl||On(o.data.targetUrl)}document.addEventListener("click",jo);window.addEventListener("message",$o);
//# sourceMappingURL=base.js.map
