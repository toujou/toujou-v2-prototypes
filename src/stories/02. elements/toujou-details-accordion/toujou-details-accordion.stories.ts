import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import ToujouDetailsAccordionDocs from './toujou-details-accordion.docs.mdx';

export default {
    title: 'COMPONENTS/Accordion',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/154e8bfd-4e6a-48d2-914c-5bafe3af7289/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouDetailsAccordionDocs,
        },
    },
    argTypes: {
        singleExpandMode: {
            table: {
                category: "Details accordion Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Single expand mode',
            description: "Allow just one accordion items to be open at a time",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
        expandedItem: {
            table: {
                category: "Details accordion Settings",
                defaultValue: { summary: 'first' },
            },
            name: 'Expanded items',
            description: "Define which accordion items are open when the page loads",
            options: ['none', 'first', 'all'],
            control: { type: 'radio' },
            defaultValue: ['first'],
            required: true,
        },
    }
} as Meta;

interface ToujouDetailsAccordionProps {
    singleExpandMode: any;
    expandedItem: string;
}

const Template: Story<ToujouDetailsAccordionProps> = (args: ToujouDetailsAccordionProps) => {
    return `
        <toujou-details-accordion class="toujou-details-accordion" ${args.singleExpandMode ? 'single-expand-mode' : ''}>
            <toujou-details id="details-1" class="toujou-details" ${args.expandedItem === 'first' || args.expandedItem === 'all' ? 'is-open' : ''}>
                <h3 slot="summary" class="toujou-details__title">This is the summary</h3>
                <toujou-icon class="toujou-icon toujou-details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </toujou-details>
            
            <toujou-details id="details-2" class="toujou-details" ${args.expandedItem === 'all' ? 'is-open' : ''}>
                <h3 slot="summary" class="toujou-details__title">I am just another simple title</h3>
                <p slot="summary" class="toujou-details__subtitle">I am a subtitle which complements the title</p>
                <toujou-icon class="toujou-icon toujou-details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </toujou-details>
            
            <toujou-details id="details-3" class="toujou-details" ${args.expandedItem === 'all' ? 'is-open' : ''}>
                <h3 slot="summary" class="toujou-details__title">I am just another simple title</h3>
                <ul slot="summary" class="toujou-details__subtitle toujou-details__subtitle-list">
                    <li class="toujou-details__subtitle-list-item">Fruit</li>
                    <li class="toujou-details__subtitle-list-item">Apple</li>
                    <li class="toujou-details__subtitle-list-item">Pink Lady</li>
                </ul>
                <toujou-icon class="toujou-icon toujou-details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </toujou-details>
            
            <toujou-details id="details-4" class="toujou-details" ${args.expandedItem === 'all' ? 'is-open' : ''}>
                <h3 slot="summary" class="toujou-details__title">This is the summary</h3>
                <toujou-icon class="toujou-icon toujou-details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </toujou-details>
        </toujou-details-accordion>
    `
};

export const DetailsAccordion = Template.bind({});

DetailsAccordion.args = {
    singleExpandMode: false,
    expandedItem: 'first',
}