import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-VPJveqH0.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"consent",children:"Consent"}),`
`,n.jsx(e.p,{children:"The consent element allows us to define the allowed cookies and external consents."}),`
`,n.jsx(e.p,{children:"It asks consent for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Anonymous tracking"}),`
`,n.jsx(e.li,{children:"External videos"}),`
`,n.jsx(e.li,{children:"External maps"}),`
`,n.jsx(e.li,{children:"external html elements"}),`
`]}),`
`,n.jsx(e.p,{children:"It has two render options:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consent widget: rendered on all pages if the consent is still missing"}),`
`,n.jsx(e.li,{children:'Consent configuration: Can be added to any page as a content element (normally shown on the "Datenschutz" pages)'}),`
`]}),`
`,n.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<toujou-consent-widget
    class="consent-widget"
    listento="click"
    listenon="#consentSaveButton,#consentAcceptAllButton"
    warningvisible="false">

    <div class="consent-widget__header" slot="consentWidgetHeader">
        <h4 class="consent-widget__title">Cookies &amp; Drittinhalte</h4>
        <p class="consent-widget__description">
            Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer <a class="consent-widget__description-link" href="/datenschutz/">Datenschutzerklärung.</a>
        </p>
    </div>

    <div class="consent-widget__bottom">
        <details class="consent-widget__details">
            <summary class="consent-widget__details-summary">
                <span
                    id="consentSettingsButton"
                    class="button consent-widget__button"
                    button-type="default"
                    button-size="small"
                    button-variant="font"
                >Einstellungen</span>
            </summary>
            <div class="consent-widget__consent-elements">
                <toujou-consent class="consent" consenttype="tracking" consentlifetime="1" snackbarmessage="" listento="change" listenon="#trackingInput-box" prechecked="1">
                    <toujou-input-group class="input-group" input-group-type="checkbox">
                        <div class="checkbox-group">
                            <input class="checkbox checkbox--single" id="trackingInput-box" type="checkbox">
                            <label class="checkbox-group__label" for="trackingInput-box">
                                <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                            </label>
                        </div>
                    </toujou-input-group>
                </toujou-consent>

                <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                    <toujou-input-group class="input-group" input-group-type="checkbox">
                        <div class="checkbox-group">
                            <input class="checkbox checkbox--single" id="videoInput-box" type="checkbox">
                            <label class="checkbox-group__label" for="videoInput-box">
                                <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                            </label>
                        </div>
                    </toujou-input-group>
                </toujou-consent>

                <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                    <toujou-input-group class="input-group" input-group-type="checkbox">
                        <div class="checkbox-group">
                            <input class="checkbox checkbox--single" id="mapsInput-box" type="checkbox">
                            <label class="checkbox-group__label" for="mapsInput-box">
                                <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                            </label>
                        </div>
                    </toujou-input-group>
                </toujou-consent>

                <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                    <toujou-input-group class="input-group" input-group-type="checkbox">
                        <div class="checkbox-group">
                            <input class="checkbox checkbox--single" id="htmlInput-box" type="checkbox">
                            <label class="checkbox-group__label" for="htmlInput-box">
                               <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                            </label>
                        </div>
                    </toujou-input-group>
                </toujou-consent>

            </div>
        </details>

        <button id="consentAcceptAllButton" accept-all="" class="button consent-widget__button" button-type="default" button-size="small" button-variant="primary">
            Alles akzeptieren
        </button>
        <button id="consentSaveButton" class="button consent-widget__button" button-size="small" button-variant="primary" button-type="default">
            OK
        </button>
    </div>
</toujou-consent-widget>
`})})]})}function i(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{i as M};
