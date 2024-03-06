import{r as c,j as e,I as v,e as u}from"./index.1dc4ee55.js";import{P as i,B as a}from"./index.5a65f4fa.js";import{B as N}from"./Button.6760c886.js";var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\progress-bar\\step.jsx";const t=()=>{const[r,d]=c.exports.useState(0),o=[{id:1},{id:2},{id:3}],n=()=>{r<o.length-1&&d(r+1)},b=()=>{r>0&&d(r-1)};return e("div",{children:[e("div",{className:"mx-auto flex z-[5] items-center relative justify-center",children:o.map((f,s)=>e("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none",children:[e("div",{className:`   ${r>=s?"bg-blue-500 text-white ring-primary-500 ring-offset-2":"bg-white ring-primary-500 ring-opacity-70  text-primary-500 text-opacity-70"}  icon-box h-12 w-12 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 text-lg font-medium`,children:r<=s?e("span",{children:[" ",s+1]},void 0,!0,{fileName:m,lineNumber:44,columnNumber:17},void 0):e("span",{className:"text-3xl",children:e(v,{icon:"bx:check-double"},void 0,!1,{fileName:m,lineNumber:47,columnNumber:19},void 0)},void 0,!1,{fileName:m,lineNumber:46,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:36,columnNumber:13},void 0),e("div",{className:`${r>=s?"bg-primary-500":"bg-[#E0EAFF]"} absolute top-1/2 h-[2px] w-full`},void 0,!1,{fileName:m,lineNumber:52,columnNumber:13},void 0),e("div",{className:"text-sm mt-[10px] leading-[16px] font-medium capitalize text-slate-500-500 text-center"},void 0,!1,{fileName:m,lineNumber:58,columnNumber:13},void 0)]},s,!0,{fileName:m,lineNumber:32,columnNumber:11},void 0))},void 0,!1,{fileName:m,lineNumber:30,columnNumber:7},void 0),e("div",{className:"flex justify-between mt-10",children:[e(N,{text:"prev",disabled:r===0,onClick:b},void 0,!1,{fileName:m,lineNumber:64,columnNumber:9},void 0),e(N,{text:"next",disabled:r===o.length-1,onClick:n},void 0,!1,{fileName:m,lineNumber:65,columnNumber:9},void 0)]},void 0,!0,{fileName:m,lineNumber:63,columnNumber:7},void 0)]},void 0,!0,{fileName:m,lineNumber:29,columnNumber:5},void 0)};var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\progress-bar\\index.jsx";const x=()=>e("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e(u,{title:"Default Examples",children:e("div",{className:"space-y-4",children:[e(i,{value:30},void 0,!1,{fileName:l,lineNumber:12,columnNumber:11},void 0),e(i,{value:80},void 0,!1,{fileName:l,lineNumber:13,columnNumber:11},void 0),e(i,{value:50},void 0,!1,{fileName:l,lineNumber:14,columnNumber:11},void 0),e(i,{value:70},void 0,!1,{fileName:l,lineNumber:15,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:11,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:10,columnNumber:7},void 0),e(u,{title:"Default Examples",children:e("div",{className:"space-y-4",children:[e(i,{value:30,className:"bg-primary-500"},void 0,!1,{fileName:l,lineNumber:20,columnNumber:11},void 0),e(i,{value:80,className:"bg-danger-500"},void 0,!1,{fileName:l,lineNumber:21,columnNumber:11},void 0),e(i,{value:50,className:"bg-warning-500"},void 0,!1,{fileName:l,lineNumber:22,columnNumber:11},void 0),e(i,{value:70,className:" bg-info-500"},void 0,!1,{fileName:l,lineNumber:23,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:19,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:18,columnNumber:7},void 0),e(u,{title:"Height Examples",children:e("div",{className:"space-y-4",children:[e(i,{value:30,title:"Progress sm"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:11},void 0),e(i,{value:50,title:"Progress md",backClass:"h-[10px] rounded-[999px]",className:"bg-primary-500"},void 0,!1,{fileName:l,lineNumber:29,columnNumber:11},void 0),e(i,{value:80,title:"Progress xl",backClass:"h-[14px] rounded-[999px]",className:"bg-danger-500"},void 0,!1,{fileName:l,lineNumber:35,columnNumber:11},void 0),e(i,{value:70,title:"Progress xl",backClass:"h-4 rounded-[999px]",className:"bg-warning-500"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:27,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:26,columnNumber:7},void 0),e(u,{title:"Striped Examples",children:e("div",{className:"space-y-6",children:[e(i,{value:30,className:"bg-slate-900 ",striped:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:52,columnNumber:11},void 0)," ",e(i,{value:30,className:"bg-primary-500 ",striped:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:58,columnNumber:11},void 0),e(i,{value:80,className:"bg-danger-500 ",striped:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:64,columnNumber:11},void 0),e(i,{value:50,className:"bg-warning-500  ",striped:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:70,columnNumber:11},void 0),e(i,{value:70,className:" bg-info-500 ",striped:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:76,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:51,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:50,columnNumber:7},void 0),e(u,{title:"Striped Examples",children:e("div",{className:"space-y-6",children:[e(i,{value:30,className:"bg-slate-900 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0},void 0,!1,{fileName:l,lineNumber:86,columnNumber:11},void 0),e(i,{value:60,className:"bg-primary-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0},void 0,!1,{fileName:l,lineNumber:93,columnNumber:11},void 0),e(i,{value:40,className:"bg-danger-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0},void 0,!1,{fileName:l,lineNumber:100,columnNumber:11},void 0),e(i,{value:50,className:"bg-warning-500  ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0},void 0,!1,{fileName:l,lineNumber:107,columnNumber:11},void 0),e(i,{value:70,className:" bg-info-500 ",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0},void 0,!1,{fileName:l,lineNumber:114,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:85,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:84,columnNumber:7},void 0),e(u,{title:"Value Examples",children:e("div",{className:"space-y-6",children:[e(i,{value:30,className:"bg-slate-900 ",showValue:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:11},void 0),e(i,{value:60,className:"bg-primary-500 ",backClass:"h-3 rounded-[999px]",showValue:!0},void 0,!1,{fileName:l,lineNumber:131,columnNumber:11},void 0),e(i,{value:40,className:"bg-danger-500 ",showValue:!0,backClass:"h-3 rounded-[999px]"},void 0,!1,{fileName:l,lineNumber:137,columnNumber:11},void 0),e(i,{value:50,className:"bg-warning-500  ",backClass:"h-3 rounded-[999px]",showValue:!0},void 0,!1,{fileName:l,lineNumber:143,columnNumber:11},void 0),e(i,{value:70,className:" bg-info-500 ",backClass:"h-3 rounded-[999px]",showValue:!0},void 0,!1,{fileName:l,lineNumber:149,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:124,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:123,columnNumber:7},void 0),e(u,{title:"Multiple Bar Examples",children:e("div",{className:"grid grid-cols-1 gap-10",children:[e(i,{backClass:"h-3 rounded-[999px]",children:[e(a,{value:10,className:"bg-primary-500"},void 0,!1,{fileName:l,lineNumber:160,columnNumber:13},void 0),e(a,{value:20,className:"bg-success-500"},void 0,!1,{fileName:l,lineNumber:161,columnNumber:13},void 0),e(a,{value:20,className:"bg-danger-500"},void 0,!1,{fileName:l,lineNumber:162,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:159,columnNumber:11},void 0),e(i,{backClass:"h-3 rounded-[999px]",children:[e(a,{value:12,className:"bg-primary-500",showValue:!0},void 0,!1,{fileName:l,lineNumber:165,columnNumber:13},void 0),e(a,{value:25,className:"bg-success-500",showValue:!0},void 0,!1,{fileName:l,lineNumber:166,columnNumber:13},void 0),e(a,{value:25,className:"bg-danger-500",showValue:!0},void 0,!1,{fileName:l,lineNumber:167,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:164,columnNumber:11},void 0),e(i,{backClass:"h-3 rounded-[999px]",children:[e(a,{value:15,className:"bg-primary-500",striped:!0},void 0,!1,{fileName:l,lineNumber:170,columnNumber:13},void 0),e(a,{value:30,className:"bg-success-500",striped:!0},void 0,!1,{fileName:l,lineNumber:171,columnNumber:13},void 0),e(a,{value:30,className:"bg-danger-500",striped:!0},void 0,!1,{fileName:l,lineNumber:172,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:169,columnNumber:11},void 0),e(i,{backClass:"h-3 rounded-[999px]",children:[e(a,{value:18,className:"bg-primary-500",showValue:!0,striped:!0},void 0,!1,{fileName:l,lineNumber:175,columnNumber:13},void 0),e(a,{value:33,className:"bg-success-500",showValue:!0,striped:!0},void 0,!1,{fileName:l,lineNumber:176,columnNumber:13},void 0),e(a,{value:33,className:"bg-danger-500",showValue:!0,striped:!0},void 0,!1,{fileName:l,lineNumber:177,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:174,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:158,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:157,columnNumber:7},void 0),e(u,{title:"Step Progress Bar Examples",children:e(t,{},void 0,!1,{fileName:l,lineNumber:182,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:181,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:9,columnNumber:5},void 0);export{x as default};
