type ElementDesign = 'default' | 'primary' | 'secondary' | 'inverted';
type itemType = 'list' | 'grid';

export interface FileDownloadItem {
    id: number;
    elementDesign: ElementDesign;
    title: string;
    description?: string;
    extension: string;
    size: string;
    href: string;
    thumbnail?: string;
}

export const renderFileDownloadItem = (item: FileDownloadItem, itemType: itemType) => {
    const metaId = `fd-meta-${item.id}`;
    const descriptionId = item.description ? `fd-description-${item.id}` : '';
    const ariaDescribedBy = [metaId, descriptionId].filter(Boolean).join(' ');
    const mimeType = getMimeType(item.extension);
    const iconName = getFileIconName(mimeType);
    console.log(iconName)
    return `
        <li class="file-download-item" data-item-type="${itemType}" data-element-design="${item.elementDesign}">
            <div class="file-download-item__content">
                ${item.thumbnail
                    ? `
                        <img
                            class="file-download-item__thumbnail"
                            src="${item.thumbnail}"
                            width="48"
                            height="48"
                            alt=""
                            title="${item.title}"
                            loading="lazy"
                            aria-hidden="true"
                        >
                    `
                    : `
                        <toujou-icon class="icon file-download-item__icon" icon-name="${iconName}" icon-color="font-light"></toujou-icon>
                    `
                }

                <div class="file-download-item__header">
                    <h3 class="file-download-item__title">${item.title}</h3>
    
                    <div class="file-download-item__meta" id="${metaId}">
                        <span class="file-download-item__meta-info file-download-item__extension">
                            <span is-visually-hidden>Dateityp</span>
                            ${item.extension}
                        </span>
    
                        <span class="file-download-item__meta-info file-download-item__size">
                            <span is-visually-hidden>Dateigröße</span>
                            ${item.size}
                        </span>
                    </div>
                </div>

                ${item.description
                     ? `
                        <p class="file-download-item__description" id="${descriptionId}">
                            ${item.description}
                        </p>
                    `
                    : ''
                }

                <a
                    class="button file-download-item__button"
                    button-size="small"
                    button-variant="primary"
                    button-icon-position="left"
                    aria-label="Herunterladen: ${item.title}"
                    aria-describedby="${ariaDescribedBy}"
                    download=""
                    href="${item.href}"
                >
                    <toujou-icon class="icon file-download-item__button-icon" icon-name="file-download" icon-size="ms"></toujou-icon>
                    Herunterladen
                </a>
            </div>
        </li>
    `;
};


type FileIconName =
    | 'archive-outline'
    | 'file-chart-outline'
    | 'file-code-outline'
    | 'file-delimited-outline'
    | 'file-document-outline'
    | 'file-eye-outline'
    | 'file-image-outline'
    | 'file-lines'
    | 'file-music-outline'
    | 'file-star-outline'
    | 'file-table-outline'
    | 'file-text'
    | 'file-video-outline';

/**
 * Returns the MIME type for the given file extension.
 */
const getMimeType = (extension: string): string => {
    const mimeTypes: Record<string, string> = {
        // Images
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        webp: 'image/webp',
        svg: 'image/svg+xml',

        // Documents
        pdf: 'application/pdf',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        odt: 'application/vnd.oasis.opendocument.text',
        rtf: 'application/rtf',

        // Spreadsheets
        csv: 'text/csv',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ods: 'application/vnd.oasis.opendocument.spreadsheet',

        // Audio
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
        ogg: 'audio/ogg',
        flac: 'audio/flac',

        // Video
        mp4: 'video/mp4',
        mov: 'video/quicktime',
        avi: 'video/x-msvideo',
        webm: 'video/webm',

        // Archives
        zip: 'application/zip',
        rar: 'application/vnd.rar',
        '7z': 'application/x-7z-compressed',
        tar: 'application/x-tar',
        gz: 'application/gzip',

        // Code
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ts: 'application/typescript',
        json: 'application/json',
        xml: 'application/xml',
    };

    return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
};

/**
 * Returns the icon name for the given MIME type.
 */
const getFileIconName = (mimeType: string): FileIconName => {
    if (mimeType.startsWith('image/')) {
        return 'file-image-outline';
    }

    if (mimeType.startsWith('audio/')) {
        return 'file-music-outline';
    }

    if (mimeType.startsWith('video/')) {
        return 'file-video-outline';
    }

    if (
        mimeType === 'application/zip' ||
        mimeType === 'application/x-zip-compressed' ||
        mimeType === 'application/vnd.rar' ||
        mimeType === 'application/x-rar-compressed' ||
        mimeType === 'application/x-7z-compressed' ||
        mimeType === 'application/x-tar' ||
        mimeType === 'application/gzip' ||
        mimeType === 'application/x-gzip' ||
        mimeType === 'application/x-bzip2' ||
        mimeType === 'application/x-xz' ||
        mimeType === 'application/zstd'
    ) {
        return 'archive-outline';
    }

    if (
        mimeType === 'text/csv' ||
        mimeType === 'application/csv' ||
        mimeType === 'text/tab-separated-values'
    ) {
        return 'file-delimited-outline';
    }

    if (
        mimeType.includes('spreadsheet') ||
        mimeType.includes('excel') ||
        mimeType === 'application/vnd.oasis.opendocument.spreadsheet'
    ) {
        return 'file-table-outline';
    }

    if (
        mimeType.startsWith('text/') ||
        mimeType.includes('javascript') ||
        mimeType.includes('typescript') ||
        mimeType.includes('json') ||
        mimeType.includes('xml')
    ) {
        return 'file-code-outline';
    }

    if (
        mimeType === 'application/pdf' ||
        mimeType.includes('wordprocessing') ||
        mimeType.includes('msword') ||
        mimeType.includes('opendocument.text') ||
        mimeType === 'application/rtf'
    ) {
        return 'file-document-outline';
    }

    return 'file-lines';
};
