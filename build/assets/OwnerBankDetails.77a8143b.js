import{r as s,v as Z,w as D,x as ee,j as l,F as w,s as le,C as ae,I as z,T as oe,ap as U,bN as G,y as ie,J as _,Q as x}from"./index.f7c12b39.js";import{m as $}from"./map.45e4b6c9.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\bank-details\\OwnerBankDetails.jsx";const V={option:(e,c)=>({...e,fontSize:"14px"})},ce=()=>{const[e,c]=s.exports.useState(""),N=new URLSearchParams(window.location.search).get("customer_id"),[u,L]=s.exports.useState(""),[y,C]=s.exports.useState(!1);s.exports.useEffect(()=>{(async()=>{if(N)try{const o=await(await fetch(`http://dev-rare.srp.ai/bankdetails/api/customer?customer_id=${N}`)).json();o&&L(o)}catch(i){console.error("Error fetching data:",i)}})()},[N]),s.exports.useEffect(()=>{u&&u!==""&&(u==null?void 0:u.message)!=="No Bank Details found"?(C(!1),c(u)):(C(!0),c(t=>({...t,customer_id:N,total_no_accounts:1})))},[u]),s.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/users/${e==null?void 0:e.customer_id}`)).json();o&&c({...e,customer_name:(o==null?void 0:o.firstname)+" "+(o==null?void 0:o.lastname),customer_passportnumber:o==null?void 0:o.passportidno,customer_email:o==null?void 0:o.email,customer_nationality:o==null?void 0:o.passportno,customer_mobilenumber:o==null?void 0:o.whatsappno,customer_passportpdf:(o==null?void 0:o.passportpdf)&&(o==null?void 0:o.passportpdf)!==void 0?o==null?void 0:o.passportpdf:""})})()},[e==null?void 0:e.customer_id]);const H=()=>{c({...e,total_no_accounts:(parseInt(e==null?void 0:e.total_no_accounts)?e==null?void 0:e.total_no_accounts:0)+1})},m=(t,i)=>{const{name:o,value:h}=t.target;c(v=>{const d=[...v.all_accounts||[]],g=d[i]||{};return d[i]={...g,[o]:h},{...v,all_accounts:d}})},J=t=>{let i=[...e.all_accounts];i.splice(t,1),c({...e,total_no_accounts:(e==null?void 0:e.total_no_accounts)-1,all_accounts:i})},[B,M]=s.exports.useState([]);s.exports.useEffect(()=>{const t=Object.entries($).map(([i,o])=>({label:i,value:i}));M(t)},[$]);const[R,Q]=s.exports.useState("");let K={customer_id:"Customer"};const W=Z({customer_id:D().required(R)}).required();ee({resolver:ie(W)});const X=()=>{let t=!1,i={customer_id:Q};return i&&Object.keys(i).length&&Object.keys(i).map(o=>{i[o](""),e[o]||(i[o](K[o]+" is required"),t=!0)}),t},[k,f]=s.exports.useState(!1),Y=localStorage.getItem("isAuth"),n=JSON.parse(Y),O=async t=>{if(!e.customer_id)X();else if(e.customer_id)if(f(!0),t==="Create"&&y===!0){n!=null&&n._id?(c({...e,createdBy:n==null?void 0:n._id}),await _.post("http://dev-rare.srp.ai/bankdetails",e),x.success("Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f(!1)):(await _.post("http://dev-rare.srp.ai/bankdetails",e),x.success("Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f(!1));try{const o=await(await fetch(`http://dev-rare.srp.ai/bankdetails/api/customer?customer_id=${N}`)).json();o&&(c(o),C(!1))}catch(i){console.error("Error fetching data:",i)}}else t==="Update"&&y===!1&&(n!=null&&n._id?(c({...e,updatedBy:n==null?void 0:n._id}),await _.patch("http://dev-rare.srp.ai/bankdetails",e),x.success("Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f(!1)):(await _.patch("http://dev-rare.srp.ai/bankdetails",e),x.success("Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f(!1)))};return l(w,{children:[l(le,{},void 0,!1,{fileName:a,lineNumber:279,columnNumber:13},void 0),l(ae,{title:"Bank Details Form",children:l("div",{className:"",children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l(w,{},void 0,!1),l("div",{className:" w-[100%] col-span-3",children:l("div",{className:"w-[100%] flex item-center justify-end select-none",children:[l("p",{className:"maintenance-para",children:e!=null&&e.total_no_accounts?e==null?void 0:e.total_no_accounts:0},void 0,!1,{fileName:a,lineNumber:374,columnNumber:33},void 0),l("div",{className:"p-[11px] maintenance-btn",onClick:H,children:l(z,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:376,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:375,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:373,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:372,columnNumber:25},void 0),l("div",{className:"w-[100%] col-span-3",children:(e==null?void 0:e.total_no_accounts)&&parseInt(e==null?void 0:e.total_no_accounts)>0&&l(w,{children:Array.from({length:e==null?void 0:e.total_no_accounts},(t,i)=>{var o,h,v,d,g,S,j,A,E,P,T,q,F,I;return l("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[i>=1?l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:a,lineNumber:390,columnNumber:61},void 0)},void 0,!1,{fileName:a,lineNumber:389,columnNumber:57},void 0):null,l("div",{className:" w-[100%] col-span-3 flex justify-end",children:l(oe,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("div",{className:"action-btn cursor-pointer",onClick:()=>J(i),children:l(z,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"},void 0,!1,{fileName:a,lineNumber:402,columnNumber:61},void 0)},void 0,!1,{fileName:a,lineNumber:401,columnNumber:57},void 0)},void 0,!1,{fileName:a,lineNumber:394,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:393,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Account Title"},void 0,!1,{fileName:a,lineNumber:407,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"account_title",className:"  form-control py-2   ",placeholder:"Type your Account Title",value:((h=(o=e==null?void 0:e.all_accounts)==null?void 0:o[i])==null?void 0:h.account_title)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:409,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:410,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:408,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:406,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Bank Name"},void 0,!1,{fileName:a,lineNumber:414,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"bank_name",className:"  form-control py-2   ",placeholder:"Type your Bank Name",value:((d=(v=e==null?void 0:e.all_accounts)==null?void 0:v[i])==null?void 0:d.bank_name)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:416,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:417,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:415,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:413,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Branch Name"},void 0,!1,{fileName:a,lineNumber:421,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"branch_name",className:"  form-control py-2   ",placeholder:"Type your Branch Name",value:((S=(g=e==null?void 0:e.all_accounts)==null?void 0:g[i])==null?void 0:S.branch_name)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:423,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:424,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:422,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:420,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Country"},void 0,!1,{fileName:a,lineNumber:428,columnNumber:53},void 0),l(U,{className:"react-select",classNamePrefix:"select",name:"country",value:G.getAllCountries().filter(function(r){var b,p;return r.name===((p=(b=e==null?void 0:e.all_accounts)==null?void 0:b[i])==null?void 0:p.country)}),options:G.getAllCountries(),styles:V,id:"hh",getOptionLabel:r=>r.name,getOptionValue:r=>r.name,onChange:r=>{m({target:{name:"country",value:r.name}},i)},placeholder:"Select Country"},void 0,!1,{fileName:a,lineNumber:431,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:427,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Branch Code"},void 0,!1,{fileName:a,lineNumber:454,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"branch_code",className:"  form-control py-2   ",placeholder:"Type your Branch Code",value:((A=(j=e==null?void 0:e.all_accounts)==null?void 0:j[i])==null?void 0:A.branch_code)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:456,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:457,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:455,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:453,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Swift Code"},void 0,!1,{fileName:a,lineNumber:461,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"swift_code",className:"  form-control py-2   ",placeholder:"Type your Swift Code",value:((P=(E=e==null?void 0:e.all_accounts)==null?void 0:E[i])==null?void 0:P.swift_code)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:463,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:464,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:462,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:460,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Account Number"},void 0,!1,{fileName:a,lineNumber:468,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"account_number",className:"  form-control py-2   ",placeholder:"Type your Account Number",value:((q=(T=e==null?void 0:e.all_accounts)==null?void 0:T[i])==null?void 0:q.account_number)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:470,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:471,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:469,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:467,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Currency"},void 0,!1,{fileName:a,lineNumber:475,columnNumber:53},void 0),l(U,{className:"react-select",classNamePrefix:"select",name:"currency_name",value:B.filter(function(r){var b,p;return r.label===((p=(b=e==null?void 0:e.all_accounts)==null?void 0:b[i])==null?void 0:p.currency_name)}),options:B,styles:V,id:"hh",onChange:r=>{m({target:{name:"currency_name",value:r.value}},i)},placeholder:"Select Currency"},void 0,!1,{fileName:a,lineNumber:478,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:474,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"IBAN Number"},void 0,!1,{fileName:a,lineNumber:495,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"iban_number",className:"  form-control py-2   ",placeholder:"Type your IBAN Number",value:((I=(F=e==null?void 0:e.all_accounts)==null?void 0:F[i])==null?void 0:I.iban_number)||"",onChange:r=>m(r,i)},void 0,!1,{fileName:a,lineNumber:497,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:498,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:496,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:494,columnNumber:49},void 0)]},i+1,!0,{fileName:a,lineNumber:386,columnNumber:45},void 0)})},void 0,!1)},void 0,!1,{fileName:a,lineNumber:381,columnNumber:25},void 0),l("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[y===!1?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${k===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>O("Update"),children:"Update"},void 0,!1,{fileName:a,lineNumber:514,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:513,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:512,columnNumber:37},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${k===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:()=>O("Create"),type:"button",children:"Submit"},void 0,!1,{fileName:a,lineNumber:519,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:518,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:517,columnNumber:37},void 0),k===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:a,lineNumber:527,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:526,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:509,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:282,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:281,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:280,columnNumber:13},void 0)]},void 0,!0)};export{ce as default};
