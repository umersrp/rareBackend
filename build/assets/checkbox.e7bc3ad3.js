import{r as a,j as e,e as n}from"./index.b08e1250.js";import{C as s}from"./Checkbox.13827a0e.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\checkbox.jsx";const F=()=>{const[o,C]=a.exports.useState(!1),[c,g]=a.exports.useState(!0),[u,k]=a.exports.useState(!1),[t,p]=a.exports.useState(!0),[d,x]=a.exports.useState(!0),[m,S]=a.exports.useState(!0),[b,y]=a.exports.useState(!0),[v,j]=a.exports.useState(!0),[N,w]=a.exports.useState(!0),[h,O]=a.exports.useState(!0),[i,f]=a.exports.useState([]);return e("div",{className:" space-y-5",children:[e(n,{title:"Checkboxes",children:e("div",{className:"flex flex-wrap space-xy-6",children:[e(s,{label:"Checked",value:o,onChange:()=>C(!o)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:11},void 0),e(s,{label:"UnChecked",value:c,onChange:()=>g(!c)},void 0,!1,{fileName:l,lineNumber:41,columnNumber:11},void 0),e(s,{label:"Checked disabled",disabled:!0,value:u,onChange:()=>k(!u)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:11},void 0),e(s,{label:"UnChecked disabled",disabled:!0,value:t,onChange:()=>p(!t)},void 0,!1,{fileName:l,lineNumber:52,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:35,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:34,columnNumber:7},void 0),e(n,{title:"Color",children:e("div",{className:"flex flex-wrap space-xy-6",children:[e(s,{label:"Primary",value:d,activeClass:"ring-primary-500 bg-primary-500",onChange:()=>x(!d)},void 0,!1,{fileName:l,lineNumber:62,columnNumber:11},void 0),e(s,{label:"Secondary",value:m,activeClass:"ring-secondary-500 bg-secondary-500",onChange:()=>S(!m)},void 0,!1,{fileName:l,lineNumber:68,columnNumber:11},void 0),e(s,{label:"Success",value:b,activeClass:"ring-success-500 bg-success-500",onChange:()=>y(!b)},void 0,!1,{fileName:l,lineNumber:74,columnNumber:11},void 0),e(s,{label:"Danger",value:v,activeClass:"ring-danger-500 bg-danger-500",onChange:()=>j(!v)},void 0,!1,{fileName:l,lineNumber:80,columnNumber:11},void 0),e(s,{label:"Warning",value:N,activeClass:"ring-warning-500 bg-warning-500",onChange:()=>w(!N)},void 0,!1,{fileName:l,lineNumber:86,columnNumber:11},void 0),e(s,{label:"Info",value:h,activeClass:"ring-info-500 bg-info-500",onChange:()=>O(!h)},void 0,!1,{fileName:l,lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:61,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:60,columnNumber:7},void 0),e(n,{title:"Using Options Array",children:e("div",{className:" space-y-4",children:[[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"banana",label:"Banana"}].map((r,U)=>e(s,{name:"jorina",label:r.label,value:i.includes(r.value),onChange:()=>{i.includes(r.value)?f(i.filter(D=>D!==r.value)):f([...i,r.value])}},U,!1,{fileName:l,lineNumber:103,columnNumber:13},void 0)),i.length>0&&e("div",{className:"text-slate-900 dark:text-white ",children:["Selected: [",i.join(", "),"]"]},void 0,!0,{fileName:l,lineNumber:118,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:101,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:100,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:33,columnNumber:5},void 0)};export{F as default};
