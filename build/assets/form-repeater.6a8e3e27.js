import{x as N,ao as c,j as e,C as b,k as m,I as f}from"./index.300fc045.js";import{B as t}from"./Button.b50bd9d6.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-repeater.jsx";const F=()=>{const{register:r,control:s,handleSubmit:n,reset:v,trigger:h,setError:p}=N({defaultValues:{test:[{firstName:"Bill",lastName:"Luo",phone:"123456"}]}}),{fields:a,append:d,remove:u}=c({control:s,name:"test"});return console.log(a,"fields"),e("div",{children:e(b,{title:"Repeating Forms",headerslot:e(t,{text:"Add new",icon:"heroicons-outline:plus",className:"btn-dark",onClick:()=>d()},void 0,!1,{fileName:l,lineNumber:27,columnNumber:11},void 0),children:e("form",{onSubmit:n(o=>console.log(o)),children:[a.map((o,i)=>e("div",{className:"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0",children:[e(m,{label:"First Name",type:"text",id:`name${i}`,placeholder:"First Name",register:r,name:`test[${i}].firstName`},void 0,!1,{fileName:l,lineNumber:41,columnNumber:15},void 0),e(m,{label:"last Name",type:"text",id:`name2${i}`,placeholder:"Last Name",register:r,name:`test[${i}].lastName`},void 0,!1,{fileName:l,lineNumber:50,columnNumber:15},void 0),e("div",{className:"flex justify-between items-end space-x-5",children:[e("div",{className:"flex-1",children:e(m,{label:"Phone",type:"text",id:`name3${i}`,placeholder:"Phone",register:r,name:`test[${i}].phone`},void 0,!1,{fileName:l,lineNumber:61,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:60,columnNumber:17},void 0),e("div",{className:"flex-none relative",children:e("button",{onClick:()=>u(i),type:"button",className:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",children:e(f,{icon:"heroicons-outline:trash"},void 0,!1,{fileName:l,lineNumber:76,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:71,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:70,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:59,columnNumber:15},void 0)]},i,!0,{fileName:l,lineNumber:37,columnNumber:13},void 0)),e("div",{className:"ltr:text-right rtl:text-left",children:e(t,{text:"Submit",className:"btn-dark"},void 0,!1,{fileName:l,lineNumber:84,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:83,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:35,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:23,columnNumber:5},void 0)};export{F as default};
