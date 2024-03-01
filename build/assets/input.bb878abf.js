import{r as n,j as e,e as a,k as i}from"./index.e9a6c056.js";import{T as u}from"./Textarea.540ab533.js";import{S as s}from"./Select.692455dd.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\input.jsx";const b=()=>{const t={message:"This is invalid state"},[r,o]=n.exports.useState("");return e("div",{className:"grid xl:grid-cols-2 gap-5",children:[e(a,{title:"Basic Inputs",children:e("div",{className:"space-y-3",children:[e(i,{label:"Project Name*",id:"pn",type:"text",placeholder:"Management dashboard "},void 0,!1,{fileName:l,lineNumber:22,columnNumber:11},void 0),e(i,{label:"Readonly Input",id:"pn2",readonly:!0,type:"text",placeholder:"You can't update me :P"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:11},void 0),e(i,{label:" Disabled Input",id:"pn3",placeholder:" Disabled Input",disabled:!0,type:"text"},void 0,!1,{fileName:l,lineNumber:35,columnNumber:11},void 0),e(u,{label:"Project description",id:"pn4",placeholder:"Type here"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:11},void 0),e(s,{options:["Option 1","Option 2","Option 3"],label:"Select Option's"},void 0,!1,{fileName:l,lineNumber:47,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:21,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:20,columnNumber:7},void 0),e("div",{className:" space-y-5",children:[e(a,{title:"Sizing Options",children:e("div",{className:"space-y-2",children:[e(i,{label:"Large",id:"largesize",type:"text",placeholder:"Large Input",className:"h-[52px]"},void 0,!1,{fileName:l,lineNumber:56,columnNumber:13},void 0),e(i,{label:"Default",id:"defaultsize",type:"text",placeholder:"Default Input"},void 0,!1,{fileName:l,lineNumber:63,columnNumber:13},void 0),e(i,{label:"Small",id:"smallsize",type:"text",placeholder:"Small Input",className:"h-[32px] text-sm"},void 0,!1,{fileName:l,lineNumber:69,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:55,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:54,columnNumber:9},void 0),e(a,{title:"Sizing Options",children:e("div",{className:"space-y-2",children:[e(i,{label:"Large",id:"largesize2",type:"text",placeholder:"Large Input",className:"h-[52px]",horizontal:!0},void 0,!1,{fileName:l,lineNumber:80,columnNumber:13},void 0),e(i,{label:"Default",id:"defaultsize2",type:"text",placeholder:"Default Input",horizontal:!0},void 0,!1,{fileName:l,lineNumber:88,columnNumber:13},void 0),e(i,{label:"Small",id:"smallsize2",type:"text",placeholder:"Small Input",className:"h-[32px] text-sm",horizontal:!0},void 0,!1,{fileName:l,lineNumber:95,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:79,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:53,columnNumber:7},void 0),e(a,{title:"States",children:e("div",{className:"space-y-3",children:[e(i,{label:"Valid State",id:"ValidState",type:"text",placeholder:"Valid",validate:"This is valid state."},void 0,!1,{fileName:l,lineNumber:108,columnNumber:11},void 0),e(i,{label:"Invalid State",id:"InvalidState",type:"text",placeholder:"Invalid",error:t},void 0,!1,{fileName:l,lineNumber:115,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:107,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:106,columnNumber:7},void 0),e(a,{title:`Input Validation States With Tootltips\r
`,children:e("div",{className:"space-y-3",children:[e(i,{label:"Valid State",id:"ValidState",type:"text",placeholder:"Valid",validate:"This is valid state.",msgTooltip:!0},void 0,!1,{fileName:l,lineNumber:129,columnNumber:11},void 0),e(i,{label:"Invalid State",id:"InvalidState",type:"text",placeholder:"Invalid",error:t,msgTooltip:!0},void 0,!1,{fileName:l,lineNumber:137,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:128,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:7},void 0),e("div",{className:"xl:col-span-2 col-span-1",children:e(a,{title:" Formatter Support",children:[e(i,{label:"Text input with formatter (on input)",id:"formatter-pn",type:"text",placeholder:"Enter your name",description:"We will convert your name to lowercase instantly",onChange:m=>{const d=m.target.value;o(d)}},void 0,!1,{fileName:l,lineNumber:149,columnNumber:11},void 0),r.toLowerCase()]},void 0,!0,{fileName:l,lineNumber:148,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:147,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:19,columnNumber:5},void 0)};export{b as default};
