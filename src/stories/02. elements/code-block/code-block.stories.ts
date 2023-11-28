import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import codeBlockDocs from './code-block.docs.mdx';

export default {
    title: 'COMPONENTS/Code Block',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: codeBlockDocs,
        },
    },
    argTypes: {
        showLanguageTag: {
            table: {
                category: "Code block Settings",
                defaultValue: { summary: 'true' },
            },
            name: 'Show the language tag',
            description: "Show or hide the language tag",
            control: { type: 'boolean' },
            defaultValue: ['true'],
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface CodeBlockStoryProps {
    showLanguageTag: boolean,
}

const Template: StoryFn<CodeBlockStoryProps> = (args: CodeBlockStoryProps) => {
    return `
        <toujou-code-block class="code-block">
            <pre class="code-block__pre">        <code class="code-block__code hljs javascript"><span class="hljs-comment">/* This is a comment */</span>
<span class="hljs-keyword">const</span> name = <span class="hljs-string">'Luke Skywalker'</span>;
<span class="hljs-keyword">const</span> age = <span class="hljs-number">40</span>;
<span class="hljs-keyword">const</span> hasForce = <span class="hljs-literal">true</span>;
<span class="hljs-keyword">const</span> hobbies = [<span class="hljs-string">"levitate stones"</span>, <span class="hljs-string">"fly X-Wings"</span>, <span class="hljs-string">"Drink blue milk"</span>]

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greeting</span>(<span class="hljs-params">personName</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`<span class="hljs-subst">&dollar;{personName}</span>, may the force be with you\`</span>);
}

greeting(<span class="hljs-string">"Leia"</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> </span>{
    <span class="hljs-keyword">constructor</span>(name) {
        <span class="hljs-keyword">this</span>.name = name;
    }
}

<span class="hljs-keyword">const</span> testPerson = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'Han'</span>);</code>
    </pre>

            ${args.showLanguageTag ? `
                <span class="code-block__language-tag">Javascript</span>
            ` : ''}
        </toujou-code-block>

        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs css"><span class="hljs-selector-pseudo">:root</span> {
    <span class="hljs-attribute">--some-variable</span>: red;
    <span class="hljs-attribute">--some-height</span>: <span class="hljs-number">2rem</span>;
}

<span class="hljs-selector-class">.button</span> {
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2rem</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-built_in">var</span>(--some-height);
    <span class="hljs-attribute">width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">4px</span> + var(--some-height));
}

<span class="hljs-selector-class">.button</span><span class="hljs-selector-attr">[variant=<span class="hljs-string">"primary"</span>]</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--color-primary);
}

<span class="hljs-selector-class">.button</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">"Bang"</span>;
}

<span class="hljs-selector-id">#id</span> {
    <span class="hljs-attribute">display</span>: none;
}</code>
    </pre>

            ${args.showLanguageTag ? `
                <span class="code-block__language-tag">Javascript</span>
            ` : ''}
        </toujou-code-block>




        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">data-type</span>=<span class="hljs-string">"primary"</span>&gt;</span>This is a headline<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"paragraph"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"intro"</span>&gt;</span>This is some really nice text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code>
    </pre>

            ${args.showLanguageTag ? `
                <span class="code-block__language-tag">Javascript</span>
            ` : ''}
        </toujou-code-block>
    `;
};

export const CodeBlock = Template.bind({});


