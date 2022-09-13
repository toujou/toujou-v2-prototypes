import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import mapDocs from './map.docs.mdx';

export default {
    title: 'COMPONENTS/Map',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/16a665e8-5a1e-451f-ac52-717e48e2f4dd/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
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
            defaultValue: ['normal'],
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
            defaultValue: ['normal'],
            required: true,
        },
    }
} as Meta;

interface mapStoryProps {
    direction: any;
    mapAspectRatio: string;
}

const Template: Story<mapStoryProps> = (args: mapStoryProps) => {
    return `
        <toujou-map-contact class="map-contact" direction="${args.direction}" map-aspect-ratio="${args.mapAspectRatio}">
            <div class="map-contact__map-container">
                <img src="https://via.placeholder.com/600x600.png?text=Map" alt="beautiful image" class="map-contact__image">
            </div>
            <div class="map-contact__content">
                <h2 class="map-contact__headline">Wildlife adventures</h2>
                <address class="map-contact__address">
                    Gustav-Weißkopf-Straße 5<br>
                    90768 Fürth<br>
                    <span class="map-contact__label">Tel:</span> <a href="tel:0911 23980870">0911 123456789</a><br>
                    <span class="map-contact__label">E-Mail:</span> <a href="mailto:vkindlein@dfau.de">hello@dfau.de</a>                
                </address>
                <div class="map-contact__socials">
                    <a href="#" class="map-contact__social">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-facebook" icon-size="m"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-instagram" icon-size="m"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-youtube" icon-size="m"></toujou-icon>
                    </a>
                </div>
            </div>
        </toujou-map-contact>
    `;
};

export const Map = Template.bind({});

Map.args = {
    direction: 'normal',
    mapAspectRatio: '1-1',
}

