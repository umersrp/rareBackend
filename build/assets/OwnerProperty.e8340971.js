import{bu as j,b_ as _,r as f,c,F as n,j as e,bN as $,C,L as T,I as b,b$ as I}from"./index.3f28faea.js";import{P as S}from"./pdf-icon.2fc2c516.js";const O=({data:i,label:l})=>{const[p,d]=f.exports.useState(!1),a=(s,m)=>{I.exports.saveAs(s,m)},t=()=>{d(!0)},h=()=>{d(!1)};return c("div",{className:"thumbnail-container",children:[e("label",{htmlFor:"default-picker",className:"form-label",children:l}),e("div",{className:"thumbnail-wrapper",children:i&&i!==void 0&&i!=="undefined"?c("div",{className:`thumbnail ${i.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[i.toLowerCase().endsWith(".pdf")?e("img",{src:S,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):e("img",{src:`http://dev-rare.srp.ai${i}`,alt:"Tenancy Contract"}),e("div",{className:"thumbnail-buttons",children:c("div",{className:"flex items-center justify-center gap-x-[10px]",children:[e("button",{onClick:()=>a(`http://dev-rare.srp.ai${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-download",children:e(b,{icon:"heroicons-outline:arrow-down-tray"})}),i.toLowerCase().endsWith(".pdf")?e("a",{target:"_blank",href:`http://dev-rare.srp.ai${i}`,className:"btn-view text-white",children:e(b,{icon:"heroicons-outline:eye"})}):e("button",{onClick:t,className:"btn-view",children:e(b,{icon:"heroicons-outline:eye"})})]})})]}):e("p",{className:"form-control py-2",children:"Not Available"})}),p&&e("div",{className:"modal-overlay",children:c("div",{className:"modal",children:[e("img",{src:`http://dev-rare.srp.ai${i}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),c("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[e("button",{onClick:()=>a(`http://dev-rare.srp.ai${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),e("button",{onClick:h,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},L=()=>{var m,N,v,y,w,x,g,k,F,A;const{id:i}=j(),{data:l,error:p,isLoading:d,isFetching:a,isSuccess:t}=_(i),[h,s]=f.exports.useState("");return f.exports.useEffect(()=>{if(l!=null&&l.youtubelink){let o=l==null?void 0:l.youtubelink,r=o==null?void 0:o.replace("watch?v=","embed/");s(r)}},[l==null?void 0:l.youtubelink]),c(n,{children:[d||a&&e($,{}),p&&e("p",{children:"Something went wrong"}),t&&l&&e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(C,{title:"View Property",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:c("div",{className:"conten-box w-[100%]",children:[e("div",{children:c("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.unitnumber?l==null?void 0:l.unitnumber:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Townhouse"||(l==null?void 0:l.propertytype)==="Villa"?c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.streetnumber?l==null?void 0:l.streetnumber:"Not Available"})]}):null,c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.usage?l==null?void 0:l.usage:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertytype?l==null?void 0:l.propertytype:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.projectstatus?l==null?void 0:l.projectstatus:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.transactiontype?l==null?void 0:l.transactiontype:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Avaiable"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtype_name?l==null?void 0:l.subtype_name:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.typelayout?l==null?void 0:l.typelayout:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.tenancystatus?l==null?void 0:l.tenancystatus:"Not Availbale"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.floor?l==null?void 0:l.floor:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Residential- Apartment"?c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Size Area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.sizearea?l==null?void 0:l.sizearea:"Not Available"})]}):null,c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.plotsize?l==null?void 0:l.plotsize:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.builduparea?l==null?void 0:l.builduparea:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.community_name?l==null?void 0:l.community_name:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.ownerassociation?l==null?void 0:l.ownerassociation:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nobathroom?l==null?void 0:l.nobathroom:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.halfbathroom?l==null?void 0:l.halfbathroom:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalbathroom?l==null?void 0:l.totalbathroom:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developer_name?l==null?void 0:l.developer_name:"Not available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.furnished?l==null?void 0:l.furnished:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.kitchen?l==null?void 0:l.kitchen:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noparking?l==null?void 0:l.noparking:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"District"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.district?l==null?void 0:l.district:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parkingbay?l==null?void 0:l.parkingbay:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyview?l==null?void 0:l.propertyview:"Not available"})]}),e(n,{}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),e("a",{className:"  form-control py-2   ",target:"_blank",href:`${l!=null&&l.propertylocation?l==null?void 0:l.propertylocation:"#"}`,children:l!=null&&l.propertylocation?((m=l==null?void 0:l.propertylocation)==null?void 0:m.slice(0,80))+(((N=l==null?void 0:l.propertylocation)==null?void 0:N.length)>100,""):"Not Available"})]}),e(n,{}),c("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"}),l!=null&&l.youtubelink?e("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:h,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500})})}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"}),((v=l==null?void 0:l.propertyimages)==null?void 0:v.length)!==0&&(l==null?void 0:l.propertyimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.propertyimages.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"}),((y=l==null?void 0:l.floorplan)==null?void 0:y.length)!==0&&(l==null?void 0:l.floorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.floorplan.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Elevation"}),((w=l==null?void 0:l.buildingelevation)==null?void 0:w.length)!==0&&(l==null?void 0:l.buildingelevation[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.buildingelevation.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Typical Floor Plan"}),((x=l==null?void 0:l.typicalfloorplan)==null?void 0:x.length)!==0&&(l==null?void 0:l.typicalfloorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.typicalfloorplan.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities images"}),((g=l==null?void 0:l.amenitiesimages)==null?void 0:g.length)!==0&&(l==null?void 0:l.amenitiesimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.amenitiesimages.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"}),((k=l==null?void 0:l.unitplanattachment)==null?void 0:k.length)!==0&&(l==null?void 0:l.unitplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.unitplanattachment.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"}),((F=l==null?void 0:l.plotplanattachment)==null?void 0:F.length)!==0&&(l==null?void 0:l.plotplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.plotplanattachment.map((o,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),e("div",{className:"w-[100%] col-span-2",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"})}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.owner_name?l==null?void 0:l.owner_name:"Not available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.representative_name?l==null?void 0:l.representative_name:"Not available"})]}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasedate?new Date(l==null?void 0:l.purchasedate).toDateString():"Not available"})]}),e(n,{}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.no_ownernamedeed?l==null?void 0:l.no_ownernamedeed:"Not available"})]}),(l==null?void 0:l.OwnerNameAsPerDeed)&&(l==null?void 0:l.no_ownernamedeed)&&(l==null?void 0:l.no_ownernamedeed)!=="0"?e(n,{children:(A=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:A.map((o,r)=>{var P;return c("div",{children:[c("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((P=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:P.length)>1?" - "+(r+1):null]}),e("p",{className:"  form-control py-2   capitalize",children:o!=null&&o.ownernameasperdeed?o==null?void 0:o.ownernameasperdeed:"Not available"})]},o==null?void 0:o._id)})}):null,e("div",{children:l!=null&&l.titledeeddocument?e(O,{data:l==null?void 0:l.titledeeddocument,label:"title deed document PDF/PNG/JPG"}):c(n,{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"title deed document PDF/PNG/JPG"}),e("p",{className:"  form-control py-2   capitalize",children:"Not available"})]})}),c("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasevaue?l==null?void 0:l.purchasevaue:"Not available"})]})]})}),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:e(T,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"})})]})})})})})})})]})};export{L as default};
