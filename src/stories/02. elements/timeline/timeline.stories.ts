import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import timelineDocs from "./timeline.docs.mdx";

export default {
    title: 'COMPONENTS/Timeline',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: timelineDocs,
        },
    },
    argTypes: {
        direction: {
            table: {
                category: "Timeline Settings",
                defaultValue: { summary: 'vertical' },
            },
            name: 'Timeline direction',
            description: "Choose between a vertical or horizontal timeline",
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        elementDesign: {
            table: {
                category: "Timeline Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Timeline element design',
            description: "Set the element design for the timeline element",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        showLegend: {
            table: {
                category: "Timeline settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Show legend',
            description: "Show the legend element",
            control: { type: 'boolean' },
            defaultValue: 'false',
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface TimelineStoryProps {
    direction: string;
    elementDesign: string;
    showLegend: boolean;
}

const Template: StoryFn<TimelineStoryProps> = (args: TimelineStoryProps) => {
    return `
        <main>
            <toujou-timeline
                class="timeline"
                timeline-direction="${args.direction}"
                element-design="${args.elementDesign}"
                ${args.showLegend ? 'timeline-show-legend' : ''}
                aria-label="Toujou milestones timeline"
            >

                <toujou-timeline-legend class="timeline-legend">
                    <ul class="timeline-legend__list">
                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2023" class="timeline-legend__link" is-active>2023</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2025" class="timeline-legend__link">2025</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2026" class="timeline-legend__link"="">2026</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2027" class="timeline-legend__link"="">2027</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2028" class="timeline-legend__link">2028</a>
                        </li>
                    </ul>
                </toujou-timeline-legend>

                <div class="timeline__container" role="list">

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2023">2023</h2>
                        <timeline-card class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">Title one</h3>
                                <h4 class="timeline-card__subtitle">12 november</h4>
                                <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="#" class="timeline-card__button">
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Home
                                </a>
                            </div>
                        </timeline-card>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <div class="timeline-card">
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">Title without year</h3>
                                <h4 class="timeline-card__subtitle">14 Januar</h4>
                                <p class="timeline-card__text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2024">2024</h2>
                        <div class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">Title two</h3>
                                <h4 class="timeline-card__subtitle">Subtitle two</h4>
                                <p class="timeline-card__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" class="timeline-card__button">
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Home
                                </a>
                            </div>
                        </div>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2025">2025</h2>
                        <div class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">Title for 2025</h3>
                                <h4 class="timeline-card__subtitle">Some subtitle</h4>
                                <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" class="timeline-card__button">
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Home
                                </a>
                            </div>
                        </div>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2026">2026</h2>
                        <div class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">title for 2026</h3>
                                <h4 class="timeline-card__subtitle">nice subtitle</h4>
                                <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2027">2027</h2>
                        <div class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">Some title for 2027</h3>
                                <h4 class="timeline-card__subtitle">crazy subtitle</h4>
                                <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </toujou-timeline-item>

                    <toujou-timeline-item class="timeline-item" role="listitem">
                        <h2 class="timeline-item__year" id="timeline-3321-year-2028">2028</h2>
                        <div class="timeline-card">
                            <figure class="timeline-card__figure" style="overflow: hidden;">
                                <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                            </figure>
                            <div class="timeline-card__bottom">
                                <h3 class="timeline-card__title">title for 2028</h3>
                                <h4 class="timeline-card__subtitle">another subtitle</h4>
                                <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </toujou-timeline-item>

                </div>
            </toujou-timeline>
        </main>
    `;
};

export const Timeline = Template.bind({});

Timeline.args = {
    direction: 'vertical',
    elementDesign: 'default',
    showLegend: false,
}
