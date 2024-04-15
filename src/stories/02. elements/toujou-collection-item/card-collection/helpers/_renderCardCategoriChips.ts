export const renderCardCategoryChips = (categoryTexts: string[], elementDesign: string): string => {
    let categoriesResult = ``;

    if (elementDesign === 'default') {
        elementDesign = 'primary'
    } else if (elementDesign === 'inverted') {
        elementDesign = 'font'
    }

    categoryTexts.forEach((text) => {
        categoriesResult += `
            <a href="#" class="collection-item__category-link">
                <toujou-chip
                    class="chip collection-item__category-chip"
                    chip-icon-position="left"
                    chip-bg-color="${elementDesign}"
                    chip-border-radius="round"
                    chip-size="extra-small"
                    is-clickable=""
                >
                    <toujou-icon class="icon chip__icon" icon-name="bookmark-filled"></toujou-icon> ${text}
                </toujou-chip>
            </a>
        `;
    })

    return categoriesResult;
}
