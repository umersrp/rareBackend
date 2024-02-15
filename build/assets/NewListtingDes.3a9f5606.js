import{r as l,j as e,c as o,C as k,G as B,F as v,I as n,T as g,L as y,bN as Y}from"./index.b447658d.js";import{b as O}from"./bathroom.f897a353.js";import{N as $}from"./not-available.0313044d.js";const U="/assets/single-bed.fc51b9b8.png",M="/assets/angle.8e74cf74.png";function z({propertyimages:s}){const c=s.slice(0,5),[p,d]=l.exports.useState(0),b=()=>{d((p+1)%c.length)},f=()=>{d((p-1+c.length)%c.length)},x=p+1,N=c.length;return o(v,{children:[c.map((w,h)=>e("img",{src:"http://dev-rare.srp.ai"+w,alt:`Image ${h+1}`,className:`${h===p?"active display-kr":"display-none"} object-cover`},h)),o("div",{className:"w-[100%] h-[100%] absolute tags-buttons",children:[e("button",{className:"carousel-button",onClick:f,children:e(n,{icon:"heroicons:chevron-left"})}),e("button",{className:"carousel-button right-0",onClick:b,children:e(n,{icon:"heroicons:chevron-right"})})]}),e("div",{className:"absolute bottom-[10px] left-[10px] indent-2 to-black-500 tags-buttons not-show",children:o("span",{className:"AspLe",children:[e("div",{className:"famNGO",children:e("div",{className:"iDsdYa"})}),o("span",{children:[x," / ",N]})]})})]})}const q=()=>{const[s,c]=l.exports.useState([]),p=localStorage.getItem("isAuth"),d=JSON.parse(p),[b,f]=l.exports.useState(!1);l.exports.useEffect(()=>{f(!0),(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/property/api/app/search/${d==null?void 0:d.email}`)).json();c(i),f(!1)})()},[]);const[x,N]=l.exports.useState(0),[w,h]=l.exports.useState(0),[D,E]=l.exports.useState(0),[T,L]=l.exports.useState(0),[_,I]=l.exports.useState(0);l.exports.useEffect(()=>{var a,u;if(s!=null&&s.length){const i=s.reduce((t,r)=>r.propertystatus==="Short Term"?t+1:t,0);E(i);const j=s.reduce((t,r)=>r.propertystatus==="Sale"?t+1:t,0);h(j);const C=s.reduce((t,r)=>r.propertystatus==="Rent"?t+1:t,0);N(C);let A=0;for(let t=0;t<(s==null?void 0:s.length);t++){let r=parseFloat((a=s[t])!=null&&a.propertyvaluation?(u=s[t])==null?void 0:u.propertyvaluation:0);A+=r}I(A);const R=s.reduce((t,r)=>r.tenant_id?t+1:t,0);L(R)}},[s]);const F={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},m={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},S={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},X=[{name:F,title:"Total no of Properties",count:s?s==null?void 0:s.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:m,title:"Property For Rent",count:x,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:S,title:"Property For Sale",count:w,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:F,title:"Property For Short Term",count:D,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:m,title:"Vacant Property",count:T,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:S,title:"Total Property Revenue",count:parseFloat(_).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return e("div",{className:"xl:col-span-2 col-span-1",children:b===!1?o(k,{title:"All Properties",className:"card-body",children:[e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(k,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(B,{statistics:X})})})})}),s!=null&&s.length?e("div",{className:"flex justify-between flex-wrap",children:s==null?void 0:s.map((a,u)=>{var i;return o("div",{className:"search-item show-tags-buttons",children:[e("div",{className:"carousel md:h-[100%] lg:w-[50%] relative",children:((i=a==null?void 0:a.propertyimages)==null?void 0:i.length)&&(a==null?void 0:a.propertyimages[0])!==""?e(v,{children:e(z,{propertyimages:a.propertyimages})}):e("img",{src:$,alt:"NotAvailable",className:"active display-kr object-cover"})}),o("div",{className:"si-desc justify-between md:h-[100%] lg:w-[50%]",children:[o("div",{className:"flex flex-col gap-y-[13px]",children:[o("div",{className:"flex items-center gap-x-[10px] ml-[-3px]",children:[e(n,{icon:"heroicons:building-office-2",className:"w-[35px] h-[35px]"}),e("h1",{className:"si-tittle text-start mt-[3px]",children:a!=null&&a.project_name?a==null?void 0:a.project_name:"Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px] mt-[10px]",children:[e(n,{icon:"heroicons:banknotes",className:"w-[20px] h-[20px]"}),e("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.propertyvaluation?"RENT / SOLD AMOUNT: "+parseFloat(a==null?void 0:a.propertyvaluation.replace(/,/g,"")).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"RENT / SOLD AMOUNT: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[e(n,{icon:"heroicons:home",className:"w-[20px] h-[20px]"}),e("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.unitnumber?"Unit No: "+(a==null?void 0:a.unitnumber):"Unit No: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[e(n,{icon:"heroicons:globe-alt",className:"w-[20px] h-[20px]"}),e("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.community_name?"Community Name: "+(a==null?void 0:a.community_name):"Community Name: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[e(n,{icon:"heroicons:building-office",className:"w-[20px] h-[20px]"}),e("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.building_name?"Building Name: "+(a==null?void 0:a.building_name):"Building Name: Not Available"})]}),o("div",{className:"flex items-center gap-x-[15px] mt-[15px]",children:[o("span",{className:"si-distance text-[16px] items-center ",children:[e("img",{src:U,alt:"",className:"icon-pic"}),(a==null?void 0:a.totalbedroom)!==void 0&&(a==null?void 0:a.totalbedroom)!=="undefined"&&(a==null?void 0:a.totalbedroom)!==null&&(a==null?void 0:a.totalbedroom)!==""?a==null?void 0:a.totalbedroom:"Not Available"]}),o("span",{className:"si-distance  text-[16px] items-center",children:[" ",e("img",{src:O,alt:"",className:"icon-pic"}),(a==null?void 0:a.nobathroom)&&(a==null?void 0:a.nobathroom)!=="undefined"&&(a==null?void 0:a.nobathroom)!==null&&(a==null?void 0:a.nobathroom)!==""?a==null?void 0:a.nobathroom:"Not Available"]}),o("span",{className:"si-distance  text-[16px] items-center",children:[e("img",{src:M,alt:"",className:"icon-pic"}),(a==null?void 0:a.builduparea)&&(a==null?void 0:a.builduparea)!=="undefined"&&(a==null?void 0:a.builduparea)!==null&&(a==null?void 0:a.builduparea)!==""?(a==null?void 0:a.builduparea)+" "+((a==null?void 0:a.builduparea)&&(a==null?void 0:a.measure_units)?a==null?void 0:a.measure_units:""):"Not Available"]})]}),e(v,{})]}),o("div",{className:"btn-all justify-start flex-wrap property-tooltip",children:[e(g,{content:"Property view",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e(y,{className:"btn-prime-listing text-success-500 bg-success-500 bg-opacity-25",type:"button",to:`/owner-property/${a==null?void 0:a._id}`,children:e(n,{icon:"heroicons:home-modern",className:"h-[28px] w-[70px]"})})}),a!=null&&a.tenant_id?e(g,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:o(y,{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",type:"button",to:`/property-tenant-contracts?propertyid=${a==null?void 0:a._id}`,children:[e(n,{icon:"heroicons:user-group",className:"h-[28px] w-[70px]"})," "]})}):e(g,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e("p",{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",children:e(n,{icon:"heroicons:user-group",className:"h-[28px] w-[70px]"})})}),a!=null&&a.management_id?e(g,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e(y,{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",type:"button",to:`/owner-managemnt-term/${a==null?void 0:a.management_id}`,children:e(n,{icon:"heroicons:eye",className:"h-[28px] w-[70px]"})})}):e(g,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e("p",{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",children:e(n,{icon:"heroicons:pencil-square",className:"h-[28px] w-[70px]"})})})]})]})]},u+1)})}):"No Property Found"]}):e(Y,{})})};export{q as default};
