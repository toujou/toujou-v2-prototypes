import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-DiBHS0bC.js";import"./iframe-Cx1EYarR.js";import"./preload-helper-C1FmrZbK.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"toujou-third-party-content",children:"<toujou-third-party-content>"}),`
`,e.jsxs(t.p,{children:["[Docs copied from the ",e.jsx(t.code,{children:"toujou-third-party-content"})," webcomponent]"]}),`
`,e.jsx(t.p,{children:"This element was created as a wrapper for the different kinds of external content."}),`
`,e.jsx(t.p,{children:"Its function is to block or show the content, according the the user's consents:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If consent was given, the content may load"}),`
`,e.jsx(t.li,{children:`if not, the content should not load and in it's place there should be a placeholder
with buttons to make it possible for the user to alter the consent settings`}),`
`]}),`
`,e.jsx(t.p,{children:"At the moment we can use the consent with video, maps and external HTML elements (for which we also have separate consents)."}),`
`,e.jsxs(t.h2,{id:"toujou-third-party-content-example",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," example"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-third-party-content contentType="video">
    <template>
        <f:render section="Video" arguments="{_all}"/>
    </template>

    <div class="third-party-content__placeholder" slot="placeholder">
        <p class="third-party-content__message">
            {f:translate(key:'LLL:EXT:toujou/Resources/Private/Language/Frontend.xlf:trackingconsent.placeholder.message')}</p>
        <div class="third-party-content__button-container">
            <button class="button button--primary third-party-content__button" ttpc-showcontentonce>{f:translate(key:'LLL:EXT:toujou/Resources/Private/Language/Frontend.xlf:trackingconsent.placeholder.button_once_text')}</button>
            <toujou-consent class="consent"
                            consentType="video"
                            consentLifetime="{themeData.trackingconsent_externals_lifetime}"
                            listenTo="click"
                            listenOn=".consent__button"
                            snackbarMessage="{videoSnackbarMessage}">
                <button class="button button--primary third-party-content__button consent__button" allowcontenttype>{f:translate(key:'LLL:EXT:toujou/Resources/Private/Language/Frontend.xlf:trackingconsent.placeholder.button_all_text')}</button>
            </toujou-consent>
        </div>
    </div>

    <!--  This is a container for some elements that need to be rendered in the Light DOM  -->
    <div class="toujou-third-party-content__templated-content"></div>

</toujou-third-party-content>
`})}),`
`,e.jsxs(t.h2,{id:"toujou-third-party-content-types",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," types"]}),`
`,e.jsx(t.p,{children:"There are currently 3 types: 'video', 'maps' and 'html'"}),`
`,e.jsxs(t.p,{children:["We define it with the ",e.jsx(t.code,{children:"contentType"})," attribute, like on the example above."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"contentType"})," attribute is ",e.jsx(t.code,{children:"required"}),"."]}),`
`,e.jsxs(t.h2,{id:"toujou-third-party-content-structure",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," structure"]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<toujou-third-party-content>"})," has 3 distinct parts:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"template"}),`
`,e.jsx(t.li,{children:"placeholder"}),`
`,e.jsx(t.li,{children:"templated-content"}),`
`]}),`
`,e.jsxs(t.h4,{id:"toujou-third-party-content-template-section",children:[e.jsx(t.code,{children:"<toujou-third-party-content"})," template section"]}),`
`,e.jsxs(t.p,{children:["This section holds the content that we want to block / show inside a ",e.jsx(t.code,{children:"<template>"}),` tag.
This content will only load if there is the correct consent for it.`]}),`
`,e.jsxs(t.h4,{id:"toujou-third-party-content-placeholder-section",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," placeholder section"]}),`
`,e.jsx(t.p,{children:`The placeholder section is where we can define what is shown as placeholder.
It may have any kind of content, like texts, images, buttons,...`}),`
`,e.jsx(t.p,{children:"The placeholder section is only visible while there isn't the consent for the third-party content."}),`
`,e.jsxs(t.p,{children:["It must have the ",e.jsx(t.code,{children:'slot="placeholder"'})," attribute."]}),`
`,e.jsxs(t.h4,{id:"toujou-third-party-content-templated-content-section",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," templated-content section"]}),`
`,e.jsxs(t.p,{children:["The templated-content section is ",e.jsx(t.code,{children:"required"}),", and should be left empty."]}),`
`,e.jsxs(t.p,{children:["It must have the class ",e.jsx(t.code,{children:"toujou-third-party-content__templated-content"}),"."]}),`
`,e.jsx(t.p,{children:"Any content you place inside this section will be removed during render."}),`
`,e.jsxs(t.h2,{id:"toujou-third-party-content-styles",children:[e.jsx(t.code,{children:"<toujou-third-party-content>"})," styles"]}),`
`,e.jsx(t.p,{children:`Some elements, like the contents of the placeholder section, are on the Light DOM, so they can be styled with normal css.
On the other hand, some elements can only be styled using CSS Custom Properties`}),`
`,e.jsxs(t.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-third-party-content-display | Set `,e.jsx(t.code,{children:"display"}),` of the element | block |
| --toujou-third-party-content-position | Set `,e.jsx(t.code,{children:"position"}),` of the element | relative |
| --toujou-third-party-content-top | Set `,e.jsx(t.code,{children:"top"}),` of the element | 0 |
| --toujou-third-party-content-left | Set `,e.jsx(t.code,{children:"left"}),` of the element | 0 |
| --toujou-third-party-content-height | Set `,e.jsx(t.code,{children:"height"}),` of the element | 100% |
| --toujou-third-party-content-width | Set `,e.jsx(t.code,{children:"width"}),` of the element | 100% |
| --toujou-third-party-content-maps-position | Set `,e.jsx(t.code,{children:"position"}),` of the element with attribute [contenttype="maps"]| absolute |
| --toujou-third-party-content-iframe-border | Set `,e.jsx(t.code,{children:"border"}),` of iframe inside the element | none |
| --toujou-third-party-content-iframe-position | Set `,e.jsx(t.code,{children:"position"}),` of iframe inside the element | absolute |
| --toujou-third-party-content-iframe-height | Set `,e.jsx(t.code,{children:"height"}),` of iframe inside the element | 100% |
| --toujou-third-party-content-iframe-width | Set `,e.jsx(t.code,{children:"width"}),` of iframe inside the element | 100% |
| --toujou-third-party-content-html-iframe-position | Set `,e.jsx(t.code,{children:"position"}),' of iframe inside the element with attribute [contenttype="html"]| relative |']}),`
`,e.jsxs(t.p,{children:[`Please notice that some content elements need different properties according to the content type (because of the content's own styles and requirements).
An example if the `,e.jsx(t.code,{children:"iframe position"})," property for video, maps and for html elements."]})]})}function l(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const g={title:"COMPONENTS/Third Party Content",parameters:{docs:{page:l}},argTypes:{showPoster:{table:{category:"third party content settings"},name:"Show poster image",description:"Show a poster image as background",control:{type:"boolean"},required:!0},isVideo:{table:{category:"third party content settings"},name:"Video content",description:"Emulate element with video element content",control:{type:"boolean"},required:!0}},tags:["autodocs"]};window.addEventListener("click",n=>{n.target.getAttribute("id")==="clearConsentsButton"&&(localStorage.removeItem("consentsState"),document.location.reload())});const u=()=>`
        background-image: url(https://picsum.photos/2000);
        background-size: cover;
    `,p=n=>`
        <main>
            <p>With this button you can remove all consents from the local storage. For test purposes only</p>
            <p><button class="button" id="clearConsentsButton">Remove all consents</button></p>

            <toujou-third-party-content
                class="third-party-content"
                contentType="${n.isVideo?"video":"maps"}"
                ${n.showPoster?`style="${u()}"`:""}
                ${n.showPoster?"has-poster-image":""}

            >
            <!--   The content of the template element must be inside html comments -->
            <template>
                <!--{htmlElements.html.content -> f:format.raw()}-->
                <h1>This is the content inside the template</h1>
            </template>

            <div class="third-party-content__placeholder" slot="placeholder">
                <p class="third-party-content__message">
                    This is the placeholder message. Privacy policy message <a class="third-party__privacy-policy-link" href="#">Datenschutz</a>
                </p>
                <div class="third-party-content__buttons">
                    <button
                        class="button third-party-content__button"
                        button-size="small"
                        button-type="border"
                        button-variant="primary"
                        ttpc-showcontentonce
                    >
                        Show once
                    </button>
                    <toujou-consent class="consent"
                                    consentType="maps"
                                    consentLifetime="0"
                                    listenTo="click"
                                    listenOn=".consent__button"
                                    snackbarMessage="3rd party content snackbar message">
                        <button
                            class="button button--primary third-party-content__button consent__button"
                            allowcontenttype
                            button-size="small"
                            button-type="default"
                            button-variant="primary"
                        >
                            Always allow
                        </button>
                    </toujou-consent>
                </div>
            </div>
            <!--  This is a container for some elements that need to be rendered in the Light DOM  -->
            <div class="toujou-third-party-content__templated-content"></div>
        </toujou-third-party-content>

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
        </main>
    `,o=p.bind({});o.args={showPoster:!1,isVideo:!1};var c,i,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ThirdPartyContentStoryProps) => {
  return \`
        <main>
            <p>With this button you can remove all consents from the local storage. For test purposes only</p>
            <p><button class="button" id="clearConsentsButton">Remove all consents</button></p>

            <toujou-third-party-content
                class="third-party-content"
                contentType="\${args.isVideo ? 'video' : 'maps'}"
                \${args.showPoster ? \`style="\${posterImageStyles()}"\` : ''}
                \${args.showPoster ? \`has-poster-image\` : ''}

            >
            <!--   The content of the template element must be inside html comments -->
            <template>
                <!--{htmlElements.html.content -> f:format.raw()}-->
                <h1>This is the content inside the template</h1>
            </template>

            <div class="third-party-content__placeholder" slot="placeholder">
                <p class="third-party-content__message">
                    This is the placeholder message. Privacy policy message <a class="third-party__privacy-policy-link" href="#">Datenschutz</a>
                </p>
                <div class="third-party-content__buttons">
                    <button
                        class="button third-party-content__button"
                        button-size="small"
                        button-type="border"
                        button-variant="primary"
                        ttpc-showcontentonce
                    >
                        Show once
                    </button>
                    <toujou-consent class="consent"
                                    consentType="maps"
                                    consentLifetime="0"
                                    listenTo="click"
                                    listenOn=".consent__button"
                                    snackbarMessage="3rd party content snackbar message">
                        <button
                            class="button button--primary third-party-content__button consent__button"
                            allowcontenttype
                            button-size="small"
                            button-type="default"
                            button-variant="primary"
                        >
                            Always allow
                        </button>
                    </toujou-consent>
                </div>
            </div>
            <!--  This is a container for some elements that need to be rendered in the Light DOM  -->
            <div class="toujou-third-party-content__templated-content"></div>
        </toujou-third-party-content>

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
        </main>
    \`;
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const y=["ThirdPartyContent"];export{o as ThirdPartyContent,y as __namedExportsOrder,g as default};
