import{bu as k,A as N,ag as j,r as i,w as O,x as q,y as w,c as l,F,j as t,t as T,C as $,l as h,z as E,K as y,Q as g}from"./index.ff2edc16.js";const P=()=>{const{id:n}=k(),c=N(),u=j(),[e,d]=i.exports.useState(""),p=r=>{const{name:s,value:a}=r.target;d({...e,[s]:a})};i.exports.useEffect(()=>{(async()=>{if(n){const a=await(await fetch(`http://dev-rare.srp.ai/subtype/${n}`)).json();a&&d(a)}})()},[n]);const[o,f]=i.exports.useState("");let v={subtypename:"SubType Name"};const x=O({subtypename:q().required(o)}).required(),{register:b,formState:{errors:D}}=w({resolver:E(x)}),m=()=>{let r=!1,s={subtypename:f};return s&&Object.keys(s).length&&Object.keys(s).map(a=>{s[a](""),e[a]||(s[a](v[a]+" is required"),r=!0)}),r},S=async()=>{e.subtypename?(await y.post("http://dev-rare.srp.ai/subtype",e),g.success(`${e.subtypename} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-subtype")},1500)):m()},C=async r=>{r.preventDefault(),e.subtypename?(await y.patch("http://dev-rare.srp.ai/subtype",e),g.success(`${e.subtypename} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-subtype")},1500)):m()};return l(F,{children:[t(T,{}),t($,{title:"Subtype Form",children:t("div",{children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{children:[t(h,{name:"subtypename",label:"Subtype name",type:"text",placeholder:"Enter Subtype name",register:b,error:o,value:e.subtypename||"",onChange:p}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:o})]}),t(h,{name:"subtypecode",label:"Subtype code",type:"text",register:b,placeholder:"Enter Subtype code",value:e.subtypecode||"",onChange:p}),l("div",{className:"lg:col-span-2 col-span-1",children:[u.pathname===`/update-subtype/${n}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:C,type:"button",children:"Update"})}):null,u.pathname==="/add-subtype"?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:S,type:"button",children:"Submit"})}):null]})]})})})]})};export{P as default};
