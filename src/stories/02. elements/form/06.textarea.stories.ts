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
        badges: [TOUJOU_BADGES.PROGRESS],
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

interface ToujouTextareaStoryProps {
    state: string;
}

const Template: Story<ToujouTextareaStoryProps> = (args: ToujouTextareaStoryProps) => {
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
            
            <toujou-input-group class="input-group input-group--textarea ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}" ${args.state === 'disabled' ? 'is-disabled' : ''}>
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<span class="input-description">This is a description</span>
		        <textarea placeholder="This is a placeholder"
		                  required="required"
		                  data-pristine-required-message-de="The given subject was empty."
		                  class="form-control input input--textarea"
		                  id="testform-1000091-textarea-1"
		                  name="tx_form_formframework[testform-1000091][textarea-1]"
		                  ${disabledAttribute}>
                </textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>
	    
        </form>
    `;
};

export const TextareaInputs = Template.bind({});

TextareaInputs.args = {
    state: 'default'
}
