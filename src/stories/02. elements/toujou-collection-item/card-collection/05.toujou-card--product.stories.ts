import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';

export default {
    title: 'COMPONENTS/Collections',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/114c19f6-d8db-4c00-8f35-9b51de86f94c/Desktop',
        },
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
    }
} as Meta;

interface ToujouCardStoryProps {
    elementDesign: any;
}

const Template: Story<ToujouCardStoryProps> = (args: ToujouCardStoryProps) => {
    return `
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                New
                            </a>
                        </div>
                    </div>
                    <a href="#" class="collection-item__bottom">
                        <h3 class="collection-item__title">Product A</h3>
                    </a>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Rabatt
                            </a>
                        </div>
                    </div>
                    <a href="#" class="collection-item__bottom">
                        <h3 class="collection-item__title">Product B</h3>
                    </a>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <a href="#" class="collection-item__bottom">
                        <h3 class="collection-item__title">Product C</h3>
                    </a>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <a href="#" class="collection-item__bottom">
                        <h3 class="collection-item__title">Product D</h3>
                    </a>
                </toujou-collection-item>
            </li>
        </ul>
    `
};

export const CardProduct = Template.bind({});

CardProduct.args = {
    elementDesign: 'default',
}
