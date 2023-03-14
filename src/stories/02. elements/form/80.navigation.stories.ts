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
        badges: [TOUJOU_BADGES.TESTING],
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
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true"
        >
            
            <toujou-input-group class="input-group input-group--text input-group--required">
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
            
            <div class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button" class="button form-navigation__button" button-variant="primary" type="submit"  name="tx_form_formframework[kontaktformular-8][__currentPage]" value="2">
                        Submit
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button is="toujou-button" formnovalidate="formnovalidate" class="button form-navigation__button" button-variant="primary" button-type="border" type="submit" name="tx_form_formframework[kontaktformular-8][__currentPage]" value="0">Cancel</button>
                </span>
            </div>	
        </form>
    `;
};

export const FormNavigation = Template.bind({});
