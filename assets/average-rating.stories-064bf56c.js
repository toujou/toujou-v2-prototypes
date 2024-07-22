import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-689cd42e.js";import{u as o}from"./index-8a890fec.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";function n(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,a.jsx(e.p,{children:"The average-rating element shows the average value of the selected reviews"}),`
`,a.jsx(e.p,{children:"| ⚠️ Note: the templates and partials are mostly inherited from the Reviews Extension"}),`
`,a.jsx(e.h2,{id:"markup-example",children:"Markup Example"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="average-rating">
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
`})})]})}function c(t={}){const{wrapper:e}={...o(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(n,{...t})}):n(t)}const m={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[l.DONE],docs:{page:c}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},v=t=>`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 ${t.showMaxRating?"/ 5":""}</p>

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
    `,r=v.bind({});r.args={showMaxRating:!1};var s,i,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: AverageRatingProps) => {
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
    \`;
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const x=["AverageRating"];export{r as AverageRating,x as __namedExportsOrder,m as default};
