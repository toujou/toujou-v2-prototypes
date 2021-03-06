import { Story, Meta } from '@storybook/web-components';
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
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: formDocs,
        }
    },
    argTypes: {
        isRequired: {
            table: {
                category: "Inputs settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Required',
            description: "Toggle the inputs 'required' attribute",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    }
} as Meta;

interface ToujouRequireInputStoryProps {
    isRequired: any;
}

const Template: Story<ToujouRequireInputStoryProps> = (args: ToujouRequireInputStoryProps) => {
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
        	    class="input-group"
        	    input-group-type="text"
        	    ${args.isRequired ? 'is-required' : ''}>			
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
                    required="required">
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>

            <toujou-input-group
                class="input-group"
                input-group-type="email"
                ${args.isRequired ? 'is-required' : ''}>
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value="">
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
                class="input-group"
                input-group-type="telephone"
                ${args.isRequired ? 'is-required' : ''}>
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value="">
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
	
        </form>
    `;
};

export const Required = Template.bind({});

Required.args = {
    isRequired: false
}
