import{A as te,ag as ae,r as o,w as le,x as v,an as ne,y as re,j as a,F as m,C as oe,c as i,aq as G,aC as ie,l as L,ao as se,K as T,z as ce}from"./index.9211a5a4.js";const B={option:(u,N)=>({...u,fontSize:"14px"})},ue=()=>{var U,z;const u=te(),N=ae();let g=window.location.href.split("/"),y=g[g.length-1];const[f,x]=o.exports.useState(!1),[e,d]=o.exports.useState(""),[c,_]=o.exports.useState("");o.exports.useState("");const[w,de]=o.exports.useState(""),[j,O]=o.exports.useState([]);o.exports.useState([]);const[A,R]=o.exports.useState([]),[S,V]=o.exports.useState(""),[k,I]=o.exports.useState(""),[C,K]=o.exports.useState(""),[b,M]=o.exports.useState(""),[F,Y]=o.exports.useState(""),[q,H]=o.exports.useState(""),J=l=>{V(l.target.files[0]),d({...e,titledeeddocument:l.target.files[0]})},Q=async()=>{x(!0),(!e.propertyid||!c._id||!e.amount||!e.d_o_p)&&P();const l=new FormData;l.append("propertyid",e.propertyid),l.append("purposeid",c.id),l.append("amount",e.amount),l.append("d_o_p",new Date(e.d_o_p)),e.titledeeddocument&&l.append("expenseAttachment",e.titledeeddocument);const r="http://dev-rare.srp.ai/expense/create",t=l,s=await T.post(r,t,{headers:{"Content-Type":"multipart/form-data"}});x(!1),s.status===201&&s.data.status===!0&&u("/all-expenseform")},W=()=>{u("/all-expenseform")},X=async l=>{var p;console.log("UUUUU",l),(!l.propertyid||!c._id||!l.amount||!l.d_o_p)&&P(),x(!0);const r=new FormData;r.append("propertyid",l.propertyid._id?l.propertyid._id:l.propertyid),r.append("purposeid",c.id?c.id:l.purposeid._id),r.append("amount",l.amount),r.append("d_o_p",new Date(l.d_o_p)),l.titledeeddocument&&r.append("expenseAttachment",l.titledeeddocument);const t=`http://dev-rare.srp.ai/expense/update/${l._id}`,s=r,n=await T.put(t,s,{headers:{"Content-Type":"multipart/form-data"}});x(!1),(n==null?void 0:n.status)===201&&((p=n==null?void 0:n.data)==null?void 0:p.status)===!0&&u("/all-expenseform")};console.log("userData======>",e);let Z={propertyid:"Property",purposeid:"Purpose",amount:"Amount",d_o_p:"Date of Payment",expenseAttachment:"Attachment"};const D=le({propertyid:v().required(k),purposeid:v().required(C),amount:ne().required(b),d_o_p:v().required(F),expenseAttachment:v().required(q)}).required(),{register:E,formState:{errors:pe}}=re({resolver:ce(D)}),P=()=>{let l=!1,r={propertyid:I,purposeid:K,amount:M,d_o_p:Y,expenseAttachment:H};return r&&Object.keys(r).length&&Object.keys(r).map(t=>{r[t](""),e[t]||(r[t](Z[t]+" is required"),l=!0)}),l};o.exports.useEffect(()=>{y&&fetch(`http://dev-rare.srp.ai/expense/get/${y}`).then(l=>l.json()).then(l=>{var r;(r=l==null?void 0:l.data)==null||r.map(t=>{d(t)})})},[y]),o.exports.useEffect(()=>{const l=()=>{fetch("http://dev-rare.srp.ai/property").then(t=>t.json()).then(t=>{const s=t==null?void 0:t.map(n=>({label:n.unitnumber+" | "+n.communityname+" | "+n.projectname+" | "+n.buildingname,value:n._id}));O(s)})},r=()=>{fetch("http://dev-rare.srp.ai/purpose/get").then(t=>t.json()).then(t=>{var n;const s=(n=t==null?void 0:t.data)==null?void 0:n.map(p=>({label:p.name,value:p._id}));R(s)})};l(),r()},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const t=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();t&&d({...e,propertyid:t==null?void 0:t._id,unitnumber:t==null?void 0:t.unitnumber,buildingname:t==null?void 0:t.buildingname,floor:t==null?void 0:t.floor,buildingnumber:t==null?void 0:t.buildingnumber,projectname:t==null?void 0:t.projectname,communityname:t==null?void 0:t.communityname,city:t==null?void 0:t.propertycity,ownerid:t==null?void 0:t.customerid})}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{var r,t;if((r=e==null?void 0:e.propertyid)!=null&&r._id){const n=await(await fetch(`http://dev-rare.srp.ai/property/${(t=e==null?void 0:e.propertyid)==null?void 0:t._id}`)).json();n&&d({...e,unitnumber:n==null?void 0:n.unitnumber,buildingname:n==null?void 0:n.buildingname,floor:n==null?void 0:n.floor,buildingnumber:n==null?void 0:n.buildingnumber,projectname:n==null?void 0:n.projectname,communityname:n==null?void 0:n.communityname,city:n==null?void 0:n.propertycity,ownerid:n==null?void 0:n.customerid})}})()},[(U=e==null?void 0:e.propertyid)==null?void 0:U._id]),o.exports.useEffect(()=>{(async()=>{var p;console.log("ff3333fff",n);const t=await(await fetch(`http://dev-rare.srp.ai/property/${(p=n==null?void 0:n.propertyid)==null?void 0:p._id}`)).json();let s=[];s.push(t);const n=s==null?void 0:s.map(h=>({label:h.unitnumber+" | "+h.communityname+" | "+h.projectname+" | "+h.buildingname,value:h._id}));d(n)})()},[(z=e==null?void 0:e.propertyid)==null?void 0:z._id]),o.exports.useEffect(()=>{(async()=>{var t;const r=e.purposeid._id;if(r){const n=await(await fetch(`http://dev-rare.srp.ai/purpose/get/${r}`)).json();n.data&&_({...c,name:(t=n==null?void 0:n.data)==null?void 0:t.name,id:n.data._id})}})()},[e]),console.log("purposeuserData",c);const $=l=>{const{name:r,value:t}=l.target;d({...e,[r]:t})},ee=l=>{const{name:r,value:t}=l.target;d({...e,[r]:t})};return a(m,{children:a("div",{className:"xl:col-span-2 col-span-1",children:a(oe,{title:"Expenses Form",children:a("div",{children:i("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),i("div",{className:"w-[100%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Property"}),console.log("###!!!!",e==null?void 0:e.propertyid),a(G,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:j,value:j.filter(function(l){return l.value===(e==null?void 0:e.propertyid)}),onChange:l=>{d({...e,propertyid:l==null?void 0:l.value})},styles:B,id:"hh",placeholder:"Select and Search property"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e!=null&&e.propertyid?null:k})})]}),a(m,{children:e.propertyid?i(m,{children:[i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Unit number"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.unitnumber:e.propertyid?e.propertyid.unitnumber:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Community Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.communityname:e.propertyid?e.propertyid.communityname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Project Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.projectname:e.propertyid?e.propertyid.projectname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Building Name"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.buildingname:e.propertyid?e.propertyid.buildingname:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),i("div",{className:"fromGroup       ",children:[a("label",{className:"block capitalize form-label  ",children:"Floor Level"}),i("div",{className:"relative ",children:[a("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e?e.floor:e.propertyid?e.propertyid.floor:"Not Available"}),a("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]}):null}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Purpose"}),a(G,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A.filter(function(l){return l.value===c.id}),onChange:l=>{_({...c,id:l==null?void 0:l.value})},styles:B,id:"hh",placeholder:"Select your purpose"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:c!=null&&c._id?null:C})})]}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Date of payment"}),a(ie,{className:"form-control py-2",name:"d_o_p",value:w?w.d_o_p:e.d_o_p||e.d_o_p,onChange:l=>{ee({target:{name:"d_o_p",value:l[0]}})},id:"default-picker",placeholder:"Select Date of Payment"}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.d_o_p?null:F})})]}),N.pathname===`/expenseform/${y}`?a(m,{children:i("div",{className:"w-[50%] col-span-3",children:[a(L,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:E,value:(e.amount,e.amount),onChange:$}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:b})})]})}):a(m,{children:i("div",{className:"w-[50%] col-span-3",children:[a(L,{name:"amount",label:"Amount",placeholder:"Enter your Amount",type:"number",register:E,value:e.amount||e.amount,onChange:$}),a("div",{className:"flex items-center justify-between",children:a("div",{className:" text-danger-500 block text-sm",children:e.amount?null:b})})]})}),i("div",{className:"w-[50%] col-span-3",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Attachment"}),a(se,{name:"expenseAttachment",selectedFile:S,onChange:J}),i("div",{className:"flex items-center justify-between",children:[a("div",{className:" text-danger-500 block text-sm",children:S?null:q}),e&&e.expenseAttachment?a("div",{className:"p-2",children:a("img",{src:`http://dev-rare.srp.ai/${e.expenseAttachment}`,width:150,height:150})}):null]})]}),e._id?a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:()=>X(e),type:"button",children:"Update"})})})})}):a(m,{children:a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:Q,type:"button",children:"Submit"})})})})}),f===!0?a("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:a("div",{className:"loader-spiner"})}):null,a("div",{className:"lg:col-span-2 col-span-1 relative",children:a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-light  text-center",onClick:W,type:"button",children:"Cancel"})})})})]})})})})})};export{ue as default};