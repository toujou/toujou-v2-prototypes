import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import thirdPartyContentDocs from './third-party-content.docs.mdx';

export default {
    title: 'COMPONENTS/Third Party Content',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: thirdPartyContentDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <toujou-third-party-content contentType="html">
        <!--   The content of the template element must be inside html comments -->
        <template><!--{htmlElements.html.content -> f:format.raw()}--></template>
        <div class="third-party-content__placeholder" slot="placeholder">
            <p class="third-party-content__message">
                This is the placeholder message
            </p>
            <f:if condition="{parameter:settings.theme.trackingconsent_pagelink}">
                <p class="third-party-content__message third-party-content__message-privacy-policy">
                    Privacy policy message
                    <a class="third-party__privacy-policy-link" href="#">
                        datenschutz
                    </a>
                </p>
            </f:if>
            <div class="third-party-content__button-container">
                <button class="button button--primary third-party-content__button" ttpc-showcontentonce>Show once</button>
                <toujou-consent class="consent"
                                consentType="html"
                                consentLifetime="{settings.theme.trackingconsent_externals_lifetime}"
                                listenTo="click"
                                listenOn=".consent__button"
                                snackbarMessage="3rd party content snackbar message">
                    <button class="button button--primary third-party-content__button consent__button" allowcontenttype>Always allow</button>
                </toujou-consent>
            </div>
        </div>
        <!--  This is a container for some elements that need to be rendered in the Light DOM  -->
        <div class="toujou-third-party-content__templated-content"></div>
    </toujou-third-party-content>
    `;
};

export const ThirdPartyContent = Template.bind({});


