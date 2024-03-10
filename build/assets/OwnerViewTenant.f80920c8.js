import{bt as Se,cd as Ee,j as l,F as Ie,bN as We,e as Re,I as N,L as qe,r as Oe,b$ as v}from"./index.b6c9722e.js";import{P as Ge}from"./pdf-icon.2fc2c516.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\tenancy-contract\\OwnerViewTenant.jsx";const m=({data:r,label:e})=>{const[s,t]=Oe.exports.useState(!1),c=(a,u)=>{v.exports.saveAs(a,u)},d=()=>{t(!0)},f=()=>{t(!1)};return l("div",{className:"thumbnail-container",children:[l("label",{htmlFor:"default-picker",className:"form-label",children:e},void 0,!1,{fileName:i,lineNumber:289,columnNumber:13},void 0),l("div",{className:"thumbnail-wrapper",children:r&&r!==void 0&&r!=="undefined"?l("div",{className:`thumbnail ${r.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[r.toLowerCase().endsWith(".pdf")?l("img",{src:Ge,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"},void 0,!1,{fileName:i,lineNumber:296,columnNumber:29},void 0):l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract"},void 0,!1,{fileName:i,lineNumber:302,columnNumber:29},void 0),l("div",{className:"thumbnail-buttons",children:l("div",{className:"flex items-center justify-center gap-x-[10px]",children:[l("button",{onClick:()=>c(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-download",children:l(N,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:i,lineNumber:307,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:306,columnNumber:33},void 0),r.toLowerCase().endsWith(".pdf")?l("a",{target:"_blank",href:`http://dev-rare.srp.ai${r}`,className:"btn-view text-white",children:l(N,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:315,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:314,columnNumber:41},void 0):l("button",{onClick:d,className:"btn-view",children:l(N,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:312,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:311,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:305,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:304,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:294,columnNumber:21},void 0):l("p",{className:"form-control py-2",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:322,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:292,columnNumber:13},void 0),s&&l("div",{className:"modal-overlay",children:l("div",{className:"modal",children:[l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"},void 0,!1,{fileName:i,lineNumber:328,columnNumber:25},void 0),l("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[l("button",{onClick:()=>c(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"},void 0,!1,{fileName:i,lineNumber:330,columnNumber:29},void 0),l("button",{onClick:f,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"},void 0,!1,{fileName:i,lineNumber:331,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:329,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:327,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:326,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:288,columnNumber:9},void 0)},Ve=()=>{var a,u,p,h,C,g,y,w,F,A,x,k,D,L,$,j,P,T,_,S,E,I,W,R,q,O,G,U,B,V,J,M,Q,z,H,K,Y,X,Z,ee,le,ie,oe,ne,re,me,te,ce,ae,ue,Ne,se,de,be,ve,fe,pe,he,Ce,ge,ye,we,Fe,Ae,xe,ke,De,Le,$e,je,Pe,Te,_e;const{id:r}=Se(),{data:e,error:s,isLoading:t,isFetching:c,isSuccess:d}=Ee(r);return l(Ie,{children:[t&&c&&l(We,{},void 0,!1,{fileName:i,lineNumber:368,columnNumber:41},void 0),s&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:i,lineNumber:369,columnNumber:23},void 0),d&&e&&l("div",{className:" space-y-5",children:l("div",{children:l("div",{children:l(Re,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"All Tenant Contract"},void 0,!1,{fileName:i,lineNumber:376,columnNumber:37},void 0),l("button",{onClick:()=>{var n;for(const o in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[o])=="string"&&((e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".png")))){const b=e==null?void 0:e.tenantContract[o].split("/").pop();v.exports.saveAs(`http://dev-rare.srp.ai${e==null?void 0:e.tenantContract[o]}`,b)}for(const o of((n=e==null?void 0:e.tenantContract)==null?void 0:n.chequeDetails)||[])if(typeof(o==null?void 0:o.chequeimage)=="string"&&((o==null?void 0:o.chequeimage.toLowerCase().endsWith(".pdf"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpeg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".png")))){const b=o==null?void 0:o.chequeimage.split("/").pop();v.exports.saveAs(`http://dev-rare.srp.ai${o==null?void 0:o.chequeimage}`,b)}},className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[l(N,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"},void 0,!1,{fileName:i,lineNumber:378,columnNumber:41},void 0),"Download All Files"]},void 0,!0,{fileName:i,lineNumber:377,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:375,columnNumber:33},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:383,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:382,columnNumber:33},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:[l("h4",{className:"text-[20px] mt-[25px]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:i,lineNumber:389,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"},void 0,!1,{fileName:i,lineNumber:392,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(a=e==null?void 0:e.property)!=null&&a.unitnumber?(u=e==null?void 0:e.property)==null?void 0:u.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:395,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:391,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:398,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(p=e==null?void 0:e.property)!=null&&p.community_name?(h=e==null?void 0:e.property)==null?void 0:h.community_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:401,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:397,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:404,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(C=e==null?void 0:e.property)!=null&&C.project_name?(g=e==null?void 0:e.property)==null?void 0:g.project_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:407,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:403,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:410,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(y=e==null?void 0:e.property)!=null&&y.building_name?(w=e==null?void 0:e.property)==null?void 0:w.building_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:413,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:409,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:390,columnNumber:49},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:417,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:416,columnNumber:49},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"TENANT DETAILS"},void 0,!1,{fileName:i,lineNumber:419,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:i,lineNumber:422,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(F=e==null?void 0:e.tenantContract)!=null&&F.customerid?((A=e==null?void 0:e.owner)==null?void 0:A.firstname)+" "+((x=e==null?void 0:e.owner)==null?void 0:x.lastname):(k=e==null?void 0:e.tenantContract)==null?void 0:k.guestname},void 0,!1,{fileName:i,lineNumber:425,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:421,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Email"},void 0,!1,{fileName:i,lineNumber:428,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(D=e==null?void 0:e.tenantContract)!=null&&D.customerid?(L=e==null?void 0:e.owner)==null?void 0:L.email:($=e==null?void 0:e.tenantContract)==null?void 0:$.email},void 0,!1,{fileName:i,lineNumber:431,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:427,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Contact Number"},void 0,!1,{fileName:i,lineNumber:434,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(j=e==null?void 0:e.tenantContract)!=null&&j.customerid?(P=e==null?void 0:e.owner)!=null&&P.whatsappno?(T=e==null?void 0:e.owner)==null?void 0:T.whatsappno:"Not Available":(_=e==null?void 0:e.tenantContract)!=null&&_.mobilenumber?(S=e==null?void 0:e.tenantContract)==null?void 0:S.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:437,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:433,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"},void 0,!1,{fileName:i,lineNumber:448,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(E=e==null?void 0:e.tenantContract)!=null&&E.customerid?(I=e==null?void 0:e.owner)!=null&&I.passportidno?(W=e==null?void 0:e.owner)==null?void 0:W.passportidno:"Not Available":(R=e==null?void 0:e.tenantContract)!=null&&R.passportnumber?(q=e==null?void 0:e.tenantContract)==null?void 0:q.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:451,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:447,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"nationality"},void 0,!1,{fileName:i,lineNumber:462,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(O=e==null?void 0:e.tenantContract)!=null&&O.customerid?(G=e==null?void 0:e.owner)!=null&&G.passportno?(U=e==null?void 0:e.owner)==null?void 0:U.passportno:"Not Available":(B=e==null?void 0:e.tenantContract)!=null&&B.nationality?(V=e==null?void 0:e.tenantContract)==null?void 0:V.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:465,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:461,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"passport PDF"},void 0,!1,{fileName:i,lineNumber:476,columnNumber:57},void 0),(J=e==null?void 0:e.tenantContract)!=null&&J.customerid?((M=e==null?void 0:e.owner)==null?void 0:M.passportpdf)&&((Q=e==null?void 0:e.owner)==null?void 0:Q.passportpdf)!==void 0&&((z=e==null?void 0:e.owner)==null?void 0:z.passportpdf)!=="undefined"?l("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(H=e==null?void 0:e.owner)==null?void 0:H.passportpdf}`,children:(K=e==null?void 0:e.owner)!=null&&K.passportpdf?decodeURIComponent((Y=e==null?void 0:e.owner)==null?void 0:Y.passportpdf).split("/").pop():"Not Available"},void 0,!1,{fileName:i,lineNumber:482,columnNumber:71},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:485,columnNumber:71},void 0):((X=e==null?void 0:e.tenantContract)==null?void 0:X.passportpdf)&&((Z=e==null?void 0:e.tenantContract)==null?void 0:Z.passportpdf)!==void 0&&((ee=e==null?void 0:e.tenantContract)==null?void 0:ee.passportpdf)!=="undefined"?l("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(le=e==null?void 0:e.tenantContract)==null?void 0:le.passportpdf}`,children:(ie=e==null?void 0:e.tenantContract)!=null&&ie.passportpdf?decodeURIComponent((oe=e==null?void 0:e.tenantContract)==null?void 0:oe.passportpdf).split("/").pop():"Not Available"},void 0,!1,{fileName:i,lineNumber:487,columnNumber:71},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:490,columnNumber:71},void 0)]},void 0,!0,{fileName:i,lineNumber:475,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:420,columnNumber:49},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:495,columnNumber:53},void 0)},void 0,!1,{fileName:i,lineNumber:494,columnNumber:49},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:i,lineNumber:497,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"},void 0,!1,{fileName:i,lineNumber:500,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((ne=e==null?void 0:e.tenantContract)==null?void 0:ne.contractstartdate)&&((re=e==null?void 0:e.tenantContract)==null?void 0:re.contractstartdate)!==void 0&&((me=e==null?void 0:e.tenantContract)==null?void 0:me.contractstartdate)!=="undefined"?new Date((te=e==null?void 0:e.tenantContract)==null?void 0:te.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:503,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:499,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"},void 0,!1,{fileName:i,lineNumber:506,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((ce=e==null?void 0:e.tenantContract)==null?void 0:ce.contractenddate)&&((ae=e==null?void 0:e.tenantContract)==null?void 0:ae.contractenddate)!==void 0&&((ue=e==null?void 0:e.tenantContract)==null?void 0:ue.contractenddate)!=="undefined"?new Date((Ne=e==null?void 0:e.tenantContract)==null?void 0:Ne.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:509,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:505,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract execution date"},void 0,!1,{fileName:i,lineNumber:512,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((se=e==null?void 0:e.tenantContract)==null?void 0:se.contractexecutiondate)&&((de=e==null?void 0:e.tenantContract)==null?void 0:de.contractexecutiondate)!==void 0&&((be=e==null?void 0:e.tenantContract)==null?void 0:be.contractexecutiondate)!=="undefined"?new Date((ve=e==null?void 0:e.tenantContract)==null?void 0:ve.contractexecutiondate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:515,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:511,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rental Amount"},void 0,!1,{fileName:i,lineNumber:518,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((fe=e==null?void 0:e.tenantContract)==null?void 0:fe.rentalamount)&&((pe=e==null?void 0:e.tenantContract)==null?void 0:pe.rentalamount)!==void 0&&((he=e==null?void 0:e.tenantContract)==null?void 0:he.rentalamount)!=="undefined"?parseFloat((Ce=e==null?void 0:e.tenantContract)==null?void 0:Ce.rentalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:i,lineNumber:521,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:517,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"},void 0,!1,{fileName:i,lineNumber:524,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((ge=e==null?void 0:e.tenantContract)==null?void 0:ge.securitydepositamount)&&((ye=e==null?void 0:e.tenantContract)==null?void 0:ye.securitydepositamount)!==void 0&&((we=e==null?void 0:e.tenantContract)==null?void 0:we.securitydepositamount)!=="undefined"?parseFloat((Fe=e==null?void 0:e.tenantContract)==null?void 0:Fe.securitydepositamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:i,lineNumber:527,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:523,columnNumber:53},void 0),l("div",{children:l(m,{data:(Ae=e==null?void 0:e.tenantContract)==null?void 0:Ae.ejari_certificate_doc,label:"Ejari Certificate PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:530,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:529,columnNumber:53},void 0),l("div",{children:l(m,{data:(xe=e==null?void 0:e.tenantContract)==null?void 0:xe.tenancy_contract_doc,label:"Tenancy Contract PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:533,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:532,columnNumber:53},void 0),l("div",{children:l(m,{data:(ke=e==null?void 0:e.tenantContract)==null?void 0:ke.addendum_doc,label:"Addendum PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:536,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:535,columnNumber:53},void 0),l("div",{children:l(m,{data:(De=e==null?void 0:e.tenantContract)==null?void 0:De.key_receipt_doc,label:"Key Receipt PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:539,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:538,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No Of Cheque Or Installment"},void 0,!1,{fileName:i,lineNumber:542,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((Le=e==null?void 0:e.tenantContract)==null?void 0:Le.noofchequeorinstallment)&&(($e=e==null?void 0:e.tenantContract)==null?void 0:$e.noofchequeorinstallment)!==void 0&&((je=e==null?void 0:e.tenantContract)==null?void 0:je.noofchequeorinstallment)!=="undefined"?(Pe=e==null?void 0:e.tenantContract)==null?void 0:Pe.noofchequeorinstallment:"Not Available"},void 0,!1,{fileName:i,lineNumber:545,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:541,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:498,columnNumber:49},void 0),(_e=(Te=e==null?void 0:e.tenantContract)==null?void 0:Te.chequeDetails)==null?void 0:_e.map((n,o)=>l("div",{children:[l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:552,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:551,columnNumber:61},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:["CHEQUE NO.",o+1," DETAILS"]},void 0,!0,{fileName:i,lineNumber:554,columnNumber:61},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[30px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"cheque number"},void 0,!1,{fileName:i,lineNumber:557,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.chequenumbe?n==null?void 0:n.chequenumbe:"Not Available"},void 0,!1,{fileName:i,lineNumber:560,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:556,columnNumber:65},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"cheque date"},void 0,!1,{fileName:i,lineNumber:563,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.chequedate?new Date(n==null?void 0:n.chequedate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:566,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:562,columnNumber:65},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"total amount"},void 0,!1,{fileName:i,lineNumber:569,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.totalamount?parseFloat(n==null?void 0:n.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:i,lineNumber:572,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:568,columnNumber:65},void 0),l("div",{children:l(m,{data:n==null?void 0:n.chequeimage,label:"cheque image"},void 0,!1,{fileName:i,lineNumber:575,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:574,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:555,columnNumber:61},void 0)]},o+1,!0,{fileName:i,lineNumber:550,columnNumber:57},void 0))]},void 0,!0,{fileName:i,lineNumber:388,columnNumber:45},void 0),l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:l(qe,{to:"/owner-tenant-contracts",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:583,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:582,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:387,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:386,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:385,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:374,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:373,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:372,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:371,columnNumber:17},void 0)]},void 0,!0)};export{Ve as default};