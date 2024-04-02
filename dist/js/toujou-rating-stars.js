import{_ as r}from"./tslib.es6-c85c2c5e.js";import{i as g,s as l,y as s}from"./lit-element-6fe74b4f.js";import{e as p}from"./custom-element-73470d87.js";import{e as a}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var o,i,n,y=g(o||(i=[`:host {
    --rating-stars-entity-position: relative;
    --rating-stars-entity-left: -.1em;

    --rating-stars-overlay-position: absolute;
    --rating-stars-overlay-top: 0;
    --rating-stars-overlay-right: 0;
    --rating-stars-overlay-height: 100%;
    --rating-stars-overlay-background-color: transparent;
    --rating-stars-overlay-backdrop-filter: grayscale(1);

    position: var(--rating-stars-entity-position);
}

.entity {
    position: relative;
    left: var(--rating-stars-entity-left);
}

.overlay {
    position: var(--rating-stars-overlay-position);
    top: var(--rating-stars-overlay-top);
    right: var(--rating-stars-overlay-right);
    height: var(--rating-stars-overlay-height);
    width: var(--rating-stars-percentage);
    background-color: var(--rating-stars-overlay-background-color);
    -webkit-backdrop-filter: var(--rating-stars-overlay-backdrop-filter);
            backdrop-filter: var(--rating-stars-overlay-backdrop-filter);
    display: block;
}
`],n||(n=i.slice(0)),o=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(n)}}))));let t=class extends l{constructor(){super(...arguments),this.entities=[],this.ratingEntity="★",this.ratingTotal=5,this.ratingValue=0,this.percentage=0,this.percentageCssVariable="--rating-stars-percentage",this.updatePercentage=()=>{this.percentage=this.ratingValue/this.ratingTotal*100,this.style.setProperty(this.percentageCssVariable,100-this.percentage+"%")}}render(){return s`
      ${this.entities.map(e=>s`
          <span class="entity">${e}</span>
        `)}
      <span class="overlay"></span>
    `}updated(e){e.has("ratingTotal")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage()),e.has("ratingValue")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage())}};t.styles=[y],r([a({type:Array})],t.prototype,"entities",void 0),r([a({type:String,attribute:"rating-entity"})],t.prototype,"ratingEntity",void 0),r([a({type:Number,attribute:"rating-total"})],t.prototype,"ratingTotal",void 0),r([a({type:Number,attribute:"rating-value"})],t.prototype,"ratingValue",void 0),r([a({type:Number})],t.prototype,"percentage",void 0),t=r([p("toujou-rating-stars")],t);
//# sourceMappingURL=toujou-rating-stars.js.map
