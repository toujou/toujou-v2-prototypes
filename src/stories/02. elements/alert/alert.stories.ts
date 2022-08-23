import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import alertDocs from './alert.docs.mdx';

export default {
    title: 'COMPONENTS/Alert',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/16a665e8-5a1e-451f-ac52-717e48e2f4dd/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: alertDocs,
        },
    },
    argTypes: {
        alertVariant: {
            table: {
                category: "Alert Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Alert variant',
            description: "Set the alert variant",
            options: ['primary', 'secondary', 'warning', 'error', 'success'],
            control: { type: 'radio' },
            defaultValue: ['primary'],
            required: true,
        },
    }
} as Meta;

interface alertStoryProps {
    alertVariant: any;
}

const Template: Story<alertStoryProps> = (args: alertStoryProps) => {
    return `
        <toujou-alert class="alert" role="alert" alert-variant="${args.alertVariant}">
            This is an alert
        </toujou-alert>
    `;
};

export const Alert = Template.bind({});

Alert.args = {
    alertVariant: 'primary'
}

