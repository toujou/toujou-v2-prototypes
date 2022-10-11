import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import detailsDocs from './details.docs.mdx';

export default {
    title: 'COMPONENTS/Accordion',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/154e8bfd-4e6a-48d2-914c-5bafe3af7289/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: detailsDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <toujou-details id="details-0" class="details" is-open="">
            <h3 slot="summary" class="details__title">Warum gibt es nur Online-Termine? Gibt es auch eine andere Möglichkeit, einen Termin zu vereinbaren?</h3>
            <p slot="summary" class="details__subtitle"></p>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>
                          
        <toujou-details id="details-1" class="details">
            <h3 slot="summary" class="details__title">I am just another simple title</h3>
            <ul slot="summary" class="details__subtitle details__subtitle-list">
                <li class="details__subtitle-list-item">Fruit</li>
                <li class="details__subtitle-list-item">Apple</li>
                <li class="details__subtitle-list-item">Pink Lady</li>
            </ul>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>
    `
};

export const Details = Template.bind({});

