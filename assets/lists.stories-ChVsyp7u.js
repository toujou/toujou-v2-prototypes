import{T as c}from"./badgeCustomConfig-oxGPBDYz.js";import{j as e}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as n}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function l(i){const t={h1:"h1",...n(),...i.components};return e.jsx(t.h1,{id:"lists",children:"Lists"})}function p(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(l,{...i})}):l(i)}const b={title:"COMPONENTS/Lists",parameters:{badges:[c.DONE],docs:{page:p}},tags:["autodocs"]},a=()=>`
        <h3>Default list</h3>
        <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol>
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Primary list</h3>
        <ul class="list list--primary">
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol class="list list--primary">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Secondary list</h3>
        <ul class="list list--secondary">
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol class="list list--secondary">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Font list</h3>
        <ul class="list list--font">
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <h3>Separated list - default</h3>
        <ul class="separated-list">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <ol class="list list--font">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Separated list - comma</h3>
        <ul class="separated-list" list-separator="comma">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <h3>Separated list - pipe</h3>
        <ul class="separated-list" list-separator="pipe">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <h3>Separated list - centered</h3>
        <ul class="separated-list" list-separator="pipe" list-alignment="center">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>
    `,d=()=>`
        ${a()}

        <section class="chapter" background-color="primary" font-color="background">
            ${a()}
        </section>
    `,s=d.bind({});var r,o,m;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return \`
        \${renderLists()}

        <section class="chapter" background-color="primary" font-color="background">
            \${renderLists()}
        </section>
    \`;
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const g=["Lists"];export{s as Lists,g as __namedExportsOrder,b as default};
