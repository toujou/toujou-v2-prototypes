import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import tripFragmentDocs from './trip-fragment.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Fragment',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: tripFragmentDocs,
        },
    },
    argTypes: {
        hideMap: {
            table: {
                category: "Trip page settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Hide map image',
            description: "Hide the trip map image",
            control: { type: 'boolean' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface TripFragmentProps {
    hideMap: boolean;
}

const Template: StoryFn<TripFragmentProps> = (args: TripFragmentProps) => {
    return `
        <main>
            <div class="fragment" fragment-type="trip">
                <section class="chapter fragment__section">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1 class="fragment__intro-title" type-alignment="center">Die Welt der Pinguine</h1>
                            <p class="fragment__intro-subtitle" type-alignment="center" type-weight="bold">Individual trip subtitle</p>
                            <div class="fragment__intro-description">
                                <p>This is the trip description.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </toujou-text-block-column>
                </section>
            
                <section class="chapter fragment__section" background-color="background">
                    <toujou-fragment-teaser class="fragment-teaser" role="article" ${args.hideMap ? 'single-column' : ''}>
                
                        <div class="fragment-teaser__content">
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column" align-items="bottom">
                                    <toujou-icon class="icon" icon-name="briefcase" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <data class="fragment-teaser__trip-price fragment-teaser__info" value="375.00">
                                            <span class="fragment-teaser__trip-price-prefix">ab</span>
                                            375,00 €
                                            <span class="fragment-teaser__trip-price-suffix">(inkl. Flug)</span>
                                        </data>
                                    </div>
                                </div>
                            </div>

                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column" align-items="bottom">
                                    <toujou-icon class="icon" icon-name="briefcase" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <data class="fragment-teaser__price fragment-teaser__info" value="375.00">
                                            <span class="fragment-teaser__price-prefix">ab</span>
                                            375,00 €
                                            <span class="fragment-teaser__price-suffix">(inkl. Flug)</span>
                                        </data>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="fragment-teaser__block" number-of-columns="2">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon " icon-name="bookmark-filled" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Individual trip</p>
                                    </div>
                                </div>
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon " icon-name="flag" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Code1234</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="fragment-teaser__block" number-of-columns="2">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon " icon-name="calendar-day" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">8 Tage</p>
                                    </div>
                                </div>
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon " icon-name="account" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">2 bis 8 Personen</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon " icon-name="warning" icon-color="warning" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info" type-color="warning">Reise nicht geeignet für menschen mit eingeschränkter Mobilität</p>
                                    </div>
                                </div>
                            </div>
                            
                            <p class="additional-info">
                                <toujou-icon class="icon " icon-name="campaign" icon-color="font" icon-size="m"></toujou-icon>
                                This is some additional information about the trip
                            </p>
                        </div>
                    
                        ${args.hideMap ? '' : `
                            <figure class="fragment-teaser__figure">
                                <img class="fragment-teaser__image" src="https://placehold.co/1200x1200?text=Trip+Map" alt="Trip Map" />
                            </figure>
                        `}
            
                    </toujou-fragment-teaser>
                </section>
            </div>
        </main>
    `;
};

export const Fragment = Template.bind({});

Fragment.args = {
    hideMap: false,
}
