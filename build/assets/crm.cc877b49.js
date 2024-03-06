import{u as t,j as e,F as d,_ as c,k as o,e as r}from"./index.be4bdfd6.js";import{G as N}from"./group-chart-3.c4c7bb92.js";import{S as m}from"./SelectMonth.b37f2832.js";import{E as f}from"./ExampleTwo.3b1633c3.js";import{H as b}from"./HomeBredCurbs.15da9a77.js";import"./GlobalFilter.5c77a0d6.js";import"./index.esm.1938e2f1.js";var v="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\chart\\stack-bar.jsx";const p=({height:a=410})=>{const[l]=t(),s=[{name:"Sales qualified",data:[44,55,57,56,61,58,63,60,66]},{name:"Meeting",data:[76,85,101,98,87,105,91,114,94]},{name:"In negotiation",data:[35,41,36,26,45,48,52,53,41]}],n={chart:{stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},legend:{show:!0,position:"bottom",horizontalAlign:"center",fontSize:"12px",fontFamily:"Inter",offsetY:0,markers:{width:6,height:6,offsetY:0,offsetX:-5,radius:12},itemMargin:{horizontal:18,vertical:0},labels:{colors:l?"#CBD5E1":"#475569"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{style:{colors:l?"#CBD5E1":"#475569",fontFamily:"Inter"}}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{offsetY:-3,style:{colors:l?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{opacity:1},tooltip:{y:{formatter:function(u){return"$ "+u+" thousands"}}},colors:[o.primary,o.info,o.warning],grid:{show:!0,borderColor:l?"#334155":"#E2E8F0",strokeDashArray:10,position:"back"}};return e(d,{children:e(c,{options:n,series:s,type:"bar",height:a},void 0,!1,{fileName:v,lineNumber:124,columnNumber:7},void 0)},void 0,!1)};var h="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\chart\\Calculation.jsx";const g=({height:a=335})=>{const[l]=t(),s=[44,55,30],n={labels:["70% Sent","18% Opend","12% Rejected"],dataLabels:{enabled:!0},colors:[o.success,o.warning,"#A3A1FB"],legend:{position:"bottom",fontSize:"12px",fontFamily:"Inter",fontWeight:400,labels:{colors:l?"#CBD5E1":"#475569"},markers:{width:6,height:6,offsetY:-1,offsetX:-5,radius:12},itemMargin:{horizontal:10,vertical:0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]};return e(d,{children:e(c,{options:n,series:s,type:"pie",height:a},void 0,!1,{fileName:h,lineNumber:52,columnNumber:7},void 0)},void 0,!1)};var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\dashboard\\crm.jsx";const x=[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}],E=()=>e("div",{children:[e(b,{title:"Crm"},void 0,!1,{fileName:i,lineNumber:34,columnNumber:7},void 0),e("div",{className:"space-y-5",children:[e("div",{className:"grid grid-cols-12 gap-5",children:[e("div",{className:"lg:col-span-8 col-span-12 space-y-5",children:[e(r,{children:e("div",{className:"grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3",children:e(N,{},void 0,!1,{fileName:i,lineNumber:40,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:39,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:38,columnNumber:13},void 0),e(r,{children:[e("header",{className:"md:flex md:space-y-0 space-y-4",children:[e("h6",{className:"flex-1 text-slate-900 dark:text-white capitalize",children:"Deal distribution by stage"},void 0,!1,{fileName:i,lineNumber:45,columnNumber:17},void 0),e("div",{className:"flex-none",children:e(m,{},void 0,!1,{fileName:i,lineNumber:49,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:48,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:44,columnNumber:15},void 0),e("div",{className:"legend-ring",children:e(p,{},void 0,!1,{fileName:i,lineNumber:53,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:52,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:43,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:37,columnNumber:11},void 0),e("div",{className:"lg:col-span-4 col-span-12 space-y-5",children:e("div",{className:"lg:col-span-4 col-span-12 space-y-5",children:[e(r,{title:"Campaigns",headerslot:e(m,{},void 0,!1,{fileName:i,lineNumber:59,columnNumber:51},void 0),children:e("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700",children:x.map((a,l)=>e("li",{className:"first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase",children:e("div",{className:"flex justify-between",children:[e("span",{children:a.name},void 0,!1,{fileName:i,lineNumber:67,columnNumber:25},void 0),e("span",{children:a.value},void 0,!1,{fileName:i,lineNumber:68,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:66,columnNumber:23},void 0)},l,!1,{fileName:i,lineNumber:62,columnNumber:21},void 0))},void 0,!1,{fileName:i,lineNumber:60,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:59,columnNumber:15},void 0),e(r,{title:"trends calcultation",headerslot:e(m,{},void 0,!1,{fileName:i,lineNumber:74,columnNumber:61},void 0),children:e("div",{className:"legend-ring3",children:e(g,{},void 0,!1,{fileName:i,lineNumber:76,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:75,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:74,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:58,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:57,columnNumber:11},void 0)]},void 0,!0,{fileName:i,lineNumber:36,columnNumber:9},void 0),e(f,{title:"Latest Transaction"},void 0,!1,{fileName:i,lineNumber:83,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:35,columnNumber:7},void 0)]},void 0,!0,{fileName:i,lineNumber:33,columnNumber:5},void 0);export{E as default};
