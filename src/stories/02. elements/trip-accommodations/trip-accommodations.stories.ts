import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import tripAccommodationsDocs from './trip-accommodations.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Accommodations',
    parameters: {
        docs: {
            page: tripAccommodationsDocs,
        },
    },
    argTypes: {
    },
    tags: ['autodocs']
} satisfies Meta;

interface AccommodationOption {
    roomCount: string;
    rating: number;
    linkText: string;
}

function renderAccommodationOptions(options: AccommodationOption) {
    return `
        <ul class="separated-list trip-accommodations__options" list-spacing="wide">
            <li class="separated-list__item trip-accommodations__option">
                <span class="trip-accommodations__option-label">Rooms:</span>
                <span class="trip-accommodations__option-value">${options.roomCount}</span>
            </li>
            
            <li class="separated-list__item trip-accommodations__option">
                <span class="trip-accommodations__option-label">Category:</span>
                <span class="trip-accommodations__option-value">
                    <toujou-rating-stars
                        class="rating-stars"
                        rating-entity="★"
                        rating-total="5"
                        rating-value="${options.rating}"
                        rating-entity-size="normal"
                    ></toujou-rating-stars>
                </span>
            </li>
            
            <li class="separated-list__item trip-accommodations__option">
                <span class="trip-accommodations__option-label">Website:</span>
                <span class="trip-accommodations__option-value">
                    <a href="#" class="trip-accommodations__option-link">${options.linkText}</a>
                </span>
            </li>
        </ul>
    `;
}

const Template = () => {
    return `
        <main>
            <toujou-trip-accommodations class="trip-accommodations">
                <toujou-details-accordion class="details-accordion" is-trip-accommodations>
                    <toujou-details id="details-1" class="details" element-design="default" is-open>
                        <div class="trip-accommodations__summary" slot="summary">
                            <h3 class="details__title">Accommodation A</h3>
                            <p class="details__subtitle">4 Nights</p>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block" text-block-media-position="beside-left" column-layout="third">
                                <toujou-text-block-column class="text-block-column">
                                    <figure class="text-block__figure">
                                        <img class="text-block__image" src="https://picsum.photos/800/800" alt=""/>
                                    </figure>
                                    <div class="text-block__content">
                                        <h2>Headline</h2>
                                        <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.</p>
                                        <h3>Features</h3>
                                        <p>These are the accommodation features:</p>
                                        <ul class="list">
                                            <li>Swimming pool</li>
                                            <li>Sauna</li>
                                            <li>Restaurant</li>
                                            <li>Parking</li>
                                        </ul>
                                        
                                        ${renderAccommodationOptions({
                                            roomCount: '12',
                                            rating: 4,
                                            linkText: 'Accommodation A',
                                        })}
                                        
                                        <p class="additional-info">
                                            <toujou-icon class="icon" icon-color="font" icon-size="m" icon-name="info"></toujou-icon>
                                            This is some additional information!
                                        </p>
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
    
                    <toujou-details id="details-1" class="details" element-design="default">
                        <div class="trip-accommodations__summary" slot="summary">
                            <h3 class="details__title">Accommodation B</h3>
                            <p class="details__subtitle">2 Nights</p>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block" text-block-media-position="beside-left" column-layout="third">
                                <toujou-text-block-column class="text-block-column">
                                    <figure class="text-block__figure">
                                        <img class="text-block__image" src="https://picsum.photos/800/600" alt=""/>
                                    </figure>
                                    <div class="text-block__content">
                                        <h2>Headline</h2>
                                        <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                        <h3>Features</h3>
                                        <p>These are really, really special accommodation features:</p>
                                        <ul class="list">
                                            <li>Grill</li>
                                            <li>Beach</li>
                                        </ul>
                                        
                                        ${renderAccommodationOptions({
                                            roomCount: '18',
                                            rating: 3.5,
                                            linkText: 'Accommodation B',
                                        })}
                                        
                                        <p class="additional-info">
                                            <toujou-icon class="icon" icon-color="font" icon-size="m" icon-name="info"></toujou-icon>
                                            We have some very interesting secret information for you...
                                        </p>
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
                    
                    <toujou-details id="details-1" class="details" element-design="default">
                        <div class="trip-accommodations__summary" slot="summary">
                            <h3 class="details__title">Accommodation C</h3>
                            <p class="details__subtitle">3 Nights</p>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block" text-block-media-position="beside-left" column-layout="third">
                                <toujou-text-block-column class="text-block-column">
                                    <figure class="text-block__figure">
                                        <img class="text-block__image" src="https://picsum.photos/800/1200" alt=""/>
                                    </figure>
                                    <div class="text-block__content">
                                        <h2>Headline</h2>
                                        <p>Id neque aliquam vestibulum morbi blandit. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                        <h3>Features</h3>
                                        <ul class="list">
                                            <li>Nature</li>
                                            <li>Massage</li>
                                            <li>WI-FI</li>
                                            <li>Pool</li>
                                        </ul>
                                        
                                        ${renderAccommodationOptions({
                                            roomCount: '8',
                                            rating: 4.5,
                                            linkText: 'Accommodation C',
                                        })}
                                        
                                        <p class="additional-info">
                                            <toujou-icon class="icon" icon-color="font" icon-size="m" icon-name="info"></toujou-icon>
                                            This is some additional information!
                                        </p>
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
                </toujou-details-accordion>
            </toujou-trip-accommodations>
        </main>
    `;
};

export const Accommodations = Template.bind({});
