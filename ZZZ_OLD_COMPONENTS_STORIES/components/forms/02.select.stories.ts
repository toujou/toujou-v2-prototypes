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

            <div class="input-group input-group--type-single-select ${inputGroupDisabledClass} ${inputGroupErrorClass} ${inputGroupSuccessClass}">
                <label class="input-label" for="testform-1000091-singleselect-1">Land</label>
                <span class="form__description">this is a description</span>
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
                <span class="pristine-error form__error">The given subject was empty.</span>
            </div>
	
        </form>
    `;
};

export const SelectInput = Template.bind({});

// @ts-ignore
SelectInput.args = {
    state: 'default'
}
