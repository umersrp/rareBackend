import{B as D,af as ee,r as n,x as le,y as x,am as ie,z as ae,j as l,F as c,e as oe,ap as U,aB as te,l as z,an as re,M as L,A as ne}from"./index.a2f6c442.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\Sales-Transaction-Module\\Expense\\ExpenseForm.jsx";const T={option:(p,g)=>({...p,fontSize:"14px"})},ue=()=>{var q,$;const p=D(),g=ee();let _=window.location.href.split("/"),v=_[_.length-1];const[f,b]=n.exports.useState(!1),[e,s]=n.exports.useState(""),[d,w]=n.exports.useState("");n.exports.useState("");const[j,me]=n.exports.useState(""),[h,B]=n.exports.useState([]);n.exports.useState([]);const[S,G]=n.exports.useState([]),[O,V]=n.exports.useState(""),[A,M]=n.exports.useState(""),[k,R]=n.exports.useState(""),[y,I]=n.exports.useState(""),[F,Y]=n.exports.useState("");n.exports.useState("");const H=o=>{V(o.target.files[0]),s({...e,titledeeddocument:o.target.files[0]})},J=async()=>{b(!0),(!e.propertyid||!d._id||!e.amount||!e.d_o_p)&&E();const o=new FormData;o.append("propertyid",e.propertyid),o.append("purposeid",d.id),o.append("amount",e.amount),o.append("d_o_p",new Date(e.d_o_p)),e.titledeeddocument&&o.append("expenseAttachment",e.titledeeddocument);const r="http://dev-rare.srp.ai/expense/create",a=o,m=await L.post(r,a,{headers:{"Content-Type":"multipart/form-data"}});b(!1),m.status===201&&m.data.status===!0&&p("/all-expenseform")},K=()=>{p("/all-expenseform")},Q=async o=>{var u;console.log("UUUUU",o),(!o.propertyid||!d._id||!o.amount||!o.d_o_p)&&E(),b(!0);const r=new FormData;r.append("propertyid",o.propertyid._id?o.propertyid._id:o.propertyid),r.append("purposeid",d.id?d.id:o.purposeid._id),r.append("amount",o.amount),r.append("d_o_p",new Date(o.d_o_p)),o.titledeeddocument&&r.append("expenseAttachment",o.titledeeddocument);const a=`http://dev-rare.srp.ai/expense/update/${o._id}`,m=r,t=await L.put(a,m,{headers:{"Content-Type":"multipart/form-data"}});b(!1),(t==null?void 0:t.status)===201&&((u=t==null?void 0:t.data)==null?void 0:u.status)===!0&&p("/all-expenseform")};console.log("userData======>",e);let W={propertyid:"Property",purposeid:"Purpose",amount:"Amount",d_o_p:"Date of Payment"};const X=le({propertyid:x().required(A),purposeid:x().required(k),amount:ie().required(y),d_o_p:x().required(F)}).required(),{register:C,formState:{errors:de}}=ae({resolver:ne(X)}),E=()=>{let o=!1,r={propertyid:M,purposeid:R,amount:I,d_o_p:Y};return r&&Object.keys(r).length&&Object.keys(r).map(a=>{r[a](""),e[a]||(r[a](W[a]+" is required"),o=!0)}),o};n.exports.useEffect(()=>{v&&fetch(`http://dev-rare.srp.ai/expense/get/${v}`).then(o=>o.json()).then(o=>{var r;(r=o==null?void 0:o.data)==null||r.map(a=>{s(a)})})},[v]),n.exports.useEffect(()=>{const o=()=>{fetch("http://dev-rare.srp.ai/property").then(a=>a.json()).then(a=>{const m=a==null?void 0:a.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));B(m)})},r=()=>{fetch("http://dev-rare.srp.ai/purpose/get").then(a=>a.json()).then(a=>{var t;const m=(t=a==null?void 0:a.data)==null?void 0:t.map(u=>({label:u.name,value:u._id}));G(m)})};o(),r()},[]),n.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const a=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();a&&s({...e,propertyid:a==null?void 0:a._id,unitnumber:a==null?void 0:a.unitnumber,buildingname:a==null?void 0:a.buildingname,floor:a==null?void 0:a.floor,buildingnumber:a==null?void 0:a.buildingnumber,projectname:a==null?void 0:a.projectname,communityname:a==null?void 0:a.communityname,city:a==null?void 0:a.propertycity,ownerid:a==null?void 0:a.customerid})}})()},[e==null?void 0:e.propertyid]),n.exports.useEffect(()=>{(async()=>{var r,a;if((r=e==null?void 0:e.propertyid)!=null&&r._id){const t=await(await fetch(`http://dev-rare.srp.ai/property/${(a=e==null?void 0:e.propertyid)==null?void 0:a._id}`)).json();t&&s({...e,unitnumber:t==null?void 0:t.unitnumber,buildingname:t==null?void 0:t.buildingname,floor:t==null?void 0:t.floor,buildingnumber:t==null?void 0:t.buildingnumber,projectname:t==null?void 0:t.projectname,communityname:t==null?void 0:t.communityname,city:t==null?void 0:t.propertycity,ownerid:t==null?void 0:t.customerid})}})()},[(q=e==null?void 0:e.propertyid)==null?void 0:q._id]),n.exports.useEffect(()=>{(async()=>{var u;console.log("ff3333fff",t);const a=await(await fetch(`http://dev-rare.srp.ai/property/${(u=t==null?void 0:t.propertyid)==null?void 0:u._id}`)).json();let m=[];m.push(a);const t=m==null?void 0:m.map(N=>({label:N.unitnumber+" | "+N.communityname+" | "+N.projectname+" | "+N.buildingname,value:N._id}));s(t)})()},[($=e==null?void 0:e.propertyid)==null?void 0:$._id]),n.exports.useEffect(()=>{(async()=>{var a;const r=e.purposeid._id;if(r){const t=await(await fetch(`http://dev-rare.srp.ai/purpose/get/${r}`)).json();t.data&&w({...d,name:(a=t==null?void 0:t.data)==null?void 0:a.name,id:t.data._id})}})()},[e]),console.log("purposeuserData",d);const P=o=>{const{name:r,value:a}=o.target;s({...e,[r]:a})},Z=o=>{const{name:r,value:a}=o.target;s({...e,[r]:a})};return l(c,{children:l("div",{className:"xl:col-span-2 col-span-1",children:l(oe,{title:"Expenses Form",children:[l("div",{children:l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 mb-4 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:i,lineNumber:349,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:348,columnNumber:29},void 0),l("div",{className:"w-[100%] col-span-3",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Property"},void 0,!1,{fileName:i,lineNumber:354,columnNumber:33},void 0),console.log("edc",e==null?void 0:e.propertyid),l(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:h,value:h&&h.filter(function(o){return o.value===(e==null?void 0:e.propertyid)}),onChange:o=>{s({...e,propertyid:o==null?void 0:o.value})},styles:T,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:i,lineNumber:358,columnNumber:33},void 0),l("div",{className:"flex items-center justify-between",children:l("div",{className:" text-danger-500 block text-sm",children:e!=null&&e.propertyid?null:A},void 0,!1,{fileName:i,lineNumber:375,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:374,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:353,columnNumber:29},void 0),l(c,{children:e.propertyid?l(c,{children:[l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Unit number"},void 0,!1,{fileName:i,lineNumber:386,columnNumber:49},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.unitnumber:e.propertyid?e.propertyid.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:388,columnNumber:53},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:389,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:387,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:385,columnNumber:45},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:393,columnNumber:49},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.communityname:e.propertyid?e.propertyid.communityname:"Not Available"},void 0,!1,{fileName:i,lineNumber:395,columnNumber:53},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:396,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:394,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:392,columnNumber:45},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:400,columnNumber:49},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.projectname:e.propertyid?e.propertyid.projectname:"Not Available"},void 0,!1,{fileName:i,lineNumber:402,columnNumber:53},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:403,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:401,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:399,columnNumber:45},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:407,columnNumber:49},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.buildingname:e.propertyid?e.propertyid.buildingname:"Not Available"},void 0,!1,{fileName:i,lineNumber:409,columnNumber:53},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:410,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:408,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:406,columnNumber:45},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Floor Level"},void 0,!1,{fileName:i,lineNumber:414,columnNumber:49},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.floor:e.propertyid?e.propertyid.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:416,columnNumber:53},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:417,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:415,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:413,columnNumber:45},void 0)]},void 0,!0):null},void 0,!1)]},void 0,!0,{fileName:i,lineNumber:344,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:343,columnNumber:21},void 0),l("div",{className:"flex gap-x-5 mb-5",children:[l("div",{className:"w-[100%] col-span-3 ",children:[l("label",{htmlFor:"purpose",className:"form-label",children:"Enter your Purpose"},void 0,!1,{fileName:i,lineNumber:438,columnNumber:37},void 0),l(U,{label:"Basic Select",className:"react-select  ",classNamePrefix:"select",options:S,value:S.filter(o=>o.value===d.id),onChange:o=>{w({...d,id:o==null?void 0:o.value})},styles:T,id:"purpose",placeholder:"Select your purpose"},void 0,!1,{fileName:i,lineNumber:441,columnNumber:37},void 0),l("div",{className:"flex items-center justify-between",children:l("div",{className:"text-danger-500 block text-sm",children:d!=null&&d.id?null:k},void 0,!1,{fileName:i,lineNumber:455,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:454,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:437,columnNumber:33},void 0),l("div",{className:"w-[100%] col-span-3",children:[l("label",{htmlFor:"d_o_p",className:"form-label",children:"Date of payment"},void 0,!1,{fileName:i,lineNumber:463,columnNumber:37},void 0),l(te,{className:"form-control py-2",name:"d_o_p",value:j?j.d_o_p:e.d_o_p||e.d_o_p,onChange:o=>{Z({target:{name:"d_o_p",value:o[0]}})},id:"default-picker",placeholder:"Select Date of Payment"},void 0,!1,{fileName:i,lineNumber:466,columnNumber:37},void 0),l("div",{className:"flex items-center justify-between",children:l("div",{className:"text-danger-500 block text-sm",children:e.d_o_p?null:F},void 0,!1,{fileName:i,lineNumber:477,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:476,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:462,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:435,columnNumber:29},void 0),g.pathname===`/expenseform/${v}`?l(c,{children:l("div",{className:"w-[50%] col-span-3 mb-5",children:[l(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:C,value:(e.amount,e.amount),onChange:P},void 0,!1,{fileName:i,lineNumber:489,columnNumber:45},void 0),l("div",{className:"flex items-center justify-between",children:l("div",{className:" text-danger-500 block text-sm",children:e.amount?null:y},void 0,!1,{fileName:i,lineNumber:499,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:498,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:488,columnNumber:41},void 0)},void 0,!1):l(c,{children:l("div",{className:"w-[50%] col-span-3 mb-5",children:[l(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:C,value:e.amount||e.amount,onChange:P},void 0,!1,{fileName:i,lineNumber:508,columnNumber:45},void 0),l("div",{className:"flex items-center justify-between",children:l("div",{className:" text-danger-500 block text-sm",children:e.amount?null:y},void 0,!1,{fileName:i,lineNumber:518,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:517,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:507,columnNumber:41},void 0)},void 0,!1),l("div",{className:"w-[50%] col-span-3",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Attachment"},void 0,!1,{fileName:i,lineNumber:530,columnNumber:33},void 0),l(re,{name:"expenseAttachment",selectedFile:O,onChange:H},void 0,!1,{fileName:i,lineNumber:533,columnNumber:33},void 0),l("div",{className:"flex items-center justify-between",children:e&&e.expenseAttachment?l("div",{className:"p-2",children:l("img",{src:`http://dev-rare.srp.ai/${e.expenseAttachment}`,width:150,height:150},void 0,!1,{fileName:i,lineNumber:546,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:545,columnNumber:45},void 0):null},void 0,!1,{fileName:i,lineNumber:538,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:529,columnNumber:29},void 0),l("div",{className:"flex flex-row-reverse gap-2 opacity-100",children:[e._id?l(c,{children:l("div",{className:"lg:col-span-2 col-span-1 relative",children:l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:()=>Q(e),type:"button",children:"Update"},void 0,!1,{fileName:i,lineNumber:590,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:589,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:588,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:587,columnNumber:41},void 0)},void 0,!1):l(c,{children:l("div",{className:"lg:col-span-2 col-span-1 relative",children:l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:J,type:"button",children:"Submit"},void 0,!1,{fileName:i,lineNumber:600,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:599,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:598,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:597,columnNumber:41},void 0)},void 0,!1),f===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:i,lineNumber:609,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:608,columnNumber:37},void 0):null,l("div",{className:"lg:col-span-2 col-span-1 relative",children:l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-light  text-center",onClick:K,type:"button",children:"Cancel"},void 0,!1,{fileName:i,lineNumber:616,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:615,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:614,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:613,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:583,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:342,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:341,columnNumber:13},void 0)},void 0,!1)};export{ue as default};
