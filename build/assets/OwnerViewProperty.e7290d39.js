import{r as h,j as l,ca as _,bu as L,c0 as V,c as i,F as k,bO as F,f as M,I as u,bQ as O}from"./index.4113582e.js";import{b as Y,u as E,f as U,d as R,t as z,a as H,p as Q,o as g,c as q,e as G,g as J}from"./docs.c1ee8499.js";import{b as S}from"./bathroom.f897a353.js";import{N as K}from"./not-available.0313044d.js";import{u as W}from"./ThemeProvider.da47eb97.js";const j=h.exports.forwardRef(({bsPrefix:t,bg:e="primary",pill:p=!1,text:a,className:x,as:s="span",...r},d)=>{const o=W(t,"badge");return l(s,{ref:d,...r,className:_(x,o,p&&"rounded-pill",a&&`text-${a}`,e&&`bg-${e}`)})});j.displayName="Badge";const X=j,Z=({images:t,selectedImage:e})=>{const[p,a]=h.exports.useState(e),x=()=>{a(r=>r===0?t.length-1:r-1)},s=()=>{a(r=>r===t.length-1?0:r+1)};return l("div",{className:"custom-slider",children:i("div",{className:"slider-content justify-center",children:[l("div",{className:"text-white slider-button prev-button",onClick:x,children:l(u,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"})}),l("img",{src:t[p],alt:`slider image ${p}`,className:"slider-image"}),l("div",{className:"text-white slider-button next-button",onClick:s,children:l(u,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"})})]})})},D=({images:t})=>{const[e,p]=h.exports.useState(null),[a,x]=h.exports.useState(!1),s=d=>{x(!0),p(d)},r=()=>{x(!1),p(null)};return i("div",{className:"thumbnail-container",children:[(t==null?void 0:t.length)>=5?i("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[l("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:l("img",{src:t[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>s(0)})}),l("div",{className:"lg:w-1/2 h-[291px] md:w-full  flex justify-between flex-wrap gap-y-4",children:t.slice(1,5).map((d,o)=>l("img",{src:d,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${o===1?"rounded-tr-[10px]":""} ${o===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${o===3?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>s(o+1)},o))})]}):null,(t==null?void 0:t.length)===4||(t==null?void 0:t.length)===2?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:t.map((d,o)=>l("img",{src:d,onClick:()=>s(o),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${o===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(t==null?void 0:t.length)===4?`${o===1?"rounded-tr-[10px]":""} ${o===2?"rounded-bl-[10px]":""} ${o===3?"rounded-br-[10px]":""}`:`${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""} ${o===0?"rounded-tl-[10px]":""} ${o===0?"rounded-bl-[10px]":""}`}`,alt:`image-${o+1}`},o))})}):null,(t==null?void 0:t.length)===3?i("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[l("div",{className:"w-[50%]",children:l("img",{src:t[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>s(0)})}),l("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:t.slice(1,3).map((d,o)=>l("img",{src:d,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${o===1?"rounded-tr-[10px]":""} ${o===1?"rounded-br-[10px]":""}`,alt:`image-${o+1}`,onClick:()=>s(o+1)},o))})]}):null,(t==null?void 0:t.length)===1?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:t[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>s(0)})})}):null,a&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"}),l("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:r,children:"Close"})]}),a&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-[90vw] p-[10px] text-center ",children:l(Z,{selectedImage:e,images:t})}),l("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:r,children:l(u,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"})})]})]})},ee=({showVideo:t,handleClose:e,videoLink:p,youtubeVideo:a})=>l("div",{className:"thumbnail-container",children:t&&l("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[1400px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Youtube Video"}),l("img",{src:O,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:e})]}),t&&a?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]})})}),ne=()=>{const{id:t}=L(),{data:e,error:p,isLoading:a,isFetching:x,isSuccess:s}=V(t),[r,d]=h.exports.useState("");h.exports.useEffect(()=>{if(e){const m=e==null?void 0:e.amenitiesimages.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),b=e==null?void 0:e.buildingelevation.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),f=e==null?void 0:e.floorplan.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),v=e==null?void 0:e.plotplanattachment.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),P=e==null?void 0:e.propertyimages.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),I=e==null?void 0:e.typicalfloorplan.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),T=e==null?void 0:e.unitplanattachment.filter(c=>c!=="").map(c=>"http://portals.rarehomesgroup.com"+c),B=[...m,...b,...f,...v,...P,...I,...T];d(B)}},[e==null?void 0:e.amenitiesimages,e==null?void 0:e.buildingelevation,e==null?void 0:e.plotplanattachment,e==null?void 0:e.propertyimages,e==null?void 0:e.typicalfloorplan,e==null?void 0:e.unitplanattachment]);const[o,C]=h.exports.useState("");h.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let m=e==null?void 0:e.youtubelink,b=m==null?void 0:m.replace("watch?v=","embed/");C(b)}},[e==null?void 0:e.youtubelink]);const w=m=>{const b=document.getElementById(m),f=m==="about-property"?180:80,v=b.offsetTop-f;window.scrollTo({top:v,behavior:"smooth"})};h.exports.useState(!1);const[N,y]=h.exports.useState(!1),$=()=>{y(!N)},A=()=>{N===!0&&y(!1)},n=({title:m,value:b,icon:f,imgSrc:v})=>l("tr",{children:l("td",{children:i("div",{className:"flex gap-x-[10px] items-start border",children:[i("div",{className:"pp",children:[f&&l(u,{icon:f,className:"icon-pic mt-[4px] text-center "}),v&&l("img",{src:v,alt:"",className:"icon-pic mt-[4px]"})]})," ",i("tr",{className:"bg-slate-200 border border-gray-300 w-[230px] ",children:[l("td",{className:"px-2 py-2 whitespace-nowrap text-[10px] font-semibold text-slate-800 border-r w-[120px]",children:m}),l("td",{className:"px-2 py-2 whitespace-nowrap text-[10px] text-gray-500 capitalize bg-white w-[170px]",children:b})]})]})})});return i(k,{children:[(a||x)&&l(F,{}),p&&l("p",{children:"Something went wrong"}),s&&e&&l("div",{className:"card-bo",children:i(M,{children:[i("div",{children:[i("div",{className:"nav",children:[l("div",{children:l("div",{onClick:()=>w("about-property"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"About Property"})}),l("div",{children:l("div",{onClick:()=>w("owner"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Owner Detail"})}),l("div",{children:l("div",{onClick:()=>w("location"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Location"})})]}),l("div",{className:"select-none",children:r!=null&&r.length?l(D,{images:r}):l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:K,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"})})})}),i("div",{className:"flex flex-row-reverse w-[100%] col-span-2",children:[l("button",{className:"btn btn inline-flex justify-center btn-success cursor-pointer mr-[14px] mt-[10px] w-[151px]",onClick:$,children:N?"Hide YouTube Video":" Video"}),l("button",{onClick:()=>openModal(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[14px] mt-[10px] w-[151px]",children:"Show all image"})]}),l(k,{})]}),i("div",{className:"py-10 px-4 lg:px-2  flex flex-col lg:flex-row",children:[i("div",{className:"lg:w-[50]",children:[i("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(u,{icon:"heroicons:building-office-2",className:" mt-[4px] h-[45px] w-[45px] "}),i("div",{children:[l("h4",{className:"font-bold",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available"}),l(X,{className:"bg-black-500 text-white",children:"Project name"})]})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:i("tr",{className:"flex gap-10",children:[i("td",{children:[l(n,{icon:"heroicons:home",title:"Unit number",value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),l(n,{icon:"heroicons:building-office",title:"Building Name",value:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"}),l(n,{imgSrc:Y,title:"Build Up Area",value:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"}),l(n,{icon:"heroicons:building-office-2",title:"Purchase Value",value:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"})]}),i("td",{children:[l(n,{imgSrc:E,alt:"",title:"Usage",value:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"}),l(n,{imgSrc:U,title:"Floor",value:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"}),l(n,{imgSrc:R,title:"Developer Name",value:e!=null&&e.develpoername?e==null?void 0:e.develpoername:"Not Available"}),l(n,{icon:"heroicons:globe-alt",title:"Community Name",value:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"})]})]})})})}),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(u,{icon:"heroicons:globe-alt",className:" mt-[4px] h-[45px] w-[45px] "}),l("div",{children:l("h4",{className:"font-bold",children:"Amenites"})})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:i("tr",{className:"flex gap-10",children:[i("td",{children:[l(n,{imgSrc:z,title:"Type of kitchen",value:e==null?void 0:e.kitchen}),l(n,{imgSrc:H,title:"Type of balcony",value:e==null?void 0:e.balcony}),l(n,{imgSrc:S,title:"No of bathroom",value:e==null?void 0:e.totalbathroom})]}),i("td",{children:[l(n,{imgSrc:Q,title:"Parking bay number",value:e==null?void 0:e.parkingbay}),l(n,{imgSrc:S,title:"No of bathroom",value:e==null?void 0:e.totalbathroom})]})]})})})}),l("div",{id:"about-property",className:"action"}),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{className:"flex gap-x-[15px] items-start p-[16px] ",id:"owner",children:[l("img",{src:g,className:" mt-[4px] h-[45px] w-[45px] "}),l("div",{children:l("h4",{className:"font-bold",children:"Owner Details"})})]}),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:i("td",{className:"flex gap-10",children:[i("tr",{children:[l(n,{imgSrc:g,title:"Owner name",value:e==null?void 0:e.owner_name}),l(n,{imgSrc:q,title:"Owner representative",value:e==null?void 0:e.representative_name}),l(n,{imgSrc:G,title:"Purchase date",value:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not Available"})]}),i("tr",{children:[l(n,{imgSrc:g,title:"No of owner Name title",value:e==null?void 0:e.no_ownernamedeed}),l(n,{imgSrc:J,title:"Title deeds document",value:"4"})]})]})})})]}),i("div",{id:"location",className:"lg:w-[50%] lg:pl-16 mt-6 lg:-mt-[-200px]",children:[l("h3",{className:"py-[16px] mt-[-240px] font-bold",children:"Location"}),e!=null&&e.propertylocation?l("iframe",{title:"Location Map",width:"100%",height:"800",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0",src:e.propertylocation}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]})]}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"headings"}),N&&(e==null?void 0:e.youtubelink)&&o?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]"})]}),l(ee,{showVideo:N,handleClose:A,videoLink:e==null?void 0:e.youtubelink,youtubeVideo:o})]})})]})};export{ne as default};
