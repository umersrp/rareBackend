import{j as e,I as v}from"./index.cdbc3f69.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Textarea.jsx";const j=({label:o,placeholder:c,classLabel:p="form-label",className:n="",classGroup:k="",register:h,name:r,readonly:u,dvalue:g,error:i,icon:w,disabled:t,id:s,horizontal:a,validate:m,msgTooltip:N,description:d,cols:b,row:f=3,onChange:x,...$})=>e("div",{className:`fromGroup  ${i?"has-error":""}  ${a?"flex":""}  ${m?"is-valid":""} `,children:[o&&e("label",{htmlFor:s,className:`block capitalize ${p}  ${a?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:o},void 0,!1,{fileName:l,lineNumber:33,columnNumber:9},void 0),e("div",{className:`relative ${a?"flex-1":""}`,children:[r&&e("textarea",{...h(r),...$,className:`${i?" has-error":" "} form-control py-2 ${n}  `,placeholder:c,readOnly:u,disabled:t,id:s,cols:b,rows:f,onChange:x},void 0,!1,{fileName:l,lineNumber:44,columnNumber:11},void 0),!r&&e("textarea",{className:`${i?" has-error":" "} form-control py-2 ${n}  `,placeholder:c,readOnly:u,disabled:t,id:s,cols:b,rows:f,onChange:x},void 0,!1,{fileName:l,lineNumber:60,columnNumber:11},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[i&&e("span",{className:"text-danger-500",children:e(v,{icon:"heroicons-outline:information-circle"},void 0,!1,{fileName:l,lineNumber:78,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:13},void 0),m&&e("span",{className:"text-success-500",children:e(v,{icon:"bi:check-lg"},void 0,!1,{fileName:l,lineNumber:83,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:82,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:75,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:42,columnNumber:7},void 0),i&&e("div",{className:` mt-2 ${N?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:i.message},void 0,!1,{fileName:l,lineNumber:90,columnNumber:9},void 0),m&&e("div",{className:` mt-2 ${N?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:m},void 0,!1,{fileName:l,lineNumber:102,columnNumber:9},void 0),d&&e("span",{className:"input-description",children:d},void 0,!1,{fileName:l,lineNumber:113,columnNumber:23},void 0)]},void 0,!0,{fileName:l,lineNumber:27,columnNumber:5},void 0);export{j as T};
