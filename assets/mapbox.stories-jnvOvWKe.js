import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-w7BWpAKz.js";import"./iframe-CW61GAsd.js";import"./preload-helper-C1FmrZbK.js";function s(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"mapbox",children:"Mapbox"}),`
`,e.jsxs(t.p,{children:["We have created a ",e.jsx(t.code,{children:"toujou-map"})," element, which is a wrapper for a ",e.jsx(t.a,{href:"https://www.mapbox.com/",rel:"nofollow",children:"mapbox"}),' map. This element is used whenever we need to display a map, for instance on the "map with contact" content element']}),`
`,e.jsxs(t.p,{children:["| ⚠️ For the map element to work we need to enter a valid ",e.jsx(t.code,{children:"access-token"}),` (input on the BE's theme module) |
|:--------------------------------------------------------------------------------------------------------|`]}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-map
    class="map"
    center="[11.0762549, 49.4579779]"
    zoom="14"
    map-style="mapbox://styles/mapbox/light-v10"
    interactive
    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
    <toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>
</toujou-map>
`})}),`
`,e.jsx(t.h2,{id:"mapbox-parameters",children:"Mapbox parameters"}),`
`,e.jsxs(t.p,{children:["We can find the mapbox parameters documentation ",e.jsx(t.a,{href:"https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters",rel:"nofollow",children:"here"})]}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.h3,{id:"class-required",children:["class ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["We must add the ",e.jsx(t.code,{children:'class="map"'})," attribute, so the element gets the correct styles"]}),`
`,e.jsx(t.h3,{id:"center",children:"center"}),`
`,e.jsxs(t.p,{children:["We can add a ",e.jsx(t.code,{children:"center"})," attribute to define the map's initial geographical centerpoint. If not specified it will be ",e.jsx(t.code,{children:"[0, 0]"})]}),`
`,e.jsx(t.p,{children:`| ℹ️ Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON |
|:------------------------------------------------------------------------------------------------------------|`}),`
`,e.jsx(t.h3,{id:"zoom",children:"zoom"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"zoom"})," attribute to define the map's initial zoom level. It must be a value between 0 and 22. If not set, it will default to 0."]}),`
`,e.jsx(t.p,{children:`| ℹ️ On toujou the default is 14 |
|:-------------------------------|`}),`
`,e.jsxs(t.h3,{id:"map-style-required",children:["map-style ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["We must add the ",e.jsx(t.code,{children:"map-style"})," attribute with a valid mapbox style link."]}),`
`,e.jsx(t.p,{children:`We can add a link for the style on the theme module's "mapbox custom style" input ("Analytics" tab)`}),`
`,e.jsxs(t.h3,{id:"access-token-required",children:["access-token ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["We must add an ",e.jsx(t.code,{children:"access-token"})," attribute with a valid mapbox token value."]}),`
`,e.jsxs(t.p,{children:["More info about mapbox's access token ",e.jsx(t.a,{href:"https://docs.mapbox.com/help/glossary/access-token/",rel:"nofollow",children:"here"})]})]})}function l(o={}){const{wrapper:t}={...c(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}const x={title:"COMPONENTS/Mapbox",parameters:{docs:{page:l}},argTypes:{zoomLevel:{table:{category:"Maxbox settings",defaultValue:{summary:"14"}},name:"Zoom level",description:"Choose the map's initial zoom level",control:{type:"range",min:0,max:22,step:1},required:!0},style:{table:{category:"Maxbox settings",defaultValue:{summary:"light-v10"}},name:"Map style",description:"Choose the map's style",control:{type:"radio"},options:["light-v10","dark-v10","streets-v11","outdoors-v11","satellite-v9","navigation-day-v1"],required:!0},showMarker:{table:{category:"Maxbox settings"},name:"Show marker",description:"Toggle marker's visibility",control:{type:"boolean"},required:!0}}},m=o=>`
        <toujou-map class="map"
            center="[11.0762549, 49.4579779]"
            zoom="${o.zoomLevel}"
            map-style="mapbox://styles/mapbox/${o.style}"
            interactive
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">

            ${o.showMarker?'<toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>':""}
        </toujou-map>
    `,a=m.bind({});a.args={zoomLevel:14,style:"light-v10",showMarker:!0};var n,r,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: mapboxStoryProps) => {
  return \`
        <toujou-map class="map"
            center="[11.0762549, 49.4579779]"
            zoom="\${args.zoomLevel}"
            map-style="mapbox://styles/mapbox/\${args.style}"
            interactive
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">

            \${args.showMarker ? \`<toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>\` : ''}
        </toujou-map>
    \`;
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["Mapbox"];export{a as Mapbox,j as __namedExportsOrder,x as default};
