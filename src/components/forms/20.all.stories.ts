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
				<label class="input-label" for="testform-1000091-text-1">Text</label>
				<span class="form__description">This is a description</span>
        		<input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" input input--text"
                    id="testform-1000091-text-1"
                    type="text"
                    name="tx_form_formframework[testform-1000091][text-1]"
                    value="">
	        </div>

            <div class="input-group ">
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <span class="form__description">This is a description</span>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value="">
            </div>
            
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <span class="form__description">This is a description</span>
                <input
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value="">
            </div>
	
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-url-1">URL</label>
                <span class="form__description">this is a description</span>
                <input
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-url-1"
                    type="url"
                    name="tx_form_formframework[testform-1000091][url-1]"
                    value="">
            </div>
	
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-number-1">Number</label>
                <span class="form__description">this is a descripton</span>
                <input
                    step="1"
                    placeholder="this is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-number-1"
                    type="number"
                    name="tx_form_formframework[testform-1000091][number-1]"
                    value="">
            </div>
            
            <div class="input-group ">
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<span class="form__description">This is a description</span>
                <textarea
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class="xxlarge form-control input input--textarea"
                    id="testform-1000091-textarea-1"
                    name="tx_form_formframework[testform-1000091][textarea-1]">
                </textarea>
	        </div>
            
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-date-1">Date</label>
                <span class="form__description">this is a description</span>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value="">
            </div>
	
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
	
            <div class="input-group input-group--single-select ">
                <label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
                <span class="form__description">this is a descriptions</span>
                <div class="select__wrapper">
                    <select
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input select"
                    id="testform-1000091-singleselect-1"
                    name="tx_form_formframework[testform-1000091][singleselect-1]">
                        <option value="">First options</option>
                        <option value="aaaaa">aaaaa</option>
                        <option value="bbbbb">bbbbb</option>
                        <option value="ccccc">ccccc</option>
                        <option value="ddddd">ddddd</option>
                    </select>
                </div>
            </div>
	
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
                        
                    </label>
                </div>
	        </div>
	
	        <div class="input-group input-group--multi-check ">
				<label class="input-label" for="testform-1000091-multicheckbox-1">Multi checkbox</label>
				<span class="form__description">this is a descriptions</span>
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
	
	        <div class="input-group input-group--multi-select ">
				<label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
				<span class="form__description">this is a description</span>
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
	
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
                <span class="form__description">this is a description</span>
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class="input input--file-upload"
                        id="testform-1000091-fileupload-1"
                        accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
                        type="file"
                        name="tx_form_formframework[testform-1000091][fileupload-1]">
            </div>
            
            <div class="input-group " data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-1">Date picker (jQuery)</label>
                <span class="form__description">this is a description</span>
                    <input
                        placeholder="this is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        data-pristine-min-message="You must select a date before ${1}."
                        data-pristine-max-message="You must select a date after ${1}."
                        class="small form-control date-dummy input input--date flatpickr-input date-dummy--empty"
                        id="testform-1000091-datepicker-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][datepicker-1][date]"
                        readonly="readonly">
                    <input type="hidden" name="tx_form_formframework[testform-1000091][datepicker-1][dateFormat]" value="Y-m-d">
            </div>
            
            <div class="input-group ">
                <label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
                <span class="form__description">this is a description</span>
                <input
                    data-pristine-required-message="The given subject was empty."
                    class="input input--imageupload image-upload"
                    id="testform-1000091-imageupload-1"
                    accept="image/jpeg,image/png,image/bmp"
                    type="file"
                    name="tx_form_formframework[testform-1000091][imageupload-1]">
            </div>
    
            <fieldset id="testform-1000091-fieldset-1" class="form-group">
                <legend>Fieldset super name</legend>
    
                <div class="input-group ">
                    <label class="input-label" for="testform-1000091-text-2">Text</label>
                    <span class="form__description">description</span>
                    <input placeholder="placeholder"
                        class=" input input--text"
                        id="testform-1000091-text-2"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-2]"
                        value="">
                </div>
                
                <div class="input-group ">
                    <label class="input-label" for="testform-1000091-text-3">Text</label>
                    <span class="form__description">description</span>
                    <input placeholder="placeholder"
                        class=" input input--text"
                        id="testform-1000091-text-3"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-3]"
                        value="">
                </div>
            
            </fieldset>
        </form>
    `;
};

export const AllInputs = Template.bind({});

// @ts-ignore
AllInputs.args = {}
