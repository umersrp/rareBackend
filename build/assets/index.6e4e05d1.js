import{j as e}from"./index.300fc045.js";var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\ProgressBar\\Bar.jsx";const N=({value:r,className:s,showValue:l,striped:a,animate:i})=>e("div",{className:`flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar  ${s} ${a?"stripes":""}
      ${i?"animate-stripes":""}
      `,style:{width:`${r}%`},children:l&&e("span",{className:"text-[10px] text-white font-bold",children:r+"%"},void 0,!1,{fileName:m,lineNumber:16,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:7,columnNumber:5},void 0);var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\ProgressBar\\index.jsx";const f=({title:r,children:s,value:l,backClass:a="rounded-[999px]",className:i="bg-slate-900 dark:bg-slate-900",titleClass:n="text-base font-normal",striped:t,animate:d,showValue:c})=>e("div",{className:"relative",children:[r&&e("span",{className:`block text-slate-500   tracking-[0.01em] mb-2 ${n}`,children:r},void 0,!1,{fileName:o,lineNumber:17,columnNumber:9},void 0),!s&&e("div",{className:`w-full  overflow-hidden bg-opacity-10 progress  ${a}`,children:e(N,{value:l,className:i,striped:t,animate:d,showValue:c},void 0,!1,{fileName:o,lineNumber:29,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:26,columnNumber:11},void 0),s&&e("div",{className:`w-full  overflow-hidden bg-opacity-10 flex progress  ${a}`,children:s},void 0,!1,{fileName:o,lineNumber:42,columnNumber:11},void 0)]},void 0,!0,{fileName:o,lineNumber:15,columnNumber:5},void 0);export{N as B,f as P};
