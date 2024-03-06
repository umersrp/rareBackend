import{bt as Oe,B as Fe,af as Te,r,x as Ie,y as p,E as Ve,z as Le,j as l,F as j,t as Ae,e as Me,l as b,ap as q,aB as O,L as Ue,A as $e,K as ne,M as g,Q as F,bS as ze,bT as Be,bU as Ge,bV as Re}from"./index.81a32f9e.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\employees\\AddEmployee.jsx";const T={option:(N,I)=>({...N,fontSize:"14px"})},el=()=>{const{id:N}=Oe(),I=Fe(),K=Te(),[e,w]=r.exports.useState("");r.exports.useState(new Date);const s=o=>{const{name:a,value:m}=o.target;w({...e,[a]:m})},Q=[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Other",label:"Other"},{value:"Transgender",label:"Transgender"},{value:"Genderqueer",label:"Genderqueer"},{value:"Non-Conforming",label:"Non-Conforming"},{value:"Prefer not to say",label:"Prefer not to say"}],W=[{value:"Apprentice",label:"Apprentice"},{value:"Intern",label:"Intern"},{value:"Piecework",label:"Piecework"},{value:"Commission",label:"Commission"},{value:"Contract",label:"Contract"},{value:"Probation",label:"Probation"},{value:"Part-time",label:"Part-time"},{value:"Full-time",label:"Full-time"}],[S,te]=r.exports.useState([]);r.exports.useEffect(()=>{(async()=>{var d;const m=await(await fetch("https://rare-staging.srp.ai/api/resource/Company",{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}})).json();if(m!=null&&m.data){const f=(d=m==null?void 0:m.data)==null?void 0:d.map(c=>({label:c.name,value:c.name}));te(f)}})()},[]),r.exports.useEffect(()=>{(async()=>{if(N){const m=await(await fetch(`http://dev-rare.srp.ai/employees/${N}`)).json();m&&w(m)}})()},[N]);const[X,ae]=r.exports.useState([]);r.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/roles").then(o=>o.json()).then(o=>{const a=o==null?void 0:o.map(m=>({label:m.rolename,value:m._id}));ae(a)})},[]);const[He,re]=r.exports.useState([]);r.exports.useEffect(()=>{fetch("https://rare-staging.srp.ai/api/resource/Role",{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}}).then(o=>o.json()).then(o=>{var m;const a=(m=o==null?void 0:o.data)==null?void 0:m.map(d=>({role:d.name,doctype:1,value:d.name,label:d.name}));re(a)})},[]);const[C,me]=r.exports.useState(""),[se,Je]=r.exports.useState(10),[de,Ke]=r.exports.useState(!0),[ce,Qe]=r.exports.useState(!0),[pe,We]=r.exports.useState(!0),[ue,Xe]=r.exports.useState(!0),be=o=>{let a="";ce&&(a=a+ze),de&&(a=a+Be),pe&&(a=a+Ge),ue&&(a=a+Re),me(fe(a))},fe=o=>{let a="";const m=o.length;for(let d=0;d<se;d++){const f=Math.round(Math.random()*m);a=a+o.charAt(f)}return a};r.exports.useEffect(()=>{C&&w({...e,password:C,confirmpass:C})},[C]);const[V,L]=r.exports.useState(""),[A,Ne]=r.exports.useState(""),[M,ve]=r.exports.useState(""),[Y,he]=r.exports.useState(""),[U,ye]=r.exports.useState(""),[$,ge]=r.exports.useState(""),[z,B]=r.exports.useState(""),[G,R]=r.exports.useState(""),[Z,xe]=r.exports.useState(""),[D,E]=r.exports.useState(""),[ee,P]=r.exports.useState(""),[le,_e]=r.exports.useState(""),[H,we]=r.exports.useState(""),[ie,Se]=r.exports.useState("");let Ce={firstname:"Firstname",lastname:"Lastname",email:"Email",designation:"Designation",employeeid:"Employee id",rolename:"Role Name",password:"Password",confirmpass:"Confirm Password",joiningdate:"Joining Date",gender:"Gender",date_of_birth:"Date of Birth",employment_type:"Employee Type",employee_number:"Employee Number",company:"Company"};const Ee=Ie({firstname:p().required(U),lastname:p().required($),email:p().required(V),designation:p().required(A),employeeid:p().required(M),rolename:p().required(Y),joiningdate:p().required(D),gender:p().required(Z),date_of_birth:p().required(ee),employment_type:p().required(le),employee_number:p().required(H),company:p().required(ie),password:p().required("Password is required").min(8,"Password must be at least 8 characters").required(z),confirmpass:p().required("Confirm Password is required").oneOf([Ve("password"),null],"Passwords must match").required(G)}).required(),{register:u,formState:{errors:Ye}}=Le({resolver:$e(Ee)}),oe=()=>{let o=!1,a={email:L,designation:Ne,employeeid:ve,rolename:he,firstname:ye,lastname:ge,password:B,confirmpass:R,joiningdate:E,gender:xe,date_of_birth:P,employment_type:_e,employee_number:we,company:Se};return a&&Object.keys(a).length&&Object.keys(a).map(m=>{a[m](""),e[m]||(a[m](Ce[m]+" is required"),o=!0)}),o},[x,k]=r.exports.useState(!1),[Ze,Pe]=r.exports.useState("");r.exports.useEffect(()=>{if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.date_of_birth)){const o=new Date(e.joiningdate).toISOString().substr(0,10),a=new Date(e.date_of_birth).toISOString().substr(0,10);o===a?(E("Joining Date and Date of Birth are same"),P("Joining Date and Date of Birth are same")):(E(""),P(""))}else E(""),P("")},[e==null?void 0:e.joiningdate,e==null?void 0:e.date_of_birth]);const _=window.location.origin,ke=async()=>{var o,a,m,d,f;if(!e.email||!e.employee_number||!e.designation||!e.company||!e.employeeid||!e.rolename||!(e!=null&&e.firstname)||!(e!=null&&e.lastname)||!(e!=null&&e.password)||!(e!=null&&e.confirmpass)||!(e!=null&&e.joiningdate)||!(e!=null&&e.date_of_birth)||!(e!=null&&e.gender)||!(e!=null&&e.employment_type))oe();else if(!ne.isEmail(e.email))L("Email is invalid");else if((e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass))B("Passwords are not equal"),R("Passwords are not equal");else try{k(!0);let c="";if((e==null?void 0:e.visaexpirydate)&&(e==null?void 0:e.visaexpirydate)!=="None"){const n=new Date(e==null?void 0:e.visaexpirydate);n==null||n.setDate((n==null?void 0:n.getDate())+1),c=(o=n==null?void 0:n.toISOString())==null?void 0:o.substring(0,10)}else c="";let v="";if((e==null?void 0:e.date_of_birth)&&(e==null?void 0:e.date_of_birth)!=="None"){const n=new Date(e==null?void 0:e.date_of_birth);n==null||n.setDate((n==null?void 0:n.getDate())+1),v=(a=n==null?void 0:n.toISOString())==null?void 0:a.substring(0,10)}else v="";let h="";if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.joiningdate)!=="None"){const n=new Date(e==null?void 0:e.joiningdate);n==null||n.setDate((n==null?void 0:n.getDate())+1),h=(m=n==null?void 0:n.toISOString())==null?void 0:m.substring(0,10)}else h="";let y="";if((e==null?void 0:e.contractexpirydate)&&(e==null?void 0:e.contractexpirydate)!=="None"){const n=new Date(e==null?void 0:e.contractexpirydate);n==null||n.setDate((n==null?void 0:n.getDate())+1),y=(d=n==null?void 0:n.toISOString())==null?void 0:d.substring(0,10)}else y="";const t=await g.post("http://dev-rare.srp.ai/employees",{...e,created_by:"PMS System"});if(_==="http://127.0.0.1:5173"||_==="http://stg.srp.ai"||_==="http://localhost:5173"){const{_id:n}=t.data;Pe(n),await g.post("https://rare-staging.srp.ai/api/resource/User",{email:e.email,first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,password:e==null?void 0:e.password,roles:e==null?void 0:e.erproles},{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}});const J=await g.post("https://rare-staging.srp.ai/api/resource/Employee",{first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,designations:e==null?void 0:e.designation,password:e==null?void 0:e.password,gender:e==null?void 0:e.gender,phone_number:e==null?void 0:e.contactno,employment_type:e==null?void 0:e.employment_type,employee_id:e==null?void 0:e.employeeid,employee_code:e==null?void 0:e.employeecode,_id:n,visa_expiry_date:c,date_of_birth:v,date_of_joining:h,user_id:e==null?void 0:e.email,contract_end_date:y,roleid:e==null?void 0:e.roleid,role_name:e==null?void 0:e.rolename,employee_number:e==null?void 0:e.employee_number,company:e==null?void 0:e.company,created_by:"PMS System"},{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}}),{name:qe}=(f=J==null?void 0:J.data)==null?void 0:f.data;await g.patch("http://dev-rare.srp.ai/employees",{...e,erp_id:qe,_id:n,created_by:"PMS System",updated_by:"PMS System"})}F.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{I("/all-employees")},1500)}catch(c){console.error("Error occurred during syncing:",c),k(!1),F.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},je=async o=>{var a,m,d,f;if(o.preventDefault(),!e.email||!(e!=null&&e.employee_number)||!e.designation||!e.employeeid||!e.rolename||!(e!=null&&e.firstname)||!(e!=null&&e.lastname)||!(e!=null&&e.password)||!(e!=null&&e.confirmpass)||!(e!=null&&e.joiningdate)||!(e!=null&&e.date_of_birth)||!(e!=null&&e.gender)||!(e!=null&&e.employment_type))oe();else if(!ne.isEmail(e.email))L("*Email is invalid");else if((e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass))B("Passwords are not equal"),R("Passwords are not equal");else try{k(!0);let c="";if((e==null?void 0:e.visaexpirydate)&&(e==null?void 0:e.visaexpirydate)!=="None"){const t=new Date(e==null?void 0:e.visaexpirydate);t==null||t.setDate((t==null?void 0:t.getDate())+1),c=(a=t==null?void 0:t.toISOString())==null?void 0:a.substring(0,10)}else c="";let v="";if((e==null?void 0:e.date_of_birth)&&(e==null?void 0:e.date_of_birth)!=="None"){const t=new Date(e==null?void 0:e.date_of_birth);t==null||t.setDate((t==null?void 0:t.getDate())+1),v=(m=t==null?void 0:t.toISOString())==null?void 0:m.substring(0,10)}else v="";let h="";if((e==null?void 0:e.joiningdate)&&(e==null?void 0:e.joiningdate)!=="None"){const t=new Date(e==null?void 0:e.joiningdate);t==null||t.setDate((t==null?void 0:t.getDate())+1),h=(d=t==null?void 0:t.toISOString())==null?void 0:d.substring(0,10)}else h="";let y="";if((e==null?void 0:e.contractexpirydate)&&(e==null?void 0:e.contractexpirydate)!=="None"){const t=new Date(e==null?void 0:e.contractexpirydate);t==null||t.setDate((t==null?void 0:t.getDate())+1),y=(f=t==null?void 0:t.toISOString())==null?void 0:f.substring(0,10)}else y="";await g.patch("http://dev-rare.srp.ai/employees",{...e,created_by:"PMS System",updated_by:"PMS System"}),(_==="http://127.0.0.1:5173"||_==="http://stg.srp.ai"||_==="http://localhost:5173")&&(await g.put("https://rare-staging.srp.ai/api/resource/User/"+e.email,{email:e.email,first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,password:e==null?void 0:e.password},{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}}),await g.put("https://rare-staging.srp.ai/api/resource/Employee/"+(e==null?void 0:e.erp_id),{first_name:e==null?void 0:e.firstname,last_name:e==null?void 0:e.lastname,designations:e==null?void 0:e.designation,password:e==null?void 0:e.password,company:e==null?void 0:e.company,gender:e==null?void 0:e.gender,phone_number:e==null?void 0:e.contactno,employment_type:e==null?void 0:e.employment_type,employee_id:e==null?void 0:e.employeeid,employee_code:e==null?void 0:e.employeecode,_id:e==null?void 0:e._id,visa_expiry_date:c,date_of_birth:v,date_of_joining:h,user_id:e==null?void 0:e.email,contract_end_date:y,roleid:e==null?void 0:e.roleid,role_name:e==null?void 0:e.rolename,employee_number:e==null?void 0:e.employee_number,created_by:"PMS System",updated_by:"PMS System"},{headers:{Authorization:"Token 66d237a05bf1789:bf553d9a4de7d8d","Content-Type":"application/json"}})),F.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{I("/all-employees")},1500)}catch(c){console.error("Error occurred during syncing:",c),k(!1),F.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return l(j,{children:[l(Ae,{},void 0,!1,{fileName:i,lineNumber:633,columnNumber:13},void 0),l(Me,{title:"Employee Form",children:l("div",{children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{children:[l(b,{name:"firstname",label:"Employee firstname",type:"text",placeholder:"Enter Employee firstname",register:u,error:U,value:e.firstname||"",onChange:s},void 0,!1,{fileName:i,lineNumber:638,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:U},void 0,!1,{fileName:i,lineNumber:648,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:637,columnNumber:25},void 0),l("div",{children:[l(b,{name:"lastname",label:"Employee lastname",type:"text",placeholder:"Enter Employee lastname",register:u,error:$,value:e.lastname||"",onChange:s},void 0,!1,{fileName:i,lineNumber:653,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:$},void 0,!1,{fileName:i,lineNumber:663,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:652,columnNumber:25},void 0),l("div",{children:K.pathname===`/update-employee/${N}`?l(j,{children:l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Employee email"},void 0,!1,{fileName:i,lineNumber:672,columnNumber:45},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:674,columnNumber:49},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:i,lineNumber:675,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:673,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:671,columnNumber:41},void 0)},void 0,!1):l(j,{children:[l(b,{name:"email",label:"Employee email",type:"text",placeholder:"Enter Employee name",register:u,error:V,value:e.email||"",onChange:s},void 0,!1,{fileName:i,lineNumber:680,columnNumber:41},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:V},void 0,!1,{fileName:i,lineNumber:690,columnNumber:41},void 0)]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:667,columnNumber:25},void 0),l("div",{children:[l(b,{name:"designation",label:"Employee Designation",type:"text",placeholder:"Enter Employee Designation",register:u,error:A,value:e.designation||"",onChange:s},void 0,!1,{fileName:i,lineNumber:697,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:A},void 0,!1,{fileName:i,lineNumber:707,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:696,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Employment type"},void 0,!1,{fileName:i,lineNumber:712,columnNumber:29},void 0),l(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:W,value:W.filter(function(o){return o.value===(e==null?void 0:e.employment_type)}),onChange:o=>{s({target:{name:"employment_type",value:o.value}})},styles:T,id:"hh"},void 0,!1,{fileName:i,lineNumber:715,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:le},void 0,!1,{fileName:i,lineNumber:729,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:711,columnNumber:25},void 0),l("div",{children:[l(b,{name:"employeeid",label:"Employee id",type:"text",placeholder:"Enter Employee id",register:u,error:M,value:e.employeeid||"",onChange:s},void 0,!1,{fileName:i,lineNumber:734,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:M},void 0,!1,{fileName:i,lineNumber:744,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:733,columnNumber:25},void 0),l("div",{children:[l(b,{name:"employee_number",label:"Employee Number",type:"number",placeholder:"Enter Employee Number",register:u,error:H,value:e.employee_number||"",onChange:s},void 0,!1,{fileName:i,lineNumber:749,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:H},void 0,!1,{fileName:i,lineNumber:759,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:748,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Select Employee Role"},void 0,!1,{fileName:i,lineNumber:764,columnNumber:29},void 0),l(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:X,value:X.filter(function(o){return o.value===(e==null?void 0:e.roleid)}),onChange:o=>{w({...e,roleid:o==null?void 0:o.value,rolename:o==null?void 0:o.label})},styles:T,id:"hh"},void 0,!1,{fileName:i,lineNumber:767,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:Y},void 0,!1,{fileName:i,lineNumber:781,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:763,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Select Employee Company"},void 0,!1,{fileName:i,lineNumber:786,columnNumber:29},void 0),l(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S==null?void 0:S.filter(function(o){return o.value===(e==null?void 0:e.company)}),onChange:o=>{w({...e,company:o==null?void 0:o.value})},styles:T,id:"hh"},void 0,!1,{fileName:i,lineNumber:789,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:ie},void 0,!1,{fileName:i,lineNumber:803,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:785,columnNumber:25},void 0),l(j,{},void 0,!1),l(b,{name:"employeecode",label:"Employee code",type:"text",register:u,placeholder:"Enter Employee code",value:e.employeecode||"",onChange:s},void 0,!1,{fileName:i,lineNumber:828,columnNumber:25},void 0),l(b,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:u,value:e.contactno||"",onChange:s},void 0,!1,{fileName:i,lineNumber:837,columnNumber:25},void 0),l("div",{children:[l(b,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:z,hasicon:!0,register:u,onChange:s,value:e.password||""},void 0,!1,{fileName:i,lineNumber:847,columnNumber:29},void 0),l("div",{className:"flex items-center justify-between",children:[l("div",{className:" mt-2 text-danger-500 block text-sm",children:z},void 0,!1,{fileName:i,lineNumber:859,columnNumber:33},void 0),l("button",{type:"button",onClick:be,className:"generator__btn justify-end text-[12px]",children:"Generate Password"},void 0,!1,{fileName:i,lineNumber:862,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:858,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:846,columnNumber:25},void 0),l("div",{children:[l(b,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:G,register:u,hasicon:!0,onChange:s,value:e.confirmpass||""},void 0,!1,{fileName:i,lineNumber:868,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:G},void 0,!1,{fileName:i,lineNumber:879,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:867,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"gender"},void 0,!1,{fileName:i,lineNumber:884,columnNumber:29},void 0),l(q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(o){return o.value===(e==null?void 0:e.gender)}),onChange:o=>{s({target:{name:"gender",value:o.value}})},styles:T,id:"hh"},void 0,!1,{fileName:i,lineNumber:887,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:Z},void 0,!1,{fileName:i,lineNumber:901,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:883,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"},void 0,!1,{fileName:i,lineNumber:906,columnNumber:29},void 0),l(O,{className:"form-control py-2",name:"date_of_birth",value:e.date_of_birth,placeholder:"Select Date",onChange:o=>{s({target:{name:"date_of_birth",value:o[0]}})},id:"default-picker",options:{maxDate:new Date(e==null?void 0:e.joiningdate)||null}},void 0,!1,{fileName:i,lineNumber:909,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:ee},void 0,!1,{fileName:i,lineNumber:921,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:905,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Joining Date"},void 0,!1,{fileName:i,lineNumber:926,columnNumber:29},void 0),l(O,{className:"form-control py-2",name:"joiningdate",value:e.joiningdate,placeholder:"Select Date",onChange:o=>{s({target:{name:"joiningdate",value:o[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.date_of_birth)||null}},void 0,!1,{fileName:i,lineNumber:929,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:D},void 0,!1,{fileName:i,lineNumber:941,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:925,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Visa Expiry Date"},void 0,!1,{fileName:i,lineNumber:946,columnNumber:29},void 0),l(O,{className:"form-control py-2",name:"visaexpirydate",value:e.visaexpirydate,placeholder:"Select Date",onChange:o=>{s({target:{name:"visaexpirydate",value:o[0]}})},id:"default-picker"},void 0,!1,{fileName:i,lineNumber:949,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:945,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Contract Expiry Date"},void 0,!1,{fileName:i,lineNumber:959,columnNumber:29},void 0),l(O,{className:"form-control py-2",name:"contractexpirydate",value:e.contractexpirydate,placeholder:"Select Date",onChange:o=>{s({target:{name:"contractexpirydate",value:o[0]}})},id:"default-picker"},void 0,!1,{fileName:i,lineNumber:962,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:958,columnNumber:25},void 0),l("div",{className:"lg:col-span-2 col-span-1 mt-[25px] flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${x===!0?"cursor-not-allowed	":""}`,children:x===!0?l("div",{className:` ${x===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"},void 0,!1,{fileName:i,lineNumber:977,columnNumber:41},void 0):l(Ue,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-employees",children:"Cancel"},void 0,!1,{fileName:i,lineNumber:978,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:974,columnNumber:29},void 0),K.pathname===`/update-employee/${N}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${x===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:je,children:"Update"},void 0,!1,{fileName:i,lineNumber:985,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:984,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:983,columnNumber:37},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${x===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:ke,type:"button",children:"Submit"},void 0,!1,{fileName:i,lineNumber:990,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:989,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:988,columnNumber:37},void 0),x===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:i,lineNumber:998,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:997,columnNumber:37},void 0):null]},void 0,!0,{fileName:i,lineNumber:973,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:636,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:635,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:634,columnNumber:13},void 0)]},void 0,!0)};export{el as default};
