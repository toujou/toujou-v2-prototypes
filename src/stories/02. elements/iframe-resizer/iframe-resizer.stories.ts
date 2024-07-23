import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import iframeResizerDocs from './iframe-resizer.docs.mdx';

export default {
    title: 'COMPONENTS/IframeResizer',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: iframeResizerDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <toujou-iframe-resizer>
            <iframe
                src='https://outlook.office365.com/owa/calendar/Kompressionstest@medicon-apotheke.de/bookings/'
                width="100%"
                height="100%"
                scrolling="yes"
                style='border:0'>
            </iframe>
        </toujou-iframe-resizer>
    `;
};

export const IframeResizer = Template.bind({});
