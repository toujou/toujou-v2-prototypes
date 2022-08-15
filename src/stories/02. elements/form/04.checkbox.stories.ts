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
        badges: [TOUJOU_BADGES.PROGRESS],
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

interface ToujouCheckboxStoryProps {
    state: string;
}

const Template: Story<ToujouCheckboxStoryProps> = (args: ToujouCheckboxStoryProps) => {
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
            
            <toujou-input-group class="input-group input-group--check checkbox-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}" ${args.state === 'disabled' ? 'is-disabled' : ''}>
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Checkbox beautiful label</label>
                    <span class="input-description input-description--checkbox-group">This is a description</span>
                    <span class="pristine-error form__error">The given subject was empty.</span>			
                </div>
            </toujou-input-group>
            
            <toujou-input-group class="input-group input-group--multi-check multi-checkbox-group ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''}" ${args.state === 'disabled' ? 'is-disabled' : ''}>
                <label class="multi-checkbox-group__label" for="testform-1000091-multicheckbox-1">This is the group label</label>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Option one</label>
                </div>
                
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_2"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">Option two</label>
                </div>
                
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_3"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">Option three</label>
                </div>
                
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_4"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">Option four</label>
                </div>
                
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_5"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb">
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">Option five</label>
                </div>
                
                 <span class="input-description input-description--after-group">This is a description</span>
                <span class="pristine-error form__error form-error--after-group">The given subject was empty.</span>			
            </toujou-input-group>
	
        </form>
    `;
};

export const CheckboxInputs = Template.bind({});

CheckboxInputs.args = {
    state: 'default'
}
