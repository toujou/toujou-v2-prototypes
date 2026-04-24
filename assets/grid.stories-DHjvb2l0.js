const m={title:"COMPONENTS/Grid",parameters:{layout:"fullscreen"},argTypes:{type:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Grid type",description:"Set grid type",options:["default","medium","wide","fullwidth","ignore"],control:{type:"radio"},required:!0},numberOfColumns:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Number of columns",description:"Set the number of columns",options:[1,2,3,4],control:{type:"radio"},required:!0},columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"default"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["default","third-right","third-left"],control:{type:"radio"},required:!0,if:{arg:"numberOfColumns",eq:2}}}},a=t=>{const e=document.createElement("toujou-grid");e.classList.add("grid","demo-grid"),e.setAttribute("number-of-columns",String(t.numberOfColumns)),e.setAttribute("grid-type",t.type),t.numberOfColumns==2&&e.setAttribute("column-layout",t.columnsLayout);for(let i=0;i<t.numberOfColumns;i++){const r=document.createElement("toujou-grid-column");r.classList.add("grid-column");const o=document.createElement("p");o.textContent=`grid--${t.type}`,o.classList.add("demo-grid__title"),r.appendChild(o),e.appendChild(r)}const l=document.createElement("main");return l.appendChild(e),l},n=a.bind({});n.args={type:"default",numberOfColumns:1,columnsLayout:"default"};var d,u,s;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: GridStoryProps) => {
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
}`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const c=["Grid"];export{n as Grid,c as __namedExportsOrder,m as default};
