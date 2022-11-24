import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import detailsAccordionDocs from './details-accordion.docs.mdx';

export default {
    title: 'COMPONENTS/Accordion',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/154e8bfd-4e6a-48d2-914c-5bafe3af7289/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: detailsAccordionDocs,
        },
    },
    argTypes: {
        columnsLayout: {
            table: {
                category: "Grid settings",
                defaultValue: { summary: 'third-right' },
            },
            name: 'Two columns layout',
            description: "Define layout of the grid columns",
            options: ['third-right', 'third-left'],
            control: { type: 'radio' },
            defaultValue: ['third-right'],
            required: true,
        },
        elementDesign: {
            table: {
                category: "Details Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Accordion element design',
            description: "Set the element design for the accordion element",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

interface DetailsAccordionStoryProps {
    columnsLayout: string;
    elementDesign: string;
}

function renderAccordion(args: DetailsAccordionStoryProps) {
    return `
        <toujou-details-accordion class="details-accordion" single-expand-mode>
            <toujou-details id="details-1" class="details" is-open element-design="${args.elementDesign}">
                <h3 slot="summary" class="details__title">This is the summary</h3>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>
            
            <toujou-details id="details-2" class="details" element-design="${args.elementDesign}">
                <h3 slot="summary" class="details__title">I am just another simple title</h3>
                <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>
            
            <toujou-details id="details-3" class="details" element-design="${args.elementDesign}">
                <h3 slot="summary" class="details__title">I am just another simple title</h3>
                <ul slot="summary" class="details__subtitle details__subtitle-list">
                    <li class="details__subtitle-list-item">Fruit</li>
                    <li class="details__subtitle-list-item">Apple</li>
                    <li class="details__subtitle-list-item">Pink Lady</li>
                </ul>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>
            
            <toujou-details id="details-4" class="details" element-design="${args.elementDesign}">
                <h3 slot="summary" class="details__title">This is the summary</h3>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>
        </toujou-details-accordion>
    `
}

function renderText() {
    return `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
}

const Template: Story<DetailsAccordionStoryProps> = (args: DetailsAccordionStoryProps) => {
    return `
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${args.columnsLayout}">
            <toujou-grid-column class="grid-column">
                ${args.columnsLayout === 'third-right' ? renderAccordion(args) : renderText()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${args.columnsLayout === 'third-right' ? renderText() : renderAccordion(args)}
            </toujou-grid-column>
        </toujou-grid>
    `
};

export const DetailsAccordionWithText = Template.bind({});

DetailsAccordionWithText.args = {
    columnsLayout: 'third-right',
    elementDesign: 'default',
}