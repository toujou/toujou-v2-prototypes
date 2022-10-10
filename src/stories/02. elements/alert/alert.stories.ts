import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import alertDocs from './alert.docs.mdx';

export default {
    title: 'COMPONENTS/Alert',
    parameters: {
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

