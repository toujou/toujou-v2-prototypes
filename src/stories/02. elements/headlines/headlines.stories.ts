import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headlinesDocs from "./headlines.docs.mdx";

export default {
    title: 'COMPONENTS/Headlines',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: headlinesDocs,
        }
    },
    tags: ['autodocs']
} satisfies Meta;

const HeadlineH1Template = () => {
    return `
        <h1 type-alignment="left" type-color="default">Headline h1 | left | default color | 100%</h1>
        <h1 type-alignment="center" type-color="default">Headline h1 | center | default color | 100%</h1>
        <h1 type-alignment="right" type-color="default">Headline h1 | right | default color | 100%</h1>
        <h1 type-alignment="left" type-color="font--grey">Headline h1 | left | grey color | 100%</h1>
        <h1 type-alignment="left" type-color="font--primary">Headline h1 | left | primary color | 100%</h1>
        <h1 type-alignment="left" type-color="font--secondary">Headline h1 | left | secondary color | 100%</h1>
        <h1 type-alignment="left" type-color="font--font">Headline h1 | left | font color | 100%</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--alpha">Headline h1 | left | default color | alpha</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--beta">Headline h1 | left | default color | beta</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--gamma">Headline h1 | left | default color | gamma</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--delta">Headline h1 | left | default color | delta</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h1 | left | default color | epsilon</h1>
        <h1 type-alignment="left" type-color="default" type-size="font--omega">Headline h1 | left | default color | omega</h1>
    `;
};

const HeadlineH2Template = () => {
    return `
        <h2 type-alignment="left" type-color="default">Headline h2 | left | default color | 100%</h2>
        <h2 type-alignment="center" type-color="default">Headline h2 | center | default color | 100%</h2>
        <h2 type-alignment="right" type-color="default">Headline h2 | right | default color | 100%</h2>
        <h2 type-alignment="left" type-color="font--grey">Headline h2 | left | grey color | 100%</h2>
        <h2 type-alignment="left" type-color="font--primary">Headline h2 | left | primary color | 100%</h2>
        <h2 type-alignment="left" type-color="font--secondary">Headline h2 | left | secondary color | 100%</h2>
        <h2 type-alignment="left" type-color="font--font">Headline h2 | left | font color | 100%</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--alpha">Headline h2 | left | default color | alpha</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--beta">Headline h2 | left | default color | beta</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--gamma">Headline h2 | left | default color | gamma</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--delta">Headline h2 | left | default color | delta</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h2 | left | default color | epsilon</h2>
        <h2 type-alignment="left" type-color="default" type-size="font--omega">Headline h2 | left | default color | omega</h2>
    `;
};

const HeadlineH3Template = () => {
    return `
        <h3 type-alignment="left" type-color="default">Headline h3 | left | default color | 100%</h3>
        <h3 type-alignment="center" type-color="default">Headline h3 | center | default color | 100%</h3>
        <h3 type-alignment="right" type-color="default">Headline h3 | right | default color | 100%</h3>
        <h3 type-alignment="left" type-color="font--grey">Headline h3 | left | grey color | 100%</h3>
        <h3 type-alignment="left" type-color="font--primary">Headline h3 | left | primary color | 100%</h3>
        <h3 type-alignment="left" type-color="font--secondary">Headline h3 | left | secondary color | 100%</h3>
        <h3 type-alignment="left" type-color="font--font">Headline h3 | left | font color | 100%</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--alpha">Headline h3 | left | default color | alpha</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--beta">Headline h3 | left | default color | beta</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--gamma">Headline h3 | left | default color | gamma</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--delta">Headline h3 | left | default color | delta</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h3 | left | default color | epsilon</h3>
        <h3 type-alignment="left" type-color="default" type-size="font--omega">Headline h3 | left | default color | omega</h3>
    `;
};

const HeadlineH4Template = () => {
    return `
        <h4 type-alignment="left" type-color="default">Headline h4 | left | default color | 100%</h4>
        <h4 type-alignment="center" type-color="default">Headline h4 | center | default color | 100%</h4>
        <h4 type-alignment="right" type-color="default">Headline h4 | right | default color | 100%</h4>
        <h4 type-alignment="left" type-color="font--grey">Headline h4 | left | grey color | 100%</h4>
        <h4 type-alignment="left" type-color="font--primary">Headline h4 | left | primary color | 100%</h4>
        <h4 type-alignment="left" type-color="font--secondary">Headline h4 | left | secondary color | 100%</h4>
        <h4 type-alignment="left" type-color="font--font">Headline h4 | left | font color | 100%</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--alpha">Headline h4 | left | default color | alpha</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--beta">Headline h4 | left | default color | beta</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--gamma">Headline h4 | left | default color | gamma</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--delta">Headline h4 | left | default color | delta</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h4 | left | default color | epsilon</h4>
        <h4 type-alignment="left" type-color="default" type-size="font--omega">Headline h4 | left | default color | omega</h4>
    `;
};

const HeadlineH5Template = () => {
    return `
        <h5 type-alignment="left" type-color="default">Headline h5 | left | default color | 100%</h5>
        <h5 type-alignment="center" type-color="default">Headline h5 | center | default color | 100%</h5>
        <h5 type-alignment="right" type-color="default">Headline h5 | right | default color | 100%</h5>
        <h5 type-alignment="left" type-color="font--grey">Headline h5 | left | grey color | 100%</h5>
        <h5 type-alignment="left" type-color="font--primary">Headline h5 | left | primary color | 100%</h5>
        <h5 type-alignment="left" type-color="font--secondary">Headline h5 | left | secondary color | 100%</h5>
        <h5 type-alignment="left" type-color="font--font">Headline h5 | left | font color | 100%</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--alpha">Headline h5 | left | default color | alpha</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--beta">Headline h5 | left | default color | beta</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--gamma">Headline h5 | left | default color | gamma</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--delta">Headline h5 | left | default color | delta</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h5 | left | default color | epsilon</h5>
        <h5 type-alignment="left" type-color="default" type-size="font--omega">Headline h5 | left | default color | omega</h5>
    `;
};

const HeadlineH6Template = () => {
    return `
        <h6 type-alignment="left" type-color="default">Headline h6 | left | default color | 100%</h6>
        <h6 type-alignment="center" type-color="default">Headline h6 | center | default color | 100%</h6>
        <h6 type-alignment="right" type-color="default">Headline h6 | right | default color | 100%</h6>
        <h6 type-alignment="left" type-color="font--grey">Headline h6 | left | grey color | 100%</h6>
        <h6 type-alignment="left" type-color="font--primary">Headline h6 | left | primary color | 100%</h6>
        <h6 type-alignment="left" type-color="font--secondary">Headline h6 | left | secondary color | 100%</h6>
        <h6 type-alignment="left" type-color="font--font">Headline h6 | left | font color | 100%</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--alpha">Headline h6 | left | default color | alpha</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--beta">Headline h6 | left | default color | beta</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--gamma">Headline h6 | left | default color | gamma</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--delta">Headline h6 | left | default color | delta</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--epsilon">Headline h6 | left | default color | epsilon</h6>
        <h6 type-alignment="left" type-color="default" type-size="font--omega">Headline h6 | left | default color | omega</h6>
    `;
};

const HeadlinePTemplate = () => {
    return `
        <p type-alignment="left" type-color="default">Headline p | left | default color | 100%</p>
        <p type-alignment="center" type-color="default">Headline p | center | default color | 100%</p>
        <p type-alignment="right" type-color="default">Headline p | right | default color | 100%</p>
        <p type-alignment="left" type-color="font--grey">Headline p | left | grey color | 100%</p>
        <p type-alignment="left" type-color="font--primary">Headline p | left | primary color | 100%</p>
        <p type-alignment="left" type-color="font--secondary">Headline p | left | secondary color | 100%</p>
        <p type-alignment="left" type-color="font--font">Headline p | left | font color | 100%</p>
        <p type-alignment="left" type-color="default" type-size="font--alpha">Headline p | left | default color | alpha</p>
        <p type-alignment="left" type-color="default" type-size="font--beta">Headline p | left | default color | beta</p>
        <p type-alignment="left" type-color="default" type-size="font--gamma">Headline p | left | default color | gamma</p>
        <p type-alignment="left" type-color="default" type-size="font--delta">Headline p | left | default color | delta</p>
        <p type-alignment="left" type-color="default" type-size="font--epsilon">Headline p | left | default color | epsilon</p>
        <p type-alignment="left" type-color="default" type-size="font--omega">Headline p | left | default color | omega</p>
    `;
};

export const HeadlineH1 = HeadlineH1Template.bind({});
export const HeadlineH2 = HeadlineH2Template.bind({});
export const HeadlineH3 = HeadlineH3Template.bind({});
export const HeadlineH4 = HeadlineH4Template.bind({});
export const HeadlineH5 = HeadlineH5Template.bind({});
export const HeadlineH6 = HeadlineH6Template.bind({});
export const HeadlineP = HeadlinePTemplate.bind({});
