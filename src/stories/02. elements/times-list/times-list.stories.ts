import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import timesListDocs from './times-list.docs.mdx';

export default {
    title: 'COMPONENTS/TimesList',
    parameters: {
        docs: {
            page: timesListDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
        <ul class="list times-list">
            <li class="times-list__item">
                <time datetime="2025-11-29T11:00" class="times-list__time">29.11.2025 (Sa)</time>, 11:00 - 17:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 - 17:00 Uhr
                <span class="times-list__info">Einlass: 19 Uhr</span>
            </li>
            <li class="times-list__item">
                <time datetime="2025-11-30T13:00" class="times-list__time">30.11.2025 (So)</time>, 13:00 Uhr
            </li>
        </ul>
    `;
};

export const TimesList = Template.bind({});

