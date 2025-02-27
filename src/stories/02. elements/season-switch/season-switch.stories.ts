import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import seasonSwitchDocs from './season-switch.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Season Switch',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: seasonSwitchDocs,
        },
    },
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta;

function tourismSeasonTriggerJSMock() {
    console.log('Starting MOCK: toujou tourism season-trigger js');
    const updateSeason = (seasonElements: NodeListOf<Element>, season: string) => {
        seasonElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                if (el.dataset.season !== season) {
                    el.classList.remove("season-trigger-action--visible");
                } else {
                    el.classList.add("season-trigger-action--visible");
                }
            }
        });
    };

    const seasonTriggers = document.getElementsByClassName("season-trigger") as HTMLCollectionOf<HTMLInputElement>;

    if (seasonTriggers.length > 0) {
        const activeSeason = seasonTriggers[0].value;
        const seasonElements = document.querySelectorAll("[data-season]");

        updateSeason(seasonElements, activeSeason);

        const updateSeasonTriggers = (valueToSet: string) => {
            Array.from(seasonTriggers).forEach((trigger) => {
                trigger.value = valueToSet;
            });
        };

        Array.from(seasonTriggers).forEach((trigger) => {
            trigger.addEventListener("change", (event) => {
                const newSeason = (event.target as HTMLInputElement).value;
                updateSeason(seasonElements, newSeason);
                updateSeasonTriggers(newSeason);
            });
        });
    }
}

const Template = () => {
    setTimeout(() => {
        tourismSeasonTriggerJSMock();
    });

    return `
        <style>
            [data-season] {display: none;}
            .season-trigger-action--visible[data-season] {display: block;}
        </style>

        <main>
            <toujou-season-switch class="season-switch">
                <toujou-input-group class="input-group input-group--single-select season-switch__input-group">
                    <label class="input-label season-switch__label" for="seasonswitch">Season switch</label>
                    <div class="select__wrapper season-switch__select-wrapper">
                        <select
                            data-pristine-required-message-de="The given subject was empty."
                            class="season-trigger form-control input select season-switch__select" id="seasonswitch"
                            name="seasonswitch"
                        >
                            <option class="select__option" value="2025">2025</option>
                            <option class="select__option" value="2026">2026</option>
                            <option class="select__option" value="2027">2027</option>
                        </select>
                    </div>
                </toujou-input-group>
            </toujou-season-switch>
            
            <section style="border: 1px solid grey; padding: var(--spacing-xl) var(--spacing-normal); max-width: var(--content-max-width); margin: 4rem auto 0;">
                <div data-season="2025">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2025 content</p>
                </div>
                <div data-season="2026">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2026 content<h3>
                </div>
                <div data-season="2027">
                    <p style="font-size: var(--font-size-m); margin: 0;">This is the fake season 2027 content</p>
                </div>
            </section>
        </main>
    `;
};

export const SeasonSwitch = Template.bind({});
