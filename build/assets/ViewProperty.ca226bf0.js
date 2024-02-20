import{bu as yl,bL as xl,b_ as wl,r as a,c as r,F as b,j as e,bN as Q,C as gl,L as N,I as E,bP as ul,K as kl,b$ as Fl}from"./index.3f28faea.js";import{P as Al}from"./pdf-icon.2fc2c516.js";const Pl=({data:c,label:x})=>{const[f,p]=a.exports.useState(!1),l=(t,s)=>{Fl.exports.saveAs(t,s)},w=()=>{p(!0)},v=()=>{p(!1)};return r("div",{className:"thumbnail-container",children:[e("label",{htmlFor:"default-picker",className:"form-label",children:x}),e("div",{className:"thumbnail-wrapper",children:c&&c!==void 0&&c!=="undefined"?r("div",{className:`thumbnail ${c.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[c.toLowerCase().endsWith(".pdf")?e("img",{src:Al,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"}):e("img",{src:`http://dev-rare.srp.ai${c}`,alt:"Tenancy Contract"}),e("div",{className:"thumbnail-buttons",children:r("div",{className:"flex items-center justify-center gap-x-[10px]",children:[e("button",{onClick:()=>l(`http://dev-rare.srp.ai${c}`,`${decodeURIComponent(c).split("/").pop()}`),className:"btn-download",children:e(E,{icon:"heroicons-outline:arrow-down-tray"})}),c.toLowerCase().endsWith(".pdf")?e("a",{target:"_blank",href:`http://dev-rare.srp.ai${c}`,className:"btn-view text-white",children:e(E,{icon:"heroicons-outline:eye"})}):e("button",{onClick:w,className:"btn-view",children:e(E,{icon:"heroicons-outline:eye"})})]})})]}):e("p",{className:"form-control py-2",children:"Not Available"})}),f&&e("div",{className:"modal-overlay",children:r("div",{className:"modal",children:[e("img",{src:`http://dev-rare.srp.ai${c}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"}),r("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[e("button",{onClick:()=>l(`http://dev-rare.srp.ai${c}`,`${decodeURIComponent(c).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"}),e("button",{onClick:v,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"})]})]})})]})},$l=({showModal:c,handleClose:x,loaderModal:f,linkedData:p,handleDeleteData:l,dataId:w,moduleName:v,booking:t,managementcontract:s,tenantcontract:m,rentpurchase:d,unitNumber:g,unit_Number:y})=>e("div",{className:"thumbnail-container",children:c&&e("div",{className:"modal-overlay-property",children:r("div",{className:"modal-new w-[850px]",children:[r("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${v}?`}),e("img",{src:ul,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:x})]}),f===!0?e(Q,{}):r(b,{children:[p!=null&&p.length?e("div",{className:"data-list-modal",children:r(b,{children:[r("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:"Property"})," ",y," is linked with the following modules:"]}),t!=null&&t.length?e("ul",{className:" mb-[10px] text-start",children:r("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Booking: "}),t==null?void 0:t.map((i,h)=>r(N,{className:" mr-[5px] hover:underline",to:`/view-booking/${i==null?void 0:i._id}?delete=true`,children:[i==null?void 0:i.bookingnumber,h!==t.length-1?",":null]},h+1))]})}):null,m!=null&&m.length?e("ul",{className:" mb-[10px] text-start",children:r("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Tenant Contract: "}),m==null?void 0:m.map((i,h)=>r(N,{className:" mr-[5px] hover:underline",to:`/view-tenantcontract/${i==null?void 0:i._id}?delete=true`,children:["TC-"+(i==null?void 0:i._id.slice(0,6)),h!==m.length-1?",":null]},h+1))]})}):null,d!=null&&d.length?e("ul",{className:" mb-[10px] text-start",children:r("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "}),d==null?void 0:d.map((i,h)=>r(N,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${i==null?void 0:i._id}?delete=true`,children:["AS-"+(i==null?void 0:i._id.slice(0,6)),h!==d.length-1?",":null]},h+1))]})}):null,s!=null&&s.length?e("ul",{className:" mb-[10px] text-start",children:r("li",{className:"list-disc ml-[30px]",children:[e("span",{className:"font-semibold mr-[5px]",children:"Management Contract: "}),s==null?void 0:s.map((i,h)=>r(N,{className:" mr-[5px] hover:underline",to:`/view-managementcontract/${i==null?void 0:i._id}?delete=true`,children:["MC-"+(i==null?void 0:i._id.slice(0,6)),h!==s.length-1?",":null]},h+1))]})}):null]})}):null,r("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[e(b,{}),e(b,{}),(p==null?void 0:p.length)||(d==null?void 0:d.length)||(m==null?void 0:m.length)||(s==null?void 0:s.length)||(t==null?void 0:t.length)?e("p",{className:" mt-[10px]",children:`This ${v} is already linked. Please first delete these entries which are linked it with`}):null,!(p!=null&&p.length)&&!(d!=null&&d.length)&&!(m!=null&&m.length)&&!(s!=null&&s.length)&&!(t!=null&&t.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>l(w),children:"Delete"}):null]})]})]})})}),jl=()=>{var M,W,Y,H,G,J,K;const{id:c}=yl(),x=localStorage.getItem("isAuth"),f=JSON.parse(x),{data:p}=xl(f==null?void 0:f.roleid),{data:l,error:w,isLoading:v,isFetching:t,isSuccess:s,refetch:m}=wl(c),[d,g]=a.exports.useState(!1),y=new URLSearchParams(window.location.search),i=y.get("delete"),[h,U]=a.exports.useState(!1),[R,q]=a.exports.useState(""),[X,Z]=a.exports.useState(""),[D,B]=a.exports.useState(!1),[O,z]=a.exports.useState(!1),[ll,V]=a.exports.useState(!1),[el,rl]=a.exports.useState(!1),[ol,j]=a.exports.useState(""),[il,C]=a.exports.useState(""),[cl,I]=a.exports.useState(""),[nl,T]=a.exports.useState(""),[tl,sl]=a.exports.useState(""),[dl,al]=a.exports.useState("");a.exports.useEffect(()=>{if(l!=null&&l.youtubelink){let o=l==null?void 0:l.youtubelink,n=o==null?void 0:o.replace("watch?v=","embed/");al(n)}},[l==null?void 0:l.youtubelink]),a.exports.useEffect(()=>{i==="true"&&y&&(l==null?void 0:l.softdelete)===!1?g(!0):i==="true"&&y&&(l==null?void 0:l.softdelete)===!0&&(z(!0),g(!1))},[i,y,l==null?void 0:l.softdelete]);const pl=async o=>{if(U(!0),B(!0),o)try{const n=`http://dev-rare.srp.ai/booking/api/allbooking/forproperty?propertyid=${o}`,L=`http://dev-rare.srp.ai/managementcontract/api/propertydelete?propertyid=${o}`,bl=`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${o}`,Nl=`http://dev-rare.srp.ai/rentpurchase/api/propertydelete?porpertyid=${o}`,u=await fetch(n);if(!u.ok&&u.status!==400)throw new Error(`API 1 failed with status: ${u.status}`);const k=u.status===400?[]:await u.json(),F=await fetch(L);if(!F.ok&&F.status!==400)throw new Error(`API 2 failed with status: ${F.status}`);const A=F.status===400?[]:await F.json(),P=await fetch(bl);if(!P.ok&&P.status!==400)throw new Error(`API 2 failed with status: ${P.status}`);const $=P.status===400?[]:await P.json(),_=await fetch(Nl);if(!_.ok&&_.status!==400)throw new Error(`API 2 failed with status: ${_.status}`);const S=_.status===400?[]:await _.json(),vl=[...k,...A,...$,...S];k!=null&&k.length?j(k):j(""),A!=null&&A.length?C(A):C(""),$!=null&&$.length?I($):I(""),S!=null&&S.length?T(S):T(""),Z(vl),q(o),sl(o==null?void 0:o.unitnumber),B(!1)}catch(n){console.error("Error fetching data:",n),B(!1)}},ml=()=>{U(!1),j(""),C(""),I(""),T("")},hl=async()=>{try{await kl.patch("http://dev-rare.srp.ai/property/api/availability",{_id:c,softdelete:!0}),fl(),g(!1),j(""),C(""),I(""),T("")}catch(o){console.log(o,"error")}},fl=async()=>{try{await m(),V(!0),z(!0),g(!1),U(!1)}catch{rl(!0)}V(!1)};return r(b,{children:[(v||t&&ll)&&e(Q,{}),w||el&&e("p",{children:"Something went wrong"}),s&&l&&r("div",{className:" space-y-5",children:[e($l,{showModal:h,handleClose:ml,unitNumber:tl,loaderModal:D,linkedData:X,handleDeleteData:hl,dataId:R,moduleName:"Property",booking:ol,managementcontract:il,tenantcontract:cl,rentpurchase:nl,unit_Number:l==null?void 0:l.unitnumber}),e("div",{children:e("div",{children:r(gl,{children:[r("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"View Property"}),d===!0&&O===!1?e("button",{onClick:()=>pl(c),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Property"}):null,O===!0&&d===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Property is deleted"}):null]}),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:r("div",{className:"conten-box w-[100%]",children:[e("div",{children:r("div",{className:"lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5 flex flex-col gap-y-[15px]",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.unitnumber?l==null?void 0:l.unitnumber:"Not Available"})]}),(l==null?void 0:l.propertytype)==="Townhouse"||(l==null?void 0:l.propertytype)==="Villa"?r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.streetnumber?l==null?void 0:l.streetnumber:"Not Available"})]}):null,r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.usage?l==null?void 0:l.usage:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertytype?l==null?void 0:l.propertytype:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.projectstatus?l==null?void 0:l.projectstatus:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.transactiontype?l==null?void 0:l.transactiontype:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Avaiable"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.subtype_name?l==null?void 0:l.subtype_name:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.typelayout?l==null?void 0:l.typelayout:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.floor?l==null?void 0:l.floor:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.plotsize?l==null?void 0:l.plotsize:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.builduparea?(l==null?void 0:l.builduparea)+" "+((l==null?void 0:l.builduparea)&&(l==null?void 0:l.measure_units)?l==null?void 0:l.measure_units:""):"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.community_name?l==null?void 0:l.community_name:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.ownerassociation?l==null?void 0:l.ownerassociation:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nobathroom?l==null?void 0:l.nobathroom:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.halfbathroom?l==null?void 0:l.halfbathroom:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalbathroom?l==null?void 0:l.totalbathroom:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.furnished?l==null?void 0:l.furnished:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.kitchen?l==null?void 0:l.kitchen:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noparking?l==null?void 0:l.noparking:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.balcony?l==null?void 0:l.balcony:"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"District"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.district?l==null?void 0:l.district:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parkingbay?l==null?void 0:l.parkingbay:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyview?l==null?void 0:l.propertyview:"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.dewapremises?l==null?void 0:l.dewapremises:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),e("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${l!=null&&l.propertylocation?l==null?void 0:l.propertylocation:"#"}`,children:l!=null&&l.propertylocation?((M=l==null?void 0:l.propertylocation)==null?void 0:M.slice(0,80))+(((W=l==null?void 0:l.propertylocation)==null?void 0:W.length)>100,""):"Not Available"})]}),e(b,{}),r("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"}),l!=null&&l.youtubelink?e("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:e("div",{className:"w-[100%] flex items-end justify-center",children:e("iframe",{title:"YouTube Link",src:dl,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500})})}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),r("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"}),((Y=l==null?void 0:l.propertyimages)==null?void 0:Y.length)!==0&&(l==null?void 0:l.propertyimages[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.propertyimages.map((o,n)=>o!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"})},n):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"}),((H=l==null?void 0:l.floorplan)==null?void 0:H.length)!==0&&(l==null?void 0:l.floorplan[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.floorplan.map((o,n)=>o!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"})},n):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"}),((G=l==null?void 0:l.unitplanattachment)==null?void 0:G.length)!==0&&(l==null?void 0:l.unitplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.unitplanattachment.map((o,n)=>o!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"})},n):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"}),((J=l==null?void 0:l.plotplanattachment)==null?void 0:J.length)!==0&&(l==null?void 0:l.plotplanattachment[0])!==""?e("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:l==null?void 0:l.plotplanattachment.map((o,n)=>o!==""?e("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:e("img",{src:"http://dev-rare.srp.ai"+o,alt:`Property Images ${n}`,className:"object-cover w-full h-full rounded"})},n):null)}):e("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),e("div",{className:"w-[100%] col-span-2",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"})}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.owner_name?l==null?void 0:l.owner_name:"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.representative_name?l==null?void 0:l.representative_name:"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasedate?new Date(l==null?void 0:l.purchasedate).toDateString():"Not available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"}),e("p",{className:"  form-control py-2   capitalize",children:l!=null&&l.no_ownernamedeed?l==null?void 0:l.no_ownernamedeed:"Not available"})]}),(l==null?void 0:l.OwnerNameAsPerDeed)&&(l==null?void 0:l.no_ownernamedeed)&&(l==null?void 0:l.no_ownernamedeed)!=="0"?e(b,{children:(K=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:K.map((o,n)=>{var L;return r("div",{children:[r("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((L=l==null?void 0:l.OwnerNameAsPerDeed)==null?void 0:L.length)>1?" - "+(n+1):null]}),e("p",{className:"  form-control py-2   capitalize",children:o!=null&&o.ownernameasperdeed?o==null?void 0:o.ownernameasperdeed:"Not available"})]},o==null?void 0:o._id)})}):null,e("div",{children:e(Pl,{data:l==null?void 0:l.titledeeddocument,label:"title deed document PDF/PNG/JPG"})}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.purchasevaue?l==null?void 0:l.purchasevaue:"Not available"})]})]})}),d===!1&&O===!1?r("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[f!=null&&f.type?e(N,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}):e(N,{to:"/all-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(p==null?void 0:p.updatepropert)===!0&&e(N,{to:`/update-property/${c}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})]})};export{jl as default};
