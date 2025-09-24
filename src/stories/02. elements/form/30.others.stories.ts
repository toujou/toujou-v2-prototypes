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

interface ToujouOtherInputStoryProps {
    state: string;
}

const Template: StoryFn<ToujouOtherInputStoryProps> = (args: ToujouOtherInputStoryProps) => {
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

            <toujou-input-group class="input-group input-group--file-upload ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
				<span class="input-description">This is a description</span>
		        <input data-pristine-required-message-de="The given subject was empty."
		               class="input input--file-upload"
		               id="testform-1000091-fileupload-1"
		               accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
		               type="file"
		               name="tx_form_formframework[testform-1000091][fileupload-1]"
		               ${disabledAttribute}>
                   <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>

        	<toujou-input-group class="input-group input-group--image-upload ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
				<span class="input-description">This is a description</span>
		        <input data-pristine-required-message-de="The given subject was empty."
		               class="input input--imageupload image-upload"
		               id="testform-1000091-imageupload-1"
		               accept="image/jpeg,image/png,image/bmp"
		               type="file"
		               name="tx_form_formframework[testform-1000091][imageupload-1]"
		               ${disabledAttribute}>
               <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-select ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
				<span class="input-description">This is a description</span>
				<input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        ${disabledAttribute}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                    <option value="eeeee">eeeee</option>
                    <option value="ggggg">ggggg</option>
                    <option value="hhhhh">hhhhh</option>
                    <option value="kkkkk">kkkkk</option>
                    <option value="last">last option</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>

	        <toujou-input-group class="input-group inout-group--static-text">
	            <div class="form-static-text">
	                <p class="form-static-text__text">This is static text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-input-group>

        </form>
    `
};

export const OtherInputs = Template.bind({});

OtherInputs.args = {
    state: 'default'
}
