import{r as i,y as Z,z as D,A as ee,c,F as w,j as t,v as te,f as ae,I as F,T as le,aq as G,bP as U,B as se,N as _,Q as x}from"./index.a4717e99.js";import{m as $}from"./map.45e4b6c9.js";const H={option:(e,n)=>({...e,fontSize:"14px"})},ne=()=>{const[e,n]=i.exports.useState(""),u=new URLSearchParams(window.location.search).get("customer_id"),[m,L]=i.exports.useState(""),[y,C]=i.exports.useState(!1);i.exports.useEffect(()=>{(async()=>{if(u)try{const a=await(await fetch(`http://portals.rarehomesgroup.com/bankdetails/api/customer?customer_id=${u}`)).json();a&&L(a)}catch(l){console.error("Error fetching data:",l)}})()},[u]),i.exports.useEffect(()=>{m&&m!==""&&(m==null?void 0:m.message)!=="No Bank Details found"?(C(!1),n(m)):(C(!0),n(r=>({...r,customer_id:u,total_no_accounts:1})))},[m]),i.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/users/${e==null?void 0:e.customer_id}`)).json();a&&n({...e,customer_name:(a==null?void 0:a.firstname)+" "+(a==null?void 0:a.lastname),customer_passportnumber:a==null?void 0:a.passportidno,customer_email:a==null?void 0:a.email,customer_nationality:a==null?void 0:a.passportno,customer_mobilenumber:a==null?void 0:a.whatsappno,customer_passportpdf:(a==null?void 0:a.passportpdf)&&(a==null?void 0:a.passportpdf)!==void 0?a==null?void 0:a.passportpdf:""})})()},[e==null?void 0:e.customer_id]);const V=()=>{n({...e,total_no_accounts:(parseInt(e==null?void 0:e.total_no_accounts)?e==null?void 0:e.total_no_accounts:0)+1})},p=(r,l)=>{const{name:a,value:v}=r.target;n(f=>{const d=[...f.all_accounts||[]],N=d[l]||{};return d[l]={...N,[a]:v},{...f,all_accounts:d}})},M=r=>{let l=[...e.all_accounts];l.splice(r,1),n({...e,total_no_accounts:(e==null?void 0:e.total_no_accounts)-1,all_accounts:l})},[B,J]=i.exports.useState([]);i.exports.useEffect(()=>{const r=Object.entries($).map(([l,a])=>({label:l,value:l}));J(r)},[$]);const[Q,R]=i.exports.useState("");let K={customer_id:"Customer"};const W=Z({customer_id:D().required(Q)}).required();ee({resolver:se(W)});const X=()=>{let r=!1,l={customer_id:R};return l&&Object.keys(l).length&&Object.keys(l).map(a=>{l[a](""),e[a]||(l[a](K[a]+" is required"),r=!0)}),r},[k,h]=i.exports.useState(!1),Y=localStorage.getItem("isAuth"),o=JSON.parse(Y),S=async r=>{if(!e.customer_id)X();else if(e.customer_id)if(h(!0),r==="Create"&&y===!0){o!=null&&o._id?(n({...e,createdBy:o==null?void 0:o._id}),await _.post("http://portals.rarehomesgroup.com/bankdetails",e),x.success("Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),h(!1)):(await _.post("http://portals.rarehomesgroup.com/bankdetails",e),x.success("Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),h(!1));try{const a=await(await fetch(`http://portals.rarehomesgroup.com/bankdetails/api/customer?customer_id=${u}`)).json();a&&(n(a),C(!1))}catch(l){console.error("Error fetching data:",l)}}else r==="Update"&&y===!1&&(o!=null&&o._id?(n({...e,updatedBy:o==null?void 0:o._id}),await _.patch("http://portals.rarehomesgroup.com/bankdetails",e),x.success("Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),h(!1)):(await _.patch("http://portals.rarehomesgroup.com/bankdetails",e),x.success("Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),h(!1)))};return c(w,{children:[t(te,{}),t(ae,{title:"Bank Details Form",children:t("div",{className:"",children:c("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[t(w,{}),t("div",{className:" w-[100%] col-span-3",children:c("div",{className:"w-[100%] flex item-center justify-end select-none",children:[t("p",{className:"maintenance-para",children:e!=null&&e.total_no_accounts?e==null?void 0:e.total_no_accounts:0}),t("div",{className:"p-[11px] maintenance-btn",onClick:V,children:t(F,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"})})]})}),t("div",{className:"w-[100%] col-span-3",children:(e==null?void 0:e.total_no_accounts)&&parseInt(e==null?void 0:e.total_no_accounts)>0&&t(w,{children:Array.from({length:e==null?void 0:e.total_no_accounts},(r,l)=>{var a,v,f,d,N,A,O,j,P,T,q,E,z,I;return c("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[l>=1?t("div",{className:"w-[100%] col-span-3",children:t("div",{className:"borderBottom"})}):null,t("div",{className:" w-[100%] col-span-3 flex justify-end",children:t(le,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("div",{className:"action-btn cursor-pointer",onClick:()=>M(l),children:t(F,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"})})})}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Account Title"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"account_title",className:"  form-control py-2   ",placeholder:"Type your Account Title",value:((v=(a=e==null?void 0:e.all_accounts)==null?void 0:a[l])==null?void 0:v.account_title)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Bank Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"bank_name",className:"  form-control py-2   ",placeholder:"Type your Bank Name",value:((d=(f=e==null?void 0:e.all_accounts)==null?void 0:f[l])==null?void 0:d.bank_name)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Branch Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"branch_name",className:"  form-control py-2   ",placeholder:"Type your Branch Name",value:((A=(N=e==null?void 0:e.all_accounts)==null?void 0:N[l])==null?void 0:A.branch_name)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Country"}),t(G,{className:"react-select",classNamePrefix:"select",name:"country",value:U.getAllCountries().filter(function(s){var b,g;return s.name===((g=(b=e==null?void 0:e.all_accounts)==null?void 0:b[l])==null?void 0:g.country)}),options:U.getAllCountries(),styles:H,id:"hh",getOptionLabel:s=>s.name,getOptionValue:s=>s.name,onChange:s=>{p({target:{name:"country",value:s.name}},l)},placeholder:"Select Country"})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Branch Code"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"branch_code",className:"  form-control py-2   ",placeholder:"Type your Branch Code",value:((j=(O=e==null?void 0:e.all_accounts)==null?void 0:O[l])==null?void 0:j.branch_code)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Swift Code"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"swift_code",className:"  form-control py-2   ",placeholder:"Type your Swift Code",value:((T=(P=e==null?void 0:e.all_accounts)==null?void 0:P[l])==null?void 0:T.swift_code)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Account Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"account_number",className:"  form-control py-2   ",placeholder:"Type your Account Number",value:((E=(q=e==null?void 0:e.all_accounts)==null?void 0:q[l])==null?void 0:E.account_number)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Currency"}),t(G,{className:"react-select",classNamePrefix:"select",name:"currency_name",value:B.filter(function(s){var b,g;return s.label===((g=(b=e==null?void 0:e.all_accounts)==null?void 0:b[l])==null?void 0:g.currency_name)}),options:B,styles:H,id:"hh",onChange:s=>{p({target:{name:"currency_name",value:s.value}},l)},placeholder:"Select Currency"})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"IBAN Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"iban_number",className:"  form-control py-2   ",placeholder:"Type your IBAN Number",value:((I=(z=e==null?void 0:e.all_accounts)==null?void 0:z[l])==null?void 0:I.iban_number)||"",onChange:s=>p(s,l)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]},l+1)})})}),c("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[y===!1?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${k===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>S("Update"),children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${k===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:()=>S("Create"),type:"button",children:"Submit"})})}),k===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})]})};export{ne as default};
