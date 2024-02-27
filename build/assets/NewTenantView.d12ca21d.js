import{bu as Fe,r as t,j as s,F as m,c as l,f as Pe,I as p,ch as d,bP as Te}from"./index.93a34628.js";import{a as We,t as Re,b as Ue,i as Be,p as Ye,m as Ve}from"./id-card.974d3149.js";import{c as u}from"./calendar.6b75ea36.js";const Me=({showVideo:n,handleClose:r,videoLink:v,youtubeVideo:f})=>s("div",{className:"thumbnail-container",children:n&&s("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[1400px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[s("h5",{className:" text-[18px] capitalize",children:"Youtube Video"}),s("img",{src:Te,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:r})]}),n&&f?s("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:s("div",{className:"w-[100%] flex items-end justify-center",children:s("iframe",{title:"YouTube Link",src:f,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):s("span",{className:"si-distance pl-[38px]",children:"Not available"})]})})}),Qe=()=>{var y,b,C,w,_,A,j,k,$,q,I,S,L,E,F,P,T,W,R,U,B,Y,V,M,O,z,G,H,J,K,Q,X,Z,D,ee,se,ce,le,oe,re,ie,ae,te,pe,ne,de,me,he,xe,fe;const{id:n}=Fe(),[r,v]=t.exports.useState("");t.exports.useEffect(()=>{(async()=>{if(n){const a=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/${n}`)).json();a&&v(a)}})()},[n]);const[f,ve]=t.exports.useState("");t.exports.useEffect(()=>{(async()=>{if(r!=null&&r.porpertyid){const a=await(await fetch(`http://portals.rarehomesgroup.com/property/${r==null?void 0:r.porpertyid}`)).json();a&&ve(a)}})()},[r==null?void 0:r.porpertyid]);const[Oe,ye]=t.exports.useState("");t.exports.useEffect(()=>{(async()=>{if(r!=null&&r.employeeid){const a=await(await fetch(`http://portals.rarehomesgroup.com/employees/${r==null?void 0:r.employeeid}`)).json();a&&ye(a)}})()},[r==null?void 0:r.employeeid]);const[e,be]=t.exports.useState({});t.exports.useEffect(()=>{n&&(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/${n}`)).json();be(a)})()},[n]);const[ze,Ce]=t.exports.useState("");t.exports.useEffect(()=>{var c,o,a,x,Ne,ge,ue;if(e!=null&&e.property){const je=(c=e==null?void 0:e.property)==null?void 0:c.amenitiesimages.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),ke=(o=e==null?void 0:e.property)==null?void 0:o.buildingelevation.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),$e=(a=e==null?void 0:e.property)==null?void 0:a.floorplan.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),qe=(x=e==null?void 0:e.property)==null?void 0:x.plotplanattachment.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),Ie=(Ne=e==null?void 0:e.property)==null?void 0:Ne.propertyimages.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),Se=(ge=e==null?void 0:e.property)==null?void 0:ge.typicalfloorplan.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),Le=(ue=e==null?void 0:e.property)==null?void 0:ue.unitplanattachment.filter(i=>i!=="").map(i=>"http://portals.rarehomesgroup.com"+i),Ee=[...je,...ke,...$e,...qe,...Ie,...Se,...Le];Ce(Ee)}},[(y=e==null?void 0:e.property)==null?void 0:y.amenitiesimages,(b=e==null?void 0:e.property)==null?void 0:b.buildingelevation,(C=e==null?void 0:e.property)==null?void 0:C.plotplanattachment,(w=e==null?void 0:e.property)==null?void 0:w.propertyimages,(_=e==null?void 0:e.property)==null?void 0:_.typicalfloorplan,(A=e==null?void 0:e.property)==null?void 0:A.unitplanattachment]);const[N,we]=t.exports.useState("");t.exports.useEffect(()=>{var c,o;if((c=e==null?void 0:e.property)!=null&&c.youtubelink){let a=(o=e==null?void 0:e.property)==null?void 0:o.youtubelink,x=a==null?void 0:a.replace("watch?v=","embed/");we(x)}},[(j=e==null?void 0:e.property)==null?void 0:j.youtubelink]);const[g,_e]=t.exports.useState(!1),Ae=()=>{g===!0&&_e(!1)},h=(c,o)=>{saveAs(c,o)};return s(m,{children:r&&s("div",{className:"card-bo",children:l(Pe,{children:[l("div",{children:[s("div",{className:"flex justify-end",children:l("button",{onClick:()=>{var c;for(const o in e==null?void 0:e.tenantContract)if(typeof(e==null?void 0:e.tenantContract[o])=="string"&&((e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".pdf"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".jpeg"))||(e==null?void 0:e.tenantContract[o].toLowerCase().endsWith(".png")))){const a=e==null?void 0:e.tenantContract[o].split("/").pop();saveAs(`http://portals.rarehomesgroup.com/${e==null?void 0:e.tenantContract[o]}`,a)}for(const o of((c=e==null?void 0:e.tenantContract)==null?void 0:c.chequeDetails)||[])if(typeof(o==null?void 0:o.chequeimage)=="string"&&((o==null?void 0:o.chequeimage.toLowerCase().toLowerCase().endsWith(".pdf"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".jpeg"))||(o==null?void 0:o.chequeimage.toLowerCase().endsWith(".png")))){const a=o==null?void 0:o.chequeimage.split("/").pop();saveAs(`http://portals.rarehomesgroup.com/${o==null?void 0:o.chequeimage}`,a)}},className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:[s(p,{icon:"heroicons-outline:arrow-down-tray",className:"w-[20px] h-[20px] mb-[3px]"}),"Download All Files"]})}),s(m,{})]}),s("div",{className:"flex",children:l("div",{className:"w-[70%]",children:[l("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:[s(p,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] "}),l("div",{children:[s("span",{className:"font-bold",children:"Property name"}),s("h4",{className:"",children:(k=e==null?void 0:e.property)!=null&&k.unitnumber?(($=e==null?void 0:e.property)==null?void 0:$.unitnumber)+((q=e==null?void 0:e.property)!=null&&q.community_name?" | "+((I=e==null?void 0:e.property)==null?void 0:I.community_name):"")+((S=e==null?void 0:e.property)!=null&&S.project_name?" | "+((L=e==null?void 0:e.property)==null?void 0:L.project_name):"")+((E=e==null?void 0:e.property)!=null&&E.building_name?" | "+((F=e==null?void 0:e.property)==null?void 0:F.building_name):""):"Not Available"})]})]}),s("div",{className:"w-[95%] col-span-3",children:s("div",{className:"borderBottom"})}),s("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:s("h4",{children:"Tenant Details"})}),s("div",{className:"flex",children:l("div",{className:"w-[100%]",children:[l("div",{className:"flex gap-x-[48px] ml-[20px] m-[30px] ",children:[s("div",{className:"flex flex-col gap-[50px]",children:l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:We,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Tenant name"}),s("span",{className:"si-distance",children:(P=e==null?void 0:e.tenantContract)!=null&&P.guestname?(T=e==null?void 0:e.tenantContract)==null?void 0:T.guestname:"Not Available"})]})]})}),s("div",{className:"flex flex-col gap-[50px]",children:l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:Re,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Tenant Email"}),s("span",{className:"si-distance",children:(W=e==null?void 0:e.tenantContract)!=null&&W.email?(R=e==null?void 0:e.tenantContract)==null?void 0:R.email:"Not Available"})]})]})}),s("div",{className:"flex flex-col gap-[50px]",children:l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:Ue,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Mobile no"}),s("span",{className:"si-distance",children:(U=e==null?void 0:e.tenantContract)!=null&&U.mobilenumber?(B=e==null?void 0:e.tenantContract)==null?void 0:B.mobilenumber:"Not Available"})]})]})}),s("div",{className:"flex flex-col gap-[50px]",children:l("div",{className:"flex gap-x-[10px] items-start ml-[70px]",children:[s("img",{src:Be,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Nationality"}),s("span",{className:"si-distance",children:(Y=e==null?void 0:e.tenantContract)!=null&&Y.nationality?(V=e==null?void 0:e.tenantContract)==null?void 0:V.nationality:"Not Available"})]})]})})]}),s("div",{className:"flex gap-x-[48px] ml-[20px] m-[30px] ",children:l("div",{className:"flex gap-x-[10px] items-start ",children:[s("img",{src:Ye,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Passport no"}),s("span",{className:"si-distance",children:(M=e==null?void 0:e.tenantContract)!=null&&M.passportnumber?(O=e==null?void 0:e.tenantContract)==null?void 0:O.passportnumber:"Not Available"})]})]})})]})}),s("div",{className:"w-[95%] col-span-3",children:s("div",{className:"borderBottom"})}),s("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:s("h4",{children:"Contract detail"})}),s("div",{className:"flex",children:s("div",{className:"w-[100%]",children:s("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:l("div",{className:"flex gap-x-[28px] items-start",children:[s("img",{src:u,alt:"Calendar",className:"icon-pic mt-1"}),l("div",{children:[s("span",{className:"font-bold",children:"execution date"}),s("span",{className:"si-distance",children:(z=e==null?void 0:e.tenantContract)!=null&&z.contractexecutiondate?new Date((G=e==null?void 0:e.tenantContract)==null?void 0:G.contractexecutiondate).toDateString():"Not Available"})]}),l("div",{className:"flex items-start gap-4",children:[s("img",{src:u,alt:"Calendar",className:"icon-pic mt-1"}),l("div",{children:[s("span",{className:"font-bold",children:" start date"}),s("span",{className:"si-distance",children:(H=e==null?void 0:e.tenantContract)!=null&&H.contractstartdate?new Date((J=e==null?void 0:e.tenantContract)==null?void 0:J.contractstartdate).toDateString():"Not Available"})]})]}),l("div",{className:"flex items-start gap-4 ml-[35px]",children:[s("img",{src:u,alt:"Calendar",className:"icon-pic mt-1"}),l("div",{children:[s("span",{className:"font-bold",children:"end date"}),s("span",{className:"si-distance",children:(K=e==null?void 0:e.tenantContract)!=null&&K.contractenddate?new Date((Q=e==null?void 0:e.tenantContract)==null?void 0:Q.contractenddate).toDateString():"Not Available"})]})]}),l("div",{className:"flex items-start gap-4 ml-[62px]",children:[s("img",{src:Ve,alt:"Money",className:"icon-pic mt-1"}),l("div",{children:[s("span",{className:"font-bold",children:"Rental amount"}),s("span",{className:"si-distance",children:(X=e==null?void 0:e.tenantContract)!=null&&X.rentalamount?((Z=e==null?void 0:e.tenantContract)==null?void 0:Z.rentalamount)+" AED":"Not Available"})]})]})]})})})}),s("div",{className:"w-[95%] col-span-3",children:s("div",{className:"borderBottom"})}),s("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:s("h4",{children:"Documents detail"})}),l("div",{className:"w-[100%]",children:[s("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:l("div",{className:"flex gap-x-[25px] items-start",children:[l("div",{className:"flex items-start gap-4 ",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"ejari certificate doc"}),s("div",{className:"flex items-center justify-start gap-x-[10px]",children:(D=e==null?void 0:e.tenantContract)!=null&&D.ejari_certificate_doc?l(m,{children:[s("a",{className:"si-distance",href:"http://portals.rarehomesgroup.com/"+((ee=e==null?void 0:e.tenantContract)==null?void 0:ee.ejari_certificate_doc),target:"_blank",children:s(p,{icon:"heroicons-outline:eye",className:"text-[25px]"})}),s("button",{onClick:()=>{var c,o;return h(`http://portals.rarehomesgroup.com/${(c=e==null?void 0:e.tenantContract)==null?void 0:c.ejari_certificate_doc}`,`${decodeURIComponent((o=e==null?void 0:e.tenantContract)==null?void 0:o.ejari_certificate_doc).split("/").pop()}`)},className:"btn-download",children:s(p,{icon:"heroicons-outline:arrow-down-tray"})})]}):"Not Available"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"tenancy contract doc"}),s("div",{className:"flex items-center justify-start gap-x-[10px]",children:(se=e==null?void 0:e.tenantContract)!=null&&se.tenancy_contract_doc?l(m,{children:[s("a",{className:"si-distance",href:"http://portals.rarehomesgroup.com/"+((ce=e==null?void 0:e.tenantContract)==null?void 0:ce.tenancy_contract_doc),target:"_blank",children:s(p,{icon:"heroicons-outline:eye",className:"text-[25px]"})}),s("button",{onClick:()=>{var c,o;return h(`http://portals.rarehomesgroup.com/${(c=e==null?void 0:e.tenantContract)==null?void 0:c.tenancy_contract_doc}`,`${decodeURIComponent((o=e==null?void 0:e.tenantContract)==null?void 0:o.tenancy_contract_doc).split("/").pop()}`)},className:"btn-download",children:s(p,{icon:"heroicons-outline:arrow-down-tray"})})]}):"Not Available"})]})]}),l("div",{className:"flex gap-x-[10px] items-start ml-[28px]",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"tenancy contract doc"}),s("div",{className:"flex items-center justify-start gap-x-[10px]",children:(le=e==null?void 0:e.tenantContract)!=null&&le.tenancy_contract_doc?l(m,{children:[s("a",{className:"si-distance",href:"http://portals.rarehomesgroup.com/"+((oe=e==null?void 0:e.tenantContract)==null?void 0:oe.tenancy_contract_doc),target:"_blank",children:s(p,{icon:"heroicons-outline:eye",className:"text-[25px]"})}),s("button",{onClick:()=>{var c,o;return h(`http://portals.rarehomesgroup.com/${(c=e==null?void 0:e.tenantContract)==null?void 0:c.tenancy_contract_doc}`,`${decodeURIComponent((o=e==null?void 0:e.tenantContract)==null?void 0:o.tenancy_contract_doc).split("/").pop()}`)},className:"btn-download",children:s(p,{icon:"heroicons-outline:arrow-down-tray"})})]}):"Not Available"})]})]}),l("div",{className:"flex gap-x-[10px] items-start ml-[28px]",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"key receipt doc"}),s("div",{className:"flex items-center justify-start gap-x-[10px]",children:(re=e==null?void 0:e.tenantContract)!=null&&re.key_receipt_doc?l(m,{children:[s("a",{className:"si-distance",href:"http://portals.rarehomesgroup.com/"+((ie=e==null?void 0:e.tenantContract)==null?void 0:ie.key_receipt_doc),target:"_blank",children:s(p,{icon:"heroicons-outline:eye",className:"text-[25px]"})}),s("button",{onClick:()=>{var c,o;return h(`http://portals.rarehomesgroup.com/${(c=e==null?void 0:e.tenantContract)==null?void 0:c.key_receipt_doc}`,`${decodeURIComponent((o=e==null?void 0:e.tenantContract)==null?void 0:o.key_receipt_doc).split("/").pop()}`)},className:"btn-download",children:s(p,{icon:"heroicons-outline:arrow-down-tray"})})]}):"Not Available"})]})]})]})}),l("div",{className:"grid grid-cols-1 gap-4 ml-5 mt-8",children:[s("div",{className:"flex gap-x-[25px] items-start",children:l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"No Of Cheque Or Installment"}),s("span",{className:"si-distance",children:((ae=e==null?void 0:e.tenantContract)==null?void 0:ae.noofchequeorinstallment)&&((te=e==null?void 0:e.tenantContract)==null?void 0:te.noofchequeorinstallment)!==void 0&&((pe=e==null?void 0:e.tenantContract)==null?void 0:pe.noofchequeorinstallment)!=="undefined"?(ne=e==null?void 0:e.tenantContract)==null?void 0:ne.noofchequeorinstallment:"Not Available"})]})]})}),s("div",{className:"flex  gap-[50px] items-start"})]})]}),((de=e==null?void 0:e.tenantContract)==null?void 0:de.chequeDetails)&&((he=(me=e==null?void 0:e.tenantContract)==null?void 0:me.chequeDetails)==null?void 0:he.length)?l(m,{children:[s("div",{className:"w-[100%] col-span-3",children:s("div",{className:"borderBottom"})}),(fe=(xe=e==null?void 0:e.tenantContract)==null?void 0:xe.chequeDetails)==null?void 0:fe.map((c,o)=>l("div",{children:[s("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:s("h4",{children:"Cheque detail"})}),l("div",{className:"flex gap-x-[25px] ml-[20px] m-[30px] ",children:[l("div",{className:"flex  gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Cheque Number"}),s("span",{className:"si-distance",children:c!=null&&c.chequenumbe?c==null?void 0:c.chequenumbe:"Not Available"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Cheque Date"}),l("span",{className:"si-distance",children:[c!=null&&c.chequedate?new Date(c==null?void 0:c.chequedate).toDateString():"Not Available"," "]})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Cheque Image"}),s("div",{className:"flex items-center justify-start gap-x-[10px]",children:c!=null&&c.chequeimage?l(m,{children:[s("a",{className:"si-distance",href:"http://portals.rarehomesgroup.com/"+(c==null?void 0:c.chequeimage),target:"_blank",children:s(p,{icon:"heroicons-outline:eye",className:"text-[25px]"})}),s("button",{onClick:()=>h(`http://portals.rarehomesgroup.com/${c==null?void 0:c.chequeimage}`,`${decodeURIComponent(c==null?void 0:c.chequeimage).split("/").pop()}`),className:"btn-download",children:s(p,{icon:"heroicons-outline:arrow-down-tray"})})]}):"Not Available"})]})]})]}),s("div",{className:"flex flex-col gap-[50px]",children:l("div",{className:"flex gap-x-[10px] items-start",children:[s("img",{src:d,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[s("span",{className:"font-bold",children:"Total Amount"}),s("span",{className:"si-distance",children:(c==null?void 0:c.totalamount)&&(c==null?void 0:c.totalamount)!==void 0&&(c==null?void 0:c.totalamount)!=="undefined"?parseFloat(c==null?void 0:c.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"})]})]})})]},o+1)]}))]}):null]})}),s("div",{className:"w-[100%] col-span-3",children:s("div",{className:"borderBottom"})}),l("div",{id:"video",className:"w-[100%] col-span-2",children:[s("h3",{className:"headings"}),g&&(r==null?void 0:r.youtubelink)&&N?s("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:s("div",{className:"w-[100%] flex items-end justify-center",children:s("iframe",{title:"YouTube Link",src:N,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):s("span",{className:"si-distance pl-[38px]"})]}),s(Me,{showVideo:g,handleClose:Ae,videoLink:r==null?void 0:r.youtubelink,youtubeVideo:N})]})})})};export{Qe as default};
