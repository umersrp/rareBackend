import{A as D,ag as ee,r as o,w as te,x as N,an as ae,y as le,j as a,F as m,C as ne,c as i,aq as U,aC as re,l as z,ao as oe,K as G,z as ie}from"./index.3f28faea.js";const L={option:(u,g)=>({...u,fontSize:"14px"})},pe=()=>{var P,$;const u=D(),g=ee();let _=window.location.href.split("/"),y=_[_.length-1];const[f,x]=o.exports.useState(!1),[e,c]=o.exports.useState(""),[d,w]=o.exports.useState("");o.exports.useState("");const[j,se]=o.exports.useState(""),[v,T]=o.exports.useState([]);o.exports.useState([]);const[S,B]=o.exports.useState([]),[O,R]=o.exports.useState(""),[A,V]=o.exports.useState(""),[k,I]=o.exports.useState(""),[b,K]=o.exports.useState(""),[C,M]=o.exports.useState("");o.exports.useState("");const Y=l=>{R(l.target.files[0]),c({...e,titledeeddocument:l.target.files[0]})},H=async()=>{x(!0),(!e.propertyid||!d._id||!e.amount||!e.d_o_p)&&q();const l=new FormData;l.append("propertyid",e.propertyid),l.append("purposeid",d.id),l.append("amount",e.amount),l.append("d_o_p",new Date(e.d_o_p)),e.titledeeddocument&&l.append("expenseAttachment",e.titledeeddocument);const r="http://dev-rare.srp.ai/expense/create",t=l,s=await G.post(r,t,{headers:{"Content-Type":"multipart/form-data"}});x(!1),s.status===201&&s.data.status===!0&&u("/all-expenseform")},J=()=>{u("/all-expenseform")},Q=async l=>{var p;console.log("UUUUU",l),(!l.propertyid||!d._id||!l.amount||!l.d_o_p)&&q(),x(!0);const r=new FormData;r.append("propertyid",l.propertyid._id?l.propertyid._id:l.propertyid),r.append("purposeid",d.id?d.id:l.purposeid._id),r.append("amount",l.amount),r.append("d_o_p",new Date(l.d_o_p)),l.titledeeddocument&&r.append("expenseAttachment",l.titledeeddocument);const t=`http://dev-rare.srp.ai/expense/update/${l._id}`,s=r,n=await G.put(t,s,{headers:{"Content-Type":"multipart/form-data"}});x(!1),(n==null?void 0:n.status)===201&&((p=n==null?void 0:n.data)==null?void 0:p.status)===!0&&u("/all-expenseform")};console.log("userData======>",e);let W={propertyid:"Property",purposeid:"Purpose",amount:"Amount",d_o_p:"Date of Payment"};const X=te({propertyid:N().required(A),purposeid:N().required(k),amount:ae().required(b),d_o_p:N().required(C)}).required(),{register:F,formState:{errors:de}}=le({resolver:ie(X)}),q=()=>{let l=!1,r={propertyid:V,purposeid:I,amount:K,d_o_p:M};return r&&Object.keys(r).length&&Object.keys(r).map(t=>{r[t](""),e[t]||(r[t](W[t]+" is required"),l=!0)}),l};o.exports.useEffect(()=>{y&&fetch(`http://dev-rare.srp.ai/expense/get/${y}`).then(l=>l.json()).then(l=>{var r;(r=l==null?void 0:l.data)==null||r.map(t=>{c(t)})})},[y]),o.exports.useEffect(()=>{const l=()=>{fetch("http://dev-rare.srp.ai/property").then(t=>t.json()).then(t=>{const s=t==null?void 0:t.map(n=>({label:n.unitnumber+" | "+n.communityname+" | "+n.projectname+" | "+n.buildingname,value:n._id}));T(s)})},r=()=>{fetch("http://dev-rare.srp.ai/purpose/get").then(t=>t.json()).then(t=>{var n;const s=(n=t==null?void 0:t.data)==null?void 0:n.map(p=>({label:p.name,value:p._id}));B(s)})};l(),r()},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const t=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();t&&c({...e,propertyid:t==null?void 0:t._id,unitnumber:t==null?void 0:t.unitnumber,buildingname:t==null?void 0:t.buildingname,floor:t==null?void 0:t.floor,buildingnumber:t==null?void 0:t.buildingnumber,projectname:t==null?void 0:t.projectname,communityname:t==null?void 0:t.communityname,city:t==null?void 0:t.propertycity,ownerid:t==null?void 0:t.customerid})}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{var r,t;if((r=e==null?void 0:e.propertyid)!=null&&r._id){const n=await(await fetch(`http://dev-rare.srp.ai/property/${(t=e==null?void 0:e.propertyid)==null?void 0:t._id}`)).json();n&&c({...e,unitnumber:n==null?void 0:n.unitnumber,buildingname:n==null?void 0:n.buildingname,floor:n==null?void 0:n.floor,buildingnumber:n==null?void 0:n.buildingnumber,projectname:n==null?void 0:n.projectname,communityname:n==null?void 0:n.communityname,city:n==null?void 0:n.propertycity,ownerid:n==null?void 0:n.customerid})}})()},[(P=e==null?void 0:e.propertyid)==null?void 0:P._id]),o.exports.useEffect(()=>{(async()=>{var p;console.log("ff3333fff",n);const t=await(await fetch(`http://dev-rare.srp.ai/property/${(p=n==null?void 0:n.propertyid)==null?void 0:p._id}`)).json();let s=[];s.push(t);const n=s==null?void 0:s.map(h=>({label:h.unitnumber+" | "+h.communityname+" | "+h.projectname+" | "+h.buildingname,value:h._id}));c(n)})()},[($=e==null?void 0:e.propertyid)==null?void 0:$._id]),o.exports.useEffect(()=>{(async()=>{var t;const r=e.purposeid._id;if(r){const n=await(await fetch(`http://dev-rare.srp.ai/purpose/get/${r}`)).json();n.data&&w({...d,name:(t=n==null?void 0:n.data)==null?void 0:t.name,id:n.data._id})}})()},[e]),console.log("purposeuserData",d);const E=l=>{const{name:r,value:t}=l.target;c({...e,[r]:t})},Z=l=>{const{name:r,value:t}=l.target;c({...e,[r]:t})};return a(m,{children:a("div",{className:"xl:col-span-2 col-span-1",children:a(ne,{title:"Expenses Form",children:a("div",{children:i("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),i("div",{className:"w-[100%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Property"}),console.log("edc",e==null?void 0:e.propertyid),a(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:v,value:v&&v.filter(function(l){return l.value===(e==null?void 0:e.propertyid)}),onChange:l=>{c({...e,propertyid:l==null?void 0:l.value})},styles:L,id:"hh",placeholder:"Select and Search property"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e!=null&&e.propertyid?null:A})})]}),a(m,{children:e.propertyid?i(m,{children:[i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Unit number"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.unitnumber:e.propertyid?e.propertyid.unitnumber:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Community Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.communityname:e.propertyid?e.propertyid.communityname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Project Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.projectname:e.propertyid?e.propertyid.projectname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Building Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.buildingname:e.propertyid?e.propertyid.buildingname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Floor Level"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.floor:e.propertyid?e.propertyid.floor:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]}):null}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Purpose"}),a(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S.filter(function(l){return l.value===d.id}),onChange:l=>{w({...d,id:l==null?void 0:l.value})},styles:L,id:"hh",placeholder:"Select your purpose"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:d!=null&&d.id?null:k})}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Date of payment"}),a(re,{className:"form-control py-2",name:"d_o_p",value:j?j.d_o_p:e.d_o_p||e.d_o_p,onChange:l=>{Z({target:{name:"d_o_p",value:l[0]}})},id:"default-picker",placeholder:"Select Date of Payment"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.d_o_p?null:C})})]})]}),g.pathname===`/expenseform/${y}`?a(m,{children:i("div",{className:"w-[50%] col-span-3",children:[a(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:F,value:(e.amount,e.amount),onChange:E}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:b})})]})}):a(m,{children:i("div",{className:"w-[50%] col-span-3",children:[a(z,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:F,value:e.amount||e.amount,onChange:E}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:b})})]})}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Attachment"}),a(oe,{name:"expenseAttachment",selectedFile:O,onChange:Y}),a("div",{className:"flex items-center justify-between",children:e&&e.expenseAttachment?a("div",{className:"p-2",children:a("img",{src:`http://dev-rare.srp.ai/${e.expenseAttachment}`,width:150,height:150})}):null})]}),e._id?a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:()=>Q(e),type:"button",children:"Update"})})})})}):a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:H,type:"button",children:"Submit"})})})})}),f===!0?a("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:a("div",{className:"loader-spiner"})}):null,a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-light  text-center",onClick:J,type:"button",children:"Cancel"})})})})]})})})})})};export{pe as default};
