import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import ratingStarsDocs from './average-rating.docs.mdx';

export default {
    title: 'COMPONENTS/Reviews/Average Rating',
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
            defaultValue: ['4.7'],
            required: true,
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
            defaultValue: ['normal'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface AverageRatingProps {
    rating: number,
    size: string
}

const Template: StoryFn<AverageRatingProps> = (args: AverageRatingProps) => {
    return `
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="/" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    `;
};

export const AverageRating = Template.bind({});

AverageRating.args = {
    rating: 4.4,
    size: 'xl'
}
