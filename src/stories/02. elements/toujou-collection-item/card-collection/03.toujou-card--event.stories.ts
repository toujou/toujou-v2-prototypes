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
                <toujou-collection-item class="collection-item" item-type="event" item-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date">
                            <span class="collection-item__date-day">25</span>
                            <span class="collection-item__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" item-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date">
                            <span class="collection-item__date-day">25</span>
                            <span class="collection-item__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" item-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date">
                            <span class="collection-item__date-day">25</span>
                            <span class="collection-item__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" item-design="${args.elementDesign}" item-orientation="vertical" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date">
                            <span class="collection-item__date-day">25</span>
                            <span class="collection-item__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
        
    `
};

export const CardEvent = Template.bind({});

CardEvent.args = {
    elementDesign: 'default',
}