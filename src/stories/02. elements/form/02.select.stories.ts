import { StoryFn, Meta } from '@storybook/web-components';
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
            required: true,
        },
    },
} satisfies Meta;

interface ToujouSelectStoryProps {
    state: string;
}

const Template: StoryFn<ToujouSelectStoryProps> = (args: ToujouSelectStoryProps) => {
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

            <toujou-input-group class="input-group input-group--single-select ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
				<span class="input-description">This is a description</span>
				<div class="select__wrapper">
					<select data-pristine-required-message-de="The given subject was empty."
					        class="form-control input select" id="testform-1000091-singleselect-1"
					        name="tx_form_formframework[testform-1000091][singleselect-1]"
					        ${disabledAttribute}>
					    <option class="seclect__option" value="">First option</option>
                        <option class="seclect__option" value="aaaaa">aaaaa</option>
                        <option class="seclect__option" value="bbbbb">bbbbb</option>
                        <option class="seclect__option" value="ccccc">ccccc</option>
                        <option class="seclect__option" value="ddddd">ddddd</option>
                    </select>
				</div>
                <span class="pristine-error form__error">This is an error message!</span>
        	</toujou-input-group>
        </form>
    `;
};

export const SelectInput = Template.bind({});

SelectInput.args = {
    state: 'default'
}
