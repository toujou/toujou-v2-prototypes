import { Story, Meta } from '@storybook/web-components';
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

                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

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

                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

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

                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

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

                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

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
        </ul>
    `
};

export const CardPerson = Template.bind({});

CardPerson.args = {
    elementDesign: 'default',
}
