import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import htmlWithTextDocs from './html-with-text.docs.mdx';

export default {
    title: 'COMPONENTS/HTML With Text',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: htmlWithTextDocs,
        },
    },
    argTypes: {
        layout: {
            table: {
                category: "html with text Settings",
                defaultValue: { summary: '33-left' },
            },
            name: 'Layout',
            description: "Choose the HTML with text layout",
            options: ['33-left', '33-right', '50-left', '50-right', '66-left', '66-right', 'multicolumn-left', 'multicolumn-right'],
            control: { type: 'radio' },
            defaultValue: ['33-left'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface HtmlWithTextStoryProps {
    layout: string,
}

function renderHtmlColumn() {
    return `
        <toujou-grid-column class="grid-column">
            <toujou-html-container class="html-container" fullwidth>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </toujou-grid-column>
    `;
}

function renderTextColumn() {
    return `
        <toujou-grid-column class="grid-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </toujou-grid-column>
    `;
}

function renderTwoColumns(htmlOnTheLeft: boolean) {
    return `
        ${htmlOnTheLeft ? renderHtmlColumn() : renderTextColumn()}
        ${htmlOnTheLeft ? renderTextColumn() : renderHtmlColumn()}
    `
}

function renderThreeColumns(htmlOnTheLeft: boolean) {
    return `
        ${htmlOnTheLeft ? renderHtmlColumn() : renderTextColumn()}
        ${renderTextColumn()}
        ${htmlOnTheLeft ? renderTextColumn() : renderHtmlColumn()}
    `
}

const Template: StoryFn<HtmlWithTextStoryProps> = (args: HtmlWithTextStoryProps) => {
    let columnLayout = '33-left';
    let htmlOnTheLeft = true;
    let numberOfColumns = 2;

    switch (args.layout) {
        case '33-left': {
            columnLayout = 'third-left';
            htmlOnTheLeft = true;
            break;
        }
        case '33-right': {
            columnLayout = 'third-right';
            htmlOnTheLeft = false;
            break;
        }
        case '50-left': {
            columnLayout = 'half-left';
            htmlOnTheLeft = true;
            break;
        }
        case '50-right': {
            columnLayout = 'half-right';
            htmlOnTheLeft = false;
            break;
        }
        case '66-left': {
            columnLayout = 'third-right';
            htmlOnTheLeft = true;
            break;
        }
        case '66-right': {
            columnLayout = 'third-left';
            htmlOnTheLeft = false;
            break;
        }
        case 'multicolumn-left': {
            columnLayout = 'third-left';
            htmlOnTheLeft = true;
            break;
        }
        case 'multicolumn-right': {
            columnLayout = 'third-left';
            htmlOnTheLeft = false;
            break;
        }
    }

    if (args.layout === 'multicolumn-left' || args.layout === 'multicolumn-right') {
        numberOfColumns = 3;
    }

    return `
        <toujou-grid class="grid" grid-type="default" number-of-columns="${numberOfColumns}" column-layout="${columnLayout}">
            ${numberOfColumns === 2 ? renderTwoColumns(htmlOnTheLeft) : renderThreeColumns(htmlOnTheLeft)}
        </toujou-grid>
    `
};

export const HtmlWithTextStoryProps = Template.bind({});

HtmlWithTextStoryProps.args = {
    layout: '33-left',
}
