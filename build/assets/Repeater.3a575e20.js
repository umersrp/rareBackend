import{z as n,ao as d,j as e,l as a,I as u}from"./index.6ea38f67.js";import{B as N}from"./Button.0ca2c0f1.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\utility\\Repeater.jsx";const x=()=>{const{register:m,control:r,handleSubmit:c,reset:b,trigger:f,setError:v}=n({defaultValues:{test:[{firstName:"Bill",lastName:"Luo",phone:"123456"}]}}),{fields:t,append:o,remove:s}=d({control:r,name:"test"});return e("div",{children:e("div",{className:"bg-slate-50 dark:bg-slate-800 -mx-6 px-6 py-6",children:[e("div",{className:"mb-6 text-slate-600 dark:text-slate-300 text-xs font-medium uppercase",children:"Items info-500"},void 0,!1,{fileName:l,lineNumber:24,columnNumber:9},void 0),e("div",{children:[e("form",{children:t.map((p,i)=>e("div",{className:"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0",children:[e(a,{label:"First Name",type:"text",id:`name${i}`,placeholder:"First Name",register:m,name:`test[${i}].firstName`},void 0,!1,{fileName:l,lineNumber:35,columnNumber:17},void 0),e(a,{label:"last Name",type:"text",id:`name2${i}`,placeholder:"Last Name",register:m,name:`test[${i}].lastName`},void 0,!1,{fileName:l,lineNumber:44,columnNumber:17},void 0),e("div",{className:"flex justify-between items-end space-x-5",children:[e("div",{className:"flex-1",children:e(a,{label:"Phone",type:"text",id:`name3${i}`,placeholder:"Phone",register:m,name:`test[${i}].phone`},void 0,!1,{fileName:l,lineNumber:55,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:54,columnNumber:19},void 0),i>0&&e("div",{className:"flex-none relative",children:e("button",{onClick:()=>s(i),type:"button",className:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",children:e(u,{icon:"heroicons-outline:trash"},void 0,!1,{fileName:l,lineNumber:71,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:66,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:53,columnNumber:17},void 0)]},i,!0,{fileName:l,lineNumber:31,columnNumber:15},void 0))},void 0,!1,{fileName:l,lineNumber:29,columnNumber:11},void 0),e("div",{className:"mt-4",children:e(N,{text:"Add new",icon:"heroicons-outline:plus",className:"text-slate-600 p-0 dark:text-slate-300",onClick:()=>o()},void 0,!1,{fileName:l,lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:79,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:28,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:23,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:5},void 0)};export{x as R};
