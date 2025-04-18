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
    argTypes: {},
} satisfies Meta;

interface ToujouRequireInputStoryProps {}

const Template: StoryFn<ToujouRequireInputStoryProps> = () => {
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

        	<toujou-input-group class="input-group input-group--required">
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
            </toujou-input-group>

	        <toujou-input-group class="input-group" input-group-type="submit">
        		<button is="toujou-button" class="button" button-variant="primary" type="submit" name="tx_form_formframework[selectWithChips-1000064][__currentPage]" value="1">Submit</button>
	        </toujou-input-group>

        </form>
    `;
};

export const Submit = Template.bind({});
