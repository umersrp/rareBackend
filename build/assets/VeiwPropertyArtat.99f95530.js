import{bu as A,b_ as $,r as h,c as i,F as g,j as l,bN as P,f as _,I as r}from"./index.87c66dcd.js";import{d as S,b as I,u as T,f as B,t as O,a as F,p as V,o as w,c as E,e as L,g as M}from"./docs.c1ee8499.js";import{b as U}from"./bathroom.f897a353.js";import{N as Y}from"./not-available.0313044d.js";const H="/assets/bedroom.b8ce4533.png",Q="/assets/location.17724789.jpeg",R=({images:c,selectedImage:e})=>{const[p,m]=h.exports.useState(e),x=()=>{m(a=>a===0?c.length-1:a-1)},o=()=>{m(a=>a===c.length-1?0:a+1)};return l("div",{className:"custom-slider",children:i("div",{className:"slider-content justify-center",children:[l("div",{className:"text-white slider-button prev-button",onClick:x,children:l(r,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"})}),l("img",{src:c[p],alt:`slider image ${p}`,className:"slider-image"}),l("div",{className:"text-white slider-button next-button",onClick:o,children:l(r,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"})})]})})},q=({images:c})=>{const[e,p]=h.exports.useState(null),[m,x]=h.exports.useState(!1),o=t=>{x(!0),p(t)},a=()=>{x(!1),p(null)};return i("div",{className:"thumbnail-container",children:[(c==null?void 0:c.length)>=5?i("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[l("div",{className:"lg:w-1/2 md:w-full h-[800px] ",children:l("img",{src:c[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>o(0)})}),l("div",{className:"lg:w-1/2 md:w-full  flex justify-between flex-wrap gap-y-4",children:c.slice(1,5).map((t,n)=>l("img",{src:t,className:`lg:w-[49%] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${n===1?"rounded-tr-[10px]":""} ${n===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${n===3?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>o(n+1)},n))})]}):null,(c==null?void 0:c.length)===4||(c==null?void 0:c.length)===2?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:c.map((t,n)=>l("img",{src:t,onClick:()=>o(n),className:`w-[49.5%]  cursor-pointer object-cover ${n===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(c==null?void 0:c.length)===4?`${n===1?"rounded-tr-[10px]":""} ${n===2?"rounded-bl-[10px]":""} ${n===3?"rounded-br-[10px]":""}`:`${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""} ${n===0?"rounded-tl-[10px]":""} ${n===0?"rounded-bl-[10px]":""}`}`,alt:`image-${n+1}`},n))})}):null,(c==null?void 0:c.length)===3?i("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[l("div",{className:"w-[50%]",children:l("img",{src:c[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>o(0)})}),l("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:c.slice(1,3).map((t,n)=>l("img",{src:t,className:`w-[49%]  cursor-pointer object-cover  ${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>o(n+1)},n))})]}):null,(c==null?void 0:c.length)===1?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:c[0],className:"rounded-[10px]  cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>o(0)})})}):null,l("div",{className:"flex justify-end",children:l("button",{onClick:()=>o(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Show all image"})}),m&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"}),l("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:a,children:"Close"})]}),m&&i("div",{className:"modal-overlay",children:[l("div",{className:"max-w-[90vw] p-[10px] text-center ",children:l(R,{selectedImage:e,images:c})}),l("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:a,children:l(r,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"})})]})]})},W=()=>{const{id:c}=A(),{data:e,error:p,isLoading:m,isFetching:x,isSuccess:o}=$(c),[a,t]=h.exports.useState("");h.exports.useEffect(()=>{if(e){const d=e==null?void 0:e.amenitiesimages.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),N=e==null?void 0:e.buildingelevation.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),b=e==null?void 0:e.floorplan.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),f=e==null?void 0:e.plotplanattachment.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),u=e==null?void 0:e.propertyimages.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),k=e==null?void 0:e.typicalfloorplan.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),j=e==null?void 0:e.unitplanattachment.filter(s=>s!=="").map(s=>"http://portals.rarehomesgroup.com"+s),C=[...d,...N,...b,...f,...u,...k,...j];t(C)}},[e==null?void 0:e.amenitiesimages,e==null?void 0:e.buildingelevation,e==null?void 0:e.plotplanattachment,e==null?void 0:e.propertyimages,e==null?void 0:e.typicalfloorplan,e==null?void 0:e.unitplanattachment]);const[n,y]=h.exports.useState("");h.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let d=e==null?void 0:e.youtubelink,N=d==null?void 0:d.replace("watch?v=","embed/");y(N)}},[e==null?void 0:e.youtubelink]);const v=d=>{console.log(d,"id");const N=document.getElementById(d),b=d==="about-property"?180:80,f=N.offsetTop-b;window.scrollTo({top:f,behavior:"smooth"})};return i(g,{children:[m||x&&l(P,{}),p&&l("p",{children:"Something went wrong"}),o&&e&&l("div",{className:"card-bo",children:i(_,{children:[i("div",{children:[i("div",{className:"nav",children:[l("div",{children:l("div",{onClick:()=>v("about-property"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"About Property"})}),l("div",{children:l("div",{onClick:()=>v("owner"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Owner Detail"})}),l("div",{children:l("div",{onClick:()=>v("location"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Location"})}),l("div",{children:l("div",{onClick:()=>v("video"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Video"})})]}),l("div",{className:"select-none",children:a!=null&&a.length?l(q,{images:a}):l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:Y,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"})})})}),l(g,{})]}),i("div",{className:"mt-[15px]",children:[i("div",{className:"flex gap-x-[10px] items-start p-[10px]",children:[l(r,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] ml-[20px] "}),i("div",{children:[l("h4",{className:"",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available"}),l("span",{children:"Project name"})]})]}),i("div",{className:"action",children:[i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l(r,{icon:"heroicons:home",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),l("span",{children:"unit number"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(r,{icon:"heroicons:globe-alt",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"}),l("span",{children:"Community name"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(r,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"}),l("span",{children:"Building name"})]})]})]}),i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:S,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.develpoername?e==null?void 0:e.develpoername:"Not Available"}),l("span",{children:"Developer name"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:I,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"}),l("span",{children:"Build up area"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l(r,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"}),l("span",{children:"Purchase Value"})]})]})]}),i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:T,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"}),l("span",{children:"Usage"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:B,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"}),l("span",{children:"Floor"})]})]})]})]})]}),l("div",{className:"w-[60%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{children:l("h4",{className:"headings",children:"About property"})}),i("div",{id:"about-property",className:"action",children:[i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:O,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"}),l("span",{children:"Type of kitchen"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:H,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:(e==null?void 0:e.totalbedroom)&&(e==null?void 0:e.totalbedroom)===void 0&&(e==null?void 0:e.totalbedroom)==="undefined"?e==null?void 0:e.totalbedroom:"Not available"}),l("span",{children:"Total bedroom"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:U,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:(e==null?void 0:e.totalbathroom)&&(e==null?void 0:e.totalbathroom)===void 0&&(e==null?void 0:e.totalbathroom)==="undefined"?e==null?void 0:e.totalbathroom:"Not Available"}),l("span",{children:"No of bathroom"})]})]})]}),i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:F,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"}),l("span",{children:"Type of balcony"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:V,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"}),l("span",{children:"Parking bay number"})]})]})]})]}),l("div",{className:"w-[60%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{id:"owner",children:l("h3",{className:"headings",children:"Owner Details"})}),i("div",{className:"action",children:[i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:w,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.owner_name?e==null?void 0:e.owner_name:"Not available"}),l("span",{children:"Owner name"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:E,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.representative_name?e==null?void 0:e.representative_name:"Not available"}),l("span",{children:"Owner representative"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:L,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not available"}),l("span",{children:"Purchase date"})]})]})]}),i("div",{className:"list-table",children:[i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:w,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:e!=null&&e.no_ownernamedeed?e==null?void 0:e.no_ownernamedeed:"Not available"}),l("span",{children:"No of owner Name tittle"})]})]}),i("div",{className:"flex gap-x-[10px] items-start",children:[l("img",{src:M,alt:"",className:"icon-pic mt-[4px]"}),i("div",{children:[l("span",{className:"si-distance",children:"4"}),l("span",{children:"Tittle deeds docoment"})]})]})]})]}),l("div",{className:"w-[60%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{id:"location",children:[l("h3",{className:"headings",children:"Location"}),e!=null&&e.propertylocation?l("a",{href:e==null?void 0:e.propertylocation,target:"_blank",children:l("img",{src:Q,alt:"",className:"ml-[36px]  card-pic"})}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),i("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"headings",children:"YOUTUBE Video"}),(e==null?void 0:e.youtubelink)&&n?l("div",{className:"flex w-[100%] col-span-2 justify-between  flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1 2 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[38px]",children:"Not available"})]})]})})]})};export{W as default};
