import { StoryFn, Meta } from '@storybook/web-components-vite';

// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    parameters: {
        docs: {
            page: formDocs,
        }
    },
    argTypes: {
        isDisabled: {
            table: {
                category: "Toggle settings",
                defaultValue: { summary: 'false' },
            },
            name: 'disabled',
            description: "Toggle the \"disabled\" attribute",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface ToujouToggleStoryProps {
    isDisabled: any;
}

const Template: StoryFn<ToujouToggleStoryProps> = (args: ToujouToggleStoryProps) => {
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

            <toujou-input-group class="input-group input-group--toggle ${args.isDisabled ? 'input-group--disabled' : ''}">
                <div class="toggle-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="toggle"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           role="switch"
                           ${args.isDisabled ? 'disabled' : ''}>
                    <label class="toggle-group__label" for="testform-1000091-multicheckbox-1_1">Toggle beautiful label</label>
                    <span class="input-description input-description--toggle-group">This is a description</span>
                    <span class="pristine-error form__error form-error--toggle-group">The given subject was empty.</span>
                </div>
            </toujou-input-group>

        </form>
    `;
};

export const ToggleInputs = Template.bind({});

ToggleInputs.args = {
    isDisabled: false,
}
