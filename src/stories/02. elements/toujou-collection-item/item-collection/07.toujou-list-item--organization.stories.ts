import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';

export default {
    title: 'COMPONENTS/Collections',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouCollectionItemDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                New
                            </a>
                        </div>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>
                        
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                Rabatt
                            </a>
                        </div>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Adidas AG</h3>
                        
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht.
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>
                        
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Adidas AG</h3>
                        
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>

                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ol>
    `
};

export const ListItemOrganization = Template.bind({});
