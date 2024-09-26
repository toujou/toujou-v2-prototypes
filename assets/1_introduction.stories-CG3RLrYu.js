const o={title:"TOKENS/Introduction",argTypes:{},parameters:{customOrder:1}},a=()=>`
        <h1 class="tokens-demo__title">CSS Tokens</h1>
        <p>CSS Design tokens are the basic css variables that are used to build more complex systems, which help us construct and maintain an easy to understand, yep powerful, design system.</p>
        <p>Design tokens can represent anything, from a color, an animation, typography settings, ...</p>
        <p>They can then be used inside components or as values for other CSS variables</p>

        <h3>Alias tokens</h3>
        <p>A CSS variable is called "alias token" when it uses a token inside a specific content.</p>
        <p>Alias tokens help greatly in communicating purpose.</p>
        <p>An example of an "alias token" would be to define <code>--button-bg-color: var(--primary-color);</code>. This lets us have a local variable for the button with an easy to understand variable name while still using the system wide css tokens.</p>

        <h3>Links</h3>
        <ul>
            <li>
                <a href="https://spectrum.adobe.com/page/design-tokens/">Adobe spectrum's design tokens</a>
            </li>
            <li>
                <a href="https://open-props.style/">Open props</a>
            </li>
        </ul>

    `,e=a.bind({});var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <h1 class="tokens-demo__title">CSS Tokens</h1>
        <p>CSS Design tokens are the basic css variables that are used to build more complex systems, which help us construct and maintain an easy to understand, yep powerful, design system.</p>
        <p>Design tokens can represent anything, from a color, an animation, typography settings, ...</p>
        <p>They can then be used inside components or as values for other CSS variables</p>

        <h3>Alias tokens</h3>
        <p>A CSS variable is called "alias token" when it uses a token inside a specific content.</p>
        <p>Alias tokens help greatly in communicating purpose.</p>
        <p>An example of an "alias token" would be to define <code>--button-bg-color: var(--primary-color);</code>. This lets us have a local variable for the button with an easy to understand variable name while still using the system wide css tokens.</p>

        <h3>Links</h3>
        <ul>
            <li>
                <a href="https://spectrum.adobe.com/page/design-tokens/">Adobe spectrum's design tokens</a>
            </li>
            <li>
                <a href="https://open-props.style/">Open props</a>
            </li>
        </ul>

    \`;
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const i=["Introduction"];export{e as Introduction,i as __namedExportsOrder,o as default};
