import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import estimatedReadingTimeDocs from './estimated-reading-time.docs.mdx';

export default {
    title: 'COMPONENTS/EstimatedReadingTime',
    parameters: {
        docs: {
            page: estimatedReadingTimeDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-estimated-reading-time class="estimated-reading-time" target-selector="body">
                <span slot="label" class="estimated-reading-time__label">
                    <toujou-icon class="icon" icon-name="clock-circle" icon-size="ms" icon-color="font"></toujou-icon>
                Estimated reading time:
                </span>
            </toujou-estimated-reading-time>
        </toujou-text-block>
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ul>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ul>
                        </li>
                        <li>item five</li>
                    </ul>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Volutpat odio facilisis mauris sit amet massa. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Neque sodales ut etiam sit amet nisl purus in mollis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet cursus sit amet dictum sit amet justo donec enim. In tellus integer feugiat scelerisque varius. Arcu risus quis varius quam quisque id.</p>
                    <p>Vel turpis nunc eget lorem. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Cursus eget nunc scelerisque viverra mauris in. Netus et malesuada fames ac turpis egestas integer eget aliquet. Risus feugiat in ante metus dictum at tempor. Eu facilisis sed odio morbi quis commodo odio aenean sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Odio facilisis mauris sit amet massa. Fusce id velit ut tortor pretium. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Egestas pretium aenean pharetra magna. Urna duis convallis convallis tellus id interdum velit laoreet id. Tincidunt augue interdum velit euismod in pellentesque. Ultricies integer quis auctor elit sed vulputate mi. Massa massa ultricies mi quis. A arcu cursus vitae congue mauris. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `;
};

export const EstimatedReadingTime = Template.bind({});
