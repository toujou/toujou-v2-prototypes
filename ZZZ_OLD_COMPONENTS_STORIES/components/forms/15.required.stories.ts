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
        badges: [TOUJOU_BADGES.TESTING]
    },
    argTypes: {
        isRequired: {
            table: {
                category: "Inputs settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Required',
            description: "Toggle the inputs 'required' attribute",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    }
} as Meta;

const Template = (args: { isRequired: any; }) => {
    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

        	<div class="input-group ${args.isRequired ? 'input-group--required' : ''}">			
				<label class="input-label" for="testform-1000091-text-1">Text</label>
				<span class="form__description">This is a description</span>
        		<input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" input input--text"
                    id="testform-1000091-text-1"
                    type="text"
                    name="tx_form_formframework[testform-1000091][text-1]"
                    value=""
                    ${args.isRequired ? 'required' : ''}>
	        </div>

            <div class="input-group ${args.isRequired ? 'input-group--required' : ''}">
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
                    ${args.isRequired ? 'required' : ''}>
            </div>
            
            <div class="input-group ${args.isRequired ? 'input-group--required' : ''}">
				<label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
				<span class="form__description">This is a description</span>
                <textarea
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class="xxlarge form-control input input--textarea"
                    id="testform-1000091-textarea-1"
                    name="tx_form_formframework[testform-1000091][textarea-1]"
                    ${args.isRequired ? 'required' : ''}>
                </textarea>
	        </div>
            
            <div class="input-group ${args.isRequired ? 'input-group--required' : ''}">
                <label class="input-label" for="testform-1000091-date-1">Date</label>
                <span class="form__description">this is a description</span>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value=""
                    ${args.isRequired ? 'required' : ''}>
            </div>
	
            <div class="input-group input-group--single-select ${args.isRequired ? 'input-group--required' : ''}">
                <label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
                <span class="form__description">this is a descriptions</span>
                <div class="select__wrapper">
                    <select
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input select"
                    id="testform-1000091-singleselect-1"
                    name="tx_form_formframework[testform-1000091][singleselect-1]"
                    ${args.isRequired ? 'required' : ''}>
                        <option value="">First options</option>
                        <option value="aaaaa">aaaaa</option>
                        <option value="bbbbb">bbbbb</option>
                        <option value="ccccc">ccccc</option>
                        <option value="ddddd">ddddd</option>
                    </select>
                </div>
            </div>
	
        </form>
    `;
};

export const Required = Template.bind({});

// @ts-ignore
Required.args = {
    isRequired: false
}
