import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'PAGES/Toujou Collection Items',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `

        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>This is a test page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="blog" item-design="default" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Tutorials
                            </span>
                        </div>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">11.03.2022</span>
                            <span class="collection-item__subtitle">Jer??me Grad</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="blog" item-design="default" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Tutorials
                            </span>
                        </div>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">11.03.2022</span>
                            <span class="collection-item__subtitle">Jer??me Grad</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="blog" item-design="default" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Tutorials
                            </span>
                        </div>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">11.03.2022</span>
                            <span class="collection-item__subtitle">Jer??me Grad</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="blog" item-design="default" item-orientation="vertical">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <span class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                Tutorials
                            </span>
                        </div>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">11.03.2022</span>
                            <span class="collection-item__subtitle">Jer??me Grad</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
        
        <ol class="item-collection">
            <li class="item-collection__item" item-type="default">
                <toujou-collection-item class="collection-item" item-orientation="horizontal">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item" item-type="default">
                <toujou-collection-item class="collection-item" item-orientation="horizontal">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item" item-type="default">
                <toujou-collection-item class="collection-item" item-orientation="horizontal">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item" item-type="default">
                <toujou-collection-item class="collection-item" item-orientation="horizontal">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas l??ngere Headline ??ber zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                        </p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und f??r den Spamschutz zu achten ist: Das erl??utern wir in diesem Blogartikel.</p>
                        <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ol>
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>This is a test page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

    `;
};

export const ToujouCollectionItems = Template.bind({});


