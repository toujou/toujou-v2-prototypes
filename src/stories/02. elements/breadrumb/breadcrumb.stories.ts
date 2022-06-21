import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import breadcrumbDocs from './breadcrumb.docs.mdx';

export default {
    title: 'COMPONENTS/Breadcrumb',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: breadcrumbDocs,
        }
    },
} as Meta;

const Template = () => {

    return `       
        <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>
            
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
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
    `
};

export const Breadcrumb = Template.bind({});

