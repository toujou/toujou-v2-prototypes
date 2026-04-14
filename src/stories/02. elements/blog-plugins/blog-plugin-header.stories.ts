import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        layout: 'fullwidth'
    },
} satisfies Meta;

const Template = () => {
    return `
        <header class="header blog-header" image-height="default">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image">

            <div class="blog-header__content">
                <h1 class="blog-header__content-title">This is the blog title</h1>
            </div>
        </header>
    `;
};

export const Header = Template.bind({});
