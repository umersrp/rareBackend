import{bt as b,r as m,j as l,F as u,e as v,L as n}from"./index.5ddab620.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\lead-management\\ViewLead.jsx";const k=()=>{const{id:o}=b(),[e,d]=m.exports.useState(""),[h,a]=m.exports.useState(!1);m.exports.useEffect(()=>{(async()=>{if(o){a(!0);const r=await(await fetch(`http://dev-rare.srp.ai/users/${o}`)).json();r&&d(r)}})()},[o]);const[c,N]=m.exports.useState([]);return m.exports.useEffect(()=>{e!=null&&e.employeeid&&(async()=>{if(await(await fetch("http://dev-rare.srp.ai/employees/"+(e==null?void 0:e.employeeid))).json()){let s=(item==null?void 0:item.email)+(item==null?void 0:item.designation)?" | "+(item==null?void 0:item.designation):"";N(s)}})()},[e==null?void 0:e.employeeid]),l(u,{children:l("div",{className:" space-y-5",children:l("div",{children:l("div",{children:l(v,{title:"View Lead",children:l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"First Name"},void 0,!1,{fileName:i,lineNumber:51,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.firstname?e==null?void 0:e.firstname:"Not Available"},void 0,!1,{fileName:i,lineNumber:54,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:50,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Last Name"},void 0,!1,{fileName:i,lineNumber:57,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.lastname?e==null?void 0:e.lastname:"Not Available"},void 0,!1,{fileName:i,lineNumber:60,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:56,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Email"},void 0,!1,{fileName:i,lineNumber:63,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:66,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:62,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Contact no"},void 0,!1,{fileName:i,lineNumber:69,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.contactno?e==null?void 0:e.contactno:"Not Available"},void 0,!1,{fileName:i,lineNumber:72,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:68,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Nationality"},void 0,!1,{fileName:i,lineNumber:75,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.passportno?e==null?void 0:e.passportno:"Not Available"},void 0,!1,{fileName:i,lineNumber:78,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:74,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Date Of Birth"},void 0,!1,{fileName:i,lineNumber:81,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.datebirth?new Date(e==null?void 0:e.datebirth).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:84,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:80,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assign To Agent"},void 0,!1,{fileName:i,lineNumber:87,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.employeeid?c:"Not Available"},void 0,!1,{fileName:i,lineNumber:90,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:86,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"},void 0,!1,{fileName:i,lineNumber:93,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.checkindate?new Date(e==null?void 0:e.checkindate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:96,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:92,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"},void 0,!1,{fileName:i,lineNumber:99,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.checkindate?new Date(e==null?void 0:e.checkoutdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:102,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:98,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"location"},void 0,!1,{fileName:i,lineNumber:105,columnNumber:53},void 0),e!=null&&e.location?l("a",{className:"  form-control py-2   overflow-hidden pr-[5pc] max-h-[38.68px]",href:e==null?void 0:e.location,target:"_blank",children:e==null?void 0:e.location},void 0,!1,{fileName:i,lineNumber:110,columnNumber:61},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:111,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:104,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"no.of guests"},void 0,!1,{fileName:i,lineNumber:115,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.no_guests?e==null?void 0:e.no_guests:"Not Available"},void 0,!1,{fileName:i,lineNumber:118,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:114,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Lead Status"},void 0,!1,{fileName:i,lineNumber:121,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.lead_status?e==null?void 0:e.lead_status:"Not Available"},void 0,!1,{fileName:i,lineNumber:124,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:120,columnNumber:49},void 0),(e==null?void 0:e.remarks)&&(e==null?void 0:e.remarks)!==""?l("div",{className:"lg:col-span-2 col-span-1",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Remarks"},void 0,!1,{fileName:i,lineNumber:129,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.remarks?e==null?void 0:e.remarks:"Not Available"},void 0,!1,{fileName:i,lineNumber:132,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:128,columnNumber:57},void 0):null]},void 0,!0,{fileName:i,lineNumber:49,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:48,columnNumber:41},void 0),l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(n,{to:"/all-leads",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:138,columnNumber:45},void 0),l(n,{to:`/update-leads/${o}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:139,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:137,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:47,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:46,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:45,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:44,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:43,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:42,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:41,columnNumber:13},void 0)},void 0,!1)};export{k as default};
