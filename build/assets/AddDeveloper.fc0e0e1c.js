import{bt as k,B as N,af as j,r as d,x as O,y as q,z as F,c as l,F as S,j as t,t as $,f as w,l as h,A as E,M as g,Q as f}from"./index.8a3fa8e4.js";const P=()=>{const{id:o}=k(),c=N(),i=j(),[e,p]=d.exports.useState(""),u=s=>{const{name:r,value:a}=s.target;p({...e,[r]:a})};d.exports.useEffect(()=>{(async()=>{if(o){const a=await(await fetch(`http://portals.rarehomesgroup.com/developer/${o}`)).json();a&&p(a)}})()},[o]);const[n,b]=d.exports.useState("");let x={developername:"Developer Name"};const y=O({developername:q().required(n)}).required(),{register:m,formState:{errors:B}}=F({resolver:E(y)}),v=()=>{let s=!1,r={developername:b};return r&&Object.keys(r).length&&Object.keys(r).map(a=>{r[a](""),e[a]||(r[a](x[a]+" is required"),s=!0)}),s},D=async()=>{e.developername?(await g.post("http://portals.rarehomesgroup.com/developer",e),f.success(`${e.developername} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-developer")},1500)):v()},C=async s=>{s.preventDefault(),e.developername?(await g.patch("http://portals.rarehomesgroup.com/developer",e),f.success(`${e.developername} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-developer")},1500)):v()};return l(S,{children:[t($,{}),t(w,{title:"Developer Form",children:t("div",{children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{children:[t(h,{name:"developername",label:"Developer name",type:"text",placeholder:"Enter Developer name",register:m,error:n,value:e.developername||"",onChange:u}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:n})]}),t(h,{name:"developercode",label:"Developer code",type:"text",register:m,placeholder:"Enter Developer code",value:e.developercode||"",onChange:u}),l("div",{className:"lg:col-span-2 col-span-1",children:[i.pathname===`/update-developer/${o}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:C,type:"button",children:"Update"})}):null,i.pathname==="/add-developer"?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:D,type:"button",children:"Submit"})}):null]})]})})})]})};export{P as default};
