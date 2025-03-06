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
        size: {
            table: {
                category: "Rating stars",
                defaultValue: { summary: 'xl' },
            },
            name: 'Size',
            description: "Set the rating stars size",
            options: ['s', 'normal', 'm', 'l', 'xl', 'xxl'],
            control: { type: 'radio' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface RatingStarsStoryProps {
    rating: number,
    suffix: string,
    size: string
}

const Template: StoryFn<RatingStarsStoryProps> = (args: RatingStarsStoryProps) => {
    return `
        <toujou-rating-stars
            class="rating-stars"
            rating-entity="★"
            rating-total="5"
            rating-value="${args.rating}"
            rating-entity-size="${args.size}"
            rating-suffix="${args.suffix}"
        >
        </toujou-rating-stars>
    `;
};

export const RatingStars = Template.bind({});

RatingStars.args = {
    rating: 4.4,
    suffix: '',
    size: 'xl'
}
