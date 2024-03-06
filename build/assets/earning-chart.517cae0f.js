import{c as t,F as d,j as e,f,I as c,_ as o,u as n,l as h}from"./index.a4717e99.js";const x={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},m={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},p={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},b=[{name:x,title:"Totel revenue",count:"3,564",bg:"bg-[#E5F9FF] dark:bg-slate-900	",text:"text-info-500",icon:"heroicons:shopping-cart"},{name:m,title:"Products sold",count:"564",bg:"bg-[#FFEDE6] dark:bg-slate-900	",text:"text-warning-500",icon:"heroicons:cube"},{name:p,title:"Growth",count:"+5.0%",bg:"bg-[#EAE6FF] dark:bg-slate-900	",text:"text-[#5743BE]",icon:"heroicons:arrow-trending-up-solid"}],g=()=>t(d,{children:[" ",b.map((s,a)=>e("div",{children:t(f,{bodyClass:"pt-4 pb-3 px-4",children:[t("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:`${s.bg} ${s.text} h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl`,children:e(c,{icon:s.icon})})}),t("div",{className:"flex-1",children:[e("div",{className:"text-slate-600 dark:text-slate-300 text-sm mb-1 font-medium",children:s.title}),e("div",{className:"text-slate-900 dark:text-white text-lg font-medium",children:s.count})]})]}),e("div",{className:"ltr:ml-auto rtl:mr-auto max-w-[124px]",children:e(o,{options:s.name.options,series:s.name.series,type:"area",height:"41",width:"124"})})]})},a))]}),u=({className:s="bg-slate-50 dark:bg-slate-900 rounded pt-3 px-4",color:a="#4669FA"})=>{const[l]=n();return t("div",{className:s,children:[e("div",{className:"text-sm text-slate-600 dark:text-slate-300 mb-[6px]",children:"Profit"}),e("div",{className:"text-lg text-slate-900 dark:text-white font-medium mb-[6px]",children:"654k"}),t("div",{className:"font-normal text-xs text-slate-600 dark:text-slate-300",children:[e("span",{className:"text-primary-500",children:"+02% "}),"From last Week"]}),e("div",{className:"mt-4",children:e(o,{type:"line",height:"44",options:{chart:{toolbar:{show:!1},offsetX:0,offsetY:0,sparkline:{enabled:!0}},stroke:{width:[2],curve:"straight",dashArray:[0,8,5]},dataLabels:{enabled:!1},markers:{size:4,colors:a,strokeColors:a,strokeWidth:2,shape:"circle",radius:2,hover:{sizeOffset:1}},yaxis:{show:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},grid:{show:!0,borderColor:l?"#334155":"#e2e8f0",strokeDashArray:5,position:"back",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},colors:[a]},series:[{data:[15,30,15,30,20,35]}]})})]})},k=({className:s="bg-slate-50 dark:bg-slate-900 rounded pt-3 px-4",barColor:a=h.warning})=>t("div",{className:s,children:[e("div",{className:"text-sm text-slate-600 dark:text-slate-300 mb-[6px]",children:"Orders"}),e("div",{className:"text-lg text-slate-900 dark:text-white font-medium mb-[6px]",children:"123k"}),t("div",{className:"font-normal text-xs text-slate-600 dark:text-slate-300",children:[e("span",{className:"text-warning-500",children:"-60% "}),"From last Week"]}),e("div",{className:"mt-4",children:e(o,{type:"bar",height:"44",options:{chart:{toolbar:{show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60px",barHeight:"100%"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{opacity:1},tooltip:{y:{formatter:function(r){return"$ "+r+"k"}}},yaxis:{show:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},colors:a,grid:{show:!1}},series:[{name:"Revenue",data:[40,70,45,100,75,40,80,90]}]})})]}),v=({className:s="bg-slate-50 dark:bg-slate-900 rounded py-3 px-4 md:col-span-2"})=>{const[a]=n(),l=[44,55],i={labels:["success","Return"],dataLabels:{enabled:!1},colors:["#0CE7FA","#FA916B"],legend:{position:"bottom",fontSize:"14px",fontFamily:"Inter",fontWeight:400,markers:{width:8,height:8,offsetY:0,offsetX:-5,radius:12},itemMargin:{horizontal:18,vertical:0},labels:{colors:a?"#CBD5E1":"#475569"}},plotOptions:{pie:{donut:{size:"65%"}}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]};return e("div",{className:` ${s}`,children:t("div",{className:"flex items-center",children:[t("div",{className:"flex-none",children:[e("div",{className:"text-sm text-slate-600 dark:text-slate-300 mb-[6px]",children:"Earnings"}),e("div",{className:"text-lg text-slate-900 dark:text-white font-medium mb-[6px]",children:"$12,335.00"}),t("div",{className:"font-normal text-xs text-slate-600 dark:text-slate-300",children:[e("span",{className:"text-primary-500",children:"+08%"}),"From last Week"]})]}),e("div",{className:"flex-1",children:e("div",{className:"legend-ring2",children:e(o,{type:"donut",height:"200",options:i,series:l})})})]})})};export{v as E,g as G,k as O,u as P};
