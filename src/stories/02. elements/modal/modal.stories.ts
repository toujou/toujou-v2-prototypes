import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Modal',
} satisfies Meta;

const Template = () => {
    return `
        <h1>MODAL</h1>
        <p>click on this <a href="iframe.html?viewMode=story&id=tests-modal-content--modal-content" target="toujou-modal">link</a> to open the content of the "Modal Content" page on a modal window.</p>
    `;
};

export const Modal = Template.bind({});
