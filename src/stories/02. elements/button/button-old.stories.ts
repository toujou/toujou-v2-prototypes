import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import buttonDocs from './button.docs.mdx';

export default {
    title: 'COMPONENTS/Button',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/94662024-4698-4543-9535-08e86b001d5d/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: buttonDocs,
        },
    },
} as Meta;


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
