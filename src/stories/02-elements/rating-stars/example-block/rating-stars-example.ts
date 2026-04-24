export const renderRatingStarsExampleBlock = (rating: number, suffix: string = '') => {
    return `
        <toujou-rating-stars
            class="rating-stars"
            rating-value="${rating}"
            rating-total="5"
            rating-suffix="${suffix}"
            aria-label="${rating} out of 5 stars"
        ></toujou-rating-stars>
    `;
}
