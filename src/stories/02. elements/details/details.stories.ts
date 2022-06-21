import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import detailsDocs from './details.docs.mdx';

export default {
    title: 'COMPONENTS/Accordion',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/154e8bfd-4e6a-48d2-914c-5bafe3af7289/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: detailsDocs,
        },
    },
} as Meta;

const Template = () => {
    return `       
        <toujou-details id="details-1" class="details">
            <h3 slot="summary" class="details__title">I am just another simple title</h3>
            <ul slot="summary" class="details__subtitle details__subtitle-list">
                <li class="details__subtitle-list-item">Fruit</li>
                <li class="details__subtitle-list-item">Apple</li>
                <li class="details__subtitle-list-item">Pink Lady</li>
            </ul>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </toujou-details>
    `
};

export const Details = Template.bind({});

