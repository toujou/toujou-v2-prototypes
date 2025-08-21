import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import blogPluginsDocs from './blog-plugins.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        docs: {
            page: blogPluginsDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
        <div class="blog-archive">
            <h3 class="blog-archive__title">Archive</h3>
            <div class="blog-archive__years">
                <div class="archive-year">
                    <h4 class="archive-year__title">2022</h4>
                    <ul class="archive-year__list">
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Februar (2)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Januar (5)</a>
                        </li>
                    </ul>
                </div>
                <div class="archive-year">
                    <h4 class="archive-year__title">2021</h4>
                    <ul class="archive-year__list">
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Dezember (2)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">November (11)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Oktober (4)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">September (17)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">August (3)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Juli (8)</a>
                        </li>
                        <li class="archive-year__item">
                            <a href="#" class="archive-year__link">Juni (12)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

export const Archive = Template.bind({});
