import{j as e,r as g,I as N}from"./index.322e6ae4.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Select.jsx";const D=({label:d,placeholder:a="Select Option",classLabel:y="form-label",className:t="",classGroup:F="",register:w,name:c,readonly:b,value:v,error:r,icon:O,disabled:f,id:o,horizontal:s,validate:n,msgTooltip:x,description:p,onChange:h,options:u,defaultValue:$,size:k,...j})=>(u=u||Array(3).fill("option"),e("div",{className:`fromGroup  ${r?"has-error":""}  ${s?"flex":""}  ${n?"is-valid":""} `,children:[d&&e("label",{htmlFor:o,className:`block capitalize ${y}  ${s?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:d},void 0,!1,{fileName:l,lineNumber:36,columnNumber:9},void 0),e("div",{className:`relative ${s?"flex-1":""}`,children:[c&&e("select",{onChange:h,...w(c),...j,className:`${r?" has-error":" "} form-control py-2  appearance-none ${t}  `,placeholder:a,readOnly:b,disabled:f,id:o,value:v,size:k,defaultValue:$,children:[e("option",{value:"",disabled:!0,children:a},void 0,!1,{fileName:l,lineNumber:62,columnNumber:13},void 0),u.map((i,m)=>e(g.exports.Fragment,{children:i.value&&i.label?e("option",{value:i.value,children:i.label},m,!1,{fileName:l,lineNumber:68,columnNumber:19},void 0):e("option",{value:i,children:i},m,!1,{fileName:l,lineNumber:72,columnNumber:19},void 0)},m,!1,{fileName:l,lineNumber:66,columnNumber:15},void 0))]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:11},void 0),!c&&e("select",{onChange:h,className:`${r?" has-error":" "} form-control py-2 appearance-none ${t}  `,placeholder:a,readOnly:b,disabled:f,id:o,value:v,size:k,defaultValue:$,children:[e("option",{value:"",disabled:!0,children:a},void 0,!1,{fileName:l,lineNumber:94,columnNumber:13},void 0),u.map((i,m)=>e(g.exports.Fragment,{children:i.value&&i.label?e("option",{value:i.value,children:i.label},m,!1,{fileName:l,lineNumber:100,columnNumber:19},void 0):e("option",{value:i,children:i},m,!1,{fileName:l,lineNumber:104,columnNumber:19},void 0)},m,!1,{fileName:l,lineNumber:98,columnNumber:15},void 0))]},void 0,!0,{fileName:l,lineNumber:81,columnNumber:11},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[e("span",{className:" relative -right-2 inline-block text-slate-900 dark:text-slate-300 pointer-events-none",children:e(N,{icon:"heroicons:chevron-down"},void 0,!1,{fileName:l,lineNumber:116,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:115,columnNumber:11},void 0),r&&e("span",{className:"text-danger-500",children:e(N,{icon:"heroicons-outline:information-circle"},void 0,!1,{fileName:l,lineNumber:120,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:119,columnNumber:13},void 0),n&&e("span",{className:"text-success-500",children:e(N,{icon:"bi:check-lg"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:114,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:45,columnNumber:7},void 0),r&&e("div",{className:` mt-2 ${x?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:r.message},void 0,!1,{fileName:l,lineNumber:132,columnNumber:9},void 0),n&&e("div",{className:` mt-2 ${x?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:n},void 0,!1,{fileName:l,lineNumber:144,columnNumber:9},void 0),p&&e("span",{className:"input-description",children:p},void 0,!1,{fileName:l,lineNumber:155,columnNumber:23},void 0)]},void 0,!0,{fileName:l,lineNumber:30,columnNumber:5},void 0));export{D as S};
