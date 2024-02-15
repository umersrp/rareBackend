import{bu as k,A as N,ag as j,r as o,w as O,x as q,y as w,c as r,F,j as t,t as S,C as $,l as g,z as E,K as f,Q as v}from"./index.4c47fd31.js";const P=()=>{const{id:n}=k(),c=N(),m=j(),[e,d]=o.exports.useState(""),u=i=>{const{name:s,value:a}=i.target;d({...e,[s]:a})};o.exports.useEffect(()=>{(async()=>{if(n){const a=await(await fetch(`http://dev-rare.srp.ai/amenities/${n}`)).json();a&&d(a)}})()},[n]);const[l,b]=o.exports.useState("");let x={amenitiesname:"Amenities Name"};const y=O({amenitiesname:q().required(l)}).required(),{register:h,formState:{errors:D}}=w({resolver:E(y)}),p=()=>{let i=!1,s={amenitiesname:b};return s&&Object.keys(s).length&&Object.keys(s).map(a=>{s[a](""),e[a]||(s[a](x[a]+" is required"),i=!0)}),i},C=async()=>{e.amenitiesname?(await f.post("http://dev-rare.srp.ai/amenities",e),v.success(`${e.amenitiesname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-amenities")},1500)):p()},A=async i=>{i.preventDefault(),e.amenitiesname?(await f.patch("http://dev-rare.srp.ai/amenities",e),v.success(`${e.amenitiesname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{c("/all-amenities")},1500)):p()};return r(F,{children:[t(S,{}),t($,{title:"Amenities Form",children:t("div",{children:r("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[r("div",{children:[t(g,{name:"amenitiesname",label:"Amenities name",type:"text",placeholder:"Enter Amenities name",register:h,error:l,value:e.amenitiesname||"",onChange:u}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:l})]}),t(g,{name:"amenitiescode",label:"Amenities code",type:"text",register:h,placeholder:"Enter Amenities code",value:e.amenitiescode||"",onChange:u}),r("div",{className:"lg:col-span-2 col-span-1",children:[m.pathname===`/update-amenities/${n}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:A,type:"button",children:"Update"})}):null,m.pathname==="/add-amenities"?t("div",{className:"ltr:text-right rtl:text-left",children:t("button",{className:"btn btn-dark  text-center",onClick:C,type:"button",children:"Submit"})}):null]})]})})})]})};export{P as default};
