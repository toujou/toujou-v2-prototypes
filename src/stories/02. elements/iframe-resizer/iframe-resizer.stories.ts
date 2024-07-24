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
        <h1>toujou-iframe-resizer</h1>
        <p>Test if the iframes grows to correct size after some mock content is loaded. Content will load in 3s.</p>

        <h4><span style="color: tomato;">Without</span> the toujou-iframe-resizer</h4>
        <iframe
            src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
            width="100%"
            height="100%"
            scrolling="yes"
            style="border: 0;"
            title="iframe without resizer">
        </iframe>

        <br>
        <br>
        <br>

        <h4><span style="color: mediumseagreen;">With</span> the toujou-iframe-resizer</h4>
        <toujou-iframe-resizer>
             <iframe
                src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
                width="100%"
                height="100%"
                scrolling="yes"
                style="border: 0;"
                title="iframe with resizer">
            </iframe>
        </toujou-iframe-resizer>
    `;
};

export const IframeResizer = Template.bind({});
