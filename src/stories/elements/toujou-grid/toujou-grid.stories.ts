import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'
// @ts-ignore
import toujouGridDocs from './toujou-grid.docs.mdx';

export default {
    title: 'COMPONENTS/Grid',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/edaf3b92-9a40-4082-9504-de34d306f6cf/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouGridDocs,
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
    }
} as Meta;

const Template = (args: { type: string; }) => {
    const gridEl = document.createElement('toujou-grid');
    gridEl.classList.add('demo-grid');

    const titleEl = document.createElement('p');
    titleEl.textContent = `grid--${args.type}`;
    titleEl.classList.add('demo-grid__title');

    gridEl.appendChild(titleEl);

    gridEl.setAttribute('grid-type', args.type);
    return gridEl;
};

export const Grid = Template.bind({});

// @ts-ignore
Grid.args = {
    type: 'default',
}
