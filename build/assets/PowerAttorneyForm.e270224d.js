import{bu as Ge,A as Ue,ag as Le,r as d,w as je,x as Me,y as Ye,c,F as N,j as t,t as $e,f as Be,aq as A,I as pe,T as qe,l as f,aC as E,bP as Ve,ao as We,L as He,bQ as ze,z as Je,K as me,Q as de}from"./index.177fc75c.js";const k={option:(v,C)=>({...v,fontSize:"14px"})},Qe=()=>{const{id:v}=Ge(),C=Ue(),he=Le(),[e,s]=d.exports.useState(""),n=o=>{const{name:l,value:a}=o.target;s({...e,[l]:a})};d.exports.useEffect(()=>{(async()=>{if(v){const a=await(await fetch(`http://portals.rarehomesgroup.com/powerattorney/${v}`)).json();a&&s(a)}})()},[v]);const[i,ue]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{await fetch("http://portals.rarehomesgroup.com/users/api/customers").then(l=>l.json()).then(l=>{var u;const a=(u=l==null?void 0:l.users)==null?void 0:u.map(m=>({label:m.firstname+" "+m.lastname+" | "+m.email+" | "+m.passportidno+" | "+m.whatsappno,value:m._id}));ue(a)})})()},[]);const[fe,ve]=d.exports.useState("");d.exports.useEffect(()=>{e!=null&&e.customer_id&&(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/users/${e==null?void 0:e.customer_id}`)).json();a&&(s({...e,customer_name:(a==null?void 0:a.firstname)+" "+(a==null?void 0:a.lastname),customer_passportnumber:a==null?void 0:a.passportidno,customer_email:a==null?void 0:a.email,customer_nationality:a==null?void 0:a.passportno,customer_mobilenumber:a==null?void 0:a.whatsappno,customer_passportpdf:(a==null?void 0:a.passportpdf)&&(a==null?void 0:a.passportpdf)!==void 0?a==null?void 0:a.passportpdf:""}),ve((a==null?void 0:a.passportpdf)&&(a==null?void 0:a.passportpdf)!==void 0?a==null?void 0:a.passportpdf:""))})()},[e==null?void 0:e.customer_id]);const xe=o=>{const{checked:l}=o.target;s({...e,nominated:l})},_e=o=>{const{checked:l}=o.target;s({...e,buying:l})},be=o=>{const{checked:l}=o.target;s({...e,selling:l})},Ne=o=>{const{checked:l}=o.target;s({...e,gifting:l})},ge=o=>{const{checked:l}=o.target;s({...e,renting:l})},ye=o=>{const{checked:l}=o.target;s({...e,management:l})},Ae=o=>{const{checked:l}=o.target;s({...e,visa:l})},O=[{value:"Specific",label:"Specific"},{value:"General",label:"General"}],w=[{value:"LAWYER",label:"LAWYER"},{value:"TYPIST",label:"TYPIST"},{value:"SELF",label:"SELF"}],[x,S]=d.exports.useState(null),Ee=async o=>{S(o.target.files[0]);const a=(await ze(o.target.files[0],"attachment_doc")).data.files[0];s({...e,attachment_doc:a})},ke=()=>{s({...e,attachment_doc:""}),S("")},Ce=()=>{s({...e,total_no_customer:(parseInt(e==null?void 0:e.total_no_customer)?e==null?void 0:e.total_no_customer:0)+1})},Pe=async(o,l)=>{const{name:a,value:u}=o.target;try{const r=await(await fetch(`http://portals.rarehomesgroup.com/users/${u}`)).json();r&&s(g=>{const b=[...g.other_customer||[]],y=b[l]||{};return b[l]={...y,[a]:u,customer_name:(r==null?void 0:r.firstname)+" "+(r==null?void 0:r.lastname),customer_passportnumber:r==null?void 0:r.passportidno,customer_email:r==null?void 0:r.email,customer_nationality:r==null?void 0:r.passportno,customer_mobilenumber:r==null?void 0:r.whatsappno,customer_passportpdf:(r==null?void 0:r.passportpdf)&&(r==null?void 0:r.passportpdf)!==void 0&&(r==null?void 0:r.passportpdf)!=="undefined"&&(r==null?void 0:r.passportpdf)!==null&&(r==null?void 0:r.passportpdf)!=="null"?r==null?void 0:r.passportpdf:""},{...g,other_customer:b}})}catch(m){console.error("Error fetching user data:",m)}},Oe=o=>{let l=[...e.other_customer];l.splice(o,1),s({...e,total_no_customer:(e==null?void 0:e.total_no_customer)-1,other_customer:l})},[I,we]=d.exports.useState("");let Se={customer_id:"Customer"};const Ie=je({customer_id:Me().required(I)}).required(),{register:h,formState:{errors:Xe}}=Ye({resolver:Je(Ie)}),Te=()=>{let o=!1,l={customer_id:we};return l&&Object.keys(l).length&&Object.keys(l).map(a=>{l[a](""),e[a]||(l[a](Se[a]+" is required"),o=!0)}),o},[_,Fe]=d.exports.useState(!1),Re=localStorage.getItem("isAuth"),p=JSON.parse(Re),T=async o=>{e.customer_id?e.customer_id&&(Fe(!0),o==="Create"?p!=null&&p._id&&(await me.post("http://portals.rarehomesgroup.com/powerattorney",{...e,createdBy:p==null?void 0:p._id}),de.success("New Power of Attorney created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{C("/all-poa")},1500)):o==="Update"&&p!=null&&p._id&&(console.log("kaha araha hai?"),await me.patch("http://portals.rarehomesgroup.com/powerattorney",{...e,updatedBy:p==null?void 0:p._id}),de.success("Power of Attorney Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{C("/all-poa")},1500))):Te()};return c(N,{children:[t($e,{}),t(Be,{title:"Power of Attorney Form",children:t("div",{className:"",children:c("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5 mt-[20px]",children:[c("div",{className:"w-[100%] col-span-3",children:[c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"SELECT YOUR CUSTOMER"}),i!=null&&i.length?t(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:i,value:i==null?void 0:i.filter(function(o){return o.value===(e==null?void 0:e.customer_id)}),onChange:o=>{s({...e,customer_id:o==null?void 0:o.value})},styles:k,id:"hh"}):null]}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:I})]}),t(N,{children:e!=null&&e.customer_id?c(N,{children:[c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_name?e==null?void 0:e.customer_name:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Email"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_email?e==null?void 0:e.customer_email:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_mobilenumber?e==null?void 0:e.customer_mobilenumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport no"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_passportnumber?e==null?void 0:e.customer_passportnumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Nationality"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.customer_nationality?e==null?void 0:e.customer_nationality:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"}),fe!==""?t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.customer_passportPDF}`,children:decodeURIComponent(e==null?void 0:e.customer_passportPDF).split("/").pop()})}):t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("p",{children:"Not Available"})})]})]}):null})]})}),t("div",{className:" w-[100%] col-span-3",children:c("div",{className:"mt-[25px] w-[100%] flex item-center justify-end select-none",children:[t("p",{className:"maintenance-para",children:e!=null&&e.total_no_customer?e==null?void 0:e.total_no_customer:0}),t("div",{className:"p-[11px] maintenance-btn",onClick:Ce,children:t(pe,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"})})]})}),t("div",{className:"w-[100%] col-span-3 mb-[35px]",children:(e==null?void 0:e.total_no_customer)&&parseInt(e==null?void 0:e.total_no_customer)>0&&t(N,{children:Array.from({length:e==null?void 0:e.total_no_customer},(o,l)=>{var a,u,m,r,g,b,y,F,R,G,U,L,j,M,Y,$,B,q,V,W,H,z,J,X,K,Q,Z,D,ee,te,le,ae,oe,ce,re,se;return c("div",{className:"grid md:grid-cols-3 grid-cols-1 gap-5",children:[t("div",{className:"w-[100%] col-span-3",children:t("div",{className:"borderBottom"})}),t("div",{className:" w-[100%] col-span-3 flex justify-end",children:t(qe,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("div",{className:"action-btn cursor-pointer",onClick:()=>Oe(l),children:t(pe,{icon:"heroicons-outline:trash",className:"w-[30px] h-[30px]"})})})}),t("div",{className:"w-[100%] col-span-3",children:c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"SELECT CUSTOMER"}),i!=null&&i.length?t(A,{className:"react-select",classNamePrefix:"select",name:"customer_id",value:i.find(P=>{var ne,ie;return P.value===((ie=(ne=e==null?void 0:e.other_customer)==null?void 0:ne[l])==null?void 0:ie.customer_id)}),options:i,styles:k,id:"hh",onChange:P=>{Pe({target:{name:"customer_id",value:P.value}},l)},placeholder:"Select Select Customer"}):null]})}),t(N,{children:(u=(a=e==null?void 0:e.other_customer)==null?void 0:a[l])!=null&&u.customer_id?c(N,{children:[c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(r=(m=e==null?void 0:e.other_customer)==null?void 0:m[l])!=null&&r.customer_name?(b=(g=e==null?void 0:e.other_customer)==null?void 0:g[l])==null?void 0:b.customer_name:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Email"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_email",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(F=(y=e==null?void 0:e.other_customer)==null?void 0:y[l])!=null&&F.customer_email?(G=(R=e==null?void 0:e.other_customer)==null?void 0:R[l])==null?void 0:G.customer_email:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Mobile Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_mobilenumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(L=(U=e==null?void 0:e.other_customer)==null?void 0:U[l])!=null&&L.customer_mobilenumber?(M=(j=e==null?void 0:e.other_customer)==null?void 0:j[l])==null?void 0:M.customer_mobilenumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport no"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_passportnumber",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:($=(Y=e==null?void 0:e.other_customer)==null?void 0:Y[l])!=null&&$.customer_passportnumber?(q=(B=e==null?void 0:e.other_customer)==null?void 0:B[l])==null?void 0:q.customer_passportnumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Nationality"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"customer_nationality",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:(W=(V=e==null?void 0:e.other_customer)==null?void 0:V[l])!=null&&W.customer_nationality?(z=(H=e==null?void 0:e.other_customer)==null?void 0:H[l])==null?void 0:z.customer_nationality:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block uppercase form-label  ",children:"customer Passport PDF/PNG/JPG"}),((X=(J=e==null?void 0:e.other_customer)==null?void 0:J[l])==null?void 0:X.customer_passportPDF)&&((Q=(K=e==null?void 0:e.other_customer)==null?void 0:K[l])==null?void 0:Q.customer_passportPDF)!==void 0&&((D=(Z=e==null?void 0:e.other_customer)==null?void 0:Z[l])==null?void 0:D.customer_passportPDF)!=="undefined"&&((te=(ee=e==null?void 0:e.other_customer)==null?void 0:ee[l])==null?void 0:te.customer_passportPDF)!==null&&((ae=(le=e==null?void 0:e.other_customer)==null?void 0:le[l])==null?void 0:ae.customer_passportPDF)!=="null"?t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${(ce=(oe=e==null?void 0:e.other_customer)==null?void 0:oe[l])==null?void 0:ce.customer_passportPDF}`,children:decodeURIComponent((se=(re=e==null?void 0:e.other_customer)==null?void 0:re[l])==null?void 0:se.customer_passportPDF).split("/").pop()})}):t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("p",{children:"Not Available"})})]})]}):null})]},l+1)})})}),t("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[t("div",{children:t(f,{label:"POA TAKER NAME",type:"text",placeholder:"Type your POA TAKER NAME",name:"poa_taker_name",value:e.poa_taker_name||"",register:h,onChange:n})}),t("div",{children:t(f,{label:"POA LANGUAGE",type:"text",placeholder:"Type your POA LANGUAGE",name:"poa_language",value:e.poa_language||"",register:h,onChange:n})}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"DATE OF ISSUE"}),t(E,{className:"form-control py-2",name:"date_of_issue",value:e.date_of_issue||"",onChange:o=>{n({target:{name:"date_of_issue",value:o[0]}})},id:"default-picker",placeholder:"Select DATE OF ISSUE"})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"EXPIRY"}),t(E,{className:"form-control py-2",name:"expiry_date",value:e.expiry_date||"",onChange:o=>{n({target:{name:"expiry_date",value:o[0]}})},id:"default-picker",placeholder:"Select EXPIRY"})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"DATE OF RE-VALIDATION"}),t(E,{className:"form-control py-2",name:"date_of_revalidation",value:e.date_of_revalidation||"",onChange:o=>{n({target:{name:"date_of_revalidation",value:o[0]}})},id:"default-picker",placeholder:"Select DATE OF RE-VALIDATION"})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"RE - VALIDATION EXPIRY"}),t(E,{className:"form-control py-2",name:"revalidation_expiry_date",value:e.revalidation_expiry_date||"",onChange:o=>{n({target:{name:"revalidation_expiry_date",value:o[0]}})},id:"default-picker",placeholder:"Select RE - VALIDATION EXPIRY"})]}),c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"TYPE OF POA"}),t(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(o){return o.value===(e==null?void 0:e.type_of_poa)}),onChange:o=>{n({target:{name:"type_of_poa",value:o.value}})},styles:k,placeholder:"TYPE OF POA",id:"hh"})]}),t("div",{children:t(f,{label:"SPECIFIC REASON",type:"text",placeholder:"Type your SPECIFIC REASON",name:"specific_reason",value:e.specific_reason||"",register:h,onChange:n})}),t("div",{children:c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"PURPOSE OF POA"}),c("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"nominated",checked:(e==null?void 0:e.nominated)===!0,onChange:xe}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"NOMINATED "})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"buying",id:"",checked:(e==null?void 0:e.buying)===!0,onChange:_e}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"BUYING"})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"selling",id:"",checked:(e==null?void 0:e.selling)===!0,onChange:be}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"SELLING"})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"gifting",checked:(e==null?void 0:e.gifting)===!0,onChange:Ne}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"GIFTING "})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"renting",id:"",checked:(e==null?void 0:e.renting)===!0,onChange:ge}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"RENTING"})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"management",id:"",checked:(e==null?void 0:e.management)===!0,onChange:ye}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"MANAGEMENT"})]}),c("div",{className:"flex items-center gap-x-[10px] w-[20%]",children:[t("input",{type:"checkbox",name:"visa",id:"",checked:(e==null?void 0:e.visa)===!0,onChange:Ae}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"VISA"})]})]})]})}),t("div",{children:t(f,{label:"CODE POWER NO.",type:"text",placeholder:"Type your CODE POWER NO.",name:"code_power_no",value:e.code_power_no||"",register:h,onChange:n})}),t("div",{children:t(f,{label:"CODE POWER BRANCH",type:"text",placeholder:"Type your CODE POWER BRANCH",name:"code_power_branch",value:e.code_power_branch||"",register:h,onChange:n})}),t("div",{children:t(f,{label:"NO. OF POA (ORIGINAL) WITH US",type:"number",placeholder:"Type your NO. OF POA (ORIGINAL) WITH US",name:"no_poa_with_us",value:e.no_poa_with_us||"",register:h,onChange:n})}),c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"POA DONE THRU LAWYER/TYPIST/SELF"}),t(A,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(o){return o.value===(e==null?void 0:e.poa_done)}),onChange:o=>{n({target:{name:"poa_done",value:o.value}})},styles:k,placeholder:"LAWYER/TYPIST/SELF",id:"hh"})]}),t("div",{children:t(f,{label:"AMOUNT PAID (AED) | COURT FEES",type:"number",placeholder:"Type your AMOUNT PAID (AED) | COURT FEES",name:"court_fees",value:e.court_fees||"",register:h,onChange:n})}),t("div",{children:t(f,{label:"AMOUNT PAID (AED) | SERVICE  FEES",type:"number",placeholder:"Type your AMOUNT PAID (AED) | SERVICE  FEES",name:"service_fees",value:e.service_fees||"",register:h,onChange:n})}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"ATTACHMENT PDF/PNG/JPG"}),x!==""&&x!==null&&x!=="null"&&x!==void 0&&x!=="undefined"||(e==null?void 0:e.attachment_doc)!==""&&(e==null?void 0:e.attachment_doc)!==null&&(e==null?void 0:e.attachment_doc)!=="null"&&(e==null?void 0:e.attachment_doc)!==void 0&&(e==null?void 0:e.attachment_doc)!=="undefined"?c("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.attachment_doc}`,children:decodeURIComponent(e==null?void 0:e.attachment_doc).split("/").pop()}),t("img",{src:Ve,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:ke})]}):t(We,{name:"basic",selectedFile:x,onChange:Ee})]})]})}),c("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${_===!0?"cursor-not-allowed	":""}`,children:_===!0?t("div",{className:` ${_===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t(He,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-poa",children:"Cancel"})}),he.pathname===`/poa-form/${v}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${_===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>T("Update"),children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${_===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:()=>T("Create"),type:"button",children:"Submit"})})}),_===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})]})};export{Qe as default};
