import { Meta } from '@storybook/web-components';

export default {
    title: 'WEBCOMPONENTS/Topbar',
    argTypes: {
        logoPosition: {
            name: 'Logo position',
            options: ['right', 'left'],
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

const Template = (args) => {
    const elClasses = `
        toujou-topbar
        ${args.hasBorderBottom ? 'toujou-topbar--has-border-bottom' : ''}
        ${args.hasBottomShadow ? 'toujou-topbar--has-bottom-shadow' : ''}
        toujou-topbar--logo-size-${args.logoSize}
    `;

    return `
        <style>
            body {
                background-color: rgb(222 222 222);
                padding: 0 !important;
            }
        </style>
        
        <toujou-topbar class="${elClasses}" logo-position="${args.logoPosition}">
            <img slot="topbar-logo" src="https://picsum.photos/80/80" alt="logo" class="topbar-logo topbar-logo--${args.logoSize}">
    
            <nav slot="topbar-main-nav" class="main-nav">
                <ul class="main-nav__list main-nav__list--first-level">
                    <li class="main-nav__item">Fruit</li>
                    <li class="main-nav__item">Veggies</li>
                    <li class="main-nav__item">Cereals</li>
                </ul>
            </nav>
            <nav slot="topbar-service-nav" class="service-nav">
                <a href="#" class="service-nav__link">
                    <span class="service-nav__link-icon service-nav__link-icon--account"></span>
                    <span class="service-nav__link-text">Account</span>
                </a>
                <a href="#" class="service-nav__link">
                    <span class="service-nav__link-icon service-nav__link-icon--heart"></span>
                    <span class="service-nav__link-text">Heart</span>
                </a>
                <a href="#" class="service-nav__link">
                    <span class="service-nav__link-icon service-nav__link-icon--downloads"></span>
                    <span class="service-nav__link-text">Downloads</span>
                </a>
            </nav>
        </toujou-topbar>
    `
};

export const ToujouTopbar = Template.bind({});

ToujouTopbar.args = {
    logoPosition: 'right',
    logoSize: 'small',
    hasBorderBottom: false,
    hasBottomShadow: false,
}

