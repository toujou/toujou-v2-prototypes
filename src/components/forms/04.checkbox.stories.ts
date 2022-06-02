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

const Template = (args) => {
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
	
            <div class="input-group input-group--type-checkbox ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <div class="checkbox-group">
                     <input
                            data-pristine-required-message="The given subject was empty."
                            class="add-on checkbox checkbox--single"
                            id="testform-1000091-checkbox-1"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][checkbox-1]"
                            value="1"
                            ${disabledAttribute}>
                    <label class="add-on checkbox-group__label" for="testform-1000091-checkbox-1">This is the label</label>
                    <span class="form__description checkbox-group__description">This is the description</span>
                    <span class="pristine-error form__error checkbox-group__error">The given subject was empty.</span>
                </div>
            </div>
	
	
	        <div class="input-group input-group--type-multi-check multi-checkbox-group ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
				<label class="multi-checkbox-group__label" for="testform-1000091-multicheckbox-1">This is the label</label>
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_1"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="aaaaa"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Option one</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_2"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="bbbbb"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">Option two</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_3"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="ccccc"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">Option three</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_4"
                        type="checkbox" 
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="ddddd"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">Option four</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_5"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="eeeee"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">Option five</label>
                </div>
            
                <span class="form__description form__description--after-group">This is a description</span>
				<span class="form__error form__error--after-group">The given subject was empty.</span>

	        </div>
	
        </form>
    `;
};

export const CheckboxInputs = Template.bind({});

// @ts-ignore
CheckboxInputs.args = {
    state: 'default'
}
