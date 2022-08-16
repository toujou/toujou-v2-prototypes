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
        badges: [TOUJOU_BADGES.TESTING],
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
            <h3 class="form-progress__headline">Schritt 4 von 4</h3>
    
            <ul class="form-progress-bar">
                <li class="form-progress__item" completed >
                    <span class="form-progress__index">1</span>
                </li>
                <li class="form-progress__item" completed>
                    <span class="form-progress__index">2</span>
                </li>
                <li class="form-progress__item" completed>
                    <span class="form-progress__index">3</span>
                </li>
                <li class="form-progress__item" active>
                    <span class="form-progress__index">3</span>
                </li>
            </ul>
        </toujou-form-progress>
     
        <form
            enctype="multipart/form-data"
            method="post" 
            class="form" 
            id="testform-1000091" 
            action="#"
            novalidate="true">
            
            <h3 class="form-step__title">Summary</h3>
            
            <toujou-table-container class="table-container">
                <table text-alignment="left" class="table">
                    <tr>
                        <th>Name</th>
                        <td>Luke Skywalker</td>
                    </tr>
                    <tr>
                        <th>Street</th>
                        <td>Gartenstraße</td>
                    </tr>
                    <tr>
                        <th>County</th>
                        <td>Chile</td>
                    </tr>
                </table>
            </toujou-table-container>
            
            <nav class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button"
                            class="button form-navigation__button"
                            button-variant="primary"
                            button-icon-position="right"
                            type="submit" 
                            name="tx_form_formframework[kontaktformular-8][__currentPage]"
                            value="2">
                        <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                        Next step
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button is="toujou-button"
                            formnovalidate="formnovalidate"
                            class="button form-navigation__button"
                            button-variant="primary"
                            button-icon-position="left"
                            button-type="border"
                            type="submit"
                            name="tx_form_formframework[kontaktformular-8][__currentPage]"
                            value="0">
                        <toujou-icon class="icon button__icon" icon-name="arrow-left"></toujou-icon>
                        Previous step
                    </button>
                </span>
            </nav>	
        </form>
    `;
};

export const FormSummary = Template.bind({});

