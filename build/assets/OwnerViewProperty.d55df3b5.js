import{r as s,c9 as B,bt as V,b_ as L,j as l,F as k,bN as O,e as F,I as h,bP as E}from"./index.3bc655c6.js";import{b as M,u as R,f as U,d as Y,t as z,a as H,p as J,o as g,c as K,e as Q,g as W}from"./docs.c1ee8499.js";import{b as j}from"./bathroom.f897a353.js";import{N as q}from"./not-available.0313044d.js";import{u as G,j as X}from"./ThemeProvider.583a0bde.js";const S=s.exports.forwardRef(({bsPrefix:o,bg:e="primary",pill:N=!1,text:a,className:b,as:c="span",...d},u)=>{const m=G(o,"badge");return X(c,{ref:u,...d,className:B(b,m,N&&"rounded-pill",a&&`text-${a}`,e&&`bg-${e}`)})});S.displayName="Badge";const Z=S;var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\OwnerViewProperty.jsx";const D=({images:o,selectedImage:e})=>{const[N,a]=s.exports.useState(e),b=()=>{a(d=>d===0?o.length-1:d-1)},c=()=>{a(d=>d===o.length-1?0:d+1)};return l("div",{className:"custom-slider",children:l("div",{className:"slider-content justify-center",children:[l("div",{className:"text-white slider-button prev-button",onClick:b,children:l(h,{icon:"heroicons:chevron-left",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:i,lineNumber:45,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:44,columnNumber:17},void 0),l("img",{src:o[N],alt:`slider image ${N}`,className:"slider-image"},void 0,!1,{fileName:i,lineNumber:47,columnNumber:17},void 0),l("div",{className:"text-white slider-button next-button",onClick:c,children:l(h,{icon:"heroicons:chevron-right",className:"w-[35px] h-[35px]"},void 0,!1,{fileName:i,lineNumber:53,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:52,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:43,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:42,columnNumber:9},void 0)},ee=({images:o})=>{const[e,N]=s.exports.useState(null),[a,b]=s.exports.useState(!1),c=u=>{b(!0),N(u)},d=()=>{b(!1),N(null)};return l("div",{className:"thumbnail-container",children:[(o==null?void 0:o.length)>=5?l("div",{className:"flex justify-between gap-x-4 gap-y-4 p-4",children:[l("div",{className:"lg:w-1/2 md:w-full h-[600px] ",children:l("img",{src:o[0],className:"rounded-l-[10px] cursor-pointer h-[100%]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:78,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:77,columnNumber:25},void 0),l("div",{className:"lg:w-1/2 h-[291px] md:w-full  flex justify-between flex-wrap gap-y-4",children:o.slice(1,5).map((u,m)=>l("img",{src:u,className:`lg:w-[49%] h-[291px] rounded-[0px] cursor-pointer object-cover md:w-[49%] sm:w-full  ${m===1?"rounded-tr-[10px]":""} ${m===0?"md:rounded-tl-[0px] lg:rounded-tl-0 sm:rounded-[10px]":""} ${m===3?"rounded-br-[10px]":""}`,alt:`image-${m+1}`,onClick:()=>c(m+1)},m,!1,{fileName:i,lineNumber:82,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:80,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:76,columnNumber:21},void 0):null,(o==null?void 0:o.length)===4||(o==null?void 0:o.length)===2?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%] flex flex-wrap gap-y-[10px] gap-x-[10px] ",children:o.map((u,m)=>l("img",{src:u,onClick:()=>c(m),className:`w-[49.5%] h-[291px] cursor-pointer object-cover ${m===0?"rounded-tl-[10px] lg:rounded-0 sm:rounded-10px":""} ${(o==null?void 0:o.length)===4?`${m===1?"rounded-tr-[10px]":""} ${m===2?"rounded-bl-[10px]":""} ${m===3?"rounded-br-[10px]":""}`:`${m===1?"rounded-tr-[10px]":""} ${m===1?"rounded-br-[10px]":""} ${m===0?"rounded-tl-[10px]":""} ${m===0?"rounded-bl-[10px]":""}`}`,alt:`image-${m+1}`},m,!1,{fileName:i,lineNumber:102,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:100,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:99,columnNumber:21},void 0):null,(o==null?void 0:o.length)===3?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:[l("div",{className:"w-[50%]",children:l("img",{src:o[0],className:"rounded-l-[10px]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:111,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:110,columnNumber:25},void 0),l("div",{className:"w-[50%] flex justify-between flex-wrap gap-y-[15px]",children:o.slice(1,3).map((u,m)=>l("img",{src:u,className:`w-[49%] h-[291px] cursor-pointer object-cover  ${m===1?"rounded-tr-[10px]":""} ${m===1?"rounded-br-[10px]":""}`,alt:`image-${m+1}`,onClick:()=>c(m+1)},m,!1,{fileName:i,lineNumber:115,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:113,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:109,columnNumber:21},void 0):null,(o==null?void 0:o.length)===1?l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:o[0],className:"rounded-[10px] h-[291px] cursor-pointer w-[100%] object-cover max-h-[850px]",alt:"image-0",onClick:()=>c(0)},void 0,!1,{fileName:i,lineNumber:124,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:123,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:122,columnNumber:21},void 0):null,a&&l("div",{className:"modal-overlay",children:[l("div",{className:"max-w-full md:max-w-[90vw] p-4 text-center relative"},void 0,!1,{fileName:i,lineNumber:133,columnNumber:21},void 0),l("div",{className:"absolute top-2 right-2 cursor-pointer text-white",onClick:d,children:"Close"},void 0,!1,{fileName:i,lineNumber:135,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:132,columnNumber:17},void 0),a&&l("div",{className:"modal-overlay",children:[l("div",{className:"max-w-[90vw] p-[10px] text-center ",children:l(D,{selectedImage:e,images:o},void 0,!1,{fileName:i,lineNumber:145,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:143,columnNumber:21},void 0),l("div",{className:"absolute top-[1%] right-[1%] cursor-pointer text-white",onClick:d,children:l(h,{icon:"heroicons:x-mark",className:"w-[50px] h-[50px]"},void 0,!1,{fileName:i,lineNumber:148,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:147,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:142,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:73,columnNumber:9},void 0)},le=({showVideo:o,handleClose:e,videoLink:N,youtubeVideo:a})=>l("div",{className:"thumbnail-container",children:o&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[1400px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Youtube Video"},void 0,!1,{fileName:i,lineNumber:165,columnNumber:29},void 0),l("img",{src:E,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:e},void 0,!1,{fileName:i,lineNumber:166,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:163,columnNumber:25},void 0),o&&a?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:i,lineNumber:171,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:170,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:169,columnNumber:29},void 0):l("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:i,lineNumber:185,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:162,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:161,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:159,columnNumber:9},void 0),de=()=>{const{id:o}=V(),{data:e,error:N,isLoading:a,isFetching:b,isSuccess:c}=L(o),[d,u]=s.exports.useState("");s.exports.useEffect(()=>{if(e){const t=e==null?void 0:e.amenitiesimages.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),v=e==null?void 0:e.buildingelevation.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),f=e==null?void 0:e.floorplan.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),p=e==null?void 0:e.plotplanattachment.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),A=e==null?void 0:e.propertyimages.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),I=e==null?void 0:e.typicalfloorplan.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),T=e==null?void 0:e.unitplanattachment.filter(r=>r!=="").map(r=>"http://dev-rare.srp.ai"+r),_=[...t,...v,...f,...p,...A,...I,...T];u(_)}},[e==null?void 0:e.amenitiesimages,e==null?void 0:e.buildingelevation,e==null?void 0:e.plotplanattachment,e==null?void 0:e.propertyimages,e==null?void 0:e.typicalfloorplan,e==null?void 0:e.unitplanattachment]);const[m,C]=s.exports.useState("");s.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let t=e==null?void 0:e.youtubelink,v=t==null?void 0:t.replace("watch?v=","embed/");C(v)}},[e==null?void 0:e.youtubelink]);const w=t=>{const v=document.getElementById(t),f=t==="about-property"?180:80,p=v.offsetTop-f;window.scrollTo({top:p,behavior:"smooth"})};s.exports.useState(!1);const[x,y]=s.exports.useState(!1),P=()=>{y(!x)},$=()=>{x===!0&&y(!1)},n=({title:t,value:v,icon:f,imgSrc:p})=>l("tr",{children:l("td",{children:l("div",{className:"flex gap-x-[10px] items-start border",children:[l("div",{className:"pp",children:[f&&l(h,{icon:f,className:"icon-pic mt-[4px] text-center "},void 0,!1,{fileName:i,lineNumber:302,columnNumber:38},void 0),p&&l("img",{src:p,alt:"",className:"icon-pic mt-[4px]"},void 0,!1,{fileName:i,lineNumber:303,columnNumber:40},void 0)]},void 0,!0,{fileName:i,lineNumber:301,columnNumber:25},void 0)," ",l("tr",{className:"bg-slate-200 border border-gray-300 w-[230px] ",children:[l("td",{className:"px-2 py-2 whitespace-nowrap text-[10px] font-semibold text-slate-800 border-r w-[120px]",children:t},void 0,!1,{fileName:i,lineNumber:305,columnNumber:29},void 0),l("td",{className:"px-2 py-2 whitespace-nowrap text-[10px] text-gray-500 capitalize bg-white w-[170px]",children:v},void 0,!1,{fileName:i,lineNumber:306,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:304,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:300,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:299,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:298,columnNumber:13},void 0);return l(k,{children:[(a||b)&&l(O,{},void 0,!1,{fileName:i,lineNumber:317,columnNumber:43},void 0),N&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:i,lineNumber:318,columnNumber:23},void 0),c&&e&&l("div",{className:"card-bo",children:l(F,{children:[l("div",{children:[l("div",{className:"nav",children:[l("div",{children:l("div",{onClick:()=>w("about-property"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"About Property"},void 0,!1,{fileName:i,lineNumber:325,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:324,columnNumber:33},void 0),l("div",{children:l("div",{onClick:()=>w("owner"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Owner Detail"},void 0,!1,{fileName:i,lineNumber:330,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:329,columnNumber:33},void 0),l("div",{children:l("div",{onClick:()=>w("location"),className:"btn btn inline-flex justify-center btn-outline-dark cursor-pointer",children:"Location"},void 0,!1,{fileName:i,lineNumber:335,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:334,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:323,columnNumber:29},void 0),l("div",{className:"select-none",children:d!=null&&d.length?l(ee,{images:d},void 0,!1,{fileName:i,lineNumber:344,columnNumber:41},void 0):l("div",{className:"flex justify-between gap-x-[15px] p-[10px]",children:l("div",{className:"w-[100%]",children:l("img",{src:q,className:"rounded-[10px] w-[100%] object-cover max-h-[800px]",alt:"Not Available"},void 0,!1,{fileName:i,lineNumber:347,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:346,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:345,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:341,columnNumber:29},void 0),l("div",{className:"flex flex-row-reverse w-[100%] col-span-2",children:[l("button",{className:"btn btn inline-flex justify-center btn-success cursor-pointer mr-[14px] mt-[10px] w-[151px]",onClick:P,children:x?"Hide YouTube Video":" Video"},void 0,!1,{fileName:i,lineNumber:353,columnNumber:33},void 0),l("button",{onClick:()=>openModal(0),className:"btn btn inline-flex justify-center btn-dark cursor-pointer mr-[14px] mt-[10px] w-[151px]",children:"Show all image"},void 0,!1,{fileName:i,lineNumber:360,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:352,columnNumber:29},void 0),l(k,{},void 0,!1)]},void 0,!0,{fileName:i,lineNumber:322,columnNumber:25},void 0),l("div",{className:"py-10 px-4 lg:px-2  flex flex-col lg:flex-row",children:[l("div",{className:"lg:w-[50]",children:[l("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(h,{icon:"heroicons:building-office-2",className:" mt-[4px] h-[45px] w-[45px] "},void 0,!1,{fileName:i,lineNumber:431,columnNumber:37},void 0),l("div",{children:[l("h4",{className:"font-bold",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:433,columnNumber:41},void 0),l(Z,{className:"bg-black-500 text-white",children:"Project name"},void 0,!1,{fileName:i,lineNumber:434,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:432,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:430,columnNumber:33},void 0),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:l("tr",{className:"flex gap-10",children:[l("td",{children:[l(n,{icon:"heroicons:home",title:"Unit number",value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:442,columnNumber:53},void 0),l(n,{icon:"heroicons:building-office",title:"Building Name",value:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:443,columnNumber:53},void 0),l(n,{imgSrc:M,title:"Build Up Area",value:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"},void 0,!1,{fileName:i,lineNumber:444,columnNumber:53},void 0),l(n,{icon:"heroicons:building-office-2",title:"Purchase Value",value:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"},void 0,!1,{fileName:i,lineNumber:445,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:441,columnNumber:49},void 0),l("td",{children:[l(n,{imgSrc:R,alt:"",title:"Usage",value:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"},void 0,!1,{fileName:i,lineNumber:450,columnNumber:53},void 0),l(n,{imgSrc:U,title:"Floor",value:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:451,columnNumber:53},void 0),l(n,{imgSrc:Y,title:"Developer Name",value:e!=null&&e.develpoername?e==null?void 0:e.develpoername:"Not Available"},void 0,!1,{fileName:i,lineNumber:452,columnNumber:53},void 0),l(n,{icon:"heroicons:globe-alt",title:"Community Name",value:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:453,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:449,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:440,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:439,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:438,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:437,columnNumber:33},void 0),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:545,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:544,columnNumber:33},void 0),l("div",{className:"flex gap-x-[15px] items-start p-[16px] ",children:[l(h,{icon:"heroicons:globe-alt",className:" mt-[4px] h-[45px] w-[45px] "},void 0,!1,{fileName:i,lineNumber:548,columnNumber:37},void 0),l("div",{children:l("h4",{className:"font-bold",children:"Amenites"},void 0,!1,{fileName:i,lineNumber:550,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:549,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:547,columnNumber:33},void 0),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("tbody",{children:l("tr",{className:"flex gap-10",children:[l("td",{children:[l(n,{imgSrc:z,title:"Type of kitchen",value:e==null?void 0:e.kitchen},void 0,!1,{fileName:i,lineNumber:558,columnNumber:53},void 0),l(n,{imgSrc:H,title:"Type of balcony",value:e==null?void 0:e.balcony},void 0,!1,{fileName:i,lineNumber:559,columnNumber:53},void 0),l(n,{imgSrc:j,title:"No of bathroom",value:e==null?void 0:e.totalbathroom},void 0,!1,{fileName:i,lineNumber:560,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:557,columnNumber:49},void 0),l("td",{children:[l(n,{imgSrc:J,title:"Parking bay number",value:e==null?void 0:e.parkingbay},void 0,!1,{fileName:i,lineNumber:565,columnNumber:53},void 0),l(n,{imgSrc:j,title:"No of bathroom",value:e==null?void 0:e.totalbathroom},void 0,!1,{fileName:i,lineNumber:566,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:564,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:556,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:555,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:554,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:553,columnNumber:33},void 0),l("div",{id:"about-property",className:"action"},void 0,!1,{fileName:i,lineNumber:573,columnNumber:33},void 0),l("div",{className:"w-[95%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:668,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:667,columnNumber:33},void 0),l("div",{className:"flex gap-x-[15px] items-start p-[16px] ",id:"owner",children:[l("img",{src:g,className:" mt-[4px] h-[45px] w-[45px] "},void 0,!1,{fileName:i,lineNumber:671,columnNumber:37},void 0),l("div",{children:l("h4",{className:"font-bold",children:"Owner Details"},void 0,!1,{fileName:i,lineNumber:673,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:672,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:670,columnNumber:33},void 0),l("div",{className:"overflow-hidden p-2 ",children:l("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:l("td",{className:"flex gap-10",children:[l("tr",{children:[l(n,{imgSrc:g,title:"Owner name",value:e==null?void 0:e.owner_name},void 0,!1,{fileName:i,lineNumber:680,columnNumber:49},void 0),l(n,{imgSrc:K,title:"Owner representative",value:e==null?void 0:e.representative_name},void 0,!1,{fileName:i,lineNumber:681,columnNumber:49},void 0),l(n,{imgSrc:Q,title:"Purchase date",value:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:682,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:679,columnNumber:45},void 0),l("tr",{children:[l(n,{imgSrc:g,title:"No of owner Name title",value:e==null?void 0:e.no_ownernamedeed},void 0,!1,{fileName:i,lineNumber:686,columnNumber:49},void 0),l(n,{imgSrc:W,title:"Title deeds document",value:"4"},void 0,!1,{fileName:i,lineNumber:687,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:685,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:678,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:677,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:676,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:429,columnNumber:29},void 0),l("div",{id:"location",className:"lg:w-[50%] lg:pl-16 mt-6 lg:-mt-[-200px]",children:[l("h3",{className:"py-[16px] mt-[-240px] font-bold",children:"Location"},void 0,!1,{fileName:i,lineNumber:742,columnNumber:33},void 0),e!=null&&e.propertylocation?l("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.593303940039!2d-0.15470444843858283!3d51.53901886611164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae62edd5771%3A0x27f2d823e2be0249!2sPrincess+Rd%2C+London+NW1+8JR%2C+UK!5e0!3m2!1sen!2s!4v1458827996435",width:"450",height:"450",style:{border:0},allowfullscreen:!0},void 0,!1,{fileName:i,lineNumber:755,columnNumber:37},void 0):l("span",{className:"si-distance pl-[38px]",children:"Not available"},void 0,!1,{fileName:i,lineNumber:757,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:741,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:427,columnNumber:25},void 0),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:782,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:781,columnNumber:25},void 0),l("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"headings"},void 0,!1,{fileName:i,lineNumber:785,columnNumber:29},void 0),x&&(e==null?void 0:e.youtubelink)&&m?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px] p-[27px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:m,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:i,lineNumber:790,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:789,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:788,columnNumber:33},void 0):l("span",{className:"si-distance pl-[38px]"},void 0,!1,{fileName:i,lineNumber:804,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:784,columnNumber:25},void 0),l(le,{showVideo:x,handleClose:$,videoLink:e==null?void 0:e.youtubelink,youtubeVideo:m},void 0,!1,{fileName:i,lineNumber:809,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:321,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:320,columnNumber:17},void 0)]},void 0,!0)};export{de as default};
