/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import thirdPartyContentDocs from './third-party-content.docs.mdx';

export default {
    title: 'COMPONENTS/Third Party Content',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: thirdPartyContentDocs,
        },
    },
    argTypes: {
        showPoster: {
            table: {
                category: "third party content settings",
            },
            name: 'Show poster image',
            description: "Show a poster image as background",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
        isVideo: {
            table: {
                category: "third party content settings",
            },
            name: 'Video content',
            description: "Emulate element with video element content",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface ThirdPartyContentStoryProps {
    showPoster: boolean;
    isVideo: boolean;
}

window.addEventListener('click', (event: Event) => {
    const clickTarget = event.target as HTMLElement;
    if (clickTarget.getAttribute('id') === "clearConsentsButton") {
        localStorage.removeItem('consentsState');
        document.location.reload();
    }
})

const posterImageStyles = () => {
    return `
        background-image: url(https://picsum.photos/2000);
        background-size: cover;
    `
}


const Template: StoryFn<ThirdPartyContentStoryProps> = (args: ThirdPartyContentStoryProps) => {
    return `
        <main>
            <p>With this button you can remove all consents from the local storage. For test purposes only</p>
            <p><button class="button" id="clearConsentsButton">Remove all consents</button></p>

            <toujou-third-party-content
                class="third-party-content"
                contentType="${args.isVideo ? 'video' : 'maps'}"
                ${args.showPoster ? `style="${posterImageStyles()}"` : ''}
                ${args.showPoster ? `has-poster-image` : ''}

            >
            <!--   The content of the template element must be inside html comments -->
            <template>
                <!--{htmlElements.html.content -> f:format.raw()}-->
                <h1>This is the content inside the template</h1>
            </template>

            <div class="third-party-content__placeholder" slot="placeholder">
                <p class="third-party-content__message">
                    This is the placeholder message. Privacy policy message <a class="third-party__privacy-policy-link" href="#">Datenschutz</a>
                </p>
                <div class="third-party-content__buttons">
                    <button
                        class="button third-party-content__button"
                        button-size="small"
                        button-type="border"
                        button-variant="primary"
                        ttpc-showcontentonce
                    >
                        Show once
                    </button>
                    <toujou-consent class="consent"
                                    consentType="maps"
                                    consentLifetime="0"
                                    listenTo="click"
                                    listenOn=".consent__button"
                                    snackbarMessage="3rd party content snackbar message">
                        <button
                            class="button button--primary third-party-content__button consent__button"
                            allowcontenttype
                            button-size="small"
                            button-type="default"
                            button-variant="primary"
                        >
                            Always allow
                        </button>
                    </toujou-consent>
                </div>
            </div>
            <!--  This is a container for some elements that need to be rendered in the Light DOM  -->
            <div class="toujou-third-party-content__templated-content"></div>
        </toujou-third-party-content>

        <toujou-consent-widget
                class="consent-widget"
                listento="click"
                listenon="#consentSaveButton,#consentAcceptAllButton"
                warningvisible="false">

                <div class="consent-widget__header" slot="consentWidgetHeader">
                    <h4 class="consent-widget__title">Cookies &amp; Drittinhalte</h4>
                    <p class="consent-widget__description">
                        Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer <a class="consent-widget__description-link" href="/datenschutz/">Datenschutzerklärung.</a>
                    </p>
                </div>

                <div class="consent-widget__bottom">
                    <details class="consent-widget__details">
                        <summary class="consent-widget__details-summary">
                            <span
                                id="consentSettingsButton"
                                class="button consent-widget__button"
                                button-type="default"
                                button-size="small"
                                button-variant="font"
                            >Einstellungen</span>
                        </summary>
                        <div class="consent-widget__consent-elements">
                            <toujou-consent class="consent" consenttype="tracking" consentlifetime="1" snackbarmessage="" listento="change" listenon="#trackingInput-box" prechecked="1">
                                <toujou-input-group class="input-group" input-group-type="checkbox">
                                    <div class="checkbox-group">
                                        <input class="checkbox checkbox--single consent__checkbox" id="trackingInput-box" type="checkbox">
                                        <label class="checkbox-group__label" for="trackingInput-box">
                                            <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                        </label>
                                    </div>
                                </toujou-input-group>
                            </toujou-consent>

                            <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                                <toujou-input-group class="input-group" input-group-type="checkbox">
                                    <div class="checkbox-group">
                                        <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                                        <label class="checkbox-group__label" for="videoInput-box">
                                            <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                                        </label>
                                    </div>
                                </toujou-input-group>
                            </toujou-consent>

                            <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                                <toujou-input-group class="input-group" input-group-type="checkbox">
                                    <div class="checkbox-group">
                                        <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                                        <label class="checkbox-group__label" for="mapsInput-box">
                                            <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                                        </label>
                                    </div>
                                </toujou-input-group>
                            </toujou-consent>

                            <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                                <toujou-input-group class="input-group" input-group-type="checkbox">
                                    <div class="checkbox-group">
                                        <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                                        <label class="checkbox-group__label" for="htmlInput-box">
                                           <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                                        </label>
                                    </div>
                                </toujou-input-group>
                            </toujou-consent>

                        </div>
                    </details>

                    <button id="consentAcceptAllButton" accept-all="" class="button consent-widget__button" button-type="default" button-size="small" button-variant="primary">Alles akzeptieren</button>
                    <button id="consentSaveButton" class="button consent-widget__button" button-size="small" button-variant="primary" button-type="default">OK</button>
                </div>
            </toujou-consent-widget>
        </main>
    `;
};

export const ThirdPartyContent = Template.bind({});

ThirdPartyContent.args = {
    showPoster: false,
    isVideo: false
}
