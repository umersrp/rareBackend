import{r as n,c as l,j as e,C as t}from"./index.b108767f.js";import{T as a}from"./Textarea.25e7205f.js";const u=()=>{const r={message:"This is invalid state"},[i,d]=n.exports.useState("");return l("div",{className:"grid xl:grid-cols-2 gap-5 ",children:[e(t,{title:"Basic Textarea",children:e(a,{label:"Textarea",id:"pn4",placeholder:"Textarea"})}),e(t,{title:"Displayed Rows",children:e(a,{label:"Textarea",id:"pn4",placeholder:"Textarea",row:"5"})}),e(t,{title:"Horizontal Form Label Sizing",children:l("div",{className:" space-y-3",children:[e(a,{label:"Large",id:"largesize2",type:"text",placeholder:"Large Input",rows:"4",horizontal:!0}),e(a,{label:"Default",type:"text",id:"df",placeholder:"Default Input",horizontal:!0}),e(a,{label:"Small",id:"smallsize2",type:"text",placeholder:"Small Input",rows:"2",horizontal:!0})]})}),e(t,{title:"States",children:l("div",{className:" space-y-3",children:[e(a,{label:"Valid State",id:"ValidState",placeholder:"Valid",validate:"This is valid state."}),e(a,{label:"Invalid State",id:"InvalidState",placeholder:"Invalid",error:r})]})}),e(t,{title:"Input Validation States With Tootltips",children:l("div",{className:" space-y-3",children:[e(a,{label:"Valid State",id:"ValidState",placeholder:"Valid",validate:"This is valid state.",msgTooltip:!0}),e(a,{label:"Invalid State",id:"InvalidState",placeholder:"Invalid",error:r,msgTooltip:!0})]})}),l(t,{title:" Formatter Support",children:[e(a,{label:"Text input with formatter (on input)",id:"formatter-pn",type:"text",placeholder:"Enter your name",description:"We will convert your name to lowercase instantly",onChange:o=>{const s=o.target.value;d(s)}}),i.toLowerCase()]})]})};export{u as default};
