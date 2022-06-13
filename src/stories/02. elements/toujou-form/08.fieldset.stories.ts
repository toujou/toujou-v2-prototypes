import {Meta} from '@storybook/web-components';
import {withXD} from "storybook-addon-xd-designs";
// @ts-ignore
import {TOUJOU_BADGES} from '../../../../.storybook/badgeCustomConfig.js'

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
    const disabledAttribute = args.state === 'disabled' ? 'is-disabled' : ''

    return `
        <form
            enctype="multipart/form-data"
            method="post" 
            class="toujou-form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
    
            <fieldset id="testform-1000091-fieldset-1" class="fieldset" ${args.state === 'disabled' ? 'is-disabled' : ''}>
                <legend class="fieldset__legend">Fieldset super name</legend>
    
                <toujou-input-group
        	    class="toujou-input-group"
        	    ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
        	    input-group-type="text">			
				<label class="input-label" for="testform-1000091-text-1">Ihr Name</label>
				<toujou-form-description class="toujou-form-description">Enter your name so we can print out the documents correctly.</toujou-form-description>
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
                <toujou-form-error class="pristine-error toujou-form-error">The given subject was empty.</span>
	        </toujou-input-group>

            <toujou-input-group
                class="toujou-input-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
                input-group-type="email">
                <label class="input-label" for="testform-1000091-email-1">Email address</label>
                <toujou-form-description class="toujou-form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-email-1"
                    type="email"
                    name="tx_form_formframework[testform-1000091][email-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error toujou-form-error">The given subject was empty.</span>
            </toujou-input-group>
            
            <toujou-input-group
                class="toujou-input-group"
                ${args.state === 'disabled' ? 'is-disabled' : ''}
                ${args.state === 'error' ? 'has-error' : ''}
                ${args.state === 'success' ? 'has-success' : ''}
                input-group-type="telephone">
                <label class="input-label" for="testform-1000091-telephone-1">Telephone number</label>
                <toujou-form-description class="toujou-form-description">This is a description</toujou-form-description>
                <input
                    placeholder="This is a placeholder"
                    data-pristine-required-message="The given subject was empty."
                    class=" form-control input input--text"
                    id="testform-1000091-telephone-1"
                    type="tel"
                    name="tx_form_formframework[testform-1000091][telephone-1]"
                    value=""
                    ${disabledAttribute}>
                <toujou-form-error class="pristine-error toujou-form-error">The given subject was empty.</span>
            </toujou-input-group>
            
            </fieldset>
        </form>
    `;
};

export const Fieldset = Template.bind({});

// @ts-ignore
Fieldset.args = {
    state: 'default'
}
