import{bt as vi,r as a,j as i,F as c,e as bi,aj as ti,L as u}from"./index.432a31b5.js";import"./jspdf.es.min.734dcb8e.js";import"./html2canvas.esm.0eae2bf4.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\maintenance-management\\ViewMaintenanceManagement.jsx";const _i=()=>{var b,t,f;const{id:d}=vi(),[e,v]=a.exports.useState(""),ai=localStorage.getItem("isAuth"),N=JSON.parse(ai);a.exports.useEffect(()=>{(async()=>{if(d){const o=await(await fetch(`http://dev-rare.srp.ai/maintenancemanagement/${d}`)).json();o&&v(o)}})()},[d]);const ui=[{value:"In-house",label:"In-house"},{value:"Outsource",label:"Outsource"}];return a.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const o=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();o&&v({...e,unitnumber:o==null?void 0:o.unitnumber,buildingname:o==null?void 0:o.building_name,projectname:o==null?void 0:o.project_name,communityname:o==null?void 0:o.community_name})}})()},[e==null?void 0:e.propertyid]),i(c,{children:i("div",{className:"xl:col-span-2 col-span-1",children:i(bi,{title:"View Maintenance Management Quotation",children:[i("div",{id:"content-to-print",className:"pdf-content",children:[i("div",{className:"w-[100%] col-span-3",children:i("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:l,lineNumber:68,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:67,columnNumber:25},void 0),i(c,{children:e!=null&&e.propertyid?i(c,{children:i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Unit number"},void 0,!1,{fileName:l,lineNumber:79,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:81,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:80,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:78,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:85,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:87,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:86,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:84,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Project Name"},void 0,!1,{fileName:l,lineNumber:91,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"},void 0,!1,{fileName:l,lineNumber:93,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:92,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:90,columnNumber:49},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Building Name"},void 0,!1,{fileName:l,lineNumber:97,columnNumber:53},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"},void 0,!1,{fileName:l,lineNumber:99,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:98,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:96,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:77,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:76,columnNumber:41},void 0)},void 0,!1):null},void 0,!1),i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:108,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:107,columnNumber:25},void 0),i("div",{className:"w-[100%] col-span-3 mt-[30px]",children:i("div",{className:"flex flex-wrap space-xy-5 w-[100%]",children:ui.map(r=>i(ti,{label:r.label,name:"house",value:r.value,checked:(e==null?void 0:e.house_type)===r.value,readOnly:!0},void 0,!1,{fileName:l,lineNumber:113,columnNumber:37},void 0))},void 0,!1,{fileName:l,lineNumber:111,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:110,columnNumber:25},void 0),(e==null?void 0:e.house_type)==="In-house"?i(c,{children:[i("div",{className:"flex mt-[25px] justify-between",children:[i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Company"},void 0,!1,{fileName:l,lineNumber:129,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.company?e==null?void 0:e.company:"Not Available"},void 0,!1,{fileName:l,lineNumber:131,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:130,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:128,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"City"},void 0,!1,{fileName:l,lineNumber:135,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"},void 0,!1,{fileName:l,lineNumber:137,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:136,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:134,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Emirate"},void 0,!1,{fileName:l,lineNumber:141,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.emirate?e==null?void 0:e.emirate:"Not Available"},void 0,!1,{fileName:l,lineNumber:143,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:142,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:140,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Email"},void 0,!1,{fileName:l,lineNumber:147,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:149,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:148,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:146,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:127,columnNumber:41},void 0),i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Date"},void 0,!1,{fileName:l,lineNumber:155,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qoutation_date?new Date(e==null?void 0:e.qoutation_date).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:157,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:156,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:154,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Invoice Number"},void 0,!1,{fileName:l,lineNumber:161,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:163,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:162,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:160,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"QTN Number"},void 0,!1,{fileName:l,lineNumber:167,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:169,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:168,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:166,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"TRN Number"},void 0,!1,{fileName:l,lineNumber:173,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.trn_number?e==null?void 0:e.trn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:175,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:174,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:172,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:153,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:126,columnNumber:37},void 0),i("div",{className:"w-[100%] flex item-center mt-[40px]",children:[i("div",{className:"w-[35%] p-[10px] disc-heading",children:i("p",{children:"DESCRIPTION OF SERVICES / SCOPE OF WORK"},void 0,!1,{fileName:l,lineNumber:182,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:181,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] border-left remaining-headings",children:i("p",{children:"QUANTITY"},void 0,!1,{fileName:l,lineNumber:185,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:184,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"UNIT PRICE"},void 0,!1,{fileName:l,lineNumber:188,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:187,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"TAXABLE VALUE AED"},void 0,!1,{fileName:l,lineNumber:191,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:190,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"VAT %"},void 0,!1,{fileName:l,lineNumber:194,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:193,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"VAT AMOUNT AED"},void 0,!1,{fileName:l,lineNumber:197,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:196,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] remaining-headings",children:i("p",{children:"TOTAL IN AED"},void 0,!1,{fileName:l,lineNumber:200,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:199,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:180,columnNumber:37},void 0),(e==null?void 0:e.total_count)>0&&i(c,{children:Array.from({length:e==null?void 0:e.total_count},(r,m)=>{var o,s,p,h,_,g,x,y,A,w,k,F,q,E,S,z,G,j,L,T,O,C,R,U,V,P,M,$,Q,B,Y,I,J,K,W,X;return i("div",{children:[i("div",{className:"w-[100%] flex",children:[i("div",{className:"w-[35%] p-[10px] disc-col-first items-center flex",children:i("p",{children:(s=(o=e==null?void 0:e.multiDescription)==null?void 0:o[m])!=null&&s.description?(h=(p=e==null?void 0:e.multiDescription)==null?void 0:p[m])==null?void 0:h.description:""},void 0,!1,{fileName:l,lineNumber:210,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:209,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(g=(_=e==null?void 0:e.multiDescription)==null?void 0:_[m])!=null&&g.quantity?(y=(x=e==null?void 0:e.multiDescription)==null?void 0:x[m])==null?void 0:y.quantity:""},void 0,!1,{fileName:l,lineNumber:213,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:212,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(w=(A=e==null?void 0:e.multiDescription)==null?void 0:A[m])!=null&&w.unit_price?(F=(k=e==null?void 0:e.multiDescription)==null?void 0:k[m])==null?void 0:F.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:216,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:215,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:(E=(q=e==null?void 0:e.multiDescription)==null?void 0:q[m])!=null&&E.total_price?(z=(S=e==null?void 0:e.multiDescription)==null?void 0:S[m])==null?void 0:z.total_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:219,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:218,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col items-center",children:i("p",{children:(j=(G=e==null?void 0:e.multiDescription)==null?void 0:G[m])!=null&&j.vat_per?((T=(L=e==null?void 0:e.multiDescription)==null?void 0:L[m])==null?void 0:T.vat_per)+" %":""},void 0,!1,{fileName:l,lineNumber:222,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:221,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((C=(O=e==null?void 0:e.multiDescription)==null?void 0:O[m])==null?void 0:C.vat_per)&&((U=(R=e==null?void 0:e.multiDescription)==null?void 0:R[m])==null?void 0:U.unit_price)?(P=(V=e==null?void 0:e.multiDescription)==null?void 0:V[m])==null?void 0:P.vat_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:225,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:224,columnNumber:61},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:(($=(M=e==null?void 0:e.multiDescription)==null?void 0:M[m])==null?void 0:$.vat_per)&&((B=(Q=e==null?void 0:e.multiDescription)==null?void 0:Q[m])==null?void 0:B.unit_price)?(I=(Y=e==null?void 0:e.multiDescription)==null?void 0:Y[m])==null?void 0:I.total_amount_aed.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:228,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:227,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:208,columnNumber:57},void 0),((K=(J=e==null?void 0:e.multiDescription)==null?void 0:J[m])==null?void 0:K.total_child_count)>0&&i(c,{children:Array.from({length:(X=(W=e==null?void 0:e.multiDescription)==null?void 0:W[m])==null?void 0:X.total_child_count},(fi,n)=>{var H,Z,D,ee,ie,le,me,oe,ne,ce,re,de,Ne,ae,ue,ve,be,te,fe,se,pe,he,_e,ge,xe,ye,Ae,we,ke,Fe,qe,Ee,Se,ze,Ge,je,Le,Te,Oe,Ce,Re,Ue,Ve,Pe,Me,$e,Qe,Be,Ye,Ie,Je,Ke,We,Xe,He,Ze,De,ei,ii,li,mi,oi,ni,ci,ri,di,Ni;return i("div",{className:"w-[100%] flex",children:[i("div",{className:"w-[35%] p-[10px] disc-col-first flex items-center",children:i("p",{children:(ee=(D=(Z=(H=e==null?void 0:e.multiDescription)==null?void 0:H[m])==null?void 0:Z.child_description)==null?void 0:D[n])!=null&&ee.description?"- "+((oe=(me=(le=(ie=e==null?void 0:e.multiDescription)==null?void 0:ie[m])==null?void 0:le.child_description)==null?void 0:me[n])==null?void 0:oe.description):""},void 0,!1,{fileName:l,lineNumber:237,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:236,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(de=(re=(ce=(ne=e==null?void 0:e.multiDescription)==null?void 0:ne[m])==null?void 0:ce.child_description)==null?void 0:re[n])!=null&&de.quantity?(ve=(ue=(ae=(Ne=e==null?void 0:e.multiDescription)==null?void 0:Ne[m])==null?void 0:ae.child_description)==null?void 0:ue[n])==null?void 0:ve.quantity:""},void 0,!1,{fileName:l,lineNumber:240,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:239,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:(se=(fe=(te=(be=e==null?void 0:e.multiDescription)==null?void 0:be[m])==null?void 0:te.child_description)==null?void 0:fe[n])!=null&&se.unit_price?(ge=(_e=(he=(pe=e==null?void 0:e.multiDescription)==null?void 0:pe[m])==null?void 0:he.child_description)==null?void 0:_e[n])==null?void 0:ge.unit_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:243,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:242,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:(we=(Ae=(ye=(xe=e==null?void 0:e.multiDescription)==null?void 0:xe[m])==null?void 0:ye.child_description)==null?void 0:Ae[n])!=null&&we.total_price?(Se=(Ee=(qe=(Fe=(ke=e==null?void 0:e.multiDescription)==null?void 0:ke[m])==null?void 0:Fe.child_description)==null?void 0:qe[n])==null?void 0:Ee.total_price)==null?void 0:Se.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:246,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:245,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col items-center",children:i("p",{children:(Le=(je=(Ge=(ze=e==null?void 0:e.multiDescription)==null?void 0:ze[m])==null?void 0:Ge.child_description)==null?void 0:je[n])!=null&&Le.vat_per?((Re=(Ce=(Oe=(Te=e==null?void 0:e.multiDescription)==null?void 0:Te[m])==null?void 0:Oe.child_description)==null?void 0:Ce[n])==null?void 0:Re.vat_per)+" %":""},void 0,!1,{fileName:l,lineNumber:249,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:248,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((Me=(Pe=(Ve=(Ue=e==null?void 0:e.multiDescription)==null?void 0:Ue[m])==null?void 0:Ve.child_description)==null?void 0:Pe[n])==null?void 0:Me.vat_per)&&((Ye=(Be=(Qe=($e=e==null?void 0:e.multiDescription)==null?void 0:$e[m])==null?void 0:Qe.child_description)==null?void 0:Be[n])==null?void 0:Ye.unit_price)?(Xe=(We=(Ke=(Je=(Ie=e==null?void 0:e.multiDescription)==null?void 0:Ie[m])==null?void 0:Je.child_description)==null?void 0:Ke[n])==null?void 0:We.vat_amount_aed)==null?void 0:Xe.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:252,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:251,columnNumber:77},void 0),i("div",{className:"flex-1  p-[10px] disc-col flex items-center",children:i("p",{children:((ei=(De=(Ze=(He=e==null?void 0:e.multiDescription)==null?void 0:He[m])==null?void 0:Ze.child_description)==null?void 0:De[n])==null?void 0:ei.vat_per)&&((oi=(mi=(li=(ii=e==null?void 0:e.multiDescription)==null?void 0:ii[m])==null?void 0:li.child_description)==null?void 0:mi[n])==null?void 0:oi.unit_price)?(Ni=(di=(ri=(ci=(ni=e==null?void 0:e.multiDescription)==null?void 0:ni[m])==null?void 0:ci.child_description)==null?void 0:ri[n])==null?void 0:di.total_amount_aed)==null?void 0:Ni.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:255,columnNumber:81},void 0)},void 0,!1,{fileName:l,lineNumber:254,columnNumber:77},void 0)]},n+1,!0,{fileName:l,lineNumber:235,columnNumber:73},void 0)})},void 0,!1)]},m+1,!0,{fileName:l,lineNumber:207,columnNumber:53},void 0)})},void 0,!1),i("div",{className:"w-[100%] flex item-center",children:[i("div",{className:"w-[35%] p-[10px] total-col",children:i("p",{className:"text-center",children:"T O T A L"},void 0,!1,{fileName:l,lineNumber:269,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:268,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:272,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:271,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:275,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:274,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.total_price?(b=e==null?void 0:e.total_price)==null?void 0:b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:278,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:277,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{},void 0,!1,{fileName:l,lineNumber:281,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:280,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.vat_amount_aed?(t=e==null?void 0:e.vat_amount_aed)==null?void 0:t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:284,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:283,columnNumber:41},void 0),i("div",{className:"flex-1  p-[10px] disc-col",children:i("p",{children:e!=null&&e.total_amount_aed?(f=e==null?void 0:e.total_amount_aed)==null?void 0:f.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},void 0,!1,{fileName:l,lineNumber:287,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:286,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:267,columnNumber:37},void 0)]},void 0,!0):null,(e==null?void 0:e.house_type)==="Outsource"?i(c,{children:i("div",{className:"flex mt-[25px] justify-between",children:[i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Company"},void 0,!1,{fileName:l,lineNumber:298,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.company?e==null?void 0:e.company:"Not Available"},void 0,!1,{fileName:l,lineNumber:300,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:299,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:297,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"City"},void 0,!1,{fileName:l,lineNumber:304,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"},void 0,!1,{fileName:l,lineNumber:306,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:305,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:303,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Emirate"},void 0,!1,{fileName:l,lineNumber:310,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.emirate?e==null?void 0:e.emirate:"Not Available"},void 0,!1,{fileName:l,lineNumber:312,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:311,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:309,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Email"},void 0,!1,{fileName:l,lineNumber:316,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:318,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:317,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:315,columnNumber:45},void 0),i("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Invoice Attachment"},void 0,!1,{fileName:l,lineNumber:322,columnNumber:49},void 0),i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(e==null?void 0:e.invoice_attachment)&&(e==null?void 0:e.invoice_attachment)!==""&&(e==null?void 0:e.invoice_attachment)!==void 0&&(e==null?void 0:e.invoice_attachment)!=="undefined"&&(e==null?void 0:e.invoice_attachment)!==null&&(e==null?void 0:e.invoice_attachment)!=="null"?i("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.invoice_attachment}`,children:decodeURIComponent(e==null?void 0:e.invoice_attachment).split("/").pop()},void 0,!1,{fileName:l,lineNumber:328,columnNumber:61},void 0):i("p",{children:"Not Available"},void 0,!1,{fileName:l,lineNumber:329,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:325,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:321,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:296,columnNumber:41},void 0),i("div",{className:"w-[49%] flex flex-col gap-y-[20px]",children:[i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Date"},void 0,!1,{fileName:l,lineNumber:336,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qoutation_date?new Date(e==null?void 0:e.qoutation_date).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:338,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:337,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:335,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"Invoice Number"},void 0,!1,{fileName:l,lineNumber:342,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.invoice_number?e==null?void 0:e.invoice_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:344,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:343,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:341,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"QTN Number"},void 0,!1,{fileName:l,lineNumber:348,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.qtn_number?e==null?void 0:e.qtn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:350,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:349,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:347,columnNumber:45},void 0),i("div",{className:"fromGroup       ",children:[i("label",{className:"block capitalize form-label  ",children:"TRN Number"},void 0,!1,{fileName:l,lineNumber:354,columnNumber:49},void 0),i("div",{className:"relative ",children:i("p",{className:"  form-control py-2   ",children:e!=null&&e.trn_number?e==null?void 0:e.trn_number:"Not Available"},void 0,!1,{fileName:l,lineNumber:356,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:355,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:353,columnNumber:45},void 0),i("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Quotation Attachment"},void 0,!1,{fileName:l,lineNumber:360,columnNumber:49},void 0),i("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:(e==null?void 0:e.quotation_attachment)&&(e==null?void 0:e.quotation_attachment)!==""&&(e==null?void 0:e.quotation_attachment)!==void 0&&(e==null?void 0:e.quotation_attachment)!=="undefined"&&(e==null?void 0:e.quotation_attachment)!==null&&(e==null?void 0:e.quotation_attachment)!=="null"?i("a",{target:"_blank",href:`http://dev-rare.srp.ai${e==null?void 0:e.quotation_attachment}`,children:decodeURIComponent(e==null?void 0:e.quotation_attachment).split("/").pop()},void 0,!1,{fileName:l,lineNumber:366,columnNumber:61},void 0):i("p",{children:"Not Available"},void 0,!1,{fileName:l,lineNumber:367,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:363,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:359,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:334,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:295,columnNumber:37},void 0)},void 0,!1):null]},void 0,!0,{fileName:l,lineNumber:66,columnNumber:21},void 0),i("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative mt-[35px]",children:[i("div",{className:"ltr:text-right rtl:text-left ",children:N!=null&&N.type?i(u,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/owner-maintenancemanagement",children:"Cancel"},void 0,!1,{fileName:l,lineNumber:381,columnNumber:37},void 0):i(u,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/allmaintenancemanagement",children:"Cancel"},void 0,!1,{fileName:l,lineNumber:382,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:378,columnNumber:25},void 0),i("div",{className:"ltr:text-right rtl:text-left",children:i(u,{to:`/maintenancemanagementform/${d}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:l,lineNumber:386,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:385,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:377,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:64,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:63,columnNumber:13},void 0)},void 0,!1)};export{_i as default};
