import{T as t}from"./badgeCustomConfig-oxGPBDYz.js";import{M as a}from"./felogin.docs-B90yZEta.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const g={title:"COMPONENTS/felogin",parameters:{badges:[t.TESTING],docs:{page:a}},tags:["autodocs"]},s=()=>`
        <div class="felogin">
            <h3 class="felogin__headline">Password vergessen</h3>
            <p class="felogin__intro">Bitte geben Sie Ihren Benutzernamen oder Ihre E-Mail-Adresse ein. Anweisungen zum Zurücksetzen Ihres Passworts werden Ihnen umgehend per E-Mail zugesandt.</p>

            <form
                spellcheck="false"
                method="post"
                target="_top"
                class="toujou-form form felogin__form"
                action="#"
            >
                <fieldset class="fieldset">
                    <legend class="fieldset__legend">Passwort zurücksetzen</legend>

                    <toujou-input-group class="input-group">
                        <label class="input-label">Benutzername oder E-Mail-Adresse:</label>
                        <input type="text" name="tx_felogin_login[userIdentifier]" class="input input--text">
                    </toujou-input-group>
                    <nav class="form-navigation">
                        <input class="button form-navigation__button" type="submit" value="Passwort zurücksetzen" name="submit">
                    </nav>
                </fieldset>

            </form>

            <p class="felogin__password-recover">
                <a href="#" class="felogin__password-recover-link">Zurück zum Anmeldeformular</a>
            </p>
        </div>
    `,i=()=>`
       ${s()}

       <section class="chapter" background-color="primary">
            ${s()}
        </section>
    `,e=i.bind({});var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
       \${feloginBlock()}

       <section class="chapter" background-color="primary">
            \${feloginBlock()}
        </section>
    \`;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const f=["ForgotPassword"];export{e as ForgotPassword,f as __namedExportsOrder,g as default};
