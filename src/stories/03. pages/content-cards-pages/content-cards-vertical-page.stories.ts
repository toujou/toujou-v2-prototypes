import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'PAGES/Content Cards',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `
        <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="toujou-icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>
            
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="toujou-icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" >Item Three</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Four</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Five</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
                </li>
            </ol>
        </toujou-breadcrumb>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h1>This is a test page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-content-card-grid class="toujou-content-card-grid">
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        </toujou-content-card-grid>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-content-card-grid class="toujou-content-card-grid">
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        </toujou-content-card-grid>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-content-card-grid class="toujou-content-card-grid">
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>   
        </toujou-content-card-grid>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-content-card-grid class="toujou-content-card-grid">
            <toujou-content-card class="toujou-content-card" href="#" card-variant="default" card-direction="vertical">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/640/640" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>        
        </toujou-content-card-grid>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

    `;
};

export const ContentCardsVertical = Template.bind({});


