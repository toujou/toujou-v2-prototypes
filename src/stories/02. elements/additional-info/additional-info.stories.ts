import { StoryFn, Meta } from '@storybook/web-components-vite';

// @ts-ignore
import additionalInfoDocs from './additional-info.docs.mdx';

export default {
    title: 'COMPONENTS/Additional Info',
    parameters: {
        docs: {
            page: additionalInfoDocs,
        },
    },
    argTypes: {
        noMargins: {
            table: {
                category: "Additional Info Settings",
            },
            name: 'No margins',
            description: "Render the element without any margins",
            control: { type: 'boolean' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface AdditionalInfoProps {
    noMargins: boolean;
}

const Template: StoryFn<AdditionalInfoProps> = (args: AdditionalInfoProps) => {
    return `
        <p class="additional-info" ${args.noMargins ? 'no-margins' : ''}>
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    `;
};

export const AdditionalInfo = Template.bind({});

AdditionalInfo.args = {
    noMargins: false,
}
