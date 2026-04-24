const a={title:"COMPONENTS/felogin"},s=()=>`
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
    `,t=()=>`
       ${s()}

       <section class="chapter" background-color="primary">
            ${s()}
        </section>
    `,e=t.bind({});var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return \`
       \${feloginBlock()}

       <section class="chapter" background-color="primary">
            \${feloginBlock()}
        </section>
    \`;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const l=["ForgotPassword"];export{e as ForgotPassword,l as __namedExportsOrder,a as default};
