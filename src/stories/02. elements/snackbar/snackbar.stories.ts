import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";

// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import snackbarDocs from "./snackbar.docs.mdx";

export default {
    title: 'COMPONENTS/Snackbar',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: snackbarDocs,
        },
    },
    argTypes: {
        snackbarVariant: {
            table: {
                category: "Snackbar settings",
                defaultValue: { summary: 'info' },
            },
            name: 'Snackbar variant',
            description: "Set the snackbar variant style",
            options: ['info', 'success', 'warning', 'error'],
            control: { type: 'radio' },
            defaultValue: ['info'],
            required: true,
        },
        snackbarType: {
            table: {
                category: "Snackbar settings",
                defaultValue: { summary: 'auto' },
            },
            name: 'Snackbar type',
            description: "Set the snackbar type",
            options: ['auto', 'action'],
            control: { type: 'radio' },
            defaultValue: ['auto'],
            required: true,
        },
        snackbarDuration: {
            table: {
                category: "Snackbar settings",
                defaultValue: { summary: 4000 },
            },
            name: 'Snackbar duration',
            description: "Set the snackbar visibility duration",
            control: { type: 'number' },
            defaultValue: 4000,
            required: true,
        },
    }
} as Meta;

interface SnackbarStoryProps {
    snackbarVariant: string,
    snackbarType: string,
    snackbarDuration: number,
}

function createEvent(snackbarVariant: string, snackbarType: string, snackbarDuration: number) {
    return new CustomEvent('toujou-add-snackbar', {
        bubbles: true,
        composed: true,
        detail: {
            message: `welcome to the bonus page!`,
            type: snackbarType,
            buttonText: "ok",
            duration: snackbarDuration,
            variant: snackbarVariant
        }
    });
}

const Template: Story<SnackbarStoryProps> = (args: SnackbarStoryProps) => {
    window.addEventListener('click', (event: Event) => {
        const clickTarget = event.target as HTMLElement;
        if (clickTarget.getAttribute('id') === "snackbarTriggerButton") {
            clickTarget.dispatchEvent(createEvent(args.snackbarVariant, args.snackbarType, args.snackbarDuration));
        }
    })
    return `
        <button id="snackbarTriggerButton" class="button">Show snackbar</button>
        <toujou-snackbar class="snackbar" visible></toujou-snackbar>        
    `;

};

export const Snackbar = Template.bind({});

Snackbar.args = {
    snackbarVariant: 'info',
    snackbarType: 'auto',
    snackbarDuration: 4000,
}

