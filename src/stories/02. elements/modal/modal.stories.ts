import { Meta } from '@storybook/web-components';

// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import modalDocs from "./modal.docs.mdx";

export default {
    title: 'COMPONENTS/Modal',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: modalDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <h1>MODAL</h1>
        <p>click on this <a href="iframe.html?viewMode=story&id=tests-modal-content--modal-content" target="toujou-modal">link</a> to open the content of the "Modal Content" page on a modal window.</p>
    `;
};

export const Modal = Template.bind({});


