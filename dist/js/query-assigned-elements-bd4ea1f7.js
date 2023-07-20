/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function d(i){return(e,t)=>t!==void 0?((n,o,l)=>{o.constructor.createProperty(l,n)})(i,e,t):s(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r;((r=window.HTMLSlotElement)===null||r===void 0?void 0:r.prototype.assignedElements)!=null;export{d as e};
//# sourceMappingURL=query-assigned-elements-bd4ea1f7.js.map
