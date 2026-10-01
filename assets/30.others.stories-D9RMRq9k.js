const u={title:"COMPONENTS/Forms",argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},required:!0}}},r=e=>{const s=e.state==="disabled"?"disabled":"";return`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--multi-select ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
                <span class="input-description">This is a description</span>
                <input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        ${s}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                    <option value="eeeee">eeeee</option>
                    <option value="ggggg">ggggg</option>
                    <option value="hhhhh">hhhhh</option>
                    <option value="kkkkk">kkkkk</option>
                    <option value="last">last option</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group inout-group--static-text">
                <div class="form-static-text">
                    <p class="form-static-text__text">This is static text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-input-group>

        </form>
    `},t=r.bind({});t.args={state:"default"};var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToujouOtherInputStoryProps) => {
  const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';
  return \`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--multi-select \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
                <span class="input-description">This is a description</span>
                <input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        \${disabledAttribute}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                    <option value="eeeee">eeeee</option>
                    <option value="ggggg">ggggg</option>
                    <option value="hhhhh">hhhhh</option>
                    <option value="kkkkk">kkkkk</option>
                    <option value="last">last option</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group inout-group--static-text">
                <div class="form-static-text">
                    <p class="form-static-text__text">This is static text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-input-group>

        </form>
    \`;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const l=["OtherInputs"];export{t as OtherInputs,l as __namedExportsOrder,u as default};
