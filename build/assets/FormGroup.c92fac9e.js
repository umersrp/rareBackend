import{c as t,j as e,I as n}from"./index.4113582e.js";const h=({label:a,classLabel:x="form-label",className:m="",error:s,id:d,horizontal:l,validate:c,msgTooltip:r,description:i,children:p})=>t("div",{className:`fromGroup  ${s?"has-error":""}  ${l?"flex":""}  ${c?"is-valid":""} ${m} `,children:[a&&e("label",{htmlFor:d,className:`block capitalize ${x}  ${l?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:a}),t("div",{className:`relative ${l?"flex-1":""}`,children:[p,t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[s&&e("span",{className:"text-danger-500",children:e(n,{icon:"heroicons-outline:information-circle"})}),c&&e("span",{className:"text-success-500",children:e(n,{icon:"bi:check-lg"})})]})]}),s&&e("div",{className:` mt-2 ${r?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:s.message}),c&&e("div",{className:` mt-2 ${r?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:c}),i&&e("span",{className:"input-description",children:i})]});export{h as F};
