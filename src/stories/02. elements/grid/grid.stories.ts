import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import gridDocs from './grid.docs.mdx';

export default {
    title: 'COMPONENTS/Grid',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/edaf3b92-9a40-4082-9504-de34d306f6cf/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: gridDocs,
        },
    },
    argTypes: {
        type: {
            table: {
                category: "Grid settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Grid type',
            description: "Set grid type",
            options: ['default', 'wide', 'fullwidth', 'ignore'],
            control: { type: 'radio' },
            defaultValue: ['normal'],
            required: true,
        },
        numberOfColumns: {
            table: {
                category: "Grid settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Number of columns',
            description: "Set the number of columns",
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
            defaultValue: [1],
            required: true,
        },
    }
} as Meta;

interface GridStoryProps {
    type: string;
    numberOfColumns: number;
}

const Template: Story<GridStoryProps> = (args: GridStoryProps) => {
    const gridEl = document.createElement('toujou-grid');
    gridEl.classList.add('grid', 'demo-grid');
    gridEl.setAttribute('number-of-columns', String(args.numberOfColumns));
    gridEl.setAttribute('grid-type', args.type);

    for (let i = 0; i < args.numberOfColumns; i++) {
        const col = document.createElement('toujjou-grid-column');
        col.classList.add('grid-column');

        const titleEl = document.createElement('p');
        titleEl.textContent = `grid--${args.type}`;
        titleEl.classList.add('demo-grid__title');
        col.appendChild(titleEl);
        gridEl.appendChild(col);
    }

    return gridEl;
};

export const Grid = Template.bind({});

Grid.args = {
    type: 'default',
    numberOfColumns: 1,
}
