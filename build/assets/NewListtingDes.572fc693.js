import{j as s,C as v,r,c as o,G as O,F,I as l,T as w,L as y,bN as U}from"./index.821ab456.js";import{b as B}from"./bathroom.f897a353.js";import{N as Y}from"./not-available.0313044d.js";const M="/assets/single-bed.fc51b9b8.png",$="/assets/angle.8e74cf74.png",P=({title:e,subtitle:t,img:p,project_name:d,unitno:g,community_name:i,building_name:f,totalbedroom:b,builduparea:x,nobathroom:h})=>s("div",{children:s(v,{title:e,img:p,subtitle:t,project_name:d,unitno:g,community_name:i,building_name:f,totalbedroom:b,nobathroom:h,builduparea:x,imaClass:"rounded-md",noborder:!0,children:s("div",{class:"mt-4 space-x-4"})})});function z({propertyimages:e}){const t=e.slice(0,5),[p,d]=r.exports.useState(0),g=()=>{d((p+1)%t.length)},i=()=>{d((p-1+t.length)%t.length)},f=p+1,b=t.length;return o(F,{children:[t.map((x,h)=>s("img",{src:"http://portals.rarehomesgroup.com"+x,alt:`Image ${h+1}`,className:`${h===p?"active display-kr":"display-none"} object-cover`},h)),o("div",{className:"w-[100%] h-[100%] absolute tags-buttons",children:[s("button",{className:"carousel-button",onClick:i,children:s(l,{icon:"heroicons:chevron-left"})}),s("button",{className:"carousel-button right-0",onClick:g,children:s(l,{icon:"heroicons:chevron-right"})})]}),s("div",{className:"absolute bottom-[10px] left-[10px] indent-2 to-black-500 tags-buttons not-show",children:o("span",{className:"AspLe",children:[s("div",{className:"famNGO",children:s("div",{className:"iDsdYa"})}),o("span",{children:[f," / ",b]})]})})]})}const J=()=>{const[e,t]=r.exports.useState([]),p=localStorage.getItem("isAuth"),d=JSON.parse(p),[g,i]=r.exports.useState(!1);r.exports.useEffect(()=>{i(!0),(async()=>{const u=await(await fetch(`http://portals.rarehomesgroup.com/property/api/app/search/${d==null?void 0:d.email}`)).json();t(u),i(!1)})()},[]);const[f,b]=r.exports.useState(0),[x,h]=r.exports.useState(0),[E,k]=r.exports.useState(0),[L,_]=r.exports.useState(0),[j,C]=r.exports.useState(0);r.exports.useEffect(()=>{var a,N;if(e!=null&&e.length){const u=e.reduce((n,c)=>c.propertystatus==="Short Term"?n+1:n,0);k(u);const m=e.reduce((n,c)=>c.propertystatus==="Sale"?n+1:n,0);h(m);const R=e.reduce((n,c)=>c.propertystatus==="Rent"?n+1:n,0);b(R);let T=0;for(let n=0;n<(e==null?void 0:e.length);n++){let c=parseFloat((a=e[n])!=null&&a.propertyvaluation?(N=e[n])==null?void 0:N.propertyvaluation:0);T+=c}C(T);const X=e.reduce((n,c)=>c.tenant_id?n+1:n,0);_(X)}},[e]);const S={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},A={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},D={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},I=[{name:S,title:"Total no of Properties",count:e?e==null?void 0:e.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:A,title:"Property For Rent",count:f,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:D,title:"Property For Sale",count:x,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:S,title:"Property For Short Term",count:E,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:A,title:"Vacant Property",count:L,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:D,title:"Total Property Revenue",count:parseFloat(j).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return s("div",{className:"xl:col-span-2 col-span-1",children:g===!1?o(v,{title:"All Properties",className:"card-body",children:[s("div",{className:"grid grid-cols-12 gap-5 mb-5",children:s("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:s(v,{bodyClass:"p-4",children:s("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:s(O,{statistics:I})})})})}),e!=null&&e.length?s("div",{className:"flex justify-between flex-wrap",children:e==null?void 0:e.map((a,N)=>{var u;return o("div",{className:"search-item show-tags-buttons",children:[s("div",{className:"carousel md:h-[100%] lg:w-[50%] relative",children:((u=a==null?void 0:a.propertyimages)==null?void 0:u.length)&&(a==null?void 0:a.propertyimages[0])!==""?s(F,{children:s(z,{propertyimages:a.propertyimages})}):s("img",{src:Y,alt:"NotAvailable",className:"active display-kr object-cover"})}),s(P,{title:a!=null&&a.project_name?a==null?void 0:a.project_name:"Not Available",subtitle:a!=null&&a.propertyvaluation?"RENT / SOLD AMOUNT: "+parseFloat(a==null?void 0:a.propertyvaluation.replace(/,/g,"")).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"RENT / SOLD AMOUNT: Not Available",project_name:a!=null&&a.project_name?a==null?void 0:a.project_name:"Not Available",unitno:a!=null&&a.unitnumber?"Unit No: "+(a==null?void 0:a.unitnumber):"Unit No: Not Available",children:o("div",{className:"si-desc justify-between md:h-[100%] lg:w-[50%]",children:[o("div",{className:"flex flex-col gap-y-[13px]",children:[o("div",{className:"flex items-center gap-x-[10px] ml-[-3px]",children:[s(l,{icon:"heroicons:building-office-2",className:"w-[35px] h-[35px]"}),s("h1",{className:"si-tittle text-start mt-[3px]",children:a!=null&&a.project_name?a==null?void 0:a.project_name:"Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px] mt-[10px]",children:[s(l,{icon:"heroicons:banknotes",className:"w-[20px] h-[20px]"}),s("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.propertyvaluation?"RENT / SOLD AMOUNT: "+parseFloat(a==null?void 0:a.propertyvaluation.replace(/,/g,"")).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"RENT / SOLD AMOUNT: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[s(l,{icon:"heroicons:home",className:"w-[20px] h-[20px]"}),s("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.unitnumber?"Unit No: "+(a==null?void 0:a.unitnumber):"Unit No: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[s(l,{icon:"heroicons:globe-alt",className:"w-[20px] h-[20px]"}),s("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.community_name?"Community Name: "+(a==null?void 0:a.community_name):"Community Name: Not Available"})]}),o("div",{className:"flex items-center gap-x-[10px]",children:[s(l,{icon:"heroicons:building-office",className:"w-[20px] h-[20px]"}),s("h6",{className:"text-start mt-[3px] text-[14px]",children:a!=null&&a.building_name?"Building Name: "+(a==null?void 0:a.building_name):"Building Name: Not Available"})]}),o("div",{className:"flex items-center gap-x-[15px] mt-[15px]",children:[o("span",{className:"si-distance text-[16px] items-center ",children:[s("img",{src:M,alt:"",className:"icon-pic"}),(a==null?void 0:a.totalbedroom)!==void 0&&(a==null?void 0:a.totalbedroom)!=="undefined"&&(a==null?void 0:a.totalbedroom)!==null&&(a==null?void 0:a.totalbedroom)!==""?a==null?void 0:a.totalbedroom:"Not Available"]}),o("span",{className:"si-distance  text-[16px] items-center",children:[" ",s("img",{src:B,alt:"",className:"icon-pic"}),(a==null?void 0:a.nobathroom)&&(a==null?void 0:a.nobathroom)!=="undefined"&&(a==null?void 0:a.nobathroom)!==null&&(a==null?void 0:a.nobathroom)!==""?a==null?void 0:a.nobathroom:"Not Available"]}),o("span",{className:"si-distance  text-[16px] items-center",children:[s("img",{src:$,alt:"",className:"icon-pic"}),(a==null?void 0:a.builduparea)&&(a==null?void 0:a.builduparea)!=="undefined"&&(a==null?void 0:a.builduparea)!==null&&(a==null?void 0:a.builduparea)!==""?(a==null?void 0:a.builduparea)+" "+((a==null?void 0:a.builduparea)&&(a==null?void 0:a.measure_units)?a==null?void 0:a.measure_units:""):"Not Available"]})]}),s(F,{})]}),o("div",{className:"btn-all justify-start flex-wrap property-tooltip",children:[s(w,{content:"Property view",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:s(y,{className:"btn-prime-listing text-success-500 bg-success-500 bg-opacity-25",type:"button",to:`/owner-property/${a==null?void 0:a._id}`,children:s(l,{icon:"heroicons:home-modern",className:"h-[28px] w-[70px]"})})}),a!=null&&a.tenant_id?s(w,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:o(y,{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",type:"button",to:`/property-tenant-contracts?propertyid=${a==null?void 0:a._id}`,children:[s(l,{icon:"heroicons:user-group",className:"h-[28px] w-[70px]"})," "]})}):s(w,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:s("p",{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",children:s(l,{icon:"heroicons:user-group",className:"h-[28px] w-[70px]"})})}),a!=null&&a.management_id?s(w,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:s(y,{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",type:"button",to:`/owner-managemnt-term/${a==null?void 0:a.management_id}`,children:s(l,{icon:"heroicons:eye",className:"h-[28px] w-[70px]"})})}):s(w,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:s("p",{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",children:s(l,{icon:"heroicons:pencil-square",className:"h-[28px] w-[70px]"})})})]})]})})]},N+1)})}):"No Property Found"]}):s(U,{})})};export{J as default};
