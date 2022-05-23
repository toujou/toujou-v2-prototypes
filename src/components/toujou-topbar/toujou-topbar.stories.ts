import { Meta } from '@storybook/web-components';
// @ts-ignore
import logoImage from './../../assets/logoipsum.svg';
import { withXD } from "storybook-addon-xd-designs";

export default {
    title: 'WEBCOMPONENTS/Topbar',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/9b61f9cb-3a4b-4df5-9706-2991633fc53e/Desktop',
        }
    },
    argTypes: {
        logoPosition: {
            name: 'Logo position',
            options: ['right', 'left', 'center'],
            control: { type: 'radio' },
            defaultValue: ['right'],
            required: true,
        },
        logoSize: {
            name: 'Logo size',
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            defaultValue: ['small'],
            required: true,
        },
        showServiceNavbar: {
            name: 'Show service navbar',
            type: 'boolean',
            required: true,
        },
        serviceNavStyle: {
            name: 'Service nav style',
            options: ['Both', 'Icons only', 'Text only'],
            control: { type: 'radio' },
            defaultValue: ['Both'],
            required: true,
        },
        hasBorderBottom: {
            name: 'Border bottom',
            type: 'boolean',
            required: true,
        },
        hasBottomShadow: {
            name: 'Bottom shadow',
            type: 'boolean',
            required: true,
        },
    }
} as Meta;

const Template = (args: { hasBorderBottom: boolean; hasBottomShadow: boolean; serviceNavStyle: string; logoSize: string; logoPosition: string; showServiceNavbar: boolean; }) => {
    const elClasses = `
        toujou-topbar
        ${args.hasBorderBottom ? 'toujou-topbar--has-border-bottom' : ''}
        ${args.hasBottomShadow ? 'toujou-topbar--has-bottom-shadow' : ''}
        toujou-topbar--service-navbarbar-${args.serviceNavStyle.replace(/\s+/g, '-').toLowerCase()}
        toujou-topbar--logo-size-${args.logoSize}
    `;

    return `
        <style>
            body {
                background-color: #ECF0F1;
                padding: 0 !important;
                min-height: 100%;
            }
        </style>
        
        <toujou-topbar class="${elClasses}" logo-position="${args.logoPosition}" service-navbar-visible="${args.showServiceNavbar}">
            <img slot="topbar-logo" src="${logoImage}" alt="logo" class="topbar-logo topbar-logo--${args.logoSize}">
    
            <nav slot="topbar-main-navbar" class="main-navbar">
                <ul class="main-navbar__list main-navbar__list--first-level">
                    <li class="main-navbar__item main-navbar__item--has-subnav">
                        <span class="main-navbar__item-text">Fruit</span>
                        <ul class="main-navbar__list main-navbar__list--second-level">
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Apple</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Banana</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Ananas</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Peach</span>
                            </li>
                        </ul>
                    </li>
                    <li class="main-navbar__item main-navbar__item--has-subnav">
                        <span class="main-navbar__item-text">Veggies</span>
                        <ul class="main-navbar__list main-navbar__list--second-level">
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Carrot</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Potato</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Pumpkin</span>
                            </li>
                            <li class="main-navbar__item">
                                <span class="main-navbar__item-text">Peach</span>
                            </li>
                        </ul>
                    </li>
                    <li class="main-navbar__item">
                        <span class="main-navbar__item-text">Cereals</span>
                    </li>
                </ul>
            </nav>
            
            <nav slot="topbar-service-navbar" class="service-navbar">
                <a href="#" class="service-navbar__link">
                    <span class="service-navbar__link-icon service-navbar__link-icon--account"></span>
                    <span class="service-navbar__link-text">Account</span>
                </a>
                <a href="#" class="service-navbar__link">
                    <span class="service-navbar__link-icon service-navbar__link-icon--heart"></span>
                    <span class="service-navbar__link-text">Heart</span>
                </a>
                <a href="#" class="service-navbar__link">
                    <span class="service-navbar__link-icon service-navbar__link-icon--downloads"></span>
                    <span class="service-navbar__link-text">Downloads</span>
                </a>
            </nav>
        </toujou-topbar>
    `
};

export const ToujouTopbar = Template.bind({});

// @ts-ignore
ToujouTopbar.args = {
    logoPosition: 'left',
    logoSize: 'small',
    showServiceNavbar: true,
    serviceNavStyle: 'Both',
    hasBorderBottom: false,
    hasBottomShadow: false,
}
