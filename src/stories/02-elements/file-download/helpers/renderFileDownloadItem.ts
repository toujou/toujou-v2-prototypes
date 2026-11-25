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
                        <toujou-icon class="icon file-download-item__icon" icon-name="star" icon-color="font-light"></toujou-icon>
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
                    <toujou-icon class="icon file-download-item__button-icon" icon-name="download"></toujou-icon>
                    Herunterladen
                </a>
            </div>
        </li>
    `;
};
