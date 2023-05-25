import{T as o}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ac05983f.js";import{u as r}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function t(s){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},r(),s.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"media-date",children:"media-date"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"media-date"})," element allows us to show a date on top of a media element."]}),`
`,a.jsx(e.p,{children:"It can display either a single date or a date range"}),`
`,a.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<time datetime="2023-06-14" class="media-date">
    <div class="media-date__months">
        <span class="media-date__month">Jun</span>
        <span class="media-date__month">Sep</span>
    </div>
    <div class="media-date__days">
        <span class="media-date__day">25</span>
        <span class="media-date__day-separator">-</span>
        <span class="media-date__day">12</span>
    </div>
    <div class="media-date__years">
        <span class="media-date__year">2023</span>
        <span class="media-date__year">2025</span>
    </div>
</div>
`})}),`
`,a.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,a.jsx(e.h3,{id:"inline",children:"inline"}),`
`,a.jsxs(e.p,{children:["We can add the ",a.jsx(e.code,{children:"inline"}),` attribute so the element can be used inside other elements as well.
This attribute makes element have position relative and a light grey background`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<time datetime="2023-06-14" class="media-date" inline>
...
</div>
`})})]})}function m(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?a.jsx(e,Object.assign({},s,{children:a.jsx(t,s)})):t(s)}const h={title:"COMPONENTS/MediaDate",parameters:{badges:[o.DONE],docs:{page:m},layout:"fullscreen"},argTypes:{singleMonth:{table:{category:"Media date Settings",defaultValue:{summary:!1}},name:"Single month",description:"Toggle between single oder multiple month",control:{type:"boolean"},defaultValue:[!1],required:!0},singleDay:{table:{category:"Media date Settings",defaultValue:{summary:!1}},name:"Single day",description:"Toggle between single oder multiple days",control:{type:"boolean"},defaultValue:[!1],required:!0},singleYear:{table:{category:"Media date Settings",defaultValue:{summary:!1}},name:"Single year",description:"Toggle between single oder multiple years",control:{type:"boolean"},defaultValue:[!1],required:!0}},tags:["autodocs"]},c=s=>`
        <style>
            body {
                background-color: var(--color-primary-dark);
            }
        </style>
        <time datetime="2023-06-14" class="media-date">
            <div class="media-date__months">
                <span class="media-date__month">Jun</span>
                ${s.singleMonth||s.singleDay?"":`
                    <span class="media-date__month-separator">-</span>
                    <span class="media-date__month">Jul</span>
                `}
            </div>
            <div class="media-date__days">
                <span class="media-date__day">14</span>
                ${s.singleDay?"":`
                    <span class="media-date__day-separator">-</span>
                    <span class="media-date__day">16</span>
                `}
            </div>
            <div class="media-date__years">
                <span class="media-date__year">2023</span>
                ${s.singleYear||s.singleDay?"":`
                    <span class="media-date__year-separator">-</span>
                    <span class="media-date__year">2023</span>
                `}
            </div>
        </time>
    `,n=c.bind({});n.args={singleMonth:!1,singleDay:!1,singleYear:!1};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: MediaDateStoryProps) => {
  return \`
        <style>
            body {
                background-color: var(--color-primary-dark);
            }
        </style>
        <time datetime="2023-06-14" class="media-date">
            <div class="media-date__months">
                <span class="media-date__month">Jun</span>
                \${args.singleMonth || args.singleDay ? \`\` : \`
                    <span class="media-date__month-separator">-</span>
                    <span class="media-date__month">Jul</span>
                \`}
            </div>
            <div class="media-date__days">
                <span class="media-date__day">14</span>
                \${args.singleDay ? \`\` : \`
                    <span class="media-date__day-separator">-</span>
                    <span class="media-date__day">16</span>
                \`}
            </div>
            <div class="media-date__years">
                <span class="media-date__year">2023</span>
                \${args.singleYear || args.singleDay ? \`\` : \`
                    <span class="media-date__year-separator">-</span>
                    <span class="media-date__year">2023</span>
                \`}
            </div>
        </time>
    \`;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["MediaDate"];export{n as MediaDate,b as __namedExportsOrder,h as default};
//# sourceMappingURL=media-date.stories-c47bd871.js.map
