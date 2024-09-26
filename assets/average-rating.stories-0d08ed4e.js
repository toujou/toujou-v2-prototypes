import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-689cd42e.js";import{u as c}from"./index-8a890fec.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(t.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,a.jsx(t.p,{children:"The average-rating element shows the average value of the selected reviews"}),`
`,a.jsx(t.p,{children:"| ⚠️ Note: the templates and partials are mostly inherited from the Reviews Extension"}),`
`,a.jsx(t.h2,{id:"markup-example",children:"Markup Example"}),`
`,a.jsx(t.pre,{children:a.jsx(t.code,{className:"language-html",children:`<div class="average-rating">
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
`})})]})}function p(e={}){const{wrapper:t}={...c(),...e.components};return t?a.jsx(t,{...e,children:a.jsx(s,{...e})}):s(e)}const x={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[l.DONE],docs:{page:p}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},r=e=>`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 ${e.showMaxRating?"/ 5":""}</p>

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
    `,h=e=>`
        ${r(e)}

        <section
            class="chapter"
            background-color="font-light"
            font-color="primary-light"
        >
            ${r(e)}
        </section>

        <section
            class="chapter"
            min-height="half"
            vertical-position="middle"
            has-background-media
            style="
                --chapter-bg-image-mobile: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-tablet: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-desktop: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-wide: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-original: url(https://picsum.photos/1200/1200);
            "
        >
            ${r(e)}
        </section>
    `,n=h.bind({});n.args={showMaxRating:!1};var i,o,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args: AverageRatingProps) => {
  return \`
        \${averageRatingComponent(args)}

        <section
            class="chapter"
            background-color="font-light"
            font-color="primary-light"
        >
            \${averageRatingComponent(args)}
        </section>

        <section
            class="chapter"
            min-height="half"
            vertical-position="middle"
            has-background-media
            style="
                --chapter-bg-image-mobile: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-tablet: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-desktop: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-wide: url(https://picsum.photos/1200/1200);
                --chapter-bg-image-original: url(https://picsum.photos/1200/1200);
            "
        >
            \${averageRatingComponent(args)}
        </section>
    \`;
}`,...(g=(o=n.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};const b=["AverageRating"];export{n as AverageRating,b as __namedExportsOrder,x as default};
