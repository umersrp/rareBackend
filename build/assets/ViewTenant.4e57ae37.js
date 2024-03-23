import{bt as al,cd as cl,bL as ul,r as m,j as l,F as D,bN as sl,bM as Nl,e as dl,I as d,L as F,b$ as k,M as bl}from"./index.d79e7749.js";import{P as fl}from"./pdf-icon.2fc2c516.js";var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\ViewTenant.jsx";const a=({data:r,label:e})=>{const[b,c]=m.exports.useState(!1),u=(p,t)=>{k.exports.saveAs(p,t)},f=()=>{c(!0)},v=()=>{c(!1)};return l("div",{className:"thumbnail-container",children:[l("label",{htmlFor:"default-picker",className:"form-label",children:e},void 0,!1,{fileName:o,lineNumber:29,columnNumber:13},void 0),l("div",{className:"thumbnail-wrapper",children:r&&r!==void 0&&r!=="undefined"?l("div",{className:`thumbnail ${r.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[r.toLowerCase().endsWith(".pdf")?l("img",{src:fl,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"},void 0,!1,{fileName:o,lineNumber:36,columnNumber:29},void 0):l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract"},void 0,!1,{fileName:o,lineNumber:42,columnNumber:29},void 0),l("div",{className:"thumbnail-buttons",children:l("div",{className:"flex items-center justify-center gap-x-[10px]",children:[l("button",{onClick:()=>u(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-download",children:l(d,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:o,lineNumber:47,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:46,columnNumber:33},void 0),r.toLowerCase().endsWith(".pdf")?l("a",{target:"_blank",href:`http://dev-rare.srp.ai${r}`,className:"btn-view text-white",children:l(d,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:o,lineNumber:55,columnNumber:45},void 0)},void 0,!1,{fileName:o,lineNumber:54,columnNumber:41},void 0):l("button",{onClick:f,className:"btn-view",children:l(d,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:o,lineNumber:52,columnNumber:45},void 0)},void 0,!1,{fileName:o,lineNumber:51,columnNumber:41},void 0)]},void 0,!0,{fileName:o,lineNumber:45,columnNumber:29},void 0)},void 0,!1,{fileName:o,lineNumber:44,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:34,columnNumber:21},void 0):l("p",{className:"form-control py-2",children:"Not Available"},void 0,!1,{fileName:o,lineNumber:62,columnNumber:21},void 0)},void 0,!1,{fileName:o,lineNumber:32,columnNumber:13},void 0),b&&l("div",{className:"modal-overlay",children:l("div",{className:"modal",children:[l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"},void 0,!1,{fileName:o,lineNumber:68,columnNumber:25},void 0),l("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[l("button",{onClick:()=>u(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"},void 0,!1,{fileName:o,lineNumber:70,columnNumber:29},void 0),l("button",{onClick:v,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"},void 0,!1,{fileName:o,lineNumber:71,columnNumber:29},void 0)]},void 0,!0,{fileName:o,lineNumber:69,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:67,columnNumber:21},void 0)},void 0,!1,{fileName:o,lineNumber:66,columnNumber:17},void 0)]},void 0,!0,{fileName:o,lineNumber:28,columnNumber:9},void 0)},gl=()=>{var S,j,P,T,$,I,_,E,W,q,B,M,U,G,O,R,V,J,H,Q,z,K,Y,X,Z,ee,le,oe,ie,ne,re,me,te,ae,ce,ue,se,Ne,de,be,fe,ve,pe,he,Ce,ge,ye,we,xe,De,Fe,ke,Ae,Le,Se,je,Pe,Te,$e,Ie,_e,Ee,We,qe,Be,Me,Ue,Ge,Oe,Re,Ve,Je,He,Qe;const{id:r}=al(),{data:e,error:b,isLoading:c,isFetching:u,isSuccess:f,refetch:v}=cl(r),p=localStorage.getItem("isAuth"),t=JSON.parse(p),{data:h}=ul(t==null?void 0:t.roleid),[C,s]=m.exports.useState(!1),N=new URLSearchParams(window.location.search),g=N.get("delete"),[ze,y]=m.exports.useState(!1),[Ke,Ye]=m.exports.useState(""),[Xe,vl]=m.exports.useState(""),[Ze,pl]=m.exports.useState(!1),[w,A]=m.exports.useState(!1),[el,L]=m.exports.useState(!1),[ll,ol]=m.exports.useState(!1),il=()=>{var n;for(const i in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[i])=="string"&&((e==null?void 0:e.tenantContract[i].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[i].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[i].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[i].toLowerCase().endsWith(".png")))){const x=e==null?void 0:e.tenantContract[i].split("/").pop();k.exports.saveAs(`http://dev-rare.srp.ai${e==null?void 0:e.tenantContract[i]}`,x)}for(const i of((n=e==null?void 0:e.tenantContract)==null?void 0:n.chequeDetails)||[])if(typeof(i==null?void 0:i.chequeimage)=="string"&&((i==null?void 0:i.chequeimage.toLowerCase().toLowerCase().endsWith(".pdf"))||(i==null?void 0:i.chequeimage.toLowerCase().endsWith(".jpg"))||(i==null?void 0:i.chequeimage.toLowerCase().endsWith(".jpeg"))||(i==null?void 0:i.chequeimage.toLowerCase().endsWith(".png")))){const x=i==null?void 0:i.chequeimage.split("/").pop();k.exports.saveAs(`http://dev-rare.srp.ai${i==null?void 0:i.chequeimage}`,x)}};m.exports.useEffect(()=>{var n,i;g==="true"&&N&&((n=e==null?void 0:e.tenantContract)==null?void 0:n.softdelete)===!1?s(!0):g==="true"&&N&&((i=e==null?void 0:e.tenantContract)==null?void 0:i.softdelete)===!0&&(A(!0),s(!1))},[g,N,(S=e==null?void 0:e.tenantContract)==null?void 0:S.softdelete]);const nl=async n=>{y(!0),Ye(n)},rl=()=>{y(!1)},ml=async()=>{try{await bl.patch("http://dev-rare.srp.ai/tenantcontract/api/tenantcontractdelete",{_id:r,softdelete:!0}),s(!1),tl()}catch(n){console.log(n,"error")}},tl=async()=>{try{await v(),L(!0),A(!0),s(!1),y(!1)}catch{ol(!0)}L(!1)};return l(D,{children:[(c||u&&el)&&l(sl,{},void 0,!1,{fileName:o,lineNumber:166,columnNumber:63},void 0),b||ll&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:o,lineNumber:167,columnNumber:40},void 0),f&&e&&l("div",{className:" space-y-5",children:[l(Nl,{showModal:ze,handleClose:rl,loaderModal:Ze,linkedData:Xe,handleDeleteData:ml,dataId:Ke,moduleName:"Tenant Contract"},void 0,!1,{fileName:o,lineNumber:170,columnNumber:21},void 0),l("div",{children:l("div",{children:l(dl,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Tenant Contract"},void 0,!1,{fileName:o,lineNumber:175,columnNumber:37},void 0),C===!1&&w===!1?l("button",{onClick:il,className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[l(d,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"},void 0,!1,{fileName:o,lineNumber:180,columnNumber:49},void 0),"Download All Files"]},void 0,!0,{fileName:o,lineNumber:179,columnNumber:45},void 0):null,C===!0?l("button",{onClick:()=>nl(r),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Tenant Contract"},void 0,!1,{fileName:o,lineNumber:186,columnNumber:45},void 0):null,w===!0?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Tenant Contract is deleted"},void 0,!1,{fileName:o,lineNumber:192,columnNumber:45},void 0):null]},void 0,!0,{fileName:o,lineNumber:174,columnNumber:33},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:o,lineNumber:196,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:195,columnNumber:33},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:[l("h4",{className:"text-[20px] mt-[25px]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:o,lineNumber:202,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"},void 0,!1,{fileName:o,lineNumber:205,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(j=e==null?void 0:e.property)!=null&&j.unitnumber?(P=e==null?void 0:e.property)==null?void 0:P.unitnumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:208,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:204,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:o,lineNumber:211,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(T=e==null?void 0:e.property)!=null&&T.community_name?($=e==null?void 0:e.property)==null?void 0:$.community_name:"Not Available"},void 0,!1,{fileName:o,lineNumber:214,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:210,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:o,lineNumber:217,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(I=e==null?void 0:e.property)!=null&&I.project_name?(_=e==null?void 0:e.property)==null?void 0:_.project_name:"Not Available"},void 0,!1,{fileName:o,lineNumber:220,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:216,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:o,lineNumber:223,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(E=e==null?void 0:e.property)!=null&&E.building_name?(W=e==null?void 0:e.property)==null?void 0:W.building_name:"Not Available"},void 0,!1,{fileName:o,lineNumber:226,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:222,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:203,columnNumber:49},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:o,lineNumber:230,columnNumber:53},void 0)},void 0,!1,{fileName:o,lineNumber:229,columnNumber:49},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"TENANT DETAILS"},void 0,!1,{fileName:o,lineNumber:232,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:o,lineNumber:235,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(q=e==null?void 0:e.tenantContract)!=null&&q.customerid?((B=e==null?void 0:e.owner)==null?void 0:B.firstname)+" "+((M=e==null?void 0:e.owner)==null?void 0:M.lastname):(U=e==null?void 0:e.tenantContract)==null?void 0:U.guestname},void 0,!1,{fileName:o,lineNumber:238,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:234,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Email"},void 0,!1,{fileName:o,lineNumber:241,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(G=e==null?void 0:e.tenantContract)!=null&&G.customerid?(O=e==null?void 0:e.owner)==null?void 0:O.email:(R=e==null?void 0:e.tenantContract)==null?void 0:R.email},void 0,!1,{fileName:o,lineNumber:244,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:240,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Contact Number"},void 0,!1,{fileName:o,lineNumber:247,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(V=e==null?void 0:e.tenantContract)!=null&&V.customerid?(J=e==null?void 0:e.owner)!=null&&J.whatsappno?(H=e==null?void 0:e.owner)==null?void 0:H.whatsappno:"Not Available":(Q=e==null?void 0:e.tenantContract)!=null&&Q.mobilenumber?(z=e==null?void 0:e.tenantContract)==null?void 0:z.mobilenumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:250,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:246,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"},void 0,!1,{fileName:o,lineNumber:261,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(K=e==null?void 0:e.tenantContract)!=null&&K.customerid?(Y=e==null?void 0:e.owner)!=null&&Y.passportidno?(X=e==null?void 0:e.owner)==null?void 0:X.passportidno:"Not Available":(Z=e==null?void 0:e.tenantContract)!=null&&Z.passportnumber?(ee=e==null?void 0:e.tenantContract)==null?void 0:ee.passportnumber:"Not Available"},void 0,!1,{fileName:o,lineNumber:264,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:260,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"nationality"},void 0,!1,{fileName:o,lineNumber:275,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(le=e==null?void 0:e.tenantContract)!=null&&le.customerid?(oe=e==null?void 0:e.owner)!=null&&oe.passportno?(ie=e==null?void 0:e.owner)==null?void 0:ie.passportno:"Not Available":(ne=e==null?void 0:e.tenantContract)!=null&&ne.nationality?(re=e==null?void 0:e.tenantContract)==null?void 0:re.nationality:"Not Available"},void 0,!1,{fileName:o,lineNumber:278,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:274,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"passport PDF"},void 0,!1,{fileName:o,lineNumber:289,columnNumber:57},void 0),(me=e==null?void 0:e.tenantContract)!=null&&me.customerid?((te=e==null?void 0:e.owner)==null?void 0:te.passportpdf)&&((ae=e==null?void 0:e.owner)==null?void 0:ae.passportpdf)!==void 0&&((ce=e==null?void 0:e.owner)==null?void 0:ce.passportpdf)!=="undefined"?l("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(ue=e==null?void 0:e.owner)==null?void 0:ue.passportpdf}`,children:(se=e==null?void 0:e.owner)!=null&&se.passportpdf?decodeURIComponent((Ne=e==null?void 0:e.owner)==null?void 0:Ne.passportpdf).split("/").pop():"Not Available"},void 0,!1,{fileName:o,lineNumber:295,columnNumber:71},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:o,lineNumber:298,columnNumber:71},void 0):((de=e==null?void 0:e.tenantContract)==null?void 0:de.passportpdf)&&((be=e==null?void 0:e.tenantContract)==null?void 0:be.passportpdf)!==void 0&&((fe=e==null?void 0:e.tenantContract)==null?void 0:fe.passportpdf)!=="undefined"?l("a",{className:"  form-control py-2   ",target:"_blank",href:`http://dev-rare.srp.ai${(ve=e==null?void 0:e.tenantContract)==null?void 0:ve.passportpdf}`,children:(pe=e==null?void 0:e.tenantContract)!=null&&pe.passportpdf?decodeURIComponent((he=e==null?void 0:e.tenantContract)==null?void 0:he.passportpdf).split("/").pop():"Not Available"},void 0,!1,{fileName:o,lineNumber:300,columnNumber:71},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:o,lineNumber:303,columnNumber:71},void 0)]},void 0,!0,{fileName:o,lineNumber:288,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:233,columnNumber:49},void 0),l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:o,lineNumber:308,columnNumber:53},void 0)},void 0,!1,{fileName:o,lineNumber:307,columnNumber:49},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:o,lineNumber:310,columnNumber:49},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract execution date"},void 0,!1,{fileName:o,lineNumber:313,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((Ce=e==null?void 0:e.tenantContract)==null?void 0:Ce.contractexecutiondate)&&((ge=e==null?void 0:e.tenantContract)==null?void 0:ge.contractexecutiondate)!==void 0&&((ye=e==null?void 0:e.tenantContract)==null?void 0:ye.contractexecutiondate)!=="undefined"?new Date((we=e==null?void 0:e.tenantContract)==null?void 0:we.contractexecutiondate).toDateString():"Not Available"},void 0,!1,{fileName:o,lineNumber:316,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:312,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"},void 0,!1,{fileName:o,lineNumber:319,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((xe=e==null?void 0:e.tenantContract)==null?void 0:xe.contractstartdate)&&((De=e==null?void 0:e.tenantContract)==null?void 0:De.contractstartdate)!==void 0&&((Fe=e==null?void 0:e.tenantContract)==null?void 0:Fe.contractstartdate)!=="undefined"?new Date((ke=e==null?void 0:e.tenantContract)==null?void 0:ke.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:o,lineNumber:322,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:318,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"},void 0,!1,{fileName:o,lineNumber:325,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((Ae=e==null?void 0:e.tenantContract)==null?void 0:Ae.contractenddate)&&((Le=e==null?void 0:e.tenantContract)==null?void 0:Le.contractenddate)!==void 0&&((Se=e==null?void 0:e.tenantContract)==null?void 0:Se.contractenddate)!=="undefined"?new Date((je=e==null?void 0:e.tenantContract)==null?void 0:je.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:o,lineNumber:328,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:324,columnNumber:53},void 0),l(D,{},void 0,!1),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rental Amount"},void 0,!1,{fileName:o,lineNumber:339,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((Pe=e==null?void 0:e.tenantContract)==null?void 0:Pe.rentalamount)&&((Te=e==null?void 0:e.tenantContract)==null?void 0:Te.rentalamount)!==void 0&&(($e=e==null?void 0:e.tenantContract)==null?void 0:$e.rentalamount)!=="undefined"?parseFloat((Ie=e==null?void 0:e.tenantContract)==null?void 0:Ie.rentalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:o,lineNumber:342,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:338,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"},void 0,!1,{fileName:o,lineNumber:345,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((_e=e==null?void 0:e.tenantContract)==null?void 0:_e.securitydepositamount)&&((Ee=e==null?void 0:e.tenantContract)==null?void 0:Ee.securitydepositamount)!==void 0&&((We=e==null?void 0:e.tenantContract)==null?void 0:We.securitydepositamount)!=="undefined"?parseFloat((qe=e==null?void 0:e.tenantContract)==null?void 0:qe.securitydepositamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:o,lineNumber:348,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:344,columnNumber:53},void 0),l("div",{children:l(a,{data:(Be=e==null?void 0:e.tenantContract)==null?void 0:Be.ejari_certificate_doc,label:"Ejari Certificate PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:361,columnNumber:57},void 0)},void 0,!1,{fileName:o,lineNumber:350,columnNumber:53},void 0),l("div",{children:l(a,{data:(Me=e==null?void 0:e.tenantContract)==null?void 0:Me.tenancy_contract_doc,label:"Tenancy Contract PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:374,columnNumber:57},void 0)},void 0,!1,{fileName:o,lineNumber:363,columnNumber:53},void 0),l("div",{children:l(a,{data:(Ue=e==null?void 0:e.tenantContract)==null?void 0:Ue.addendum_doc,label:"Addendum PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:387,columnNumber:57},void 0)},void 0,!1,{fileName:o,lineNumber:376,columnNumber:53},void 0),l("div",{children:l(a,{data:(Ge=e==null?void 0:e.tenantContract)==null?void 0:Ge.key_receipt_doc,label:"Key Receipt PDF/PNG/JPG"},void 0,!1,{fileName:o,lineNumber:400,columnNumber:57},void 0)},void 0,!1,{fileName:o,lineNumber:389,columnNumber:53},void 0),l(D,{},void 0,!1),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No Of Cheque Or Installment"},void 0,!1,{fileName:o,lineNumber:411,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:((Oe=e==null?void 0:e.tenantContract)==null?void 0:Oe.noofchequeorinstallment)&&((Re=e==null?void 0:e.tenantContract)==null?void 0:Re.noofchequeorinstallment)!==void 0&&((Ve=e==null?void 0:e.tenantContract)==null?void 0:Ve.noofchequeorinstallment)!=="undefined"?(Je=e==null?void 0:e.tenantContract)==null?void 0:Je.noofchequeorinstallment:"Not Available"},void 0,!1,{fileName:o,lineNumber:414,columnNumber:57},void 0)]},void 0,!0,{fileName:o,lineNumber:410,columnNumber:53},void 0)]},void 0,!0,{fileName:o,lineNumber:311,columnNumber:49},void 0),(Qe=(He=e==null?void 0:e.tenantContract)==null?void 0:He.chequeDetails)==null?void 0:Qe.map((n,i)=>l("div",{children:[l("div",{className:"w-[100%] col-span-3  mt-[15px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:o,lineNumber:421,columnNumber:65},void 0)},void 0,!1,{fileName:o,lineNumber:420,columnNumber:61},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:["CHEQUE NO.",i+1," DETAILS"]},void 0,!0,{fileName:o,lineNumber:423,columnNumber:61},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[30px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"cheque number"},void 0,!1,{fileName:o,lineNumber:426,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.chequenumbe?n==null?void 0:n.chequenumbe:"Not Available"},void 0,!1,{fileName:o,lineNumber:429,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:425,columnNumber:65},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"cheque date"},void 0,!1,{fileName:o,lineNumber:432,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.chequedate?new Date(n==null?void 0:n.chequedate).toDateString():"Not Available"},void 0,!1,{fileName:o,lineNumber:435,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:431,columnNumber:65},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"total amount"},void 0,!1,{fileName:o,lineNumber:438,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:n!=null&&n.totalamount?parseFloat(n==null?void 0:n.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:o,lineNumber:441,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:437,columnNumber:65},void 0),l("div",{children:l(a,{data:n==null?void 0:n.chequeimage,label:"cheque image"},void 0,!1,{fileName:o,lineNumber:454,columnNumber:69},void 0)},void 0,!1,{fileName:o,lineNumber:443,columnNumber:65},void 0)]},void 0,!0,{fileName:o,lineNumber:424,columnNumber:61},void 0)]},i+1,!0,{fileName:o,lineNumber:419,columnNumber:57},void 0))]},void 0,!0,{fileName:o,lineNumber:201,columnNumber:45},void 0),C===!1&&w===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[t!=null&&t.type?l(F,{to:"/owner-tenant-contracts",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:o,lineNumber:467,columnNumber:65},void 0):l(F,{to:"/all-tenantcontract",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:o,lineNumber:466,columnNumber:65},void 0),(h==null?void 0:h.updatetenant)===!0&&l(F,{to:`/update-tenantcontract/${r}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:o,lineNumber:471,columnNumber:65},void 0)]},void 0,!0,{fileName:o,lineNumber:463,columnNumber:53},void 0):null]},void 0,!0,{fileName:o,lineNumber:200,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:199,columnNumber:37},void 0)},void 0,!1,{fileName:o,lineNumber:198,columnNumber:33},void 0)]},void 0,!0,{fileName:o,lineNumber:173,columnNumber:29},void 0)},void 0,!1,{fileName:o,lineNumber:172,columnNumber:25},void 0)},void 0,!1,{fileName:o,lineNumber:171,columnNumber:21},void 0)]},void 0,!0,{fileName:o,lineNumber:169,columnNumber:17},void 0)]},void 0,!0)};export{gl as default};
