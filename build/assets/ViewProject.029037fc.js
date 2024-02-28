import{bs as T,bK as J,r as m,j as e,F as $,bM as A,e as Q,L as j,bO as R,K as W}from"./index.5e95c51c.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\project\\ViewProject.jsx";const Y=({showModal:c,handleClose:w,loaderModal:N,linkedData:n,handleDeleteData:i,dataId:h,moduleName:f,PropertyData:s,buildingData:r,projectName:p})=>e("div",{className:"thumbnail-container",children:c&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${f}?`},void 0,!1,{fileName:l,lineNumber:17,columnNumber:29},void 0),e("img",{src:R,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:w},void 0,!1,{fileName:l,lineNumber:18,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:15,columnNumber:25},void 0),N===!0?e(A,{},void 0,!1,{fileName:l,lineNumber:22,columnNumber:33},void 0):e($,{children:[n!=null&&n.length?e("div",{className:"data-list-modal",children:e($,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:f},void 0,!1,{fileName:l,lineNumber:29,columnNumber:57},void 0)," ",p," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:28,columnNumber:53},void 0),s!=null&&s.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:l,lineNumber:34,columnNumber:101},void 0),s==null?void 0:s.map((o,a)=>e(j,{className:" mr-[5px] hover:underline",to:`/view-property/${o==null?void 0:o._id}?delete=true`,children:[o==null?void 0:o.unitnumber,a!==s.length-1?",":null]},a+1,!0,{fileName:l,lineNumber:37,columnNumber:77},void 0))]},void 0,!0,{fileName:l,lineNumber:34,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:33,columnNumber:61},void 0):null,r!=null&&r.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Building Name: "},void 0,!1,{fileName:l,lineNumber:46,columnNumber:101},void 0),r==null?void 0:r.map((o,a)=>e(j,{className:" mr-[5px] hover:underline",to:`/view-building/${o==null?void 0:o._id}?delete=true`,children:[o==null?void 0:o.buildingname,a!==r.length-1?",":null]},a+1,!0,{fileName:l,lineNumber:49,columnNumber:77},void 0))]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:45,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:26,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(s==null?void 0:s.length)||(r==null?void 0:r.length)?e("p",{className:" mt-[10px]",children:`This ${f} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:61,columnNumber:49},void 0):null,!(n!=null&&n.length)&&!(s!=null&&s.length)&&!(r!=null&&r.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>i(h),children:"Delete"},void 0,!1,{fileName:l,lineNumber:66,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:58,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:14,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:13,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:11,columnNumber:9},void 0),Z=()=>{const{id:c}=T(),w=localStorage.getItem("isAuth"),N=JSON.parse(w),{data:n}=J(N==null?void 0:N.roleid),[i,h]=m.exports.useState(""),[f,s]=m.exports.useState(""),[r,p]=m.exports.useState(!1),o=new URLSearchParams(window.location.search),a=o.get("delete"),[F,g]=m.exports.useState(!1),[q,M]=m.exports.useState(""),[V,B]=m.exports.useState(""),[U,x]=m.exports.useState(!1),[y,E]=m.exports.useState(!1),[_,L]=m.exports.useState(!1),[O,S]=m.exports.useState(""),[z,C]=m.exports.useState("");m.exports.useEffect(()=>{(async()=>{if(c){const t=await(await fetch(`http://dev-rare.srp.ai/projectname/${c}`)).json();t&&h(t)}})()},[c]),m.exports.useEffect(()=>{(async()=>{if(i!=null&&i.communityid){const t=await(await fetch(`http://dev-rare.srp.ai/community/${i==null?void 0:i.communityid}`)).json();t&&s(t==null?void 0:t.communityname)}})()},[i==null?void 0:i.communityid]),m.exports.useEffect(()=>{a==="true"&&o&&(i==null?void 0:i.softdelete)===!1?p(!0):a==="true"&&o&&(i==null?void 0:i.softdelete)===!0&&(E(!0),p(!1))},[a,o,i==null?void 0:i.softdelete]);const H=async d=>{if(g(!0),x(!0),d)try{const u=`http://dev-rare.srp.ai/buildingname/api/projectnamedelete?projectnameid=${d}`,t=`http://dev-rare.srp.ai/property/api/advancesearch?projectnameid=${d}&softdelete=false`,v=await fetch(u);if(!v.ok&&v.status!==400)throw new Error(`API 1 failed with status: ${v.status}`);const k=v.status===400?[]:await v.json(),b=await fetch(t);if(!b.ok&&b.status!==400)throw new Error(`API 2 failed with status: ${b.status}`);const I=b.status===400?[]:await b.json(),K=[...k,...I];C(k),S(I),B(K),M(d),x(!1)}catch(u){console.error("Error fetching data:",u),x(!1)}};return e($,{children:_===!0?e(A,{},void 0,!1,{fileName:l,lineNumber:275,columnNumber:37},void 0):e("div",{className:" space-y-5",children:[e(Y,{showModal:F,handleClose:()=>{g(!1),S(""),C("")},loaderModal:U,linkedData:V,handleDeleteData:async()=>{try{await W.patch("http://dev-rare.srp.ai/projectname/api/projectdelete",{_id:c,softdelete:!0}),L(!0),(async()=>{if(c){const t=await(await fetch(`http://dev-rare.srp.ai/projectname/${c}`)).json();t&&h(t)}})(),S(""),C(""),E(!0),g(!1),x(!1),L(!1)}catch(d){console.log(d,"error")}},dataId:q,moduleName:"Project Name",PropertyData:O,buildingData:z,projectName:i==null?void 0:i.projectName},void 0,!1,{fileName:l,lineNumber:277,columnNumber:25},void 0),e("div",{children:e("div",{children:e(Q,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"View Project"},void 0,!1,{fileName:l,lineNumber:282,columnNumber:41},void 0),r===!0&&y===!1?e("button",{onClick:()=>H(c),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Project"},void 0,!1,{fileName:l,lineNumber:285,columnNumber:49},void 0):null,y===!0&&r===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Project is deleted"},void 0,!1,{fileName:l,lineNumber:291,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:281,columnNumber:37},void 0),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:e("div",{className:"conten-box w-[100%]",children:[e("div",{children:e("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:l,lineNumber:300,columnNumber:61},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.projectName?i==null?void 0:i.projectName:"Not Available"},void 0,!1,{fileName:l,lineNumber:303,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:299,columnNumber:57},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Code"},void 0,!1,{fileName:l,lineNumber:306,columnNumber:61},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.projectCode?i==null?void 0:i.projectCode:"Not Available"},void 0,!1,{fileName:l,lineNumber:309,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:305,columnNumber:57},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:312,columnNumber:61},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.communityid?f:"Not Available"},void 0,!1,{fileName:l,lineNumber:315,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:311,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:298,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:297,columnNumber:49},void 0),r===!1&&y===!1?e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(j,{to:"/all-project",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:l,lineNumber:322,columnNumber:61},void 0),(n==null?void 0:n.updateproject)&&e(j,{to:`/update-project/${c}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:l,lineNumber:325,columnNumber:69},void 0)]},void 0,!0,{fileName:l,lineNumber:321,columnNumber:57},void 0):null]},void 0,!0,{fileName:l,lineNumber:296,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:295,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:294,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:280,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:279,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:278,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:276,columnNumber:21},void 0)},void 0,!1)};export{Z as default};
