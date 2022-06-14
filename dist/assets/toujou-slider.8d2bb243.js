import{LitElement as i,html as c}from"lit";import{customElement as m}from"lit/decorators.js";var n=`:host{border:10px solid purple;display:block}
`,d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=(p,r,l,o)=>{for(var e=o>1?void 0:o?f(r,l):r,t=p.length-1,s;t>=0;t--)(s=p[t])&&(e=(o?s(r,l,e):s(e))||e);return o&&e&&d(r,l,e),e};let u=class extends i{constructor(){super(),console.log("toujou slider starting up..."),console.log(n)}render(){return c`
            <h1>HELLO</h1>
        `}};u.styles=[n];u=v([m("toujou-slider")],u);
