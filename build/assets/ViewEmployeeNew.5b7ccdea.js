import{bt as z,r as a,j as e,c6 as F,F as w,e as y,I as t,bP as R,bN as U,L as B,M as O}from"./index.be4bdfd6.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\employees\\ViewEmployeeNew.jsx";const T=({showModal:r,handleClose:i,loaderModal:f,linkedData:s,handleDeleteData:h,dataId:b,moduleName:c,rentpurchaseData:o,employeeEmail:v})=>e("div",{className:"thumbnail-container",children:r&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${c}?`},void 0,!1,{fileName:l,lineNumber:19,columnNumber:29},void 0),e("img",{src:R,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:i},void 0,!1,{fileName:l,lineNumber:20,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:18,columnNumber:25},void 0),f===!0?e(U,{},void 0,!1,{fileName:l,lineNumber:24,columnNumber:33},void 0):e(w,{children:[s!=null&&s.length?e("div",{className:"data-list-modal",children:e(w,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:c},void 0,!1,{fileName:l,lineNumber:31,columnNumber:57},void 0)," ",v," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:30,columnNumber:53},void 0),o!=null&&o.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "},void 0,!1,{fileName:l,lineNumber:36,columnNumber:101},void 0),o==null?void 0:o.map((n,N)=>e(B,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${n==null?void 0:n._id}?delete=true`,children:[n==null?void 0:n.unitnumber,N!==o.length-1?",":null]},N+1,!0,{fileName:l,lineNumber:39,columnNumber:77},void 0))]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(s==null?void 0:s.length)||(o==null?void 0:o.length)?e("p",{className:" mt-[10px]",children:`This ${c} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:51,columnNumber:49},void 0):null,!(s!=null&&s.length)&&!(o!=null&&o.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>h(b),children:"Delete"},void 0,!1,{fileName:l,lineNumber:55,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:17,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:16,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:14,columnNumber:9},void 0),H=()=>{const{id:r}=z(),[i,f]=a.exports.useState(""),[s,h]=a.exports.useState(""),[b,c]=a.exports.useState(!1),o=new URLSearchParams(window.location.search),v=o.get("delete"),[n,N]=a.exports.useState(!1),[j,A]=a.exports.useState(""),[C,x]=a.exports.useState(!1),[k,S]=a.exports.useState(!1),[J,P]=a.exports.useState(!1),[I,L]=a.exports.useState(""),[$,g]=a.exports.useState("");a.exports.useEffect(()=>{(async()=>{if(r){const m=await(await fetch(`http://dev-rare.srp.ai/employees/${r}`)).json();m&&f(m)}})()},[r]),a.exports.useEffect(()=>{v==="true"&&o&&(i==null?void 0:i.softdelete)===!1?c(!0):v==="true"&&o&&(i==null?void 0:i.softdelete)===!0&&(S(!0),c(!1))},[v,o,i==null?void 0:i.softdelete]),a.exports.useEffect(()=>{(async()=>{if(i!=null&&i.roleid){const m=await(await fetch(`http://dev-rare.srp.ai/roles/${i==null?void 0:i.roleid}`)).json();m&&h(m==null?void 0:m.rolename)}})()},[i==null?void 0:i.roleid]);const[p,M]=a.exports.useState(!1),q=()=>{M(!p)},V=async d=>{if(N(!0),x(!0),d)try{const u=`http://dev-rare.srp.ai/rentpurchase/api/search?employeeid=${d}`,m=await fetch(u);if(!m.ok&&m.status!==400)throw new Error(`API 2 failed with status: ${m.status}`);const E=m.status===400?[]:await m.json(),_=[...E];g(E),A(_),L(d),x(!1)}catch(u){console.error("Error fetching data:",u),x(!1)}};return e("div",{children:[e(T,{showModal:n,handleClose:()=>{N(!1),g("")},loaderModal:C,linkedData:j,handleDeleteData:async()=>{try{await O.patch("http://dev-rare.srp.ai/employees/api/employeedelete",{_id:r,softdelete:!0}),(async()=>{if(r){const m=await(await fetch(`http://dev-rare.srp.ai/employees/${r}`)).json();m&&f(m)}})(),g(""),S(!0),N(!1),x(!1),P(!1)}catch(d){console.log(d,"error")}},dataId:I,moduleName:"Employee",rentpurchaseData:$,employeeEmail:i==null?void 0:i.email},void 0,!1,{fileName:l,lineNumber:232,columnNumber:13},void 0),e("div",{className:"space-y-5 profile-page",children:[e("div",{className:"profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]",children:[e("div",{className:"bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"},void 0,!1,{fileName:l,lineNumber:235,columnNumber:21},void 0),e("div",{className:"profile-box flex-none md:text-start text-center",children:e("div",{className:"md:flex items-end md:space-x-6 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative",children:e("img",{src:F,alt:"",className:"w-full h-full object-cover rounded-full"},void 0,!1,{fileName:l,lineNumber:240,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:239,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:238,columnNumber:29},void 0),e("div",{className:"flex-1",children:[e("div",{className:"text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]",children:i!=null&&i.firstname?(i==null?void 0:i.firstname)+" "+(i==null?void 0:i.lastname):"Not Available"},void 0,!1,{fileName:l,lineNumber:254,columnNumber:33},void 0),e("div",{className:"text-sm font-light text-slate-600 dark:text-slate-400",children:i!=null&&i.designation?i==null?void 0:i.designation:"Designation not available"},void 0,!1,{fileName:l,lineNumber:257,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:253,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:237,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:236,columnNumber:21},void 0),e("div",{children:[b===!0&&k===!1?e("button",{onClick:()=>V(r),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Employee"},void 0,!1,{fileName:l,lineNumber:266,columnNumber:33},void 0):null,k===!0&&b===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Employee is deleted"},void 0,!1,{fileName:l,lineNumber:272,columnNumber:33},void 0):null]},void 0,!0,{fileName:l,lineNumber:263,columnNumber:21},void 0),e(w,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:234,columnNumber:17},void 0),e("div",{className:"grid grid-cols-12 gap-6",children:[e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Info",children:e("ul",{className:"list space-y-8",children:[e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:envelope"},void 0,!1,{fileName:l,lineNumber:312,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:311,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"EMAIL"},void 0,!1,{fileName:l,lineNumber:315,columnNumber:41},void 0),e("a",{href:"mailto:someone@example.com",className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.email?i==null?void 0:i.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:318,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:314,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:310,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:l,lineNumber:329,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:328,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Contact number"},void 0,!1,{fileName:l,lineNumber:332,columnNumber:41},void 0),e("a",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.mobileno?i==null?void 0:i.mobileno:"Not Available"},void 0,!1,{fileName:l,lineNumber:335,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:331,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:327,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300 ",children:e(t,{icon:"heroicons:map"},void 0,!1,{fileName:l,lineNumber:346,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:345,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Password"},void 0,!1,{fileName:l,lineNumber:349,columnNumber:41},void 0),e("div",{className:`${p===!1?"text-[20px]":"text-base"}  text-slate-600 dark:text-slate-50 flex justify-between items-center`,children:[e("p",{children:p===!0?i==null?void 0:i.password:"....."},void 0,!1,{fileName:l,lineNumber:353,columnNumber:45},void 0),e("span",{className:"cursor-pointer text-secondary-500",onClick:q,children:p===!0?e(t,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:l,lineNumber:360,columnNumber:57},void 0):e(t,{icon:"heroicons-outline:eye-off"},void 0,!1,{fileName:l,lineNumber:361,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:354,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:352,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:348,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:344,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:309,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:308,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:307,columnNumber:21},void 0),e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Company info",children:e("ul",{className:"list space-y-8",children:[e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:envelope"},void 0,!1,{fileName:l,lineNumber:375,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:374,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee ID"},void 0,!1,{fileName:l,lineNumber:378,columnNumber:41},void 0),e("p",{className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.employeeid?i==null?void 0:i.employeeid:"Not Available"},void 0,!1,{fileName:l,lineNumber:381,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:377,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:373,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:l,lineNumber:391,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:390,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Role"},void 0,!1,{fileName:l,lineNumber:394,columnNumber:41},void 0),e("p",{className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.roleid?s:"Not Available"},void 0,!1,{fileName:l,lineNumber:397,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:393,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:389,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:map"},void 0,!1,{fileName:l,lineNumber:407,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:406,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Code"},void 0,!1,{fileName:l,lineNumber:410,columnNumber:41},void 0),e("div",{className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.employeecode?i==null?void 0:i.employeecode:"Not Available"},void 0,!1,{fileName:l,lineNumber:413,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:409,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:405,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:map"},void 0,!1,{fileName:l,lineNumber:420,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:419,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Company"},void 0,!1,{fileName:l,lineNumber:423,columnNumber:41},void 0),e("div",{className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.company?i==null?void 0:i.company:"Not Available"},void 0,!1,{fileName:l,lineNumber:426,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:422,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:418,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:372,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:371,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:370,columnNumber:21},void 0),e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Visa info",children:e("ul",{className:"list space-y-8",children:[e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:envelope"},void 0,!1,{fileName:l,lineNumber:439,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:438,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Joining Date"},void 0,!1,{fileName:l,lineNumber:442,columnNumber:41},void 0),e("p",{className:"text-base text-slate-600 dark:text-slate-50",children:i!=null&&i.joiningdate?new Date(i==null?void 0:i.joiningdate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:445,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:441,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:437,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:l,lineNumber:455,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:454,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"visa expiry date"},void 0,!1,{fileName:l,lineNumber:458,columnNumber:41},void 0),e("p",{className:"text-base text-slate-600 dark:text-slate-50",children:(i==null?void 0:i.visaexpirydate)!=="None"&&(i==null?void 0:i.visaexpirydate)!==""?new Date(i==null?void 0:i.date_of_birth).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:461,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:457,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:453,columnNumber:33},void 0),e("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:e(t,{icon:"heroicons:map"},void 0,!1,{fileName:l,lineNumber:471,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:470,columnNumber:37},void 0),e("div",{className:"flex-1",children:[e("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Contract Expiry Date"},void 0,!1,{fileName:l,lineNumber:474,columnNumber:41},void 0),e("div",{className:"text-base text-slate-600 dark:text-slate-50",children:(i==null?void 0:i.contractexpirydate)!=="None"&&(i==null?void 0:i.contractexpirydate)!==""?new Date(i==null?void 0:i.contractexpirydate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:477,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:473,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:469,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:436,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:435,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:434,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:306,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:233,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:231,columnNumber:9},void 0)};export{H as default};
