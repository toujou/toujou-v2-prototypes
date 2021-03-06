import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        },
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
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

interface ToujouAllInputsStoryProps {
    state: string;
}

const Template: Story<ToujouAllInputsStoryProps> = (args: ToujouAllInputsStoryProps) => {
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

        	<toujou-input-group
        	    class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
        	    ${args.state === 'disabled' ? 'is-disabled' : ''}
        	    input-group-type="text">			
				<label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
				<toujou-form-description class="form-description">Enter your name so we can print out the documents correctly.</toujou-form-description>
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
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>

            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="email">
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="telephone">
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
	
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="url">
                <label class="input-label" for="testform-1000091-url-1">URL</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-url-1"
                    type="url"
                    name="tx_form_formframework[testform-1000091][url-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
	
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="number">
                <label class="input-label" for="testform-1000091-number-1">Number</label>
                <toujou-form-description class="form-description">This is a descripton</toujou-form-description>
                <input
                    step="1"
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-number-1"
                    type="number"
                    name="tx_form_formframework[testform-1000091][number-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="single-select">
                <label class="input-label" for="testform-1000091-singleselect-1">Land</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <div class="select__wrapper">
                    <select
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input select"
                    id="testform-1000091-singleselect-1"
                    name="tx_form_formframework[testform-1000091][singleselect-1]"
                    ${disabledAttribute}>
                        <option value="">First options</option>
                        <option value="aaaaa">aaaaa</option>
                        <option value="bbbbb">bbbbb</option>
                        <option value="ccccc">ccccc</option>
                        <option value="ddddd">ddddd</option>
                    </select>
                </div>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
	            class="input-group radio-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
	            input-group-type="radio">
				<label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio buttons label</label>
				<toujou-form-description class="form-description form-description--after-group">This is a description</toujou-form-description>
                <div class="toujou-radio-group__option">
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
	        </toujou-input-group>
	        
	        <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="checkbox">
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
                    <toujou-form-description class="form-description form-description--checkbox-group">This is the description</toujou-form-description>
                    <toujou-form-error class="pristine-error form-error form-error--checkbox-group">The given subject was empty.</toujou-form-error>
                </div>
            </toujou-input-group>
	
	
	        <toujou-input-group
	            class="input-group multi-checkbox-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="multi-check">
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
            
                <toujou-form-description class="form-description form-description--after-group">This is a description</toujou-form-description>
				<toujou-form-error class="form-error form-error--after-group">The given subject was empty.</toujou-form-error>

	        </toujou-input-group>
	        
	        <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="toggle">
                <div class="toggle-group">
                     <input
                            data-pristine-required-message="The given subject was empty."
                            class="toggle"
                            id="testform-1000091-checkbox-1"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][checkbox-1]"
                            value="1"
                            role="switch"
                    ${disabledAttribute}>
                    <label class="toggle-group__label" for="testform-1000091-checkbox-1">This is the label</label>
                    <toujou-form-description class="form-description form-description--toggle-group">This is the description</toujou-form-description>
                    <toujou-form-error class="pristine-error form-error form-error--toggle-group">The given subject was empty.</toujou-form-error>
                </div>
            </toujou-input-group>
            
            <toujou-input-group
	            class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
	            input-group-type="textarea">
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<toujou-form-description class="form-description">This is a description</toujou-form-description>
                <textarea
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class="xxlarge form-control input input--textarea"
                    id="testform-1000091-textarea-1"
                    name="tx_form_formframework[testform-1000091][textarea-1]"
                    ${disabledAttribute}>
                </textarea>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>
	        
	        <toujou-input-group
	            class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
	            input-group-type="date"
	            ${args.state === 'disabled' ? 'is-disabled' : ''}
                <label class="input-label" for="testform-1000091-date-1">Date</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value="">
            </toujou-input-group>
	
            <toujou-input-group
                class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                data-format="Y-m-d"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                input-group-type="date-jquery">
                <label class="input-label" for="testform-1000091-datepicker-1">Date picker (jQuery)</label>
                <toujou-form-description class="form-description">This is a description</toujou-form-description>
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
            </toujou-input-group>
            
            <fieldset id="testform-1000091-fieldset-1" class="fieldset" ${args.state === 'disabled' ? 'is-disabled' : ''}>
                <legend class="fieldset__legend">Fieldset super name</legend>
    
                <toujou-input-group
                    class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                    ${args.state === 'disabled' ? 'is-disabled' : ''}
                    input-group-type="text">			
                    <label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
                    <toujou-form-description class="form-description">Enter your name so we can print out the documents correctly.</toujou-form-description>
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
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
    
                <toujou-input-group
                    class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                    ${args.state === 'disabled' ? 'is-disabled' : ''}
                    input-group-type="email">
                    <label class="input-label" for="testform-1000091-email-1">Email address</label>
                    <toujou-form-description class="form-description">This is a description</toujou-form-description>
                    <input
                        placeholder="This is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        class=" form-control input input--text"
                        id="testform-1000091-email-1"
                        type="email"
                        name="tx_form_formframework[testform-1000091][email-1]"
                        value=""
                        ${disabledAttribute}>
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}"
                    ${args.state === 'disabled' ? 'is-disabled' : ''}
                    input-group-type="telephone">
                    <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                    <toujou-form-description class="form-description">This is a description</toujou-form-description>
                    <input
                        placeholder="This is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        class=" form-control input input--text"
                        id="testform-1000091-telephone-1"
                        type="tel"
                        name="tx_form_formframework[testform-1000091][telephone-1]"
                        value=""
                        ${disabledAttribute}>
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
            
            </fieldset>
        </form>
    `;
};

export const AllInputs = Template.bind({});

AllInputs.args = {
    state: 'default'
}
