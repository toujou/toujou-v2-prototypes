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
        isRequired: {
            table: {
                category: "Inputs settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Required',
            description: "Toggle the inputs 'required' attribute",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface ToujouRequireInputStoryProps {
    isRequired: any;
}

const Template: StoryFn<ToujouRequireInputStoryProps> = (args: ToujouRequireInputStoryProps) => {
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

            <toujou-input-group class="input-group ${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group><toujou-input-group class="input-group input-group--email ${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone ${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-email-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    `;
};

export const Required = Template.bind({});

Required.args = {
    isRequired: false
}
