import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as r}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function n(a){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"code-block",children:"Code block"}),`
`,e.jsx(s.p,{children:"The code block is a content element that can be added to any page to display a syntax highlighted code example"}),`
`,e.jsx(s.p,{children:"By default, it is not available to all installations, it must be installed extra."}),`
`,e.jsx(s.p,{children:"Users can add the code snippet and choose the language on the content element itself."}),`
`,e.jsx(s.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-code-block class="code-block">
    <pre class="code-block__pre">
        <code class="code-block__code hljs javascript">
            ...code snippet...
        </code>
    </pre>
    <span class="code-block__language-tag">Javascript</span>
</toujou-code-block>
`})}),`
`,e.jsx(s.h2,{id:"syntax-highlighter",children:"Syntax highlighter"}),`
`,e.jsxs(s.p,{children:["The highlighting is done with ",e.jsx(s.a,{href:"https://highlightjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"highlight.js"}),", by default using the Dracula theme."]}),`
`,e.jsx(s.h2,{id:"code-block-extension",children:"Code Block extension"}),`
`,e.jsxs(s.p,{children:["There is documentation on how to install and configure it on the ",e.jsx(s.a,{href:"https://code.dfau.de/toujou/codeblock",target:"_blank",rel:"nofollow noopener noreferrer",children:"Code Block extension repo"})]}),`
`,e.jsx(s.h2,{id:"how-to-customize",children:"How to customize"}),`
`,e.jsxs(s.p,{children:[`On the customizations the syntax highlighting should be changed via:
`,e.jsx(s.code,{children:"tt_content.codeblock.20.settings.pathToCssFile"})]})]})}function i(a={}){const{wrapper:s}=Object.assign({},r(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(n,a)})):n(a)}const k={title:"COMPONENTS/Code Block",parameters:{badges:[d.DONE],docs:{page:i}},argTypes:{showLanguageTag:{table:{category:"Code block Settings",defaultValue:{summary:"true"}},name:"Show the language tag",description:"Show or hide the language tag",control:{type:"boolean"},defaultValue:["true"],required:!0}},tags:["autodocs"]},h=a=>`
        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs javascript"><span class="hljs-keyword">const</span> test = <span class="hljs-string">"This is a variable"</span>;<span class="hljs-function">

<span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}</code></pre>

            ${a.showLanguageTag?`
                <span class="code-block__language-tag">Javascript</span>
            `:""}
        </toujou-code-block>
    `,o=h.bind({});var t,c,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args: CodeBlockStoryProps) => {
  return \`
        <toujou-code-block class="code-block">
            <pre class="code-block__pre"><code class="code-block__code hljs javascript"><span class="hljs-keyword">const</span> test = <span class="hljs-string">"This is a variable"</span>;<span class="hljs-function">

<span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}</code></pre>

            \${args.showLanguageTag ? \`
                <span class="code-block__language-tag">Javascript</span>
            \` : ''}
        </toujou-code-block>
    \`;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const m=["CodeBlock"];export{o as CodeBlock,m as __namedExportsOrder,k as default};
//# sourceMappingURL=code-block.stories-cb7bd562.js.map
