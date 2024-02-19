import{bu as R,r as i,c as t,j as l,c4 as U,F as k,C as w,I as c,bP as V,bN as B,L as F,K as T}from"./index.288a2b39.js";const J=({showModal:d,handleClose:e,loaderModal:f,linkedData:n,handleDeleteData:g,dataId:N,moduleName:x,rentpurchaseData:s,employeeEmail:h})=>l("div",{className:"thumbnail-container",children:d&&l("div",{className:"modal-overlay-property",children:t("div",{className:"modal-new w-[850px]",children:[t("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${x}?`}),l("img",{src:V,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:e})]}),f===!0?l(B,{}):t(k,{children:[n!=null&&n.length?l("div",{className:"data-list-modal",children:t(k,{children:[t("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:x})," ",h," is linked with the following modules:"]}),s!=null&&s.length?l("ul",{className:" mb-[10px] text-start",children:t("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "}),s==null?void 0:s.map((o,m)=>t(F,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${o==null?void 0:o._id}?delete=true`,children:[o==null?void 0:o.unitnumber,m!==s.length-1?",":null]},m+1))]})}):null]})}):null,t("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(s==null?void 0:s.length)?l("p",{className:" mt-[10px]",children:`This ${x} is already linked. Please first delete these entries which are linked it with`}):null,!(n!=null&&n.length)&&!(s!=null&&s.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>g(N),children:"Delete"}):null]})]})]})})}),H=()=>{const{id:d}=R(),[e,f]=i.exports.useState(""),[n,g]=i.exports.useState(""),[N,x]=i.exports.useState(!1),s=new URLSearchParams(window.location.search),h=s.get("delete"),[o,m]=i.exports.useState(!1),[j,A]=i.exports.useState(""),[C,v]=i.exports.useState(!1),[u,S]=i.exports.useState(!1),[K,P]=i.exports.useState(!1),[I,L]=i.exports.useState(""),[$,y]=i.exports.useState("");i.exports.useEffect(()=>{(async()=>{if(d){const a=await(await fetch(`http://dev-rare.srp.ai/employees/${d}`)).json();a&&f(a)}})()},[d]),i.exports.useEffect(()=>{h==="true"&&s&&(e==null?void 0:e.softdelete)===!1?x(!0):h==="true"&&s&&(e==null?void 0:e.softdelete)===!0&&(S(!0),x(!1))},[h,s,e==null?void 0:e.softdelete]),i.exports.useEffect(()=>{(async()=>{if(e!=null&&e.roleid){const a=await(await fetch(`http://dev-rare.srp.ai/roles/${e==null?void 0:e.roleid}`)).json();a&&g(a==null?void 0:a.rolename)}})()},[e==null?void 0:e.roleid]);const[b,q]=i.exports.useState(!1),M=()=>{q(!b)},z=async r=>{if(m(!0),v(!0),r)try{const p=`http://dev-rare.srp.ai/rentpurchase/api/search?employeeid=${r}`,a=await fetch(p);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const E=a.status===400?[]:await a.json(),_=[...E];y(E),A(_),L(r),v(!1)}catch(p){console.error("Error fetching data:",p),v(!1)}};return t("div",{children:[l(J,{showModal:o,handleClose:()=>{m(!1),y("")},loaderModal:C,linkedData:j,handleDeleteData:async()=>{try{await T.patch("http://dev-rare.srp.ai/employees/api/employeedelete",{_id:d,softdelete:!0}),(async()=>{if(d){const a=await(await fetch(`http://dev-rare.srp.ai/employees/${d}`)).json();a&&f(a)}})(),y(""),S(!0),m(!1),v(!1),P(!1)}catch(r){console.log(r,"error")}},dataId:I,moduleName:"Employee",rentpurchaseData:$,employeeEmail:e==null?void 0:e.email}),t("div",{className:"space-y-5 profile-page",children:[t("div",{className:"profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]",children:[l("div",{className:"bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"}),l("div",{className:"profile-box flex-none md:text-start text-center",children:t("div",{className:"md:flex items-end md:space-x-6 rtl:space-x-reverse",children:[l("div",{className:"flex-none",children:l("div",{className:"md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative",children:l("img",{src:U,alt:"",className:"w-full h-full object-cover rounded-full"})})}),t("div",{className:"flex-1",children:[l("div",{className:"text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]",children:e!=null&&e.firstname?(e==null?void 0:e.firstname)+" "+(e==null?void 0:e.lastname):"Not Available"}),l("div",{className:"text-sm font-light text-slate-600 dark:text-slate-400",children:e!=null&&e.designation?e==null?void 0:e.designation:"Designation not available"})]})]})}),t("div",{children:[N===!0&&u===!1?l("button",{onClick:()=>z(d),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Employee"}):null,u===!0&&N===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Employee is deleted"}):null]}),l(k,{})]}),t("div",{className:"grid grid-cols-12 gap-6",children:[l("div",{className:"lg:col-span-4 col-span-12",children:l(w,{title:"Info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"EMAIL"}),l("a",{href:"mailto:someone@example.com",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Contact number"}),l("a",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.mobileno?e==null?void 0:e.mobileno:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300 ",children:l(c,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Password"}),t("div",{className:`${b===!1?"text-[20px]":"text-base"}  text-slate-600 dark:text-slate-50 flex justify-between items-center`,children:[l("p",{children:b===!0?e==null?void 0:e.password:"....."}),l("span",{className:"cursor-pointer text-secondary-500",onClick:M,children:b===!0?l(c,{icon:"heroicons-outline:eye"}):l(c,{icon:"heroicons-outline:eye-off"})})]})]})]})]})})}),l("div",{className:"lg:col-span-4 col-span-12",children:l(w,{title:"Company info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee ID"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.employeeid?e==null?void 0:e.employeeid:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Role"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.roleid?n:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Code"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.employeecode?e==null?void 0:e.employeecode:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Employee Company"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.company?e==null?void 0:e.company:"Not Available"})]})]})]})})}),l("div",{className:"lg:col-span-4 col-span-12",children:l(w,{title:"Visa info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Joining Date"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.joiningdate?new Date(e==null?void 0:e.joiningdate).toDateString():"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"visa expiry date"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:(e==null?void 0:e.visaexpirydate)!=="None"&&(e==null?void 0:e.visaexpirydate)!==""?new Date(e==null?void 0:e.date_of_birth).toDateString():"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(c,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Contract Expiry Date"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:(e==null?void 0:e.contractexpirydate)!=="None"&&(e==null?void 0:e.contractexpirydate)!==""?new Date(e==null?void 0:e.contractexpirydate).toDateString():"Not Available"})]})]})]})})})]})]})]})};export{H as default};
