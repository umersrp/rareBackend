import{r as c,j as e,c as a,f as i,aC as o,m as l}from"./index.59da7a86.js";import{B as n}from"./Button.cfa19a06.js";import{T as t}from"./Textarea.b9bc76ec.js";import{R as p}from"./Repeater.a680b160.js";const N=()=>{const[s,r]=c.exports.useState(new Date);return e("div",{children:a(i,{title:"Create new invoice",children:[e("h4",{className:"text-slate-900 dark:text-white text-xl mb-4",children:"#89572935Kh"}),a("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-5",children:[a("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-2 col-span-1 text-slate-900 dark:text-slate-300 text-base font-medium",children:"Recipient info-500"}),a("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Issued Date"}),e(o,{className:"form-control py-2",value:s,onChange:d=>r(d),id:"default-picker"})]}),e(l,{label:"Name",type:"text",placeholder:"Add your name"}),e(l,{label:"Phone",type:"text",placeholder:"Add your phone"}),e(l,{label:"Email",type:"email",placeholder:"Add your email"}),e("div",{className:"lg:col-span-2 col-span-1",children:e(t,{label:"Address",type:"email",placeholder:"address",rows:"2"})})]}),a("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-2 col-span-1 text-slate-900 text-base dark:text-slate-300 font-medium",children:"Owner info-500"}),e(l,{label:"Name",type:"text",placeholder:"Add your name"}),e(l,{label:"Phone",type:"text",placeholder:"Add your phone"}),e("div",{className:"lg:col-span-2 col-span-1",children:e(l,{label:"Email",type:"email",placeholder:"Add your email"})}),e("div",{className:"lg:col-span-2 col-span-1",children:e(t,{label:"Address",type:"email",placeholder:"address",rows:"2"})})]})]}),e("div",{className:"my-6",children:e(p,{})}),e(t,{label:"Additional note",type:"text",rows:"2",placeholder:"Note",className:"lg:w-1/2"}),e("div",{className:"ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse",children:e(n,{text:"Save",className:"btn-dark"})})]})})};export{N as default};
