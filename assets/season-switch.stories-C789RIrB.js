const m={title:"COMPONENTS/Tourism/Season Switch"};function d(){console.log("Starting MOCK: toujou tourism season-trigger js");const r=(a,n)=>{a.forEach(s=>{s instanceof HTMLElement&&(s.dataset.season!==n?s.classList.remove("season-trigger-action--visible"):s.classList.add("season-trigger-action--visible"))})},e=document.getElementsByClassName("season-trigger");if(e.length>0){const a=e[0].value,n=document.querySelectorAll("[data-season]");r(n,a);const s=o=>{Array.from(e).forEach(i=>{i.value=o})};Array.from(e).forEach(o=>{o.addEventListener("change",i=>{const c=i.target.value;r(n,c),s(c)})})}}const g=()=>(setTimeout(()=>{d()}),`
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
    `),t=g.bind({});var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["SeasonSwitch"];export{t as SeasonSwitch,h as __namedExportsOrder,m as default};
