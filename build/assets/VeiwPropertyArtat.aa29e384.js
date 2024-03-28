import{bY as A,ct as P,r as v,j as e,F as x,cg as $,e as _,I as N}from"./index.cef99591.js";import{d as S,b as I,u as T,f as B,t as O,a as V,p as F,o as g,c as E,e as L,g as U}from"./docs.c1ee8499.js";import{b as M}from"./bathroom.f897a353.js";import{N as Y}from"./not-available.0313044d.js";const R="/assets/bedroom.b8ce4533.png",H="/assets/location.17724789.jpeg";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\VeiwPropertyArtat.jsx";const Q=({images:m,selectedImage:i})=>{const[u,s]=v.exports.useState(i),t=()=>{s(r=>r===0?m.length-1:r-1)},d=()=>{s(r=>r===m.length-1?0:r+1)};return e("div",{className:"custom-slider",children:e("div",{className:"slider-content justify-center",children:[e("div",{className:"text-white slider-button prev-button",onClick:t,children:e(N,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:l,lineNumber:40,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:39,columnNumber:17},void 0),e("img",{src:m[u],alt:`slider image ${u}`,className:"slider-image"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:17},void 0),e("div",{className:"text-white slider-button next-button",onClick:d,children:e(N,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:47,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:37,columnNumber:9},void 0)},q=({images:m})=>{const[i,u]=v.exports.useState(null),[s,t]=v.exports.useState(!1),d=a=>{t(!0),u(a)},r=()=>{t(!1),u(null)};return e("div",{className:"thumbnail-container",children:[(m==null?void 0:m.length)>=5?e("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[e("div",{className:"lg:w-1/2 md:w-full h-[800px] ",children:e("img",{src:m[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>d(0)},void 0,!1,{fileName:l,lineNumber:73,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:72,columnNumber:25},void 0),e("div",{className:"lg:w-1/2 md:w-full  flex justify-between flex-wrap gap-y-4",children:m.slice(1,5).map((a,o)=>e("img",{src:a,className:`lg:w-[49%] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${o===1?"rounded-tr-[10px]":""} ${o===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${o===3?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>d(o+1)},o,!1,{fileName:l,lineNumber:77,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:75,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:71,columnNumber:21},void 0):null,(m==null?void 0:m.length)===4||(m==null?void 0:m.length)===2?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:m.map((a,o)=>e("img",{src:a,onClick:()=>d(o),className:`w-[49.5%]  cursor-pointer object-cover ${o===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(m==null?void 0:m.length)===4?`${o===1?"rounded-tr-[10px]":""} ${o===2?"rounded-bl-[10px]":""} ${o===3?"rounded-br-[10px]":""}`:`${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""} ${o===0?"rounded-tl-[10px]":""} ${o===0?"rounded-bl-[10px]":""}`}`,alt:`image-${o+1}`},o,!1,{fileName:l,lineNumber:97,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:95,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:94,columnNumber:21},void 0):null,(m==null?void 0:m.length)===3?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[e("div",{className:"w-[50%]",children:e("img",{src:m[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>d(0)},void 0,!1,{fileName:l,lineNumber:106,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:105,columnNumber:25},void 0),e("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:m.slice(1,3).map((a,o)=>e("img",{src:a,className:`w-[49%]  cursor-pointer object-cover  ${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>d(o+1)},o,!1,{fileName:l,lineNumber:110,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:108,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:104,columnNumber:21},void 0):null,(m==null?void 0:m.length)===1?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:m[0],className:"rounded-[10px]  cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>d(0)},void 0,!1,{fileName:l,lineNumber:119,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:118,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:117,columnNumber:21},void 0):null,e("div",{className:"flex justify-end",children:e("button",{onClick:()=>d(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Show all image"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:13},void 0),s&&e("div",{className:"modal-overlay",children:[e("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"},void 0,!1,{fileName:l,lineNumber:135,columnNumber:21},void 0),e("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:r,children:"Close"},void 0,!1,{fileName:l,lineNumber:137,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:134,columnNumber:17},void 0),s&&e("div",{className:"modal-overlay",children:[e("div",{className:"max-w-[90vw] p-[10px] text-center ",children:e(Q,{selectedImage:i,images:m},void 0,!1,{fileName:l,lineNumber:147,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:145,columnNumber:21},void 0),e("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:r,children:e(N,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"},void 0,!1,{fileName:l,lineNumber:150,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:149,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:144,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:68,columnNumber:9},void 0)},W=()=>{const{id:m}=A(),{data:i,error:u,isLoading:s,isFetching:t,isSuccess:d}=P(m),[r,a]=v.exports.useState("");v.exports.useEffect(()=>{if(i){const c=i==null?void 0:i.amenitiesimages.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),b=i==null?void 0:i.buildingelevation.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),p=i==null?void 0:i.floorplan.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),h=i==null?void 0:i.plotplanattachment.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),y=i==null?void 0:i.propertyimages.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),k=i==null?void 0:i.typicalfloorplan.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),j=i==null?void 0:i.unitplanattachment.filter(n=>n!=="").map(n=>"http://dev-rare.srp.ai"+n),C=[...c,...b,...p,...h,...y,...k,...j];a(C)}},[i==null?void 0:i.amenitiesimages,i==null?void 0:i.buildingelevation,i==null?void 0:i.plotplanattachment,i==null?void 0:i.propertyimages,i==null?void 0:i.typicalfloorplan,i==null?void 0:i.unitplanattachment]);const[o,w]=v.exports.useState("");v.exports.useEffect(()=>{if(i!=null&&i.youtubelink){let c=i==null?void 0:i.youtubelink,b=c==null?void 0:c.replace("watch?v=","embed/");w(b)}},[i==null?void 0:i.youtubelink]);const f=c=>{console.log(c,"id");const b=document.getElementById(c),p=c==="about-property"?180:80,h=b.offsetTop-p;window.scrollTo({top:h,behavior:"smooth"})};return e(x,{children:[s||t&&e($,{},void 0,!1,{fileName:l,lineNumber:247,columnNumber:41},void 0),u&&e("p",{children:"Something went wrong"},void 0,!1,{fileName:l,lineNumber:248,columnNumber:23},void 0),d&&i&&e("div",{className:"card-bo",children:e(_,{children:[e("div",{children:[e("div",{className:"nav",children:[e("div",{children:e("div",{onClick:()=>f("about-property"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"About Property"},void 0,!1,{fileName:l,lineNumber:255,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:254,columnNumber:33},void 0),e("div",{children:e("div",{onClick:()=>f("owner"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Owner Detail"},void 0,!1,{fileName:l,lineNumber:260,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:259,columnNumber:33},void 0),e("div",{children:e("div",{onClick:()=>f("location"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Location"},void 0,!1,{fileName:l,lineNumber:265,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:264,columnNumber:33},void 0),e("div",{children:e("div",{onClick:()=>f("video"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Video"},void 0,!1,{fileName:l,lineNumber:270,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:269,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:253,columnNumber:29},void 0),e("div",{className:"select-none",children:r!=null&&r.length?e(q,{images:r},void 0,!1,{fileName:l,lineNumber:278,columnNumber:41},void 0):e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:Y,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"},void 0,!1,{fileName:l,lineNumber:281,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:280,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:279,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:275,columnNumber:29},void 0),e(x,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:252,columnNumber:25},void 0),e("div",{className:"mt-[15px]",children:[e("div",{className:"flex gap-x-[10px] items-start p-[10px]",children:[e(N,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] ml-[20px] "},void 0,!1,{fileName:l,lineNumber:347,columnNumber:33},void 0),e("div",{children:[e("h4",{className:"",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:349,columnNumber:37},void 0),e("span",{children:"Project name"},void 0,!1,{fileName:l,lineNumber:350,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:348,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:346,columnNumber:29},void 0),e("div",{className:"action",children:[e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e(N,{icon:"heroicons:home",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:356,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:358,columnNumber:45},void 0),e("span",{children:"unit number"},void 0,!1,{fileName:l,lineNumber:359,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:357,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:355,columnNumber:37},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e(N,{icon:"heroicons:globe-alt",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:363,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.community_name?i==null?void 0:i.community_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:365,columnNumber:45},void 0),e("span",{children:"Community name"},void 0,!1,{fileName:l,lineNumber:366,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:364,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:362,columnNumber:37},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e(N,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:370,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.building_name?i==null?void 0:i.building_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:372,columnNumber:45},void 0),e("span",{children:"Building name"},void 0,!1,{fileName:l,lineNumber:373,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:371,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:369,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:354,columnNumber:33},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:S,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:379,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.develpoername?i==null?void 0:i.develpoername:"Not Available"},void 0,!1,{fileName:l,lineNumber:381,columnNumber:45},void 0),e("span",{children:"Developer name"},void 0,!1,{fileName:l,lineNumber:382,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:380,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:378,columnNumber:37},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:I,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:386,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.builduparea?i==null?void 0:i.builduparea:"Not Available"},void 0,!1,{fileName:l,lineNumber:388,columnNumber:45},void 0),e("span",{children:"Build up area"},void 0,!1,{fileName:l,lineNumber:389,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:387,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:385,columnNumber:37},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e(N,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:393,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.purchasevaue?i==null?void 0:i.purchasevaue:"Not Available"},void 0,!1,{fileName:l,lineNumber:395,columnNumber:45},void 0),e("span",{children:"Purchase Value"},void 0,!1,{fileName:l,lineNumber:396,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:394,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:392,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:377,columnNumber:33},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:T,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:403,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.usage?i==null?void 0:i.usage:"Not Available"},void 0,!1,{fileName:l,lineNumber:405,columnNumber:45},void 0),e("span",{children:"Usage"},void 0,!1,{fileName:l,lineNumber:406,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:404,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:402,columnNumber:37},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:B,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:410,columnNumber:41},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.floor?i==null?void 0:i.floor:"Not Available"},void 0,!1,{fileName:l,lineNumber:412,columnNumber:45},void 0),e("span",{children:"Floor"},void 0,!1,{fileName:l,lineNumber:413,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:411,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:409,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:401,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:353,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:345,columnNumber:25},void 0),e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:421,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:420,columnNumber:25},void 0),e("div",{children:e("h4",{className:"headings",children:"About property"},void 0,!1,{fileName:l,lineNumber:424,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:423,columnNumber:25},void 0),e("div",{id:"about-property",className:"action",children:[e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:O,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:430,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.kitchen?i==null?void 0:i.kitchen:"Not Available"},void 0,!1,{fileName:l,lineNumber:433,columnNumber:41},void 0),e("span",{children:"Type of kitchen"},void 0,!1,{fileName:l,lineNumber:434,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:432,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:429,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:R,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:439,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:(i==null?void 0:i.totalbedroom)&&(i==null?void 0:i.totalbedroom)===void 0&&(i==null?void 0:i.totalbedroom)==="undefined"?i==null?void 0:i.totalbedroom:"Not available"},void 0,!1,{fileName:l,lineNumber:441,columnNumber:41},void 0),e("span",{children:"Total bedroom"},void 0,!1,{fileName:l,lineNumber:442,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:440,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:438,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:M,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:446,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:(i==null?void 0:i.totalbathroom)&&(i==null?void 0:i.totalbathroom)===void 0&&(i==null?void 0:i.totalbathroom)==="undefined"?i==null?void 0:i.totalbathroom:"Not Available"},void 0,!1,{fileName:l,lineNumber:448,columnNumber:41},void 0),e("span",{children:"No of bathroom"},void 0,!1,{fileName:l,lineNumber:449,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:447,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:445,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:428,columnNumber:29},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:V,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:456,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.balcony?i==null?void 0:i.balcony:"Not available"},void 0,!1,{fileName:l,lineNumber:458,columnNumber:41},void 0),e("span",{children:"Type of balcony"},void 0,!1,{fileName:l,lineNumber:459,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:457,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:455,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:F,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:463,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.parkingbay?i==null?void 0:i.parkingbay:"Not Available"},void 0,!1,{fileName:l,lineNumber:465,columnNumber:41},void 0),e("span",{children:"Parking bay number"},void 0,!1,{fileName:l,lineNumber:466,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:464,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:462,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:454,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:427,columnNumber:25},void 0),e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:509,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:508,columnNumber:25},void 0),e("div",{id:"owner",children:e("h3",{className:"headings",children:"Owner Details"},void 0,!1,{fileName:l,lineNumber:512,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:511,columnNumber:25},void 0),e("div",{className:"action",children:[e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:517,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.owner_name?i==null?void 0:i.owner_name:"Not available"},void 0,!1,{fileName:l,lineNumber:520,columnNumber:41},void 0),e("span",{children:"Owner name"},void 0,!1,{fileName:l,lineNumber:521,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:519,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:516,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:E,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:526,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.representative_name?i==null?void 0:i.representative_name:"Not available"},void 0,!1,{fileName:l,lineNumber:528,columnNumber:41},void 0),e("span",{children:"Owner representative"},void 0,!1,{fileName:l,lineNumber:529,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:527,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:525,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:L,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:533,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.purchasedate?new Date(i==null?void 0:i.purchasedate).toDateString():"Not available"},void 0,!1,{fileName:l,lineNumber:535,columnNumber:41},void 0),e("span",{children:"Purchase date"},void 0,!1,{fileName:l,lineNumber:536,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:534,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:532,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:515,columnNumber:29},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:543,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.no_ownernamedeed?i==null?void 0:i.no_ownernamedeed:"Not available"},void 0,!1,{fileName:l,lineNumber:545,columnNumber:41},void 0),e("span",{children:"No of owner Name tittle"},void 0,!1,{fileName:l,lineNumber:546,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:544,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:542,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:U,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:550,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:"4"},void 0,!1,{fileName:l,lineNumber:552,columnNumber:41},void 0),e("span",{children:"Tittle deeds docoment"},void 0,!1,{fileName:l,lineNumber:553,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:551,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:549,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:541,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:514,columnNumber:25},void 0),e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:559,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:558,columnNumber:25},void 0),e("div",{id:"location",children:[e("h3",{className:"headings",children:"Location"},void 0,!1,{fileName:l,lineNumber:562,columnNumber:29},void 0),i!=null&&i.propertylocation?e("a",{href:i==null?void 0:i.propertylocation,target:"_blank",children:e("img",{src:H,alt:"",className:"ml-[36px]  card-pic"},void 0,!1,{fileName:l,lineNumber:565,columnNumber:92},void 0)},void 0,!1,{fileName:l,lineNumber:565,columnNumber:37},void 0):e("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:l,lineNumber:567,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:561,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:571,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:570,columnNumber:25},void 0),e("div",{id:"video",className:"w-[100%] col-span-2",children:[e("h3",{className:"headings",children:"YOUTUBE Video"},void 0,!1,{fileName:l,lineNumber:574,columnNumber:29},void 0),(i==null?void 0:i.youtubelink)&&o?e("div",{className:"flex w-[100%] col-span-2 justify-between  flex-wrap gap-y-[25px] p-[27px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1 2 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:l,lineNumber:579,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:578,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:577,columnNumber:37},void 0):e("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:l,lineNumber:592,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:573,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:251,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:250,columnNumber:17},void 0)]},void 0,!0)};export{W as default};
