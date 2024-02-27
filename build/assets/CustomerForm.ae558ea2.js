import{r,bt as He,B as Ge,z as Qe,af as Je,v as W,w as g,A as de,x as Ke,j as a,F as v,s as Xe,e as Ye,I as Ze,k as u,ap as H,bN as L,aB as j,bO as me,an as pe,y as De,bP as B,bQ as ue,Q as G,bI as ea,H as Q,bR as aa,bS as ia,bT as la,bU as oa}from"./index.a5c50dfb.js";import{B as J}from"./Button.68523db5.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\CustomerForm.jsx";const K={option:(m,V)=>({...m,fontSize:"14px"})},va=()=>{const[m,V]=r.exports.useState(0),{id:N}=He(),U=Ge(),[ce,X]=r.exports.useState(""),[Ne,Y]=r.exports.useState("");r.exports.useState(new Date);const R=Qe(),f=Je(),[ve,fe]=r.exports.useState(!1),[x,be]=r.exports.useState(null),[he,Z]=r.exports.useState(""),ge=l=>{be(l.target.files[0]),b({...e,passportpdf:l.target.files[0]})},[y,xe]=r.exports.useState(null),[ye,D]=r.exports.useState(""),we=l=>{xe(l.target.files[0]),b({...e,nationalidpdf:l.target.files[0]})},[e,b]=r.exports.useState(""),d=l=>{const{name:n,value:t}=l.target;b({...e,[n]:t})},Ce=()=>{b({...e,passportpdf:""}),Z("")},ke=()=>{b({...e,nationalidpdf:""}),D("")},[w,Pe]=r.exports.useState(""),[C,Se]=r.exports.useState(""),[O,k]=r.exports.useState(""),[P,ee]=r.exports.useState(""),[S,ae]=r.exports.useState(""),[_,ie]=r.exports.useState(""),[z,Fe]=r.exports.useState(""),[q,Ee]=r.exports.useState(""),[Ie,na]=r.exports.useState(10),[$e,ta]=r.exports.useState(!0),[Ae,sa]=r.exports.useState(!0),[Le,ra]=r.exports.useState(!0),[je,da]=r.exports.useState(!0),[F,Oe]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&page=0&perPage=all")).json();Oe(t==null?void 0:t.users)})()},[]);const[_e,le]=r.exports.useState(!1);r.exports.useEffect(()=>{(e==null?void 0:e.email)&&(F==null?void 0:F.length)&&(F.some(n=>n.email===e.email&&n._id!==e._id)?(k("Duplicate email"),le(!0)):(k(""),le(!1)))},[e==null?void 0:e.email,e==null?void 0:e._id,F]);const oe=l=>{let n="";Ae&&(n=n+aa),$e&&(n=n+ia),Le&&(n=n+la),je&&(n=n+oa),Ee(qe(n))},qe=l=>{let n="";const t=l.length;for(let s=0;s<Ie;s++){const h=Math.round(Math.random()*t);n=n+l.charAt(h)}return n};r.exports.useEffect(()=>{q&&b({...e,password:q,confirmpass:q})},[q]);const ne=[{value:"Resident",label:"Resident"},{value:"non-resident",label:"non-resident"}],M=[{id:1},{id:2},{id:3}];let te=W().shape({firstname:g().required(w),lastname:g().required(C),email:g().email(O).required(O),password:g().required("Password is required").min(8,"Password must be at least 8 characters").oneOf([de("confirmpass"),null],"Passwords must match").required(P),confirmpass:g().required("Confirm Password is required").oneOf([de("password"),null],"Passwords must match").required(S)}),Be=W().shape({whatsappno:g().required(z)}),Ve=W().shape({});r.exports.useEffect(()=>{(async()=>{if(N){fe(!0);const t=await(await fetch(`http://dev-rare.srp.ai/users/${N}`)).json();t&&(b(t),X(t==null?void 0:t.passportno),Y(t==null?void 0:t.countryofresidence),Z(t==null?void 0:t.passportpdf),D(t==null?void 0:t.nationalidpdf))}})()},[N]),r.exports.useEffect(()=>{(async()=>{try{const n=await L.getAllCountries();let t=[];t=n==null?void 0:n.map(({isoCode:s,name:h})=>({isoCode:s,name:h}))}catch(n){console.log(n)}})()},[]);let E;switch(m){case 0:E=te;break;case 1:E=Be;break;case 2:E=Ve;break;default:E=te}r.exports.useEffect(()=>{},[m]);const{register:p,formState:{errors:ma},handleSubmit:pa,watch:ua}=Ke({resolver:De(E),mode:"all"});let Ue={firstname:"First Name",lastname:"Last Name",email:"Email",password:"Password",confirmpass:"Confirm Password",whatsappno:"Whatsapp No"};const Re=()=>{let l=!1,n={0:{firstname:Pe,lastname:Se,email:k,password:ee,confirmpass:ae},1:{whatsappno:Fe}};return n[m]&&Object.keys(n[m]).length&&Object.keys(n[m]).map(t=>{n[m][t](""),e[t]||(n[m][t](Ue[t]+" is required"),l=!0)}),(e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass)&&(l=!0,ee("Passwords are not equal"),ae("Passwords are not equal")),Q.isEmail(e.email)?_e===!0&&(l=!0,k("Duplicate email")):(l=!0,k("Email is invalid")),e.altemail&&!Q.isEmail(e.altemail)?(l=!0,ie("Email is invalid")):e.altemail&&Q.isEmail(e.altemail)&&(l=!1,ie("")),l},se=l=>{let n=!1;if(l==="next"&&(n=Re()),!n){let t=m;l==="next"?t++:t--,t>0&&t<3?V(t):ve?We():Te()}},ze=()=>{V(m-1)},Me=localStorage.getItem("isAuth"),c=JSON.parse(Me),[T,I]=r.exports.useState(!1),Te=async()=>{var l,n,t,s,h,re;try{let $=[];x!==null&&$.push(B(x,"Passport")),y!==null&&$.push(B(y,"NationalID"));let A=await Promise.all($);if(A.length){I(!0);const o=new FormData;o.append("firstname",e.firstname),o.append("lastname",e.lastname),o.append("email",e.email),o.append("contactno",e.contactno===void 0?"":e.contactno),o.append("passportno",e.passportno===void 0?"":e.passportno),o.append("datebirth",e.datebirth===void 0?"":e.datebirth),o.append("countryofresidence",e.countryofresidence===void 0?"":e.countryofresidence),o.append("memberid",e.memberid===void 0?"":e.memberid),o.append("nameonpassport",e.nameonpassport===void 0?"":e.nameonpassport),o.append("nationalidexpiry",e.nationalidexpiry===void 0?"":e.nationalidexpiry),o.append("nationalidissuedate",e.nationalidissuedate===void 0?"":e.nationalidissuedate),o.append("nationalidno",e.nationalidno===void 0?"":e.nationalidno),o.append("passportexpiry",e.passportexpiry===void 0?"":e.passportexpiry),o.append("passportidno",e.passportidno===void 0?"":e.passportidno),o.append("passportissue",e.passportissue===void 0?"":e.passportissue),o.append("postaladdress",e.postaladdress===void 0?"":e.postaladdress),o.append("primaryno",e.primaryno===void 0?"":e.primaryno),o.append("whatsappno",e.whatsappno===void 0?"":e.whatsappno),o.append("altemail",e.altemail===void 0?"":e.altemail),o.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),o.append("password",e.password===void 0?"":e.password),o.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),o.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),o.append("type","customer"),c!=null&&c._id&&o.append("createdBy",c==null?void 0:c._id),e!=null&&e.employeeid&&o.append("employeeid",e==null?void 0:e.employeeid),o.append("passportpdf",A[0].data.files[0]===void 0?"":(n=(l=A[0])==null?void 0:l.data)==null?void 0:n.files[0]),o.append("nationalidpdf",((s=(t=A[1])==null?void 0:t.data)==null?void 0:s.files[0])===void 0?"":(re=(h=A[1])==null?void 0:h.data)==null?void 0:re.files[0]),U(ue(o)),G.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{R("/all-customers")},1500)}else{I(!0);const o=new FormData;o.append("firstname",e.firstname),o.append("lastname",e.lastname),o.append("email",e.email),o.append("contactno",e.contactno===void 0?"":e.contactno),o.append("passportno",e.passportno===void 0?"":e.passportno),o.append("datebirth",e.datebirth===void 0?"":e.datebirth),o.append("countryofresidence",e.countryofresidence===void 0?"":e.countryofresidence),o.append("memberid",e.memberid===void 0?"":e.memberid),o.append("nameonpassport",e.nameonpassport===void 0?"":e.nameonpassport),o.append("nationalidexpiry",e.nationalidexpiry===void 0?"":e.nationalidexpiry),o.append("nationalidissuedate",e.nationalidissuedate===void 0?"":e.nationalidissuedate),o.append("nationalidno",e.nationalidno===void 0?"":e.nationalidno),o.append("passportexpiry",e.passportexpiry===void 0?"":e.passportexpiry),o.append("passportidno",e.passportidno===void 0?"":e.passportidno),o.append("passportissue",e.passportissue===void 0?"":e.passportissue),o.append("postaladdress",e.postaladdress===void 0?"":e.postaladdress),o.append("primaryno",e.primaryno===void 0?"":e.primaryno),o.append("whatsappno",e.whatsappno===void 0?"":e.whatsappno),o.append("altemail",e.altemail===void 0?"":e.altemail),o.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),o.append("password",e.password===void 0?"":e.password),o.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),o.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),o.append("passportpdf",""),o.append("nationalidpdf",""),o.append("type","customer"),c!=null&&c._id&&o.append("createdBy",c==null?void 0:c._id),e!=null&&e.employeeid&&o.append("employeeid",e==null?void 0:e.employeeid),U(ue(o)),G.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{R("/all-customers")},1500)}}catch($){I(!1),console.log($,"error")}},We=async l=>{try{I(!0);let n=e==null?void 0:e.passportpdf,t=e==null?void 0:e.nationalidpdf;x!==null&&(n=await B(x,"Passport"),n=n.data.files[0]),y!==null&&(t=await B(y,"NationalID"),t=t.data.files[0]);const s=new FormData;s.append("_id",N),s.append("firstname",e.firstname),s.append("lastname",e.lastname),s.append("email",e.email),s.append("contactno",e.contactno===void 0||e.contactno===null?"":e.contactno),s.append("passportno",e.passportno===void 0||e.passportno===null?"":e.passportno),s.append("datebirth",e.datebirth===void 0||e.datebirth===null?"":e.datebirth),s.append("countryofresidence",e.countryofresidence===void 0||e.countryofresidence===null?"":e.countryofresidence),s.append("memberid",e.memberid===void 0||e.memberid===null?"":e.memberid),s.append("nameonpassport",e.nameonpassport===void 0||e.nameonpassport===null?"":e.nameonpassport),s.append("nationalidexpiry",e.nationalidexpiry===void 0||e.nationalidexpiry===null?"":e.nationalidexpiry),s.append("nationalidissuedate",e.nationalidissuedate===void 0||e.nationalidissuedate===null?"":e.nationalidissuedate),s.append("nationalidno",e.nationalidno===void 0||e.nationalidno===null?"":e.nationalidno),s.append("passportexpiry",e.passportexpiry===void 0||e.passportexpiry===null?"":e.passportexpiry),s.append("passportidno",e.passportidno===void 0||e.passportidno===null?"":e.passportidno),s.append("passportissue",e.passportissue===void 0||e.passportissue===null?"":e.passportissue),s.append("postaladdress",e.postaladdress===void 0||e.postaladdress===null?"":e.postaladdress),s.append("primaryno",e.primaryno===void 0||e.primaryno===null?"":e.primaryno),s.append("whatsappno",e.whatsappno===void 0||e.whatsappno===null?"":e.whatsappno),s.append("altemail",e.altemail===void 0?"":e.altemail),s.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),s.append("password",e.password===void 0?"":e.password),s.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),s.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),s.append("passportpdf",n),s.append("nationalidpdf",t),s.append("type","customer"),c!=null&&c._id&&s.append("updatedBy",c==null?void 0:c._id),e!=null&&e.employeeid&&s.append("employeeid",e==null?void 0:e.employeeid),U(ea(s)),G.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{R("/all-customers")},1500)}catch(n){I(!1),console.log(n,"error")}};return a(v,{children:[a(Xe,{},void 0,!1,{fileName:i,lineNumber:547,columnNumber:13},void 0),a("div",{className:" space-y-5",children:a("div",{children:a("div",{children:a(Ye,{title:"Customer Form",children:a("div",{children:[a("div",{className:"flex z-[5] items-center relative justify-center md:mx-8",children:M.map((l,n)=>a("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none group",children:[a("div",{className:`${m>=n?"bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"}  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`,children:m<=n?a("span",{children:[" ",n+1]},void 0,!0,{fileName:i,lineNumber:566,columnNumber:53},void 0):a("span",{className:"text-3xl",children:a(Ze,{icon:"bx:check-double"},void 0,!1,{fileName:i,lineNumber:569,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:568,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:559,columnNumber:45},void 0),a("div",{className:`${m>=n?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-700"} absolute top-1/2 h-[2px] w-full`},void 0,!1,{fileName:i,lineNumber:574,columnNumber:45},void 0),a("div",{className:` ${m>=n?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`,children:a("span",{className:"w-max",children:l.title},void 0,!1,{fileName:i,lineNumber:586,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:580,columnNumber:45},void 0)]},n,!0,{fileName:i,lineNumber:555,columnNumber:41},void 0))},void 0,!1,{fileName:i,lineNumber:553,columnNumber:33},void 0),a("div",{className:"conten-box ",children:a("form",{children:[m===0&&a("div",{children:a("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a(u,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",value:e!=null&&e.firstname&&e==null?void 0:e.firstname,register:p,error:w,onChange:d},void 0,!1,{fileName:i,lineNumber:607,columnNumber:65},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:w},void 0,!1,{fileName:i,lineNumber:617,columnNumber:62},void 0)]},void 0,!0,{fileName:i,lineNumber:602,columnNumber:61},void 0)},void 0,!1):a("div",{children:[a(u,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",value:e.firstname||"",register:p,error:w,onChange:d},void 0,!1,{fileName:i,lineNumber:624,columnNumber:61},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:w},void 0,!1,{fileName:i,lineNumber:634,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:623,columnNumber:57},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a(u,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:p,error:C,value:e!=null&&e.lastname&&e==null?void 0:e.lastname,onChange:d},void 0,!1,{fileName:i,lineNumber:645,columnNumber:62},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:C},void 0,!1,{fileName:i,lineNumber:659,columnNumber:66},void 0)]},void 0,!0,{fileName:i,lineNumber:644,columnNumber:62},void 0)},void 0,!1):a(v,{children:a("div",{children:[a(u,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:p,error:C,value:e.lastname||"",onChange:d},void 0,!1,{fileName:i,lineNumber:668,columnNumber:58},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:C},void 0,!1,{fileName:i,lineNumber:678,columnNumber:58},void 0)]},void 0,!0,{fileName:i,lineNumber:667,columnNumber:58},void 0)},void 0,!1),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Email"},void 0,!1,{fileName:i,lineNumber:689,columnNumber:69},void 0),a("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:692,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:688,columnNumber:65},void 0)},void 0,!1):a("div",{children:[a(u,{name:"email",label:"email",type:"email",placeholder:"Enter Email",register:p,error:O,value:e.email||"",onChange:d},void 0,!1,{fileName:i,lineNumber:696,columnNumber:65},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:O},void 0,!1,{fileName:i,lineNumber:706,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:695,columnNumber:61},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:a(u,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:p,value:e!=null&&e.contactno?e==null?void 0:e.contactno:e.contactno||"",onChange:d},void 0,!1,{fileName:i,lineNumber:715,columnNumber:62},void 0)},void 0,!1,{fileName:i,lineNumber:714,columnNumber:62},void 0)},void 0,!1):a("div",{children:a(u,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:p,value:e.contactno||"",onChange:d},void 0,!1,{fileName:i,lineNumber:734,columnNumber:61},void 0)},void 0,!1,{fileName:i,lineNumber:733,columnNumber:57},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a(u,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:P,hasicon:!0,register:p,onChange:d,value:e!=null&&e.password?e==null?void 0:e.password:e.password||""},void 0,!1,{fileName:i,lineNumber:756,columnNumber:66},void 0),a("div",{className:"flex items-center justify-between",children:[a("div",{className:" text-danger-500 block text-sm",children:P},void 0,!1,{fileName:i,lineNumber:768,columnNumber:65},void 0),a("button",{type:"button",onClick:oe,className:"generator__btn justify-end text-[12px]",children:"Generate Password"},void 0,!1,{fileName:i,lineNumber:771,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:767,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:750,columnNumber:62},void 0)},void 0,!1):a("div",{children:[a(u,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:P,hasicon:!0,register:p,onChange:d,value:e.password||""},void 0,!1,{fileName:i,lineNumber:779,columnNumber:61},void 0),a("div",{className:"flex items-center justify-between",children:[a("div",{className:" text-danger-500 block text-sm",children:P},void 0,!1,{fileName:i,lineNumber:791,columnNumber:65},void 0),a("button",{type:"button",onClick:oe,className:"generator__btn justify-end text-[12px]",children:"Generate Password"},void 0,!1,{fileName:i,lineNumber:794,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:790,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:778,columnNumber:57},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a(u,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:S,register:p,hasicon:!0,onChange:d,value:e!=null&&e.confirmpass?e==null?void 0:e.confirmpass:e.confirmpass||""},void 0,!1,{fileName:i,lineNumber:809,columnNumber:66},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:S},void 0,!1,{fileName:i,lineNumber:820,columnNumber:62},void 0)]},void 0,!0,{fileName:i,lineNumber:803,columnNumber:62},void 0)},void 0,!1):a("div",{children:[a(u,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:S,register:p,hasicon:!0,onChange:d,value:e.confirmpass||""},void 0,!1,{fileName:i,lineNumber:827,columnNumber:61},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:S},void 0,!1,{fileName:i,lineNumber:838,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:826,columnNumber:57},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:[a(u,{label:"Alternative Email",type:"email",placeholder:"Alternative Email",name:"altemail",value:e!=null&&e.altemail&&e==null?void 0:e.altemail,register:p,onChange:d,error:_},void 0,!1,{fileName:i,lineNumber:852,columnNumber:66},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:_},void 0,!1,{fileName:i,lineNumber:862,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:846,columnNumber:62},void 0)},void 0,!1):a("div",{children:[a(u,{label:"Alternative Email",type:"email",placeholder:"Alternative Email",name:"altemail",value:e.altemail||"",register:p,onChange:d,error:_},void 0,!1,{fileName:i,lineNumber:869,columnNumber:61},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:_},void 0,!1,{fileName:i,lineNumber:879,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:868,columnNumber:57},void 0),f.pathname===`/update-customer/${N}`?a(v,{children:a("div",{children:a(u,{label:"Alternative Contact No",type:"number",placeholder:"Alternative Contact No",name:"altmobilenumber",value:e!=null&&e.altmobilenumber?e==null?void 0:e.altmobilenumber:e.altmobilenumber||"",register:p,onChange:d},void 0,!1,{fileName:i,lineNumber:893,columnNumber:66},void 0)},void 0,!1,{fileName:i,lineNumber:887,columnNumber:62},void 0)},void 0,!1):a(u,{label:"Alternative Contact No",type:"number",placeholder:"Alternative Contact No",name:"altmobilenumber",value:e.altmobilenumber||"",register:p,onChange:d},void 0,!1,{fileName:i,lineNumber:906,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Nationality"},void 0,!1,{fileName:i,lineNumber:917,columnNumber:57},void 0),a(H,{className:"react-select",classNamePrefix:"select",name:"passportno",value:L.getAllCountries().filter(function(l){return l.name===ce}),options:L.getAllCountries(),styles:K,id:"hh",getOptionLabel:l=>l.name,getOptionValue:l=>l.name,onChange:l=>{X(l==null?void 0:l.name),d({target:{name:"passportno",value:l.name}})}},void 0,!1,{fileName:i,lineNumber:920,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:916,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"},void 0,!1,{fileName:i,lineNumber:943,columnNumber:57},void 0),a(j,{className:"form-control py-2",name:"datebirth",value:e.datebirth||"",onChange:l=>{d({target:{name:"datebirth",value:l[0]}})},id:"default-picker",placeholder:"Select Date of Birth",options:{maxDate:new Date||null}},void 0,!1,{fileName:i,lineNumber:946,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:942,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:598,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:597,columnNumber:45},void 0),m===1&&a("div",{children:[a("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[a(u,{label:"Customer\u2019s Name as per Passport",type:"text",placeholder:"Customer\u2019s Name as per Passport",name:"nameonpassport",value:e.nameonpassport||"",register:p,onChange:d},void 0,!1,{fileName:i,lineNumber:965,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Country of Residence"},void 0,!1,{fileName:i,lineNumber:975,columnNumber:57},void 0),a(H,{className:"react-select",classNamePrefix:"select",name:"countryofresidence",value:L.getAllCountries().filter(function(l){return l.name===Ne}),options:L.getAllCountries(),styles:K,id:"hh",getOptionLabel:l=>l.name,getOptionValue:l=>l.name,onChange:l=>{Y(l==null?void 0:l.name),d({target:{name:"countryofresidence",value:l.name}})}},void 0,!1,{fileName:i,lineNumber:978,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:974,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Resident Status"},void 0,!1,{fileName:i,lineNumber:1001,columnNumber:57},void 0),a(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:ne,value:ne.filter(function(l){return l.value===(e==null?void 0:e.residentstatus)}),onChange:l=>{d({target:{name:"residentstatus",value:l.value}})},styles:K,id:"hh"},void 0,!1,{fileName:i,lineNumber:1004,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:1e3,columnNumber:53},void 0),a(u,{label:"Postal Address",type:"text",placeholder:"Postal Address",name:"postaladdress",value:e.postaladdress||"",register:p,onChange:d},void 0,!1,{fileName:i,lineNumber:1019,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:964,columnNumber:49},void 0),a("div",{className:"w-[100%]",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Contact Information"},void 0,!1,{fileName:i,lineNumber:1030,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:1029,columnNumber:49},void 0),a("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[a("div",{children:[a(u,{label:"Whatsapp No",type:"number",placeholder:"Whatsapp No",name:"whatsappno",value:e.whatsappno||"",register:p,onChange:d,error:z},void 0,!1,{fileName:i,lineNumber:1037,columnNumber:53},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:z},void 0,!1,{fileName:i,lineNumber:1047,columnNumber:55},void 0)]},void 0,!0,{fileName:i,lineNumber:1036,columnNumber:49},void 0),a(u,{label:"Primary Mobile No ",type:"number",placeholder:"Primary Mobile No ",name:"primaryno",value:e.primaryno||"",register:p,onChange:d},void 0,!1,{fileName:i,lineNumber:1055,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:1035,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:963,columnNumber:45},void 0),m===2&&a("div",{children:a("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[a(u,{label:"Passport No",type:"text",placeholder:"Passport No",name:"passportidno",register:p,value:e.passportidno||"",onChange:d},void 0,!1,{fileName:i,lineNumber:1070,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport Issue Date"},void 0,!1,{fileName:i,lineNumber:1080,columnNumber:57},void 0),a(j,{className:"form-control py-2",name:"passportissue",value:e.passportissue||"",onChange:l=>{d({target:{name:"passportissue",value:l[0]}})},id:"default-picker",placeholder:"Select Passport Issue Date",options:{maxDate:new Date(e==null?void 0:e.passportexpiry)||null}},void 0,!1,{fileName:i,lineNumber:1083,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:1079,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport Expiry Date"},void 0,!1,{fileName:i,lineNumber:1096,columnNumber:57},void 0),a(j,{className:"form-control py-2 mt-[10px]",name:"passportexpiry",value:e.passportexpiry||"",onChange:l=>{d({target:{name:"passportexpiry",value:l[0]}})},id:"default-picker",placeholder:"Select Passport Expiry Date",options:{minDate:new Date(e==null?void 0:e.passportissue)||null}},void 0,!1,{fileName:i,lineNumber:1099,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:1095,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport PDF"},void 0,!1,{fileName:i,lineNumber:1112,columnNumber:57},void 0),he!==""?a("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[a("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.passportpdf}`,children:e==null?void 0:e.passportpdf},void 0,!1,{fileName:i,lineNumber:1118,columnNumber:69},void 0),a("img",{src:me,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:Ce},void 0,!1,{fileName:i,lineNumber:1119,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:1117,columnNumber:65},void 0):a(pe,{name:"basic",selectedFile:x,onChange:ge},void 0,!1,{fileName:i,lineNumber:1122,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:1111,columnNumber:53},void 0),a(u,{label:"National Id No",type:"text",placeholder:"National Id No",name:"nationalidno",register:p,value:e.nationalidno||"",onChange:d},void 0,!1,{fileName:i,lineNumber:1129,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National Id Issue Date"},void 0,!1,{fileName:i,lineNumber:1139,columnNumber:57},void 0),a(j,{className:"form-control py-2 mt-[10px]",name:"nationalidissuedate",value:e.nationalidissuedate||"",onChange:l=>{d({target:{name:"nationalidissuedate",value:l[0]}})},id:"default-picker",placeholder:"Select National Expiry Date",options:{maxDate:new Date(e==null?void 0:e.nationalidexpiry)||null}},void 0,!1,{fileName:i,lineNumber:1142,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:1138,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National Expiry Date"},void 0,!1,{fileName:i,lineNumber:1155,columnNumber:57},void 0),a(j,{className:"form-control py-2",name:"nationalidexpiry",value:e.nationalidexpiry||"",onChange:l=>{d({target:{name:"nationalidexpiry",value:l[0]}})},id:"default-picker",placeholder:"Select National Id Issue Date",options:{minDate:new Date(e==null?void 0:e.nationalidissuedate)||null}},void 0,!1,{fileName:i,lineNumber:1158,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:1154,columnNumber:53},void 0),a("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National ID PDF"},void 0,!1,{fileName:i,lineNumber:1171,columnNumber:57},void 0),ye!==""?a("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[a("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.nationalidpdf}`,children:e==null?void 0:e.nationalidpdf},void 0,!1,{fileName:i,lineNumber:1177,columnNumber:69},void 0),a("img",{src:me,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:ke},void 0,!1,{fileName:i,lineNumber:1178,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:1176,columnNumber:65},void 0):a(pe,{name:"basic",selectedFile:y,onChange:we},void 0,!1,{fileName:i,lineNumber:1181,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:1170,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:1069,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:1068,columnNumber:45},void 0),a("div",{className:`${m>0?"flex justify-between":" text-right"} mt-10`,children:[m!==0&&a(J,{text:"prev",className:"btn-dark",onClick:ze},void 0,!1,{fileName:i,lineNumber:1196,columnNumber:49},void 0),f.pathname===`/update-customer/${N}`?a("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:a(J,{text:m!==M.length-1?"next":"update",className:"btn-dark",type:"button",onClick:()=>se("next"),isLoading:T===!0},void 0,!1,{fileName:i,lineNumber:1212,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:1211,columnNumber:53},void 0):a(J,{text:m!==M.length-1?"next":"submit",className:"btn-dark",type:"button",onClick:()=>se("next"),isLoading:T===!0},void 0,!1,{fileName:i,lineNumber:1222,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:1191,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:593,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:592,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:552,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:551,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:550,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:549,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:548,columnNumber:13},void 0)]},void 0,!0)};export{va as default};
