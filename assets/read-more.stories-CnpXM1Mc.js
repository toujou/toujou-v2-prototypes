const o={title:"COMPONENTS/ReadMore"},e=()=>`
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit.
        </p>
    `,t=()=>`
        <button class="button" button-variant="primary" slot="open-button">Read more</button>
        <button class="button" button-variant="secondary" slot="close-button">Read less</button>
    `,u=()=>`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>read-more with a single &lt;p&gt; element:</h3>
                    
                    <toujou-read-more class="read-more">
                        ${e()}
                        ${t()} 
                    </toujou-read-more>
                    
                    <h3>read-more with a single &lt;p&gt; element and custom max-lines:</h3>
                    
                    <toujou-read-more class="read-more" max-lines="5">
                        ${e()}
                        ${t()}
                    </toujou-read-more>
                    
                    <h3>read-more with multiple tags</h3>
                    
                    <toujou-read-more class="read-more">
                        <h4>This is a h4</h4>
                        ${e()}
                        <h5>This is a h5</h5>
                        ${e()}
                        ${t()}
                    </toujou-read-more>
                    
                    <h3>read-more with a list</h3>
                    
                    <toujou-read-more class="read-more">
                        <ul class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item four</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                        </ul>
                        ${t()}
                    </toujou-read-more>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `,i=u.bind({});var n,a,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return \`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>read-more with a single &lt;p&gt; element:</h3>
                    
                    <toujou-read-more class="read-more">
                        \${renderPTag()}
                        \${renderButtons()} 
                    </toujou-read-more>
                    
                    <h3>read-more with a single &lt;p&gt; element and custom max-lines:</h3>
                    
                    <toujou-read-more class="read-more" max-lines="5">
                        \${renderPTag()}
                        \${renderButtons()}
                    </toujou-read-more>
                    
                    <h3>read-more with multiple tags</h3>
                    
                    <toujou-read-more class="read-more">
                        <h4>This is a h4</h4>
                        \${renderPTag()}
                        <h5>This is a h5</h5>
                        \${renderPTag()}
                        \${renderButtons()}
                    </toujou-read-more>
                    
                    <h3>read-more with a list</h3>
                    
                    <toujou-read-more class="read-more">
                        <ul class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item four</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                        </ul>
                        \${renderButtons()}
                    </toujou-read-more>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    \`;
}`,...(s=(a=i.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const r=["ReadMore"];export{i as ReadMore,r as __namedExportsOrder,o as default};
