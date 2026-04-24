const m={title:"COMPONENTS/Counter",argTypes:{numberOfItems:{table:{category:"Counter Settings"},name:"number of Items",description:"Set the number of counter items visible on the story",options:[1,2,3,4],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Counter Settings",defaultValue:{summary:"primary"}},name:"Element design",description:"Set the counter's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},animationDuration:{table:{category:"Counter Settings",defaultValue:{summary:"primary"}},name:"Animation duration",description:"Set the counter's number animation duration",options:["slow","medium","fast"],control:{type:"radio"},required:!0},startValue:{table:{category:"Counter Settings"},name:"animation start value",description:"Set the counter's animation start value",control:{type:"number"},required:!0},endValue:{table:{category:"Counter Settings"},name:"animation end value",description:"Set the counter's animation end value",control:{type:"number"},required:!0},showPrefix:{table:{category:"Counter Settings"},name:"Show prefix",description:"Show the value prefix",control:{type:"boolean"},required:!0},showSuffix:{table:{category:"Counter Settings"},name:"Show suffix",description:"Show the value suffix",control:{type:"boolean"},required:!0}}},i=e=>{let n="";for(let r=0;r<e.numberOfItems;r++)n+=`
            <li class="counter-grid__item">
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
            </li>
        `;return n},s=e=>`
        <main>
            <ul class="counter-grid" number-of-items="${e.numberOfItems.toString()}">
                ${i(e)}
            </ul>
        </main>
    `,t=s.bind({});t.args={numberOfItems:1,elementDesign:"default",animationDuration:"medium",startValue:1,endValue:123,showPrefix:!1,showSuffix:!0};var o,a,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: counterStoryProps) => {
  return \`
        <main>
            <ul class="counter-grid" number-of-items="\${args.numberOfItems.toString()}">
                \${renderCounterItem(args)}
            </ul>
        </main>
    \`;
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const l=["Counter"];export{t as Counter,l as __namedExportsOrder,m as default};
