import{bt as C,B as k,af as j,r as n,x as O,y as F,z as E,j as e,F as q,t as S,e as V,l as N,A as $,M as f,Q as b}from"./index.8fd1273d.js";var r="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\developer\\AddDeveloper.jsx";const P=()=>{const{id:s}=C(),d=k(),m=j(),[a,u]=n.exports.useState(""),c=o=>{const{name:l,value:t}=o.target;u({...a,[l]:t})};n.exports.useEffect(()=>{(async()=>{if(s){const t=await(await fetch(`http://dev-rare.srp.ai/developer/${s}`)).json();t&&u(t)}})()},[s]);const[i,h]=n.exports.useState("");let g={developername:"Developer Name"};const x=O({developername:F().required(i)}).required(),{register:v,formState:{errors:w}}=E({resolver:$(x)}),p=()=>{let o=!1,l={developername:h};return l&&Object.keys(l).length&&Object.keys(l).map(t=>{l[t](""),a[t]||(l[t](g[t]+" is required"),o=!0)}),o},D=async()=>{a.developername?(await f.post("http://dev-rare.srp.ai/developer",a),b.success(`${a.developername} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{d("/all-developer")},1500)):p()},y=async o=>{o.preventDefault(),a.developername?(await f.patch("http://dev-rare.srp.ai/developer",a),b.success(`${a.developername} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{d("/all-developer")},1500)):p()};return e(q,{children:[e(S,{},void 0,!1,{fileName:r,lineNumber:119,columnNumber:13},void 0),e(V,{title:"Developer Form",children:e("div",{children:e("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e("div",{children:[e(N,{name:"developername",label:"Developer name",type:"text",placeholder:"Enter Developer name",register:v,error:i,value:a.developername||"",onChange:c},void 0,!1,{fileName:r,lineNumber:124,columnNumber:29},void 0),e("div",{className:" mt-2 text-danger-500 block text-sm",children:i},void 0,!1,{fileName:r,lineNumber:134,columnNumber:29},void 0)]},void 0,!0,{fileName:r,lineNumber:123,columnNumber:25},void 0),e(N,{name:"developercode",label:"Developer code",type:"text",register:v,placeholder:"Enter Developer code",value:a.developercode||"",onChange:c},void 0,!1,{fileName:r,lineNumber:138,columnNumber:25},void 0),e("div",{className:"lg:col-span-2 col-span-1",children:[m.pathname===`/update-developer/${s}`?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:y,type:"button",children:"Update"},void 0,!1,{fileName:r,lineNumber:151,columnNumber:41},void 0)},void 0,!1,{fileName:r,lineNumber:150,columnNumber:37},void 0):null,m.pathname==="/add-developer"?e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",onClick:D,type:"button",children:"Submit"},void 0,!1,{fileName:r,lineNumber:158,columnNumber:41},void 0)},void 0,!1,{fileName:r,lineNumber:157,columnNumber:37},void 0):null]},void 0,!0,{fileName:r,lineNumber:147,columnNumber:25},void 0)]},void 0,!0,{fileName:r,lineNumber:122,columnNumber:21},void 0)},void 0,!1,{fileName:r,lineNumber:121,columnNumber:17},void 0)},void 0,!1,{fileName:r,lineNumber:120,columnNumber:13},void 0)]},void 0,!0)};export{P as default};
