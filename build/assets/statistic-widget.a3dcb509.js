import{u as h,j as e,_ as p,c as s,G as u,C as a}from"./index.50817180.js";import{u as f,G as b}from"./main-user.36113dd3.js";import{G as x}from"./group-chart-3.5f117c36.js";import{G as N}from"./group-chart-4.4bca89e7.js";import{G as k,O as l,P as t,E as d}from"./earning-chart.868fcadd.js";const r=({height:o=200,colors:i=["#0CE7FA","#E2F6FD"]})=>{const[c]=h(),n=[70,30],m={labels:["Complete","Left"],dataLabels:{enabled:!1},colors:[...i],legend:{position:"bottom",fontSize:"12px",fontFamily:"Outfit",fontWeight:400,show:!1},plotOptions:{pie:{donut:{size:"40%",labels:{show:!0,name:{show:!1,fontSize:"14px",fontWeight:"bold",fontFamily:"Inter"},value:{show:!0,fontSize:"16px",fontFamily:"Outfit",color:c?"#cbd5e1":"#0f172a",formatter(g){return`${parseInt(g)}%`}},total:{show:!0,fontSize:"10px",label:"",formatter(){return"70"}}}}}}};return e("div",{children:e(p,{options:m,series:n,type:"donut",height:o})})},y=()=>s("div",{className:" space-y-5",children:[e("div",{className:"grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4",children:e(k,{})}),e("div",{className:"grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4",children:e(u,{})}),e(a,{children:s("div",{className:"grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center",children:[s("div",{className:"flex space-x-4 h-full items-center rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-20 w-20 rounded-full",children:e("img",{src:f,alt:"",className:"w-full h-full"})})}),s("div",{className:"flex-1",children:[s("h4",{className:"text-xl font-medium mb-2",children:[e("span",{className:"block font-light",children:"Good evening,"}),e("span",{className:"block",children:"Mr. Jone Doe"})]}),e("p",{className:"text-sm dark:text-slate-300",children:"Welcome to Dashcode"})]})]}),e(b,{})]})}),e("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3",children:e(x,{})}),e("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3",children:e(N,{})}),s("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3",children:[s(a,{children:[e("span",{className:"block text-slate-500 dark:text-slate-300 text-sm font-medium",children:"Progress"}),e(r,{})]}),s(a,{children:[e("span",{className:"block text-slate-500 dark:text-slate-300 text-sm font-medium",children:"Progress"}),e(r,{colors:["#F1595C","#F9E1E5"]})]}),s(a,{children:[e("span",{className:"block text-slate-500 dark:text-slate-300 text-sm font-medium",children:"Progress"}),e(r,{colors:["#50C793","#E5F3E5"]})]}),s(a,{children:[e("span",{className:"block text-slate-500 dark:text-slate-300 text-sm font-medium",children:"Progress"}),e(r,{colors:["#FA916B","#fcc8b5"]})]})]}),s("div",{className:"grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4",children:[e(l,{className:"bg-white dark:bg-slate-800 rounded p-4"}),e(l,{className:"bg-white dark:bg-slate-800 rounded p-4",barColor:"#F1595C"}),e(l,{className:"bg-white dark:bg-slate-800 rounded p-4",barColor:"#50C793"}),e(t,{className:"bg-white dark:bg-slate-800 rounded p-4"}),e(t,{className:"bg-white dark:bg-slate-800 rounded p-4",color:"#F1595C"})," ",e(t,{className:"bg-white dark:bg-slate-800 rounded p-4",color:"#50C793"})]}),s("div",{className:"grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4",children:[e(d,{className:"bg-white dark:bg-slate-800 rounded py-3 px-4"}),e(d,{className:"bg-white dark:bg-slate-800 rounded py-3 px-4"}),e(d,{className:"bg-white dark:bg-slate-800 rounded py-3 px-4"})]})]});export{y as default};
