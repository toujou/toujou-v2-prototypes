import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import footerDocs from "./footer.docs.mdx";

export default {
    title: 'COMPONENTS/Footer',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: footerDocs,
        },
        layout: "fullscreen",
    },
    tags: ['autodocs']
} satisfies Meta;


const Template = () => {
    return `
        <footer class="footer">
            <footer-content class="footer-content">
                <footer-column class="footer-column" column-name="logo">
                    <img class="footer__logo" src="https://picsum.photos/248/80" alt="quote image" />
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
                        <p class="footer__address-text footer__address-text--name">DFAU GmbH</p>
                        <p class="footer__address-text footer__address-text--street">Gustav-Weißkopf-Straße 5</p>
                        <p class="footer__address-text footer__address-text--city">90768 Fürth</p>
                        <p class="footer__address-text footer__address-text--phone">
                            <toujou-icon class="icon" icon-name="telephone" icon-size="ms"></toujou-icon>
                            Tel: <a class="footer__address-link" href="tel:+1 (291) 264-9318">+1 (291) 264-9318</a>
                        </p>
                        <p class="footer__address-text footer__address-text--fax">
                            <toujou-icon class="icon" icon-name="fax" icon-size="ms"></toujou-icon>
                            Fax: +1 (569) 939-1286
                        </p>
                        <p class="footer__address-text footer__address-text--mail">
                            <toujou-icon class="icon" icon-name="email" icon-size="ms"></toujou-icon>
                            <a class="footer__address-link" href="mailto:cevijakesi@mailinator.com">cevijakesi@mailinator.com</a>
                        </p>
                    </address>
                    <div class="footer__socials">
                        <a href="#" class="footer__socials-link" aria-label="Our Facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link" aria-label="Our Twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link" aria-label="Our Instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link" aria-label="Our Snapchat account">
                            <toujou-icon class="icon" icon-name="sm-snapchat" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link" aria-label="Our WhatsApp account">
                            <toujou-icon class="icon" icon-name="sm-whatsapp" icon-size="l"></toujou-icon>
                        </a>
                    </div>
                </footer-column>
            </footer-content>
        </footer>
    `;
};

export const Footer = Template.bind({});


