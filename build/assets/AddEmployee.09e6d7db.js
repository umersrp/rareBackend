import{bt as Oe,B as Te,af as Fe,r as a,x as Ie,y as p,E as Ve,z as Le,c as r,F as j,j as t,t as Me,f as Ae,l as y,ap as q,aB as O,L as $e,A as Ue,K as ne,M as _,Q as T,bS as ze,bT as Be,bU as Ge,bV as Re}from"./index.8a3fa8e4.js";const F={option:(f,I)=>({...f,fontSize:"14px"})},et=()=>{const{id:f}=Oe(),I=Te(),K=Fe(),[e,S]=a.exports.useState("");a.exports.useState(new Date);const d=l=>{const{name:i,value:s}=l.target;S({...e,[i]:s})},Q=[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Other",label:"Other"},{value:"Transgender",label:"Transgender"},{value:"Genderqueer",label:"Genderqueer"},{value:"Non-Conforming",label:"Non-Conforming"},{value:"Prefer not to say",label:"Prefer not to say"}],W=[{value:"Apprentice",label:"Apprentice"},{value:"Intern",label:"Intern"},{value:"Piecework",label:"Piecework"},{value:"Commission",label:"Commission"},{value:"Contract",label:"Contract"},{value:"Probation",label:"Probation"},{value:"Part-time",label:"Part-time"},{value:"Full-time",label:"Full-time"}],[N,ie]=a.exports.useState([]);a.exports.useEffect(()=>{(async()=>{var c;const s=await(await fetch("https://rare.srp.ai/api/resource/Company",{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}})).json();if(s!=null&&s.data){const g=(c=s==null?void 0:s.data)==null?void 0:c.map(m=>({label:m.name,value:m.name}));ie(g)}})()},[]),a.exports.useEffect(()=>{(async()=>{if(f){const s=await(await fetch(`http://portals.rarehomesgroup.com/employees/${f}`)).json();s&&S(s)}})()},[f]);const[X,ae]=a.exports.useState([]);a.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/roles").then(l=>l.json()).then(l=>{const i=l==null?void 0:l.map(s=>({label:s.rolename,value:s._id}));ae(i)})},[]);const[He,se]=a.exports.useState([]);a.exports.useEffect(()=>{fetch("https://rare.srp.ai/api/resource/Role",{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{var s;const i=(s=l==null?void 0:l.data)==null?void 0:s.map(c=>({role:c.name,doctype:1,value:c.name,label:c.name}));se(i)})},[]);const[C,re]=a.exports.useState(""),[de,Je]=a.exports.useState(10),[ce,Ke]=a.exports.useState(!0),[me,Qe]=a.exports.useState(!0),[pe,We]=a.exports.useState(!0),[he,Xe]=a.exports.useState(!0),ye=l=>{let i="";me&&(i=i+ze),ce&&(i=i+Be),pe&&(i=i+Ge),he&&(i=i+Re),re(ge(i))},ge=l=>{let i="";const s=l.length;for(let c=0;c<de;c++){const g=Math.round(Math.random()*s);i=i+l.charAt(g)}return i};a.exports.useEffect(()=>{C&&S({...e,password:C,confirmpass:C})},[C]);const[V,L]=a.exports.useState(""),[M,fe]=a.exports.useState(""),[A,be]=a.exports.useState(""),[Y,xe]=a.exports.useState(""),[$,ve]=a.exports.useState(""),[U,_e]=a.exports.useState(""),[z,B]=a.exports.useState(""),[G,R]=a.exports.useState(""),[Z,ue]=a.exports.useState(""),[D,E]=a.exports.useState(""),[ee,P]=a.exports.useState(""),[te,we]=a.exports.useState(""),[H,Se]=a.exports.useState(""),[le,Ne]=a.exports.useState("");let Ce={firstname:"Firstname",lastname:"Lastname",email:"Email",designation:"Designation",employeeid:"Employee id",rolename:"Role Name",password:"Password",confirmpass:"Confirm Password",joiningdate:"Joining Date",gender:"Gender",date_of_birth:"Date of Birth",employment_type:"Employee Type",employee_number:"Employee Number",company:"Company"};const Ee=Ie({firstname:p().required($),lastname:p().required(U),email:p().required(V),designation:p().required(M),employeeid:p().required(A),rolename:p().required(Y),joiningdate:p().required(D),gender:p().required(Z),date_of_birth:p().required(ee),employment_type:p().required(te),employee_number:p().required(H),company:p().required(le),password:p().required("Password is required").min(8,"Password must be at least 8 characters").required(z),confirmpass:p().required("Confirm Password is required").oneOf([Ve("password"),null],"Passwords must match").required(G)}).required(),{register:h,formState:{errors:Ye}}=Le({resolver:Ue(Ee)}),oe=()=>{let l=!1,i={email:L,designation:fe,employeeid:be,rolename:xe,firstname:ve,lastname:_e,password:B,confirmpass:R,joiningdate:E,gender:ue,date_of_birth:P,employment_type:we,employee_number:Se,company:Ne};return i&&Object.keys(i).length&&Object.keys(i).map(s=>{i[s](""),e[s]||(i[s](Ce[s]+" is required"),l=!0)}),l},[u,k]=a.exports.useState(!1),[Ze,Pe]=a.exports.useState("");a.exports.useEffect(()=>{if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.date_of_birth)){const l=new Date(e.joiningdate).toISOString().substr(0,10),i=new Date(e.date_of_birth).toISOString().substr(0,10);l===i?(E("Joining Date and Date of Birth are same"),P("Joining Date and Date of Birth are same")):(E(""),P(""))}else E(""),P("")},[e==null?void 0:e.joiningdate,e==null?void 0:e.date_of_birth]);const w=window.location.origin,ke=async()=>{var l,i,s,c,g;if(!e.email||!e.employee_number||!e.designation||!e.company||!e.employeeid||!e.rolename||!(e!=null&&e.firstname)||!(e!=null&&e.lastname)||!(e!=null&&e.password)||!(e!=null&&e.confirmpass)||!(e!=null&&e.joiningdate)||!(e!=null&&e.date_of_birth)||!(e!=null&&e.gender)||!(e!=null&&e.employment_type))oe();else if(!ne.isEmail(e.email))L("Email is invalid");else if((e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass))B("Passwords are not equal"),R("Passwords are not equal");else try{k(!0);let m="";if((e==null?void 0:e.visaexpirydate)&&(e==null?void 0:e.visaexpirydate)!=="None"){const o=new Date(e==null?void 0:e.visaexpirydate);o==null||o.setDate((o==null?void 0:o.getDate())+1),m=(l=o==null?void 0:o.toISOString())==null?void 0:l.substring(0,10)}else m="";let b="";if((e==null?void 0:e.date_of_birth)&&(e==null?void 0:e.date_of_birth)!=="None"){const o=new Date(e==null?void 0:e.date_of_birth);o==null||o.setDate((o==null?void 0:o.getDate())+1),b=(i=o==null?void 0:o.toISOString())==null?void 0:i.substring(0,10)}else b="";let x="";if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.joiningdate)!=="None"){const o=new Date(e==null?void 0:e.joiningdate);o==null||o.setDate((o==null?void 0:o.getDate())+1),x=(s=o==null?void 0:o.toISOString())==null?void 0:s.substring(0,10)}else x="";let v="";if((e==null?void 0:e.contractexpirydate)&&(e==null?void 0:e.contractexpirydate)!=="None"){const o=new Date(e==null?void 0:e.contractexpirydate);o==null||o.setDate((o==null?void 0:o.getDate())+1),v=(c=o==null?void 0:o.toISOString())==null?void 0:c.substring(0,10)}else v="";const n=await _.post("http://portals.rarehomesgroup.com/employees",{...e,created_by:"PMS System"});if(w==="http://127.0.0.1:5173"||w==="http://stg.srp.ai"||w==="http://localhost:5173"){const{_id:o}=n.data;Pe(o),await _.post("https://rare.srp.ai/api/resource/User",{email:e.email,first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,password:e==null?void 0:e.password,roles:e==null?void 0:e.erproles},{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}});const J=await _.post("https://rare.srp.ai/api/resource/Employee",{first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,designations:e==null?void 0:e.designation,password:e==null?void 0:e.password,gender:e==null?void 0:e.gender,phone_number:e==null?void 0:e.contactno,employment_type:e==null?void 0:e.employment_type,employee_id:e==null?void 0:e.employeeid,employee_code:e==null?void 0:e.employeecode,_id:o,visa_expiry_date:m,date_of_birth:b,date_of_joining:x,user_id:e==null?void 0:e.email,contract_end_date:v,roleid:e==null?void 0:e.roleid,role_name:e==null?void 0:e.rolename,employee_number:e==null?void 0:e.employee_number,company:e==null?void 0:e.company,created_by:"PMS System"},{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}}),{name:qe}=(g=J==null?void 0:J.data)==null?void 0:g.data;await _.patch("http://portals.rarehomesgroup.com/employees",{...e,erp_id:qe,_id:o,created_by:"PMS System",updated_by:"PMS System"})}T.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{I("/all-employees")},1500)}catch(m){console.error("Error occurred during syncing:",m),k(!1),T.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},je=async l=>{var i,s,c,g;if(l.preventDefault(),!e.email||!(e!=null&&e.employee_number)||!e.designation||!e.employeeid||!e.rolename||!(e!=null&&e.firstname)||!(e!=null&&e.lastname)||!(e!=null&&e.password)||!(e!=null&&e.confirmpass)||!(e!=null&&e.joiningdate)||!(e!=null&&e.date_of_birth)||!(e!=null&&e.gender)||!(e!=null&&e.employment_type))oe();else if(!ne.isEmail(e.email))L("*Email is invalid");else if((e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass))B("Passwords are not equal"),R("Passwords are not equal");else try{k(!0);let m="";if((e==null?void 0:e.visaexpirydate)&&(e==null?void 0:e.visaexpirydate)!=="None"){const n=new Date(e==null?void 0:e.visaexpirydate);n==null||n.setDate((n==null?void 0:n.getDate())+1),m=(i=n==null?void 0:n.toISOString())==null?void 0:i.substring(0,10)}else m="";let b="";if((e==null?void 0:e.date_of_birth)&&(e==null?void 0:e.date_of_birth)!=="None"){const n=new Date(e==null?void 0:e.date_of_birth);n==null||n.setDate((n==null?void 0:n.getDate())+1),b=(s=n==null?void 0:n.toISOString())==null?void 0:s.substring(0,10)}else b="";let x="";if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.joiningdate)!=="None"){const n=new Date(e==null?void 0:e.joiningdate);n==null||n.setDate((n==null?void 0:n.getDate())+1),x=(c=n==null?void 0:n.toISOString())==null?void 0:c.substring(0,10)}else x="";let v="";if((e==null?void 0:e.contractexpirydate)&&(e==null?void 0:e.contractexpirydate)!=="None"){const n=new Date(e==null?void 0:e.contractexpirydate);n==null||n.setDate((n==null?void 0:n.getDate())+1),v=(g=n==null?void 0:n.toISOString())==null?void 0:g.substring(0,10)}else v="";await _.patch("http://portals.rarehomesgroup.com/employees",{...e,created_by:"PMS System",updated_by:"PMS System"}),(w==="http://127.0.0.1:5173"||w==="http://stg.srp.ai"||w==="http://localhost:5173")&&(await _.put("https://rare.srp.ai/api/resource/User/"+e.email,{email:e.email,first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,password:e==null?void 0:e.password},{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}}),await _.put("https://rare.srp.ai/api/resource/Employee/"+(e==null?void 0:e.erp_id),{first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,designations:e==null?void 0:e.designation,password:e==null?void 0:e.password,company:e==null?void 0:e.company,gender:e==null?void 0:e.gender,phone_number:e==null?void 0:e.contactno,employment_type:e==null?void 0:e.employment_type,employee_id:e==null?void 0:e.employeeid,employee_code:e==null?void 0:e.employeecode,_id:e==null?void 0:e._id,visa_expiry_date:m,date_of_birth:b,date_of_joining:x,user_id:e==null?void 0:e.email,contract_end_date:v,roleid:e==null?void 0:e.roleid,role_name:e==null?void 0:e.rolename,employee_number:e==null?void 0:e.employee_number,created_by:"PMS System",updated_by:"PMS System"},{headers:{Authorization:"Token ee2ad61eec41c0d:346c59fec48a731","Content-Type":"application/json"}})),T.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{I("/all-employees")},1500)}catch(m){console.error("Error occurred during syncing:",m),k(!1),T.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return r(j,{children:[t(Me,{}),t(Ae,{title:"Employee Form",children:t("div",{children:r("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[r("div",{children:[t(y,{name:"firstname",label:"Employee firstname",type:"text",placeholder:"Enter Employee firstname",register:h,error:$,value:e.firstname||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:$})]}),r("div",{children:[t(y,{name:"lastname",label:"Employee lastname",type:"text",placeholder:"Enter Employee lastname",register:h,error:U,value:e.lastname||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:U})]}),t("div",{children:K.pathname===`/update-employee/${f}`?t(j,{children:r("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Employee email"}),r("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.email?e==null?void 0:e.email:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})}):r(j,{children:[t(y,{name:"email",label:"Employee email",type:"text",placeholder:"Enter Employee name",register:h,error:V,value:e.email||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:V})]})}),r("div",{children:[t(y,{name:"designation",label:"Employee Designation",type:"text",placeholder:"Enter Employee Designation",register:h,error:M,value:e.designation||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:M})]}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Employment type"}),t(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:W,value:W.filter(function(l){return l.value===(e==null?void 0:e.employment_type)}),onChange:l=>{d({target:{name:"employment_type",value:l.value}})},styles:F,id:"hh"}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:te})]}),r("div",{children:[t(y,{name:"employeeid",label:"Employee id",type:"text",placeholder:"Enter Employee id",register:h,error:A,value:e.employeeid||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:A})]}),r("div",{children:[t(y,{name:"employee_number",label:"Employee Number",type:"number",placeholder:"Enter Employee Number",register:h,error:H,value:e.employee_number||"",onChange:d}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:H})]}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Select Employee Role"}),t(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:X,value:X.filter(function(l){return l.value===(e==null?void 0:e.roleid)}),onChange:l=>{S({...e,roleid:l==null?void 0:l.value,rolename:l==null?void 0:l.label})},styles:F,id:"hh"}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:Y})]}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Select Employee Company"}),t(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N==null?void 0:N.filter(function(l){return l.value===(e==null?void 0:e.company)}),onChange:l=>{S({...e,company:l==null?void 0:l.value})},styles:F,id:"hh"}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:le})]}),t(j,{}),t(y,{name:"employeecode",label:"Employee code",type:"text",register:h,placeholder:"Enter Employee code",value:e.employeecode||"",onChange:d}),t(y,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:h,value:e.contactno||"",onChange:d}),r("div",{children:[t(y,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:z,hasicon:!0,register:h,onChange:d,value:e.password||""}),r("div",{className:"flex items-center justify-between",children:[t("div",{className:" mt-2 text-danger-500 block text-sm",children:z}),t("button",{type:"button",onClick:ye,className:"generator__btn justify-end text-[12px]",children:"Generate Password"})]})]}),r("div",{children:[t(y,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:G,register:h,hasicon:!0,onChange:d,value:e.confirmpass||""}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:G})]}),r("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"gender"}),t(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(l){return l.value===(e==null?void 0:e.gender)}),onChange:l=>{d({target:{name:"gender",value:l.value}})},styles:F,id:"hh"}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:Z})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"}),t(O,{className:"form-control py-2",name:"date_of_birth",value:e.date_of_birth,placeholder:"Select Date",onChange:l=>{d({target:{name:"date_of_birth",value:l[0]}})},id:"default-picker",options:{maxDate:new Date(e==null?void 0:e.joiningdate)||null}}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:ee})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Joining Date"}),t(O,{className:"form-control py-2",name:"joiningdate",value:e.joiningdate,placeholder:"Select Date",onChange:l=>{d({target:{name:"joiningdate",value:l[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.date_of_birth)||null}}),t("div",{className:" mt-2 text-danger-500 block text-sm",children:D})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Visa Expiry Date"}),t(O,{className:"form-control py-2",name:"visaexpirydate",value:e.visaexpirydate,placeholder:"Select Date",onChange:l=>{d({target:{name:"visaexpirydate",value:l[0]}})},id:"default-picker"})]}),r("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Contract Expiry Date"}),t(O,{className:"form-control py-2",name:"contractexpirydate",value:e.contractexpirydate,placeholder:"Select Date",onChange:l=>{d({target:{name:"contractexpirydate",value:l[0]}})},id:"default-picker"})]}),r("div",{className:"lg:col-span-2 col-span-1 mt-[25px] flex items-center justify-end gap-x-[25px] relative",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${u===!0?"cursor-not-allowed	":""}`,children:u===!0?t("div",{className:` ${u===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t($e,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-employees",children:"Cancel"})}),K.pathname===`/update-employee/${f}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${u===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:je,children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${u===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:ke,type:"button",children:"Submit"})})}),u===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})]})};export{et as default};
