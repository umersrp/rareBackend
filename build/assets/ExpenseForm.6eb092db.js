import{B as D,af as ee,r as i,x as te,y as g,am as ae,z as le,j as a,F as m,c as n,f as oe,ap as U,aB as re,l as z,an as ne,M as B,A as ie}from"./index.bbe51ac5.js";const G={option:(u,N)=>({...u,fontSize:"14px"})},de=()=>{var q,$;const u=D(),N=ee();let _=window.location.href.split("/"),y=_[_.length-1];const[f,x]=i.exports.useState(!1),[e,c]=i.exports.useState(""),[p,w]=i.exports.useState("");i.exports.useState("");const[j,se]=i.exports.useState(""),[b,L]=i.exports.useState([]);i.exports.useState([]);const[S,T]=i.exports.useState([]),[O,M]=i.exports.useState(""),[A,R]=i.exports.useState(""),[k,V]=i.exports.useState(""),[v,I]=i.exports.useState(""),[C,Y]=i.exports.useState("");i.exports.useState("");const H=l=>{M(l.target.files[0]),c({...e,titledeeddocument:l.target.files[0]})},J=async()=>{x(!0),(!e.propertyid||!p._id||!e.amount||!e.d_o_p)&&E();const l=new FormData;l.append("propertyid",e.propertyid),l.append("purposeid",p.id),l.append("amount",e.amount),l.append("d_o_p",new Date(e.d_o_p)),e.titledeeddocument&&l.append("expenseAttachment",e.titledeeddocument);const r="http://portals.rarehomesgroup.com/expense/create",t=l,s=await B.post(r,t,{headers:{"Content-Type":"multipart/form-data"}});x(!1),s.status===201&&s.data.status===!0&&u("/all-expenseform")},K=()=>{u("/all-expenseform")},Q=async l=>{var d;console.log("UUUUU",l),(!l.propertyid||!p._id||!l.amount||!l.d_o_p)&&E(),x(!0);const r=new FormData;r.append("propertyid",l.propertyid._id?l.propertyid._id:l.propertyid),r.append("purposeid",p.id?p.id:l.purposeid._id),r.append("amount",l.amount),r.append("d_o_p",new Date(l.d_o_p)),l.titledeeddocument&&r.append("expenseAttachment",l.titledeeddocument);const t=`http://portals.rarehomesgroup.com/expense/update/${l._id}`,s=r,o=await B.put(t,s,{headers:{"Content-Type":"multipart/form-data"}});x(!1),(o==null?void 0:o.status)===201&&((d=o==null?void 0:o.data)==null?void 0:d.status)===!0&&u("/all-expenseform")};console.log("userData======>",e);let W={propertyid:"Property",purposeid:"Purpose",amount:"Amount",d_o_p:"Date of Payment"};const X=te({propertyid:g().required(A),purposeid:g().required(k),amount:ae().required(v),d_o_p:g().required(C)}).required(),{register:F,formState:{errors:pe}}=le({resolver:ie(X)}),E=()=>{let l=!1,r={propertyid:R,purposeid:V,amount:I,d_o_p:Y};return r&&Object.keys(r).length&&Object.keys(r).map(t=>{r[t](""),e[t]||(r[t](W[t]+" is required"),l=!0)}),l};i.exports.useEffect(()=>{y&&fetch(`http://portals.rarehomesgroup.com/expense/get/${y}`).then(l=>l.json()).then(l=>{var r;(r=l==null?void 0:l.data)==null||r.map(t=>{c(t)})})},[y]),i.exports.useEffect(()=>{const l=()=>{fetch("http://portals.rarehomesgroup.com/property").then(t=>t.json()).then(t=>{const s=t==null?void 0:t.map(o=>({label:o.unitnumber+" | "+o.communityname+" | "+o.projectname+" | "+o.buildingname,value:o._id}));L(s)})},r=()=>{fetch("http://portals.rarehomesgroup.com/purpose/get").then(t=>t.json()).then(t=>{var o;const s=(o=t==null?void 0:t.data)==null?void 0:o.map(d=>({label:d.name,value:d._id}));T(s)})};l(),r()},[]),i.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const t=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.propertyid}`)).json();t&&c({...e,propertyid:t==null?void 0:t._id,unitnumber:t==null?void 0:t.unitnumber,buildingname:t==null?void 0:t.buildingname,floor:t==null?void 0:t.floor,buildingnumber:t==null?void 0:t.buildingnumber,projectname:t==null?void 0:t.projectname,communityname:t==null?void 0:t.communityname,city:t==null?void 0:t.propertycity,ownerid:t==null?void 0:t.customerid})}})()},[e==null?void 0:e.propertyid]),i.exports.useEffect(()=>{(async()=>{var r,t;if((r=e==null?void 0:e.propertyid)!=null&&r._id){const o=await(await fetch(`http://portals.rarehomesgroup.com/property/${(t=e==null?void 0:e.propertyid)==null?void 0:t._id}`)).json();o&&c({...e,unitnumber:o==null?void 0:o.unitnumber,buildingname:o==null?void 0:o.buildingname,floor:o==null?void 0:o.floor,buildingnumber:o==null?void 0:o.buildingnumber,projectname:o==null?void 0:o.projectname,communityname:o==null?void 0:o.communityname,city:o==null?void 0:o.propertycity,ownerid:o==null?void 0:o.customerid})}})()},[(q=e==null?void 0:e.propertyid)==null?void 0:q._id]),i.exports.useEffect(()=>{(async()=>{var d;console.log("ff3333fff",o);const t=await(await fetch(`http://portals.rarehomesgroup.com/property/${(d=o==null?void 0:o.propertyid)==null?void 0:d._id}`)).json();let s=[];s.push(t);const o=s==null?void 0:s.map(h=>({label:h.unitnumber+" | "+h.communityname+" | "+h.projectname+" | "+h.buildingname,value:h._id}));c(o)})()},[($=e==null?void 0:e.propertyid)==null?void 0:$._id]),i.exports.useEffect(()=>{(async()=>{var t;const r=e.purposeid._id;if(r){const o=await(await fetch(`http://portals.rarehomesgroup.com/purpose/get/${r}`)).json();o.data&&w({...p,name:(t=o==null?void 0:o.data)==null?void 0:t.name,id:o.data._id})}})()},[e]),console.log("purposeuserData",p);const P=l=>{const{name:r,value:t}=l.target;c({...e,[r]:t})},Z=l=>{const{name:r,value:t}=l.target;c({...e,[r]:t})};return a(m,{children:a("div",{className:"xl:col-span-2 col-span-1",children:n(oe,{title:"Expenses Form",children:[a("div",{children:n("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 mb-4 ",children:[a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),n("div",{className:"w-[100%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Property"}),console.log("edc",e==null?void 0:e.propertyid),a(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:b,value:b&&b.filter(function(l){return l.value===(e==null?void 0:e.propertyid)}),onChange:l=>{c({...e,propertyid:l==null?void 0:l.value})},styles:G,id:"hh",placeholder:"Select and Search property"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e!=null&&e.propertyid?null:A})})]}),a(m,{children:e.propertyid?n(m,{children:[n("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Unit number"}),n("div",{className:"relative ",children:[a("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.unitnumber:e.propertyid?e.propertyid.unitnumber:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),n("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Community Name"}),n("div",{className:"relative ",children:[a("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.communityname:e.propertyid?e.propertyid.communityname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),n("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Project Name"}),n("div",{className:"relative ",children:[a("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.projectname:e.propertyid?e.propertyid.projectname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),n("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Building Name"}),n("div",{className:"relative ",children:[a("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.buildingname:e.propertyid?e.propertyid.buildingname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),n("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Floor Level"}),n("div",{className:"relative ",children:[a("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.floor:e.propertyid?e.propertyid.floor:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]}):null})]})}),n("div",{className:"flex gap-x-5 mb-5",children:[n("div",{className:"w-[100%] col-span-3 ",children:[a("label",{htmlFor:"purpose",className:"form-label",children:"Enter your Purpose"}),a(U,{label:"Basic Select",className:"react-select  ",classNamePrefix:"select",options:S,value:S.filter(l=>l.value===p.id),onChange:l=>{w({...p,id:l==null?void 0:l.value})},styles:G,id:"purpose",placeholder:"Select your purpose"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:"text-danger-500 block text-sm",children:p!=null&&p.id?null:k})})]}),n("div",{className:"w-[100%] col-span-3",children:[a("label",{htmlFor:"d_o_p",className:"form-label",children:"Date of payment"}),a(re,{className:"form-control py-2",name:"d_o_p",value:j?j.d_o_p:e.d_o_p||e.d_o_p,onChange:l=>{Z({target:{name:"d_o_p",value:l[0]}})},id:"default-picker",placeholder:"Select Date of Payment"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:"text-danger-500 block text-sm",children:e.d_o_p?null:C})})]})]}),N.pathname===`/expenseform/${y}`?a(m,{children:n("div",{className:"w-[50%] col-span-3 mb-5",children:[a(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:F,value:(e.amount,e.amount),onChange:P}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:v})})]})}):a(m,{children:n("div",{className:"w-[50%] col-span-3 mb-5",children:[a(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:F,value:e.amount||e.amount,onChange:P}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:v})})]})}),n("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Attachment"}),a(ne,{name:"expenseAttachment",selectedFile:O,onChange:H}),a("div",{className:"flex items-center justify-between",children:e&&e.expenseAttachment?a("div",{className:"p-2",children:a("img",{src:`http://portals.rarehomesgroup.com/${e.expenseAttachment}`,width:150,height:150})}):null})]}),n("div",{className:"flex flex-row-reverse gap-2 opacity-100",children:[e._id?a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:()=>Q(e),type:"button",children:"Update"})})})})}):a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:J,type:"button",children:"Submit"})})})})}),f===!0?a("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:a("div",{className:"loader-spiner"})}):null,a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-light  text-center",onClick:K,type:"button",children:"Cancel"})})})})]})]})})})};export{de as default};
