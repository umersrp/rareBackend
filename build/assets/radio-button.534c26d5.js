import{r as i,j as a,e as s,aj as r}from"./index.a5c50dfb.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\radio-button.jsx";const x=()=>{const[o,d]=i.exports.useState("A"),[u,t]=i.exports.useState("C"),[v,b]=i.exports.useState("primary-500"),[n,N]=i.exports.useState("Orange"),c=e=>{d(e.target.value)},m=e=>{t(e.target.value)},f=e=>{b(e.target.value)},g=e=>{N(e.target.value)},h=[{value:"Orange",label:"Orange"},{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"}];return a("div",{className:"space-y-5",children:[a(s,{title:"Basic Radio Buttons",children:a("div",{className:"flex flex-wrap space-xy-5",children:[a(r,{label:"Checked",name:"x",value:"A",checked:o==="A",onChange:c},void 0,!1,{fileName:l,lineNumber:73,columnNumber:11},void 0),a(r,{label:"UnChecked",name:"x",value:"B",checked:o==="B",onChange:c},void 0,!1,{fileName:l,lineNumber:80,columnNumber:11},void 0),a(r,{label:"Checked disabled",disabled:!0,name:"x2",value:"C",checked:u==="C",onChange:m},void 0,!1,{fileName:l,lineNumber:87,columnNumber:11},void 0),a(r,{label:"UnChecked disabled",name:"x2",disabled:!0,value:"D",checked:u==="D",onChange:m},void 0,!1,{fileName:l,lineNumber:95,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:72,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:71,columnNumber:7},void 0),a(s,{title:"Theme Color",children:a("div",{className:"flex flex-wrap space-xy-5",children:[{value:"primary-500",label:"Primary",activeClass:"ring-primary-500 border-primary-500"},{value:"secondary-500",label:"Secondary",activeClass:"ring-secondary-500 border-secondary-500"},{value:"success-500",label:"Success",activeClass:"ring-success-500 border-success-500"},{value:"danger-500",label:"Danger",activeClass:"ring-danger-500 border-danger-500"},{value:"warning-500",label:"Warning",activeClass:"ring-warning-500 border-warning-500"},{value:"info-500",label:"Info",activeClass:"ring-info-500 border-info-500"}].map(e=>a(r,{label:e.label,name:"color",value:e.value,checked:v===e.value,onChange:f,activeClass:e.activeClass},void 0,!1,{fileName:l,lineNumber:108,columnNumber:13},void 0))},void 0,!1,{fileName:l,lineNumber:106,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:105,columnNumber:7},void 0),a(s,{title:"Radio Group Options Array",children:[a("div",{className:"flex flex-wrap space-xy-5",children:h.map(e=>a(r,{label:e.label,name:"option",value:e.value,checked:n===e.value,onChange:g},void 0,!1,{fileName:l,lineNumber:123,columnNumber:13},void 0))},void 0,!1,{fileName:l,lineNumber:121,columnNumber:9},void 0),n&&a("div",{className:"mt-3",children:[a("span",{className:"text-sm text-gray-500",children:"Selected Option: "},void 0,!1,{fileName:l,lineNumber:134,columnNumber:13},void 0),a("span",{className:"text-sm text-gray-700",children:n},void 0,!1,{fileName:l,lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:133,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:120,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:70,columnNumber:5},void 0)};export{x as default};
