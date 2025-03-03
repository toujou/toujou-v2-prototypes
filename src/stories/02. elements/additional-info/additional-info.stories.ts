import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import additionalInfoDocs from './additional-info.docs.mdx';

export default {
    title: 'COMPONENTS/Additional Info',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: additionalInfoDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <p class="additional-info">
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    `;
};

export const AdditionalInfo = Template.bind({});
