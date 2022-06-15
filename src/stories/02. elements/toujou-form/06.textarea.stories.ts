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
            class="toujou-form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
	        
	        <toujou-input-group
	            class="toujou-input-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
	            input-group-type="textarea">
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<toujou-form-description class="toujou-form-description">This is a description</toujou-form-description>
                <textarea
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class="xxlarge form-control input input--textarea"
                    id="testform-1000091-textarea-1"
                    name="tx_form_formframework[testform-1000091][textarea-1]"
                    ${disabledAttribute}>
                </textarea>
                <toujou-form-error class="pristine-error toujou-form-error">The given subject was empty.</span>
	        </toujou-input-group>
        </form>
    `;
};

export const TextareaInputs = Template.bind({});

TextareaInputs.args = {
    state: 'default'
}
