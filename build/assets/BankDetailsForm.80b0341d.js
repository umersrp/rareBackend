import{bu as me,E as de,ag as ue,r as o,y as he,z as be,A as fe,c as s,F as y,j as t,v as xe,f as ve,aq as w,I as H,T as Ne,bP as M,L as _e,B as ge,N as k,Q as C}from"./index.4113582e.js";import{m as R}from"./map.45e4b6c9.js";const A={option:(h,x)=>({...h,fontSize:"14px"})},we=()=>{const{id:h}=me(),x=de(),J=ue(),[e,d]=o.exports.useState("");o.exports.useEffect(()=>{(async()=>{if(h){const l=await(await fetch(`http://portals.rarehomesgroup.com/bankdetails/${h}`)).json();l&&d(l)}})()},[h]);const[u,Q]=o.exports.useState("");o.exports.useEffect(()=>{(async()=>{await fetch("http://portals.rarehomesgroup.com/users/api/customers").then(a=>a.json()).then(a=>{var p;const l=(p=a==null?void 0:a.users)==null?void 0:p.map(i=>({label:i.firstname+" "+i.lastname+" | "+i.email+" | "+i.passportidno+" | "+i.whatsappno,value:i._id}));Q(l)})})()},[]);const[Y,K]=o.exports.useState("");o.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const l=await(await fetch(`http://portals.rarehomesgroup.com/users/${e==null?void 0:e.customer_id}`)).json();l&&(d({...e,customer_name:(l==null?void 0:l.firstname)+" "+(l==null?void 0:l.lastname),customer_passportnumber:l==null?void 0:l.passportidno,customer_email:l==null?void 0:l.email,customer_nationality:l==null?void 0:l.passportno,customer_mobilenumber:l==null?void 0:l.whatsappno,customer_passportpdf:(l==null?void 0:l.passportpdf)&&(l==null?void 0:l.passportpdf)!==void 0?l==null?void 0:l.passportpdf:""}),K((l==null?void 0:l.passportpdf)&&(l==null?void 0:l.passportpdf)!==void 0?l==null?void 0:l.passportpdf:""))})()},[e==null?void 0:e.customer_id]);const W=()=>{d({...e,total_no_accounts:(parseInt(e==null?void 0:e.total_no_accounts)?e==null?void 0:e.total_no_accounts:0)+1})},m=(r,a)=>{const{name:l,value:p}=r.target;d(i=>{const f=[...i.all_accounts||[]],g=f[a]||{};return f[a]={...g,[l]:p},{...i,all_accounts:f}})},X=r=>{let a=[...e.all_accounts];a.splice(r,1),d({...e,total_no_accounts:(e==null?void 0:e.total_no_accounts)-1,all_accounts:a})},[S,Z]=o.exports.useState([]);o.exports.useEffect(()=>{const r=Object.entries(R).map(([a,l])=>({label:a,value:a}));Z(r)},[R]);const[ye,D]=o.exports.useState("");o.exports.useEffect(()=>{(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/bankdetails")).json();D(l)})()},[]);const[B,ee]=o.exports.useState(""),[te,_]=o.exports.useState(!1),[le,O]=o.exports.useState(""),[ae,P]=o.exports.useState(""),[se,E]=o.exports.useState(null),[re,T]=o.exports.useState(null);o.exports.useEffect(()=>{e&&e.all_accounts&&e.all_accounts.length>0&&(e.all_accounts.some((r,a)=>e.all_accounts.some((l,p)=>a!==p&&r.account_number===l.account_number&&r.account_number!==""&&l.account_number!==""?(E(a),_(!0),O("Duplicate Account Number"),!0):(E(null),_(!1),O(""),!1))),e.all_accounts.some((r,a)=>e.all_accounts.some((l,p)=>a!==p&&r.iban_number===l.iban_number&&r.iban_number!==""&&l.iban_number!==""?(T(a),_(!0),P("Duplicate IBN Number"),!0):(T(null),_(!1),P(""),!1))))},[e]);let ce={customer_id:"Customer"};const oe=he({customer_id:be().required(B)}).required();fe({resolver:ge(oe)});const ne=()=>{let r=!1,a={customer_id:ee};return a&&Object.keys(a).length&&Object.keys(a).map(l=>{a[l](""),e[l]||(a[l](ce[l]+" is required"),r=!0)}),r},[b,ie]=o.exports.useState(!1),pe=localStorage.getItem("isAuth"),n=JSON.parse(pe),j=async r=>{e.customer_id?e.customer_id&&te===!1&&(ie(!0),r==="Create"?n!=null&&n._id?(d({...e,createdBy:n==null?void 0:n._id}),await k.post("http://portals.rarehomesgroup.com/bankdetails",e),C.success("Customer Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{x("/all-bankdetails")},1500)):(await k.post("http://portals.rarehomesgroup.com/bankdetails",e),C.success("Customer Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{x("/all-bankdetails")},1500)):r==="Update"&&(n!=null&&n._id?(d({...e,updatedBy:n==null?void 0:n._id}),await k.patch("http://portals.rarehomesgroup.com/bankdetails",e),C.success("Customer Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{x("/all-bankdetails")},1500)):(await k.patch("http://portals.rarehomesgroup.com/bankdetails",e),C.success("Customer Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{x("/all-bankdetails")},1500)))):ne()};return s(y,{children:[t(xe,{}),t(ve,{title:"Bank Details Form",children:t("div",{className:"",children:s("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:s("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5 mt-[20px]",children:[s("div",{className:"w-[100%] col-span-3",children:[s("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"SELECT YOUR CUSTOMER"}),u!=null&&u.length?t(w,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:u,value:u==null?void 0:u.filter(function(r){return r.value===(e==null?void 0:e.customer_id)}),onChange:r=>{d({...e,customer_id:r==null?void 0:r.value})},styles:A,id:"hh"}):null]}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:B})]}),t(y,{children:e!=null&&e.customer_id?s(y,{children:[s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Name"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_name?e==null?void 0:e.customer_name:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Email"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_email?e==null?void 0:e.customer_email:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_mobilenumber?e==null?void 0:e.customer_mobilenumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport no"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_passportnumber?e==null?void 0:e.customer_passportnumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Nationality"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_nationality?e==null?void 0:e.customer_nationality:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"}),Y!==""?t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.customer_passportPDF}`,children:decodeURIComponent(e==null?void 0:e.customer_passportPDF).split("/").pop()})}):t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("p",{children:"Not Available"})})]})]}):null})]})}),t("div",{className:" w-[100%] col-span-3",children:s("div",{className:"mt-[25px] w-[100%] flex item-center justify-end select-none",children:[t("p",{className:"maintenance-para",children:e!=null&&e.total_no_accounts?e==null?void 0:e.total_no_accounts:0}),t("div",{className:"p-[11px] maintenance-btn",onClick:W,children:t(H,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"})})]})}),t("div",{className:"w-[100%] col-span-3",children:(e==null?void 0:e.total_no_accounts)&&parseInt(e==null?void 0:e.total_no_accounts)>0&&t(y,{children:Array.from({length:e==null?void 0:e.total_no_accounts},(r,a)=>{var l,p,i,f,g,I,G,F,z,$,U,q,L,V;return s("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[t("div",{className:"w-[100%] col-span-3",children:t("div",{className:"borderBottom"})}),t("div",{className:" w-[100%] col-span-3 flex justify-end",children:t(Ne,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("div",{className:"action-btn cursor-pointer",onClick:()=>X(a),children:t(H,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"})})})}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Account Title"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"account_title",className:"  form-control py-2   ",placeholder:"Type your Account Title",value:((p=(l=e==null?void 0:e.all_accounts)==null?void 0:l[a])==null?void 0:p.account_title)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Bank Name"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"bank_name",className:"  form-control py-2   ",placeholder:"Type your Bank Name",value:((f=(i=e==null?void 0:e.all_accounts)==null?void 0:i[a])==null?void 0:f.bank_name)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Branch Name"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"branch_name",className:"  form-control py-2   ",placeholder:"Type your Branch Name",value:((I=(g=e==null?void 0:e.all_accounts)==null?void 0:g[a])==null?void 0:I.branch_name)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Country"}),t(w,{className:"react-select",classNamePrefix:"select",name:"country",value:M.getAllCountries().filter(function(c){var v,N;return c.name===((N=(v=e==null?void 0:e.all_accounts)==null?void 0:v[a])==null?void 0:N.country)}),options:M.getAllCountries(),styles:A,id:"hh",getOptionLabel:c=>c.name,getOptionValue:c=>c.name,onChange:c=>{m({target:{name:"country",value:c.name}},a)},placeholder:"Select Country"})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Branch Code"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"branch_code",className:"  form-control py-2   ",placeholder:"Type your Branch Code",value:((F=(G=e==null?void 0:e.all_accounts)==null?void 0:G[a])==null?void 0:F.branch_code)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Swift Code"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"swift_code",className:"  form-control py-2   ",placeholder:"Type your Swift Code",value:(($=(z=e==null?void 0:e.all_accounts)==null?void 0:z[a])==null?void 0:$.swift_code)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Account Number"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"account_number",className:"  form-control py-2   ",placeholder:"Type your Account Number",value:((q=(U=e==null?void 0:e.all_accounts)==null?void 0:U[a])==null?void 0:q.account_number)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:a===se?le:""})]}),s("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Currency"}),t(w,{className:"react-select",classNamePrefix:"select",name:"currency_name",value:S.filter(function(c){var v,N;return c.label===((N=(v=e==null?void 0:e.all_accounts)==null?void 0:v[a])==null?void 0:N.currency_name)}),options:S,styles:A,id:"hh",onChange:c=>{m({target:{name:"currency_name",value:c.value}},a)},placeholder:"Select Currency"})]}),s("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"IBAN Number"}),s("div",{className:"relative ",children:[t("input",{type:"text",name:"iban_number",className:"  form-control py-2   ",placeholder:"Type your IBAN Number",value:((V=(L=e==null?void 0:e.all_accounts)==null?void 0:L[a])==null?void 0:V.iban_number)||"",onChange:c=>m(c,a)}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:a===re?ae:""})]})]},a+1)})})}),s("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${b===!0?"cursor-not-allowed	":""}`,children:b===!0?t("div",{className:` ${b===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t(_e,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-bankdetails",children:"Cancel"})}),J.pathname===`/bankdetails-form/${h}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${b===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>j("Update"),children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${b===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:()=>j("Create"),type:"button",children:"Submit"})})}),b===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})]})};export{we as default};
