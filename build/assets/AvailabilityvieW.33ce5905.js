import{bY as Y,r as d,j as e,F as k,e as B,I as x,ci as O}from"./index.cef99591.js";import{t as $,a as T,b as I,p as P,i as E,m as j}from"./id-card.974d3149.js";import{c as h}from"./calendar.6b75ea36.js";import{N as U}from"./not-available.0313044d.js";const C="/assets/keys.6f6a9126.png",W="/assets/flash-cards.a6d993a4.png",z="/assets/rentsaleamount.9d57bb53.png",V="/assets/list.4b64eaf7.png",H="/assets/listed-for.98a57a79.png",K="/assets/maintenance.b84f0dcb.png",G="/assets/comment.77882d6f.png",J="/assets/contract.60b0a0cc.png";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\avaiblity-sheet\\AvailabilityvieW.jsx";const Q=({images:r,selectedImage:l})=>{const[b,o]=d.exports.useState(l),f=()=>{o(N=>N===0?r.length-1:N-1)},c=()=>{o(N=>N===r.length-1?0:N+1)};return e("div",{className:"custom-slider",children:e("div",{className:"slider-content justify-center",children:[e("div",{className:"text-white slider-button prev-button",onClick:f,children:e(x,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:i,lineNumber:55,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:54,columnNumber:17},void 0),e("img",{src:r[b],alt:`slider image ${b}`,className:"slider-image"},void 0,!1,{fileName:i,lineNumber:57,columnNumber:17},void 0),e("div",{className:"text-white slider-button next-button",onClick:c,children:e(x,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:i,lineNumber:63,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:62,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:53,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:52,columnNumber:9},void 0)},X=({images:r})=>{const[l,b]=d.exports.useState(null),[o,f]=d.exports.useState(!1),c=v=>{f(!0),b(v)},N=()=>{f(!1),b(null)},[m,y]=d.exports.useState(!1);d.exports.useState("");const p=()=>{y(!m)};return e("div",{className:"thumbnail-container",children:[(r==null?void 0:r.length)>=5?e("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[e("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:e("img",{src:r[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:94,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:93,columnNumber:25},void 0),e("div",{className:"lg:w-1/2 md:w-full  flex justify-between flex-wrap gap-y-4",children:r.slice(1,5).map((v,n)=>e("img",{src:v,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${n===1?"rounded-tr-[10px]":""} ${n===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${n===3?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>c(n+1)},n,!1,{fileName:i,lineNumber:98,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:96,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:92,columnNumber:21},void 0):null,(r==null?void 0:r.length)===4||(r==null?void 0:r.length)===2?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:r.map((v,n)=>e("img",{src:v,onClick:()=>c(n),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${n===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(r==null?void 0:r.length)===4?`${n===1?"rounded-tr-[10px]":""} ${n===2?"rounded-bl-[10px]":""} ${n===3?"rounded-br-[10px]":""}`:`${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""} ${n===0?"rounded-tl-[10px]":""} ${n===0?"rounded-bl-[10px]":""}`}`,alt:`image-${n+1}`},n,!1,{fileName:i,lineNumber:118,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:116,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:115,columnNumber:21},void 0):null,(r==null?void 0:r.length)===3?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[e("div",{className:"w-[50%]",children:e("img",{src:r[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:127,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:126,columnNumber:25},void 0),e("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:r.slice(1,3).map((v,n)=>e("img",{src:v,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${n===1?"rounded-tr-[10px]":""} ${n===1?"rounded-br-[10px]":""}`,alt:`image-${n+1}`,onClick:()=>c(n+1)},n,!1,{fileName:i,lineNumber:131,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:129,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:125,columnNumber:21},void 0):null,(r==null?void 0:r.length)===1?e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:r[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:140,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:139,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:138,columnNumber:21},void 0):null,e("div",{className:"flex justify-end",children:[e("button",{onClick:()=>c(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[16px]",children:"Show all image"},void 0,!1,{fileName:i,lineNumber:146,columnNumber:17},void 0),e("div",{children:e("button",{className:"btn btn inline-flex justify-center btn-dark cursor-pointer w-[151px] ",onClick:p,children:m?" Video":"Video"},void 0,!1,{fileName:i,lineNumber:153,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:152,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:145,columnNumber:13},void 0),o&&e("div",{className:"modal-overlay",children:[e("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"},void 0,!1,{fileName:i,lineNumber:166,columnNumber:21},void 0),e("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:N,children:"Close"},void 0,!1,{fileName:i,lineNumber:168,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:165,columnNumber:17},void 0),o&&e("div",{className:"modal-overlay",children:[e("div",{className:"max-w-[90vw] p-[10px] text-center ",children:e(Q,{selectedImage:l,images:r},void 0,!1,{fileName:i,lineNumber:178,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:176,columnNumber:21},void 0),e("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:N,children:e(x,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"},void 0,!1,{fileName:i,lineNumber:181,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:180,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:175,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:89,columnNumber:9},void 0)},Z=({showVideo:r,handleClose:l,videoLink:b,youtubeVideo:o})=>e("div",{className:"thumbnail-container",children:r&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[1400px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:"Youtube Video"},void 0,!1,{fileName:i,lineNumber:198,columnNumber:29},void 0),e("img",{src:O,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:l},void 0,!1,{fileName:i,lineNumber:199,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:196,columnNumber:25},void 0),r&&o?e("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:i,lineNumber:204,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:203,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:202,columnNumber:29},void 0):e("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:i,lineNumber:218,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:195,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:194,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:192,columnNumber:9},void 0),me=()=>{const{id:r}=Y(),[l,b]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(r){const s=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${r}`)).json();s&&b(s)}})()},[r]);const[o,f]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.porpertyid){const s=await(await fetch(`http://dev-rare.srp.ai/property/${l==null?void 0:l.porpertyid}`)).json();s&&f(s)}})()},[l==null?void 0:l.porpertyid]);const[c,N]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.employeeid){const s=await(await fetch(`http://dev-rare.srp.ai/employees/${l==null?void 0:l.employeeid}`)).json();s&&N(s)}})()},[l==null?void 0:l.employeeid]);const[m,y]=d.exports.useState({});d.exports.useEffect(()=>{l!=null&&l.porpertyid&&(async()=>{const s=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${l==null?void 0:l.porpertyid}`)).json();let g=s==null?void 0:s.filter(w=>(w==null?void 0:w.contractupdation)!=="terminated");y(g[0])})()},[l==null?void 0:l.porpertyid]);const[p,v]=d.exports.useState("");d.exports.useEffect(()=>{if(o){const u=o==null?void 0:o.amenitiesimages.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),t=o==null?void 0:o.buildingelevation.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),s=o==null?void 0:o.floorplan.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),g=o==null?void 0:o.plotplanattachment.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),w=o==null?void 0:o.propertyimages.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),_=o==null?void 0:o.typicalfloorplan.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),q=o==null?void 0:o.unitplanattachment.filter(a=>a!=="").map(a=>"http://dev-rare.srp.ai"+a),F=[...u,...t,...s,...g,...w,..._,...q];v(F)}},[o==null?void 0:o.amenitiesimages,o==null?void 0:o.buildingelevation,o==null?void 0:o.plotplanattachment,o==null?void 0:o.propertyimages,o==null?void 0:o.typicalfloorplan,o==null?void 0:o.unitplanattachment]);const[n,L]=d.exports.useState("");d.exports.useEffect(()=>{if(o!=null&&o.youtubelink){let u=o==null?void 0:o.youtubelink,t=u==null?void 0:u.replace("watch?v=","embed/");L(t)}},[o==null?void 0:o.youtubelink]);const S=u=>{const t=document.getElementById(u),s=u==="about-property"?180:80,g=t.offsetTop-s;window.scrollTo({top:g,behavior:"smooth"})},[A,M]=d.exports.useState(!1),R=()=>{A===!0&&M(!1)};return e(k,{children:l&&e("div",{className:"card-bo",children:e(B,{children:[e("div",{children:[e("div",{className:"nav",children:[e("div",{children:e("div",{onClick:()=>S("tenant-detail"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Tenant detail"},void 0,!1,{fileName:i,lineNumber:397,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:396,columnNumber:33},void 0),e("div",{children:e("div",{onClick:()=>S("location"),className:"btn btn inline-flex justify-center btn-dark cursor-pointer",children:"Location"},void 0,!1,{fileName:i,lineNumber:403,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:402,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:395,columnNumber:29},void 0),e("div",{className:"select-none",children:p!=null&&p.length?e(X,{images:p},void 0,!1,{fileName:i,lineNumber:412,columnNumber:41},void 0):e("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:e("div",{className:"w-[100%]",children:e("img",{src:U,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"},void 0,!1,{fileName:i,lineNumber:415,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:414,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:413,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:409,columnNumber:29},void 0),e(k,{},void 0,!1)]},void 0,!0,{fileName:i,lineNumber:394,columnNumber:25},void 0),e("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:[e(x,{icon:"heroicons:building-office-2",className:"icon-pic mt-[4px] "},void 0,!1,{fileName:i,lineNumber:481,columnNumber:29},void 0),e("div",{children:[e("h4",{className:"",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:483,columnNumber:33},void 0),e("span",{children:"Property name"},void 0,!1,{fileName:i,lineNumber:484,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:482,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:480,columnNumber:25},void 0),e("div",{className:"flex gap-x-[35px] ml-[20px] m-[30px] ",children:[e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:H,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:490,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.propertystatus?l==null?void 0:l.propertystatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:492,columnNumber:41},void 0),e("span",{children:"List for"},void 0,!1,{fileName:i,lineNumber:493,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:491,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:489,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:z,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:497,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.propertyvaluation?l==null?void 0:l.propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:499,columnNumber:41},void 0),e("span",{children:"Rent/Sold amount"},void 0,!1,{fileName:i,lineNumber:500,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:498,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:496,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e(x,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:504,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.employeeid?(c==null?void 0:c.email)+" | "+(c==null?void 0:c.designation):"Not Available"},void 0,!1,{fileName:i,lineNumber:506,columnNumber:41},void 0),e("span",{children:"Assign agent"},void 0,!1,{fileName:i,lineNumber:507,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:505,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:503,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e(x,{icon:"heroicons:building-office",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:511,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.property_reference?l==null?void 0:l.property_reference:"Not Available"},void 0,!1,{fileName:i,lineNumber:513,columnNumber:41},void 0),e("span",{children:"Property Reference"},void 0,!1,{fileName:i,lineNumber:514,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:512,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:510,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:488,columnNumber:29},void 0),e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:V,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:521,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.listingsource?l==null?void 0:l.listingsource:"Not Available"},void 0,!1,{fileName:i,lineNumber:523,columnNumber:41},void 0),e("span",{children:"Listing source"},void 0,!1,{fileName:i,lineNumber:524,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:522,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:520,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:V,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:528,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.listingtype?l==null?void 0:l.listingtype:"Not Available"},void 0,!1,{fileName:i,lineNumber:530,columnNumber:41},void 0),e("span",{children:"Listing type"},void 0,!1,{fileName:i,lineNumber:531,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:529,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:527,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:C,alt:"",className:"w-[33px] h-[34px] mt-[4px]"},void 0,!1,{fileName:i,lineNumber:535,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.keylocation?l==null?void 0:l.keylocation:"Not Available"},void 0,!1,{fileName:i,lineNumber:537,columnNumber:41},void 0),e("span",{children:"Key location"},void 0,!1,{fileName:i,lineNumber:538,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:536,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:534,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:519,columnNumber:29},void 0),e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:C,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:544,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.numberkeys?l==null?void 0:l.numberkeys:"Not Available"},void 0,!1,{fileName:i,lineNumber:546,columnNumber:41},void 0),e("span",{children:"Number of key"},void 0,!1,{fileName:i,lineNumber:547,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:545,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:543,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:W,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:551,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.numberaccesscard?l==null?void 0:l.numberaccesscard:"Not Available"},void 0,!1,{fileName:i,lineNumber:553,columnNumber:41},void 0),e("span",{children:"Number of acess card"},void 0,!1,{fileName:i,lineNumber:554,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:552,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:550,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:K,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:558,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.maintenance?l==null?void 0:l.maintenance:"Not Available"},void 0,!1,{fileName:i,lineNumber:560,columnNumber:41},void 0),e("span",{children:"Maintaince done"},void 0,!1,{fileName:i,lineNumber:561,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:559,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:557,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:542,columnNumber:29},void 0),e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:C,alt:"",className:"w-[33px] h-[34px] mt-[4px]"},void 0,!1,{fileName:i,lineNumber:576,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.transaction_status?l==null?void 0:l.transaction_status:"Not Available"},void 0,!1,{fileName:i,lineNumber:578,columnNumber:41},void 0),e("span",{children:"Transaction Status"},void 0,!1,{fileName:i,lineNumber:579,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:577,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:575,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:G,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:583,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.remarks?l==null?void 0:l.remarks:"Not Available"},void 0,!1,{fileName:i,lineNumber:585,columnNumber:41},void 0),e("span",{children:"Remarks"},void 0,!1,{fileName:i,lineNumber:586,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:584,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:582,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:J,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:590,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:l!=null&&l.contractA?l==null?void 0:l.contractA:"Not Available"},void 0,!1,{fileName:i,lineNumber:592,columnNumber:41},void 0),e("span",{children:"Contract a"},void 0,!1,{fileName:i,lineNumber:593,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:591,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:589,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:565,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:487,columnNumber:25},void 0),(l==null?void 0:l.propertystatus)==="Rent"?e(k,{children:[e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:603,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:602,columnNumber:37},void 0),e("div",{children:e("h4",{className:"headings",children:"Tenant Details"},void 0,!1,{fileName:i,lineNumber:606,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:605,columnNumber:37},void 0),e("div",{id:"tenant-detail",className:"action",children:[e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:$,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:612,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.email?m==null?void 0:m.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:614,columnNumber:53},void 0),e("span",{children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:615,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:613,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:611,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:T,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:619,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.guestname?m==null?void 0:m.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:621,columnNumber:53},void 0),e("span",{children:"Tenant name"},void 0,!1,{fileName:i,lineNumber:622,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:620,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:618,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:I,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:626,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.mobilenumber?m==null?void 0:m.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:629,columnNumber:53},void 0),e("span",{children:"Mobile no"},void 0,!1,{fileName:i,lineNumber:630,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:628,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:625,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:610,columnNumber:41},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:P,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:638,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.passportnumber?m==null?void 0:m.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:640,columnNumber:53},void 0),e("span",{children:"Passport no"},void 0,!1,{fileName:i,lineNumber:641,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:639,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:637,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:E,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:645,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.nationality?m==null?void 0:m.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:647,columnNumber:53},void 0),e("span",{children:"Nationality"},void 0,!1,{fileName:i,lineNumber:648,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:646,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:644,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:652,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractexecutiondate?new Date(m==null?void 0:m.contractexecutiondate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:654,columnNumber:53},void 0),e("span",{children:"Contract execution date"},void 0,!1,{fileName:i,lineNumber:655,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:653,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:651,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:635,columnNumber:41},void 0),e("div",{className:"list-table",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:662,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractstartdate?new Date(m==null?void 0:m.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:664,columnNumber:53},void 0),e("span",{children:"Contract start date"},void 0,!1,{fileName:i,lineNumber:665,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:663,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:661,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:669,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractenddate?new Date(m==null?void 0:m.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:671,columnNumber:53},void 0),e("span",{children:"Contract end date"},void 0,!1,{fileName:i,lineNumber:672,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:670,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:668,columnNumber:45},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:678,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.rentalamount?m==null?void 0:m.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:681,columnNumber:53},void 0),e("span",{children:"Rental amount"},void 0,!1,{fileName:i,lineNumber:682,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:680,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:677,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:660,columnNumber:41},void 0),e("div",{className:"list-table",children:e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:689,columnNumber:49},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.securitydepositamount?m==null?void 0:m.securitydepositamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:691,columnNumber:53},void 0),e("span",{children:"Security deposit amount"},void 0,!1,{fileName:i,lineNumber:692,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:690,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:688,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:687,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:609,columnNumber:37},void 0)]},void 0,!0):null,e("div",{className:"w-[60%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:704,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:703,columnNumber:25},void 0),e("div",{className:"flex gap-x-[15px] items-start p-[16px]",children:e("h4",{children:"Tenant Details"},void 0,!1,{fileName:i,lineNumber:707,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:706,columnNumber:25},void 0),e("div",{className:"flex gap-x-[35px] ml-[20px] m-[30px] ",children:[e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:$,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:712,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.email?m==null?void 0:m.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:714,columnNumber:41},void 0),e("span",{children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:715,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:713,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:711,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:T,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:719,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.guestname?m==null?void 0:m.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:721,columnNumber:41},void 0),e("span",{children:"Tenant name"},void 0,!1,{fileName:i,lineNumber:722,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:720,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:718,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:I,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:726,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.mobilenumber?m==null?void 0:m.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:729,columnNumber:41},void 0),e("span",{children:"Mobile no"},void 0,!1,{fileName:i,lineNumber:730,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:728,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:725,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:710,columnNumber:29},void 0),e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:P,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:736,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.passportnumber?m==null?void 0:m.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:738,columnNumber:41},void 0),e("span",{children:"Passport no"},void 0,!1,{fileName:i,lineNumber:739,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:737,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:735,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:E,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:743,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.nationality?m==null?void 0:m.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:745,columnNumber:41},void 0),e("span",{children:"Nationality"},void 0,!1,{fileName:i,lineNumber:746,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:744,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:742,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:750,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractexecutiondate?new Date(m==null?void 0:m.contractexecutiondate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:752,columnNumber:41},void 0),e("span",{children:"Contract execution date"},void 0,!1,{fileName:i,lineNumber:753,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:751,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:749,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:734,columnNumber:29},void 0),e("div",{className:"flex flex-col gap-[50px]",children:[e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:759,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractstartdate?new Date(m==null?void 0:m.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:761,columnNumber:41},void 0),e("span",{children:"Contract start date"},void 0,!1,{fileName:i,lineNumber:762,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:760,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:758,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:h,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:766,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.contractenddate?new Date(m==null?void 0:m.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:768,columnNumber:41},void 0),e("span",{children:"Contract end date"},void 0,!1,{fileName:i,lineNumber:769,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:767,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:765,columnNumber:33},void 0),e("div",{className:"flex gap-x-[10px] items-start",children:[e("img",{src:j,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:775,columnNumber:37},void 0),e("div",{children:[e("span",{className:"si-distance",children:m!=null&&m.rentalamount?m==null?void 0:m.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:778,columnNumber:41},void 0),e("span",{children:"Rental amount"},void 0,!1,{fileName:i,lineNumber:779,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:777,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:774,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:757,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:709,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:789,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:788,columnNumber:25},void 0),e("div",{id:"video",className:"w-[100%] col-span-2",children:[e("h3",{className:"headings"},void 0,!1,{fileName:i,lineNumber:792,columnNumber:29},void 0),A&&(l==null?void 0:l.youtubelink)&&n?e("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:i,lineNumber:797,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:796,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:795,columnNumber:33},void 0):e("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:i,lineNumber:811,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:791,columnNumber:25},void 0),e(Z,{showVideo:A,handleClose:R,videoLink:l==null?void 0:l.youtubelink,youtubeVideo:n},void 0,!1,{fileName:i,lineNumber:814,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:393,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:392,columnNumber:17},void 0)},void 0,!1)};export{me as default};
