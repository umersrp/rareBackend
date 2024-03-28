import{bt as he,bL as ye,b_ as xe,r as c,j as l,F as t,bN as Q,e as we,L as v,I as E,bP as ge,M as ke,b$ as Fe}from"./index.9c32dce1.js";import{P as Ae}from"./pdf-icon.2fc2c516.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\properties\\ViewProperty.jsx";const Pe=({data:r,label:y})=>{const[f,u]=c.exports.useState(!1),e=(d,a)=>{Fe.exports.saveAs(d,a)},x=()=>{u(!0)},p=()=>{u(!1)};return l("div",{className:"thumbnail-container",children:[l("label",{htmlFor:"default-picker",className:"form-label",children:y},void 0,!1,{fileName:i,lineNumber:29,columnNumber:13},void 0),l("div",{className:"thumbnail-wrapper",children:r&&r!==void 0&&r!=="undefined"?l("div",{className:`thumbnail ${r.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[r.toLowerCase().endsWith(".pdf")?l("img",{src:Ae,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"},void 0,!1,{fileName:i,lineNumber:36,columnNumber:29},void 0):l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract"},void 0,!1,{fileName:i,lineNumber:42,columnNumber:29},void 0),l("div",{className:"thumbnail-buttons",children:l("div",{className:"flex items-center justify-center gap-x-[10px]",children:[l("button",{onClick:()=>e(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-download",children:l(E,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:i,lineNumber:47,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:46,columnNumber:33},void 0),r.toLowerCase().endsWith(".pdf")?l("a",{target:"_blank",href:`http://dev-rare.srp.ai${r}`,className:"btn-view text-white",children:l(E,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:55,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:54,columnNumber:41},void 0):l("button",{onClick:x,className:"btn-view",children:l(E,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:52,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:51,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:45,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:44,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:34,columnNumber:21},void 0):l("p",{className:"form-control py-2",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:62,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:32,columnNumber:13},void 0),f&&l("div",{className:"modal-overlay",children:l("div",{className:"modal",children:[l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"},void 0,!1,{fileName:i,lineNumber:68,columnNumber:25},void 0),l("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[l("button",{onClick:()=>e(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"},void 0,!1,{fileName:i,lineNumber:70,columnNumber:29},void 0),l("button",{onClick:p,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"},void 0,!1,{fileName:i,lineNumber:71,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:69,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:67,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:28,columnNumber:9},void 0)},_e=({showModal:r,handleClose:y,loaderModal:f,linkedData:u,handleDeleteData:e,dataId:x,moduleName:p,booking:d,managementcontract:a,tenantcontract:s,rentpurchase:N,unitNumber:w,unit_Number:h})=>l("div",{className:"thumbnail-container",children:r&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${p}?`},void 0,!1,{fileName:i,lineNumber:89,columnNumber:29},void 0),l("img",{src:ge,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:y},void 0,!1,{fileName:i,lineNumber:90,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:87,columnNumber:25},void 0),f===!0?l(Q,{},void 0,!1,{fileName:i,lineNumber:94,columnNumber:33},void 0):l(t,{children:[u!=null&&u.length?l("div",{className:"data-list-modal",children:l(t,{children:[l("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:"Property"},void 0,!1,{fileName:i,lineNumber:101,columnNumber:57},void 0)," ",h," is linked with the following modules:"]},void 0,!0,{fileName:i,lineNumber:100,columnNumber:53},void 0),d!=null&&d.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Booking: "},void 0,!1,{fileName:i,lineNumber:106,columnNumber:101},void 0),d==null?void 0:d.map((m,b)=>l(v,{className:" mr-[5px] hover:underline",to:`/view-booking/${m==null?void 0:m._id}?delete=true`,children:[m==null?void 0:m.bookingnumber,b!==d.length-1?",":null]},b+1,!0,{fileName:i,lineNumber:109,columnNumber:77},void 0))]},void 0,!0,{fileName:i,lineNumber:106,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:105,columnNumber:61},void 0):null,s!=null&&s.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Tenant Contract: "},void 0,!1,{fileName:i,lineNumber:118,columnNumber:101},void 0),s==null?void 0:s.map((m,b)=>l(v,{className:" mr-[5px] hover:underline",to:`/view-tenantcontract/${m==null?void 0:m._id}?delete=true`,children:["TC-"+(m==null?void 0:m._id.slice(0,6)),b!==s.length-1?",":null]},b+1,!0,{fileName:i,lineNumber:121,columnNumber:77},void 0))]},void 0,!0,{fileName:i,lineNumber:118,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:117,columnNumber:61},void 0):null,N!=null&&N.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "},void 0,!1,{fileName:i,lineNumber:131,columnNumber:69},void 0),N==null?void 0:N.map((m,b)=>l(v,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${m==null?void 0:m._id}?delete=true`,children:["AS-"+(m==null?void 0:m._id.slice(0,6)),b!==N.length-1?",":null]},b+1,!0,{fileName:i,lineNumber:134,columnNumber:77},void 0))]},void 0,!0,{fileName:i,lineNumber:130,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:129,columnNumber:61},void 0):null,a!=null&&a.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Management Contract: "},void 0,!1,{fileName:i,lineNumber:144,columnNumber:69},void 0),a==null?void 0:a.map((m,b)=>l(v,{className:" mr-[5px] hover:underline",to:`/view-managementcontract/${m==null?void 0:m._id}?delete=true`,children:["MC-"+(m==null?void 0:m._id.slice(0,6)),b!==a.length-1?",":null]},b+1,!0,{fileName:i,lineNumber:147,columnNumber:77},void 0))]},void 0,!0,{fileName:i,lineNumber:143,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:142,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:98,columnNumber:45},void 0):null,l("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[l(t,{},void 0,!1),l(t,{},void 0,!1),(u==null?void 0:u.length)||(N==null?void 0:N.length)||(s==null?void 0:s.length)||(a==null?void 0:a.length)||(d==null?void 0:d.length)?l("p",{className:" mt-[10px]",children:`This ${p} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:i,lineNumber:305,columnNumber:49},void 0):null,!(u!=null&&u.length)&&!(N!=null&&N.length)&&!(s!=null&&s.length)&&!(a!=null&&a.length)&&!(d!=null&&d.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>e(x),children:"Delete"},void 0,!1,{fileName:i,lineNumber:310,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:156,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:i,lineNumber:86,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:85,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:83,columnNumber:9},void 0),Se=()=>{var M,W,Y,H,R,G,J;const{id:r}=he(),y=localStorage.getItem("isAuth"),f=JSON.parse(y),{data:u}=ye(f==null?void 0:f.roleid),{data:e,error:x,isLoading:p,isFetching:d,isSuccess:a,refetch:s}=xe(r),[N,w]=c.exports.useState(!1),h=new URLSearchParams(window.location.search),m=h.get("delete"),[b,U]=c.exports.useState(!1),[K,q]=c.exports.useState(""),[X,Z]=c.exports.useState(""),[D,O]=c.exports.useState(!1),[B,V]=c.exports.useState(!1),[ee,z]=c.exports.useState(!1),[le,ie]=c.exports.useState(!1),[oe,S]=c.exports.useState(""),[me,C]=c.exports.useState(""),[re,I]=c.exports.useState(""),[ne,T]=c.exports.useState(""),[de,ae]=c.exports.useState(""),[Ne,ce]=c.exports.useState("");c.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let o=e==null?void 0:e.youtubelink,n=o==null?void 0:o.replace("watch?v=","embed/");ce(n)}},[e==null?void 0:e.youtubelink]),c.exports.useEffect(()=>{m==="true"&&h&&(e==null?void 0:e.softdelete)===!1?w(!0):m==="true"&&h&&(e==null?void 0:e.softdelete)===!0&&(V(!0),w(!1))},[m,h,e==null?void 0:e.softdelete]);const ue=async o=>{if(U(!0),O(!0),o)try{const n=`http://dev-rare.srp.ai/booking/api/allbooking/forproperty?propertyid=${o}`,L=`http://dev-rare.srp.ai/managementcontract/api/propertydelete?propertyid=${o}`,te=`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${o}`,ve=`http://dev-rare.srp.ai/rentpurchase/api/propertydelete?porpertyid=${o}`,g=await fetch(n);if(!g.ok&&g.status!==400)throw new Error(`API 1 failed with status: ${g.status}`);const k=g.status===400?[]:await g.json(),F=await fetch(L);if(!F.ok&&F.status!==400)throw new Error(`API 2 failed with status: ${F.status}`);const A=F.status===400?[]:await F.json(),P=await fetch(te);if(!P.ok&&P.status!==400)throw new Error(`API 2 failed with status: ${P.status}`);const _=P.status===400?[]:await P.json(),$=await fetch(ve);if(!$.ok&&$.status!==400)throw new Error(`API 2 failed with status: ${$.status}`);const j=$.status===400?[]:await $.json(),pe=[...k,...A,..._,...j];k!=null&&k.length?S(k):S(""),A!=null&&A.length?C(A):C(""),_!=null&&_.length?I(_):I(""),j!=null&&j.length?T(j):T(""),Z(pe),q(o),ae(o==null?void 0:o.unitnumber),O(!1)}catch(n){console.error("Error fetching data:",n),O(!1)}},se=()=>{U(!1),S(""),C(""),I(""),T("")},be=async()=>{try{await ke.patch("http://dev-rare.srp.ai/property/api/availability",{_id:r,softdelete:!0}),fe(),w(!1),S(""),C(""),I(""),T("")}catch(o){console.log(o,"error")}},fe=async()=>{try{await s(),z(!0),V(!0),w(!1),U(!1)}catch{ie(!0)}z(!1)};return l(t,{children:[(p||d&&ee)&&l(Q,{},void 0,!1,{fileName:i,lineNumber:504,columnNumber:63},void 0),x||le&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:i,lineNumber:505,columnNumber:40},void 0),a&&e&&l("div",{className:" space-y-5",children:[l(_e,{showModal:b,handleClose:se,unitNumber:de,loaderModal:D,linkedData:X,handleDeleteData:be,dataId:K,moduleName:"Property",booking:oe,managementcontract:me,tenantcontract:re,rentpurchase:ne,unit_Number:e==null?void 0:e.unitnumber},void 0,!1,{fileName:i,lineNumber:508,columnNumber:21},void 0),l("div",{children:l("div",{children:l(we,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Property"},void 0,!1,{fileName:i,lineNumber:513,columnNumber:37},void 0),N===!0&&B===!1?l("button",{onClick:()=>ue(r),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Property"},void 0,!1,{fileName:i,lineNumber:516,columnNumber:45},void 0):null,B===!0&&N===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Property is deleted"},void 0,!1,{fileName:i,lineNumber:522,columnNumber:45},void 0):null]},void 0,!0,{fileName:i,lineNumber:512,columnNumber:33},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:l("div",{className:"lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5 flex flex-col gap-y-[15px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"},void 0,!1,{fileName:i,lineNumber:531,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:534,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:530,columnNumber:53},void 0),(e==null?void 0:e.propertytype)==="Townhouse"||(e==null?void 0:e.propertytype)==="Villa"?l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"},void 0,!1,{fileName:i,lineNumber:539,columnNumber:65},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.streetnumber?e==null?void 0:e.streetnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:542,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:538,columnNumber:61},void 0):null,l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"},void 0,!1,{fileName:i,lineNumber:546,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"},void 0,!1,{fileName:i,lineNumber:549,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:545,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type"},void 0,!1,{fileName:i,lineNumber:552,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertytype?e==null?void 0:e.propertytype:"Not Available"},void 0,!1,{fileName:i,lineNumber:555,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:551,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"},void 0,!1,{fileName:i,lineNumber:558,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.projectstatus?e==null?void 0:e.projectstatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:561,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:557,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"},void 0,!1,{fileName:i,lineNumber:564,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.transactiontype?e==null?void 0:e.transactiontype:"Not Available"},void 0,!1,{fileName:i,lineNumber:567,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:563,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:570,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Avaiable"},void 0,!1,{fileName:i,lineNumber:573,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:569,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:576,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:579,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:575,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"},void 0,!1,{fileName:i,lineNumber:582,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.subtype_name?e==null?void 0:e.subtype_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:585,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:581,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"},void 0,!1,{fileName:i,lineNumber:588,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.typelayout?e==null?void 0:e.typelayout:"Not Available"},void 0,!1,{fileName:i,lineNumber:591,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:587,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"},void 0,!1,{fileName:i,lineNumber:600,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:603,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:599,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"},void 0,!1,{fileName:i,lineNumber:615,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.plotsize?e==null?void 0:e.plotsize:"Not Available"},void 0,!1,{fileName:i,lineNumber:618,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:614,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"},void 0,!1,{fileName:i,lineNumber:621,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.builduparea?(e==null?void 0:e.builduparea)+" "+((e==null?void 0:e.builduparea)&&(e==null?void 0:e.measure_units)?e==null?void 0:e.measure_units:""):"Not Available"},void 0,!1,{fileName:i,lineNumber:624,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:620,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:627,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:630,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:626,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"},void 0,!1,{fileName:i,lineNumber:633,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.ownerassociation?e==null?void 0:e.ownerassociation:"Not Available"},void 0,!1,{fileName:i,lineNumber:636,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:632,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"},void 0,!1,{fileName:i,lineNumber:639,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.nobathroom?e==null?void 0:e.nobathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:642,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:638,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"},void 0,!1,{fileName:i,lineNumber:645,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.halfbathroom?e==null?void 0:e.halfbathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:648,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:644,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"},void 0,!1,{fileName:i,lineNumber:651,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalbathroom?e==null?void 0:e.totalbathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:654,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:650,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"},void 0,!1,{fileName:i,lineNumber:663,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.furnished?e==null?void 0:e.furnished:"Not Available"},void 0,!1,{fileName:i,lineNumber:666,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:662,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"},void 0,!1,{fileName:i,lineNumber:669,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"},void 0,!1,{fileName:i,lineNumber:672,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:668,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"},void 0,!1,{fileName:i,lineNumber:675,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.noparking?e==null?void 0:e.noparking:"Not Available"},void 0,!1,{fileName:i,lineNumber:678,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:674,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"},void 0,!1,{fileName:i,lineNumber:681,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"},void 0,!1,{fileName:i,lineNumber:684,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:680,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"},void 0,!1,{fileName:i,lineNumber:687,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"},void 0,!1,{fileName:i,lineNumber:690,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:686,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"},void 0,!1,{fileName:i,lineNumber:693,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.dewapremises?e==null?void 0:e.dewapremises:"Not Available"},void 0,!1,{fileName:i,lineNumber:696,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:692,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"District"},void 0,!1,{fileName:i,lineNumber:699,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.district?e==null?void 0:e.district:"Not Available"},void 0,!1,{fileName:i,lineNumber:702,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:698,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"},void 0,!1,{fileName:i,lineNumber:705,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"},void 0,!1,{fileName:i,lineNumber:708,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:704,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"},void 0,!1,{fileName:i,lineNumber:711,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertyview?e==null?void 0:e.propertyview:"Not available"},void 0,!1,{fileName:i,lineNumber:714,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:710,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"},void 0,!1,{fileName:i,lineNumber:717,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.dewapremises?e==null?void 0:e.dewapremises:"Not Available"},void 0,!1,{fileName:i,lineNumber:720,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:716,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Location"},void 0,!1,{fileName:i,lineNumber:723,columnNumber:57},void 0),l("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"#"}`,children:e!=null&&e.propertylocation?((M=e==null?void 0:e.propertylocation)==null?void 0:M.slice(0,80))+(((W=e==null?void 0:e.propertylocation)==null?void 0:W.length)>100,""):"Not Available"},void 0,!1,{fileName:i,lineNumber:727,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:722,columnNumber:53},void 0),l(t,{},void 0,!1),l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"},void 0,!1,{fileName:i,lineNumber:754,columnNumber:57},void 0),e!=null&&e.youtubelink?l("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:Ne,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500},void 0,!1,{fileName:i,lineNumber:761,columnNumber:73},void 0)},void 0,!1,{fileName:i,lineNumber:760,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:759,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:764,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:753,columnNumber:53},void 0),l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"},void 0,!1,{fileName:i,lineNumber:768,columnNumber:57},void 0),((Y=e==null?void 0:e.propertyimages)==null?void 0:Y.length)!==0&&(e==null?void 0:e.propertyimages[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.propertyimages.map((o,n)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:778,columnNumber:85},void 0)},n,!1,{fileName:i,lineNumber:777,columnNumber:81},void 0):null)},void 0,!1,{fileName:i,lineNumber:773,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:783,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:767,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"},void 0,!1,{fileName:i,lineNumber:787,columnNumber:57},void 0),((H=e==null?void 0:e.floorplan)==null?void 0:H.length)!==0&&(e==null?void 0:e.floorplan[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.floorplan.map((o,n)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:797,columnNumber:85},void 0)},n,!1,{fileName:i,lineNumber:796,columnNumber:81},void 0):null)},void 0,!1,{fileName:i,lineNumber:792,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:802,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:786,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"},void 0,!1,{fileName:i,lineNumber:863,columnNumber:57},void 0),((R=e==null?void 0:e.unitplanattachment)==null?void 0:R.length)!==0&&(e==null?void 0:e.unitplanattachment[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.unitplanattachment.map((o,n)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:873,columnNumber:85},void 0)},n,!1,{fileName:i,lineNumber:872,columnNumber:81},void 0):null)},void 0,!1,{fileName:i,lineNumber:868,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:878,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:862,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"},void 0,!1,{fileName:i,lineNumber:882,columnNumber:57},void 0),((G=e==null?void 0:e.plotplanattachment)==null?void 0:G.length)!==0&&(e==null?void 0:e.plotplanattachment[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.plotplanattachment.map((o,n)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:892,columnNumber:85},void 0)},n,!1,{fileName:i,lineNumber:891,columnNumber:81},void 0):null)},void 0,!1,{fileName:i,lineNumber:887,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:897,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:881,columnNumber:53},void 0),l("div",{className:"w-[100%] col-span-2",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"},void 0,!1,{fileName:i,lineNumber:901,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:900,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"},void 0,!1,{fileName:i,lineNumber:906,columnNumber:57},void 0),l("p",{className:"  form-control py-2   capitalize",children:e!=null&&e.owner_name?e==null?void 0:e.owner_name:"Not available"},void 0,!1,{fileName:i,lineNumber:909,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:905,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"},void 0,!1,{fileName:i,lineNumber:912,columnNumber:57},void 0),l("p",{className:"  form-control py-2   capitalize",children:e!=null&&e.representative_name?e==null?void 0:e.representative_name:"Not available"},void 0,!1,{fileName:i,lineNumber:915,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:911,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"},void 0,!1,{fileName:i,lineNumber:918,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not available"},void 0,!1,{fileName:i,lineNumber:921,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:917,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"},void 0,!1,{fileName:i,lineNumber:930,columnNumber:57},void 0),l("p",{className:"  form-control py-2   capitalize",children:e!=null&&e.no_ownernamedeed?e==null?void 0:e.no_ownernamedeed:"Not available"},void 0,!1,{fileName:i,lineNumber:933,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:929,columnNumber:53},void 0),(e==null?void 0:e.OwnerNameAsPerDeed)&&(e==null?void 0:e.no_ownernamedeed)&&(e==null?void 0:e.no_ownernamedeed)!=="0"?l(t,{children:(J=e==null?void 0:e.OwnerNameAsPerDeed)==null?void 0:J.map((o,n)=>{var L;return l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((L=e==null?void 0:e.OwnerNameAsPerDeed)==null?void 0:L.length)>1?" - "+(n+1):null]},void 0,!0,{fileName:i,lineNumber:942,columnNumber:81},void 0),l("p",{className:"  form-control py-2   capitalize",children:o!=null&&o.ownernameasperdeed?o==null?void 0:o.ownernameasperdeed:"Not available"},void 0,!1,{fileName:i,lineNumber:945,columnNumber:81},void 0)]},o==null?void 0:o._id,!0,{fileName:i,lineNumber:941,columnNumber:77},void 0)})},void 0,!1):null,l("div",{children:l(Pe,{data:e==null?void 0:e.titledeeddocument,label:"title deed document PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:953,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:952,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"},void 0,!1,{fileName:i,lineNumber:956,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not available"},void 0,!1,{fileName:i,lineNumber:959,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:955,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:529,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:528,columnNumber:45},void 0),N===!1&&B===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[f!=null&&f.type?l(v,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:969,columnNumber:65},void 0):l(v,{to:"/all-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:968,columnNumber:65},void 0),(u==null?void 0:u.updatepropert)===!0&&l(v,{to:`/update-property/${r}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:973,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:965,columnNumber:53},void 0):null]},void 0,!0,{fileName:i,lineNumber:527,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:526,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:525,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:511,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:510,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:509,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:507,columnNumber:17},void 0)]},void 0,!0)};export{Se as default};
