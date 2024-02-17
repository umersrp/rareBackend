import{R as De,j as a,F as I,r as p,b as ae,c as E,I as J,aq as V,bM as Qe,bP as Xe,K as _e,bL as Me,T as Ye,L as Ve,cd as We,C as Ke,bN as Be}from"./index.75075c2e.js";import{D as ve}from"./index.esm.2ee8ef48.js";import{G as ze}from"./GlobalFilter.472d6507.js";const Je=De.forwardRef(({indeterminate:b,..._},A)=>{const g=De.useRef(),G=A||g;return De.useEffect(()=>{G.current.indeterminate=b},[G,b]),a(I,{children:a("input",{type:"checkbox",ref:G,..._,className:"table-checkbox"})})}),Z={option:(b,_)=>({...b,fontSize:"14px"})},Ze=({showModal:b,handleClose:_,handleTerminateData:A,dataId:g})=>a("div",{className:"thumbnail-container",children:b&&a("div",{className:"modal-overlay-property",children:E("div",{className:"modal-new w-[850px]",children:[E("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[a("h5",{className:" text-[18px] capitalize",children:"Are You Sure you Want to Terminate this Property?"}),a("img",{src:Xe,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:_})]}),a("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>A(g),children:"Terminate"})]})})}),we=({allData:b,onDataUpdate:_,dataRole:A,forFilterData:g,handleClearFilter:G,handleFilterSearch:oe,valueEXECUTION:te,valuecontractstart:Ae,valuecontractenddate:Te,removeAllDateFilter:le,dateFilterActive:v})=>{const[ne,Se]=p.exports.useState(!1),[$,x]=p.exports.useState(!1),[L,Oe]=p.exports.useState(""),[Q,ye]=p.exports.useState(""),[W,B]=p.exports.useState(!1),[ie,se]=p.exports.useState(!1),[Ie,de]=p.exports.useState(!1),[l,O]=p.exports.useState(""),T=e=>{const{name:t,value:s}=e.target;O({...l,[t]:s})},[j,M]=p.exports.useState(!1),K=()=>{Se(!1)},ue=async e=>{try{await _e.patch("http://dev-rare.srp.ai/tenantcontract/api/tenantcontractdelete",{_id:e,softdelete:!0}),_()}catch(t){console.log(t,"error")}},z=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>a("span",{children:t.indexOf(e)+1})},{Header:"contract execution date",accessor:"contractexecutiondate",Cell:e=>{var t,s,r,i;return a("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!==void 0&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!=="undefined"?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"contract start date",accessor:"contractstartdate",Cell:e=>{var t,s,r,i;return a("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!=="undefined"&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!==void 0?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"contract end date",accessor:"contractenddate",Cell:e=>{var t,s,r,i;return a("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((s=e==null?void 0:e.cell)==null?void 0:s.value)!=="undefined"&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!==void 0?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"CONTRACT TYPE (NEW CONTRACT/RENEWAL)",accessor:e=>`${e.contractupdation}`,Cell:e=>{var t,s,r,i,f,m,N,o,C,S;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 uppercase ${((t=e==null?void 0:e.cell)==null?void 0:t.value)==="renew"||((s=e==null?void 0:e.cell)==null?void 0:s.value)==="renewed"?"text-success-500 bg-success-500":""} 
                                ${((r=e==null?void 0:e.cell)==null?void 0:r.value)===""||((i=e==null?void 0:e.cell)==null?void 0:i.value)==="undefined"||((f=e==null?void 0:e.cell)==null?void 0:f.value)===void 0?"bg-info-500 text-info-500":""}  ${((m=e==null?void 0:e.cell)==null?void 0:m.value)==="terminated"?"text-danger-500 bg-danger-500":""} `,children:((N=e==null?void 0:e.cell)==null?void 0:N.value)===""||((o=e==null?void 0:e.cell)==null?void 0:o.value)==="undefined"||((C=e==null?void 0:e.cell)==null?void 0:C.value)===void 0?"NEW CONTRACT":(S=e==null?void 0:e.cell)==null?void 0:S.value})})}},{Header:"CONTRACT ISSUED BY",accessor:"issuedby",Cell:e=>a("span",{children:"Not Available"})},{Header:"project name",accessor:"project_name",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"Tenant Name",accessor:"customerid",Cell:e=>{var t,s,r,i,f,m,N;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(i=(r=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:r.original)==null?void 0:i.owner_name:(N=(m=(f=e==null?void 0:e.cell)==null?void 0:f.row)==null?void 0:m.original)==null?void 0:N.guestname})}},{Header:"MANAGED BY",accessor:"managedby",Cell:e=>a("span",{children:"Not Available"})},{Header:"Landlord Name - as per Title Deed",accessor:e=>`${e.OwnerNameAsPerDeed}`,Cell:e=>{var t,s,r,i,f,m,N;return a(I,{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.length)?a(I,{children:(N=(m=(f=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:f.original)==null?void 0:m.OwnerNameAsPerDeed)==null?void 0:N.map((o,C)=>a("span",{className:`block w-full ${C!==0?"mt-[10px]":""}`,children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(o==null?void 0:o.ownernameasperdeed)&&(o==null?void 0:o.ownernameasperdeed)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(o==null?void 0:o.ownernameasperdeed)&&(o==null?void 0:o.ownernameasperdeed)!==""?a("span",{className:"flex gap-x-[5px] items-center justify-center",children:o==null?void 0:o.ownernameasperdeed}):"Not Available"})},C+1))}):a("span",{children:"Not Available"})})}},{Header:"Beneficiary Name ( AS PER CHQ)",accessor:"asperchqname",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUE ISSUER NAME ( AS PER CHQ)",accessor:"chequeissuername",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUE ISSUER ACCOUNT NUMBER",accessor:"asperchqaccountname",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUE ISSUER BANK NAME",accessor:"chequeissuerbank",Cell:e=>a("span",{children:"Not Available"})},{Header:"Cheque Date ( AS PER MATURITY )",accessor:e=>`${e.chequeDetails}`,Cell:e=>{var t,s,r,i,f,m,N,o,C,S,R,H,U;return a(I,{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.length)&&((m=(f=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:f.original)==null?void 0:m.chequeDetails)&&((C=(o=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:o.original)==null?void 0:C.chequeDetails.length)?a(I,{children:(U=(H=(R=(S=e==null?void 0:e.cell)==null?void 0:S.row)==null?void 0:R.original)==null?void 0:H.chequeDetails)==null?void 0:U.map((c,k)=>a("span",{className:`block w-full ${k!==0?"mt-[10px]":""}`,children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(c==null?void 0:c.chequedate)&&(c==null?void 0:c.chequedate)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(c==null?void 0:c.chequedate)&&(c==null?void 0:c.chequedate)!==""?a("span",{className:"flex gap-x-[5px] items-center justify-center",children:new Date(c==null?void 0:c.chequedate).toDateString()}):"Not Available"})},k+1))}):a("span",{children:"Not Available"})})}},{Header:"Cheque # OR TELEGRAPHIC REF#",accessor:e=>`${e.chequeDetails}`,Cell:e=>{var t,s,r,i,f,m,N,o,C,S,R,H,U;return a(I,{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.length)&&((m=(f=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:f.original)==null?void 0:m.chequeDetails)&&((C=(o=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:o.original)==null?void 0:C.chequeDetails.length)?a(I,{children:(U=(H=(R=(S=e==null?void 0:e.cell)==null?void 0:S.row)==null?void 0:R.original)==null?void 0:H.chequeDetails)==null?void 0:U.map((c,k)=>a("span",{className:`block w-full ${k!==0?"mt-[10px]":""}`,children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(c==null?void 0:c.chequenumbe)&&(c==null?void 0:c.chequenumbe)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(c==null?void 0:c.chequenumbe)&&(c==null?void 0:c.chequenumbe)!==""?a("span",{className:"flex gap-x-[5px] items-center justify-center",children:c==null?void 0:c.chequenumbe}):"Not Available"})},k+1))}):a("span",{children:"Not Available"})})}},{Header:"cheque image",accessor:e=>`${e.chequeDetails}`,Cell:e=>{var t,s,r,i,f,m,N,o,C,S,R,H,U;return a(I,{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.length)&&((m=(f=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:f.original)==null?void 0:m.chequeDetails)&&((C=(o=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:o.original)==null?void 0:C.chequeDetails.length)?a(I,{children:(U=(H=(R=(S=e==null?void 0:e.cell)==null?void 0:S.row)==null?void 0:R.original)==null?void 0:H.chequeDetails)==null?void 0:U.map((c,k)=>a("span",{className:`block w-full ${k!==0?"mt-[10px]":""}`,children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(c==null?void 0:c.chequeimage)&&(c==null?void 0:c.chequeimage)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(c==null?void 0:c.chequeimage)&&(c==null?void 0:c.chequeimage)!==""?E("a",{className:"flex gap-x-[5px] items-center",href:"http://dev-rare.srp.ai"+(c==null?void 0:c.chequeimage),target:"_blank",children:[a(J,{icon:"heroicons-outline:eye"}),"View Document"]}):"Not Available"})},k+1))}):a("span",{children:"Not Available"})})}},{Header:"Total Amount",accessor:e=>`${e.chequeDetails}`,Cell:e=>{var t,s,r,i,f,m,N,o,C,S,R,H,U;return a(I,{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.length)&&((m=(f=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:f.original)==null?void 0:m.chequeDetails)&&((C=(o=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:o.original)==null?void 0:C.chequeDetails.length)?a(I,{children:(U=(H=(R=(S=e==null?void 0:e.cell)==null?void 0:S.row)==null?void 0:R.original)==null?void 0:H.chequeDetails)==null?void 0:U.map((c,k)=>a("span",{className:`block w-full ${k!==0?"mt-[10px]":""}`,children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(c==null?void 0:c.totalamount)&&(c==null?void 0:c.totalamount)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(c==null?void 0:c.totalamount)&&(c==null?void 0:c.totalamount)!==""?a("span",{className:"flex gap-x-[5px] items-center justify-center",children:parseFloat(c==null?void 0:c.totalamount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED"}):"Not Available"})},k+1))}):a("span",{children:"Not Available"})})}},{Header:"PURPOSE (RENT/DEPOSIT/ADMIN)",accessor:"purpose",Cell:e=>a("span",{children:"Not Available"})},{Header:"DEPOSITING STATUS (DUE / COMPLETED / UNDUE)",accessor:"DEPOSITINGSTATUS",Cell:e=>a("span",{children:"Not Available"})},{Header:"DEPOSITING STATUS",accessor:"DEPOSITINGSTATUSAAAAAAa",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUE DEPOSIT OR HANDOVER DATE (AS PER DEPOSIT SLIP)",accessor:"CHEQUEDEPOSITORHANDOVERDATE",Cell:e=>a("span",{children:"Not Available"})},{Header:"PAYEE BANK NAME OR HANDED OVER TO",accessor:"PAYEEBANKNAMEORHANDEDOVERTO",Cell:e=>a("span",{children:"Not Available"})},{Header:"Cheques For Deposit With/Deposited By",accessor:"ChequesForDepositWithDepositedBy",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUES / MC RECEIVING DATE",accessor:"CHEQUESMCRECEIVINGDATE",Cell:e=>a("span",{children:"Not Available"})},{Header:"CHEQUES/CASH SUBMITTED TO CFO DEPTT (PHYSICAL FILE)",accessor:"CHEQUESCASHSUBMITTEDTOCFODEPTTPHYSICALFILE",Cell:e=>a("span",{children:"Not Available"})},{Header:"STATUS (BOUNCED / CLEARED / REPLACED/REDEPOSITED)",accessor:"STATUSBOUNCEDLEAREDEPLACEDREDEPOSITED",Cell:e=>a("span",{children:"Not Available"})},{Header:"BOUNCED INTIMATION DATE FROM LANDLORD",accessor:"BOUNCEDINTIMATIONDATEFROMLANDLORD",Cell:e=>a("span",{children:"Not Available"})},{Header:"BOUNCED REASON AS PER BANK MEMO",accessor:"BOUNCEDREASONASPERBANKMEMO",Cell:e=>a("span",{children:"Not Available"})},{Header:"OVERALL CHEQUE MANAGEMENT STATUS (COMPLETED/PENDING/FOLLOWUP/POLICE CASE FILED)",accessor:"OVERALLCHEQUEMANAGEMENTSTATUS(COMPLETED/PENDING/FOLLOWUP/POLICECASEFILED)",Cell:e=>a("span",{children:"Not Available"})},{Header:"RE DEPOSIT DATE ",accessor:"RE DEPOSIT DATE ",Cell:e=>a("span",{children:"Not Available"})},{Header:"BOUNCED CHEQUE COLLECTED FROM THE BANK (COLLECTED/PENDING)",accessor:"BOUNCED CHEQUE COLLECTED FROM THE BANK (COLLECTED/PENDING)",Cell:e=>a("span",{children:"Not Available"})},{Header:"DATE COLLECTED FROM BANK",accessor:"DATE COLLECTED FROM BANK",Cell:e=>a("span",{children:"Not Available"})},{Header:"BOUNCED/REPLACEMENT/DISPUTED CHEQUE CUSTODIAN",accessor:"BOUNCED/REPLACEMENT/DISPUTED CHEQUE CUSTODIAN",Cell:e=>a("span",{children:"Not Available"})},{Header:"CASH/BANK TRANSFER/CHEQUE RECEIVING DATE FOR BOUNCE CHEQUES",accessor:"CASH/BANK TRANSFER/CHEQUE RECEIVING DATE FOR BOUNCE CHEQUES",Cell:e=>a("span",{children:"Not Available"})},{Header:"RENT DEFAULT NOTICE SEND DATE TO APARTMENT",accessor:"RENT DEFAULT NOTICE SEND DATE TO APARTMENT",Cell:e=>a("span",{children:"Not Available"})},{Header:"RENT DEFAULT NOTICE SEND DATE BY EMAIL",accessor:"RENT DEFAULT NOTICE SEND DATE BY EMAIL",Cell:e=>a("span",{children:"Not Available"})},{Header:"POLICE CASE NUMBER",accessor:"POLICE CASE NUMBER",Cell:e=>a("span",{children:"Not Available"})},{Header:"POLICE CASE FILED DATE",accessor:"POLICE CASE FILED DATE",Cell:e=>a("span",{children:"Not Available"})},{Header:"RDC CASE NUMBER",accessor:"RDC CASE NUMBER",Cell:e=>a("span",{children:"Not Available"})},{Header:"REMINDER DATE FOR FOLLOW UP",accessor:"REMINDER DATE FOR FOLLOW UP",Cell:e=>a("span",{children:"Not Available"})},{Header:"LAST FOLLOW UP DATE",accessor:"LAST FOLLOW UP DATE",Cell:e=>a("span",{children:"Not Available"})},{Header:"FOLLOWUP STATUS",accessor:"FOLLOWUP STATUS",Cell:e=>a("span",{children:"Not Available"})},{Header:"PENDING STATUS",accessor:"PENDING STATUS",Cell:e=>a("span",{children:"Not Available"})},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const t=localStorage.getItem("isAuth"),s=JSON.parse(t),{data:r}=Me(s==null?void 0:s.roleid);if(!r)return null;const i=(r==null?void 0:r.readtenant)===!0;return r==null||r.updatetenant,r==null||r.deletetenant,a("div",{className:"flex space-x-3 rtl:space-x-reverse",children:i&&a(Ye,{content:"View Contract",placement:"top",arrow:!0,animation:"shift-away",children:a(Ve,{className:"action-btn",to:`/view-tenantcontract/${e==null?void 0:e.cell.value}`,type:"button",children:a(J,{icon:"heroicons:eye"})})})})}}],pe=p.exports.useMemo(()=>z,[]),he=p.exports.useMemo(()=>b),me=ae.exports.useTable({columns:pe,data:he,initialState:{pageIndex:0,pageSize:50}},ae.exports.useGlobalFilter,ae.exports.useSortBy,ae.exports.usePagination,ae.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>a("div",{children:a(Je,{...s()})}),Cell:({row:s})=>{var N;const[r,i]=p.exports.useState(""),f=o=>{o!=null&&o._id?B(!0):B(!1),i(C=>C===o?"":o),ye(C=>C===o?"":o)},m=((N=s==null?void 0:s.original)==null?void 0:N._id)===(r==null?void 0:r._id);return p.exports.useEffect(()=>{se(m)},[m]),a("div",{children:a("input",{type:"checkbox",...s.getToggleRowSelectedProps(),checked:m,onChange:()=>f(s.original),className:"table-checkbox"})})}},...t])}),{getTableProps:Ee,getTableBodyProps:ce,headerGroups:Ne,footerGroups:Le,page:be,nextPage:fe,previousPage:Ce,canNextPage:X,canPreviousPage:Y,pageOptions:w,state:re,gotoPage:ee,pageCount:ge,setPageSize:xe,setGlobalFilter:n,prepareRow:h}=me,{globalFilter:d,pageIndex:u,pageSize:y}=re,q=g.filter(e=>e.unitnumber!==void 0),D=[...new Set(q.map(e=>e.unitnumber))].sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),P=g.filter(e=>e.community_name!==void 0),Pe=[...[...new Set(P.map(e=>e.communityid))].map(e=>{const t=g.find(s=>s.communityid===e);return t?{label:t.community_name,value:t.communityid}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),qe=g.filter(e=>e.project_name!==void 0),Re=[...[...new Set(qe.map(e=>e.projectnameid))].map(e=>{const t=g.find(s=>s.projectnameid===e);return t?{label:t.project_name,value:t.projectnameid}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),je=g.filter(e=>e.building_name!==void 0),He=[...[...new Set(je.map(e=>e.buildingid))].map(e=>{const t=g.find(s=>s.buildingid===e);return t?{label:t.building_name,value:t.buildingid}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),Fe=g.filter(e=>e.owner_name!==void 0),Ue=[...[...new Set(Fe.map(e=>e.owner_email))].map(e=>{const t=g.find(s=>s.owner_email===e);return t?{label:t.owner_name+" | "+t.owner_email,value:t.owner_email}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),$e=g==null?void 0:g.filter(e=>e.property_owner_name!==void 0),ke=[...[...new Set($e.map(e=>e.property_owner_id))].sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})).map(e=>{const t=g.find(s=>s.property_owner_id===e);return t?{label:t.property_owner_name,value:t.property_owner_id}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),Ge=()=>{G(),O("")};return E(I,{children:[E("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:[E("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>M(!j),children:[j===!0?a(J,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"}):a(J,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"}),a("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"})]}),v===!0?a("button",{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",type:"button",onClick:le,children:"Remove Date Filter"}):null,a(ze,{filter:d,setFilter:n})]}),a(Ze,{showModal:Ie,handleClose:()=>{de(!1)},handleTerminateData:async e=>{try{await _e.patch("http://dev-rare.srp.ai/tenantcontract/api/tenantcontractdelete",{_id:e,contractupdation:"terminated"}),_()}catch(t){console.log(t,"error")}},dataId:Q}),E("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${j===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Unit No."}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:D,value:D.filter(function(e){if((l==null?void 0:l.unitnumber)!=="")return e.value===(l==null?void 0:l.unitnumber)}),onChange:e=>{T({target:{name:"unitnumber",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.unitnumber?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,unitnumber:""}),children:"Clear filter"}):null]}),E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Community Name"}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Pe,value:Pe.filter(function(e){if((l==null?void 0:l.communityid)!=="")return e.value===(l==null?void 0:l.communityid)}),onChange:e=>{T({target:{name:"communityid",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.communityid?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,communityid:""}),children:"Clear filter"}):null]}),E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Project Name"}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Re,value:Re.filter(function(e){if((l==null?void 0:l.projectnameid)!=="")return e.value===(l==null?void 0:l.projectnameid)}),onChange:e=>{T({target:{name:"projectnameid",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.projectnameid?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,projectnameid:""}),children:"Clear filter"}):null]}),E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Building Name"}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:He,value:He.filter(function(e){if((l==null?void 0:l.buildingid)!=="")return e.value===(l==null?void 0:l.buildingid)}),onChange:e=>{T({target:{name:"buildingid",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.buildingid?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,buildingid:""}),children:"Clear filter"}):null]}),E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Property Owner"}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:ke,value:ke.filter(function(e){if((l==null?void 0:l.property_owner_id)!=="")return e.value===(l==null?void 0:l.property_owner_id)}),onChange:e=>{T({target:{name:"property_owner_id",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.property_owner_id?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,property_owner_id:""}),children:"Clear filter"}):null]}),E("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Tenant Name / Email"}),a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Ue,value:Ue.filter(function(e){if((l==null?void 0:l.owner_email)!=="")return e.value===(l==null?void 0:l.owner_email)}),onChange:e=>{T({target:{name:"owner_email",value:e.value}})},styles:Z,id:"hh",placeholder:"Select..."}),l!=null&&l.owner_email?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>O({...l,owner_email:""}),children:"Clear filter"}):null]})]}),E("div",{className:`flex ${j===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[a("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>Ge(),children:"Clear filter"}),a("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>oe(l),children:"Search"})]}),a(Qe,{showModal:ne,handleClose:K,loaderModal:$,linkedData:L,handleDeleteData:ue,dataId:Q,moduleName:"Tenancy Contract"}),a("div",{className:"overflow-x-auto -mx-6 mt-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:" ",children:E("table",{className:"min-w-[200%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Ee,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Ne.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>t.Header==="action"&&!((A==null?void 0:A.readtenant)===!0||(A==null?void 0:A.updatetenant)===!0||(A==null?void 0:A.deletetenant)===!0)?a("th",{}):E("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:"table-th",children:[t.render("Header"),a("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...ce,children:be.map(e=>(h(e),a("tr",{...e.getRowProps(),children:e.cells.map(t=>a("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))})))})]})})})}),E("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[E("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[a("select",{className:"form-control py-2 w-max",value:y,onChange:e=>xe(Number(e.target.value)),children:[10,25,50].map(e=>E("option",{value:e,children:["Show ",e]},e))}),E("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",E("span",{children:[u+1," of ",w.length]})]})]}),E("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${Y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ee(0),disabled:!Y,children:a(J,{icon:"heroicons:chevron-double-left-solid"})})}),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${Y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Ce(),disabled:!Y,children:"Prev"})}),w.map((e,t)=>a("li",{children:a("button",{href:"#","aria-current":"page",className:` ${t===u?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>ee(t),children:e+1})},t)),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${X?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>fe(),disabled:!X,children:"Next"})}),a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{onClick:()=>ee(ge-1),disabled:!X,className:` ${X?"":"opacity-50 cursor-not-allowed"}`,children:a(J,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})},ea={option:(b,_)=>({...b,fontSize:"14px"})},Na=()=>{const{data:b,error:_,isLoading:A,isFetching:g,isSuccess:G}=We(),oe=localStorage.getItem("isAuth"),te=JSON.parse(oe),{data:Ae}=Me(te==null?void 0:te.roleid),[Te,le]=p.exports.useState(""),[v,ne]=p.exports.useState(""),[Se,$]=p.exports.useState(!1),[x,L]=p.exports.useState(),[Oe,Q]=p.exports.useState(!1),[ye,W]=p.exports.useState(""),[B,ie]=p.exports.useState(""),se=[{value:"SELECT CONTRACT EXECUTION DATE",label:"SELECT CONTRACT EXECUTION DATE"},{value:"SELECT CONTRACT START DATE",label:"SELECT CONTRACT START DATE"},{value:"SELECT CONTRACT END DATE",label:"SELECT CONTRACT END DATE"}],[Ie,de]=p.exports.useState({startDate:"",endDate:""}),[l,O]=p.exports.useState({startDate:"",endDate:""}),[T,j]=p.exports.useState({startDate:"",endDate:""}),[M,K]=p.exports.useState({startDate:"",endDate:""}),[ue,z]=p.exports.useState(!1),pe=async n=>{const{startDate:h,endDate:d}=n,u=new Date(h),y=new Date(d),q=v.filter(D=>{const P=new Date(D.contractexecutiondate);return P>=u&&P<=y});let F="Selected Filter Dated are "+new Date(u).toDateString()+" - "+new Date(y).toDateString();W(F),L(q),z(!0),j({startDate:"",endDate:""}),K({startDate:"",endDate:""})},he=async n=>{const{startDate:h,endDate:d}=n,u=new Date(h),y=new Date(d),q=v.filter(D=>{const P=new Date(D.contractstartdate);return P>=u&&P<=y});let F="Selected Filter Dated are "+new Date(u).toDateString()+" - "+new Date(y).toDateString();W(F),L(q),z(!0),O({startDate:"",endDate:""}),K({startDate:"",endDate:""})},me=async n=>{const{startDate:h,endDate:d}=n,u=new Date(h),y=new Date(d),q=v.filter(D=>{const P=new Date(D.contractenddate);return P>=u&&P<=y});let F="Selected Filter Dated are "+new Date(u).toDateString()+" - "+new Date(y).toDateString();W(F),L(q),z(!0),O({startDate:"",endDate:""}),j({startDate:"",endDate:""})};p.exports.useEffect(()=>{Q(!0),(async()=>{const d=await(await fetch("http://dev-rare.srp.ai/tenantcontract")).json();L(d),ne(d),le(d),Q(!1)})()},[]);const Ee=()=>{Q(!0),(async()=>{const d=await(await fetch("http://dev-rare.srp.ai/tenantcontract")).json();L(d),ne(d),le(d),Q(!1)})()},[ce,Ne]=p.exports.useState(0);p.exports.useEffect(()=>{var n,h,d,u,y,q;if(x!=null&&x.length){let F=0;for(let D=0;D<(x==null?void 0:x.length);D++){let P=((n=x[D])==null?void 0:n.rentalamount)&&((h=x[D])==null?void 0:h.rentalamount)!==void 0&&((d=x[D])==null?void 0:d.rentalamount)!=="undefined"&&((u=x[D])==null?void 0:u.rentalamount)!==null&&((y=x[D])==null?void 0:y.rentalamount)!=="null"?parseFloat((q=x[D])==null?void 0:q.rentalamount):0;F+=P}Ne(F)}},[x==null?void 0:x.length]);const Le={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},be={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},fe={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},Ce={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},X=b==null?void 0:b.filter(n=>{const h=(n==null?void 0:n.contractend_date)&&(n==null?void 0:n.contractend_date)!=="undefined"&&(n==null?void 0:n.contractend_date)!==void 0&&(n==null?void 0:n.contractend_date)!==null&&(n==null?void 0:n.contractend_date)!=="null"?new Date(n==null?void 0:n.contractend_date):null;return h<=new Date&&h&&h!=="undefined"&&h!==void 0&&h!==null&&h!=="null"&&h.toString()!=="Invalid Date"}).length,Y=new Date,w=new Date;w.setDate(Y.getDate()+90);const re=b==null?void 0:b.filter(n=>{const h=new Date(n==null?void 0:n.contractstart_date);return h>=Y&&h<=w}).length;b&&(b==null||b.length),ce&&parseFloat(ce).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"";function ee(n){if(n)if((l==null?void 0:l.startDate)!==""&&(l==null?void 0:l.endDate)!==""||(T==null?void 0:T.startDate)&&(T==null?void 0:T.endDate)||(M==null?void 0:M.startDate)&&(M==null?void 0:M.endDate)){const h=x.filter(d=>{$(!0);let u=!0;return n.buildingid&&d.buildingid!==n.buildingid&&(u=!1),n.communityid&&d.communityid!==n.communityid&&(u=!1),n.projectnameid&&d.projectnameid!==n.projectnameid&&(u=!1),n.unitnumber&&d.unitnumber!==n.unitnumber&&(u=!1),n.owner_email&&d.owner_email!==n.owner_email&&(u=!1),n.property_owner_id&&d.property_owner_id!==n.property_owner_id&&(u=!1),u});L(h),$(!1)}else{const h=v.filter(d=>{$(!0);let u=!0;return n.buildingid&&d.buildingid!==n.buildingid&&(u=!1),n.communityid&&d.communityid!==n.communityid&&(u=!1),n.projectnameid&&d.projectnameid!==n.projectnameid&&(u=!1),n.unitnumber&&d.unitnumber!==n.unitnumber&&(u=!1),n.owner_email&&d.owner_email!==n.owner_email&&(u=!1),n.property_owner_id&&d.property_owner_id!==n.property_owner_id&&(u=!1),u});L(h),j({startDate:"",endDate:""}),K({startDate:"",endDate:""}),O({startDate:"",endDate:""}),W(""),$(!1)}else L(v)}const ge=async()=>{$(!0),L(v),$(!1)},xe=()=>{ie(""),de({startDate:"",endDate:""}),j({startDate:"",endDate:""}),K({startDate:"",endDate:""}),O({startDate:"",endDate:""}),W(""),L(v),z(!1)};return a(I,{children:Oe===!1?a("div",{className:" space-y-5",children:E(Ke,{children:[a("div",{className:"flex justify-between items-center mb-6",children:a("h4",{className:"card-title",children:"PDC Report"})}),a("div",{className:"grid grid-cols-12 gap-5 mb-5",children:a("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:a("div",{className:"flex justify-end items-center mt-[20px]",children:a("div",{className:"flex justify-end items-center ",children:E("div",{className:"flex -gap-x-[5px] items-center",children:[a("div",{className:"w-[300px]",children:a(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:se,value:se.filter(function(n){return n.value===B}),onChange:n=>{ie(n==null?void 0:n.value)},styles:ea,id:"hh",placeholder:"Select Date filter option..."})}),B&&B==="SELECT CONTRACT EXECUTION DATE"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ve,{value:l,inputClassName:"input-class",containerClassName:"container-class",onChange:pe,placeholder:"SELECT CONTRACT EXECUTION DATE"})})}):null,B&&B==="SELECT CONTRACT START DATE"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ve,{value:T,inputClassName:"input-class",containerClassName:"container-class",onChange:he,placeholder:"SELECT CONTRACT EXECUTION DATE"})})}):null,B&&B==="SELECT CONTRACT END DATE"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ve,{value:M,inputClassName:"input-class",containerClassName:"container-class",onChange:me,placeholder:"SELECT CONTRACT EXECUTION DATE"})})}):null]})})})})}),A&&g&&(!v||(v==null?void 0:v.length)===0)&&a(Be,{}),_&&a("p",{children:"Not Found"}),G&&b&&(v==null?void 0:v.length)&&a(we,{allData:x,onDataUpdate:Ee,dataRole:Ae,dateFilterActive:ue,handleFilterSearch:ee,handleClearFilter:ge,forFilterData:Te,valueEXECUTION:l,valuecontractstar:T,valuecontractenddate:M,removeAllDateFilter:xe})]})}):a(Be,{})})};export{Na as default};
