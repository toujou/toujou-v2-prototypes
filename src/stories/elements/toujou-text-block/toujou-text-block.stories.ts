import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'
// @ts-ignore
import ToujouTextBlockDocs from './toujou-text-block.docs.mdx';

export default {
    title: 'COMPONENTS/Text Elements',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/edaf3b92-9a40-4082-9504-de34d306f6cf/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouTextBlockDocs,
        }
    },
} as Meta;

const Template = () => {
    return `       
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="2">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="3">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="4">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `;
};

export const TextBlock = Template.bind({});


