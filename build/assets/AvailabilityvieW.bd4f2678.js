import{bu as Y,r,j as e,F as k,c as l,f as F,I as b,bQ as U}from"./index.1ecd67a9.js";import{t as $,a as T,b as I,p as P,i as E,m as j}from"./id-card.974d3149.js";import{c as g}from"./calendar.6b75ea36.js";import{N as z}from"./not-available.0313044d.js";const S="/assets/keys.6f6a9126.png",H="/assets/flash-cards.a6d993a4.png",K="/assets/rentsaleamount.9d57bb53.png",M="/assets/list.4b64eaf7.png",O="/assets/listed-for.98a57a79.png",Q="/assets/maintenance.b84f0dcb.png",W="/assets/comment.77882d6f.png",G="/assets/contract.60b0a0cc.png",J=({images:a,selectedImage:i})=>{const[v,c]=r.exports.useState(i),N=()=>{c(m=>m===0?a.length-1:m-1)},d=()=>{c(m=>m===a.length-1?0:m+1)};return e("div",{className:"custom-slider",children:l("div",{className:"slider-content justify-center",children:[e("div",{className:"text-white slider-button prev-button",onClick:N,children:e(b,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"})}),e("img",{src:a[v],alt:`slider image ${v}`,className:"slider-image"}),e("div",{className:"text-white slider-button next-button",onClick:d,children:e(b,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"})})]})})},X=({images:a})=>{const[i,v]=r.exports.useState(null),[c,N]=r.exports.useState(!1),d=h=>{N(!0),v(h)},m=()=>{N(!1),v(null)},[s,y]=r.exports.useState(!1);r.exports.useState("");const f=()=>{y(!s)};return l("div",{className:"thumbnail-container",children:[(a==null?void 0:a.length)>=5?l("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[e("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:e("img",{src:a[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>d(0)})}),e("div",{className:"lg:w-1/2 md:w-full  flex justify-between flex-wrap gap-y-4",children:a.slice(1,5).map((h,n)=>e("img",{src:h,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${n===1?"rounded-tr-[10px]":""} ${n===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${n===3?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>d(n+1)},n))})]}):null,(a==null?void 0:a.length)===4||(a==null?void 0:a.length)===2?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:a.map((h,n)=>e("img",{src:h,onClick:()=>d(n),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${n===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(a==null?void 0:a.length)===4?`${n===1?"rounded-tr-[10px]":""} ${n===2?"rounded-bl-[10px]":""} ${n===3?"rounded-br-[10px]":""}`:`${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""} ${n===0?"rounded-tl-[10px]":""} ${n===0?"rounded-bl-[10px]":""}`}`,alt:`image-${n+1}`},n))})}):null,(a==null?void 0:a.length)===3?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[e("div",{className:"w-[50%]",children:e("img",{src:a[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>d(0)})}),e("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:a.slice(1,3).map((h,n)=>e("img",{src:h,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>d(n+1)},n))})]}):null,(a==null?void 0:a.length)===1?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:a[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>d(0)})})}):null,l("div",{className:"flex justify-end",children:[e("button",{onClick:()=>d(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[16px]",children:"Show all image"}),e("div",{children:e("button",{className:"btn btn inline-flex justify-center btn-dark cursor-pointer w-[151px] ",onClick:f,children:s?" Video":"Video"})})]}),c&&l("div",{className:"modal-overlay",children:[e("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"}),e("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:m,children:"Close"})]}),c&&l("div",{className:"modal-overlay",children:[e("div",{className:"max-w-[90vw] p-[10px] text-center ",children:e(J,{selectedImage:i,images:a})}),e("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:m,children:e(b,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"})})]})]})},Z=({showVideo:a,handleClose:i,videoLink:v,youtubeVideo:c})=>e("div",{className:"thumbnail-container",children:a&&e("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[1400px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:"Youtube Video"}),e("img",{src:U,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:i})]}),a&&c?e("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:c,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):e("span",{className:"si-distance pl-[38px]",children:"Not available"})]})})}),le=()=>{const{id:a}=Y(),[i,v]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{if(a){const o=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/${a}`)).json();o&&v(o)}})()},[a]);const[c,N]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{if(i!=null&&i.porpertyid){const o=await(await fetch(`http://portals.rarehomesgroup.com/property/${i==null?void 0:i.porpertyid}`)).json();o&&N(o)}})()},[i==null?void 0:i.porpertyid]);const[d,m]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{if(i!=null&&i.employeeid){const o=await(await fetch(`http://portals.rarehomesgroup.com/employees/${i==null?void 0:i.employeeid}`)).json();o&&m(o)}})()},[i==null?void 0:i.employeeid]);const[s,y]=r.exports.useState({});r.exports.useEffect(()=>{i!=null&&i.porpertyid&&(async()=>{const o=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/api/propertydelete?propertyid=${i==null?void 0:i.porpertyid}`)).json();let u=o==null?void 0:o.filter(w=>(w==null?void 0:w.contractupdation)!=="terminated");y(u[0])})()},[i==null?void 0:i.porpertyid]);const[f,h]=r.exports.useState("");r.exports.useEffect(()=>{if(c){const p=c==null?void 0:c.amenitiesimages.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),x=c==null?void 0:c.buildingelevation.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),o=c==null?void 0:c.floorplan.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),u=c==null?void 0:c.plotplanattachment.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),w=c==null?void 0:c.propertyimages.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),q=c==null?void 0:c.typicalfloorplan.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),_=c==null?void 0:c.unitplanattachment.filter(t=>t!=="").map(t=>"http://portals.rarehomesgroup.com"+t),B=[...p,...x,...o,...u,...w,...q,..._];h(B)}},[c==null?void 0:c.amenitiesimages,c==null?void 0:c.buildingelevation,c==null?void 0:c.plotplanattachment,c==null?void 0:c.propertyimages,c==null?void 0:c.typicalfloorplan,c==null?void 0:c.unitplanattachment]);const[n,V]=r.exports.useState("");r.exports.useEffect(()=>{if(c!=null&&c.youtubelink){let p=c==null?void 0:c.youtubelink,x=p==null?void 0:p.replace("watch?v=","embed/");V(x)}},[c==null?void 0:c.youtubelink]);const C=p=>{const x=document.getElementById(p),o=p==="about-property"?180:80,u=x.offsetTop-o;window.scrollTo({top:u,behavior:"smooth"})},[A,L]=r.exports.useState(!1),R=()=>{A===!0&&L(!1)};return e(k,{children:i&&e("div",{className:"card-bo",children:l(F,{children:[l("div",{children:[l("div",{className:"nav",children:[e("div",{children:e("div",{onClick:()=>C("tenant-detail"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Tenant detail"})}),e("div",{children:e("div",{onClick:()=>C("location"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Location"})})]}),e("div",{className:"select-none",children:f!=null&&f.length?e(X,{images:f}):e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:z,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"})})})}),e(k,{})]}),l("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:[e(b,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] "}),l("div",{children:[e("h4",{className:"",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"}),e("span",{children:"Property name"})]})]}),l("div",{className:"flex gap-x-[35px] ml-[20px] m-[30px] ",children:[l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:O,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.propertystatus?i==null?void 0:i.propertystatus:"Not Available"}),e("span",{children:"List for"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:K,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.propertyvaluation?i==null?void 0:i.propertyvaluation:"Not Available"}),e("span",{children:"Rent/Sold amount"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e(b,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.employeeid?(d==null?void 0:d.email)+" | "+(d==null?void 0:d.designation):"Not Available"}),e("span",{children:"Assign agent"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e(b,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.property_reference?i==null?void 0:i.property_reference:"Not Available"}),e("span",{children:"Property Reference"})]})]})]}),l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:M,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.listingsource?i==null?void 0:i.listingsource:"Not Available"}),e("span",{children:"Listing source"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:M,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.listingtype?i==null?void 0:i.listingtype:"Not Available"}),e("span",{children:"Listing type"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:S,alt:"",className:"w-[33px] h-[34px] mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.keylocation?i==null?void 0:i.keylocation:"Not Available"}),e("span",{children:"Key location"})]})]})]}),l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:S,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.numberkeys?i==null?void 0:i.numberkeys:"Not Available"}),e("span",{children:"Number of key"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:H,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.numberaccesscard?i==null?void 0:i.numberaccesscard:"Not Available"}),e("span",{children:"Number of acess card"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:Q,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.maintenance?i==null?void 0:i.maintenance:"Not Available"}),e("span",{children:"Maintaince done"})]})]})]}),l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:S,alt:"",className:"w-[33px] h-[34px] mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.transaction_status?i==null?void 0:i.transaction_status:"Not Available"}),e("span",{children:"Transaction Status"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:W,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.remarks?i==null?void 0:i.remarks:"Not Available"}),e("span",{children:"Remarks"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:G,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:i!=null&&i.contractA?i==null?void 0:i.contractA:"Not Available"}),e("span",{children:"Contract a"})]})]})]})]}),(i==null?void 0:i.propertystatus)==="Rent"?l(k,{children:[e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"})}),e("div",{children:e("h4",{className:"headings",children:"Tenant Details"})}),l("div",{id:"tenant-detail",className:"action",children:[l("div",{className:"list-table",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:$,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.email?s==null?void 0:s.email:"Not Available"}),e("span",{children:"Tenant Email"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:T,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.guestname?s==null?void 0:s.guestname:"Not Available"}),e("span",{children:"Tenant name"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:I,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.mobilenumber?s==null?void 0:s.mobilenumber:"Not Available"}),e("span",{children:"Mobile no"})]})]})]}),l("div",{className:"list-table",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:P,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.passportnumber?s==null?void 0:s.passportnumber:"Not Available"}),e("span",{children:"Passport no"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:E,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.nationality?s==null?void 0:s.nationality:"Not Available"}),e("span",{children:"Nationality"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractexecutiondate?new Date(s==null?void 0:s.contractexecutiondate).toDateString():"Not Available"}),e("span",{children:"Contract execution date"})]})]})]}),l("div",{className:"list-table",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractstartdate?new Date(s==null?void 0:s.contractstartdate).toDateString():"Not Available"}),e("span",{children:"Contract start date"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractenddate?new Date(s==null?void 0:s.contractenddate).toDateString():"Not Available"}),e("span",{children:"Contract end date"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.rentalamount?s==null?void 0:s.rentalamount:"Not Available"}),e("span",{children:"Rental amount"})]})]})]}),e("div",{className:"list-table",children:l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.securitydepositamount?s==null?void 0:s.securitydepositamount:"Not Available"}),e("span",{children:"Security deposit amount"})]})]})})]})]}):null,e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"})}),e("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:e("h4",{children:"Tenant Details"})}),l("div",{className:"flex gap-x-[35px] ml-[20px] m-[30px] ",children:[l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:$,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.email?s==null?void 0:s.email:"Not Available"}),e("span",{children:"Tenant Email"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:T,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.guestname?s==null?void 0:s.guestname:"Not Available"}),e("span",{children:"Tenant name"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:I,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.mobilenumber?s==null?void 0:s.mobilenumber:"Not Available"}),e("span",{children:"Mobile no"})]})]})]}),l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:P,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.passportnumber?s==null?void 0:s.passportnumber:"Not Available"}),e("span",{children:"Passport no"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:E,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.nationality?s==null?void 0:s.nationality:"Not Available"}),e("span",{children:"Nationality"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractexecutiondate?new Date(s==null?void 0:s.contractexecutiondate).toDateString():"Not Available"}),e("span",{children:"Contract execution date"})]})]})]}),l("div",{className:"flex flex-col gap-[50px]",children:[l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractstartdate?new Date(s==null?void 0:s.contractstartdate).toDateString():"Not Available"}),e("span",{children:"Contract start date"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:g,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.contractenddate?new Date(s==null?void 0:s.contractenddate).toDateString():"Not Available"}),e("span",{children:"Contract end date"})]})]}),l("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"}),l("div",{children:[e("span",{className:"si-distance",children:s!=null&&s.rentalamount?s==null?void 0:s.rentalamount:"Not Available"}),e("span",{children:"Rental amount"})]})]})]})]}),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom"})}),l("div",{id:"video",className:"w-[100%] col-span-2",children:[e("h3",{className:"headings"}),A&&(i==null?void 0:i.youtubelink)&&n?e("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):e("span",{className:"si-distance pl-[38px]",children:"Not available"})]}),e(Z,{showVideo:A,handleClose:R,videoLink:i==null?void 0:i.youtubelink,youtubeVideo:n})]})})})};export{le as default};
