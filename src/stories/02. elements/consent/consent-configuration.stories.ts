import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import consentDocs from "./consent.docs.mdx";

export default {
    title: 'COMPONENTS/Consent',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: consentDocs,
        },
    },
    argTypes: {
        showError: {
            table: {
                category: "Consent configuration settings",
                defaultValue: { summary: false},
            },
            name: 'Show error',
            description: "Show the consent configuration error",
            control: { type: 'boolean' },
            defaultValue: false,
            required: true,
        },
    }
} as Meta;

interface ConsentConfigurationStoryProps {
    showError: boolean;
}

const Template: Story<ConsentConfigurationStoryProps> = (args: ConsentConfigurationStoryProps) => {
    return `       
        <toujou-consent-widget
            class="consent-widget"
            listento="click"
            listenon="#consentSaveButton,#consentAcceptAllButton"
            warningvisible="${args.showError}"
            in-page>
    
            <div class="consent-widget__header" slot="consentWidgetHeader">
                <h4 class="consent-widget__title">Cookies &amp; Drittinhalte</h4>
                <p class="consent-widget__description">
                    Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer <a class="consent-widget__description-link" href="/datenschutz/">Datenschutzerklärung.</a>
                </p>
            </div>

            <div class="consent-widget__bottom">
                ${args.showError ? `
                    <p class="consent-widget__warning" slot="consentWarning">
                        <toujou-icon class="icon" icon-name="tools" icon-color="warning" icon-size="normal"></toujou-icon>
                        Bitte speichern Sie Ihre Datenschutzeinstellungen zunächst im Dialogfenster.
                    </p>
                `: `
                    <div class="consent-widget__consent-elements">                
                    <toujou-consent class="consent" consenttype="tracking" consentlifetime="1" snackbarmessage="" listento="change" listenon="#trackingInput-box" prechecked="1">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single" id="trackingInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="trackingInput-box">
                                    <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>
                    
                    <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">                        
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single" id="videoInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="videoInput-box">
                                    <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>                                    
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>
    
                    <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single" id="mapsInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="mapsInput-box">
                                    <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>                                    
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>
    
                    <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single" id="htmlInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="htmlInput-box">
                                   <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>                                    
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>
    
                </div>
                `}
            </div>
        </toujou-consent-widget>
     `;
};

export const ConsentConfiguration = Template.bind({});