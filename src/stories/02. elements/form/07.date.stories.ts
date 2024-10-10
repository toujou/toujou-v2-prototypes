import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import formDocs from './form.docs.mdx';

export default {
    title: 'COMPONENTS/Forms',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: formDocs,
        }
    },
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <link rel="stylesheet" type="text/css" href="../../../../node_modules/flatpickr/dist/themes/light.css">

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


            <toujou-input-group class="input-group input-group--date">
				<label class="input-label" for="testform-1000091-date-1">Date</label>
				<span class="input-description">This is a description</span>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message-de="The given subject was empty."
                    data-pristine-pattern-message-de="You must enter a valid date."
                    data-pristine-date-min-message-de="You must select a date after ${1}."
                    data-pristine-date-max-message-de="You must select a date before ${1}."
                    class="input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value="">
                    <span class="pristine-error form__error">This is an error message!</span>
        	</toujou-input-group>

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
				<label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
				<span class="input-description">This is a description</span>

		         <toujou-datepicker
		            date-format="d.m.Y"
		            minDate="today"
		            class="datepicker"
                >
                    <input
                        name="dateFrom"
                        class="form-control input input--datepicker"
                        placeholder="Select a date"
                        type="text"
                    />
                </toujou-datepicker>

                   <span class="pristine-error form__error">This is an error message!</span>
	        </toujou-input-group>

        </form>
    `;
};

export const DateInputs = Template.bind({});
