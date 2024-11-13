import{T as h}from"./badgeCustomConfig-DUXiHpL4.js";import{j as t}from"./jsx-runtime-CS_Wz6c_.js";import{useMDXComponents as m}from"./index-C8FVCAkB.js";import"./index-Dy2Ak0OH.js";import"./_commonjsHelpers-Cpj98o6Y.js";function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"toujou-grid",children:"<toujou-grid>"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"<toujou-grid>"})," is a custom element to help us place content on the page. It provides a width and max-width and nothing else"]}),`
`,t.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<toujou-grid class="toujou-grid" grid-type="fullwidth" number-of-columns="4">
    ...
</toujou-grid>
`})}),`
`,t.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(e.p,{children:["This element has a single attribute (",t.jsx(e.code,{children:"grid-type"}),") which defines how wide the grid is on the page"]}),`
`,t.jsxs(e.h3,{id:"grid-type-required",children:["grid-type ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:[`| value     | width                                              | Example                               |
|-----------|----------------------------------------------------|:--------------------------------------|
| default   | normal content width and max-width                 | `,t.jsx(e.code,{children:'<toujou-grid grid-type="default">'}),`   |
| medium    | medium content max-width                           | `,t.jsx(e.code,{children:'<toujou-grid grid-type="medium">'}),`    |
| wide      | wide content max-width                             | `,t.jsx(e.code,{children:'<toujou-grid grid-type="wide">'}),`      |
| fullwidth | fullwidth, no paddings or margins                  | `,t.jsx(e.code,{children:'<toujou-grid grid-type="fullwidth">'}),` |
| ignore    | `,t.jsx(e.code,{children:"display: contents"})," so the grid element is ignored | ",t.jsx(e.code,{children:'<toujou-grid grid-type="ignore">'}),"    |"]}),`
`,t.jsxs(e.h3,{id:"number-of-columns-required",children:["number-of-columns ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsx(e.p,{children:"Define the number of columns for the grid (may not be the same across all viewport widths)."}),`
`,t.jsxs(e.p,{children:["Possible values are: ",t.jsx(e.code,{children:"1"}),", ",t.jsx(e.code,{children:"2"}),", ",t.jsx(e.code,{children:"3"}),", and ",t.jsx(e.code,{children:"4"})]}),`
`,t.jsx(e.h3,{id:"column-layout",children:"column-layout"}),`
`,t.jsx(e.p,{children:"The column layout defines the columns width for the grid with two columns."}),`
`,t.jsx(e.p,{children:"It uses the following CSS:"}),`
`,t.jsx(e.p,{children:t.jsx(e.code,{children:'.grid[number-of-columns="2"][column-layout="third-left"]'})}),`
`,t.jsxs(e.p,{children:[`| value         | description             | Example                                                                              |
|---------------|-------------------------|:-------------------------------------------------------------------------------------|
| `,t.jsx(e.code,{children:"third-left"}),"  | define a 33% - 66% grid | ",t.jsx(e.code,{children:'<toujou-grid grid-type="default" number-of-columns="2" column-layout=third-left">'}),`  |
| `,t.jsx(e.code,{children:"third-right"})," | define a 66% - 33% grid | ",t.jsx(e.code,{children:'<toujou-grid grid-type="default" number-of-columns="2" column-layout=third-right">'})," |"]})]})}function g(n={}){const{wrapper:e}={...m(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}const E={title:"COMPONENTS/Grid",parameters:{badges:[h.DONE],docs:{page:g},layout:"fullscreen"},argTypes:{type:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Grid type",description:"Set grid type",options:["default","medium","wide","fullwidth","ignore"],control:{type:"radio"},defaultValue:["normal"],required:!0},numberOfColumns:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Number of columns",description:"Set the number of columns",options:[1,2,3,4],control:{type:"radio"},defaultValue:[1],required:!0},columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["default","third-right","third-left"],control:{type:"radio"},defaultValue:["default"],required:!0,if:{arg:"numberOfColumns",eq:2}}},tags:["autodocs"]},p=n=>{const e=document.createElement("toujou-grid");e.classList.add("grid","demo-grid"),e.setAttribute("number-of-columns",String(n.numberOfColumns)),e.setAttribute("grid-type",n.type),n.numberOfColumns==2&&e.setAttribute("column-layout",n.columnsLayout);for(let l=0;l<n.numberOfColumns;l++){const r=document.createElement("toujou-grid-column");r.classList.add("grid-column");const d=document.createElement("p");d.textContent=`grid--${n.type}`,d.classList.add("demo-grid__title"),r.appendChild(d),e.appendChild(r)}const o=document.createElement("main");return o.appendChild(e),o},i=p.bind({});i.args={type:"default",numberOfColumns:1,columnsLayout:"default"};var s,c,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`(args: GridStoryProps) => {
  const gridEl = document.createElement('toujou-grid');
  gridEl.classList.add('grid', 'demo-grid');
  gridEl.setAttribute('number-of-columns', String(args.numberOfColumns));
  gridEl.setAttribute('grid-type', args.type);
  if (args.numberOfColumns == 2) {
    gridEl.setAttribute('column-layout', args.columnsLayout);
  }
  for (let i = 0; i < args.numberOfColumns; i++) {
    const col = document.createElement('toujou-grid-column');
    col.classList.add('grid-column');
    const titleEl = document.createElement('p');
    titleEl.textContent = \`grid--\${args.type}\`;
    titleEl.classList.add('demo-grid__title');
    col.appendChild(titleEl);
    gridEl.appendChild(col);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(gridEl);
  return mainEl;
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const w=["Grid"];export{i as Grid,w as __namedExportsOrder,E as default};
