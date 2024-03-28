import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as n}from"./jsx-runtime-6a2ad889.js";import{u as d}from"./index-1b6e96e1.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";function o(t){const i={h1:"h1",...d(),...t.components};return n.jsx(i.h1,{id:"text-elements",children:"Text elements"})}function s(t={}){const{wrapper:i}={...d(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(o,{...t})}):o(t)}const g={title:"COMPONENTS/Text Elements",parameters:{badges:[r.DONE],docs:{page:s}},argTypes:{tableAlignment:{table:{category:"Table settings",defaultValue:{summary:"none"}},name:"Table alignment",description:"Set the alignment of the table's text",options:["none","center","left","right"],control:{type:"radio"},defaultValue:["none"],required:!0}},tags:["autodocs"]},c=t=>`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ul>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ul>
                        </li>
                        <li>item five</li>
                    </ul>

                    <ol>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ol>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ol>
                        </li>
                        <li>item five</li>
                    </ol>

                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>

                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-table-container class="table-container">
            <table text-alignment="${t.tableAlignment}" class="table">
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
            <table text-alignment="${t.tableAlignment}" class="table">
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
    `,e=c.bind({});e.args={tableAlignment:"none"};var l,a,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: TableStoryProps) => {
  return \`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ul>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ul>
                        </li>
                        <li>item five</li>
                    </ul>

                    <ol>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ol>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ol>
                        </li>
                        <li>item five</li>
                    </ol>

                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>
                    <p>dsfhsdfhsfgjdfgj</p>

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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const x=["TextElementsExamples"];export{e as TextElementsExamples,x as __namedExportsOrder,g as default};
