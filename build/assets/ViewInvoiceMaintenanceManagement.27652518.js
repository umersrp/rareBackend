import{bu as sl,r as p,j as l,F as m,c as e,C as hl,ak as vl,L as rl}from"./index.b108767f.js";import"./jspdf.es.min.eed24c14.js";import"./html2canvas.esm.0eae2bf4.js";const gl=()=>{var s,h,v;const{id:d}=sl(),[i,a]=p.exports.useState(""),pl=localStorage.getItem("isAuth"),r=JSON.parse(pl);p.exports.useEffect(()=>{(async()=>{if(d){const n=await(await fetch(`http://portals.rarehomesgroup.com/maintenancemanagement/${d}`)).json();n&&a(n)}})()},[d]);const al=[{value:"In-house",label:"In-house"},{value:"Outsource",label:"Outsource"}];return p.exports.useEffect(()=>{(async()=>{if(i!=null&&i.propertyid){const n=await(await fetch(`http://portals.rarehomesgroup.com/property/${i==null?void 0:i.propertyid}`)).json();n&&a({...i,unitnumber:n==null?void 0:n.unitnumber,buildingname:n==null?void 0:n.building_name,projectname:n==null?void 0:n.project_name,communityname:n==null?void 0:n.community_name})}})()},[i==null?void 0:i.propertyid]),l(m,{children:l("div",{className:"xl:col-span-2 col-span-1",children:e(hl,{title:"View Maintenance Management Quotation",children:[e("div",{id:"content-to-print",className:"pdf-content",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),l(m,{children:i!=null&&i.propertyid?l(m,{children:l("div",{className:"w-[100%] col-span-3",children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Unit number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Community Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Project Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.projectname?i==null?void 0:i.projectname:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Building Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.buildingname?i==null?void 0:i.buildingname:"Not Available"})})]})]})})}):null}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{className:"w-[100%] col-span-3 mt-[30px]",children:l("div",{className:"flex flex-wrap space-xy-5 w-[100%]",children:al.map(t=>l(vl,{label:t.label,name:"house",value:t.value,checked:(i==null?void 0:i.house_type)===t.value,readOnly:!0}))})}),(i==null?void 0:i.house_type)==="In-house"?e(m,{children:[e("div",{className:"flex mt-[25px] justify-between",children:[e("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.company?i==null?void 0:i.company:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.city?i==null?void 0:i.city:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.emirate?i==null?void 0:i.emirate:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.email?i==null?void 0:i.email:"Not Available"})})]})]}),e("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qoutation_date?new Date(i==null?void 0:i.qoutation_date).toDateString():"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.invoice_number?i==null?void 0:i.invoice_number:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qtn_number?i==null?void 0:i.qtn_number:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.trn_number?i==null?void 0:i.trn_number:"Not Available"})})]})]})]}),e("div",{className:"w-[100%] flex item-center mt-[40px]",children:[l("div",{className:"w-[35%] p-[10px] disc-heading",children:l("p",{children:"DESCRIPTION OF SERVICES / SCOPE OF WORK"})}),l("div",{className:"flex-1  p-[10px] border-left remaining-headings",children:l("p",{children:"QUANTITY"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"UNIT PRICE"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"TAXABLE VALUE AED"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"VAT %"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"VAT AMOUNT AED"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"TOTAL IN AED"})})]}),(i==null?void 0:i.total_count)>0&&l(m,{children:Array.from({length:i==null?void 0:i.total_count},(t,c)=>{var n,N,b,f,_,g,x,y,A,w,k,F,q,S,z,G,E,T,L,j,C,O,R,U,P,V,$,M,Q,B,I,Y,J,K,W,X;return e("div",{children:[e("div",{className:"w-[100%] flex",children:[l("div",{className:"w-[35%] p-[10px] disc-col-first items-center flex",children:l("p",{children:(N=(n=i==null?void 0:i.multiDescription)==null?void 0:n[c])!=null&&N.description?(f=(b=i==null?void 0:i.multiDescription)==null?void 0:b[c])==null?void 0:f.description:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(g=(_=i==null?void 0:i.multiDescription)==null?void 0:_[c])!=null&&g.quantity?(y=(x=i==null?void 0:i.multiDescription)==null?void 0:x[c])==null?void 0:y.quantity:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(w=(A=i==null?void 0:i.multiDescription)==null?void 0:A[c])!=null&&w.unit_price?(F=(k=i==null?void 0:i.multiDescription)==null?void 0:k[c])==null?void 0:F.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:(S=(q=i==null?void 0:i.multiDescription)==null?void 0:q[c])!=null&&S.total_price?(G=(z=i==null?void 0:i.multiDescription)==null?void 0:z[c])==null?void 0:G.total_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col items-center",children:l("p",{children:(T=(E=i==null?void 0:i.multiDescription)==null?void 0:E[c])!=null&&T.vat_per?((j=(L=i==null?void 0:i.multiDescription)==null?void 0:L[c])==null?void 0:j.vat_per)+" %":""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((O=(C=i==null?void 0:i.multiDescription)==null?void 0:C[c])==null?void 0:O.vat_per)&&((U=(R=i==null?void 0:i.multiDescription)==null?void 0:R[c])==null?void 0:U.unit_price)?(V=(P=i==null?void 0:i.multiDescription)==null?void 0:P[c])==null?void 0:V.vat_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((M=($=i==null?void 0:i.multiDescription)==null?void 0:$[c])==null?void 0:M.vat_per)&&((B=(Q=i==null?void 0:i.multiDescription)==null?void 0:Q[c])==null?void 0:B.unit_price)?(Y=(I=i==null?void 0:i.multiDescription)==null?void 0:I[c])==null?void 0:Y.total_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]}),((K=(J=i==null?void 0:i.multiDescription)==null?void 0:J[c])==null?void 0:K.total_child_count)>0&&l(m,{children:Array.from({length:(X=(W=i==null?void 0:i.multiDescription)==null?void 0:W[c])==null?void 0:X.total_child_count},(Nl,o)=>{var H,Z,u,D,ii,li,ci,ei,ni,oi,mi,ti,di,ri,pi,ai,si,hi,vi,Ni,bi,fi,_i,gi,xi,yi,Ai,wi,ki,Fi,qi,Si,zi,Gi,Ei,Ti,Li,ji,Ci,Oi,Ri,Ui,Pi,Vi,$i,Mi,Qi,Bi,Ii,Yi,Ji,Ki,Wi,Xi,Hi,Zi,ui,Di,il,ll,cl,el,nl,ol,ml,tl,dl;return e("div",{className:"w-[100%] flex",children:[l("div",{className:"w-[35%] p-[10px] disc-col-first flex items-center",children:l("p",{children:(D=(u=(Z=(H=i==null?void 0:i.multiDescription)==null?void 0:H[c])==null?void 0:Z.child_description)==null?void 0:u[o])!=null&&D.description?"- "+((ei=(ci=(li=(ii=i==null?void 0:i.multiDescription)==null?void 0:ii[c])==null?void 0:li.child_description)==null?void 0:ci[o])==null?void 0:ei.description):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(ti=(mi=(oi=(ni=i==null?void 0:i.multiDescription)==null?void 0:ni[c])==null?void 0:oi.child_description)==null?void 0:mi[o])!=null&&ti.quantity?(ai=(pi=(ri=(di=i==null?void 0:i.multiDescription)==null?void 0:di[c])==null?void 0:ri.child_description)==null?void 0:pi[o])==null?void 0:ai.quantity:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(Ni=(vi=(hi=(si=i==null?void 0:i.multiDescription)==null?void 0:si[c])==null?void 0:hi.child_description)==null?void 0:vi[o])!=null&&Ni.unit_price?(gi=(_i=(fi=(bi=i==null?void 0:i.multiDescription)==null?void 0:bi[c])==null?void 0:fi.child_description)==null?void 0:_i[o])==null?void 0:gi.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:(wi=(Ai=(yi=(xi=i==null?void 0:i.multiDescription)==null?void 0:xi[c])==null?void 0:yi.child_description)==null?void 0:Ai[o])!=null&&wi.total_price?(zi=(Si=(qi=(Fi=(ki=i==null?void 0:i.multiDescription)==null?void 0:ki[c])==null?void 0:Fi.child_description)==null?void 0:qi[o])==null?void 0:Si.total_price)==null?void 0:zi.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col items-center",children:l("p",{children:(Li=(Ti=(Ei=(Gi=i==null?void 0:i.multiDescription)==null?void 0:Gi[c])==null?void 0:Ei.child_description)==null?void 0:Ti[o])!=null&&Li.vat_per?((Ri=(Oi=(Ci=(ji=i==null?void 0:i.multiDescription)==null?void 0:ji[c])==null?void 0:Ci.child_description)==null?void 0:Oi[o])==null?void 0:Ri.vat_per)+" %":""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:(($i=(Vi=(Pi=(Ui=i==null?void 0:i.multiDescription)==null?void 0:Ui[c])==null?void 0:Pi.child_description)==null?void 0:Vi[o])==null?void 0:$i.vat_per)&&((Ii=(Bi=(Qi=(Mi=i==null?void 0:i.multiDescription)==null?void 0:Mi[c])==null?void 0:Qi.child_description)==null?void 0:Bi[o])==null?void 0:Ii.unit_price)?(Xi=(Wi=(Ki=(Ji=(Yi=i==null?void 0:i.multiDescription)==null?void 0:Yi[c])==null?void 0:Ji.child_description)==null?void 0:Ki[o])==null?void 0:Wi.vat_amount_aed)==null?void 0:Xi.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((Di=(ui=(Zi=(Hi=i==null?void 0:i.multiDescription)==null?void 0:Hi[c])==null?void 0:Zi.child_description)==null?void 0:ui[o])==null?void 0:Di.vat_per)&&((el=(cl=(ll=(il=i==null?void 0:i.multiDescription)==null?void 0:il[c])==null?void 0:ll.child_description)==null?void 0:cl[o])==null?void 0:el.unit_price)?(dl=(tl=(ml=(ol=(nl=i==null?void 0:i.multiDescription)==null?void 0:nl[c])==null?void 0:ol.child_description)==null?void 0:ml[o])==null?void 0:tl.total_amount_aed)==null?void 0:dl.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]},o+1)})})]},c+1)})}),e("div",{className:"w-[100%] flex item-center",children:[l("div",{className:"w-[35%] p-[10px] total-col",children:l("p",{className:"text-center",children:"T O T A L"})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.total_price?(s=i==null?void 0:i.total_price)==null?void 0:s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.vat_amount_aed?(h=i==null?void 0:i.vat_amount_aed)==null?void 0:h.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.total_amount_aed?(v=i==null?void 0:i.total_amount_aed)==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]})]}):null,(i==null?void 0:i.house_type)==="Outsource"?l(m,{children:e("div",{className:"flex mt-[25px] justify-between",children:[e("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.company?i==null?void 0:i.company:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.city?i==null?void 0:i.city:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.emirate?i==null?void 0:i.emirate:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.email?i==null?void 0:i.email:"Not Available"})})]}),e("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Invoice Attachment"}),l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(i==null?void 0:i.invoice_attachment)&&(i==null?void 0:i.invoice_attachment)!==""&&(i==null?void 0:i.invoice_attachment)!==void 0&&(i==null?void 0:i.invoice_attachment)!=="undefined"&&(i==null?void 0:i.invoice_attachment)!==null&&(i==null?void 0:i.invoice_attachment)!=="null"?l("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${i==null?void 0:i.invoice_attachment}`,children:decodeURIComponent(i==null?void 0:i.invoice_attachment).split("/").pop()}):l("p",{children:"Not Available"})})]})]}),e("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qoutation_date?new Date(i==null?void 0:i.qoutation_date).toDateString():"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.invoice_number?i==null?void 0:i.invoice_number:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qtn_number?i==null?void 0:i.qtn_number:"Not Available"})})]}),e("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.trn_number?i==null?void 0:i.trn_number:"Not Available"})})]}),e("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Quotation Attachment"}),l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(i==null?void 0:i.quotation_attachment)&&(i==null?void 0:i.quotation_attachment)!==""&&(i==null?void 0:i.quotation_attachment)!==void 0&&(i==null?void 0:i.quotation_attachment)!=="undefined"&&(i==null?void 0:i.quotation_attachment)!==null&&(i==null?void 0:i.quotation_attachment)!=="null"?l("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${i==null?void 0:i.quotation_attachment}`,children:decodeURIComponent(i==null?void 0:i.quotation_attachment).split("/").pop()}):l("p",{children:"Not Available"})})]})]})]})}):null]}),l("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative mt-[35px]",children:l("div",{className:"ltr:text-right rtl:text-left ",children:r!=null&&r.type?l(rl,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/owner-maintenancemanagement-invoices",children:"Cancel"}):l(rl,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/allmaintenancemanagement-invoices",children:"Cancel"})})})]})})})};export{gl as default};
