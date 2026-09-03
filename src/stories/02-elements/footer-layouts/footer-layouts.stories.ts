import { Meta, StoryFn } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Footer Layouts',
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        columnCount: {
            table: {
                category: "Footer Layouts Settings",
                defaultValue: { summary: '4' },
            },
            name: 'Column count',
            description: "Number of columns on the middle row",
            options: ['1', '2', '3', '4'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface FooterLayoutsStoryProps { columnCount: string; }


const Template: StoryFn<FooterLayoutsStoryProps> = (args: FooterLayoutsStoryProps) => {
    const columns = [
        {
            name: 'outer-left',
            title: 'Outer left',
            id: 'c3907',
        },
        {
            name: 'inner-left',
            title: 'Inner left',
            id: 'c3908',
        },
        {
            name: 'inner-right',
            title: 'Inner right',
            id: 'c3909',
        },
        {
            name: 'outer-right',
            title: 'Outer right',
            id: 'c3910',
        },
    ];

    const contentColumns = columns
        .slice(0, Number(args.columnCount))
        .map((column) => `
            <div class="footer-layout__column"data-column-name="${column.name}">
                <span id="${column.id}"></span>
                <h3>${column.title}</h3>
            </div>
        `)
        .join('');


    return `
        <footer class="footer footer-layout" data-footer-layout="fourColumns" data-footer-column-count="${args.columnCount}">
            <div class="footer-layout__content">
                <div class="footer-layout__row" data-row-name="intro">
                    <div class="footer-layout__column" data-column-name="intro">
                        <span id="c3906"></span>
                        <h3>Test footer page</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            
                <div class="footer-layout__row" data-row-name="content">
                    ${contentColumns}
                </div>
            
                <div class="footer-layout__row" data-row-name="end">
                    <div class="footer-layout__column" data-column-name="end">
                        <span id="c3911"></span>
                        <h3>End</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
};

export const FooterLayouts = Template.bind({});

FooterLayouts.args = {
    columnCount: '4',
}
