import{bt as t,bL as N,r as d,j as e,F as s,e as b,L as a}from"./index.9c32dce1.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\community\\ViewCommunity.jsx";const y=()=>{const{id:m}=t(),c=localStorage.getItem("isAuth"),o=JSON.parse(c),{data:r}=N(o==null?void 0:o.roleid),[i,u]=d.exports.useState("");return d.exports.useEffect(()=>{(async()=>{if(m){const n=await(await fetch(`http://dev-rare.srp.ai/community/${m}`)).json();n&&u(n)}})()},[m]),e(s,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(b,{title:"View Community",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:e("div",{className:"conten-box w-[100%]",children:[e("div",{children:e("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:38,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:37,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Code"},void 0,!1,{fileName:l,lineNumber:44,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.communitycode?i==null?void 0:i.communitycode:"Not Available"},void 0,!1,{fileName:l,lineNumber:47,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:43,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Country Name"},void 0,!1,{fileName:l,lineNumber:50,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.country?i==null?void 0:i.country:"Not Available"},void 0,!1,{fileName:l,lineNumber:53,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:49,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"City Name"},void 0,!1,{fileName:l,lineNumber:56,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:i!=null&&i.city?i==null?void 0:i.city:"Not Available"},void 0,!1,{fileName:l,lineNumber:59,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:55,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:41},void 0),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(a,{to:"/all-community",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:l,lineNumber:64,columnNumber:45},void 0),(r==null?void 0:r.updatecommunity)===!0&&e(a,{to:`/update-community/${m}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:l,lineNumber:67,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:63,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:34,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:33,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:32,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:29,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:13},void 0)},void 0,!1)};export{y as default};
