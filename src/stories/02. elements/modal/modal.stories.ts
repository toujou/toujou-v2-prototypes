import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";

// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import modalDocs from "./modal.docs.mdx";

export default {
    title: 'COMPONENTS/Modal',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: modalDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <h1>MODAL</h1>
        <p>click on this <a href="iframe.html?viewMode=story&id=pages-modal-content--modal-content" target="toujou-modal">link</a> to open the content of the "Modal Content" page on a modal window.</p>
    `;
};

export const Modal = Template.bind({});


