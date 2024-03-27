import{R as _,j as l,F as S,bL as R,r as N,b as j,e as Le,L as F,I as $,bP as w,bN as ee,M as Te,T as M}from"./index.322e6ae4.js";import{G as _e}from"./GlobalFilter.66891a4c.js";import{D as Me}from"./DeleteParagraph.ab4be451.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\building\\BuildingTable.jsx";const D=_.forwardRef(({indeterminate:p,...h},b)=>{const m=_.useRef(),g=b||m;return _.useEffect(()=>{g.current.indeterminate=p},[g,p]),l(S,{children:l("input",{type:"checkbox",ref:g,...h,className:"table-checkbox"},void 0,!1,{fileName:i,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),Oe=({showModal:p,handleClose:h,loaderModal:b,linkedData:m,handleDeleteData:g,dataId:A,moduleName:x,PropertyData:s,buildingName:I,dataRole:C})=>l("div",{className:"thumbnail-container",children:p&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${x}?`},void 0,!1,{fileName:i,lineNumber:49,columnNumber:29},void 0),l("img",{src:w,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:h},void 0,!1,{fileName:i,lineNumber:50,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:48,columnNumber:25},void 0),b===!0?l(ee,{},void 0,!1,{fileName:i,lineNumber:54,columnNumber:33},void 0):l(S,{children:[m!=null&&m.length?l("div",{className:"data-list-modal",children:l(S,{children:[l("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:x},void 0,!1,{fileName:i,lineNumber:61,columnNumber:57},void 0)," ",I," is linked with the following modules:"]},void 0,!0,{fileName:i,lineNumber:60,columnNumber:53},void 0),s!=null&&s.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:l("div",{className:"flex items-center",children:[l("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:i,lineNumber:68,columnNumber:73},void 0),(C==null?void 0:C.deletepropert)===!0?l(S,{children:s==null?void 0:s.map((y,k)=>l(F,{className:" mr-[5px] hover:underline",to:`/view-property/${y==null?void 0:y._id}?delete=true`,children:[y==null?void 0:y.unitnumber,k!==s.length-1?",":null]},k+1,!0,{fileName:i,lineNumber:74,columnNumber:93},void 0))},void 0,!1):l(Me,{moduleName:x,linkedName:"Property"},void 0,!1,{fileName:i,lineNumber:78,columnNumber:81},void 0)]},void 0,!0,{fileName:i,lineNumber:67,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:65,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:58,columnNumber:45},void 0):null,l("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(m==null?void 0:m.length)||(s==null?void 0:s.length)?l("p",{className:" mt-[10px]",children:`This ${x} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:i,lineNumber:90,columnNumber:49},void 0):null,!(m!=null&&m.length)&&!(s!=null&&s.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>g(A),children:"Delete"},void 0,!1,{fileName:i,lineNumber:95,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:87,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:i,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:46,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:44,columnNumber:9},void 0),Pe=({showAmenitiesModal:p,handleCloseAmenities:h,AmenitiesModalData:b})=>l("div",{className:"thumbnail-container",children:p&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px] pb-[25px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Building Amenities"},void 0,!1,{fileName:i,lineNumber:156,columnNumber:29},void 0),l("img",{src:w,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:h},void 0,!1,{fileName:i,lineNumber:157,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:155,columnNumber:25},void 0),l("div",{className:"flex flex-wrap items-center gap-[15px]",children:b==null?void 0:b.map((m,g)=>l("p",{className:"  form-control py-2  w-[49%] ",children:m==null?void 0:m.amenitiesname},g+1,!1,{fileName:i,lineNumber:162,columnNumber:37},void 0))},void 0,!1,{fileName:i,lineNumber:159,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:154,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:153,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:151,columnNumber:9},void 0),Ve=({title:p,linktitle:h,pagelink:b,allCustomers:m,onDataUpdate:g})=>{const A=localStorage.getItem("isAuth"),x=JSON.parse(A),{data:s}=R(x==null?void 0:x.roleid),[I,C]=N.exports.useState(!1),[y,k]=N.exports.useState(!1),[le,ie]=N.exports.useState(""),[ae,ne]=N.exports.useState(""),[se,L]=N.exports.useState(""),[te,me]=N.exports.useState(""),ue=async e=>{if(C(!0),k(!0),e)try{const a=`http://dev-rare.srp.ai/property/api/advancesearch?buildingid=${e==null?void 0:e._id}&softdelete=false`,n=await fetch(a);if(!n.ok&&n.status!==400)throw new Error(`API 2 failed with status: ${n.status}`);const t=n.status===400?[]:await n.json(),u=[...t];ie(u),ne(e),L(t),me(e==null?void 0:e.buildingname),k(!1)}catch(a){console.error("Error fetching data:",a),k(!1)}},ce=()=>{C(!1),L("")},de=async e=>{try{await Te.patch("http://dev-rare.srp.ai/buildingname/api/buildingdelete",{_id:e,softdelete:!0}),g(),L("")}catch(a){console.log(a,"error")}},[re,P]=N.exports.useState(!1),[oe,V]=N.exports.useState(""),Ne=e=>{P(!0),V(e)},be=()=>{P(!1),V("")},ve=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1},void 0,!1,{fileName:i,lineNumber:247,columnNumber:24},void 0)},{Header:"Building Name",accessor:"buildingname",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:254,columnNumber:24},void 0)}},{Header:"Building Code",accessor:"buildingcode",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:261,columnNumber:24},void 0)}},{Header:"Project Name",accessor:"project_name",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:268,columnNumber:24},void 0)}},{Header:"Community Name",accessor:"community_name",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:275,columnNumber:24},void 0)}},{Header:"Amenities",accessor:"amenities_data",Cell:e=>{var a,n,t,u,r,o,c,d,v,f,G,z,J,q,Q,W,Y,K,X;return l("span",{className:"block w-full",children:!((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)!=null&&n.length)||!((t=e==null?void 0:e.cell)!=null&&t.value)?l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${!((r=(u=e==null?void 0:e.cell)==null?void 0:u.value)!=null&&r.length)||!((o=e==null?void 0:e.cell)!=null&&o.value)?"text-danger-500 bg-danger-500":"text-success-500 bg-success-500 cursor-pointer"} `,children:!((d=(c=e==null?void 0:e.cell)==null?void 0:c.value)!=null&&d.length)||!((v=e==null?void 0:e.cell)!=null&&v.value)?"0":"View "+((G=(f=e==null?void 0:e.cell)==null?void 0:f.value)==null?void 0:G.length)},void 0,!1,{fileName:i,lineNumber:286,columnNumber:33},void 0):l("span",{onClick:()=>{var Z;return Ne((Z=e==null?void 0:e.cell)==null?void 0:Z.value)},className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${!((J=(z=e==null?void 0:e.cell)==null?void 0:z.value)!=null&&J.length)||!((q=e==null?void 0:e.cell)!=null&&q.value)?"text-danger-500 bg-danger-500":"text-success-500 bg-success-500 cursor-pointer"} `,children:!((W=(Q=e==null?void 0:e.cell)==null?void 0:Q.value)!=null&&W.length)||!((Y=e==null?void 0:e.cell)!=null&&Y.value)?"0":"View "+((X=(K=e==null?void 0:e.cell)==null?void 0:K.value)==null?void 0:X.length)},void 0,!1,{fileName:i,lineNumber:294,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:283,columnNumber:21},void 0)}},{Header:"typical floor plan images",accessor:"typicalfloorplan",Cell:e=>{var a,n,t,u,r,o,c,d,v,f;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:n.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((r=(u=e==null?void 0:e.cell)==null?void 0:u.value)==null?void 0:r.length)>0&&((c=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:c.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(f=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:f.length},void 0,!1,{fileName:i,lineNumber:314,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:313,columnNumber:21},void 0)}},{Header:"building elevation images",accessor:"buildingelevation",Cell:e=>{var a,n,t,u,r,o,c,d,v,f;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:n.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((r=(u=e==null?void 0:e.cell)==null?void 0:u.value)==null?void 0:r.length)>0&&((c=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:c.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(f=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:f.length},void 0,!1,{fileName:i,lineNumber:335,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:334,columnNumber:21},void 0)}},{Header:"amenities images",accessor:"amenitiesimages",Cell:e=>{var a,n,t,u,r,o,c,d,v,f;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:n.length)===0||((t=e==null?void 0:e.cell)==null?void 0:t.value[0])===""?"text-danger-500 bg-danger-500":((r=(u=e==null?void 0:e.cell)==null?void 0:u.value)==null?void 0:r.length)>0&&((c=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:c.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((d=e==null?void 0:e.cell)==null?void 0:d.value[0])===""?"0":(f=(v=e==null?void 0:e.cell)==null?void 0:v.value)==null?void 0:f.length},void 0,!1,{fileName:i,lineNumber:356,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:355,columnNumber:21},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:375,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const a=localStorage.getItem("isAuth"),n=JSON.parse(a),{data:t}=R(n==null?void 0:n.roleid);if(!t)return null;const u=(t==null?void 0:t.readbuilding)===!0,r=(t==null?void 0:t.updatebuilding)===!0,o=(t==null?void 0:t.deletebuilding)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[u&&l(M,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(F,{className:"action-btn",to:`/view-building/${e==null?void 0:e.cell.value}`,type:"button",children:l($,{icon:"heroicons:eye"},void 0,!1,{fileName:i,lineNumber:402,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:401,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:400,columnNumber:33},void 0),r&&l(M,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(F,{to:`/update-building/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l($,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:i,lineNumber:411,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:410,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:409,columnNumber:33},void 0),o&&l(M,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>{var c,d;return ue((d=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:d.original)},children:l($,{icon:"heroicons:trash"},void 0,!1,{fileName:i,lineNumber:426,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:425,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:418,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:397,columnNumber:21},void 0)}}],fe=N.exports.useMemo(()=>ve,[]),pe=N.exports.useMemo(()=>m),he=j.exports.useTable({columns:fe,data:pe,initialState:{pageIndex:0,pageSize:50}},j.exports.useGlobalFilter,j.exports.useSortBy,j.exports.usePagination,j.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:n})=>l("div",{children:l(D,{...n()},void 0,!1,{fileName:i,lineNumber:457,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:456,columnNumber:25},void 0),Cell:({row:n})=>l("div",{children:l(D,{...n.getToggleRowSelectedProps()},void 0,!1,{fileName:i,lineNumber:462,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:461,columnNumber:25},void 0)},...a])}),{getTableProps:ge,getTableBodyProps:xe,headerGroups:ye,footerGroups:Ee,page:Ce,nextPage:ke,previousPage:Se,canNextPage:B,canPreviousPage:H,pageOptions:E,state:Ae,gotoPage:T,pageCount:je,setPageSize:$e,setGlobalFilter:Be,prepareRow:He}=he,{globalFilter:Fe,pageIndex:U,pageSize:Ie}=Ae;return l(S,{children:l(Le,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:p},void 0,!1,{fileName:i,lineNumber:494,columnNumber:21},void 0),(s==null?void 0:s.createbuilding)&&l(F,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:h},void 0,!1,{fileName:i,lineNumber:497,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:493,columnNumber:17},void 0),l("div",{className:"md:flex justify-end items-center mb-6",children:l(_e,{filter:Fe,setFilter:Be},void 0,!1,{fileName:i,lineNumber:502,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:501,columnNumber:17},void 0),l(Oe,{showModal:I,handleClose:ce,dataRole:s,loaderModal:y,linkedData:le,handleDeleteData:de,dataId:ae,moduleName:"Building Name",PropertyData:se,buildingName:te},void 0,!1,{fileName:i,lineNumber:504,columnNumber:17},void 0),l(Pe,{showAmenitiesModal:re,handleCloseAmenities:be,AmenitiesModalData:oe},void 0,!1,{fileName:i,lineNumber:505,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ge,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ye.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((s==null?void 0:s.readbuilding)===!0||(s==null?void 0:s.updatebuilding)===!0||(s==null?void 0:s.deletebuilding)===!0)?l("th",{},void 0,!1,{fileName:i,lineNumber:522,columnNumber:60},void 0):l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:i,lineNumber:532,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:526,columnNumber:53},void 0))},void 0,!1,{fileName:i,lineNumber:515,columnNumber:41},void 0))},void 0,!1,{fileName:i,lineNumber:513,columnNumber:33},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...xe,children:Ce.map(e=>(He(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:i,lineNumber:551,columnNumber:57},void 0))},void 0,!1,{fileName:i,lineNumber:548,columnNumber:45},void 0)))},void 0,!1,{fileName:i,lineNumber:541,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:509,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:508,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:507,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:506,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:Ie,onChange:e=>$e(Number(e.target.value)),children:[50,100,100].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:i,lineNumber:572,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:566,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[U+1," of ",E.length]},void 0,!0,{fileName:i,lineNumber:579,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:577,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:565,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${H?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>T(0),disabled:!H,children:l($,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:i,lineNumber:592,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:586,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:585,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${H?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Se(),disabled:!H,children:"Prev"},void 0,!1,{fileName:i,lineNumber:596,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:595,columnNumber:25},void 0),E.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===U?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>T(a),children:e+1},void 0,!1,{fileName:i,lineNumber:607,columnNumber:33},void 0)},a,!1,{fileName:i,lineNumber:606,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${B?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ke(),disabled:!B,children:"Next"},void 0,!1,{fileName:i,lineNumber:621,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:620,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>T(je-1),disabled:!B,className:` ${B?"":"opacity-50 cursor-not-allowed"}`,children:l($,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:i,lineNumber:637,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:631,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:630,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:584,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:564,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:492,columnNumber:13},void 0)},void 0,!1)};var O="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\building\\AllBuilding.jsx";const Je=()=>{const[p,h]=N.exports.useState([]),[b,m]=N.exports.useState(!1);return N.exports.useEffect(()=>{m(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/buildingname")).json();h(s),m(!1)})()},[]),l(S,{children:b===!1?l("div",{className:" space-y-5",children:l(Ve,{pagelink:"/add-building",linktitle:"Add new Building",title:"All Building",allCustomers:p,onDataUpdate:()=>{m(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/buildingname")).json();h(s),m(!1)})()}},void 0,!1,{fileName:O,lineNumber:37,columnNumber:25},void 0)},void 0,!1,{fileName:O,lineNumber:36,columnNumber:21},void 0):l(ee,{},void 0,!1,{fileName:O,lineNumber:38,columnNumber:30},void 0)},void 0,!1)};export{Je as default};
