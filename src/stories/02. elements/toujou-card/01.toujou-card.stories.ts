import { Meta } from '@storybook/web-components';
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

    }
} as Meta;


const Template = () => {
    return `
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="default">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="default">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="default">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="toujou-card__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="button toujou-card__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-card>
            </li>
            <li class="card-collection__item">
                <toujou-card class="toujou-card" card-type="default">
                    <div class="toujou-card__top">
                        <figure class="toujou-card__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="toujou-card__image">
                        </figure>
                    </div>
                    <div class="toujou-card__bottom">
                        <h3 class="toujou-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="toujou-card__subtitles">
                            <span class="toujou-card__subtitle">Dies ist ein Untertitel</span>
                        </p>
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

export const ToujouCard = Template.bind({});

