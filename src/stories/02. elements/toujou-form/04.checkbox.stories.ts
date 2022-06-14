import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import ToujouFormDocs from './toujou-form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouFormDocs,
        }
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

interface ToujouCheckboxStoryProps {
    state: string;
}

const Template: Story<ToujouCheckboxStoryProps> = (args: ToujouCheckboxStoryProps) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';

    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="toujou-form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
	
            <toujou-input-group
                class="toujou-input-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
                input-group-type="checkbox">
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
                    <toujou-form-description class="toujou-form-description toujou-form-description--checkbox-group">This is the description</toujou-form-description>
                    <toujou-form-error class="pristine-error toujou-form-error toujou-form-error--checkbox-group">The given subject was empty.</toujou-form-error>
                </div>
            </toujou-input-group>
	
	
	        <toujou-input-group
	            class="toujou-input-group multi-checkbox-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
                input-group-type="multi-check">
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
            
                <toujou-form-description class="toujou-form-description toujou-form-description--after-group">This is a description</toujou-form-description>
				<toujou-form-error class="toujou-form-error toujou-form-error--after-group">The given subject was empty.</toujou-form-error>

	        </toujou-input-group>
	
        </form>
    `;
};

export const CheckboxInputs = Template.bind({});

CheckboxInputs.args = {
    state: 'default'
}
