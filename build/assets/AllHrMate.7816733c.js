import{r as v,b as M,j as l,F as Z,I as le,bN as oe,e as te,ap as ae,b$ as me}from"./index.72434430.js";import{D as ce}from"./index.esm.9be3aa93.js";import{N as de}from"./not-found.46bdbc04.js";import{E as ue}from"./excel.9601f4f9.js";import{u as X,w as Ne}from"./jspdf.plugin.autotable.81013131.js";import"./jspdf.es.min.ebbd5ef1.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\hrmate\\AllHrMateTable.jsx";const fe=({allBooking:T,exportToExcel:E,hrData:R,companyName:u,employeeName:A})=>{const U=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1},void 0,!1,{fileName:t,lineNumber:23,columnNumber:24},void 0)},{Header:"Name",accessor:e=>{var a;return`${(a=e.employeeData)==null?void 0:a.name}`},Cell:e=>{var a,r;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:30,columnNumber:24},void 0)}},{Header:"email",accessor:e=>{var a;return`${(a=e.employeeData)==null?void 0:a.email}`},Cell:e=>{var a,r;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:37,columnNumber:24},void 0)}},{Header:"Date",accessor:e=>`${e.date}`,Cell:e=>{var a,r;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:t,lineNumber:44,columnNumber:24},void 0)}},{Header:"Time In",accessor:e=>`${e.TimeIn}`,Cell:e=>{var f;const a=(f=e==null?void 0:e.cell)==null?void 0:f.value;if(!a)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"},void 0,!1,{fileName:t,lineNumber:57,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:56,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:55,columnNumber:25},void 0);const m=(b=>{const[s,c,p]=b.split(":").map(Number);return new Date(2023,6,27,s,c,p).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})})(a);return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:m},void 0,!1,{fileName:t,lineNumber:81,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:80,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:79,columnNumber:21},void 0)}},{Header:"Time In Address",accessor:e=>`${e.TimeInAddress}`,Cell:e=>{var a,r,m,f,b;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(a=e==null?void 0:e.cell)!=null&&a.value?((m=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:m.slice(0,25))+(((b=(f=e==null?void 0:e.cell)==null?void 0:f.value)==null?void 0:b.length)>25?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:96,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:95,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:94,columnNumber:21},void 0)}},{Header:"Time Out",accessor:e=>`${e.TimeOut}`,Cell:e=>{var f;const a=(f=e==null?void 0:e.cell)==null?void 0:f.value;if(!a)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"},void 0,!1,{fileName:t,lineNumber:114,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:113,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:112,columnNumber:25},void 0);const m=(b=>{const[s,c,p]=b.split(":").map(Number);return new Date(2023,6,27,s,c,p).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})})(a);return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:m},void 0,!1,{fileName:t,lineNumber:137,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:136,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:135,columnNumber:21},void 0)}},{Header:"Time Out Address",accessor:e=>`${e.TimeOutAddress}`,Cell:e=>{var a,r,m,f,b;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(a=e==null?void 0:e.cell)!=null&&a.value?((m=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:m.slice(0,25))+(((b=(f=e==null?void 0:e.cell)==null?void 0:f.value)==null?void 0:b.length)>25?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:152,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:151,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:150,columnNumber:21},void 0)}},{Header:"Total hours",accessor:e=>{var a;return`${(a=e.employeeData)==null?void 0:a.designation}`},Cell:e=>{var x,S,k,F,C,I;const a=(k=(S=(x=e==null?void 0:e.cell)==null?void 0:x.row)==null?void 0:S.original)==null?void 0:k.TimeIn,r=(I=(C=(F=e==null?void 0:e.cell)==null?void 0:F.row)==null?void 0:C.original)==null?void 0:I.TimeOut;if(!a||!r)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"},void 0,!1,{fileName:t,lineNumber:171,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:170,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:169,columnNumber:25},void 0);const m=$=>{const[H,P,L]=$.split(":").map(parseFloat);return H*3600+P*60+L},f=m(a),s=m(r)-f;if(isNaN(s)||s<0)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Invalid Time Format"},void 0,!1,{fileName:t,lineNumber:194,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:193,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:192,columnNumber:25},void 0);const c=Math.floor(s/3600),p=Math.floor(s%3600/60),N=`${c}:${p} Hours`;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:N},void 0,!1,{fileName:t,lineNumber:214,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:213,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:212,columnNumber:21},void 0)}},{Header:"Over Time",accessor:e=>{var a;return`${(a=e.employeeData)==null?void 0:a.reportingto}`},Cell:e=>{var x,S,k,F,C,I;const a=(k=(S=(x=e==null?void 0:e.cell)==null?void 0:x.row)==null?void 0:S.original)==null?void 0:k.TimeIn,r=(I=(C=(F=e==null?void 0:e.cell)==null?void 0:F.row)==null?void 0:C.original)==null?void 0:I.TimeOut;if(!a||!r)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"},void 0,!1,{fileName:t,lineNumber:233,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:232,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:231,columnNumber:25},void 0);const m=$=>{const[H,P,L]=$.split(":").map(parseFloat);return H*3600+P*60+L},f=m(a),s=m(r)-f;if(isNaN(s)||s<0)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Invalid Time Format"},void 0,!1,{fileName:t,lineNumber:256,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:255,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:254,columnNumber:25},void 0);const c=Math.floor(s/3600),p=Math.floor(s%3600/60),N=c>11||c===11&&p>=30;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${N?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:N?"Yes":"No"},void 0,!1,{fileName:t,lineNumber:281,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:280,columnNumber:21},void 0)}},{Header:"Late",accessor:e=>{var a;return`${(a=e.employeeData)==null?void 0:a.phonenumber}`},Cell:e=>{var s,c,p,N,x,S;const a=(p=(c=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:c.original)==null?void 0:p.TimeIn,r=(S=(x=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:x.original)==null?void 0:S.TimeOut;if(!a)return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"},void 0,!1,{fileName:t,lineNumber:304,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:303,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:302,columnNumber:25},void 0);const m=k=>{const[F,C,I]=k.split(":").map(parseFloat);return F*3600+C*60+I},f=m(a);m(r);const b=(u==null?void 0:u.label)==="admin@srca.com.pk"&&f>m("10:00:00")?"Yes":"No";return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${b==="No"?"text-success-500 bg-success-500":""} 
            ${b==="Yes"?"text-danger-500 bg-danger-500":""}
            
             `,children:b},void 0,!1,{fileName:t,lineNumber:326,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:325,columnNumber:21},void 0)}}],_=v.exports.useMemo(()=>U,[]),n=v.exports.useMemo(()=>T),B=M.exports.useTable({columns:_,data:n,initialState:{pageIndex:0,pageSize:50}},M.exports.useGlobalFilter,M.exports.useSortBy,M.exports.usePagination,M.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[...a])}),{getTableProps:z,getTableBodyProps:Y,headerGroups:G,footerGroups:w,page:W,nextPage:V,previousPage:q,canNextPage:o,canPreviousPage:y,pageOptions:j,state:J,gotoPage:h,pageCount:K,setPageSize:O,setGlobalFilter:ee,prepareRow:Q}=B,{globalFilter:i,pageIndex:D,pageSize:g}=J;return l(Z,{children:[l("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:(u==null?void 0:u.value)&&(A==null?void 0:A.value)&&(T==null?void 0:T.length)&&(new Date().getDate()===26||new Date().getDate()===30)?l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>E(R),children:[l("img",{src:ue,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:t,lineNumber:411,columnNumber:29},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:t,lineNumber:412,columnNumber:29},void 0)]},void 0,!0,{fileName:t,lineNumber:410,columnNumber:25},void 0):null},void 0,!1,{fileName:t,lineNumber:405,columnNumber:13},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[110%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...z,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:G.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:t,lineNumber:436,columnNumber:49},void 0)]},void 0,!0,{fileName:t,lineNumber:428,columnNumber:45},void 0))},void 0,!1,{fileName:t,lineNumber:426,columnNumber:37},void 0))},void 0,!1,{fileName:t,lineNumber:424,columnNumber:29},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Y,children:W.map(e=>(Q(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:t,lineNumber:458,columnNumber:53},void 0))},void 0,!1,{fileName:t,lineNumber:455,columnNumber:41},void 0)))},void 0,!1,{fileName:t,lineNumber:448,columnNumber:29},void 0)]},void 0,!0,{fileName:t,lineNumber:420,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:419,columnNumber:21},void 0)},void 0,!1,{fileName:t,lineNumber:418,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:417,columnNumber:13},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:g,onChange:e=>O(Number(e.target.value)),children:[50,100,200].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:t,lineNumber:479,columnNumber:29},void 0))},void 0,!1,{fileName:t,lineNumber:473,columnNumber:21},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[D+1," of ",j.length]},void 0,!0,{fileName:t,lineNumber:486,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:484,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:472,columnNumber:17},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>h(0),disabled:!y,children:l(le,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:t,lineNumber:499,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:493,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:492,columnNumber:21},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>q(),disabled:!y,children:"Prev"},void 0,!1,{fileName:t,lineNumber:503,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:502,columnNumber:21},void 0),j.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===D?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>h(a),children:e+1},void 0,!1,{fileName:t,lineNumber:514,columnNumber:29},void 0)},a,!1,{fileName:t,lineNumber:513,columnNumber:25},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${o?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>V(),disabled:!o,children:"Next"},void 0,!1,{fileName:t,lineNumber:528,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:527,columnNumber:21},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>h(K-1),disabled:!o,className:` ${o?"":"opacity-50 cursor-not-allowed"}`,children:l(le,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:t,lineNumber:544,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:538,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:537,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:491,columnNumber:17},void 0)]},void 0,!0,{fileName:t,lineNumber:471,columnNumber:13},void 0)]},void 0,!0)};var d="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\hrmate\\HrMateTable.jsx";const ie={option:(T,E)=>({...T,fontSize:"14px"})},be=({title:T,linktitle:E,pagelink:R})=>{const[u,A]=v.exports.useState([]),[U,_]=v.exports.useState(!1),[n,B]=v.exports.useState({startDate:"",endDate:""}),z=async i=>{B(i)};v.exports.useEffect(()=>{(async()=>{_(!0);const g=await(await fetch("http://dev-rare.srp.ai/booking")).json();return A(g),_(!1)})()},[]);const[Y,G]=v.exports.useState(),w={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},W={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}};v.exports.useEffect(()=>{var D;let i=0;for(let g=0;g<(u==null?void 0:u.length);g++){let e=parseFloat((D=u[g])==null?void 0:D.roomrentamount);i+=e}G(i)},[u==null?void 0:u.length]),u!=null&&u.length&&(u==null||u.length),Y&&Y.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});const[V,q]=v.exports.useState([]),[o,y]=v.exports.useState();v.exports.useEffect(()=>{fetch("http://hrmate.srp.ai/company").then(i=>i.json()).then(i=>{const D=i==null?void 0:i.map(g=>({label:g.email,value:g.email}));q(D)})},[]);const[j,J]=v.exports.useState([]),[h,K]=v.exports.useState();v.exports.useEffect(()=>{o!=null&&o.value&&fetch("http://hrmate.srp.ai/employees/"+(o==null?void 0:o.value)).then(i=>i.json()).then(i=>{const D=i==null?void 0:i.map(g=>({label:g.email,value:g.email}));J(D)})},[o==null?void 0:o.value]);const[O,ee]=v.exports.useState([]);console.log("eeee",O),v.exports.useEffect(()=>{(o==null?void 0:o.value)&&(h==null?void 0:h.value)&&(async()=>{const e=(await(await fetch(`http://hrmate.srp.ai/attendance/${o==null?void 0:o.value}/all/${h==null?void 0:h.value}?fromDate=${n==null?void 0:n.startDate}&toDate=${n==null?void 0:n.endDate}`)).json()).sort((a,r)=>new Date(a.date)-new Date(r.date));ee(e),A(e)})()},[o==null?void 0:o.value,h==null?void 0:h.value,n==null?void 0:n.startDate,n==null?void 0:n.endDate]);function Q(i){var b;console.log("=====>",i);let D;i.map(s=>{var c;D=(c=s.employeeData)==null?void 0:c.name});const g={font:{color:{rgb:"FFFFFF"}},fill:{fgColor:{rgb:"FF0000"}}},e={font:{color:{rgb:"000000"}},fill:{fgColor:{rgb:"00FF00"}}},a=[["Name","Email","Date","Time In","Time In Address","Time Out","Time Out Address","Hours Worked","Overtime","Late"],...i.map(s=>{var $,H;const c=s.TimeIn.split(":"),p=s.TimeOut.split(":"),N=new Date,x=new Date;if(N.setHours(parseInt(c[0],10)),N.setMinutes(parseInt(c[1],10)),N.setSeconds(parseInt(c[2],10)),x.setHours(parseInt(p[0],10)),x.setMinutes(parseInt(p[1],10)),x.setSeconds(parseInt(p[2],10)),isNaN(N)||isNaN(x))return[];const S=(x-N)/(1e3*60*60),k=P=>{const[L,ne,re]=P.split(":").map(parseFloat);return L*3600+ne*60+re},F=k(s==null?void 0:s.TimeIn),C=(o==null?void 0:o.label)==="admin@srca.com.pk"&&F>k("10:00:00")?"Yes":"No",I=S>11.5;return[($=s.employeeData)==null?void 0:$.name,(H=s.employeeData)==null?void 0:H.email,new Date(s.date).toDateString(),s.TimeIn,s.TimeInAddress,s.TimeOut,s.TimeOutAddress,S.toFixed(2)>0?S.toFixed(2):"Invalid Time",I?"Yes":"No",C]})],r=X.aoa_to_sheet(a);for(let s=1;s<=i.length;s++){const c=X.encode_cell({r:s,c:8}),p=(b=r[c])==null?void 0:b.v;let N;p==="Yes"?N=g:N=e;const x=r[c];x?x.s=N:r[c]={v:p,s:N}}const m=X.book_new();X.book_append_sheet(m,r,"Sheet1");const f=Ne(m,{bookType:"xlsx",type:"array"});me.exports.saveAs(new Blob([f],{type:"application/octet-stream"}),`${D}.xlsx`)}return l(Z,{children:U===!0?l(oe,{},void 0,!1,{fileName:d,lineNumber:546,columnNumber:21},void 0):l(te,{children:[l("div",{className:"flex justify-between items-center mb-6",children:l("h4",{className:"card-title",children:"Employees Attendence"},void 0,!1,{fileName:d,lineNumber:549,columnNumber:29},void 0)},void 0,!1,{fileName:d,lineNumber:548,columnNumber:25},void 0),l("div",{className:"grid grid-cols-12 gap-5 mb-5",children:l("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:l(te,{bodyClass:"p-4",children:l("div",{className:"flex justify-between items-center  mb-[15px]",children:[l("h4",{children:(n==null?void 0:n.startDate)&&(n==null?void 0:n.endDate)?"From: "+new Date(n==null?void 0:n.startDate).toDateString()+" - To: "+new Date(n==null?void 0:n.endDate).toDateString():"Please Select Date First"},void 0,!1,{fileName:d,lineNumber:556,columnNumber:41},void 0),l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(ce,{value:n,inputClassName:"input-class",containerClassName:"container-class",onChange:z,placeholder:"Select Date"},void 0,!1,{fileName:d,lineNumber:564,columnNumber:49},void 0)},void 0,!1,{fileName:d,lineNumber:563,columnNumber:45},void 0)},void 0,!1,{fileName:d,lineNumber:562,columnNumber:41},void 0)]},void 0,!0,{fileName:d,lineNumber:555,columnNumber:37},void 0)},void 0,!1,{fileName:d,lineNumber:554,columnNumber:33},void 0)},void 0,!1,{fileName:d,lineNumber:553,columnNumber:29},void 0)},void 0,!1,{fileName:d,lineNumber:552,columnNumber:25},void 0),(n==null?void 0:n.startDate)&&(n==null?void 0:n.endDate)?l("div",{className:"flex justify-between items-center mb-[25px]",children:[l("div",{className:"w-[48%]",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Company Name"},void 0,!1,{fileName:d,lineNumber:606,columnNumber:41},void 0),l(ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:V,value:V.filter(function(i){return(i==null?void 0:i.value)===(o==null?void 0:o.value)}),onChange:i=>{y(i)},styles:ie,id:"hh"},void 0,!1,{fileName:d,lineNumber:609,columnNumber:41},void 0)]},void 0,!0,{fileName:d,lineNumber:605,columnNumber:37},void 0),l("div",{className:"w-[48%]",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Employee Name"},void 0,!1,{fileName:d,lineNumber:625,columnNumber:41},void 0),l(ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:j,value:j.filter(function(i){return(i==null?void 0:i.value)===(h==null?void 0:h.value)}),onChange:i=>{K(i)},styles:ie,id:"hh"},void 0,!1,{fileName:d,lineNumber:628,columnNumber:41},void 0)]},void 0,!0,{fileName:d,lineNumber:624,columnNumber:37},void 0)]},void 0,!0,{fileName:d,lineNumber:604,columnNumber:33},void 0):null,O!=null&&O.length?l(fe,{allBooking:O,exportToExcel:Q,hrData:O,companyName:o,employeeName:h},void 0,!1,{fileName:d,lineNumber:647,columnNumber:33},void 0):l("div",{className:"flex justify-center items-center",children:l("img",{src:de,alt:"NotFound",className:"h-[564px] object-contain"},void 0,!1,{fileName:d,lineNumber:649,columnNumber:37},void 0)},void 0,!1,{fileName:d,lineNumber:648,columnNumber:33},void 0)]},void 0,!0,{fileName:d,lineNumber:547,columnNumber:21},void 0)},void 0,!1)};var se="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\hrmate\\AllHrMate.jsx";const Se=()=>{const[T,E]=v.exports.useState([]);return v.exports.useEffect(()=>{(async()=>{const A=await(await fetch("http://dev-rare.srp.ai/booking")).json();return E(A)})()},[]),l(Z,{children:l("div",{className:" space-y-5",children:l(be,{pagelink:"/add-booking",linktitle:"Add new Booking",title:"All Booking",allData:T},void 0,!1,{fileName:se,lineNumber:20,columnNumber:17},void 0)},void 0,!1,{fileName:se,lineNumber:19,columnNumber:13},void 0)},void 0,!1)};export{Se as default};