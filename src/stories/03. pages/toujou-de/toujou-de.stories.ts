import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'PAGES/toujou.de',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        layout: 'fullscreen',
    },
} as Meta;

const Template = () => {
    return `
        <header class="header" image-height="default">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="default"
                vertical-position="center"
                horizontal-position="mid"
                content-size="half"
                text-alignment="default">
                <h2 class="header-content__title font--default">medatsu: Die nächste Stufe einfacher Website-Gestaltung</h2>
                <p class="infotext header-content__text">Storytelling in großem Gewand – bildgewaltig und emotional. Für Agenturen und Unternehmen, die eine Vision verfolgen und das auch zeigen wollen. Medien, Content, noch individuellere Designeinstellungen.</p>
                <a href="#" class="button header-content__cta" button-variant="secondary">Jetzt Medatsu kennenlernen</a>
            </div>

        </header>
        
        <main>
            <toujou-text-block class="text-block" text-block-media-position="beside-right">
            <toujou-text-block-column class="text-block-column">
                <figure class="text-block__figure">
                    <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--4-3">
                </figure>
                <div class="text-block__content">
                    <h2>Individuell gestaltet, selbständig verwaltet</h2>
                    <h1>Ihre professionelle Website mit toujou</h1>
                    <p class="infotext">
                        <strong>Starten Sie sofort</strong>:
                        <strong> </strong>Erstellen Sie Ihre Website innerhalb kürzester Zeit. <strong>Bleiben&nbsp;Sie unabhängig</strong>: Aktualisieren Sie Ihre Website jederzeit bequem und schnell.&nbsp;<strong>Werden Sie effizient</strong>: Positionieren Sie Ihre Botschaft dank toujou-Themes auf allen Endgeräten. <strong>Der toujou-Bonus</strong>: <a href="#c1012401">Lassen Sie sich menschlich beraten</a>.
                    </p>
                    <p>
                    <a href="/loesungen/unternehmen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Für Ihr Unternehmen</a>
                    <a href="/loesungen/agenturen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Als Tool für Agenturen</a></p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        </main>
    `;
};

export const ToujouHomepage = Template.bind({});


