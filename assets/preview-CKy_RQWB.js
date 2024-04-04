function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-1koBRHcR.js","assets/iframe-DNR3cyOF.js","assets/index-CBqU2yxZ.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-Bym-zv4b.js","assets/index-C0WDFGlH.js","assets/index-B_J8iUie.js","assets/_getPrototype-BbLr7HsR.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-DNR3cyOF.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-1koBRHcR.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
