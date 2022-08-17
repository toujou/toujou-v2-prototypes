import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import exitWarningDocs from './exit-warning.docs.mdx';

export default {
    title: 'COMPONENTS/Exit Warning',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: exitWarningDocs,
        },
    },
} as Meta;

const secondsRemainingVar = "${secondsRemaining}";
const targetUrlVar = "${targetUrl}";

const Template = () => {
    return `
        <h1>EXIT WARNING</h1>
        <p>click on this <a href="https://www.google.com" target="toujou-exit-warning">link</a> to "leave the page" and open the exit warning</p>
        
        <exit-warning title="Sie sind dabei die Seite zu verlassen">
            <template>
                <span id="c283"></span>
                <p>Sie werden in <strong>${secondsRemainingVar} Sekunden</strong> auf die Seite <a href="${targetUrlVar}">${targetUrlVar}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
            </template>
        </exit-warning>
    `;
};

export const ExitWarning = Template.bind({});
