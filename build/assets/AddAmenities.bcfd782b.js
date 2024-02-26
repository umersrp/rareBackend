import{bt as k,z as A,af as j,r as m,v as O,w as F,x as E,j as e,F as q,s as w,C as D,k as f,y as S,J as b,Q as p}from"./index.26a0f8e4.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\amenities\\AddAmenities.jsx";const L=()=>{const{id:n}=k(),o=A(),d=j(),[t,u]=m.exports.useState(""),c=r=>{const{name:s,value:i}=r.target;u({...t,[s]:i})};m.exports.useEffect(()=>{(async()=>{if(n){const i=await(await fetch(`http://dev-rare.srp.ai/amenities/${n}`)).json();i&&u(i)}})()},[n]);const[l,h]=m.exports.useState("");let g={amenitiesname:"Amenities Name"};const x=O({amenitiesname:F().required(l)}).required(),{register:v,formState:{errors:V}}=E({resolver:S(x)}),N=()=>{let r=!1,s={amenitiesname:h};return s&&Object.keys(s).length&&Object.keys(s).map(i=>{s[i](""),t[i]||(s[i](g[i]+" is required"),r=!0)}),r},y=async()=>{t.amenitiesname?(await b.post("http://dev-rare.srp.ai/amenities",t),p.success(`${t.amenitiesname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{o("/all-amenities")},1500)):N()},C=async r=>{r.preventDefault(),t.amenitiesname?(await b.patch("http://dev-rare.srp.ai/amenities",t),p.success(`${t.amenitiesname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{o("/all-amenities")},1500)):N()};return e(q,{children:[e(w,{},void 0,!1,{fileName:a,lineNumber:119,columnNumber:13},void 0),e(D,{title:"Amenities Form",children:e("div",{children:e("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e("div",{children:[e(f,{name:"amenitiesname",label:"Amenities name",type:"text",placeholder:"Enter Amenities name",register:v,error:l,value:t.amenitiesname||"",onChange:c},void 0,!1,{fileName:a,lineNumber:124,columnNumber:29},void 0),e("div",{className:" mt-2 text-danger-500 block text-sm",children:l},void 0,!1,{fileName:a,lineNumber:134,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:123,columnNumber:25},void 0),e(f,{name:"amenitiescode",label:"Amenities code",type:"text",register:v,placeholder:"Enter Amenities code",value:t.amenitiescode||"",onChange:c},void 0,!1,{fileName:a,lineNumber:138,columnNumber:25},void 0),e("div",{className:"lg:col-span-2 col-span-1",children:[d.pathname===`/update-amenities/${n}`?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:C,type:"button",children:"Update"},void 0,!1,{fileName:a,lineNumber:151,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:150,columnNumber:37},void 0):null,d.pathname==="/add-amenities"?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:y,type:"button",children:"Submit"},void 0,!1,{fileName:a,lineNumber:158,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:157,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:147,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:122,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:121,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:120,columnNumber:13},void 0)]},void 0,!0)};export{L as default};
