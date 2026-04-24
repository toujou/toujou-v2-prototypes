const h={title:"COMPONENTS/HTML With Text",argTypes:{layout:{table:{category:"html with text Settings",defaultValue:{summary:"33-left"}},name:"Layout",description:"Choose the HTML with text layout",options:["33-left","33-right","50-left","50-right","66-left","66-right","multicolumn-left","multicolumn-right"],control:{type:"radio"},required:!0}}};function l(){return`
        <toujou-grid-column class="grid-column">
            <toujou-html-container class="html-container" fullwidth>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </toujou-grid-column>
    `}function o(){return`
        <toujou-grid-column class="grid-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </toujou-grid-column>
    `}function s(e){return`
        ${e?l():o()}
        ${e?o():l()}
    `}function c(e){return`
        ${e?l():o()}
        ${o()}
        ${e?o():l()}
    `}const d=e=>{let i="33-left",t=!0,r=2;switch(e.layout){case"33-left":{i="third-left",t=!0;break}case"33-right":{i="third-right",t=!1;break}case"50-left":{i="half-left",t=!0;break}case"50-right":{i="half-right",t=!1;break}case"66-left":{i="third-right",t=!0;break}case"66-right":{i="third-left",t=!1;break}case"multicolumn-left":{i="third-left",t=!0;break}case"multicolumn-right":{i="third-left",t=!1;break}}return(e.layout==="multicolumn-left"||e.layout==="multicolumn-right")&&(r=3),`
        <main>
            <toujou-grid class="grid" grid-type="default" number-of-columns="${r}" column-layout="${i}">
                ${r===2?s(t):c(t)}
            </toujou-grid>
        </main>
    `},u=d.bind({});u.args={layout:"33-left"};var a,n,m;u.parameters={...u.parameters,docs:{...(a=u.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HtmlWithTextStoryProps) => {
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
}`,...(m=(n=u.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const f=["HtmlWithTextStoryProps"];export{u as HtmlWithTextStoryProps,f as __namedExportsOrder,h as default};
