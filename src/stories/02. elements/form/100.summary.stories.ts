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
} satisfies Meta;

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
                    <span class="form-progress__index">4</span>
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
                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
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
                        <toujou-icon class="icon" icon-name="arrow-left"></toujou-icon>
                        Previous step
                    </button>
                </span>
            </nav>
        </form>
    `;
};

export const FormSummary = Template.bind({});
