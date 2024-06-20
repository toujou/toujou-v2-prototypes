import{T as h}from"./badgeCustomConfig-e7a687d5.js";import{j as n}from"./jsx-runtime-87b2c1dd.js";import{u as d}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"html-with-text",children:"HTML with text"}),`
`,n.jsx(t.p,{children:'The "HTML with text" elements allow the user to render custom html alongside with some text.'}),`
`,n.jsx(t.p,{children:"It is the same as the HTML content element, but it is rendered inside a grid"}),`
`,n.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<toujou-grid class="grid" grid-type="default" number-of-columns="2" column-layout="third-left">
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
`,n.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,n.jsxs(t.h3,{id:"fullwidth--required",children:["fullwidth  ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(t.p,{children:["When rendered inside a grid, the ",n.jsx(t.code,{children:"toujou-html-container"})," must have the ",n.jsx(t.code,{children:"fullwidth"})," attribute"]})]})}function f(e={}){const{wrapper:t}={...d(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}const O={title:"COMPONENTS/HTML With Text",parameters:{badges:[h.DONE],docs:{page:f}},argTypes:{layout:{table:{category:"html with text Settings",defaultValue:{summary:"33-left"}},name:"Layout",description:"Choose the HTML with text layout",options:["33-left","33-right","50-left","50-right","66-left","66-right","multicolumn-left","multicolumn-right"],control:{type:"radio"},defaultValue:["33-left"],required:!0}},tags:["autodocs"]};function u(){return`
        <toujou-grid-column class="grid-column">
            <toujou-html-container class="html-container" fullwidth>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </toujou-grid-column>
    `}function r(){return`
        <toujou-grid-column class="grid-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </toujou-grid-column>
    `}function p(e){return`
        ${e?u():r()}
        ${e?r():u()}
    `}function g(e){return`
        ${e?u():r()}
        ${r()}
        ${e?r():u()}
    `}const x=e=>{let t="33-left",o=!0,l=2;switch(e.layout){case"33-left":{t="third-left",o=!0;break}case"33-right":{t="third-right",o=!1;break}case"50-left":{t="half-left",o=!0;break}case"50-right":{t="half-right",o=!1;break}case"66-left":{t="third-right",o=!0;break}case"66-right":{t="third-left",o=!1;break}case"multicolumn-left":{t="third-left",o=!0;break}case"multicolumn-right":{t="third-left",o=!1;break}}return(e.layout==="multicolumn-left"||e.layout==="multicolumn-right")&&(l=3),`
        <toujou-grid class="grid" grid-type="default" number-of-columns="${l}" column-layout="${t}">
            ${l===2?p(o):g(o)}
        </toujou-grid>
    `},i=x.bind({});i.args={layout:"33-left"};var s,m,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`(args: HtmlWithTextStoryProps) => {
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
        <toujou-grid class="grid" grid-type="default" number-of-columns="\${numberOfColumns}" column-layout="\${columnLayout}">
            \${numberOfColumns === 2 ? renderTwoColumns(htmlOnTheLeft) : renderThreeColumns(htmlOnTheLeft)}
        </toujou-grid>
    \`;
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const k=["HtmlWithTextStoryProps"];export{i as HtmlWithTextStoryProps,k as __namedExportsOrder,O as default};
