import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blogPluginsDocs from './blog-plugins.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: blogPluginsDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <main>
            <h3 class="post-list-title">Latest posts</h3>
            
            <ul class="card-collection post-list__card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical" role="article">
                        <div class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                <a href="#" class="collection-item__category">
                                    <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                    Tutorials
                                </a>
                            </div>
                        </div>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">11.03.2022</span>
                                <span class="collection-item__subtitle">Jerôme Grad</span>
                            </p>
                            <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical" role="article">
                        <div class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                <a href="#" class="collection-item__category">
                                    <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                    Tutorials
                                </a>
                            </div>
                        </div>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">11.03.2022</span>
                                <span class="collection-item__subtitle">Jerôme Grad</span>
                            </p>
                            <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical" role="article">
                        <div class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                <a href="#" class="collection-item__category">
                                    <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                    Tutorials
                                </a>
                            </div>
                        </div>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">11.03.2022</span>
                                <span class="collection-item__subtitle">Jerôme Grad</span>
                            </p>
                            <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical" role="article">
                        <div class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                <a href="#" class="collection-item__category">
                                    <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                    Tutorials
                                </a>
                            </div>
                        </div>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">11.03.2022</span>
                                <span class="collection-item__subtitle">Jerôme Grad</span>
                            </p>
                            <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    `;
};

export const PostsList = Template.bind({});
