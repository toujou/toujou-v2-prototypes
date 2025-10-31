import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-CDSEj45A.js";import"./iframe-6iv7WWy5.js";import"./preload-helper-C1FmrZbK.js";function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"table",children:"table"}),`
`,t.jsxs(n.p,{children:["The table element renders a table on the page. To improve how it is rendered in smaller devices we must wrap it on a ",t.jsx(n.code,{children:"toujou-table-wrapper"})," element"]}),`
`,t.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<toujou-table-container class="table-container">
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
`,t.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"table"})," element accepts a ",t.jsx(n.code,{children:"text-alignment"})," attribute, which defines the text alignment for all elements inside the table (including caption, summary, ...)"]}),`
`,t.jsx(n.p,{children:"Accepted values are:"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.code,{children:"none"})}),`
`,t.jsx(n.li,{children:t.jsx(n.code,{children:"center"})}),`
`,t.jsx(n.li,{children:t.jsx(n.code,{children:"left"})}),`
`,t.jsx(n.li,{children:t.jsx(n.code,{children:"right"})}),`
`]})]})}function s(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(d,{...e})}):d(e)}const p={title:"COMPONENTS/Table",parameters:{docs:{page:s}},argTypes:{tableAlignment:{table:{category:"Table settings",defaultValue:{summary:"none"}},name:"Table alignment",description:"Set the alignment of the table's text",options:["none","center","left","right"],control:{type:"radio"},required:!0}}},c=e=>`
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-table-container class="table-container">
                <table text-alignment="${e.tableAlignment}" class="table">
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
                <table text-alignment="${e.tableAlignment}" class="table">
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
        </main>
    `,a=c.bind({});a.args={tableAlignment:"none"};var l,i,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args: TableStoryProps) => {
  return \`
        <main>
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
        </main>
    \`;
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const x=["Table"];export{a as Table,x as __namedExportsOrder,p as default};
