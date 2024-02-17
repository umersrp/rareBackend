import{bu as at,ca as it,bL as mt,r as c,c as n,F as D,j as t,bN as pt,bM as ht,C as dt,I as d,L as k,b$ as F,K as ut}from"./index.75075c2e.js";import{P as ft}from"./pdf-icon.2fc2c516.js";const a=({data:l,label:e})=>{const[u,i]=c.exports.useState(!1),m=(b,s)=>{F.exports.saveAs(b,s)},f=()=>{i(!0)},N=()=>{i(!1)};return n("div",{className:"thumbnail-container",children:[t("label",{htmlFor:"default-picker",className:"form-label",children:e}),t("div",{className:"thumbnail-wrapper",children:l&&l!==void 0&&l!=="undefined"?n("div",{className:`thumbnail ${l.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[l.toLowerCase().endsWith(".pdf")?t("img",{src:ft,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):t("img",{src:`http://dev-rare.srp.ai${l}`,alt:"Tenancy Contract"}),t("div",{className:"thumbnail-buttons",children:n("div",{className:"flex items-center justify-center gap-x-[10px]",children:[t("button",{onClick:()=>m(`http://dev-rare.srp.ai${l}`,`${decodeURIComponent(l).split("/").pop()}`),className:"btn-download",children:t(d,{icon:"heroicons-outline:arrow-down-tray"})}),l.toLowerCase().endsWith(".pdf")?t("a",{target:"_blank",href:`http://dev-rare.srp.ai${l}`,className:"btn-view text-white",children:t(d,{icon:"heroicons-outline:eye"})}):t("button",{onClick:f,className:"btn-view",children:t(d,{icon:"heroicons-outline:eye"})})]})})]}):t("p",{className:"form-control py-2",children:"Not Available"})}),u&&t("div",{className:"modal-overlay",children:n("div",{className:"modal",children:[t("img",{src:`http://dev-rare.srp.ai${l}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),n("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[t("button",{onClick:()=>m(`http://dev-rare.srp.ai${l}`,`${decodeURIComponent(l).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),t("button",{onClick:N,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},gt=()=>{var L,$,P,T,j,I,_,E,W,q,B,G,M,U,R,O,J,V,H,Q,z,K,Y,X,Z,ee,te,ne,re,oe,le,ce,se,ae,ie,me,pe,he,de,ue,fe,Ne,be,ve,Ce,ge,ye,we,xe,De,ke,Fe,Ae,Se,Le,$e,Pe,Te,je,Ie,_e,Ee,We,qe,Be,Ge,Me,Ue,Re,Oe,Je,Ve,He,Qe;const{id:l}=at(),{data:e,error:u,isLoading:i,isFetching:m,isSuccess:f,refetch:N}=it(l),b=localStorage.getItem("isAuth"),s=JSON.parse(b),{data:v}=mt(s==null?void 0:s.roleid),[C,p]=c.exports.useState(!1),h=new URLSearchParams(window.location.search),g=h.get("delete"),[ze,y]=c.exports.useState(!1),[Ke,Ye]=c.exports.useState(""),[Xe,Nt]=c.exports.useState(""),[Ze,bt]=c.exports.useState(!1),[w,A]=c.exports.useState(!1),[et,S]=c.exports.useState(!1),[tt,nt]=c.exports.useState(!1),rt=()=>{var o;for(const r in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[r])=="string"&&((e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".png")))){const x=e==null?void 0:e.tenantContract[r].split("/").pop();F.exports.saveAs(`http://dev-rare.srp.ai${e==null?void 0:e.tenantContract[r]}`,x)}for(const r of((o=e==null?void 0:e.tenantContract)==null?void 0:o.chequeDetails)||[])if(typeof(r==null?void 0:r.chequeimage)=="string"&&((r==null?void 0:r.chequeimage.toLowerCase().toLowerCase().endsWith(".pdf"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".jpg"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".jpeg"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".png")))){const x=r==null?void 0:r.chequeimage.split("/").pop();F.exports.saveAs(`http://dev-rare.srp.ai${r==null?void 0:r.chequeimage}`,x)}};c.exports.useEffect(()=>{var o,r;g==="true"&&h&&((o=e==null?void 0:e.tenantContract)==null?void 0:o.softdelete)===!1?p(!0):g==="true"&&h&&((r=e==null?void 0:e.tenantContract)==null?void 0:r.softdelete)===!0&&(A(!0),p(!1))},[g,h,(L=e==null?void 0:e.tenantContract)==null?void 0:L.softdelete]);const ot=async o=>{y(!0),Ye(o)},lt=()=>{y(!1)},ct=async()=>{try{await ut.patch("http://dev-rare.srp.ai/tenantcontract/api/tenantcontractdelete",{_id:l,softdelete:!0}),p(!1),st()}catch(o){console.log(o,"error")}},st=async()=>{try{await N(),S(!0),A(!0),p(!1),y(!1)}catch{nt(!0)}S(!1)};return n(D,{children:[(i||m&&et)&&t(pt,{}),u||tt&&t("p",{children:"Something went wrong"}),f&&e&&n("div",{className:" space-y-5",children:[t(ht,{showModal:ze,handleClose:lt,loaderModal:Ze,linkedData:Xe,handleDeleteData:ct,dataId:Ke,moduleName:"Tenant Contract"}),t("div",{children:t("div",{children:n(dt,{children:[n("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"View Tenant Contract"}),C===!1&&w===!1?n("button",{onClick:rt,className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[t(d,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"}),"Download All Files"]}):null,C===!0?t("button",{onClick:()=>ot(l),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Tenant Contract"}):null,w===!0?t("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Tenant Contract is deleted"}):null]}),t("div",{className:"w-[100%] col-span-3  mt-[15px]",children:t("div",{className:"borderBottom"})}),t("div",{children:t("div",{className:"flex z-[5] items-start relative justify-center",children:n("div",{className:"conten-box w-[100%]",children:[n("div",{children:[t("h4",{className:"text-[20px] mt-[25px]",children:"PROPERTY DETAILS"}),n("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"}),t("p",{className:"  form-control py-2   ",children:($=e==null?void 0:e.property)!=null&&$.unitnumber?(P=e==null?void 0:e.property)==null?void 0:P.unitnumber:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),t("p",{className:"  form-control py-2   ",children:(T=e==null?void 0:e.property)!=null&&T.community_name?(j=e==null?void 0:e.property)==null?void 0:j.community_name:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),t("p",{className:"  form-control py-2   ",children:(I=e==null?void 0:e.property)!=null&&I.project_name?(_=e==null?void 0:e.property)==null?void 0:_.project_name:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),t("p",{className:"  form-control py-2   ",children:(E=e==null?void 0:e.property)!=null&&E.building_name?(W=e==null?void 0:e.property)==null?void 0:W.building_name:"Not Available"})]})]}),t("div",{className:"w-[100%] col-span-3  mt-[15px]",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-[20px] mt-[25px]",children:"TENANT DETAILS"}),n("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),t("p",{className:"  form-control py-2   ",children:(q=e==null?void 0:e.tenantContract)!=null&&q.customerid?((B=e==null?void 0:e.owner)==null?void 0:B.firstname)+" "+((G=e==null?void 0:e.owner)==null?void 0:G.lastname):(M=e==null?void 0:e.tenantContract)==null?void 0:M.guestname})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Email"}),t("p",{className:"  form-control py-2   ",children:(U=e==null?void 0:e.tenantContract)!=null&&U.customerid?(R=e==null?void 0:e.owner)==null?void 0:R.email:(O=e==null?void 0:e.tenantContract)==null?void 0:O.email})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Contact Number"}),t("p",{className:"  form-control py-2   ",children:(J=e==null?void 0:e.tenantContract)!=null&&J.customerid?(V=e==null?void 0:e.owner)!=null&&V.whatsappno?(H=e==null?void 0:e.owner)==null?void 0:H.whatsappno:"Not Available":(Q=e==null?void 0:e.tenantContract)!=null&&Q.mobilenumber?(z=e==null?void 0:e.tenantContract)==null?void 0:z.mobilenumber:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"}),t("p",{className:"  form-control py-2   ",children:(K=e==null?void 0:e.tenantContract)!=null&&K.customerid?(Y=e==null?void 0:e.owner)!=null&&Y.passportidno?(X=e==null?void 0:e.owner)==null?void 0:X.passportidno:"Not Available":(Z=e==null?void 0:e.tenantContract)!=null&&Z.passportnumber?(ee=e==null?void 0:e.tenantContract)==null?void 0:ee.passportnumber:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"nationality"}),t("p",{className:"  form-control py-2   ",children:(te=e==null?void 0:e.tenantContract)!=null&&te.customerid?(ne=e==null?void 0:e.owner)!=null&&ne.passportno?(re=e==null?void 0:e.owner)==null?void 0:re.passportno:"Not Available":(oe=e==null?void 0:e.tenantContract)!=null&&oe.nationality?(le=e==null?void 0:e.tenantContract)==null?void 0:le.nationality:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"passport PDF"}),(ce=e==null?void 0:e.tenantContract)!=null&&ce.customerid?((se=e==null?void 0:e.owner)==null?void 0:se.passportpdf)&&((ae=e==null?void 0:e.owner)==null?void 0:ae.passportpdf)!==void 0&&((ie=e==null?void 0:e.owner)==null?void 0:ie.passportpdf)!=="undefined"?t("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(me=e==null?void 0:e.owner)==null?void 0:me.passportpdf}`,children:(pe=e==null?void 0:e.owner)!=null&&pe.passportpdf?decodeURIComponent((he=e==null?void 0:e.owner)==null?void 0:he.passportpdf).split("/").pop():"Not Available"}):t("p",{className:"  form-control py-2   ",children:"Not Available"}):((de=e==null?void 0:e.tenantContract)==null?void 0:de.passportpdf)&&((ue=e==null?void 0:e.tenantContract)==null?void 0:ue.passportpdf)!==void 0&&((fe=e==null?void 0:e.tenantContract)==null?void 0:fe.passportpdf)!=="undefined"?t("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(Ne=e==null?void 0:e.tenantContract)==null?void 0:Ne.passportpdf}`,children:(be=e==null?void 0:e.tenantContract)!=null&&be.passportpdf?decodeURIComponent((ve=e==null?void 0:e.tenantContract)==null?void 0:ve.passportpdf).split("/").pop():"Not Available"}):t("p",{className:"  form-control py-2   ",children:"Not Available"})]})]}),t("div",{className:"w-[100%] col-span-3  mt-[15px]",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-[20px] mt-[25px]",children:"CONTRACT DETAILS"}),n("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract execution date"}),t("p",{className:"  form-control py-2   ",children:((Ce=e==null?void 0:e.tenantContract)==null?void 0:Ce.contractexecutiondate)&&((ge=e==null?void 0:e.tenantContract)==null?void 0:ge.contractexecutiondate)!==void 0&&((ye=e==null?void 0:e.tenantContract)==null?void 0:ye.contractexecutiondate)!=="undefined"?new Date((we=e==null?void 0:e.tenantContract)==null?void 0:we.contractexecutiondate).toDateString():"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"}),t("p",{className:"  form-control py-2   ",children:((xe=e==null?void 0:e.tenantContract)==null?void 0:xe.contractstartdate)&&((De=e==null?void 0:e.tenantContract)==null?void 0:De.contractstartdate)!==void 0&&((ke=e==null?void 0:e.tenantContract)==null?void 0:ke.contractstartdate)!=="undefined"?new Date((Fe=e==null?void 0:e.tenantContract)==null?void 0:Fe.contractstartdate).toDateString():"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"}),t("p",{className:"  form-control py-2   ",children:((Ae=e==null?void 0:e.tenantContract)==null?void 0:Ae.contractenddate)&&((Se=e==null?void 0:e.tenantContract)==null?void 0:Se.contractenddate)!==void 0&&((Le=e==null?void 0:e.tenantContract)==null?void 0:Le.contractenddate)!=="undefined"?new Date(($e=e==null?void 0:e.tenantContract)==null?void 0:$e.contractenddate).toDateString():"Not Available"})]}),t(D,{}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Rental Amount"}),t("p",{className:"  form-control py-2   ",children:((Pe=e==null?void 0:e.tenantContract)==null?void 0:Pe.rentalamount)&&((Te=e==null?void 0:e.tenantContract)==null?void 0:Te.rentalamount)!==void 0&&((je=e==null?void 0:e.tenantContract)==null?void 0:je.rentalamount)!=="undefined"?parseFloat((Ie=e==null?void 0:e.tenantContract)==null?void 0:Ie.rentalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"}),t("p",{className:"  form-control py-2   ",children:((_e=e==null?void 0:e.tenantContract)==null?void 0:_e.securitydepositamount)&&((Ee=e==null?void 0:e.tenantContract)==null?void 0:Ee.securitydepositamount)!==void 0&&((We=e==null?void 0:e.tenantContract)==null?void 0:We.securitydepositamount)!=="undefined"?parseFloat((qe=e==null?void 0:e.tenantContract)==null?void 0:qe.securitydepositamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),t("div",{children:t(a,{data:(Be=e==null?void 0:e.tenantContract)==null?void 0:Be.ejari_certificate_doc,label:"Ejari Certificate PDF/PNG/JPG"})}),t("div",{children:t(a,{data:(Ge=e==null?void 0:e.tenantContract)==null?void 0:Ge.tenancy_contract_doc,label:"Tenancy Contract PDF/PNG/JPG"})}),t("div",{children:t(a,{data:(Me=e==null?void 0:e.tenantContract)==null?void 0:Me.addendum_doc,label:"Addendum PDF/PNG/JPG"})}),t("div",{children:t(a,{data:(Ue=e==null?void 0:e.tenantContract)==null?void 0:Ue.key_receipt_doc,label:"Key Receipt PDF/PNG/JPG"})}),t(D,{}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"No Of Cheque Or Installment"}),t("p",{className:"  form-control py-2   ",children:((Re=e==null?void 0:e.tenantContract)==null?void 0:Re.noofchequeorinstallment)&&((Oe=e==null?void 0:e.tenantContract)==null?void 0:Oe.noofchequeorinstallment)!==void 0&&((Je=e==null?void 0:e.tenantContract)==null?void 0:Je.noofchequeorinstallment)!=="undefined"?(Ve=e==null?void 0:e.tenantContract)==null?void 0:Ve.noofchequeorinstallment:"Not Available"})]})]}),(Qe=(He=e==null?void 0:e.tenantContract)==null?void 0:He.chequeDetails)==null?void 0:Qe.map((o,r)=>n("div",{children:[t("div",{className:"w-[100%] col-span-3  mt-[15px]",children:t("div",{className:"borderBottom"})}),n("h4",{className:"text-[20px] mt-[25px]",children:["CHEQUE NO.",r+1," DETAILS"]}),n("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[30px]",children:[n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"cheque number"}),t("p",{className:"  form-control py-2   ",children:o!=null&&o.chequenumbe?o==null?void 0:o.chequenumbe:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"cheque date"}),t("p",{className:"  form-control py-2   ",children:o!=null&&o.chequedate?new Date(o==null?void 0:o.chequedate).toDateString():"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"total amount"}),t("p",{className:"  form-control py-2   ",children:o!=null&&o.totalamount?parseFloat(o==null?void 0:o.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})]}),t("div",{children:t(a,{data:o==null?void 0:o.chequeimage,label:"cheque image"})})]})]},r+1))]}),C===!1&&w===!1?n("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[s!=null&&s.type?t(k,{to:"/owner-tenant-contracts",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}):t(k,{to:"/all-tenantcontract",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(v==null?void 0:v.updatetenant)===!0&&t(k,{to:`/update-tenantcontract/${l}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})]})};export{gt as default};
