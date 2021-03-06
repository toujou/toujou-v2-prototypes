import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'PAGES/Form Page',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `
        <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>
            
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Forms</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Contact form</a>
                </li>
            </ol>
        </toujou-breadcrumb>
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>This is a contact ppage</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">

        	<toujou-form-row class="form-row">
                <toujou-input-group
                    class="input-group"
                    input-group-type="text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="6"
                    input-group-span-lg="6">			
                    <label class="input-label" for="testform-1000091-text-1">You name</label>
                    <input
                        placeholder="Luke"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required">
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group"
                    input-group-type="text"
                    input-group-span-xs="12"
                    input-group-span-sm="6"
                    input-group-span-md="6"
                    input-group-span-lg="6">			
                    <label class="input-label" for="testform-1000091-text-1">Your family name</label>
                    <input
                        placeholder="Skywalker"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required">
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group"
                    input-group-type="text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="4"
                    input-group-span-lg="4">			
                    <label class="input-label" for="testform-1000091-text-1">Street</label>
                    <input
                        placeholder="Skywalker"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required">
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group"
                    input-group-type="text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="4"
                    input-group-span-lg="4">			
                    <label class="input-label" for="testform-1000091-text-1">House number</label>
                    <input
                        placeholder="Skywalker"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required">
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group"
                    input-group-type="text"
                    input-group-span-xs="12"
                    input-group-span-sm="12"
                    input-group-span-md="4"
                    input-group-span-lg="4">			
                    <label class="input-label" for="testform-1000091-text-1">City</label>
                    <input
                        placeholder="Skywalker"
                        data-pristine-required-message="The given subject was empty."
                        class="input input--text"
                        id="testform-1000091-text-1"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-1]"
                        value=""
                        required="required">
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>
                
                <toujou-input-group
                    class="input-group"
                    input-group-type="textarea">
                    <label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
                    <toujou-form-description class="form-description">This is a description</toujou-form-description>
                    <textarea
                        placeholder="This is a placeholder"
                        data-pristine-required-message="The given subject was empty."
                        class="xxlarge form-control input input--textarea"
                        id="testform-1000091-textarea-1"
                        name="tx_form_formframework[testform-1000091][textarea-1]">
                    </textarea>
                    <toujou-form-error class="pristine-error form__error">The given subject was empty.</span>
                </toujou-input-group>

	        </toujou-form-row>
	        
            <nav class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button" class="button" button-variant="primary" type="submit"  name="tx_form_formframework[kontaktformular-8][__currentPage]" value="2">
                        Submit
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button formnovalidate="formnovalidate" class="button" button-variant="primary" button-type="border" type="submit" name="tx_form_formframework[kontaktformular-8][__currentPage]" value="0">Cancel</button>
                </span>
            </nav>	
        </form>
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

    `;
};

export const FormPage = Template.bind({});


