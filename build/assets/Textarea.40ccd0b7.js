import{c as r,j as e,I as f}from"./index.7a9ec31b.js";const j=({label:x,placeholder:n,classLabel:b="form-label",className:i="",classGroup:g="",register:N,name:c,readonly:o,dvalue:v,error:s,icon:w,disabled:m,id:a,horizontal:l,validate:t,msgTooltip:p,description:d,cols:h,row:u=3,onChange:$,...k})=>r("div",{className:`fromGroup  ${s?"has-error":""}  ${l?"flex":""}  ${t?"is-valid":""} `,children:[x&&e("label",{htmlFor:a,className:`block capitalize ${b}  ${l?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:x}),r("div",{className:`relative ${l?"flex-1":""}`,children:[c&&e("textarea",{...N(c),...k,className:`${s?" has-error":" "} form-control py-2 ${i}  `,placeholder:n,readOnly:o,disabled:m,id:a,cols:h,rows:u,onChange:$}),!c&&e("textarea",{className:`${s?" has-error":" "} form-control py-2 ${i}  `,placeholder:n,readOnly:o,disabled:m,id:a,cols:h,rows:u,onChange:$}),r("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[s&&e("span",{className:"text-danger-500",children:e(f,{icon:"heroicons-outline:information-circle"})}),t&&e("span",{className:"text-success-500",children:e(f,{icon:"bi:check-lg"})})]})]}),s&&e("div",{className:` mt-2 ${p?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:s.message}),t&&e("div",{className:` mt-2 ${p?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:t}),d&&e("span",{className:"input-description",children:d})]});export{j as T};
