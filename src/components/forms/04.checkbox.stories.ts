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
    argTypes: {}
} as Meta;

const Template = () => {
    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
	
            <div class="input-group input-group--checkbox ">
                <div class="checkbox-group">
                    <label class="add-on checkbox-group__label" for="testform-1000091-checkbox-1">
                        <input type="hidden" name="tx_form_formframework[testform-1000091][checkbox-1]" value="">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class="add-on checkbox checkbox--single"
                            id="testform-1000091-checkbox-1"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][checkbox-1]"
                            value="1">
                        <span class="checkbox__description">Checkbox</span>
                    </label>
                </div>
            </div>
	
	
	        <div class="input-group input-group--multi-check ">
				<label class="input-label" for="testform-1000091-multicheckbox-1">Multi checkbox</label>
				<span class="input__description">this is a descriptions</span>
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">
                        <input
                        type="hidden"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1]"
                        value="">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_1" type="checkbox" name="tx_form_formframework[testform-1000091][multicheckbox-1][]" value="aaaaa">
                        <span class="checkbox__description">aaaaa</span>
                    </label>
                </div>
            
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_2" type="checkbox" name="tx_form_formframework[testform-1000091][multicheckbox-1][]" value="bbbbb">
                        <span class="checkbox__description">bbbbb</span>
                    </label>
                </div>
            
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_3"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                            value="ccccc">
                        <span class="checkbox__description">ccccc</span>
                    </label>
                </div>
            
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_4"
                            type="checkbox" 
                            name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                            value="ddddd">
                        <span class="checkbox__description">ddddd</span>
                    </label>
                </div>
            
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_5"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                            value="eeeee">
                        <span class="checkbox__description">eeeee</span>
                    </label>
                </div>
            
                <div class="checkbox-group">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_6">
                        <input
                            data-pristine-required-message="The given subject was empty."
                            class=" checkbox"
                            id="testform-1000091-multicheckbox-1_6"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                            value="fffff">
                        <span class="checkbox__description">fffff</span>
                    </label>
                </div>
	        </div>
	
        </form>
    `;
};

export const CheckboxInputs = Template.bind({});

// @ts-ignore
CheckboxInputs.args = {}
