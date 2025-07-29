import{_ as t}from"./tslib.es6-Br7-PHSQ.js";import{s as r,x as s}from"./lit-element-DWV00rgf.js";import{e}from"./custom-element-DPYutfhb.js";import{n as i}from"./property-BjK_DIN0.js";import"./query-assigned-elements-DqqHV3QO.js";let a=class extends r{constructor(){super(...arguments),this.rating=0,this.total=5,this.suffix=""}createRenderRoot(){return this}render(){const t=[];for(let r=0;r<this.total;r++){let e=0;this.rating>=r+1?e=100:this.rating>r&&(e=Math.round(100*(this.rating-r))),t.push(s`
        <span class="rating-stars__star" aria-hidden="true" star-value="${e}"></span>
      `)}return s`
      ${t}
      ${this.suffix.length?s`<span class="rating-stars__suffix" aria-hidden="true">${this.suffix}</span>`:""}
    `}};t([i({type:Number,attribute:"rating-value"})],a.prototype,"rating",void 0),t([i({type:Number,attribute:"rating-total"})],a.prototype,"total",void 0),t([i({type:String,attribute:"rating-suffix"})],a.prototype,"suffix",void 0),a=t([e("toujou-rating-stars")],a);
//# sourceMappingURL=toujou-rating-stars.js.map
