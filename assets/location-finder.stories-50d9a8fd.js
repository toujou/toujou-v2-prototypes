import{T as Ft}from"./badgeCustomConfig-e7a687d5.js";import{j as C}from"./jsx-runtime-6a2ad889.js";import{u as at}from"./index-1b6e96e1.js";import{b as N,x as Dt,s as st,y as P,i as I}from"./lit-element-6fe74b4f.js";import{t as $t,u as Bt,c as Nt,v as Ht,a as Gt,l as H,q as Ut}from"./index-ad496528.js";import{c as T}from"./_commonjsHelpers-042e6b4d.js";import"./index-56d4de0b.js";function G(t){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...at(),...t.components};return C.jsxs(C.Fragment,{children:[C.jsx(e.h1,{id:"location-finder",children:"Location finder"}),`
`,C.jsx(e.h2,{id:"example-from-toujou",children:"Example from TOUJOU"}),`
`,C.jsx(e.pre,{children:C.jsx(e.code,{className:"language-html",children:`<toujou-location-finder
    class="location-finder"
    bounds="{mapBounds}"
    teaserUrl="{teaserUrl}"
    geoJsonUrl="{geoJsonUrl}"
    filterParams="{filterParams}"
    map-style="mapbox://styles/mapbox/light-v10"
    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
    <f:render partial="Content/LocationFinder/Layers" />
</toujou-location-finder>
`})})]})}function Vt(t={}){const{wrapper:e}={...at(),...t.components};return e?C.jsx(e,{...t,children:C.jsx(G,{...t})}):G(t)}var lt=qt,Jt=Object.prototype.hasOwnProperty;function qt(){for(var t={},e=0;e<arguments.length;e++){var o=arguments[e];for(var n in o)Jt.call(o,n)&&(t[n]=o[n])}return t}var R={},Zt={get exports(){return R},set exports(t){R=t}};(function(t,e){(function(){var o={};t.exports=o,o.simpleFilter=function(n,i){return i.filter(function(r){return o.test(n,r)})},o.test=function(n,i){return o.match(n,i)!==null},o.match=function(n,i,r){r=r||{};var c=0,a=[],s=i.length,l=0,u=0,d=r.pre||"",g=r.post||"",_=r.caseSensitive&&i||i.toLowerCase(),b;n=r.caseSensitive&&n||n.toLowerCase();for(var p=0;p<s;p++)b=i[p],_[p]===n[c]?(b=d+b+g,c+=1,u+=1+u):u=0,l+=u,a[a.length]=b;return c===n.length?(l=_===n?1/0:l,{rendered:a.join(""),score:l}):null},o.filter=function(n,i,r){return!i||i.length===0?[]:typeof n!="string"?i:(r=r||{},i.reduce(function(c,a,s,l){var u=a;r.extract&&(u=r.extract(a));var d=o.match(n,u,r);return d!=null&&(c[c.length]={string:d.rendered,score:d.score,index:s,original:a}),c},[]).sort(function(c,a){var s=a.score-c.score;return s||c.index-a.index}))}})()})(Zt);var w=function(t){return this.component=t,this.items=[],this.active=t.options.noInitialSelection?-1:0,this.wrapper=document.createElement("div"),this.wrapper.className="suggestions-wrapper",this.element=document.createElement("ul"),this.element.className="suggestions",this.wrapper.appendChild(this.element),this.selectingListItem=!1,t.el.parentNode.insertBefore(this.wrapper,t.el.nextSibling),this};w.prototype.show=function(){this.element.style.display="block"};w.prototype.hide=function(){this.element.style.display="none"};w.prototype.add=function(t){this.items.push(t)};w.prototype.clear=function(){this.items=[],this.active=this.component.options.noInitialSelection?-1:0};w.prototype.isEmpty=function(){return!this.items.length};w.prototype.isVisible=function(){return this.element.style.display==="block"};w.prototype.draw=function(){if(this.element.innerHTML="",this.items.length===0){this.hide();return}for(var t=0;t<this.items.length;t++)this.drawItem(this.items[t],this.active===t);this.show()};w.prototype.drawItem=function(t,e){var o=document.createElement("li"),n=document.createElement("a");e&&(o.className+=" active"),n.innerHTML=t.string,o.appendChild(n),this.element.appendChild(o),o.addEventListener("mousedown",function(){this.selectingListItem=!0}.bind(this)),o.addEventListener("mouseup",function(){this.handleMouseUp.call(this,t)}.bind(this))};w.prototype.handleMouseUp=function(t){this.selectingListItem=!1,this.component.value(t.original),this.clear(),this.draw()};w.prototype.move=function(t){this.active=t,this.draw()};w.prototype.previous=function(){this.move(this.active<=0?this.items.length-1:this.active-1)};w.prototype.next=function(){this.move(this.active>=this.items.length-1?0:this.active+1)};w.prototype.drawError=function(t){var e=document.createElement("li");e.innerHTML=t,this.element.appendChild(e),this.show()};var Kt=w,Xt=lt,Yt=R,Wt=Kt,y=function(t,e,o){return o=o||{},this.options=Xt({minLength:2,limit:5,filter:!0,hideOnBlur:!0,noInitialSelection:!0},o),this.el=t,this.data=e||[],this.list=new Wt(this),this.query="",this.selected=null,this.list.draw(),this.el.addEventListener("keyup",function(n){this.handleKeyUp(n.keyCode,n)}.bind(this),!1),this.el.addEventListener("keydown",function(n){this.handleKeyDown(n)}.bind(this)),this.el.addEventListener("focus",function(){this.handleFocus()}.bind(this)),this.el.addEventListener("blur",function(){this.handleBlur()}.bind(this)),this.el.addEventListener("paste",function(n){this.handlePaste(n)}.bind(this)),this.render=this.options.render?this.options.render.bind(this):this.render.bind(this),this.getItemValue=this.options.getItemValue?this.options.getItemValue.bind(this):this.getItemValue.bind(this),this};y.prototype.handleKeyUp=function(t,e){if(!(t===40||t===38||t===27||t===9)){if(t===13){this.list.items[this.list.active]&&(this.list.handleMouseUp(this.list.items[this.list.active]),e.stopPropagation());return}this.handleInputChange(this.el.value)}};y.prototype.handleKeyDown=function(t){switch(t.keyCode){case 13:this.list.active>=0&&(this.list.selectingListItem=!0);break;case 9:this.list.isEmpty()||(this.list.isVisible()&&t.preventDefault(),this.value(this.list.active>=0?this.list.items[this.list.active].original:null),this.list.hide());break;case 27:this.list.isEmpty()||this.list.hide();break;case 38:this.list.previous();break;case 40:this.list.next();break}};y.prototype.handleBlur=function(){!this.list.selectingListItem&&this.options.hideOnBlur&&this.list.hide()};y.prototype.handlePaste=function(t){if(t.clipboardData)this.handleInputChange(t.clipboardData.getData("Text"));else{var e=this;setTimeout(function(){e.handleInputChange(t.target.value)},100)}};y.prototype.handleInputChange=function(t){if(this.query=this.normalize(t),this.list.clear(),this.query.length<this.options.minLength){this.list.draw();return}this.getCandidates(function(e){for(var o=0;o<e.length&&(this.list.add(e[o]),o!==this.options.limit-1);o++);this.list.draw()}.bind(this))};y.prototype.handleFocus=function(){this.list.isEmpty()||this.list.show(),this.list.selectingListItem=!1};y.prototype.update=function(t){this.data=t,this.handleKeyUp()};y.prototype.clear=function(){this.data=[],this.list.clear()};y.prototype.normalize=function(t){return t=t.toLowerCase(),t};y.prototype.match=function(t,e){return t.indexOf(e)>-1};y.prototype.value=function(t){if(this.selected=t,this.el.value=this.getItemValue(t||{place_name:this.query}),document.createEvent){var e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!1),this.el.dispatchEvent(e)}else this.el.fireEvent("onchange")};y.prototype.getCandidates=function(t){var e={pre:"<strong>",post:"</strong>",extract:function(n){return this.getItemValue(n)}.bind(this)},o;this.options.filter?(o=Yt.filter(this.query,this.data,e),o=o.map(function(n){return{original:n.original,string:this.render(n.original,n.string)}}.bind(this))):o=this.data.map(function(n){var i=this.render(n);return{original:n,string:i}}.bind(this)),t(o)};y.prototype.getItemValue=function(t){return t};y.prototype.render=function(t,e){if(e)return e;for(var o=t.original?this.getItemValue(t.original):this.getItemValue(t),n=this.normalize(o),i=n.lastIndexOf(this.query);i>-1;){var r=i+this.query.length;o=o.slice(0,i)+"<strong>"+o.slice(i,r)+"</strong>"+o.slice(r),i=n.slice(0,i).lastIndexOf(this.query)}return o};y.prototype.renderError=function(t){this.list.drawError(t)};var Qt=y,ct=Qt,te=ct;typeof window<"u"&&(window.Suggestions=ct);var ee="Expected a function",U=0/0,oe="[object Symbol]",ne=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,re=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,le=typeof T=="object"&&T&&T.Object===Object&&T,ce=typeof self=="object"&&self&&self.Object===Object&&self,ue=le||ce||Function("return this")(),de=Object.prototype,pe=de.toString,he=Math.max,ge=Math.min,z=function(){return ue.Date.now()};function fe(t,e,o){var n,i,r,c,a,s,l=0,u=!1,d=!1,g=!0;if(typeof t!="function")throw new TypeError(ee);e=V(e)||0,F(o)&&(u=!!o.leading,d="maxWait"in o,r=d?he(V(o.maxWait)||0,e):r,g="trailing"in o?!!o.trailing:g);function _(h){var m=n,M=i;return n=i=void 0,l=h,c=t.apply(M,m),c}function b(h){return l=h,a=setTimeout(f,e),u?_(h):c}function p(h){var m=h-s,M=h-l,B=e-m;return d?ge(B,r-M):B}function j(h){var m=h-s,M=h-l;return s===void 0||m>=e||m<0||d&&M>=r}function f(){var h=z();if(j(h))return v(h);a=setTimeout(f,p(h))}function v(h){return a=void 0,g&&n?_(h):(n=i=void 0,c)}function k(){a!==void 0&&clearTimeout(a),l=0,n=s=i=a=void 0}function E(){return a===void 0?c:v(z())}function L(){var h=z(),m=j(h);if(n=arguments,i=this,s=h,m){if(a===void 0)return b(s);if(d)return a=setTimeout(f,e),_(s)}return a===void 0&&(a=setTimeout(f,e)),c}return L.cancel=k,L.flush=E,L}function F(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function me(t){return!!t&&typeof t=="object"}function _e(t){return typeof t=="symbol"||me(t)&&pe.call(t)==oe}function V(t){if(typeof t=="number")return t;if(_e(t))return U;if(F(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=F(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ne,"");var o=re.test(t);return o||ae.test(t)?se(t.slice(2),o?2:8):ie.test(t)?U:+t}var be=fe,ve={fr:{name:"France",bbox:[[-4.59235,41.380007],[9.560016,51.148506]]},us:{name:"United States",bbox:[[-171.791111,18.91619],[-66.96466,71.357764]]},ru:{name:"Russia",bbox:[[19.66064,41.151416],[190.10042,81.2504]]},ca:{name:"Canada",bbox:[[-140.99778,41.675105],[-52.648099,83.23324]]}},ye={de:"Suche",it:"Ricerca",en:"Search",nl:"Zoeken",fr:"Chercher",ca:"Cerca",he:"לחפש",ja:"サーチ",lv:"Meklēt",pt:"Procurar",sr:"Претрага",zh:"搜索",cs:"Vyhledávání",hu:"Keresés",ka:"ძიება",nb:"Søke",sk:"Vyhľadávanie",th:"ค้นหา",fi:"Hae",is:"Leita",ko:"수색",pl:"Szukaj",sl:"Iskanje",fa:"جستجو",ru:"Поиск"},je={placeholder:ye},D={},we={get exports(){return D},set exports(t){D=t}};(function(t){(function(e,o,n){t.exports?t.exports=n():e[o]=n()})(T,"subtag",function(){var e="",o=/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;function n(s){return s.match(o)||[]}function i(s){return n(s).filter(function(l,u){return l&&u})}function r(s){return s=n(s),{language:s[1]||e,extlang:s[2]||e,script:s[3]||e,region:s[4]||e}}function c(s,l,u){Object.defineProperty(s,l,{value:u,enumerable:!0})}function a(s,l,u){function d(g){return n(g)[s]||e}c(d,"pattern",l),c(r,u,d)}return a(1,/^[a-zA-Z]{2,3}$/,"language"),a(2,/^[a-zA-Z]{3}$/,"extlang"),a(3,/^[a-zA-Z]{4}$/,"script"),a(4,/^[a-zA-Z]{2}$|^[0-9]{3}$/,"region"),c(r,"split",i),r})})(we);var xe=te,ke=be,x=lt,Ee=$t().EventEmitter,J=ve,Le=je,Pe=D;function ut(t,e){this._eventEmitter=new Ee,this.options=x({},this.options,e),this.inputString="",this.fresh=!0,this.lastSelected=null,this.geocoderApi=t}ut.prototype={options:{zoom:16,flyTo:!0,trackProximity:!0,showResultsWhileTyping:!1,minLength:2,reverseGeocode:!1,limit:5,enableEventLogging:!0,marker:!0,popup:!1,maplibregl:null,collapsed:!1,clearAndBlurOnEsc:!1,clearOnBlur:!1,getItemValue:function(t){return t.text!==void 0?t.text:t.place_name},render:function(t){if(t.geometry){var a=t.place_name.split(",");return'<div class="mapboxgl-ctrl-geocoder--result maplibregl-ctrl-geocoder--result"><svg class="mapboxgl-ctrl-geocoder--result-icon maplibre-ctrl-geocoder--result-icon" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36571 0 0 5.38676 0 12.0471C0 21.0824 12 32 12 32C12 32 24 21.0824 24 12.0471C24 5.38676 18.6343 0 12 0ZM12 16.3496C9.63428 16.3496 7.71429 14.4221 7.71429 12.0471C7.71429 9.67207 9.63428 7.74454 12 7.74454C14.3657 7.74454 16.2857 9.67207 16.2857 12.0471C16.2857 14.4221 14.3657 16.3496 12 16.3496Z" fill="#687078"/></svg><div><div class="mapboxgl-ctrl-geocoder--result-title maplibregl-ctrl-geocoder--result-title">'+a[0]+'</div><div class="mapboxgl-ctrl-geocoder--result-address maplibregl-ctrl-geocoder--result-address">'+a.splice(1,a.length).join(",")+"</div></div></div>"}else{var e=t.text,o=e.toLowerCase().indexOf(this.query.toLowerCase()),n=this.query.length,i=e.substring(0,o),r=e.substring(o,o+n),c=e.substring(o+n);return'<div class="mapboxgl-ctrl-geocoder--suggestion maplibregl-ctrl-geocoder--suggestion"><svg class="mapboxgl-ctrl-geocoder--suggestion-icon maplibre-ctrl-geocoder--suggestion-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22.8702 20.1258H21.4248L20.9125 19.6318C22.7055 17.546 23.785 14.8382 23.785 11.8925C23.785 5.32419 18.4608 0 11.8925 0C5.32419 0 0 5.32419 0 11.8925C0 18.4608 5.32419 23.785 11.8925 23.785C14.8382 23.785 17.546 22.7055 19.6318 20.9125L20.1258 21.4248V22.8702L29.2739 32L32 29.2739L22.8702 20.1258ZM11.8925 20.1258C7.33676 20.1258 3.65923 16.4483 3.65923 11.8925C3.65923 7.33676 7.33676 3.65923 11.8925 3.65923C16.4483 3.65923 20.1258 7.33676 20.1258 11.8925C20.1258 16.4483 16.4483 20.1258 11.8925 20.1258Z" fill="#687078"/></svg><div class="mapboxgl-ctrl-geocoder--suggestion-info maplibregl-ctrl-geocoder--suggestion-info"><div class="mapboxgl-ctrl-geocoder--suggestion-title maplibregl-ctrl-geocoder--suggestion-title">'+i+'<span class="mapboxgl-ctrl-geocoder--suggestion-match maplibregl-ctrl-geocoder--suggestion-match">'+r+"</span>"+c+"</div></div></div>"}},popupRender:function(t){var e=t.place_name.split(",");return'<div class="mapboxgl-ctrl-geocoder--suggestion maplibre-ctrl-geocoder--suggestion popup-suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title maplibre-ctrl-geocoder--suggestion-title popup-suggestion-title">'+e[0]+'</div><div class="mapboxgl-ctrl-geocoder--suggestion-address maplibre-ctrl-geocoder--suggestion-address popup-suggestion-address">'+e.splice(1,e.length).join(",")+"</div></div>"},showResultMarkers:!0,debounceSearch:200},addTo:function(t){function e(n,i){if(!document.body.contains(i))throw new Error("Element provided to #addTo() exists, but is not in the DOM");var r=n.onAdd();i.appendChild(r)}if(t._controlContainer)t.addControl(this);else if(t instanceof HTMLElement)e(this,t);else if(typeof t=="string"){var o=document.querySelectorAll(t);if(o.length===0)throw new Error("Element ",t,"not found.");if(o.length>1)throw new Error("Geocoder can only be added to a single html element");e(this,o[0])}else throw new Error("Error: addTo must be a maplibre-gl-js map, an html element, or a CSS selector query for a single html element")},onAdd:function(t){if(t&&typeof t!="string"&&(this._map=t),this.setLanguage(),this.options.localGeocoderOnly&&!this.options.localGeocoder)throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");this._onChange=this._onChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onPaste=this._onPaste.bind(this),this._onBlur=this._onBlur.bind(this),this._showButton=this._showButton.bind(this),this._hideButton=this._hideButton.bind(this),this._onQueryResult=this._onQueryResult.bind(this),this.clear=this.clear.bind(this),this._updateProximity=this._updateProximity.bind(this),this._collapse=this._collapse.bind(this),this._unCollapse=this._unCollapse.bind(this),this._clear=this._clear.bind(this),this._clearOnBlur=this._clearOnBlur.bind(this);var e=this.container=document.createElement("div");e.className="mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl";var o=this.createIcon("search",'<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');this._inputEl=document.createElement("input"),this._inputEl.type="text",this._inputEl.className="mapboxgl-ctrl-geocoder--input maplibregl-ctrl-geocoder--input",this.setPlaceholder(),this.options.collapsed&&(this._collapse(),this.container.addEventListener("mouseenter",this._unCollapse),this.container.addEventListener("mouseleave",this._collapse),this._inputEl.addEventListener("focus",this._unCollapse)),(this.options.collapsed||this.options.clearOnBlur)&&this._inputEl.addEventListener("blur",this._onBlur),this._inputEl.addEventListener("keydown",ke(this._onKeyDown,this.options.debounceSearch)),this._inputEl.addEventListener("paste",this._onPaste),this._inputEl.addEventListener("change",this._onChange),this.container.addEventListener("mouseenter",this._showButton),this.container.addEventListener("mouseleave",this._hideButton);var n=document.createElement("div");n.classList.add("mapboxgl-ctrl-geocoder--pin-right","maplibregl-ctrl-geocoder--pin-right"),this._clearEl=document.createElement("button"),this._clearEl.setAttribute("aria-label","Clear"),this._clearEl.addEventListener("click",this.clear),this._clearEl.className="mapboxgl-ctrl-geocoder--button maplibregl-ctrl-geocoder--button";var i=this.createIcon("close",'<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');return this._clearEl.appendChild(i),this._loadingEl=this.createIcon("loading",'<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'),n.appendChild(this._clearEl),n.appendChild(this._loadingEl),e.appendChild(o),e.appendChild(this._inputEl),e.appendChild(n),this._typeahead=new xe(this._inputEl,[],{filter:!1,minLength:this.options.minLength,limit:this.options.limit,noInitialSelection:!0}),this.setRenderFunction(this.options.render),this._typeahead.getItemValue=this.options.getItemValue,this.mapMarker=null,this.resultMarkers=[],this._handleMarker=this._handleMarker.bind(this),this._handleResultMarkers=this._handleResultMarkers.bind(this),this._map&&(this.options.trackProximity&&(this._updateProximity(),this._map.on("moveend",this._updateProximity)),this._maplibregl=this.options.maplibregl,!this._maplibregl&&this.options.marker&&(console.error("No maplibregl detected in options. Map markers are disabled. Please set options.maplibregl."),this.options.marker=!1)),e},createIcon:function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","svg");if(o.setAttribute("class","mapboxgl-ctrl-geocoder--icon mapboxgl-ctrl-geocoder--icon-"+t+" maplibregl-ctrl-geocoder--icon maplibregl-ctrl-geocoder--icon-"+t),o.setAttribute("viewBox","0 0 18 18"),o.setAttribute("xml:space","preserve"),o.setAttribute("width",18),o.setAttribute("height",18),"innerHTML"in o)o.innerHTML=e;else{var n=document.createElement("div");n.innerHTML="<svg>"+e.valueOf().toString()+"</svg>";var i=n.firstChild,r=i.firstChild;o.appendChild(r)}return o},onRemove:function(){return this.container.parentNode.removeChild(this.container),this.options.trackProximity&&this._map&&this._map.off("moveend",this._updateProximity),this._removeMarker(),this._map=null,this},_onPaste:function(t){var e=(t.clipboardData||window.clipboardData).getData("text");e.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(e)},_onKeyDown:function(t){var e=27,o=9;if(t.keyCode===e&&this.options.clearAndBlurOnEsc)return this._clear(t),this._inputEl.blur();var n=t.target&&t.target.shadowRoot?t.target.shadowRoot.activeElement:t.target,i=n?n.value:"";if(!i)return this.fresh=!0,t.keyCode!==o&&this.clear(t),this._clearEl.style.display="none";if(!(t.metaKey||[o,e,37,39,38,40].indexOf(t.keyCode)!==-1)){if(t.keyCode===13)if(!this.options.showResultsWhileTyping)this._typeahead.selected||this._geocode(n.value);else{this._typeahead.selected==null&&this.geocoderApi.getSuggestions?this._geocode(n.value,!0):this._typeahead.selected==null&&this.options.showResultMarkers&&this._fitBoundsForMarkers();return}n.value.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(n.value)}},_showButton:function(){this._inputEl.value.length>0&&(this._clearEl.style.display="block")},_hideButton:function(){this._typeahead.selected&&(this._clearEl.style.display="none")},_onBlur:function(t){this.options.clearOnBlur&&this._clearOnBlur(t),this.options.collapsed&&this._collapse()},_onChange:function(){var t=this._typeahead.selected;if(t&&!t.geometry)t.placeId?this._geocode(t.placeId,!0,!0):this._geocode(t.text,!0);else if(t&&JSON.stringify(t)!==this.lastSelected){if(this._clearEl.style.display="none",this.options.flyTo){var e;if(this._removeResultMarkers(),t.properties&&J[t.properties.short_code])e=x({},this.options.flyTo),this._map&&this._map.fitBounds(J[t.properties.short_code].bbox,e);else if(t.bbox){var o=t.bbox;e=x({},this.options.flyTo),this._map&&this._map.fitBounds([[o[0],o[1]],[o[2],o[3]]],e)}else{var n={zoom:this.options.zoom};e=x({},n,this.options.flyTo),t.center?e.center=t.center:t.geometry&&t.geometry.type&&t.geometry.type==="Point"&&t.geometry.coordinates&&(e.center=t.geometry.coordinates),this._map&&this._map.flyTo(e)}}this.options.marker&&this._maplibregl&&this._handleMarker(t),this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0),this.lastSelected=JSON.stringify(t),this._typeahead.selected=null,this._eventEmitter.emit("result",{result:t})}},_getConfigForRequest:function(){var t=["bbox","limit","proximity","countries","types","language","reverseMode"],e=this,o=t.reduce(function(n,i){return e.options[i]&&(["countries","types","language"].indexOf(i)>-1?n[i]=e.options[i].split(/[\s,]+/):n[i]=e.options[i],i==="proximity"&&e.options[i]&&typeof e.options[i].longitude=="number"&&typeof e.options[i].latitude=="number"&&(n[i]=[e.options[i].longitude,e.options[i].latitude])),n},{});return o},_geocode:function(t,e,o){this._loadingEl.style.display="block",this._eventEmitter.emit("loading",{query:t}),this.inputString=t;var n=null,i=this._getConfigForRequest(),r;if(this.options.localGeocoderOnly)r=Promise.resolve();else if(this.options.reverseGeocode&&/(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(t)){var c=t.split(/[\s(,)?]+/).map(function(l){return parseFloat(l,10)}).reverse();i.types&&i.types[0],i=x(i,{query:c,limit:1}),"proximity"in i&&delete i.proximity,r=this.geocoderApi.reverseGeocode(i)}else i=x(i,{query:t}),this.geocoderApi.getSuggestions?e?this.geocoderApi.searchByPlaceId&&o?r=this.geocoderApi.searchByPlaceId(i):r=this.geocoderApi.forwardGeocode(i):r=this.geocoderApi.getSuggestions(i):r=this.geocoderApi.forwardGeocode(i);var a=[];this.options.localGeocoder&&(a=this.options.localGeocoder(t),a||(a=[]));var s=[];return r.catch(function(l){n=l}.bind(this)).then(function(l){this._loadingEl.style.display="none";var u={};return l?u=l:u={type:"FeatureCollection",features:[]},u.config=i,this.fresh&&(this.fresh=!1),u.features=u.features?a.concat(u.features):a,this.options.externalGeocoder?(s=this.options.externalGeocoder(t,u.features,i)||[],s.then(function(d){return u.features=u.features?d.concat(u.features):d,u},function(){return u})):u}.bind(this)).then(function(l){if(n)throw n;this.options.filter&&l.features.length&&(l.features=l.features.filter(this.options.filter));var u=[];l.suggestions?u=l.suggestions:l.place?u=[l.place]:u=l.features,u.length?(this._clearEl.style.display="block",this._typeahead.update(u),(!this.options.showResultsWhileTyping||e)&&this.options.showResultMarkers&&(l.features.length>0||l.place)&&this._fitBoundsForMarkers(),this._eventEmitter.emit("results",l)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderNoResults(),this._eventEmitter.emit("results",l))}.bind(this)).catch(function(l){this._loadingEl.style.display="none",a.length&&this.options.localGeocoder||s.length&&this.options.externalGeocoder?(this._clearEl.style.display="block",this._typeahead.update(a)):(this._clearEl.style.display="none",this._typeahead.selected=null,this._renderError()),this._eventEmitter.emit("results",{features:a}),this._eventEmitter.emit("error",{error:l})}.bind(this)),r},_clear:function(t){t&&t.preventDefault(),this._inputEl.value="",this._typeahead.selected=null,this._typeahead.clear(),this._onChange(),this._clearEl.style.display="none",this._removeMarker(),this._removeResultMarkers(),this.lastSelected=null,this._eventEmitter.emit("clear"),this.fresh=!0},clear:function(t){this._clear(t),this._inputEl.focus()},_clearOnBlur:function(t){var e=this;t.relatedTarget&&e._clear(t)},_onQueryResult:function(t){var e=t;if(e.features.length){var o=e.features[0];this._typeahead.selected=o,this._inputEl.value=o.place_name,this._onChange()}},_updateProximity:function(){if(this._map)if(this._map.getZoom()>9){var t=this._map.getCenter().wrap();this.setProximity({longitude:t.lng,latitude:t.lat})}else this.setProximity(null)},_collapse:function(){!this._inputEl.value&&this._inputEl!==document.activeElement&&this.container.classList.add("mapboxgl-ctrl-geocoder--collapsed","maplibregl-ctrl-geocoder--collapsed")},_unCollapse:function(){this.container.classList.remove("mapboxgl-ctrl-geocoder--collapsed","maplibregl-ctrl-geocoder--collapsed")},query:function(t){return this._geocode(t).then(this._onQueryResult),this},_renderError:function(){var t="<div class='mapbox-gl-geocoder--error maplibre-gl-geocoder--error'>There was an error reaching the server</div>";this._renderMessage(t)},_renderNoResults:function(){var t="<div class='mapbox-gl-geocoder--error mapbox-gl-geocoder--no-results maplibre-gl-geocoder--error maplibre-gl-geocoder--no-results'>No results found</div>";this._renderMessage(t)},_renderMessage:function(t){this._typeahead.update([]),this._typeahead.selected=null,this._typeahead.clear(),this._typeahead.renderError(t)},_getPlaceholderText:function(){if(this.options.placeholder)return this.options.placeholder;if(this.options.language){var t=this.options.language.split(",")[0],e=Pe.language(t),o=Le.placeholder[e];if(o)return o}return"Search"},_fitBoundsForMarkers:function(){if(!(this._typeahead.data.length<1)){var t=this._typeahead.data.filter(function(i){return typeof i!="string"}).slice(0,this.options.limit);if(this._clearEl.style.display="none",this.options.flyTo&&this._maplibregl&&this._map){var e={padding:100},o=x({},e,this.options.flyTo),n=new this._maplibregl.LngLatBounds;t.forEach(function(i){n.extend(i.geometry.coordinates)}),this._map.fitBounds(n.toArray(),o)}return t.length>0&&this._maplibregl&&this._handleResultMarkers(t),this}},setInput:function(t){return this._inputEl.value=t,this._typeahead.selected=null,this._typeahead.clear(),t.length>=this.options.minLength&&this.options.showResultsWhileTyping&&this._geocode(t),this},setProximity:function(t){return this.options.proximity=t,this},getProximity:function(){return this.options.proximity},setRenderFunction:function(t){return t&&typeof t=="function"&&(this._typeahead.render=t),this},getRenderFunction:function(){return this._typeahead.render},setLanguage:function(t){var e=navigator.language||navigator.userLanguage||navigator.browserLanguage;return this.options.language=t||this.options.language||e,this},getLanguage:function(){return this.options.language},getZoom:function(){return this.options.zoom},setZoom:function(t){return this.options.zoom=t,this},getFlyTo:function(){return this.options.flyTo},setFlyTo:function(t){return this.options.flyTo=t,this},getPlaceholder:function(){return this.options.placeholder},setPlaceholder:function(t){return this.placeholder=t||this._getPlaceholderText(),this._inputEl.placeholder=this.placeholder,this._inputEl.setAttribute("aria-label",this.placeholder),this},getBbox:function(){return this.options.bbox},setBbox:function(t){return this.options.bbox=t,this},getCountries:function(){return this.options.countries},setCountries:function(t){return this.options.countries=t,this},getTypes:function(){return this.options.types},setTypes:function(t){return this.options.types=t,this},getMinLength:function(){return this.options.minLength},setMinLength:function(t){return this.options.minLength=t,this._typeahead&&(this._typeahead.options.minLength=t),this},getLimit:function(){return this.options.limit},setLimit:function(t){return this.options.limit=t,this._typeahead&&(this._typeahead.options.limit=t),this},getFilter:function(){return this.options.filter},setFilter:function(t){return this.options.filter=t,this},setGeocoderApi:function(t){return this.geocoderApi=t,this},getGeocoderApi:function(){return this.geocoderApi},_handleMarker:function(t){if(this._map){this._removeMarker();var e={color:"#4668F2"},o=x({},e,this.options.marker);this.mapMarker=new this._maplibregl.Marker(o);var n;if(this.options.popup){var i={},r=x({},i,this.options.popup);n=new this._maplibregl.Popup(r).setHTML(this.options.popupRender(t))}return t.center?(this.mapMarker.setLngLat(t.center).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(n)):t.geometry&&t.geometry.type&&t.geometry.type==="Point"&&t.geometry.coordinates&&(this.mapMarker.setLngLat(t.geometry.coordinates).addTo(this._map),this.options.popup&&this.mapMarker.setPopup(n)),this}},_removeMarker:function(){this.mapMarker&&(this.mapMarker.remove(),this.mapMarker=null)},_handleResultMarkers:function(t){if(this._map){this._removeResultMarkers();var e={color:"#4668F2"},o=x({},e,this.options.showResultMarkers);return t.forEach(function(n){if(this.options.showResultMarkers&&this.options.showResultMarkers.element){var i=this.options.showResultMarkers.element.cloneNode(!0);o=x(o,{element:i})}var r=new this._maplibregl.Marker(x({},o,{element:i})),c;if(this.options.popup){var a={},s=x({},a,this.options.popup);c=new this._maplibregl.Popup(s).setHTML(this.options.popupRender(n))}n.center?(r.setLngLat(n.center).addTo(this._map),this.options.popup&&r.setPopup(c)):n.geometry&&n.geometry.type&&n.geometry.type==="Point"&&n.geometry.coordinates&&(r.setLngLat(n.geometry.coordinates).addTo(this._map),this.options.popup&&r.setPopup(c)),this.resultMarkers.push(r)}.bind(this)),this}},_removeResultMarkers:function(){this.resultMarkers&&this.resultMarkers.length>0&&(this.resultMarkers.forEach(function(t){t.remove()}),this.resultMarkers=[])},on:function(t,e){return this._eventEmitter.on(t,e),this},off:function(t,e){return this._eventEmitter.removeListener(t,e),this}};var Ce=ut;function dt(t){var e=function(n){var i=n.dispatch,r=n.getState;return function(c){return function(a){return typeof a=="function"?a(i,r,t):c(a)}}};return e}var pt=dt();pt.withExtraArgument=dt;const Me=pt;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Se=t=>(...e)=>({_$litDirective$:t,values:e});class Ae{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends Ae{constructor(e){if(super(e),this.it=N,e.type!==Te.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===Dt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}$.directiveName="unsafeHTML",$.resultType=1;const q=Se($);var A="NOT_FOUND";function Ie(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:A},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Oe(t,e){var o=[];function n(a){var s=o.findIndex(function(u){return e(a,u.key)});if(s>-1){var l=o[s];return s>0&&(o.splice(s,1),o.unshift(l)),l.value}return A}function i(a,s){n(a)===A&&(o.unshift({key:a,value:s}),o.length>t&&o.pop())}function r(){return o}function c(){o=[]}return{get:n,put:i,getEntries:r,clear:c}}var ze=function(e,o){return e===o};function Re(t){return function(o,n){if(o===null||n===null||o.length!==n.length)return!1;for(var i=o.length,r=0;r<i;r++)if(!t(o[r],n[r]))return!1;return!0}}function Fe(t,e){var o=typeof e=="object"?e:{equalityCheck:e},n=o.equalityCheck,i=n===void 0?ze:n,r=o.maxSize,c=r===void 0?1:r,a=o.resultEqualityCheck,s=Re(i),l=c===1?Ie(s):Oe(c,s);function u(){var d=l.get(arguments);if(d===A){if(d=t.apply(null,arguments),a){var g=l.getEntries(),_=g.find(function(b){return a(b.value,d)});_&&(d=_.value)}l.put(arguments,d)}return d}return u.clearCache=function(){return l.clear()},u}function De(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(n){return typeof n=="function"})){var o=e.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return e}function $e(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];var i=function(){for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];var l=0,u,d={memoizeOptions:void 0},g=a.pop();if(typeof g=="object"&&(d=g,g=a.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var _=d,b=_.memoizeOptions,p=b===void 0?o:b,j=Array.isArray(p)?p:[p],f=De(a),v=t.apply(void 0,[function(){return l++,g.apply(null,arguments)}].concat(j)),k=t(function(){for(var L=[],h=f.length,m=0;m<h;m++)L.push(f[m].apply(null,arguments));return u=v.apply(null,L),u});return Object.assign(k,{resultFunc:g,memoizedResultFunc:v,dependencies:f,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),k};return i}var ht=$e(Fe);const gt="SET_LOCATOR_LOADING_START",ft="SET_LOCATOR_LOADING_END",Be={isLoading:!1},mt="MOUSE_ENTER_FEATURE",_t="MOUSE_LEAVE_FEATURE",Ne={highlightedFeature:null,isLoading:!1},bt="RESET_PAGINATION",vt="SET_PREV_PAGINATION_PAGE",yt="SET_NEXT_PAGINATION_PAGE",jt="SET_HAS_PAGINATION",wt="SET_HAS_NO_PAGINATION",xt="SET_DATA_GEOJSON",kt="SET_DATA_TEASERS",Et="SET_DATA_LOAD_START",Lt="SET_DATA_LOAD_END",Pt="SET_CURRENT_VISIBLE_FEATURES",Z=()=>({type:Et}),K=()=>({type:Lt}),X=t=>({type:Pt,payload:t}),He=(t,e)=>e.properties.search_boost-t.properties.search_boost||t.properties.name.localeCompare(e.properties.name),Ge=(t,e,o,n)=>new Promise((i,r)=>{t.getClusterLeaves(e,o,n,(c,a)=>{c?r(c):i(a)})}),Ue=(t,e,o,n,i,r)=>async(c,a)=>{const{currentPage:s}=a().pagination;c(Z());try{const l=await(async u=>fetch(u).then(d=>d.json()))(t);c({type:xt,payload:l}),o.once("idle",async()=>{c(Z());const u=[];for(const p of((j,f,v)=>{const k=[];let E=[];return v.forEach(L=>{f&&f.getLayer(L)&&k.push(L)}),k.length&&(E=f.queryRenderedFeatures({layers:k})),E})(0,o,n))if(Object.prototype.hasOwnProperty.call(p.properties,"cluster_id")){const j=o.getSource(p.source),f=await Ge(j,p.properties.cluster_id,p.properties.point_count,0);u.push(...f)}else u.push(p);const d=(p=>{if(!p.length)return[];const j={};return p.filter(f=>{const{uid:v}=f.properties;return!j[v]&&(j[v]=!0,!0)})})(u),g=d.map(p=>p.properties.uid);if(c(g.length>r?{type:jt}:{type:wt}),c(X(g)),_=i,b=g,!(Array.isArray(_)&&Array.isArray(b)&&_.length===b.length&&_.every((p,j)=>p===b[j]))){const p=((f,v)=>({offset:(f-1)*v,limit:v}))(s,r),j=await(async(f,v,k)=>{if(!f.length)return null;const E=f.filter(m=>m.properties.search_boost||m.properties.name).sort(He).splice(k.offset,k.limit).map(m=>m.properties.uid),L=new URLSearchParams({ids:E.join(",")}),h=v+(v.match(/[?]/g)?"&":"?")+L.toString();return fetch(h).then(m=>m.text())})(d,e,p);c({type:kt,payload:j}),c(X(g.sort()))}var _,b;c(K())})}catch(l){console.error("Could not load the location finder geoJSON",l)}c(K())},Ve={geojson:null,teasers:null,isLoading:!1,currentlyVisibleFeatures:[]},Ct="SET_SEARCH_LOADING_START",Mt="SET_SEARCH_LOADING_END",Je={isLoading:!1},qe={hasPagination:!1,currentPage:1},Tt="SET_POPUP_LOADING_START",St="SET_POPUP_LOADING_END",At="RESET_POPUP_FEATURE",It="SET_POPUP_FEATURE",Ot="SET_POPUP_COORDINATES",zt="RESET_POPUP_COORDINATES",Ze=(t,e)=>async o=>{o({type:Tt});try{const n=new URLSearchParams({ids:t}),i=e+(e.match(/[?]/g)?"&":"?")+n.toString();o((r=>({type:It,payload:r}))(await fetch(i).then(r=>r.text())))}catch(n){console.error("Could not get popup content",n)}o({type:St})},Ke={feature:null,coordinates:null,isLoading:!1},Xe=Bt({features:function(t=Ne,e){switch(e.type){case _t:return{...t,highlightedFeature:null};case mt:return{...t,highlightedFeature:e.payload}}return t},locator:function(t=Be,e){switch(e.type){case gt:return{...t,isLoading:!0};case ft:return{...t,isLoading:!1}}return t},data:function(t=Ve,e){switch(e.type){case xt:return{...t,geojson:e.payload};case kt:return{...t,teasers:e.payload};case Et:return{...t,isLoading:!0};case Lt:return{...t,isLoading:!1};case Pt:return{...t,currentlyVisibleFeatures:e.payload}}return t},search:function(t=Je,e){switch(e.type){case Ct:return{...t,isLoading:!0};case Mt:return{...t,isLoading:!1}}return t},pagination:function(t=qe,e){switch(e.type){case bt:return{...t,currentPage:1};case vt:{const o=t.currentPage===1?1:t.currentPage-1;return{...t,currentPage:o}}case yt:{const o=t.currentPage+1;return{...t,currentPage:o}}case jt:return{...t,hasPagination:!0};case wt:return{...t,hasPagination:!1}}return t},popup:function(t=Ke,e){switch(e.type){case Tt:return{...t,isLoading:!0};case St:return{...t,isLoading:!1};case At:return{...t,feature:null};case It:return{...t,feature:e.payload};case Ot:return{...t,coordinates:e.payload};case zt:return{...t,coordinates:null}}return t}}),Rt=function(){const t=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):Nt)(Ht(Me.withExtraArgument({})));return Gt(Xe,t)}();function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Y;customElements.define("toujou-location-finder-teaser",class extends st{constructor(){super(),this.isHighlightedAttribute="is-highlighted",this.teaserLinkSelector=".teaser",this.onStateChange=this.onStateChange.bind(this),this._featureUid=this.getAttribute("feature-uid"),this._teaserLinkEl=this.querySelector(this.teaserLinkSelector),this.store=Rt,this.store.subscribe(this.onStateChange),this._state=this.store.getState()}render(){return P`<slot id="slot"></slot>`}set _highlightedFeature(t){t==this._featureUid?this._teaserLinkEl.setAttribute(this.isHighlightedAttribute,""):this._teaserLinkEl.removeAttribute(this.isHighlightedAttribute)}onStateChange(){this._state=this.store.getState(),this._highlightedFeature=this._state.features.highlightedFeature}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave)}_onMouseEnter(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-enter",{composed:!0,detail:{featureUid:this.getAttribute("feature-uid")}}))}_onMouseLeave(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-leave",{composed:!0}))}});var W,Q,tt,Ye=I(Y||(Y=O([`* {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

:host {
    display: var(--toujou-location-finder-host-display, grid);
    grid-template-columns: var(--toujou-location-finder-host-grid-template-columns, 1fr);
    grid-gap: var(--toujou-location-finder-host-grid-gap, 1rem);
    position: var(--toujou-location-finder-host-position, relative);
}

.location-finder__map {
    height: var(--toujou-location-finder-map-height, auto);
    max-height: var(--toujou-location-finder-map-max-height, 50vh);
    grid-row: var(--toujou-location-finder-map-grid-row, 2);
}

.sidebar__ui-button {
    display: var(--toujou-location-finder-search-ui-button-display, block);
    height: var(--toujou-location-finder-search-ui-button-height, var(--toujou-location-finder-search-height));
    width: var(--toujou-location-finder-search-ui-button-width, var(--toujou-location-finder-search-height));
    border-radius: var(--toujou-location-finder-search-border-radius, .25rem);
    background-color: var(--toujou-location-finder-sidebar-buttons-bg, var(--bg-color));
    position: var(--toujou-location-finder-sidebar-buttons-position, absolute);
    border: var(--toujou-location-finder-sidebar-buttons-border, none);
    outline: var(--toujou-location-finder-sidebar-buttons-outline, none);
    -webkit-box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
            box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
    cursor: var(--toujou-location-finder-sidebar-buttons-cursor, pointer);
}

.sidebar__ui-button:after {
    content: '';
    height: var(--toujou-location-finder-sidebar-io-button-after-height, 1rem);
    width: var(--toujou-location-finder-sidebar-io-button-after-width, 1rem);
    background-color: var(--toujou-location-finder-sidebar-io-button-after-background-color, var(--font-color));
    -webkit-mask-size: var(--toujou-location-finder-sidebar-io-button-after-mask-size, contain);
    mask-size: var(--toujou-location-finder-sidebar-io-button-after-mask-size, contain);
    -webkit-mask-position: var(--toujou-location-finder-sidebar-io-button-after-mask-position, center);
    mask-position: var(--toujou-location-finder-sidebar-io-button-after-mask-position, center);
    -webkit-mask-repeat: var(--toujou-location-finder-sidebar-io-button-after-mask-repeat, no-repeat);
    mask-repeat: var(--toujou-location-finder-sidebar-io-button-after-mask-repeat, no-repeat);
    position: var(--toujou-location-finder-sidebar-io-button-after-position, absolute);
    top: var(--toujou-location-finder-sidebar-io-button-after-top, 50%);
    left: var(--toujou-location-finder-sidebar-io-button-after-left, 50%);
    opacity: var(--toujou-location-finder-sidebar-io-button-after-opacity, .5);
}

.sidebar__ui-button--locator {
    top: var(--toujou-location-finder-locator-top, calc(var(--toujou-location-finder-search-height) + 1rem + var(--toujou-location-finder-padding)));
    left: var(--toujou-location-finder-locator-left, var(--toujou-location-finder-padding));
    -webkit-transition: var(--toujou-location-finder-locator-transform, transform var(--toujou-location-finder-transition-settings));
    transition: var(--toujou-location-finder-locator-transform, transform var(--toujou-location-finder-transition-settings));
}

.sidebar__ui-button--locator:after {
    height: var(--toujou-location-finder-sidebar-locator-icon-height, 1.5rem);
    width: var(--toujou-location-finder-sidebar-locator-icon-width, 1.5rem);
    -webkit-mask-image: var(--toujou-location-finder-sidebar-locator-icon-image, var(--toujou-location-finder-icon-target));
    mask-image: var(--toujou-location-finder-sidebar-locator-icon-image, var(--toujou-location-finder-icon-target));
    -webkit-transform: var(--toujou-location-finder-sidebar-locator-icon-transform, translate(-50%, -50%));
            transform: var(--toujou-location-finder-sidebar-locator-icon-transform, translate(-50%, -50%));
    -webkit-transition: var(--toujou-location-finder-sidebar-locator-icon-transition, transform .25s ease-in-out);
    transition: var(--toujou-location-finder-sidebar-locator-icon-transition, transform .25s ease-in-out);
}

.sidebar__ui-button--locator[locatorisloading]:after {
    height: var(--toujou-location-finder-sidebar-locator-loader-height, 1rem);
    width: var(--toujou-location-finder-sidebar-locator-loader-width, 1rem);
    mask-image: var(--toujou-location-finder-sidebar-locator-loader-image, none);
    -webkit-mask-image: var(--toujou-location-finder-sidebar-locator-loader-image, none);
    border-radius: var(--toujou-location-finder-sidebar-locator-loader-border-radius, 50%);
    border: var(--toujou-location-finder-sidebar-locator-loader-border, 3px solid transparent);
    border-top-color: var(--toujou-location-finder-sidebar-locator-loader-border-top-color, var(--primary-color));
    -webkit-animation: var(--toujou-location-finder-sidebar-locator-loader-animation, locatorLoadingAnimation 1s linear infinite);
            animation: var(--toujou-location-finder-sidebar-locator-loader-animation, locatorLoadingAnimation 1s linear infinite);
    opacity: var(--toujou-location-finder-sidebar-locator-loader-opacity, 1);
    background-color: var(--toujou-location-finder-sidebar-locator-loader-background-color, transparent);
}

@-webkit-keyframes locatorLoadingAnimation {
    0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
    100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes locatorLoadingAnimation {
    0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); }
    100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); }
}

@media (hover: hover) {
    .sidebar__ui-button:hover:after {
        opacity: 1;
    }
    .sidebar__ui-button--locator[locatorisloading] {
        pointer-events: none;
    }
}

/* SIDEBAR PANEL */

.sidebar__panel {
    position: var(--toujou-location-finder-panel-position, relative);
    background-color: var(--toujou-location-finder-panel-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-panel-width, 100%);
    border-radius: var(--toujou-location-finder-panel-border-radius, var(--toujou-location-finder-radius));
    -webkit-box-shadow: var(--toujou-location-finder-panel-shadow, var(--toujou-location-finder-shadow));
            box-shadow: var(--toujou-location-finder-panel-shadow, var(--toujou-location-finder-shadow));
    display: var(--toujou-location-finder-panel-display, flex);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: var(--toujou-location-finder-panel-flex-direction, column);
            flex-direction: var(--toujou-location-finder-panel-flex-direction, column);
    overflow: var(--toujou-location-finder-panel-overflow, hidden);
    z-index: var(--toujou-location-finder-panel-z-index, 1);
    padding: var(--toujou-location-finder-panel-padding, 0);
}

/* TEASERS */

.teasers {
    background-color: var(--toujou-location-finder-teasers-bg-color, var(--bg-color));
    position: var(--toujou-location-finder-teasers-position, relative);
    width: var(--toujou-location-finder-teasers-width, 100%);
}

:host([hasPagination]) .teasers {
    padding-bottom: var(--toujou-location-finder-teasers-no-pagination-padding-bottom, 0);
}

/* LOADING BAR */

.loading-bar {
    height: var(--toujou-location-finder-loading-bar-height, 4px);
    width: var(--toujou-location-finder-loading-bar-width, 100%);
    position: var(--toujou-location-finder-loading-bar-position, absolute);
    top: calc(var(--toujou-location-finder-search-height) + 1rem );
    left: var(--toujou-location-finder-loading-bar-left, 0);
    background-color: var(--toujou-location-finder-loading-bar-bg-color, var(--font-color--light));
    z-index: var(--toujou-location-finder-loading-bar-z-index, 1);
    pointer-events: var(--toujou-location-finder-loading-bar-pointer-events, none);
    opacity: 0;
}

:host([isLoading]) .loading-bar {
    opacity: var(--toujou-location-finder-loading-bar-opacity, .875);
}

.loading-bar:after {
    content: '';
    display: block;
    height: var(--toujou-location-finder-loading-bar-height);
    background-color: var(--toujou-location-finder-loading-bar-mover-color, var(--primary-color));
    position: var(--toujou-location-finder-loading-bar-after-position, absolute);
    top: var(--toujou-location-finder-loading-bar-top, 0);
    left: var(--toujou-location-finder-loading-bar-left, 0);
    right: var(--toujou-location-finder-loading-bar-right, 100%);
    -webkit-animation-name: var(--toujou-location-finder-loading-bar-animation-name, loadingBarAnimation);
            animation-name: var(--toujou-location-finder-loading-bar-animation-name, loadingBarAnimation);
    -webkit-animation-duration: var(--toujou-location-finder-loading-bar-animation-duration, 1.5s);
            animation-duration: var(--toujou-location-finder-loading-bar-animation-duration, 1.5s);
    -webkit-animation-timing-function: var(--toujou-location-finder-loading-bar-animation-easing, linear);
            animation-timing-function: var(--toujou-location-finder-loading-bar-animation-easing, linear);
    -webkit-animation-iteration-count: var(--toujou-location-finder-loading-bar-animation-iteration-count, infinite);
            animation-iteration-count: var(--toujou-location-finder-loading-bar-animation-iteration-count, infinite);
}

@-webkit-keyframes loadingBarAnimation {
    0% {
        left: 0;
        right: 100%;
    }
    35%, 50% {
        left: 0;
        right: 0;
    }
    85%, 100% {
        left: 100%;
        right: 0;
    }
}

@keyframes loadingBarAnimation {
    0% {
        left: 0;
        right: 100%;
    }
    35%, 50% {
        left: 0;
        right: 0;
    }
    85%, 100% {
        left: 100%;
        right: 0;
    }
}

/* PAGINATION */

.pagination {
    width: var(--toujou-location-finder-pagination-width, var(--toujou-location-finder-sidebar-width));
    height: var(--toujou-location-finder-pagination-height, var(--toujou-location-finder-search-height));
    display: var(--toujou-location-finder-pagination-display, flex);
    -webkit-box-align: var(--toujou-location-finder-pagination-align-items, center);
        -ms-flex-align: var(--toujou-location-finder-pagination-align-items, center);
            align-items: var(--toujou-location-finder-pagination-align-items, center);
    -webkit-box-pack: var(--toujou-location-finder-pagination-justify-content, space-between);
        -ms-flex-pack: var(--toujou-location-finder-pagination-justify-content, space-between);
            justify-content: var(--toujou-location-finder-pagination-justify-content, space-between);
    background-color: var(--toujou-location-finder-pagination-bg-color, var(--bg-color));
    padding: var(--toujou-location-finder-pagination-padding, 0 calc(var(--toujou-location-finder-padding) / 4));
    border-top: var(--toujou-location-finder-pagination-border-top, 1px solid var(--font-color--light));
}

.pagination__button {
    border: var(--toujou-location-finder-pagination-button-border, none);
    outline: var(--toujou-location-finder-pagination-button-outline, none);
    height: var(--toujou-location-finder-pagination-button-height, 1.5rem);
    width: var(--toujou-location-finder-pagination-button-width, 1.5rem);
    background-color: var(--toujou-location-finder-pagination-button-bg-color, var(--font-color));
    mask-position: var(--toujou-location-finder-pagination-button-mask-position, center);
    -webkit-mask-position: var(--toujou-location-finder-pagination-button-mask-position, center);
    mask-repeat: var(--toujou-location-finder-pagination-button--mask-repeat, no-repeat);
    -webkit-mask-repeat: var(--toujou-location-finder-pagination-button--mask-repeat, no-repeat);
    mask-size: var(--toujou-location-finder-pagination-button-mask-size, contain);
    -webkit-mask-size: var(--toujou-location-finder-pagination-button-mask-size, contain);
    mask-image: var(--toujou-location-finder-pagination-button-image, var(--medatsu-icon-chevron-down));
    -webkit-mask-image: var(--toujou-location-finder-pagination-button-image, var(--medatsu-icon-chevron-down));
    opacity: var(--toujou-location-finder-pagination-button-opacity, .5);
    cursor: var(--toujou-location-finder-pagination-button-cursor, pointer);
}

.pagination__button[disabled] {
    pointer-events: none;
    opacity: 0;
}

.pagination__button--prev {
    -webkit-transform: var(--toujou-location-finder-pagination-button-prev-transform, rotate(90deg));
            transform: var(--toujou-location-finder-pagination-button-prev-transform, rotate(90deg));
}

.pagination__button--next {
    -webkit-transform: var(--toujou-location-finder-pagination-button-next-transform, rotate(-90deg));
            transform: var(--toujou-location-finder-pagination-button-next-transform, rotate(-90deg));
}

.pagination__text {
    font-size: var(--toujou-location-finder-pagination-text-size, .875rem);
}

@media (hover: hover) {
    .pagination__button:hover {
        background-color: var(--toujou-location-finder-pagination-button-bg-color-hover, var(--primary-color));
        opacity: var(--toujou-location-finder-pagination-button-opacity-hover, 1);
    }
}

@media screen and (min-width: 840px) {
    :host {
        display: block;
    }

    .loading-bar {
        top: 0;
    }

    .location-finder__map {
        max-height: var(--toujou-location-finder-map-max-height, 75vh);
    }

    .sidebar__ui-button--locator {
        left: var(--toujou-location-finder-locator-left, calc(var(--toujou-location-finder-sidebar-width) + calc(var(--toujou-location-finder-padding) * 2) ));
        top: var(--toujou-location-finder-locator-top, var(--toujou-location-finder-padding));
    }

    .sidebar__panel {
        position: var(--toujou-location-finder-panel-position, absolute);
        width: var(--toujou-location-finder-panel-width, var(--toujou-location-finder-sidebar-width));
        top: var(--toujou-location-finder-panel-top, calc(var(--toujou-location-finder-padding) + var(--toujou-location-finder-search-height) + 2px));
        left: var(--toujou-location-finder-panel-left, var(--toujou-location-finder-padding));
        -webkit-transform: var(--toujou-location-finder-panel-transform, translateX(0));
                transform: var(--toujou-location-finder-panel-transform, translateX(0));
        -webkit-transition: var(--toujou-location-finder-panel-transition, transform var(--toujou-location-finder-transition-settings));
        transition: var(--toujou-location-finder-panel-transition, transform var(--toujou-location-finder-transition-settings));
        height: var(--toujou-location-finder-panel-height, calc(100% - calc(var(--toujou-location-finder-padding) * 3) - calc(var(--toujou-location-finder-search-height)) - 1.5rem));
    }

    .teasers {
        width: var(--toujou-location-finder-teasers-width, var(--toujou-location-finder-sidebar-width));
        max-height: var(--toujou-location-finder-teasers-max-height, calc(var(--toujou-location-finder-map-height) - (var(--toujou-location-finder-padding) * 3) - var(--toujou-location-finder-search-height)));
        overflow: var(--toujou-location-finder-teasers--overflow, auto);
        padding: var(--toujou-location-finder-teasers-padding, calc(var(--toujou-location-finder-padding) / 4) 0);
    }
}
`]))),We=I(W||(W=O([`/* TEASER */
.teaser {
    --toujou-location-finder-teaser-border-bottom: 1px solid var(--font-color--light);

    padding: var(--toujou-location-finder-teaser--padding, .5rem);
    display: var(--toujou-location-finder-teaser-display, grid);
    grid-template-columns: var(--toujou-location-finder-teaser-grid-columns, 1fr var(--toujou-location-finder-image-size));
    grid-gap: var(--toujou-location-finder-teaser-gap, .5rem);
    -webkit-text-decoration: var(--toujou-location-finder-teaser-text-decoration, none);
            text-decoration: var(--toujou-location-finder-teaser-text-decoration, none);
}
toujou-location-finder-teaser:not(:last-child) .teaser {
    border-bottom: var(--toujou-location-finder-teaser-not-last-child-teaser-border-bottom, var(--toujou-location-finder-teaser-border-bottom));
}
.teaser[teaserhasnoimage] {
    grid-template-columns: var(--toujou-location-finder-teaser-no-image-grid-template-columns, var(--toujou-location-finder-teaser-grid-columns-no-image, 1fr));
}
.teaser:not(:last-child) {
    border-bottom: var(--toujou-location-finder-teaser-last-child-border-bottom, var(--toujou-location-finder-teaser-separator));
}
.teaser__image,
.teaser__logo-container {
    min-height: var(--toujou-location-finder-image-size, 80px);
    height: var(--toujou-location-finder-image-size, 80px);
    width: var(--toujou-location-finder-image-size, 80px);
    -o-object-fit: var(--toujou-location-finder-image-object-fit, cover);
       object-fit: var(--toujou-location-finder-image-object-fit, cover);
    border-radius: var(--toujou-location-finder-teaser-image-radius, 2px);
}
.teaser__image--logo {
    -o-object-fit: var(--toujou-location-finder-logo-object-fit, contain);
       object-fit: var(--toujou-location-finder-logo-object-fit, contain);
}
.teaser__title {
    display: var(--toujou-location-finder-title-display, grid);
    grid-template-columns: var(--toujou-location-finder-title-grid-template-columns, auto 1fr);
    margin-bottom: var(--toujou-location-finder-title-margin-bottom, 0);
}
.teaser__name {
    font-weight: var(--toujou-location-finder-teaser-name-font-weight, var(--paragraph__bold));
    font-size: var(--toujou-location-finder-teaser-name-font-size, 1.25rem);
    font-family: var(--toujou-location-finder-teaser-name-font-family, var(--headline__family));
    margin-top: var(--toujou-location-finder-teaser-name-margin-top, 0);
    margin-bottom: var(--toujou-location-finder-teaser-name-margin-bottom, 0);
    color: var(--toujou-location-finder-teaser-name-color, var(--primary-color));
    display: var(--toujou-location-finder-teaser-name-display, block);
}
.teaser__branch {
    font-size: var(--toujou-location-finder-teaser-branch-font-size, 1rem);
    display: var(--toujou-location-finder-teaser-branch-display, block);
    font-weight:var(--toujou-location-finder-teaser-branch-font-weight,  var(--paragraph__normal));
    font-family: var(--toujou-location-finder-teaser-branch-font-family, var(--paragraph__family));
    margin-top: var(--toujou-location-finder-teaser-branch-margin-top, .125rem);
    color: var(--toujou-location-finder-teaser-branch-color, var(--font-color));
    opacity: var(--toujou-location-finder-teaser-branch-opacity, .75);
}
.teaser__type {
    font-family: var(--toujou-location-finder-teaser-name-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-type-font-size, .75rem);
    font-weight: var(--toujou-location-finder-teaser-type-font-weight, var(--paragraph__bold));
    text-transform: var(--toujou-location-finder-teaser-type-text-transform, uppercase);
    opacity: var(--toujou-location-finder-teaser-type-opacity, .5);
    margin: var(--toujou-location-finder-teaser-type-margin, .5rem 0 0);
    color: var(--toujou-location-finder-teaser-type-color, var(--font-color));
}
.teaser__description {
    font-family: var(--toujou-location-finder-teaser-description-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-description-font-size, .875rem);
    margin: var(--toujou-location-finder-teaser-description-margin, .5rem 0 0);
    overflow: var(--toujou-location-finder-teaser-description-overflow, hidden);
    text-overflow: var(--toujou-location-finder-teaser-description-text-overflow, ellipsis);
    white-space: var(--toujou-location-finder-teaser-description-white-space, initial);
    display: var(--toujou-location-finder-teaser-description-display, -webkit-box);
    -webkit-line-clamp: var(--toujou-location-finder-teaser-description-line-clamp, 2);
    -webkit-box-orient: var(--toujou-location-finder-teaser-description-box-orient, vertical);
    color: var(--toujou-location-finder-teaser-description-color, var(--font-color));
    line-height: var(--toujou-location-finder-teaser-description-line-height, 1.25);
}
.teaser__address {
    margin-bottom: var(--toujou-location-finder-teaser-address-margin-bottom, .25rem);
    margin-top: var(--toujou-location-finder-teaser-address-margin-top, .25rem);
}
.teaser__address-meta,
.teaser__time {
    display:  var(--toujou-location-finder-teaser-meta-display, inline-block);
    font-size: var(--toujou-location-finder-teaser-meta-font-size, .875rem);
    font-family:  var(--toujou-location-finder-teaser-meta-font-family, var(--paragraph__family));
    color: var(--toujou-location-finder-teaser-meta-color, var(--font-color));
    font-style:  var(--toujou-location-finder-teaser-meta-font-style, normal);
    opacity: var(--toujou-location-finder-teaser-meta-opacity, .75);
    line-height: var(--toujou-location-finder-teaser-meta-line-height, 1.2);
}
.teaser__times {
    font-family: var(--toujou-location-finder-teaser-times-font-family, var(--paragraph__family));
    font-size: var(--toujou-location-finder-teaser-times-font-size, 1rem);
    line-height:  var(--toujou-location-finder-teaser-times-line-height, 1);
}
.teaser__address-meta--country,
.teaser__address-meta--region {
    display:  var(--toujou-location-finder-teaser-meta-country-display, block);
}
.teaser__address-meta--telephone,
.teaser__address-meta--email,
.teaser__address-meta--description {
    display:  var(--toujou-location-finder-teaser-meta-phone-display, block);
    margin-top:  var(--toujou-location-finder-teaser-meta-phone-margin-top, .25rem);
}
.teaser > *:last-child {
    margin-bottom:  var(--toujou-location-finder-teaser-last-child-inside-margin-bottom, .25rem);
}
.teaser__day {
    display:  var(--toujou-location-finder-teaser-day-display, inline-block);
    width:  var(--toujou-location-finder-teaser-day-width, 75px);
}
toujou-location-finder-teaser[highlighted] .teaser {
    background-color: var(--toujou-location-finder-teaser-highlighted-bg-color, rgba(150, 150, 150, .1));
}
toujou-location-finder-teaser[highlighted] .teaser .teaser__title {
    color: var(--toujou-location-finder-teaser-highlighted-title-color, var(--primary-color));
}
@media (hover: hover) {
    .teaser:hover, .teaser[is-highlighted] {
        background-color: var(--toujou-location-finder-teaser-highlighted-bg-color);
    }

    :is(.teaser:hover, .teaser[is-highlighted]) .teaser__title {
        color: var(--toujou-location-finder-teaser-highlighted-title-color, var(--primary-color));
    }
}
`]))),Qe=I(Q||(Q=O([`/* POPUP */
.location-finder-popup {
    background-color: var(--toujou-location-finder-popup-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-popup-width, var(--toujou-location-finder-sidebar-width));
    max-width: var(--toujou-location-finder-popup-max-width, 100%);
    font-family: var(--paragraph__family);
    font-weight: var(--paragraph__normal);
    padding: var(--toujou-location-finder-popup-padding, .5rem);
    margin: var(--toujou-location-finder-popop-margin, 0);
}
.location-finder-popup .teaser {
    padding: var(--toujou-location-finder-popup-teaser-padding, 0);
}
.location-finder-popup .teaser[teaserhasnoimage] {
    padding: var(--toujou-location-finder-popop-teaser-no-image-padding, 0 .25rem);
}
.location-finder-popup .teaser__details {
    padding: var(--toujou-location-finder-popup-teaser-details-padding, .25rem 0);
}
`]))),to=I(tt||(tt=O([`/* Basics */
.maplibregl-ctrl-geocoder,
.maplibregl-ctrl-geocoder *,
.maplibregl-ctrl-geocoder *:after,
.maplibregl-ctrl-geocoder *:before {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.maplibregl-ctrl-geocoder {
  font-size: 18px;
  line-height: 24px;
  font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fff;
  width: 100%;
  min-width: 240px;
  z-index: 1;
  border-radius: 4px;
  -webkit-transition: width 0.25s, min-width 0.25s;
  transition: width 0.25s, min-width 0.25s;
}
.maplibregl-ctrl-geocoder--input {
  font: inherit;
  width: 100%;
  border: 0;
  background-color: transparent;
  margin: 0;
  height: 50px;
  color: #404040; /* fallback */
  color: rgba(0, 0, 0, 0.75);
  padding: 6px 45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.maplibregl-ctrl-geocoder--input::-ms-clear {
  display: none; /* hide input clear button in IE */
}
.maplibregl-ctrl-geocoder--input:focus {
  color: #404040; /* fallback */
  color: rgba(0, 0, 0, 0.75);
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: thin dotted;
}
.maplibregl-ctrl-geocoder .maplibregl-ctrl-geocoder--pin-right > * {
  z-index: 2;
  position: absolute;
  right: 8px;
  top: 7px;
  display: none;
}
.maplibregl-ctrl-geocoder,
.maplibregl-ctrl-geocoder .suggestions {
  -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
}
/* Collapsed */
.maplibregl-ctrl-geocoder.maplibregl-ctrl-geocoder--collapsed {
  width: 50px;
  min-width: 50px;
  -webkit-transition: width 0.25s, min-width 0.25s;
  transition: width 0.25s, min-width 0.25s;
}
/* Suggestions */
.maplibregl-ctrl-geocoder .suggestions {
  background-color: #fff;
  border-radius: 4px;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 110%; /* fallback */
  top: calc(100% + 6px);
  z-index: 1000;
  overflow: hidden;
  font-size: 15px;
}
.maplibregl-ctrl-bottom-left .suggestions,
.maplibregl-ctrl-bottom-right .suggestions {
  top: auto;
  bottom: 100%;
}
.maplibregl-ctrl-geocoder .suggestions > li > a {
  cursor: default;
  display: block;
  padding: 6px 12px;
  color: #404040;
}
.maplibregl-ctrl-geocoder .suggestions > .active > a,
.maplibregl-ctrl-geocoder .suggestions > li > a:hover {
  color: #404040;
  background-color: #f3f3f3;
  text-decoration: none;
  cursor: pointer;
}
.maplibregl-ctrl-geocoder--suggestion {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.maplibre-ctrl-geocoder--suggestion-icon {
  min-width: 30px;
  min-height: 24px;
  max-width: 30px;
  max-height: 24px;
  padding-right: 12px;
}
.maplibregl-ctrl-geocoder--suggestion-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.maplibregl-ctrl-geocoder--suggestion-match {
  font-weight: bold;
}
.maplibregl-ctrl-geocoder--suggestion-title,
.maplibregl-ctrl-geocoder--suggestion-address {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.maplibregl-ctrl-geocoder--result {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.maplibre-ctrl-geocoder--result-icon {
  min-width: 30px;
  min-height: 24px;
  max-width: 30px;
  max-height: 24px;
  padding-right: 12px;
}
.maplibregl-ctrl-geocoder--result-title {
  font-weight: bold;
}
.maplibregl-ctrl-geocoder--result-title,
.maplibregl-ctrl-geocoder--result-address {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/* Icons */
.maplibregl-ctrl-geocoder--icon {
  display: inline-block;
  vertical-align: middle;
  speak: none;
  fill: #757575;
  top: 15px;
}
.maplibregl-ctrl-geocoder--icon-search {
  position: absolute;
  top: 13px;
  left: 12px;
  width: 23px;
  height: 23px;
}
.maplibregl-ctrl-geocoder--button {
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: #fff;
  line-height: 1;
}
.maplibregl-ctrl-geocoder--icon-close {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-right: 3px;
}
.maplibregl-ctrl-geocoder--button:hover .maplibregl-ctrl-geocoder--icon-close {
  fill: #909090;
}
.maplibregl-ctrl-geocoder--icon-loading {
  width: 26px;
  height: 26px;
  margin-top: 5px;
  margin-right: 0px;
  -webkit-animation: rotate 0.8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation: rotate 0.8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
/* Animation */
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/* Media queries*/
@media screen and (min-width: 640px) {
  .maplibregl-ctrl-geocoder.maplibregl-ctrl-geocoder--collapsed {
    width: 36px;
    min-width: 36px;
  }

  .maplibregl-ctrl-geocoder {
    width: 33.3333%;
    font-size: 15px;
    line-height: 20px;
    max-width: 360px;
  }
  .maplibregl-ctrl-geocoder .suggestions {
    font-size: 13px;
  }

  .maplibregl-ctrl-geocoder--icon {
    top: 8px;
  }

  .maplibregl-ctrl-geocoder--icon-close {
    width: 16px;
    height: 16px;
    margin-top: 3px;
    margin-right: 0;
  }

  .maplibregl-ctrl-geocoder--icon-search {
    left: 7px;
    width: 20px;
    height: 20px;
  }

  .maplibregl-ctrl-geocoder--input {
    height: 36px;
    padding: 6px 35px;
  }

  .maplibregl-ctrl-geocoder--icon-loading {
    width: 26px;
    height: 26px;
    margin-top: -2px;
    margin-right: -5px;
  }

  .maplibre-gl-geocoder--error {
    color: #909090;
    padding: 6px 12px;
    font-size: 16px;
    text-align: center;
  }
}
.search {
    display: var(--toujou-location-finder-search-display, block);
    position: var(--toujou-location-finder-search-position, relative);
    background-color: var(--toujou-location-finder-search-bg-color, var(--bg-color));
    width: var(--toujou-location-finder-search-width, 100%);
    max-width: var(--toujou-location-finder-search-max-width, 100%);
    height: var(--toujou-location-finder-search-height, 2.5rem);
    border-radius: var(--toujou-location-finder-search-border-radius, .25rem);
    -webkit-box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
            box-shadow: var(--toujou-location-finder-search-shadow, 0 2px 4px rgba(150, 150, 150, .2));
    padding: var(--toujou-location-finder-search-padding, 0);
    border: var(--toujou-location-finder-search-border, none);
    outline: var(--toujou-location-finder-search-outline, none);
    -webkit-transform: var(--toujou-location-finder-search-transform, translateX(0));
            transform: var(--toujou-location-finder-search-transform, translateX(0));
    -webkit-transition: -webkit-transform var(--toujou-location-finder-transition-settings);
    transition: -webkit-transform var(--toujou-location-finder-transition-settings);
    transition: transform var(--toujou-location-finder-transition-settings);
    transition: transform var(--toujou-location-finder-transition-settings), -webkit-transform var(--toujou-location-finder-transition-settings);
    margin: var(--toujou-location-finder-search-margin, 0);
    z-index: var(--toujou-location-finder-search-z-index, 2);
    grid-row: var(--toujou-location-finder-search-grid-row, 1);
}
:host([ismobile][map-is-hidden]) {
    --toujou-location-finder-search-display: none;
}
/* GEOCODER */
.search .mapboxgl-ctrl-geocoder {
    min-height: var(--toujou-location-finder-search-geocoder-min-height, 100%);
    width: var(--toujou-location-finder-search-geocoder-width, 100%);
    max-width: var(--toujou-location-finder-search-geocoder-max-width, 100%);
    outline: var(--toujou-location-finder-search-outline, none);
    -webkit-box-shadow: var(--toujou-location-finder-search-geocoder-box-shadow, none);
            box-shadow: var(--toujou-location-finder-search-geocoder-box-shadow, none);
    font-family: var(--toujou-location-finder-search-geocoder-font-family, var(--paragraph__family));
    font-weight: var(--toujou-location-finder-search-geocoder-font-weight, var(--paragraph__normal));
    color: var(toujou-location-finder-search-input-color, var(--font-color));
    border: var(--toujou-location-finder-search-geocoder-border, 1px solid var(--font-color--light));
}
.search .mapboxgl-ctrl-geocoder--input {
    height: var(--toujou-location-finder-search-height, 2.5rem);
    background-color: var(--toujou-location-finder-search-bg-color, transparent);
    font-family: var(--toujou-location-finder-search-input-font-family, var(--paragraph__family));
    font-weight: var(--toujou-location-finder-search-input-font-weight, var(--headline__weight));
    border-radius: var(--toujou-location-finder-search-input-border-radius, 0);
    border: var(--toujou-location-finder-search-input-border, none);
    padding: var(--toujou-location-finder-search-input-padding, 6px 35px);
}
.search .mapboxgl-ctrl-geocoder--input:focus {
    outline: var(--toujou-location-finder-search-outline-focus, none);
}
.search .mapboxgl-ctrl-geocoder--icon-search {
    top: var(--toujou-location-finder-search-geocoder-icon-search-top, 50%);
    -webkit-transform: var(--toujou-location-finder-search-geocoder-icon-search-transform, translateY(-50%));
            transform: var(--toujou-location-finder-search-geocoder-icon-search-transform, translateY(-50%));
}
.search .mapboxgl-ctrl-geocoder--icon-search path {
    fill: var(--toujou-location-finder-search-search-icon-color, var(--font-color));
    opacity: var(--toujou-location-finder-search-close-icon-opacity, .5);
}
.search .mapboxgl-ctrl-geocoder--pin-right > * {
    top: var(--toujou-location-finder-search-geocoder-pin-right-top, 50%);
    -webkit-transform: var(--toujou-location-finder-search-geocoder-pin-right-transform, translateY(-50%));
            transform: var(--toujou-location-finder-search-geocoder-pin-right-transform, translateY(-50%));
}
.search .mapboxgl-ctrl-geocoder--icon-close {
    margin-top: var(--toujou-location-finder-search-geocoder-icon-close-margin-top, 0);
}
.search .mapboxgl-ctrl-geocoder--icon-close path {
    fill: var(--toujou-location-finder-search-close-icon-color, var(--font-color));
    opacity: var(--toujou-location-finder-search-close-icon-opacity, .5);
}
.search .mapboxgl-ctrl-geocoder--pin-right .mapboxgl-ctrl-geocoder--icon-loading {
    top: var(--toujou-location-finder-search-geocoder-icon-loading-top, 6px);
}
.search .mapboxgl-ctrl-geocoder--icon-loading path {
    fill: var(--toujou-location-finder-search-loading-icon-color, var(--primary-color));
}
@media (hover: hover) {
    .search .mapboxgl-ctrl-geocoder--icon-close:hover path {
        fill: var(--toujou-location-finder-search-close-icon-color, var(--font-color));
        opacity: var(--toujou-location-finder-search-close-icon-opacity-hover, 1);
    }
}
@media screen and (min-width: 840px) {
    .search {
        position: var(--toujou-location-finder-search-position, absolute);
        top: var(--toujou-location-finder-search-top, var(--toujou-location-finder-padding));
        left: var(--toujou-location-finder-search-left, var(--toujou-location-finder-padding));
        width: var(--toujou-location-finder-search-width, var(--toujou-location-finder-sidebar-width));
        max-width: var(--toujou-location-finder-search-max-width, var(--toujou-location-finder-sidebar-width));
    }

    .search .mapboxgl-ctrl-geocoder {
        border: var(--toujou-location-finder-search-geocoder--border, none);
    }
}
`])));const eo=ht(t=>t,t=>t.data.isLoading||t.locator.isLoading||t.search.isLoading||t.popup.isLoading),oo=ht(t=>t.data.geojson,t=>t.features.highlightedFeature,(t,e)=>t&&Object.prototype.hasOwnProperty.call(t,"features")?{...t,features:t.features.map(o=>({type:o.type,geometry:o.geometry,properties:{...o.properties,isHighlighted:e===o.properties.uid}}))}:t);class et extends st{static get is(){return"toujou-location-finder"}static get styles(){return[Ye,We,Qe,to]}static get properties(){return{isLoading:{type:Boolean,reflect:!0},reducedMotion:{type:Boolean,attribute:"reduced-motion"},_geoJsonData:{type:Object},_geoJsonPoints:{type:Object},_geoJsonPolygons:{type:Object},_geoJsonLines:{type:Object},_map:{type:Object},_teasersData:{type:String},hasPagination:{type:Boolean,reflect:!0},_currentPage:{type:Number},bounds:{type:Array},geoJsonUrl:{type:String},filterParams:{type:String},teaserUrl:{type:String},_popupFeature:{type:Object},_popupCoordinates:{type:Array},isMobile:{type:Boolean,reflect:!0},accessToken:{type:String,attribute:"access-token"},mapStyle:{type:String,attribute:"map-style"},maxZoom:{type:Number},fitBoundsMaxZoom:{type:Number,attribute:"fit-bounds-max-zoom"},minZoom:{type:Number},_hideMap:{type:Boolean,attribute:"map-is-hidden",reflect:!0},locatorButtonLabel:{type:String,attribute:"locator-button-label"}}}get _geoJsonEndpointFull(){return this._bounds=this._map.getBounds(),`${this.geoJsonUrl}?north=${this._bounds._ne.lat}&south=${this._bounds._sw.lat}&east=${this._bounds._ne.lng}&west=${this._bounds._sw.lng}${this.filterParams}`}render(){const e=this.querySelectorAll('[slot="layers"]').length>0;return P`
      <div class="loading-bar"></div>
      <toujou-map class="location-finder__map" @toujou-map-ready="${this._onToujouMapReady}"
                  .accessToken="${this.accessToken}" .mapStyle="${this.mapStyle}"
                  .minZoom="${this.minZoom}" .maxZoom="${this.maxZoom}" .fitBoundsMaxZoom="${this.fitBoundsMaxZoom}"
                  @toujou-map-layer-added="${this.onMapLayerAdded}"
                  @toujou-map-layer-removed="${this.onMapLayerRemoved}">
          ${e?P`<slot name="layers"></slot>`:this.renderLayers()}

          <toujou-map-geojson
            id="geoJsonSourcePolygons"
            ?cluster="${this._clusterRadius>0}"
            .clusterRadius="${this._clusterRadius}"
            .clusterMaxZoom="${this._clusterMaxZoom}"
            .sourceData='${this._geoJsonData}'
            source-id="geoJsonData">
          </toujou-map-geojson>

          ${this._popupFeature&&this._popupCoordinates?P`
            <toujou-map-popup .coordinates="${this._popupCoordinates}">
                ${this._renderPopupContent()}
            </toujou-map-popup>
          `:""}
      </toujou-map>

      <div class="geocoder-container search"></div>
      <button
        class="sidebar__ui-button sidebar__ui-button--locator"
        @click="${this._onLocatorClick}"
        ?locatorIsLoading="${this._locatorIsLoading}"
        aria-label="${this.locatorButtonLabel}"
      ></button>

      <slot name="location-finder-map-toggle" @click="${this._handleMapToggleClick}"></slot>

      <div class="sidebar__panel">
        ${this._teasersData?this._renderTeasers():""}
        ${this.hasPagination?this._renderPagination():""}
      </div>
    `}renderLayers(){const e={"fill-color":["case",["!=",["get","isHighlighted"],!0],this._mapPolygonColor,this._mapPolygonColorHover],"fill-opacity":.5},o={"circle-color":["case",["!=",["get","isHighlighted"],!0],this._mapPointColor,this._mapPointColorHover],"circle-radius":6,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"},n={"line-color":["case",["!=",["get","isHighlighted"],!0],this._mapLineColor,this._mapLineColorHover],"line-opacity":1,"line-width":3};return P`
        <!-- POLYGONS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_polygons"
          source="geoJsonData"
          type="fill"
          .paint='${e}'
          filter='["==", "$type", "Polygon"]'
        ></toujou-map-layer>

        <!-- POINTS LAYER -->
        <toujou-map-layer
          layer-id="geoJson_points"
          source="geoJsonData"
          type="circle"
          .paint='${o}'
          filter='["==", "$type", "Point"]'
        ></toujou-map-layer>

      <!-- LINES LAYER -->
      <toujou-map-layer
        layer-id="geoJson_lines"
        source="geoJsonData"
        type="line"
        layout='{
          "line-join": "round",
          "line-cap": "round"
        }'
        .paint='${n}'
        filter='["==", "$type", "LineString"]'
      ></toujou-map-layer>

      <toujou-map-layer
        layer-id="clusters"
        source="geoJsonData"
        type="circle"
        filter='["has", "point_count"]'
        paint='{
          "circle-radius": [ "step", ["get", "point_count"], 12, 3, 16, 5, 20, 10, 25, 25, 30 ],
          "circle-color": "${this._clusterBgColor}",
          "circle-stroke-width": ${this._clusterBorderWidth},
          "circle-stroke-color": "${this._clusterBorderColor}"
        }'
      ></toujou-map-layer>
      <toujou-map-layer
        layer-id="cluster-count"
        source="geoJsonData"
        type="symbol"
        filter='["has", "point_count"]'
        layout='{ "text-field": "{point_count_abbreviated}", "text-size": ${this._clusterTextSize} }'
        paint='{ "text-color": "${this._clusterTextColor}" }'
      ></toujou-map-layer>`}constructor(){super(),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this.hasPagination=!1,this.bounds=[],this.accessToken=null,this.reducedMotion=!1,this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this._locatorIsLoading=!1,this._mql=null,this._layers=[],this.onStateChange=this.onStateChange.bind(this),this._onLocatorSuccess=this._onLocatorSuccess.bind(this),this._onLocatorError=this._onLocatorError.bind(this),this._onMapFeatureHoverEnter=this._onMapFeatureHoverEnter.bind(this),this._onMapFeatureHoverLeave=this._onMapFeatureHoverLeave.bind(this),this._onMapFeatureClick=this._onMapFeatureClick.bind(this),this._onMapClick=this._onMapClick.bind(this),this._onMapMoveEnd=this._onMapMoveEnd.bind(this),this._initGeocoder=this._initGeocoder.bind(this),this.geoJsonUrl="",this.filterParams="",this.teaserUrl="",this._geoJsonData=null,this._teasersData=null,this._bounds={},this._popupFeature=null,this._popupCoordinates=null,this._maxTeasersPerPage=20,this._currentPage=1,this.hasPagination=!1,this.bounds=[],this._locatorIsLoading=!1,this.accessToken=null,this._mql=null,this._hideMap=!1,this._deviceCanHover=window.matchMedia("(hover: hover)").matches,this._layers=[],this.locatorButtonLabel="Find my location",this.store=Rt,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.reducedMotion=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.addEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser),this._getCustomProperties()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toujou-location-finder-teaser-mouse-enter",this._onMouseEnterTeaser),this.removeEventListener("toujou-location-finder-teaser-mouse-leave",this._onMouseLeaveTeaser)}updated(e){super.updated(e),e.has("_map")&&this._init(),e.has("_currentPage")&&this._map&&this._fetchData(),e.has("filterParams")&&this._map&&this._fetchData()}onStateChange(){this._state=this.store.getState(),this.isLoading=eo(this._state),this._geoJsonData=oo(this._state),this._teasersData=this._state.data.teasers,this._currentlyVisibleFeaturesUids=this._state.data.currentlyVisibleFeatures,this.hasPagination=this._state.pagination.hasPagination,this._currentPage=this._state.pagination.currentPage,this._popupFeature=this._state.popup.feature,this._popupCoordinates=this._state.popup.coordinates,this._locatorIsLoading=this._state.locator.isLoading}async _init(){this._map&&this._fetchData()}_setHighlightedFeatureID(e){this.store.dispatch((o=>({type:mt,payload:o}))(e))}_resetHighlightedFeatureID(){this.store.dispatch({type:_t})}_setLocatorLoadingStatus(e){this.store.dispatch(e?{type:gt}:{type:ft})}_onToujouMapReady(e){this._map=e.detail,this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop),this.bounds&&this._map.fitBounds(this.bounds,{animate:!this.reducedMotion}),this._initGeocoder(),this._initFullscreenControl(),this._map.on("moveend",this._onMapMoveEnd),this.dispatchEvent(new CustomEvent("toujou-location-finder-ready",{bubbles:!0,composed:!0,detail:this}))}onMapLayerAdded(e){const o=e.detail.id;this._layers.push(o),this._map.on("mouseover",o,this._onMapFeatureHoverEnter),this._map.on("mouseleave",o,this._onMapFeatureHoverLeave),this._map.on("click",o,this._onMapFeatureClick),this._map.on("click",this._onMapClick)}onMapLayerRemoved(e){const o=e.detail.id;this._layers=this._layers.filter(n=>n!==o),this._map.off("mouseover",o,this._onMapFeatureHoverEnter),this._map.off("mouseleave",o,this._onMapFeatureHoverLeave),this._map.off("click",o,this._onMapFeatureClick),this._map.off("click",this._onMapClick)}_onMouseEnterTeaser(e){this._setHighlightedFeatureID(+e.detail.featureUid)}_onMouseLeaveTeaser(){this._resetHighlightedFeatureID()}_onLocatorClick(){this._setLocatorLoadingStatus(!0),this._geocoder.clear(),this._geocoder._inputEl.blur(),navigator.geolocation?navigator.geolocation.getCurrentPosition(this._onLocatorSuccess,this._onLocatorError):console.error("Cannot get your location because Geolocation is not supported by your browser")}_onLocatorSuccess(e){const{latitude:o,longitude:n}=e.coords;this._map.flyTo({center:[n,o]}),this._setLocatorLoadingStatus(!1)}_onLocatorError(e){console.error("Could not get your location",e),this._setLocatorLoadingStatus(!1)}_onMapFeatureHoverEnter(e){this._deviceCanHover&&(this._map.getCanvas().style.cursor="pointer",this._setHighlightedFeatureID(e.features[0].properties.uid))}_onMapFeatureClick(e){e.features[0].properties.uid&&this._showPopup(e)}_onMapClick(){this._popupFeature&&(this.store.dispatch({type:At}),this.store.dispatch({type:zt}))}_onMapFeatureHoverLeave(){this._deviceCanHover&&(this._map.getCanvas().style.cursor="grab",this._resetHighlightedFeatureID())}_onMapMoveEnd(){this.store.dispatch({type:bt}),this._fetchData()}_onPaginationButtonClick(e){const o=e.currentTarget.getAttribute("paginationAction");o==="prev"&&this.store.dispatch({type:vt}),o==="next"&&this.store.dispatch({type:yt})}_showPopup(e){const o=e.features[0].geometry.type==="Point"?e.features[0].geometry.coordinates:e.lngLat;this.store.dispatch(Ze(e.features[0].properties.uid,this.teaserUrl)),o&&this.store.dispatch({type:Ot,payload:o})}_getCustomProperties(){const e=window.getComputedStyle(document.body);this._mapPointColor=e.getPropertyValue("--toujou-location-finder-map-point-color"),this._mapPointColorHover=e.getPropertyValue("--toujou-location-finder-map-point-color-hover"),this._mapPolygonColor=e.getPropertyValue("--toujou-location-finder-map-polygon-color"),this._mapPolygonColorHover=e.getPropertyValue("--toujou-location-finder-map-polygon-color-hover"),this._mapLineColor=e.getPropertyValue("--toujou-location-finder-map-line-color"),this._mapLineColorHover=e.getPropertyValue("--toujou-location-finder-map-line-color-hover"),this._breakpoint=e.getPropertyValue("--toujou-location-finder-breakpoint"),this._clusterBgColor=e.getPropertyValue("--toujou-location-finder-cluster-background-color"),this._clusterBorderWidth=e.getPropertyValue("--toujou-location-finder-cluster-border-width"),this._clusterBorderColor=e.getPropertyValue("--toujou-location-finder-cluster-border-color"),this._clusterTextColor=e.getPropertyValue("--toujou-location-finder-cluster-text-color"),this._clusterTextSize=e.getPropertyValue("--toujou-location-finder-cluster-text-size"),this._clusterRadius=parseInt(e.getPropertyValue("--toujou-location-finder-cluster-radius"),10),this._clusterMaxZoom=e.getPropertyValue("--toujou-location-finder-cluster-max-zoom"),this._mapPaddingMobile={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-top"),10),bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-bottom"),10),left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-left"),10),right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-mobile-right"),10)},this._mapPaddingDesktop={top:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-top"),10),bottom:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-bottom"),10),left:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-left"),10),right:parseInt(e.getPropertyValue("--toujou-location-finder-map-padding-desktop-right"),10)},this._initMatchMedia()}_fetchData(){this.store.dispatch(Ue(this._geoJsonEndpointFull,this.teaserUrl,this._map,this._layers,this._currentlyVisibleFeaturesUids,this._maxTeasersPerPage))}_renderTeasers(){return P`
        <div class="teasers">
          ${q(this._teasersData)}
        </div>
    `}_renderPagination(){return P`
      <div class="pagination">
        <button class="pagination__button pagination__button--prev"
                paginationAction="prev"
                @click="${this._onPaginationButtonClick}"
                ?disabled="${this._currentPage===1}">
        </button>
        <div class="pagination__text">${(this._currentPage-1)*this._maxTeasersPerPage+1} - ${this._currentPage*this._maxTeasersPerPage}</div>
        <button class="pagination__button pagination__button--next"
                paginationAction="next"
                @click="${this._onPaginationButtonClick}"
                ?disabled="${this._currentlyVisibleFeaturesUids.length/this._currentPage<=this._maxTeasersPerPage}"></button>
      </div>
    `}_renderPopupContent(){return P`
        <div class="location-finder-popup">
          ${q(this._popupFeature)}
        </div>
    `}_initGeocoder(){const e={forwardGeocode:async n=>{let i=[];try{const r=`https://nominatim.openstreetmap.org/search?q=${n.query}&format=geojson&polygon_geojson=1&addressdetails=1`;i=(await(await fetch(r)).json()).features.map(a=>{const s=[a.bbox[0]+(a.bbox[2]-a.bbox[0])/2,a.bbox[1]+(a.bbox[3]-a.bbox[1])/2];return{type:"Feature",geometry:{type:"Point",coordinates:s},place_name:a.properties.display_name,properties:a.properties,text:a.properties.display_name,place_type:["place"],bbox:a.bbox,center:s}})}catch(r){console.error(`Failed to forwardGeocode with error: ${r}`)}return{features:i}}};this._geocoder=new Ce(e,{maplibregl:H,showResultsWhileTyping:!0,showResultMarkers:!1,marker:!1}),this.shadowRoot.querySelector(".geocoder-container").appendChild(this._geocoder.onAdd(this._map)),this._geocoder.on("loading",()=>{this.store.dispatch({type:Ct})}),this._geocoder.on("results",()=>{this.store.dispatch({type:Mt})});const o=document.documentElement.lang==="en"?"Search location":"Standort suchen";this._geocoder.setPlaceholder(o)}_initFullscreenControl(){this._map.addControl(new H.FullscreenControl({container:this}))}_initMatchMedia(){this._mql=window.matchMedia(`(max-width: ${this._breakpoint})`),this.isMobile=this._mql.matches,this._mql.addListener(e=>{this.isMobile=e.matches,this._updateMapPadding()})}_updateMapPadding(){this._map&&this._map.setPadding(this.isMobile?this._mapPaddingMobile:this._mapPaddingDesktop)}_handleMapToggleClick(){this._hideMap=!this._hideMap}}customElements.define(et.is,et);var ot=Ut();const no="http://localhost:6006/placesgeo.json?north=84.2232850212464&south=-84.22328502124657&east=77.93528615908156&west=-77.93528615908366&pagetypes=34&pages=1000435&recursive=2&hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52",io={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["8.666475","50.107672"]},properties:{uid:9,name:"dkd Internet Service GmbH",search_boost:1,categories:[0],distance:195927.05143468693}},{type:"Feature",geometry:{type:"Point",coordinates:["8.56679","48.92848"]},properties:{uid:6,name:"G.K.M.B. GmbH",search_boost:1,categories:[0],distance:176281.53005033717}},{type:"Feature",geometry:{type:"Point",coordinates:["9.206144","48.676871"]},properties:{uid:5,name:"jweiland.net",search_boost:1,categories:[0],distance:229457.30072080903}},{type:"Feature",geometry:{type:"Point",coordinates:["8.383444","49.010315"]},properties:{uid:4,name:"punkt.de GmbH",search_boost:1,categories:[0],distance:161022.2575388874}}]},ro="http://localhost:6006/placesteaser.html?details=name,branch_code,telephone,logo&ids=9,6,6,6,5,4,4,4",ao='<toujou-location-finder-teaser feature-uid="28">    <a href="/partner/pluswerk/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">+Pluswerk                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 89 4132580-0</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/Images/Partner/_Pluswerk/pluswerk-logo-2022.svg" width="100" height="22" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="10">    <a href="/partner/da-kapo-communication-experts-gmbh/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">da kapo. Communication Experts GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 97075-0</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/f/8/csm_DK_Logo_Kreis_breit_2fcb5fdf7a.png" width="99" height="100" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="3">    <a href="/partner/dfau-gmbh/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">DFAU GmbH                                                      <span class="teaser__branch">TYPO3-Software</span>                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 23980-870</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/1/2/csm_DFAU_hoch_5381414e75.png" width="100" height="86" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="9">    <a href="/partner/dkd-internet-service-gmbh/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">dkd Internet Service GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 69 2475218-0</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/5/1/csm_1-1_dkd_logo_quer_9efe482da2.png" width="100" height="100" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="7">    <a href="/partner/elmografico-gmbh/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">Elmografico GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 40089900</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/9/4/csm_elmo-logo_de329c8a9f.png" width="100" height="100" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="6">    <a href="/partner/gkmb-gmbh/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">G.K.M.B. GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 7232 37 23 55</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/0/2/csm_gkmb_Logo_c4783b955c.png" width="100" height="75" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="21">    <a href="/partner/gigatec/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">Gigatec GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 495 2791-0</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/c/2/csm_GIGATEC_ea9c3ec783.png" width="100" height="21" alt="" />                    </figure>                            </a></toujou-location-finder-teaser><toujou-location-finder-teaser feature-uid="11">    <a href="/partner/goldwild/" target="" class="teaser"     teaserHasImage>        <div class="teaser__details">                            <h4 class="teaser__title">                    <span class="teaser__name">Goldwild GmbH                                             </span>                </h4>                                                                <address class="teaser__address">                                                                <span class="teaser__address-meta teaser__address-meta--telephone">Tel: +49 911 777087</span>                                                                            </address>                                            </div>                                        <figure class="teaser__logo-container">                        <img class="teaser__image teaser__image--logo" loading="lazy" src="/fileadmin/_processed_/7/c/csm_Goldwild_Logo_Schwarz_c1f876b007.png" width="100" height="80" alt="" />                    </figure>                            </a></toujou-location-finder-teaser>',mo={title:"COMPONENTS/LocationFinder",parameters:{badges:[Ft.DONE],docs:{page:Vt},layout:"fullscreen",msw:{handlers:[ot.rest.get(no,(t,e,o)=>(console.info("%c LOCATION FINDER: Mocking the request to /placesgeo...","color: #29B6F6;"),e(o.status(200),o.json(io)))),ot.rest.get(ro,(t,e,o)=>(console.info("%c LOCATION FINDER: Mocking the request to /placesteaser...","color: #29B6F6;"),e(o.status(200),o.set("Content-Type","text/html"),o.text(ao))))]}},tags:["autodocs"]},so=()=>`
        <toujou-location-finder
            class="location-finder"
            bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
            teaserurl="/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo"
            geojsonurl="/placesgeo.json"
            filterparams="&amp;pagetypes=34&amp;pages=1000435&amp;recursive=2&amp;hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52"
            map-style="mapbox://styles/mapbox/light-v10"
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
        >

            <button
                is="toujou-button"
                class="button location-finder__map-toggle"
                button-variant="primary"
                button-type="border"
                button-size="small"
                slot="location-finder-map-toggle"
            >
                <span class="location-finder__map-toggle-show-text">Show map</span>
                <span class="location-finder__map-toggle-hide-text">Hide map</span>
            </button>
        </toujou-location-finder>
    `,S=so.bind({});var nt,it,rt;S.parameters={...S.parameters,docs:{...(nt=S.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return \`
        <toujou-location-finder
            class="location-finder"
            bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
            teaserurl="/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo"
            geojsonurl="/placesgeo.json"
            filterparams="&amp;pagetypes=34&amp;pages=1000435&amp;recursive=2&amp;hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52"
            map-style="mapbox://styles/mapbox/light-v10"
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
        >

            <button
                is="toujou-button"
                class="button location-finder__map-toggle"
                button-variant="primary"
                button-type="border"
                button-size="small"
                slot="location-finder-map-toggle"
            >
                <span class="location-finder__map-toggle-show-text">Show map</span>
                <span class="location-finder__map-toggle-hide-text">Hide map</span>
            </button>
        </toujou-location-finder>
    \`;
}`,...(rt=(it=S.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};const _o=["LocationFinder"];export{S as LocationFinder,_o as __namedExportsOrder,mo as default};
