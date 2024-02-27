import{r as n,c as a,j as e,f as l,l as t}from"./index.93a34628.js";import{T as o}from"./Textarea.41ebf6ca.js";import{S as c}from"./Select.098675a9.js";const y=()=>{const i={message:"This is invalid state"},[r,s]=n.exports.useState("");return a("div",{className:"grid xl:grid-cols-2 gap-5",children:[e(l,{title:"Basic Inputs",children:a("div",{className:"space-y-3",children:[e(t,{label:"Project Name*",id:"pn",type:"text",placeholder:"Management dashboard "}),e(t,{label:"Readonly Input",id:"pn2",readonly:!0,type:"text",placeholder:"You can't update me :P"}),e(t,{label:" Disabled Input",id:"pn3",placeholder:" Disabled Input",disabled:!0,type:"text"}),e(o,{label:"Project description",id:"pn4",placeholder:"Type here"}),e(c,{options:["Option 1","Option 2","Option 3"],label:"Select Option's"})]})}),a("div",{className:" space-y-5",children:[e(l,{title:"Sizing Options",children:a("div",{className:"space-y-2",children:[e(t,{label:"Large",id:"largesize",type:"text",placeholder:"Large Input",className:"h-[52px]"}),e(t,{label:"Default",id:"defaultsize",type:"text",placeholder:"Default Input"}),e(t,{label:"Small",id:"smallsize",type:"text",placeholder:"Small Input",className:"h-[32px] text-sm"})]})}),e(l,{title:"Sizing Options",children:a("div",{className:"space-y-2",children:[e(t,{label:"Large",id:"largesize2",type:"text",placeholder:"Large Input",className:"h-[52px]",horizontal:!0}),e(t,{label:"Default",id:"defaultsize2",type:"text",placeholder:"Default Input",horizontal:!0}),e(t,{label:"Small",id:"smallsize2",type:"text",placeholder:"Small Input",className:"h-[32px] text-sm",horizontal:!0})]})})]}),e(l,{title:"States",children:a("div",{className:"space-y-3",children:[e(t,{label:"Valid State",id:"ValidState",type:"text",placeholder:"Valid",validate:"This is valid state."}),e(t,{label:"Invalid State",id:"InvalidState",type:"text",placeholder:"Invalid",error:i})]})}),e(l,{title:`Input Validation States With Tootltips\r
`,children:a("div",{className:"space-y-3",children:[e(t,{label:"Valid State",id:"ValidState",type:"text",placeholder:"Valid",validate:"This is valid state.",msgTooltip:!0}),e(t,{label:"Invalid State",id:"InvalidState",type:"text",placeholder:"Invalid",error:i,msgTooltip:!0})]})}),e("div",{className:"xl:col-span-2 col-span-1",children:a(l,{title:" Formatter Support",children:[e(t,{label:"Text input with formatter (on input)",id:"formatter-pn",type:"text",placeholder:"Enter your name",description:"We will convert your name to lowercase instantly",onChange:d=>{const p=d.target.value;s(p)}}),r.toLowerCase()]})})]})};export{y as default};
