import{u as r,j as e,_ as n,a as f,c as y,f as s}from"./index.a4717e99.js";import{B as D}from"./BasicArea.4c078c08.js";const m=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},yaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",strokeDashArray:10,position:"back"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},legend:{labels:{colors:t?"#CBD5E1":"#475569"},fontFamily:"Inter"},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},series:[{data:[31,40,28,51,42,109,100]},{data:[11,32,45,32,34,52,41]}],type:"area",height:350})})},b=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},yaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",strokeDashArray:10,position:"back"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"],labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},colors:["#4669FA"]},series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],type:"bar",height:"350"})})},u=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:10,colors:["transparent"]},legend:{labels:{colors:t?"#CBD5E1":"#475569"}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{text:"$ (thousands)"},labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},fill:{opacity:1},tooltip:{y:{formatter:function(i){return"$ "+i+" thousands"}}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},colors:["#4669FA","#0CE7FA","#FA916B"]},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],type:"bar",height:"350"})})},C=()=>{const[t]=r();function a(l,p,c){for(var d=0,h=[];d<p;){var x=Math.floor(Math.random()*(c.max-c.min+1))+c.min,w=Math.floor(Math.random()*(75-15+1))+15;h.push([l,x,w]),l+=864e5,d++}return h}const o=[{name:"Product1",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product3",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product4",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}];return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{type:"gradient"},legend:{labels:{colors:t?"#CBD5E1":"#475569"}},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0,style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},yaxis:{max:70,labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},theme:{palette:"palette2"},colors:["#4669FA","#FA916B","#50C793","#0CE7FA"]},series:o,type:"bubble",height:"350"})})},B=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{zoom:{enabled:!0,type:"xy"},toolbar:{show:!1}},grid:{borderColor:t?"#334155":"#e2e8f0",xaxis:{lines:{show:!0}}},colors:["#4669FA","#FA916B","#0CE7FA"],legend:{show:!0,position:"bottom",horizontalAlign:"center",labels:{colors:t?"#CBD5E1":"#475569"}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},tickAmount:10,labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"},formatter(i){return parseFloat(i).toFixed(1)}}},yaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}}},series:[{name:"A",data:[[5.4,170],[5.4,100],[6.3,170],[5.7,140],[5.9,130],[7,150],[8,120],[9,170],[10,190],[11,220],[12,170],[13,230]]},{name:"B",data:[[14,220],[15,280],[16,230],[18,320],[17.5,280],[19,250],[20,350],[20.5,320],[20,320],[19,280],[17,280],[22,300],[18,120]]},{name:"C",data:[[14,290],[13,190],[20,220],[21,350],[21.5,290],[22,220],[23,140],[19,400],[20,200],[22,90],[20,120]]}],type:"scatter",height:"350"})})},F=()=>{const[t]=r(),a=[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}];return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},plotOptions:{candlestick:{colors:{upward:"#4669FA",downward:"#F1595C"}}},xaxis:{type:"datetime",labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},yaxis:{tooltip:{enabled:!0},labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},colors:["#000000"]},series:a,type:"candlestick",height:"350"})})},g=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},stroke:{curve:"stepline"},dataLabels:{enabled:!1},yaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},legend:{labels:{colors:t?"#CBD5E1":"#475569"}},xaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},markers:{hover:{sizeOffset:4}}},series:[{data:[34,44,54,21,12,43,33,23,66,66,58]}],type:"line",height:"350"})})},k=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{stacked:!0,stackType:"100%",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"25%"}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],yaxis:{labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},legend:{labels:{colors:t?"#CBD5E1":"#475569"}},xaxis:{categories:["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"],labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{opacity:1},colors:["#4669FA","#0CE7FA","#FA916B"]},series:[{name:"PRODUCT A",data:[44,55,41,67,22,43,21,49]},{name:"PRODUCT B",data:[13,23,20,8,13,27,33,12]},{name:"PRODUCT C",data:[11,17,15,15,21,14,15,13]}],type:"bar",height:"350"})})},E=()=>{const[t]=r();return e("div",{children:e(n,{options:{labels:["Team A","Team B","Team C","Team D","Team E"],dataLabels:{enabled:!0},colors:["#4669FA","#F1595C","#50C793","#0CE7FA","#FA916B"],legend:{position:"bottom",fontSize:"16px",fontFamily:"Inter",fontWeight:400,labels:{colors:t?"#CBD5E1":"#475569"},markers:{width:6,height:6,offsetY:-1,offsetX:-5,radius:12},itemMargin:{horizontal:10,vertical:0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]},series:[44,55,13,43,22],type:"pie",height:"450"})})},A=()=>{const[t]=r();return e("div",{children:e(n,{options:{labels:["success","Return","Cancel"],dataLabels:{enabled:!0},colors:["#50C793","#F1595C","#FBBF24"],legend:{position:"bottom",fontSize:"16px",fontFamily:"Inter",fontWeight:400,labels:{colors:t?"#CBD5E1":"#475569"}},plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"26px",fontWeight:"bold",fontFamily:"Inter",color:t?"#CBD5E1":"#475569"},value:{show:!0,fontFamily:"Inter",color:t?"#CBD5E1":"#475569",formatter(i){return`${parseInt(i)}%`}},total:{show:!0,fontSize:"1.5rem",color:t?"#CBD5E1":"#475569",label:"Total",formatter(){return"20%"}}}}}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]},series:[44,55,41],type:"donut",height:"450"})})},T=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime",labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{min:0,labels:{style:{colors:t?"#CBD5E1":"#475569",fontFamily:"Inter"}}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(i){return typeof i<"u"?i.toFixed(0)+" views":i}}},legend:{labels:{useSeriesColors:!0}},grid:{show:!0,borderColor:t?"#334155":"#e2e8f0",position:"back"},colors:["#4669FA","#50C793","#0CE7FA"]},series:[{name:"Column",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Area",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Line",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],type:"line",height:350})})},v=()=>{const[t]=r();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1},dropShadow:{enabled:!1,blur:8,left:1,top:1,opacity:.2}},legend:{show:!0,fontSize:"14px",fontFamily:"Inter",labels:{colors:t?"#CBD5E1":"#475569"}},yaxis:{show:!1},xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"]},fill:{opacity:[1,.8]},stroke:{show:!1,width:0},markers:{size:0},grid:{show:!1}},series:[{name:"Option A",data:[41,64,81,60,42,42,33,23]},{name:"Option B",data:[65,46,42,25,58,63,76,43]}],type:"radar",height:450})})},I=()=>{const[t]=r(),{width:a,breakpoints:o}=f();return e("div",{children:e(n,{options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px",color:t?"#CBD5E1":"#475569"},value:{fontSize:"16px",color:t?"#CBD5E1":"#475569"},total:{show:!0,label:"Total",color:t?"#CBD5E1":"#475569",formatter:function(){return 249}}},track:{background:"#E2E8F0",strokeWidth:"97%"}}},labels:["A","B","C","D"],colors:["#4669FA","#FA916B","#50C793","#0CE7FA"]},series:[44,55,67,83],type:"radialBar",height:a>o.md?450:250})})},z=()=>y("div",{className:" space-y-5",children:[e(s,{title:"Area Chart",children:e(D,{})}),e(s,{title:"Area Chart",children:e(m,{})}),e(s,{title:"Basic Bar Chart",children:e(b,{})}),e(s,{title:"Column Chart",children:e(u,{})}),e(s,{title:"3D Bubble",children:e(C,{})}),e(s,{title:"Scatter Chart",children:e(B,{})}),e(s,{title:"Candlestick Chart",children:e(F,{})}),e(s,{title:"Stepline Chart",children:e(g,{})}),e(s,{title:"Stacked Columns",children:e(k,{})}),e(s,{title:"Pie & Donut Chart",children:y("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:e(A,{})}),e("div",{children:e(E,{})})]})}),e(s,{title:"Mixed Chart",children:e(T,{})}),e(s,{title:"Radar Chart",children:e(v,{})}),e(s,{title:"Multiple Radialbars",children:e(I,{})})]});export{z as default};
