import{j as a,e as y,T as x,L as w,I as m,r as i,G as B,F as k,bN as V}from"./index.1dc4ee55.js";import{N as Y}from"./not-available.0313044d.js";import{b as $}from"./bathroom.f897a353.js";const O="/assets/single-bed.fc51b9b8.png",U="/assets/angle.8e74cf74.png";var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\PropertyCard.jsx";const z=({title:r,subtitle:t,img:c,extraInfo:d,communityName:h,buildingName:N,totalBedrooms:b,totalBathrooms:f,buildupArea:p,item:s})=>(console.log("0000000",s),a("div",{children:a(y,{title:r,img:c,subtitle:t,imaClass:"rounded-md",noborder:!0,children:[a("div",{className:"text-[12px] mb-4",children:d},void 0,!1,{fileName:o,lineNumber:26,columnNumber:17},void 0),a("div",{className:"text-[12px] mb-6",children:h},void 0,!1,{fileName:o,lineNumber:27,columnNumber:17},void 0),a("div",{className:"text-[12px] mb-4",children:N},void 0,!1,{fileName:o,lineNumber:28,columnNumber:17},void 0),a("div",{className:"mt-4 space-x-4 flex gap-7",children:[a("div",{children:[a("img",{src:O,alt:"",className:"icon-pic"},void 0,!1,{fileName:o,lineNumber:32,columnNumber:25},void 0),a("span",{className:"si-distance text-[12px] items-center",children:b!=="Not Available"&&b},void 0,!1,{fileName:o,lineNumber:33,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:31,columnNumber:21},void 0),a("div",{children:[a("img",{src:$,alt:"",className:"icon-pic"},void 0,!1,{fileName:o,lineNumber:36,columnNumber:25},void 0),a("span",{className:"si-distance text-[12px] items-center",children:f!=="Not Available"&&f},void 0,!1,{fileName:o,lineNumber:37,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:35,columnNumber:21},void 0),a("div",{children:[a("img",{src:U,alt:"",className:"icon-pic"},void 0,!1,{fileName:o,lineNumber:40,columnNumber:25},void 0),a("span",{className:"si-distance text-[12px] items-center",children:p!=="Not Available"&&p},void 0,!1,{fileName:o,lineNumber:41,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:39,columnNumber:21},void 0)]},void 0,!0,{fileName:o,lineNumber:29,columnNumber:17},void 0),a("div",{className:"flex gap-3 p-[10px]",children:a("div",{className:"btn-all justify-start flex-wrap property-tooltip",children:[a(x,{content:"Property view",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:a(w,{className:"btn-prime-listing text-success-500 bg-success-500 bg-opacity-25",type:"button",to:`/owner-property/${s==null?void 0:s._id}`,children:a(m,{icon:"heroicons:home-modern",className:"h-[25px] w-[50px]"},void 0,!1,{fileName:o,lineNumber:47,columnNumber:197},void 0)},void 0,!1,{fileName:o,lineNumber:47,columnNumber:65},void 0)},void 0,!1,{fileName:o,lineNumber:46,columnNumber:61},void 0),s!=null&&s.tenant_id?a(x,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:a(w,{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",type:"button",to:`/property-tenant-contracts?propertyid=${s==null?void 0:s.tenant_id}`,children:[a(m,{icon:"heroicons:user-group",className:"h-[25px] w-[50px]"},void 0,!1,{fileName:o,lineNumber:53,columnNumber:227},void 0)," "]},void 0,!0,{fileName:o,lineNumber:53,columnNumber:73},void 0)},void 0,!1,{fileName:o,lineNumber:52,columnNumber:69},void 0):a(x,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:a("p",{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",children:a(m,{icon:"heroicons:user-group",className:"h-[25px] w-[50px]"},void 0,!1,{fileName:o,lineNumber:56,columnNumber:146},void 0)},void 0,!1,{fileName:o,lineNumber:56,columnNumber:73},void 0)},void 0,!1,{fileName:o,lineNumber:55,columnNumber:69},void 0),s!=null&&s.management_id?a(x,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:a(w,{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",type:"button",to:`/owner-managemnt-term/${s==null?void 0:s.management_id}`,children:a(m,{icon:"heroicons:eye",className:"h-[25px] w-[50px]"},void 0,!1,{fileName:o,lineNumber:63,columnNumber:221},void 0)},void 0,!1,{fileName:o,lineNumber:63,columnNumber:73},void 0)},void 0,!1,{fileName:o,lineNumber:62,columnNumber:69},void 0):a(x,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:a("p",{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",children:a(m,{icon:"heroicons:pencil-square",className:"h-[25px] w-[50px]"},void 0,!1,{fileName:o,lineNumber:66,columnNumber:152},void 0)},void 0,!1,{fileName:o,lineNumber:66,columnNumber:73},void 0)},void 0,!1,{fileName:o,lineNumber:65,columnNumber:69},void 0)]},void 0,!0,{fileName:o,lineNumber:45,columnNumber:15},void 0)},void 0,!1,{fileName:o,lineNumber:44,columnNumber:13},void 0)]},void 0,!0,{fileName:o,lineNumber:18,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:17,columnNumber:9},void 0));var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\NewListtingDes.jsx";function G({propertyimages:r}){const t=r.slice(0,5),[c,d]=i.exports.useState(0),h=()=>{d((c+1)%t.length)},N=()=>{d((c-1+t.length)%t.length)},b=c+1,f=t.length;return a(k,{children:[t.map((p,s)=>a("img",{src:"http://dev-rare.srp.ai"+p,alt:`Image ${s+1}`,className:`${s===c?"active display-kr":"display-none"} object-cover`},s,!1,{fileName:l,lineNumber:34,columnNumber:17},this)),a("div",{className:"w-[100%] h-[100%] absolute tags-buttons",children:[a("button",{className:"carousel-button",onClick:N,children:a(m,{icon:"heroicons:chevron-left"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:73},this)},void 0,!1,{fileName:l,lineNumber:42,columnNumber:17},this),a("button",{className:"carousel-button right-0",onClick:h,children:a(m,{icon:"heroicons:chevron-right"},void 0,!1,{fileName:l,lineNumber:43,columnNumber:81},this)},void 0,!1,{fileName:l,lineNumber:43,columnNumber:17},this)]},void 0,!0,{fileName:l,lineNumber:41,columnNumber:13},this),a("div",{className:"absolute bottom-[10px] left-[10px] indent-2 to-black-500 tags-buttons not-show",children:a("span",{className:"AspLe",children:[a("div",{className:"famNGO",children:a("div",{className:"iDsdYa"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:25},this)},void 0,!1,{fileName:l,lineNumber:47,columnNumber:21},this),a("span",{children:[b," / ",f]},void 0,!0,{fileName:l,lineNumber:50,columnNumber:21},this)]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:17},this)},void 0,!1,{fileName:l,lineNumber:45,columnNumber:13},this)]},void 0,!0)}const H=()=>{const[r,t]=i.exports.useState([]),c=localStorage.getItem("isAuth"),d=JSON.parse(c),[h,N]=i.exports.useState(!1);i.exports.useEffect(()=>{N(!0),(async()=>{const v=await(await fetch(`http://dev-rare.srp.ai/property/api/app/search/${d==null?void 0:d.email}`)).json();t(v),N(!1)})()},[]);const[b,f]=i.exports.useState(0),[p,s]=i.exports.useState(0),[E,_]=i.exports.useState(0),[L,j]=i.exports.useState(0),[C,I]=i.exports.useState(0);i.exports.useEffect(()=>{var e,g;if(r!=null&&r.length){const v=r.reduce((n,u)=>u.propertystatus==="Short Term"?n+1:n,0);_(v);const X=r.reduce((n,u)=>u.propertystatus==="Sale"?n+1:n,0);s(X);const R=r.reduce((n,u)=>u.propertystatus==="Rent"?n+1:n,0);f(R);let D=0;for(let n=0;n<(r==null?void 0:r.length);n++){let u=parseFloat((e=r[n])!=null&&e.propertyvaluation?(g=r[n])==null?void 0:g.propertyvaluation:0);D+=u}I(D);const P=r.reduce((n,u)=>u.tenant_id?n+1:n,0);j(P)}},[r]);const F={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},S={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},A={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},T=[{name:F,title:"Total no of Properties",count:r?r==null?void 0:r.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:S,title:"Property For Rent",count:b,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:A,title:"Property For Sale",count:p,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:F,title:"Property For Short Term",count:E,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:S,title:"Vacant Property",count:L,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:A,title:"Total Property Revenue",count:parseFloat(C).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return a("div",{className:"xl:col-span-2 col-span-1",children:h===!1?a(y,{title:"All Properties",className:"card-body",children:[a("div",{className:"grid grid-cols-12 gap-5 mb-5",children:a("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:a(y,{bodyClass:"p-4",children:a("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:a(B,{statistics:T},void 0,!1,{fileName:l,lineNumber:481,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:480,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:479,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:478,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:477,columnNumber:25},void 0),r!=null&&r.length?a("div",{className:"flex justify-between flex-wrap",children:r==null?void 0:r.map((e,g)=>{var v;return a("div",{className:"search-item show-tags-buttons",children:[a("div",{className:"carousel md:h-[100%] lg:w-[50%] relative",children:((v=e==null?void 0:e.propertyimages)==null?void 0:v.length)&&(e==null?void 0:e.propertyimages[0])!==""?a(k,{children:a(G,{propertyimages:e.propertyimages},void 0,!1,{fileName:l,lineNumber:497,columnNumber:69},void 0)},void 0,!1):a("img",{src:Y,alt:"NotAvailable",className:"active display-kr object-cover"},void 0,!1,{fileName:l,lineNumber:499,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:493,columnNumber:53},void 0),a(z,{title:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Available",subtitle:e!=null&&e.propertyvaluation?"Purchase Value: "+parseFloat(e==null?void 0:e.propertyvaluation.replace(/,/g,"")).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Purchase Value: Not Available",extraInfo:e!=null&&e.unitnumber?a("span",{children:[a("strong",{children:"Unit No:"},void 0,!1,{fileName:l,lineNumber:512,columnNumber:101},void 0)," ",e.unitnumber]},void 0,!0,{fileName:l,lineNumber:512,columnNumber:95},void 0):"Unit No: Not Available",communityName:e!=null&&e.community_name?a("span",{children:[a("strong",{children:"Community Name:"},void 0,!1,{fileName:l,lineNumber:515,columnNumber:79},void 0)," ",e.community_name]},void 0,!0,{fileName:l,lineNumber:515,columnNumber:73},void 0):a("span",{children:[a("strong",{children:"Community Name:"},void 0,!1,{fileName:l,lineNumber:516,columnNumber:79},void 0)," Not Available"]},void 0,!0,{fileName:l,lineNumber:516,columnNumber:73},void 0),buildingName:e!=null&&e.building_name?a("span",{children:[a("strong",{children:"Building Name:"},void 0,!1,{fileName:l,lineNumber:520,columnNumber:79},void 0)," ",e.building_name]},void 0,!0,{fileName:l,lineNumber:520,columnNumber:73},void 0):a("span",{children:[a("strong",{children:"Building Name:"},void 0,!1,{fileName:l,lineNumber:521,columnNumber:79},void 0)," Not Available"]},void 0,!0,{fileName:l,lineNumber:521,columnNumber:73},void 0),totalBedrooms:(e==null?void 0:e.totalbedroom)!==void 0&&(e==null?void 0:e.totalbedroom)!=="undefined"&&(e==null?void 0:e.totalbedroom)!==null&&(e==null?void 0:e.totalbedroom)!==""?e==null?void 0:e.totalbedroom:"Not Available",totalBathrooms:(e==null?void 0:e.nobathroom)&&(e==null?void 0:e.nobathroom)!=="undefined"&&(e==null?void 0:e.nobathroom)!==null&&(e==null?void 0:e.nobathroom)!==""?e==null?void 0:e.nobathroom:"Not Available",buildupArea:(e==null?void 0:e.builduparea)&&(e==null?void 0:e.builduparea)!=="undefined"&&(e==null?void 0:e.builduparea)!==null&&(e==null?void 0:e.builduparea)!==""?(e==null?void 0:e.builduparea)+" "+((e==null?void 0:e.builduparea)&&(e==null?void 0:e.measure_units)?e==null?void 0:e.measure_units:""):"Not Available",item:e},void 0,!1,{fileName:l,lineNumber:506,columnNumber:53},void 0),a("div",{},void 0,!1,{fileName:l,lineNumber:532,columnNumber:53},void 0)]},g+1,!0,{fileName:l,lineNumber:492,columnNumber:49},void 0)})},void 0,!1,{fileName:l,lineNumber:488,columnNumber:33},void 0):"No Property Found"]},void 0,!0,{fileName:l,lineNumber:476,columnNumber:21},void 0):a(V,{},void 0,!1,{fileName:l,lineNumber:574,columnNumber:31},void 0)},void 0,!1,{fileName:l,lineNumber:473,columnNumber:9},void 0)};export{H as default};
