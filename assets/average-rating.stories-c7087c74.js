import{T as o}from"./badgeCustomConfig-e7a687d5.js";import{j as t}from"./jsx-runtime-689cd42e.js";import{u as l}from"./index-8a890fec.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,t.jsx(e.p,{children:"The average-rating element shows the average value of the selected reviews"}),`
`,t.jsx(e.p,{children:"| ⚠️ Note: the templates and partials are mostly inherited from the Reviews Extension"}),`
`,t.jsx(e.h2,{id:"markup-example",children:"Markup Example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div class="average-rating">
    <h3 class="average-rating__title">This is the average rating header</h3>
    <p class="average-rating__text">This is the average rating content element custom text</p>
    <div class="average-rating__rating">
        <p class="average-rating__rating-text">3.7</p>

        <toujou-rating-stars
            class="rating-stars average-rating__rating-stars"
            rating-total="5"
            rating-value="3.7">
        </toujou-rating-stars>

        <p class="average-rating__count">
            <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                3 Bewertungen
            </a>
        </p>
    </div>
</div>
`})})]})}function c(a={}){const{wrapper:e}={...l(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(s,{...a})}):s(a)}const d={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[o.DONE],docs:{page:c}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},h=a=>`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 ${a.showMaxRating?"/ 5":""}</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>

        <section class="chapter" background-color="font-light" font-color="primary-light">
            <div class="average-rating">
                <h3 class="average-rating__title">This is the average rating header</h3>
                <p class="average-rating__text">This is the average rating content element custom text</p>
                <div class="average-rating__rating">
                    <p class="average-rating__rating-text">3.7 ${a.showMaxRating?"/ 5":""}</p>

                    <toujou-rating-stars
                        class="rating-stars average-rating__rating-stars"
                        rating-total="5"
                        rating-value="3.7">
                    </toujou-rating-stars>

                    <p class="average-rating__count">
                        <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                            3 Bewertungen
                        </a>
                    </p>
                </div>
            </div>
        </section>

        <section class="chapter" has-background-media style="
            --chapter-bg-image-mobile: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-tablet: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-desktop: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-wide: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-original: url(https://picsum.photos/1200/1200);
        "
        min-height="half"
        vertical-position="middle"
        >
            <div class="average-rating">
                <h3 class="average-rating__title">This is the average rating header</h3>
                <p class="average-rating__text">This is the average rating content element custom text</p>
                <div class="average-rating__rating">
                    <p class="average-rating__rating-text">3.7 ${a.showMaxRating?"/ 5":""}</p>

                    <toujou-rating-stars
                        class="rating-stars average-rating__rating-stars"
                        rating-total="5"
                        rating-value="3.7">
                    </toujou-rating-stars>

                    <p class="average-rating__count">
                        <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                            3 Bewertungen
                        </a>
                    </p>
                </div>
            </div>
        </section>
    `,r=h.bind({});r.args={showMaxRating:!1};var i,n,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: AverageRatingProps) => {
  return \`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 \${args.showMaxRating ? '/ 5' : ''}</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>

        <section class="chapter" background-color="font-light" font-color="primary-light">
            <div class="average-rating">
                <h3 class="average-rating__title">This is the average rating header</h3>
                <p class="average-rating__text">This is the average rating content element custom text</p>
                <div class="average-rating__rating">
                    <p class="average-rating__rating-text">3.7 \${args.showMaxRating ? '/ 5' : ''}</p>

                    <toujou-rating-stars
                        class="rating-stars average-rating__rating-stars"
                        rating-total="5"
                        rating-value="3.7">
                    </toujou-rating-stars>

                    <p class="average-rating__count">
                        <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                            3 Bewertungen
                        </a>
                    </p>
                </div>
            </div>
        </section>

        <section class="chapter" has-background-media style="
            --chapter-bg-image-mobile: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-tablet: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-desktop: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-wide: url(https://picsum.photos/1200/1200);
            --chapter-bg-image-original: url(https://picsum.photos/1200/1200);
        "
        min-height="half"
        vertical-position="middle"
        >
            <div class="average-rating">
                <h3 class="average-rating__title">This is the average rating header</h3>
                <p class="average-rating__text">This is the average rating content element custom text</p>
                <div class="average-rating__rating">
                    <p class="average-rating__rating-text">3.7 \${args.showMaxRating ? '/ 5' : ''}</p>

                    <toujou-rating-stars
                        class="rating-stars average-rating__rating-stars"
                        rating-total="5"
                        rating-value="3.7">
                    </toujou-rating-stars>

                    <p class="average-rating__count">
                        <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                            3 Bewertungen
                        </a>
                    </p>
                </div>
            </div>
        </section>
    \`;
}`,...(g=(n=r.parameters)==null?void 0:n.docs)==null?void 0:g.source}}};const x=["AverageRating"];export{r as AverageRating,x as __namedExportsOrder,d as default};
