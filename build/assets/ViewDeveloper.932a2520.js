import{bt as t,bL as N,r as a,j as e,F as u,e as v,L as n}from"./index.d79e7749.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\developer\\ViewDeveloper.jsx";const h=()=>{const{id:r}=t(),s=localStorage.getItem("isAuth"),o=JSON.parse(s),{data:d}=N(o==null?void 0:o.roleid),[i,c]=a.exports.useState("");return a.exports.useEffect(()=>{(async()=>{if(r){const m=await(await fetch(`http://dev-rare.srp.ai/developer/${r}`)).json();m&&c(m)}})()},[r]),e(u,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(v,{title:"View Developer",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:e("div",{className:"conten-box w-[100%]",children:[e("div",{children:e("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"},void 0,!1,{fileName:l,lineNumber:38,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.developername?i==null?void 0:i.developername:"Not Available"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:37,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Code"},void 0,!1,{fileName:l,lineNumber:44,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.developercode?i==null?void 0:i.developercode:"Not Available"},void 0,!1,{fileName:l,lineNumber:47,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:43,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:41},void 0),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(n,{to:"/all-developer",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:l,lineNumber:52,columnNumber:45},void 0),(d==null?void 0:d.updatedeveloper)&&e(n,{to:`/update-developer/${r}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:l,lineNumber:55,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:51,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:34,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:33,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:32,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:29,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:13},void 0)},void 0,!1)};export{h as default};
