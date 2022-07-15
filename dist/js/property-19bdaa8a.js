var p=Object.defineProperty,s=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(t,i,r)=>i in t?p(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,n=(t,i)=>{for(var r in i||(i={}))k.call(i,r)&&o(t,r,i[r]);if(e)for(var r of e(i))f.call(i,r)&&o(t,r,i[r]);return t},c=(t,i)=>s(t,d(i));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?c(n({},i),{finisher(r){r.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(r){r.createProperty(i.key,t)}};function m(t){return(i,r)=>r!==void 0?((y,a,l)=>{a.constructor.createProperty(l,y)})(t,i,r):h(t,i)}export{m as e};
