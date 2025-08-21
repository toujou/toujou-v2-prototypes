import { StoryFn, Meta } from '@storybook/web-components-vite';

// @ts-ignore
import mapDocs from './map.docs.mdx';

export default {
    title: 'COMPONENTS/Map',
    parameters: {
        docs: {
            page: mapDocs,
        },
    },
    argTypes: {
        direction: {
            table: {
                category: "Map Contact Settings",
                defaultValue: { summary: 'normal' },
            },
            name: 'Direction',
            description: "Set the element's direction",
            options: ['normal', 'reverse'],
            control: { type: 'radio' },
            required: true,
        },
        mapAspectRatio: {
            table: {
                category: "Map Contact Settings",
                defaultValue: { summary: '1-1' },
            },
            name: 'Map aspect ratio',
            description: "Set the map's aspect ration",
            options: ['1-1', '16-9'],
            control: { type: 'radio' },
            required: true,
        },
        elementDesign: {
            table: {
                category: "Map Contact Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element design',
            description: "Set the design for the element",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface mapStoryProps {
    direction: any;
    mapAspectRatio: string;
    elementDesign: string;
}

const mapComponent = (args: mapStoryProps) => {
    return `
        <toujou-map-contact class="map-contact" direction="${args.direction}" map-aspect-ratio="${args.mapAspectRatio}" element-design="${args.elementDesign}">
            <div class="map-contact__map-container">
                <img src="https://via.placeholder.com/600x600.png?text=Map" alt="beautiful image" class="map-contact__image">
            </div>
            <div class="map-contact__content">
                <h2 class="map-contact__headline">Wildlife adventures</h2>
                <address class="map-contact__address">
                    Gustav-Weißkopf-Straße 5<br>
                    90768 Fürth<br>
                    <span class="map-contact__label">Tel:</span> <a href="tel:0911 123456789">0911 123456789</a><br>
                    <span class="map-contact__label">E-Mail:</span> <a href="mailto:hello@dfau.de">hello@dfau.de</a>
                </address>
                <div class="map-contact__socials">
                    <a href="#" class="map-contact__social" aria-label="Facebook account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-facebook" icon-size="l"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social" aria-label="Instagram account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-instagram" icon-size="l"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social" aria-label="Youtube account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-youtube" icon-size="l"></toujou-icon>
                    </a>
                </div>
            </div>
        </toujou-map-contact>
    `;
}

const Template: StoryFn<mapStoryProps> = (args: mapStoryProps) => {
    return `
        <main>
            ${mapComponent(args)}

            <section class="chapter" background-color="primary">
                ${mapComponent(args)}
            </section>
        </main>
    `;
};

export const Map = Template.bind({});

Map.args = {
    direction: 'normal',
    mapAspectRatio: '1-1',
    elementDesign: 'default'
}
