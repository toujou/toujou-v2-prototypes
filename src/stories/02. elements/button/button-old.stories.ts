import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import buttonDocs from './button.docs.mdx';

export default {
    title: 'COMPONENTS/Button',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: buttonDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;


const Template = () => {
    return `
        <h3>Old (deprecated) button classes</h3>
        <p>To improve backwards compatibility (and compatibility with other extensions) we also support the older button classes, like <code>button--shadow</code></p>
        <br>
        <p><a href="/" class="button button--primary">Button primary</a></p>
        <p class="font--align-center"><a href="/" class="button button--primary">Button primary</a></p>
        <p class="font--align-right"><a href="/" class="button button--primary">Button primary</a></p>
        <p><a href="/" class="button button--expanded button--primary">Button primary 100%</a></p>
        <p><a href="/" class="button button--secondary">Button secondary</a></p>
        <p><a href="/" class="button button--expanded button--secondary">Button secondary 100%</a></p>
        <p><a href="/" class="button button--font">Button font</a></p>
        <p><a href="/" class="button button--expanded button--font">Button font 100%</a></p>
        <p><a href="/" class="button button--primary button--shadow">Button shadow primary</a></p>
        <p><a href="/" class="button button--expanded button--primary button--shadow">Button shadow primary 100%</a></p>
        <p><a href="/" class="button button--secondary button--shadow">Button shadow secondary</a></p>
        <p><a href="/" class="button button--expanded button--secondary button--shadow">Button shadow secondary 100%</a></p>
        <p><a href="/" class="button button--font button--shadow">Button shadow font</a></p>
        <p><a href="/" class="button button--expanded button--font button--shadow">Button shadow font 100%</a></p>
    `
};

export const OldButtons = Template.bind({});
