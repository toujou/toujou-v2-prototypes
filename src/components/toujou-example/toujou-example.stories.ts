import { Meta } from '@storybook/web-components';

export default {
    title: 'WEBCOMPONENTS/Example',
} as Meta;

const Template = (args) => {
    const toujouExampleEl = document.createElement('toujou-example');

    toujouExampleEl.innerText = args.text;

    return toujouExampleEl;
}

export const ToujouExample = Template.bind({});

ToujouExample.args = {
    text: "Toujou example",
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
