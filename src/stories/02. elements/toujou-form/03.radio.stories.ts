import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js';
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

interface ToujouRadioStoryProps {
    state: string;
}

const Template: Story<ToujouRadioStoryProps> = (args: ToujouRadioStoryProps) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';

    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="toujou-form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

	        <toujou-input-group
	            class="toujou-input-group toujou-radio-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
	            input-group-type="radio">
				<label class="toujou-radio-group__label" for="testform-1000091-radiobutton-1">Radio buttons label</label>
				<toujou-form-description class="toujou-form-description toujou-form-description--after-group">This is a description</toujou-form-description>
                <div class="toujou-radio-group__option">
                    <label class="toujou-radio-group__option-label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="aaaaa"
                            checked
                            ${disabledAttribute}>
                        aaaaa
                    </label>
                </div>
		
                <div class="toujou-radio-group__option">
                    <label class="toujou-radio-group__option-label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                            ${disabledAttribute}>
                        bbbb
                    </label>
                </div>
            
                <div class="toujou-radio-group__option">
                    <label class="toujou-radio-group__option-label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                            ${disabledAttribute}>
                        ccccc
                    </label>
                </div>
		
                <div class="toujou-radio-group__option">
                    <label class="toujou-radio-group__option-label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                            ${disabledAttribute}>
                        ddddd
                    </label>
                </div>
            
                <div class="toujou-radio-group__option">
                    <label class="toujou-radio-group__option-label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value=""
                            ${disabledAttribute}>
                        eeeee
                    </label>
                </div>
	        </toujou-input-group>
	
        </form>
    `;
};

export const RadioInputs = Template.bind({});

RadioInputs.args = {
    state: 'default'
}
