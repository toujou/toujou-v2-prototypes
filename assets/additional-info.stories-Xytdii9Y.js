import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function e(o){const i={h1:"h1",p:"p",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"additional-info",children:"Additional-info"}),`
`,n.jsx(i.p,{children:"Additional information element used on several other components, for instance on the tourism tripdates"})]})}function m(o={}){const{wrapper:i}={...c(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}const x={title:"COMPONENTS/Additional Info",parameters:{badges:[d.TESTING],docs:{page:m}},argTypes:{noMargins:{table:{category:"Additional Info Settings"},name:"No margins",description:"Render the element without any margins",control:{type:"boolean"},required:!0}},tags:["autodocs"]},l=o=>`
        <p class="additional-info" ${o.noMargins?"no-margins":""}>
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    `,t=l.bind({});t.args={noMargins:!1};var a,s,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: AdditionalInfoProps) => {
  return \`
        <p class="additional-info" \${args.noMargins ? 'no-margins' : ''}>
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    \`;
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const j=["AdditionalInfo"];export{t as AdditionalInfo,j as __namedExportsOrder,x as default};
