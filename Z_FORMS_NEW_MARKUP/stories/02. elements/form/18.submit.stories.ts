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

interface ToujouRequireInputStoryProps {
    isRequired: any;
}

const Template: Story<ToujouRequireInputStoryProps> = (args: ToujouRequireInputStoryProps) => {
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
        	    class="input-group"
        	    input-group-type="text"
        	    ${args.isRequired ? 'is-required' : ''}>			
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
                    disabled>
                <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
	        </toujou-input-group>
	        
	        <toujou-input-group class="input-group" input-group-type="submit">			
        		<button is="toujou-button" class="button" button-variant="primary" type="submit" name="tx_form_formframework[selectWithChips-1000064][__currentPage]" value="1">
					Submit
				</button>
	        </toujou-input-group>
	
        </form>
    `;
};

export const Submit = Template.bind({});

Submit.args = {
    isRequired: false
}
