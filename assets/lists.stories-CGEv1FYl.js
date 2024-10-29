import{T as m}from"./badgeCustomConfig-DUXiHpL4.js";import{j as i}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as a}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s(t){const l={h1:"h1",...a(),...t.components};return i.jsx(l.h1,{id:"lists",children:"Lists"})}function h(t={}){const{wrapper:l}={...a(),...t.components};return l?i.jsx(l,{...t,children:i.jsx(s,{...t})}):s(t)}const w={title:"COMPONENTS/Lists",parameters:{badges:[m.DONE],docs:{page:h}},tags:["autodocs"]},o=()=>`
        <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Default UL</h3>
                    <ul class="list">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Primary UL</h3>
                    <ul class="list list--primary">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Secondary UL</h3>
                    <ul class="list list--secondary">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Font UL</h3>
                    <ul class="list list--font">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                       <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>
                </div>
            </toujou-text-block-column>

            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">

                    <h3>Default OL</h3>
                    <ol class="list">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Primary OL</h3>
                    <ol class="list list--primary">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Secondary OL</h3>
                    <ol class="list list--secondary">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Font OL</h3>
                    <ol class="list list--font">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <br>

        <toujou-text-block class="text-block" text-block-column-count="1" text-block-media-position="">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Separated list - default</h3>
                    <ul class="separated-list">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - comma</h3>
                    <ul class="separated-list" list-separator="comma">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - pipe</h3>
                    <ul class="separated-list" list-separator="pipe">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - centered</h3>
                    <ul class="separated-list" list-separator="pipe" list-alignment="center">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `,u=()=>`
        <main>
            ${o()}

            <section class="chapter" background-color="primary" font-color="background">
                ${o()}
            </section>

            <section class="chapter" background-color="secondary" font-color="background">
                ${o()}
            </section>

            <section class="chapter" background-color="font" font-color="background">
                ${o()}
            </section>
        </main>
    `,e=u.bind({});var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return \`
        <main>
            \${renderLists()}

            <section class="chapter" background-color="primary" font-color="background">
                \${renderLists()}
            </section>

            <section class="chapter" background-color="secondary" font-color="background">
                \${renderLists()}
            </section>

            <section class="chapter" background-color="font" font-color="background">
                \${renderLists()}
            </section>
        </main>
    \`;
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const _=["Lists"];export{e as Lists,_ as __namedExportsOrder,w as default};