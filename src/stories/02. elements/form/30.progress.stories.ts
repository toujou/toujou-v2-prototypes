import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
        badges: [TOUJOU_BADGES.PROGRESS],
        docs: {
            page: formDocs,
        }
    },
    argTypes: {}
} as Meta;

const Template = () => {
    return `
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <toujou-form-progress class="form-progress">
            <h3 class="form-progress__headline">Schritt 3 von 4</h3>
    
            <ul class="form-progress-bar">
                <li class="form-progress__item" completed >
                    <span class="form-progress__index">1</span>
                </li>
                <li class="form-progress__item" completed>
                    <span class="form-progress__index">2</span>
                </li>
                <li class="form-progress__item" active>
                    <span class="form-progress__index">3</span>
                </li>
                <li class="form-progress__item">
                    <span class="form-progress__index">3</span>
                </li>
            </ul>
        </toujou-form-progress>
     
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
            
            <toujou-input-group class="input-group input-group--text">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
            
            <toujou-input-group class="input-group input-group--email input-group--email">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
            
            <nav class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button"
                            class="button form-navigation__button"
                            button-variant="primary"
                            button-icon-position="right"
                            type="submit" 
                            name="tx_form_formframework[kontaktformular-8][__currentPage]"
                            value="2">
                        <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                        Next step
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button is="toujou-button"
                            formnovalidate="formnovalidate"
                            class="button form-navigation__button"
                            button-variant="primary"
                            button-icon-position="left"
                            button-type="border"
                            type="submit"
                            name="tx_form_formframework[kontaktformular-8][__currentPage]"
                            value="0">
                        <toujou-icon class="icon button__icon" icon-name="arrow-left"></toujou-icon>
                        Previous step
                    </button>
                </span>
            </nav>	
        </form>
     
    `;
};

export const FormProgress = Template.bind({});

