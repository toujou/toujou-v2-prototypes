import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCardDocs from './toujou-card.docs.mdx';

export default {
    title: 'COMPONENTS/Toujou Card',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/114c19f6-d8db-4c00-8f35-9b51de86f94c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: toujouCardDocs,
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
                <toujou-card class="toujou-card" card-type="event" design="${args.elementDesign}">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                        <div class="toujou-card__date">
                            <span class="toujou-card__date-day">25</span>
                            <span class="toujou-card__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="toujou-card__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon toujou-card__info-icon"></toujou-icon>
                            <p class="toujou-card__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="toujou-card__extension">Verlängert bis 26.09.2023</p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="event" design="${args.elementDesign}">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                        <div class="toujou-card__date">
                            <span class="toujou-card__date-day">25</span>
                            <span class="toujou-card__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="toujou-card__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon toujou-card__info-icon"></toujou-icon>
                            <p class="toujou-card__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="toujou-card__extension">Verlängert bis 26.09.2023</p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="event" design="${args.elementDesign}">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                        <div class="toujou-card__date">
                            <span class="toujou-card__date-day">25</span>
                            <span class="toujou-card__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="toujou-card__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon toujou-card__info-icon"></toujou-icon>
                            <p class="toujou-card__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="toujou-card__extension">Verlängert bis 26.09.2023</p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="event" design="${args.elementDesign}">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                        <div class="toujou-card__date">
                            <span class="toujou-card__date-day">25</span>
                            <span class="toujou-card__date-month">Apr</span>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="toujou-card__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon toujou-card__info-icon"></toujou-icon>
                            <p class="toujou-card__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="toujou-card__extension">Verlängert bis 26.09.2023</p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
        </ul>
        
    `
};

export const ToujouCardEvent = Template.bind({});

ToujouCardEvent.args = {
    elementDesign: 'default',
}