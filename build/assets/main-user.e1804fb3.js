import{j as s,F as o,c as l,_ as r,k as a}from"./index.75075c2e.js";const i={series:[{name:"Revenue",data:[40,70,45,100,75,40,80,90]}],options:{chart:{toolbar:{show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60px",barHeight:"100%"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+"k"}}},yaxis:{show:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},colors:a.warning,grid:{show:!1}}},n={series:[{name:"Revenue",data:[40,70,45,100,75,40,80,90]}],options:{chart:{toolbar:{show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60px",barHeight:"100%"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+"k"}}},yaxis:{show:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},colors:a.info,grid:{show:!1}}},f={series:[{name:"Revenue",data:[40,70,45,100,75,40,80,90]}],options:{chart:{toolbar:{show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60px",barHeight:"100%"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+"k"}}},yaxis:{show:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},colors:a.success,grid:{show:!1}}},h=[{name:n,title:"Current balance ",count:"$34,564",bg:"bg-[#E5F9FF] dark:bg-slate-900	",text:"text-info-500",icon:"heroicons:shopping-cart"},{name:f,title:"Credit",count:"$3,564",bg:"bg-[#E5F9FF] dark:bg-slate-900	",text:"text-warning-500",icon:"heroicons:cube"},{name:i,title:"Debit",count:"$3,564",bg:"bg-[#E5F9FF] dark:bg-slate-900	",text:"text-[#5743BE]",icon:"heroicons:arrow-trending-up-solid"}],d=()=>s(o,{children:h.map((e,t)=>l("div",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4",children:[s("div",{className:"text-slate-600 dark:text-slate-400 text-sm mb-1 font-medium",children:e.title}),s("div",{className:"text-slate-900 dark:text-white text-lg font-medium",children:e.count}),s("div",{className:"ml-auto max-w-[124px]",children:s(r,{options:e.name.options,series:e.name.series,type:"bar",height:"48",width:"124"})})]},t))}),b="/assets/main-user.df3f61fd.png";export{d as G,b as u};
