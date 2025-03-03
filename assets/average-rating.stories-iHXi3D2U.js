import{T as c}from"./badgeCustomConfig-DUXiHpL4.js";import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(t.h1,{id:"rating-stars",children:"Rating-stars"}),`
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
`})})]})}function p(e={}){const{wrapper:t}={...l(),...e.components};return t?a.jsx(t,{...e,children:a.jsx(s,{...e})}):s(e)}const x={title:"COMPONENTS/Average Rating",parameters:{badges:[c.DONE],docs:{page:p}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},r=(e,t)=>`
        <div class="average-rating" ${t?"is-test-target":""}>
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
        ${r(e,!1)}

        <section
            class="chapter"
            background-color="font-light"
            font-color="primary-light"
        >
            ${r(e,!0)}
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
            ${r(e,!1)}
        </section>
    `,n=h.bind({});n.args={showMaxRating:!1};var i,o,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args: AverageRatingProps) => {
  return \`
        \${averageRatingComponent(args, false)}

        <section
            class="chapter"
            background-color="font-light"
            font-color="primary-light"
        >
            \${averageRatingComponent(args, true)}
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
            \${averageRatingComponent(args, false)}
        </section>
    \`;
}`,...(g=(o=n.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};const f=["AverageRating"];export{n as AverageRating,f as __namedExportsOrder,x as default};
