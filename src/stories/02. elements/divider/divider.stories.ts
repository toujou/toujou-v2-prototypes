import { StoryFn, Meta } from '@storybook/web-components-vite';
// @ts-ignore
import dividerDocs from './divider.docs.mdx';

export default {
    title: 'COMPONENTS/Divider',
    parameters: {
        docs: {
            page: dividerDocs,
        },
    },
    argTypes: {
        dividerType: {
            table: {
                category: "Divider Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Divider type',
            description: "Choose between the different divider types",
            options: ['background', 'primary', 'secondary', 'grey'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface DividerStoryProps {
    dividerType: string,
}

const Template: StoryFn<DividerStoryProps> = (args: DividerStoryProps) => {
    return `
        <hr class="divider" divider-type="${args.dividerType}">
    `
};

export const Divider = Template.bind({});

Divider.args = {
    dividerType: 'primary',
}
