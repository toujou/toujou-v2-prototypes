import{i as y,s as h,y as l}from"./lit-element-6fe74b4f.js";import{e as u}from"./custom-element-73470d87.js";import{e as i}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const v=y`
  :host {
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
    backdrop-filter: var(--rating-stars-overlay-backdrop-filter);
    display: block;
  }
`;var c=Object.defineProperty,b=Object.getOwnPropertyDescriptor,e=(r,s,o,n)=>{for(var a=n>1?void 0:n?b(s,o):s,g=r.length-1,p;g>=0;g--)(p=r[g])&&(a=(n?p(s,o,a):p(a))||a);return n&&a&&c(s,o,a),a};let t=class extends h{constructor(){super(...arguments),this.entities=[],this.ratingEntity="★",this.ratingTotal=5,this.ratingValue=0,this.percentage=0,this.percentageCssVariable="--rating-stars-percentage",this.updatePercentage=()=>{this.percentage=this.ratingValue/this.ratingTotal*100,this.style.setProperty(this.percentageCssVariable,`${100-this.percentage}%`)}}render(){return l`
           ${this.entities.map(r=>l`
                   <span class="entity">${r}</span>
               `)}
           <span class="overlay"></span>
        `}updated(r){r.has("ratingTotal")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage()),r.has("ratingValue")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage())}};t.styles=[v];e([i({type:Array})],t.prototype,"entities",2);e([i({type:String,attribute:"rating-entity"})],t.prototype,"ratingEntity",2);e([i({type:Number,attribute:"rating-total"})],t.prototype,"ratingTotal",2);e([i({type:Number,attribute:"rating-value"})],t.prototype,"ratingValue",2);e([i({type:Number})],t.prototype,"percentage",2);t=e([u("toujou-rating-stars")],t);
//# sourceMappingURL=toujou-rating-stars.js.map
