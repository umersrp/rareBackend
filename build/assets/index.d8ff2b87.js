import{r as p,c as s,j as e,I as o,f as t}from"./index.a4717e99.js";import{P as a,B as l}from"./index.21b29a37.js";import{B as u}from"./Button.39f9dc70.js";const g=()=>{const[r,d]=p.exports.useState(0),c=[{id:1},{id:2},{id:3}],n=()=>{r<c.length-1&&d(r+1)},m=()=>{r>0&&d(r-1)};return s("div",{children:[e("div",{className:"mx-auto flex z-[5] items-center relative justify-center",children:c.map((b,i)=>s("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none",children:[e("div",{className:`   ${r>=i?"bg-blue-500 text-white ring-primary-500 ring-offset-2":"bg-white ring-primary-500 ring-opacity-70  text-primary-500 text-opacity-70"}  icon-box h-12 w-12 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 text-lg font-medium`,children:r<=i?s("span",{children:[" ",i+1]}):e("span",{className:"text-3xl",children:e(o,{icon:"bx:check-double"})})}),e("div",{className:`${r>=i?"bg-primary-500":"bg-[#E0EAFF]"} absolute top-1/2 h-[2px] w-full`}),e("div",{className:"text-sm mt-[10px] leading-[16px] font-medium capitalize text-slate-500-500 text-center"})]},i))}),s("div",{className:"flex justify-between mt-10",children:[e(u,{text:"prev",disabled:r===0,onClick:m}),e(u,{text:"next",disabled:r===c.length-1,onClick:n})]})]})},N=()=>s("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e(t,{title:"Default Examples",children:s("div",{className:"space-y-4",children:[e(a,{value:30}),e(a,{value:80}),e(a,{value:50}),e(a,{value:70})]})}),e(t,{title:"Default Examples",children:s("div",{className:"space-y-4",children:[e(a,{value:30,className:"bg-primary-500"}),e(a,{value:80,className:"bg-danger-500"}),e(a,{value:50,className:"bg-warning-500"}),e(a,{value:70,className:" bg-info-500"})]})}),e(t,{title:"Height Examples",children:s("div",{className:"space-y-4",children:[e(a,{value:30,title:"Progress sm"}),e(a,{value:50,title:"Progress md",backClass:"h-[10px] rounded-[999px]",className:"bg-primary-500"}),e(a,{value:80,title:"Progress xl",backClass:"h-[14px] rounded-[999px]",className:"bg-danger-500"}),e(a,{value:70,title:"Progress xl",backClass:"h-4 rounded-[999px]",className:"bg-warning-500"})]})}),e(t,{title:"Striped Examples",children:s("div",{className:"space-y-6",children:[e(a,{value:30,className:"bg-slate-900 ",striped:!0,backClass:"h-3 rounded-[999px]"})," ",e(a,{value:30,className:"bg-primary-500 ",striped:!0,backClass:"h-3 rounded-[999px]"}),e(a,{value:80,className:"bg-danger-500 ",striped:!0,backClass:"h-3 rounded-[999px]"}),e(a,{value:50,className:"bg-warning-500  ",striped:!0,backClass:"h-3 rounded-[999px]"}),e(a,{value:70,className:" bg-info-500 ",striped:!0,backClass:"h-3 rounded-[999px]"})]})}),e(t,{title:"Striped Examples",children:s("div",{className:"space-y-6",children:[e(a,{value:30,className:"bg-slate-900 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),e(a,{value:60,className:"bg-primary-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),e(a,{value:40,className:"bg-danger-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),e(a,{value:50,className:"bg-warning-500  ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),e(a,{value:70,className:" bg-info-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0})]})}),e(t,{title:"Value Examples",children:s("div",{className:"space-y-6",children:[e(a,{value:30,className:"bg-slate-900 ",showValue:!0,backClass:"h-3 rounded-[999px]"}),e(a,{value:60,className:"bg-primary-500 ",backClass:"h-3 rounded-[999px]",showValue:!0}),e(a,{value:40,className:"bg-danger-500 ",showValue:!0,backClass:"h-3 rounded-[999px]"}),e(a,{value:50,className:"bg-warning-500  ",backClass:"h-3 rounded-[999px]",showValue:!0}),e(a,{value:70,className:" bg-info-500 ",backClass:"h-3 rounded-[999px]",showValue:!0})]})}),e(t,{title:"Multiple Bar Examples",children:s("div",{className:"grid grid-cols-1 gap-10",children:[s(a,{backClass:"h-3 rounded-[999px]",children:[e(l,{value:10,className:"bg-primary-500"}),e(l,{value:20,className:"bg-success-500"}),e(l,{value:20,className:"bg-danger-500"})]}),s(a,{backClass:"h-3 rounded-[999px]",children:[e(l,{value:12,className:"bg-primary-500",showValue:!0}),e(l,{value:25,className:"bg-success-500",showValue:!0}),e(l,{value:25,className:"bg-danger-500",showValue:!0})]}),s(a,{backClass:"h-3 rounded-[999px]",children:[e(l,{value:15,className:"bg-primary-500",striped:!0}),e(l,{value:30,className:"bg-success-500",striped:!0}),e(l,{value:30,className:"bg-danger-500",striped:!0})]}),s(a,{backClass:"h-3 rounded-[999px]",children:[e(l,{value:18,className:"bg-primary-500",showValue:!0,striped:!0}),e(l,{value:33,className:"bg-success-500",showValue:!0,striped:!0}),e(l,{value:33,className:"bg-danger-500",showValue:!0,striped:!0})]})]})}),e(t,{title:"Step Progress Bar Examples",children:e(g,{})})]});export{N as default};
