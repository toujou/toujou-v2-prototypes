import{s as a}from"./lit-element-ca41d87b.js";import{n as h}from"./custom-element-fb5c5745.js";import"./query-assigned-elements-39dd8e72.js";import{P as p,a as g}from"./photoswipe-lightbox.esm-38c17ed8.js";var u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=(e,t,i,o)=>{for(var r=o>1?void 0:o?c(t,i):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&u(t,i,r),r};let s=class extends a{constructor(){super(...arguments),this._handleUiRegister=()=>{this.lightbox.pswp.ui.registerElement({name:"caption",order:9,isButton:!1,appendTo:"root",onInit:e=>{this.lightbox.pswp.on("change",()=>this._handleChange(e))}})},this._handleChange=e=>{let t="";const i=this.lightbox.pswp.currSlide.data.element;i&&(t=i.getAttribute("title")),e.textContent=t||""}}get galleryID(){const e=this.getAttribute("id");return e?`#${e}`:void 0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.lightbox=new p({gallery:this.galleryID,children:"a",pswpModule:g,allowPanToNext:!0,preloaderDelay:0}),this.lightbox.on("uiRegister",()=>this._handleUiRegister()),this.lightbox.init()}};s=d([h("toujou-gallery")],s);
//# sourceMappingURL=toujou-gallery.js.map
