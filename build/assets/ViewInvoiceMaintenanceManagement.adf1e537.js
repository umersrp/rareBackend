import{bt as vi,r as a,j as i,F as c,e as bi,aj as ti,L as Ni}from"./index.f75f4411.js";import"./jspdf.es.min.599a7149.js";import"./html2canvas.esm.0eae2bf4.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\maintenance-management\\ViewInvoiceMaintenanceManagement.jsx";const _i=()=>{var v,b,t;const{id:d}=vi(),[e,u]=a.exports.useState(""),ai=localStorage.getItem("isAuth"),N=JSON.parse(ai);a.exports.useEffect(()=>{(async()=>{if(d){const o=await(await fetch(`http://dev-rare.srp.ai/maintenancemanagement/${d}`)).json();o&&u(o)}})()},[d]);const ui=[{value:"In-house",label:"In-house"},{value:"Outsource",label:"Outsource"}];return a.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const o=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();o&&u({...e,unitnumber:o==null?void 0:o.unitnumber,buildingname:o==null?void 0:o.building_name,projectname:o==null?void 0:o.project_name,communityname:o==null?void 0:o.community_name})}})()},[e==null?void 0:e.propertyid]),i(c,{children:i("div",{className:"xl:col-span-2 col-span-1",children:i(bi,{title:"View Maintenance Management Quotation",children:[i("div",{id:"content-to-print",className:"pdf-content",children:[i("div",{className:"w-[100%] col-span-3",children:i("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:l,lineNumber:56,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:55,columnNumber:25},void 0),i(c,{children:e!=null&&e.propertyid?i(c,{children:i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Unit number"},void 0,!1,{fileName:l,lineNumber:67,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:69,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:68,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:66,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:73,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:75,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:74,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:72,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Project Name"},void 0,!1,{fileName:l,lineNumber:79,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"},void 0,!1,{fileName:l,lineNumber:81,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:80,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:78,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Building Name"},void 0,!1,{fileName:l,lineNumber:85,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"},void 0,!1,{fileName:l,lineNumber:87,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:86,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:84,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:65,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:64,columnNumber:41},void 0)},void 0,!1):null},void 0,!1),i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:96,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:95,columnNumber:25},void 0),i("div",{className:"w-[100%] col-span-3 mt-[30px]",children:i("div",{className:"flex flex-wrap space-xy-5 w-[100%]",children:ui.map(r=>i(ti,{label:r.label,name:"house",value:r.value,checked:(e==null?void 0:e.house_type)===r.value,readOnly:!0},void 0,!1,{fileName:l,lineNumber:101,columnNumber:37},void 0))},void 0,!1,{fileName:l,lineNumber:99,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:98,columnNumber:25},void 0),(e==null?void 0:e.house_type)==="In-house"?i(c,{children:[i("div",{className:"flex mt-[25px] justify-between",children:[i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Company"},void 0,!1,{fileName:l,lineNumber:117,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.company?e==null?void 0:e.company:"Not Available"},void 0,!1,{fileName:l,lineNumber:119,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:118,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:116,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"City"},void 0,!1,{fileName:l,lineNumber:123,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:122,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Emirate"},void 0,!1,{fileName:l,lineNumber:129,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.emirate?e==null?void 0:e.emirate:"Not Available"},void 0,!1,{fileName:l,lineNumber:131,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:130,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:128,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Email"},void 0,!1,{fileName:l,lineNumber:135,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:137,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:136,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:134,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:115,columnNumber:41},void 0),i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Date"},void 0,!1,{fileName:l,lineNumber:143,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qoutation_date?new Date(e==null?void 0:e.qoutation_date).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:145,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:144,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:142,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Invoice Number"},void 0,!1,{fileName:l,lineNumber:149,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:151,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:150,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:148,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"QTN Number"},void 0,!1,{fileName:l,lineNumber:155,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:157,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:156,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:154,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"TRN Number"},void 0,!1,{fileName:l,lineNumber:161,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.trn_number?e==null?void 0:e.trn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:163,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:162,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:160,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:141,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:114,columnNumber:37},void 0),i("div",{className:"w-[100%] flex item-center mt-[40px]",children:[i("div",{className:"w-[35%] p-[10px] disc-heading",children:i("p",{children:"DESCRIPTION OF SERVICES / SCOPE OF WORK"},void 0,!1,{fileName:l,lineNumber:170,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:169,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] border-left remaining-headings",children:i("p",{children:"QUANTITY"},void 0,!1,{fileName:l,lineNumber:173,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:172,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"UNIT PRICE"},void 0,!1,{fileName:l,lineNumber:176,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:175,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"TAXABLE VALUE AED"},void 0,!1,{fileName:l,lineNumber:179,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:178,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"VAT %"},void 0,!1,{fileName:l,lineNumber:182,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:181,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"VAT AMOUNT AED"},void 0,!1,{fileName:l,lineNumber:185,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:184,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"TOTAL IN AED"},void 0,!1,{fileName:l,lineNumber:188,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:187,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:168,columnNumber:37},void 0),(e==null?void 0:e.total_count)>0&&i(c,{children:Array.from({length:e==null?void 0:e.total_count},(r,m)=>{var o,f,s,p,h,_,g,x,y,A,w,k,F,q,S,z,E,G,j,L,T,O,C,R,U,V,P,M,$,Q,B,I,Y,J,K,W;return i("div",{children:[i("div",{className:"w-[100%] flex",children:[i("div",{className:"w-[35%] p-[10px] disc-col-first items-center flex",children:i("p",{children:(f=(o=e==null?void 0:e.multiDescription)==null?void 0:o[m])!=null&&f.description?(p=(s=e==null?void 0:e.multiDescription)==null?void 0:s[m])==null?void 0:p.description:""},void 0,!1,{fileName:l,lineNumber:198,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:197,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(_=(h=e==null?void 0:e.multiDescription)==null?void 0:h[m])!=null&&_.quantity?(x=(g=e==null?void 0:e.multiDescription)==null?void 0:g[m])==null?void 0:x.quantity:""},void 0,!1,{fileName:l,lineNumber:201,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:200,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(A=(y=e==null?void 0:e.multiDescription)==null?void 0:y[m])!=null&&A.unit_price?(k=(w=e==null?void 0:e.multiDescription)==null?void 0:w[m])==null?void 0:k.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:204,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:203,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:(q=(F=e==null?void 0:e.multiDescription)==null?void 0:F[m])!=null&&q.total_price?(z=(S=e==null?void 0:e.multiDescription)==null?void 0:S[m])==null?void 0:z.total_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:207,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:206,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col items-center",children:i("p",{children:(G=(E=e==null?void 0:e.multiDescription)==null?void 0:E[m])!=null&&G.vat_per?((L=(j=e==null?void 0:e.multiDescription)==null?void 0:j[m])==null?void 0:L.vat_per)+" %":""},void 0,!1,{fileName:l,lineNumber:210,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:209,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((O=(T=e==null?void 0:e.multiDescription)==null?void 0:T[m])==null?void 0:O.vat_per)&&((R=(C=e==null?void 0:e.multiDescription)==null?void 0:C[m])==null?void 0:R.unit_price)?(V=(U=e==null?void 0:e.multiDescription)==null?void 0:U[m])==null?void 0:V.vat_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:213,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:212,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((M=(P=e==null?void 0:e.multiDescription)==null?void 0:P[m])==null?void 0:M.vat_per)&&((Q=($=e==null?void 0:e.multiDescription)==null?void 0:$[m])==null?void 0:Q.unit_price)?(I=(B=e==null?void 0:e.multiDescription)==null?void 0:B[m])==null?void 0:I.total_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:216,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:215,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:196,columnNumber:57},void 0),((J=(Y=e==null?void 0:e.multiDescription)==null?void 0:Y[m])==null?void 0:J.total_child_count)>0&&i(c,{children:Array.from({length:(W=(K=e==null?void 0:e.multiDescription)==null?void 0:K[m])==null?void 0:W.total_child_count},(fi,n)=>{var X,H,Z,D,ee,ie,le,me,oe,ne,ce,re,de,Ne,ae,ue,ve,be,te,fe,se,pe,he,_e,ge,xe,ye,Ae,we,ke,Fe,qe,Se,ze,Ee,Ge,je,Le,Te,Oe,Ce,Re,Ue,Ve,Pe,Me,$e,Qe,Be,Ie,Ye,Je,Ke,We,Xe,He,Ze,De,ei,ii,li,mi,oi,ni,ci,ri,di;return i("div",{className:"w-[100%] flex",children:[i("div",{className:"w-[35%] p-[10px] disc-col-first flex items-center",children:i("p",{children:(D=(Z=(H=(X=e==null?void 0:e.multiDescription)==null?void 0:X[m])==null?void 0:H.child_description)==null?void 0:Z[n])!=null&&D.description?"- "+((me=(le=(ie=(ee=e==null?void 0:e.multiDescription)==null?void 0:ee[m])==null?void 0:ie.child_description)==null?void 0:le[n])==null?void 0:me.description):""},void 0,!1,{fileName:l,lineNumber:225,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:224,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(re=(ce=(ne=(oe=e==null?void 0:e.multiDescription)==null?void 0:oe[m])==null?void 0:ne.child_description)==null?void 0:ce[n])!=null&&re.quantity?(ue=(ae=(Ne=(de=e==null?void 0:e.multiDescription)==null?void 0:de[m])==null?void 0:Ne.child_description)==null?void 0:ae[n])==null?void 0:ue.quantity:""},void 0,!1,{fileName:l,lineNumber:228,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:227,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(fe=(te=(be=(ve=e==null?void 0:e.multiDescription)==null?void 0:ve[m])==null?void 0:be.child_description)==null?void 0:te[n])!=null&&fe.unit_price?(_e=(he=(pe=(se=e==null?void 0:e.multiDescription)==null?void 0:se[m])==null?void 0:pe.child_description)==null?void 0:he[n])==null?void 0:_e.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:231,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:230,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:(Ae=(ye=(xe=(ge=e==null?void 0:e.multiDescription)==null?void 0:ge[m])==null?void 0:xe.child_description)==null?void 0:ye[n])!=null&&Ae.total_price?(Se=(qe=(Fe=(ke=(we=e==null?void 0:e.multiDescription)==null?void 0:we[m])==null?void 0:ke.child_description)==null?void 0:Fe[n])==null?void 0:qe.total_price)==null?void 0:Se.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:234,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:233,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col items-center",children:i("p",{children:(je=(Ge=(Ee=(ze=e==null?void 0:e.multiDescription)==null?void 0:ze[m])==null?void 0:Ee.child_description)==null?void 0:Ge[n])!=null&&je.vat_per?((Ce=(Oe=(Te=(Le=e==null?void 0:e.multiDescription)==null?void 0:Le[m])==null?void 0:Te.child_description)==null?void 0:Oe[n])==null?void 0:Ce.vat_per)+" %":""},void 0,!1,{fileName:l,lineNumber:237,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:236,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((Pe=(Ve=(Ue=(Re=e==null?void 0:e.multiDescription)==null?void 0:Re[m])==null?void 0:Ue.child_description)==null?void 0:Ve[n])==null?void 0:Pe.vat_per)&&((Be=(Qe=($e=(Me=e==null?void 0:e.multiDescription)==null?void 0:Me[m])==null?void 0:$e.child_description)==null?void 0:Qe[n])==null?void 0:Be.unit_price)?(We=(Ke=(Je=(Ye=(Ie=e==null?void 0:e.multiDescription)==null?void 0:Ie[m])==null?void 0:Ye.child_description)==null?void 0:Je[n])==null?void 0:Ke.vat_amount_aed)==null?void 0:We.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:240,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:239,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((De=(Ze=(He=(Xe=e==null?void 0:e.multiDescription)==null?void 0:Xe[m])==null?void 0:He.child_description)==null?void 0:Ze[n])==null?void 0:De.vat_per)&&((mi=(li=(ii=(ei=e==null?void 0:e.multiDescription)==null?void 0:ei[m])==null?void 0:ii.child_description)==null?void 0:li[n])==null?void 0:mi.unit_price)?(di=(ri=(ci=(ni=(oi=e==null?void 0:e.multiDescription)==null?void 0:oi[m])==null?void 0:ni.child_description)==null?void 0:ci[n])==null?void 0:ri.total_amount_aed)==null?void 0:di.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:243,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:242,columnNumber:77},void 0)]},n+1,!0,{fileName:l,lineNumber:223,columnNumber:73},void 0)})},void 0,!1)]},m+1,!0,{fileName:l,lineNumber:195,columnNumber:53},void 0)})},void 0,!1),i("div",{className:"w-[100%] flex item-center",children:[i("div",{className:"w-[35%] p-[10px] total-col",children:i("p",{className:"text-center",children:"T O T A L"},void 0,!1,{fileName:l,lineNumber:257,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:256,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:260,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:259,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:263,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:262,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.total_price?(v=e==null?void 0:e.total_price)==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:266,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:265,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:269,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:268,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.vat_amount_aed?(b=e==null?void 0:e.vat_amount_aed)==null?void 0:b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:272,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:271,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.total_amount_aed?(t=e==null?void 0:e.total_amount_aed)==null?void 0:t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:275,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:274,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:255,columnNumber:37},void 0)]},void 0,!0):null,(e==null?void 0:e.house_type)==="Outsource"?i(c,{children:i("div",{className:"flex mt-[25px] justify-between",children:[i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Company"},void 0,!1,{fileName:l,lineNumber:286,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.company?e==null?void 0:e.company:"Not Available"},void 0,!1,{fileName:l,lineNumber:288,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:287,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:285,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"City"},void 0,!1,{fileName:l,lineNumber:292,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"},void 0,!1,{fileName:l,lineNumber:294,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:293,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:291,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Emirate"},void 0,!1,{fileName:l,lineNumber:298,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.emirate?e==null?void 0:e.emirate:"Not Available"},void 0,!1,{fileName:l,lineNumber:300,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:299,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:297,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Email"},void 0,!1,{fileName:l,lineNumber:304,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:306,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:305,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:303,columnNumber:45},void 0),i("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Invoice Attachment"},void 0,!1,{fileName:l,lineNumber:310,columnNumber:49},void 0),i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(e==null?void 0:e.invoice_attachment)&&(e==null?void 0:e.invoice_attachment)!==""&&(e==null?void 0:e.invoice_attachment)!==void 0&&(e==null?void 0:e.invoice_attachment)!=="undefined"&&(e==null?void 0:e.invoice_attachment)!==null&&(e==null?void 0:e.invoice_attachment)!=="null"?i("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.invoice_attachment}`,children:decodeURIComponent(e==null?void 0:e.invoice_attachment).split("/").pop()},void 0,!1,{fileName:l,lineNumber:316,columnNumber:61},void 0):i("p",{children:"Not Available"},void 0,!1,{fileName:l,lineNumber:317,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:313,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:309,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:284,columnNumber:41},void 0),i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Date"},void 0,!1,{fileName:l,lineNumber:324,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qoutation_date?new Date(e==null?void 0:e.qoutation_date).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:326,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:325,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:323,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Invoice Number"},void 0,!1,{fileName:l,lineNumber:330,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:332,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:331,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:329,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"QTN Number"},void 0,!1,{fileName:l,lineNumber:336,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:338,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:337,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:335,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"TRN Number"},void 0,!1,{fileName:l,lineNumber:342,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.trn_number?e==null?void 0:e.trn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:344,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:343,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:341,columnNumber:45},void 0),i("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Quotation Attachment"},void 0,!1,{fileName:l,lineNumber:348,columnNumber:49},void 0),i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(e==null?void 0:e.quotation_attachment)&&(e==null?void 0:e.quotation_attachment)!==""&&(e==null?void 0:e.quotation_attachment)!==void 0&&(e==null?void 0:e.quotation_attachment)!=="undefined"&&(e==null?void 0:e.quotation_attachment)!==null&&(e==null?void 0:e.quotation_attachment)!=="null"?i("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.quotation_attachment}`,children:decodeURIComponent(e==null?void 0:e.quotation_attachment).split("/").pop()},void 0,!1,{fileName:l,lineNumber:354,columnNumber:61},void 0):i("p",{children:"Not Available"},void 0,!1,{fileName:l,lineNumber:355,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:351,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:347,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:322,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:283,columnNumber:37},void 0)},void 0,!1):null]},void 0,!0,{fileName:l,lineNumber:54,columnNumber:21},void 0),i("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative mt-[35px]",children:i("div",{className:"ltr:text-right rtl:text-left ",children:N!=null&&N.type?i(Ni,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/owner-maintenancemanagement-invoices",children:"Cancel"},void 0,!1,{fileName:l,lineNumber:369,columnNumber:37},void 0):i(Ni,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/allmaintenancemanagement-invoices",children:"Cancel"},void 0,!1,{fileName:l,lineNumber:370,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:366,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:365,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:53,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:52,columnNumber:13},void 0)},void 0,!1)};export{_i as default};
