import{bu as T,b_ as V,r,c as i,F as y,j as l,bN as B,C as L,I as h,bP as F}from"./index.f2f04dad.js";import{b as O,u as Y,f as M,d as E,t as H,a as U,p as z,o as u,c as Q,e as R,g as q,l as k}from"./docs.34f658ea.js";import{b as j}from"./bathroom.f897a353.js";import{N as G}from"./not-available.0313044d.js";const J=({images:c,selectedImage:e})=>{const[p,t]=r.exports.useState(e),x=()=>{t(s=>s===0?c.length-1:s-1)},o=()=>{t(s=>s===c.length-1?0:s+1)};return l("div",{className:"custom-slider",children:i("div",{className:"slider-content justify-center",children:[l("div",{className:"text-white slider-button prev-button",onClick:x,children:l(h,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"})}),l("img",{src:c[p],alt:`slider image ${p}`,className:"slider-image"}),l("div",{className:"text-white slider-button next-button",onClick:o,children:l(h,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"})})]})})},K=({images:c})=>{const[e,p]=r.exports.useState(null),[t,x]=r.exports.useState(!1),o=d=>{x(!0),p(d)},s=()=>{x(!1),p(null)};return i("div",{className:"thumbnail-container",children:[(c==null?void 0:c.length)>=5?i("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[l("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:l("img",{src:c[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>o(0)})}),l("div",{className:"lg:w-1/2 h-[291px] md:w-full  flex justify-between flex-wrap gap-y-4",children:c.slice(1,5).map((d,n)=>l("img",{src:d,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${n===1?"rounded-tr-[10px]":""} ${n===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${n===3?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>o(n+1)},n))})]}):null,(c==null?void 0:c.length)===4||(c==null?void 0:c.length)===2?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:c.map((d,n)=>l("img",{src:d,onClick:()=>o(n),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${n===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(c==null?void 0:c.length)===4?`${n===1?"rounded-tr-[10px]":""} ${n===2?"rounded-bl-[10px]":""} ${n===3?"rounded-br-[10px]":""}`:`${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""} ${n===0?"rounded-tl-[10px]":""} ${n===0?"rounded-bl-[10px]":""}`}`,alt:`image-${n+1}`},n))})}):null,(c==null?void 0:c.length)===3?i("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[l("div",{className:"w-[50%]",children:l("img",{src:c[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>o(0)})}),l("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:c.slice(1,3).map((d,n)=>l("img",{src:d,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>o(n+1)},n))})]}):null,(c==null?void 0:c.length)===1?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:c[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>o(0)})})}):null,l("div",{className:"flex justify-end",children:l("button",{onClick:()=>o(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[17px]",children:"Show all image"})}),t&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"}),l("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:s,children:"Close"})]}),t&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-[90vw] p-[10px] text-center ",children:l(J,{selectedImage:e,images:c})}),l("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:s,children:l(h,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"})})]})]})},W=({showVideo:c,handleClose:e,videoLink:p,youtubeVideo:t})=>l("div",{className:"thumbnail-container",children:c&&l("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[1400px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Youtube Video"}),l("img",{src:F,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:e})]}),c&&t?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]})})}),le=()=>{const{id:c}=T(),{data:e,error:p,isLoading:t,isFetching:x,isSuccess:o}=V(c),[s,d]=r.exports.useState("");r.exports.useEffect(()=>{if(e){const m=e==null?void 0:e.amenitiesimages.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),f=e==null?void 0:e.buildingelevation.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),b=e==null?void 0:e.floorplan.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),g=e==null?void 0:e.plotplanattachment.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),P=e==null?void 0:e.propertyimages.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),S=e==null?void 0:e.typicalfloorplan.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),I=e==null?void 0:e.unitplanattachment.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),_=[...m,...f,...b,...g,...P,...S,...I];d(_)}},[e==null?void 0:e.amenitiesimages,e==null?void 0:e.buildingelevation,e==null?void 0:e.plotplanattachment,e==null?void 0:e.propertyimages,e==null?void 0:e.typicalfloorplan,e==null?void 0:e.unitplanattachment]);const[n,C]=r.exports.useState("");r.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let m=e==null?void 0:e.youtubelink,f=m==null?void 0:m.replace("watch?v=","embed/");C(f)}},[e==null?void 0:e.youtubelink]);const v=m=>{const f=document.getElementById(m),b=m==="about-property"?180:80,g=f.offsetTop-b;window.scrollTo({top:g,behavior:"smooth"})};r.exports.useState(!1);const[N,w]=r.exports.useState(!1),A=()=>{w(!N)},$=()=>{N===!0&&w(!1)};return i(y,{children:[(t||x)&&l(B,{}),p&&l("p",{children:"Something went wrong"}),o&&e&&l("div",{className:"card-bo",children:i(L,{children:[i("div",{children:[i("div",{className:"nav",children:[l("div",{children:l("div",{onClick:()=>v("about-property"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"About Property"})}),l("div",{children:l("div",{onClick:()=>v("owner"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Owner Detail"})}),l("div",{children:l("div",{onClick:()=>v("location"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Location"})})]}),l("div",{className:"select-none",children:s!=null&&s.length?l(K,{images:s}):l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:G,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"})})})}),l("div",{className:"flex flex-row-reverse w-[100%] col-span-2",children:l("button",{className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[14px] mt-[10px] w-[151px]",onClick:A,children:N?"Hide YouTube Video":" Video"})}),l(y,{})]}),i("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:[l(h,{icon:"heroicons:building-office-2",className:" mt-[4px] h-[45px] w-[45px] "}),i("div",{children:[l("h4",{className:"font-bold",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available"}),l("span",{children:"Project name"})]})]}),i("div",{className:"flex",children:[i("div",{className:"w-[55%]",children:[i("div",{className:"flex gap-x-[35px] ml-[20px]",children:[i("div",{className:"flex flex-col gap-[25px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l(h,{icon:"heroicons:home",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"unit number"}),l("span",{className:"si-distance",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(h,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Building name"}),l("span",{className:"si-distance",children:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"})]})]})]}),i("div",{className:"flex flex-col gap-[25px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:O,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Build up area"}),l("span",{className:"si-distance",children:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(h,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Purchase Value"}),l("span",{className:"si-distance",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"})]})]})]}),i("div",{className:"flex flex-col gap-[25px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:Y,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Usage"}),l("span",{className:"si-distance",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:M,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Floor"}),l("span",{className:"si-distance",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"})]})]})]}),i("div",{className:"flex flex-col gap-[25px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:E,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Developer name"}),l("span",{className:"si-distance",children:e!=null&&e.develpoername?e==null?void 0:e.develpoername:"Not Available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(h,{icon:"heroicons:globe-alt",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Community name"}),l("span",{className:"si-distance",children:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"})]})]})]})]}),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{children:l("h4",{className:"headings font-medium",children:"About property"})}),l("div",{id:"about-property",className:"action",children:i("div",{className:"flex gap-x-[35px] ml-[20px]",children:[i("div",{className:"flex flex-col gap-[25px]",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:H,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Type of kitchen"}),l("span",{className:"si-distance",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:U,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Type of balcony"}),l("span",{className:"si-distance",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"})]})]})]}),l("div",{className:"flex flex-col gap-[25px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:j,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"No of bathroom"}),l("span",{className:"si-distance",children:(e==null?void 0:e.totalbathroom)&&(e==null?void 0:e.totalbathroom)===void 0&&(e==null?void 0:e.totalbathroom)==="undefined"?e==null?void 0:e.totalbathroom:"Not Available"})]})]})}),l("div",{className:"flex flex-col gap-[25px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:z,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Parking bay number"}),l("span",{className:"si-distance",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"})]})]})}),l("div",{className:"flex flex-col gap-[25px]",children:i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:j,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"No of bathroom"}),l("span",{className:"si-distance",children:(e==null?void 0:e.totalbathroom)&&(e==null?void 0:e.totalbathroom)===void 0&&(e==null?void 0:e.totalbathroom)==="undefined"?e==null?void 0:e.totalbathroom:"Not Available"})]})]})})]})}),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{id:"owner",children:l("h3",{className:"headings font-medium",children:"Owner Details"})}),i("div",{className:"action",children:[i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:u,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Owner name"}),l("span",{className:"si-distance",children:e!=null&&e.owner_name?e==null?void 0:e.owner_name:"Not available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:Q,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Owner representative"}),l("span",{className:"si-distance",children:e!=null&&e.representative_name?e==null?void 0:e.representative_name:"Not available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:R,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"Purchase date"}),l("span",{className:"si-distance",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not available"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:u,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"font-bold",children:"No of owner Name tittle"}),l("span",{className:"si-distance",children:e!=null&&e.no_ownernamedeed?e==null?void 0:e.no_ownernamedeed:"Not available"})]})]})]}),l("div",{className:"list-table",children:i("div",{className:"flex gap-x-[10px] items-start ",children:[l("img",{src:q,alt:"",className:"icon-pic "}),i("div",{children:[l("span",{className:"font-bold",children:"Tittle deeds docoment"}),l("span",{className:"si-distance",children:"4"})]})]})})]})]}),i("div",{id:"location",className:"w-[44%]",children:[l("h3",{className:"py-[16px] mt-[18px] font-bold",children:"Location"}),e!=null&&e.propertylocation?l("a",{href:e==null?void 0:e.propertylocation,target:"_blank",children:l("img",{src:k,alt:"",className:" w-[70%] card-pic"})}):l("div",{children:l("img",{src:k,alt:"",className:"ml-[0px] w-[70%]  card-pic"})})]})]}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"headings"}),N&&(e==null?void 0:e.youtubelink)&&n?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]"})]}),l(W,{showVideo:N,handleClose:$,videoLink:e==null?void 0:e.youtubelink,youtubeVideo:n})]})})]})};export{le as default};
