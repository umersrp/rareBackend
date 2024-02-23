import{bu as _e,ca as Ie,c as t,F as We,j as n,bN as Ee,C as qe,I as p,L as Re,r as Ge,b$ as f}from"./index.33fc8c4f.js";import{P as Be}from"./pdf-icon.2fc2c516.js";const c=({data:l,label:e})=>{const[h,i]=Ge.exports.useState(!1),s=(a,m)=>{f.exports.saveAs(a,m)},d=()=>{i(!0)},N=()=>{i(!1)};return t("div",{className:"thumbnail-container",children:[n("label",{htmlFor:"default-picker",className:"form-label",children:e}),n("div",{className:"thumbnail-wrapper",children:l&&l!==void 0&&l!=="undefined"?t("div",{className:`thumbnail ${l.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[l.toLowerCase().endsWith(".pdf")?n("img",{src:Be,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):n("img",{src:`http://portals.rarehomesgroup.com${l}`,alt:"Tenancy Contract"}),n("div",{className:"thumbnail-buttons",children:t("div",{className:"flex items-center justify-center gap-x-[10px]",children:[n("button",{onClick:()=>s(`http://portals.rarehomesgroup.com${l}`,`${decodeURIComponent(l).split("/").pop()}`),className:"btn-download",children:n(p,{icon:"heroicons-outline:arrow-down-tray"})}),l.toLowerCase().endsWith(".pdf")?n("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${l}`,className:"btn-view text-white",children:n(p,{icon:"heroicons-outline:eye"})}):n("button",{onClick:d,className:"btn-view",children:n(p,{icon:"heroicons-outline:eye"})})]})})]}):n("p",{className:"form-control py-2",children:"Not Available"})}),h&&n("div",{className:"modal-overlay",children:t("div",{className:"modal",children:[n("img",{src:`http://portals.rarehomesgroup.com${l}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),t("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[n("button",{onClick:()=>s(`http://portals.rarehomesgroup.com${l}`,`${decodeURIComponent(l).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),n("button",{onClick:N,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},Je=()=>{var a,m,b,v,C,g,y,w,F,A,x,k,D,L,$,P,j,T,S,_,I,W,E,q,R,G,B,O,U,J,M,Q,V,z,H,K,Y,X,Z,ee,ne,te,oe,re,le,ce,ie,se,ae,me,pe,he,de,ue,fe,Ne,be,ve,Ce,ge,ye,we,Fe,Ae,xe,ke,De,Le,$e,Pe,je,Te,Se;const{id:l}=_e(),{data:e,error:h,isLoading:i,isFetching:s,isSuccess:d}=Ie(l);return t(We,{children:[i&&s&&n(Ee,{}),h&&n("p",{children:"Something went wrong"}),d&&e&&n("div",{className:" space-y-5",children:n("div",{children:n("div",{children:t(qe,{children:[t("div",{className:"flex justify-between items-center mb-6",children:[n("h4",{className:"card-title",children:"All Tenant Contract"}),t("button",{onClick:()=>{var r;for(const o in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[o])=="string"&&((e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".png")))){const u=e==null?void 0:e.tenantContract[o].split("/").pop();f.exports.saveAs(`http://portals.rarehomesgroup.com${e==null?void 0:e.tenantContract[o]}`,u)}for(const o of((r=e==null?void 0:e.tenantContract)==null?void 0:r.chequeDetails)||[])if(typeof(o==null?void 0:o.chequeimage)=="string"&&((o==null?void 0:o.chequeimage.toLowerCase().endsWith(".pdf"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpeg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".png")))){const u=o==null?void 0:o.chequeimage.split("/").pop();f.exports.saveAs(`http://portals.rarehomesgroup.com${o==null?void 0:o.chequeimage}`,u)}},className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[n(p,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"}),"Download All Files"]})]}),n("div",{className:"w-[100%] col-span-3  mt-[15px]",children:n("div",{className:"borderBottom"})}),n("div",{children:n("div",{className:"flex z-[5] items-start relative justify-center",children:t("div",{className:"conten-box w-[100%]",children:[t("div",{children:[n("h4",{className:"text-[20px] mt-[25px]",children:"PROPERTY DETAILS"}),t("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"}),n("p",{className:"  form-control py-2   ",children:(a=e==null?void 0:e.property)!=null&&a.unitnumber?(m=e==null?void 0:e.property)==null?void 0:m.unitnumber:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),n("p",{className:"  form-control py-2   ",children:(b=e==null?void 0:e.property)!=null&&b.community_name?(v=e==null?void 0:e.property)==null?void 0:v.community_name:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),n("p",{className:"  form-control py-2   ",children:(C=e==null?void 0:e.property)!=null&&C.project_name?(g=e==null?void 0:e.property)==null?void 0:g.project_name:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),n("p",{className:"  form-control py-2   ",children:(y=e==null?void 0:e.property)!=null&&y.building_name?(w=e==null?void 0:e.property)==null?void 0:w.building_name:"Not Available"})]})]}),n("div",{className:"w-[100%] col-span-3  mt-[15px]",children:n("div",{className:"borderBottom"})}),n("h4",{className:"text-[20px] mt-[25px]",children:"TENANT DETAILS"}),t("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),n("p",{className:"  form-control py-2   ",children:(F=e==null?void 0:e.tenantContract)!=null&&F.customerid?((A=e==null?void 0:e.owner)==null?void 0:A.firstname)+" "+((x=e==null?void 0:e.owner)==null?void 0:x.lastname):(k=e==null?void 0:e.tenantContract)==null?void 0:k.guestname})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Email"}),n("p",{className:"  form-control py-2   ",children:(D=e==null?void 0:e.tenantContract)!=null&&D.customerid?(L=e==null?void 0:e.owner)==null?void 0:L.email:($=e==null?void 0:e.tenantContract)==null?void 0:$.email})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Contact Number"}),n("p",{className:"  form-control py-2   ",children:(P=e==null?void 0:e.tenantContract)!=null&&P.customerid?(j=e==null?void 0:e.owner)!=null&&j.whatsappno?(T=e==null?void 0:e.owner)==null?void 0:T.whatsappno:"Not Available":(S=e==null?void 0:e.tenantContract)!=null&&S.mobilenumber?(_=e==null?void 0:e.tenantContract)==null?void 0:_.mobilenumber:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"}),n("p",{className:"  form-control py-2   ",children:(I=e==null?void 0:e.tenantContract)!=null&&I.customerid?(W=e==null?void 0:e.owner)!=null&&W.passportidno?(E=e==null?void 0:e.owner)==null?void 0:E.passportidno:"Not Available":(q=e==null?void 0:e.tenantContract)!=null&&q.passportnumber?(R=e==null?void 0:e.tenantContract)==null?void 0:R.passportnumber:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"nationality"}),n("p",{className:"  form-control py-2   ",children:(G=e==null?void 0:e.tenantContract)!=null&&G.customerid?(B=e==null?void 0:e.owner)!=null&&B.passportno?(O=e==null?void 0:e.owner)==null?void 0:O.passportno:"Not Available":(U=e==null?void 0:e.tenantContract)!=null&&U.nationality?(J=e==null?void 0:e.tenantContract)==null?void 0:J.nationality:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"passport PDF"}),(M=e==null?void 0:e.tenantContract)!=null&&M.customerid?((Q=e==null?void 0:e.owner)==null?void 0:Q.passportpdf)&&((V=e==null?void 0:e.owner)==null?void 0:V.passportpdf)!==void 0&&((z=e==null?void 0:e.owner)==null?void 0:z.passportpdf)!=="undefined"?n("a",{className:"  form-control py-2   ",target:"_blank",href:`http://portals.rarehomesgroup.com${(H=e==null?void 0:e.owner)==null?void 0:H.passportpdf}`,children:(K=e==null?void 0:e.owner)!=null&&K.passportpdf?decodeURIComponent((Y=e==null?void 0:e.owner)==null?void 0:Y.passportpdf).split("/").pop():"Not Available"}):n("p",{className:"  form-control py-2   ",children:"Not Available"}):((X=e==null?void 0:e.tenantContract)==null?void 0:X.passportpdf)&&((Z=e==null?void 0:e.tenantContract)==null?void 0:Z.passportpdf)!==void 0&&((ee=e==null?void 0:e.tenantContract)==null?void 0:ee.passportpdf)!=="undefined"?n("a",{className:"  form-control py-2   ",target:"_blank",href:`http://portals.rarehomesgroup.com${(ne=e==null?void 0:e.tenantContract)==null?void 0:ne.passportpdf}`,children:(te=e==null?void 0:e.tenantContract)!=null&&te.passportpdf?decodeURIComponent((oe=e==null?void 0:e.tenantContract)==null?void 0:oe.passportpdf).split("/").pop():"Not Available"}):n("p",{className:"  form-control py-2   ",children:"Not Available"})]})]}),n("div",{className:"w-[100%] col-span-3  mt-[15px]",children:n("div",{className:"borderBottom"})}),n("h4",{className:"text-[20px] mt-[25px]",children:"CONTRACT DETAILS"}),t("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"}),n("p",{className:"  form-control py-2   ",children:((re=e==null?void 0:e.tenantContract)==null?void 0:re.contractstartdate)&&((le=e==null?void 0:e.tenantContract)==null?void 0:le.contractstartdate)!==void 0&&((ce=e==null?void 0:e.tenantContract)==null?void 0:ce.contractstartdate)!=="undefined"?new Date((ie=e==null?void 0:e.tenantContract)==null?void 0:ie.contractstartdate).toDateString():"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"}),n("p",{className:"  form-control py-2   ",children:((se=e==null?void 0:e.tenantContract)==null?void 0:se.contractenddate)&&((ae=e==null?void 0:e.tenantContract)==null?void 0:ae.contractenddate)!==void 0&&((me=e==null?void 0:e.tenantContract)==null?void 0:me.contractenddate)!=="undefined"?new Date((pe=e==null?void 0:e.tenantContract)==null?void 0:pe.contractenddate).toDateString():"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"contract execution date"}),n("p",{className:"  form-control py-2   ",children:((he=e==null?void 0:e.tenantContract)==null?void 0:he.contractexecutiondate)&&((de=e==null?void 0:e.tenantContract)==null?void 0:de.contractexecutiondate)!==void 0&&((ue=e==null?void 0:e.tenantContract)==null?void 0:ue.contractexecutiondate)!=="undefined"?new Date((fe=e==null?void 0:e.tenantContract)==null?void 0:fe.contractexecutiondate).toDateString():"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Rental Amount"}),n("p",{className:"  form-control py-2   ",children:((Ne=e==null?void 0:e.tenantContract)==null?void 0:Ne.rentalamount)&&((be=e==null?void 0:e.tenantContract)==null?void 0:be.rentalamount)!==void 0&&((ve=e==null?void 0:e.tenantContract)==null?void 0:ve.rentalamount)!=="undefined"?parseFloat((Ce=e==null?void 0:e.tenantContract)==null?void 0:Ce.rentalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"}),n("p",{className:"  form-control py-2   ",children:((ge=e==null?void 0:e.tenantContract)==null?void 0:ge.securitydepositamount)&&((ye=e==null?void 0:e.tenantContract)==null?void 0:ye.securitydepositamount)!==void 0&&((we=e==null?void 0:e.tenantContract)==null?void 0:we.securitydepositamount)!=="undefined"?parseFloat((Fe=e==null?void 0:e.tenantContract)==null?void 0:Fe.securitydepositamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),n("div",{children:n(c,{data:(Ae=e==null?void 0:e.tenantContract)==null?void 0:Ae.ejari_certificate_doc,label:"Ejari Certificate PDF/PNG/JPG"})}),n("div",{children:n(c,{data:(xe=e==null?void 0:e.tenantContract)==null?void 0:xe.tenancy_contract_doc,label:"Tenancy Contract PDF/PNG/JPG"})}),n("div",{children:n(c,{data:(ke=e==null?void 0:e.tenantContract)==null?void 0:ke.addendum_doc,label:"Addendum PDF/PNG/JPG"})}),n("div",{children:n(c,{data:(De=e==null?void 0:e.tenantContract)==null?void 0:De.key_receipt_doc,label:"Key Receipt PDF/PNG/JPG"})}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"No Of Cheque Or Installment"}),n("p",{className:"  form-control py-2   ",children:((Le=e==null?void 0:e.tenantContract)==null?void 0:Le.noofchequeorinstallment)&&(($e=e==null?void 0:e.tenantContract)==null?void 0:$e.noofchequeorinstallment)!==void 0&&((Pe=e==null?void 0:e.tenantContract)==null?void 0:Pe.noofchequeorinstallment)!=="undefined"?(je=e==null?void 0:e.tenantContract)==null?void 0:je.noofchequeorinstallment:"Not Available"})]})]}),(Se=(Te=e==null?void 0:e.tenantContract)==null?void 0:Te.chequeDetails)==null?void 0:Se.map((r,o)=>t("div",{children:[n("div",{className:"w-[100%] col-span-3  mt-[15px]",children:n("div",{className:"borderBottom"})}),t("h4",{className:"text-[20px] mt-[25px]",children:["CHEQUE NO.",o+1," DETAILS"]}),t("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[30px]",children:[t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"cheque number"}),n("p",{className:"  form-control py-2   ",children:r!=null&&r.chequenumbe?r==null?void 0:r.chequenumbe:"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"cheque date"}),n("p",{className:"  form-control py-2   ",children:r!=null&&r.chequedate?new Date(r==null?void 0:r.chequedate).toDateString():"Not Available"})]}),t("div",{children:[n("label",{htmlFor:"default-picker",className:" form-label",children:"total amount"}),n("p",{className:"  form-control py-2   ",children:r!=null&&r.totalamount?parseFloat(r==null?void 0:r.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),n("div",{children:n(c,{data:r==null?void 0:r.chequeimage,label:"cheque image"})})]})]},o+1))]}),n("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:n(Re,{to:"/owner-tenant-contracts",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"})})]})})})]})})})})]})};export{Je as default};
