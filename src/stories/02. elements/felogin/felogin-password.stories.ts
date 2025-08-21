import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import feloginDocs from './felogin.docs.mdx';

export default {
    title: 'COMPONENTS/felogin',
    parameters: {
        docs: {
            page: feloginDocs,
        },
    },
} satisfies Meta;

const feloginBlock = () => {
    return `
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
    `;
}

const Template = () => {
    return `
       ${feloginBlock()}

       <section class="chapter" background-color="primary">
            ${feloginBlock()}
        </section>
    `;
};

export const ForgotPassword = Template.bind({});
