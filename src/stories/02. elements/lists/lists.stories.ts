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
        <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Default UL</h3>
                    <ul class="list">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Primary UL</h3>
                    <ul class="list list--primary">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Secondary UL</h3>
                    <ul class="list list--secondary">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>

                    <h3>Font UL</h3>
                    <ul class="list list--font">
                        <li>one</li>
                        <li>two
                            <ul class="list">
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                       <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ul>
                </div>
            </toujou-text-block-column>

            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">

                    <h3>Default OL</h3>
                    <ol class="list">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Primary OL</h3>
                    <ol class="list list--primary">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Secondary OL</h3>
                    <ol class="list list--secondary">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>

                    <h3>Font OL</h3>
                    <ol class="list list--font">
                        <li>one</li>
                        <li>two
                            <ol class="list">
                                <li>item</li>
                                <li>item</li>
                            </ol>
                        </li>
                        <li>three with some really long text to test if the line breaks work correctly. The indent should also be correct so we don't have problems with looooooooong texts on the list items</li>
                        <li>four</li>
                    </ol>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <br>

        <toujou-text-block class="text-block" text-block-column-count="1" text-block-media-position="">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Separated list - default</h3>
                    <ul class="separated-list">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - comma</h3>
                    <ul class="separated-list" list-separator="comma">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - pipe</h3>
                    <ul class="separated-list" list-separator="pipe">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                    <br>

                    <h3>Separated list - centered</h3>
                    <ul class="separated-list" list-separator="pipe" list-alignment="center">
                        <li class="separated-list__item">List item one</li>
                        <li class="separated-list__item">List item two</li>
                        <li class="separated-list__item">List item three</li>
                    </ul>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `;
}

const Template = () => {
    return `
        <main>
            ${renderLists()}

            <section class="chapter" background-color="primary" font-color="background">
                ${renderLists()}
            </section>

            <section class="chapter" background-color="secondary" font-color="background">
                ${renderLists()}
            </section>

            <section class="chapter" background-color="font" font-color="background">
                ${renderLists()}
            </section>
        </main>
    `;
};

export const Lists = Template.bind({});
