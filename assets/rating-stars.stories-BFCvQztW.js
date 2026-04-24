const e={title:"COMPONENTS/Rating Stars",argTypes:{rating:{table:{category:"Rating stars",defaultValue:{summary:"4.4"}},name:"Rating value",description:"Set a value for the rating",control:{type:"number",min:0,max:5,step:.1},required:!0},suffix:{table:{category:"Rating stars"},name:"Rating suffix",description:"Set a suffix for the rating"}}},i=t=>`
        <toujou-rating-stars
            class="rating-stars"
            rating-value="${t.rating}"
            rating-total="5"
            rating-suffix="${t.suffix}"
            aria-label="${t.rating} out of 5 stars"
        ></toujou-rating-stars>
    `,a=i.bind({});a.args={rating:4.4,suffix:""};var r,s,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`(args: RatingStarsStoryProps) => {
  return \`
        <toujou-rating-stars
            class="rating-stars"
            rating-value="\${args.rating}"
            rating-total="5"
            rating-suffix="\${args.suffix}"
            aria-label="\${args.rating} out of 5 stars"
        ></toujou-rating-stars>
    \`;
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const o=["RatingStars"];export{a as RatingStars,o as __namedExportsOrder,e as default};
