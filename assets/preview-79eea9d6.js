import{_ as a}from"./iframe-675b0a40.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-d2aa59fe.js").then(r=>r.aj),["./DocsRenderer-PKQXORMH-d2aa59fe.js","./iframe-675b0a40.js","./index-ab13a269.js","./_commonjsHelpers-725317a4.js","./index-140731bf.js","./index-1b441bc2.js","./index-65ec3394.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};