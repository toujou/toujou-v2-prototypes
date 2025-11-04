import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import TextElementsDocs from "./text-elements.docs.mdx";

export default {
    title: 'COMPONENTS/Text Elements',
    parameters: {
        docs: {
            page: TextElementsDocs,
        }
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Lists</h1>
                        <h3>UL list default</h3>
                        <ul class="list" test-target-name="ul-default">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ul class="list">
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

                        <h3>UL list font color</h3>
                        <ul class="list list--font">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ul class="list">
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

                        <h3>UL list secondary color</h3>
                        <ul class="list list--secondary">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ul class="list">
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

                        <h3>OL list default</h3>
                        <ol class="list">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ol class="list">
                                    <li>item four a</li>
                                    <li>item four b</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                    <li>item four c</li>
                                    <li>item four d</li>
                                    <li>item four e</li>
                                </ol>
                            </li>
                            <li>item five</li>
                        </ol>

                        <h3>OL list font color</h3>
                        <ol class="list list--font">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ol class="list">
                                    <li>item four a</li>
                                    <li>item four b</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                    <li>item four c</li>
                                    <li>item four d</li>
                                    <li>item four e</li>
                                </ol>
                            </li>
                            <li>item five</li>
                        </ol>

                        <h3>OL list secondary color</h3>
                        <ol class="list list--secondary">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            <li>item four
                                <ol class="list">
                                    <li>item four a</li>
                                    <li>item four b</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                    <li>item four c</li>
                                    <li>item four d</li>
                                    <li>item four e</li>
                                </ol>
                            </li>
                            <li>item five</li>
                        </ol>

                        <p>This is another simple paragraph!</p>

                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
            
             <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>UL list in 2 columns</h3>
                        <ul class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ul>
                        
                        <h3>UL list in 3 columns</h3>
                        <ul class="list list-in-columns list-in-columns--three">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ul>
                        
                        <h3>UL list in 4 columns</h3>
                        <ul class="list list-in-columns list-in-columns--four">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ul>
                        
                        <h3>OL list in 2 columns</h3>
                        <ol class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ol>
                        
                        <h3>OL list in 3 columns</h3>
                        <ol class="list list-in-columns list-in-columns--three">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ol>
                        
                        <h3>OL list in 4 columns</h3>
                        <ol class="list list-in-columns list-in-columns--four">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                            <li>item nine</li>
                            <li>item ten</li>
                            <li>item eleven</li>
                            <li>item twelve</li>
                        </ol>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

        </main>
    `;
};

export const TextElementsLists = Template.bind({}) as any;
TextElementsLists.storyName = 'Text Elements - Lists';
