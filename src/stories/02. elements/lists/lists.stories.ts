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

const renderLists = () => {
    return `
        <h3>Default list</h3>
        <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol>
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Primary list</h3>
        <ul class="list list--primary">
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol class="list list--primary">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Secondary list</h3>
        <ul class="list list--secondary">
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
        </ul>

        <ol class="list list--secondary">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

        <h3>Font list</h3>
        <ul class="list list--font">
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

        <ol class="list list--font">
            <li>List item a</li>
            <li>List item b</li>
            <li>List item c</li>
        </ol>

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
}

const Template = () => {
    return `
        ${renderLists()}

        <section class="chapter" background-color="primary" font-color="background">
            ${renderLists()}
        </section>
    `;
};

export const Lists = Template.bind({});
