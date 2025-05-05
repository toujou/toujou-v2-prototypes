import{_ as t}from"./tslib.es6-Br7-PHSQ.js";import{s,y as r}from"./lit-element-D9Ui1_BQ.js";import{e}from"./custom-element-DPYutfhb.js";import{e as i}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";let a=class extends s{constructor(){super(...arguments),this.rating=0,this.total=5,this.suffix=""}createRenderRoot(){return this}render(){const t=[];for(let s=0;s<this.total;s++){let e=0;this.rating>=s+1?e=100:this.rating>s&&(e=Math.round(100*(this.rating-s))),t.push(r`
        <span class="rating-stars__star" aria-hidden="true" star-value="${e}"></span>
      `)}return r`
      ${t}
      ${this.suffix.length?r`<span class="rating-stars__suffix" aria-hidden="true">${this.suffix}</span>`:""}
    `}};t([i({type:Number,attribute:"rating-value"})],a.prototype,"rating",void 0),t([i({type:Number,attribute:"rating-total"})],a.prototype,"total",void 0),t([i({type:String,attribute:"rating-suffix"})],a.prototype,"suffix",void 0),a=t([e("toujou-rating-stars")],a);
//# sourceMappingURL=toujou-rating-stars.js.map
