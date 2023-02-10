import { Meta, Story } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import reviewStarsDocs from './review-stars.docs.mdx';

export default {
    title: 'COMPONENTS/ReviewStars',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: reviewStarsDocs,
        },
    },
    argTypes: {
        rating: {
            table: {
                category: "Rating stars",
                defaultValue: { summary: '4.7' },
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
    }
} as Meta;

interface RatingStarsStoryProps {
    rating: number,
    size: string
}

const Template: Story<RatingStarsStoryProps> = (args: RatingStarsStoryProps) => {
    return `
        <toujou-rating-stars
            class="rating-stars"
            rating-entity="★"
            rating-total="5"
            rating-value="${args.rating}"
            rating-stars-size="${args.size}"
        >
        </toujou-rating-stars>
    `;
};

export const ReviewStars = Template.bind({});

ReviewStars.args = {
    rating: 4.7,
    size: 'xl'
}
