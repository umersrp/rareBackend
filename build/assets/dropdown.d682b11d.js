import{j as e,c as i,q as a,I as r,P as f,r as w,V as N,f as n,D as t}from"./index.4113582e.js";import{B as l}from"./Button.114985ad.js";const s=({label:g="Dropdown",wrapperClass:b="inline-block",labelClass:h="",children:p,classMenuItems:x="mt-2 w-[220px]",splitIcon:d="heroicons-outline:chevron-down",items:c=[{label:"Action",link:"#"},{label:"Another action",link:"#"},{label:"Something else here",link:"#"}],classItem:u="px-4 py-2"})=>e("div",{className:`relative ${b}`,children:i(a,{as:"div",className:"block w-full",children:[i("div",{className:"split-btngroup flex",children:[e("button",{type:"button",className:`btn flex-1 ${h}`,children:g}),e(a.Button,{className:`flex-0 px-3 ${h}`,children:e(r,{icon:d})})]}),e(f,{as:w.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e(a.Items,{className:`absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100
            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
            ${x}
            `,children:e("div",{children:p||(c==null?void 0:c.map((o,m)=>e(a.Item,{children:({active:v})=>e("div",{className:`${v?"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50":"text-slate-600 dark:text-slate-300"} block     ${o.hasDivider?"border-t border-slate-100 dark:border-slate-700":""}`,children:o.link?e(N,{to:o.link,className:`block ${u}`,children:o.icon?i("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(r,{icon:o.icon})}),e("span",{className:"block text-sm",children:o.label})]}):e("span",{className:"block text-sm",children:o.label})}):e("div",{className:`block cursor-pointer ${u}`,children:o.icon?i("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(r,{icon:o.icon})}),e("span",{className:"block text-sm",children:o.label})]}):e("span",{className:"block text-sm",children:o.label})})})},m)))})})})]})}),I=()=>i("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e(n,{title:"Basic dropdowns",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"btn-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"btn-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"btn-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"btn-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:"btn-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"btn-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Outline Dropdowns",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"btn-outline-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"btn-outline-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"btn-outline-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"btn-outline-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"btn-outline-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:"btn-outline-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"btn-outline-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"btn-outline-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Flat Dropdowns",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"text-primary-500 hover:bg-primary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"text-success-500 hover:bg-success-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"text-info-500 hover:bg-info-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"text-warning-500 hover:bg-warning-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"text-slate-800 hover:bg-slate-800 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"text-slate-600 hover:bg-light hover:bg-opacity-10",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Dropdown Sizes",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Large Button",className:"btn-primary btn-xl",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-2xl"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Default",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:" btn-success btn-sm",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-sm"})})]})}),e(n,{title:"Split Dropdowns",children:i("div",{className:"space-xy-5",children:[e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-primary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-secondary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-success"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-info"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-warning"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-danger"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-light"})]})}),e(n,{title:" Split Outline Dropdowns",children:i("div",{className:"space-xy-5",children:[e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-outline-primary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-outline-secondary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-outline-success"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-outline-info"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-outline-warning"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-outline-danger"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-outline-light"})]})}),e(n,{title:"Dropdown Directions",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%]",label:e(l,{text:"Left align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"w-[220px] top-[110%]",label:e(l,{text:"Right align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"right-unset left-full w-[200px] top-0 ml-3",label:e(l,{text:"Drop-right-top",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"right-full  w-[200px] top-0 ml-3",label:e(l,{text:"Drop-left-left",className:"btn-primary",icon:"heroicons-outline:chevron-left",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Dropdown Directions",children:i("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-full top-[110%]",wrapperClass:"block",label:e(l,{text:"primary",className:"btn-primary block-btn",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(s,{classMenuItems:"left-0  w-full top-[110%]",label:"primary",labelClass:"btn-primary",wrapperClass:"block"}),e(s,{classMenuItems:"left-0 w-full top-[110%]",label:"primary",labelClass:"btn-outline-primary",wrapperClass:"block"})]})})]});export{I as default};
