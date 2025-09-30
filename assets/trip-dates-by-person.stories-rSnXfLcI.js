import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-D_Kao2mr.js";import"./iframe-B7QF7yTA.js";import"./preload-helper-C1FmrZbK.js";function l(e){const r={h1:"h1",p:"p",...i(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(r.h1,{id:"tripdates-by-person",children:"Tripdates by person"}),`
`,a.jsx(r.p,{children:"Content element: Trip / Tripdates by person"})]})}function u(e={}){const{wrapper:r}={...i(),...e.components};return r?a.jsx(r,{...e,children:a.jsx(l,{...e})}):l(e)}const m={title:"COMPONENTS/Tourism/Trip Dates By Person",parameters:{docs:{page:u}},tags:["autodocs"]};function s(e){return`
        <toujou-departure class="departure" role="row" aria-rowindex="2">
            <p class="departure__cell departure__title" role="cell" aria-colindex="1">${e.tripName}</p>
            
                      
            <div class="departure__infos">
                <p class="departure__cell departure__info" role="cell" aria-colindex="2">
                    <span class="departure__info-label">${e.country.label}</span>
                    <span class="departure__info-value">${e.country.value}</span>
                </p>  
            
                <p class="departure__cell departure__info" role="cell" aria-colindex="3">
                    <span class="departure__info-label">${e.date.label}</span>
                    <time class="departure__info-value" role="cell" datetime="${e.date.value}">${e.date.value}</time>
                </p> 
                
                <p class="departure__cell departure__info" role="cell" aria-colindex="5">
                    <span class="departure__info-label">${e.price.label}</span>
                    <time class="departure__info-value" role="cell" datetime="${e.date.value}">${e.price.value}</time>
                </p>
            </div>
             
            <p class="departure__cell departure__status" role="cell" aria-colindex="4">
                <span class="departure__status-text departure__status-text--${e.status.type}">${e.status.text}</span>
                ${e.status.message?`
                    <span class="departure__status-info">${e.status.message}</span>
                `:""}
            </p>
            
            <div class="departure__cell departure__cta" role="cell" aria-colindex="6">
                <button class="button departure__cta-button" button-size="small">Anfragen</button>
            </div>
            
            ${e.footnote?`
                <p class="additional-info" no-margins>
                    <toujou-icon class="icon" icon-color="font" icon-size="m" icon-name="campaign"></toujou-icon>
                    ${e.footnote}
                </p>
            `:""}
        </toujou-departure>
    `}const p=()=>`
        <main>
            <toujou-departures class="departures departures-by-person" role="table" aria-label="Departure Dates">
                <div class="departures__header-group" role="rowgroup">
                    <toujou-departures-header role="row" class="departures-header">
                        <div role="columnheader" aria-colindex="1">
                            <span class="departures-header__text departures-header__text--appointment">Reise</span>
                        </div>
                        <div class="departures-header__prices">
                            <div role="columnheader" aria-colindex="2">
                                <span class="departures-header__text"><span class="departures-header__note">Land</span></span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="3">
                                <span class="departures-header__text departures-header__text--status departures-header__text">Termin</span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="5">
                                <span class="departures-header__text departures-header__text--action departures-header__text">Reisepreis</span>
                            </div>
                        </div>
                        
                        <div role="columnheader" aria-colindex="4">
                            <span class="departures-header__text departures-header__text--action departures-header__text">Verfügbarkeit</span>
                        </div>
                        
                        <div role="columnheader" aria-colindex="6">
                            <span class="departures-header__text departures-header__text--action departures-header__text--hidden">Action</span>
                        </div>
                    </toujou-departures-header>
                </div>
                
                <div role="rowgroup" class="departures__dates">
                    ${s({tripName:"Trip A",country:{value:"Portugal",label:"Country"},date:{value:"01.02. - 15.02.2025",label:"Date"},status:{text:"Buchbar",type:"success",message:"Garantiert - nur wenig Plätze"},price:{value:"64€",label:"Price"}})}
                    
                    ${s({tripName:"Trip B",country:{value:"Spain",label:"Country"},date:{value:"12.02. - 20.02.2025",label:"Date"},status:{text:"Buchbar",type:"success",message:"Garantiert - nur wenig Plätze"},price:{value:"124€",label:"Price"}})}
                    
                    ${s({tripName:"Trip C",country:{value:"France",label:"Country"},date:{value:"01.03. - 15.03.2025",label:"Date"},status:{text:"Auf Anfrage",type:"warning",message:"Warteliste"},price:{value:"124€",label:"Price"}})}
                </div>
            </toujou-departures>
        </main>
    `,t=p.bind({});var d,n,o;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return \`
        <main>
            <toujou-departures class="departures departures-by-person" role="table" aria-label="Departure Dates">
                <div class="departures__header-group" role="rowgroup">
                    <toujou-departures-header role="row" class="departures-header">
                        <div role="columnheader" aria-colindex="1">
                            <span class="departures-header__text departures-header__text--appointment">Reise</span>
                        </div>
                        <div class="departures-header__prices">
                            <div role="columnheader" aria-colindex="2">
                                <span class="departures-header__text"><span class="departures-header__note">Land</span></span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="3">
                                <span class="departures-header__text departures-header__text--status departures-header__text">Termin</span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="5">
                                <span class="departures-header__text departures-header__text--action departures-header__text">Reisepreis</span>
                            </div>
                        </div>
                        
                        <div role="columnheader" aria-colindex="4">
                            <span class="departures-header__text departures-header__text--action departures-header__text">Verfügbarkeit</span>
                        </div>
                        
                        <div role="columnheader" aria-colindex="6">
                            <span class="departures-header__text departures-header__text--action departures-header__text--hidden">Action</span>
                        </div>
                    </toujou-departures-header>
                </div>
                
                <div role="rowgroup" class="departures__dates">
                    \${renderDepartureByPerson({
    tripName: 'Trip A',
    country: {
      value: 'Portugal',
      label: 'Country'
    },
    date: {
      value: '01.02. - 15.02.2025',
      label: 'Date'
    },
    status: {
      text: 'Buchbar',
      type: 'success',
      message: 'Garantiert - nur wenig Plätze'
    },
    price: {
      value: '64€',
      label: 'Price'
    }
  })}
                    
                    \${renderDepartureByPerson({
    tripName: 'Trip B',
    country: {
      value: 'Spain',
      label: 'Country'
    },
    date: {
      value: '12.02. - 20.02.2025',
      label: 'Date'
    },
    status: {
      text: 'Buchbar',
      type: 'success',
      message: 'Garantiert - nur wenig Plätze'
    },
    price: {
      value: '124€',
      label: 'Price'
    }
  })}
                    
                    \${renderDepartureByPerson({
    tripName: 'Trip C',
    country: {
      value: 'France',
      label: 'Country'
    },
    date: {
      value: '01.03. - 15.03.2025',
      label: 'Date'
    },
    status: {
      text: 'Auf Anfrage',
      type: 'warning',
      message: 'Warteliste'
    },
    price: {
      value: '124€',
      label: 'Price'
    }
  })}
                </div>
            </toujou-departures>
        </main>
    \`;
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const v=["TripdatesByPerson"];export{t as TripdatesByPerson,v as __namedExportsOrder,m as default};
