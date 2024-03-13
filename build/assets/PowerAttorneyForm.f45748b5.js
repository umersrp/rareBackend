import{bt as Ge,B as Ue,af as Le,r as s,x as je,y as Me,z as Ye,j as l,F as _,t as $e,e as Be,ap as A,I as ue,T as Ve,l as p,aB as E,bP as We,an as qe,L as He,bQ as ze,A as Je,M as de,Q as se}from"./index.a2f6c442.js";var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\PowerAttorney\\PowerAttorneyForm.jsx";const k={option:(b,P)=>({...b,fontSize:"14px"})},Qe=()=>{const{id:b}=Ge(),P=Ue(),Ne=Le(),[e,t]=s.exports.useState(""),n=r=>{const{name:i,value:m}=r.target;t({...e,[i]:m})};s.exports.useEffect(()=>{(async()=>{if(b){const m=await(await fetch(`http://dev-rare.srp.ai/powerattorney/${b}`)).json();m&&t(m)}})()},[b]);const[c,ve]=s.exports.useState("");s.exports.useEffect(()=>{(async()=>{await fetch("http://dev-rare.srp.ai/users/api/customers").then(i=>i.json()).then(i=>{var v;const m=(v=i==null?void 0:i.users)==null?void 0:v.map(d=>({label:d.firstname+" "+d.lastname+" | "+d.email+" | "+d.passportidno+" | "+d.whatsappno,value:d._id}));ve(m)})})()},[]);const[pe,be]=s.exports.useState("");s.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const m=await(await fetch(`http://dev-rare.srp.ai/users/${e==null?void 0:e.customer_id}`)).json();m&&(t({...e,customer_name:(m==null?void 0:m.firstname)+" "+(m==null?void 0:m.lastname),customer_passportnumber:m==null?void 0:m.passportidno,customer_email:m==null?void 0:m.email,customer_nationality:m==null?void 0:m.passportno,customer_mobilenumber:m==null?void 0:m.whatsappno,customer_passportpdf:(m==null?void 0:m.passportpdf)&&(m==null?void 0:m.passportpdf)!==void 0?m==null?void 0:m.passportpdf:""}),be((m==null?void 0:m.passportpdf)&&(m==null?void 0:m.passportpdf)!==void 0?m==null?void 0:m.passportpdf:""))})()},[e==null?void 0:e.customer_id]);const fe=r=>{const{checked:i}=r.target;t({...e,nominated:i})},he=r=>{const{checked:i}=r.target;t({...e,buying:i})},xe=r=>{const{checked:i}=r.target;t({...e,selling:i})},_e=r=>{const{checked:i}=r.target;t({...e,gifting:i})},ge=r=>{const{checked:i}=r.target;t({...e,renting:i})},ye=r=>{const{checked:i}=r.target;t({...e,management:i})},Ae=r=>{const{checked:i}=r.target;t({...e,visa:i})},C=[{value:"Specific",label:"Specific"},{value:"General",label:"General"}],w=[{value:"LAWYER",label:"LAWYER"},{value:"TYPIST",label:"TYPIST"},{value:"SELF",label:"SELF"}],[f,S]=s.exports.useState(null),Ee=async r=>{S(r.target.files[0]);const m=(await ze(r.target.files[0],"attachment_doc")).data.files[0];t({...e,attachment_doc:m})},ke=()=>{t({...e,attachment_doc:""}),S("")},Pe=()=>{t({...e,total_no_customer:(parseInt(e==null?void 0:e.total_no_customer)?e==null?void 0:e.total_no_customer:0)+1})},Oe=async(r,i)=>{const{name:m,value:v}=r.target;try{const a=await(await fetch(`http://dev-rare.srp.ai/users/${v}`)).json();a&&t(g=>{const x=[...g.other_customer||[]],y=x[i]||{};return x[i]={...y,[m]:v,customer_name:(a==null?void 0:a.firstname)+" "+(a==null?void 0:a.lastname),customer_passportnumber:a==null?void 0:a.passportidno,customer_email:a==null?void 0:a.email,customer_nationality:a==null?void 0:a.passportno,customer_mobilenumber:a==null?void 0:a.whatsappno,customer_passportpdf:(a==null?void 0:a.passportpdf)&&(a==null?void 0:a.passportpdf)!==void 0&&(a==null?void 0:a.passportpdf)!=="undefined"&&(a==null?void 0:a.passportpdf)!==null&&(a==null?void 0:a.passportpdf)!=="null"?a==null?void 0:a.passportpdf:""},{...g,other_customer:x}})}catch(d){console.error("Error fetching user data:",d)}},Ce=r=>{let i=[...e.other_customer];i.splice(r,1),t({...e,total_no_customer:(e==null?void 0:e.total_no_customer)-1,other_customer:i})},[F,we]=s.exports.useState("");let Se={customer_id:"Customer"};const Fe=je({customer_id:Me().required(F)}).required(),{register:N,formState:{errors:Xe}}=Ye({resolver:Je(Fe)}),Ie=()=>{let r=!1,i={customer_id:we};return i&&Object.keys(i).length&&Object.keys(i).map(m=>{i[m](""),e[m]||(i[m](Se[m]+" is required"),r=!0)}),r},[h,Te]=s.exports.useState(!1),Re=localStorage.getItem("isAuth"),u=JSON.parse(Re),I=async r=>{e.customer_id?e.customer_id&&(Te(!0),r==="Create"?u!=null&&u._id&&(await de.post("http://dev-rare.srp.ai/powerattorney",{...e,createdBy:u==null?void 0:u._id}),se.success("New Power of Attorney created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{P("/all-poa")},1500)):r==="Update"&&u!=null&&u._id&&(console.log("kaha araha hai?"),await de.patch("http://dev-rare.srp.ai/powerattorney",{...e,updatedBy:u==null?void 0:u._id}),se.success("Power of Attorney Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{P("/all-poa")},1500))):Ie()};return l(_,{children:[l($e,{},void 0,!1,{fileName:o,lineNumber:366,columnNumber:13},void 0),l(Be,{title:"Power of Attorney Form",children:l("div",{className:"",children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{className:"w-[100%] col-span-3",children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"SELECT YOUR CUSTOMER"},void 0,!1,{fileName:o,lineNumber:375,columnNumber:41},void 0),c!=null&&c.length?l(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:c,value:c==null?void 0:c.filter(function(r){return r.value===(e==null?void 0:e.customer_id)}),onChange:r=>{t({...e,customer_id:r==null?void 0:r.value})},styles:k,id:"hh"},void 0,!1,{fileName:o,lineNumber:380,columnNumber:49},void 0):null]},void 0,!0,{fileName:o,lineNumber:374,columnNumber:37},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:F},void 0,!1,{fileName:o,lineNumber:396,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:373,columnNumber:33},void 0),l(_,{children:e!=null&&e.customer_id?l(_,{children:[l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Name"},void 0,!1,{fileName:o,lineNumber:403,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_name?e==null?void 0:e.customer_name:"Not Available"},void 0,!1,{fileName:o,lineNumber:405,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:406,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:404,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:402,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Email"},void 0,!1,{fileName:o,lineNumber:410,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_email?e==null?void 0:e.customer_email:"Not Available"},void 0,!1,{fileName:o,lineNumber:412,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:413,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:411,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:409,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"},void 0,!1,{fileName:o,lineNumber:417,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_mobilenumber?e==null?void 0:e.customer_mobilenumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:419,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:420,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:418,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:416,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport no"},void 0,!1,{fileName:o,lineNumber:424,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_passportnumber?e==null?void 0:e.customer_passportnumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:426,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:427,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:425,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:423,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Nationality"},void 0,!1,{fileName:o,lineNumber:431,columnNumber:53},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_nationality?e==null?void 0:e.customer_nationality:"Not Available"},void 0,!1,{fileName:o,lineNumber:433,columnNumber:57},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:434,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:432,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:430,columnNumber:49},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:438,columnNumber:53},void 0),pe!==""?l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.customer_passportPDF}`,children:decodeURIComponent(e==null?void 0:e.customer_passportPDF).split("/").pop()},void 0,!1,{fileName:o,lineNumber:442,columnNumber:65},void 0)},void 0,!1,{fileName:o,lineNumber:441,columnNumber:61},void 0):l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("p",{children:"Not Available"},void 0,!1,{fileName:o,lineNumber:446,columnNumber:65},void 0)},void 0,!1,{fileName:o,lineNumber:445,columnNumber:61},void 0)]},void 0,!0,{fileName:o,lineNumber:437,columnNumber:49},void 0)]},void 0,!0):null},void 0,!1)]},void 0,!0,{fileName:o,lineNumber:372,columnNumber:29},void 0)},void 0,!1,{fileName:o,lineNumber:371,columnNumber:25},void 0),l("div",{className:" w-[100%] col-span-3",children:l("div",{className:"mt-[25px] w-[100%] flex item-center justify-end select-none",children:[l("p",{className:"maintenance-para",children:e!=null&&e.total_no_customer?e==null?void 0:e.total_no_customer:0},void 0,!1,{fileName:o,lineNumber:460,columnNumber:33},void 0),l("div",{className:"p-[11px] maintenance-btn",onClick:Pe,children:l(ue,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:o,lineNumber:462,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:461,columnNumber:33},void 0)]},void 0,!0,{fileName:o,lineNumber:459,columnNumber:29},void 0)},void 0,!1,{fileName:o,lineNumber:458,columnNumber:25},void 0),l("div",{className:"w-[100%] col-span-3 mb-[35px]",children:(e==null?void 0:e.total_no_customer)&&parseInt(e==null?void 0:e.total_no_customer)>0&&l(_,{children:Array.from({length:e==null?void 0:e.total_no_customer},(r,i)=>{var m,v,d,a,g,x,y,T,R,G,U,L,j,M,Y,$,B,V,W,q,H,z,J,X,K,Q,Z,D,ee,le,oe,ie,me,re,ae,te;return l("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:o,lineNumber:475,columnNumber:53},void 0)},void 0,!1,{fileName:o,lineNumber:474,columnNumber:49},void 0),l("div",{className:" w-[100%] col-span-3 flex justify-end",children:l(Ve,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("div",{className:"action-btn cursor-pointer",onClick:()=>Ce(i),children:l(ue,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"},void 0,!1,{fileName:o,lineNumber:486,columnNumber:61},void 0)},void 0,!1,{fileName:o,lineNumber:485,columnNumber:57},void 0)},void 0,!1,{fileName:o,lineNumber:478,columnNumber:53},void 0)},void 0,!1,{fileName:o,lineNumber:477,columnNumber:49},void 0),l("div",{className:"w-[100%] col-span-3",children:l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"SELECT CUSTOMER"},void 0,!1,{fileName:o,lineNumber:492,columnNumber:57},void 0),c!=null&&c.length?l(A,{className:"react-select",classNamePrefix:"select",name:"customer_id",value:c.find(O=>{var ne,ce;return O.value===((ce=(ne=e==null?void 0:e.other_customer)==null?void 0:ne[i])==null?void 0:ce.customer_id)}),options:c,styles:k,id:"hh",onChange:O=>{Oe({target:{name:"customer_id",value:O.value}},i)},placeholder:"Select Select Customer"},void 0,!1,{fileName:o,lineNumber:497,columnNumber:65},void 0):null]},void 0,!0,{fileName:o,lineNumber:491,columnNumber:53},void 0)},void 0,!1,{fileName:o,lineNumber:490,columnNumber:49},void 0),l(_,{children:(v=(m=e==null?void 0:e.other_customer)==null?void 0:m[i])!=null&&v.customer_id?l(_,{children:[l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Name"},void 0,!1,{fileName:o,lineNumber:518,columnNumber:69},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(a=(d=e==null?void 0:e.other_customer)==null?void 0:d[i])!=null&&a.customer_name?(x=(g=e==null?void 0:e.other_customer)==null?void 0:g[i])==null?void 0:x.customer_name:"Not Available"},void 0,!1,{fileName:o,lineNumber:520,columnNumber:73},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:521,columnNumber:73},void 0)]},void 0,!0,{fileName:o,lineNumber:519,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:517,columnNumber:65},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Email"},void 0,!1,{fileName:o,lineNumber:525,columnNumber:69},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(T=(y=e==null?void 0:e.other_customer)==null?void 0:y[i])!=null&&T.customer_email?(G=(R=e==null?void 0:e.other_customer)==null?void 0:R[i])==null?void 0:G.customer_email:"Not Available"},void 0,!1,{fileName:o,lineNumber:527,columnNumber:73},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:528,columnNumber:73},void 0)]},void 0,!0,{fileName:o,lineNumber:526,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:524,columnNumber:65},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"},void 0,!1,{fileName:o,lineNumber:532,columnNumber:69},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(L=(U=e==null?void 0:e.other_customer)==null?void 0:U[i])!=null&&L.customer_mobilenumber?(M=(j=e==null?void 0:e.other_customer)==null?void 0:j[i])==null?void 0:M.customer_mobilenumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:534,columnNumber:73},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:535,columnNumber:73},void 0)]},void 0,!0,{fileName:o,lineNumber:533,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:531,columnNumber:65},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport no"},void 0,!1,{fileName:o,lineNumber:539,columnNumber:69},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:($=(Y=e==null?void 0:e.other_customer)==null?void 0:Y[i])!=null&&$.customer_passportnumber?(V=(B=e==null?void 0:e.other_customer)==null?void 0:B[i])==null?void 0:V.customer_passportnumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:541,columnNumber:73},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:542,columnNumber:73},void 0)]},void 0,!0,{fileName:o,lineNumber:540,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:538,columnNumber:65},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Nationality"},void 0,!1,{fileName:o,lineNumber:546,columnNumber:69},void 0),l("div",{className:"relative ",children:[l("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(q=(W=e==null?void 0:e.other_customer)==null?void 0:W[i])!=null&&q.customer_nationality?(z=(H=e==null?void 0:e.other_customer)==null?void 0:H[i])==null?void 0:z.customer_nationality:"Not Available"},void 0,!1,{fileName:o,lineNumber:548,columnNumber:73},void 0),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:o,lineNumber:549,columnNumber:73},void 0)]},void 0,!0,{fileName:o,lineNumber:547,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:545,columnNumber:65},void 0),l("div",{className:"fromGroup       ",children:[l("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:553,columnNumber:69},void 0),((X=(J=e==null?void 0:e.other_customer)==null?void 0:J[i])==null?void 0:X.customer_passportPDF)&&((Q=(K=e==null?void 0:e.other_customer)==null?void 0:K[i])==null?void 0:Q.customer_passportPDF)!==void 0&&((D=(Z=e==null?void 0:e.other_customer)==null?void 0:Z[i])==null?void 0:D.customer_passportPDF)!=="undefined"&&((le=(ee=e==null?void 0:e.other_customer)==null?void 0:ee[i])==null?void 0:le.customer_passportPDF)!==null&&((ie=(oe=e==null?void 0:e.other_customer)==null?void 0:oe[i])==null?void 0:ie.customer_passportPDF)!=="null"?l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("a",{target:"_blank",href:`http://dev-rare.srp.ai${(re=(me=e==null?void 0:e.other_customer)==null?void 0:me[i])==null?void 0:re.customer_passportPDF}`,children:decodeURIComponent((te=(ae=e==null?void 0:e.other_customer)==null?void 0:ae[i])==null?void 0:te.customer_passportPDF).split("/").pop()},void 0,!1,{fileName:o,lineNumber:557,columnNumber:81},void 0)},void 0,!1,{fileName:o,lineNumber:556,columnNumber:77},void 0):l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("p",{children:"Not Available"},void 0,!1,{fileName:o,lineNumber:561,columnNumber:81},void 0)},void 0,!1,{fileName:o,lineNumber:560,columnNumber:77},void 0)]},void 0,!0,{fileName:o,lineNumber:552,columnNumber:65},void 0)]},void 0,!0):null},void 0,!1)]},i+1,!0,{fileName:o,lineNumber:473,columnNumber:45},void 0)})},void 0,!1)},void 0,!1,{fileName:o,lineNumber:468,columnNumber:25},void 0),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:l(p,{label:"POA TAKER NAME",type:"text",placeholder:"Type your POA TAKER NAME",name:"poa_taker_name",value:e.poa_taker_name||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:580,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:579,columnNumber:33},void 0),l("div",{children:l(p,{label:"POA LANGUAGE",type:"text",placeholder:"Type your POA LANGUAGE",name:"poa_language",value:e.poa_language||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:591,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:590,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"DATE OF ISSUE"},void 0,!1,{fileName:o,lineNumber:602,columnNumber:37},void 0),l(E,{className:"form-control py-2",name:"date_of_issue",value:e.date_of_issue||"",onChange:r=>{n({target:{name:"date_of_issue",value:r[0]}})},id:"default-picker",placeholder:"Select DATE OF ISSUE"},void 0,!1,{fileName:o,lineNumber:605,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:601,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"EXPIRY"},void 0,!1,{fileName:o,lineNumber:615,columnNumber:37},void 0),l(E,{className:"form-control py-2",name:"expiry_date",value:e.expiry_date||"",onChange:r=>{n({target:{name:"expiry_date",value:r[0]}})},id:"default-picker",placeholder:"Select EXPIRY"},void 0,!1,{fileName:o,lineNumber:618,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:614,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"DATE OF RE-VALIDATION"},void 0,!1,{fileName:o,lineNumber:628,columnNumber:37},void 0),l(E,{className:"form-control py-2",name:"date_of_revalidation",value:e.date_of_revalidation||"",onChange:r=>{n({target:{name:"date_of_revalidation",value:r[0]}})},id:"default-picker",placeholder:"Select DATE OF RE-VALIDATION"},void 0,!1,{fileName:o,lineNumber:631,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:627,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"RE - VALIDATION EXPIRY"},void 0,!1,{fileName:o,lineNumber:641,columnNumber:37},void 0),l(E,{className:"form-control py-2",name:"revalidation_expiry_date",value:e.revalidation_expiry_date||"",onChange:r=>{n({target:{name:"revalidation_expiry_date",value:r[0]}})},id:"default-picker",placeholder:"Select RE - VALIDATION EXPIRY"},void 0,!1,{fileName:o,lineNumber:644,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:640,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"TYPE OF POA"},void 0,!1,{fileName:o,lineNumber:654,columnNumber:37},void 0),l(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:C,value:C.filter(function(r){return r.value===(e==null?void 0:e.type_of_poa)}),onChange:r=>{n({target:{name:"type_of_poa",value:r.value}})},styles:k,placeholder:"TYPE OF POA",id:"hh"},void 0,!1,{fileName:o,lineNumber:657,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:653,columnNumber:33},void 0),l("div",{children:l(p,{label:"SPECIFIC REASON",type:"text",placeholder:"Type your SPECIFIC REASON",name:"specific_reason",value:e.specific_reason||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:674,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:673,columnNumber:33},void 0),l("div",{children:l("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"PURPOSE OF POA"},void 0,!1,{fileName:o,lineNumber:686,columnNumber:41},void 0),l("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"nominated",checked:(e==null?void 0:e.nominated)===!0,onChange:fe},void 0,!1,{fileName:o,lineNumber:689,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"NOMINATED "},void 0,!1,{fileName:o,lineNumber:690,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:688,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"buying",id:"",checked:(e==null?void 0:e.buying)===!0,onChange:he},void 0,!1,{fileName:o,lineNumber:693,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"BUYING"},void 0,!1,{fileName:o,lineNumber:694,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:692,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"selling",id:"",checked:(e==null?void 0:e.selling)===!0,onChange:xe},void 0,!1,{fileName:o,lineNumber:697,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"SELLING"},void 0,!1,{fileName:o,lineNumber:698,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:696,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"gifting",checked:(e==null?void 0:e.gifting)===!0,onChange:_e},void 0,!1,{fileName:o,lineNumber:701,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"GIFTING "},void 0,!1,{fileName:o,lineNumber:702,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:700,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"renting",id:"",checked:(e==null?void 0:e.renting)===!0,onChange:ge},void 0,!1,{fileName:o,lineNumber:705,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"RENTING"},void 0,!1,{fileName:o,lineNumber:706,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:704,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"management",id:"",checked:(e==null?void 0:e.management)===!0,onChange:ye},void 0,!1,{fileName:o,lineNumber:709,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"MANAGEMENT"},void 0,!1,{fileName:o,lineNumber:710,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:708,columnNumber:45},void 0),l("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[l("input",{type:"checkbox",name:"visa",id:"",checked:(e==null?void 0:e.visa)===!0,onChange:Ae},void 0,!1,{fileName:o,lineNumber:713,columnNumber:49},void 0),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"VISA"},void 0,!1,{fileName:o,lineNumber:714,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:712,columnNumber:45},void 0)]},void 0,!0,{fileName:o,lineNumber:687,columnNumber:41},void 0)]},void 0,!0,{fileName:o,lineNumber:685,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:684,columnNumber:33},void 0),l("div",{children:l(p,{label:"CODE POWER NO.",type:"text",placeholder:"Type your CODE POWER NO.",name:"code_power_no",value:e.code_power_no||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:720,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:719,columnNumber:33},void 0),l("div",{children:l(p,{label:"CODE POWER BRANCH",type:"text",placeholder:"Type your CODE POWER BRANCH",name:"code_power_branch",value:e.code_power_branch||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:731,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:730,columnNumber:33},void 0),l("div",{children:l(p,{label:"NO. OF POA (ORIGINAL) WITH US",type:"number",placeholder:"Type your NO. OF POA (ORIGINAL) WITH US",name:"no_poa_with_us",value:e.no_poa_with_us||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:742,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:741,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"POA DONE THRU LAWYER/TYPIST/SELF"},void 0,!1,{fileName:o,lineNumber:753,columnNumber:37},void 0),l(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(r){return r.value===(e==null?void 0:e.poa_done)}),onChange:r=>{n({target:{name:"poa_done",value:r.value}})},styles:k,placeholder:"LAWYER/TYPIST/SELF",id:"hh"},void 0,!1,{fileName:o,lineNumber:756,columnNumber:37},void 0)]},void 0,!0,{fileName:o,lineNumber:752,columnNumber:33},void 0),l("div",{children:l(p,{label:"AMOUNT PAID (AED) | COURT FEES",type:"number",placeholder:"Type your AMOUNT PAID (AED) | COURT FEES",name:"court_fees",value:e.court_fees||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:773,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:772,columnNumber:33},void 0),l("div",{children:l(p,{label:"AMOUNT PAID (AED) | SERVICE  FEES",type:"number",placeholder:"Type your AMOUNT PAID (AED) | SERVICE  FEES",name:"service_fees",value:e.service_fees||"",register:N,onChange:n},void 0,!1,{fileName:o,lineNumber:784,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:783,columnNumber:33},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"ATTACHMENT PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:806,columnNumber:37},void 0),f!==""&&f!==null&&f!=="null"&&f!==void 0&&f!=="undefined"||(e==null?void 0:e.attachment_doc)!==""&&(e==null?void 0:e.attachment_doc)!==null&&(e==null?void 0:e.attachment_doc)!=="null"&&(e==null?void 0:e.attachment_doc)!==void 0&&(e==null?void 0:e.attachment_doc)!=="undefined"?l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[l("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.attachment_doc}`,children:decodeURIComponent(e==null?void 0:e.attachment_doc).split("/").pop()},void 0,!1,{fileName:o,lineNumber:812,columnNumber:49},void 0),l("img",{src:We,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:ke},void 0,!1,{fileName:o,lineNumber:813,columnNumber:49},void 0)]},void 0,!0,{fileName:o,lineNumber:811,columnNumber:45},void 0):l(qe,{name:"basic",selectedFile:f,onChange:Ee},void 0,!1,{fileName:o,lineNumber:816,columnNumber:45},void 0)]},void 0,!0,{fileName:o,lineNumber:805,columnNumber:33},void 0)]},void 0,!0,{fileName:o,lineNumber:578,columnNumber:29},void 0)},void 0,!1,{fileName:o,lineNumber:577,columnNumber:25},void 0),l("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${h===!0?"cursor-not-allowed	":""}`,children:h===!0?l("div",{className:` ${h===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"},void 0,!1,{fileName:o,lineNumber:831,columnNumber:41},void 0):l(He,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-poa",children:"Cancel"},void 0,!1,{fileName:o,lineNumber:832,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:828,columnNumber:29},void 0),Ne.pathname===`/poa-form/${b}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${h===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>I("Update"),children:"Update"},void 0,!1,{fileName:o,lineNumber:839,columnNumber:45},void 0)},void 0,!1,{fileName:o,lineNumber:838,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:837,columnNumber:37},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${h===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:()=>I("Create"),type:"button",children:"Submit"},void 0,!1,{fileName:o,lineNumber:844,columnNumber:45},void 0)},void 0,!1,{fileName:o,lineNumber:843,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:842,columnNumber:37},void 0),h===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:o,lineNumber:852,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:851,columnNumber:37},void 0):null]},void 0,!0,{fileName:o,lineNumber:827,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:369,columnNumber:21},void 0)},void 0,!1,{fileName:o,lineNumber:368,columnNumber:17},void 0)},void 0,!1,{fileName:o,lineNumber:367,columnNumber:13},void 0)]},void 0,!0)};export{Qe as default};
