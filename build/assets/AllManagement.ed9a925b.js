import{R as _e,j as l,F as je,r as u,cj as yl,b as re,e as Ue,G as Cl,L as ve,I as T,ap as E,bM as kl,bP as Sl,bL as Ve,T as Ae,M as _l,bX as Al,cf as qe,bN as jl}from"./index.322e6ae4.js";import{G as Ml}from"./GlobalFilter.66891a4c.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\management-contract\\ManagementTable.jsx";const Pl=_e.forwardRef(({indeterminate:v,...x},f)=>{const m=_e.useRef(),j=f||m;return _e.useEffect(()=>{j.current.indeterminate=v},[j,v]),l(je,{children:l("input",{type:"checkbox",ref:j,...x,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:33,columnNumber:17},void 0)},void 0,!1)}),I={option:(v,x)=>({...v,fontSize:"14px"})},Tl=({showModal:v,handleClose:x,handleTerminateData:f,dataId:m})=>l("div",{className:"thumbnail-container",children:v&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Are You Sure you Want to Terminate this Property?"},void 0,!1,{fileName:a,lineNumber:60,columnNumber:29},void 0),l("img",{src:Sl,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:x},void 0,!1,{fileName:a,lineNumber:61,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:58,columnNumber:25},void 0),l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>f(m),children:"Terminate"},void 0,!1,{fileName:a,lineNumber:63,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:57,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:56,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:54,columnNumber:9},void 0),Hl=({allData:v,handleDataUpdate:x,dataRole:f,forFilterData:m,handleClearFilter:j,handleFilterSearch:L,ForLong:h,ForShort:k})=>{const[fe,H]=u.exports.useState(!1),[O,$]=u.exports.useState(!1),[pe,he]=u.exports.useState(""),[c,y]=u.exports.useState(""),[Me,ge]=u.exports.useState(!1),[Pe,B]=u.exports.useState(!1),[xe,X]=u.exports.useState(!1),[ye]=yl(),[t,C]=u.exports.useState(""),M=e=>{const{name:n,value:i}=e.target;C({...t,[n]:i})},[d,Ce]=u.exports.useState(!1),P=async e=>{H(!0),y(e)},S=()=>{H(!1)},Ge=async e=>{try{await ye({_id:e,softdelete:!0}),x(),H(!1)}catch(n){console.log(n,"error")}},[q,Ye]=u.exports.useState("All Contracts"),[ze,ke]=u.exports.useState([]),Te=[{value:"All Contracts",label:"All Contracts"},{value:"Short Term",label:"Short Term"},{value:"Long Term",label:"Long Term"}];u.exports.useEffect(()=>{q==="All Contracts"?ke(v):q==="Short Term"?ke(k):q==="Long Term"&&ke(h)},[q,v,h,k]);const Qe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:n})=>l("span",{children:n.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:146,columnNumber:24},void 0)},{Header:"Contract No.",accessor:e=>`${e._id}`,Cell:e=>{var s;const i=(((s=e==null?void 0:e.cell)==null?void 0:s.value)||"Not Available").match(/\d+/g);if(i){const o=i.join("").substring(0,6);return l("span",{children:"MC-"+o},void 0,!1,{fileName:a,lineNumber:159,columnNumber:28},void 0)}else return l("span",{children:"Not Available"},void 0,!1,{fileName:a,lineNumber:161,columnNumber:28},void 0)}},{Header:"Status",accessor:"minimum_managementfee",Cell:e=>{var n,i,s,N,o,r,g,b,p,_,U,V,G,Y,z,Q,J,W,K,Z,R,D,F,w,ee,le,ae,ne,ie,te,ce,se,me,ue,de,oe;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((s=(i=(n=e==null?void 0:e.cell)==null?void 0:n.row)==null?void 0:i.original)==null?void 0:s.propertyid)&&((r=(o=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:o.original)==null?void 0:r.contractperiod)&&((p=(b=(g=e==null?void 0:e.cell)==null?void 0:g.row)==null?void 0:b.original)==null?void 0:p.contractstartdate)&&((V=(U=(_=e==null?void 0:e.cell)==null?void 0:_.row)==null?void 0:U.original)==null?void 0:V.contractenddate)&&((z=(Y=(G=e==null?void 0:e.cell)==null?void 0:G.row)==null?void 0:Y.original)==null?void 0:z.managementfee)&&((W=(J=(Q=e==null?void 0:e.cell)==null?void 0:Q.row)==null?void 0:J.original)==null?void 0:W.minimum_managementfee)?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((R=(Z=(K=e==null?void 0:e.cell)==null?void 0:K.row)==null?void 0:Z.original)==null?void 0:R.propertyid)&&((w=(F=(D=e==null?void 0:e.cell)==null?void 0:D.row)==null?void 0:F.original)==null?void 0:w.contractperiod)&&((ae=(le=(ee=e==null?void 0:e.cell)==null?void 0:ee.row)==null?void 0:le.original)==null?void 0:ae.contractstartdate)&&((te=(ie=(ne=e==null?void 0:e.cell)==null?void 0:ne.row)==null?void 0:ie.original)==null?void 0:te.contractenddate)&&((me=(se=(ce=e==null?void 0:e.cell)==null?void 0:ce.row)==null?void 0:se.original)==null?void 0:me.managementfee)&&((oe=(de=(ue=e==null?void 0:e.cell)==null?void 0:ue.row)==null?void 0:de.original)==null?void 0:oe.minimum_managementfee)?"Completed":"Not Completed"},void 0,!1,{fileName:a,lineNumber:174,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:173,columnNumber:21},void 0)}},{Header:"Activity Status",accessor:e=>`${e.contractenddate}`,Cell:e=>{var n,i;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((n=e==null?void 0:e.cell)==null?void 0:n.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((i=e==null?void 0:e.cell)==null?void 0:i.value)>new Date?"Active":"Expired"},void 0,!1,{fileName:a,lineNumber:193,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:192,columnNumber:21},void 0)}},{Header:"contract continuation",accessor:e=>`${e.contractupdation}`,Cell:e=>{var n,i,s,N,o,r,g,b,p,_;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((n=e==null?void 0:e.cell)==null?void 0:n.value)==="renew"||((i=e==null?void 0:e.cell)==null?void 0:i.value)==="renewed"?"text-success-500 bg-success-500":""} 
                                ${((s=e==null?void 0:e.cell)==null?void 0:s.value)===""||((N=e==null?void 0:e.cell)==null?void 0:N.value)==="undefined"||((o=e==null?void 0:e.cell)==null?void 0:o.value)===void 0?"bg-info-500 text-info-500":""}  ${((r=e==null?void 0:e.cell)==null?void 0:r.value)==="terminated"?"text-danger-500 bg-danger-500":""} `,children:((g=e==null?void 0:e.cell)==null?void 0:g.value)===""||((b=e==null?void 0:e.cell)==null?void 0:b.value)==="undefined"||((p=e==null?void 0:e.cell)==null?void 0:p.value)===void 0?"Pending":(_=e==null?void 0:e.cell)==null?void 0:_.value},void 0,!1,{fileName:a,lineNumber:213,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:212,columnNumber:21},void 0)}},{Header:"contract period",accessor:"contractperiod",Cell:e=>{var n,i,s,N,o,r;return l("span",{children:((n=e==null?void 0:e.cell)==null?void 0:n.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!=="null"&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!==null&&((N=e==null?void 0:e.cell)==null?void 0:N.value)!=="undefined"&&((o=e==null?void 0:e.cell)==null?void 0:o.value)!==void 0?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:237,columnNumber:24},void 0)}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:244,columnNumber:24},void 0)}},{Header:"building name",accessor:"building_name",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:251,columnNumber:24},void 0)}},{Header:"project name",accessor:"project_name",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:258,columnNumber:24},void 0)}},{Header:"community name",accessor:"community_name",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:265,columnNumber:24},void 0)}},{Header:"Owner Email",accessor:"owner_email",Cell:e=>{var n,i;return l("span",{className:"normal-case",children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:272,columnNumber:24},void 0)}},{Header:"contract start date",accessor:"contractstartdate",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:279,columnNumber:24},void 0)}},{Header:"contract end date",accessor:"contractenddate",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:286,columnNumber:24},void 0)}},{Header:"commencement date",accessor:"commencement_date",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:293,columnNumber:24},void 0)}},{Header:"management fee",accessor:"managementfee",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?parseFloat((i=e==null?void 0:e.cell)==null?void 0:i.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:a,lineNumber:300,columnNumber:24},void 0)}},{Header:"fixed amount",accessor:"fixed_amount",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:a,lineNumber:307,columnNumber:24},void 0)}},{Header:"In-Terms Of Percentage Amount",accessor:"intermpercentage_amount",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?((i=e==null?void 0:e.cell)==null?void 0:i.value)+" AED":"Not Available"},void 0,!1,{fileName:a,lineNumber:314,columnNumber:24},void 0)}},{Header:"management contract doc",accessor:"management_contract",Cell:e=>{var n,i,s,N,o,r,g,b,p,_,U,V,G,Y,z,Q,J,W,K,Z,R,D,F,w,ee,le,ae,ne,ie,te,ce,se,me,ue,de,oe,Xe;return l("span",{className:"block w-full",children:((n=e==null?void 0:e.cell)==null?void 0:n.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!==null&&((N=e==null?void 0:e.cell)==null?void 0:N.value)!=="undefined"&&((o=e==null?void 0:e.cell)==null?void 0:o.value)!=="null"&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!==""?l("a",{href:`${((g=e==null?void 0:e.cell)==null?void 0:g.value)&&((b=e==null?void 0:e.cell)==null?void 0:b.value)!==void 0&&((p=e==null?void 0:e.cell)==null?void 0:p.value)!==null&&((_=e==null?void 0:e.cell)==null?void 0:_.value)!=="undefined"&&((U=e==null?void 0:e.cell)==null?void 0:U.value)!=="null"&&((V=e==null?void 0:e.cell)==null?void 0:V.value)!==""?(G=e==null?void 0:e.cell)==null?void 0:G.value:"#"}`,target:"_blank",className:`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((Y=e==null?void 0:e.cell)==null?void 0:Y.value)&&((z=e==null?void 0:e.cell)==null?void 0:z.value)!==void 0&&((Q=e==null?void 0:e.cell)==null?void 0:Q.value)!==null&&((J=e==null?void 0:e.cell)==null?void 0:J.value)!=="undefined"&&((W=e==null?void 0:e.cell)==null?void 0:W.value)!=="null"&&((K=e==null?void 0:e.cell)==null?void 0:K.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:((Z=e==null?void 0:e.cell)==null?void 0:Z.value)&&((R=e==null?void 0:e.cell)==null?void 0:R.value)!==void 0&&((D=e==null?void 0:e.cell)==null?void 0:D.value)!==null&&((F=e==null?void 0:e.cell)==null?void 0:F.value)!=="undefined"&&((w=e==null?void 0:e.cell)==null?void 0:w.value)!=="null"&&((ee=e==null?void 0:e.cell)==null?void 0:ee.value)!==""?"View":"Not Available"},void 0,!1,{fileName:a,lineNumber:325,columnNumber:33},void 0):l("p",{className:`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((le=e==null?void 0:e.cell)==null?void 0:le.value)&&((ae=e==null?void 0:e.cell)==null?void 0:ae.value)!==void 0&&((ne=e==null?void 0:e.cell)==null?void 0:ne.value)!==null&&((ie=e==null?void 0:e.cell)==null?void 0:ie.value)!=="undefined"&&((te=e==null?void 0:e.cell)==null?void 0:te.value)!=="null"&&((ce=e==null?void 0:e.cell)==null?void 0:ce.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:((se=e==null?void 0:e.cell)==null?void 0:se.value)&&((me=e==null?void 0:e.cell)==null?void 0:me.value)!==void 0&&((ue=e==null?void 0:e.cell)==null?void 0:ue.value)!==null&&((de=e==null?void 0:e.cell)==null?void 0:de.value)!=="undefined"&&((oe=e==null?void 0:e.cell)==null?void 0:oe.value)!=="null"&&((Xe=e==null?void 0:e.cell)==null?void 0:Xe.value)!==""?"View":"Not Available"},void 0,!1,{fileName:a,lineNumber:335,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:322,columnNumber:21},void 0)}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:e=>{var n,i;return l("span",{className:"normal-case",children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:353,columnNumber:24},void 0)}},{Header:"created-on",accessor:"Created_At",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:360,columnNumber:24},void 0)}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:e=>{var n,i;return l("span",{className:"normal-case",children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:367,columnNumber:24},void 0)}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var n,i;return l("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:374,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const n=localStorage.getItem("isAuth"),i=JSON.parse(n),{data:s}=Ve(i==null?void 0:i.roleid);if(!s)return null;const N=(s==null?void 0:s.readmanagement)===!0,o=(s==null?void 0:s.updatemanagement)===!0,r=(s==null?void 0:s.deletemanagement)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[N&&l(Ae,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(ve,{className:"action-btn",to:`/view-managementcontract/${e==null?void 0:e.cell.value}`,type:"button",children:l(T,{icon:"heroicons:eye"},void 0,!1,{fileName:a,lineNumber:401,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:400,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:399,columnNumber:33},void 0),o&&l(Ae,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(ve,{to:`/update-managementcontract/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(T,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:a,lineNumber:410,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:409,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:408,columnNumber:33},void 0),r&&l(Ae,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>P(e==null?void 0:e.cell.value),children:l(T,{icon:"heroicons:trash"},void 0,!1,{fileName:a,lineNumber:425,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:424,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:417,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:396,columnNumber:21},void 0)}}],Je=u.exports.useMemo(()=>Qe,[]),We=u.exports.useMemo(()=>ze),Ke=re.exports.useTable({columns:Je,data:We,initialState:{pageIndex:0,pageSize:50}},re.exports.useGlobalFilter,re.exports.useSortBy,re.exports.usePagination,re.exports.useRowSelect,e=>{e.visibleColumns.push(n=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:i})=>l("div",{children:l(Pl,{...i()},void 0,!1,{fileName:a,lineNumber:456,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:455,columnNumber:25},void 0),Cell:({row:i})=>{var g;const[s,N]=u.exports.useState(""),o=b=>{b!=null&&b._id?B(!0):B(!1),N(p=>p===b?"":b),y(p=>p===b?"":b)},r=((g=i==null?void 0:i.original)==null?void 0:g._id)===(s==null?void 0:s._id);return u.exports.useEffect(()=>{ge(r)},[r]),l("div",{children:l("input",{type:"checkbox",...i.getToggleRowSelectedProps(),checked:r,onChange:()=>o(i.original),className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:489,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:487,columnNumber:29},void 0)}},...n])}),{getTableProps:Ze,getTableBodyProps:Re,headerGroups:De,footerGroups:Ol,page:Fe,nextPage:we,previousPage:el,canNextPage:Ne,canPreviousPage:be,pageOptions:He,state:ll,gotoPage:Se,pageCount:al,setPageSize:nl,setGlobalFilter:il,prepareRow:tl}=Ke,{globalFilter:cl,pageIndex:Oe,pageSize:sl}=ll,ml=m==null?void 0:m.filter(e=>e.unitnumber!==void 0),$e=[...new Set(ml.map(e=>e.unitnumber))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),ul=m==null?void 0:m.filter(e=>e.community_name!==void 0),Be=[...[...new Set(ul.map(e=>e.communityid))].map(e=>{const n=m.find(i=>i.communityid===e);return n?{label:n.community_name,value:n.communityid}:null}).filter(Boolean)].sort((e,n)=>e.label.localeCompare(n.label)),dl=m==null?void 0:m.filter(e=>e.project_name!==void 0),Ee=[...[...new Set(dl.map(e=>e.projectnameid))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"})).map(e=>{const n=m.find(i=>i.projectnameid===e);return n?{label:n.project_name,value:n.projectnameid}:null}).filter(Boolean)].sort((e,n)=>e.label.localeCompare(n.label)),ol=m==null?void 0:m.filter(e=>e.building_name!==void 0),Ie=[...[...new Set(ol.map(e=>e.buildingid))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"})).map(e=>{const n=m.find(i=>i.buildingid===e);return n?{label:n.building_name,value:n.buildingid}:null}).filter(Boolean)].sort((e,n)=>e.label.localeCompare(n.label)),rl=m==null?void 0:m.filter(e=>e.owner_name!==void 0),Le=[...[...new Set(rl.map(e=>e.owner_id))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"})).map(e=>{const n=m.find(i=>i.owner_id===e);return n?{label:n.owner_name,value:n.owner_id}:null}).filter(Boolean)].sort((e,n)=>e.label.localeCompare(n.label)),Nl=()=>{j(),C("")},bl=()=>{X(!0)},vl=()=>{X(!1)},fl=async e=>{try{await _l.patch("http://dev-rare.srp.ai/managementcontract/api/managementcontractdelete",{_id:e,contractupdation:"terminated"}),X(!1),x()}catch(n){console.log(n,"error")}},pl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},hl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},gl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},xl=[{name:pl,title:"Total Management Contract",count:v?v==null?void 0:v.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:hl,title:"Management Contract for Long Term",count:h?h==null?void 0:h.length:0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:gl,title:"Management Contract for Short Term",count:k?k==null?void 0:k.length:0,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return l(je,{children:[l("div",{className:"grid grid-cols-12 gap-5 mb-5",children:l("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:l(Ue,{bodyClass:"p-4",children:l("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 col-span-1 gap-4",children:l(Cl,{statistics:xl},void 0,!1,{fileName:a,lineNumber:873,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:872,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:871,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:870,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:869,columnNumber:13},void 0),l("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:[c&&(c==null?void 0:c._id)&&(c==null?void 0:c.propertyid)&&(c==null?void 0:c.contractupdation)!=="terminated"&&(c==null?void 0:c.contractupdation)!=="renew"?l(ve,{to:`/add-managementcontract?propertyid=${c==null?void 0:c.propertyid}&renew=renewed`,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Renew contract"},void 0,!1,{fileName:a,lineNumber:881,columnNumber:25},void 0):null,c&&(c==null?void 0:c._id)&&(c==null?void 0:c.propertyid)&&(c==null?void 0:c.contractupdation)!=="renew"&&(c==null?void 0:c.contractupdation)!=="terminated"?l("button",{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",onClick:bl,children:"Terminate contract"},void 0,!1,{fileName:a,lineNumber:885,columnNumber:25},void 0):null,l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>Ce(!d),children:[d===!0?l(T,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:891,columnNumber:29},void 0):l(T,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:a,lineNumber:892,columnNumber:29},void 0),l("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"},void 0,!1,{fileName:a,lineNumber:894,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:887,columnNumber:17},void 0),l("div",{className:"w-[180px]",children:l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Te,value:Te.filter(function(e){return e.value===q}),onChange:e=>{Ye(e==null?void 0:e.value)},styles:I,id:"hh"},void 0,!1,{fileName:a,lineNumber:897,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:896,columnNumber:17},void 0),l(Ml,{filter:cl,setFilter:il},void 0,!1,{fileName:a,lineNumber:912,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:878,columnNumber:13},void 0),l(Tl,{showModal:xe,handleClose:vl,handleTerminateData:fl,dataId:c},void 0,!1,{fileName:a,lineNumber:914,columnNumber:13},void 0),l("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${d===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Unit No."},void 0,!1,{fileName:a,lineNumber:917,columnNumber:21},void 0),l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$e,value:$e.filter(function(e){if((t==null?void 0:t.unitnumber)!=="")return e.value===(t==null?void 0:t.unitnumber)}),onChange:e=>{M({target:{name:"unitnumber",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:920,columnNumber:21},void 0),t!=null&&t.unitnumber?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...t,unitnumber:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:939,columnNumber:29},void 0):null]},void 0,!0,{fileName:a,lineNumber:916,columnNumber:17},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Community Name"},void 0,!1,{fileName:a,lineNumber:945,columnNumber:21},void 0),l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Be,value:Be.filter(function(e){if((t==null?void 0:t.communityid)!=="")return e.value===(t==null?void 0:t.communityid)}),onChange:e=>{M({target:{name:"communityid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:948,columnNumber:21},void 0),t!=null&&t.communityid?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...t,communityid:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:967,columnNumber:29},void 0):null]},void 0,!0,{fileName:a,lineNumber:944,columnNumber:17},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Project Name"},void 0,!1,{fileName:a,lineNumber:973,columnNumber:21},void 0),l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Ee,value:Ee.filter(function(e){if((t==null?void 0:t.projectnameid)!=="")return e.value===(t==null?void 0:t.projectnameid)}),onChange:e=>{M({target:{name:"projectnameid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:976,columnNumber:21},void 0),t!=null&&t.projectnameid?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...t,projectnameid:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:995,columnNumber:29},void 0):null]},void 0,!0,{fileName:a,lineNumber:972,columnNumber:17},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Building Name"},void 0,!1,{fileName:a,lineNumber:1001,columnNumber:21},void 0),l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Ie,value:Ie.filter(function(e){if((t==null?void 0:t.buildingid)!=="")return e.value===(t==null?void 0:t.buildingid)}),onChange:e=>{M({target:{name:"buildingid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:1004,columnNumber:21},void 0),t!=null&&t.buildingid?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...t,buildingid:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:1023,columnNumber:29},void 0):null]},void 0,!0,{fileName:a,lineNumber:1e3,columnNumber:17},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Owner Name"},void 0,!1,{fileName:a,lineNumber:1029,columnNumber:21},void 0),l(E,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Le,value:Le.filter(function(e){if((t==null?void 0:t.owner_id)!=="")return e.value===(t==null?void 0:t.owner_id)}),onChange:e=>{M({target:{name:"owner_id",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:a,lineNumber:1032,columnNumber:21},void 0),t!=null&&t.owner_id?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...t,owner_id:""}),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:1051,columnNumber:29},void 0):null]},void 0,!0,{fileName:a,lineNumber:1028,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:915,columnNumber:13},void 0),l("div",{className:`flex ${d===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[l("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>Nl(),children:"Clear filter"},void 0,!1,{fileName:a,lineNumber:1058,columnNumber:17},void 0),l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>L(t),children:"Search"},void 0,!1,{fileName:a,lineNumber:1059,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:1057,columnNumber:13},void 0),l(kl,{showModal:fe,handleClose:S,loaderModal:O,linkedData:pe,handleDeleteData:Ge,dataId:c,moduleName:"Management Contract"},void 0,!1,{fileName:a,lineNumber:1061,columnNumber:13},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Ze,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:De.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(n=>n.Header==="action"&&!((f==null?void 0:f.readmanagement)===!0||(f==null?void 0:f.updatemanagement)===!0||(f==null?void 0:f.deletemanagement)===!0)?l("th",{},void 0,!1,{fileName:a,lineNumber:1078,columnNumber:56},void 0):l("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),l("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:1088,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:1082,columnNumber:49},void 0))},void 0,!1,{fileName:a,lineNumber:1071,columnNumber:37},void 0))},void 0,!1,{fileName:a,lineNumber:1069,columnNumber:29},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Re,children:Fe.map(e=>(tl(e),l("tr",{...e.getRowProps(),children:e.cells.map(n=>l("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")},void 0,!1,{fileName:a,lineNumber:1107,columnNumber:53},void 0))},void 0,!1,{fileName:a,lineNumber:1104,columnNumber:41},void 0)))},void 0,!1,{fileName:a,lineNumber:1097,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:1065,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:1064,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:1063,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:1062,columnNumber:13},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:sl,onChange:e=>nl(Number(e.target.value)),children:[10,25,50].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:a,lineNumber:1128,columnNumber:29},void 0))},void 0,!1,{fileName:a,lineNumber:1122,columnNumber:21},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[Oe+1," of ",He.length]},void 0,!0,{fileName:a,lineNumber:1135,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:1133,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:1121,columnNumber:17},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${be?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Se(0),disabled:!be,children:l(T,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:a,lineNumber:1148,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:1142,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:1141,columnNumber:21},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${be?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>el(),disabled:!be,children:"Prev"},void 0,!1,{fileName:a,lineNumber:1152,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:1151,columnNumber:21},void 0),He.map((e,n)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${n===Oe?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>Se(n),children:e+1},void 0,!1,{fileName:a,lineNumber:1163,columnNumber:29},void 0)},n,!1,{fileName:a,lineNumber:1162,columnNumber:25},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${Ne?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>we(),disabled:!Ne,children:"Next"},void 0,!1,{fileName:a,lineNumber:1177,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:1176,columnNumber:21},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>Se(al-1),disabled:!Ne,className:` ${Ne?"":"opacity-50 cursor-not-allowed"}`,children:l(T,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:a,lineNumber:1193,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:1187,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:1186,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:1140,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:1120,columnNumber:13},void 0)]},void 0,!0)};var A="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\management-contract\\AllManagement.jsx";const zl=()=>{const[v,x]=u.exports.useState(!1),[f,m]=u.exports.useState(!1),j=localStorage.getItem("isAuth"),L=JSON.parse(j),{data:h}=Ve(L==null?void 0:L.roleid),[k,fe]=u.exports.useState(""),[H,O]=u.exports.useState(""),[$,pe]=u.exports.useState(""),[he,c]=u.exports.useState(!1),{data:y,error:Me,isLoading:ge,isFetching:Pe,isSuccess:B,refetch:xe}=Al(),{data:X}=qe("api/propertydelete?contractperiod=Short Term"),{data:ye}=qe("api/propertydelete?contractperiod=Long Term"),t=async()=>{x(!0);try{c(!0),await xe(),c(!1)}catch{m(!0)}x(!1)};u.exports.useEffect(()=>{B&&y&&(O(y),pe(y),fe(y))},[y,B]);function C(d){if(d){const Ce=H.filter(P=>{c(!0);let S=!0;return d.buildingid&&P.buildingid!==d.buildingid&&(S=!1),d.communityid&&P.communityid!==d.communityid&&(S=!1),d.projectnameid&&P.projectnameid!==d.projectnameid&&(S=!1),d.unitnumber&&P.unitnumber!==d.unitnumber&&(S=!1),d.owner_id&&P.owner_id!==d.owner_id&&(S=!1),S});O(Ce),c(!1)}else O($)}const M=async()=>{c(!0),O($),c(!1)};return l(je,{children:l("div",{className:" space-y-5",children:l(Ue,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"All Management Contract"},void 0,!1,{fileName:A,lineNumber:96,columnNumber:25},void 0),(h==null?void 0:h.createmanagement)===!0&&l(ve,{to:"/add-managementcontract",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Management Contract"},void 0,!1,{fileName:A,lineNumber:99,columnNumber:33},void 0)]},void 0,!0,{fileName:A,lineNumber:95,columnNumber:21},void 0),(ge||Pe&&v)&&he===!0&&l(jl,{},void 0,!1,{fileName:A,lineNumber:103,columnNumber:96},void 0),Me||f&&l("p",{children:"No Management Contract found"},void 0,!1,{fileName:A,lineNumber:104,columnNumber:48},void 0),B&&y&&($==null?void 0:$.length)&&he===!1&&l(Hl,{allData:H,handleDataUpdate:t,dataRole:h,ForShort:X,ForLong:ye,handleFilterSearch:C,handleClearFilter:M,forFilterData:k},void 0,!1,{fileName:A,lineNumber:106,columnNumber:25},void 0)]},void 0,!0,{fileName:A,lineNumber:94,columnNumber:17},void 0)},void 0,!1,{fileName:A,lineNumber:93,columnNumber:13},void 0)},void 0,!1)};export{zl as default};
