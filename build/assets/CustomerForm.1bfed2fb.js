import{r,bu as Ge,E as He,A as Je,ag as Qe,w as W,x,B as de,y as Ke,c as i,F as f,j as a,t as Xe,C as Ye,I as Ze,l as m,aq as G,bO as L,aC as j,bP as pe,ao as ce,z as De,bQ as B,bR as me,Q as H,bJ as ea,J,bS as aa,bT as ta,bU as sa,bV as na}from"./index.6dc3f541.js";import{B as Q}from"./Button.752e8e82.js";const K={option:(p,V)=>({...p,fontSize:"14px"})},fa=()=>{const[p,V]=r.exports.useState(0),{id:h}=Ge(),U=He(),[ue,X]=r.exports.useState(""),[he,Y]=r.exports.useState("");r.exports.useState(new Date);const z=Je(),v=Qe(),[fe,ve]=r.exports.useState(!1),[y,be]=r.exports.useState(null),[ge,Z]=r.exports.useState(""),xe=t=>{be(t.target.files[0]),b({...e,passportpdf:t.target.files[0]})},[w,ye]=r.exports.useState(null),[we,D]=r.exports.useState(""),Ne=t=>{ye(t.target.files[0]),b({...e,nationalidpdf:t.target.files[0]})},[e,b]=r.exports.useState(""),d=t=>{const{name:n,value:o}=t.target;b({...e,[n]:o})},Ce=()=>{b({...e,passportpdf:""}),Z("")},ke=()=>{b({...e,nationalidpdf:""}),D("")},[N,Pe]=r.exports.useState(""),[C,Se]=r.exports.useState(""),[q,k]=r.exports.useState(""),[P,ee]=r.exports.useState(""),[S,ae]=r.exports.useState(""),[O,te]=r.exports.useState(""),[M,Fe]=r.exports.useState(""),[_,Ee]=r.exports.useState(""),[Ie,oa]=r.exports.useState(10),[$e,la]=r.exports.useState(!0),[Ae,ia]=r.exports.useState(!0),[Le,ra]=r.exports.useState(!0),[je,da]=r.exports.useState(!0),[F,qe]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{const o=await(await fetch("http://portals.rarehomesgroup.com/users/api/customer/withoutdate?sort=descending&page=0&perPage=all")).json();qe(o==null?void 0:o.users)})()},[]);const[Oe,se]=r.exports.useState(!1);r.exports.useEffect(()=>{(e==null?void 0:e.email)&&(F==null?void 0:F.length)&&(F.some(n=>n.email===e.email&&n._id!==e._id)?(k("Duplicate email"),se(!0)):(k(""),se(!1)))},[e==null?void 0:e.email,e==null?void 0:e._id,F]);const ne=t=>{let n="";Ae&&(n=n+aa),$e&&(n=n+ta),Le&&(n=n+sa),je&&(n=n+na),Ee(_e(n))},_e=t=>{let n="";const o=t.length;for(let l=0;l<Ie;l++){const g=Math.round(Math.random()*o);n=n+t.charAt(g)}return n};r.exports.useEffect(()=>{_&&b({...e,password:_,confirmpass:_})},[_]);const oe=[{value:"Resident",label:"Resident"},{value:"non-resident",label:"non-resident"}],R=[{id:1},{id:2},{id:3}];let le=W().shape({firstname:x().required(N),lastname:x().required(C),email:x().email(q).required(q),password:x().required("Password is required").min(8,"Password must be at least 8 characters").oneOf([de("confirmpass"),null],"Passwords must match").required(P),confirmpass:x().required("Confirm Password is required").oneOf([de("password"),null],"Passwords must match").required(S)}),Be=W().shape({whatsappno:x().required(M)}),Ve=W().shape({});r.exports.useEffect(()=>{(async()=>{if(h){ve(!0);const o=await(await fetch(`http://portals.rarehomesgroup.com/users/${h}`)).json();o&&(b(o),X(o==null?void 0:o.passportno),Y(o==null?void 0:o.countryofresidence),Z(o==null?void 0:o.passportpdf),D(o==null?void 0:o.nationalidpdf))}})()},[h]),r.exports.useEffect(()=>{(async()=>{try{const n=await L.getAllCountries();let o=[];o=n==null?void 0:n.map(({isoCode:l,name:g})=>({isoCode:l,name:g}))}catch(n){console.log(n)}})()},[]);let E;switch(p){case 0:E=le;break;case 1:E=Be;break;case 2:E=Ve;break;default:E=le}r.exports.useEffect(()=>{},[p]);const{register:c,formState:{errors:pa},handleSubmit:ca,watch:ma}=Ke({resolver:De(E),mode:"all"});let Ue={firstname:"First Name",lastname:"Last Name",email:"Email",password:"Password",confirmpass:"Confirm Password",whatsappno:"Whatsapp No"};const ze=()=>{let t=!1,n={0:{firstname:Pe,lastname:Se,email:k,password:ee,confirmpass:ae},1:{whatsappno:Fe}};return n[p]&&Object.keys(n[p]).length&&Object.keys(n[p]).map(o=>{n[p][o](""),e[o]||(n[p][o](Ue[o]+" is required"),t=!0)}),(e==null?void 0:e.password)!==(e==null?void 0:e.confirmpass)&&(t=!0,ee("Passwords are not equal"),ae("Passwords are not equal")),J.isEmail(e.email)?Oe===!0&&(t=!0,k("Duplicate email")):(t=!0,k("Email is invalid")),e.altemail&&!J.isEmail(e.altemail)?(t=!0,te("Email is invalid")):e.altemail&&J.isEmail(e.altemail)&&(t=!1,te("")),t},ie=t=>{let n=!1;if(t==="next"&&(n=ze()),!n){let o=p;t==="next"?o++:o--,o>0&&o<3?V(o):fe?We():Te()}},Me=()=>{V(p-1)},Re=localStorage.getItem("isAuth"),u=JSON.parse(Re),[T,I]=r.exports.useState(!1),Te=async()=>{var t,n,o,l,g,re;try{let $=[];y!==null&&$.push(B(y,"Passport")),w!==null&&$.push(B(w,"NationalID"));let A=await Promise.all($);if(A.length){I(!0);const s=new FormData;s.append("firstname",e.firstname),s.append("lastname",e.lastname),s.append("email",e.email),s.append("contactno",e.contactno===void 0?"":e.contactno),s.append("passportno",e.passportno===void 0?"":e.passportno),s.append("datebirth",e.datebirth===void 0?"":e.datebirth),s.append("countryofresidence",e.countryofresidence===void 0?"":e.countryofresidence),s.append("memberid",e.memberid===void 0?"":e.memberid),s.append("nameonpassport",e.nameonpassport===void 0?"":e.nameonpassport),s.append("nationalidexpiry",e.nationalidexpiry===void 0?"":e.nationalidexpiry),s.append("nationalidissuedate",e.nationalidissuedate===void 0?"":e.nationalidissuedate),s.append("nationalidno",e.nationalidno===void 0?"":e.nationalidno),s.append("passportexpiry",e.passportexpiry===void 0?"":e.passportexpiry),s.append("passportidno",e.passportidno===void 0?"":e.passportidno),s.append("passportissue",e.passportissue===void 0?"":e.passportissue),s.append("postaladdress",e.postaladdress===void 0?"":e.postaladdress),s.append("primaryno",e.primaryno===void 0?"":e.primaryno),s.append("whatsappno",e.whatsappno===void 0?"":e.whatsappno),s.append("altemail",e.altemail===void 0?"":e.altemail),s.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),s.append("password",e.password===void 0?"":e.password),s.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),s.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),s.append("type","customer"),u!=null&&u._id&&s.append("createdBy",u==null?void 0:u._id),e!=null&&e.employeeid&&s.append("employeeid",e==null?void 0:e.employeeid),s.append("passportpdf",A[0].data.files[0]===void 0?"":(n=(t=A[0])==null?void 0:t.data)==null?void 0:n.files[0]),s.append("nationalidpdf",((l=(o=A[1])==null?void 0:o.data)==null?void 0:l.files[0])===void 0?"":(re=(g=A[1])==null?void 0:g.data)==null?void 0:re.files[0]),U(me(s)),H.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{z("/all-customers")},1500)}else{I(!0);const s=new FormData;s.append("firstname",e.firstname),s.append("lastname",e.lastname),s.append("email",e.email),s.append("contactno",e.contactno===void 0?"":e.contactno),s.append("passportno",e.passportno===void 0?"":e.passportno),s.append("datebirth",e.datebirth===void 0?"":e.datebirth),s.append("countryofresidence",e.countryofresidence===void 0?"":e.countryofresidence),s.append("memberid",e.memberid===void 0?"":e.memberid),s.append("nameonpassport",e.nameonpassport===void 0?"":e.nameonpassport),s.append("nationalidexpiry",e.nationalidexpiry===void 0?"":e.nationalidexpiry),s.append("nationalidissuedate",e.nationalidissuedate===void 0?"":e.nationalidissuedate),s.append("nationalidno",e.nationalidno===void 0?"":e.nationalidno),s.append("passportexpiry",e.passportexpiry===void 0?"":e.passportexpiry),s.append("passportidno",e.passportidno===void 0?"":e.passportidno),s.append("passportissue",e.passportissue===void 0?"":e.passportissue),s.append("postaladdress",e.postaladdress===void 0?"":e.postaladdress),s.append("primaryno",e.primaryno===void 0?"":e.primaryno),s.append("whatsappno",e.whatsappno===void 0?"":e.whatsappno),s.append("altemail",e.altemail===void 0?"":e.altemail),s.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),s.append("password",e.password===void 0?"":e.password),s.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),s.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),s.append("passportpdf",""),s.append("nationalidpdf",""),s.append("type","customer"),u!=null&&u._id&&s.append("createdBy",u==null?void 0:u._id),e!=null&&e.employeeid&&s.append("employeeid",e==null?void 0:e.employeeid),U(me(s)),H.success(`${e.email} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{z("/all-customers")},1500)}}catch($){I(!1),console.log($,"error")}},We=async t=>{try{I(!0);let n=e==null?void 0:e.passportpdf,o=e==null?void 0:e.nationalidpdf;y!==null&&(n=await B(y,"Passport"),n=n.data.files[0]),w!==null&&(o=await B(w,"NationalID"),o=o.data.files[0]);const l=new FormData;l.append("_id",h),l.append("firstname",e.firstname),l.append("lastname",e.lastname),l.append("email",e.email),l.append("contactno",e.contactno===void 0||e.contactno===null?"":e.contactno),l.append("passportno",e.passportno===void 0||e.passportno===null?"":e.passportno),l.append("datebirth",e.datebirth===void 0||e.datebirth===null?"":e.datebirth),l.append("countryofresidence",e.countryofresidence===void 0||e.countryofresidence===null?"":e.countryofresidence),l.append("memberid",e.memberid===void 0||e.memberid===null?"":e.memberid),l.append("nameonpassport",e.nameonpassport===void 0||e.nameonpassport===null?"":e.nameonpassport),l.append("nationalidexpiry",e.nationalidexpiry===void 0||e.nationalidexpiry===null?"":e.nationalidexpiry),l.append("nationalidissuedate",e.nationalidissuedate===void 0||e.nationalidissuedate===null?"":e.nationalidissuedate),l.append("nationalidno",e.nationalidno===void 0||e.nationalidno===null?"":e.nationalidno),l.append("passportexpiry",e.passportexpiry===void 0||e.passportexpiry===null?"":e.passportexpiry),l.append("passportidno",e.passportidno===void 0||e.passportidno===null?"":e.passportidno),l.append("passportissue",e.passportissue===void 0||e.passportissue===null?"":e.passportissue),l.append("postaladdress",e.postaladdress===void 0||e.postaladdress===null?"":e.postaladdress),l.append("primaryno",e.primaryno===void 0||e.primaryno===null?"":e.primaryno),l.append("whatsappno",e.whatsappno===void 0||e.whatsappno===null?"":e.whatsappno),l.append("altemail",e.altemail===void 0?"":e.altemail),l.append("altmobilenumber",e.altmobilenumber===void 0?"":e.altmobilenumber),l.append("password",e.password===void 0?"":e.password),l.append("confirmpass",e.confirmpass===void 0?"":e.confirmpass),l.append("residentstatus",e.residentstatus===void 0?"":e.residentstatus),l.append("passportpdf",n),l.append("nationalidpdf",o),l.append("type","customer"),u!=null&&u._id&&l.append("updatedBy",u==null?void 0:u._id),e!=null&&e.employeeid&&l.append("employeeid",e==null?void 0:e.employeeid),U(ea(l)),H.success(`${e.email} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{z("/all-customers")},1500)}catch(n){I(!1),console.log(n,"error")}};return i(f,{children:[a(Xe,{}),a("div",{className:" space-y-5",children:a("div",{children:a("div",{children:a(Ye,{title:"Customer Form",children:i("div",{children:[a("div",{className:"flex z-[5] items-center relative justify-center md:mx-8",children:R.map((t,n)=>i("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none group",children:[a("div",{className:`${p>=n?"bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"}  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`,children:p<=n?i("span",{children:[" ",n+1]}):a("span",{className:"text-3xl",children:a(Ze,{icon:"bx:check-double"})})}),a("div",{className:`${p>=n?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-700"} absolute top-1/2 h-[2px] w-full`}),a("div",{className:` ${p>=n?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`,children:a("span",{className:"w-max",children:t.title})})]},n))}),a("div",{className:"conten-box ",children:i("form",{children:[p===0&&a("div",{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a(m,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",value:e!=null&&e.firstname&&e==null?void 0:e.firstname,register:c,error:N,onChange:d}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:N})]})}):i("div",{children:[a(m,{name:"firstname",label:"first name",type:"text",placeholder:"Enter Firstname",value:e.firstname||"",register:c,error:N,onChange:d}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:N})]}),v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a(m,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:c,error:C,value:e!=null&&e.lastname&&e==null?void 0:e.lastname,onChange:d}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:C})]})}):a(f,{children:i("div",{children:[a(m,{name:"lastname",label:"last name",placeholder:"Enter Lastname",type:"text",register:c,error:C,value:e.lastname||"",onChange:d}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:C})]})}),v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Email"}),a("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"})]})}):i("div",{children:[a(m,{name:"email",label:"email",type:"email",placeholder:"Enter Email",register:c,error:q,value:e.email||"",onChange:d}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:q})]}),v.pathname===`/update-customer/${h}`?a(f,{children:a("div",{children:a(m,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:c,value:e!=null&&e.contactno?e==null?void 0:e.contactno:e.contactno||"",onChange:d})})}):a("div",{children:a(m,{name:"contactno",label:"contactno",placeholder:"Enter Contactno",type:"number",register:c,value:e.contactno||"",onChange:d})}),v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a(m,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:P,hasicon:!0,register:c,onChange:d,value:e!=null&&e.password?e==null?void 0:e.password:e.password||""}),i("div",{className:"flex items-center justify-between",children:[a("div",{className:" text-danger-500 block text-sm",children:P}),a("button",{type:"button",onClick:ne,className:"generator__btn justify-end text-[12px]",children:"Generate Password"})]})]})}):i("div",{children:[a(m,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:P,hasicon:!0,register:c,onChange:d,value:e.password||""}),i("div",{className:"flex items-center justify-between",children:[a("div",{className:" text-danger-500 block text-sm",children:P}),a("button",{type:"button",onClick:ne,className:"generator__btn justify-end text-[12px]",children:"Generate Password"})]})]}),v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a(m,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:S,register:c,hasicon:!0,onChange:d,value:e!=null&&e.confirmpass?e==null?void 0:e.confirmpass:e.confirmpass||""}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:S})]})}):i("div",{children:[a(m,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:S,register:c,hasicon:!0,onChange:d,value:e.confirmpass||""}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:S})]}),v.pathname===`/update-customer/${h}`?a(f,{children:i("div",{children:[a(m,{label:"Alternative Email",type:"email",placeholder:"Alternative Email",name:"altemail",value:e!=null&&e.altemail&&e==null?void 0:e.altemail,register:c,onChange:d,error:O}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:O})]})}):i("div",{children:[a(m,{label:"Alternative Email",type:"email",placeholder:"Alternative Email",name:"altemail",value:e.altemail||"",register:c,onChange:d,error:O}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:O})]}),v.pathname===`/update-customer/${h}`?a(f,{children:a("div",{children:a(m,{label:"Alternative Contact No",type:"number",placeholder:"Alternative Contact No",name:"altmobilenumber",value:e!=null&&e.altmobilenumber?e==null?void 0:e.altmobilenumber:e.altmobilenumber||"",register:c,onChange:d})})}):a(m,{label:"Alternative Contact No",type:"number",placeholder:"Alternative Contact No",name:"altmobilenumber",value:e.altmobilenumber||"",register:c,onChange:d}),i("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Nationality"}),a(G,{className:"react-select",classNamePrefix:"select",name:"passportno",value:L.getAllCountries().filter(function(t){return t.name===ue}),options:L.getAllCountries(),styles:K,id:"hh",getOptionLabel:t=>t.name,getOptionValue:t=>t.name,onChange:t=>{X(t==null?void 0:t.name),d({target:{name:"passportno",value:t.name}})}})]}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Date of Birth"}),a(j,{className:"form-control py-2",name:"datebirth",value:e.datebirth||"",onChange:t=>{d({target:{name:"datebirth",value:t[0]}})},id:"default-picker",placeholder:"Select Date of Birth",options:{maxDate:new Date||null}})]})]})}),p===1&&i("div",{children:[i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[a(m,{label:"Customer\u2019s Name as per Passport",type:"text",placeholder:"Customer\u2019s Name as per Passport",name:"nameonpassport",value:e.nameonpassport||"",register:c,onChange:d}),i("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Country of Residence"}),a(G,{className:"react-select",classNamePrefix:"select",name:"countryofresidence",value:L.getAllCountries().filter(function(t){return t.name===he}),options:L.getAllCountries(),styles:K,id:"hh",getOptionLabel:t=>t.name,getOptionValue:t=>t.name,onChange:t=>{Y(t==null?void 0:t.name),d({target:{name:"countryofresidence",value:t.name}})}})]}),i("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Resident Status"}),a(G,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:oe,value:oe.filter(function(t){return t.value===(e==null?void 0:e.residentstatus)}),onChange:t=>{d({target:{name:"residentstatus",value:t.value}})},styles:K,id:"hh"})]}),a(m,{label:"Postal Address",type:"text",placeholder:"Postal Address",name:"postaladdress",value:e.postaladdress||"",register:c,onChange:d})]}),a("div",{className:"w-[100%]",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Contact Information"})}),i("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[a(m,{label:"Whatsapp No",type:"number",placeholder:"Whatsapp No",name:"whatsappno",value:e.whatsappno||"",register:c,onChange:d,error:M}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:M})]}),a(m,{label:"Primary Mobile No ",type:"number",placeholder:"Primary Mobile No ",name:"primaryno",value:e.primaryno||"",register:c,onChange:d})]})]}),p===2&&a("div",{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[a(m,{label:"Passport No",type:"text",placeholder:"Passport No",name:"passportidno",register:c,value:e.passportidno||"",onChange:d}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport Issue Date"}),a(j,{className:"form-control py-2",name:"passportissue",value:e.passportissue||"",onChange:t=>{d({target:{name:"passportissue",value:t[0]}})},id:"default-picker",placeholder:"Select Passport Issue Date",options:{maxDate:new Date(e==null?void 0:e.passportexpiry)||null}})]}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport Expiry Date"}),a(j,{className:"form-control py-2 mt-[10px]",name:"passportexpiry",value:e.passportexpiry||"",onChange:t=>{d({target:{name:"passportexpiry",value:t[0]}})},id:"default-picker",placeholder:"Select Passport Expiry Date",options:{minDate:new Date(e==null?void 0:e.passportissue)||null}})]}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"Passport PDF"}),ge!==""?i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[a("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.passportpdf}`,children:e==null?void 0:e.passportpdf}),a("img",{src:pe,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:Ce})]}):a(ce,{name:"basic",selectedFile:y,onChange:xe})]}),a(m,{label:"National Id No",type:"text",placeholder:"National Id No",name:"nationalidno",register:c,value:e.nationalidno||"",onChange:d}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National Id Issue Date"}),a(j,{className:"form-control py-2 mt-[10px]",name:"nationalidissuedate",value:e.nationalidissuedate||"",onChange:t=>{d({target:{name:"nationalidissuedate",value:t[0]}})},id:"default-picker",placeholder:"Select National Expiry Date",options:{maxDate:new Date(e==null?void 0:e.nationalidexpiry)||null}})]}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National Expiry Date"}),a(j,{className:"form-control py-2",name:"nationalidexpiry",value:e.nationalidexpiry||"",onChange:t=>{d({target:{name:"nationalidexpiry",value:t[0]}})},id:"default-picker",placeholder:"Select National Id Issue Date",options:{minDate:new Date(e==null?void 0:e.nationalidissuedate)||null}})]}),i("div",{children:[a("label",{htmlFor:"default-picker",className:" form-label",children:"National ID PDF"}),we!==""?i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[a("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.nationalidpdf}`,children:e==null?void 0:e.nationalidpdf}),a("img",{src:pe,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:ke})]}):a(ce,{name:"basic",selectedFile:w,onChange:Ne})]})]})}),i("div",{className:`${p>0?"flex justify-between":" text-right"} mt-10`,children:[p!==0&&a(Q,{text:"prev",className:"btn-dark",onClick:Me}),v.pathname===`/update-customer/${h}`?a("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:a(Q,{text:p!==R.length-1?"next":"update",className:"btn-dark",type:"button",onClick:()=>ie("next"),isLoading:T===!0})}):a(Q,{text:p!==R.length-1?"next":"submit",className:"btn-dark",type:"button",onClick:()=>ie("next"),isLoading:T===!0})]})]})})]})})})})})]})};export{fa as default};
