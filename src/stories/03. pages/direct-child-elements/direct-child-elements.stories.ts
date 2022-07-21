import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'PAGES/Direct Child Elements',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `
        <main>
            <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>
                
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>
    
                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item One</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item Two</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link" >Item Three</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item Four</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item Five</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
            
            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>This is a test page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
            
            <h1>This is a headline</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </main>
    `;
};

export const DirectChildElements = Template.bind({});


