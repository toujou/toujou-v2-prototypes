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
        badges: [TOUJOU_BADGES.TESTING],
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
                <toujou-collection-item class="collection-item" item-type="trip" item-design="${args.elementDesign}" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Neu
                            </span>
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Jetzt 30% Rabatt
                            </span>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hotel name</span>
                        </p>
                        
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        
                        <div class="collection-item__trip-infos">
                            <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                            <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                        </div>
                        
                        <p class="collection-item__trip-price">
                            <span class="collection-item__trip-price-prefix">ab</span>
                            <span class="collection-item__trip-price-amount">1.5000,00€</span>
                            <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                        </p>
                        
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" item-design="${args.elementDesign}" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Neu
                            </span>
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Jetzt 30% Rabatt
                            </span>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hotel name</span>
                        </p>
                        
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        
                        <div class="collection-item__trip-infos">
                            <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                            <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                        </div>
                        
                        <p class="collection-item__trip-price">
                            <span class="collection-item__trip-price-prefix">ab</span>
                            <span class="collection-item__trip-price-amount">1.5000,00€</span>
                            <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                        </p>
                        
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" item-design="${args.elementDesign}" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Neu
                            </span>
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Jetzt 30% Rabatt
                            </span>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hotel name</span>
                        </p>
                        
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        
                        <div class="collection-item__trip-infos">
                            <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                            <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                        </div>
                        
                        <p class="collection-item__trip-price">
                            <span class="collection-item__trip-price-prefix">ab</span>
                            <span class="collection-item__trip-price-amount">1.5000,00€</span>
                            <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                        </p>
                        
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" item-design="${args.elementDesign}" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Neu
                            </span>
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Jetzt 30% Rabatt
                            </span>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hotel name</span>
                        </p>
                        
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        
                        <div class="collection-item__trip-infos">
                            <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                            <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                        </div>
                        
                        <p class="collection-item__trip-price">
                            <span class="collection-item__trip-price-prefix">ab</span>
                            <span class="collection-item__trip-price-amount">1.5000,00€</span>
                            <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                        </p>
                        
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
        
    `
};

export const CardTrip = Template.bind({});

CardTrip.args = {
    elementDesign: 'default',
}