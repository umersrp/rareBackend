import{r as a,c,j as e,f as n}from"./index.89e71075.js";import{C as s}from"./Checkbox.e620e1f9.js";const I=()=>{const[r,p]=a.exports.useState(!1),[d,x]=a.exports.useState(!0),[o,f]=a.exports.useState(!1),[i,S]=a.exports.useState(!0),[h,m]=a.exports.useState(!0),[u,y]=a.exports.useState(!0),[C,j]=a.exports.useState(!0),[g,w]=a.exports.useState(!0),[b,N]=a.exports.useState(!0),[v,U]=a.exports.useState(!0),[t,k]=a.exports.useState([]);return c("div",{className:" space-y-5",children:[e(n,{title:"Checkboxes",children:c("div",{className:"flex flex-wrap space-xy-6",children:[e(s,{label:"Checked",value:r,onChange:()=>p(!r)}),e(s,{label:"UnChecked",value:d,onChange:()=>x(!d)}),e(s,{label:"Checked disabled",disabled:!0,value:o,onChange:()=>f(!o)}),e(s,{label:"UnChecked disabled",disabled:!0,value:i,onChange:()=>S(!i)})]})}),e(n,{title:"Color",children:c("div",{className:"flex flex-wrap space-xy-6",children:[e(s,{label:"Primary",value:h,activeClass:"ring-primary-500 bg-primary-500",onChange:()=>m(!h)}),e(s,{label:"Secondary",value:u,activeClass:"ring-secondary-500 bg-secondary-500",onChange:()=>y(!u)}),e(s,{label:"Success",value:C,activeClass:"ring-success-500 bg-success-500",onChange:()=>j(!C)}),e(s,{label:"Danger",value:g,activeClass:"ring-danger-500 bg-danger-500",onChange:()=>w(!g)}),e(s,{label:"Warning",value:b,activeClass:"ring-warning-500 bg-warning-500",onChange:()=>N(!b)}),e(s,{label:"Info",value:v,activeClass:"ring-info-500 bg-info-500",onChange:()=>U(!v)})]})}),e(n,{title:"Using Options Array",children:c("div",{className:" space-y-4",children:[[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"banana",label:"Banana"}].map((l,A)=>e(s,{name:"jorina",label:l.label,value:t.includes(l.value),onChange:()=>{t.includes(l.value)?k(t.filter(O=>O!==l.value)):k([...t,l.value])}},A)),t.length>0&&c("div",{className:"text-slate-900 dark:text-white ",children:["Selected: [",t.join(", "),"]"]})]})})]})};export{I as default};
