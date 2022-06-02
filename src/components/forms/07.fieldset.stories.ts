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
        badges: [TOUJOU_BADGES.PROGRESS]
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
    
            <fieldset id="testform-1000091-fieldset-1" class="form-group">
                <legend>Fieldset super name</legend>
    
                <div class="input-group ">
                    <label class="input-label" for="testform-1000091-text-2">Text</label>
                    <span class="form__description">description</span>
                    <input placeholder="placeholder"
                        class=" input input--text"
                        id="testform-1000091-text-2"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-2]"
                        value="">
                </div>
                
                <div class="input-group ">
                    <label class="input-label" for="testform-1000091-text-3">Text</label>
                    <span class="form__description">description</span>
                    <input placeholder="placeholder"
                        class=" input input--text"
                        id="testform-1000091-text-3"
                        type="text"
                        name="tx_form_formframework[testform-1000091][text-3]"
                        value="">
                </div>
            
            </fieldset>
        </form>
    `;
};

export const Fieldset = Template.bind({});

// @ts-ignore
Fieldset.args = {}
