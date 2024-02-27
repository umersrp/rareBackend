import{bu as sl,r as p,j as l,F as m,c,f as hl,ak as vl,L as a}from"./index.87c66dcd.js";import"./jspdf.es.min.917e9e61.js";import"./html2canvas.esm.0eae2bf4.js";const gl=()=>{var h,v,N;const{id:d}=sl(),[i,s]=p.exports.useState(""),pl=localStorage.getItem("isAuth"),r=JSON.parse(pl);p.exports.useEffect(()=>{(async()=>{if(d){const n=await(await fetch(`http://portals.rarehomesgroup.com/maintenancemanagement/${d}`)).json();n&&s(n)}})()},[d]);const al=[{value:"In-house",label:"In-house"},{value:"Outsource",label:"Outsource"}];return p.exports.useEffect(()=>{(async()=>{if(i!=null&&i.propertyid){const n=await(await fetch(`http://portals.rarehomesgroup.com/property/${i==null?void 0:i.propertyid}`)).json();n&&s({...i,unitnumber:n==null?void 0:n.unitnumber,buildingname:n==null?void 0:n.building_name,projectname:n==null?void 0:n.project_name,communityname:n==null?void 0:n.community_name})}})()},[i==null?void 0:i.propertyid]),l(m,{children:l("div",{className:"xl:col-span-2 col-span-1",children:c(hl,{title:"View Maintenance Management Quotation",children:[c("div",{id:"content-to-print",className:"pdf-content",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),l(m,{children:i!=null&&i.propertyid?l(m,{children:l("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Unit number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Community Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Project Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.projectname?i==null?void 0:i.projectname:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Building Name"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.buildingname?i==null?void 0:i.buildingname:"Not Available"})})]})]})})}):null}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{className:"w-[100%] col-span-3 mt-[30px]",children:l("div",{className:"flex flex-wrap space-xy-5 w-[100%]",children:al.map(t=>l(vl,{label:t.label,name:"house",value:t.value,checked:(i==null?void 0:i.house_type)===t.value,readOnly:!0}))})}),(i==null?void 0:i.house_type)==="In-house"?c(m,{children:[c("div",{className:"flex mt-[25px] justify-between",children:[c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.company?i==null?void 0:i.company:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.city?i==null?void 0:i.city:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.emirate?i==null?void 0:i.emirate:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.email?i==null?void 0:i.email:"Not Available"})})]})]}),c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qoutation_date?new Date(i==null?void 0:i.qoutation_date).toDateString():"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.invoice_number?i==null?void 0:i.invoice_number:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qtn_number?i==null?void 0:i.qtn_number:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.trn_number?i==null?void 0:i.trn_number:"Not Available"})})]})]})]}),c("div",{className:"w-[100%] flex item-center mt-[40px]",children:[l("div",{className:"w-[35%] p-[10px] disc-heading",children:l("p",{children:"DESCRIPTION OF SERVICES / SCOPE OF WORK"})}),l("div",{className:"flex-1  p-[10px] border-left remaining-headings",children:l("p",{children:"QUANTITY"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"UNIT PRICE"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"TAXABLE VALUE AED"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"VAT %"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"VAT AMOUNT AED"})}),l("div",{className:"flex-1  p-[10px] remaining-headings",children:l("p",{children:"TOTAL IN AED"})})]}),(i==null?void 0:i.total_count)>0&&l(m,{children:Array.from({length:i==null?void 0:i.total_count},(t,e)=>{var n,f,b,_,g,x,y,A,k,w,F,q,S,z,G,E,T,L,j,C,O,R,U,P,$,V,M,Q,B,Y,I,J,K,W,X,H;return c("div",{children:[c("div",{className:"w-[100%] flex",children:[l("div",{className:"w-[35%] p-[10px] disc-col-first items-center flex",children:l("p",{children:(f=(n=i==null?void 0:i.multiDescription)==null?void 0:n[e])!=null&&f.description?(_=(b=i==null?void 0:i.multiDescription)==null?void 0:b[e])==null?void 0:_.description:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(x=(g=i==null?void 0:i.multiDescription)==null?void 0:g[e])!=null&&x.quantity?(A=(y=i==null?void 0:i.multiDescription)==null?void 0:y[e])==null?void 0:A.quantity:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(w=(k=i==null?void 0:i.multiDescription)==null?void 0:k[e])!=null&&w.unit_price?(q=(F=i==null?void 0:i.multiDescription)==null?void 0:F[e])==null?void 0:q.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:(z=(S=i==null?void 0:i.multiDescription)==null?void 0:S[e])!=null&&z.total_price?(E=(G=i==null?void 0:i.multiDescription)==null?void 0:G[e])==null?void 0:E.total_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col items-center",children:l("p",{children:(L=(T=i==null?void 0:i.multiDescription)==null?void 0:T[e])!=null&&L.vat_per?((C=(j=i==null?void 0:i.multiDescription)==null?void 0:j[e])==null?void 0:C.vat_per)+" %":""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((R=(O=i==null?void 0:i.multiDescription)==null?void 0:O[e])==null?void 0:R.vat_per)&&((P=(U=i==null?void 0:i.multiDescription)==null?void 0:U[e])==null?void 0:P.unit_price)?(V=($=i==null?void 0:i.multiDescription)==null?void 0:$[e])==null?void 0:V.vat_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((Q=(M=i==null?void 0:i.multiDescription)==null?void 0:M[e])==null?void 0:Q.vat_per)&&((Y=(B=i==null?void 0:i.multiDescription)==null?void 0:B[e])==null?void 0:Y.unit_price)?(J=(I=i==null?void 0:i.multiDescription)==null?void 0:I[e])==null?void 0:J.total_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]}),((W=(K=i==null?void 0:i.multiDescription)==null?void 0:K[e])==null?void 0:W.total_child_count)>0&&l(m,{children:Array.from({length:(H=(X=i==null?void 0:i.multiDescription)==null?void 0:X[e])==null?void 0:H.total_child_count},(Nl,o)=>{var Z,u,D,ii,li,ci,ei,ni,oi,mi,ti,di,ri,pi,ai,si,hi,vi,Ni,fi,bi,_i,gi,xi,yi,Ai,ki,wi,Fi,qi,Si,zi,Gi,Ei,Ti,Li,ji,Ci,Oi,Ri,Ui,Pi,$i,Vi,Mi,Qi,Bi,Yi,Ii,Ji,Ki,Wi,Xi,Hi,Zi,ui,Di,il,ll,cl,el,nl,ol,ml,tl,dl,rl;return c("div",{className:"w-[100%] flex",children:[l("div",{className:"w-[35%] p-[10px] disc-col-first flex items-center",children:l("p",{children:(ii=(D=(u=(Z=i==null?void 0:i.multiDescription)==null?void 0:Z[e])==null?void 0:u.child_description)==null?void 0:D[o])!=null&&ii.description?"- "+((ni=(ei=(ci=(li=i==null?void 0:i.multiDescription)==null?void 0:li[e])==null?void 0:ci.child_description)==null?void 0:ei[o])==null?void 0:ni.description):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(di=(ti=(mi=(oi=i==null?void 0:i.multiDescription)==null?void 0:oi[e])==null?void 0:mi.child_description)==null?void 0:ti[o])!=null&&di.quantity?(si=(ai=(pi=(ri=i==null?void 0:i.multiDescription)==null?void 0:ri[e])==null?void 0:pi.child_description)==null?void 0:ai[o])==null?void 0:si.quantity:""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:(fi=(Ni=(vi=(hi=i==null?void 0:i.multiDescription)==null?void 0:hi[e])==null?void 0:vi.child_description)==null?void 0:Ni[o])!=null&&fi.unit_price?(xi=(gi=(_i=(bi=i==null?void 0:i.multiDescription)==null?void 0:bi[e])==null?void 0:_i.child_description)==null?void 0:gi[o])==null?void 0:xi.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:(wi=(ki=(Ai=(yi=i==null?void 0:i.multiDescription)==null?void 0:yi[e])==null?void 0:Ai.child_description)==null?void 0:ki[o])!=null&&wi.total_price?(Gi=(zi=(Si=(qi=(Fi=i==null?void 0:i.multiDescription)==null?void 0:Fi[e])==null?void 0:qi.child_description)==null?void 0:Si[o])==null?void 0:zi.total_price)==null?void 0:Gi.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col items-center",children:l("p",{children:(ji=(Li=(Ti=(Ei=i==null?void 0:i.multiDescription)==null?void 0:Ei[e])==null?void 0:Ti.child_description)==null?void 0:Li[o])!=null&&ji.vat_per?((Ui=(Ri=(Oi=(Ci=i==null?void 0:i.multiDescription)==null?void 0:Ci[e])==null?void 0:Oi.child_description)==null?void 0:Ri[o])==null?void 0:Ui.vat_per)+" %":""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((Mi=(Vi=($i=(Pi=i==null?void 0:i.multiDescription)==null?void 0:Pi[e])==null?void 0:$i.child_description)==null?void 0:Vi[o])==null?void 0:Mi.vat_per)&&((Ii=(Yi=(Bi=(Qi=i==null?void 0:i.multiDescription)==null?void 0:Qi[e])==null?void 0:Bi.child_description)==null?void 0:Yi[o])==null?void 0:Ii.unit_price)?(Hi=(Xi=(Wi=(Ki=(Ji=i==null?void 0:i.multiDescription)==null?void 0:Ji[e])==null?void 0:Ki.child_description)==null?void 0:Wi[o])==null?void 0:Xi.vat_amount_aed)==null?void 0:Hi.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:l("p",{children:((il=(Di=(ui=(Zi=i==null?void 0:i.multiDescription)==null?void 0:Zi[e])==null?void 0:ui.child_description)==null?void 0:Di[o])==null?void 0:il.vat_per)&&((nl=(el=(cl=(ll=i==null?void 0:i.multiDescription)==null?void 0:ll[e])==null?void 0:cl.child_description)==null?void 0:el[o])==null?void 0:nl.unit_price)?(rl=(dl=(tl=(ml=(ol=i==null?void 0:i.multiDescription)==null?void 0:ol[e])==null?void 0:ml.child_description)==null?void 0:tl[o])==null?void 0:dl.total_amount_aed)==null?void 0:rl.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]},o+1)})})]},e+1)})}),c("div",{className:"w-[100%] flex item-center",children:[l("div",{className:"w-[35%] p-[10px] total-col",children:l("p",{className:"text-center",children:"T O T A L"})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.total_price?(h=i==null?void 0:i.total_price)==null?void 0:h.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.vat_amount_aed?(v=i==null?void 0:i.vat_amount_aed)==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})}),l("div",{className:"flex-1  p-[10px] disc-col",children:l("p",{children:i!=null&&i.total_amount_aed?(N=i==null?void 0:i.total_amount_aed)==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""})})]})]}):null,(i==null?void 0:i.house_type)==="Outsource"?l(m,{children:c("div",{className:"flex mt-[25px] justify-between",children:[c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.company?i==null?void 0:i.company:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.city?i==null?void 0:i.city:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.emirate?i==null?void 0:i.emirate:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.email?i==null?void 0:i.email:"Not Available"})})]}),c("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Invoice Attachment"}),l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(i==null?void 0:i.invoice_attachment)&&(i==null?void 0:i.invoice_attachment)!==""&&(i==null?void 0:i.invoice_attachment)!==void 0&&(i==null?void 0:i.invoice_attachment)!=="undefined"&&(i==null?void 0:i.invoice_attachment)!==null&&(i==null?void 0:i.invoice_attachment)!=="null"?l("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${i==null?void 0:i.invoice_attachment}`,children:decodeURIComponent(i==null?void 0:i.invoice_attachment).split("/").pop()}):l("p",{children:"Not Available"})})]})]}),c("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qoutation_date?new Date(i==null?void 0:i.qoutation_date).toDateString():"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.invoice_number?i==null?void 0:i.invoice_number:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.qtn_number?i==null?void 0:i.qtn_number:"Not Available"})})]}),c("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:i!=null&&i.trn_number?i==null?void 0:i.trn_number:"Not Available"})})]}),c("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Quotation Attachment"}),l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(i==null?void 0:i.quotation_attachment)&&(i==null?void 0:i.quotation_attachment)!==""&&(i==null?void 0:i.quotation_attachment)!==void 0&&(i==null?void 0:i.quotation_attachment)!=="undefined"&&(i==null?void 0:i.quotation_attachment)!==null&&(i==null?void 0:i.quotation_attachment)!=="null"?l("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${i==null?void 0:i.quotation_attachment}`,children:decodeURIComponent(i==null?void 0:i.quotation_attachment).split("/").pop()}):l("p",{children:"Not Available"})})]})]})]})}):null]}),c("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative mt-[35px]",children:[l("div",{className:"ltr:text-right rtl:text-left ",children:r!=null&&r.type?l(a,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/owner-maintenancemanagement",children:"Cancel"}):l(a,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/allmaintenancemanagement",children:"Cancel"})}),l("div",{className:"ltr:text-right rtl:text-left",children:l(a,{to:`/maintenancemanagementform/${d}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})})]})]})})})};export{gl as default};
