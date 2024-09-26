import{Z as _}from"./lit-element-Coh9zdhf.js";import{d as l}from"./index-DrFu-skq.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t,{simulatePageLoad:s,simulateDOMContentLoaded:u}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var O=Object.defineProperty,T=(r,t)=>{for(var n in t)O(r,n,{get:t[n],enumerable:!0})},h={};T(h,{parameters:()=>c,render:()=>m,renderToCanvas:()=>M});var{Node:L}=y,m=(r,t)=>{let{id:n,component:i}=t;if(!i)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(r).forEach(([p,e])=>{d[p]=e}),d};function M({storyFn:r,kind:t,name:n,showMain:i,showError:d,forceRemount:p},e){let o=r();if(i(),a(o)){(p||!e.querySelector('[id="root-inner"]'))&&(e.innerHTML='<div id="root-inner"></div>');let f=e.querySelector('[id="root-inner"]');_(o,f),s(e)}else if(typeof o=="string")e.innerHTML=o,s(e);else if(o instanceof L){if(e.firstChild===o&&!p)return;e.innerHTML="",e.appendChild(o),u()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${n}" of "${t}".`,description:l`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c={renderer:"web-components"};export{c as parameters,m as render,M as renderToCanvas};
