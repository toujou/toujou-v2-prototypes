import{css as Un,unsafeCSS as Bn,LitElement as Wn}from"lit";import{property as Q,state as sn,customElement as Hn}from"lit/decorators.js";function Yt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yn(e,n,t){return n&&Yt(e.prototype,n),t&&Yt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Xt="(prefers-reduced-motion: reduce)",Ie=1,Xn=2,xe=3,Re=4,Xe=5,Je=6,nt=7,jn={CREATED:Ie,MOUNTED:Xn,IDLE:xe,MOVING:Re,SCROLLING:Xe,DRAGGING:Je,DESTROYED:nt};function de(e){e.length=0}function me(e,n,t){return Array.prototype.slice.call(e,n,t)}function G(e){return e.bind.apply(e,[null].concat(me(arguments,1)))}var At=setTimeout,St=function(){};function jt(e){return requestAnimationFrame(e)}function ot(e,n){return typeof n===e}function Ge(e){return!Nt(e)&&ot("object",e)}var Ct=Array.isArray,un=G(ot,"function"),ge=G(ot,"string"),st=G(ot,"undefined");function Nt(e){return e===null}function ln(e){return e instanceof HTMLElement}function Pe(e){return Ct(e)?e:[e]}function ae(e,n){Pe(e).forEach(n)}function Ot(e,n){return e.indexOf(n)>-1}function Qe(e,n){return e.push.apply(e,Pe(n)),e}function _e(e,n,t){e&&ae(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function se(e,n){_e(e,ge(n)?n.split(" "):n,!0)}function je(e,n){ae(n,e.appendChild.bind(e))}function Rt(e,n){ae(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function Ue(e,n){return ln(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function cn(e,n){var t=e?me(e.children):[];return n?t.filter(function(r){return Ue(r,n)}):t}function qe(e,n){return n?cn(e,n)[0]:e.firstElementChild}var rt=Object.keys;function be(e,n,t){if(e){var r=rt(e);r=t?r.reverse():r;for(var i=0;i<r.length;i++){var o=r[i];if(o!=="__proto__"&&n(e[o],o)===!1)break}}return e}function Be(e){return me(arguments,1).forEach(function(n){be(n,function(t,r){e[r]=n[r]})}),e}function pe(e){return me(arguments,1).forEach(function(n){be(n,function(t,r){Ct(t)?e[r]=t.slice():Ge(t)?e[r]=pe({},Ge(e[r])?e[r]:{},t):e[r]=t})}),e}function qt(e,n){Pe(n||rt(e)).forEach(function(t){delete e[t]})}function ue(e,n){ae(e,function(t){ae(n,function(r){t&&t.removeAttribute(r)})})}function k(e,n,t){Ge(n)?be(n,function(r,i){k(e,i,r)}):ae(e,function(r){Nt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function we(e,n,t){var r=document.createElement(e);return n&&(ge(n)?se(r,n):k(r,n)),t&&je(t,r),r}function te(e,n,t){if(st(t))return getComputedStyle(e)[n];Nt(t)||(e.style[n]=""+t)}function it(e,n){te(e,"display",n)}function fn(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function Kt(e,n){return e&&e.classList.contains(n)}function ne(e){return e.getBoundingClientRect()}function Ae(e){ae(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function dn(e){return qe(new DOMParser().parseFromString(e,"text/html").body)}function le(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function vn(e,n){return e&&e.querySelector(n)}function Pt(e,n){return n?me(e.querySelectorAll(n)):[]}function ce(e,n){_e(e,n,!1)}function Tt(e){return e.timeStamp}function ve(e){return ge(e)?e:e?e+"px":""}var ee="splide",Dt="data-"+ee;function ze(e,n){if(!e)throw new Error("["+ee+"] "+(n||""))}var Ce=Math.min,We=Math.max,at=Math.floor,He=Math.ceil,Z=Math.abs;function _n(e,n,t){return Z(e-n)<t}function et(e,n,t,r){var i=Ce(n,t),o=We(n,t);return r?i<e&&e<o:i<=e&&e<=o}function Ve(e,n,t){var r=Ce(n,t),i=We(n,t);return Ce(We(r,e),i)}function It(e){return+(e>0)-+(e<0)}function wt(e,n){return ae(n,function(t){e=e.replace("%s",""+t)}),e}function Mt(e){return e<10?"0"+e:""+e}var $t={};function qn(e){return""+e+Mt($t[e]=($t[e]||0)+1)}function pn(){var e=[];function n(a,d,l,f){i(a,d,function(u,E,v){var m="addEventListener"in u,p=m?u.removeEventListener.bind(u,E,l,f):u.removeListener.bind(u,l);m?u.addEventListener(E,l,f):u.addListener(l),e.push([u,E,v,l,p])})}function t(a,d,l){i(a,d,function(f,u,E){e=e.filter(function(v){return v[0]===f&&v[1]===u&&v[2]===E&&(!l||v[3]===l)?(v[4](),!1):!0})})}function r(a,d,l){var f,u=!0;return typeof CustomEvent=="function"?f=new CustomEvent(d,{bubbles:u,detail:l}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(d,u,!1,l)),a.dispatchEvent(f),f}function i(a,d,l){ae(a,function(f){f&&ae(d,function(u){u.split(" ").forEach(function(E){var v=E.split(".");l(f,v[0],v[1])})})})}function o(){e.forEach(function(a){a[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:o}}var Ee="mounted",Zt="ready",he="move",Ke="moved",gn="shifted",hn="click",Kn="active",$n="inactive",Zn="visible",Jn="hidden",mn="slide:keydown",H="refresh",J="updated",Ne="resize",En="resized",Qn="drag",er="dragging",tr="dragged",kt="scroll",De="scrolled",yn="destroy",nr="arrows:mounted",rr="arrows:updated",ir="pagination:mounted",ar="pagination:updated",bn="navigation:mounted",An="autoplay:play",or="autoplay:playing",Sn="autoplay:pause",Tn="lazyload:loaded";function B(e){var n=e?e.event.bus:document.createDocumentFragment(),t=pn();function r(o,a){t.bind(n,Pe(o).join(" "),function(d){a.apply(a,Ct(d.detail)?d.detail:[])})}function i(o){t.dispatch(n,o,me(arguments,1))}return e&&e.event.on(yn,t.destroy),Be(t,{bus:n,on:r,off:G(t.unbind,n),emit:i})}function ut(e,n,t,r){var i=Date.now,o,a=0,d,l=!0,f=0;function u(){if(!l){if(a=e?Ce((i()-o)/e,1):1,t&&t(a),a>=1&&(n(),o=i(),r&&++f>=r))return v();jt(u)}}function E(y){!y&&p(),o=i()-(y?a*e:0),l=!1,jt(u)}function v(){l=!0}function m(){o=i(),a=0,t&&t(a)}function p(){d&&cancelAnimationFrame(d),a=0,d=0,l=!0}function s(y){e=y}function _(){return l}return{start:E,rewind:m,pause:v,cancel:p,set:s,isPaused:_}}function sr(e){var n=e;function t(i){n=i}function r(i){return Ot(Pe(i),n)}return{set:t,is:r}}function ur(e,n){var t;function r(){t||(t=ut(n||0,function(){e(),t=null},null,1),t.start())}return r}function lr(e,n,t){var r=e.state,i=t.breakpoints||{},o=t.reducedMotion||{},a=pn(),d=[];function l(){var p=t.mediaQuery==="min";rt(i).sort(function(s,_){return p?+s-+_:+_-+s}).forEach(function(s){u(i[s],"("+(p?"min":"max")+"-width:"+s+"px)")}),u(o,Xt),E()}function f(p){p&&a.destroy()}function u(p,s){var _=matchMedia(s);a.bind(_,"change",E),d.push([p,_])}function E(){var p=r.is(nt),s=t.direction,_=d.reduce(function(y,g){return pe(y,g[1].matches?g[0]:{})},{});qt(t),m(_),t.destroy?e.destroy(t.destroy==="completely"):p?(f(!0),e.mount()):s!==t.direction&&e.refresh()}function v(p){matchMedia(Xt).matches&&(p?pe(t,o):qt(t,rt(o)))}function m(p,s){pe(t,p),s&&pe(Object.getPrototypeOf(t),p),r.is(Ie)||e.emit(J,t)}return{setup:l,destroy:f,reduce:v,set:m}}var lt="Arrow",ct=lt+"Left",ft=lt+"Right",In=lt+"Up",wn=lt+"Down",Jt="rtl",dt="ttb",mt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[In,ft],ArrowRight:[wn,ct]};function cr(e,n,t){function r(o,a,d){d=d||t.direction;var l=d===Jt&&!a?1:d===dt?0:-1;return mt[o]&&mt[o][l]||o.replace(/width|left|right/i,function(f,u){var E=mt[f.toLowerCase()][l]||f;return u>0?E.charAt(0).toUpperCase()+E.slice(1):E})}function i(o){return o*(t.direction===Jt?1:-1)}return{resolve:r,orient:i}}var fe="role",Le="tabindex",fr="disabled",oe="aria-",$e=oe+"controls",Ln=oe+"current",Qt=oe+"selected",re=oe+"label",Vt=oe+"labelledby",xn=oe+"hidden",zt=oe+"orientation",Ye=oe+"roledescription",en=oe+"live",tn=oe+"busy",nn=oe+"atomic",Ft=[fe,Le,fr,$e,Ln,re,Vt,xn,zt,Ye],Et=ee,rn=ee+"__track",dr=ee+"__list",vt=ee+"__slide",Cn=vt+"--clone",vr=vt+"__container",Gt=ee+"__arrows",_t=ee+"__arrow",Nn=_t+"--prev",On=_t+"--next",pt=ee+"__pagination",Rn=pt+"__page",_r=ee+"__progress",pr=_r+"__bar",gr=ee+"__toggle",hr=ee+"__spinner",mr=ee+"__sr",Er="is-initialized",Se="is-active",Pn="is-prev",Dn="is-next",Lt="is-visible",xt="is-loading",Mn="is-focus-in",yr=[Se,Lt,Pn,Dn,xt,Mn],br={slide:vt,clone:Cn,arrows:Gt,arrow:_t,prev:Nn,next:On,pagination:pt,page:Rn,spinner:hr};function Ar(e,n){if(un(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!Ue(t,n);)t=t.parentElement;return t}var Sr=5,an=200,kn="touchstart mousedown",yt="touchmove mousemove",bt="touchend touchcancel mouseup click";function Tr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=e.root,d=t.i18n,l={},f=[],u=[],E=[],v,m,p;function s(){S(),x(),g()}function _(){i(H,y),i(H,s),i(J,g),o(document,kn+" keydown",function(I){p=I.type==="keydown"},{capture:!0}),o(a,"focusin",function(){_e(a,Mn,!!p)})}function y(I){var C=Ft.concat("style");de(f),ce(a,u),ce(v,E),ue([v,m],C),ue(a,I?C:["style",Ye])}function g(){ce(a,u),ce(v,E),u=w(Et),E=w(rn),se(a,u),se(v,E),k(a,re,t.label),k(a,Vt,t.labelledby)}function S(){v=V("."+rn),m=qe(v,"."+dr),ze(v&&m,"A track/list element is missing."),Qe(f,cn(m,"."+vt+":not(."+Cn+")")),be({arrows:Gt,pagination:pt,prev:Nn,next:On,bar:pr,toggle:gr},function(I,C){l[C]=V("."+I)}),Be(l,{root:a,track:v,list:m,slides:f})}function x(){var I=a.id||qn(ee),C=t.role;a.id=I,v.id=v.id||I+"-track",m.id=m.id||I+"-list",!ie(a,fe)&&a.tagName!=="SECTION"&&C&&k(a,fe,C),k(a,Ye,d.carousel),k(m,fe,"presentation")}function V(I){var C=vn(a,I);return C&&Ar(C,"."+Et)===a?C:void 0}function w(I){return[I+"--"+t.type,I+"--"+t.direction,t.drag&&I+"--draggable",t.isNavigation&&I+"--nav",I===Et&&Se]}return Be(l,{setup:s,mount:_,destroy:y})}var Oe="slide",Me="loop",gt="fade";function Ir(e,n,t,r){var i=B(e),o=i.on,a=i.emit,d=i.bind,l=e.Components,f=e.root,u=e.options,E=u.isNavigation,v=u.updateOnMove,m=u.i18n,p=u.pagination,s=u.slideFocus,_=l.Direction.resolve,y=ie(r,"style"),g=ie(r,re),S=t>-1,x=qe(r,"."+vr),V=Pt(r,u.focusableNodes||""),w;function I(){S||(r.id=f.id+"-slide"+Mt(n+1),k(r,fe,p?"tabpanel":"group"),k(r,Ye,m.slide),k(r,re,g||wt(m.slideLabel,[n+1,e.length]))),C()}function C(){d(r,"click",G(a,hn,$)),d(r,"keydown",G(a,mn,$)),o([Ke,gn,De],A),o(bn,D),v&&o(he,b)}function O(){w=!0,i.destroy(),ce(r,yr),ue(r,Ft),k(r,"style",y),k(r,re,g||"")}function D(){var h=e.splides.map(function(P){var c=P.splide.Components.Slides.getAt(n);return c?c.slide.id:""}).join(" ");k(r,re,wt(m.slideX,(S?t:n)+1)),k(r,$e,h),k(r,fe,s?"button":""),s&&ue(r,Ye)}function b(){w||A()}function A(){if(!w){var h=e.index;R(),L(),_e(r,Pn,n===h-1),_e(r,Dn,n===h+1)}}function R(){var h=N();h!==Kt(r,Se)&&(_e(r,Se,h),k(r,Ln,E&&h||""),a(h?Kn:$n,$))}function L(){var h=Y(),P=!h&&(!N()||S);if(e.state.is([Re,Xe])||k(r,xn,P||""),k(V,Le,P?-1:""),s&&k(r,Le,P?-1:0),h!==Kt(r,Lt)&&(_e(r,Lt,h),a(h?Zn:Jn,$)),!h&&document.activeElement===r){var c=l.Slides.getAt(e.index);c&&fn(c.slide)}}function z(h,P,c){te(c&&x||r,h,P)}function N(){var h=e.index;return h===n||u.cloneStatus&&h===t}function Y(){if(e.is(gt))return N();var h=ne(l.Elements.track),P=ne(r),c=_("left",!0),M=_("right",!0);return at(h[c])<=He(P[c])&&at(P[M])<=He(h[M])}function X(h,P){var c=Z(h-n);return!S&&(u.rewind||e.is(Me))&&(c=Ce(c,e.length-c)),c<=P}var $={index:n,slideIndex:t,slide:r,container:x,isClone:S,mount:I,destroy:O,update:A,style:z,isWithin:X};return $}function wr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,d=n.Elements,l=d.slides,f=d.list,u=[];function E(){v(),i(H,m),i(H,v),i([Ee,H],function(){u.sort(function(b,A){return b.index-A.index})})}function v(){l.forEach(function(b,A){s(b,A,-1)})}function m(){V(function(b){b.destroy()}),de(u)}function p(){V(function(b){b.update()})}function s(b,A,R){var L=Ir(e,A,R,b);L.mount(),u.push(L)}function _(b){return b?w(function(A){return!A.isClone}):u}function y(b){var A=n.Controller,R=A.toIndex(b),L=A.hasFocus()?1:t.perPage;return w(function(z){return et(z.index,R,R+L-1)})}function g(b){return w(b)[0]}function S(b,A){ae(b,function(R){if(ge(R)&&(R=dn(R)),ln(R)){var L=l[A];L?Rt(R,L):je(f,R),se(R,t.classes.slide),C(R,G(o,Ne))}}),o(H)}function x(b){Ae(w(b).map(function(A){return A.slide})),o(H)}function V(b,A){_(A).forEach(b)}function w(b){return u.filter(un(b)?b:function(A){return ge(b)?Ue(A.slide,b):Ot(Pe(b),A.index)})}function I(b,A,R){V(function(L){L.style(b,A,R)})}function C(b,A){var R=Pt(b,"img"),L=R.length;L?R.forEach(function(z){a(z,"load error",function(){--L||A()})}):A()}function O(b){return b?l.length:u.length}function D(){return u.length>t.perPage}return{mount:E,destroy:m,update:p,register:s,get:_,getIn:y,getAt:g,add:S,remove:x,forEach:V,filter:w,style:I,getLength:O,isEnough:D}}function Lr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,d=n.Slides,l=n.Direction.resolve,f=n.Elements,u=f.root,E=f.track,v=f.list,m=d.getAt,p=d.style,s,_;function y(){g(),o(window,"resize load",ur(G(a,Ne))),i([J,H],g),i(Ne,S)}function g(){_=null,s=t.direction===dt,te(u,"maxWidth",ve(t.width)),te(E,l("paddingLeft"),x(!1)),te(E,l("paddingRight"),x(!0)),S()}function S(){var N=ne(u);(!_||_.width!==N.width||_.height!==N.height)&&(te(E,"height",V()),p(l("marginRight"),ve(t.gap)),p("width",I()),p("height",C(),!0),_=N,a(En))}function x(N){var Y=t.padding,X=l(N?"right":"left");return Y&&ve(Y[X]||(Ge(Y)?0:Y))||"0px"}function V(){var N="";return s&&(N=w(),ze(N,"height or heightRatio is missing."),N="calc("+N+" - "+x(!1)+" - "+x(!0)+")"),N}function w(){return ve(t.height||ne(v).width*t.heightRatio)}function I(){return t.autoWidth?null:ve(t.fixedWidth)||(s?"":O())}function C(){return ve(t.fixedHeight)||(s?t.autoHeight?null:O():w())}function O(){var N=ve(t.gap);return"calc((100%"+(N&&" + "+N)+")/"+(t.perPage||1)+(N&&" - "+N)+")"}function D(){return ne(v)[l("width")]}function b(N,Y){var X=m(N||0);return X?ne(X.slide)[l("width")]+(Y?0:L()):0}function A(N,Y){var X=m(N);if(X){var $=ne(X.slide)[l("right")],h=ne(v)[l("left")];return Z($-h)+(Y?0:L())}return 0}function R(){return A(e.length-1,!0)-A(-1,!0)}function L(){var N=m(0);return N&&parseFloat(te(N.slide,l("marginRight")))||0}function z(N){return parseFloat(te(E,l("padding"+(N?"Right":"Left"))))||0}return{mount:y,listSize:D,slideSize:b,sliderSize:R,totalSize:A,getPadding:z}}var xr=2;function Cr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=n.Elements,d=n.Slides,l=n.Direction.resolve,f=[],u;function E(){v(),i(H,m),i(H,v),i([J,Ne],p)}function v(){(u=y())&&(s(u),o(Ne))}function m(){Ae(f),de(f)}function p(){u<y()&&o(H)}function s(g){var S=d.get().slice(),x=S.length;if(x){for(;S.length<g;)Qe(S,S);Qe(S.slice(-g),S.slice(0,g)).forEach(function(V,w){var I=w<g,C=_(V.slide,w);I?Rt(C,S[0].slide):je(a.list,C),Qe(f,C),d.register(C,w-g+(I?0:x),V.index)})}}function _(g,S){var x=g.cloneNode(!0);return se(x,t.classes.clone),x.id=e.root.id+"-clone"+Mt(S+1),x}function y(){var g=t.clones;if(!e.is(Me))g=0;else if(!g){var S=t[l("fixedWidth")]&&n.Layout.slideSize(0),x=S&&He(ne(a.track)[l("width")]/S);g=x||t[l("autoWidth")]&&e.length||t.perPage*xr}return g}return{mount:E,destroy:m}}function Nr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=e.state.set,d=n.Layout,l=d.slideSize,f=d.getPadding,u=d.totalSize,E=d.listSize,v=d.sliderSize,m=n.Direction,p=m.resolve,s=m.orient,_=n.Elements,y=_.list,g=_.track,S;function x(){S=n.Transition,i([Ee,En,J,H],V)}function V(){n.Controller.isBusy()||(n.Scroll.cancel(),I(e.index),n.Slides.update())}function w(h,P,c,M){h!==P&&X(h>c)&&(b(),C(D(L(),h>c),!0)),a(Re),o(he,P,c,h),S.start(P,function(){a(xe),o(Ke,P,c,h),M&&M()})}function I(h){C(R(h,!0))}function C(h,P){if(!e.is(gt)){var c=P?h:O(h);te(y,"transform","translate"+p("X")+"("+c+"px)"),h!==c&&o(gn)}}function O(h){if(e.is(Me)){var P=A(h),c=P>n.Controller.getEnd(),M=P<0;(M||c)&&(h=D(h,c))}return h}function D(h,P){var c=h-Y(P),M=v();return h-=s(M*(He(Z(c)/M)||1))*(P?1:-1),h}function b(){C(L()),S.cancel()}function A(h){for(var P=n.Slides.get(),c=0,M=1/0,W=0;W<P.length;W++){var F=P[W].index,q=Z(R(F,!0)-h);if(q<=M)M=q,c=F;else break}return c}function R(h,P){var c=s(u(h-1)-N(h));return P?z(c):c}function L(){var h=p("left");return ne(y)[h]-ne(g)[h]+s(f(!1))}function z(h){return t.trimSpace&&e.is(Oe)&&(h=Ve(h,0,s(v()-E()))),h}function N(h){var P=t.focus;return P==="center"?(E()-l(h,!0))/2:+P*l(h)||0}function Y(h){return R(h?n.Controller.getEnd():0,!!t.trimSpace)}function X(h){var P=s(D(L(),h));return h?P>=0:P<=y[p("scrollWidth")]-ne(g)[p("width")]}function $(h,P){P=st(P)?L():P;var c=h!==!0&&s(P)<s(Y(!1)),M=h!==!1&&s(P)>s(Y(!0));return c||M}return{mount:x,move:w,jump:I,translate:C,shift:D,cancel:b,toIndex:A,toPosition:R,getPosition:L,getLimit:Y,exceededLimit:$,reposition:V}}function Or(e,n,t){var r=B(e),i=r.on,o=n.Move,a=o.getPosition,d=o.getLimit,l=o.toPosition,f=n.Slides,u=f.isEnough,E=f.getLength,v=e.is(Me),m=e.is(Oe),p=G(D,!1),s=G(D,!0),_=t.start||0,y=_,g,S,x;function V(){w(),i([J,H],w)}function w(){g=E(!0),S=t.perMove,x=t.perPage;var c=Ve(_,0,g-1);c!==_&&(_=c,o.reposition())}function I(c,M,W){if(!P()){var F=O(c),q=R(F);q>-1&&(M||q!==_)&&(X(q),o.move(F,q,y,W))}}function C(c,M,W,F){n.Scroll.scroll(c,M,W,function(){X(R(o.toIndex(a()))),F&&F()})}function O(c){var M=_;if(ge(c)){var W=c.match(/([+\-<>])(\d+)?/)||[],F=W[1],q=W[2];F==="+"||F==="-"?M=b(_+ +(""+F+(+q||1)),_):F===">"?M=q?z(+q):p(!0):F==="<"&&(M=s(!0))}else M=v?c:Ve(c,0,L());return M}function D(c,M){var W=S||(h()?1:x),F=b(_+W*(c?-1:1),_,!(S||h()));return F===-1&&m&&!_n(a(),d(!c),1)?c?0:L():M?F:R(F)}function b(c,M,W){if(u()){var F=L(),q=A(c);q!==c&&(M=c,c=q,W=!1),c<0||c>F?!S&&(et(0,c,M,!0)||et(F,M,c,!0))?c=z(N(c)):v?c=W?c<0?-(g%x||x):g:c:t.rewind?c=c<0?F:0:c=-1:W&&c!==M&&(c=z(N(M)+(c<M?-1:1)))}else c=-1;return c}function A(c){if(m&&t.trimSpace==="move"&&c!==_)for(var M=a();M===l(c,!0)&&et(c,0,e.length-1,!t.rewind);)c<_?--c:++c;return c}function R(c){return v?(c+g)%g||0:c}function L(){return We(g-(h()||v&&S?1:x),0)}function z(c){return Ve(h()?c:x*c,0,L())}function N(c){return h()?c:at((c>=L()?g-1:c)/x)}function Y(c){var M=o.toIndex(c);return m?Ve(M,0,L()):M}function X(c){c!==_&&(y=_,_=c)}function $(c){return c?y:_}function h(){return!st(t.focus)||t.isNavigation}function P(){return e.state.is([Re,Xe])&&!!t.waitForTransition}return{mount:V,go:I,scroll:C,getNext:p,getPrev:s,getAdjacent:D,getEnd:L,setIndex:X,getIndex:$,toIndex:z,toPage:N,toDest:Y,hasFocus:h,isBusy:P}}var Rr="http://www.w3.org/2000/svg",Pr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Ze=40;function Dr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,d=t.classes,l=t.i18n,f=n.Elements,u=n.Controller,E=f.arrows,v=f.track,m=E,p=f.prev,s=f.next,_,y,g={};function S(){V(),i(J,x)}function x(){w(),S()}function V(){var A=t.arrows;A&&!(p&&s)&&O(),p&&s&&(Be(g,{prev:p,next:s}),it(m,A?"":"none"),se(m,y=Gt+"--"+t.direction),A&&(I(),b(),k([p,s],$e,v.id),a(nr,p,s)))}function w(){r.destroy(),ce(m,y),_?(Ae(E?[p,s]:m),p=s=null):ue([p,s],Ft)}function I(){i([Ke,H,De],b),o(s,"click",G(C,">")),o(p,"click",G(C,"<"))}function C(A){u.go(A,!0)}function O(){m=E||we("div",d.arrows),p=D(!0),s=D(!1),_=!0,je(m,[p,s]),!E&&Rt(m,v)}function D(A){var R='<button class="'+d.arrow+" "+(A?d.prev:d.next)+'" type="button"><svg xmlns="'+Rr+'" viewBox="0 0 '+Ze+" "+Ze+'" width="'+Ze+'" height="'+Ze+'" focusable="false"><path d="'+(t.arrowPath||Pr)+'" />';return dn(R)}function b(){var A=e.index,R=u.getPrev(),L=u.getNext(),z=R>-1&&A<R?l.last:l.prev,N=L>-1&&A>L?l.first:l.next;p.disabled=R<0,s.disabled=L<0,k(p,re,z),k(s,re,N),a(rr,p,s,R,L)}return{arrows:g,mount:S,destroy:w}}var Mr=Dt+"-interval";function kr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,d=ut(t.interval,e.go.bind(e,">"),I),l=d.isPaused,f=n.Elements,u=n.Elements,E=u.root,v=u.toggle,m=t.autoplay,p,s,_=m==="pause";function y(){m&&(g(),v&&k(v,$e,f.track.id),_||S(),w())}function g(){t.pauseOnHover&&o(E,"mouseenter mouseleave",function(O){p=O.type==="mouseenter",V()}),t.pauseOnFocus&&o(E,"focusin focusout",function(O){s=O.type==="focusin",V()}),v&&o(v,"click",function(){_?S():x(!0)}),i([he,kt,H],d.rewind),i(he,C)}function S(){l()&&n.Slides.isEnough()&&(d.start(!t.resetProgress),s=p=_=!1,w(),a(An))}function x(O){O===void 0&&(O=!0),_=!!O,w(),l()||(d.pause(),a(Sn))}function V(){_||(p||s?x(!1):S())}function w(){v&&(_e(v,Se,!_),k(v,re,t.i18n[_?"play":"pause"]))}function I(O){var D=f.bar;D&&te(D,"width",O*100+"%"),a(or,O)}function C(O){var D=n.Slides.getAt(O);d.set(D&&+ie(D.slide,Mr)||t.interval)}return{mount:y,destroy:d.cancel,play:S,pause:x,isPaused:l}}function Vr(e,n,t){var r=B(e),i=r.on;function o(){t.cover&&(i(Tn,G(d,!0)),i([Ee,J,H],G(a,!0)))}function a(l){n.Slides.forEach(function(f){var u=qe(f.container||f.slide,"img");u&&u.src&&d(l,u,f)})}function d(l,f,u){u.style("background",l?'center/cover no-repeat url("'+f.src+'")':"",!0),it(f,l?"none":"")}return{mount:o,destroy:G(a,!1)}}var zr=10,Fr=600,Gr=.6,Ur=1.5,Br=800;function Wr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=e.state.set,d=n.Move,l=d.getPosition,f=d.getLimit,u=d.exceededLimit,E=d.translate,v,m,p=1;function s(){i(he,S),i([J,H],x)}function _(w,I,C,O,D){var b=l();if(S(),C){var A=n.Layout.sliderSize(),R=It(w)*A*at(Z(w)/A)||0;w=d.toPosition(n.Controller.toDest(w%A))+R}var L=_n(b,w,1);p=1,I=L?0:I||We(Z(w-b)/Ur,Br),m=O,v=ut(I,y,G(g,b,w,D),1),a(Xe),o(kt),v.start()}function y(){a(xe),m&&m(),o(De)}function g(w,I,C,O){var D=l(),b=w+(I-w)*V(O),A=(b-D)*p;E(D+A),e.is(Oe)&&!C&&u()&&(p*=Gr,Z(A)<zr&&_(f(u(!0)),Fr,!1,m,!0))}function S(){v&&v.cancel()}function x(){v&&!v.isPaused()&&(S(),y())}function V(w){var I=t.easingFunc;return I?I(w):1-Math.pow(1-w,4)}return{mount:s,destroy:S,scroll:_,cancel:x}}var Te={passive:!1,capture:!0};function Hr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,d=r.unbind,l=e.state,f=n.Move,u=n.Scroll,E=n.Controller,v=n.Elements.track,m=n.Media.reduce,p=n.Direction,s=p.resolve,_=p.orient,y=f.getPosition,g=f.exceededLimit,S,x,V,w,I,C=!1,O,D,b;function A(){a(v,yt,St,Te),a(v,bt,St,Te),a(v,kn,L,Te),a(v,"click",Y,{capture:!0}),a(v,"dragstart",le),i([Ee,J],R)}function R(){var T=t.drag;Ht(!T),w=T==="free"}function L(T){if(O=!1,!D){var U=ht(T);zn(T.target)&&(U||!T.button)&&(E.isBusy()?le(T,!0):(b=U?v:window,I=l.is([Re,Xe]),V=null,a(b,yt,z,Te),a(b,bt,N,Te),f.cancel(),u.cancel(),X(T)))}}function z(T){if(l.is(Je)||(l.set(Je),o(Qn)),T.cancelable)if(I){f.translate(S+Vn(W(T)));var U=F(T)>an,ye=C!==(C=g());(U||ye)&&X(T),O=!0,o(er),le(T)}else P(T)&&(I=h(T),le(T))}function N(T){l.is(Je)&&(l.set(xe),o(tr)),I&&($(T),le(T)),d(b,yt,z),d(b,bt,N),I=!1}function Y(T){!D&&O&&le(T,!0)}function X(T){V=x,x=T,S=y()}function $(T){var U=c(T),ye=M(U),ke=t.rewind&&t.rewindByDrag;m(!1),w?E.scroll(ye,0,t.snap):e.is(gt)?E.go(_(It(U))<0?ke?"<":"-":ke?">":"+"):e.is(Oe)&&C&&ke?E.go(g(!0)?">":"<"):E.go(E.toDest(ye),!0),m(!0)}function h(T){var U=t.dragMinThreshold,ye=Ge(U),ke=ye&&U.mouse||0,Gn=(ye?U.touch:+U)||10;return Z(W(T))>(ht(T)?Gn:ke)}function P(T){return Z(W(T))>Z(W(T,!0))}function c(T){if(e.is(Me)||!C){var U=F(T);if(U&&U<an)return W(T)/U}return 0}function M(T){return y()+It(T)*Ce(Z(T)*(t.flickPower||600),w?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function W(T,U){return Wt(T,U)-Wt(q(T),U)}function F(T){return Tt(T)-Tt(q(T))}function q(T){return x===T&&V||x}function Wt(T,U){return(ht(T)?T.changedTouches[0]:T)["page"+s(U?"Y":"X")]}function Vn(T){return T/(C&&e.is(Oe)?Sr:1)}function zn(T){var U=t.noDrag;return!Ue(T,"."+Rn+", ."+_t)&&(!U||!Ue(T,U))}function ht(T){return typeof TouchEvent!="undefined"&&T instanceof TouchEvent}function Fn(){return I}function Ht(T){D=T}return{mount:A,disable:Ht,isDragging:Fn}}var Yr={Spacebar:" ",Right:ft,Left:ct,Up:In,Down:wn};function Ut(e){return e=ge(e)?e:e.key,Yr[e]||e}var on="keydown";function Xr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.unbind,d=e.root,l=n.Direction.resolve,f,u;function E(){v(),i(J,m),i(J,v),i(he,s)}function v(){var y=t.keyboard;y&&(f=y==="global"?window:d,o(f,on,_))}function m(){a(f,on)}function p(y){u=y}function s(){var y=u;u=!0,At(function(){u=y})}function _(y){if(!u){var g=Ut(y);g===l(ct)?e.go("<"):g===l(ft)&&e.go(">")}}return{mount:E,destroy:m,disable:p}}var Fe=Dt+"-lazy",tt=Fe+"-srcset",jr="["+Fe+"], ["+tt+"]";function qr(e,n,t){var r=B(e),i=r.on,o=r.off,a=r.bind,d=r.emit,l=t.lazyLoad==="sequential",f=[Ee,H,Ke,De],u=[];function E(){t.lazyLoad&&(v(),i(H,v),l||i(f,m))}function v(){de(u),n.Slides.forEach(function(y){Pt(y.slide,jr).forEach(function(g){var S=ie(g,Fe),x=ie(g,tt);if(S!==g.src||x!==g.srcset){var V=t.classes.spinner,w=g.parentElement,I=qe(w,"."+V)||we("span",V,w);u.push([g,y,I]),g.src||it(g,"none")}})}),l&&_()}function m(){u=u.filter(function(y){var g=t.perPage*((t.preloadPages||1)+1)-1;return y[1].isWithin(e.index,g)?p(y):!0}),u.length||o(f)}function p(y){var g=y[0];se(y[1].slide,xt),a(g,"load error",G(s,y)),k(g,"src",ie(g,Fe)),k(g,"srcset",ie(g,tt)),ue(g,Fe),ue(g,tt)}function s(y,g){var S=y[0],x=y[1];ce(x.slide,xt),g.type!=="error"&&(Ae(y[2]),it(S,""),d(Tn,S,x),d(Ne)),l&&_()}function _(){u.length&&p(u.shift())}return{mount:E,destroy:G(de,u)}}function Kr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,d=n.Slides,l=n.Elements,f=n.Controller,u=f.hasFocus,E=f.getIndex,v=f.go,m=n.Direction.resolve,p=[],s,_;function y(){g(),i([J,H],y),t.pagination&&d.isEnough()&&(i([he,kt,De],C),S(),C(),o(ir,{list:s,items:p},I(e.index)))}function g(){s&&(Ae(l.pagination?me(s.children):s),ce(s,_),de(p),s=null),r.destroy()}function S(){var O=e.length,D=t.classes,b=t.i18n,A=t.perPage,R=u()?O:He(O/A);s=l.pagination||we("ul",D.pagination,l.track.parentElement),se(s,_=pt+"--"+w()),k(s,fe,"tablist"),k(s,re,b.select),k(s,zt,w()===dt?"vertical":"");for(var L=0;L<R;L++){var z=we("li",null,s),N=we("button",{class:D.page,type:"button"},z),Y=d.getIn(L).map(function($){return $.slide.id}),X=!u()&&A>1?b.pageX:b.slideX;a(N,"click",G(x,L)),t.paginationKeyboard&&a(N,"keydown",G(V,L)),k(z,fe,"presentation"),k(N,fe,"tab"),k(N,$e,Y.join(" ")),k(N,re,wt(X,L+1)),k(N,Le,-1),p.push({li:z,button:N,page:L})}}function x(O){v(">"+O,!0)}function V(O,D){var b=p.length,A=Ut(D),R=w(),L=-1;A===m(ft,!1,R)?L=++O%b:A===m(ct,!1,R)?L=(--O+b)%b:A==="Home"?L=0:A==="End"&&(L=b-1);var z=p[L];z&&(fn(z.button),v(">"+L),le(D,!0))}function w(){return t.paginationDirection||t.direction}function I(O){return p[f.toPage(O)]}function C(){var O=I(E(!0)),D=I(E());if(O){var b=O.button;ce(b,Se),ue(b,Qt),k(b,Le,-1)}if(D){var A=D.button;se(A,Se),k(A,Qt,!0),k(A,Le,"")}o(ar,{list:s,items:p},O,D)}return{items:p,mount:y,destroy:g,getAt:I,update:C}}var $r=[" ","Enter"];function Zr(e,n,t){var r=t.isNavigation,i=t.slideFocus,o=[];function a(){e.options={slideFocus:st(i)?r:i}}function d(){e.splides.forEach(function(s){s.isParent||(u(e,s.splide),u(s.splide,e))}),r&&E()}function l(){o.forEach(function(s){s.destroy()}),de(o)}function f(){l(),d()}function u(s,_){var y=B(s);y.on(he,function(g,S,x){_.go(_.is(Me)?x:g)}),o.push(y)}function E(){var s=B(e),_=s.on;_(hn,m),_(mn,p),_([Ee,J],v),o.push(s),s.emit(bn,e.splides)}function v(){k(n.Elements.list,zt,t.direction===dt?"vertical":"")}function m(s){e.go(s.index)}function p(s,_){Ot($r,Ut(_))&&(m(s),le(_))}return{setup:a,mount:d,destroy:l,remount:f}}function Jr(e,n,t){var r=B(e),i=r.bind,o=0;function a(){t.wheel&&i(n.Elements.track,"wheel",d,Te)}function d(f){if(f.cancelable){var u=f.deltaY,E=u<0,v=Tt(f),m=t.wheelMinThreshold||0,p=t.wheelSleep||0;Z(u)>m&&v-o>p&&(e.go(E?"<":">"),o=v),l(E)&&le(f)}}function l(f){return!t.releaseWheel||e.state.is(Re)||n.Controller.getAdjacent(f)!==-1}return{mount:a}}var Qr=90;function ei(e,n,t){var r=B(e),i=r.on,o=n.Elements.track,a=t.live&&!t.isNavigation,d=we("span",mr),l=ut(Qr,G(u,!1));function f(){a&&(v(!n.Autoplay.isPaused()),k(o,nn,!0),d.textContent="\u2026",i(An,G(v,!0)),i(Sn,G(v,!1)),i([Ke,De],G(u,!0)))}function u(m){k(o,tn,m),m?(je(o,d),l.start()):Ae(d)}function E(){ue(o,[en,nn,tn]),Ae(d)}function v(m){a&&k(o,en,m?"off":"polite")}return{mount:f,disable:v,destroy:E}}var ti=Object.freeze({__proto__:null,Media:lr,Direction:cr,Elements:Tr,Slides:wr,Layout:Lr,Clones:Cr,Move:Nr,Controller:Or,Arrows:Dr,Autoplay:kr,Cover:Vr,Scroll:Wr,Drag:Hr,Keyboard:Xr,LazyLoad:qr,Pagination:Kr,Sync:Zr,Wheel:Jr,Live:ei}),ni={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ri={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:br,i18n:ni,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ii(e,n,t){var r=B(e),i=r.on;function o(){i([Ee,H],function(){At(function(){n.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})}function a(d,l){var f=n.Elements.track;te(f,"height",ve(ne(f).height)),At(function(){l(),te(f,"height","")})}return{mount:o,start:a,cancel:St}}function ai(e,n,t){var r=B(e),i=r.bind,o=n.Move,a=n.Controller,d=n.Scroll,l=n.Elements.list,f=G(te,l,"transition"),u;function E(){i(l,"transitionend",function(s){s.target===l&&u&&(m(),u())})}function v(s,_){var y=o.toPosition(s,!0),g=o.getPosition(),S=p(s);Z(y-g)>=1&&S>=1?t.useScroll?d.scroll(y,S,!1,_):(f("transform "+S+"ms "+t.easing),o.translate(y,!0),u=_):(o.jump(s),_())}function m(){f(""),d.cancel()}function p(s){var _=t.rewindSpeed;if(e.is(Oe)&&_){var y=a.getIndex(!0),g=a.getEnd();if(y===0&&s>=g||y>=g&&s===0)return _}return t.speed}return{mount:E,start:v,cancel:m}}var oi=function(){function e(t,r){this.event=B(),this.Components={},this.state=sr(Ie),this.splides=[],this._o={},this._E={};var i=ge(t)?vn(document,t):t;ze(i,i+" is invalid."),this.root=i,r=pe({label:ie(i,re)||"",labelledby:ie(i,Vt)||""},ri,e.defaults,r||{});try{pe(r,JSON.parse(ie(i,Dt)))}catch{ze(!1,"Invalid JSON")}this._o=Object.create(pe({},r))}var n=e.prototype;return n.mount=function(r,i){var o=this,a=this.state,d=this.Components;ze(a.is([Ie,nt]),"Already mounted!"),a.set(Ie),this._C=d,this._T=i||this._T||(this.is(gt)?ii:ai),this._E=r||this._E;var l=Be({},ti,this._E,{Transition:this._T});return be(l,function(f,u){var E=f(o,d,o._o);d[u]=E,E.setup&&E.setup()}),be(d,function(f){f.mount&&f.mount()}),this.emit(Ee),se(this.root,Er),a.set(xe),this.emit(Zt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(xe)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,i){return this.event.on(r,i),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(me(arguments,1))),this},n.add=function(r,i){return this._C.Slides.add(r,i),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(H),this},n.destroy=function(r){r===void 0&&(r=!0);var i=this.event,o=this.state;return o.is(Ie)?B(this).on(Zt,this.destroy.bind(this,r)):(be(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(yn),i.destroy(),r&&de(this.splides),o.set(nt)),this},Yn(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Bt=oi;Bt.defaults={};Bt.STATES=jn;var si=(()=>`.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list{display:block}.splide__track--fade>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__arrow{-ms-flex-align:center;align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;height:2em;-ms-flex-pack:center;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover:not(:disabled){opacity:.9}.splide__arrow:disabled{opacity:.3}.splide__arrow:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide.is-focus-in .splide__arrow:focus{outline:3px solid #0bf;outline-offset:3px}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;position:relative;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4);z-index:1}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__pagination__page:focus{outline:3px solid #0bf;outline-offset:3px}.splide__progress__bar{background:#ccc;height:3px}.splide__slide{-webkit-tap-highlight-color:transparent}.splide__slide:focus{outline:0}@supports (outline-offset:-3px){.splide__slide:focus-visible{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide__slide:focus-visible{border:3px solid #0bf}}@supports (outline-offset:-3px){.splide.is-focus-in .splide__slide:focus{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide.is-focus-in .splide__slide:focus{border:3px solid #0bf}.splide.is-focus-in .splide__track>.splide__list>.splide__slide:focus{border-color:#0bf}}.splide__toggle{cursor:pointer}.splide__toggle:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__toggle:focus{outline:3px solid #0bf;outline-offset:3px}.splide__track--nav>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide__track--nav>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide__arrows--rtl .splide__arrow--prev{left:auto;right:1em}.splide__arrows--rtl .splide__arrow--prev svg{transform:scaleX(1)}.splide__arrows--rtl .splide__arrow--next{left:1em;right:auto}.splide__arrows--rtl .splide__arrow--next svg{transform:scaleX(-1)}.splide__arrows--ttb .splide__arrow{left:50%;transform:translate(-50%)}.splide__arrows--ttb .splide__arrow--prev{top:1em}.splide__arrows--ttb .splide__arrow--prev svg{transform:rotate(-90deg)}.splide__arrows--ttb .splide__arrow--next{bottom:1em;top:auto}.splide__arrows--ttb .splide__arrow--next svg{transform:rotate(90deg)}.splide__pagination--ttb{bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}
`)(),ui=Object.defineProperty,li=Object.getOwnPropertyDescriptor,K=(e,n,t,r)=>{for(var i=r>1?void 0:r?li(n,t):n,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(n,t,i):a(i))||i);return r&&i&&ui(n,t,i),i};let j=class extends Wn{constructor(){super(),this.splideContainer=null,this.showCount=!1,this.autoplay=!1,this._currentIndexCountElement=null,this._totalSlidesCountElement=null,this._numberOfSlides=0,this._activeSlideIndex=1,this.slidesToShow=1,this.slidesPerMove=1,this.sliderType="loop",this.sliderGap="0",this.autoplayInterval="6000",this.sliderBreakpoints=null,this.sliderPadding="0",this.sliderFocusCenter=!1,this._handlePaginationUpdate=this._handlePaginationUpdate.bind(this),this._handleSliderMount=this._handleSliderMount.bind(this)}createRenderRoot(){return this}firstUpdated(){if(this.splideContainer=this.querySelector(".splide")||null,this.splideContainer)this._initSlider();else{console.error("TOUJOU: Could not get necessary elements to initialize the slider");return}}_initSlider(){const e={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this.sliderType,autoplay:this.autoplay,interval:this.autoplayInterval,pauseOnHover:this.autoplay,pauseOnFocus:this.autoplay,perPage:this.slidesToShow,perMove:this.slidesPerMove,gap:this.sliderGap,breakpoints:this.sliderBreakpoints,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"},padding:this.sliderPadding};this.sliderFocusCenter==="true"&&(e.focus="center",e.trimSpace=!1),this.sliderBreakpoints&&(e.breakpoints=JSON.parse(this.sliderBreakpoints)),this.splideSlider=new Bt(this.splideContainer,e),this.splideSlider.on("mounted",this._handleSliderMount),this.splideSlider.on("moved",this._handlePaginationUpdate),this.splideSlider.mount()}_handleSliderMount(){this._getCountInfo(),this._initCount()}_getCountInfo(){this._currentIndexCountElement=this.querySelector(".slider-count__current"),this._totalSlidesCountElement=this.querySelector(".slider-count__total")}_initCount(){this._numberOfSlides=this.splideSlider.Components.Elements.slides.length,this._updateSliderCount()}_handlePaginationUpdate(e){this._activeSlideIndex=e+1,this._updateSliderCount()}_updateSliderCount(){this._currentIndexCountElement.textContent=String(this._activeSlideIndex),this._totalSlidesCountElement.textContent=String(this._numberOfSlides)}};j.styles=Un`${Bn(si)}`;K([Q({type:Object})],j.prototype,"splideContainer",2);K([Q({type:Boolean,attribute:"show-count"})],j.prototype,"showCount",2);K([Q({type:Boolean,attribute:"auto-play"})],j.prototype,"autoplay",2);K([Q()],j.prototype,"_currentIndexCountElement",2);K([Q()],j.prototype,"_totalSlidesCountElement",2);K([sn()],j.prototype,"_numberOfSlides",2);K([sn()],j.prototype,"_activeSlideIndex",2);K([Q()],j.prototype,"splideSlider",2);K([Q({reflect:!0,attribute:"slides-to-show"})],j.prototype,"slidesToShow",2);K([Q({reflect:!0,attribute:"slides-per-move"})],j.prototype,"slidesPerMove",2);K([Q({reflect:!0,attribute:"slider-type"})],j.prototype,"sliderType",2);K([Q({reflect:!0,attribute:"slider-gap"})],j.prototype,"sliderGap",2);K([Q({reflect:!0,attribute:"autoplay-interval"})],j.prototype,"autoplayInterval",2);K([Q({reflect:!0,attribute:"slider-breakpoints"})],j.prototype,"sliderBreakpoints",2);K([Q({reflect:!0,attribute:"slider-padding"})],j.prototype,"sliderPadding",2);K([Q({reflect:!0,attribute:"slider-focus-center"})],j.prototype,"sliderFocusCenter",2);j=K([Hn("toujou-slider")],j);
