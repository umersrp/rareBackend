import{bt as u,bL as c,r as d,j as e,F as N,e as b,L as n}from"./index.d79e7749.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\subtype\\ViewSubType.jsx";const h=()=>{const{id:r}=u(),s=localStorage.getItem("isAuth"),m=JSON.parse(s),{data:a}=c(m==null?void 0:m.roleid),[l,t]=d.exports.useState("");return d.exports.useEffect(()=>{(async()=>{if(r){const o=await(await fetch(`http://dev-rare.srp.ai/subtype/${r}`)).json();o&&t(o)}})()},[r]),e(N,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(b,{title:"View Sub Type",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:e("div",{className:"conten-box w-[100%]",children:[e("div",{children:e("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub Type Name"},void 0,!1,{fileName:i,lineNumber:38,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtypename?l==null?void 0:l.subtypename:"Not Available"},void 0,!1,{fileName:i,lineNumber:41,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:37,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub Type Code"},void 0,!1,{fileName:i,lineNumber:44,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtypecode?l==null?void 0:l.subtypecode:"Not Available"},void 0,!1,{fileName:i,lineNumber:47,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:43,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:36,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:35,columnNumber:41},void 0),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(n,{to:"/all-subtype",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:52,columnNumber:45},void 0),(a==null?void 0:a.updatesubtype)&&e(n,{to:`/update-subtype/${r}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:55,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:51,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:34,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:33,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:32,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:31,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:29,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:28,columnNumber:13},void 0)},void 0,!1)};export{h as default};
