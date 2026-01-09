import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-wUAnol_h.js";import"./iframe-CDgTqnN9.js";import"./preload-helper-C1FmrZbK.js";function m(t){const i={h1:"h1",p:"p",...r(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.h1,{id:"times-list",children:"Times list"}),`
`,s.jsx(i.p,{children:"Render a list of times, for instance repeating opening hours"})]})}function o(t={}){const{wrapper:i}={...r(),...t.components};return i?s.jsx(i,{...t,children:s.jsx(m,{...t})}):m(t)}const u={title:"COMPONENTS/TimesList",parameters:{docs:{page:o}}},c=()=>`
        <ul class="list times-list">
            <li class="times-list__item">
                <time datetime="2025-11-29T11:00" class="times-list__time">29.11.2025 (Sa)</time>, 11:00 - 17:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 - 17:00 Uhr
                <span class="times-list__info">Einlass: 19 Uhr</span>
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
        </ul>
    `,e=c.bind({});var l,n,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
        <ul class="list times-list">
            <li class="times-list__item">
                <time datetime="2025-11-29T11:00" class="times-list__time">29.11.2025 (Sa)</time>, 11:00 - 17:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 - 17:00 Uhr
                <span class="times-list__info">Einlass: 19 Uhr</span>
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
        </ul>
    \`;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const T=["TimesList"];export{e as TimesList,T as __namedExportsOrder,u as default};
