import{T as m}from"./badgeCustomConfig-oxGPBDYz.js";import{j as s}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as n}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function e(l){const t={h1:"h1",...n(),...l.components};return s.jsx(t.h1,{id:"lists",children:"Lists"})}function u(l={}){const{wrapper:t}={...n(),...l.components};return t?s.jsx(t,{...l,children:s.jsx(e,{...l})}):e(l)}const x={title:"COMPONENTS/Lists",parameters:{badges:[m.DONE],docs:{page:u}},tags:["autodocs"]},o=()=>`
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
                            <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
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
                        <li>three</li>
                    </ol>
                </div>
            </toujou-text-block-column>

            <br>

            </toujou-text-block>
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
    `,d=()=>`
        ${o()}

        <section class="chapter" background-color="primary" font-color="background">
            ${o()}
        </section>
    `,i=d.bind({});var a,r,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        \${renderLists()}

        <section class="chapter" background-color="primary" font-color="background">
            \${renderLists()}
        </section>
    \`;
}`,...(c=(r=i.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const k=["Lists"];export{i as Lists,k as __namedExportsOrder,x as default};
