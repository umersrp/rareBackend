import{u as c,j as e,F as d,_ as m,k as l,c as s,f as i}from"./index.2430b158.js";import{G as h}from"./group-chart-3.4f85597e.js";import{S as n}from"./SelectMonth.ab6ed4b5.js";import{E as f}from"./ExampleTwo.47866087.js";import{H as u}from"./HomeBredCurbs.a1c1d3af.js";import"./GlobalFilter.ead9d3b6.js";import"./index.esm.bf609f0f.js";const g=({height:t=410})=>{const[a]=c(),r=[{name:"Sales qualified",data:[44,55,57,56,61,58,63,60,66]},{name:"Meeting",data:[76,85,101,98,87,105,91,114,94]},{name:"In negotiation",data:[35,41,36,26,45,48,52,53,41]}],o={chart:{stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},legend:{show:!0,position:"bottom",horizontalAlign:"center",fontSize:"12px",fontFamily:"Inter",offsetY:0,markers:{width:6,height:6,offsetY:0,offsetX:-5,radius:12},itemMargin:{horizontal:18,vertical:0},labels:{colors:a?"#CBD5E1":"#475569"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{style:{colors:a?"#CBD5E1":"#475569",fontFamily:"Inter"}}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{offsetY:-3,style:{colors:a?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{opacity:1},tooltip:{y:{formatter:function(p){return"$ "+p+" thousands"}}},colors:[l.primary,l.info,l.warning],grid:{show:!0,borderColor:a?"#334155":"#E2E8F0",strokeDashArray:10,position:"back"}};return e(d,{children:e(m,{options:o,series:r,type:"bar",height:t})})},b=({height:t=335})=>{const[a]=c(),r=[44,55,30],o={labels:["70% Sent","18% Opend","12% Rejected"],dataLabels:{enabled:!0},colors:[l.success,l.warning,"#A3A1FB"],legend:{position:"bottom",fontSize:"12px",fontFamily:"Inter",fontWeight:400,labels:{colors:a?"#CBD5E1":"#475569"},markers:{width:6,height:6,offsetY:-1,offsetX:-5,radius:12},itemMargin:{horizontal:10,vertical:0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]};return e(d,{children:e(m,{options:o,series:r,type:"pie",height:t})})},x=[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}],D=()=>s("div",{children:[e(u,{title:"Crm"}),s("div",{className:"space-y-5",children:[s("div",{className:"grid grid-cols-12 gap-5",children:[s("div",{className:"lg:col-span-8 col-span-12 space-y-5",children:[e(i,{children:e("div",{className:"grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3",children:e(h,{})})}),s(i,{children:[s("header",{className:"md:flex md:space-y-0 space-y-4",children:[e("h6",{className:"flex-1 text-slate-900 dark:text-white capitalize",children:"Deal distribution by stage"}),e("div",{className:"flex-none",children:e(n,{})})]}),e("div",{className:"legend-ring",children:e(g,{})})]})]}),e("div",{className:"lg:col-span-4 col-span-12 space-y-5",children:s("div",{className:"lg:col-span-4 col-span-12 space-y-5",children:[e(i,{title:"Campaigns",headerslot:e(n,{}),children:e("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700",children:x.map((t,a)=>e("li",{className:"first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase",children:s("div",{className:"flex justify-between",children:[e("span",{children:t.name}),e("span",{children:t.value})]})},a))})}),e(i,{title:"trends calcultation",headerslot:e(n,{}),children:e("div",{className:"legend-ring3",children:e(b,{})})})]})})]}),e(f,{title:"Latest Transaction"})]})]});export{D as default};