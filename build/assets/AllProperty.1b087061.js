import{R as L,j as i,F as S,r,b as P,e as M,G as Ne,I as D,T as fe,L as re,bN as pe}from"./index.f75f4411.js";import{G as oe}from"./GlobalFilter.0c54b380.js";import"./index.esm.32a2b8bf.js";var s="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\PropertyTable.jsx";const U=L.forwardRef(({indeterminate:o,...f},A)=>{const p=L.useRef(),g=A||p;return L.useEffect(()=>{g.current.indeterminate=o},[g,o]),i(S,{children:i("input",{type:"checkbox",ref:g,...f,className:"table-checkbox"},void 0,!1,{fileName:s,lineNumber:28,columnNumber:17},void 0)},void 0,!1)}),he=({title:o,allData:f})=>{const A=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>i("span",{children:l.indexOf(e)+1},void 0,!1,{fileName:s,lineNumber:46,columnNumber:24},void 0)},{Header:"Unit Number",accessor:"unitnumber",Cell:e=>{var l,a,t;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((t=e==null?void 0:e.cell)==null?void 0:t.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:53,columnNumber:24},void 0)}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{var l,a,t,n;return i("div",{children:i("span",{className:"inline-flex items-center",children:i("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((n=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:n.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:63,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:62,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:61,columnNumber:21},void 0)}},{Header:"Owner Representative",accessor:"owner_representative_name",Cell:e=>{var l,a,t,n;return i("div",{children:i("span",{className:"inline-flex items-center",children:i("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((n=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:n.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:78,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:77,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:76,columnNumber:21},void 0)}},{Header:"Project Name",accessor:"project_name",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:90,columnNumber:24},void 0)}},{Header:"developer name",accessor:"developer_name",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:97,columnNumber:24},void 0)}},{Header:"building name",accessor:"building_name",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:104,columnNumber:24},void 0)}},{Header:"community name",accessor:"community_name",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:111,columnNumber:24},void 0)}},{Header:"sub type name",accessor:"subtype_name",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:118,columnNumber:24},void 0)}},{Header:"usage",accessor:"usage",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:125,columnNumber:24},void 0)}},{Header:"size area",accessor:"sizearea",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:132,columnNumber:24},void 0)}},{Header:"plot size",accessor:"plotsize",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:139,columnNumber:24},void 0)}},{Header:"build up area",accessor:"builduparea",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:146,columnNumber:24},void 0)}},{Header:"owner association",accessor:"ownerassociation",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:153,columnNumber:24},void 0)}},{Header:"no bathroom",accessor:"nobathroom",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:160,columnNumber:24},void 0)}},{Header:"half bathroom",accessor:"halfbathroom",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:167,columnNumber:24},void 0)}},{Header:"furnished",accessor:"furnished",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:174,columnNumber:24},void 0)}},{Header:"kitchen",accessor:"kitchen",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:181,columnNumber:24},void 0)}},{Header:"no parking",accessor:"noparking",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:188,columnNumber:24},void 0)}},{Header:"balcony",accessor:"balcony",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:195,columnNumber:24},void 0)}},{Header:"dewa premises",accessor:"dewapremises",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:202,columnNumber:24},void 0)}},{Header:"district",accessor:"district",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:209,columnNumber:24},void 0)}},{Header:"parking bay",accessor:"parkingbay",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:216,columnNumber:24},void 0)}},{Header:"property view",accessor:"propertyview",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:223,columnNumber:24},void 0)}},{Header:"purchasedate",accessor:"purchasedate",Cell:e=>{var l,a;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"},void 0,!1,{fileName:s,lineNumber:230,columnNumber:24},void 0)}},{Header:"Total no of OWNER NAME DEED",accessor:"no_ownernamedeed",Cell:e=>{var l,a;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"},void 0,!1,{fileName:s,lineNumber:237,columnNumber:24},void 0)}},{Header:"purchasevaue",accessor:"purchasevaue",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:244,columnNumber:24},void 0)}},{Header:"Title Deed Document",accessor:"titledeeddocument",Cell:e=>{var l,a,t,n;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!==""?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:253,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:252,columnNumber:21},void 0)}},{Header:"total bathroom",accessor:"totalbathroom",Cell:e=>{var l,a,t,n,c,v,u;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==void 0&&((t=e==null?void 0:e.cell)==null?void 0:t.value)!=="undefined"?((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.slice(0,15))+(((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:270,columnNumber:24},void 0)}},{Header:"total bedroom",accessor:"totalbedroom",Cell:e=>{var l,a,t,n,c,v,u;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==void 0&&((t=e==null?void 0:e.cell)==null?void 0:t.value)!=="undefined"?((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.slice(0,15))+(((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:277,columnNumber:24},void 0)}},{Header:"street number",accessor:"streetnumber",Cell:e=>{var l,a,t,n,c;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((t=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:t.slice(0,15))+(((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:284,columnNumber:24},void 0)}},{Header:"maid room",accessor:"maidroom",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:291,columnNumber:24},void 0)}},{Header:"store room",accessor:"storeroom",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:298,columnNumber:24},void 0)}},{Header:"bed room en suite",accessor:"bedroomensuite",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:305,columnNumber:24},void 0)}},{Header:"bath room en suite",accessor:"bathroomensuite",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:312,columnNumber:24},void 0)}},{Header:"driver room",accessor:"driverroom",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:319,columnNumber:24},void 0)}},{Header:"other room",accessor:"otherroom",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:326,columnNumber:24},void 0)}},{Header:"en suite",accessor:"ensuite",Cell:e=>{var l;return i("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"Available":"Not Available"},void 0,!1,{fileName:s,lineNumber:333,columnNumber:24},void 0)}},{Header:"property images",accessor:"propertyimages",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:342,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:341,columnNumber:21},void 0)}},{Header:"floor plan images",accessor:"floorplan",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:363,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:362,columnNumber:21},void 0)}},{Header:"typical floor plan images",accessor:"typicalfloorplan",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:384,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:383,columnNumber:21},void 0)}},{Header:"building elevation images",accessor:"buildingelevation",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:405,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:404,columnNumber:21},void 0)}},{Header:"amenities images",accessor:"amenitiesimages",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:426,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:425,columnNumber:21},void 0)}},{Header:"unit plan attachment",accessor:"unitplanattachment",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:447,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:446,columnNumber:21},void 0)}},{Header:"plot plan attachment",accessor:"plotplanattachment",Cell:e=>{var l,a,t,n,c,v,u,d,b,N;return i("span",{className:"block w-full",children:i("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:a.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((c=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:c.length)>0&&((u=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(N=(b=e==null?void 0:e.cell)==null?void 0:b.value)==null?void 0:N.length},void 0,!1,{fileName:s,lineNumber:468,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:467,columnNumber:21},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var l,a;return i("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"},void 0,!1,{fileName:s,lineNumber:487,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>i("div",{className:"flex space-x-3 rtl:space-x-reverse",children:i(fe,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:i(re,{className:"action-btn",to:`/owner-property/${e==null?void 0:e.cell.value}`,type:"button",children:i(D,{icon:"heroicons:eye"},void 0,!1,{fileName:s,lineNumber:498,columnNumber:33},void 0)},void 0,!1,{fileName:s,lineNumber:497,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:496,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:495,columnNumber:21},void 0)}],p=r.exports.useMemo(()=>A,[]),g=r.exports.useMemo(()=>f),k=P.exports.useTable({columns:p,data:g,initialState:{pageIndex:0,pageSize:50}},P.exports.useGlobalFilter,P.exports.useSortBy,P.exports.usePagination,P.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>i("div",{children:i(U,{...a()},void 0,!1,{fileName:s,lineNumber:528,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:527,columnNumber:25},void 0),Cell:({row:a})=>i("div",{children:i(U,{...a.getToggleRowSelectedProps()},void 0,!1,{fileName:s,lineNumber:533,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:532,columnNumber:25},void 0)},...l])}),{getTableProps:I,getTableBodyProps:H,headerGroups:E,footerGroups:C,page:_,nextPage:x,previousPage:R,canNextPage:y,canPreviousPage:h,pageOptions:T,state:F,gotoPage:$,pageCount:Y,setPageSize:q,setGlobalFilter:J,prepareRow:W}=k,{globalFilter:K,pageIndex:O,pageSize:Q}=F,[Z,w]=r.exports.useState(0),[ee,le]=r.exports.useState(0),[ae,ie]=r.exports.useState(0),[te,se]=r.exports.useState(0),[ne,ce]=r.exports.useState(0);r.exports.useEffect(()=>{(async()=>{var l,a;try{const n=f.map(m=>m._id).map(m=>fetch(`http://dev-rare.srp.ai/rentpurchase/api/search/?porpertyid=${m}&unlisted=false`).then(j=>j.json())),v=(await Promise.all(n)).flat(),u=new Map;v.forEach(m=>{u.has(m._id)||u.set(m._id,m)});const d=Array.from(u.values()),b=d.filter(m=>(m==null?void 0:m.propertystatus)==="Rent").length,N=d.filter(m=>(m==null?void 0:m.propertystatus)==="Sale").length,de=d.filter(m=>(m==null?void 0:m.propertystatus)==="Short Term").length;let V=0;for(let m=0;m<(d==null?void 0:d.length);m++){let j=parseFloat((l=d[m])!=null&&l.propertyvaluation?(a=d[m])==null?void 0:a.propertyvaluation:0);V+=j}const me=f.map(m=>m._id),ve=d.map(m=>m.porpertyid),be=me.filter(m=>!ve.includes(m)).length;w(b),le(N),ie(de),se(be),ce(V)}catch(t){console.error("Error fetching data:",t)}})()},[f]);const B={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},z={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},G={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},ue=[{name:B,title:"Total no of Properties",count:f?f==null?void 0:f.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:z,title:"Property For Rent",count:Z,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:G,title:"Property For Sale",count:ee,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:B,title:"Property For Short Term",count:ae,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:z,title:"Vacant Property",count:te,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:G,title:"Total Property Revenue",count:ne,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return i(S,{children:i(M,{children:[i("div",{className:"grid grid-cols-12 gap-5 mb-5",children:i("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:i(M,{bodyClass:"p-4",children:i("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:i(Ne,{statistics:ue},void 0,!1,{fileName:s,lineNumber:962,columnNumber:33},void 0)},void 0,!1,{fileName:s,lineNumber:961,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:960,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:959,columnNumber:21},void 0)},void 0,!1,{fileName:s,lineNumber:958,columnNumber:17},void 0),i("div",{className:"flex justify-between items-center mb-6",children:[i("h4",{className:"card-title",children:o},void 0,!1,{fileName:s,lineNumber:968,columnNumber:21},void 0),i(oe,{filter:K,setFilter:J},void 0,!1,{fileName:s,lineNumber:970,columnNumber:21},void 0)]},void 0,!0,{fileName:s,lineNumber:967,columnNumber:17},void 0),i("div",{className:"overflow-x-auto -mx-6",children:i("div",{className:"inline-block min-w-full align-middle",children:i("div",{className:" ",children:i("table",{className:"min-w-[150%] overflow-x-scroll  divide-y divide-slate-100 table-fixed dark:divide-slate-700",...I,children:[i("thead",{className:"bg-slate-200 dark:bg-slate-700",children:E.map(e=>i("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>i("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),i("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:s,lineNumber:992,columnNumber:53},void 0)]},void 0,!0,{fileName:s,lineNumber:984,columnNumber:49},void 0))},void 0,!1,{fileName:s,lineNumber:982,columnNumber:41},void 0))},void 0,!1,{fileName:s,lineNumber:980,columnNumber:33},void 0),i("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...H,children:_.map(e=>(W(e),i("tr",{...e.getRowProps(),children:e.cells.map(l=>i("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")},void 0,!1,{fileName:s,lineNumber:1014,columnNumber:57},void 0))},void 0,!1,{fileName:s,lineNumber:1011,columnNumber:45},void 0)))},void 0,!1,{fileName:s,lineNumber:1004,columnNumber:33},void 0)]},void 0,!0,{fileName:s,lineNumber:976,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:975,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:974,columnNumber:21},void 0)},void 0,!1,{fileName:s,lineNumber:973,columnNumber:17},void 0),i("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[i("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[i("select",{className:"form-control py-2 w-max",value:Q,onChange:e=>q(Number(e.target.value)),children:[50,100,200].map(e=>i("option",{value:e,children:["Show ",e]},e,!0,{fileName:s,lineNumber:1049,columnNumber:33},void 0))},void 0,!1,{fileName:s,lineNumber:1043,columnNumber:25},void 0),i("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",i("span",{children:[O+1," of ",T.length]},void 0,!0,{fileName:s,lineNumber:1056,columnNumber:29},void 0)]},void 0,!0,{fileName:s,lineNumber:1054,columnNumber:25},void 0)]},void 0,!0,{fileName:s,lineNumber:1042,columnNumber:21},void 0),i("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[i("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:i("button",{className:` ${h?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>$(0),disabled:!h,children:i(D,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:s,lineNumber:1069,columnNumber:33},void 0)},void 0,!1,{fileName:s,lineNumber:1063,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:1062,columnNumber:25},void 0),i("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:i("button",{className:` ${h?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>R(),disabled:!h,children:"Prev"},void 0,!1,{fileName:s,lineNumber:1073,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:1072,columnNumber:25},void 0),T.map((e,l)=>i("li",{children:i("button",{href:"#","aria-current":"page",className:` ${l===O?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>$(l),children:e+1},void 0,!1,{fileName:s,lineNumber:1084,columnNumber:33},void 0)},l,!1,{fileName:s,lineNumber:1083,columnNumber:29},void 0)),i("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:i("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>x(),disabled:!y,children:"Next"},void 0,!1,{fileName:s,lineNumber:1098,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:1097,columnNumber:25},void 0),i("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:i("button",{onClick:()=>$(Y-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:i(D,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:s,lineNumber:1114,columnNumber:33},void 0)},void 0,!1,{fileName:s,lineNumber:1108,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:1107,columnNumber:25},void 0)]},void 0,!0,{fileName:s,lineNumber:1061,columnNumber:21},void 0)]},void 0,!0,{fileName:s,lineNumber:1041,columnNumber:17},void 0)]},void 0,!0,{fileName:s,lineNumber:957,columnNumber:13},void 0)},void 0,!1)};var X="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\AllProperty.jsx";const Ce=()=>{const[o,f]=r.exports.useState([]),A=localStorage.getItem("isAuth"),p=JSON.parse(A),[g,k]=r.exports.useState(!1);return r.exports.useEffect(()=>{k(!0),(async()=>{try{const H=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${p==null?void 0:p._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,E=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${p==null?void 0:p._id}&softdelete=false&sort=descending&type=customer&page=0&perPage=all`,C=await fetch(H);if(!C.ok&&C.status!==400)throw new Error(`API 1 failed with status: ${C.status}`);const _=C.status===400?[]:await C.json(),x=await fetch(E);if(!x.ok&&x.status!==400)throw new Error(`API 2 failed with status: ${x.status}`);const R=x.status===400?[]:await x.json(),y=[..._,...R],h=new Map;y.forEach(F=>{h.has(F._id)||h.set(F._id,F)});const T=Array.from(h.values());f(y),k(!1)}catch(H){console.error("Error fetching data:",H),k(!1)}})()},[]),i(S,{children:i("div",{className:" space-y-5",children:g===!1?i(S,{children:o!=null&&o.length?i(he,{pagelink:"/add-property",linktitle:"Add new Property",title:"All Property",allData:o},void 0,!1,{fileName:X,lineNumber:77,columnNumber:37},void 0):"no propety found"},void 0,!1):i(pe,{},void 0,!1,{fileName:X,lineNumber:80,columnNumber:31},void 0)},void 0,!1,{fileName:X,lineNumber:71,columnNumber:13},void 0)},void 0,!1)};export{Ce as default};