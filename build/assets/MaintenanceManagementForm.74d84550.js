import{bu as cl,A as al,ag as ol,r as p,w as rl,x as gt,y as pl,c,F as g,j as t,t as sl,C as ml,aq as dl,ak as hl,l as V,aC as Ct,I as H,T as At,bP as wt,ao as qt,L as Ft,z as ul,bQ as kt,K as $,Q as z}from"./index.b447658d.js";const vl={option:(x,F)=>({...x,fontSize:"14px"})},_l=()=>{var te,le,ie;const{id:x}=cl(),F=al(),K=ol(),[e,u]=p.exports.useState(""),k=n=>{const{name:l,value:i}=n.target;u({...e,[l]:i})};p.exports.useEffect(()=>{(async()=>{if(x){const i=await(await fetch(`http://dev-rare.srp.ai/maintenancemanagement/${x}`)).json();i&&(u(i),i!=null&&i.quotation_attachment&&Z(i==null?void 0:i.quotation_attachment),i!=null&&i.invoice_attachment&&D(i==null?void 0:i.invoice_attachment))}})()},[x]);const Tt=[{value:"In-house",label:"In-house"},{value:"Outsource",label:"Outsource"}],St=n=>{u({...e,house_type:n.target.value})},Ot=()=>{u({...e,total_count:(e==null?void 0:e.total_count)+1})},Et=localStorage.getItem("isAuth"),a=JSON.parse(Et),[J,W]=p.exports.useState([]);p.exports.useEffect(()=>{a!=null&&a.type?(async()=>{try{const l=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${a==null?void 0:a._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,i=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${a==null?void 0:a._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(l);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const o=r.status===400?[]:await r.json(),s=await fetch(i);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const v=s.status===400?[]:await s.json(),m=[...o,...v],y=new Map;m.forEach(d=>{y.has(d._id)||y.set(d._id,d)});const f=m==null?void 0:m.map(d=>({label:d.unitnumber+" | "+d.community_name+" | "+d.project_name+" | "+d.building_name,value:d._id}));W(f)}catch(l){console.error("Error fetching data:",l)}})():fetch("http://dev-rare.srp.ai/property").then(n=>n.json()).then(n=>{const l=n==null?void 0:n.map(i=>({label:i.unitnumber+" | "+i.communityname+" | "+i.projectname+" | "+i.buildingname,value:i._id}));W(l)})},[]),p.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const i=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();i&&u({...e,unitnumber:i==null?void 0:i.unitnumber,buildingname:i==null?void 0:i.building_name,projectname:i==null?void 0:i.project_name,communityname:i==null?void 0:i.community_name})}})()},[e==null?void 0:e.propertyid]);const[Y]=p.exports.useState("RARE Homes Technical LLC"),[S]=p.exports.useState("Dubai"),[O]=p.exports.useState("United Arab Emirates"),[E]=p.exports.useState("100617124100003"),Mt=()=>`${Math.floor(1e7+Math.random()*9e7)}-RTS`,[M]=p.exports.useState(Mt()),Pt=()=>`${Math.floor(1e7+Math.random()*9e7)}-QTN`,[P]=p.exports.useState(Pt());p.exports.useEffect(()=>{(e==null?void 0:e.house_type)==="In-house"&&((e==null?void 0:e.invoice_number)||M)&&((e==null?void 0:e.city)||S)&&((e==null?void 0:e.qtn_number)||P)&&((e==null?void 0:e.company)||Y)&&((e==null?void 0:e.emirate)||O)&&((e==null?void 0:e.trn_number)||E)&&(!(e!=null&&e.total_count)||(e==null?void 0:e.total_count))?u({...e,invoice_number:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:M,qtn_number:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:P,company:Y,city:e!=null&&e.city?e==null?void 0:e.city:S,emirate:e!=null&&e.emirate?e==null?void 0:e.emirate:O,trn_number:e!=null&&e.trn_number?e==null?void 0:e.trn_number:E,total_count:e!=null&&e.total_count?e==null?void 0:e.total_count:1,qoutation_date:e!=null&&e.qoutation_date?e==null?void 0:e.qoutation_date:new Date}):(e==null?void 0:e.house_type)==="Outsource"&&((e==null?void 0:e.invoice_number)||M)&&((e==null?void 0:e.city)||S)&&((e==null?void 0:e.qtn_number)||P)&&((e==null?void 0:e.emirate)||O)&&((e==null?void 0:e.trn_number)||E)&&(!(e!=null&&e.total_count)||(e==null?void 0:e.total_count))&&u({...e,invoice_number:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:M,qtn_number:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:P,city:e!=null&&e.city?e==null?void 0:e.city:S,emirate:e!=null&&e.emirate?e==null?void 0:e.emirate:O,trn_number:e!=null&&e.trn_number?e==null?void 0:e.trn_number:E,total_count:e!=null&&e.total_count?e==null?void 0:e.total_count:1,qoutation_date:e!=null&&e.qoutation_date?e==null?void 0:e.qoutation_date:new Date})},[M,S,P,Y,O,E,e==null?void 0:e.house_type]);const[X,I]=p.exports.useState(""),[jt,fl]=p.exports.useState(""),[Rt,L]=p.exports.useState(""),Ut=rl({propertyid:gt().required(X),company:gt().required(jt)}).required(),{register:Q,formState:{errors:yl}}=pl({resolver:ul(Ut)}),[$t,zt]=p.exports.useState(null),[Qt,Z]=p.exports.useState(""),Gt=async n=>{var i;zt(n.target.files[0]);let l=await kt(n.target.files[0],"quotation_attachment");u({...e,quotation_attachment:(i=l==null?void 0:l.data)==null?void 0:i.files[0]})},Bt=()=>{u({...e,quotation_attachment:""}),Z("")},[Vt,Ht]=p.exports.useState(null),[Kt,D]=p.exports.useState(""),Yt=async n=>{var i;Ht(n.target.files[0]);let l=await kt(n.target.files[0],"invoice_attachment");u({...e,invoice_attachment:(i=l==null?void 0:l.data)==null?void 0:i.files[0]})},Jt=()=>{u({...e,invoice_attachment:""}),D("")},G=(n,l)=>{var A,w,N;let i=[];const{name:r,value:o}=n.target;e.multiDescription&&Array.isArray(e.multiDescription)&&(i=[...e.multiDescription]);const s=i[l]||{};i[l]={...s,[r]:o};const v=parseFloat(((A=i[l])==null?void 0:A.quantity)||0),m=parseFloat(((w=i[l])==null?void 0:w.unit_price)||0),y=parseFloat(((N=i[l])==null?void 0:N.vat_per)||0),f=v*m,d=m&&y?Math.abs(f/100)*y:0,_=m&&y?d+f:0;i[l].total_price=f,i[l].vat_amount_aed=d,i[l].total_amount_aed=_;const C={...e,multiDescription:i};u(C)},Wt=n=>{let l=[...e.multiDescription],i={...l[n]};i.total_child_count=(i.total_child_count?i.total_child_count:0)+1,l[n]=i,u({...e,multiDescription:l})},Xt=n=>{let l=[...e.multiDescription];l.splice(n,1),u({...e,total_count:(e==null?void 0:e.total_count)-1,multiDescription:l})},It=(n,l)=>{var o;let i=[...e.multiDescription],r=[...((o=i[n])==null?void 0:o.child_description)||[]];r.splice(l,1),i[n].child_description=r,i[n].total_child_count--,u({...e,multiDescription:i})},B=(n,l,i)=>{var N,j,R,U;let r=[...e.multiDescription],o=[...((N=r[l])==null?void 0:N.child_description)||[]];const{name:s,value:v}=n.target,m=o[i]||{};o[i]={...m,[s]:v};const y=parseFloat(((j=o[i])==null?void 0:j.quantity)||0),f=parseFloat(((R=o[i])==null?void 0:R.unit_price)||0),d=parseFloat(((U=o[i])==null?void 0:U.vat_per)||0),_=y*f,C=f&&d?Math.abs(_/100)*d:0,A=f&&d?C+_:0;o[i].total_price=_,o[i].vat_amount_aed=C,o[i].total_amount_aed=A,r[l].child_description=o;const w={...e,multiDescription:r};u(w)},Lt=n=>{const l=parseFloat(n.quantity||0),i=parseFloat(n.unit_price||0);return l*i},Zt=n=>{const l=parseFloat((n==null?void 0:n.vat_per)||0),i=parseFloat((n==null?void 0:n.total_price)||0);return i&&l?Math.abs(i/100)*l:0},Dt=n=>{const l=parseFloat((n==null?void 0:n.total_price)||0),i=parseFloat((n==null?void 0:n.vat_amount_aed)||0);return l&&i?l+i:0},el=n=>Array.isArray(n)?n.reduce((l,i)=>{const r=(i.child_description||[]).reduce((v,m)=>v+Lt(m),0),o=parseFloat(i.unit_price||0),s=parseFloat(i.quantity||0);return l+o*s+r},0):0,tl=n=>Array.isArray(n)?n.reduce((l,i)=>{const r=(i.child_description||[]).reduce((v,m)=>v+Zt(m),0),o=parseFloat(i.vat_per||0),s=parseFloat(i.total_price||0);return l+(s&&o?Math.abs(s/100)*o:0)+r},0):0,ll=n=>Array.isArray(n)?n.reduce((l,i)=>{const r=(i.child_description||[]).reduce((v,m)=>v+Dt(m),0),o=parseFloat(i.total_price||0),s=parseFloat(i.vat_amount_aed||0);return l+(o&&s?o+s:0)+r},0):0;p.exports.useEffect(()=>{if(e!=null&&e.multiDescription){const n=el(e.multiDescription),l=tl(e.multiDescription),i=ll(e.multiDescription);u(r=>({...r,total_price:n,vat_amount_aed:l,total_amount_aed:i}))}},[e.multiDescription]);const[T,ee]=p.exports.useState(!1),il=async()=>{(!(e!=null&&e.propertyid)||(e==null?void 0:e.propertyid)==="")&&I("Property is Required"),e!=null&&e.house_type||L("House Type is Required"),(e==null?void 0:e.propertyid)&&(e==null?void 0:e.propertyid)!==""&&(e==null?void 0:e.house_type)&&(ee(!0),a!=null&&a.type?(await $.post("http://dev-rare.srp.ai/maintenancemanagement",{...e,createdBy:a==null?void 0:a._id,quotation_status:"approved"}),z.success("New Maintenance Management Quotations created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{F("/owner-maintenancemanagement")},1200)):(a==null?void 0:a._id)&&a?(await $.post("http://dev-rare.srp.ai/maintenancemanagement",{...e,createdBy:a==null?void 0:a._id}),z.success("New Maintenance Management Quotations created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{F("/allmaintenancemanagement")},1200)):(await $.post("http://dev-rare.srp.ai/maintenancemanagement",e),z.success("New Maintenance Management Quotations created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{F("/allmaintenancemanagement")},1200)))},nl=async()=>{!(e!=null&&e.propertyid)&&(e==null?void 0:e.propertyid)===""&&I("Property is Required"),e!=null&&e.house_type||L("House Type is Required"),(e==null?void 0:e.propertyid)&&(e==null?void 0:e.propertyid)!==""&&(e==null?void 0:e.house_type)&&(ee(!0),(a==null?void 0:a._id)&&a?(await $.patch("http://dev-rare.srp.ai/maintenancemanagement",{...e,updatedBy:a==null?void 0:a._id}),z.success("Maintenance Management Quotation Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{F("/allmaintenancemanagement")},1200)):(await $.patch("http://dev-rare.srp.ai/maintenancemanagement",e),z.success("Maintenance Management Quotation Updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{F("/allmaintenancemanagement")},1200)))};return c(g,{children:[t(sl,{}),t("div",{className:"xl:col-span-2 col-span-1",children:c(ml,{title:"Maintenance Management Form",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),c("div",{className:"w-[100%] col-span-3",children:[t(dl,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(n){return n.value===(e==null?void 0:e.propertyid)}),onChange:n=>{u({...e,propertyid:n==null?void 0:n.value})},styles:vl,id:"hh",placeholder:"Select and Search property"}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:X})]}),t(g,{children:e!=null&&e.propertyid?t(g,{children:t("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Unit number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Community Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Project Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Building Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]})})}):null}),t("div",{className:"w-[100%] col-span-3",children:t("div",{className:"borderBottom"})}),c("div",{className:"w-[100%] col-span-3 mt-[30px]",children:[t("div",{className:"flex flex-wrap space-xy-5 w-[100%]",children:Tt.map(n=>t(hl,{label:n.label,name:"house",value:n.value,checked:(e==null?void 0:e.house_type)===n.value,onChange:St}))}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:Rt})]}),(e==null?void 0:e.house_type)==="In-house"?c(g,{children:[c("div",{className:"flex mt-[25px] justify-between",children:[c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[(e==null?void 0:e.house_type)==="In-house"?c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Company"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.company}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}):t("div",{children:t(V,{label:"Company",type:"text",placeholder:"Type your Company",name:"company",value:e.company||"",register:Q,onChange:k})}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"City"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.city}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Emirate"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.emirate}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),t("div",{children:t(V,{label:"Email",type:"text",placeholder:"Type your Email",name:"email",value:e.email||"",register:Q,onChange:k})})]}),c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Date"}),t(Ct,{className:"form-control py-2",name:"qoutation_date",value:e.qoutation_date||"",onChange:n=>{k({target:{name:"qoutation_date",value:n[0]}})},id:"default-picker",placeholder:"Select Date"})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.invoice_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"QTN Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.qtn_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"TRN Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.trn_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]})]}),t("div",{className:"mt-[25px] w-[100%]",children:c("div",{className:"mt-[25px] w-[100%] flex item-center justify-end select-none",children:[t("p",{className:"maintenance-para",children:e==null?void 0:e.total_count}),t("div",{className:"p-[11px] maintenance-btn",onClick:Ot,children:t(H,{icon:"heroicons-outline:plus",className:"w-[20px] h-[20px]"})})]})}),c("div",{className:"w-[100%] flex item-center mt-[40px]",children:[t("div",{className:"w-[35%] p-[10px] disc-heading",children:t("p",{children:"DESCRIPTION OF SERVICES / SCOPE OF WORK"})}),t("div",{className:"flex-1  p-[10px] border-left remaining-headings",children:t("p",{children:"QUANTITY"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"UNIT PRICE"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"TAXABLE VALUE AED"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"VAT %"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"VAT AMOUNT AED"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"TOTAL IN AED"})}),t("div",{className:"flex-1  p-[10px] remaining-headings",children:t("p",{children:"Actions"})})]}),(e==null?void 0:e.total_count)>0&&t(g,{children:Array.from({length:e==null?void 0:e.total_count},(n,l)=>{var i,r,o,s,v,m,y,f,d,_,C,A,w,N,j,R,U,ne,ce,ae,oe,re,pe,se,me,de,he,ue,ve,fe,ye,xe,_e,Ne;return c("div",{children:[c("div",{className:"w-[100%] flex",children:[t("div",{className:"w-[35%] p-[10px] disc-col-first",children:t("input",{type:"text",className:"  form-control py-2   border-none",placeholder:"Enter Description",name:"description",value:((r=(i=e==null?void 0:e.multiDescription)==null?void 0:i[l])==null?void 0:r.description)||"",onChange:b=>G(b,l)})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Quantity",name:"quantity",value:((s=(o=e==null?void 0:e.multiDescription)==null?void 0:o[l])==null?void 0:s.quantity)||"",onChange:b=>G(b,l)})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Unit Price",name:"unit_price",value:((m=(v=e==null?void 0:e.multiDescription)==null?void 0:v[l])==null?void 0:m.unit_price)||"",onChange:b=>G(b,l)})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((f=(y=e==null?void 0:e.multiDescription)==null?void 0:y[l])==null?void 0:f.quantity)&&((_=(d=e==null?void 0:e.multiDescription)==null?void 0:d[l])==null?void 0:_.unit_price)?(A=(C=e==null?void 0:e.multiDescription)==null?void 0:C[l])==null?void 0:A.total_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col items-center",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Vat %",name:"vat_per",value:((N=(w=e==null?void 0:e.multiDescription)==null?void 0:w[l])==null?void 0:N.vat_per)||"",onChange:b=>G(b,l)})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((R=(j=e==null?void 0:e.multiDescription)==null?void 0:j[l])==null?void 0:R.vat_per)&&((ne=(U=e==null?void 0:e.multiDescription)==null?void 0:U[l])==null?void 0:ne.unit_price)?(ae=(ce=e==null?void 0:e.multiDescription)==null?void 0:ce[l])==null?void 0:ae.vat_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((re=(oe=e==null?void 0:e.multiDescription)==null?void 0:oe[l])==null?void 0:re.vat_per)&&((se=(pe=e==null?void 0:e.multiDescription)==null?void 0:pe[l])==null?void 0:se.unit_price)?(de=(me=e==null?void 0:e.multiDescription)==null?void 0:me[l])==null?void 0:de.total_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:c("div",{className:" w-[100%] flex gap-x-[8px] items-center select-none",children:[t("div",{children:c("div",{className:"flex select-none",children:[t("p",{className:"maintenance-para",children:(ue=(he=e==null?void 0:e.multiDescription)==null?void 0:he[l])!=null&&ue.total_child_count?(fe=(ve=e==null?void 0:e.multiDescription)==null?void 0:ve[l])==null?void 0:fe.total_child_count:0}),t("div",{className:"p-[6px] maintenance-btn",onClick:()=>Wt(l),children:t(H,{icon:"heroicons-outline:plus",className:""})})]})}),t(At,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("div",{className:"action-btn cursor-pointer",onClick:()=>Xt(l),children:t(H,{icon:"heroicons-outline:trash"})})})]})})]}),((xe=(ye=e==null?void 0:e.multiDescription)==null?void 0:ye[l])==null?void 0:xe.total_child_count)>0&&t(g,{children:Array.from({length:(Ne=(_e=e==null?void 0:e.multiDescription)==null?void 0:_e[l])==null?void 0:Ne.total_child_count},(b,h)=>{var be,ge,Ce,Ae,we,qe,Fe,ke,Te,Se,Oe,Ee,Me,Pe,je,Re,Ue,$e,ze,Qe,Ge,Be,Ve,He,Ke,Ye,Je,We,Xe,Ie,Le,Ze,De,et,tt,lt,it,nt,ct,at,ot,rt,pt,st,mt,dt,ht,ut,vt,ft,yt,xt,_t,Nt,bt;return c("div",{className:"w-[100%] flex",children:[c("div",{className:"w-[35%] p-[10px] disc-col-first flex items-center",children:[t("span",{className:"text-[20px]",children:"-"})," ",t("input",{type:"text",className:"  form-control py-2   border-none",placeholder:"Enter Description",name:"description",value:((Ae=(Ce=(ge=(be=e==null?void 0:e.multiDescription)==null?void 0:be[l])==null?void 0:ge.child_description)==null?void 0:Ce[h])==null?void 0:Ae.description)||"",onChange:q=>B(q,l,h)})]}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Quantity",name:"quantity",value:((ke=(Fe=(qe=(we=e==null?void 0:e.multiDescription)==null?void 0:we[l])==null?void 0:qe.child_description)==null?void 0:Fe[h])==null?void 0:ke.quantity)||"",onChange:q=>B(q,l,h)})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Unit Price",name:"unit_price",value:((Ee=(Oe=(Se=(Te=e==null?void 0:e.multiDescription)==null?void 0:Te[l])==null?void 0:Se.child_description)==null?void 0:Oe[h])==null?void 0:Ee.unit_price)||"",onChange:q=>B(q,l,h)})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((Re=(je=(Pe=(Me=e==null?void 0:e.multiDescription)==null?void 0:Me[l])==null?void 0:Pe.child_description)==null?void 0:je[h])==null?void 0:Re.quantity)&&((Qe=(ze=($e=(Ue=e==null?void 0:e.multiDescription)==null?void 0:Ue[l])==null?void 0:$e.child_description)==null?void 0:ze[h])==null?void 0:Qe.unit_price)?(Ke=(He=(Ve=(Be=(Ge=e==null?void 0:e.multiDescription)==null?void 0:Ge[l])==null?void 0:Be.child_description)==null?void 0:Ve[h])==null?void 0:He.total_price)==null?void 0:Ke.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col items-center",children:t("input",{type:"number",className:"  form-control py-2   border-none",placeholder:"Enter Vat %",name:"vat_per",value:((Xe=(We=(Je=(Ye=e==null?void 0:e.multiDescription)==null?void 0:Ye[l])==null?void 0:Je.child_description)==null?void 0:We[h])==null?void 0:Xe.vat_per)||"",onChange:q=>B(q,l,h)})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((De=(Ze=(Le=(Ie=e==null?void 0:e.multiDescription)==null?void 0:Ie[l])==null?void 0:Le.child_description)==null?void 0:Ze[h])==null?void 0:De.vat_per)&&((it=(lt=(tt=(et=e==null?void 0:e.multiDescription)==null?void 0:et[l])==null?void 0:tt.child_description)==null?void 0:lt[h])==null?void 0:it.unit_price)?(rt=(ot=(at=(ct=(nt=e==null?void 0:e.multiDescription)==null?void 0:nt[l])==null?void 0:ct.child_description)==null?void 0:at[h])==null?void 0:ot.vat_amount_aed)==null?void 0:rt.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("p",{children:((dt=(mt=(st=(pt=e==null?void 0:e.multiDescription)==null?void 0:pt[l])==null?void 0:st.child_description)==null?void 0:mt[h])==null?void 0:dt.vat_per)&&((ft=(vt=(ut=(ht=e==null?void 0:e.multiDescription)==null?void 0:ht[l])==null?void 0:ut.child_description)==null?void 0:vt[h])==null?void 0:ft.unit_price)?(bt=(Nt=(_t=(xt=(yt=e==null?void 0:e.multiDescription)==null?void 0:yt[l])==null?void 0:xt.child_description)==null?void 0:_t[h])==null?void 0:Nt.total_amount_aed)==null?void 0:bt.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:t("div",{className:" w-[100%] flex gap-x-[8px] select-none",children:t(At,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("div",{className:"action-btn cursor-pointer",onClick:()=>It(l,h),children:t(H,{icon:"heroicons-outline:trash"})})})})})]},h+1)})})]},l+1)})}),c("div",{className:"w-[100%] flex item-center",children:[t("div",{className:"w-[35%] p-[10px] total-col",children:t("p",{className:"text-center",children:"T O T A L"})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{children:e!=null&&e.total_price?(te=e==null?void 0:e.total_price)==null?void 0:te.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{children:e!=null&&e.vat_amount_aed?(le=e==null?void 0:e.vat_amount_aed)==null?void 0:le.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{children:e!=null&&e.total_amount_aed?(ie=e==null?void 0:e.total_amount_aed)==null?void 0:ie.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),t("div",{className:"flex-1  p-[10px] disc-col",children:t("p",{})})]})]}):null,(e==null?void 0:e.house_type)==="Outsource"?t(g,{children:c("div",{className:"flex mt-[25px] justify-between",children:[c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[t("div",{children:t(V,{label:"Company",type:"text",placeholder:"Type your Company",name:"company",value:e.company||"",register:Q,onChange:k})}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"City"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.city}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Emirate"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.emirate}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),t("div",{children:t(V,{label:"Email",type:"text",placeholder:"Type your Email",name:"email",value:e.email||"",register:Q,onChange:k})}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Invoice Attachment"}),Kt!==""&&(e==null?void 0:e.invoice_attachment)!==""&&K.pathname===`/maintenancemanagementform/${x}`&&(e==null?void 0:e.invoice_attachment)!==void 0?c("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[t("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.invoice_attachment}`,children:decodeURIComponent(e==null?void 0:e.invoice_attachment).split("/").pop()}),t("img",{src:wt,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:Jt})]}):t(qt,{name:"invoice_attachment",selectedFile:Vt,onChange:Yt})]})]}),c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Date"}),t(Ct,{className:"form-control py-2",name:"qoutation_date",value:e.qoutation_date||"",onChange:n=>{k({target:{name:"qoutation_date",value:n[0]}})},id:"default-picker",placeholder:"Select Date"})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.invoice_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"QTN Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.qtn_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"TRN Number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readOnly:!0,value:e==null?void 0:e.trn_number}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Quotation Attachment"}),Qt!==""&&(e==null?void 0:e.quotation_attachment)!==""&&K.pathname===`/maintenancemanagementform/${x}`&&(e==null?void 0:e.quotation_attachment)!==void 0?c("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[t("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.quotation_attachment}`,children:decodeURIComponent(e==null?void 0:e.quotation_attachment).split("/").pop()}),t("img",{src:wt,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:Bt})]}):t(qt,{name:"quotation_attachment",selectedFile:$t,onChange:Gt})]})]})]})}):null,c("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative mt-[35px]",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${T===!0?"cursor-not-allowed	":""}`,children:T===!0?t("div",{className:` ${T===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t(g,{children:a!=null&&a.type?t(Ft,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/owner-maintenancemanagement",children:"Cancel"}):t(Ft,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/allmaintenancemanagement",children:"Cancel"})})}),K.pathname===`/maintenancemanagementform/${x}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:nl,children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:il,type:"button",children:"Submit"})})}),T===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})]})};export{_l as default};
