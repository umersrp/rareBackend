import{R as j,j as c,F as E,r as b,b as S,c as f,f as Y,G as ve,I,T as ge,L as be,bN as me}from"./index.93a34628.js";import{G as fe}from"./GlobalFilter.27500e56.js";import"./index.esm.4d38d399.js";const U=j.forwardRef(({indeterminate:x,...g},k)=>{const m=j.useRef(),r=k||m;return j.useEffect(()=>{r.current.indeterminate=x},[r,x]),c(E,{children:c("input",{type:"checkbox",ref:r,...g,className:"table-checkbox"})})}),xe=({title:x,allData:g})=>{const k=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>c("span",{children:l.indexOf(e)+1})},{Header:"Unit Number",accessor:"unitnumber",Cell:e=>{var l,a,t;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((t=e==null?void 0:e.cell)==null?void 0:t.value.length)>15?"...":""):"Not Available"})}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{var l,a,t,s;return c("div",{children:c("span",{className:"inline-flex items-center",children:c("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.length)>15?"...":""):"Not Available"})})})}},{Header:"Owner Representative",accessor:"owner_representative_name",Cell:e=>{var l,a,t,s;return c("div",{children:c("span",{className:"inline-flex items-center",children:c("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.length)>15?"...":""):"Not Available"})})})}},{Header:"Project Name",accessor:"project_name",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"developer name",accessor:"developer_name",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"sub type name",accessor:"subtype_name",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"usage",accessor:"usage",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"size area",accessor:"sizearea",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"plot size",accessor:"plotsize",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"build up area",accessor:"builduparea",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"owner association",accessor:"ownerassociation",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"no bathroom",accessor:"nobathroom",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"half bathroom",accessor:"halfbathroom",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"furnished",accessor:"furnished",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"kitchen",accessor:"kitchen",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"no parking",accessor:"noparking",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"balcony",accessor:"balcony",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"dewa premises",accessor:"dewapremises",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"district",accessor:"district",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"parking bay",accessor:"parkingbay",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"property view",accessor:"propertyview",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"purchasedate",accessor:"purchasedate",Cell:e=>{var l,a;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Total no of OWNER NAME DEED",accessor:"no_ownernamedeed",Cell:e=>{var l,a;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"purchasevaue",accessor:"purchasevaue",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"Title Deed Document",accessor:"titledeeddocument",Cell:e=>{var l,a,t,s;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!==""?"Available":"Not Available"})})}},{Header:"total bathroom",accessor:"totalbathroom",Cell:e=>{var l,a,t,s,n,p,i;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==void 0&&((t=e==null?void 0:e.cell)==null?void 0:t.value)!=="undefined"?((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.slice(0,15))+(((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)>15?"...":""):"Not Available"})}},{Header:"total bedroom",accessor:"totalbedroom",Cell:e=>{var l,a,t,s,n,p,i;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==void 0&&((t=e==null?void 0:e.cell)==null?void 0:t.value)!=="undefined"?((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.slice(0,15))+(((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)>15?"...":""):"Not Available"})}},{Header:"street number",accessor:"streetnumber",Cell:e=>{var l,a,t,s,n;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"maid room",accessor:"maidroom",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"store room",accessor:"storeroom",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"bed room en suite",accessor:"bedroomensuite",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"bath room en suite",accessor:"bathroomensuite",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"driver room",accessor:"driverroom",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"other room",accessor:"otherroom",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"en suite",accessor:"ensuite",Cell:e=>{var l;return c("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"})}},{Header:"property images",accessor:"propertyimages",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"floor plan images",accessor:"floorplan",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"typical floor plan images",accessor:"typicalfloorplan",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"building elevation images",accessor:"buildingelevation",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"amenities images",accessor:"amenitiesimages",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"unit plan attachment",accessor:"unitplanattachment",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"plot plan attachment",accessor:"plotplanattachment",Cell:e=>{var l,a,t,s,n,p,i,d,h,v;return c("span",{className:"block w-full",children:c("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.length)>0&&((i=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:i.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(v=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:v.length})})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var l,a;return c("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>c("div",{className:"flex space-x-3 rtl:space-x-reverse",children:c(ge,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:c(be,{className:"action-btn",to:`/owner-property/${e==null?void 0:e.cell.value}`,type:"button",children:c(I,{icon:"heroicons:eye"})})})})}],m=b.exports.useMemo(()=>k,[]),r=b.exports.useMemo(()=>g),H=S.exports.useTable({columns:m,data:r,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>c("div",{children:c(U,{...a()})}),Cell:({row:a})=>c("div",{children:c(U,{...a.getToggleRowSelectedProps()})})},...l])}),{getTableProps:D,getTableBodyProps:F,headerGroups:R,footerGroups:A,page:T,nextPage:N,previousPage:_,canNextPage:C,canPreviousPage:y,pageOptions:$,state:P,gotoPage:L,pageCount:V,setPageSize:q,setGlobalFilter:J,prepareRow:W}=H,{globalFilter:K,pageIndex:B,pageSize:Q}=P,[Z,o]=b.exports.useState(0),[w,ee]=b.exports.useState(0),[le,ae]=b.exports.useState(0),[te,se]=b.exports.useState(0),[ce,ne]=b.exports.useState(0);b.exports.useEffect(()=>{(async()=>{var l,a;try{const s=g.map(u=>u._id).map(u=>fetch(`http://portals.rarehomesgroup.com/rentpurchase/api/search/?porpertyid=${u}&unlisted=false`).then(X=>X.json())),p=(await Promise.all(s)).flat(),i=new Map;p.forEach(u=>{i.has(u._id)||i.set(u._id,u)});const d=Array.from(i.values()),h=d.filter(u=>(u==null?void 0:u.propertystatus)==="Rent").length,v=d.filter(u=>(u==null?void 0:u.propertystatus)==="Sale").length,de=d.filter(u=>(u==null?void 0:u.propertystatus)==="Short Term").length;let M=0;for(let u=0;u<(d==null?void 0:d.length);u++){let X=parseFloat((l=d[u])!=null&&l.propertyvaluation?(a=d[u])==null?void 0:a.propertyvaluation:0);M+=X}const ue=g.map(u=>u._id),pe=d.map(u=>u.porpertyid),he=ue.filter(u=>!pe.includes(u)).length;o(h),ee(v),ae(de),se(he),ne(M)}catch(t){console.error("Error fetching data:",t)}})()},[g]);const z={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},G={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},O={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},ie=[{name:z,title:"Total no of Properties",count:g?g==null?void 0:g.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:G,title:"Property For Rent",count:Z,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:O,title:"Property For Sale",count:w,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:z,title:"Property For Short Term",count:le,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:G,title:"Vacant Property",count:te,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:O,title:"Total Property Revenue",count:ce,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return c(E,{children:f(Y,{children:[c("div",{className:"grid grid-cols-12 gap-5 mb-5",children:c("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:c(Y,{bodyClass:"p-4",children:c("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:c(ve,{statistics:ie})})})})}),f("div",{className:"flex justify-between items-center mb-6",children:[c("h4",{className:"card-title",children:x}),c(fe,{filter:K,setFilter:J})]}),c("div",{className:"overflow-x-auto -mx-6",children:c("div",{className:"inline-block min-w-full align-middle",children:c("div",{className:" ",children:f("table",{className:"min-w-[150%] overflow-x-scroll  divide-y divide-slate-100 table-fixed dark:divide-slate-700",...D,children:[c("thead",{className:"bg-slate-200 dark:bg-slate-700",children:R.map(e=>c("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>f("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),c("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),c("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...F,children:T.map(e=>(W(e),c("tr",{...e.getRowProps(),children:e.cells.map(l=>c("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),f("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[f("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[c("select",{className:"form-control py-2 w-max",value:Q,onChange:e=>q(Number(e.target.value)),children:[50,100,200].map(e=>f("option",{value:e,children:["Show ",e]},e))}),f("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",f("span",{children:[B+1," of ",$.length]})]})]}),f("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[c("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:c("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(0),disabled:!y,children:c(I,{icon:"heroicons:chevron-double-left-solid"})})}),c("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:c("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>_(),disabled:!y,children:"Prev"})}),$.map((e,l)=>c("li",{children:c("button",{href:"#","aria-current":"page",className:` ${l===B?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>L(l),children:e+1})},l)),c("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:c("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>N(),disabled:!C,children:"Next"})}),c("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:c("button",{onClick:()=>L(V-1),disabled:!C,className:` ${C?"":"opacity-50 cursor-not-allowed"}`,children:c(I,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Ce=()=>{const[x,g]=b.exports.useState([]),k=localStorage.getItem("isAuth"),m=JSON.parse(k),[r,H]=b.exports.useState(!1);return b.exports.useEffect(()=>{H(!0),(async()=>{try{const F=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${m==null?void 0:m._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,R=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${m==null?void 0:m._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,A=await fetch(F);if(!A.ok&&A.status!==400)throw new Error(`API 1 failed with status: ${A.status}`);const T=A.status===400?[]:await A.json(),N=await fetch(R);if(!N.ok&&N.status!==400)throw new Error(`API 2 failed with status: ${N.status}`);const _=N.status===400?[]:await N.json(),C=[...T,..._],y=new Map;C.forEach(P=>{y.has(P._id)||y.set(P._id,P)});const $=Array.from(y.values());g(C),H(!1)}catch(F){console.error("Error fetching data:",F),H(!1)}})()},[]),c(E,{children:c("div",{className:" space-y-5",children:r===!1?c(E,{children:x!=null&&x.length?c(xe,{pagelink:"/add-property",linktitle:"Add new Property",title:"All Property",allData:x}):"no propety found"}):c(me,{})})})};export{Ce as default};
