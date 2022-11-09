import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import codeBlockDocs from './code-block.docs.mdx';

export default {
    title: 'COMPONENTS/Code Block',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: codeBlockDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs javascript"><span class="hljs-keyword">const</span> test = <span class="hljs-string">"This is a variable"</span>;<span class="hljs-function">
    
<span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}</code></pre>
            <span class="code-block__language-tag">Javascript</span>
        </toujou-code-block>
    `;
};

export const CodeBlock = Template.bind({});
