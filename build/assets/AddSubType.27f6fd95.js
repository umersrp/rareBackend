import{bt as C,B as k,af as j,r as n,x as O,y as F,z as E,j as e,F as T,t as q,e as D,l as v,A as V,M as N,Q as f}from"./index.9c32dce1.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\subtype\\AddSubType.jsx";const L=()=>{const{id:i}=C(),u=k(),d=j(),[a,m]=n.exports.useState(""),c=l=>{const{name:r,value:s}=l.target;m({...a,[r]:s})};n.exports.useEffect(()=>{(async()=>{if(i){const s=await(await fetch(`http://dev-rare.srp.ai/subtype/${i}`)).json();s&&m(s)}})()},[i]);const[o,y]=n.exports.useState("");let h={subtypename:"SubType Name"};const g=O({subtypename:F().required(o)}).required(),{register:b,formState:{errors:$}}=E({resolver:V(g)}),p=()=>{let l=!1,r={subtypename:y};return r&&Object.keys(r).length&&Object.keys(r).map(s=>{r[s](""),a[s]||(r[s](h[s]+" is required"),l=!0)}),l},x=async()=>{a.subtypename?(await N.post("http://dev-rare.srp.ai/subtype",a),f.success(`${a.subtypename} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{u("/all-subtype")},1500)):p()},S=async l=>{l.preventDefault(),a.subtypename?(await N.patch("http://dev-rare.srp.ai/subtype",a),f.success(`${a.subtypename} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{u("/all-subtype")},1500)):p()};return e(T,{children:[e(q,{},void 0,!1,{fileName:t,lineNumber:119,columnNumber:13},void 0),e(D,{title:"Subtype Form",children:e("div",{children:e("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e("div",{children:[e(v,{name:"subtypename",label:"Subtype name",type:"text",placeholder:"Enter Subtype name",register:b,error:o,value:a.subtypename||"",onChange:c},void 0,!1,{fileName:t,lineNumber:124,columnNumber:29},void 0),e("div",{className:" mt-2 text-danger-500 block text-sm",children:o},void 0,!1,{fileName:t,lineNumber:134,columnNumber:29},void 0)]},void 0,!0,{fileName:t,lineNumber:123,columnNumber:25},void 0),e(v,{name:"subtypecode",label:"Subtype code",type:"text",register:b,placeholder:"Enter Subtype code",value:a.subtypecode||"",onChange:c},void 0,!1,{fileName:t,lineNumber:138,columnNumber:25},void 0),e("div",{className:"lg:col-span-2 col-span-1",children:[d.pathname===`/update-subtype/${i}`?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:S,type:"button",children:"Update"},void 0,!1,{fileName:t,lineNumber:151,columnNumber:41},void 0)},void 0,!1,{fileName:t,lineNumber:150,columnNumber:37},void 0):null,d.pathname==="/add-subtype"?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:x,type:"button",children:"Submit"},void 0,!1,{fileName:t,lineNumber:158,columnNumber:41},void 0)},void 0,!1,{fileName:t,lineNumber:157,columnNumber:37},void 0):null]},void 0,!0,{fileName:t,lineNumber:147,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:122,columnNumber:21},void 0)},void 0,!1,{fileName:t,lineNumber:121,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:120,columnNumber:13},void 0)]},void 0,!0)};export{L as default};