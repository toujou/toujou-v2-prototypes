import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import spinnerDocs from './spinner.docs.mdx';

export default {
    title: 'COMPONENTS/Spinner',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: spinnerDocs,
        },
    },
    argTypes: {
        isCenteredOnPage: {
            table: {
                category: "Spinner settings",
            },
            name: 'Center on page',
            description: "Center the spinner on the page, on top of all content",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface SpinnerStoryProps {
    isCenteredOnPage: boolean;
}

const Template: StoryFn<SpinnerStoryProps> = (args: SpinnerStoryProps) => {
    return `<toujou-spinner class="spinner" ${args.isCenteredOnPage ? 'centered-on-page' : ''}></toujou-spinner>`
};

export const Spinner = Template.bind({});

Spinner.args = {
    isCenteredOnPage: false,
}
