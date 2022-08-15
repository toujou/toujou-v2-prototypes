import { Meta } from '@storybook/web-components';
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
    argTypes: {}
} as Meta;

const Template = () => {
    return `
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <toujou-form-progress class="form-progress">
            <h3 class="form-progress__headline">Schritt</h3>
    
            <ul class="form-progress-bar">
                <li class="form-progress__item" completed >
                    <span class="form-progress__index">1</span>
                </li>
            
                <li class="form-progress__item" active>
                    <span class="form-progress__index">2</span>
                </li>
                <li class="form-progress__item">
                    <span class="form-progress__index">3</span>
                </li>
            </ul>
     </toujou-form-progress>
    `;
};

export const FormProgress = Template.bind({});

