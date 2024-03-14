import{j as e,q as t,I as u,O as x,r as w,P as y,e as r,D as i}from"./index.6ea38f67.js";import{B as o}from"./Button.0ca2c0f1.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Split-dropdown.jsx";const a=({label:d="Dropdown",wrapperClass:v="inline-block",labelClass:c="",children:N,classMenuItems:f="mt-2 w-[220px]",splitIcon:h="heroicons-outline:chevron-down",items:m=[{label:"Action",link:"#"},{label:"Another action",link:"#"},{label:"Something else here",link:"#"}],classItem:b="px-4 py-2"})=>e("div",{className:`relative ${v}`,children:e(t,{as:"div",className:"block w-full",children:[e("div",{className:"split-btngroup flex",children:[e("button",{type:"button",className:`btn flex-1 ${c}`,children:d},void 0,!1,{fileName:n,lineNumber:33,columnNumber:11},void 0),e(t.Button,{className:`flex-0 px-3 ${c}`,children:e(u,{icon:h},void 0,!1,{fileName:n,lineNumber:37,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:36,columnNumber:11},void 0)]},void 0,!0,{fileName:n,lineNumber:32,columnNumber:9},void 0),e(x,{as:w.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e(t.Items,{className:`absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100
            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
            ${f}
            `,children:e("div",{children:N||(m==null?void 0:m.map((s,p)=>e(t.Item,{children:({active:g})=>e("div",{className:`${g?"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50":"text-slate-600 dark:text-slate-300"} block     ${s.hasDivider?"border-t border-slate-100 dark:border-slate-700":""}`,children:s.link?e(y,{to:s.link,className:`block ${b}`,children:s.icon?e("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(u,{icon:s.icon},void 0,!1,{fileName:n,lineNumber:81,columnNumber:37},void 0)},void 0,!1,{fileName:n,lineNumber:80,columnNumber:35},void 0),e("span",{className:"block text-sm",children:s.label},void 0,!1,{fileName:n,lineNumber:83,columnNumber:35},void 0)]},void 0,!0,{fileName:n,lineNumber:79,columnNumber:33},void 0):e("span",{className:"block text-sm",children:s.label},void 0,!1,{fileName:n,lineNumber:88,columnNumber:33},void 0)},void 0,!1,{fileName:n,lineNumber:74,columnNumber:29},void 0):e("div",{className:`block cursor-pointer ${b}`,children:s.icon?e("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(u,{icon:s.icon},void 0,!1,{fileName:n,lineNumber:100,columnNumber:37},void 0)},void 0,!1,{fileName:n,lineNumber:99,columnNumber:35},void 0),e("span",{className:"block text-sm",children:s.label},void 0,!1,{fileName:n,lineNumber:102,columnNumber:35},void 0)]},void 0,!0,{fileName:n,lineNumber:98,columnNumber:33},void 0):e("span",{className:"block text-sm",children:s.label},void 0,!1,{fileName:n,lineNumber:107,columnNumber:33},void 0)},void 0,!1,{fileName:n,lineNumber:94,columnNumber:29},void 0)},void 0,!1,{fileName:n,lineNumber:62,columnNumber:25},void 0)},p,!1,{fileName:n,lineNumber:60,columnNumber:21},void 0)))},void 0,!1,{fileName:n,lineNumber:56,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:50,columnNumber:11},void 0)},void 0,!1,{fileName:n,lineNumber:41,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:31,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:30,columnNumber:5},void 0);var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\dropdown.jsx";const M=()=>e("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e(r,{title:"Basic dropdowns",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"primary",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:15,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:12,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"secondary",className:"btn-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:25,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"success",className:"btn-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:38,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"info",className:"btn-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:54,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:51,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"warning",className:"btn-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:67,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:64,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"danger",className:"btn-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:80,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Dark",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:93,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:90,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Light",className:"btn-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:106,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:103,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:11,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:10,columnNumber:7},void 0),e(r,{title:"Outline Dropdowns",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"primary",className:"btn-outline-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:123,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:120,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"secondary",className:"btn-outline-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:136,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:133,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"success",className:"btn-outline-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:149,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:146,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"info",className:"btn-outline-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:162,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:159,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"warning",className:"btn-outline-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:175,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:172,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"danger",className:"btn-outline-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:188,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:185,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Dark",className:"btn-outline-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:201,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:198,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Light",className:"btn-outline-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:214,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:211,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:119,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:118,columnNumber:7},void 0),e(r,{title:"Flat Dropdowns",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"primary",className:"text-primary-500 hover:bg-primary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:231,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:228,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"secondary",className:"text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:244,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:241,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"success",className:"text-success-500 hover:bg-success-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:257,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:254,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"info",className:"text-info-500 hover:bg-info-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:270,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:267,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"warning",className:"text-warning-500 hover:bg-warning-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:283,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:280,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"danger",className:" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:296,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:293,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Dark",className:"text-slate-800 hover:bg-slate-800 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:309,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:306,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Light",className:"text-slate-600 hover:bg-light hover:bg-opacity-10",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:322,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:319,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:227,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:226,columnNumber:7},void 0),e(r,{title:"Dropdown Sizes",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Large Button",className:"btn-primary btn-xl",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-2xl"},void 0,!1,{fileName:l,lineNumber:339,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:336,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"Default",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:352,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:349,columnNumber:11},void 0),e(i,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(o,{text:"success",className:" btn-success btn-sm",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-sm"},void 0,!1,{fileName:l,lineNumber:366,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:363,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:335,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:334,columnNumber:7},void 0),e(r,{title:"Split Dropdowns",children:e("div",{className:"space-xy-5",children:[e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-primary"},void 0,!1,{fileName:l,lineNumber:380,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-secondary"},void 0,!1,{fileName:l,lineNumber:385,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-success"},void 0,!1,{fileName:l,lineNumber:390,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-info"},void 0,!1,{fileName:l,lineNumber:395,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-warning"},void 0,!1,{fileName:l,lineNumber:400,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-danger"},void 0,!1,{fileName:l,lineNumber:405,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-light"},void 0,!1,{fileName:l,lineNumber:410,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:379,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:378,columnNumber:7},void 0),e(r,{title:" Split Outline Dropdowns",children:e("div",{className:"space-xy-5",children:[e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-outline-primary"},void 0,!1,{fileName:l,lineNumber:419,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-outline-secondary"},void 0,!1,{fileName:l,lineNumber:424,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-outline-success"},void 0,!1,{fileName:l,lineNumber:429,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-outline-info"},void 0,!1,{fileName:l,lineNumber:434,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-outline-warning"},void 0,!1,{fileName:l,lineNumber:439,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-outline-danger"},void 0,!1,{fileName:l,lineNumber:444,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-outline-light"},void 0,!1,{fileName:l,lineNumber:449,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:418,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:417,columnNumber:7},void 0),e(r,{title:"Dropdown Directions",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-[220px] top-[110%]",label:e(o,{text:"Left align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:461,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:458,columnNumber:11},void 0),e(i,{classMenuItems:"w-[220px] top-[110%]",label:e(o,{text:"Right align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:474,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:471,columnNumber:11},void 0),e(i,{classMenuItems:"right-unset left-full w-[200px] top-0 ml-3",label:e(o,{text:"Drop-right-top",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:487,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:484,columnNumber:11},void 0),e(i,{classMenuItems:"right-full  w-[200px] top-0 ml-3",label:e(o,{text:"Drop-left-left",className:"btn-primary",icon:"heroicons-outline:chevron-left",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:500,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:497,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:457,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:456,columnNumber:7},void 0),e(r,{title:"Dropdown Directions",children:e("div",{className:"space-xy-5",children:[e(i,{classMenuItems:"left-0  w-full top-[110%]",wrapperClass:"block",label:e(o,{text:"primary",className:"btn-primary block-btn",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:517,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:513,columnNumber:11},void 0),e(a,{classMenuItems:"left-0  w-full top-[110%]",label:"primary",labelClass:"btn-primary",wrapperClass:"block"},void 0,!1,{fileName:l,lineNumber:527,columnNumber:11},void 0),e(a,{classMenuItems:"left-0 w-full top-[110%]",label:"primary",labelClass:"btn-outline-primary",wrapperClass:"block"},void 0,!1,{fileName:l,lineNumber:533,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:512,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:511,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:9,columnNumber:5},void 0);export{M as default};
