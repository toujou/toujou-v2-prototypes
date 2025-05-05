import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import ratingStarsDocs from './rating-stars.docs.mdx';

export default {
    title: 'COMPONENTS/Rating Stars',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: ratingStarsDocs,
        },
    },
    argTypes: {
        rating: {
            table: {
                category: "Rating stars",
                defaultValue: { summary: '4.4' },
            },
            name: 'Rating value',
            description: "Set a value for the rating",
            control: {
                type: 'number',
                min: 0,
                max: 5,
                step: 0.1
            },
            required: true,
        },
        suffix: {
            table: {
                category: "Rating stars",
            },
            name: 'Rating suffix',
            description: "Set a suffix for the rating",
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface RatingStarsStoryProps {
    rating: number,
    suffix: string,
}

const Template: StoryFn<RatingStarsStoryProps> = (args: RatingStarsStoryProps) => {
    return `
        <toujou-rating-stars
            class="rating-stars"
            rating-value="${args.rating}"
            rating-total="5"
            rating-suffix="${args.suffix}"
            aria-label="${args.rating} out of 5 stars"
        ></toujou-rating-stars>
    `;
};

export const RatingStars = Template.bind({});

RatingStars.args = {
    rating: 4.4,
    suffix: '',
}
