import{u as n,g as l,j as e,_ as i,c as a}from"./index.89e71075.js";const p=({height:o=400})=>{const[t]=n(),[s]=l();return e("div",{children:e(i,{options:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"45%"}},legend:{show:!0,position:"top",horizontalAlign:"right",fontSize:"12px",fontFamily:"Inter",offsetY:-30,markers:{width:8,height:8,offsetY:-1,offsetX:-5,radius:12},labels:{colors:t?"#CBD5E1":"#475569"},itemMargin:{horizontal:18,vertical:0}},title:{text:"Revenue Report",align:"left",offsetX:s?"0%":0,offsetY:13,floating:!1,style:{fontSize:"20px",fontWeight:"500",fontFamily:"Inter",color:t?"#fff":"#0f172a"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{opposite:!!s,labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{opacity:1},tooltip:{y:{formatter:function(r){return"$ "+r+" thousands"}}},colors:["#4669FA","#0CE7FA","#FA916B"],grid:{show:!0,borderColor:t?"#334155":"#E2E8F0",strokeDashArray:10,position:"back"},responsive:[{breakpoint:600,options:{legend:{position:"bottom",offsetY:8,horizontalAlign:"center"},plotOptions:{bar:{columnWidth:"80%"}}}}]},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],type:"bar",height:o})})},c="/assets/raredash.cb4f8af0.jpg",m=({message:o})=>e("div",{className:"bg-no-repeat bg-cover bg-center p-16  rounded-[6px] relative mb-4",style:{backgroundImage:`url(${c})`},children:a("div",{children:[a("h4",{className:"text-xl font-medium text-white mb-2",children:[e("span",{className:"block font-normal",children:"Hello!"}),e("span",{className:"block"})]}),e("p",{className:"text-[35px] text-white font-normal",children:o})]})});export{m as I,p as R};
