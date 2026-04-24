const m={title:"COMPONENTS/Mapbox",argTypes:{zoomLevel:{table:{category:"Maxbox settings",defaultValue:{summary:"14"}},name:"Zoom level",description:"Choose the map's initial zoom level",control:{type:"range",min:0,max:22,step:1},required:!0},style:{table:{category:"Maxbox settings",defaultValue:{summary:"light-v10"}},name:"Map style",description:"Choose the map's style",control:{type:"radio"},options:["light-v10","dark-v10","streets-v11","outdoors-v11","satellite-v9","navigation-day-v1"],required:!0},showMarker:{table:{category:"Maxbox settings"},name:"Show marker",description:"Toggle marker's visibility",control:{type:"boolean"},required:!0}}},s=o=>`
        <toujou-map class="map"
            center="[11.0762549, 49.4579779]"
            zoom="${o.zoomLevel}"
            map-style="mapbox://styles/mapbox/${o.style}"
            interactive
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">

            ${o.showMarker?'<toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>':""}
        </toujou-map>
    `,e=s.bind({});e.args={zoomLevel:14,style:"light-v10",showMarker:!0};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: mapboxStoryProps) => {
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const n=["Mapbox"];export{e as Mapbox,n as __namedExportsOrder,m as default};
