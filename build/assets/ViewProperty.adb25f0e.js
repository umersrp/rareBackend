import{bu as vl,bL as xl,b_ as wl,r as d,c as o,F as b,j as e,bN as Q,f as gl,L as N,I as E,bP as ul,K as kl,b$ as Fl}from"./index.93a34628.js";import{P as Al}from"./pdf-icon.2fc2c516.js";const Pl=({data:i,label:x})=>{const[f,p]=d.exports.useState(!1),l=(n,s)=>{Fl.exports.saveAs(n,s)},w=()=>{p(!0)},y=()=>{p(!1)};return o("div",{className:"thumbnail-container",children:[e("label",{htmlFor:"default-picker",className:"form-label",children:x}),e("div",{className:"thumbnail-wrapper",children:i&&i!==void 0&&i!=="undefined"?o("div",{className:`thumbnail ${i.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[i.toLowerCase().endsWith(".pdf")?e("img",{src:Al,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):e("img",{src:`http://portals.rarehomesgroup.com${i}`,alt:"Tenancy Contract"}),e("div",{className:"thumbnail-buttons",children:o("div",{className:"flex items-center justify-center gap-x-[10px]",children:[e("button",{onClick:()=>l(`http://portals.rarehomesgroup.com${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-download",children:e(E,{icon:"heroicons-outline:arrow-down-tray"})}),i.toLowerCase().endsWith(".pdf")?e("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${i}`,className:"btn-view text-white",children:e(E,{icon:"heroicons-outline:eye"})}):e("button",{onClick:w,className:"btn-view",children:e(E,{icon:"heroicons-outline:eye"})})]})})]}):e("p",{className:"form-control py-2",children:"Not Available"})}),f&&e("div",{className:"modal-overlay",children:o("div",{className:"modal",children:[e("img",{src:`http://portals.rarehomesgroup.com${i}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),o("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[e("button",{onClick:()=>l(`http://portals.rarehomesgroup.com${i}`,`${decodeURIComponent(i).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),e("button",{onClick:y,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},$l=({showModal:i,handleClose:x,loaderModal:f,linkedData:p,handleDeleteData:l,dataId:w,moduleName:y,booking:n,managementcontract:s,tenantcontract:m,rentpurchase:a,unitNumber:g,unit_Number:v})=>e("div",{className:"thumbnail-container",children:i&&e("div",{className:"modal-overlay-property",children:o("div",{className:"modal-new w-[850px]",children:[o("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${y}?`}),e("img",{src:ul,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:x})]}),f===!0?e(Q,{}):o(b,{children:[p!=null&&p.length?e("div",{className:"data-list-modal",children:o(b,{children:[o("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:"Property"})," ",v," is linked with the following modules:"]}),n!=null&&n.length?e("ul",{className:" mb-[10px] text-start",children:o("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Booking: "}),n==null?void 0:n.map((c,h)=>o(N,{className:" mr-[5px] hover:underline",to:`/view-booking/${c==null?void 0:c._id}?delete=true`,children:[c==null?void 0:c.bookingnumber,h!==n.length-1?",":null]},h+1))]})}):null,m!=null&&m.length?e("ul",{className:" mb-[10px] text-start",children:o("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Tenant Contract: "}),m==null?void 0:m.map((c,h)=>o(N,{className:" mr-[5px] hover:underline",to:`/view-tenantcontract/${c==null?void 0:c._id}?delete=true`,children:["TC-"+(c==null?void 0:c._id.slice(0,6)),h!==m.length-1?",":null]},h+1))]})}):null,a!=null&&a.length?e("ul",{className:" mb-[10px] text-start",children:o("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "}),a==null?void 0:a.map((c,h)=>o(N,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${c==null?void 0:c._id}?delete=true`,children:["AS-"+(c==null?void 0:c._id.slice(0,6)),h!==a.length-1?",":null]},h+1))]})}):null,s!=null&&s.length?e("ul",{className:" mb-[10px] text-start",children:o("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Management Contract: "}),s==null?void 0:s.map((c,h)=>o(N,{className:" mr-[5px] hover:underline",to:`/view-managementcontract/${c==null?void 0:c._id}?delete=true`,children:["MC-"+(c==null?void 0:c._id.slice(0,6)),h!==s.length-1?",":null]},h+1))]})}):null]})}):null,o("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[e(b,{}),e(b,{}),(p==null?void 0:p.length)||(a==null?void 0:a.length)||(m==null?void 0:m.length)||(s==null?void 0:s.length)||(n==null?void 0:n.length)?e("p",{className:" mt-[10px]",children:`This ${y} is already linked. Please first delete these entries which are linked it with`}):null,!(p!=null&&p.length)&&!(a!=null&&a.length)&&!(m!=null&&m.length)&&!(s!=null&&s.length)&&!(n!=null&&n.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>l(w),children:"Delete"}):null]})]})]})})}),jl=()=>{var M,W,Y,H,G,J,K;const{id:i}=vl(),x=localStorage.getItem("isAuth"),f=JSON.parse(x),{data:p}=xl(f==null?void 0:f.roleid),{data:l,error:w,isLoading:y,isFetching:n,isSuccess:s,refetch:m}=wl(i),[a,g]=d.exports.useState(!1),v=new URLSearchParams(window.location.search),c=v.get("delete"),[h,U]=d.exports.useState(!1),[R,q]=d.exports.useState(""),[X,Z]=d.exports.useState(""),[D,B]=d.exports.useState(!1),[O,z]=d.exports.useState(!1),[ll,V]=d.exports.useState(!1),[el,ol]=d.exports.useState(!1),[rl,j]=d.exports.useState(""),[cl,C]=d.exports.useState(""),[il,I]=d.exports.useState(""),[tl,T]=d.exports.useState(""),[nl,sl]=d.exports.useState(""),[al,dl]=d.exports.useState("");d.exports.useEffect(()=>{if(l!=null&&l.youtubelink){let r=l==null?void 0:l.youtubelink,t=r==null?void 0:r.replace("watch?v=","embed/");dl(t)}},[l==null?void 0:l.youtubelink]),d.exports.useEffect(()=>{c==="true"&&v&&(l==null?void 0:l.softdelete)===!1?g(!0):c==="true"&&v&&(l==null?void 0:l.softdelete)===!0&&(z(!0),g(!1))},[c,v,l==null?void 0:l.softdelete]);const pl=async r=>{if(U(!0),B(!0),r)try{const t=`http://portals.rarehomesgroup.com/booking/api/allbooking/forproperty?propertyid=${r}`,L=`http://portals.rarehomesgroup.com/managementcontract/api/propertydelete?propertyid=${r}`,bl=`http://portals.rarehomesgroup.com/tenantcontract/api/propertydelete?propertyid=${r}`,Nl=`http://portals.rarehomesgroup.com/rentpurchase/api/propertydelete?porpertyid=${r}`,u=await fetch(t);if(!u.ok&&u.status!==400)throw new Error(`API 1 failed with status: ${u.status}`);const k=u.status===400?[]:await u.json(),F=await fetch(L);if(!F.ok&&F.status!==400)throw new Error(`API 2 failed with status: ${F.status}`);const A=F.status===400?[]:await F.json(),P=await fetch(bl);if(!P.ok&&P.status!==400)throw new Error(`API 2 failed with status: ${P.status}`);const $=P.status===400?[]:await P.json(),_=await fetch(Nl);if(!_.ok&&_.status!==400)throw new Error(`API 2 failed with status: ${_.status}`);const S=_.status===400?[]:await _.json(),yl=[...k,...A,...$,...S];k!=null&&k.length?j(k):j(""),A!=null&&A.length?C(A):C(""),$!=null&&$.length?I($):I(""),S!=null&&S.length?T(S):T(""),Z(yl),q(r),sl(r==null?void 0:r.unitnumber),B(!1)}catch(t){console.error("Error fetching data:",t),B(!1)}},ml=()=>{U(!1),j(""),C(""),I(""),T("")},hl=async()=>{try{await kl.patch("http://portals.rarehomesgroup.com/property/api/availability",{_id:i,softdelete:!0}),fl(),g(!1),j(""),C(""),I(""),T("")}catch(r){console.log(r,"error")}},fl=async()=>{try{await m(),V(!0),z(!0),g(!1),U(!1)}catch{ol(!0)}V(!1)};return o(b,{children:[(y||n&&ll)&&e(Q,{}),w||el&&e("p",{children:"Something went wrong"}),s&&l&&o("div",{className:" space-y-5",children:[e($l,{showModal:h,handleClose:ml,unitNumber:nl,loaderModal:D,linkedData:X,handleDeleteData:hl,dataId:R,moduleName:"Property",booking:rl,managementcontract:cl,tenantcontract:il,rentpurchase:tl,unit_Number:l==null?void 0:l.unitnumber}),e("div",{children:e("div",{children:o(gl,{children:[o("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"View Property"}),a===!0&&O===!1?e("button",{onClick:()=>pl(i),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Property"}):null,O===!0&&a===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Property is deleted"}):null]}),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:o("div",{className:"conten-box w-[100%]",children:[e("div",{children:o("div",{className:"lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5 flex flex-col gap-y-[15px]",children:[o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.unitnumber?l==null?void 0:l.unitnumber:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Townhouse"||(l==null?void 0:l.propertytype)==="Villa"?o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.streetnumber?l==null?void 0:l.streetnumber:"Not Available"})]}):null,o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.usage?l==null?void 0:l.usage:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertytype?l==null?void 0:l.propertytype:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.projectstatus?l==null?void 0:l.projectstatus:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.transactiontype?l==null?void 0:l.transactiontype:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Avaiable"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtype_name?l==null?void 0:l.subtype_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.typelayout?l==null?void 0:l.typelayout:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.floor?l==null?void 0:l.floor:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.plotsize?l==null?void 0:l.plotsize:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.builduparea?(l==null?void 0:l.builduparea)+" "+((l==null?void 0:l.builduparea)&&(l==null?void 0:l.measure_units)?l==null?void 0:l.measure_units:""):"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.community_name?l==null?void 0:l.community_name:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.ownerassociation?l==null?void 0:l.ownerassociation:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nobathroom?l==null?void 0:l.nobathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.halfbathroom?l==null?void 0:l.halfbathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalbathroom?l==null?void 0:l.totalbathroom:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.furnished?l==null?void 0:l.furnished:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.kitchen?l==null?void 0:l.kitchen:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noparking?l==null?void 0:l.noparking:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"District"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.district?l==null?void 0:l.district:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parkingbay?l==null?void 0:l.parkingbay:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyview?l==null?void 0:l.propertyview:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),e("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${l!=null&&l.propertylocation?l==null?void 0:l.propertylocation:"#"}`,children:l!=null&&l.propertylocation?((M=l==null?void 0:l.propertylocation)==null?void 0:M.slice(0,80))+(((W=l==null?void 0:l.propertylocation)==null?void 0:W.length)>100,""):"Not Available"})]}),e(b,{}),o("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"}),l!=null&&l.youtubelink?e("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:al,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500})})}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"}),((Y=l==null?void 0:l.propertyimages)==null?void 0:Y.length)!==0&&(l==null?void 0:l.propertyimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.propertyimages.map((r,t)=>r!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com"+r,alt:`Property Images ${t}`,className:"object-cover w-full h-full rounded"})},t):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"}),((H=l==null?void 0:l.floorplan)==null?void 0:H.length)!==0&&(l==null?void 0:l.floorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.floorplan.map((r,t)=>r!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com"+r,alt:`Property Images ${t}`,className:"object-cover w-full h-full rounded"})},t):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"}),((G=l==null?void 0:l.unitplanattachment)==null?void 0:G.length)!==0&&(l==null?void 0:l.unitplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.unitplanattachment.map((r,t)=>r!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com"+r,alt:`Property Images ${t}`,className:"object-cover w-full h-full rounded"})},t):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"}),((J=l==null?void 0:l.plotplanattachment)==null?void 0:J.length)!==0&&(l==null?void 0:l.plotplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.plotplanattachment.map((r,t)=>r!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://portals.rarehomesgroup.com"+r,alt:`Property Images ${t}`,className:"object-cover w-full h-full rounded"})},t):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),e("div",{className:"w-[100%] col-span-2",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"})}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.owner_name?l==null?void 0:l.owner_name:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.representative_name?l==null?void 0:l.representative_name:"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasedate?new Date(l==null?void 0:l.purchasedate).toDateString():"Not available"})]}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.no_ownernamedeed?l==null?void 0:l.no_ownernamedeed:"Not available"})]}),(l==null?void 0:l.OwnerNameAsPerDeed)&&(l==null?void 0:l.no_ownernamedeed)&&(l==null?void 0:l.no_ownernamedeed)!=="0"?e(b,{children:(K=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:K.map((r,t)=>{var L;return o("div",{children:[o("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((L=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:L.length)>1?" - "+(t+1):null]}),e("p",{className:"  form-control py-2   capitalize",children:r!=null&&r.ownernameasperdeed?r==null?void 0:r.ownernameasperdeed:"Not available"})]},r==null?void 0:r._id)})}):null,e("div",{children:e(Pl,{data:l==null?void 0:l.titledeeddocument,label:"title deed document PDF/PNG/JPG"})}),o("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasevaue?l==null?void 0:l.purchasevaue:"Not available"})]})]})}),a===!1&&O===!1?o("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[f!=null&&f.type?e(N,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}):e(N,{to:"/all-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(p==null?void 0:p.updatepropert)===!0&&e(N,{to:`/update-property/${i}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})]})};export{jl as default};
