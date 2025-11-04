import{M as a}from"./felogin.docs-_7_qUR0A.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DeVac3uJ.js";import"./iframe-DpvgdX74.js";import"./preload-helper-C1FmrZbK.js";const m={title:"COMPONENTS/felogin",parameters:{docs:{page:a}}},n=()=>`
        <div class="felogin">
            <h3 class="felogin__headline">Benutzeranmeldung</h3>
            <p class="felogin__intro">Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein, um sich an der Website anzumelden.</p>

            <form
                spellcheck="false"
                method="post"
                target="_top"
                class="toujou-form form felogin__form"
                action="#"
            >
                <fieldset class="fieldset">
                    <legend class="fieldset__legend">Anmelden</legend>

                    <toujou-input-group class="input-group">
                        <label class="input-label">Benutzername:</label>
                        <input type="text" name="user" class="input input--text">
                    </toujou-input-group>
                    <toujou-input-group class="input-group">
                        <label class="input-label">Passwort:</label>
                        <input data-rsa-encryption="" type="password" name="pass" value="" class="input input--text">
                    </toujou-input-group>
                    <nav class="form-navigation">
                        <input class="button form-navigation__button" type="submit" value="Anmelden" name="submit">
                    </nav>
                </fieldset>

            </form>

            <p class="felogin__password-recover">
                <a href="#" class="felogin__password-recover-link">Passwort vergessen?</a>
            </p>
        </div>
    `,r=()=>`
       ${n()}

       <section class="chapter" background-color="primary">
            ${n()}
        </section>
    `,e=r.bind({});var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
       \${feloginBlock()}

       <section class="chapter" background-color="primary">
            \${feloginBlock()}
        </section>
    \`;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Login"];export{e as Login,g as __namedExportsOrder,m as default};
