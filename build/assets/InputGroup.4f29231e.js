import{r as A,c as a,j as e,am as O,I as h}from"./index.4d3efcf7.js";const H=({type:l,label:N,placeholder:o,classLabel:G="form-label",className:i="",classGroup:B="",register:g,name:t,readonly:p,value:D,error:s,icon:E,disabled:u,id:c,horizontal:m,validate:n,isMask:x,msgTooltip:w,description:v,hasicon:I,onChange:d,merged:j,append:f,prepend:$,options:b,onFocus:y,...k})=>{const[r,S]=A.exports.useState(!1),q=()=>{S(!r)};return a("div",{className:`  ${m?"flex":""} 
      ${j?"merged":""}  `,children:[N&&e("label",{htmlFor:c,className:`block capitalize ${G}  ${m?"flex-0 mr-6 md:w-[100px] w-[60px] break-words":""}`,children:N}),a("div",{className:`flex items-stretch inputGroup 
      
        
    ${f?"has-append":""}
    ${$?"has-prepend":""}

    ${s?"is-invalid":""}  ${n?"is-valid":""}
    
   
    ${m?"flex-1":""}
      `,children:[$&&e("span",{className:"flex-none input-group-addon",children:e("div",{className:"input-group-text  h-full prepend-slot",children:$})}),e("div",{className:"flex-1",children:a("div",{className:`relative fromGroup2
          ${s?"has-error":""} 
           ${n?"is-valid":""}
          `,children:[t&&!x&&e("input",{type:l==="password"&&r===!0?"text":l,...g(t),...k,className:`${s?" has-error":" "} input-group-control block w-full focus:outline-none py-2 ${i}  `,placeholder:o,readOnly:p,disabled:u,id:c,onChange:d}),!t&&!x&&e("input",{type:l==="password"&&r===!0?"text":l,className:`input-group-control block w-full focus:outline-none py-2 ${i}`,placeholder:o,readOnly:p,disabled:u,onChange:d,id:c}),t&&x&&e(O,{...g(t),...k,placeholder:o,options:b,className:`${s?" has-error":" "} input-group-control w-full py-2 ${i}  `,onFocus:y,id:c,readOnly:p,disabled:u,onChange:d}),!t&&x&&e(O,{placeholder:o,options:b,className:`${s?" has-error":" "} input-group-control w-full py-2 ${i}  `,onFocus:y,id:c,readOnly:p,disabled:u,onChange:d}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:[I&&a("span",{className:"cursor-pointer text-secondary-500",onClick:q,children:[r&&l==="password"&&e(h,{icon:"heroicons-outline:eye"}),!r&&l==="password"&&e(h,{icon:"heroicons-outline:eye-off"})]}),s&&e("span",{className:"text-danger-500",children:e(h,{icon:"heroicons-outline:information-circle"})}),n&&e("span",{className:"text-success-500",children:e(h,{icon:"bi:check-lg"})})]})]})}),f&&e("span",{className:"flex-none input-group-addon right",children:e("div",{className:"input-group-text  h-full append-slot",children:f})})]}),s&&e("div",{className:` mt-2 ${w?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"}`,children:s.message}),n&&e("div",{className:` mt-2 ${w?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"}`,children:n}),v&&e("span",{className:"input-description",children:v})]})};export{H as I};
