import{y as h,ap as p,j as e,C as u,c as s,l,I as g}from"./index.b108767f.js";import{B as i}from"./Button.a838765d.js";const y=()=>{const{register:a,control:n,handleSubmit:m,reset:b,trigger:f,setError:N}=h({defaultValues:{test:[{firstName:"Bill",lastName:"Luo",phone:"123456"}]}}),{fields:r,append:c,remove:d}=p({control:n,name:"test"});return console.log(r,"fields"),e("div",{children:e(u,{title:"Repeating Forms",headerslot:e(i,{text:"Add new",icon:"heroicons-outline:plus",className:"btn-dark",onClick:()=>c()}),children:s("form",{onSubmit:m(o=>console.log(o)),children:[r.map((o,t)=>s("div",{className:"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0",children:[e(l,{label:"First Name",type:"text",id:`name${t}`,placeholder:"First Name",register:a,name:`test[${t}].firstName`}),e(l,{label:"last Name",type:"text",id:`name2${t}`,placeholder:"Last Name",register:a,name:`test[${t}].lastName`}),s("div",{className:"flex justify-between items-end space-x-5",children:[e("div",{className:"flex-1",children:e(l,{label:"Phone",type:"text",id:`name3${t}`,placeholder:"Phone",register:a,name:`test[${t}].phone`})}),e("div",{className:"flex-none relative",children:e("button",{onClick:()=>d(t),type:"button",className:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",children:e(g,{icon:"heroicons-outline:trash"})})})]})]},t)),e("div",{className:"ltr:text-right rtl:text-left",children:e(i,{text:"Submit",className:"btn-dark"})})]})})})};export{y as default};
