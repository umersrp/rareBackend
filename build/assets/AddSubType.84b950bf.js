import{bu as k,E as N,ag as j,r as c,y as O,z as q,A as E,c as n,F,j as t,v as T,f as $,m as h,B as w,N as y,Q as g}from"./index.a4717e99.js";const L=()=>{const{id:o}=k(),u=N(),i=j(),[e,p]=c.exports.useState(""),d=r=>{const{name:s,value:a}=r.target;p({...e,[s]:a})};c.exports.useEffect(()=>{(async()=>{if(o){const a=await(await fetch(`http://portals.rarehomesgroup.com/subtype/${o}`)).json();a&&p(a)}})()},[o]);const[l,f]=c.exports.useState("");let v={subtypename:"SubType Name"};const x=O({subtypename:q().required(l)}).required(),{register:m,formState:{errors:B}}=E({resolver:w(x)}),b=()=>{let r=!1,s={subtypename:f};return s&&Object.keys(s).length&&Object.keys(s).map(a=>{s[a](""),e[a]||(s[a](v[a]+" is required"),r=!0)}),r},S=async()=>{e.subtypename?(await y.post("http://portals.rarehomesgroup.com/subtype",e),g.success(`${e.subtypename} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{u("/all-subtype")},1500)):b()},C=async r=>{r.preventDefault(),e.subtypename?(await y.patch("http://portals.rarehomesgroup.com/subtype",e),g.success(`${e.subtypename} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{u("/all-subtype")},1500)):b()};return n(F,{children:[t(T,{}),t($,{title:"Subtype Form",children:t("div",{children:n("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[n("div",{children:[t(h,{name:"subtypename",label:"Subtype name",type:"text",placeholder:"Enter Subtype name",register:m,error:l,value:e.subtypename||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:l})]}),t(h,{name:"subtypecode",label:"Subtype code",type:"text",register:m,placeholder:"Enter Subtype code",value:e.subtypecode||"",onChange:d}),n("div",{className:"lg:col-span-2 col-span-1",children:[i.pathname===`/update-subtype/${o}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:C,type:"button",children:"Update"})}):null,i.pathname==="/add-subtype"?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:S,type:"button",children:"Submit"})}):null]})]})})})]})};export{L as default};
