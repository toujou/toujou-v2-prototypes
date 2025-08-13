import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import lazyRenderDocs from "./lazy-render.docs.mdx";

export default {
    title: 'COMPONENTS/Lazy Render',
    parameters: {
        docs: {
            page: lazyRenderDocs,
        },
        layout: "fullscreen",
    },
} satisfies Meta;


const Template = () => {
    return `
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    `;
};

export const LazyRender = Template.bind({});
