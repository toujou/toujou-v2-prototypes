import{T as m}from"./badgeCustomConfig-oxGPBDYz.js";import{j as n}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as l}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"toujou-counter",children:"<toujou-counter>"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"<toujou-acounter>"})," is a custom element animates a number counting up / down."]}),`
`,n.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<toujou-alert class="alert" role="alert" alert-variant="primary">
    <typo3-icon></typo3-icon>
    This is an alert
</toujou-alert>
`})})]})}function c(e={}){const{wrapper:t}={...l(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}const y={title:"COMPONENTS/Counter",parameters:{badges:[m.DONE],docs:{page:c}},argTypes:{elementDesign:{table:{category:"Counter Settings",defaultValue:{summary:"primary"}},name:"Element design",description:"Set the counter's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0},animationDuration:{table:{category:"Counter Settings",defaultValue:{summary:"primary"}},name:"Animation duration",description:"Set the counter's number animation duration",options:["slow","medium","fast"],control:{type:"radio"},defaultValue:["medium"],required:!0},startValue:{table:{category:"Counter Settings"},name:"animation start value",description:"Set the counter's animation start value",control:{type:"number"},defaultValue:1,required:!0},endValue:{table:{category:"Counter Settings"},name:"animation end value",description:"Set the counter's animation end value",control:{type:"number"},defaultValue:123,required:!0},numberOfItems:{table:{category:"Counter Settings"},name:"number of Items",description:"Set the number of counter items visible on the story",control:{type:"number",min:1,max:12},defaultValue:1,required:!0},showPrefix:{table:{category:"Counter Settings"},name:"Show prefix",description:"Show the value prefix",control:{type:"boolean"},defaultValue:!1,required:!0},showSuffix:{table:{category:"Counter Settings"},name:"Show suffix",description:"Show the value suffix",control:{type:"boolean"},defaultValue:!0,required:!0}},tags:["autodocs"]},d=e=>{let t="";for(let o=0;o<e.numberOfItems;o++)t+=`
            <toujou-counter
                class="counter"
                aria-label="1000 - Default"
                element-design="${e.elementDesign}"
                start-number="${e.startValue}"
                end-number="${e.endValue}"
                animation-speed="${e.animationDuration}"
                tabindex="0"
                >

                <figure class="counter__figure">
                    <img class="counter__image" src="https://picsum.photos/84" alt="" loading="lazy">
                </figure>

                <span class="counter__number">
                    ${e.showPrefix?'<span class="counter__number-prefix">+</span>':""}
                    <span class="counter__number-text">1.000</span>
                    ${e.showSuffix?'<span class="counter__number-suffix">Km</span>':""}
                </span>

                <p class="counter__title">Default</p>
            </toujou-counter>
        `;return t},p=e=>`
        <div class="counter-grid" number-of-items="${e.numberOfItems.toString()}">
            ${d(e)}
        </div>
    `,r=p.bind({});r.args={elementDesign:"default",animationDuration:"medium",startValue:1,endValue:123,numberOfItems:1,showPrefix:!1,showSuffix:!0};var u,s,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: counterStoryProps) => {
  return \`
        <div class="counter-grid" number-of-items="\${args.numberOfItems.toString()}">
            \${renderCounterItem(args)}
        </div>
    \`;
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Counter"];export{r as Counter,S as __namedExportsOrder,y as default};