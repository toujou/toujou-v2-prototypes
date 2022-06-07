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

const Template = (args: { state: string; }) => {
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
	
            <div class="input-group input-group--type-checkbox ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <div class="checkbox-group">
                     <input
                            data-pristine-required-message="The given subject was empty."
                            class="add-on checkbox checkbox--single"
                            id="testform-1000091-checkbox-1"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][checkbox-1]"
                            value="1"
                            ${disabledAttribute}>
                    <label class="add-on checkbox-group__label" for="testform-1000091-checkbox-1">This is the label</label>
                    <span class="form__description checkbox-group__description">This is the description</span>
                    <span class="pristine-error form__error checkbox-group__error">The given subject was empty.</span>
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
	
	        <div class="input-group radio-group input-group--type-radio ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
				<label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio buttons label</label>
				<span class="form__description form__description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
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
		
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
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
            
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
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
		
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
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
            
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
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
	        </div>
	
	        <div class="input-group input-group--type-multi-check multi-checkbox-group ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
				<label class="multi-checkbox-group__label" for="testform-1000091-multicheckbox-1">This is the label</label>
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_1"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="aaaaa"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Option one</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_2"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="bbbbb"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">Option two</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_3"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="ccccc"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">Option three</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_4"
                        type="checkbox" 
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="ddddd"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">Option four</label>
                </div>
            
                <div class="checkbox-group">
                    <input
                        data-pristine-required-message="The given subject was empty."
                        class=" checkbox"
                        id="testform-1000091-multicheckbox-1_5"
                        type="checkbox"
                        name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                        value="eeeee"
                        ${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">Option five</label>
                </div>
            
                <span class="form__description form__description--after-group">This is a description</span>
				<span class="form__error form__error--after-group">The given subject was empty.</span>

	        </div>
	
	        <div class="input-group input-group--type-multi-select ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
				<label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
				<span class="form__description">this is a description</span>
				<input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
				<select
				    data-pristine-required-message="The given subject was empty."
				    class="xlarge form-control multi-select"
				    id="testform-1000091-multiselect-1"
				    multiple="multiple"
				    name="tx_form_formframework[testform-1000091][multiselect-1][]"
				    ${disabledAttribute}>
				    <option class="multi-select__option" value="">first option</option>
                    <option class="multi-select__option" value="aaaaa">aaaaa</option>
                    <option class="multi-select__option" value="bbbbb">bbbbb</option>
                    <option class="multi-select__option" value="ccccc">ccccc</option>
                    <option class="multi-select__option" value="ddddd">ddddd</option>
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
    
            <fieldset id="testform-1000091-fieldset-1" class="fieldset">
                <legend class="fieldset__legend">Fieldset super name</legend>
    
                <div class="input-group input-group--type-text input-group--required ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">			
                    <label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
                    <span class="form__description">Enter your name so we can print out the documents correctly.</span>
                    <input
                        placeholder="Max Mustermann"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required"
                        ${disabledAttribute}>
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
    
                <div class="input-group input-group--type-email ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                    <label class="input-label" for="testform-1000091-email-1">Email address</label>
                    <span class="form__description">This is a description</span>
                    <input
                        placeholder="This is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        class=" form-control input input--text"
                        id="testform-1000091-email-1"
                        type="email"
                        name="tx_form_formframework[testform-1000091][email-1]"
                        value=""
                        ${disabledAttribute}>
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-telephone ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                    <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                    <span class="form__description">This is a description</span>
                    <input
                        placeholder="this is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        class=" form-control input input--text"
                        id="testform-1000091-telephone-1"
                        type="tel"
                        name="tx_form_formframework[testform-1000091][telephone-1]"
                        value=""
                        ${disabledAttribute}>
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
            
            </fieldset>
        </form>
    `;
};

export const AllInputs = Template.bind({});

// @ts-ignore
AllInputs.args = {
    state: 'default'
}
