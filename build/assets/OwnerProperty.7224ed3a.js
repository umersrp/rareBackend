import{bu as j,b_ as _,r as f,c as o,F as n,j as e,bN as $,C,L as T,I as b,b$ as I}from"./index.5d56e3e7.js";import{P as S}from"./pdf-icon.2fc2c516.js";const O=({data:i,label:l})=>{const[p,m]=f.exports.useState(!1),a=(s,d)=>{I.exports.saveAs(s,d)},t=()=>{m(!0)},h=()=>{m(!1)};return o("div",{className:"thumbnail-container",children:[e("label",{htmlFor:"default-picker",className:"form-label",children:l}),e("div",{className:"thumbnail-wrapper",children:i&&i!==void 0&&i!=="undefined"?o("div",{className:`thumbnail ${i.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[i.toLowerCase().endsWith(".pdf")?e("img",{src:S,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):e("img",{src:`http://portals.rarehomesgroup.com/${i}`,alt:"Tenancy Contract"}),e("div",{className:"thumbnail-buttons",children:o("div",{className:"flex items-center justify-center gap-x-[10px]",children:[e("button",{onClick:()=>a(`http://portals.rarehomesgroup.com/${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-download",children:e(b,{icon:"heroicons-outline:arrow-down-tray"})}),i.toLowerCase().endsWith(".pdf")?e("a",{target:"_blank",href:`http://portals.rarehomesgroup.com/${i}`,className:"btn-view text-white",children:e(b,{icon:"heroicons-outline:eye"})}):e("button",{onClick:t,className:"btn-view",children:e(b,{icon:"heroicons-outline:eye"})})]})})]}):e("p",{className:"form-control py-2",children:"Not Available"})}),p&&e("div",{className:"modal-overlay",children:o("div",{className:"modal",children:[e("img",{src:`http://portals.rarehomesgroup.com/${i}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),o("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[e("button",{onClick:()=>a(`http://portals.rarehomesgroup.com/${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),e("button",{onClick:h,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},L=()=>{var d,N,v,y,g,w,x,k,F,A;const{id:i}=j(),{data:l,error:p,isLoading:m,isFetching:a,isSuccess:t}=_(i),[h,s]=f.exports.useState("");return f.exports.useEffect(()=>{if(l!=null&&l.youtubelink){let c=l==null?void 0:l.youtubelink,r=c==null?void 0:c.replace("watch?v=","embed/");s(r)}},[l==null?void 0:l.youtubelink]),o(n,{children:[m||a&&e($,{}),p&&e("p",{children:"Something went wrong"}),t&&l&&e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(C,{title:"View Property",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:o("div",{className:"conten-box w-[100%]",children:[e("div",{children:o("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.unitnumber?l==null?void 0:l.unitnumber:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Townhouse"||(l==null?void 0:l.propertytype)==="Villa"?o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.streetnumber?l==null?void 0:l.streetnumber:"Not Available"})]}):null,o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.usage?l==null?void 0:l.usage:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertytype?l==null?void 0:l.propertytype:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.projectstatus?l==null?void 0:l.projectstatus:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.transactiontype?l==null?void 0:l.transactiontype:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Avaiable"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtype_name?l==null?void 0:l.subtype_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.typelayout?l==null?void 0:l.typelayout:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.tenancystatus?l==null?void 0:l.tenancystatus:"Not Availbale"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.floor?l==null?void 0:l.floor:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Residential- Apartment"?o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Size Area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.sizearea?l==null?void 0:l.sizearea:"Not Available"})]}):null,o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.plotsize?l==null?void 0:l.plotsize:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.builduparea?l==null?void 0:l.builduparea:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.community_name?l==null?void 0:l.community_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.ownerassociation?l==null?void 0:l.ownerassociation:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nobathroom?l==null?void 0:l.nobathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.halfbathroom?l==null?void 0:l.halfbathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalbathroom?l==null?void 0:l.totalbathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developer_name?l==null?void 0:l.developer_name:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.furnished?l==null?void 0:l.furnished:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.kitchen?l==null?void 0:l.kitchen:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noparking?l==null?void 0:l.noparking:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"District"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.district?l==null?void 0:l.district:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parkingbay?l==null?void 0:l.parkingbay:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyview?l==null?void 0:l.propertyview:"Not available"})]}),e(n,{}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),e("a",{className:"  form-control py-2   ",target:"_blank",href:`${l!=null&&l.propertylocation?l==null?void 0:l.propertylocation:"#"}`,children:l!=null&&l.propertylocation?((d=l==null?void 0:l.propertylocation)==null?void 0:d.slice(0,80))+(((N=l==null?void 0:l.propertylocation)==null?void 0:N.length)>100,""):"Not Available"})]}),e(n,{}),o("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"}),l!=null&&l.youtubelink?e("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:h,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500})})}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"}),((v=l==null?void 0:l.propertyimages)==null?void 0:v.length)!==0&&(l==null?void 0:l.propertyimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.propertyimages.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"}),((y=l==null?void 0:l.floorplan)==null?void 0:y.length)!==0&&(l==null?void 0:l.floorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.floorplan.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Elevation"}),((g=l==null?void 0:l.buildingelevation)==null?void 0:g.length)!==0&&(l==null?void 0:l.buildingelevation[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.buildingelevation.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Typical Floor Plan"}),((w=l==null?void 0:l.typicalfloorplan)==null?void 0:w.length)!==0&&(l==null?void 0:l.typicalfloorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.typicalfloorplan.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities images"}),((x=l==null?void 0:l.amenitiesimages)==null?void 0:x.length)!==0&&(l==null?void 0:l.amenitiesimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.amenitiesimages.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"}),((k=l==null?void 0:l.unitplanattachment)==null?void 0:k.length)!==0&&(l==null?void 0:l.unitplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.unitplanattachment.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"}),((F=l==null?void 0:l.plotplanattachment)==null?void 0:F.length)!==0&&(l==null?void 0:l.plotplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.plotplanattachment.map((c,r)=>e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com/"+c,alt:`Property Images ${r}`,className:"object-cover w-full h-full rounded"})},r))}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),e("div",{className:"w-[100%] col-span-2",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"})}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.owner_name?l==null?void 0:l.owner_name:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.representative_name?l==null?void 0:l.representative_name:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasedate?new Date(l==null?void 0:l.purchasedate).toDateString():"Not available"})]}),e(n,{}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.no_ownernamedeed?l==null?void 0:l.no_ownernamedeed:"Not available"})]}),(l==null?void 0:l.OwnerNameAsPerDeed)&&(l==null?void 0:l.no_ownernamedeed)&&(l==null?void 0:l.no_ownernamedeed)!=="0"?e(n,{children:(A=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:A.map((c,r)=>{var P;return o("div",{children:[o("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((P=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:P.length)>1?" - "+(r+1):null]}),e("p",{className:"  form-control py-2   capitalize",children:c!=null&&c.ownernameasperdeed?c==null?void 0:c.ownernameasperdeed:"Not available"})]},c==null?void 0:c._id)})}):null,e("div",{children:l!=null&&l.titledeeddocument?e(O,{data:l==null?void 0:l.titledeeddocument,label:"title deed document PDF/PNG/JPG"}):o(n,{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"title deed document PDF/PNG/JPG"}),e("p",{className:"  form-control py-2   capitalize",children:"Not available"})]})}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasevaue?l==null?void 0:l.purchasevaue:"Not available"})]})]})}),e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:e(T,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"})})]})})})})})})})]})};export{L as default};
