const l={title:"COMPONENTS/Countdown",parameters:{},argTypes:{elementDesign:{table:{category:"Countdown Settings",defaultValue:{summary:"default"}},name:"Countdown element design",description:"Set the element design for the countdown element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},hideLabels:{table:{category:"Countdown Settings"},name:"Hide labels",description:"Hide the countdown labels",control:{type:"boolean"},required:!0},hideFinishedDays:{table:{category:"Countdown Settings"},name:"Hide finished days",description:"Hide the days element once it reaches 00",control:{type:"boolean"},required:!0},hideCounterOnFinished:{table:{category:"Countdown Settings"},name:"Hide counter when finished",description:"Hide the counter element once the target date has been reached",control:{type:"boolean"},required:!0}}},s=(o,e,n)=>`
    <h2>${e}</h2>

    <toujou-countdown
        class="countdown"
        target-date="${o}"
        role="timer"
        aria-label="Countdown to ${o}"
        element-design="${n.elementDesign}"
        ${n.hideLabels?"hide-labels":""}
        ${n.hideFinishedDays?"hide-finished-days":""}
        ${n.hideCounterOnFinished?"hide-counter-when-finished":""}
    >
        <div class="countdown__counter" aria-hidden="true">
            <span class="countdown__item" data-unit="days">
                <span class="countdown__value">00</span>
                ${n.hideLabels?"":'<span class="countdown__label">Days</span>'}
            </span>
        
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="hours">
                <span class="countdown__value">00</span>
                ${n.hideLabels?"":'<span class="countdown__label">Hours</span>'}
            </span>
    
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="minutes">
                <span class="countdown__value">00</span>
                ${n.hideLabels?"":'<span class="countdown__label">Minutes</span>'}
            </span>
    
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="seconds">
                <span class="countdown__value">00</span>
                ${n.hideLabels?"":'<span class="countdown__label">Seconds</span>'}
            </span>
        </div>
        
        <div class="countdown__message" role="status">
            <h3>Countdown finished!</h3>
            <p>This is the countdown success message!!!</p>
        </div>
    </toujou-countdown>
    
    <br>
    <br>
   
`,u=o=>{const e=new Date,n=new Date(e);n.setMonth(e.getMonth()+6);const a=new Date(e);a.setHours(e.getHours()+2);const d=new Date(e);return d.setSeconds(e.getSeconds()+5),`
        <main class="main">
            ${s(n.toISOString(),"Six months countdown",o)}
    
            ${s(a.toISOString(),"Two hours countdown",o)}
            
            ${s(d.toISOString(),"Five seconds countdown",o)}
        </main>
    `},t=u.bind({});t.args={elementDesign:"default",hideLabels:!1,hideFinishedDays:!1,hideCounterOnFinished:!1};var i,c,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: CountdownStoryProps) => {
  const now = new Date();
  const sixMonthsFromNow = new Date(now);
  sixMonthsFromNow.setMonth(now.getMonth() + 6);
  const twoHoursFromNow = new Date(now);
  twoHoursFromNow.setHours(now.getHours() + 2);
  const fiveSecondsFromNow = new Date(now);
  fiveSecondsFromNow.setSeconds(now.getSeconds() + 5);
  return \`
        <main class="main">
            \${countdownTemplate(sixMonthsFromNow.toISOString(), 'Six months countdown', args)}
    
            \${countdownTemplate(twoHoursFromNow.toISOString(), 'Two hours countdown', args)}
            
            \${countdownTemplate(fiveSecondsFromNow.toISOString(), 'Five seconds countdown', args)}
        </main>
    \`;
}`,...(r=(c=t.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const w=["Countdown"];export{t as Countdown,w as __namedExportsOrder,l as default};
