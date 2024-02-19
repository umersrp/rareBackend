import{bu as W,r as n,A as X,ag as Y,w as Z,x as y,y as D,c as r,F as ee,j as t,t as ae,C as te,l as m,aq as C,bO as N,aC as k,L as le,z as se,J as _,K as q,Q as B}from"./index.288a2b39.js";import{T as ne}from"./Textarea.7ada3525.js";const S={option:(c,E)=>({...c,fontSize:"14px"})},ie=()=>{const{id:c}=W(),[E,F]=n.exports.useState(""),[e,h]=n.exports.useState(""),O=X(),T=Y(),o=a=>{const{name:s,value:l}=a.target;h({...e,[s]:l})},L=[{value:"unsuccessful",label:"unsuccessful"},{value:"successful",label:"successful"},{value:"closed",label:"closed"},{value:"open",label:"open"},{value:"under progress",label:"under progress"},{value:"under viewing",label:"under viewing"}],[w,U]=n.exports.useState([]);n.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/employees").then(a=>a.json()).then(a=>{const s=a==null?void 0:a.map(l=>({label:(l==null?void 0:l.email)+" | "+(l==null?void 0:l.designation),value:l._id}));U(s)})},[]);const[f,P]=n.exports.useState(""),[g,I]=n.exports.useState(""),[p,v]=n.exports.useState(""),R=Z({firstname:y().required(f),lastname:y().required(g),email:y().email(p).required(p)}).required();n.exports.useEffect(()=>{(async()=>{if(c){const l=await(await fetch(`http://dev-rare.srp.ai/users/${c}`)).json();l&&(h(l),F(l==null?void 0:l.passportno))}})()},[c]),n.exports.useEffect(()=>{(async()=>{try{const s=await N.getAllCountries();let l=[];l=s==null?void 0:s.map(({isoCode:K,name:Q})=>({isoCode:K,name:Q}))}catch(s){console.log(s)}})()},[]);const{register:i,formState:{errors:$}}=D({resolver:se(R)});let G={firstname:"First Name",lastname:"Last Name",email:"Email"};const j=()=>{let a=!1,s={firstname:P,lastname:I,email:v};return s&&Object.keys(s).length&&Object.keys(s).map(l=>{s[l](""),e[l]||(s[l](G[l]+" is required"),a=!0)}),a},[z,b]=n.exports.useState(""),[A,x]=n.exports.useState(!1);n.exports.useEffect(()=>{(e==null?void 0:e.location)&&(e==null?void 0:e.location)!==""&&/^(ftp|http|https):\/\/[^ "]+$/.test(e==null?void 0:e.location)===!1&&(e==null?void 0:e.location)!==""?(b("Url is Valid"),x(!0)):(b(""),x(!1))},[e==null?void 0:e.location]);const H=localStorage.getItem("isAuth"),d=JSON.parse(H),[u,V]=n.exports.useState(!1),J=async()=>{!e.firstname||!e.lastname||!e.email?j():_.isEmail(e.email)?A===!1&&e.firstname&&e.lastname&&e.email&&e.email&&(h({...e,type:"lead",createdBy:d==null?void 0:d._id}),(e==null?void 0:e.type)==="lead"&&(V(!0),await q.post("http://dev-rare.srp.ai/users",e),B.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{O("/all-leads")},1500))):v("*Email is invalid")},M=async a=>{a.preventDefault(),!e.firstname||!e.lastname||!e.email?j():_.isEmail(e.email)?A===!1&&e.firstname&&e.lastname&&e.email&&(V(!0),await q.patch("http://dev-rare.srp.ai/users",{...e,updatedBy:d==null?void 0:d._id}),B.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{O("/all-leads")},1500)):v("Email is invalid")};return r(ee,{children:[t(ae,{}),t("div",{className:"xl:col-span-2 col-span-1",children:t(te,{title:"Lead Form",children:t("div",{children:r("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[r("div",{children:[t(m,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",register:i,error:f,value:e.firstname||"",onChange:o}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:f})]}),r("div",{children:[t(m,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:i,error:g,value:e.lastname||"",onChange:o}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:g})]}),r("div",{children:[t(m,{name:"email",label:"email",type:"email",placeholder:"Enter Email",register:i,error:p,value:e.email||"",onChange:o}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:p})]}),t(m,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:i,error:$.contactno,value:e.contactno||"",onChange:o}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Nationality"}),t(C,{className:"react-select",classNamePrefix:"select",name:"passportno",value:N.getAllCountries().filter(function(a){return a.name===E}),options:N.getAllCountries(),styles:S,id:"hh",getOptionLabel:a=>a.name,getOptionValue:a=>a.name,onChange:a=>{F(a==null?void 0:a.name),o({target:{name:"passportno",value:a.name}})}})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"}),t(k,{className:"form-control py-2",name:"datebirth",value:e.datebirth||"",onChange:a=>{o({target:{name:"datebirth",value:a[0]}})},id:"default-picker",placeholder:"Select Date of Birth"})]}),r("div",{className:"",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"}),t(C,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(a){return a.value===(e==null?void 0:e.employeeid)}),onChange:a=>{h({...e,employeeid:a==null?void 0:a.value})},styles:S,id:"hh"})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"}),t(k,{className:"form-control py-2",name:"checkindate",value:e.checkindate||"",onChange:a=>{o({target:{name:"checkindate",value:a[0]}})},id:"default-picker",options:{maxDate:new Date(e==null?void 0:e.checkoutdate)||null},placeholder:"Select Check-In Date"})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"}),t(k,{className:"form-control py-2",name:"checkoutdate",value:e.checkoutdate||"",onChange:a=>{o({target:{name:"checkoutdate",value:a[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.checkindate)||null},placeholder:"Select Check-Out Date"})]}),r("div",{children:[t(m,{name:"location",label:"embed Google location",placeholder:"Enter EMBED GOOGLE LOCATION",type:"url",register:i,value:e.location||"",onChange:o}),t("p",{className:" mt-2 text-danger-500 block text-sm",children:z})]}),t(m,{name:"no_guests",label:"no. of guests",placeholder:"Enter no. of guests",type:"number",register:i,error:$.no_guests,value:e.no_guests||"",onChange:o}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Lead Status"}),t(C,{className:"react-select",classNamePrefix:"select",name:"lead_status",value:L.filter(function(a){return a.value===(e==null?void 0:e.lead_status)}),options:L,styles:S,id:"hh",onChange:a=>{o({target:{name:"lead_status",value:a.value}})}})]}),t("div",{className:"lg:col-span-2 col-span-1",children:t(ne,{label:"Remarks",id:"pn4",placeholder:"Remarks",value:e.remarks||"",name:"remarks",onChange:o,register:i})}),r("div",{className:"lg:col-span-2 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${u===!0?"cursor-not-allowed	":""}`,children:u===!0?t("div",{className:` ${u===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t(le,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-leads",children:"Cancel"})}),T.pathname===`/update-leads/${c}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${u===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:M,children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${u===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:J,type:"button",children:"Submit"})})}),u===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})})]})};export{ie as default};
