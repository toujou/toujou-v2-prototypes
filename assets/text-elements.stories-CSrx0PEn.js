import{M as d}from"./text-elements.docs-xxeQCrcD.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CRzp4L3x.js";import"./iframe-D5j8fre0.js";import"./preload-helper-C1FmrZbK.js";const m={title:"COMPONENTS/Text Elements",parameters:{docs:{page:d}},argTypes:{tableAlignment:{table:{category:"Table settings",defaultValue:{summary:"none"}},name:"Table alignment",description:"Set the alignment of the table's text",options:["none","center","left","right"],control:{type:"radio"},required:!0}},tags:["autodocs"]},l=e=>`
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    `,t=l.bind({});t.storyName="Text Elements - Examples";t.args={tableAlignment:"none"};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"Template.bind({}) as any",...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const p=["TextElementsExamples"];export{t as TextElementsExamples,p as __namedExportsOrder,m as default};
