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
        showMaxRating: {
            table: {
                category: "Average rating settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Show rating max value',
            description: "Show the maximum possible value for the ratings",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface AverageRatingProps {
    showMaxRating: boolean
}

const Template: StoryFn<AverageRatingProps> = (args: AverageRatingProps) => {
    return `
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 ${args.showMaxRating ? '/ 5' : ''}</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    `;
};

export const AverageRating = Template.bind({});

AverageRating.args = {
    showMaxRating: false
}
