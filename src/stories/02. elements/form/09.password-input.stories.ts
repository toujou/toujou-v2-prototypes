import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
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
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
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

            <toujou-input-group class="input-group input-group--text input-group--required ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <toujou-input-password-toggle class="input-password-toggle">
                    <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="password"
                       name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                       slot="input"
                       ${disabledAttribute}
                   >
                   <button id="show_button" class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                       <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                   <button id="hide_button" class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                       <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                </toujou-input-password-toggle>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    `;
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
    state: 'default'
}
