import{bt as c,bL as N,r as o,j as e,F as u,e as f,L as s}from"./index.be4bdfd6.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\amenities\\ViewAmenities.jsx";const p=()=>{const{id:m}=c(),d=localStorage.getItem("isAuth"),a=JSON.parse(d),{data:r}=N(a==null?void 0:a.roleid),[l,t]=o.exports.useState("");return o.exports.useEffect(()=>{(async()=>{if(m){const n=await(await fetch(`http://dev-rare.srp.ai/amenities/${m}`)).json();n&&t(n)}})()},[m]),e(u,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(f,{title:"View Amenities",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:e("div",{className:"conten-box w-[100%]",children:[e("div",{children:e("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities Name"},void 0,!1,{fileName:i,lineNumber:38,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:l!=null&&l.amenitiesname?l==null?void 0:l.amenitiesname:"Not Available"},void 0,!1,{fileName:i,lineNumber:41,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:37,columnNumber:49},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities Code"},void 0,!1,{fileName:i,lineNumber:44,columnNumber:53},void 0),e("p",{className:"  form-control py-2   ",children:l!=null&&l.amenitiescode?l==null?void 0:l.amenitiescode:"Not Available"},void 0,!1,{fileName:i,lineNumber:47,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:43,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:36,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:35,columnNumber:41},void 0),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(s,{to:"/all-amenities",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:52,columnNumber:45},void 0),(r==null?void 0:r.updateamenities)&&e(s,{to:`/update-amenities/${m}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:55,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:51,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:34,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:33,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:32,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:31,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:29,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:28,columnNumber:13},void 0)},void 0,!1)};export{p as default};
