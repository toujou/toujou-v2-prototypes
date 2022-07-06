import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import footerDocs from "./footer.docs.mdx";

export default {
    title: 'COMPONENTS/Footer',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: footerDocs,
        },
        layout: "fullscreen",
    },
} as Meta;


const Template = () => {
    return `       
        <footer class="footer">
            <footer-content class="footer-content">
                <footer-column class="footer-column" column-name="logo">
                    <img class="footer__logo" src="https://via.placeholder.com/240x80/cccccc/969696?text=Logo" alt="quote image" />
                </footer-column>
                <footer-column class="footer-column" column-name="service-nav">
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Lösungen</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Preise</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Features</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Service</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Partner</a>
                        </li>
                    </ul>
                </footer-column>
                <footer-column class="footer-column" column-name="footer-nav">
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Blog | Jobs</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Events</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Datenschutz</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Impressum</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Kontakt</a>
                        </li>
                    </ul>
                </footer-column>
                <footer-column class="footer-column" column-name="address">
                    <address class="footer__address">
                        <p class="footer__address-title">Ein Service der:</p>
                        <p class="footer__address-text">DFAU GmbH</p>
                        <p class="footer__address-text">Gustav-Weißkopf-Straße 5</p>
                        <p class="footer__address-text">90768 Fürth</p>
                    </address>
                    <div class="footer__socials">
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-color="primary-light" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-color="primary-light" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-color="primary-light" icon-size="l"></toujou-icon>
                        </a>
                    </div>
                </footer-column>
            </footer-content>
        </footer>
    `;
};

export const Footer = Template.bind({});


