import{c as o,j as e}from"./index.7a9ec31b.js";const i="/assets/ck-white.a80f7fec.svg",m=({id:r,disabled:t,label:s,value:a,name:l,onChange:c,activeClass:n="ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700 "})=>o("label",{className:`flex items-center ${t?" cursor-not-allowed opacity-50":"cursor-pointer"}`,id:r,children:[e("input",{type:"checkbox",className:"hidden",name:l,checked:a,onChange:c,htmlFor:r,disabled:t}),e("span",{className:`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${a?n+" ring-2 ring-offset-2 dark:ring-offset-slate-800 ":"bg-slate-100 dark:bg-slate-600 dark:border-slate-600"}
        `,children:a&&e("img",{src:i,alt:"",className:"h-[10px] w-[10px] block m-auto"})}),e("span",{className:"text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize",children:s})]});export{m as C};
