import{bs as W,r as o,A as X,ae as Y,v as Z,x,y as D,j as l,F as ee,s as le,e as ae,k as d,ao as y,bN as k,aA as C,L as te,z as ie,J as A,K as U,Q as B}from"./index.e066b4ed.js";import{T as re}from"./Textarea.776631a7.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\lead-management\\LeadForm.jsx";const E={option:(m,S)=>({...m,fontSize:"14px"})},se=()=>{const{id:m}=W(),[S,F]=o.exports.useState(""),[e,N]=o.exports.useState(""),L=X(),T=Y(),n=t=>{const{name:r,value:i}=t.target;N({...e,[r]:i})},O=[{value:"unsuccessful",label:"unsuccessful"},{value:"successful",label:"successful"},{value:"closed",label:"closed"},{value:"open",label:"open"},{value:"under progress",label:"under progress"},{value:"under viewing",label:"under viewing"}],[w,q]=o.exports.useState([]);o.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/employees").then(t=>t.json()).then(t=>{const r=t==null?void 0:t.map(i=>({label:(i==null?void 0:i.email)+" | "+(i==null?void 0:i.designation),value:i._id}));q(r)})},[]);const[v,P]=o.exports.useState(""),[b,R]=o.exports.useState(""),[f,p]=o.exports.useState(""),I=Z({firstname:x().required(v),lastname:x().required(b),email:x().email(f).required(f)}).required();o.exports.useEffect(()=>{(async()=>{if(m){const i=await(await fetch(`http://dev-rare.srp.ai/users/${m}`)).json();i&&(N(i),F(i==null?void 0:i.passportno))}})()},[m]),o.exports.useEffect(()=>{(async()=>{try{const r=await k.getAllCountries();let i=[];i=r==null?void 0:r.map(({isoCode:K,name:Q})=>({isoCode:K,name:Q}))}catch(r){console.log(r)}})()},[]);const{register:s,formState:{errors:j}}=D({resolver:ie(I)});let G={firstname:"First Name",lastname:"Last Name",email:"Email"};const V=()=>{let t=!1,r={firstname:P,lastname:R,email:p};return r&&Object.keys(r).length&&Object.keys(r).map(i=>{r[i](""),e[i]||(r[i](G[i]+" is required"),t=!0)}),t},[z,h]=o.exports.useState(""),[_,g]=o.exports.useState(!1);o.exports.useEffect(()=>{(e==null?void 0:e.location)&&(e==null?void 0:e.location)!==""&&/^(ftp|http|https):\/\/[^ "]+$/.test(e==null?void 0:e.location)===!1&&(e==null?void 0:e.location)!==""?(h("Url is Valid"),g(!0)):(h(""),g(!1))},[e==null?void 0:e.location]);const H=localStorage.getItem("isAuth"),u=JSON.parse(H),[c,$]=o.exports.useState(!1),J=async()=>{!e.firstname||!e.lastname||!e.email?V():A.isEmail(e.email)?_===!1&&e.firstname&&e.lastname&&e.email&&e.email&&(N({...e,type:"lead",createdBy:u==null?void 0:u._id}),(e==null?void 0:e.type)==="lead"&&($(!0),await U.post("http://dev-rare.srp.ai/users",e),B.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{L("/all-leads")},1500))):p("*Email is invalid")},M=async t=>{t.preventDefault(),!e.firstname||!e.lastname||!e.email?V():A.isEmail(e.email)?_===!1&&e.firstname&&e.lastname&&e.email&&($(!0),await U.patch("http://dev-rare.srp.ai/users",{...e,updatedBy:u==null?void 0:u._id}),B.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{L("/all-leads")},1500)):p("Email is invalid")};return l(ee,{children:[l(le,{},void 0,!1,{fileName:a,lineNumber:210,columnNumber:13},void 0),l("div",{className:"xl:col-span-2 col-span-1",children:l(ae,{title:"Lead Form",children:l("div",{children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{children:[l(d,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",register:s,error:v,value:e.firstname||"",onChange:n},void 0,!1,{fileName:a,lineNumber:217,columnNumber:33},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:v},void 0,!1,{fileName:a,lineNumber:227,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:215,columnNumber:29},void 0),l("div",{children:[l(d,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:s,error:b,value:e.lastname||"",onChange:n},void 0,!1,{fileName:a,lineNumber:232,columnNumber:33},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:b},void 0,!1,{fileName:a,lineNumber:242,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:231,columnNumber:29},void 0),l("div",{children:[l(d,{name:"email",label:"email",type:"email",placeholder:"Enter Email",register:s,error:f,value:e.email||"",onChange:n},void 0,!1,{fileName:a,lineNumber:247,columnNumber:33},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:f},void 0,!1,{fileName:a,lineNumber:257,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:246,columnNumber:29},void 0),l(d,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:s,error:j.contactno,value:e.contactno||"",onChange:n},void 0,!1,{fileName:a,lineNumber:261,columnNumber:29},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Nationality"},void 0,!1,{fileName:a,lineNumber:272,columnNumber:33},void 0),l(y,{className:"react-select",classNamePrefix:"select",name:"passportno",value:k.getAllCountries().filter(function(t){return t.name===S}),options:k.getAllCountries(),styles:E,id:"hh",getOptionLabel:t=>t.name,getOptionValue:t=>t.name,onChange:t=>{F(t==null?void 0:t.name),n({target:{name:"passportno",value:t.name}})}},void 0,!1,{fileName:a,lineNumber:275,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:271,columnNumber:29},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"},void 0,!1,{fileName:a,lineNumber:298,columnNumber:33},void 0),l(C,{className:"form-control py-2",name:"datebirth",value:e.datebirth||"",onChange:t=>{n({target:{name:"datebirth",value:t[0]}})},id:"default-picker",placeholder:"Select Date of Birth"},void 0,!1,{fileName:a,lineNumber:302,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:297,columnNumber:29},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"},void 0,!1,{fileName:a,lineNumber:312,columnNumber:33},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(t){return t.value===(e==null?void 0:e.employeeid)}),onChange:t=>{N({...e,employeeid:t==null?void 0:t.value})},styles:E,id:"hh"},void 0,!1,{fileName:a,lineNumber:315,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:311,columnNumber:29},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"},void 0,!1,{fileName:a,lineNumber:331,columnNumber:33},void 0),l(C,{className:"form-control py-2",name:"checkindate",value:e.checkindate||"",onChange:t=>{n({target:{name:"checkindate",value:t[0]}})},id:"default-picker",options:{maxDate:new Date(e==null?void 0:e.checkoutdate)||null},placeholder:"Select Check-In Date"},void 0,!1,{fileName:a,lineNumber:334,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:330,columnNumber:29},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"},void 0,!1,{fileName:a,lineNumber:347,columnNumber:33},void 0),l(C,{className:"form-control py-2",name:"checkoutdate",value:e.checkoutdate||"",onChange:t=>{n({target:{name:"checkoutdate",value:t[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.checkindate)||null},placeholder:"Select Check-Out Date"},void 0,!1,{fileName:a,lineNumber:350,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:346,columnNumber:29},void 0),l("div",{children:[l(d,{name:"location",label:"embed Google location",placeholder:"Enter EMBED GOOGLE LOCATION",type:"url",register:s,value:e.location||"",onChange:n},void 0,!1,{fileName:a,lineNumber:363,columnNumber:33},void 0),l("p",{className:" mt-2 text-danger-500 block text-sm",children:z},void 0,!1,{fileName:a,lineNumber:372,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:362,columnNumber:29},void 0),l(d,{name:"no_guests",label:"no. of guests",placeholder:"Enter no. of guests",type:"number",register:s,error:j.no_guests,value:e.no_guests||"",onChange:n},void 0,!1,{fileName:a,lineNumber:374,columnNumber:29},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Lead Status"},void 0,!1,{fileName:a,lineNumber:385,columnNumber:33},void 0),l(y,{className:"react-select",classNamePrefix:"select",name:"lead_status",value:O.filter(function(t){return t.value===(e==null?void 0:e.lead_status)}),options:O,styles:E,id:"hh",onChange:t=>{n({target:{name:"lead_status",value:t.value}})}},void 0,!1,{fileName:a,lineNumber:388,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:384,columnNumber:29},void 0),l("div",{className:"lg:col-span-2 col-span-1",children:l(re,{label:"Remarks",id:"pn4",placeholder:"Remarks",value:e.remarks||"",name:"remarks",onChange:n,register:s},void 0,!1,{fileName:a,lineNumber:404,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:403,columnNumber:29},void 0),l("div",{className:"lg:col-span-2 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${c===!0?"cursor-not-allowed	":""}`,children:c===!0?l("div",{className:` ${c===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"},void 0,!1,{fileName:a,lineNumber:412,columnNumber:45},void 0):l(te,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-leads",children:"Cancel"},void 0,!1,{fileName:a,lineNumber:413,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:409,columnNumber:33},void 0),T.pathname===`/update-leads/${m}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${c===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:M,children:"Update"},void 0,!1,{fileName:a,lineNumber:420,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:419,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:418,columnNumber:41},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${c===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:J,type:"button",children:"Submit"},void 0,!1,{fileName:a,lineNumber:425,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:424,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:423,columnNumber:41},void 0),c===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:a,lineNumber:433,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:432,columnNumber:41},void 0):null]},void 0,!0,{fileName:a,lineNumber:408,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:214,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:213,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:212,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:211,columnNumber:13},void 0)]},void 0,!0)};export{se as default};
