import{LitElement as zn,html as Fn}from"lit";import{customElement as Gn}from"lit/decorators.js";function Bt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Un(e,n,t){return n&&Bt(e.prototype,n),t&&Bt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Wt="(prefers-reduced-motion: reduce)",Ae=1,Bn=2,Ie=3,Ne=4,We=5,$e=6,Qe=7,Wn={CREATED:Ae,MOUNTED:Bn,IDLE:Ie,MOVING:Ne,SCROLLING:We,DRAGGING:$e,DESTROYED:Qe};function le(e){e.length=0}function ge(e,n,t){return Array.prototype.slice.call(e,n,t)}function G(e){return e.bind.apply(e,[null].concat(ge(arguments,1)))}var bt=setTimeout,yt=function(){};function Ht(e){return requestAnimationFrame(e)}function it(e,n){return typeof n===e}function Ve(e){return!xt(e)&&it("object",e)}var Lt=Array.isArray,an=G(it,"function"),de=G(it,"string"),at=G(it,"undefined");function xt(e){return e===null}function on(e){return e instanceof HTMLElement}function Re(e){return Lt(e)?e:[e]}function ne(e,n){Re(e).forEach(n)}function Nt(e,n){return e.indexOf(n)>-1}function qe(e,n){return e.push.apply(e,Re(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function ie(e,n){fe(e,de(n)?n.split(" "):n,!0)}function He(e,n){ne(n,e.appendChild.bind(e))}function Rt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function ze(e,n){return on(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function sn(e,n){var t=e?ge(e.children):[];return n?t.filter(function(r){return ze(r,n)}):t}function Ye(e,n){return n?sn(e,n)[0]:e.firstElementChild}var et=Object.keys;function Ee(e,n,t){if(e){var r=et(e);r=t?r.reverse():r;for(var i=0;i<r.length;i++){var o=r[i];if(o!=="__proto__"&&n(e[o],o)===!1)break}}return e}function Fe(e){return ge(arguments,1).forEach(function(n){Ee(n,function(t,r){e[r]=n[r]})}),e}function ve(e){return ge(arguments,1).forEach(function(n){Ee(n,function(t,r){Lt(t)?e[r]=t.slice():Ve(t)?e[r]=ve({},Ve(e[r])?e[r]:{},t):e[r]=t})}),e}function Yt(e,n){Re(n||et(e)).forEach(function(t){delete e[t]})}function ae(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function k(e,n,t){Ve(n)?Ee(n,function(r,i){k(e,i,r)}):ne(e,function(r){xt(t)||t===""?ae(r,n):r.setAttribute(n,String(t))})}function Se(e,n,t){var r=document.createElement(e);return n&&(de(n)?ie(r,n):k(r,n)),t&&He(t,r),r}function J(e,n,t){if(at(t))return getComputedStyle(e)[n];xt(t)||(e.style[n]=""+t)}function tt(e,n){J(e,"display",n)}function un(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function te(e,n){return e.getAttribute(n)}function Xt(e,n){return e&&e.classList.contains(n)}function Q(e){return e.getBoundingClientRect()}function me(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function ln(e){return Ye(new DOMParser().parseFromString(e,"text/html").body)}function oe(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function cn(e,n){return e&&e.querySelector(n)}function Ot(e,n){return n?ge(e.querySelectorAll(n)):[]}function se(e,n){fe(e,n,!1)}function At(e){return e.timeStamp}function ce(e){return de(e)?e:e?e+"px":""}var Z="splide",Dt="data-"+Z;function Me(e,n){if(!e)throw new Error("["+Z+"] "+(n||""))}var we=Math.min,Ge=Math.max,nt=Math.floor,Ue=Math.ceil,$=Math.abs;function fn(e,n,t){return $(e-n)<t}function Ze(e,n,t,r){var i=we(n,t),o=Ge(n,t);return r?i<e&&e<o:i<=e&&e<=o}function Pe(e,n,t){var r=we(n,t),i=Ge(n,t);return we(Ge(r,e),i)}function St(e){return+(e>0)-+(e<0)}function Tt(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Ct(e){return e<10?"0"+e:""+e}var jt={};function Hn(e){return""+e+Ct(jt[e]=(jt[e]||0)+1)}function vn(){var e=[];function n(a,v,l,f){i(a,v,function(u,m,d){var E="addEventListener"in u,g=E?u.removeEventListener.bind(u,m,l,f):u.removeListener.bind(u,l);E?u.addEventListener(m,l,f):u.addListener(l),e.push([u,m,d,l,g])})}function t(a,v,l){i(a,v,function(f,u,m){e=e.filter(function(d){return d[0]===f&&d[1]===u&&d[2]===m&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(a,v,l){var f,u=!0;return typeof CustomEvent=="function"?f=new CustomEvent(v,{bubbles:u,detail:l}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(v,u,!1,l)),a.dispatchEvent(f),f}function i(a,v,l){ne(a,function(f){f&&ne(v,function(u){u.split(" ").forEach(function(m){var d=m.split(".");l(f,d[0],d[1])})})})}function o(){e.forEach(function(a){a[4]()}),le(e)}return{bind:n,unbind:t,dispatch:r,destroy:o}}var pe="mounted",Kt="ready",_e="move",Xe="moved",dn="shifted",_n="click",Yn="active",Xn="inactive",jn="visible",Kn="hidden",gn="slide:keydown",H="refresh",q="updated",Le="resize",pn="resized",$n="drag",qn="dragging",Zn="dragged",Pt="scroll",Oe="scrolled",hn="destroy",Jn="arrows:mounted",Qn="arrows:updated",er="pagination:mounted",tr="pagination:updated",En="navigation:mounted",mn="autoplay:play",nr="autoplay:playing",bn="autoplay:pause",yn="lazyload:loaded";function B(e){var n=e?e.event.bus:document.createDocumentFragment(),t=vn();function r(o,a){t.bind(n,Re(o).join(" "),function(v){a.apply(a,Lt(v.detail)?v.detail:[])})}function i(o){t.dispatch(n,o,ge(arguments,1))}return e&&e.event.on(hn,t.destroy),Fe(t,{bus:n,on:r,off:G(t.unbind,n),emit:i})}function ot(e,n,t,r){var i=Date.now,o,a=0,v,l=!0,f=0;function u(){if(!l){if(a=e?we((i()-o)/e,1):1,t&&t(a),a>=1&&(n(),o=i(),r&&++f>=r))return d();Ht(u)}}function m(b){!b&&g(),o=i()-(b?a*e:0),l=!1,Ht(u)}function d(){l=!0}function E(){o=i(),a=0,t&&t(a)}function g(){v&&cancelAnimationFrame(v),a=0,v=0,l=!0}function s(b){e=b}function _(){return l}return{start:m,rewind:E,pause:d,cancel:g,set:s,isPaused:_}}function rr(e){var n=e;function t(i){n=i}function r(i){return Nt(Re(i),n)}return{set:t,is:r}}function ir(e,n){var t;function r(){t||(t=ot(n||0,function(){e(),t=null},null,1),t.start())}return r}function ar(e,n,t){var r=e.state,i=t.breakpoints||{},o=t.reducedMotion||{},a=vn(),v=[];function l(){var g=t.mediaQuery==="min";et(i).sort(function(s,_){return g?+s-+_:+_-+s}).forEach(function(s){u(i[s],"("+(g?"min":"max")+"-width:"+s+"px)")}),u(o,Wt),m()}function f(g){g&&a.destroy()}function u(g,s){var _=matchMedia(s);a.bind(_,"change",m),v.push([g,_])}function m(){var g=r.is(Qe),s=t.direction,_=v.reduce(function(b,p){return ve(b,p[1].matches?p[0]:{})},{});Yt(t),E(_),t.destroy?e.destroy(t.destroy==="completely"):g?(f(!0),e.mount()):s!==t.direction&&e.refresh()}function d(g){matchMedia(Wt).matches&&(g?ve(t,o):Yt(t,et(o)))}function E(g,s){ve(t,g),s&&ve(Object.getPrototypeOf(t),g),r.is(Ae)||e.emit(q,t)}return{setup:l,destroy:f,reduce:d,set:E}}var st="Arrow",ut=st+"Left",lt=st+"Right",An=st+"Up",Sn=st+"Down",$t="rtl",ct="ttb",pt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[An,lt],ArrowRight:[Sn,ut]};function or(e,n,t){function r(o,a,v){v=v||t.direction;var l=v===$t&&!a?1:v===ct?0:-1;return pt[o]&&pt[o][l]||o.replace(/width|left|right/i,function(f,u){var m=pt[f.toLowerCase()][l]||f;return u>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function i(o){return o*(t.direction===$t?1:-1)}return{resolve:r,orient:i}}var ue="role",Te="tabindex",sr="disabled",re="aria-",je=re+"controls",Tn=re+"current",qt=re+"selected",ee=re+"label",Mt=re+"labelledby",In=re+"hidden",kt=re+"orientation",Be=re+"roledescription",Zt=re+"live",Jt=re+"busy",Qt=re+"atomic",Vt=[ue,Te,sr,je,Tn,ee,Mt,In,kt,Be],ht=Z,en=Z+"__track",ur=Z+"__list",ft=Z+"__slide",wn=ft+"--clone",lr=ft+"__container",zt=Z+"__arrows",vt=Z+"__arrow",Ln=vt+"--prev",xn=vt+"--next",dt=Z+"__pagination",Nn=dt+"__page",cr=Z+"__progress",fr=cr+"__bar",vr=Z+"__toggle",dr=Z+"__spinner",_r=Z+"__sr",gr="is-initialized",be="is-active",Rn="is-prev",On="is-next",It="is-visible",wt="is-loading",Dn="is-focus-in",pr=[be,It,Rn,On,wt,Dn],hr={slide:ft,clone:wn,arrows:zt,arrow:vt,prev:Ln,next:xn,pagination:dt,page:Nn,spinner:dr};function Er(e,n){if(an(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!ze(t,n);)t=t.parentElement;return t}var mr=5,tn=200,Cn="touchstart mousedown",Et="touchmove mousemove",mt="touchend touchcancel mouseup click";function br(e,n,t){var r=B(e),i=r.on,o=r.bind,a=e.root,v=t.i18n,l={},f=[],u=[],m=[],d,E,g;function s(){S(),x(),p()}function _(){i(H,b),i(H,s),i(q,p),o(document,Cn+" keydown",function(I){g=I.type==="keydown"},{capture:!0}),o(a,"focusin",function(){fe(a,Dn,!!g)})}function b(I){var N=Vt.concat("style");le(f),se(a,u),se(d,m),ae([d,E],N),ae(a,I?N:["style",Be])}function p(){se(a,u),se(d,m),u=w(ht),m=w(en),ie(a,u),ie(d,m),k(a,ee,t.label),k(a,Mt,t.labelledby)}function S(){d=V("."+en),E=Ye(d,"."+ur),Me(d&&E,"A track/list element is missing."),qe(f,sn(E,"."+ft+":not(."+wn+")")),Ee({arrows:zt,pagination:dt,prev:Ln,next:xn,bar:fr,toggle:vr},function(I,N){l[N]=V("."+I)}),Fe(l,{root:a,track:d,list:E,slides:f})}function x(){var I=a.id||Hn(Z),N=t.role;a.id=I,d.id=d.id||I+"-track",E.id=E.id||I+"-list",!te(a,ue)&&a.tagName!=="SECTION"&&N&&k(a,ue,N),k(a,Be,v.carousel),k(E,ue,"presentation")}function V(I){var N=cn(a,I);return N&&Er(N,"."+ht)===a?N:void 0}function w(I){return[I+"--"+t.type,I+"--"+t.direction,t.drag&&I+"--draggable",t.isNavigation&&I+"--nav",I===ht&&be]}return Fe(l,{setup:s,mount:_,destroy:b})}var xe="slide",De="loop",_t="fade";function yr(e,n,t,r){var i=B(e),o=i.on,a=i.emit,v=i.bind,l=e.Components,f=e.root,u=e.options,m=u.isNavigation,d=u.updateOnMove,E=u.i18n,g=u.pagination,s=u.slideFocus,_=l.Direction.resolve,b=te(r,"style"),p=te(r,ee),S=t>-1,x=Ye(r,"."+lr),V=Ot(r,u.focusableNodes||""),w;function I(){S||(r.id=f.id+"-slide"+Ct(n+1),k(r,ue,g?"tabpanel":"group"),k(r,Be,E.slide),k(r,ee,p||Tt(E.slideLabel,[n+1,e.length]))),N()}function N(){v(r,"click",G(a,_n,K)),v(r,"keydown",G(a,gn,K)),o([Xe,dn,Oe],A),o(En,P),d&&o(_e,y)}function O(){w=!0,i.destroy(),se(r,pr),ae(r,Vt),k(r,"style",b),k(r,ee,p||"")}function P(){var h=e.splides.map(function(C){var c=C.splide.Components.Slides.getAt(n);return c?c.slide.id:""}).join(" ");k(r,ee,Tt(E.slideX,(S?t:n)+1)),k(r,je,h),k(r,ue,s?"button":""),s&&ae(r,Be)}function y(){w||A()}function A(){if(!w){var h=e.index;D(),L(),fe(r,Rn,n===h-1),fe(r,On,n===h+1)}}function D(){var h=R();h!==Xt(r,be)&&(fe(r,be,h),k(r,Tn,m&&h||""),a(h?Yn:Xn,K))}function L(){var h=Y(),C=!h&&(!R()||S);if(e.state.is([Ne,We])||k(r,In,C||""),k(V,Te,C?-1:""),s&&k(r,Te,C?-1:0),h!==Xt(r,It)&&(fe(r,It,h),a(h?jn:Kn,K)),!h&&document.activeElement===r){var c=l.Slides.getAt(e.index);c&&un(c.slide)}}function z(h,C,c){J(c&&x||r,h,C)}function R(){var h=e.index;return h===n||u.cloneStatus&&h===t}function Y(){if(e.is(_t))return R();var h=Q(l.Elements.track),C=Q(r),c=_("left",!0),M=_("right",!0);return nt(h[c])<=Ue(C[c])&&nt(C[M])<=Ue(h[M])}function X(h,C){var c=$(h-n);return!S&&(u.rewind||e.is(De))&&(c=we(c,e.length-c)),c<=C}var K={index:n,slideIndex:t,slide:r,container:x,isClone:S,mount:I,destroy:O,update:A,style:z,isWithin:X};return K}function Ar(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,v=n.Elements,l=v.slides,f=v.list,u=[];function m(){d(),i(H,E),i(H,d),i([pe,H],function(){u.sort(function(y,A){return y.index-A.index})})}function d(){l.forEach(function(y,A){s(y,A,-1)})}function E(){V(function(y){y.destroy()}),le(u)}function g(){V(function(y){y.update()})}function s(y,A,D){var L=yr(e,A,D,y);L.mount(),u.push(L)}function _(y){return y?w(function(A){return!A.isClone}):u}function b(y){var A=n.Controller,D=A.toIndex(y),L=A.hasFocus()?1:t.perPage;return w(function(z){return Ze(z.index,D,D+L-1)})}function p(y){return w(y)[0]}function S(y,A){ne(y,function(D){if(de(D)&&(D=ln(D)),on(D)){var L=l[A];L?Rt(D,L):He(f,D),ie(D,t.classes.slide),N(D,G(o,Le))}}),o(H)}function x(y){me(w(y).map(function(A){return A.slide})),o(H)}function V(y,A){_(A).forEach(y)}function w(y){return u.filter(an(y)?y:function(A){return de(y)?ze(A.slide,y):Nt(Re(y),A.index)})}function I(y,A,D){V(function(L){L.style(y,A,D)})}function N(y,A){var D=Ot(y,"img"),L=D.length;L?D.forEach(function(z){a(z,"load error",function(){--L||A()})}):A()}function O(y){return y?l.length:u.length}function P(){return u.length>t.perPage}return{mount:m,destroy:E,update:g,register:s,get:_,getIn:b,getAt:p,add:S,remove:x,forEach:V,filter:w,style:I,getLength:O,isEnough:P}}function Sr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,v=n.Slides,l=n.Direction.resolve,f=n.Elements,u=f.root,m=f.track,d=f.list,E=v.getAt,g=v.style,s,_;function b(){p(),o(window,"resize load",ir(G(a,Le))),i([q,H],p),i(Le,S)}function p(){_=null,s=t.direction===ct,J(u,"maxWidth",ce(t.width)),J(m,l("paddingLeft"),x(!1)),J(m,l("paddingRight"),x(!0)),S()}function S(){var R=Q(u);(!_||_.width!==R.width||_.height!==R.height)&&(J(m,"height",V()),g(l("marginRight"),ce(t.gap)),g("width",I()),g("height",N(),!0),_=R,a(pn))}function x(R){var Y=t.padding,X=l(R?"right":"left");return Y&&ce(Y[X]||(Ve(Y)?0:Y))||"0px"}function V(){var R="";return s&&(R=w(),Me(R,"height or heightRatio is missing."),R="calc("+R+" - "+x(!1)+" - "+x(!0)+")"),R}function w(){return ce(t.height||Q(d).width*t.heightRatio)}function I(){return t.autoWidth?null:ce(t.fixedWidth)||(s?"":O())}function N(){return ce(t.fixedHeight)||(s?t.autoHeight?null:O():w())}function O(){var R=ce(t.gap);return"calc((100%"+(R&&" + "+R)+")/"+(t.perPage||1)+(R&&" - "+R)+")"}function P(){return Q(d)[l("width")]}function y(R,Y){var X=E(R||0);return X?Q(X.slide)[l("width")]+(Y?0:L()):0}function A(R,Y){var X=E(R);if(X){var K=Q(X.slide)[l("right")],h=Q(d)[l("left")];return $(K-h)+(Y?0:L())}return 0}function D(){return A(e.length-1,!0)-A(-1,!0)}function L(){var R=E(0);return R&&parseFloat(J(R.slide,l("marginRight")))||0}function z(R){return parseFloat(J(m,l("padding"+(R?"Right":"Left"))))||0}return{mount:b,listSize:P,slideSize:y,sliderSize:D,totalSize:A,getPadding:z}}var Tr=2;function Ir(e,n,t){var r=B(e),i=r.on,o=r.emit,a=n.Elements,v=n.Slides,l=n.Direction.resolve,f=[],u;function m(){d(),i(H,E),i(H,d),i([q,Le],g)}function d(){(u=b())&&(s(u),o(Le))}function E(){me(f),le(f)}function g(){u<b()&&o(H)}function s(p){var S=v.get().slice(),x=S.length;if(x){for(;S.length<p;)qe(S,S);qe(S.slice(-p),S.slice(0,p)).forEach(function(V,w){var I=w<p,N=_(V.slide,w);I?Rt(N,S[0].slide):He(a.list,N),qe(f,N),v.register(N,w-p+(I?0:x),V.index)})}}function _(p,S){var x=p.cloneNode(!0);return ie(x,t.classes.clone),x.id=e.root.id+"-clone"+Ct(S+1),x}function b(){var p=t.clones;if(!e.is(De))p=0;else if(!p){var S=t[l("fixedWidth")]&&n.Layout.slideSize(0),x=S&&Ue(Q(a.track)[l("width")]/S);p=x||t[l("autoWidth")]&&e.length||t.perPage*Tr}return p}return{mount:m,destroy:E}}function wr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=e.state.set,v=n.Layout,l=v.slideSize,f=v.getPadding,u=v.totalSize,m=v.listSize,d=v.sliderSize,E=n.Direction,g=E.resolve,s=E.orient,_=n.Elements,b=_.list,p=_.track,S;function x(){S=n.Transition,i([pe,pn,q,H],V)}function V(){n.Controller.isBusy()||(n.Scroll.cancel(),I(e.index),n.Slides.update())}function w(h,C,c,M){h!==C&&X(h>c)&&(y(),N(P(L(),h>c),!0)),a(Ne),o(_e,C,c,h),S.start(C,function(){a(Ie),o(Xe,C,c,h),M&&M()})}function I(h){N(D(h,!0))}function N(h,C){if(!e.is(_t)){var c=C?h:O(h);J(b,"transform","translate"+g("X")+"("+c+"px)"),h!==c&&o(dn)}}function O(h){if(e.is(De)){var C=A(h),c=C>n.Controller.getEnd(),M=C<0;(M||c)&&(h=P(h,c))}return h}function P(h,C){var c=h-Y(C),M=d();return h-=s(M*(Ue($(c)/M)||1))*(C?1:-1),h}function y(){N(L()),S.cancel()}function A(h){for(var C=n.Slides.get(),c=0,M=1/0,W=0;W<C.length;W++){var F=C[W].index,j=$(D(F,!0)-h);if(j<=M)M=j,c=F;else break}return c}function D(h,C){var c=s(u(h-1)-R(h));return C?z(c):c}function L(){var h=g("left");return Q(b)[h]-Q(p)[h]+s(f(!1))}function z(h){return t.trimSpace&&e.is(xe)&&(h=Pe(h,0,s(d()-m()))),h}function R(h){var C=t.focus;return C==="center"?(m()-l(h,!0))/2:+C*l(h)||0}function Y(h){return D(h?n.Controller.getEnd():0,!!t.trimSpace)}function X(h){var C=s(P(L(),h));return h?C>=0:C<=b[g("scrollWidth")]-Q(p)[g("width")]}function K(h,C){C=at(C)?L():C;var c=h!==!0&&s(C)<s(Y(!1)),M=h!==!1&&s(C)>s(Y(!0));return c||M}return{mount:x,move:w,jump:I,translate:N,shift:P,cancel:y,toIndex:A,toPosition:D,getPosition:L,getLimit:Y,exceededLimit:K,reposition:V}}function Lr(e,n,t){var r=B(e),i=r.on,o=n.Move,a=o.getPosition,v=o.getLimit,l=o.toPosition,f=n.Slides,u=f.isEnough,m=f.getLength,d=e.is(De),E=e.is(xe),g=G(P,!1),s=G(P,!0),_=t.start||0,b=_,p,S,x;function V(){w(),i([q,H],w)}function w(){p=m(!0),S=t.perMove,x=t.perPage;var c=Pe(_,0,p-1);c!==_&&(_=c,o.reposition())}function I(c,M,W){if(!C()){var F=O(c),j=D(F);j>-1&&(M||j!==_)&&(X(j),o.move(F,j,b,W))}}function N(c,M,W,F){n.Scroll.scroll(c,M,W,function(){X(D(o.toIndex(a()))),F&&F()})}function O(c){var M=_;if(de(c)){var W=c.match(/([+\-<>])(\d+)?/)||[],F=W[1],j=W[2];F==="+"||F==="-"?M=y(_+ +(""+F+(+j||1)),_):F===">"?M=j?z(+j):g(!0):F==="<"&&(M=s(!0))}else M=d?c:Pe(c,0,L());return M}function P(c,M){var W=S||(h()?1:x),F=y(_+W*(c?-1:1),_,!(S||h()));return F===-1&&E&&!fn(a(),v(!c),1)?c?0:L():M?F:D(F)}function y(c,M,W){if(u()){var F=L(),j=A(c);j!==c&&(M=c,c=j,W=!1),c<0||c>F?!S&&(Ze(0,c,M,!0)||Ze(F,M,c,!0))?c=z(R(c)):d?c=W?c<0?-(p%x||x):p:c:t.rewind?c=c<0?F:0:c=-1:W&&c!==M&&(c=z(R(M)+(c<M?-1:1)))}else c=-1;return c}function A(c){if(E&&t.trimSpace==="move"&&c!==_)for(var M=a();M===l(c,!0)&&Ze(c,0,e.length-1,!t.rewind);)c<_?--c:++c;return c}function D(c){return d?(c+p)%p||0:c}function L(){return Ge(p-(h()||d&&S?1:x),0)}function z(c){return Pe(h()?c:x*c,0,L())}function R(c){return h()?c:nt((c>=L()?p-1:c)/x)}function Y(c){var M=o.toIndex(c);return E?Pe(M,0,L()):M}function X(c){c!==_&&(b=_,_=c)}function K(c){return c?b:_}function h(){return!at(t.focus)||t.isNavigation}function C(){return e.state.is([Ne,We])&&!!t.waitForTransition}return{mount:V,go:I,scroll:N,getNext:g,getPrev:s,getAdjacent:P,getEnd:L,setIndex:X,getIndex:K,toIndex:z,toPage:R,toDest:Y,hasFocus:h,isBusy:C}}var xr="http://www.w3.org/2000/svg",Nr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Ke=40;function Rr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,v=t.classes,l=t.i18n,f=n.Elements,u=n.Controller,m=f.arrows,d=f.track,E=m,g=f.prev,s=f.next,_,b,p={};function S(){V(),i(q,x)}function x(){w(),S()}function V(){var A=t.arrows;A&&!(g&&s)&&O(),g&&s&&(Fe(p,{prev:g,next:s}),tt(E,A?"":"none"),ie(E,b=zt+"--"+t.direction),A&&(I(),y(),k([g,s],je,d.id),a(Jn,g,s)))}function w(){r.destroy(),se(E,b),_?(me(m?[g,s]:E),g=s=null):ae([g,s],Vt)}function I(){i([Xe,H,Oe],y),o(s,"click",G(N,">")),o(g,"click",G(N,"<"))}function N(A){u.go(A,!0)}function O(){E=m||Se("div",v.arrows),g=P(!0),s=P(!1),_=!0,He(E,[g,s]),!m&&Rt(E,d)}function P(A){var D='<button class="'+v.arrow+" "+(A?v.prev:v.next)+'" type="button"><svg xmlns="'+xr+'" viewBox="0 0 '+Ke+" "+Ke+'" width="'+Ke+'" height="'+Ke+'" focusable="false"><path d="'+(t.arrowPath||Nr)+'" />';return ln(D)}function y(){var A=e.index,D=u.getPrev(),L=u.getNext(),z=D>-1&&A<D?l.last:l.prev,R=L>-1&&A>L?l.first:l.next;g.disabled=D<0,s.disabled=L<0,k(g,ee,z),k(s,ee,R),a(Qn,g,s,D,L)}return{arrows:p,mount:S,destroy:w}}var Or=Dt+"-interval";function Dr(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.emit,v=ot(t.interval,e.go.bind(e,">"),I),l=v.isPaused,f=n.Elements,u=n.Elements,m=u.root,d=u.toggle,E=t.autoplay,g,s,_=E==="pause";function b(){E&&(p(),d&&k(d,je,f.track.id),_||S(),w())}function p(){t.pauseOnHover&&o(m,"mouseenter mouseleave",function(O){g=O.type==="mouseenter",V()}),t.pauseOnFocus&&o(m,"focusin focusout",function(O){s=O.type==="focusin",V()}),d&&o(d,"click",function(){_?S():x(!0)}),i([_e,Pt,H],v.rewind),i(_e,N)}function S(){l()&&n.Slides.isEnough()&&(v.start(!t.resetProgress),s=g=_=!1,w(),a(mn))}function x(O){O===void 0&&(O=!0),_=!!O,w(),l()||(v.pause(),a(bn))}function V(){_||(g||s?x(!1):S())}function w(){d&&(fe(d,be,!_),k(d,ee,t.i18n[_?"play":"pause"]))}function I(O){var P=f.bar;P&&J(P,"width",O*100+"%"),a(nr,O)}function N(O){var P=n.Slides.getAt(O);v.set(P&&+te(P.slide,Or)||t.interval)}return{mount:b,destroy:v.cancel,play:S,pause:x,isPaused:l}}function Cr(e,n,t){var r=B(e),i=r.on;function o(){t.cover&&(i(yn,G(v,!0)),i([pe,q,H],G(a,!0)))}function a(l){n.Slides.forEach(function(f){var u=Ye(f.container||f.slide,"img");u&&u.src&&v(l,u,f)})}function v(l,f,u){u.style("background",l?'center/cover no-repeat url("'+f.src+'")':"",!0),tt(f,l?"none":"")}return{mount:o,destroy:G(a,!1)}}var Pr=10,Mr=600,kr=.6,Vr=1.5,zr=800;function Fr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=e.state.set,v=n.Move,l=v.getPosition,f=v.getLimit,u=v.exceededLimit,m=v.translate,d,E,g=1;function s(){i(_e,S),i([q,H],x)}function _(w,I,N,O,P){var y=l();if(S(),N){var A=n.Layout.sliderSize(),D=St(w)*A*nt($(w)/A)||0;w=v.toPosition(n.Controller.toDest(w%A))+D}var L=fn(y,w,1);g=1,I=L?0:I||Ge($(w-y)/Vr,zr),E=O,d=ot(I,b,G(p,y,w,P),1),a(We),o(Pt),d.start()}function b(){a(Ie),E&&E(),o(Oe)}function p(w,I,N,O){var P=l(),y=w+(I-w)*V(O),A=(y-P)*g;m(P+A),e.is(xe)&&!N&&u()&&(g*=kr,$(A)<Pr&&_(f(u(!0)),Mr,!1,E,!0))}function S(){d&&d.cancel()}function x(){d&&!d.isPaused()&&(S(),b())}function V(w){var I=t.easingFunc;return I?I(w):1-Math.pow(1-w,4)}return{mount:s,destroy:S,scroll:_,cancel:x}}var ye={passive:!1,capture:!0};function Gr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,v=r.unbind,l=e.state,f=n.Move,u=n.Scroll,m=n.Controller,d=n.Elements.track,E=n.Media.reduce,g=n.Direction,s=g.resolve,_=g.orient,b=f.getPosition,p=f.exceededLimit,S,x,V,w,I,N=!1,O,P,y;function A(){a(d,Et,yt,ye),a(d,mt,yt,ye),a(d,Cn,L,ye),a(d,"click",Y,{capture:!0}),a(d,"dragstart",oe),i([pe,q],D)}function D(){var T=t.drag;Ut(!T),w=T==="free"}function L(T){if(O=!1,!P){var U=gt(T);Mn(T.target)&&(U||!T.button)&&(m.isBusy()?oe(T,!0):(y=U?d:window,I=l.is([Ne,We]),V=null,a(y,Et,z,ye),a(y,mt,R,ye),f.cancel(),u.cancel(),X(T)))}}function z(T){if(l.is($e)||(l.set($e),o($n)),T.cancelable)if(I){f.translate(S+Pn(W(T)));var U=F(T)>tn,he=N!==(N=p());(U||he)&&X(T),O=!0,o(qn),oe(T)}else C(T)&&(I=h(T),oe(T))}function R(T){l.is($e)&&(l.set(Ie),o(Zn)),I&&(K(T),oe(T)),v(y,Et,z),v(y,mt,R),I=!1}function Y(T){!P&&O&&oe(T,!0)}function X(T){V=x,x=T,S=b()}function K(T){var U=c(T),he=M(U),Ce=t.rewind&&t.rewindByDrag;E(!1),w?m.scroll(he,0,t.snap):e.is(_t)?m.go(_(St(U))<0?Ce?"<":"-":Ce?">":"+"):e.is(xe)&&N&&Ce?m.go(p(!0)?">":"<"):m.go(m.toDest(he),!0),E(!0)}function h(T){var U=t.dragMinThreshold,he=Ve(U),Ce=he&&U.mouse||0,Vn=(he?U.touch:+U)||10;return $(W(T))>(gt(T)?Vn:Ce)}function C(T){return $(W(T))>$(W(T,!0))}function c(T){if(e.is(De)||!N){var U=F(T);if(U&&U<tn)return W(T)/U}return 0}function M(T){return b()+St(T)*we($(T)*(t.flickPower||600),w?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function W(T,U){return Gt(T,U)-Gt(j(T),U)}function F(T){return At(T)-At(j(T))}function j(T){return x===T&&V||x}function Gt(T,U){return(gt(T)?T.changedTouches[0]:T)["page"+s(U?"Y":"X")]}function Pn(T){return T/(N&&e.is(xe)?mr:1)}function Mn(T){var U=t.noDrag;return!ze(T,"."+Nn+", ."+vt)&&(!U||!ze(T,U))}function gt(T){return typeof TouchEvent!="undefined"&&T instanceof TouchEvent}function kn(){return I}function Ut(T){P=T}return{mount:A,disable:Ut,isDragging:kn}}var Ur={Spacebar:" ",Right:lt,Left:ut,Up:An,Down:Sn};function Ft(e){return e=de(e)?e:e.key,Ur[e]||e}var nn="keydown";function Br(e,n,t){var r=B(e),i=r.on,o=r.bind,a=r.unbind,v=e.root,l=n.Direction.resolve,f,u;function m(){d(),i(q,E),i(q,d),i(_e,s)}function d(){var b=t.keyboard;b&&(f=b==="global"?window:v,o(f,nn,_))}function E(){a(f,nn)}function g(b){u=b}function s(){var b=u;u=!0,bt(function(){u=b})}function _(b){if(!u){var p=Ft(b);p===l(ut)?e.go("<"):p===l(lt)&&e.go(">")}}return{mount:m,destroy:E,disable:g}}var ke=Dt+"-lazy",Je=ke+"-srcset",Wr="["+ke+"], ["+Je+"]";function Hr(e,n,t){var r=B(e),i=r.on,o=r.off,a=r.bind,v=r.emit,l=t.lazyLoad==="sequential",f=[pe,H,Xe,Oe],u=[];function m(){t.lazyLoad&&(d(),i(H,d),l||i(f,E))}function d(){le(u),n.Slides.forEach(function(b){Ot(b.slide,Wr).forEach(function(p){var S=te(p,ke),x=te(p,Je);if(S!==p.src||x!==p.srcset){var V=t.classes.spinner,w=p.parentElement,I=Ye(w,"."+V)||Se("span",V,w);u.push([p,b,I]),p.src||tt(p,"none")}})}),l&&_()}function E(){u=u.filter(function(b){var p=t.perPage*((t.preloadPages||1)+1)-1;return b[1].isWithin(e.index,p)?g(b):!0}),u.length||o(f)}function g(b){var p=b[0];ie(b[1].slide,wt),a(p,"load error",G(s,b)),k(p,"src",te(p,ke)),k(p,"srcset",te(p,Je)),ae(p,ke),ae(p,Je)}function s(b,p){var S=b[0],x=b[1];se(x.slide,wt),p.type!=="error"&&(me(b[2]),tt(S,""),v(yn,S,x),v(Le)),l&&_()}function _(){u.length&&g(u.shift())}return{mount:m,destroy:G(le,u)}}function Yr(e,n,t){var r=B(e),i=r.on,o=r.emit,a=r.bind,v=n.Slides,l=n.Elements,f=n.Controller,u=f.hasFocus,m=f.getIndex,d=f.go,E=n.Direction.resolve,g=[],s,_;function b(){p(),i([q,H],b),t.pagination&&v.isEnough()&&(i([_e,Pt,Oe],N),S(),N(),o(er,{list:s,items:g},I(e.index)))}function p(){s&&(me(l.pagination?ge(s.children):s),se(s,_),le(g),s=null),r.destroy()}function S(){var O=e.length,P=t.classes,y=t.i18n,A=t.perPage,D=u()?O:Ue(O/A);s=l.pagination||Se("ul",P.pagination,l.track.parentElement),ie(s,_=dt+"--"+w()),k(s,ue,"tablist"),k(s,ee,y.select),k(s,kt,w()===ct?"vertical":"");for(var L=0;L<D;L++){var z=Se("li",null,s),R=Se("button",{class:P.page,type:"button"},z),Y=v.getIn(L).map(function(K){return K.slide.id}),X=!u()&&A>1?y.pageX:y.slideX;a(R,"click",G(x,L)),t.paginationKeyboard&&a(R,"keydown",G(V,L)),k(z,ue,"presentation"),k(R,ue,"tab"),k(R,je,Y.join(" ")),k(R,ee,Tt(X,L+1)),k(R,Te,-1),g.push({li:z,button:R,page:L})}}function x(O){d(">"+O,!0)}function V(O,P){var y=g.length,A=Ft(P),D=w(),L=-1;A===E(lt,!1,D)?L=++O%y:A===E(ut,!1,D)?L=(--O+y)%y:A==="Home"?L=0:A==="End"&&(L=y-1);var z=g[L];z&&(un(z.button),d(">"+L),oe(P,!0))}function w(){return t.paginationDirection||t.direction}function I(O){return g[f.toPage(O)]}function N(){var O=I(m(!0)),P=I(m());if(O){var y=O.button;se(y,be),ae(y,qt),k(y,Te,-1)}if(P){var A=P.button;ie(A,be),k(A,qt,!0),k(A,Te,"")}o(tr,{list:s,items:g},O,P)}return{items:g,mount:b,destroy:p,getAt:I,update:N}}var Xr=[" ","Enter"];function jr(e,n,t){var r=t.isNavigation,i=t.slideFocus,o=[];function a(){e.options={slideFocus:at(i)?r:i}}function v(){e.splides.forEach(function(s){s.isParent||(u(e,s.splide),u(s.splide,e))}),r&&m()}function l(){o.forEach(function(s){s.destroy()}),le(o)}function f(){l(),v()}function u(s,_){var b=B(s);b.on(_e,function(p,S,x){_.go(_.is(De)?x:p)}),o.push(b)}function m(){var s=B(e),_=s.on;_(_n,E),_(gn,g),_([pe,q],d),o.push(s),s.emit(En,e.splides)}function d(){k(n.Elements.list,kt,t.direction===ct?"vertical":"")}function E(s){e.go(s.index)}function g(s,_){Nt(Xr,Ft(_))&&(E(s),oe(_))}return{setup:a,mount:v,destroy:l,remount:f}}function Kr(e,n,t){var r=B(e),i=r.bind,o=0;function a(){t.wheel&&i(n.Elements.track,"wheel",v,ye)}function v(f){if(f.cancelable){var u=f.deltaY,m=u<0,d=At(f),E=t.wheelMinThreshold||0,g=t.wheelSleep||0;$(u)>E&&d-o>g&&(e.go(m?"<":">"),o=d),l(m)&&oe(f)}}function l(f){return!t.releaseWheel||e.state.is(Ne)||n.Controller.getAdjacent(f)!==-1}return{mount:a}}var $r=90;function qr(e,n,t){var r=B(e),i=r.on,o=n.Elements.track,a=t.live&&!t.isNavigation,v=Se("span",_r),l=ot($r,G(u,!1));function f(){a&&(d(!n.Autoplay.isPaused()),k(o,Qt,!0),v.textContent="\u2026",i(mn,G(d,!0)),i(bn,G(d,!1)),i([Xe,Oe],G(u,!0)))}function u(E){k(o,Jt,E),E?(He(o,v),l.start()):me(v)}function m(){ae(o,[Zt,Qt,Jt]),me(v)}function d(E){a&&k(o,Zt,E?"off":"polite")}return{mount:f,disable:d,destroy:m}}var Zr=Object.freeze({__proto__:null,Media:ar,Direction:or,Elements:br,Slides:Ar,Layout:Sr,Clones:Ir,Move:wr,Controller:Lr,Arrows:Rr,Autoplay:Dr,Cover:Cr,Scroll:Fr,Drag:Gr,Keyboard:Br,LazyLoad:Hr,Pagination:Yr,Sync:jr,Wheel:Kr,Live:qr}),Jr={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Qr={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:hr,i18n:Jr,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ei(e,n,t){var r=B(e),i=r.on;function o(){i([pe,H],function(){bt(function(){n.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})}function a(v,l){var f=n.Elements.track;J(f,"height",ce(Q(f).height)),bt(function(){l(),J(f,"height","")})}return{mount:o,start:a,cancel:yt}}function ti(e,n,t){var r=B(e),i=r.bind,o=n.Move,a=n.Controller,v=n.Scroll,l=n.Elements.list,f=G(J,l,"transition"),u;function m(){i(l,"transitionend",function(s){s.target===l&&u&&(E(),u())})}function d(s,_){var b=o.toPosition(s,!0),p=o.getPosition(),S=g(s);$(b-p)>=1&&S>=1?t.useScroll?v.scroll(b,S,!1,_):(f("transform "+S+"ms "+t.easing),o.translate(b,!0),u=_):(o.jump(s),_())}function E(){f(""),v.cancel()}function g(s){var _=t.rewindSpeed;if(e.is(xe)&&_){var b=a.getIndex(!0),p=a.getEnd();if(b===0&&s>=p||b>=p&&s===0)return _}return t.speed}return{mount:m,start:d,cancel:E}}var ni=function(){function e(t,r){this.event=B(),this.Components={},this.state=rr(Ae),this.splides=[],this._o={},this._E={};var i=de(t)?cn(document,t):t;Me(i,i+" is invalid."),this.root=i,r=ve({label:te(i,ee)||"",labelledby:te(i,Mt)||""},Qr,e.defaults,r||{});try{ve(r,JSON.parse(te(i,Dt)))}catch{Me(!1,"Invalid JSON")}this._o=Object.create(ve({},r))}var n=e.prototype;return n.mount=function(r,i){var o=this,a=this.state,v=this.Components;Me(a.is([Ae,Qe]),"Already mounted!"),a.set(Ae),this._C=v,this._T=i||this._T||(this.is(_t)?ei:ti),this._E=r||this._E;var l=Fe({},Zr,this._E,{Transition:this._T});return Ee(l,function(f,u){var m=f(o,v,o._o);v[u]=m,m.setup&&m.setup()}),Ee(v,function(f){f.mount&&f.mount()}),this.emit(pe),ie(this.root,gr),a.set(Ie),this.emit(Kt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Ie)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,i){return this.event.on(r,i),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(ge(arguments,1))),this},n.add=function(r,i){return this._C.Slides.add(r,i),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(H),this},n.destroy=function(r){r===void 0&&(r=!0);var i=this.event,o=this.state;return o.is(Ae)?B(this).on(Kt,this.destroy.bind(this,r)):(Ee(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(hn),i.destroy(),r&&le(this.splides),o.set(Qe)),this},Un(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),rt=ni;rt.defaults={};rt.STATES=Wn;var ri=`:host{border:10px solid purple;display:block}
`,ii=`.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list{display:block}.splide__track--fade>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__arrow{-ms-flex-align:center;align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;height:2em;-ms-flex-pack:center;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover:not(:disabled){opacity:.9}.splide__arrow:disabled{opacity:.3}.splide__arrow:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide.is-focus-in .splide__arrow:focus{outline:3px solid #0bf;outline-offset:3px}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;position:relative;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4);z-index:1}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__pagination__page:focus{outline:3px solid #0bf;outline-offset:3px}.splide__progress__bar{background:#ccc;height:3px}.splide__slide{-webkit-tap-highlight-color:transparent}.splide__slide:focus{outline:0}@supports (outline-offset:-3px){.splide__slide:focus-visible{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide__slide:focus-visible{border:3px solid #0bf}}@supports (outline-offset:-3px){.splide.is-focus-in .splide__slide:focus{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide.is-focus-in .splide__slide:focus{border:3px solid #0bf}.splide.is-focus-in .splide__track>.splide__list>.splide__slide:focus{border-color:#0bf}}.splide__toggle{cursor:pointer}.splide__toggle:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__toggle:focus{outline:3px solid #0bf;outline-offset:3px}.splide__track--nav>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide__track--nav>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide__arrows--rtl .splide__arrow--prev{left:auto;right:1em}.splide__arrows--rtl .splide__arrow--prev svg{transform:scaleX(1)}.splide__arrows--rtl .splide__arrow--next{left:1em;right:auto}.splide__arrows--rtl .splide__arrow--next svg{transform:scaleX(-1)}.splide__arrows--ttb .splide__arrow{left:50%;transform:translate(-50%)}.splide__arrows--ttb .splide__arrow--prev{top:1em}.splide__arrows--ttb .splide__arrow--prev svg{transform:rotate(-90deg)}.splide__arrows--ttb .splide__arrow--next{bottom:1em;top:auto}.splide__arrows--ttb .splide__arrow--next svg{transform:rotate(90deg)}.splide__pagination--ttb{bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}
`,ai=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,si=(e,n,t,r)=>{for(var i=r>1?void 0:r?oi(n,t):n,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(n,t,i):a(i))||i);return r&&i&&ai(n,t,i),i};let rn=class extends zn{constructor(){super(),console.log("toujou slider starting up!!!...",rt)}render(){return Fn`
            <style>
                ${ii}
                ${ri}
            </style>
            <h1>HELLO!!</h1>

            <section class="splide" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">Slide 01</li>
                        <li class="splide__slide">Slide 02</li>
                        <li class="splide__slide">Slide 03</li>
                    </ul>
                </div>
            </section>
        `}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".splide");console.log("+++++",e),new rt(e).mount()}};rn=si([Gn("toujou-slider")],rn);
