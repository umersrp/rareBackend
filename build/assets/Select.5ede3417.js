import{c as s,j as e,r as k,I as m}from"./index.75075c2e.js";const G=({label:h,placeholder:r="Select Option",classLabel:y="form-label",className:p="",classGroup:F="",register:w,name:i,readonly:o,value:u,error:a,icon:O,disabled:b,id:x,horizontal:d,validate:t,msgTooltip:v,description:$,onChange:f,options:n,defaultValue:N,size:g,...j})=>(n=n||Array(3).fill("option"),s("div",{className:`fromGroup  ${a?"has-error":""}  ${d?"flex":""}  ${t?"is-valid":""} `,children:[h&&e("label",{htmlFor:x,className:`block capitalize ${y}  ${d?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:h}),s("div",{className:`relative ${d?"flex-1":""}`,children:[i&&s("select",{onChange:f,...w(i),...j,className:`${a?" has-error":" "} form-control py-2  appearance-none ${p}  `,placeholder:r,readOnly:o,disabled:b,id:x,value:u,size:g,defaultValue:N,children:[e("option",{value:"",disabled:!0,children:r}),n.map((l,c)=>e(k.exports.Fragment,{children:l.value&&l.label?e("option",{value:l.value,children:l.label},c):e("option",{value:l,children:l},c)},c))]}),!i&&s("select",{onChange:f,className:`${a?" has-error":" "} form-control py-2 appearance-none ${p}  `,placeholder:r,readOnly:o,disabled:b,id:x,value:u,size:g,defaultValue:N,children:[e("option",{value:"",disabled:!0,children:r}),n.map((l,c)=>e(k.exports.Fragment,{children:l.value&&l.label?e("option",{value:l.value,children:l.label},c):e("option",{value:l,children:l},c)},c))]}),s("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[e("span",{className:" relative -right-2 inline-block text-slate-900 dark:text-slate-300 pointer-events-none",children:e(m,{icon:"heroicons:chevron-down"})}),a&&e("span",{className:"text-danger-500",children:e(m,{icon:"heroicons-outline:information-circle"})}),t&&e("span",{className:"text-success-500",children:e(m,{icon:"bi:check-lg"})})]})]}),a&&e("div",{className:` mt-2 ${v?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:a.message}),t&&e("div",{className:` mt-2 ${v?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:t}),$&&e("span",{className:"input-description",children:$})]}));export{G as S};
