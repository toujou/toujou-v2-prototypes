import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: formDocs,
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

interface ToujouTextInputsStoryProps {
    state: string;
}

const Template: Story<ToujouTextInputsStoryProps> = (args: ToujouTextInputsStoryProps) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';

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

        	<toujou-input-group
        	    class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
        	    ${args.state === 'disabled' ? 'is-disabled' : ''}
        	    input-group-type="text">			
				<label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
				<toujou-form-description class="form-description">Enter your name so we can print out the documents correctly.</toujou-form-description>
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
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>

            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="email">
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="telephone">
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
	
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="url">
                <label class="input-label" for="testform-1000091-url-1">URL</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-url-1"
                    type="url"
                    name="tx_form_formframework[testform-1000091][url-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
	
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="number">
                <label class="input-label" for="testform-1000091-number-1">Number</label>
                <toujou-form-description class="form-description">This is a descripton</toujou-form-description>
                <input
                    step="1"
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class="form-control input input--text"
                    id="testform-1000091-number-1"
                    type="number"
                    name="tx_form_formframework[testform-1000091][number-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
        </form>
    `;
};

export const TextInputs = Template.bind({});

TextInputs.args = {
    state: 'default'
}
