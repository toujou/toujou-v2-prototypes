import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import feloginDocs from './felogin.docs.mdx';

export default {
    title: 'COMPONENTS/felogin',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: feloginDocs,
        },
    },
} satisfies Meta;

const feloginBlock = () => {
    return `
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

export const Login = Template.bind({});
