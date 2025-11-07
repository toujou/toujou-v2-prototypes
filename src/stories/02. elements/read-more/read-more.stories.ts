import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import readMoreDocs from './read-more.docs.mdx';

export default {
    title: 'COMPONENTS/ReadMore',
    parameters: {
        docs: {
            page: readMoreDocs,
        },
    },
} satisfies Meta;

const renderPTag = () => {
    return `
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
    `
}

const renderButtons = () => {
    return `
        <button class="button" button-variant="primary" slot="open-button">Read more</button>
        <button class="button" button-variant="secondary" slot="close-button">Read less</button>
    `
}

const Template = () => {
    return `
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>read-more with a single &lt;p&gt; element:</h3>
                    
                    <toujou-read-more class="read-more">
                        ${renderPTag()}
                        ${renderButtons()} 
                    </toujou-read-more>
                    
                    <h3>read-more with a single &lt;p&gt; element and custom max-lines:</h3>
                    
                    <toujou-read-more class="read-more" max-lines="5">
                        ${renderPTag()}
                        ${renderButtons()}
                    </toujou-read-more>
                    
                    <h3>read-more with multiple tags</h3>
                    
                    <toujou-read-more class="read-more">
                        <h4>This is a h4</h4>
                        ${renderPTag()}
                        <h5>This is a h5</h5>
                        ${renderPTag()}
                        ${renderButtons()}
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
                        ${renderButtons()}
                    </toujou-read-more>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `;
};

export const ReadMore = Template.bind({});
