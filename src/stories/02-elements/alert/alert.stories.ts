import type { Meta, StoryObj } from '@storybook/web-components-vite';

type AlertStoryArgs = {
    alertVariant: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info';
};

const meta: Meta<AlertStoryArgs> = {
    title: 'COMPONENTS/Alert',

    argTypes: {
        alertVariant: {
            name: 'Alert variant',
            description: 'Set the alert variant',
            options: ['primary', 'secondary', 'warning', 'error', 'success', 'info'],
            control: { type: 'radio' },
            table: {
                category: 'Alert Settings',
                defaultValue: { summary: 'primary' },
            },
        },
    },
};

export default meta;

type Story = StoryObj<AlertStoryArgs>;

export const Alert: Story = {
    args: {
        alertVariant: 'primary',
    },

    render: (args) => `
    <toujou-alert
      class="alert"
      role="alert"
      alert-variant="${args.alertVariant}"
    >
      This is an alert
    </toujou-alert>
  `,
};
