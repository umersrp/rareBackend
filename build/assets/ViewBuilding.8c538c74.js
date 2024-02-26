import{bt as J,bK as K,r as d,j as l,F as u,bM as E,C as Q,L as k,bO as R,J as W}from"./index.c664f3bc.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\building\\ViewBuilding.jsx";const Y=({showModal:s,handleClose:x,loaderModal:N,linkedData:a,handleDeleteData:e,dataId:p,moduleName:b,PropertyData:n,buildingName:f})=>l("div",{className:"thumbnail-container",children:s&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${b}?`},void 0,!1,{fileName:i,lineNumber:16,columnNumber:29},void 0),l("img",{src:R,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:x},void 0,!1,{fileName:i,lineNumber:17,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:15,columnNumber:25},void 0),N===!0?l(E,{},void 0,!1,{fileName:i,lineNumber:21,columnNumber:33},void 0):l(u,{children:[a!=null&&a.length?l("div",{className:"data-list-modal",children:l(u,{children:[l("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:b},void 0,!1,{fileName:i,lineNumber:28,columnNumber:57},void 0)," ",f," is linked with the following modules:"]},void 0,!0,{fileName:i,lineNumber:27,columnNumber:53},void 0),n!=null&&n.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:i,lineNumber:33,columnNumber:101},void 0),n==null?void 0:n.map((c,t)=>l(k,{className:" mr-[5px] hover:underline",to:`/view-property/${c==null?void 0:c._id}?delete=true`,children:[c==null?void 0:c.unitnumber,t!==n.length-1?",":null]},t+1,!0,{fileName:i,lineNumber:36,columnNumber:77},void 0))]},void 0,!0,{fileName:i,lineNumber:33,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:32,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:25,columnNumber:45},void 0):null,l("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(a==null?void 0:a.length)||(n==null?void 0:n.length)?l("p",{className:" mt-[10px]",children:`This ${b} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:i,lineNumber:48,columnNumber:49},void 0):null,!(a!=null&&a.length)&&!(n!=null&&n.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>e(p),children:"Delete"},void 0,!1,{fileName:i,lineNumber:53,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:45,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:i,lineNumber:14,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:13,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:11,columnNumber:9},void 0),P=()=>{var B,F,$,C,I;const{id:s}=J(),x=localStorage.getItem("isAuth"),N=JSON.parse(x),{data:a}=K(N==null?void 0:N.roleid),[e,p]=d.exports.useState(""),[b,n]=d.exports.useState(""),[f,c]=d.exports.useState(!1),t=new URLSearchParams(window.location.search),g=t.get("delete"),[L,w]=d.exports.useState(!1),[_,q]=d.exports.useState(""),[M,V]=d.exports.useState(""),[O,h]=d.exports.useState(!1),[j,A]=d.exports.useState(!1),[U,S]=d.exports.useState(!1),[z,y]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(s){const r=await(await fetch(`http://dev-rare.srp.ai/buildingname/${s}`)).json();r&&p(r)}})()},[s]),d.exports.useEffect(()=>{(async()=>{if(e!=null&&e.projectnameid){const r=await(await fetch(`http://dev-rare.srp.ai/projectname/${e==null?void 0:e.projectnameid}`)).json();r&&n(r==null?void 0:r.projectName)}})()},[e==null?void 0:e.projectnameid]),d.exports.useEffect(()=>{g==="true"&&t&&(e==null?void 0:e.softdelete)===!1?c(!0):g==="true"&&t&&(e==null?void 0:e.softdelete)===!0&&(A(!0),c(!1))},[g,t,e==null?void 0:e.softdelete]);const T=async o=>{if(w(!0),h(!0),o)try{const m=`http://dev-rare.srp.ai/property/api/advancesearch?buildingid=${o}&softdelete=false`,r=await fetch(m);if(!r.ok&&r.status!==400)throw new Error(`API 2 failed with status: ${r.status}`);const v=r.status===400?[]:await r.json(),H=[...v];V(H),q(o),y(v),h(!1)}catch(m){console.error("Error fetching data:",m),h(!1)}};return l(u,{children:U===!0?l(E,{},void 0,!1,{fileName:i,lineNumber:229,columnNumber:37},void 0):l("div",{className:" space-y-5",children:[l(Y,{showModal:L,handleClose:()=>{w(!1),y("")},loaderModal:O,linkedData:M,handleDeleteData:async o=>{try{await W.patch("http://dev-rare.srp.ai/buildingname/api/buildingdelete",{_id:o,softdelete:!0}),S(!0),(async()=>{if(s){const v=await(await fetch(`http://dev-rare.srp.ai/buildingname/${s}`)).json();v&&p(v)}})(),y(""),A(!0),w(!1),h(!1),S(!1)}catch(m){console.log(m,"error")}},dataId:_,moduleName:"Building Name",PropertyData:z,buildingName:e==null?void 0:e.buildingname},void 0,!1,{fileName:i,lineNumber:231,columnNumber:25},void 0),l("div",{children:l("div",{children:l(Q,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Building"},void 0,!1,{fileName:i,lineNumber:236,columnNumber:41},void 0),f===!0&&j===!1?l("button",{onClick:()=>T(s),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Building"},void 0,!1,{fileName:i,lineNumber:239,columnNumber:49},void 0):null,j===!0&&f===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Building is deleted"},void 0,!1,{fileName:i,lineNumber:245,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:235,columnNumber:37},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:254,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"},void 0,!1,{fileName:i,lineNumber:257,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:253,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Code"},void 0,!1,{fileName:i,lineNumber:260,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingcode?e==null?void 0:e.buildingcode:"Not Available"},void 0,!1,{fileName:i,lineNumber:263,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:259,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:266,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.projectnameid?b:"Not Available"},void 0,!1,{fileName:i,lineNumber:269,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:265,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Elevation"},void 0,!1,{fileName:i,lineNumber:272,columnNumber:61},void 0),e!=null&&e.buildingelevation?l(u,{children:((B=e==null?void 0:e.buildingelevation)==null?void 0:B.length)!==0&&(e==null?void 0:e.buildingelevation[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.buildingelevation.map((o,m)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${m}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:285,columnNumber:101},void 0)},m,!1,{fileName:i,lineNumber:284,columnNumber:97},void 0):null)},void 0,!1,{fileName:i,lineNumber:280,columnNumber:81},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:290,columnNumber:81},void 0)},void 0,!1):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:292,columnNumber:75},void 0)]},void 0,!0,{fileName:i,lineNumber:271,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Typical Floor Plan"},void 0,!1,{fileName:i,lineNumber:296,columnNumber:61},void 0),e!=null&&e.typicalfloorplan?l(u,{children:((F=e==null?void 0:e.typicalfloorplan)==null?void 0:F.length)!==0&&(e==null?void 0:e.typicalfloorplan[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.typicalfloorplan.map((o,m)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${m}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:309,columnNumber:101},void 0)},m,!1,{fileName:i,lineNumber:308,columnNumber:97},void 0):null)},void 0,!1,{fileName:i,lineNumber:304,columnNumber:81},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:314,columnNumber:81},void 0)},void 0,!1):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:316,columnNumber:75},void 0)]},void 0,!0,{fileName:i,lineNumber:295,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities images"},void 0,!1,{fileName:i,lineNumber:320,columnNumber:61},void 0),e!=null&&e.amenitiesimages?l(u,{children:(($=e==null?void 0:e.amenitiesimages)==null?void 0:$.length)!==0&&(e==null?void 0:e.amenitiesimages[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.amenitiesimages.map((o,m)=>o!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${m}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:333,columnNumber:101},void 0)},m,!1,{fileName:i,lineNumber:332,columnNumber:97},void 0):null)},void 0,!1,{fileName:i,lineNumber:328,columnNumber:81},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:338,columnNumber:81},void 0)},void 0,!1):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:340,columnNumber:75},void 0)]},void 0,!0,{fileName:i,lineNumber:319,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Amenities"},void 0,!1,{fileName:i,lineNumber:344,columnNumber:61},void 0),(e==null?void 0:e.amenities_data)&&((C=e==null?void 0:e.amenities_data)==null?void 0:C.length)?l("ul",{className:"pl-[30px]",children:(I=e==null?void 0:e.amenities_data)==null?void 0:I.map((o,m)=>l("li",{className:"list-disc",children:o==null?void 0:o.amenitiesname},m+1,!1,{fileName:i,lineNumber:352,columnNumber:81},void 0))},void 0,!1,{fileName:i,lineNumber:349,columnNumber:69},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:356,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:343,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:252,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:251,columnNumber:49},void 0),f===!1&&j===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(k,{to:"/all-buildings",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:364,columnNumber:61},void 0),(a==null?void 0:a.updatebuilding)&&l(k,{to:`/update-building/${s}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:367,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:363,columnNumber:57},void 0):null]},void 0,!0,{fileName:i,lineNumber:250,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:249,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:248,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:234,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:233,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:232,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:230,columnNumber:21},void 0)},void 0,!1)};export{P as default};
