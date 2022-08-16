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
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

        	<toujou-form-row class="form-row">

                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="12"
                    input-group-span-lg="12">
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
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="6"
                    input-group-span-lg="6">
                    <label for="testform-1000091-text-2" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-2"
                           type="text" name="tx_form_formframework[testform-1000091][text-2]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="6"
                    input-group-span-lg="6">
                    <label for="testform-1000091-text-3" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-3"
                           type="text" name="tx_form_formframework[testform-1000091][text-3]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="4"
                    input-group-span-lg="4">
                    <label for="testform-1000091-text-4" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-4"
                           type="text" name="tx_form_formframework[testform-1000091][text-4]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="8"
                    input-group-span-lg="8">
                    <label for="testform-1000091-text-5" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-5"
                           type="text" name="tx_form_formframework[testform-1000091][text-5]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="8"
                    input-group-span-md="8"
                    input-group-span-lg="8">
                    <label for="testform-1000091-text-6" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-6"
                           type="text" name="tx_form_formframework[testform-1000091][text-6]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
            
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="4"
                    input-group-span-md="4"
                    input-group-span-lg="4">
                    <label for="testform-1000091-text-7" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-7"
                           type="text" name="tx_form_formframework[testform-1000091][text-7]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
            
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="3"
                    input-group-span-lg="3">
                    <label for="testform-1000091-text-8" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-8"
                           type="text" name="tx_form_formframework[testform-1000091][text-8]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="3"
                    input-group-span-lg="3">
                    <label for="testform-1000091-text-9" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-9"
                           type="text" name="tx_form_formframework[testform-1000091][text-9]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
            
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="3"
                    input-group-span-lg="3">
                    <label for="testform-1000091-text-10" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-10"
                           type="text" name="tx_form_formframework[testform-1000091][text-10]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
            
                <toujou-input-group
                    class="input-group input-group--text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="3"
                    input-group-span-lg="3">
                    <label for="testform-1000091-text-11" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-11"
                           type="text" name="tx_form_formframework[testform-1000091][text-11]"
                           value="">
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
                
	        </toujou-form-row>
        	
        </form>
    `;
};

export const FormGrid = Template.bind({});

