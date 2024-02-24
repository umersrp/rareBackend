import{r as h,j as l,bu as V,b_ as L,c as t,F as k,bN as F,C as M,I as N,bP as O}from"./index.4b2918c9.js";import{b as Y,u as E,f as U,d as R,t as z,a as H,p as Q,o as g,c as q,e as G,g as J,l as S}from"./docs.34f658ea.js";import{b as j}from"./bathroom.f897a353.js";import{N as K}from"./not-available.0313044d.js";import{c as W}from"./index.186db273.js";import{u as X}from"./ThemeProvider.e16a1b83.js";const C=h.exports.forwardRef(({bsPrefix:i,bg:e="primary",pill:p=!1,text:a,className:x,as:s="span",...r},d)=>{const o=X(i,"badge");return l(s,{ref:d,...r,className:W(x,o,p&&"rounded-pill",a&&`text-${a}`,e&&`bg-${e}`)})});C.displayName="Badge";const Z=C,D=({images:i,selectedImage:e})=>{const[p,a]=h.exports.useState(e),x=()=>{a(r=>r===0?i.length-1:r-1)},s=()=>{a(r=>r===i.length-1?0:r+1)};return l("div",{className:"custom-slider",children:t("div",{className:"slider-content justify-center",children:[l("div",{className:"text-white slider-button prev-button",onClick:x,children:l(N,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"})}),l("img",{src:i[p],alt:`slider image ${p}`,className:"slider-image"}),l("div",{className:"text-white slider-button next-button",onClick:s,children:l(N,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"})})]})})},ee=({images:i})=>{const[e,p]=h.exports.useState(null),[a,x]=h.exports.useState(!1),s=d=>{x(!0),p(d)},r=()=>{x(!1),p(null)};return t("div",{className:"thumbnail-container",children:[(i==null?void 0:i.length)>=5?t("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[l("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:l("img",{src:i[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>s(0)})}),l("div",{className:"lg:w-1/2 h-[291px] md:w-full  flex justify-between flex-wrap gap-y-4",children:i.slice(1,5).map((d,o)=>l("img",{src:d,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${o===1?"rounded-tr-[10px]":""} ${o===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${o===3?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>s(o+1)},o))})]}):null,(i==null?void 0:i.length)===4||(i==null?void 0:i.length)===2?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:i.map((d,o)=>l("img",{src:d,onClick:()=>s(o),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${o===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(i==null?void 0:i.length)===4?`${o===1?"rounded-tr-[10px]":""} ${o===2?"rounded-bl-[10px]":""} ${o===3?"rounded-br-[10px]":""}`:`${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""} ${o===0?"rounded-tl-[10px]":""} ${o===0?"rounded-bl-[10px]":""}`}`,alt:`image-${o+1}`},o))})}):null,(i==null?void 0:i.length)===3?t("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[l("div",{className:"w-[50%]",children:l("img",{src:i[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>s(0)})}),l("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:i.slice(1,3).map((d,o)=>l("img",{src:d,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>s(o+1)},o))})]}):null,(i==null?void 0:i.length)===1?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:i[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>s(0)})})}):null,a&&t("div",{className:"modal-overlay",children:[l("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"}),l("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:r,children:"Close"})]}),a&&t("div",{className:"modal-overlay",children:[l("div",{className:"max-w-[90vw] p-[10px] text-center ",children:l(D,{selectedImage:e,images:i})}),l("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:r,children:l(N,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"})})]})]})},le=({showVideo:i,handleClose:e,videoLink:p,youtubeVideo:a})=>l("div",{className:"thumbnail-container",children:i&&l("div",{className:"modal-overlay-property",children:t("div",{className:"modal-new w-[1400px]",children:[t("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Youtube Video"}),l("img",{src:O,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:e})]}),i&&a?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]})})}),ae=()=>{const{id:i}=V(),{data:e,error:p,isLoading:a,isFetching:x,isSuccess:s}=L(i),[r,d]=h.exports.useState("");h.exports.useEffect(()=>{if(e){const m=e==null?void 0:e.amenitiesimages.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),b=e==null?void 0:e.buildingelevation.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),v=e==null?void 0:e.floorplan.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),f=e==null?void 0:e.plotplanattachment.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),I=e==null?void 0:e.propertyimages.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),T=e==null?void 0:e.typicalfloorplan.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),B=e==null?void 0:e.unitplanattachment.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),_=[...m,...b,...v,...f,...I,...T,...B];d(_)}},[e==null?void 0:e.amenitiesimages,e==null?void 0:e.buildingelevation,e==null?void 0:e.plotplanattachment,e==null?void 0:e.propertyimages,e==null?void 0:e.typicalfloorplan,e==null?void 0:e.unitplanattachment]);const[o,$]=h.exports.useState("");h.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let m=e==null?void 0:e.youtubelink,b=m==null?void 0:m.replace("watch?v=","embed/");$(b)}},[e==null?void 0:e.youtubelink]);const w=m=>{const b=document.getElementById(m),v=m==="about-property"?180:80,f=b.offsetTop-v;window.scrollTo({top:f,behavior:"smooth"})};h.exports.useState(!1);const[u,y]=h.exports.useState(!1),A=()=>{y(!u)},P=()=>{u===!0&&y(!1)},n=({title:m,value:b,icon:v,imgSrc:f})=>l("tr",{children:l("td",{children:t("div",{className:"flex gap-x-[10px] items-start border",children:[t("div",{className:"pp",children:[v&&l(N,{icon:v,className:"icon-pic mt-[4px] text-center "}),f&&l("img",{src:f,alt:"",className:"icon-pic mt-[4px]"})]})," ",t("tr",{className:"bg-slate-200 border border-gray-300 w-[300px] ",children:[l("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r w-[150px]",children:m}),l("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white w-[150px]",children:b})]})]})})});return t(k,{children:[(a||x)&&l(F,{}),p&&l("p",{children:"Something went wrong"}),s&&e&&l("div",{className:"card-bo",children:t(M,{children:[t("div",{children:[t("div",{className:"nav",children:[l("div",{children:l("div",{onClick:()=>w("about-property"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"About Property"})}),l("div",{children:l("div",{onClick:()=>w("owner"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Owner Detail"})}),l("div",{children:l("div",{onClick:()=>w("location"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Location"})})]}),l("div",{className:"select-none",children:r!=null&&r.length?l(ee,{images:r}):l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:K,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"})})})}),t("div",{className:"flex flex-row-reverse w-[100%] col-span-2",children:[l("button",{className:"btn btn inline-flex justify-center btn-success cursor-pointer mr-[14px] mt-[10px] w-[151px]",onClick:A,children:u?"Hide YouTube Video":" Video"}),l("button",{onClick:()=>openModal(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[14px] mt-[10px] w-[151px]",children:"Show all image"})]}),l(k,{})]}),t("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(N,{icon:"heroicons:building-office-2",className:" mt-[4px] h-[45px] w-[45px] "}),t("div",{children:[l("h4",{className:"font-bold",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available"}),l(Z,{className:"bg-black-500 text-white",children:"Project name"})]})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:t("tr",{className:"flex gap-10",children:[t("td",{children:[l(n,{icon:"heroicons:home",title:"Unit number",value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),l(n,{icon:"heroicons:building-office",title:"Building Name",value:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"}),l(n,{imgSrc:Y,title:"Build Up Area",value:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"}),l(n,{icon:"heroicons:building-office-2",title:"Purchase Value",value:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"})]}),t("td",{children:[l(n,{imgSrc:E,alt:"",title:"Usage",value:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"}),l(n,{imgSrc:U,title:"Floor",value:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"}),l(n,{imgSrc:R,title:"Developer Name",value:e!=null&&e.develpoername?e==null?void 0:e.develpoername:"Not Available"}),l(n,{icon:"heroicons:globe-alt",title:"Community Name",value:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"})]})]})})})}),t("div",{className:"flex",children:[t("div",{className:"w-[55%]",children:[l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),t("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(N,{icon:"heroicons:globe-alt",className:" mt-[4px] h-[45px] w-[45px] "}),l("div",{children:l("h4",{className:"font-bold",children:"About Property"})})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:t("tr",{className:"flex gap-10",children:[t("td",{children:[l(n,{imgSrc:z,title:"Type of kitchen",value:e==null?void 0:e.kitchen}),l(n,{imgSrc:H,title:"Type of balcony",value:e==null?void 0:e.balcony}),l(n,{imgSrc:j,title:"No of bathroom",value:e==null?void 0:e.totalbathroom})]}),t("td",{children:[l(n,{imgSrc:Q,title:"Parking bay number",value:e==null?void 0:e.parkingbay}),l(n,{imgSrc:j,title:"No of bathroom",value:e==null?void 0:e.totalbathroom})]})]})})})}),l("div",{id:"about-property",className:"action"}),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),t("div",{className:"flex gap-x-[15px] items-start p-[16px] ",id:"owner",children:[l("img",{src:g,className:" mt-[4px] h-[45px] w-[45px] "}),l("div",{children:l("h4",{className:"font-bold",children:"Owner Details"})})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:t("td",{className:"flex gap-10",children:[t("tr",{children:[l(n,{imgSrc:g,title:"Owner name",value:e==null?void 0:e.owner_name}),l(n,{imgSrc:q,title:"Owner representative",value:e==null?void 0:e.representative_name}),l(n,{imgSrc:G,title:"Purchase date",value:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not Available"})]}),t("tr",{children:[l(n,{imgSrc:g,title:"No of owner Name title",value:e==null?void 0:e.no_ownernamedeed}),l(n,{imgSrc:J,title:"Title deeds document",value:"4"})]})]})})})]}),t("div",{id:"location",className:"w-[44%]",children:[l("h3",{className:"py-[16px] mt-[-240px] font-bold",children:"Location"}),e!=null&&e.propertylocation?l("a",{href:e==null?void 0:e.propertylocation,target:"_blank",children:l("img",{src:S,alt:"",className:" w-[70%] card-pic"})}):l("div",{children:l("img",{src:S,alt:"",className:"ml-[0px] w-[100%]  card-pic"})})]})]}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),t("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"headings"}),u&&(e==null?void 0:e.youtubelink)&&o?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]"})]}),l(le,{showVideo:u,handleClose:P,videoLink:e==null?void 0:e.youtubelink,youtubeVideo:o})]})})]})};export{ae as default};
