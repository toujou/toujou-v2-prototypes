import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import ListsDocs from "./lists.docs.mdx";

export default {
    title: 'COMPONENTS/Lists',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: ListsDocs,
        }
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <h3>Default list</h3>
        <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <h3>Separated list - default</h3>
        <ul class="separated-list">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <h3>Separated list - comma</h3>
        <ul class="separated-list" list-separator="comma">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <h3>Separated list - pipe</h3>
        <ul class="separated-list" list-separator="pipe">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>

        <h3>Separated list - centered</h3>
        <ul class="separated-list" list-separator="pipe" list-alignment="center">
            <li class="separated-list__item">List item one</li>
            <li class="separated-list__item">List item two</li>
            <li class="separated-list__item">List item three</li>
        </ul>
    `;
};

export const Lists = Template.bind({});
