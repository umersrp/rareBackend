import{r as m,j as e,I as b,e as c}from"./index.750e0c44.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Pagination.jsx";const N=({totalPages:n,currentPage:i,handlePageChange:o,text:r,className:a="custom-class"})=>{const[d,v]=m.exports.useState([]);return m.exports.useEffect(()=>{let t=[];for(let u=1;u<=n;u++)t.push(u);v(t)},[n]),e("div",{className:a,children:e("ul",{className:"pagination",children:[e("li",{children:r?e("button",{className:" text-slate-600 dark:text-slate-300 prev-next-btn",onClick:()=>o(i-1),disabled:i===1,children:"Previous"},void 0,!1,{fileName:l,lineNumber:25,columnNumber:13},void 0):e("button",{className:"text-xl leading-4 text-slate-900 dark:text-white h-6  w-6 flex  items-center justify-center flex-col prev-next-btn ",onClick:()=>o(i-1),disabled:i===1,children:e(b,{icon:"heroicons-outline:chevron-left"},void 0,!1,{fileName:l,lineNumber:38,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:33,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:23,columnNumber:9},void 0),d.map(t=>e("li",{children:e("button",{className:`${t===i?"active":""} page-link`,onClick:()=>o(t),disabled:t===i,children:t},void 0,!1,{fileName:l,lineNumber:45,columnNumber:13},void 0)},t,!1,{fileName:l,lineNumber:44,columnNumber:11},void 0)),e("li",{children:r?e("button",{onClick:()=>o(i+1),disabled:i===n,className:" text-slate-600 dark:text-slate-300 prev-next-btn",children:"Next"},void 0,!1,{fileName:l,lineNumber:57,columnNumber:13},void 0):e("button",{className:"text-xl leading-4 text-slate-900 dark:text-white  h-6  w-6 flex  items-center justify-center flex-col prev-next-btn",onClick:()=>o(i+1),disabled:i===n,children:e(b,{icon:"heroicons-outline:chevron-right"},void 0,!1,{fileName:l,lineNumber:70,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:55,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:21,columnNumber:5},void 0)};var s="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\pagination.jsx";const x=()=>{const[n,i]=m.exports.useState(1),[o,r]=m.exports.useState(6),a=d=>{i(d)};return e("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e(c,{title:"Basic Pagination",children:e(N,{totalPages:o,currentPage:n,handlePageChange:a},void 0,!1,{fileName:s,lineNumber:16,columnNumber:9},void 0)},void 0,!1,{fileName:s,lineNumber:15,columnNumber:7},void 0),e(c,{title:"Pagination With Background",children:e(N,{className:"bg-slate-100 dark:bg-slate-500  w-fit py-2 px-3 rounded mx-auto",totalPages:o,currentPage:n,handlePageChange:a},void 0,!1,{fileName:s,lineNumber:23,columnNumber:9},void 0)},void 0,!1,{fileName:s,lineNumber:22,columnNumber:7},void 0),e("div",{className:"xl:col-span-2  col-span-1",children:e(c,{title:"Pagination With Text",children:e(N,{text:!0,totalPages:o,currentPage:n,handlePageChange:a},void 0,!1,{fileName:s,lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:s,lineNumber:30,columnNumber:7},void 0)]},void 0,!0,{fileName:s,lineNumber:14,columnNumber:5},void 0)};export{x as default};
