import{bt as ue,B as de,af as Ne,r as m,x as be,y as ve,z as fe,j as l,F as g,t as pe,e as he,ap as w,I as M,T as xe,bO as H,L as _e,A as ye,M as k,Q as C}from"./index.8fd1273d.js";import{m as R}from"./map.45e4b6c9.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\BankDetails\\BankDetailsForm.jsx";const A={option:(b,p)=>({...b,fontSize:"14px"})},we=()=>{const{id:b}=ue(),p=de(),J=Ne(),[e,d]=m.exports.useState("");m.exports.useEffect(()=>{(async()=>{if(b){const i=await(await fetch(`http://dev-rare.srp.ai/bankdetails/${b}`)).json();i&&d(i)}})()},[b]);const[N,Q]=m.exports.useState("");m.exports.useEffect(()=>{(async()=>{await fetch("http://dev-rare.srp.ai/users/api/customers").then(o=>o.json()).then(o=>{var c;const i=(c=o==null?void 0:o.users)==null?void 0:c.map(s=>({label:s.firstname+" "+s.lastname+" | "+s.email+" | "+s.passportidno+" | "+s.whatsappno,value:s._id}));Q(i)})})()},[]);const[Y,K]=m.exports.useState("");m.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/users/${e==null?void 0:e.customer_id}`)).json();i&&(d({...e,customer_name:(i==null?void 0:i.firstname)+" "+(i==null?void 0:i.lastname),customer_passportnumber:i==null?void 0:i.passportidno,customer_email:i==null?void 0:i.email,customer_nationality:i==null?void 0:i.passportno,customer_mobilenumber:i==null?void 0:i.whatsappno,customer_passportpdf:(i==null?void 0:i.passportpdf)&&(i==null?void 0:i.passportpdf)!==void 0?i==null?void 0:i.passportpdf:""}),K((i==null?void 0:i.passportpdf)&&(i==null?void 0:i.passportpdf)!==void 0?i==null?void 0:i.passportpdf:""))})()},[e==null?void 0:e.customer_id]);const W=()=>{d({...e,total_no_accounts:(parseInt(e==null?void 0:e.total_no_accounts)?e==null?void 0:e.total_no_accounts:0)+1})},u=(r,o)=>{const{name:i,value:c}=r.target;d(s=>{const f=[...s.all_accounts||[]],y=f[o]||{};return f[o]={...y,[i]:c},{...s,all_accounts:f}})},X=r=>{let o=[...e.all_accounts];o.splice(r,1),d({...e,total_no_accounts:(e==null?void 0:e.total_no_accounts)-1,all_accounts:o})},[B,Z]=m.exports.useState([]);m.exports.useEffect(()=>{const r=Object.entries(R).map(([o,i])=>({label:o,value:o}));Z(r)},[R]);const[ge,D]=m.exports.useState("");m.exports.useEffect(()=>{(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/bankdetails")).json();D(i)})()},[]);const[S,ee]=m.exports.useState(""),[le,_]=m.exports.useState(!1),[ae,O]=m.exports.useState(""),[ie,P]=m.exports.useState(""),[oe,E]=m.exports.useState(null),[re,j]=m.exports.useState(null);m.exports.useEffect(()=>{e&&e.all_accounts&&e.all_accounts.length>0&&(e.all_accounts.some((r,o)=>e.all_accounts.some((i,c)=>o!==c&&r.account_number===i.account_number&&r.account_number!==""&&i.account_number!==""?(E(o),_(!0),O("Duplicate Account Number"),!0):(E(null),_(!1),O(""),!1))),e.all_accounts.some((r,o)=>e.all_accounts.some((i,c)=>o!==c&&r.iban_number===i.iban_number&&r.iban_number!==""&&i.iban_number!==""?(j(o),_(!0),P("Duplicate IBN Number"),!0):(j(null),_(!1),P(""),!1))))},[e]);let te={customer_id:"Customer"};const me=be({customer_id:ve().required(S)}).required();fe({resolver:ye(me)});const ne=()=>{let r=!1,o={customer_id:ee};return o&&Object.keys(o).length&&Object.keys(o).map(i=>{o[i](""),e[i]||(o[i](te[i]+" is required"),r=!0)}),r},[v,se]=m.exports.useState(!1),ce=localStorage.getItem("isAuth"),n=JSON.parse(ce),F=async r=>{e.customer_id?e.customer_id&&le===!1&&(se(!0),r==="Create"?n!=null&&n._id?(d({...e,createdBy:n==null?void 0:n._id}),await k.post("http://dev-rare.srp.ai/bankdetails",e),C.success("Customer Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{p("/all-bankdetails")},1500)):(await k.post("http://dev-rare.srp.ai/bankdetails",e),C.success("Customer Bank details created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{p("/all-bankdetails")},1500)):r==="Update"&&(n!=null&&n._id?(d({...e,updatedBy:n==null?void 0:n._id}),await k.patch("http://dev-rare.srp.ai/bankdetails",e),C.success("Customer Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{p("/all-bankdetails")},1500)):(await k.patch("http://dev-rare.srp.ai/bankdetails",e),C.success("Customer Bank details Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{p("/all-bankdetails")},1500)))):ne()};return l(g,{children:[l(pe,{},void 0,!1,{fileName:a,lineNumber:401,columnNumber:13},void 0),l(he,{title:"Bank Details Form",children:l("div",{className:"",children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{className:"w-[100%] col-span-3",children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"SELECT YOUR CUSTOMER"},void 0,!1,{fileName:a,lineNumber:410,columnNumber:41},void 0),N!=null&&N.length?l(w,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N==null?void 0:N.filter(function(r){return r.value===(e==null?void 0:e.customer_id)}),onChange:r=>{d({...e,customer_id:r==null?void 0:r.value})},styles:A,id:"hh"},void 0,!1,{fileName:a,lineNumber:415,columnNumber:49},void 0):null]},void 0,!0,{fileName:a,lineNumber:409,columnNumber:37},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:S},void 0,!1,{fileName:a,lineNumber:431,columnNumber:37},void 0)]},void 0,!0,{fileName:a,lineNumber:408,columnNumber:33},void 0),l(g,{children:e!=null&&e.customer_id?l(g,{children:[l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Name"},void 0,!1,{fileName:a,lineNumber:438,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_name?e==null?void 0:e.customer_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:440,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:441,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:439,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:437,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Email"},void 0,!1,{fileName:a,lineNumber:445,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_email?e==null?void 0:e.customer_email:"Not Available"},void 0,!1,{fileName:a,lineNumber:447,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:448,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:446,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:444,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"},void 0,!1,{fileName:a,lineNumber:452,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_mobilenumber?e==null?void 0:e.customer_mobilenumber:"Not Available"},void 0,!1,{fileName:a,lineNumber:454,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:455,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:453,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:451,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport no"},void 0,!1,{fileName:a,lineNumber:459,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_passportnumber?e==null?void 0:e.customer_passportnumber:"Not Available"},void 0,!1,{fileName:a,lineNumber:461,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:462,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:460,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:458,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Nationality"},void 0,!1,{fileName:a,lineNumber:466,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_nationality?e==null?void 0:e.customer_nationality:"Not Available"},void 0,!1,{fileName:a,lineNumber:468,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:469,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:467,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:465,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"},void 0,!1,{fileName:a,lineNumber:473,columnNumber:53},void 0),Y!==""?l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.customer_passportPDF}`,children:decodeURIComponent(e==null?void 0:e.customer_passportPDF).split("/").pop()},void 0,!1,{fileName:a,lineNumber:477,columnNumber:65},void 0)},void 0,!1,{fileName:a,lineNumber:476,columnNumber:61},void 0):l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("p",{children:"Not Available"},void 0,!1,{fileName:a,lineNumber:481,columnNumber:65},void 0)},void 0,!1,{fileName:a,lineNumber:480,columnNumber:61},void 0)]},void 0,!0,{fileName:a,lineNumber:472,columnNumber:49},void 0)]},void 0,!0):null},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:407,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:406,columnNumber:25},void 0),l("div",{className:" w-[100%] col-span-3",children:l("div",{className:"mt-[25px] w-[100%] flex item-center justify-end select-none",children:[l("p",{className:"maintenance-para",children:e!=null&&e.total_no_accounts?e==null?void 0:e.total_no_accounts:0},void 0,!1,{fileName:a,lineNumber:495,columnNumber:33},void 0),l("div",{className:"p-[11px] maintenance-btn",onClick:W,children:l(M,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:497,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:496,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:494,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:493,columnNumber:25},void 0),l("div",{className:"w-[100%] col-span-3",children:(e==null?void 0:e.total_no_accounts)&&parseInt(e==null?void 0:e.total_no_accounts)>0&&l(g,{children:Array.from({length:e==null?void 0:e.total_no_accounts},(r,o)=>{var i,c,s,f,y,T,I,G,z,$,U,L,V,q;return l("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:a,lineNumber:509,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:508,columnNumber:49},void 0),l("div",{className:" w-[100%] col-span-3 flex justify-end",children:l(xe,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("div",{className:"action-btn cursor-pointer",onClick:()=>X(o),children:l(M,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"},void 0,!1,{fileName:a,lineNumber:520,columnNumber:61},void 0)},void 0,!1,{fileName:a,lineNumber:519,columnNumber:57},void 0)},void 0,!1,{fileName:a,lineNumber:512,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:511,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Account Title"},void 0,!1,{fileName:a,lineNumber:525,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"account_title",className:"  form-control py-2   ",placeholder:"Type your Account Title",value:((c=(i=e==null?void 0:e.all_accounts)==null?void 0:i[o])==null?void 0:c.account_title)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:527,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:528,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:526,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:524,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Bank Name"},void 0,!1,{fileName:a,lineNumber:532,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"bank_name",className:"  form-control py-2   ",placeholder:"Type your Bank Name",value:((f=(s=e==null?void 0:e.all_accounts)==null?void 0:s[o])==null?void 0:f.bank_name)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:534,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:535,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:533,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:531,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Branch Name"},void 0,!1,{fileName:a,lineNumber:539,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"branch_name",className:"  form-control py-2   ",placeholder:"Type your Branch Name",value:((T=(y=e==null?void 0:e.all_accounts)==null?void 0:y[o])==null?void 0:T.branch_name)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:541,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:542,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:540,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:538,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Country"},void 0,!1,{fileName:a,lineNumber:546,columnNumber:53},void 0),l(w,{className:"react-select",classNamePrefix:"select",name:"country",value:H.getAllCountries().filter(function(t){var h,x;return t.name===((x=(h=e==null?void 0:e.all_accounts)==null?void 0:h[o])==null?void 0:x.country)}),options:H.getAllCountries(),styles:A,id:"hh",getOptionLabel:t=>t.name,getOptionValue:t=>t.name,onChange:t=>{u({target:{name:"country",value:t.name}},o)},placeholder:"Select Country"},void 0,!1,{fileName:a,lineNumber:549,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:545,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Branch Code"},void 0,!1,{fileName:a,lineNumber:572,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"branch_code",className:"  form-control py-2   ",placeholder:"Type your Branch Code",value:((G=(I=e==null?void 0:e.all_accounts)==null?void 0:I[o])==null?void 0:G.branch_code)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:574,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:575,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:573,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:571,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Swift Code"},void 0,!1,{fileName:a,lineNumber:579,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"swift_code",className:"  form-control py-2   ",placeholder:"Type your Swift Code",value:(($=(z=e==null?void 0:e.all_accounts)==null?void 0:z[o])==null?void 0:$.swift_code)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:581,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:582,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:580,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:578,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Account Number"},void 0,!1,{fileName:a,lineNumber:586,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"account_number",className:"  form-control py-2   ",placeholder:"Type your Account Number",value:((L=(U=e==null?void 0:e.all_accounts)==null?void 0:U[o])==null?void 0:L.account_number)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:588,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:589,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:587,columnNumber:53},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:o===oe?ae:""},void 0,!1,{fileName:a,lineNumber:591,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:585,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Currency"},void 0,!1,{fileName:a,lineNumber:594,columnNumber:53},void 0),l(w,{className:"react-select",classNamePrefix:"select",name:"currency_name",value:B.filter(function(t){var h,x;return t.label===((x=(h=e==null?void 0:e.all_accounts)==null?void 0:h[o])==null?void 0:x.currency_name)}),options:B,styles:A,id:"hh",onChange:t=>{u({target:{name:"currency_name",value:t.value}},o)},placeholder:"Select Currency"},void 0,!1,{fileName:a,lineNumber:597,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:593,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"IBAN Number"},void 0,!1,{fileName:a,lineNumber:614,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"iban_number",className:"  form-control py-2   ",placeholder:"Type your IBAN Number",value:((q=(V=e==null?void 0:e.all_accounts)==null?void 0:V[o])==null?void 0:q.iban_number)||"",onChange:t=>u(t,o)},void 0,!1,{fileName:a,lineNumber:616,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:a,lineNumber:617,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:615,columnNumber:53},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:o===re?ie:""},void 0,!1,{fileName:a,lineNumber:619,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:613,columnNumber:49},void 0)]},o+1,!0,{fileName:a,lineNumber:507,columnNumber:45},void 0)})},void 0,!1)},void 0,!1,{fileName:a,lineNumber:502,columnNumber:25},void 0),l("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${v===!0?"cursor-not-allowed	":""}`,children:v===!0?l("div",{className:` ${v===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"},void 0,!1,{fileName:a,lineNumber:633,columnNumber:41},void 0):l(_e,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-bankdetails",children:"Cancel"},void 0,!1,{fileName:a,lineNumber:634,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:630,columnNumber:29},void 0),J.pathname===`/bankdetails-form/${b}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${v===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>F("Update"),children:"Update"},void 0,!1,{fileName:a,lineNumber:641,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:640,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:639,columnNumber:37},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${v===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:()=>F("Create"),type:"button",children:"Submit"},void 0,!1,{fileName:a,lineNumber:646,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:645,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:644,columnNumber:37},void 0),v===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:a,lineNumber:654,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:653,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:629,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:404,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:403,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:402,columnNumber:13},void 0)]},void 0,!0)};export{we as default};
