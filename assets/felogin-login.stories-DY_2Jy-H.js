import{T as a}from"./badgeCustomConfig-oxGPBDYz.js";import{M as r}from"./felogin.docs-B90yZEta.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const d={title:"COMPONENTS/felogin",parameters:{badges:[a.TESTING],docs:{page:r}},tags:["autodocs"]},n=()=>`
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
    `,i=()=>`
       ${n()}

       <section class="chapter" background-color="primary">
            ${n()}
        </section>
    `,e=i.bind({});var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
       \${feloginBlock()}

       <section class="chapter" background-color="primary">
            \${feloginBlock()}
        </section>
    \`;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const f=["Login"];export{e as Login,f as __namedExportsOrder,d as default};
