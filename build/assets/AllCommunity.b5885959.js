import{R as L,j as e,F as v,bK as G,r as u,b as y,e as ve,L as k,I as C,bO as he,bM as J,J as pe,T as O}from"./index.44d7a5c5.js";import{G as xe}from"./GlobalFilter.cd26253e.js";import{D as V}from"./DeleteParagraph.34a52c90.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\community\\CommunityTable.jsx";const B=L.forwardRef(({indeterminate:d,...N},h)=>{const o=L.useRef(),b=h||o;return L.useEffect(()=>{b.current.indeterminate=d},[b,d]),e(v,{children:e("input",{type:"checkbox",ref:b,...N,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),ge=({showModal:d,handleClose:N,loaderModal:h,linkedData:o,handleDeleteData:b,dataId:g,moduleName:c,PropertyData:m,ProjectNameData:s,communityName:S,dataRole:f})=>e("div",{className:"thumbnail-container",children:[d&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${c}?`},void 0,!1,{fileName:l,lineNumber:50,columnNumber:29},void 0),e("img",{src:he,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:N},void 0,!1,{fileName:l,lineNumber:51,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:25},void 0),h===!0?e(J,{},void 0,!1,{fileName:l,lineNumber:55,columnNumber:33},void 0):e(v,{children:[o!=null&&o.length?e("div",{className:"data-list-modal",children:e(v,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:62,columnNumber:57},void 0)," ",S," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:61,columnNumber:53},void 0),m!=null&&m.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:l,lineNumber:69,columnNumber:73},void 0),(f==null?void 0:f.deletepropert)===!0?e(v,{children:m==null?void 0:m.map((a,p)=>e(k,{className:" mr-[5px] hover:underline",to:`/view-property/${a==null?void 0:a._id}?delete=true`,children:[a==null?void 0:a.unitnumber,p!==m.length-1?",":null]},p+1,!0,{fileName:l,lineNumber:75,columnNumber:93},void 0))},void 0,!1):e(V,{moduleName:c,linkedName:"Property"},void 0,!1,{fileName:l,lineNumber:79,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:68,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:67,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:66,columnNumber:61},void 0):null,s!=null&&s.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Project Name: "},void 0,!1,{fileName:l,lineNumber:90,columnNumber:73},void 0),(f==null?void 0:f.deleteproject)===!0?e(v,{children:s==null?void 0:s.map((a,p)=>e(k,{className:" mr-[5px] hover:underline",to:`/view-project/${a==null?void 0:a._id}?delete=true`,children:[a==null?void 0:a.projectName,p!==s.length-1?",":null]},p+1,!0,{fileName:l,lineNumber:96,columnNumber:93},void 0))},void 0,!1):e(V,{moduleName:c,linkedName:"Project Name"},void 0,!1,{fileName:l,lineNumber:100,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:89,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:88,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:87,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:59,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(o==null?void 0:o.length)||(m==null?void 0:m.length)||(s==null?void 0:s.length)?e("p",{className:" mt-[10px]",children:`This ${c} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:112,columnNumber:49},void 0):null,!(o!=null&&o.length)&&!(m!=null&&m.length)&&!(s!=null&&s.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>b(g),children:"Delete"},void 0,!1,{fileName:l,lineNumber:117,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:109,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:17},void 0),e(v,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:44,columnNumber:9},void 0),ye=({title:d,linktitle:N,pagelink:h,allCustomers:o,onDataUpdate:b})=>{const g=localStorage.getItem("isAuth"),c=JSON.parse(g),{data:m}=G(c==null?void 0:c.roleid),[s,S]=u.exports.useState(!1),[f,a]=u.exports.useState(!1),[p,z]=u.exports.useState(""),[q,K]=u.exports.useState(""),[Q,T]=u.exports.useState(""),[W,_]=u.exports.useState(""),[Y,X]=u.exports.useState(""),Z=async i=>{if(S(!0),a(!0),i)try{const n=`http://dev-rare.srp.ai/projectname/pagination/pages?communityid=${i==null?void 0:i._id}`,t=`http://dev-rare.srp.ai/property/api/advancesearch?communityid=${i==null?void 0:i._id}&softdelete=false`,r=await fetch(n);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const $=r.status===400?[]:await r.json(),x=await fetch(t);if(!x.ok&&x.status!==400)throw new Error(`API 2 failed with status: ${x.status}`);const F=x.status===400?[]:await x.json(),I=[...$,...F];_($),T(F),z(I),K(i==null?void 0:i._id),X(i==null?void 0:i.communityname),a(!1)}catch(n){console.error("Error fetching data:",n),a(!1)}},R=()=>{S(!1),T(""),_("")},P=async i=>{try{await pe.patch("http://dev-rare.srp.ai/community/api/communitydelete",{_id:i,softdelete:!0}),b(),T(""),_("")}catch(n){console.log(n,"error")}},D=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:n})=>e("span",{children:n.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:283,columnNumber:24},void 0)},{Header:"Community Name",accessor:"communityname",Cell:i=>{var n,t;return e("span",{children:(n=i==null?void 0:i.cell)!=null&&n.value?(t=i==null?void 0:i.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:290,columnNumber:24},void 0)}},{Header:"Community Code",accessor:"communitycode",Cell:i=>{var n,t;return e("span",{children:(n=i==null?void 0:i.cell)!=null&&n.value?(t=i==null?void 0:i.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:297,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:i=>{var n,t;return e("span",{children:(n=i==null?void 0:i.cell)!=null&&n.value?new Date((t=i==null?void 0:i.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:304,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const n=localStorage.getItem("isAuth"),t=JSON.parse(n),{data:r}=G(t==null?void 0:t.roleid);if(!r)return null;const $=(r==null?void 0:r.readcommunity)===!0,x=(r==null?void 0:r.updatecommunity)===!0,F=(r==null?void 0:r.deletecommunity)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[$&&e(O,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(k,{className:"action-btn",to:`/view-community/${i==null?void 0:i.cell.value}`,type:"button",children:e(C,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:329,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:328,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:327,columnNumber:33},void 0),x&&e(O,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(k,{to:`/update-community/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(C,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:338,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:337,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:336,columnNumber:33},void 0),F&&e(O,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var I,j;return Z((j=(I=i==null?void 0:i.cell)==null?void 0:I.row)==null?void 0:j.original)},children:e(C,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:353,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:352,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:345,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:324,columnNumber:21},void 0)}}],ee=u.exports.useMemo(()=>D,[]),le=u.exports.useMemo(()=>o),ie=y.exports.useTable({columns:ee,data:le,initialState:{pageIndex:0,pageSize:50}},y.exports.useGlobalFilter,y.exports.useSortBy,y.exports.usePagination,y.exports.useRowSelect,i=>{i.visibleColumns.push(n=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>e("div",{children:e(B,{...t()},void 0,!1,{fileName:l,lineNumber:386,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:385,columnNumber:25},void 0),Cell:({row:t})=>e("div",{children:e(B,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:391,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:390,columnNumber:25},void 0)},...n])}),{getTableProps:ne,getTableBodyProps:me,headerGroups:oe,footerGroups:Ce,page:te,nextPage:ae,previousPage:re,canNextPage:w,canPreviousPage:A,pageOptions:M,state:se,gotoPage:H,pageCount:ue,setPageSize:ce,setGlobalFilter:de,prepareRow:Ne}=ie,{globalFilter:be,pageIndex:U,pageSize:fe}=se;return e(v,{children:e(ve,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:d},void 0,!1,{fileName:l,lineNumber:423,columnNumber:21},void 0),(m==null?void 0:m.createcommunity)===!0?e(k,{to:h,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:N},void 0,!1,{fileName:l,lineNumber:426,columnNumber:29},void 0):null]},void 0,!0,{fileName:l,lineNumber:422,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(xe,{filter:be,setFilter:de},void 0,!1,{fileName:l,lineNumber:430,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:429,columnNumber:17},void 0),e(ge,{showModal:s,handleClose:R,loaderModal:f,dataRole:m,linkedData:p,handleDeleteData:P,dataId:q,moduleName:"Community",PropertyData:Q,ProjectNameData:W,communityName:Y},void 0,!1,{fileName:l,lineNumber:432,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ne,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:oe.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(n=>n.Header==="action"&&!((m==null?void 0:m.readcommunity)===!0||(m==null?void 0:m.updatecommunity)===!0||(m==null?void 0:m.deletecommunity)===!0)?e("th",{},void 0,!1,{fileName:l,lineNumber:449,columnNumber:60},void 0):e("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),e("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:459,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:453,columnNumber:53},void 0))},void 0,!1,{fileName:l,lineNumber:442,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:440,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...me,children:te.map(i=>(Ne(i),e("tr",{...i.getRowProps(),children:i.cells.map(n=>e("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")},void 0,!1,{fileName:l,lineNumber:478,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:475,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:468,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:436,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:435,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:434,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:433,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:fe,onChange:i=>ce(Number(i.target.value)),children:[50,100,200].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:513,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:507,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[U+1," of ",M.length]},void 0,!0,{fileName:l,lineNumber:520,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:518,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:506,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>H(0),disabled:!A,children:e(C,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:533,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:527,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:526,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>re(),disabled:!A,children:"Prev"},void 0,!1,{fileName:l,lineNumber:537,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:536,columnNumber:25},void 0),M.map((i,n)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${n===U?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>H(n),children:i+1},void 0,!1,{fileName:l,lineNumber:548,columnNumber:33},void 0)},n,!1,{fileName:l,lineNumber:547,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ae(),disabled:!w,children:"Next"},void 0,!1,{fileName:l,lineNumber:562,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:561,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>H(ue-1),disabled:!w,className:` ${w?"":"opacity-50 cursor-not-allowed"}`,children:e(C,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:578,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:572,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:571,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:525,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:505,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:421,columnNumber:13},void 0)},void 0,!1)};var E="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\community\\AllCommunity.jsx";const Ae=()=>{const[d,N]=u.exports.useState([]),[h,o]=u.exports.useState(!1);return u.exports.useEffect(()=>{o(!0),(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/community")).json();N(m),o(!1)})()},[]),e(v,{children:h===!1?e("div",{className:" space-y-5",children:e(ye,{pagelink:"/add-community",linktitle:"Add new Community",title:"All Community",allCustomers:d,onDataUpdate:()=>{o(!0),(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/community")).json();N(m),o(!1)})()}},void 0,!1,{fileName:E,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:E,lineNumber:35,columnNumber:21},void 0):e(J,{},void 0,!1,{fileName:E,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{Ae as default};
