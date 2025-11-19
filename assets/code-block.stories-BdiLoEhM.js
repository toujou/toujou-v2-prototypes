import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-CcmLKVFS.js";import"./iframe-B-FpRVsO.js";import"./preload-helper-C1FmrZbK.js";function e(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h1,{id:"code-block",children:"Code block"}),`
`,s.jsx(a.p,{children:"The code block is a content element that can be added to any page to display a syntax highlighted code example"}),`
`,s.jsx(a.p,{children:"By default, it is not available to all installations, it must be installed extra."}),`
`,s.jsx(a.p,{children:"Users can add the code snippet and choose the language on the content element itself."}),`
`,s.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,s.jsx(a.pre,{children:s.jsx(a.code,{className:"language-html",children:`<toujou-code-block class="code-block">
    <pre class="code-block__pre">
        <code class="code-block__code hljs javascript">
            ...code snippet...
        </code>
    </pre>
    <span class="code-block__language-tag">Javascript</span>
</toujou-code-block>
`})}),`
`,s.jsx(a.h2,{id:"syntax-highlighter",children:"Syntax highlighter"}),`
`,s.jsxs(a.p,{children:["The highlighting is done with ",s.jsx(a.a,{href:"https://highlightjs.org/",rel:"nofollow",children:"highlight.js"}),", by default using the Dracula theme."]}),`
`,s.jsx(a.h2,{id:"code-block-extension",children:"Code Block extension"}),`
`,s.jsxs(a.p,{children:["There is documentation on how to install and configure it on the ",s.jsx(a.a,{href:"https://code.dfau.de/toujou/codeblock",rel:"nofollow",children:"Code Block extension repo"})]}),`
`,s.jsx(a.h2,{id:"how-to-customize",children:"How to customize"}),`
`,s.jsxs(a.p,{children:[`On the customizations the syntax highlighting should be changed via:
`,s.jsx(a.code,{children:"tt_content.codeblock.20.settings.pathToCssFile"})]})]})}function r(n={}){const{wrapper:a}={...o(),...n.components};return a?s.jsx(a,{...n,children:s.jsx(e,{...n})}):e(n)}const u={title:"COMPONENTS/Code Block",parameters:{docs:{page:r}},argTypes:{showLanguageTag:{table:{category:"Code block Settings",defaultValue:{summary:"true"}},name:"Show the language tag",description:"Show or hide the language tag",control:{type:"boolean"},required:!0}}},h=n=>`
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

            ${n.showLanguageTag?`
                <span class="code-block__language-tag">Javascript</span>
            `:""}
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

            ${n.showLanguageTag?`
                <span class="code-block__language-tag">Javascript</span>
            `:""}
        </toujou-code-block>




        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">data-type</span>=<span class="hljs-string">"primary"</span>&gt;</span>This is a headline<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"paragraph"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"intro"</span>&gt;</span>This is some really nice text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code>
    </pre>

            ${n.showLanguageTag?`
                <span class="code-block__language-tag">Javascript</span>
            `:""}
        </toujou-code-block>
    `,l=h.bind({});l.args={showLanguageTag:!1};var c,t,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(args: CodeBlockStoryProps) => {
  return \`
        <toujou-code-block class="code-block">
            <pre class="code-block__pre">        <code class="code-block__code hljs javascript"><span class="hljs-comment">/* This is a comment */</span>
<span class="hljs-keyword">const</span> name = <span class="hljs-string">'Luke Skywalker'</span>;
<span class="hljs-keyword">const</span> age = <span class="hljs-number">40</span>;
<span class="hljs-keyword">const</span> hasForce = <span class="hljs-literal">true</span>;
<span class="hljs-keyword">const</span> hobbies = [<span class="hljs-string">"levitate stones"</span>, <span class="hljs-string">"fly X-Wings"</span>, <span class="hljs-string">"Drink blue milk"</span>]

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greeting</span>(<span class="hljs-params">personName</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\\\`<span class="hljs-subst">&dollar;{personName}</span>, may the force be with you\\\`</span>);
}

greeting(<span class="hljs-string">"Leia"</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> </span>{
    <span class="hljs-keyword">constructor</span>(name) {
        <span class="hljs-keyword">this</span>.name = name;
    }
}

<span class="hljs-keyword">const</span> testPerson = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'Han'</span>);</code>
    </pre>

            \${args.showLanguageTag ? \`
                <span class="code-block__language-tag">Javascript</span>
            \` : ''}
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

            \${args.showLanguageTag ? \`
                <span class="code-block__language-tag">Javascript</span>
            \` : ''}
        </toujou-code-block>




        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">data-type</span>=<span class="hljs-string">"primary"</span>&gt;</span>This is a headline<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"paragraph"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"intro"</span>&gt;</span>This is some really nice text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code>
    </pre>

            \${args.showLanguageTag ? \`
                <span class="code-block__language-tag">Javascript</span>
            \` : ''}
        </toujou-code-block>
    \`;
}`,...(p=(t=l.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const b=["CodeBlock"];export{l as CodeBlock,b as __namedExportsOrder,u as default};
