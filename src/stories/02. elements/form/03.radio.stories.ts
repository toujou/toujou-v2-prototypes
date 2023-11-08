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
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface ToujouRadioStoryProps {
    state: string;
}

const Template: StoryFn<ToujouRadioStoryProps> = (args: ToujouRadioStoryProps) => {
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

            <toujou-input-group class="input-group input-group--radio radio-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio button</label>
				<span class="input-description input-description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                               class="radio"
                               type="radio"
                               name="tx_form_formframework[testform-1000091][radiobutton-1]"
                               value="aaaaa"
                               checked
                               ${disabledAttribute}>
                        aaaaa
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                            ${disabledAttribute}>
                        bbbb
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                            ${disabledAttribute}>
                        ccccc
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                            ${disabledAttribute}>
                        ddddd
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="eeeee"
                            ${disabledAttribute}>
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
        	</toujou-input-group>

        </form>
    `;
};

export const RadioInputs = Template.bind({});

RadioInputs.args = {
    state: 'default'
}
