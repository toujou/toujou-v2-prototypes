import{LitElement as o,html as t}from"lit";class e extends o{constructor(){super()}render(){return t`
            <slot name="image"></slot>
            <slot name="quote"></slot>
            <slot name="author"></slot>
        `}}customElements.define("toujou-blockquote",e);
