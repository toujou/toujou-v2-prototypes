import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-BBg64T0F.js";import"./iframe-BVsh7E0O.js";import"./preload-helper-C1FmrZbK.js";function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"html-with-text",children:"HTML with text"}),`
`,o.jsx(t.p,{children:'The "HTML with text" elements allow the user to render custom html alongside with some text.'}),`
`,o.jsx(t.p,{children:"It is the same as the HTML content element, but it is rendered inside a grid"}),`
`,o.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`<toujou-grid class="grid" grid-type="default" number-of-columns="2" column-layout="third-left">
    <toujou-grid-column class="grid-column">
        <toujou-html-container class="html-container" fullwidth="">
            <!-- Here goes the custom html -->
        </toujou-html-container>
    </toujou-grid-column>
    <toujou-grid-column class="grid-column">
        <!-- Here goes the text content -->
    </toujou-grid-column>
</toujou-grid>
`})}),`
`,o.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,o.jsxs(t.h3,{id:"fullwidth--required",children:["fullwidth  ",o.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,o.jsxs(t.p,{children:["When rendered inside a grid, the ",o.jsx(t.code,{children:"toujou-html-container"})," must have the ",o.jsx(t.code,{children:"fullwidth"})," attribute"]})]})}function h(e={}){const{wrapper:t}={...d(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(a,{...e})}):a(e)}const L={title:"COMPONENTS/HTML With Text",parameters:{docs:{page:h}},argTypes:{layout:{table:{category:"html with text Settings",defaultValue:{summary:"33-left"}},name:"Layout",description:"Choose the HTML with text layout",options:["33-left","33-right","50-left","50-right","66-left","66-right","multicolumn-left","multicolumn-right"],control:{type:"radio"},required:!0}},tags:["autodocs"]};function l(){return`
        <toujou-grid-column class="grid-column">
            <toujou-html-container class="html-container" fullwidth>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </toujou-grid-column>
    `}function u(){return`
        <toujou-grid-column class="grid-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </toujou-grid-column>
    `}function f(e){return`
        ${e?l():u()}
        ${e?u():l()}
    `}function p(e){return`
        ${e?l():u()}
        ${u()}
        ${e?u():l()}
    `}const g=e=>{let t="33-left",i=!0,n=2;switch(e.layout){case"33-left":{t="third-left",i=!0;break}case"33-right":{t="third-right",i=!1;break}case"50-left":{t="half-left",i=!0;break}case"50-right":{t="half-right",i=!1;break}case"66-left":{t="third-right",i=!0;break}case"66-right":{t="third-left",i=!1;break}case"multicolumn-left":{t="third-left",i=!0;break}case"multicolumn-right":{t="third-left",i=!1;break}}return(e.layout==="multicolumn-left"||e.layout==="multicolumn-right")&&(n=3),`
        <main>
            <toujou-grid class="grid" grid-type="default" number-of-columns="${n}" column-layout="${t}">
                ${n===2?f(i):p(i)}
            </toujou-grid>
        </main>
    `},r=g.bind({});r.args={layout:"33-left"};var s,m,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: HtmlWithTextStoryProps) => {
  let columnLayout = '33-left';
  let htmlOnTheLeft = true;
  let numberOfColumns = 2;
  switch (args.layout) {
    case '33-left':
      {
        columnLayout = 'third-left';
        htmlOnTheLeft = true;
        break;
      }
    case '33-right':
      {
        columnLayout = 'third-right';
        htmlOnTheLeft = false;
        break;
      }
    case '50-left':
      {
        columnLayout = 'half-left';
        htmlOnTheLeft = true;
        break;
      }
    case '50-right':
      {
        columnLayout = 'half-right';
        htmlOnTheLeft = false;
        break;
      }
    case '66-left':
      {
        columnLayout = 'third-right';
        htmlOnTheLeft = true;
        break;
      }
    case '66-right':
      {
        columnLayout = 'third-left';
        htmlOnTheLeft = false;
        break;
      }
    case 'multicolumn-left':
      {
        columnLayout = 'third-left';
        htmlOnTheLeft = true;
        break;
      }
    case 'multicolumn-right':
      {
        columnLayout = 'third-left';
        htmlOnTheLeft = false;
        break;
      }
  }
  if (args.layout === 'multicolumn-left' || args.layout === 'multicolumn-right') {
    numberOfColumns = 3;
  }
  return \`
        <main>
            <toujou-grid class="grid" grid-type="default" number-of-columns="\${numberOfColumns}" column-layout="\${columnLayout}">
                \${numberOfColumns === 2 ? renderTwoColumns(htmlOnTheLeft) : renderThreeColumns(htmlOnTheLeft)}
            </toujou-grid>
        </main>
    \`;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const T=["HtmlWithTextStoryProps"];export{r as HtmlWithTextStoryProps,T as __namedExportsOrder,L as default};
