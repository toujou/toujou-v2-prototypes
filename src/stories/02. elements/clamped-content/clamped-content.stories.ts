import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/ClampedContent',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    window.addEventListener('toujou-clamped-content-clamp-enabled-changed', event => { console.log(event)})
    return `
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">

                        <toujou-clamped-content>
                            <div class="review__review" slot="clamped-content">
                                <h3>Not enough text</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                            </div>
                            <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                            <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                        </toujou-clamped-content>

                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">

                        <toujou-clamped-content>
                            <div slot="clamped-content">
                                <h3>Enough text</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                            <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                        </toujou-clamped-content>

                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `;
};

export const ClampedContent = Template.bind({});
