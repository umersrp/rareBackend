import{j as e,c as d}from"./index.da1c4237.js";const p=({value:s,className:r,showValue:a,striped:t,animate:l})=>e("div",{className:`flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar  ${r} ${t?"stripes":""}
      ${l?"animate-stripes":""}
      `,style:{width:`${s}%`},children:a&&e("span",{className:"text-[10px] text-white font-bold",children:s+"%"})}),f=({title:s,children:r,value:a,backClass:t="rounded-[999px]",className:l="bg-slate-900 dark:bg-slate-900",titleClass:o="text-base font-normal",striped:i,animate:n,showValue:c})=>d("div",{className:"relative",children:[s&&e("span",{className:`block text-slate-500   tracking-[0.01em] mb-2 ${o}`,children:s}),!r&&e("div",{className:`w-full  overflow-hidden bg-opacity-10 progress  ${t}`,children:e(p,{value:a,className:l,striped:i,animate:n,showValue:c})}),r&&e("div",{className:`w-full  overflow-hidden bg-opacity-10 flex progress  ${t}`,children:r})]});export{p as B,f as P};