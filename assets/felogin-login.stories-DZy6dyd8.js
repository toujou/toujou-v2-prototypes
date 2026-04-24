const r={title:"COMPONENTS/felogin"},n=()=>`
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
    `,a=()=>`
       ${n()}

       <section class="chapter" background-color="primary">
            ${n()}
        </section>
    `,e=a.bind({});var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
       \${feloginBlock()}

       <section class="chapter" background-color="primary">
            \${feloginBlock()}
        </section>
    \`;
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const l=["Login"];export{e as Login,l as __namedExportsOrder,r as default};
