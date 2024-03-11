import{bu as Ie,E as Ye,ag as He,r as n,y as ze,z as xe,A as Je,c as s,F as f,j as l,v as Ke,f as Qe,aq as g,m as S,L as Ge,N as M,B as We,Q as U}from"./index.97b86580.js";const N={option:(C,q)=>({...C,fontSize:"14px"})},De=()=>{var le,te;const{id:C}=Ie(),q=Ye(),ke=He(),[e,m]=n.exports.useState(""),v=r=>{const{name:o,value:a}=r.target;m({...e,[o]:a})},L=new URLSearchParams(window.location.search),F=L.get("propertyid"),j=L.get("valuation");n.exports.useEffect(()=>{F!=null&&m(r=>({...r,porpertyid:F}))},[F]),n.exports.useEffect(()=>{j!=null&&m(r=>({...r,propertystatus:j}))},[j]);const I=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"},{value:"Multiple",label:"Multiple"}],[c,Ae]=n.exports.useState("");n.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.porpertyid}`)).json();a&&Ae(a)})()},[e==null?void 0:e.porpertyid]);const[Y,Se]=n.exports.useState("");n.exports.useEffect(()=>{if(c!=null&&c.youtubelink){let r=c==null?void 0:c.youtubelink,o=r==null?void 0:r.replace("watch?v=","embed/");Se(o)}},[c==null?void 0:c.youtubelink]),n.exports.useEffect(()=>{(async()=>{if(C){const a=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/${C}`)).json();a&&m(a)}})()},[C]);const[H,we]=n.exports.useState([]);n.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(r=>r.json()).then(r=>{const o=r==null?void 0:r.map(a=>({label:a.unitnumber+" | "+(a==null?void 0:a.communityname)+" | "+(a==null?void 0:a.projectname)+" | "+(a==null?void 0:a.buildingname),value:a._id}));we(o)})},[]);const[z,Fe]=n.exports.useState([]),[$,Ce]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const a=await(await fetch("http://portals.rarehomesgroup.com/roles/api/search/Property Consultant")).json();Fe(a==null?void 0:a.roles)})()},[]),n.exports.useEffect(()=>{(async()=>{var o,a;try{for(const i of z){const p=await M.get(`http://portals.rarehomesgroup.com/employees/pagination/pages?roleid=${i._id}&sort=descending&page=0&perPage=all`);if(p!=null&&p.data){const h=(a=(o=p.data)==null?void 0:o.employees)==null?void 0:a.map(u=>({label:(u==null?void 0:u.email)+" | "+(u==null?void 0:u.designation),value:u._id}));Ce(h)}}}catch(i){console.error("Error fetching data:",i)}})()},[z]);const[t,Pe]=n.exports.useState({});n.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/api/propertydelete?propertyid=${e==null?void 0:e.porpertyid}`)).json();let i=a==null?void 0:a.filter(p=>(p==null?void 0:p.contractupdation)!=="terminated");Pe(i[0])})()},[e==null?void 0:e.porpertyid]);const O=[{value:"Direct",label:"Direct"},{value:"Other Agency",label:"Other Agency"}],J=[{value:"Exclusive",label:"Exclusive"},{value:"Non Exclusive",label:"Non Exclusive"}],K=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],Q=[{value:"Successful",label:"Successful"},{value:"Unsuccessful",label:"Unsuccessful"}],[x,G]=n.exports.useState(0),[P,w]=n.exports.useState(""),[W,Te]=n.exports.useState(""),[Ee,R]=n.exports.useState(Array(x).fill(""));let _e={porpertyid:"Property",propertystatus:"Property Status"};const Be=ze({porpertyid:xe().required(P),propertystatus:xe().required(W)}).required(),{register:k,formState:{errors:Xe}}=Je({resolver:We(Be)}),X=()=>{let r=!1,o={porpertyid:w,propertystatus:Te};return o&&Object.keys(o).length&&Object.keys(o).map(a=>{o[a](""),e[a]||(o[a](_e[a]+" is required"),r=!0)}),r};n.exports.useEffect(()=>{parseFloat(e==null?void 0:e.multi_propertyvaluation)?G(parseFloat(e==null?void 0:e.multi_propertyvaluation)):G(0)},[e==null?void 0:e.multi_propertyvaluation]);const Z=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"}],je=(r,o)=>{let a=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(a=[...e.multivaluation]);const i=a[o]||{};a[o]={...i,propertyvaluation:r.target.value,propertystatus:(i==null?void 0:i.propertystatus)||"",listingsource:(i==null?void 0:i.listingsource)||""};const p={...e,multivaluation:a};m(p)},$e=(r,o)=>{let a=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(a=[...e.multivaluation]);const i=a[o]||{};a[o]={...i,propertystatus:r};const p={...e,multivaluation:a};m(p)},Oe=(r,o)=>{let a=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(a=[...e.multivaluation]);const i=a[o]||{};a[o]={...i,employeeid:r};const p={...e,multivaluation:a};m(p)},Re=(r,o)=>{let a=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(a=[...e.multivaluation]);const i=a[o]||{};a[o]={...i,listingsource:r};const p={...e,multivaluation:a};m(p)},D=()=>{var a,i;R(Array(x).fill(""));let r=!0;const o=new Set;if((e==null?void 0:e.multivaluation)||(e==null?void 0:e.propertystatus)==="Multiple"){const p=Array(x).fill("");for(let h=0;h<x;h++){const u=(i=(a=e.multivaluation)==null?void 0:a[h])==null?void 0:i.propertystatus;u?o.has(u)?(p[h]="Duplicate Property Status",r=!1):o.add(u):(p[h]="Property Status is required",r=!1)}R(p)}return r},[A,Ve]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const a=await(await fetch("http://portals.rarehomesgroup.com/rentpurchase")).json();return Ve(a)})()},[]);const[ee,B]=n.exports.useState(!1);n.exports.useEffect(()=>{const r=o=>{const{_id:a,porpertyid:i,unlisted:p,multivaluation:h}=o,{porpertyid:u}=e;return a!==(e==null?void 0:e._id)&&(i===u||i===F)&&p!==!0&&!(h!=null&&h.length)?(w("Property is already in the Availability Sheet"),B(!0),!0):(w(""),B(!1),!1)};if((e==null?void 0:e.porpertyid)||F)for(let o=0;o<A.length;o++){const a=A[o];if(r(a)){w("Property is already in the Availability Sheet"),B(!0);break}}else w(""),B(!1)},[e==null?void 0:e.porpertyid,F,A]);const[T,V]=n.exports.useState(!1),qe=localStorage.getItem("isAuth"),E=JSON.parse(qe),Me=async()=>{var o,a;R(Array(x).fill(""));const r=D();if((!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus))&&X(),P&&w("Property is already in the Availability Sheet"),(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&r&&ee===!1&&(A==null?void 0:A.length)){V(!0);try{await M.post("http://portals.rarehomesgroup.com/rentpurchase",{...e,unlisted:!1,createdBy:E==null?void 0:E._id}),U.success(`${e.porpertyid} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{q("/all-availability-sheet")},1500)}catch(i){V(!1),((a=(o=i==null?void 0:i.response)==null?void 0:o.data)==null?void 0:a.message)==="Availability is already exists"&&(U.error("Availability is already exists",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),V(!1))}}},Ue=async r=>{r.preventDefault(),R(Array(x).fill(""));const o=D();!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus)?X():P?w("Property is already in the Availability Sheet"):(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&o&&ee===!1&&(A==null?void 0:A.length)&&(V(!0),await M.patch("http://portals.rarehomesgroup.com/rentpurchase",{...e,updatedBy:E==null?void 0:E._id}),U.success(`${e.porpertyid} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{q("/all-availability-sheet")},1500))},[_,Le]=n.exports.useState("");return n.exports.useEffect(()=>{(e==null?void 0:e.multivaluation)&&(e==null?void 0:e.propertystatus)==="Multiple"&&(async()=>{const a=await(await fetch("http://portals.rarehomesgroup.com/employees")).json();a&&Le(a)})()},[e==null?void 0:e.multivaluation,e==null?void 0:e.propertystatus]),s(f,{children:[l(Ke,{}),l(Qe,{title:"Availability Sheet Form",children:l("div",{children:s("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Property"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:H,value:H.filter(function(r){return r.value===(e==null?void 0:e.porpertyid)}),onChange:r=>{m({...e,porpertyid:r==null?void 0:r.value})},styles:N,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:P})]}),s("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:I,value:I.filter(function(r){return r.value===(e==null?void 0:e.propertystatus)}),onChange:r=>{v({target:{name:"propertystatus",value:r.value}})},styles:N,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:W})]}),(e==null?void 0:e.propertystatus)==="Multiple"?s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total no. of Property Valuation"}),l("input",{type:"number",className:"  form-control py-2   ",placeholder:"Enter Total no. of Property Valuation",value:e.multi_propertyvaluation||null,name:"multi_propertyvaluation",max:1,onChange:v,onInput:r=>{r.target.value=Math.max(1,Math.min(3,parseInt(r.target.value))).toString().slice(0,1)},onKeyDown:r=>{const o=r.key;o!=="Backspace"&&(isNaN(o)||o<1||o>3)&&r.preventDefault()}})]}):null,(e==null?void 0:e.propertystatus)!=="Multiple"?s(f,{children:[l(S,{name:"propertyvaluation",label:"Rent / Sold amount",type:"text",register:k,placeholder:"Enter Rent / Sold amount",value:e.propertyvaluation||"",onChange:v}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$,value:$.filter(function(r){return r.value===(e==null?void 0:e.employeeid)}),onChange:r=>{m({...e,employeeid:r==null?void 0:r.value})},styles:N,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(r){return r.value===(e==null?void 0:e.listingsource)}),onChange:r=>{m({...e,listingsource:r==null?void 0:r.value})},styles:N,id:"hh"})]}),(e==null?void 0:e.propertystatus)==="Rent"?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.guestname?t==null?void 0:t.guestname:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.email?t==null?void 0:t.email:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.passportnumber?t==null?void 0:t.passportnumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.nationality?t==null?void 0:t.nationality:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.mobilenumber?t==null?void 0:t.mobilenumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.rentalamount?t==null?void 0:t.rentalamount:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractstartdate?new Date(t==null?void 0:t.contractstartdate).toDateString():"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractenddate?new Date(t==null?void 0:t.contractenddate).toDateString():"Not Available"})]})]}):null]}):null,l("div",{className:"w-[100%] col-span-2",children:(e==null?void 0:e.propertystatus)==="Multiple"&&(e==null?void 0:e.multi_propertyvaluation)?l(f,{children:x>0&&l(f,{children:Array.from({length:x},(r,o)=>{var a,i,p,h,u,re,oe,ae,se,ie,ce,ne,pe,de,ue,me,he,fe,ye,be,ve,ge,Ne;return s(f,{children:[o===0&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"bordertop"})}),l("div",{className:`w-[100%] col-span-3 ${o!==0?"mt-[1.25rem]":""}`,children:((i=(a=e==null?void 0:e.multivaluation)==null?void 0:a[o])==null?void 0:i.unlisted)!==!0?l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500 bg-success-500",children:"Listed"})}):l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500 bg-danger-500",children:"Unlisted"})})}),s("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5  mt-[30px]",children:[((h=(p=e==null?void 0:e.multivaluation)==null?void 0:p[o])==null?void 0:h.unlisted)===!0?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),l("p",{className:"  form-control py-2   ",children:(re=(u=e==null?void 0:e.multivaluation)==null?void 0:u[o])!=null&&re.propertystatus?(ae=(oe=e==null?void 0:e.multivaluation)==null?void 0:oe[o])==null?void 0:ae.propertystatus:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),l("p",{className:"  form-control py-2   ",children:(ie=(se=e==null?void 0:e.multivaluation)==null?void 0:se[o])!=null&&ie.propertyvaluation?(ne=(ce=e==null?void 0:e.multivaluation)==null?void 0:ce[o])==null?void 0:ne.propertyvaluation:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),l("p",{className:"  form-control py-2   ",children:((de=(pe=e==null?void 0:e.multivaluation)==null?void 0:pe[o])==null?void 0:de.employeeid)&&(_==null?void 0:_.length)?((ue=_==null?void 0:_.find(d=>{var y,b;return(d==null?void 0:d._id)===((b=(y=e==null?void 0:e.multivaluation)==null?void 0:y[o])==null?void 0:b.employeeid)}))==null?void 0:ue.email)||"knsi condition chal rahi hai?":"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),l("p",{className:"  form-control py-2   ",children:(he=(me=e==null?void 0:e.multivaluation)==null?void 0:me[o])!=null&&he.listingsource?(ye=(fe=e==null?void 0:e.multivaluation)==null?void 0:fe[o])==null?void 0:ye.listingsource:"Not Available"})]})]}):s(f,{children:[s("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Z,value:Z.filter(function(d){var y,b;return d.value===((b=(y=e==null?void 0:e.multivaluation)==null?void 0:y[o])==null?void 0:b.propertystatus)}),onChange:d=>$e(d==null?void 0:d.value,o),styles:N,id:"hh"}),l("div",{className:" mt-2 text-danger-500 block text-sm",children:Ee[o]})]}),l(S,{label:"Rent / Sold amount",type:"number",placeholder:"Type your Rent / Sold amount",name:`propertyvaluation-${o}`,value:((ve=(be=e==null?void 0:e.multivaluation)==null?void 0:be[o])==null?void 0:ve.propertyvaluation)||"",register:k,onChange:d=>je(d,o)}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$,value:$.filter(function(d){var y,b;return d.value===((b=(y=e==null?void 0:e.multivaluation)==null?void 0:y[o])==null?void 0:b.employeeid)}),onChange:d=>Oe(d==null?void 0:d.value,o),styles:N,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(d){var y,b;return d.value===((b=(y=e==null?void 0:e.multivaluation)==null?void 0:y[o])==null?void 0:b.listingsource)}),onChange:d=>Re(d==null?void 0:d.value,o),styles:N,id:"hh"})]})]}),((Ne=(ge=e==null?void 0:e.multivaluation)==null?void 0:ge[o])==null?void 0:Ne.propertystatus)==="Rent"?s(f,{children:[s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.guestname?t==null?void 0:t.guestname:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.email?t==null?void 0:t.email:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.passportnumber?t==null?void 0:t.passportnumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.nationality?t==null?void 0:t.nationality:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.mobilenumber?t==null?void 0:t.mobilenumber:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.rentalamount?t==null?void 0:t.rentalamount:"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractstartdate?new Date(t==null?void 0:t.contractstartdate).toDateString():"Not Available"})]}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),l("p",{className:"  form-control py-2   ",children:t!=null&&t.contractenddate?new Date(t==null?void 0:t.contractenddate).toDateString():"Not Available"})]})]}):null,l(f,{children:l(f,{})})]},o+1),x>1&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"borderBottom"})})]})})})}):null}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing type"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(r){return r.value===(e==null?void 0:e.listingtype)}),onChange:r=>{m({...e,listingtype:r==null?void 0:r.value})},styles:N,id:"hh"})]}),l(S,{name:"keylocation",label:"keys location",type:"text",register:k,placeholder:"Enter keys location",value:e.keylocation||"",onChange:v}),l(S,{name:"numberkeys",label:"Number of keys ",type:"text",register:k,placeholder:"Enter Number of keys ",value:e.numberkeys||"",onChange:v}),l(S,{name:"numberaccesscard",label:"Number of access cards",type:"text",register:k,placeholder:"Enter Number of access cards",value:e.numberaccesscard||"",onChange:v}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"maintenance done"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:K,value:K.filter(function(r){return r.value===(e==null?void 0:e.maintenance)}),onChange:r=>{m({...e,maintenance:r==null?void 0:r.value})},styles:N,id:"hh"})]}),s("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Transaction Status"}),l(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(r){return r.value===(e==null?void 0:e.transaction_status)}),onChange:r=>{m({...e,transaction_status:r==null?void 0:r.value})},styles:N,id:"hh"})]}),l(S,{name:"property_reference",label:"property reference no",type:"text",register:k,placeholder:"Enter property reference no",value:e.property_reference||"",onChange:v}),l(S,{name:"remarks",label:"remarks",type:"text",register:k,placeholder:"Enter remarks",value:e.remarks||"",onChange:v}),l(S,{name:"trakheesipermit",label:"trakheesi permit",type:"text",register:k,placeholder:"Enter trakheesi permit",value:e.trakheesipermit||"",onChange:v}),l(S,{name:"contractA",label:"contract A",type:"text",register:k,placeholder:"Enter contract A",value:e.contractA||"",onChange:v}),l(f,{}),s("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Location"}),c!=null&&c.propertylocation?l("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${c!=null&&c.propertylocation?c==null?void 0:c.propertylocation:"#"}`,children:c!=null&&c.propertylocation?((le=c==null?void 0:c.propertylocation)==null?void 0:le.slice(0,80))+(((te=c==null?void 0:c.propertylocation)==null?void 0:te.length)>100,""):"Not Available"}):l("p",{className:"  form-control py-2   ",children:"Not Available"})]}),s("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"text-[30px]",children:"Youtube Video"}),(c==null?void 0:c.youtubelink)&&Y?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:Y,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}})})}):l("span",{className:"si-distance pl-[7px]",children:"Not available"})]}),s("div",{className:"lg:col-span-2 col-span-1 mt-[25px] flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${T===!0?"cursor-not-allowed	":""}`,children:T===!0?l("div",{className:` ${T===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):l(Ge,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-availability-sheet",children:"Cancel"})}),ke.pathname===`/update-availability-sheet/${C}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:Ue,children:"Update"})})}):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${T===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:Me,type:"button",children:"Submit"})})}),T===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"})}):null]})]})})})]})};export{De as default};
