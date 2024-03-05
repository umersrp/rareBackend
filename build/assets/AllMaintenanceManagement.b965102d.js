import{r as _,ag as E,j as t,F as u,f as F,c as C,L as q,bO as D}from"./index.4113582e.js";import{I as L,M as O}from"./InvoicesTable.c901a695.js";import"./GlobalFilter.9b0cb74a.js";const U=()=>{const[i,w]=_.exports.useState([]),[j,o]=_.exports.useState(!1),x=localStorage.getItem("isAuth"),a=JSON.parse(x),f=E();_.exports.useEffect(()=>{o(!0),(async()=>{o(!0);try{const c=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,M=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,n=await fetch(c);if(!n.ok&&n.status!==400)throw new Error(`API 1 failed with status: ${n.status}`);const g=n.status===400?[]:await n.json(),s=await fetch(M);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const v=s.status===400?[]:await s.json(),y=[...g,...v];if(f.pathname==="/owner-maintenancemanagement-invoices"){const l=y.map(e=>e._id).map(e=>fetch(`http://portals.rarehomesgroup.com/maintenancemanagement/api/q?propertyid=${e}&converted_invoice=true`).then(h=>h.json())),p=(await Promise.all(l)).filter(e=>e.message!=="No Maintenance Management found"),d=[].concat(...p),r=new Map;d.forEach(e=>{r.has(e==null?void 0:e._id)||r.set(e==null?void 0:e._id,e)});const m=[...Array.from(r.values())].reverse();w(m),o(!1)}else{const l=y.map(e=>e._id).map(e=>fetch(`http://portals.rarehomesgroup.com/maintenancemanagement/api/q?propertyid=${e}`).then(h=>h.json())),p=(await Promise.all(l)).filter(e=>e.message!=="No Maintenance Management found"),d=[].concat(...p),r=new Map;d.forEach(e=>{r.has(e==null?void 0:e._id)||r.set(e==null?void 0:e._id,e)});const m=[...Array.from(r.values())].reverse();w(m),o(!1)}}catch(c){console.error("Error fetching data:",c),o(!1)}})()},[f.pathname]);const N=()=>{o(!0),(async()=>{o(!0);try{const c=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,M=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${a==null?void 0:a._id}&sort=descending&type=customer&page=0&perPage=all`,n=await fetch(c);if(!n.ok&&n.status!==400)throw new Error(`API 1 failed with status: ${n.status}`);const g=n.status===400?[]:await n.json(),s=await fetch(M);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const v=s.status===400?[]:await s.json(),l=[...g,...v].map(e=>e._id).map(e=>fetch(`http://portals.rarehomesgroup.com/maintenancemanagement/api/q?propertyid=${e}`).then(h=>h.json())),p=(await Promise.all(l)).filter(e=>e.message!=="No Maintenance Management found"),d=[].concat(...p),r=new Map;d.forEach(e=>{r.has(e==null?void 0:e._id)||r.set(e==null?void 0:e._id,e)});const m=[...Array.from(r.values())].reverse();w(m),o(!1)}catch(c){console.error("Error fetching data:",c),o(!1)}})()};return t(u,{children:j===!1?t(u,{children:i!=null&&i.length?t("div",{className:" space-y-5",children:f.pathname==="/owner-maintenancemanagement-invoices"?t(L,{title:"All Maintenance Management Invoices",allData:i}):t(O,{pagelink:"/maintenancemanagementform",linktitle:"Create Maintenance Management Quotations",title:"All Maintenance Management Quotations",allData:i,updateData:N})}):t(F,{children:f.pathname==="/owner-maintenancemanagement-invoices"?C(u,{children:[t("div",{className:"flex justify-between items-center mb-6",children:t("h4",{className:"card-title",children:"All Maintenance Management Invoices"})}),t("p",{children:"No Maintenance Management Invoices Found"})]}):C(u,{children:[C("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"All Maintenance Management Quotations"}),t(q,{to:"/maintenancemanagementform",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add Maintenance Management Quotations"})]}),t("p",{children:"No Maintenance Management Quotations Found"})]})})}):t(D,{})})};export{U as default};
