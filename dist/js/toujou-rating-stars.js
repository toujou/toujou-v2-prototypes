import{_ as t}from"./tslib.es6-Br7-PHSQ.js";import{i as r,s as a,y as e}from"./lit-element-D9Ui1_BQ.js";import{e as i}from"./custom-element-DPYutfhb.js";import{e as n}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";var s,o,l,g=r(s||(o=[":host {\n    --rating-stars-entity-position: relative;\n    --rating-stars-entity-left: -.1em;\n\n    --rating-stars-overlay-position: absolute;\n    --rating-stars-overlay-top: 0;\n    --rating-stars-overlay-right: 0;\n    --rating-stars-overlay-height: 100%;\n    --rating-stars-overlay-background-color: transparent;\n    --rating-stars-overlay-backdrop-filter: grayscale(1);\n\n    position: var(--rating-stars-entity-position);\n}\n\n.entity {\n    position: relative;\n    left: var(--rating-stars-entity-left);\n}\n\n.overlay {\n    position: var(--rating-stars-overlay-position);\n    top: var(--rating-stars-overlay-top);\n    right: var(--rating-stars-overlay-right);\n    height: var(--rating-stars-overlay-height);\n    width: var(--rating-stars-percentage);\n    background-color: var(--rating-stars-overlay-background-color);\n    -webkit-backdrop-filter: var(--rating-stars-overlay-backdrop-filter);\n            backdrop-filter: var(--rating-stars-overlay-backdrop-filter);\n    display: block;\n}\n"],l||(l=o.slice(0)),s=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(l)}}))));let p=class extends a{constructor(){super(...arguments),this.entities=[],this.ratingEntity="★",this.ratingTotal=5,this.ratingValue=0,this.percentage=0,this.percentageCssVariable="--rating-stars-percentage",this.updatePercentage=()=>{this.percentage=this.ratingValue/this.ratingTotal*100,this.style.setProperty(this.percentageCssVariable,100-this.percentage+"%")}}render(){return e`
      ${this.entities.map((t=>e`
          <span class="entity">${t}</span>
        `))}
      <span class="overlay"></span>
    `}updated(t){t.has("ratingTotal")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage()),t.has("ratingValue")&&(this.entities=Array(this.ratingTotal).fill(this.ratingEntity),this.updatePercentage())}};p.styles=[g],t([n({type:Array})],p.prototype,"entities",void 0),t([n({type:String,attribute:"rating-entity"})],p.prototype,"ratingEntity",void 0),t([n({type:Number,attribute:"rating-total"})],p.prototype,"ratingTotal",void 0),t([n({type:Number,attribute:"rating-value"})],p.prototype,"ratingValue",void 0),t([n({type:Number})],p.prototype,"percentage",void 0),p=t([i("toujou-rating-stars")],p);
//# sourceMappingURL=toujou-rating-stars.js.map
