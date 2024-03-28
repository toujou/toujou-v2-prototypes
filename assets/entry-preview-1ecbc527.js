import{d as l}from"./index-356e4a49.js";import{Z as _}from"./lit-element-6fe74b4f.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t,{global:O}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:s,simulateDOMContentLoaded:h}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:y}=O,m=(r,t)=>{let{id:p,component:i}=t;if(!i)throw new Error(`Unable to render story ${p} as the component annotation is missing from the default export`);let n=document.createElement(i);return Object.entries(r).forEach(([d,e])=>{n[d]=e}),n};function M({storyFn:r,kind:t,name:p,showMain:i,showError:n,forceRemount:d},e){let o=r();if(i(),u(o)){(d||!e.querySelector('[id="root-inner"]'))&&(e.innerHTML='<div id="root-inner"></div>');let f=e.querySelector('[id="root-inner"]');_(o,f),s(e)}else if(typeof o=="string")e.innerHTML=o,s(e);else if(o instanceof y){if(e.firstChild===o&&!d)return;e.innerHTML="",e.appendChild(o),h()}else n({title:`Expecting an HTML snippet or DOM node from the story: "${p}" of "${t}".`,description:l`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var a={renderer:"web-components"};export{a as parameters,m as render,M as renderToCanvas};
