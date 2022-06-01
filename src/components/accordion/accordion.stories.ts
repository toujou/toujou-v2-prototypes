import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/Accordion',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/154e8bfd-4e6a-48d2-914c-5bafe3af7289/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING]
    },
} as Meta;

const Template = () => {
    return `       
        <toujou-accordion class="accordion accordion--design-default">
            <div class="accordion__item">
                <div id="accordion-panel-4-0"
                     class="accordion__panel"
                     role="button"
                     aria-controls="accordion-content-4-0"
                     data-open="true"
                     data-for="accordion-4">
                    <div class="accordion__info">
                        <h3 class="accordion__title">This is a simple title</h3>
                        <p class="accordion__subtitle"></p>
                    </div>
                    <i class="icon icon--chevron-down accordion__chevron"></i>
                </div>
                <div id="accordion-content-4-0"
                     class="accordion__content"
                     role="region"
                     aria-labelledby="accordion-panel-4-0"
                     aria-hidden="false"
                     aria-expanded="true"
                     data-content="accordion-4">
                    <div class="text-block text-block--media-left text-block--media-beside">
                        <div class="text-block__column">
                            <figure class="text-block__figure">
                                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--16-9">
                            </figure>
                            <div class="text-block__content">
                                <h3>Left aligned H3 headline</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accordion__item">
                <div id="accordion-panel-5-1"
                     class="accordion__panel"
                     role="button"
                     aria-controls="accordion-content-5-1"
                     data-for="accordion-5">
                    <div class="accordion__info">
                        <h3 class="accordion__title">This is the second title, which is very long</h3>
                        <p class="accordion__subtitle">I am a subtitle which complements the title</p>
                    </div>
                    <i class="icon icon--chevron-down accordion__chevron"></i>
                </div>
                <div id="accordion-content-5-1"
                     class="accordion__content" 
                     role="region" 
                     aria-labelledby="accordion-panel-5-1" 
                     aria-hidden="true"
                     aria-expanded="false"
                     data-content="accordion-5" >
                    <div class="textpic textpic--inside textpic--right">
                        <div class="textpic__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accordion__item">
                <div id="accordion-panel-6-2"
                     class="accordion__panel"
                     role="button"
                     aria-controls="accordion-content-6-2"
                     data-for="accordion-6">
                    <div class="accordion__info">
                        <h3 class="accordion__title">I am just another simple title</h3>
                        <ul class="accordion__subtitle accordion__subtitle-list">
                            <li class="accordion__subtitle-list-item">Fruit</li>
                            <li class="accordion__subtitle-list-item">Apple</li>
                            <li class="accordion__subtitle-list-item">Pink Lady</li>
                        </ul>
                    </div>
                    <i class="icon icon--chevron-down accordion__chevron"></i>
                </div>
                <div id="accordion-content-6-2"
                     class="accordion__content"
                     role="region"
                     aria-labelledby="accordion-panel-6-2"
                     aria-hidden="true"
                     aria-expanded="false"
                     data-content="accordion-6">
                    <div class="textpic textpic--inside textpic--right">
                        <div class="textpic__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accordion__item">
                <div id="accordion-panel-7-3"
                     class="accordion__panel"
                     role="button"
                     aria-controls="accordion-content-7-3"
                     data-for="accordion-7">
                    <div class="accordion__info">
                        <h3 class="accordion__title">I'm the last accordion title</h3>
                        <p class="accordion__subtitle"></p>
                    </div>
                    <i class="icon icon--chevron-down accordion__chevron"></i>
                </div>
                <div id="accordion-content-7-3"
                     class="accordion__content"
                     role="region"
                     aria-labelledby="accordion-panel-7-3"
                     aria-hidden="true"
                     aria-expanded="false"
                     data-content="accordion-7">
                    <div class="textpic textpic--inside textpic--right">
                        <div class="textpic__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>

        </toujou-accordion>
    `
};

export const Accordion = Template.bind({});

