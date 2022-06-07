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
        </form>
    `;
};

export const DateInputs = Template.bind({});

// @ts-ignore
DateInputs.args = {}
