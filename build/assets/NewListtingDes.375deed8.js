import{j as e,c as n,f as v,T as w,L as y,I as i,r as t,G as R,F as k,bN as Y}from"./index.bbe51ac5.js";import{N as P}from"./not-available.0313044d.js";import{b as $}from"./bathroom.f897a353.js";const V="/assets/single-bed.fc51b9b8.png",z="/assets/angle.8e74cf74.png",G=({title:s,subtitle:l,img:p,extraInfo:d,communityName:x,buildingName:h,totalBedrooms:u,totalBathrooms:g,buildupArea:b,item:o})=>(console.log("0000000",o),e("div",{children:n(v,{title:s,img:p,subtitle:l,imaClass:"rounded-md",noborder:!0,children:[e("div",{className:"text-[12px] mb-4",children:d}),e("div",{className:"text-[12px] mb-6",children:x}),e("div",{className:"text-[12px] mb-4",children:h}),n("div",{className:"mt-4 space-x-4 flex gap-7",children:[n("div",{children:[e("img",{src:V,alt:"",className:"icon-pic"}),e("span",{className:"si-distance text-[12px] items-center",children:u!=="Not Available"&&u})]}),n("div",{children:[e("img",{src:$,alt:"",className:"icon-pic"}),e("span",{className:"si-distance text-[12px] items-center",children:g!=="Not Available"&&g})]}),n("div",{children:[e("img",{src:z,alt:"",className:"icon-pic"}),e("span",{className:"si-distance text-[12px] items-center",children:b!=="Not Available"&&b})]})]}),e("div",{className:"flex gap-3 p-[10px]",children:n("div",{className:"btn-all justify-start flex-wrap property-tooltip",children:[e(w,{content:"Property view",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e(y,{className:"btn-prime-listing text-success-500 bg-success-500 bg-opacity-25",type:"button",to:`/owner-property/${o==null?void 0:o._id}`,children:e(i,{icon:"heroicons:home-modern",className:"h-[25px] w-[50px]"})})}),o!=null&&o.tenant_id?e(w,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:n(y,{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",type:"button",to:`/property-tenant-contracts?propertyid=${o==null?void 0:o.tenant_id}`,children:[e(i,{icon:"heroicons:user-group",className:"h-[25px] w-[50px]"})," "]})}):e(w,{content:"Tenancy Details",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e("p",{className:"btn-prime-listing bg-info-500 text-info-500 bg-opacity-25",children:e(i,{icon:"heroicons:user-group",className:"h-[25px] w-[50px]"})})}),o!=null&&o.management_id?e(w,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e(y,{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",type:"button",to:`/owner-managemnt-term/${o==null?void 0:o.management_id}`,children:e(i,{icon:"heroicons:eye",className:"h-[25px] w-[50px]"})})}):e(w,{content:"Management Detail",placement:"top",arrow:!0,animation:"shift-away",className:"w-[100px]",children:e("p",{className:"btn-prime-listing bg-primary-500 text-primary-500 bg-opacity-25",children:e(i,{icon:"heroicons:pencil-square",className:"h-[25px] w-[50px]"})})})]})})]})}));function U({propertyimages:s}){const l=s.slice(0,5),[p,d]=t.exports.useState(0),x=()=>{d((p+1)%l.length)},h=()=>{d((p-1+l.length)%l.length)},u=p+1,g=l.length;return n(k,{children:[l.map((b,o)=>e("img",{src:"http://portals.rarehomesgroup.com"+b,alt:`Image ${o+1}`,className:`${o===p?"active display-kr":"display-none"} object-cover`},o)),n("div",{className:"w-[100%] h-[100%] absolute tags-buttons",children:[e("button",{className:"carousel-button",onClick:h,children:e(i,{icon:"heroicons:chevron-left"})}),e("button",{className:"carousel-button right-0",onClick:x,children:e(i,{icon:"heroicons:chevron-right"})})]}),e("div",{className:"absolute bottom-[10px] left-[10px] indent-2 to-black-500 tags-buttons not-show",children:n("span",{className:"AspLe",children:[e("div",{className:"famNGO",children:e("div",{className:"iDsdYa"})}),n("span",{children:[u," / ",g]})]})})]})}const J=()=>{const[s,l]=t.exports.useState([]),p=localStorage.getItem("isAuth"),d=JSON.parse(p),[x,h]=t.exports.useState(!1);t.exports.useEffect(()=>{h(!0),(async()=>{const f=await(await fetch(`http://portals.rarehomesgroup.com/property/api/app/search/${d==null?void 0:d.email}`)).json();l(f),h(!1)})()},[]);const[u,g]=t.exports.useState(0),[b,o]=t.exports.useState(0),[D,E]=t.exports.useState(0),[I,L]=t.exports.useState(0),[_,T]=t.exports.useState(0);t.exports.useEffect(()=>{var a,N;if(s!=null&&s.length){const f=s.reduce((r,c)=>c.propertystatus==="Short Term"?r+1:r,0);E(f);const X=s.reduce((r,c)=>c.propertystatus==="Sale"?r+1:r,0);o(X);const j=s.reduce((r,c)=>c.propertystatus==="Rent"?r+1:r,0);g(j);let A=0;for(let r=0;r<(s==null?void 0:s.length);r++){let c=parseFloat((a=s[r])!=null&&a.propertyvaluation?(N=s[r])==null?void 0:N.propertyvaluation:0);A+=c}T(A);const B=s.reduce((r,c)=>c.tenant_id?r+1:r,0);L(B)}},[s]);const F={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},m={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},S={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},C=[{name:F,title:"Total no of Properties",count:s?s==null?void 0:s.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:m,title:"Property For Rent",count:u,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:S,title:"Property For Sale",count:b,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:F,title:"Property For Short Term",count:D,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:m,title:"Vacant Property",count:I,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:S,title:"Total Property Revenue",count:parseFloat(_).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return e("div",{className:"xl:col-span-2 col-span-1",children:x===!1?n(v,{title:"All Properties",className:"card-body",children:[e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(v,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(R,{statistics:C})})})})}),s!=null&&s.length?e("div",{className:"flex justify-between flex-wrap",children:s==null?void 0:s.map((a,N)=>{var f;return n("div",{className:"search-item show-tags-buttons",children:[e("div",{className:"carousel md:h-[100%] lg:w-[50%] relative",children:((f=a==null?void 0:a.propertyimages)==null?void 0:f.length)&&(a==null?void 0:a.propertyimages[0])!==""?e(k,{children:e(U,{propertyimages:a.propertyimages})}):e("img",{src:P,alt:"NotAvailable",className:"active display-kr object-cover"})}),e(G,{title:a!=null&&a.project_name?a==null?void 0:a.project_name:"Not Available",subtitle:a!=null&&a.propertyvaluation?"Purchase Value: "+parseFloat(a==null?void 0:a.propertyvaluation.replace(/,/g,"")).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Purchase Value: Not Available",extraInfo:a!=null&&a.unitnumber?n("span",{children:[e("strong",{children:"Unit No:"})," ",a.unitnumber]}):"Unit No: Not Available",communityName:a!=null&&a.community_name?n("span",{children:[e("strong",{children:"Community Name:"})," ",a.community_name]}):n("span",{children:[e("strong",{children:"Community Name:"})," Not Available"]}),buildingName:a!=null&&a.building_name?n("span",{children:[e("strong",{children:"Building Name:"})," ",a.building_name]}):n("span",{children:[e("strong",{children:"Building Name:"})," Not Available"]}),totalBedrooms:(a==null?void 0:a.totalbedroom)!==void 0&&(a==null?void 0:a.totalbedroom)!=="undefined"&&(a==null?void 0:a.totalbedroom)!==null&&(a==null?void 0:a.totalbedroom)!==""?a==null?void 0:a.totalbedroom:"Not Available",totalBathrooms:(a==null?void 0:a.nobathroom)&&(a==null?void 0:a.nobathroom)!=="undefined"&&(a==null?void 0:a.nobathroom)!==null&&(a==null?void 0:a.nobathroom)!==""?a==null?void 0:a.nobathroom:"Not Available",buildupArea:(a==null?void 0:a.builduparea)&&(a==null?void 0:a.builduparea)!=="undefined"&&(a==null?void 0:a.builduparea)!==null&&(a==null?void 0:a.builduparea)!==""?(a==null?void 0:a.builduparea)+" "+((a==null?void 0:a.builduparea)&&(a==null?void 0:a.measure_units)?a==null?void 0:a.measure_units:""):"Not Available",item:a}),e("div",{})]},N+1)})}):"No Property Found"]}):e(Y,{})})};export{J as default};
