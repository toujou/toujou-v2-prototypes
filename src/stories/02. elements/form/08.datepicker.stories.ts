import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js';
// @ts-ignore
import formDocs from './form.docs.mdx';

const DATE_FORMATS = {
    'YYYY.MM.DD': 'Y.m.d',
    'YYYY/MM/DD': 'Y/m/d',
    'DD.MM.YYYY': 'd.m.Y',
    'DD/MM/YYYY': 'd/m/Y',
}

export default {
    title: 'COMPONENTS/Forms',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: formDocs,
        }
    },
    argTypes: {
        dateFormat: {
            name: 'Date format',
            description: "Set the date format",
            options: Object.values(DATE_FORMATS),
            control: { type: 'radio' },
            defaultValue: DATE_FORMATS['YYYY.MM.DD'],
            required: true,
        },
        minDate: {
            name: 'Earliest date',
            description: 'Earliest selectable date',
            control: { type: 'date' },
        },
        maxDate: {
            name: 'Latest date',
            description: 'Latest selectable date',
            control: { type: 'date' },
        },
        showTime: {
            name: 'Show time',
            description: "Show time on the datepicker",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface DatepickerProps {
    dateFormat: typeof DATE_FORMATS[keyof typeof DATE_FORMATS],
    minDate: Date;
    maxDate: Date;
    showTime: boolean;
}

const Template: StoryFn<DatepickerProps> = (args: DatepickerProps) => {
    console.log('minDate', args.minDate);
    console.log('maxDate', args.maxDate);
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
            novalidate>

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
				<label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
				<span class="input-description">This is a description</span>

		         <toujou-datepicker
                    class="datepicker"
                    date-format="${args.dateFormat}"
                    minDate="${args.minDate}"
                    maxDate="${args.maxDate}"
                    ${args.showTime ? 'enableTime' : ''}
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

export const DatePicker = Template.bind({});

DatePicker.args = {
    dateFormat: DATE_FORMATS['YYYY.MM.DD'],
    minDate: new Date(Date.now()).toISOString(), // Today's date
    maxDate: new Date(Date.now() + (86400000 * 365)).toISOString(), // Default to one year later
    showTime: false,
}
