import{r as a,j as t,c as p,I as h,f as d}from"./index.177fc75c.js";const x=({totalPages:i,currentPage:e,handlePageChange:s,text:c,className:n="custom-class"})=>{const[o,u]=a.exports.useState([]);return a.exports.useEffect(()=>{let l=[];for(let r=1;r<=i;r++)l.push(r);u(l)},[i]),t("div",{className:n,children:p("ul",{className:"pagination",children:[t("li",{children:c?t("button",{className:" text-slate-600 dark:text-slate-300 prev-next-btn",onClick:()=>s(e-1),disabled:e===1,children:"Previous"}):t("button",{className:"text-xl leading-4 text-slate-900 dark:text-white h-6  w-6 flex  items-center justify-center flex-col prev-next-btn ",onClick:()=>s(e-1),disabled:e===1,children:t(h,{icon:"heroicons-outline:chevron-left"})})}),o.map(l=>t("li",{children:t("button",{className:`${l===e?"active":""} page-link`,onClick:()=>s(l),disabled:l===e,children:l})},l)),t("li",{children:c?t("button",{onClick:()=>s(e+1),disabled:e===i,className:" text-slate-600 dark:text-slate-300 prev-next-btn",children:"Next"}):t("button",{className:"text-xl leading-4 text-slate-900 dark:text-white  h-6  w-6 flex  items-center justify-center flex-col prev-next-btn",onClick:()=>s(e+1),disabled:e===i,children:t(h,{icon:"heroicons-outline:chevron-right"})})})]})})},m=()=>{const[i,e]=a.exports.useState(1),[s,c]=a.exports.useState(6),n=o=>{e(o)};return p("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[t(d,{title:"Basic Pagination",children:t(x,{totalPages:s,currentPage:i,handlePageChange:n})}),t(d,{title:"Pagination With Background",children:t(x,{className:"bg-slate-100 dark:bg-slate-500  w-fit py-2 px-3 rounded mx-auto",totalPages:s,currentPage:i,handlePageChange:n})}),t("div",{className:"xl:col-span-2  col-span-1",children:t(d,{title:"Pagination With Text",children:t(x,{text:!0,totalPages:s,currentPage:i,handlePageChange:n})})})]})};export{m as default};
