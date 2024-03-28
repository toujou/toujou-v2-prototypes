const r=`
    <style>        
        :host {
            --sl-color-primary: #0000ee;
            --sl-element-height: 4rem;
            
            border: 1px solid var(--sl-color-primary);
            background-color: white;
            position: fixed;
            top: calc(var(--sl-element-height) * -1);
            bottom: unset;
            left: 0;
            right: 0;
            width: 100%;
            height: var(--sl-element-height);
            transform: translateY(0);
            transition: transform var(--sl-transition-speed, .25s) ease-in-out;
            overflow: hidden;
            box-sizing: border-box;
            box-shadow: none;
            z-index: 9999;
        }
        
        :host(:focus-within) {
            transform: translateY(100%);
        }
        
        .skippy-links__link {
            position: var(--sl-link-position, absolute);
            top: var(--sl-link-top, 0);
            bottom: var(--sl-link-bottom, 0);
            left: var(--sl-link-left, 0);
            right: var(--sl-link-right, 0);
            width: var(--sl-link-width, 100%);
            height: var(--sl-link-height, var(--sl-element-height));
            display: var(--sl-link-display, flex);
            align-items: var(--sl-link-align-items, center);
            justify-content: var(--sl-link-justify-content, center);
            color: var(--sl-link-color, var(--sl-color-primary));
            font-size: var(--sl-link-font-size, 1rem);
            text-decoration: var(--sl-link-text-decoration, underline);
            padding: var(--sl-link-padding, 1rem);
            opacity: var(--sl-link-opacity, 1);
            transform: var(--sl-link-transform, translateY(-100%));
            box-sizing: var(--sl-link-box-sizing, border-box);
        }
        
        .skippy-links__link:focus {
            opacity: var(--sl-link-opacity-focus, 1);
            transform: var(--sl-link-transform-focus, translateY(0));
            color: var(--sl-link-color-focus, var(--sl-color-primary));
        }
        
        @media (hover: hover) {
            .skippy-links__link:hover {
                opacity: var(--sl-link-opacity-hover, 1);
                transform: var(--sl-link-transform-hover, translateY(0));
                color: var(--sl-link-color-hover, var(--sl-color-primary));
            }
        }
        
        @media (prefers-reduced-motion) {
          :root {
            --sl-transition-speed: var(--sl-transition-speed-reduced-motion, 0));
          }
        }
    </style>
`;class l extends HTMLElement{constructor(){super(),this._targets=[],this._shadow=this.attachShadow({mode:"open"}),this._skippyLinksLabelAttributeName="skippy-links-label",this._emptyAttribute="empty",this._shadow.innerHTML=r}connectedCallback(){document.readyState==="complete"||document.readyState!=="loading"?this._init():document.addEventListener("DOMContentLoaded",this._init)}_init(){if(document.querySelectorAll(`[${this._skippyLinksLabelAttributeName}]`).forEach(t=>{const i=t.id||null,s=t.getAttribute(this._skippyLinksLabelAttributeName)||null;!i||!s?console.error("SKIPPY-LINKS: target element does not have all required attributes (id and skippy-link-label)"):this._targets.push(this._createNewTarget(t,i,s))}),!this._targets||!this._targets.length){this.setAttribute(this._emptyAttribute,"");return}this.setAttribute("role","navigation"),this._populate()}_createNewTarget(e,t,i){return{element:e,id:t,label:i}}_populate(){this._targets.forEach(e=>{const t=document.createElement("a");t.href=`#${e.id}`,t.textContent=e.label,t.classList.add("skippy-links__link"),t.addEventListener("keydown",i=>{(i.code==="Space"||i.code==="enter")&&this._handleClick(e.element)}),t.addEventListener("click",()=>{this._handleClick(e.element)}),this._shadow.appendChild(t)})}_handleClick(e){this.blur(),e.focus()}}window.customElements.define("skippy-links",l);
