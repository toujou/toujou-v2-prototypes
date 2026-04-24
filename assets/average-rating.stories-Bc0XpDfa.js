const g={title:"COMPONENTS/Average Rating",argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},required:!0}}},e=(t,i)=>`
        <div class="average-rating" ${i?"is-test-target":""}>
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
    `,o=t=>`
        ${e(t,!1)}

        <section
            class="chapter"
            background-color="font-light"
            font-color="primary-light"
        >
            ${e(t,!0)}
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
            ${e(t,!1)}
        </section>
    `,a=o.bind({});a.args={showMaxRating:!1};var r,s,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`(args: AverageRatingProps) => {
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
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const c=["AverageRating"];export{a as AverageRating,c as __namedExportsOrder,g as default};
