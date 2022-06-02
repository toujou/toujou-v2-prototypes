import {Meta} from '@storybook/web-components';
import {withXD} from "storybook-addon-xd-designs";
// @ts-ignore
import {TOUJOU_BADGES} from '../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
        badges: [TOUJOU_BADGES.PROGRESS]
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

const Template = (args) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';
    const inputGroupDisabledClass = args.state === 'disabled' ? 'input-group--disabled' : '';
    const inputGroupErrorClass = args.state === 'error' ? 'input-group--has-error' : '';
    const inputGroupSuccessClass = args.state === 'success' ? 'input-group--has-success' : '';

    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

	        <div class="input-group input-group--radio ">
				<label class="input-label" for="testform-1000091-radiobutton-1">Radio button</label>
				<span class="form__description">this is a descriptions</span>
                <div class="radio-group">
                    <label class="radio__label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="aaaaa">
                        aaaaa
                    </label>
                </div>
		
                <div class="radio-group">
                    <label class="radio__label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb">
                        bbbb
                    </label>
                </div>
            
                <div class="radio-group">
                    <label class="radio__label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc">
                        ccccc
                    </label>
                </div>
		
                <div class="radio-group">
                    <label class="radio__label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd">
                        ddddd
                    </label>
                </div>
            
                <div class="radio-group">
                    <label class="radio__label">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="xlarge radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="">
                        eeeee
                    </label>
                </div>
	        </div>
	
        </form>
    `;
};

export const RadioInputs = Template.bind({});

// @ts-ignore
RadioInputs.args = {
    state: 'default'
}
