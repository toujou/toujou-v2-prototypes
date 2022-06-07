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

        	<div class="row form__row">
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-12 input-group--md-12 input-group--lg-4">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-12 input-group--md-6 input-group--lg-4">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-12 input-group--md-6 input-group--lg-4">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-4 input-group--md-4 input-group--lg-4">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-8 input-group--md-8 input-group--lg-8">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-8 input-group--md-8 input-group--lg-8">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-4 input-group--md-4 input-group--lg-4">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-6 input-group--md-3 input-group--lg-3">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-6 input-group--md-3 input-group--lg-3">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-6 input-group--md-3 input-group--lg-3">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
                
                <div class="input-group input-group--type-text input-group--required input-group--xs-12 input-group--sm-6 input-group--md-3 input-group--lg-3">			
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
                        required="required">
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
	        </div>
        	
        </form>
    `;
};

export const Grid = Template.bind({});

// @ts-ignore
Grid.args = {
    state: 'default'
}
