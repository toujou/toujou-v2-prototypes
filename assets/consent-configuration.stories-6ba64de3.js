import{T as a}from"./badgeCustomConfig-e7a687d5.js";import{M as i}from"./consent.docs-ef99a1d8.js";import"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4fb8b842.js";const _={title:"COMPONENTS/Consent",parameters:{badges:[a.DONE],docs:{page:i}},argTypes:{showError:{table:{category:"Consent configuration settings",defaultValue:{summary:!1}},name:"Show error",description:"Show the consent configuration error",control:{type:"boolean"},defaultValue:!1,required:!0}},tags:["autodocs"]},u=e=>(window.addEventListener("click",c=>{c.target.getAttribute("id")==="clearConsentsButton"&&(localStorage.removeItem("consentsState"),document.cookie="consentsState= : expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/;",document.location.reload())}),`
        <p>With this button you can remove all consents from the local storage. For test purposes only</p>
        <p><button class="button" id="clearConsentsButton">Remove all consents</button></p>

        <toujou-consent-widget
            class="consent-widget"
            listento="click"
            listenon="#consentSaveButton,#consentAcceptAllButton"
            warningvisible="${e.showError}"
            in-page>

            <div class="consent-widget__header" slot="consentWidgetHeader">
                <h4 class="consent-widget__title">Cookies &amp; Drittinhalte</h4>
                <p class="consent-widget__description">
                    Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer <a class="consent-widget__description-link" href="/datenschutz/">Datenschutzerklärung.</a>
                </p>
            </div>

            <div class="consent-widget__bottom">
                ${e.showError?`
                    <p class="consent-widget__warning" slot="consentWarning">
                        <toujou-icon class="icon" icon-name="tools" icon-color="warning" icon-size="normal"></toujou-icon>
                        Bitte speichern Sie Ihre Datenschutzeinstellungen zunächst im Dialogfenster.
                    </p>
                `:`
                    <div class="consent-widget__consent-elements">
                    <toujou-consent class="consent" consenttype="tracking" consentlifetime="1" snackbarmessage="" listento="change" listenon="#trackingInput-box" prechecked="1">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="trackingInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="trackingInput-box">
                                    <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="videoInput-box">
                                    <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="mapsInput-box">
                                    <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="htmlInput-box">
                                   <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                </div>
                `}
            </div>
            <span class="consent-widget__warning" slot="consentWarning">
                <toujou-icon class="icon" icon-name="warning" icon-color="warning" icon-size="normal"></toujou-icon>
                <span class="consent__warning-message">Bitte speichern Sie Ihre Datenschutzeinstellungen zunächst im Dialogfenster.</span>
            </span>
        </toujou-consent-widget>

        <toujou-consent-widget
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
                                    <input class="checkbox checkbox--single consent__checkbox" id="trackingInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="trackingInput-box">
                                        <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="videoInput-box">
                                        <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="mapsInput-box">
                                        <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="htmlInput-box">
                                       <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                    </div>
                </details>

                <button id="consentAcceptAllButton" accept-all="" class="button consent-widget__button" button-type="default" button-size="small" button-variant="primary">Alles akzeptieren</button>
                <button id="consentSaveButton" class="button consent-widget__button" button-size="small" button-variant="primary" button-type="default">OK</button>
            </div>
        </toujou-consent-widget>
     `),n=u.bind({});var t,o,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ConsentConfigurationStoryProps) => {
  window.addEventListener('click', (event: Event) => {
    const clickTarget = (event.target as HTMLElement);
    if (clickTarget.getAttribute('id') === "clearConsentsButton") {
      localStorage.removeItem('consentsState');
      document.cookie = "consentsState= : expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
      document.location.reload();
    }
  });
  return \`
        <p>With this button you can remove all consents from the local storage. For test purposes only</p>
        <p><button class="button" id="clearConsentsButton">Remove all consents</button></p>

        <toujou-consent-widget
            class="consent-widget"
            listento="click"
            listenon="#consentSaveButton,#consentAcceptAllButton"
            warningvisible="\${args.showError}"
            in-page>

            <div class="consent-widget__header" slot="consentWidgetHeader">
                <h4 class="consent-widget__title">Cookies &amp; Drittinhalte</h4>
                <p class="consent-widget__description">
                    Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer <a class="consent-widget__description-link" href="/datenschutz/">Datenschutzerklärung.</a>
                </p>
            </div>

            <div class="consent-widget__bottom">
                \${args.showError ? \`
                    <p class="consent-widget__warning" slot="consentWarning">
                        <toujou-icon class="icon" icon-name="tools" icon-color="warning" icon-size="normal"></toujou-icon>
                        Bitte speichern Sie Ihre Datenschutzeinstellungen zunächst im Dialogfenster.
                    </p>
                \` : \`
                    <div class="consent-widget__consent-elements">
                    <toujou-consent class="consent" consenttype="tracking" consentlifetime="1" snackbarmessage="" listento="change" listenon="#trackingInput-box" prechecked="1">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="trackingInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="trackingInput-box">
                                    <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="videoInput-box">
                                    <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="mapsInput-box">
                                    <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                    <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                        <toujou-input-group class="input-group" input-group-type="checkbox">
                            <div class="checkbox-group">
                                <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                                <label class="checkbox-group__label" for="htmlInput-box">
                                   <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                                </label>
                            </div>
                        </toujou-input-group>
                    </toujou-consent>

                </div>
                \`}
            </div>
            <span class="consent-widget__warning" slot="consentWarning">
                <toujou-icon class="icon" icon-name="warning" icon-color="warning" icon-size="normal"></toujou-icon>
                <span class="consent__warning-message">Bitte speichern Sie Ihre Datenschutzeinstellungen zunächst im Dialogfenster.</span>
            </span>
        </toujou-consent-widget>

        <toujou-consent-widget
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
                                    <input class="checkbox checkbox--single consent__checkbox" id="trackingInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="trackingInput-box">
                                        <span class="consent__span">Anonymes Tracking erlauben <span class="consent__duration">(Session)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="videoInput-box">
                                        <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="mapsInput-box">
                                        <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                        <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0">
                            <toujou-input-group class="input-group" input-group-type="checkbox">
                                <div class="checkbox-group">
                                    <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                                    <label class="checkbox-group__label" for="htmlInput-box">
                                       <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30 Tage)</span></span>
                                    </label>
                                </div>
                            </toujou-input-group>
                        </toujou-consent>

                    </div>
                </details>

                <button id="consentAcceptAllButton" accept-all="" class="button consent-widget__button" button-type="default" button-size="small" button-variant="primary">Alles akzeptieren</button>
                <button id="consentSaveButton" class="button consent-widget__button" button-size="small" button-variant="primary" button-type="default">OK</button>
            </div>
        </toujou-consent-widget>
     \`;
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const k=["ConsentConfiguration"];export{n as ConsentConfiguration,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=consent-configuration.stories-6ba64de3.js.map
