import {Meta} from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'TESTS/Text Page',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
    },
} satisfies Meta;

const Template = () => {
    return `

        <body>











<skippy-links role="navigation"></skippy-links>


















<input type="checkbox" name="contact-state" id="contact-state" class="state-input" aria-hidden="true" autocomplete="off">












<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium">






<nav aria-label="Topbar Logo" style="display: contents;">
    <a aria-label="Zur Startseite" show-title-on-mobile="false" class="topbar__logo-link" href="/">


            <span class="topbar__title">toujou Installation</span>





                            <img class="topbar__logo topbar__logo--svg" src="/fileadmin/Images/Logos/logo_01.svg" width="170" height="56" alt="" title="" loading="lazy">



    </a>
</nav>





<ul class="topbar__actions">


        <li class="topbar__actions-item">
            <label for="contact-state" class="topbar__actions-link">
                <span class="topbar__actions-text">
                    Kontaktieren Sie uns
                </span>
                <toujou-icon icon-name="email" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
            </label>
        </li>


</ul>








<nav id="mainNavigation" class="main-nav" aria-label="Main navigation">






    <ul class="main-nav__list" nav-list-level="1">

            <li class="main-nav__list-item" page-uid="312" nav-item-level="1" page-designation="">

                        <a page-uid="312" class="main-nav__link main-nav__link--312-page-uid" href="/landing-page/">
                            <span class="main-nav__text">Landing page</span>
                        </a>



            </li>

            <li class="main-nav__list-item" page-uid="313" nav-item-level="1" page-designation="">

                        <a page-uid="313" class="main-nav__link main-nav__link--313-page-uid" href="/content-page/">
                            <span class="main-nav__text">Content page</span>
                        </a>



            </li>

    </ul>







</nav>








<toujou-burger-button class="burger-button" role="button" aria-pressed="false" aria-haspopup="true" aria-controls="mainNavigation" aria-expanded="false" aria-label="Menu button" toggle-element-selector="#topbar" tabindex="0">
    <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
    <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
    <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
</toujou-burger-button>










<nav class="service-nav" aria-label="Service navigation">






                <a page-designation="" class="service-nav__link" href="/kontakt/">
                    Kontakt
                </a>







                <a page-designation="" class="service-nav__link" href="/impressum/">
                    Impressum
                </a>







                <a page-designation="" class="service-nav__link" href="/datenschutz/">
                    Datenschutz
                </a>


</nav>







<!----></toujou-topbar>







    <!--TYPO3SEARCH_begin-->













    <header class="header" image-height="default" header-type="image">













<div class="header-content" accent-color="primary" vertical-position="bottom" horizontal-position="left" content-size="half" text-alignment="">







<h1 class="header-content__title font--default">kojo - 向上</h1>






        <p class="header-content__text">toujou website theme: jap: 'kojo' | eng: 'Improvement' | de: 'Verbesserung'

</p>



</div>











<figure class="header__figure">













    <video playsinline="" poster="" video-extension="mp4" autoplay="" muted="" loop="" class="single-media__video video"><source src="/fileadmin/Videos/64594-510542191_small.mp4" type="video/mp4"></video>











</figure>















    </header>










    <!--TYPO3SEARCH_end-->
    <main id="main" skippy-links-label="Inhaltsbereich">












        <!--TYPO3SEARCH_begin-->

\t
\t\t
\t




<span id="c2247"></span>

<h1 class="font--align-center">kojo, das neue toujou Theme</h1>
<h2 class="font--align-center">&nbsp;</h2>
<p class="font--align-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>











<span id="c3104"></span>

<toujou-content-card-grid class="content-card-grid">











        <toujou-content-card class="content-card" card-direction="vertical" card-variant="default" role="article">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/4/a/csm_fuerAlleGut_d1c3112c5b.jpg" width="336" height="207" data-width="4766.7487499999" data-height="2942.4375" srcset="/fileadmin/_processed_/4/a/csm_fuerAlleGut_d1c3112c5b.jpg 336w,/fileadmin/_processed_/4/a/csm_fuerAlleGut_b153dfe204.jpg 433w,/fileadmin/_processed_/4/a/csm_fuerAlleGut_8fcd5b61b6.jpg 440w,/fileadmin/_processed_/4/a/csm_fuerAlleGut_471ad9c57e.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:1743.6666666666665,&quot;y&quot;:1162.3333333333333,&quot;width&quot;:1743.6666666666665,&quot;height&quot;:1162.3333333333333}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">Für ALLE gut</h3>


            <p class=" content-card__text">ALLE profitieren von leicht zugänglichen Angeboten:</p>
<p class=" content-card__text">Nicht nur an Handicaps denken</p>
<p class=" content-card__text">- schlechte Internetverbindung oder technische Ausstattung</p>
<p class=" content-card__text">- Kinder, &nbsp;alte Menschen</p>
<p class=" content-card__text">- weniger erfahrene Menschen</p>
<p class=" content-card__text">- Suchmaschinen</p>
<p class=" content-card__text">- und vieles mehr</p>


    </div>

        </toujou-content-card>



















        <toujou-content-card class="content-card" card-direction="vertical" card-variant="default" role="article">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/6/6/csm_improvmentCurve_200d2b0d89.jpg" width="336" height="207" data-width="911.24999999999" data-height="562.49999999999" srcset="/fileadmin/_processed_/6/6/csm_improvmentCurve_200d2b0d89.jpg 336w,/fileadmin/_processed_/6/6/csm_improvmentCurve_cca601a4ba.jpg 433w,/fileadmin/_processed_/6/6/csm_improvmentCurve_29bed18064.jpg 440w,/fileadmin/_processed_/6/6/csm_improvmentCurve_63ea26b2ad.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:333.3333333333333,&quot;y&quot;:222.33333333333331,&quot;width&quot;:333.3333333333333,&quot;height&quot;:222.33333333333331}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">VERBESSERUNG als Ziel</h3>


            <p class=" content-card__text">Verbesserungen auf vielen Ebenen:</p>
<p class=" content-card__text">- Pagespeed</p>
<p class=" content-card__text">- moderne Konzepte</p>
<p class=" content-card__text">- …..</p>





    </div>

        </toujou-content-card>



















        <toujou-content-card class="content-card" card-direction="vertical" card-variant="default" role="article">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/6/e/csm_customization_2ea4de0a1c.jpg" width="336" height="207" data-width="7043.9624999999" data-height="4348.1249999999" srcset="/fileadmin/_processed_/6/e/csm_customization_2ea4de0a1c.jpg 336w,/fileadmin/_processed_/6/e/csm_customization_99e9e646cd.jpg 433w,/fileadmin/_processed_/6/e/csm_customization_da437228c2.jpg 440w,/fileadmin/_processed_/6/e/csm_customization_ddf1d69bf6.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:2576.6666666666665,&quot;y&quot;:2576.6666666666665,&quot;width&quot;:2576.6666666666665,&quot;height&quot;:2576.6666666666665}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">ecxellente Basis für CUSTOMIZATION</h3>


            <p class=" content-card__text">- wenn die zukünftigen Anpassungen schon mitgedacht sind</p>
<p class=" content-card__text">- …</p>


    </div>

        </toujou-content-card>









</toujou-content-card-grid>









\t
\t\t<hr class="divider divider--primary">
\t

\t

\t
\t\t
\t
\t\t\t


































<span id="c3107"></span>
<section id="default-efbf10cd6b3bb8a5946d52b95fc8c38c" class="chapter " style="
            --chapter-bg-image-mobile: url(/fileadmin/_processed_/0/5/csm_Improvement_1394374fe7.jpg);
            --chapter-bg-image-tablet: url(/fileadmin/_processed_/0/5/csm_Improvement_a5ca96ae7c.jpg);
            --chapter-bg-image-desktop: url(/fileadmin/_processed_/0/5/csm_Improvement_86b13bc4c9.jpg);
            --chapter-bg-image-wide: url(/fileadmin/_processed_/0/5/csm_Improvement_b8009af510.jpg);
            --chapter-bg-image-original: url(/fileadmin/fileadmin/Images/Improvement/Improvement.jpg);
        " min-height="third" has-background-media="" attachment-type="fixed">







    </section>






\t\t\t
\t\t

\t

\t





        <!--TYPO3SEARCH_end-->
    </main>







<footer class="footer">

            <footer-content class="footer-content">
                <footer-column class="footer-column" column-name="logo">




<a aria-label="Zur Startseite" class="footer__logo" href="/">


    <img class="footer__logo" src="/fileadmin/Images/Logos/logo_01.svg" width="170" height="56" alt="Footer logo" title="" loading="lazy">


</a>



                </footer-column>

                <footer-column class="footer-column" column-name="service-nav">






    <ul class="footer__list">

            <li class="footer__list-item" page-designation="">

                        <a class="footer__list-link" href="/kontakt/">
                            Kontakt
                        </a>

            </li>

            <li class="footer__list-item" page-designation="">

                        <a class="footer__list-link" href="/impressum/">
                            Impressum
                        </a>

            </li>

            <li class="footer__list-item" page-designation="">

                        <a class="footer__list-link" href="/datenschutz/">
                            Datenschutz
                        </a>

            </li>

    </ul>





                </footer-column>

                <footer-column class="footer-column" column-name="footer-nav">




    <ul class="footer__list">

            <li class="footer__list-item" page-designation="">

                        <a class="footer__list-link" href="/landing-page/">
                            Landing page
                        </a>

            </li>

            <li class="footer__list-item" page-designation="">

                        <a class="footer__list-link" href="/content-page/">
                            Content page
                        </a>

            </li>

    </ul>




                </footer-column>

                <footer-column class="footer-column" column-name="address">



    <address class="footer__address">
        <p class="footer__address-title footer__address-text--name">toujou</p>

            <p class="footer__address-text footer__address-text--street">Graf-Pückler-Limpurg-Str. 87</p>


            <p class="footer__address-text footer__address-text--city">90768 Fürth</p>


            <p class="footer__address-text footer__address-text--phone">



    <toujou-icon class="icon " icon-name="telephone" icon-size="ms"></toujou-icon>




                Tel: <a class="footer__address-link" href="tel:+4991123980870">+4991123980870</a>
            </p>





            <p class="footer__address-text footer__address-text--mail">



    <toujou-icon class="icon " icon-name="email" icon-size="ms"></toujou-icon>




                <a class="footer__address-link" href="mailto:service@toujou.com">service@toujou.com</a>
            </p>

    </address>






    <div class="footer__socials" role="group" aria-label="Social Media Links">

            <a class="footer__socials-link" href="https://www.facebook.com/" target="_blank" aria-label="Facebook link">



    <toujou-icon class="icon " icon-name="sm-facebook" icon-size="l"></toujou-icon>




            </a>


            <a class="footer__socials-link" href="https://www.twitter.com/" target="_blank" aria-label="Twitter Link">



    <toujou-icon class="icon " icon-name="sm-twitter" icon-size="l"></toujou-icon>




            </a>


            <a class="footer__socials-link" href="https://www.instagram.com/" target="_blank" aria-label="Instagram Link">



    <toujou-icon class="icon " icon-name="sm-instagram" icon-size="l"></toujou-icon>




            </a>


            <a class="footer__socials-link" href="https://www.xing.com/" target="_blank" aria-label="Xing Link">



    <toujou-icon class="icon " icon-name="sm-xing" icon-size="l"></toujou-icon>




            </a>


            <a class="footer__socials-link" href="https://www.linkedin.com/" target="_blank" aria-label="Linkedin Link">



    <toujou-icon class="icon " icon-name="sm-linkedin" icon-size="l"></toujou-icon>




            </a>


            <a class="footer__socials-link" href="https://www.pinterest.com/" target="_blank" aria-label="Pinterest Link">



    <toujou-icon class="icon " icon-name="sm-pinterest" icon-size="l"></toujou-icon>




            </a>


    </div>




                </footer-column>
            </footer-content>

</footer>















<toujou-contact-box class="contact-box">
    <div class="contact-box__card">
        <button class="contact-box__close" aria-label="Close the contact box">



    <toujou-icon class="icon " icon-name="close" icon-color="font" icon-size="ms"></toujou-icon>




        </button>

        <div class="contact-box__content" slot="content">
            <h3 class="contact-box__headline">
                Kontakt
            </h3>


                <p class="contact-box__message">Hello</p>





                <div class="contact-box__items">


                        <div class="contact-box__item">



    <toujou-icon class="icon " icon-name="telephone" icon-color="font" icon-size="ms"></toujou-icon>




                            <a class="contact-box__link" href="tel:+4991123980870">+4991123980870</a>
                        </div>



                        <div class="contact-box__item">



    <toujou-icon class="icon " icon-name="email" icon-color="font" icon-size="ms"></toujou-icon>




                            <a class="contact-box__link" href="mailto:service@toujou.com">service@toujou.com</a>
                        </div>

                </div>

        </div>
    </div>
</toujou-contact-box>



















        <toujou-consent-widget class="consent-widget" listento="click" listenon="#consentSaveButton,#consentAcceptAllButton,#consentDenyAllButton" element-design="default" warningvisible="false">




<div class="consent-widget__header" slot="consentWidgetHeader">
    <h4 class="consent-widget__title">
        Cookies &amp; Drittinhalte
    </h4>

        <p class="consent-widget__description">
            Auf dieser Website werden Cookies und Drittinhalte verwendet. Im Folgenden können Sie Ihre
          Zustimmung geben oder widerrufen. Weitere Informationen finden Sie in unserer

            <a class="consent-widget__description-link" href="/datenschutz/">
                Datenschutzerklärung.
            </a>
        </p>

</div>







<div class="consent-widget__bottom">
    <details class="consent-widget__details">
        <summary class="consent-widget__details-summary">
            <span id="consentSettingsButton" class="button consent-widget__button" button-type="default" button-size="small" button-variant="font">
                Einstellungen
            </span>
        </summary>
        <div class="consent-widget__consent-elements" role="list">



            <toujou-consent class="consent" consenttype="video" consentlifetime="30" snackbarmessage="" listento="change" listenon="#videoInput-box" prechecked="0" role="listitem">

                <toujou-input-group class="input-group" input-group-type="checkbox">
                    <div class="checkbox-group">
                        <input class="checkbox checkbox--single consent__checkbox" id="videoInput-box" type="checkbox">
                        <label class="checkbox-group__label" for="videoInput-box">
                            <span class="consent__span">Externe Videos erlauben <span class="consent__duration">(30
            Tage)</span></span>
                        </label>
                    </div>
                </toujou-input-group>
            </toujou-consent>

            <toujou-consent class="consent" consenttype="maps" consentlifetime="30" snackbarmessage="" listento="change" listenon="#mapsInput-box" prechecked="0" role="listitem">
                <toujou-input-group class="input-group" input-group-type="checkbox">
                    <div class="checkbox-group">
                        <input class="checkbox checkbox--single consent__checkbox" id="mapsInput-box" type="checkbox">
                        <label class="checkbox-group__label" for="mapsInput-box">
                            <span class="consent__span">Externe Karten erlauben <span class="consent__duration">(30
            Tage)</span></span>
                        </label>
                    </div>
                </toujou-input-group>
            </toujou-consent>

            <toujou-consent class="consent" consenttype="html" consentlifetime="30" snackbarmessage="" listento="change" listenon="#htmlInput-box" prechecked="0" role="listitem">
                <toujou-input-group class="input-group" input-group-type="checkbox">
                    <div class="checkbox-group">
                        <input class="checkbox checkbox--single consent__checkbox" id="htmlInput-box" type="checkbox">
                        <label class="checkbox-group__label" for="htmlInput-box">
                            <span class="consent__span">Externe HTML-Inhalte erlauben <span class="consent__duration">(30
            Tage)</span></span>
                        </label>
                    </div>
                </toujou-input-group>
            </toujou-consent>

        </div>
    </details>

        <div class="consent-widget__bottom-buttons">
            <button id="consentDenyAllButton" deny-all="" class="button consent-widget__button" button-type="border" button-size="small" button-variant="primary">
                Alles ablehnen
            </button>
            <button id="consentAcceptAllButton" accept-all="" class="button consent-widget__button" button-type="default" button-size="small" button-variant="primary">
                Alles akzeptieren
            </button>
            <button id="consentSaveButton" class="button consent-widget__button" button-size="small" button-variant="primary" button-type="default">
                OK
            </button>
        </div>

</div>














        </toujou-consent-widget>








        <toujou-snackbar class="snackbar" aria-live="assertive" tabindex="-1" hidden=""></toujou-snackbar>







<toujou-topbutton title="Nach oben" aria-label="Nach oben" class="topbutton" role="button" aria-hidden="true" tabindex="0">



    <toujou-icon class="icon " icon-name="arrow-up" icon-color="primary" icon-size="l"></toujou-icon>




</toujou-topbutton>




</body>
    `;
};

export const TextPage = Template.bind({});


