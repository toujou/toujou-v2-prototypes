import { FileDownloadItem, renderFileDownloadItem } from './renderFileDownloadItem';

export type FileDownloadLayout = 'list' | 'grid';

/**
 * Renders a complete file download element with the given items and layout.
 */
export const renderFileDownloadElement = (
    items: FileDownloadItem[],
    layout: FileDownloadLayout
): string => {
    return `
        <main>
            <div class="file-download" data-file-download-layout="${layout}">
                <ul class="file-download__list">
                    ${items.map((item) => renderFileDownloadItem(item, layout)).join('')}
                </ul>
            </div>
        </main>
    `;
};
