const f={title:"COMPONENTS/Header",parameters:{layout:"fullscreen"},argTypes:{numberOfSlides:{table:{category:"Header Teaser Settings",defaultValue:{summary:"1"}},name:"Number of slides",description:"Set the number of items in the header teaser",options:["1","2","3","4"],control:{type:"select"},required:!0},teaserLayout:{table:{category:"Header Teaser Settings",defaultValue:{summary:"text_media"}},name:"Teaser layout",description:"Set the header teaser layout",options:["text_media","media_text"],control:{type:"select"},required:!0},mediaRatio:{table:{category:"Header Teaser Settings",defaultValue:{summary:"16_9"}},name:"Teaser element media ratio",description:"Set the header teaser media ratio",options:["16_9","1_1","3_2","4_3"],control:{type:"select"},required:!0},elementDesign:{table:{category:"Header Teaser Settings",defaultValue:{summary:"default"}},name:"Teaser element design",description:"Set the header teaser design",options:["default","primary","secondary","inverted"],control:{type:"select"},required:!0},sliderAccentColor:{table:{category:"Header Teaser Settings",defaultValue:{summary:"default"}},name:"header teaser slider accent color",description:"Set the header teaser slider design",options:["default","primary","secondary","inverted"],control:{type:"select"},required:!0}}},c=[{headline:"Einsatzbereit. Individuell. SCHMITZ.",contentText:"Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut.",imgUrl:"https://picsum.photos/id/1015/2500/1600"},{headline:"Zuverlässig im Einsatz",contentText:"Von der Planung bis zur Übergabe begleiten wir Sie persönlich. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut. Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut.",imgUrl:"https://picsum.photos/id/1018/2500/1600"},{headline:"Made in Germany",imgUrl:"https://picsum.photos/id/1039/2500/1600"},{headline:"Service, der bleibt",contentText:"Ersatzteile, Wartung und Schulungen aus einer Hand.",imgUrl:"https://picsum.photos/id/1043/2500/1600"}],s=({imgUrl:e})=>`
        <a href="#" class="header-teaser__media-link">
            <figure class="header-teaser__figure">
                <img class="header-teaser__image" src="${e}" alt="">
                
                <toujou-media-info class="media-info">
                    <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                    </button>
                    <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                    </button>
                    <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                    <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                </toujou-media-info>
            </figure>
        </a>
    `,o=({headline:e,contentText:r})=>`
        <div class="header-teaser__content">
            <h1>${e}</h1>
            ${r?`<p>${r}</p>`:""}
        </div>
    `,m=({headline:e,contentText:r,imgUrl:i,elementDesign:a,teaserLayout:n,mediaRatio:h})=>`
        <article
            class="header-teaser"
            data-element-design="${a}"
            data-teaser-layout="${n}"
            data-media-ratio="${h}"
        >
            ${n==="text_media"?`
                ${o({headline:e,contentText:r})}
                ${s({imgUrl:i})}
            `:`
                ${s({imgUrl:i})}
                ${o({headline:e,contentText:r})}
            `}
        </article>
    `,p=e=>{const r=c[0];return`
        <header
            class="header"
            data-headercontent-teaser-type="single"
            data-media-ratio="${e.mediaRatio}"
        >
            ${m({...r,elementDesign:e.elementDesign,teaserLayout:e.teaserLayout,mediaRatio:e.mediaRatio})}
        </header>
    `},g=e=>{const r=Number(e.numberOfSlides),i=c.slice(0,r);return`
        <header
            class="header headercontent-teaser"
            data-headercontent-teaser-type="slider"
            data-media-ratio="${e.mediaRatio}"
        >
            <toujou-slider
                class="slider"
                content-type="header-teaser"
                aria-label="Toujou slider example"
                element-design="${e.sliderAccentColor}"
                slides-to-show="1"
                slider-type="slide"
                slider-aspect-ratio="auto"
            >
                <div class="splide slider__slider">
                    <div class="splide__arrows slider-controls">
                        <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                        </button>
                        <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                        </button>
                    </div>

                    <div class="splide__track slider__track">
                        <ul class="splide__list slider__list">
                            ${i.map(a=>`
                                    <li class="splide__slide slider__slide" data-splide-interval="1000">
                                        <div class="slider__item" slot="slider-item">
                                            ${m({...a,elementDesign:e.elementDesign,teaserLayout:e.teaserLayout,mediaRatio:e.mediaRatio})}
                                        </div>
                                    </li>
                               `).join("")}
                        </ul>
                    </div>
                </div>
            </toujou-slider>
        </header>
    `},b=e=>Number(e.numberOfSlides)===1?p(e):g(e),t=b.bind({});t.args={numberOfSlides:"1",teaserLayout:"text_media",mediaRatio:"16_9",elementDesign:"default",sliderAccentColor:"default"};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: HeaderTeaserStoryProps) => {
  const count = Number(args.numberOfSlides);
  if (count === 1) {
    return renderSingleArticle(args);
  } else {
    return renderMultipleArticles(args);
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["HeaderTeaser"];export{t as HeaderTeaser,_ as __namedExportsOrder,f as default};
