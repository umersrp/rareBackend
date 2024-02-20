import{R as w,j as l,F as ee,bL as O,r as C,b as x,c as r,C as ue,L as M,I as v,bP as Ne,K as ve,T as o}from"./index.c655dec6.js";import{G as xe}from"./GlobalFilter.3a02cc96.js";const be=w.forwardRef(({indeterminate:u,...f},N)=>{const s=w.useRef(),p=N||s;return w.useEffect(()=>{p.current.indeterminate=u},[p,u]),l(ee,{children:l("input",{type:"checkbox",ref:p,...f,className:"table-checkbox"})})}),Se=({showModal:u,handleClose:f,handleQuotationStatusUpdate:N,dataQuotation:s})=>l("div",{className:"thumbnail-container",children:u&&l("div",{className:"modal-overlay-property",children:r("div",{className:"modal-new w-[1000px]",children:[r("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Are You Sure you Want to Approve or Cancel this Quotation?"}),l("img",{src:Ne,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:f})]}),r("div",{className:"flex mt-[15px] gap-y-[15px] justify-between flex-wrap",children:[r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.company?s==null?void 0:s.company:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.city?s==null?void 0:s.city:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.emirate?s==null?void 0:s.emirate:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.email?s==null?void 0:s.email:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.qoutation_date?new Date(s==null?void 0:s.qoutation_date).toDateString():"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.invoice_number?s==null?void 0:s.invoice_number:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.qtn_number?s==null?void 0:s.qtn_number:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.trn_number?s==null?void 0:s.trn_number:"Not Available"})})]})]}),r("div",{className:"w-[100%] mt-[25px] flex justify-end gap-x-[20px]",children:[l("button",{className:"btn btn-danger inline-flex justify-center ",onClick:()=>N(s,"cancelled"),children:"Cancel"}),l("button",{className:"btn btn-dark inline-flex justify-center ",onClick:()=>N(s,"approved"),children:"Approve"})]})]})})}),He=({showModal:u,handleClose:f,handleConvertToInvoice:N,dataQuotation:s})=>l("div",{className:"thumbnail-container",children:u&&l("div",{className:"modal-overlay-property",children:r("div",{className:"modal-new w-[1000px]",children:[r("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Are You Sure you Want to Convert this Quotation into Invoice?"}),l("img",{src:Ne,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:f})]}),r("div",{className:"flex mt-[15px] gap-y-[15px] justify-between flex-wrap",children:[r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Company"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.company?s==null?void 0:s.company:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"City"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.city?s==null?void 0:s.city:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Emirate"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.emirate?s==null?void 0:s.emirate:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Email"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.email?s==null?void 0:s.email:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Date"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.qoutation_date?new Date(s==null?void 0:s.qoutation_date).toDateString():"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"Invoice Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.invoice_number?s==null?void 0:s.invoice_number:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"QTN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.qtn_number?s==null?void 0:s.qtn_number:"Not Available"})})]}),r("div",{className:"fromGroup      w-[49%] ",children:[l("label",{className:"block capitalize form-label  ",children:"TRN Number"}),l("div",{className:"relative ",children:l("p",{className:"  form-control py-2   ",children:s!=null&&s.trn_number?s==null?void 0:s.trn_number:"Not Available"})})]})]}),l("div",{className:"w-[100%] mt-[25px] flex justify-end",children:l("button",{className:"btn btn-dark inline-flex justify-center ",onClick:()=>N(s),children:"Convert To Invoice"})})]})})}),Ge=({title:u,linktitle:f,pagelink:N,allData:s,updateData:p})=>{const B=localStorage.getItem("isAuth"),b=JSON.parse(B),{data:h}=O(b==null?void 0:b.roleid),[L,P]=C.exports.useState(!1),[J,G]=C.exports.useState(""),[le,j]=C.exports.useState(!1),[V,q]=C.exports.useState(""),_=e=>{e&&(e==null?void 0:e._id)&&(e==null?void 0:e.converted_invoice)===!1&&(P(!0),G(e))},S=()=>{P(!1),G("")},T=async e=>{e&&(e==null?void 0:e._id)&&(e==null?void 0:e.converted_invoice)===!1&&(await ve.patch("http://dev-rare.srp.ai/maintenancemanagement",{...e,converted_invoice:!0}),p(),P(!1),G(""))},U=e=>{e&&(e==null?void 0:e._id)&&(e==null?void 0:e.quotation_status)!=="approved"&&(e==null?void 0:e.quotation_status)!=="cancelled"&&(j(!0),q(e))},F=()=>{j(!1),q("")},W=async(e,a)=>{e&&(e==null?void 0:e._id)&&(e==null?void 0:e.quotation_status)!=="approved"&&(e==null?void 0:e.quotation_status)!=="cancelled"&&(await ve.patch("http://dev-rare.srp.ai/maintenancemanagement",{...e,quotation_status:a}),p(),j(!1),q(""))},Y=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1})},{Header:"Quotation Status",accessor:"quotation_status",Cell:e=>{var a,i,m,y,k,E,A;return l("span",{className:"block w-full",children:l("span",{onClick:()=>{var I,D;return U((D=(I=e==null?void 0:e.cell)==null?void 0:I.row)==null?void 0:D.original)},className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 cursor-pointer ${((a=e==null?void 0:e.cell)==null?void 0:a.value)==="approved"?"text-success-500 bg-success-500":null}  ${((i=e==null?void 0:e.cell)==null?void 0:i.value)==="cancelled"?"text-danger-500 bg-danger-500":null} ${((m=e==null?void 0:e.cell)==null?void 0:m.value)===""||!((y=e==null?void 0:e.cell)!=null&&y.value)?"bg-info-500 text-info-500":null} `,children:((k=e==null?void 0:e.cell)==null?void 0:k.value)&&((E=e==null?void 0:e.cell)==null?void 0:E.value)!==""?(A=e==null?void 0:e.cell)==null?void 0:A.value:"Pending"})})}},{Header:"house type",accessor:"house_type",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"project name",accessor:"project_name",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"city",accessor:"city",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"emirate",accessor:"emirate",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"Email",accessor:"email",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"invoice number",accessor:"invoice_number",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"qtn number",accessor:"qtn_number",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"trn number",accessor:"trn_number",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"date",accessor:"qoutation_date",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"total price",accessor:"total_price",Cell:e=>{var a,i,m;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?((m=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"Not Available"})}},{Header:"total amount aed",accessor:"total_amount_aed",Cell:e=>{var a,i,m;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?((m=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"Not Available"})}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"Quotation Attachment",accessor:"quotation_attachment",Cell:e=>{var a,i,m,y,k;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((m=e==null?void 0:e.cell)==null?void 0:m.value)&&((y=e==null?void 0:e.cell)==null?void 0:y.value)!==""?r("a",{className:"flex gap-x-[5px] items-center",href:"http://dev-rare.srp.ai"+((k=e==null?void 0:e.cell)==null?void 0:k.value),target:"_blank",children:[l(v,{icon:"heroicons-outline:eye"}),"View Document"]}):"Not Available"})})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:e=>{var a,i;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var a,i;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{var I,D,ae,ne,ie,te,re,me,de;const a=localStorage.getItem("isAuth"),i=JSON.parse(a),{data:m}=O(i==null?void 0:i.roleid);if(!m&&!(i!=null&&i.type))return null;const y=(m==null?void 0:m.readtenant)===!0,k=(m==null?void 0:m.updatetenant)===!0,E=(m==null?void 0:m.deletetenant)===!0,A=!!(i!=null&&i.type);return r("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[(y||A)&&((ae=(D=(I=e==null?void 0:e.cell)==null?void 0:I.row)==null?void 0:D.original)==null?void 0:ae.converted_invoice)===!1&&((te=(ie=(ne=e==null?void 0:e.cell)==null?void 0:ne.row)==null?void 0:ie.original)==null?void 0:te.quotation_status)!=="cancelled"&&l(o,{content:"Convert to Invoice",placement:"top",arrow:!0,animation:"shift-away",children:l("button",{className:"action-btn",onClick:()=>{var pe,he;return _((he=(pe=e==null?void 0:e.cell)==null?void 0:pe.row)==null?void 0:he.original)},type:"button",children:l(v,{icon:"heroicons:document-check"})})}),(y||A)&&l(o,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(M,{className:"action-btn",to:`/view-maintenancemanagement/${e==null?void 0:e.cell.value}`,type:"button",children:l(v,{icon:"heroicons:eye"})})}),(k||A)&&((de=(me=(re=e==null?void 0:e.cell)==null?void 0:re.row)==null?void 0:me.original)==null?void 0:de.contractupdation)!=="terminated"?l(o,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(M,{to:`/maintenancemanagementform/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(v,{icon:"heroicons:pencil-square"})})}):null,(E||A)&&l(o,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",children:l(v,{icon:"heroicons:trash"})})})]})}}],K=C.exports.useMemo(()=>Y,[]),X=C.exports.useMemo(()=>s),Z=x.exports.useTable({columns:K,data:X,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:i})=>l("div",{children:l(be,{...i()})}),Cell:({row:i})=>l("div",{children:l(be,{...i.getToggleRowSelectedProps()})})},...a])}),{getTableProps:z,getTableBodyProps:R,headerGroups:c,footerGroups:n,page:t,nextPage:d,previousPage:H,canNextPage:g,canPreviousPage:$,pageOptions:ce,state:fe,gotoPage:Q,pageCount:ge,setPageSize:ye,setGlobalFilter:Ce,prepareRow:ke}=Z,{globalFilter:Ae,pageIndex:se,pageSize:_e}=fe;return l(ee,{children:r(ue,{children:[r("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:u}),(h==null?void 0:h.createlead)===!0||(b==null?void 0:b.type)?l(M,{to:N,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:f}):null]}),l(Se,{showModal:le,handleClose:F,handleQuotationStatusUpdate:W,dataQuotation:V}),l(He,{showModal:L,handleClose:S,handleConvertToInvoice:T,dataQuotation:J}),l("div",{className:"md:flex justify-end items-center mb-6",children:l(xe,{filter:Ae,setFilter:Ce})}),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:" ",children:r("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...z,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:c.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((h==null?void 0:h.readtenant)===!0||(h==null?void 0:h.updatetenant)===!0||(h==null?void 0:h.deletetenant)===!0||(b==null?void 0:b.type))?l("th",{}):r("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...R,children:t.map(e=>(ke(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))})))})]})})})}),r("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[r("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:_e,onChange:e=>ye(Number(e.target.value)),children:[10,25,50].map(e=>r("option",{value:e,children:["Show ",e]},e))}),r("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",r("span",{children:[se+1," of ",ce.length]})]})]}),r("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${$?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Q(0),disabled:!$,children:l(v,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${$?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>H(),disabled:!$,children:"Prev"})}),ce.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===se?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>Q(a),children:e+1})},a)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${g?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>d(),disabled:!g,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>Q(ge-1),disabled:!g,className:` ${g?"":"opacity-50 cursor-not-allowed"}`,children:l(v,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},je=({title:u,allData:f})=>{const N=localStorage.getItem("isAuth"),s=JSON.parse(N),{data:p}=O(s==null?void 0:s.roleid),B=[{Header:"Sr no",accessor:"id",Cell:({row:c,flatRows:n})=>l("span",{children:n.indexOf(c)+1})},{Header:"house type",accessor:"house_type",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"unit number",accessor:"unitnumber",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"project name",accessor:"project_name",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"city",accessor:"city",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"emirate",accessor:"emirate",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"Email",accessor:"email",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"invoice number",accessor:"invoice_number",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"qtn number",accessor:"qtn_number",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"trn number",accessor:"trn_number",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"date",accessor:"qoutation_date",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?new Date((t=c==null?void 0:c.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"total price",accessor:"total_price",Cell:c=>{var n,t,d;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?((d=(t=c==null?void 0:c.cell)==null?void 0:t.value)==null?void 0:d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"Not Available"})}},{Header:"total amount aed",accessor:"total_amount_aed",Cell:c=>{var n,t,d;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?((d=(t=c==null?void 0:c.cell)==null?void 0:t.value)==null?void 0:d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"Not Available"})}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"Invoice Attachment",accessor:"invoice_attachment",Cell:c=>{var n,t,d,H,g;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((n=c==null?void 0:c.cell)==null?void 0:n.value)&&((t=c==null?void 0:c.cell)==null?void 0:t.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((d=c==null?void 0:c.cell)==null?void 0:d.value)&&((H=c==null?void 0:c.cell)==null?void 0:H.value)!==""?r("a",{className:"flex gap-x-[5px] items-center",href:"http://dev-rare.srp.ai"+((g=c==null?void 0:c.cell)==null?void 0:g.value),target:"_blank",children:[l(v,{icon:"heroicons-outline:eye"}),"View Document"]}):"Not Available"})})}},{Header:"created-on",accessor:"createdAt",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?new Date((t=c==null?void 0:c.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:c=>{var n,t;return l("span",{className:"normal-case",children:(n=c==null?void 0:c.cell)!=null&&n.value?(t=c==null?void 0:c.cell)==null?void 0:t.value:"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:c=>{var n,t;return l("span",{children:(n=c==null?void 0:c.cell)!=null&&n.value?new Date((t=c==null?void 0:c.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"action",accessor:c=>`${c._id}`,Cell:c=>{const n=localStorage.getItem("isAuth"),t=JSON.parse(n),{data:d}=O(t==null?void 0:t.roleid);if(!d&&!(t!=null&&t.type))return null;const H=(d==null?void 0:d.readtenant)===!0,g=(d==null?void 0:d.deletetenant)===!0;return r("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[(H||(t==null?void 0:t.type))&&l(o,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(M,{className:"action-btn",to:`/view-maintenancemanagement-invoice/${c==null?void 0:c.cell.value}`,type:"button",children:l(v,{icon:"heroicons:eye"})})}),(g||(t==null?void 0:t.type))&&l(o,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",children:l(v,{icon:"heroicons:trash"})})})]})}}],b=C.exports.useMemo(()=>B,[]),h=C.exports.useMemo(()=>f),L=x.exports.useTable({columns:b,data:h,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect),{getTableProps:P,getTableBodyProps:J,headerGroups:G,footerGroups:le,page:j,nextPage:V,previousPage:q,canNextPage:_,canPreviousPage:S,pageOptions:T,state:U,gotoPage:F,pageCount:W,setPageSize:Y,setGlobalFilter:K,prepareRow:X}=L,{globalFilter:Z,pageIndex:z,pageSize:R}=U;return l(ee,{children:r(ue,{children:[r("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:u}),l(xe,{filter:Z,setFilter:K})]}),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:" ",children:r("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...P,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:G.map(c=>l("tr",{...c.getHeaderGroupProps(),children:c.headers.map(n=>n.Header==="action"&&!((p==null?void 0:p.readtenant)===!0||(p==null?void 0:p.updatetenant)===!0||(p==null?void 0:p.deletetenant)===!0||(s==null?void 0:s.type))?l("th",{}):r("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),l("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...J,children:j.map(c=>(X(c),l("tr",{...c.getRowProps(),children:c.cells.map(n=>l("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})))})]})})})}),r("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[r("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:R,onChange:c=>Y(Number(c.target.value)),children:[10,25,50].map(c=>r("option",{value:c,children:["Show ",c]},c))}),r("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",r("span",{children:[z+1," of ",T.length]})]})]}),r("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>F(0),disabled:!S,children:l(v,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>q(),disabled:!S,children:"Prev"})}),T.map((c,n)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${n===z?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>F(n),children:c+1})},n)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${_?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>V(),disabled:!_,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>F(W-1),disabled:!_,className:` ${_?"":"opacity-50 cursor-not-allowed"}`,children:l(v,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})};export{je as I,Ge as M};
