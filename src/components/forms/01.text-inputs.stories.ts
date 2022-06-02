import {Meta} from '@storybook/web-components';
import {withXD} from "storybook-addon-xd-designs";
// @ts-ignore
import {TOUJOU_BADGES} from '../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING]
    },
    argTypes: {
        state: {
            table: {
                category: "Inputs settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Input state',
            description: "Set the visible input state",
            options: ['default', 'disabled', 'success', 'error'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

const Template = (args: { state: string; }) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';
    const inputGroupDisabledClass = args.state === 'disabled' ? 'input-group--disabled' : '';
    const inputGroupErrorClass = args.state === 'error' ? 'input-group--has-error' : '';
    const inputGroupSuccessClass = args.state === 'success' ? 'input-group--has-success' : '';

    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

        	<div class="input-group input-group--type-text input-group--required ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">			
				<label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
				<span class="input__description">Enter your name so we can print out the documents correctly.</span>
        		<input
                    placeholder="Max Mustermann"
                    data-pristine-required-message="The given subject was empty."
                    class="input input--text"
                    id="testform-1000091-text-1"
                    type="text"
                    name="tx_form_formframework[testform-1000091][text-1]"
                    value=""
                    required="required"
                    ${disabledAttribute}>
                <span class="pristine-error form__error">The given subject was empty.</span>
	        </div>

            <div class="input-group input-group--type-email ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <span class="input__description">This is a description</span>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value=""
                    ${disabledAttribute}>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </div>
            
            <div class="input-group input-group--type-telephone ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <span class="input__description">This is a description</span>
                <input
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value=""
                    ${disabledAttribute}>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </div>
	
            <div class="input-group input-group--type-url ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <label class="input-label" for="testform-1000091-url-1">URL</label>
                <span class="input__description">this is a description</span>
                <input
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-url-1"
                    type="url"
                    name="tx_form_formframework[testform-1000091][url-1]"
                    value=""
                    ${disabledAttribute}>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </div>
	
            <div class="input-group input-group--type-number ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <label class="input-label" for="testform-1000091-number-1">Number</label>
                <span class="input__description">this is a descripton</span>
                <input
                    step="1"
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-number-1"
                    type="number"
                    name="tx_form_formframework[testform-1000091][number-1]"
                    value=""
                    ${disabledAttribute}>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </div>
        </form>
    `;
};

export const TextInputs = Template.bind({});

// @ts-ignore
TextInputs.args = {
    state: 'default'
}
