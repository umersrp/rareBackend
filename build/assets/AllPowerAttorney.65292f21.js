import{R as re,j as l,F as h,bL as ge,r as d,b as q,e as _e,L as ae,ap as oe,I as m,bM as Me,M as Ge,T as de,bN as Ye}from"./index.8fd1273d.js";import{G as Xe}from"./GlobalFilter.52bbeab2.js";import{D as le}from"./index.esm.f1d16506.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\PowerAttorney\\PowerAttorneyTable.jsx";const De=re.forwardRef(({indeterminate:A,...v},G)=>{const _=re.useRef(),B=G||_;return re.useEffect(()=>{B.current.indeterminate=A},[B,A]),l(h,{children:l("input",{type:"checkbox",ref:B,...v,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),Ne={option:(A,v)=>({...A,fontSize:"14px"})},qe=({title:A,linktitle:v,pagelink:G,allData:_,onDataUpdate:B,forFilterData:C,handleFilterSearch:x,handleClearFilter:ie,selectDateOption:y,setSelectDateOption:W,dateRangOption:J,valueDATEOFISSUE:S,valueEXPIRY:f,valueDATEOFREVALIDATION:P,valueREVALIDATIONEXPIRY:z,handleValueDATEOFISSUEChange:E,handleValueEXPIRYChange:O,handleValueDATEOFREVALIDATIONChange:H,handleValueREVALIDATIONEXPIRYChange:I,removeAllDateFilter:ne,dateFilterActive:M})=>{const te=localStorage.getItem("isAuth"),Y=JSON.parse(te),{data:p}=ge(Y==null?void 0:Y.roleid),[se,Q]=d.exports.useState(!1),[ce,ve]=d.exports.useState(!1),[me,u]=d.exports.useState(""),[b,o]=d.exports.useState(""),N=async e=>{Q(!0),o(e)},T=()=>{Q(!1)},F=async e=>{try{await Ge.patch("http://dev-rare.srp.ai/powerattorney/api/softdelete",{_id:e,softdelete:!0}),B()}catch(i){console.log(i,"error")}},j=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:i})=>l("span",{children:i.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:82,columnNumber:24},void 0)},{Header:"customer name",accessor:"customer_name",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:89,columnNumber:24},void 0)}},{Header:"customer email",accessor:"customer_email",Cell:e=>{var i,n;return l("span",{className:"normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:96,columnNumber:24},void 0)}},{Header:"customer mobile no.",accessor:"customer_mobilenumber",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:103,columnNumber:24},void 0)}},{Header:"other customer name",accessor:e=>{var i;return`${(i=e.other_customer)==null?void 0:i.customer_name}`},Cell:e=>{var i,n,t,s,D,k,L,R,$,V;return l(h,{children:((t=(n=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:n.original)==null?void 0:t.other_customer)&&((k=(D=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?l(h,{children:(V=($=(R=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:R.original)==null?void 0:$.other_customer)==null?void 0:V.map((r,X)=>l(h,{children:[l("span",{children:r!=null&&r.customer_name?r==null?void 0:r.customer_name:"Not Available"},X+1,!1,{fileName:a,lineNumber:118,columnNumber:49},void 0)," ",l("br",{},void 0,!1,{fileName:a,lineNumber:118,columnNumber:140},void 0)]},void 0,!0))},void 0,!1):l("span",{children:"Not Available"},void 0,!1,{fileName:a,lineNumber:123,columnNumber:33},void 0)},void 0,!1)}},{Header:"other customer email",accessor:e=>{var i;return`${(i=e.other_customer)==null?void 0:i.customer_email}`},Cell:e=>{var i,n,t,s,D,k,L,R,$,V;return l(h,{children:((t=(n=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:n.original)==null?void 0:t.other_customer)&&((k=(D=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?l(h,{children:(V=($=(R=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:R.original)==null?void 0:$.other_customer)==null?void 0:V.map((r,X)=>l(h,{children:[l("span",{className:"normal-case",children:r!=null&&r.customer_email?r==null?void 0:r.customer_email:"Not Available"},X+1,!1,{fileName:a,lineNumber:141,columnNumber:49},void 0)," ",l("br",{},void 0,!1,{fileName:a,lineNumber:141,columnNumber:166},void 0)]},void 0,!0))},void 0,!1):l("span",{children:"Not Available"},void 0,!1,{fileName:a,lineNumber:146,columnNumber:33},void 0)},void 0,!1)}},{Header:"other customer mobile no.",accessor:e=>{var i;return`${(i=e.other_customer)==null?void 0:i.customer_mobilenumber}`},Cell:e=>{var i,n,t,s,D,k,L,R,$,V;return l(h,{children:((t=(n=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:n.original)==null?void 0:t.other_customer)&&((k=(D=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?l(h,{children:(V=($=(R=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:R.original)==null?void 0:$.other_customer)==null?void 0:V.map((r,X)=>l(h,{children:[l("span",{children:r!=null&&r.customer_mobilenumber?r==null?void 0:r.customer_mobilenumber:"Not Available"},X+1,!1,{fileName:a,lineNumber:164,columnNumber:49},void 0)," ",l("br",{},void 0,!1,{fileName:a,lineNumber:164,columnNumber:156},void 0)]},void 0,!0))},void 0,!1):l("span",{children:"Not Available"},void 0,!1,{fileName:a,lineNumber:169,columnNumber:33},void 0)},void 0,!1)}},{Header:"poa taker name",accessor:"poa_taker_name",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:179,columnNumber:24},void 0)}},{Header:"poa language",accessor:"poa_language",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:186,columnNumber:24},void 0)}},{Header:"date of issue",accessor:"date_of_issue",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:193,columnNumber:24},void 0)}},{Header:"EXPIRY",accessor:"expiry_date",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:200,columnNumber:24},void 0)}},{Header:"DATE OF RE-VALIDATION",accessor:"date_of_revalidation",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:207,columnNumber:24},void 0)}},{Header:"RE - VALIDATION EXPIRY",accessor:"revalidation_expiry_date",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:214,columnNumber:24},void 0)}},{Header:"TYPE OF POA",accessor:"type_of_poa",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:221,columnNumber:24},void 0)}},{Header:"nominated",accessor:"nominated",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:238,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:239,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:231,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:230,columnNumber:21},void 0)}},{Header:"buying",accessor:"buying",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:259,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:260,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:252,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:251,columnNumber:21},void 0)}},{Header:"selling",accessor:"selling",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:280,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:281,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:273,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:272,columnNumber:21},void 0)}},{Header:"gifting",accessor:"gifting",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:301,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:302,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:294,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:293,columnNumber:21},void 0)}},{Header:"renting",accessor:"renting",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:322,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:323,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:315,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:314,columnNumber:21},void 0)}},{Header:"management",accessor:"management",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:343,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:344,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:336,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:335,columnNumber:21},void 0)}},{Header:"visa",accessor:"visa",Cell:e=>{var i,n,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?l(m,{icon:"heroicons:check",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:364,columnNumber:33},void 0):l(m,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"},void 0,!1,{fileName:a,lineNumber:365,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:357,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:356,columnNumber:21},void 0)}},{Header:"SPECIFIC REASON",accessor:"specific_reason",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:375,columnNumber:24},void 0)}},{Header:"CODE POWER NO.",accessor:"code_power_no",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:382,columnNumber:24},void 0)}},{Header:"CODE POWER BRANCH",accessor:"code_power_branch",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:389,columnNumber:24},void 0)}},{Header:"NO. OF POA (ORIGINAL) WITH US",accessor:"no_poa_with_us",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:396,columnNumber:24},void 0)}},{Header:"POA DONE THRU LAWYER/TYPIST/SELF",accessor:"poa_done",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:403,columnNumber:24},void 0)}},{Header:"AMOUNT PAID (AED) | COURT FEES",accessor:"court_fees",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?parseFloat((n=e==null?void 0:e.cell)==null?void 0:n.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:a,lineNumber:410,columnNumber:24},void 0)}},{Header:"AMOUNT PAID (AED) | SERVICE FEES",accessor:"service_fees",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?parseFloat((n=e==null?void 0:e.cell)==null?void 0:n.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:a,lineNumber:417,columnNumber:24},void 0)}},{Header:"attachment PDF/PNG/JPG",accessor:"attachment_doc",Cell:e=>{var i,n,t,s,D;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!==""?l("a",{className:"flex gap-x-[5px] items-center",href:"http://dev-rare.srp.ai"+((D=e==null?void 0:e.cell)==null?void 0:D.value),target:"_blank",children:[l(m,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:a,lineNumber:435,columnNumber:37},void 0),"View Document"]},void 0,!0,{fileName:a,lineNumber:434,columnNumber:33},void 0):"Not Available"},void 0,!1,{fileName:a,lineNumber:427,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:426,columnNumber:21},void 0)}},{Header:"Created-By",accessor:"employee_email_createdBy",Cell:e=>{var i,n;return l("span",{className:"normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:448,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:455,columnNumber:24},void 0)}},{Header:"Updated-By",accessor:"employee_email_updatedBy",Cell:e=>{var i,n;return l("span",{className:"normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:462,columnNumber:24},void 0)}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var i,n;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:469,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const i=localStorage.getItem("isAuth"),n=JSON.parse(i),{data:t}=ge(n==null?void 0:n.roleid);if(!t)return null;const s=(t==null?void 0:t.readpoa)===!0,D=(t==null?void 0:t.updatepoa)===!0,k=(t==null?void 0:t.deletepoa)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[s&&l(de,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(ae,{className:"action-btn",to:"#",type:"button",children:l(m,{icon:"heroicons:eye"},void 0,!1,{fileName:a,lineNumber:495,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:494,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:493,columnNumber:33},void 0),D&&l(de,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(ae,{to:`/poa-form/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(m,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:a,lineNumber:504,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:503,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:502,columnNumber:33},void 0),k&&l(de,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>N(e==null?void 0:e.cell.value),children:l(m,{icon:"heroicons:trash"},void 0,!1,{fileName:a,lineNumber:519,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:518,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:511,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:490,columnNumber:21},void 0)}}],g=d.exports.useMemo(()=>j,[]),ye=d.exports.useMemo(()=>_),ke=q.exports.useTable({columns:g,data:ye,initialState:{pageIndex:0,pageSize:50}},q.exports.useGlobalFilter,q.exports.useSortBy,q.exports.usePagination,q.exports.useRowSelect,e=>{e.visibleColumns.push(i=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:n})=>l("div",{children:l(De,{...n()},void 0,!1,{fileName:a,lineNumber:550,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:549,columnNumber:25},void 0),Cell:({row:n})=>l("div",{children:l(De,{...n.getToggleRowSelectedProps()},void 0,!1,{fileName:a,lineNumber:555,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:554,columnNumber:25},void 0)},...i])}),{getTableProps:Ae,getTableBodyProps:Ce,headerGroups:Se,footerGroups:We,page:Pe,nextPage:Ee,previousPage:Oe,canNextPage:K,canPreviousPage:Z,pageOptions:be,state:He,gotoPage:ue,pageCount:Ie,setPageSize:Te,setGlobalFilter:Fe,prepareRow:je}=ke,{globalFilter:Le,pageIndex:fe,pageSize:Re}=He,[w,$e]=d.exports.useState(!1),[c,ee]=d.exports.useState(""),pe=e=>{const{name:i,value:n}=e.target;ee({...c,[i]:n})},Ve=C==null?void 0:C.filter(e=>e.customer_email!==void 0),he=[...new Set(Ve.map(e=>e.customer_email))].sort((e,i)=>e.localeCompare(i,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),Ue=C==null?void 0:C.filter(e=>e.poa_taker_name!==void 0),xe=[...new Set(Ue.map(e=>e.poa_taker_name))].sort((e,i)=>e.localeCompare(i,void 0,{sensitivity:"base"})).map(e=>{const i=C.find(n=>n.poa_taker_name===e);return i?{label:i.poa_taker_name,value:i.poa_taker_name}:null}).filter(Boolean),Be=()=>{ie(),ee("")};return l(h,{children:l(_e,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:A},void 0,!1,{fileName:a,lineNumber:630,columnNumber:21},void 0),(p==null?void 0:p.createpoa)&&l(ae,{to:G,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:v},void 0,!1,{fileName:a,lineNumber:633,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:629,columnNumber:17},void 0),l("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:[l("div",{className:"flex justify-end items-center",children:l("div",{className:"flex justify-end items-center ",children:l("div",{className:"flex -gap-x-[5px] items-center",children:[l("div",{className:"w-[300px]",children:l(oe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(e){return e.value===y}),onChange:e=>{W(e==null?void 0:e.value)},styles:Ne,id:"hh",placeholder:"Select Date filter option..."},void 0,!1,{fileName:a,lineNumber:642,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:641,columnNumber:33},void 0),y&&y==="DATE OF ISSUE"?l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(le,{value:S,inputClassName:"input-class",containerClassName:"container-class",onChange:E,placeholder:"DATE OF ISSUE"},void 0,!1,{fileName:a,lineNumber:662,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:661,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:660,columnNumber:41},void 0):null,y&&y==="EXPIRY"?l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(le,{value:f,inputClassName:"input-class",containerClassName:"container-class",onChange:O,placeholder:"DATE OF ISSUE"},void 0,!1,{fileName:a,lineNumber:676,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:675,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:674,columnNumber:41},void 0):null,y&&y==="DATE OF RE-VALIDATION"?l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(le,{value:P,inputClassName:"input-class",containerClassName:"container-class",onChange:H,placeholder:"DATE OF ISSUE"},void 0,!1,{fileName:a,lineNumber:690,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:689,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:688,columnNumber:41},void 0):null,y&&y==="RE - VALIDATION EXPIRY"?l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(le,{value:z,inputClassName:"input-class",containerClassName:"container-class",onChange:I,placeholder:"DATE OF ISSUE"},void 0,!1,{fileName:a,lineNumber:704,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:703,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:702,columnNumber:41},void 0):null]},void 0,!0,{fileName:a,lineNumber:640,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:639,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:638,columnNumber:21},void 0),M===!0?l("button",{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",type:"button",onClick:ne,children:"Remove Date Filter"},void 0,!1,{fileName:a,lineNumber:720,columnNumber:29},void 0):null,l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>$e(!w),children:[w===!0?l(m,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:725,columnNumber:33},void 0):l(m,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:726,columnNumber:33},void 0),l("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"},void 0,!1,{fileName:a,lineNumber:728,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:722,columnNumber:21},void 0),l(Xe,{filter:Le,setFilter:Fe},void 0,!1,{fileName:a,lineNumber:730,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:637,columnNumber:17},void 0),l("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${w===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Customer Email"},void 0,!1,{fileName:a,lineNumber:734,columnNumber:25},void 0),l(oe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:he,value:he.filter(function(e){if((c==null?void 0:c.customer_email)!=="")return e.value===(c==null?void 0:c.customer_email)}),onChange:e=>{pe({target:{name:"customer_email",value:e.value}})},styles:Ne,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:737,columnNumber:25},void 0),c!=null&&c.customer_email?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>ee({...c,customer_email:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:756,columnNumber:33},void 0):null]},void 0,!0,{fileName:a,lineNumber:733,columnNumber:21},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"POA Taker Name"},void 0,!1,{fileName:a,lineNumber:762,columnNumber:25},void 0),l(oe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:xe,value:xe.filter(function(e){if((c==null?void 0:c.poa_taker_name)!=="")return e.value===(c==null?void 0:c.poa_taker_name)}),onChange:e=>{pe({target:{name:"poa_taker_name",value:e.value}})},styles:Ne,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:765,columnNumber:25},void 0),c!=null&&c.poa_taker_name?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>ee({...c,poa_taker_name:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:784,columnNumber:33},void 0):null]},void 0,!0,{fileName:a,lineNumber:761,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:732,columnNumber:17},void 0),l("div",{className:`flex ${w===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[l("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>Be(),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:791,columnNumber:21},void 0),l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>x(c),children:"Search"},void 0,!1,{fileName:a,lineNumber:792,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:790,columnNumber:17},void 0),l(Me,{showModal:se,handleClose:T,loaderModal:ce,linkedData:me,handleDeleteData:F,dataId:b,moduleName:"Power Of Attorney"},void 0,!1,{fileName:a,lineNumber:794,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[170%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Ae,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Se.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(i=>i.Header==="action"&&!((p==null?void 0:p.readpoa)===!0||(p==null?void 0:p.updatepoa)===!0||(p==null?void 0:p.deletepoa)===!0)?l("th",{},void 0,!1,{fileName:a,lineNumber:811,columnNumber:60},void 0):l("th",{...i.getHeaderProps(i.getSortByToggleProps()),scope:"col",className:"table-th",children:[i.render("Header"),l("span",{children:i.isSorted?i.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:821,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:815,columnNumber:53},void 0))},void 0,!1,{fileName:a,lineNumber:804,columnNumber:41},void 0))},void 0,!1,{fileName:a,lineNumber:802,columnNumber:33},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ce,children:Pe.map(e=>(je(e),l("tr",{...e.getRowProps(),children:e.cells.map(i=>l("td",{...i.getCellProps(),className:"table-td",children:i.render("Cell")},void 0,!1,{fileName:a,lineNumber:840,columnNumber:57},void 0))},void 0,!1,{fileName:a,lineNumber:837,columnNumber:45},void 0)))},void 0,!1,{fileName:a,lineNumber:830,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:798,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:797,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:796,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:795,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:Re,onChange:e=>Te(Number(e.target.value)),children:[50,100,200].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:a,lineNumber:861,columnNumber:33},void 0))},void 0,!1,{fileName:a,lineNumber:855,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[fe+1," of ",be.length]},void 0,!0,{fileName:a,lineNumber:868,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:866,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:854,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${Z?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ue(0),disabled:!Z,children:l(m,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:a,lineNumber:881,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:875,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:874,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${Z?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Oe(),disabled:!Z,children:"Prev"},void 0,!1,{fileName:a,lineNumber:885,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:884,columnNumber:25},void 0),be.map((e,i)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${i===fe?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>ue(i),children:e+1},void 0,!1,{fileName:a,lineNumber:896,columnNumber:33},void 0)},i,!1,{fileName:a,lineNumber:895,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${K?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Ee(),disabled:!K,children:"Next"},void 0,!1,{fileName:a,lineNumber:910,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:909,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>ue(Ie-1),disabled:!K,className:` ${K?"":"opacity-50 cursor-not-allowed"}`,children:l(m,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:a,lineNumber:926,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:920,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:919,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:873,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:853,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:628,columnNumber:13},void 0)},void 0,!1)};var U="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\PowerAttorney\\AllPowerAttorney.jsx";const we=()=>{const[A,v]=d.exports.useState([]),[G,_]=d.exports.useState(!1),[B,C]=d.exports.useState(""),[x,ie]=d.exports.useState("");d.exports.useEffect(()=>{_(!0),(async()=>{const o=await(await fetch("http://dev-rare.srp.ai/powerattorney")).json();v(o),C(o),ie(o),_(!1)})()},[]);const[y,W]=d.exports.useState(""),J=[{value:"DATE OF ISSUE",label:"DATE OF ISSUE"},{value:"EXPIRY",label:"EXPIRY"},{value:"DATE OF RE-VALIDATION",label:"DATE OF RE-VALIDATION"},{value:"RE - VALIDATION EXPIRY",label:"RE - VALIDATION EXPIRY"}],[S,f]=d.exports.useState({startDate:"",endDate:""}),[P,z]=d.exports.useState({startDate:"",endDate:""}),[E,O]=d.exports.useState({startDate:"",endDate:""}),[H,I]=d.exports.useState({startDate:"",endDate:""}),[ne,M]=d.exports.useState(!1),te=async u=>{const{startDate:b,endDate:o}=u,N=new Date(b),T=new Date(o),F=x.filter(j=>{const g=new Date(j.date_of_issue);return g>=N&&g<=T});v(F),M(!0),z({startDate:"",endDate:""}),O({startDate:"",endDate:""}),I({startDate:"",endDate:""})},Y=async u=>{const{startDate:b,endDate:o}=u,N=new Date(b),T=new Date(o),F=x.filter(j=>{const g=new Date(j.expiry_date);return g>=N&&g<=T});v(F),M(!0),f({startDate:"",endDate:""}),O({startDate:"",endDate:""}),I({startDate:"",endDate:""})},p=async u=>{const{startDate:b,endDate:o}=u,N=new Date(b),T=new Date(o),F=x.filter(j=>{const g=new Date(j.date_of_revalidation);return g>=N&&g<=T});v(F),M(!0),f({startDate:"",endDate:""}),f({startDate:"",endDate:""}),I({startDate:"",endDate:""})},se=async u=>{const{startDate:b,endDate:o}=u,N=new Date(b),T=new Date(o),F=x.filter(j=>{const g=new Date(j.revalidation_expiry_date);return g>=N&&g<=T});v(F),M(!0),f({startDate:"",endDate:""}),f({startDate:"",endDate:""}),O({startDate:"",endDate:""})},Q=async()=>{_(!0);const b=await(await fetch("http://dev-rare.srp.ai/powerattorney")).json();v(b),_(!1)};function ce(u){if(u)if((S==null?void 0:S.startDate)!==""&&(S==null?void 0:S.endDate)!==""||(P==null?void 0:P.startDate)&&(P==null?void 0:P.endDate)||(E==null?void 0:E.startDate)!==""&&(E==null?void 0:E.endDate)!==""||(H==null?void 0:H.startDate)&&(H==null?void 0:H.endDate)){const b=A.filter(o=>{let N=!0;return u.customer_email&&o.customer_email!==u.customer_email&&(N=!1),u.poa_taker_name&&o.poa_taker_name!==u.poa_taker_name&&(N=!1),N});v(b),_(!1)}else{const b=x.filter(o=>{let N=!0;return u.customer_email&&o.customer_email!==u.customer_email&&(N=!1),u.poa_taker_name&&o.poa_taker_name!==u.poa_taker_name&&(N=!1),N});v(b),_(!1)}else v(x),f({startDate:"",endDate:""}),f({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""})}const ve=async()=>{v(x),f({startDate:"",endDate:""}),f({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""}),_(!1)},me=()=>{W(""),v(x),f({startDate:"",endDate:""}),f({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""}),M(!1)};return l(h,{children:G===!1?l(h,{children:x!=null&&x.length?l("div",{className:" space-y-5",children:l(qe,{pagelink:"/poa-form",linktitle:"Add new Power Of Attorney",title:"All Power Of Attorney",allData:A,onDataUpdate:Q,forFilterData:B,handleFilterSearch:ce,handleClearFilter:ve,setSelectDateOption:W,dateRangOption:J,valueDATEOFISSUE:S,setValueDATEOFISSUE:f,valueEXPIRY:P,setValueEXPIRY:z,valueDATEOFREVALIDATION:E,setValueDATEOFREVALIDATION:O,valueREVALIDATIONEXPIRY:H,handleValueDATEOFISSUEChange:te,handleValueEXPIRYChange:Y,handleValueDATEOFREVALIDATIONChange:p,handleValueREVALIDATIONEXPIRYChange:se,setValueREVALIDATIONEXPIRY:I,removeAllDateFilter:me,dateFilterActive:ne,selectDateOption:y},void 0,!1,{fileName:U,lineNumber:307,columnNumber:37},void 0)},void 0,!1,{fileName:U,lineNumber:306,columnNumber:33},void 0):l(_e,{children:l(h,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"All Power Of Attorney"},void 0,!1,{fileName:U,lineNumber:312,columnNumber:45},void 0),l(ae,{to:"/poa-form",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Power Of Attorney"},void 0,!1,{fileName:U,lineNumber:313,columnNumber:45},void 0)]},void 0,!0,{fileName:U,lineNumber:311,columnNumber:41},void 0),l("p",{children:"No Power Of Attorney Found"},void 0,!1,{fileName:U,lineNumber:315,columnNumber:41},void 0)]},void 0,!0)},void 0,!1,{fileName:U,lineNumber:309,columnNumber:33},void 0)},void 0,!1):l(Ye,{},void 0,!1,{fileName:U,lineNumber:320,columnNumber:27},void 0)},void 0,!1)};export{we as default};
