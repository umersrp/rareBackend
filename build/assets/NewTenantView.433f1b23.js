import{bt as Fe,r as a,j as i,F as N,e as Pe,I as s,cn as u,bP as Te}from"./index.4c1e8891.js";import{a as Re,t as Ue,b as We,i as Ve,p as Be,m as Ye}from"./id-card.974d3149.js";import{c as h}from"./calendar.6b75ea36.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\NewTenantView.jsx";const Oe=({showVideo:n,handleClose:m,videoLink:x,youtubeVideo:f})=>i("div",{className:"thumbnail-container",children:n&&i("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[1400px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[i("h5",{className:" text-[18px] capitalize",children:"Youtube Video"},void 0,!1,{fileName:l,lineNumber:210,columnNumber:29},void 0),i("img",{src:Te,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:m},void 0,!1,{fileName:l,lineNumber:211,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:208,columnNumber:25},void 0),n&&f?i("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:i("div",{className:"w-[100%] flex items-end justify-center",children:i("iframe",{title:"YouTube Link",src:f,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:l,lineNumber:216,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:215,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:214,columnNumber:29},void 0):i("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:l,lineNumber:230,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:207,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:206,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:204,columnNumber:9},void 0),Qe=()=>{var g,y,C,w,_,A,j,k,$,q,I,S,L,E,F,P,T,R,U,W,V,B,Y,O,M,z,G,H,J,K,Q,X,Z,D,ee,ie,le,oe,re,me,ce,de,ae,se,ne,ue,Ne,te,ve,fe;const{id:n}=Fe(),[m,x]=a.exports.useState("");a.exports.useEffect(()=>{(async()=>{if(n){const d=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${n}`)).json();d&&x(d)}})()},[n]);const[f,xe]=a.exports.useState("");a.exports.useEffect(()=>{(async()=>{if(m!=null&&m.porpertyid){const d=await(await fetch(`http://dev-rare.srp.ai/property/${m==null?void 0:m.porpertyid}`)).json();d&&xe(d)}})()},[m==null?void 0:m.porpertyid]);const[Me,ge]=a.exports.useState("");a.exports.useEffect(()=>{(async()=>{if(m!=null&&m.employeeid){const d=await(await fetch(`http://dev-rare.srp.ai/employees/${m==null?void 0:m.employeeid}`)).json();d&&ge(d)}})()},[m==null?void 0:m.employeeid]);const[e,ye]=a.exports.useState({});a.exports.useEffect(()=>{n&&(async()=>{const d=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/${n}`)).json();ye(d)})()},[n]);const[ze,Ce]=a.exports.useState("");a.exports.useEffect(()=>{var o,r,d,v,be,pe,he;if(e!=null&&e.property){const je=(o=e==null?void 0:e.property)==null?void 0:o.amenitiesimages.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),ke=(r=e==null?void 0:e.property)==null?void 0:r.buildingelevation.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),$e=(d=e==null?void 0:e.property)==null?void 0:d.floorplan.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),qe=(v=e==null?void 0:e.property)==null?void 0:v.plotplanattachment.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),Ie=(be=e==null?void 0:e.property)==null?void 0:be.propertyimages.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),Se=(pe=e==null?void 0:e.property)==null?void 0:pe.typicalfloorplan.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),Le=(he=e==null?void 0:e.property)==null?void 0:he.unitplanattachment.filter(c=>c!=="").map(c=>"http://dev-rare.srp.ai"+c),Ee=[...je,...ke,...$e,...qe,...Ie,...Se,...Le];Ce(Ee)}},[(g=e==null?void 0:e.property)==null?void 0:g.amenitiesimages,(y=e==null?void 0:e.property)==null?void 0:y.buildingelevation,(C=e==null?void 0:e.property)==null?void 0:C.plotplanattachment,(w=e==null?void 0:e.property)==null?void 0:w.propertyimages,(_=e==null?void 0:e.property)==null?void 0:_.typicalfloorplan,(A=e==null?void 0:e.property)==null?void 0:A.unitplanattachment]);const[b,we]=a.exports.useState("");a.exports.useEffect(()=>{var o,r;if((o=e==null?void 0:e.property)!=null&&o.youtubelink){let d=(r=e==null?void 0:e.property)==null?void 0:r.youtubelink,v=d==null?void 0:d.replace("watch?v=","embed/");we(v)}},[(j=e==null?void 0:e.property)==null?void 0:j.youtubelink]);const[p,_e]=a.exports.useState(!1),Ae=()=>{p===!0&&_e(!1)},t=(o,r)=>{saveAs(o,r)};return i(N,{children:m&&i("div",{className:"card-bo",children:i(Pe,{children:[i("div",{children:[i("div",{className:"flex justify-end",children:i("button",{onClick:()=>{var o;for(const r in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[r])=="string"&&((e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[r].toLowerCase().endsWith(".png")))){const d=e==null?void 0:e.tenantContract[r].split("/").pop();saveAs(`http://dev-rare.srp.ai/${e==null?void 0:e.tenantContract[r]}`,d)}for(const r of((o=e==null?void 0:e.tenantContract)==null?void 0:o.chequeDetails)||[])if(typeof(r==null?void 0:r.chequeimage)=="string"&&((r==null?void 0:r.chequeimage.toLowerCase().toLowerCase().endsWith(".pdf"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".jpg"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".jpeg"))||(r==null?void 0:r.chequeimage.toLowerCase().endsWith(".png")))){const d=r==null?void 0:r.chequeimage.split("/").pop();saveAs(`http://dev-rare.srp.ai/${r==null?void 0:r.chequeimage}`,d)}},className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[i(s,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"},void 0,!1,{fileName:l,lineNumber:450,columnNumber:37},void 0),"Download All Files"]},void 0,!0,{fileName:l,lineNumber:449,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:448,columnNumber:29},void 0),i(N,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:447,columnNumber:25},void 0),i("div",{className:"flex",children:i("div",{className:"w-[70%]",children:[i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:[i(s,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] "},void 0,!1,{fileName:l,lineNumber:554,columnNumber:37},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Property name"},void 0,!1,{fileName:l,lineNumber:556,columnNumber:41},void 0),i("h4",{className:"",children:(k=e==null?void 0:e.property)!=null&&k.unitnumber?(($=e==null?void 0:e.property)==null?void 0:$.unitnumber)+((q=e==null?void 0:e.property)!=null&&q.community_name?" | "+((I=e==null?void 0:e.property)==null?void 0:I.community_name):"")+((S=e==null?void 0:e.property)!=null&&S.project_name?" | "+((L=e==null?void 0:e.property)==null?void 0:L.project_name):"")+((E=e==null?void 0:e.property)!=null&&E.building_name?" | "+((F=e==null?void 0:e.property)==null?void 0:F.building_name):""):"Not Available"},void 0,!1,{fileName:l,lineNumber:557,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:555,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:553,columnNumber:33},void 0),i("div",{className:"w-[95%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:561,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:560,columnNumber:33},void 0),i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:i("h4",{children:"Tenant Details"},void 0,!1,{fileName:l,lineNumber:564,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:563,columnNumber:33},void 0),i("div",{className:"flex",children:i("div",{className:"w-[100%]",children:[i("div",{className:"flex gap-x-[48px] ml-[20px] m-[30px] ",children:[i("div",{className:"flex flex-col gap-[50px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:Re,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:571,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Tenant name"},void 0,!1,{fileName:l,lineNumber:573,columnNumber:57},void 0),i("span",{className:"si-distance",children:(P=e==null?void 0:e.tenantContract)!=null&&P.guestname?(T=e==null?void 0:e.tenantContract)==null?void 0:T.guestname:"Not Available"},void 0,!1,{fileName:l,lineNumber:574,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:572,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:570,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:569,columnNumber:45},void 0),i("div",{className:"flex flex-col gap-[50px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:Ue,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:580,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Tenant Email"},void 0,!1,{fileName:l,lineNumber:582,columnNumber:57},void 0),i("span",{className:"si-distance",children:(R=e==null?void 0:e.tenantContract)!=null&&R.email?(U=e==null?void 0:e.tenantContract)==null?void 0:U.email:"Not Available"},void 0,!1,{fileName:l,lineNumber:583,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:581,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:579,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:578,columnNumber:45},void 0),i("div",{className:"flex flex-col gap-[50px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:We,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:590,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Mobile no"},void 0,!1,{fileName:l,lineNumber:593,columnNumber:57},void 0),i("span",{className:"si-distance",children:(W=e==null?void 0:e.tenantContract)!=null&&W.mobilenumber?(V=e==null?void 0:e.tenantContract)==null?void 0:V.mobilenumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:594,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:592,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:589,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:588,columnNumber:45},void 0),i("div",{className:"flex flex-col gap-[50px]",children:i("div",{className:"flex gap-x-[10px] items-start ml-[70px]",children:[i("img",{src:Ve,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:602,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Nationality"},void 0,!1,{fileName:l,lineNumber:604,columnNumber:57},void 0),i("span",{className:"si-distance",children:(B=e==null?void 0:e.tenantContract)!=null&&B.nationality?(Y=e==null?void 0:e.tenantContract)==null?void 0:Y.nationality:"Not Available"},void 0,!1,{fileName:l,lineNumber:605,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:603,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:601,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:600,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:568,columnNumber:41},void 0),i("div",{className:"flex gap-x-[48px] ml-[20px] m-[30px] ",children:i("div",{className:"flex gap-x-[10px] items-start ",children:[i("img",{src:Be,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:613,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Passport no"},void 0,!1,{fileName:l,lineNumber:615,columnNumber:53},void 0),i("span",{className:"si-distance",children:(O=e==null?void 0:e.tenantContract)!=null&&O.passportnumber?(M=e==null?void 0:e.tenantContract)==null?void 0:M.passportnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:616,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:614,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:612,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:611,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:567,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:566,columnNumber:33},void 0),i("div",{className:"w-[95%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:623,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:622,columnNumber:33},void 0),i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:i("h4",{children:"Contract detail"},void 0,!1,{fileName:l,lineNumber:626,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:625,columnNumber:33},void 0),i("div",{className:"flex",children:i("div",{className:"w-[100%]",children:i("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:i("div",{className:"flex gap-x-[28px] items-start",children:[i("img",{src:h,alt:"Calendar",className:"icon-pic mt-1"},void 0,!1,{fileName:l,lineNumber:632,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"execution date"},void 0,!1,{fileName:l,lineNumber:634,columnNumber:53},void 0),i("span",{className:"si-distance",children:(z=e==null?void 0:e.tenantContract)!=null&&z.contractexecutiondate?new Date((G=e==null?void 0:e.tenantContract)==null?void 0:G.contractexecutiondate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:635,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:633,columnNumber:49},void 0),i("div",{className:"flex items-start gap-4",children:[i("img",{src:h,alt:"Calendar",className:"icon-pic mt-1"},void 0,!1,{fileName:l,lineNumber:642,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:" start date"},void 0,!1,{fileName:l,lineNumber:644,columnNumber:57},void 0),i("span",{className:"si-distance",children:(H=e==null?void 0:e.tenantContract)!=null&&H.contractstartdate?new Date((J=e==null?void 0:e.tenantContract)==null?void 0:J.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:645,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:643,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:641,columnNumber:49},void 0),i("div",{className:"flex items-start gap-4 ml-[35px]",children:[i("img",{src:h,alt:"Calendar",className:"icon-pic mt-1"},void 0,!1,{fileName:l,lineNumber:653,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"end date"},void 0,!1,{fileName:l,lineNumber:655,columnNumber:57},void 0),i("span",{className:"si-distance",children:(K=e==null?void 0:e.tenantContract)!=null&&K.contractenddate?new Date((Q=e==null?void 0:e.tenantContract)==null?void 0:Q.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:656,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:654,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:652,columnNumber:49},void 0),i("div",{className:"flex items-start gap-4 ml-[62px]",children:[i("img",{src:Ye,alt:"Money",className:"icon-pic mt-1"},void 0,!1,{fileName:l,lineNumber:664,columnNumber:53},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Rental amount"},void 0,!1,{fileName:l,lineNumber:666,columnNumber:57},void 0),i("span",{className:"si-distance",children:(X=e==null?void 0:e.tenantContract)!=null&&X.rentalamount?((Z=e==null?void 0:e.tenantContract)==null?void 0:Z.rentalamount)+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:667,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:665,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:663,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:631,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:630,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:629,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:628,columnNumber:33},void 0),i("div",{className:"w-[95%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:745,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:744,columnNumber:33},void 0),i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:i("h4",{children:"Documents detail"},void 0,!1,{fileName:l,lineNumber:748,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:747,columnNumber:33},void 0),i("div",{className:"w-[100%]",children:[i("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:i("div",{className:"flex gap-x-[25px] items-start",children:[i("div",{className:"flex items-start gap-4 ",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:763,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"ejari certificate doc"},void 0,!1,{fileName:l,lineNumber:765,columnNumber:53},void 0),i("div",{className:"flex items-center justify-start gap-x-[10px]",children:(D=e==null?void 0:e.tenantContract)!=null&&D.ejari_certificate_doc?i(N,{children:[i("a",{className:"si-distance",href:"http://dev-rare.srp.ai/"+((ee=e==null?void 0:e.tenantContract)==null?void 0:ee.ejari_certificate_doc),target:"_blank",children:i(s,{icon:"heroicons-outline:eye",className:"text-[25px]"},void 0,!1,{fileName:l,lineNumber:771,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:770,columnNumber:69},void 0),i("button",{onClick:()=>{var o,r;return t(`http://dev-rare.srp.ai/${(o=e==null?void 0:e.tenantContract)==null?void 0:o.ejari_certificate_doc}`,`${decodeURIComponent((r=e==null?void 0:e.tenantContract)==null?void 0:r.ejari_certificate_doc).split("/").pop()}`)},className:"btn-download",children:i(s,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:l,lineNumber:774,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:773,columnNumber:69},void 0)]},void 0,!0):"Not Available"},void 0,!1,{fileName:l,lineNumber:766,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:764,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:762,columnNumber:45},void 0),i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:784,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"tenancy contract doc"},void 0,!1,{fileName:l,lineNumber:786,columnNumber:53},void 0),i("div",{className:"flex items-center justify-start gap-x-[10px]",children:(ie=e==null?void 0:e.tenantContract)!=null&&ie.tenancy_contract_doc?i(N,{children:[i("a",{className:"si-distance",href:"http://dev-rare.srp.ai/"+((le=e==null?void 0:e.tenantContract)==null?void 0:le.tenancy_contract_doc),target:"_blank",children:i(s,{icon:"heroicons-outline:eye",className:"text-[25px]"},void 0,!1,{fileName:l,lineNumber:793,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:792,columnNumber:69},void 0),i("button",{onClick:()=>{var o,r;return t(`http://dev-rare.srp.ai/${(o=e==null?void 0:e.tenantContract)==null?void 0:o.tenancy_contract_doc}`,`${decodeURIComponent((r=e==null?void 0:e.tenantContract)==null?void 0:r.tenancy_contract_doc).split("/").pop()}`)},className:"btn-download",children:i(s,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:l,lineNumber:796,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:795,columnNumber:69},void 0)]},void 0,!0):"Not Available"},void 0,!1,{fileName:l,lineNumber:788,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:785,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:783,columnNumber:45},void 0),i("div",{className:"flex gap-x-[10px] items-start ml-[28px]",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:805,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"tenancy contract doc"},void 0,!1,{fileName:l,lineNumber:807,columnNumber:53},void 0),i("div",{className:"flex items-center justify-start gap-x-[10px]",children:(oe=e==null?void 0:e.tenantContract)!=null&&oe.tenancy_contract_doc?i(N,{children:[i("a",{className:"si-distance",href:"http://dev-rare.srp.ai/"+((re=e==null?void 0:e.tenantContract)==null?void 0:re.tenancy_contract_doc),target:"_blank",children:i(s,{icon:"heroicons-outline:eye",className:"text-[25px]"},void 0,!1,{fileName:l,lineNumber:814,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:813,columnNumber:69},void 0),i("button",{onClick:()=>{var o,r;return t(`http://dev-rare.srp.ai/${(o=e==null?void 0:e.tenantContract)==null?void 0:o.tenancy_contract_doc}`,`${decodeURIComponent((r=e==null?void 0:e.tenantContract)==null?void 0:r.tenancy_contract_doc).split("/").pop()}`)},className:"btn-download",children:i(s,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:l,lineNumber:817,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:816,columnNumber:69},void 0)]},void 0,!0):"Not Available"},void 0,!1,{fileName:l,lineNumber:809,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:806,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:804,columnNumber:45},void 0),i("div",{className:"flex gap-x-[10px] items-start ml-[28px]",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:826,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"key receipt doc"},void 0,!1,{fileName:l,lineNumber:828,columnNumber:53},void 0),i("div",{className:"flex items-center justify-start gap-x-[10px]",children:(me=e==null?void 0:e.tenantContract)!=null&&me.key_receipt_doc?i(N,{children:[i("a",{className:"si-distance",href:"http://dev-rare.srp.ai/"+((ce=e==null?void 0:e.tenantContract)==null?void 0:ce.key_receipt_doc),target:"_blank",children:i(s,{icon:"heroicons-outline:eye",className:"text-[25px]"},void 0,!1,{fileName:l,lineNumber:834,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:833,columnNumber:69},void 0),i("button",{onClick:()=>{var o,r;return t(`http://dev-rare.srp.ai/${(o=e==null?void 0:e.tenantContract)==null?void 0:o.key_receipt_doc}`,`${decodeURIComponent((r=e==null?void 0:e.tenantContract)==null?void 0:r.key_receipt_doc).split("/").pop()}`)},className:"btn-download",children:i(s,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:l,lineNumber:837,columnNumber:73},void 0)},void 0,!1,{fileName:l,lineNumber:836,columnNumber:69},void 0)]},void 0,!0):"Not Available"},void 0,!1,{fileName:l,lineNumber:829,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:827,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:825,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:752,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:751,columnNumber:37},void 0),i("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:[i("div",{className:"flex gap-x-[25px] items-start",children:i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:851,columnNumber:49},void 0),i("div",{children:[i("span",{className:"font-bold",children:"No Of Cheque Or Installment"},void 0,!1,{fileName:l,lineNumber:853,columnNumber:53},void 0),i("span",{className:"si-distance",children:((de=e==null?void 0:e.tenantContract)==null?void 0:de.noofchequeorinstallment)&&((ae=e==null?void 0:e.tenantContract)==null?void 0:ae.noofchequeorinstallment)!==void 0&&((se=e==null?void 0:e.tenantContract)==null?void 0:se.noofchequeorinstallment)!=="undefined"?(ne=e==null?void 0:e.tenantContract)==null?void 0:ne.noofchequeorinstallment:"Not Available"},void 0,!1,{fileName:l,lineNumber:854,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:852,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:850,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:849,columnNumber:41},void 0),i("div",{className:"flex  gap-[50px] items-start"},void 0,!1,{fileName:l,lineNumber:859,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:848,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:750,columnNumber:33},void 0),((ue=e==null?void 0:e.tenantContract)==null?void 0:ue.chequeDetails)&&((te=(Ne=e==null?void 0:e.tenantContract)==null?void 0:Ne.chequeDetails)==null?void 0:te.length)?i(N,{children:[i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:869,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:868,columnNumber:45},void 0),(fe=(ve=e==null?void 0:e.tenantContract)==null?void 0:ve.chequeDetails)==null?void 0:fe.map((o,r)=>i("div",{children:[i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:i("h4",{children:"Cheque detail"},void 0,!1,{fileName:l,lineNumber:877,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:876,columnNumber:61},void 0),i("div",{className:"flex gap-x-[25px] ml-[20px] m-[30px] ",children:[i("div",{className:"flex  gap-[50px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:882,columnNumber:73},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Cheque Number"},void 0,!1,{fileName:l,lineNumber:884,columnNumber:77},void 0),i("span",{className:"si-distance",children:o!=null&&o.chequenumbe?o==null?void 0:o.chequenumbe:"Not Available"},void 0,!1,{fileName:l,lineNumber:885,columnNumber:77},void 0)]},void 0,!0,{fileName:l,lineNumber:883,columnNumber:73},void 0)]},void 0,!0,{fileName:l,lineNumber:881,columnNumber:69},void 0),i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:889,columnNumber:73},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Cheque Date"},void 0,!1,{fileName:l,lineNumber:891,columnNumber:77},void 0),i("span",{className:"si-distance",children:[o!=null&&o.chequedate?new Date(o==null?void 0:o.chequedate).toDateString():"Not Available"," "]},void 0,!0,{fileName:l,lineNumber:892,columnNumber:77},void 0)]},void 0,!0,{fileName:l,lineNumber:890,columnNumber:73},void 0)]},void 0,!0,{fileName:l,lineNumber:888,columnNumber:69},void 0),i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:896,columnNumber:73},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Cheque Image"},void 0,!1,{fileName:l,lineNumber:898,columnNumber:77},void 0),i("div",{className:"flex items-center justify-start gap-x-[10px]",children:o!=null&&o.chequeimage?i(N,{children:[i("a",{className:"si-distance",href:"http://dev-rare.srp.ai/"+(o==null?void 0:o.chequeimage),target:"_blank",children:i(s,{icon:"heroicons-outline:eye",className:"text-[25px]"},void 0,!1,{fileName:l,lineNumber:904,columnNumber:97},void 0)},void 0,!1,{fileName:l,lineNumber:903,columnNumber:93},void 0),i("button",{onClick:()=>t(`http://dev-rare.srp.ai/${o==null?void 0:o.chequeimage}`,`${decodeURIComponent(o==null?void 0:o.chequeimage).split("/").pop()}`),className:"btn-download",children:i(s,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:l,lineNumber:907,columnNumber:97},void 0)},void 0,!1,{fileName:l,lineNumber:906,columnNumber:93},void 0)]},void 0,!0):"Not Available"},void 0,!1,{fileName:l,lineNumber:899,columnNumber:77},void 0)]},void 0,!0,{fileName:l,lineNumber:897,columnNumber:73},void 0)]},void 0,!0,{fileName:l,lineNumber:895,columnNumber:69},void 0)]},void 0,!0,{fileName:l,lineNumber:880,columnNumber:65},void 0),i("div",{className:"flex flex-col gap-[50px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[i("img",{src:u,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:l,lineNumber:919,columnNumber:73},void 0),i("div",{children:[i("span",{className:"font-bold",children:"Total Amount"},void 0,!1,{fileName:l,lineNumber:921,columnNumber:77},void 0),i("span",{className:"si-distance",children:(o==null?void 0:o.totalamount)&&(o==null?void 0:o.totalamount)!==void 0&&(o==null?void 0:o.totalamount)!=="undefined"?parseFloat(o==null?void 0:o.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:922,columnNumber:77},void 0)]},void 0,!0,{fileName:l,lineNumber:920,columnNumber:73},void 0)]},void 0,!0,{fileName:l,lineNumber:918,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:917,columnNumber:65},void 0)]},r+1,!0,{fileName:l,lineNumber:879,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:875,columnNumber:57},void 0))]},void 0,!0):null]},void 0,!0,{fileName:l,lineNumber:552,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:551,columnNumber:25},void 0),i("div",{className:"w-[100%] col-span-3",children:i("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:962,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:961,columnNumber:25},void 0),i("div",{id:"video",className:"w-[100%] col-span-2",children:[i("h3",{className:"headings"},void 0,!1,{fileName:l,lineNumber:965,columnNumber:29},void 0),p&&(m==null?void 0:m.youtubelink)&&b?i("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:i("div",{className:"w-[100%] flex items-end justify-center",children:i("iframe",{title:"YouTube Link",src:b,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:l,lineNumber:970,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:969,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:968,columnNumber:33},void 0):i("span",{className:"si-distance pl-[38px]"},void 0,!1,{fileName:l,lineNumber:984,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:964,columnNumber:25},void 0),i(Oe,{showVideo:p,handleClose:Ae,videoLink:m==null?void 0:m.youtubelink,youtubeVideo:b},void 0,!1,{fileName:l,lineNumber:989,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:446,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:444,columnNumber:17},void 0)},void 0,!1)};export{Qe as default};
