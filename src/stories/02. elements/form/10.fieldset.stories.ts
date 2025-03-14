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

interface ToujouFieldsetStoryProps {
    state: string;
}

const Template: StoryFn<ToujouFieldsetStoryProps> = (args: ToujouFieldsetStoryProps) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : ''

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

            <fieldset id="testform-1000091-fieldset-1" class="fieldset ${args.state === 'disabled' ? 'fieldset--disabled' : ''}">
                <legend class="fieldset__legend">Fieldset super name</legend>

                <toujou-input-group class="input-group input-group--required ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-1"
                           type="text" name="tx_form_formframework[testform-1000091][text-1]"
                           value=""
                           ${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-2" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-2"
                           type="text" name="tx_form_formframework[testform-1000091][text-2]"
                           value=""
                           ${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-3" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-3"
                           type="text" name="tx_form_formframework[testform-1000091][text-3]"
                           value=""
                           ${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-4" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-4"
                           type="text" name="tx_form_formframework[testform-1000091][text-4]"
                           value=""
                           ${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

            </fieldset>
        </form>
    `;
};

export const Fieldset = Template.bind({});

Fieldset.args = {
    state: 'default'
}
