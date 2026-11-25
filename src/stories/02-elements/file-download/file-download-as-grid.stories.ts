import { Meta } from '@storybook/web-components-vite';
import { fileDownloadItems } from './helpers/fileDownloadItems';
import { renderFileDownloadElement } from './helpers/renderFileDownloadElement';

export default {
    title: 'COMPONENTS/File Download',
} satisfies Meta;

const Template = () => renderFileDownloadElement(fileDownloadItems, 'grid');

export const FileDownloadAsGrid = Template.bind({});
