import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as a}from"./form.docs-8da5404b.js";import"./jsx-runtime-689cd42e.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";import"./index-8a890fec.js";const _={title:"COMPONENTS/Forms",parameters:{badges:[s.DONE],docs:{page:a}},argTypes:{},tags:["autodocs"]},e=()=>`
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
    `,t=e.bind({});var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
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
    \`;
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const f=["FormSummary"];export{t as FormSummary,f as __namedExportsOrder,_ as default};
