import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import TableDocs from "./table.docs.mdx";

export default {
    title: 'COMPONENTS/Table',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: TableDocs,
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
            defaultValue: ['none'],
            required: true,
        },
    }
} as Meta;

interface TableStoryProps {
    tableAlignment: string
}

const Template: Story<TableStoryProps> = (args: TableStoryProps) => {
    return `
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    `;
};

export const Table = Template.bind({});

Table.args = {
    tableAlignment: 'none',
}