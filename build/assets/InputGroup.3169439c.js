import{r as F,j as e,al as O,I as f}from"./index.432a31b5.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\InputGroup.jsx";const R=({type:o,label:x,placeholder:s,classLabel:j="form-label",className:a="",classGroup:V="",register:h,name:u,readonly:c,value:_,error:i,icon:L,disabled:N,id:n,horizontal:v,validate:m,isMask:t,msgTooltip:$,description:g,hasicon:G,onChange:d,merged:I,append:b,prepend:p,options:w,onFocus:k,...y})=>{const[r,D]=F.exports.useState(!1),E=()=>{D(!r)};return e("div",{className:`  ${v?"flex":""} 
      ${I?"merged":""}  `,children:[x&&e("label",{htmlFor:n,className:`block capitalize ${j}  ${v?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:x},void 0,!1,{fileName:l,lineNumber:47,columnNumber:9},void 0),e("div",{className:`flex items-stretch inputGroup 
      
        
    ${b?"has-append":""}
    ${p?"has-prepend":""}

    ${i?"is-invalid":""}  ${m?"is-valid":""}
    
   
    ${v?"flex-1":""}
      `,children:[p&&e("span",{className:"flex-none input-group-addon",children:e("div",{className:"input-group-text  h-full prepend-slot",children:p},void 0,!1,{fileName:l,lineNumber:72,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:71,columnNumber:11},void 0),e("div",{className:"flex-1",children:e("div",{className:`relative fromGroup2
          ${i?"has-error":""} 
           ${m?"is-valid":""}
          `,children:[u&&!t&&e("input",{type:o==="password"&&r===!0?"text":o,...h(u),...y,className:`${i?" has-error":" "} input-group-control block w-full focus:outline-none py-2 ${a}  `,placeholder:s,readOnly:c,disabled:N,id:n,onChange:d},void 0,!1,{fileName:l,lineNumber:85,columnNumber:15},void 0),!u&&!t&&e("input",{type:o==="password"&&r===!0?"text":o,className:`input-group-control block w-full focus:outline-none py-2 ${a}`,placeholder:s,readOnly:c,disabled:N,onChange:d,id:n},void 0,!1,{fileName:l,lineNumber:100,columnNumber:15},void 0),u&&t&&e(O,{...h(u),...y,placeholder:s,options:w,className:`${i?" has-error":" "} input-group-control w-full py-2 ${a}  `,onFocus:k,id:n,readOnly:c,disabled:N,onChange:d},void 0,!1,{fileName:l,lineNumber:111,columnNumber:15},void 0),!u&&t&&e(O,{placeholder:s,options:w,className:`${i?" has-error":" "} input-group-control w-full py-2 ${a}  `,onFocus:k,id:n,readOnly:c,disabled:N,onChange:d},void 0,!1,{fileName:l,lineNumber:127,columnNumber:15},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[G&&e("span",{className:"cursor-pointer text-secondary-500",onClick:E,children:[r&&o==="password"&&e(f,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:l,lineNumber:148,columnNumber:21},void 0),!r&&o==="password"&&e(f,{icon:"heroicons-outline:eye-off"},void 0,!1,{fileName:l,lineNumber:151,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:143,columnNumber:17},void 0),i&&e("span",{className:"text-danger-500",children:e(f,{icon:"heroicons-outline:information-circle"},void 0,!1,{fileName:l,lineNumber:158,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:157,columnNumber:17},void 0),m&&e("span",{className:"text-success-500",children:e(f,{icon:"bi:check-lg"},void 0,!1,{fileName:l,lineNumber:163,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:162,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:141,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:78,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:9},void 0),b&&e("span",{className:"flex-none input-group-addon right",children:e("div",{className:"input-group-text  h-full append-slot",children:b},void 0,!1,{fileName:l,lineNumber:172,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:171,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:56,columnNumber:7},void 0),i&&e("div",{className:` mt-2 ${$?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:i.message},void 0,!1,{fileName:l,lineNumber:178,columnNumber:9},void 0),m&&e("div",{className:` mt-2 ${$?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:m},void 0,!1,{fileName:l,lineNumber:190,columnNumber:9},void 0),g&&e("span",{className:"input-description",children:g},void 0,!1,{fileName:l,lineNumber:201,columnNumber:23},void 0)]},void 0,!0,{fileName:l,lineNumber:42,columnNumber:5},void 0)};export{R as I};
