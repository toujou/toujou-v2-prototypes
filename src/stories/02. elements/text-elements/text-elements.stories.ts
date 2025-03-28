import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import TextElementsDocs from "./text-elements.docs.mdx";

export default {
    title: 'COMPONENTS/Text Elements',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: TextElementsDocs,
        }
    },
    argTypes: {
        tableAlignment: {
            table: {
                category: "Table settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Table alignment',
            description: "Set the alignment of the table's text",
            options: ['none', 'center', 'left', 'right'],
            control: { type: 'radio' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface TableStoryProps {
    tableAlignment: string
}

const Template: StoryFn<TableStoryProps> = (args: TableStoryProps) => {
    return `
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
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

            <toujou-table-container class="table-container">
                <table text-alignment="${args.tableAlignment}" class="table">
                    <caption class="table__caption">
                        This is a caption
                        <span class="table__summary">This is a beautiful summary</span>
                    </caption>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Knocky</td>
                        <td>Flor</td>
                        <td>Ella</td>
                        <td>Juan</td>
                    </tr>
                    <tr>
                        <th>Breed</th>
                        <td>Jack Russell</td>
                        <td>Poodle</td>
                        <td>Streetdog</td>
                        <td>Cocker Spaniel</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>16</td>
                        <td>9</td>
                        <td>10</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Owner</th>
                        <td>Mother-in-law</td>
                        <td>Me</td>
                        <td>Me</td>
                        <td>Sister-in-law</td>
                    </tr>
                    <tr>
                        <th>Eating Habits</th>
                        <td>Eats everyone's leftovers</td>
                        <td>Nibbles at food</td>
                        <td>Hearty eater</td>
                        <td>Will eat till he explodes</td>
                    </tr>
                </table>
            </toujou-table-container>

            <toujou-table-container class="table-container">
                <table text-alignment="${args.tableAlignment}" class="table">
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
            </toujou-table-container>
        </main>
    `;
};

export const TextElementsExamples = Template.bind({});

TextElementsExamples.args = {
    tableAlignment: 'none',
}
