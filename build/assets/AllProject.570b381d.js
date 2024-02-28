import{R as H,j as e,F as b,bK as U,r as c,b as j,e as be,L as C,I as y,bO as pe,bM as V,K as he,T}from"./index.5e95c51c.js";import{G as xe}from"./GlobalFilter.7c78a04c.js";import{D as B}from"./DeleteParagraph.b19daa03.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\project\\ProjectTable.jsx";const G=H.forwardRef(({indeterminate:d,...N},p)=>{const t=H.useRef(),v=p||t;return H.useEffect(()=>{v.current.indeterminate=d},[v,d]),e(b,{children:e("input",{type:"checkbox",ref:v,...N,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),ge=({showModal:d,handleClose:N,loaderModal:p,linkedData:t,handleDeleteData:v,dataId:g,moduleName:u,PropertyData:a,buildingData:m,projectName:k,dataRole:f})=>e("div",{className:"thumbnail-container",children:[d&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${u}?`},void 0,!1,{fileName:l,lineNumber:50,columnNumber:29},void 0),e("img",{src:pe,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:N},void 0,!1,{fileName:l,lineNumber:51,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:25},void 0),p===!0?e(V,{},void 0,!1,{fileName:l,lineNumber:55,columnNumber:33},void 0):e(b,{children:[t!=null&&t.length?e("div",{className:"data-list-modal",children:e(b,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:"Project Name"},void 0,!1,{fileName:l,lineNumber:62,columnNumber:57},void 0)," ",k," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:61,columnNumber:53},void 0),a!=null&&a.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:l,lineNumber:69,columnNumber:73},void 0),(f==null?void 0:f.deletepropert)===!0?e(b,{children:a==null?void 0:a.map((n,h)=>e(C,{className:" mr-[5px] hover:underline",to:`/view-property/${n==null?void 0:n._id}?delete=true`,children:[n==null?void 0:n.unitnumber,h!==a.length-1?",":null]},h+1,!0,{fileName:l,lineNumber:75,columnNumber:93},void 0))},void 0,!1):e(B,{moduleName:u,linkedName:"Property"},void 0,!1,{fileName:l,lineNumber:79,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:68,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:67,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:66,columnNumber:61},void 0):null,m!=null&&m.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Building Name: "},void 0,!1,{fileName:l,lineNumber:90,columnNumber:73},void 0),(f==null?void 0:f.deletebuilding)===!0?e(b,{children:m==null?void 0:m.map((n,h)=>e(C,{className:" mr-[5px] hover:underline",to:`/view-building/${n==null?void 0:n._id}?delete=true`,children:[n==null?void 0:n.buildingname,h!==m.length-1?",":null]},h+1,!0,{fileName:l,lineNumber:96,columnNumber:93},void 0))},void 0,!1):e(B,{moduleName:u,linkedName:"Building Name"},void 0,!1,{fileName:l,lineNumber:100,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:89,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:88,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:87,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:59,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(t==null?void 0:t.length)||(a==null?void 0:a.length)||(m==null?void 0:m.length)?e("p",{className:" mt-[10px]",children:`This ${u} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:112,columnNumber:49},void 0):null,!(t!=null&&t.length)&&!(a!=null&&a.length)&&!(m!=null&&m.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>v(g),children:"Delete"},void 0,!1,{fileName:l,lineNumber:117,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:109,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:17},void 0),e(b,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:44,columnNumber:9},void 0),je=({title:d,linktitle:N,pagelink:p,allCustomers:t,onDataUpdate:v})=>{const g=localStorage.getItem("isAuth"),u=JSON.parse(g),{data:a}=U(u==null?void 0:u.roleid),[m,k]=c.exports.useState(!1),[f,n]=c.exports.useState(!1),[h,z]=c.exports.useState(""),[J,K]=c.exports.useState(""),[q,I]=c.exports.useState(""),[Q,_]=c.exports.useState(""),[W,Y]=c.exports.useState(""),X=async i=>{if(k(!0),n(!0),i)try{const r=`http://dev-rare.srp.ai/buildingname/api/projectnamedelete?projectnameid=${i==null?void 0:i._id}`,o=`http://dev-rare.srp.ai/property/api/advancesearch?projectnameid=${i==null?void 0:i._id}&softdelete=false`;console.log(r,"apiUrl1");const s=await fetch(r);if(!s.ok&&s.status!==400)throw new Error(`API 1 failed with status: ${s.status}`);const P=s.status===400?[]:await s.json(),x=await fetch(o);if(!x.ok&&x.status!==400)throw new Error(`API 2 failed with status: ${x.status}`);const $=x.status===400?[]:await x.json(),F=[...P,...$];_(P),I($),z(F),K(i==null?void 0:i._id),Y(i==null?void 0:i.projectName),n(!1)}catch(r){console.error("Error fetching data:",r),n(!1)}},Z=()=>{k(!1),I(""),_("")},R=async i=>{try{await he.patch("http://dev-rare.srp.ai/projectname/api/projectdelete",{_id:i,softdelete:!0}),v(),I(""),_("")}catch(r){console.log(r,"error")}},D=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:r})=>e("span",{children:r.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:269,columnNumber:24},void 0)},{Header:"Project Name",accessor:"projectName",Cell:i=>{var r,o;return e("span",{children:(r=i==null?void 0:i.cell)!=null&&r.value?(o=i==null?void 0:i.cell)==null?void 0:o.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:276,columnNumber:24},void 0)}},{Header:"Project Code",accessor:"projectCode",Cell:i=>{var r,o;return e("span",{children:(r=i==null?void 0:i.cell)!=null&&r.value?(o=i==null?void 0:i.cell)==null?void 0:o.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:283,columnNumber:24},void 0)}},{Header:"Community Name",accessor:"community_name",Cell:i=>{var r,o;return e("span",{children:(r=i==null?void 0:i.cell)!=null&&r.value?(o=i==null?void 0:i.cell)==null?void 0:o.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:290,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:i=>{var r,o;return e("span",{children:(r=i==null?void 0:i.cell)!=null&&r.value?new Date((o=i==null?void 0:i.cell)==null?void 0:o.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:297,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const r=localStorage.getItem("isAuth"),o=JSON.parse(r),{data:s}=U(o==null?void 0:o.roleid);if(!s)return null;const P=(s==null?void 0:s.readproject)===!0,x=(s==null?void 0:s.updateproject)===!0,$=(s==null?void 0:s.deleteproject)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[P&&e(T,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{className:"action-btn",to:`/view-project/${i==null?void 0:i.cell.value}`,type:"button",children:e(y,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:323,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:322,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:321,columnNumber:33},void 0),x&&e(T,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{to:`/update-project/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(y,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:332,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:331,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:330,columnNumber:33},void 0),$&&e(T,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var F,M;return X((M=(F=i==null?void 0:i.cell)==null?void 0:F.row)==null?void 0:M.original)},children:e(y,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:347,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:346,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:339,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:318,columnNumber:21},void 0)}}],ee=c.exports.useMemo(()=>D,[]),le=c.exports.useMemo(()=>t),ie=j.exports.useTable({columns:ee,data:le,initialState:{pageIndex:0,pageSize:50}},j.exports.useGlobalFilter,j.exports.useSortBy,j.exports.usePagination,j.exports.useRowSelect,i=>{i.visibleColumns.push(r=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:o})=>e("div",{children:e(G,{...o()},void 0,!1,{fileName:l,lineNumber:378,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:377,columnNumber:25},void 0),Cell:({row:o})=>e("div",{children:e(G,{...o.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:383,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:382,columnNumber:25},void 0)},...r])}),{getTableProps:re,getTableBodyProps:ae,headerGroups:oe,footerGroups:ye,page:te,nextPage:ne,previousPage:se,canNextPage:S,canPreviousPage:A,pageOptions:O,state:me,gotoPage:w,pageCount:ce,setPageSize:ue,setGlobalFilter:de,prepareRow:Ne}=ie,{globalFilter:ve,pageIndex:E,pageSize:fe}=me;return e(b,{children:e(be,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:d},void 0,!1,{fileName:l,lineNumber:417,columnNumber:21},void 0),(a==null?void 0:a.createproject)===!0&&e(C,{to:p,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:N},void 0,!1,{fileName:l,lineNumber:420,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:416,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(xe,{filter:ve,setFilter:de},void 0,!1,{fileName:l,lineNumber:425,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:424,columnNumber:17},void 0),e(ge,{showModal:m,handleClose:Z,dataRole:a,loaderModal:f,linkedData:h,handleDeleteData:R,dataId:J,moduleName:"Project Name",PropertyData:q,buildingData:Q,projectName:W},void 0,!1,{fileName:l,lineNumber:427,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...re,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:oe.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(r=>r.Header==="action"&&!((a==null?void 0:a.readproject)===!0||(a==null?void 0:a.updateproject)===!0||(a==null?void 0:a.deleteproject)===!0)?e("th",{},void 0,!1,{fileName:l,lineNumber:444,columnNumber:60},void 0):e("th",{...r.getHeaderProps(r.getSortByToggleProps()),scope:"col",className:"table-th",children:[r.render("Header"),e("span",{children:r.isSorted?r.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:454,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:448,columnNumber:53},void 0))},void 0,!1,{fileName:l,lineNumber:437,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:435,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...ae,children:te.map(i=>(Ne(i),e("tr",{...i.getRowProps(),children:i.cells.map(r=>e("td",{...r.getCellProps(),className:"table-td",children:r.render("Cell")},void 0,!1,{fileName:l,lineNumber:473,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:470,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:463,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:431,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:430,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:429,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:428,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:fe,onChange:i=>ue(Number(i.target.value)),children:[50,100,200].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:494,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:488,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[E+1," of ",O.length]},void 0,!0,{fileName:l,lineNumber:501,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:499,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:487,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>w(0),disabled:!A,children:e(y,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:514,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:508,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:507,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>se(),disabled:!A,children:"Prev"},void 0,!1,{fileName:l,lineNumber:518,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:517,columnNumber:25},void 0),O.map((i,r)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${r===E?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>w(r),children:i+1},void 0,!1,{fileName:l,lineNumber:529,columnNumber:33},void 0)},r,!1,{fileName:l,lineNumber:528,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ne(),disabled:!S,children:"Next"},void 0,!1,{fileName:l,lineNumber:543,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:542,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>w(ce-1),disabled:!S,className:` ${S?"":"opacity-50 cursor-not-allowed"}`,children:e(y,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:559,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:553,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:552,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:506,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:486,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:415,columnNumber:13},void 0)},void 0,!1)};var L="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\project\\AllProject.jsx";const Ae=()=>{const[d,N]=c.exports.useState([]),[p,t]=c.exports.useState(!1);return c.exports.useEffect(()=>{t(!0),(async()=>{const a=await(await fetch("http://dev-rare.srp.ai/projectname")).json();N(a),t(!1)})()},[]),e(b,{children:p===!1?e("div",{className:" space-y-5",children:e(je,{pagelink:"/add-project",linktitle:"Add new Project",title:"All Project",allCustomers:d,onDataUpdate:()=>{t(!0),(async()=>{const a=await(await fetch("http://dev-rare.srp.ai/projectname")).json();N(a),t(!1)})()}},void 0,!1,{fileName:L,lineNumber:37,columnNumber:25},void 0)},void 0,!1,{fileName:L,lineNumber:36,columnNumber:21},void 0):e(V,{},void 0,!1,{fileName:L,lineNumber:38,columnNumber:30},void 0)},void 0,!1)};export{Ae as default};
