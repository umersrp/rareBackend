import{bt as O,bL as Q,r,j as l,F as p,bN as C,c as i,f as W,L as k,bP as Y,M as G}from"./index.bbe51ac5.js";const K=({showModal:d,handleClose:N,loaderModal:h,linkedData:n,handleDeleteData:e,dataId:g,moduleName:f,PropertyData:c,buildingName:x})=>l("div",{className:"thumbnail-container",children:d&&l("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[850px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${f}?`}),l("img",{src:Y,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:N})]}),h===!0?l(C,{}):i(p,{children:[n!=null&&n.length?l("div",{className:"data-list-modal",children:i(p,{children:[i("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:f})," ",x," is linked with the following modules:"]}),c!=null&&c.length?l("ul",{className:" mb-[10px] text-start",children:i("li",{className:"list-disc ml-[30px]",children:[l("span",{className:"font-semibold mr-[5px]",children:"Property: "}),c==null?void 0:c.map((o,m)=>i(k,{className:" mr-[5px] hover:underline",to:`/view-property/${o==null?void 0:o._id}?delete=true`,children:[o==null?void 0:o.unitnumber,m!==c.length-1?",":null]},m+1))]})}):null]})}):null,i("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(c==null?void 0:c.length)?l("p",{className:" mt-[10px]",children:`This ${f} is already linked. Please first delete these entries which are linked it with`}):null,!(n!=null&&n.length)&&!(c!=null&&c.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>e(g),children:"Delete"}):null]})]})]})})}),P=()=>{var $,B,F,I,L;const{id:d}=O(),N=localStorage.getItem("isAuth"),h=JSON.parse(N),{data:n}=Q(h==null?void 0:h.roleid),[e,g]=r.exports.useState(""),[f,c]=r.exports.useState(""),[x,o]=r.exports.useState(!1),m=new URLSearchParams(window.location.search),v=m.get("delete"),[E,w]=r.exports.useState(!1),[q,M]=r.exports.useState(""),[_,z]=r.exports.useState(""),[T,u]=r.exports.useState(!1),[j,A]=r.exports.useState(!1),[U,S]=r.exports.useState(!1),[V,y]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{if(d){const a=await(await fetch(`http://portals.rarehomesgroup.com/buildingname/${d}`)).json();a&&g(a)}})()},[d]),r.exports.useEffect(()=>{(async()=>{if(e!=null&&e.projectnameid){const a=await(await fetch(`http://portals.rarehomesgroup.com/projectname/${e==null?void 0:e.projectnameid}`)).json();a&&c(a==null?void 0:a.projectName)}})()},[e==null?void 0:e.projectnameid]),r.exports.useEffect(()=>{v==="true"&&m&&(e==null?void 0:e.softdelete)===!1?o(!0):v==="true"&&m&&(e==null?void 0:e.softdelete)===!0&&(A(!0),o(!1))},[v,m,e==null?void 0:e.softdelete]);const H=async t=>{if(w(!0),u(!0),t)try{const s=`http://portals.rarehomesgroup.com/property/api/advancesearch?buildingid=${t}&softdelete=false`,a=await fetch(s);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const b=a.status===400?[]:await a.json(),J=[...b];z(J),M(t),y(b),u(!1)}catch(s){console.error("Error fetching data:",s),u(!1)}};return l(p,{children:U===!0?l(C,{}):i("div",{className:" space-y-5",children:[l(K,{showModal:E,handleClose:()=>{w(!1),y("")},loaderModal:T,linkedData:_,handleDeleteData:async t=>{try{await G.patch("http://portals.rarehomesgroup.com/buildingname/api/buildingdelete",{_id:t,softdelete:!0}),S(!0),(async()=>{if(d){const b=await(await fetch(`http://portals.rarehomesgroup.com/buildingname/${d}`)).json();b&&g(b)}})(),y(""),A(!0),w(!1),u(!1),S(!1)}catch(s){console.log(s,"error")}},dataId:q,moduleName:"Building Name",PropertyData:V,buildingName:e==null?void 0:e.buildingname}),l("div",{children:l("div",{children:i(W,{children:[i("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Building"}),x===!0&&j===!1?l("button",{onClick:()=>H(d),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Building"}):null,j===!0&&x===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Building is deleted"}):null]}),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:i("div",{className:"conten-box w-[100%]",children:[l("div",{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Code"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.buildingcode?e==null?void 0:e.buildingcode:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.projectnameid?f:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Elevation"}),e!=null&&e.buildingelevation?l(p,{children:(($=e==null?void 0:e.buildingelevation)==null?void 0:$.length)!==0&&(e==null?void 0:e.buildingelevation[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.buildingelevation.map((t,s)=>t!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://portals.rarehomesgroup.com"+t,alt:`Property Images ${s}`,className:"object-cover w-full h-full rounded"})},s):null)}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Typical Floor Plan"}),e!=null&&e.typicalfloorplan?l(p,{children:((B=e==null?void 0:e.typicalfloorplan)==null?void 0:B.length)!==0&&(e==null?void 0:e.typicalfloorplan[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.typicalfloorplan.map((t,s)=>t!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://portals.rarehomesgroup.com"+t,alt:`Property Images ${s}`,className:"object-cover w-full h-full rounded"})},s):null)}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities images"}),e!=null&&e.amenitiesimages?l(p,{children:((F=e==null?void 0:e.amenitiesimages)==null?void 0:F.length)!==0&&(e==null?void 0:e.amenitiesimages[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.amenitiesimages.map((t,s)=>t!==""?l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://portals.rarehomesgroup.com"+t,alt:`Property Images ${s}`,className:"object-cover w-full h-full rounded"})},s):null)}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Amenities"}),(e==null?void 0:e.amenities_data)&&((I=e==null?void 0:e.amenities_data)==null?void 0:I.length)?l("ul",{className:"pl-[30px]",children:(L=e==null?void 0:e.amenities_data)==null?void 0:L.map((t,s)=>l("li",{className:"list-disc",children:t==null?void 0:t.amenitiesname},s+1))}):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"})]})]})}),x===!1&&j===!1?i("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(k,{to:"/all-buildings",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(n==null?void 0:n.updatebuilding)&&l(k,{to:`/update-building/${d}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})})};export{P as default};
