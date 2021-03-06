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
        isDisabled: {
            table: {
                category: "Toggle settings",
                defaultValue: { summary: 'false' },
            },
            name: 'disabled',
            description: "Toggle the \"disabled\" attribute",
            control: { type: 'boolean' },
            defaultValue: false,
            required: true,
        },
    }
} as Meta;

interface ToujouToggleStoryProps {
    isDisabled: any;
}

const Template: Story<ToujouToggleStoryProps> = (args: ToujouToggleStoryProps) => {
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
                ${args.isDisabled ? 'is-disabled' : ''}
                input-group-type="toggle">
                <div class="toggle-group">
                     <input
                            data-pristine-required-message="The given subject was empty."
                            class="toggle"
                            id="testform-1000091-checkbox-1"
                            type="checkbox"
                            name="tx_form_formframework[testform-1000091][checkbox-1]"
                            value="1"
                            role="switch"
                            ${args.isDisabled ? 'disabled' : ''}>
                    <label class="toggle-group__label" for="testform-1000091-checkbox-1">This is the label</label>
                    <toujou-form-description class="form-description form-description--toggle-group">This is the description</toujou-form-description>
                    <toujou-form-error class="pristine-error form-error form-error--toggle-group">The given subject was empty.</toujou-form-error>
                </div>
            </toujou-input-group>
	
        </form>
    `;
};

export const ToggleInputs = Template.bind({});

ToggleInputs.args = {
    isDisabled: false,
}
