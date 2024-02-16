import{bu as Ie,A as Ye,ag as He,r as n,w as ze,x as xe,y as Ke,c as s,F as f,j as l,t as Je,C as Qe,aq as N,l as S,L as Ge,K as M,z as We,Q as L}from"./index.17c13ab6.js";const g={option:(F,q)=>({...F,fontSize:"14px"})},De=()=>{var le,te;const{id:F}=Ie(),q=Ye(),ke=He(),[e,h]=n.exports.useState(""),b=r=>{const{name:a,value:o}=r.target;h({...e,[a]:o})},U=new URLSearchParams(window.location.search),C=U.get("propertyid"),j=U.get("valuation");n.exports.useEffect(()=>{C!=null&&h(r=>({...r,porpertyid:C}))},[C]),n.exports.useEffect(()=>{j!=null&&h(r=>({...r,propertystatus:j}))},[j]);const I=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"},{value:"Multiple",label:"Multiple"}],[c,Ae]=n.exports.useState("");n.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.porpertyid}`)).json();o&&Ae(o)})()},[e==null?void 0:e.porpertyid]);const[Y,Se]=n.exports.useState("");n.exports.useEffect(()=>{if(c!=null&&c.youtubelink){let r=c==null?void 0:c.youtubelink,a=r==null?void 0:r.replace("watch?v=","embed/");Se(a)}},[c==null?void 0:c.youtubelink]),n.exports.useEffect(()=>{(async()=>{if(F){const o=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${F}`)).json();o&&h(o)}})()},[F]);const[H,we]=n.exports.useState([]);n.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(r=>r.json()).then(r=>{const a=r==null?void 0:r.map(o=>({label:o.unitnumber+" | "+(o==null?void 0:o.communityname)+" | "+(o==null?void 0:o.projectname)+" | "+(o==null?void 0:o.buildingname),value:o._id}));we(a)})},[]);const[z,Ce]=n.exports.useState([]),[$,Fe]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const o=await(await fetch("http://dev-rare.srp.ai/roles/api/search/Property Consultant")).json();Ce(o==null?void 0:o.roles)})()},[]),n.exports.useEffect(()=>{(async()=>{var a,o;try{for(const i of z){const p=await M.get(`http://dev-rare.srp.ai/employees/pagination/pages?roleid=${i._id}&sort=descending&page=0&perPage=all`);if(p!=null&&p.data){const m=(o=(a=p.data)==null?void 0:a.employees)==null?void 0:o.map(u=>({label:(u==null?void 0:u.email)+" | "+(u==null?void 0:u.designation),value:u._id}));Fe(m)}}}catch(i){console.error("Error fetching data:",i)}})()},[z]);const[t,Pe]=n.exports.useState({});n.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${e==null?void 0:e.porpertyid}`)).json();let i=o==null?void 0:o.filter(p=>(p==null?void 0:p.contractupdation)!=="terminated");Pe(i[0])})()},[e==null?void 0:e.porpertyid]);const O=[{value:"Direct",label:"Direct"},{value:"Other Agency",label:"Other Agency"}],K=[{value:"Exclusive",label:"Exclusive"},{value:"Non Exclusive",label:"Non Exclusive"}],J=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],Q=[{value:"successful",label:"successful"},{value:"unsuucessful",label:"unsuucessful"}],[x,G]=n.exports.useState(0),[P,w]=n.exports.useState(""),[W,Te]=n.exports.useState(""),[Ee,R]=n.exports.useState(Array(x).fill(""));let _e={porpertyid:"Property",propertystatus:"Property Status"};const Be=ze({porpertyid:xe().required(P),propertystatus:xe().required(W)}).required(),{register:k,formState:{errors:Xe}}=Ke({resolver:We(Be)}),X=()=>{let r=!1,a={porpertyid:w,propertystatus:Te};return a&&Object.keys(a).length&&Object.keys(a).map(o=>{a[o](""),e[o]||(a[o](_e[o]+" is required"),r=!0)}),r};n.exports.useEffect(()=>{parseFloat(e==null?void 0:e.multi_propertyvaluation)?G(parseFloat(e==null?void 0:e.multi_propertyvaluation)):G(0)},[e==null?void 0:e.multi_propertyvaluation]);const Z=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"}],je=(r,a)=>{let o=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(o=[...e.multivaluation]);const i=o[a]||{};o[a]={...i,propertyvaluation:r.target.value,propertystatus:(i==null?void 0:i.propertystatus)||"",listingsource:(i==null?void 0:i.listingsource)||""};const p={...e,multivaluation:o};h(p)},$e=(r,a)=>{let o=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(o=[...e.multivaluation]);const i=o[a]||{};o[a]={...i,propertystatus:r};const p={...e,multivaluation:o};h(p)},Oe=(r,a)=>{let o=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(o=[...e.multivaluation]);const i=o[a]||{};o[a]={...i,employeeid:r};const p={...e,multivaluation:o};h(p)},Re=(r,a)=>{let o=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(o=[...e.multivaluation]);const i=o[a]||{};o[a]={...i,listingsource:r};const p={...e,multivaluation:o};h(p)},D=()=>{var o,i;R(Array(x).fill(""));let r=!0;const a=new Set;if((e==null?void 0:e.multivaluation)||(e==null?void 0:e.propertystatus)==="Multiple"){const p=Array(x).fill("");for(let m=0;m<x;m++){const u=(i=(o=e.multivaluation)==null?void 0:o[m])==null?void 0:i.propertystatus;u?a.has(u)?(p[m]="Duplicate Property Status",r=!1):a.add(u):(p[m]="Property Status is required",r=!1)}R(p)}return r},[A,Ve]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const o=await(await fetch("http://dev-rare.srp.ai/rentpurchase")).json();return Ve(o)})()},[]);const[ee,B]=n.exports.useState(!1);n.exports.useEffect(()=>{const r=a=>{const{_id:o,porpertyid:i,unlisted:p,multivaluation:m}=a,{porpertyid:u}=e;return o!==(e==null?void 0:e._id)&&(i===u||i===C)&&p!==!0&&!(m!=null&&m.length)?(w("Property is already in the Availability Sheet"),B(!0),!0):(w(""),B(!1),!1)};if((e==null?void 0:e.porpertyid)||C)for(let a=0;a<A.length;a++){const o=A[a];if(r(o)){w("Property is already in the Availability Sheet"),B(!0);break}}else w(""),B(!1)},[e==null?void 0:e.porpertyid,C,A]);const[T,V]=n.exports.useState(!1),qe=localStorage.getItem("isAuth"),E=JSON.parse(qe),Me=async()=>{var a,o;R(Array(x).fill(""));const r=D();if((!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus))&&X(),P&&w("Property is already in the Availability Sheet"),(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&r&&ee===!1&&(A==null?void 0:A.length)){V(!0);try{await M.post("http://dev-rare.srp.ai/rentpurchase",{...e,createdBy:E==null?void 0:E._id}),L.success(`${e.porpertyid} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{q("/all-availability-sheet")},1500)}catch(i){V(!1),((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.message)==="Availability is already exists"&&(L.error("Availability is already exists",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),V(!1))}}},Le=async r=>{r.preventDefault(),R(Array(x).fill(""));const a=D();!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus)?X():P?w("Property is already in the Availability Sheet"):(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&a&&ee===!1&&(A==null?void 0:A.length)&&(V(!0),await M.patch("http://dev-rare.srp.ai/rentpurchase",{...e,updatedBy:E==null?void 0:E._id}),L.success(`${e.porpertyid} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{q("/all-availability-sheet")},1500))},[_,Ue]=n.exports.useState("");return n.exports.useEffect(()=>{(e==null?void 0:e.multivaluation)&&(e==null?void 0:e.propertystatus)==="Multiple"&&(async()=>{const o=await(await fetch("http://dev-rare.srp.ai/employees")).json();o&&Ue(o)})()},[e==null?void 0:e.multivaluation,e==null?void 0:e.propertystatus]),s(f,{children:[l(Je,{}),l(Qe,{title:"Availability Sheet Form",children:l("div",{children:s("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Property"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:H,value:H.filter(function(r){return r.value===(e==null?void 0:e.porpertyid)}),onChange:r=>{h({...e,porpertyid:r==null?void 0:r.value})},styles:g,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:P})]}),s("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:I,value:I.filter(function(r){return r.value===(e==null?void 0:e.propertystatus)}),onChange:r=>{b({target:{name:"propertystatus",value:r.value}})},styles:g,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:W})]}),(e==null?void 0:e.propertystatus)==="Multiple"?s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total no. of Property Valuation"}),l("input",{type:"number",className:"  form-control py-2   ",placeholder:"Enter Total no. of Property Valuation",value:e.multi_propertyvaluation||null,name:"multi_propertyvaluation",max:1,onChange:b,onInput:r=>{r.target.value=Math.max(1,Math.min(3,parseInt(r.target.value))).toString().slice(0,1)},onKeyDown:r=>{const a=r.key;a!=="Backspace"&&(isNaN(a)||a<1||a>3)&&r.preventDefault()}})]}):null,(e==null?void 0:e.propertystatus)!=="Multiple"?s(f,{children:[l(S,{name:"propertyvaluation",label:"Rent / Sold amount",type:"text",register:k,placeholder:"Enter Rent / Sold amount",value:e.propertyvaluation||"",onChange:b}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$,value:$.filter(function(r){return r.value===(e==null?void 0:e.employeeid)}),onChange:r=>{h({...e,employeeid:r==null?void 0:r.value})},styles:g,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(r){return r.value===(e==null?void 0:e.listingsource)}),onChange:r=>{h({...e,listingsource:r==null?void 0:r.value})},styles:g,id:"hh"})]}),(e==null?void 0:e.propertystatus)==="Rent"?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.guestname?t==null?void 0:t.guestname:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.email?t==null?void 0:t.email:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.passportnumber?t==null?void 0:t.passportnumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.nationality?t==null?void 0:t.nationality:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.mobilenumber?t==null?void 0:t.mobilenumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.rentalamount?t==null?void 0:t.rentalamount:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractstartdate?new Date(t==null?void 0:t.contractstartdate).toDateString():"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractenddate?new Date(t==null?void 0:t.contractenddate).toDateString():"Not Available"})]})]}):null]}):null,l("div",{className:"w-[100%] col-span-2",children:(e==null?void 0:e.propertystatus)==="Multiple"&&(e==null?void 0:e.multi_propertyvaluation)?l(f,{children:x>0&&l(f,{children:Array.from({length:x},(r,a)=>{var o,i,p,m,u,re,ae,oe,se,ie,ce,ne,pe,de,ue,he,me,fe,ve,ye,be,Ne,ge;return s(f,{children:[a===0&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"bordertop"})}),l("div",{className:`w-[100%] col-span-3 ${a!==0?"mt-[1.25rem]":""}`,children:((i=(o=e==null?void 0:e.multivaluation)==null?void 0:o[a])==null?void 0:i.unlisted)!==!0?l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500 bg-success-500",children:"Listed"})}):l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500 bg-danger-500",children:"Unlisted"})})}),s("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5  mt-[30px]",children:[((m=(p=e==null?void 0:e.multivaluation)==null?void 0:p[a])==null?void 0:m.unlisted)===!0?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),l("p",{className:"  form-control py-2   ",children:(re=(u=e==null?void 0:e.multivaluation)==null?void 0:u[a])!=null&&re.propertystatus?(oe=(ae=e==null?void 0:e.multivaluation)==null?void 0:ae[a])==null?void 0:oe.propertystatus:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),l("p",{className:"  form-control py-2   ",children:(ie=(se=e==null?void 0:e.multivaluation)==null?void 0:se[a])!=null&&ie.propertyvaluation?(ne=(ce=e==null?void 0:e.multivaluation)==null?void 0:ce[a])==null?void 0:ne.propertyvaluation:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),l("p",{className:"  form-control py-2   ",children:((de=(pe=e==null?void 0:e.multivaluation)==null?void 0:pe[a])==null?void 0:de.employeeid)&&(_==null?void 0:_.length)?((ue=_==null?void 0:_.find(d=>{var v,y;return(d==null?void 0:d._id)===((y=(v=e==null?void 0:e.multivaluation)==null?void 0:v[a])==null?void 0:y.employeeid)}))==null?void 0:ue.email)||"knsi condition chal rahi hai?":"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),l("p",{className:"  form-control py-2   ",children:(me=(he=e==null?void 0:e.multivaluation)==null?void 0:he[a])!=null&&me.listingsource?(ve=(fe=e==null?void 0:e.multivaluation)==null?void 0:fe[a])==null?void 0:ve.listingsource:"Not Available"})]})]}):s(f,{children:[s("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Z,value:Z.filter(function(d){var v,y;return d.value===((y=(v=e==null?void 0:e.multivaluation)==null?void 0:v[a])==null?void 0:y.propertystatus)}),onChange:d=>$e(d==null?void 0:d.value,a),styles:g,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:Ee[a]})]}),l(S,{label:"Rent / Sold amount",type:"number",placeholder:"Type your Rent / Sold amount",name:`propertyvaluation-${a}`,value:((be=(ye=e==null?void 0:e.multivaluation)==null?void 0:ye[a])==null?void 0:be.propertyvaluation)||"",register:k,onChange:d=>je(d,a)}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$,value:$.filter(function(d){var v,y;return d.value===((y=(v=e==null?void 0:e.multivaluation)==null?void 0:v[a])==null?void 0:y.employeeid)}),onChange:d=>Oe(d==null?void 0:d.value,a),styles:g,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(d){var v,y;return d.value===((y=(v=e==null?void 0:e.multivaluation)==null?void 0:v[a])==null?void 0:y.listingsource)}),onChange:d=>Re(d==null?void 0:d.value,a),styles:g,id:"hh"})]})]}),((ge=(Ne=e==null?void 0:e.multivaluation)==null?void 0:Ne[a])==null?void 0:ge.propertystatus)==="Rent"?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.guestname?t==null?void 0:t.guestname:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.email?t==null?void 0:t.email:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.passportnumber?t==null?void 0:t.passportnumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.nationality?t==null?void 0:t.nationality:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.mobilenumber?t==null?void 0:t.mobilenumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.rentalamount?t==null?void 0:t.rentalamount:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractstartdate?new Date(t==null?void 0:t.contractstartdate).toDateString():"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractenddate?new Date(t==null?void 0:t.contractenddate).toDateString():"Not Available"})]})]}):null,l(f,{children:l(f,{})})]},a+1),x>1&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"borderBottom"})})]})})})}):null}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing type"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:K,value:K.filter(function(r){return r.value===(e==null?void 0:e.listingtype)}),onChange:r=>{h({...e,listingtype:r==null?void 0:r.value})},styles:g,id:"hh"})]}),l(S,{name:"keylocation",label:"keys location",type:"text",register:k,placeholder:"Enter keys location",value:e.keylocation||"",onChange:b}),l(S,{name:"numberkeys",label:"Number of keys ",type:"text",register:k,placeholder:"Enter Number of keys ",value:e.numberkeys||"",onChange:b}),l(S,{name:"numberaccesscard",label:"Number of access cards",type:"text",register:k,placeholder:"Enter Number of access cards",value:e.numberaccesscard||"",onChange:b}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"maintenance done"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(r){return r.value===(e==null?void 0:e.maintenance)}),onChange:r=>{h({...e,maintenance:r==null?void 0:r.value})},styles:g,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Transaction Status"}),l(N,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(r){return r.value===(e==null?void 0:e.transaction_status)}),onChange:r=>{h({...e,transaction_status:r==null?void 0:r.value})},styles:g,id:"hh"})]}),l(S,{name:"property_reference",label:"property reference no",type:"text",register:k,placeholder:"Enter property reference no",value:e.property_reference||"",onChange:b}),l(S,{name:"remarks",label:"remarks",type:"text",register:k,placeholder:"Enter remarks",value:e.remarks||"",onChange:b}),l(S,{name:"trakheesipermit",label:"trakheesi permit",type:"text",register:k,placeholder:"Enter trakheesi permit",value:e.trakheesipermit||"",onChange:b}),l(S,{name:"contractA",label:"contract A",type:"text",register:k,placeholder:"Enter contract A",value:e.contractA||"",onChange:b}),l(f,{}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),c!=null&&c.propertylocation?l("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${c!=null&&c.propertylocation?c==null?void 0:c.propertylocation:"#"}`,children:c!=null&&c.propertylocation?((le=c==null?void 0:c.propertylocation)==null?void 0:le.slice(0,80))+(((te=c==null?void 0:c.propertylocation)==null?void 0:te.length)>100,""):"Not Available"}):l("p",{className:"  form-control py-2   ",children:"Not Available"})]}),s("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"text-[30px]",children:"Youtube Video"}),(c==null?void 0:c.youtubelink)&&Y?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:Y,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[7px]",children:"Not available"})]}),s("div",{className:"lg:col-span-2 col-span-1 mt-[25px] flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${T===!0?"cursor-not-allowed	":""}`,children:T===!0?l("div",{className:` ${T===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):l(Ge,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-availability-sheet",children:"Cancel"})}),ke.pathname===`/update-availability-sheet/${F}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:Le,children:"Update"})})}):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:Me,type:"button",children:"Submit"})})}),T===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"})}):null]})]})})})]})};export{De as default};
