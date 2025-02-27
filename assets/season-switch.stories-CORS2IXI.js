import{T as h}from"./badgeCustomConfig-DUXiHpL4.js";import{j as c}from"./jsx-runtime-CS_Wz6c_.js";import{useMDXComponents as g}from"./index-C8FVCAkB.js";import"./index-Dy2Ak0OH.js";import"./_commonjsHelpers-Cpj98o6Y.js";function p(s){const e={h1:"h1",...g(),...s.components};return c.jsx(e.h1,{id:"season-switch",children:"season-switch"})}function v(s={}){const{wrapper:e}={...g(),...s.components};return e?c.jsx(e,{...s,children:c.jsx(p,{...s})}):p(s)}const j={title:"COMPONENTS/Tourism/Season Switch",parameters:{badges:[h.TESTING],docs:{page:v}},argTypes:{},tags:["autodocs"]};function w(){console.log("Starting MOCK: toujou tourism season-trigger js");const s=(a,t)=>{a.forEach(n=>{n instanceof HTMLElement&&(n.dataset.season!==t?n.classList.remove("season-trigger-action--visible"):n.classList.add("season-trigger-action--visible"))})},e=document.getElementsByClassName("season-trigger");if(e.length>0){const a=e[0].value,t=document.querySelectorAll("[data-season]");s(t,a);const n=i=>{Array.from(e).forEach(r=>{r.value=i})};Array.from(e).forEach(i=>{i.addEventListener("change",r=>{const l=r.target.value;s(t,l),n(l)})})}}const f=()=>(setTimeout(()=>{w()}),`
        <style>
            [data-season] {display: none;}
            .season-trigger-action--visible[data-season] {display: block;}
        </style>

        <main>
            <toujou-season-switch class="season-switch">
                <toujou-input-group class="input-group input-group--single-select season-switch__input-group">
                    <label class="input-label season-switch__label" for="seasonswitch">Season switch</label>
                    <div class="select__wrapper season-switch__select-wrapper">
                        <select
                            data-pristine-required-message-de="The given subject was empty."
                            class="season-trigger form-control input select season-switch__select" id="seasonswitch"
                            name="seasonswitch"
                        >
                            <option class="select__option" value="2025">2025</option>
                            <option class="select__option" value="2026">2026</option>
                            <option class="select__option" value="2027">2027</option>
                        </select>
                    </div>
                </toujou-input-group>
            </toujou-season-switch>
            
            <section style="border: 1px solid grey; padding: var(--spacing-xl) var(--spacing-normal); max-width: var(--content-max-width); margin: 4rem auto 0;">
                <div data-season="2025">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2025 content</p>
                </div>
                <div data-season="2026">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2026 content<h3>
                </div>
                <div data-season="2027">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2027 content</p>
                </div>
            </section>
        </main>
    `),o=f.bind({});var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  setTimeout(() => {
    tourismSeasonTriggerJSMock();
  });
  return \`
        <style>
            [data-season] {display: none;}
            .season-trigger-action--visible[data-season] {display: block;}
        </style>

        <main>
            <toujou-season-switch class="season-switch">
                <toujou-input-group class="input-group input-group--single-select season-switch__input-group">
                    <label class="input-label season-switch__label" for="seasonswitch">Season switch</label>
                    <div class="select__wrapper season-switch__select-wrapper">
                        <select
                            data-pristine-required-message-de="The given subject was empty."
                            class="season-trigger form-control input select season-switch__select" id="seasonswitch"
                            name="seasonswitch"
                        >
                            <option class="select__option" value="2025">2025</option>
                            <option class="select__option" value="2026">2026</option>
                            <option class="select__option" value="2027">2027</option>
                        </select>
                    </div>
                </toujou-input-group>
            </toujou-season-switch>
            
            <section style="border: 1px solid grey; padding: var(--spacing-xl) var(--spacing-normal); max-width: var(--content-max-width); margin: 4rem auto 0;">
                <div data-season="2025">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2025 content</p>
                </div>
                <div data-season="2026">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2026 content<h3>
                </div>
                <div data-season="2027">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2027 content</p>
                </div>
            </section>
        </main>
    \`;
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["SeasonSwitch"];export{o as SeasonSwitch,x as __namedExportsOrder,j as default};
