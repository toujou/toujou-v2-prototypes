import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{j as t}from"./jsx-runtime-ccada58e.js";import{u as o}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function d(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li"},o(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"table",children:"table"}),`
`,t.jsxs(e.p,{children:["The table element renders a table on the page. To improve how it is rendered in smaller devices we must wrap it on a ",t.jsx(e.code,{children:"toujou-table-wrapper"})," element"]}),`
`,t.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<toujou-table-container class="table-container">
    <table text-alignment="\${args.tableAlignment}" class="table">
        <caption class="table__caption">
            This is a caption
            <span class="table__summary">This is a beautiful summary</span>
        </caption>
        <tr>
            <td>&nbsp;</td>
            <td>Knocky</td>
            <td>Flor</td>
            <td>Ella</td>
            <td>Juan</td>
        </tr>
        <tr>
            <th>Breed</th>
            <td>Jack Russell</td>
            <td>Poodle</td>
            <td>Streetdog</td>
            <td>Cocker Spaniel</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>16</td>
            <td>9</td>
            <td>10</td>
            <td>5</td>
        </tr>
        <tr>
            <th>Owner</th>
            <td>Mother-in-law</td>
            <td>Me</td>
            <td>Me</td>
            <td>Sister-in-law</td>
        </tr>
        <tr>
            <th>Eating Habits</th>
            <td>Eats everyone's leftovers</td>
            <td>Nibbles at food</td>
            <td>Hearty eater</td>
            <td>Will eat till he explodes</td>
        </tr>
    </table>
</toujou-table-container>
`})}),`
`,t.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"table"})," element accepts a ",t.jsx(e.code,{children:"text-alignment"})," attribute, which defines the text alignment for all elements inside the table (including caption, summary, ...)"]}),`
`,t.jsx(e.p,{children:"Accepted values are:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"none"})}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"center"})}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"left"})}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"right"})}),`
`]})]})}function c(n={}){const{wrapper:e}=Object.assign({},o(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(d,n)})):d(n)}const g={title:"COMPONENTS/Table",parameters:{badges:[s.DONE],docs:{page:c}},argTypes:{tableAlignment:{table:{category:"Table settings",defaultValue:{summary:"none"}},name:"Table alignment",description:"Set the alignment of the table's text",options:["none","center","left","right"],control:{type:"radio"},defaultValue:["none"],required:!0}},tags:["autodocs"]},u=n=>`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-table-container class="table-container">
            <table text-alignment="${n.tableAlignment}" class="table">
                <caption class="table__caption">
                    This is a caption
                    <span class="table__summary">This is a beautiful summary</span>
                </caption>
                <tr>
                    <td>&nbsp;</td>
                    <td>Knocky</td>
                    <td>Flor</td>
                    <td>Ella</td>
                    <td>Juan</td>
                </tr>
                <tr>
                    <th>Breed</th>
                    <td>Jack Russell</td>
                    <td>Poodle</td>
                    <td>Streetdog</td>
                    <td>Cocker Spaniel</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>16</td>
                    <td>9</td>
                    <td>10</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Owner</th>
                    <td>Mother-in-law</td>
                    <td>Me</td>
                    <td>Me</td>
                    <td>Sister-in-law</td>
                </tr>
                <tr>
                    <th>Eating Habits</th>
                    <td>Eats everyone's leftovers</td>
                    <td>Nibbles at food</td>
                    <td>Hearty eater</td>
                    <td>Will eat till he explodes</td>
                </tr>
            </table>
        </toujou-table-container>
        
        <toujou-table-container class="table-container">
            <table text-alignment="${n.tableAlignment}" class="table">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </toujou-table-container>
    `,a=u.bind({});a.args={tableAlignment:"none"};var l,i,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args: TableStoryProps) => {
  return \`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-table-container class="table-container">
            <table text-alignment="\${args.tableAlignment}" class="table">
                <caption class="table__caption">
                    This is a caption
                    <span class="table__summary">This is a beautiful summary</span>
                </caption>
                <tr>
                    <td>&nbsp;</td>
                    <td>Knocky</td>
                    <td>Flor</td>
                    <td>Ella</td>
                    <td>Juan</td>
                </tr>
                <tr>
                    <th>Breed</th>
                    <td>Jack Russell</td>
                    <td>Poodle</td>
                    <td>Streetdog</td>
                    <td>Cocker Spaniel</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>16</td>
                    <td>9</td>
                    <td>10</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Owner</th>
                    <td>Mother-in-law</td>
                    <td>Me</td>
                    <td>Me</td>
                    <td>Sister-in-law</td>
                </tr>
                <tr>
                    <th>Eating Habits</th>
                    <td>Eats everyone's leftovers</td>
                    <td>Nibbles at food</td>
                    <td>Hearty eater</td>
                    <td>Will eat till he explodes</td>
                </tr>
            </table>
        </toujou-table-container>
        
        <toujou-table-container class="table-container">
            <table text-alignment="\${args.tableAlignment}" class="table">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </toujou-table-container>
    \`;
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const j=["Table"];export{a as Table,j as __namedExportsOrder,g as default};
//# sourceMappingURL=table.stories-623a8f5d.js.map
