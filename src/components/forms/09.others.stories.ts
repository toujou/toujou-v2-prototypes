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

            <div class="input-group ">
                <label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
                <span class="input__description">this is a description</span>
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class="input input--file-upload"
                        id="testform-1000091-fileupload-1"
                        accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
                        type="file"
                        name="tx_form_formframework[testform-1000091][fileupload-1]">
            </div>
            
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
                <span class="input__description">this is a description</span>
                <input
                    data-pristine-required-message="The given subject was empty."
                    class="input input--imageupload image-upload"
                    id="testform-1000091-imageupload-1"
                    accept="image/jpeg,image/png,image/bmp"
                    type="file"
                    name="tx_form_formframework[testform-1000091][imageupload-1]">
            </div>
            
            <div class="input-group input-group--multi-select ">
				<label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
				<span class="input__description">this is a description</span>
				<input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
				<select
				    data-pristine-required-message="The given subject was empty."
				    class="xlarge form-control multi-select"
				    id="testform-1000091-multiselect-1"
				    multiple="multiple"
				    name="tx_form_formframework[testform-1000091][multiselect-1][]">
				    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                </select>
	        </div>
    
        </form>
    `
};

export const OtherInputs = Template.bind({});

// @ts-ignore
OtherInputs.args = {}
