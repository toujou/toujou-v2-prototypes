import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';
import { renderCardCategoryChips } from "../01. helpers/_renderCardCategoriChips";

export default {
    title: 'COMPONENTS/Collections/Cards',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouCollectionItemDocs,
        },
    },
    argTypes: {
        elementDesign: {
            table: {
                category: "Toujou card settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element Design',
            description: "Choose element design for the cards",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface ToujouCardStoryProps {
    elementDesign: any;
}

const Template: StoryFn<ToujouCardStoryProps> = (args: ToujouCardStoryProps) => {
    return `
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product A</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Rabatt'], args.elementDesign)}
                            </div>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product B</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product C</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product D</h3>
                        </a>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    `
};

export const CardProduct = Template.bind({});

CardProduct.args = {
    elementDesign: 'default',
}
