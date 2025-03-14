import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    parameters: {
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
            required: true,
        },
    },
} satisfies Meta;

interface ToujouTextareaStoryProps {
    state: string;
}

const Template: StoryFn<ToujouTextareaStoryProps> = (args: ToujouTextareaStoryProps) => {
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

            <toujou-input-group class="input-group input-group--textarea ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<span class="input-description">This is a description</span>
		        <textarea placeholder="This is a placeholder"
		                  required="required"
		                  data-pristine-required-message-de="The given subject was empty."
		                  class="form-control input input--textarea"
		                  id="testform-1000091-textarea-1"
		                  name="tx_form_formframework[testform-1000091][textarea-1]"
		                  ${disabledAttribute}></textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>

        </form>
    `;
};

export const TextareaInputs = Template.bind({});

TextareaInputs.args = {
    state: 'default'
}
