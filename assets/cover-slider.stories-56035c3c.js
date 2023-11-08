import{T as t}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as a}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function r(s){const i=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h2:"h2",h3:"h3",strong:"strong"},a(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"imagecard-cover-slider",children:"Imagecard cover slider"}),`
`,e.jsx(i.p,{children:"The imagecard cover slider show 9 / 16 image cards on a fullwidth scrollable / swipeable slider. It was inspired by the Netflix slider."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"If the cards do not all fit on the page, they will be shown on a slider. Otherwise they will be shown centered on the page."}),`
`,e.jsx(i.li,{children:'Half of the "next" card is visible'}),`
`,e.jsx(i.li,{children:"The slider loops around"}),`
`,e.jsx(i.li,{children:"Slider arrows are shown on desktop when the element is hovered"}),`
`]}),`
`,e.jsx(i.p,{children:"Markup example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<toujou-cover-slider class="cover-slider" aria-label="Toujou cover slider example">
    <div class="splide slider__slider">
        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
            </button>
            <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
            </button>
        </div>

        <div class="splide__track slider__track">
            <ul class="splide__list slider__list">
                <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/402" alt="Nice image">
                    </toujou-single-media>
                </li>
                <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/402" alt="Nice image">
                    </toujou-single-media>
                </li>
                <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/402" alt="Nice image">
                    </toujou-single-media>
                </li>
            </ul>
        </div>
    </div>
</toujou-cover-slider>
`})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"cover-slider__item"})," may also contain a link and / or a title"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
    <a href="#" class="cover-slider__link">
        <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
            <img class="single-media__image cover-slider__image" src="https://picsum.photos/800" alt="Nice image">
        </toujou-single-media>
        <h3 class="cover-slider__title">Bazinga</h3>
    </a>
</li>
`})}),`
`,e.jsx(i.h2,{id:"css-variables",children:"CSS variables"}),`
`,e.jsx(i.p,{children:"There are a couple of CSS variables that can help us customize the element"}),`
`,e.jsx(i.h3,{id:"card-max-width",children:"card max width"}),`
`,e.jsxs(i.p,{children:[`| variable                              | effect                                                                                  | default value |
|---------------------------------------|-----------------------------------------------------------------------------------------|:--------------|
| `,e.jsx(i.code,{children:"--cover-slider-card-max-width"}),": 240; | Set maximal width of the cards to define how many cards are visible. ",e.jsx(i.strong,{children:"In px, no unit"})," | ",e.jsx(i.code,{children:"240"}),`         |
| `,e.jsx(i.code,{children:"--cover-slider-card-gap"}),": 0;         | Set gap between the cards. ",e.jsx(i.strong,{children:"In px, no unit"}),"                                           | ",e.jsx(i.code,{children:"0"}),`           |
| -`,e.jsx(i.code,{children:"-cover-slider-card-height"}),": 160%;   | Proportion for the card (height in relation to the width. ",e.jsx(i.strong,{children:"Percentage"}),"                | ",e.jsx(i.code,{children:"160%"}),"        |"]})]})}function c(s={}){const{wrapper:i}=Object.assign({},a(),s.components);return i?e.jsx(i,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}const v={title:"COMPONENTS/Cover Slider",parameters:{badges:[t.DONE],docs:{page:c},layout:"fullscreen"},argTypes:{elementDesign:{table:{category:"Cover slider settings",defaultValue:{summary:"default"}},name:"Slider design",description:"Set the slider's design color",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0},isSlider:{table:{category:"Cover slider settings",defaultValue:{summary:!0}},name:"Is Slider",description:"It should only be a slider if it contains more items than it can fit on the page. Otherwise it should show the items centered on the page",control:{type:"boolean"},defaultValue:[!0],required:!0}},tags:["autodocs"]},m=s=>`
        <toujou-cover-slider class="cover-slider" aria-label="Toujou cover slider example">
            <div class="splide slider__slider">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>
                
                <div class="splide__track slider__track">
                    <ul class="splide__list slider__list">
                        <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                            <a href="#" class="cover-slider__link">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Bazinga</h3>
                            </a>
                        </li>
                        ${s.isSlider?`
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <a href="#" class="cover-slider__link">
                                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                    </toujou-single-media>
                                </a>
                            </li>
                        `:""}
                        <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                <h3 class="cover-slider__title">Bonanza</h3>
                            </toujou-single-media>
                        </li>
                        ${s.isSlider?`
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${s.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                        `:""}

                    </ul>
                </div>      
            </div>
        </toujou-cover-slider>
    `,l=m.bind({});l.args={elementDesign:"default",isSlider:!0};var d,n,o;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(args: CoverSliderStoryProps) => {
  return \`
        <toujou-cover-slider class="cover-slider" aria-label="Toujou cover slider example">
            <div class="splide slider__slider">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>
                
                <div class="splide__track slider__track">
                    <ul class="splide__list slider__list">
                        <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                            <a href="#" class="cover-slider__link">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Bazinga</h3>
                            </a>
                        </li>
                        \${args.isSlider ? \`
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <a href="#" class="cover-slider__link">
                                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                    </toujou-single-media>
                                </a>
                            </li>
                        \` : ''}
                        <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                <h3 class="cover-slider__title">Bonanza</h3>
                            </toujou-single-media>
                        </li>
                        \${args.isSlider ? \`
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="\${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                        \` : ''}

                    </ul>
                </div>      
            </div>
        </toujou-cover-slider>
    \`;
}`,...(o=(n=l.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const j=["CoverSlider"];export{l as CoverSlider,j as __namedExportsOrder,v as default};
//# sourceMappingURL=cover-slider.stories-56035c3c.js.map
