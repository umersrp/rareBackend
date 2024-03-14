import{r as g,af as E,j as t,F as h,e as $,L as F,bN as D}from"./index.3bc655c6.js";import{I as q,M as L}from"./InvoicesTable.770173d2.js";import"./GlobalFilter.cbaa519f.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\maintenance-management\\AllMaintenanceManagement.jsx";const S=()=>{const[l,N]=g.exports.useState([]),[I,o]=g.exports.useState(!1),P=localStorage.getItem("isAuth"),a=JSON.parse(P),v=E();g.exports.useEffect(()=>{o(!0),(async()=>{o(!0);try{const c=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,w=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(c);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const M=r.status===400?[]:await r.json(),s=await fetch(w);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const b=s.status===400?[]:await s.json(),y=[...M,...b];if(v.pathname==="/owner-maintenancemanagement-invoices"){const d=y.map(e=>e._id).map(e=>fetch(`http://dev-rare.srp.ai/maintenancemanagement/api/q?propertyid=${e}&converted_invoice=true`).then(u=>u.json())),m=(await Promise.all(d)).filter(e=>e.message!=="No Maintenance Management found"),p=[].concat(...m),i=new Map;p.forEach(e=>{i.has(e==null?void 0:e._id)||i.set(e==null?void 0:e._id,e)});const f=[...Array.from(i.values())].reverse();N(f),o(!1)}else{const d=y.map(e=>e._id).map(e=>fetch(`http://dev-rare.srp.ai/maintenancemanagement/api/q?propertyid=${e}`).then(u=>u.json())),m=(await Promise.all(d)).filter(e=>e.message!=="No Maintenance Management found"),p=[].concat(...m),i=new Map;p.forEach(e=>{i.has(e==null?void 0:e._id)||i.set(e==null?void 0:e._id,e)});const f=[...Array.from(i.values())].reverse();N(f),o(!1)}}catch(c){console.error("Error fetching data:",c),o(!1)}})()},[v.pathname]);const j=()=>{o(!0),(async()=>{o(!0);try{const c=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,w=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(c);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const M=r.status===400?[]:await r.json(),s=await fetch(w);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const b=s.status===400?[]:await s.json(),d=[...M,...b].map(e=>e._id).map(e=>fetch(`http://dev-rare.srp.ai/maintenancemanagement/api/q?propertyid=${e}`).then(u=>u.json())),m=(await Promise.all(d)).filter(e=>e.message!=="No Maintenance Management found"),p=[].concat(...m),i=new Map;p.forEach(e=>{i.has(e==null?void 0:e._id)||i.set(e==null?void 0:e._id,e)});const f=[...Array.from(i.values())].reverse();N(f),o(!1)}catch(c){console.error("Error fetching data:",c),o(!1)}})()};return t(h,{children:I===!1?t(h,{children:l!=null&&l.length?t("div",{className:" space-y-5",children:v.pathname==="/owner-maintenancemanagement-invoices"?t(q,{title:"All Maintenance Management Invoices",allData:l},void 0,!1,{fileName:n,lineNumber:183,columnNumber:45},void 0):t(L,{pagelink:"/maintenancemanagementform",linktitle:"Create Maintenance Management Quotations",title:"All Maintenance Management Quotations",allData:l,updateData:j},void 0,!1,{fileName:n,lineNumber:184,columnNumber:45},void 0)},void 0,!1,{fileName:n,lineNumber:180,columnNumber:33},void 0):t($,{children:v.pathname==="/owner-maintenancemanagement-invoices"?t(h,{children:[t("div",{className:"flex justify-between items-center mb-6",children:t("h4",{className:"card-title",children:"All Maintenance Management Invoices"},void 0,!1,{fileName:n,lineNumber:192,columnNumber:53},void 0)},void 0,!1,{fileName:n,lineNumber:191,columnNumber:49},void 0),t("p",{children:"No Maintenance Management Invoices Found"},void 0,!1,{fileName:n,lineNumber:194,columnNumber:49},void 0)]},void 0,!0):t(h,{children:[t("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"All Maintenance Management Quotations"},void 0,!1,{fileName:n,lineNumber:198,columnNumber:53},void 0),t(F,{to:"/maintenancemanagementform",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add Maintenance Management Quotations"},void 0,!1,{fileName:n,lineNumber:199,columnNumber:53},void 0)]},void 0,!0,{fileName:n,lineNumber:197,columnNumber:49},void 0),t("p",{children:"No Maintenance Management Quotations Found"},void 0,!1,{fileName:n,lineNumber:201,columnNumber:49},void 0)]},void 0,!0)},void 0,!1,{fileName:n,lineNumber:187,columnNumber:33},void 0)},void 0,!1):t(D,{},void 0,!1,{fileName:n,lineNumber:207,columnNumber:23},void 0)},void 0,!1)};export{S as default};
