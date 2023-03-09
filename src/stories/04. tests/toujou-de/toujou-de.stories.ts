import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'TESTS/toujou.de',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        layout: 'fullscreen',
    },
} as Meta;

const Template = () => {
    return `
        <header class="header" image-height="default">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="default"
                vertical-position="center"
                horizontal-position="mid"
                content-size="half"
                text-alignment="default">
                <h2 class="header-content__title font--default">medatsu: Die nächste Stufe einfacher Website-Gestaltung</h2>
                <p class="infotext header-content__text">Storytelling in großem Gewand – bildgewaltig und emotional. Für Agenturen und Unternehmen, die eine Vision verfolgen und das auch zeigen wollen. Medien, Content, noch individuellere Designeinstellungen.</p>
                <a href="#" class="button header-content__cta" button-variant="secondary">Jetzt Medatsu kennenlernen</a>
            </div>

        </header>
        
        <main>
            <toujou-text-block class="text-block" text-block-media-position="beside-right">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--4-3">
                        </figure>
                        <div class="text-block__content">
                            <h2>Individuell gestaltet, selbständig verwaltet</h2>
                            <h1>Ihre professionelle Website mit toujou</h1>
                            <p class="infotext">
                                <strong>Starten Sie sofort</strong>:
                                <strong> </strong>Erstellen Sie Ihre Website innerhalb kürzester Zeit. <strong>Bleiben&nbsp;Sie unabhängig</strong>: Aktualisieren Sie Ihre Website jederzeit bequem und schnell.&nbsp;<strong>Werden Sie effizient</strong>: Positionieren Sie Ihre Botschaft dank toujou-Themes auf allen Endgeräten. <strong>Der toujou-Bonus</strong>: <a href="#c1012401">Lassen Sie sich menschlich beraten</a>.
                            </p>
                            <p>
                            <a href="/loesungen/unternehmen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Für Ihr Unternehmen</a>
                            <a href="/loesungen/agenturen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Als Tool für Agenturen</a></p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            
            <section class="chapter chapter--primary">
                <toujou-slider
                    class="slider"
                    aria-label="Toujou slider example"
                    element-design="default"
                    slides-to-show="1"
                    slider-gap="var(--slider-slides-gap)"
                    slider-aspect-ratio="0.5625"
                    slider-type="loop"
                    content-type="teaser"
                    slides-per-move="1"
                    autoplay-interval="6000"
                    slider-padding="0"
                    slider-focus-center="false"
                >
                    <div class="splide slider__slider"
                        id="splide01"
                        role="region"
                        aria-roledescription="carousel"
                    >
                        <div class="splide__arrows">
                            <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Go to last slide" aria-controls="splide01-track">
                                <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                            </button>
                            <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide" aria-controls="splide01-track">
                                <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                            </button>
                        </div>
                    
                        <div class="splide__track slider__track splide__track--loop splide__track--ltr splide__track--draggable" id="splide01-track" aria-live="polite" aria-atomic="true" style="padding-left: 0px; padding-right: 0px;">
                            <ul class="splide__list slider__list" id="splide01-list" role="presentation" style="transform: translateX(-926px);">
                                <li class="splide__slide slider-slide" data-splide-interval="1000" id="splide01" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                    <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                        <div class="teaser__figure">
                                            <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image">
                                        </div>
                                        <div class="teaser__content">
                                            <h3>Nice headline</h3>
                                            <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                        </div> 
                                    </toujou-teaser>
                                </li>
                                <li class="splide__slide slider-slide" data-splide-interval="1000" id="splide02" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                    <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                        <div class="teaser__figure">
                                            <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image">
                                        </div>
                                        <div class="teaser__content">
                                            <h3>Nice headline</h3>
                                            <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                        </div> 
                                    </toujou-teaser>
                                </li>
                                <li class="splide__slide slider-slide" data-splide-interval="1000" id="splide03" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="margin-right: 0px; height: 260.438px;">
                                    <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                        <div class="teaser__figure">
                                            <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image">
                                        </div>
                                        <div class="teaser__content">
                                            <h3>Nice headline</h3>
                                            <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                        </div> 
                                    </toujou-teaser>
                                </li>
                            </ul>
                        </div>      
                    </div>
                
                    <toujou-slider-count class="slider-count">
                        <span class="slider-count__current">1</span>
                        <span class="slider-count__separator">of</span>
                        <span class="slider-count__total">4</span>
                    </toujou-slider-count>
                </toujou-slider>
            </section>
            
            <section class="chapter chapter--light-grey">
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3 text-align="center">toujou - skalierbare Website-Baukasten</h3>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                <toujou-text-block class="text-block" text-block-column-count="2">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3>Left aligned H3 headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3>Left aligned H3 headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center"><a href="#" class="button" button-variant="primary" button-type="default" button-size="normal">Jetzt kostenfreie Demo anfordern</a></p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>
            
            <section class="chapter">
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h2 text-align="center">Für ihre professionelle Website</h2>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-media-grid class="media-grid" media-grid-column-number="1">
                    <toujou-single-media class="single-media">
                        <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                    </toujou-single-media>
                </toujou-media-grid>
                
                <toujou-text-block class="text-block" text-block-column-count="3">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">SEO-Ready</a>
                            </p>
                            <p text-align="center">Sie optimieren jede Seite Ihrer Website für Google und Co. Analyse-Tools der gängigen Suchmaschinen lassen sich in toujou spielend verknüpfen.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">Responsive Design</a>
                            </p>
                            <p text-align="center">Vom Widescreen über Desktop und Tablet bis hin zum Smartphone: Mit toujou ist Ihr Auftritt für alle Endgeräte – und aktuellen Browserversionen – optimiert.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">Cookie-Einstellung</a>
                            </p>
                            <p text-align="center">Für die Cookie-Einstellungen greifen Sie auf die toujou-Settings zurück oder konfigurieren diese extern. So halten Sie Ihre Website DSGVO-konform.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-text-block class="text-block" text-block-column-count="3">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">Mehrsprachigkeit</a>
                            </p>
                            <p text-align="center">Verwalten Sie mehrsprachige Websites innerhalb desselben Backends und übersetzen Sie eine Seite parallel in mehrere Sprachen.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">Individuele Domain</a>
                            </p>
                            <p text-align="center">Bauen Sie Vertrauen mit Ihrer Website auf. Sichern Sie sich Ihre eigene Web-Adresse mit einer .de-Endung, Hosting und SSL-Zertifikat inklusive.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center">
                                <a href="#">Persönlicher Support</a>
                            </p>
                            <p text-align="center">Wir beantworten Ihre Anliegen: mit unserem Ticketsystem, telefonisch, in kostenlosen Schulungen und jederzeit mit Tutorials.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p text-align="center"><a href="#" class="button" button-variant="primary" button-size="normal" button-type="default">Alle Features um Überblick</a></p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3 text-align="center">In 5 Schritten zur neuen toujou-Website</h3>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>

                <toujou-text-block class="text-block" text-block-media-position="beside-left">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--golden">
                        </figure>
                        <div class="text-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3 text-align="center">Was Sie schon immer rund um Ihre Website wissen wollten</h3>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-details-accordion class="details-accordion" single-expand-mode>
                    <toujou-details id="details-1" class="details" is-open>
                        <h3 slot="summary" class="details__title">Warum sollte ich mich für toujou entscheiden?</h3>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <p slot="content">toujou bildet <strong>das beste aus den Welten individuell entwickelter Websites und Baukasten-Formaten</strong> ab: Verlässlich, flexibel, modern, schnell und sicher auf der einen – günstig und leicht bedienbar auf der anderen Seite. Dazu noch bestens ausgestattet für die Barrierefreiheit. Eine Lücke auf dem Markt, die wir unbedingt füllen wollen!</p>
                        <p slot="content">Sie möchten gerne mehr zu den einzelnen Punkten erfahren und wieso diese für eine State-of-the-Art-Website notwendig sind? Kontaktieren Sie uns gerne.</p>
                        <p slot="content">
                            <a href="#" class="button" button-type="border" button-size="small" button-variant="primary">Unser Service-Team</a>
                            <a href="#" class="button" button-type="border" button-size="small" button-variant="primary">Kundenprojekte ansehen</a>
                        </p>
                    </toujou-details>
                    <toujou-details id="details-2" class="details">
                        <h3 slot="summary" class="details__title">Kann ich von einem anderen Anbieter zu toujou wechseln?</h3>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <p slot="content"><strong>Grundsätzlich ja</strong>. Technisch betrachtet gibt es keine Hürden, die wir nicht gemeinsam überwinden. Beachten Sie aber, dass ein Website-Umzug mit »Handarbeit« verbunden sein kann. Texte, Bilder und Videos lassen sich nicht mit einem Fingerschnippen auf ein neues System übertragen.</p>
                        <p slot="content">Für den Übertrag des Contents erhalten Sie alle notwendigen Tools von uns an die Hand. Alternativ nutzen Sie unseren günstigen Publishing-Service.</p>
                        <p slot="content">
                            <a href="#" class="button" button-type="border" button-size="small" button-variant="primary">Publishing-Angebot</a>
                        </p>
                    </toujou-details>
                    <toujou-details id="details-3" class="details">
                        <h3 slot="summary" class="details__title">Brauche ich Programmier- und/oder Webdesignkenntnisse, um mit toujou zu arbeiten?</h3>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <p slot="content"><strong>Nein</strong>. Mit toujou starten Sie dank Baukastenprinzip mit dem Erstellen Ihrer Website ganz ohne Programmierkenntnisse. Für Designfragen müssen Sie lediglich während des <a href="#">toujou-Setups</a> das passende toujou-Theme sowie Schriftart, Farbe und Logo Ihrer Website wählen. Gerne helfen wir auch dabei.</p>
                        <p slot="content">Den Rest, darunter responsives Design für alle Endgeräte, erledigt toujou automatisch für Sie. Individuelle Anpassungen mittels CSS bleiben jederzeit möglich.</p>
                    </toujou-details>
                    <toujou-details id="details-4" class="details">
                        <h3 slot="summary" class="details__title">Ich habe keine Kapazitäten: Kann ich bei toujou meine Website erstellen lassen?</h3>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <p slot="content">Das <strong>toujou-Team unterstützt Sie gerne</strong> beim Erstellen der neuen Website mit dem Publishing-Angebot. Beim Umzug von der alten auf die neue Website übertragen wir von Ihnen zur Verfügung gestellte Medieninhalte, Texte, Metadaten etc.</p>
                        <p slot="content">Sie müssen nichts weiter tun, als sich in der kostenlosen und unverbindlichen <strong>Website-Demo</strong> ein Bild vom Arbeiten mit toujou zu machen. Für die ersten Schritte (<a href="#">Theme-Auswahl</a>, <a href="#">Grundeinstellungen</a> etc.) stehen wir Ihnen jederzeit zur Seite. Gefällt Ihnen, was Sie sehen und <strong>bestellen</strong> Sie verbindlich, kümmern wir uns im Anschluss um den Übertrag und den Launch Ihrer Website.</p>
                        <p slot="content">
                            <a href="#" class="button" button-type="border" button-size="small" button-variant="primary">Demo anfragen</a>
                        </p>
                    </toujou-details>
                    
                </toujou-details-accordion>
            </section>
            
            <section class="chapter chapter--light-grey">
                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image">
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>
            </section>
            
            <section class="chapter chapter--primary">
                <toujou-text-block class="text-block" text-block-media-position="beside-right">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--golden">
                        </figure>
                        <div class="text-block__content">
                            <h3>Wir beraten sie gerne</h3>
                            <p>Sie haben noch Fragen zu Ihrer toujou-Website oder möchten direkt loslegen? Wir stehen Ihnen gerne zur Seite. Sie benötigen Hilfe bei der Darstellung Ihrer Inhalte auf der Website? Wir nehmen Sie gerne an die Hand. In unseren kostenlosen toujou-Schulungen geben wir außerdem Tipps und Tricks zum Arbeiten im Backend.</p>
                            <p><a href="#">0911 2345678</a></p>
                            <p><a href="#">service@toujou.de</a></p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>
            
            <section class="chapter">
                <ul class="card-collection">
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                </figure>
                                <div class="collection-item__categories">
                                    <span class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                        Tutorials
                                    </span>
                                </div>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">11.03.2022</span>
                                    <span class="collection-item__subtitle">Jerôme Grad</span>
                                </p>
                                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    zur Beschreibung
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                </figure>
                                <div class="collection-item__categories">
                                    <span class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                        Tutorials
                                    </span>
                                </div>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">11.03.2022</span>
                                    <span class="collection-item__subtitle">Jerôme Grad</span>
                                </p>
                                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    zur Beschreibung
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="blog" element-design="default" item-orientation="vertical">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                </figure>
                                <div class="collection-item__categories">
                                    <span class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark" icon-size="normal" icon-color="primary-dark"></toujou-icon>
                                        Tutorials
                                    </span>
                                </div>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">11.03.2022</span>
                                    <span class="collection-item__subtitle">Jerôme Grad</span>
                                </p>
                                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    zur Beschreibung
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                </ul>
            </section>
            
        </main>
        
        <footer class="footer">
            <footer-content class="footer-content">
                <footer-column class="footer-column" column-name="logo">
                    <img class="footer__logo" src="https://via.placeholder.com/240x80/cccccc/969696?text=Logo" alt="quote image" />
                </footer-column>
                <footer-column class="footer-column" column-name="service-nav">
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Lösungen</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Preise</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Features</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Service</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Partner</a>
                        </li>
                    </ul>
                </footer-column>
                <footer-column class="footer-column" column-name="footer-nav">
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Blog | Jobs</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Events</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Datenschutz</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Impressum</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__list-link">Kontakt</a>
                        </li>
                    </ul>
                </footer-column>
                <footer-column class="footer-column" column-name="address">
                    <address class="footer__address">
                        <p class="footer__address-title">Ein Service der:</p>
                        <p class="footer__address-text footer__address-text--name">DFAU GmbH</p>
                        <p class="footer__address-text footer__address-text--street">Gustav-Weißkopf-Straße 5</p>
                        <p class="footer__address-text footer__address-text--city">90768 Fürth</p>
                        <p class="footer__address-text footer__address-text--phone">
                            <toujou-icon class="icon" icon-name="telephone" icon-size="ms"></toujou-icon> 
                            Tel: <a class="footer__address-link" href="tel:+1 (291) 264-9318">+1 (291) 264-9318</a>
                        </p>
                        <p class="footer__address-text footer__address-text--fax">
                            <toujou-icon class="icon" icon-name="fax" icon-size="ms"></toujou-icon>
                            Fax: +1 (569) 939-1286
                        </p>
                        <p class="footer__address-text footer__address-text--mail">
                            <toujou-icon class="icon" icon-name="email" icon-size="ms"></toujou-icon>
                            <a class="footer__address-link" href="mailto:cevijakesi@mailinator.com">cevijakesi@mailinator.com</a>
                        </p>
                    </address>
                    <div class="footer__socials">
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l"></toujou-icon>
                        </a>
                        <a href="#" class="footer__socials-link">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l"></toujou-icon>
                        </a>
                    </div>
                </footer-column>
            </footer-content>
        </footer>
    `;
};

export const ToujouHomepage = Template.bind({});


