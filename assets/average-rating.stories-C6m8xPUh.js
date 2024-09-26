import{T as l}from"./badgeCustomConfig-oxGPBDYz.js";import{j as t}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as c}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,t.jsx(a.p,{children:"The average-rating element shows the average value of the selected reviews"}),`
`,t.jsx(a.p,{children:"| ⚠️ Note: the templates and partials are mostly inherited from the Reviews Extension"}),`
`,t.jsx(a.h2,{id:"markup-example",children:"Markup Example"}),`
`,t.jsx(a.pre,{children:t.jsx(a.code,{className:"language-html",children:`<div class="average-rating">
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
`})})]})}function p(e={}){const{wrapper:a}={...c(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(s,{...e})}):s(e)}const x={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[l.DONE],docs:{page:p}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},r=e=>`
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
