import { StoryFn, Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Alert',
    argTypes: {
        alertVariant: {
            table: {
                category: "Alert Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Alert variant',
            description: "Set the alert variant",
            options: ['primary', 'secondary', 'warning', 'error', 'success', 'info'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface alertStoryProps {
    alertVariant: any;
}

const Template: StoryFn<alertStoryProps> = (args: alertStoryProps) => {
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

