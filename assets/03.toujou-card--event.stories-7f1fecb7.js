import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as o}from"./toujou-collection-item.docs-12476081.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const p={title:"COMPONENTS/Collections",parameters:{badges:[s.DONE],docs:{page:o}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},c=i=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="success" chip-border-radius="normal" chip-size="normal">Event geplannt</toujou-chip>
                        </p>  
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">28</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                                <span class="media-date__month">Mai</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                                <span class="media-date__year">2025</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
        
    `,e=c.bind({});e.args={elementDesign:"default"};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="success" chip-border-radius="normal" chip-size="normal">Event geplannt</toujou-chip>
                        </p>  
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">28</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Apr</span>
                                <span class="media-date__month">Mai</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                                <span class="media-date__year">2025</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
        
    \`;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const h=["CardEvent"];export{e as CardEvent,h as __namedExportsOrder,p as default};
//# sourceMappingURL=03.toujou-card--event.stories-7f1fecb7.js.map
