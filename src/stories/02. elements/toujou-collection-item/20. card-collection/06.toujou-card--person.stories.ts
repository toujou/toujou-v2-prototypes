import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';
import { renderCardCategoryChips } from "../01. helpers/_renderCardCategoriChips";

export default {
    title: 'COMPONENTS/CollectionCards',
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
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
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
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    `
};

export const CardPerson = Template.bind({});

CardPerson.args = {
    elementDesign: 'default',
}
