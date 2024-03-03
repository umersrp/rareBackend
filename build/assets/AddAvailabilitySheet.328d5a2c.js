import{bs as Ie,A as Ye,ae as He,r as s,v as ze,x as xe,y as Ke,j as l,F as f,s as Je,e as Qe,ao as y,k as S,L as Ge,K as q,z as We,Q as L}from"./index.e066b4ed.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\avaiblity-sheet\\AddAvailabilitySheet.jsx";const g={option:(C,M)=>({...C,fontSize:"14px"})},De=()=>{var le,ie;const{id:C}=Ie(),M=Ye(),ke=He(),[e,N]=s.exports.useState(""),h=r=>{const{name:a,value:t}=r.target;N({...e,[a]:t})},U=new URLSearchParams(window.location.search),F=U.get("propertyid"),B=U.get("valuation");s.exports.useEffect(()=>{F!=null&&N(r=>({...r,porpertyid:F}))},[F]),s.exports.useEffect(()=>{B!=null&&N(r=>({...r,propertystatus:B}))},[B]);const I=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"},{value:"Multiple",label:"Multiple"}],[m,Ae]=s.exports.useState("");s.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.porpertyid}`)).json();t&&Ae(t)})()},[e==null?void 0:e.porpertyid]);const[Y,Se]=s.exports.useState("");s.exports.useEffect(()=>{if(m!=null&&m.youtubelink){let r=m==null?void 0:m.youtubelink,a=r==null?void 0:r.replace("watch?v=","embed/");Se(a)}},[m==null?void 0:m.youtubelink]),s.exports.useEffect(()=>{(async()=>{if(C){const t=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${C}`)).json();t&&N(t)}})()},[C]);const[H,we]=s.exports.useState([]);s.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(r=>r.json()).then(r=>{const a=r==null?void 0:r.map(t=>({label:t.unitnumber+" | "+(t==null?void 0:t.communityname)+" | "+(t==null?void 0:t.projectname)+" | "+(t==null?void 0:t.buildingname),value:t._id}));we(a)})},[]);const[z,Fe]=s.exports.useState([]),[O,Ce]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/roles/api/search/Property Consultant")).json();Fe(t==null?void 0:t.roles)})()},[]),s.exports.useEffect(()=>{(async()=>{var a,t;try{for(const n of z){const u=await q.get(`http://dev-rare.srp.ai/employees/pagination/pages?roleid=${n._id}&sort=descending&page=0&perPage=all`);if(u!=null&&u.data){const v=(t=(a=u.data)==null?void 0:a.employees)==null?void 0:t.map(d=>({label:(d==null?void 0:d.email)+" | "+(d==null?void 0:d.designation),value:d._id}));Ce(v)}}}catch(n){console.error("Error fetching data:",n)}})()},[z]);const[o,Pe]=s.exports.useState({});s.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${e==null?void 0:e.porpertyid}`)).json();let n=t==null?void 0:t.filter(u=>(u==null?void 0:u.contractupdation)!=="terminated");Pe(n[0])})()},[e==null?void 0:e.porpertyid]);const V=[{value:"Direct",label:"Direct"},{value:"Other Agency",label:"Other Agency"}],K=[{value:"Exclusive",label:"Exclusive"},{value:"Non Exclusive",label:"Non Exclusive"}],J=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],Q=[{value:"successful",label:"successful"},{value:"unsuucessful",label:"unsuucessful"}],[x,G]=s.exports.useState(0),[P,w]=s.exports.useState(""),[W,Ee]=s.exports.useState(""),[Te,$]=s.exports.useState(Array(x).fill(""));let _e={porpertyid:"Property",propertystatus:"Property Status"};const je=ze({porpertyid:xe().required(P),propertystatus:xe().required(W)}).required(),{register:k,formState:{errors:Xe}}=Ke({resolver:We(je)}),X=()=>{let r=!1,a={porpertyid:w,propertystatus:Ee};return a&&Object.keys(a).length&&Object.keys(a).map(t=>{a[t](""),e[t]||(a[t](_e[t]+" is required"),r=!0)}),r};s.exports.useEffect(()=>{parseFloat(e==null?void 0:e.multi_propertyvaluation)?G(parseFloat(e==null?void 0:e.multi_propertyvaluation)):G(0)},[e==null?void 0:e.multi_propertyvaluation]);const Z=[{value:"Rent",label:"Rent"},{value:"Sale",label:"Sale"},{value:"Short Term",label:"Short Term"}],Be=(r,a)=>{let t=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(t=[...e.multivaluation]);const n=t[a]||{};t[a]={...n,propertyvaluation:r.target.value,propertystatus:(n==null?void 0:n.propertystatus)||"",listingsource:(n==null?void 0:n.listingsource)||""};const u={...e,multivaluation:t};N(u)},Oe=(r,a)=>{let t=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(t=[...e.multivaluation]);const n=t[a]||{};t[a]={...n,propertystatus:r};const u={...e,multivaluation:t};N(u)},Ve=(r,a)=>{let t=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(t=[...e.multivaluation]);const n=t[a]||{};t[a]={...n,employeeid:r};const u={...e,multivaluation:t};N(u)},$e=(r,a)=>{let t=[];e.multivaluation&&Array.isArray(e.multivaluation)&&(t=[...e.multivaluation]);const n=t[a]||{};t[a]={...n,listingsource:r};const u={...e,multivaluation:t};N(u)},D=()=>{var t,n;$(Array(x).fill(""));let r=!0;const a=new Set;if((e==null?void 0:e.multivaluation)||(e==null?void 0:e.propertystatus)==="Multiple"){const u=Array(x).fill("");for(let v=0;v<x;v++){const d=(n=(t=e.multivaluation)==null?void 0:t[v])==null?void 0:n.propertystatus;d?a.has(d)?(u[v]="Duplicate Property Status",r=!1):a.add(d):(u[v]="Property Status is required",r=!1)}$(u)}return r},[A,Re]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/rentpurchase")).json();return Re(t)})()},[]);const[ee,j]=s.exports.useState(!1);s.exports.useEffect(()=>{const r=a=>{const{_id:t,porpertyid:n,unlisted:u,multivaluation:v}=a,{porpertyid:d}=e;return t!==(e==null?void 0:e._id)&&(n===d||n===F)&&u!==!0&&!(v!=null&&v.length)?(w("Property is already in the Availability Sheet"),j(!0),!0):(w(""),j(!1),!1)};if((e==null?void 0:e.porpertyid)||F)for(let a=0;a<A.length;a++){const t=A[a];if(r(t)){w("Property is already in the Availability Sheet"),j(!0);break}}else w(""),j(!1)},[e==null?void 0:e.porpertyid,F,A]);const[E,R]=s.exports.useState(!1),Me=localStorage.getItem("isAuth"),T=JSON.parse(Me),qe=async()=>{var a,t;$(Array(x).fill(""));const r=D();if((!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus))&&X(),P&&w("Property is already in the Availability Sheet"),(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&r&&ee===!1&&(A==null?void 0:A.length)){R(!0);try{await q.post("http://dev-rare.srp.ai/rentpurchase",{...e,createdBy:T==null?void 0:T._id}),L.success(`${e.porpertyid} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{M("/all-availability-sheet")},1500)}catch(n){R(!1),((t=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:t.message)==="Availability is already exists"&&(L.error("Availability is already exists",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),R(!1))}}},Le=async r=>{r.preventDefault(),$(Array(x).fill(""));const a=D();!(e!=null&&e.porpertyid)||!(e!=null&&e.propertystatus)?X():P?w("Property is already in the Availability Sheet"):(e==null?void 0:e.porpertyid)&&(e==null?void 0:e.propertystatus)&&!P&&a&&ee===!1&&(A==null?void 0:A.length)&&(R(!0),await q.patch("http://dev-rare.srp.ai/rentpurchase",{...e,updatedBy:T==null?void 0:T._id}),L.success(`${e.porpertyid} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{M("/all-availability-sheet")},1500))},[_,Ue]=s.exports.useState("");return s.exports.useEffect(()=>{(e==null?void 0:e.multivaluation)&&(e==null?void 0:e.propertystatus)==="Multiple"&&(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/employees")).json();t&&Ue(t)})()},[e==null?void 0:e.multivaluation,e==null?void 0:e.propertystatus]),l(f,{children:[l(Je,{},void 0,!1,{fileName:i,lineNumber:696,columnNumber:13},void 0),l(Qe,{title:"Availability Sheet Form",children:l("div",{children:l("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Property"},void 0,!1,{fileName:i,lineNumber:701,columnNumber:29},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:H,value:H.filter(function(r){return r.value===(e==null?void 0:e.porpertyid)}),onChange:r=>{N({...e,porpertyid:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:704,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:P},void 0,!1,{fileName:i,lineNumber:718,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:700,columnNumber:25},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"},void 0,!1,{fileName:i,lineNumber:723,columnNumber:29},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:I,value:I.filter(function(r){return r.value===(e==null?void 0:e.propertystatus)}),onChange:r=>{h({target:{name:"propertystatus",value:r.value}})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:726,columnNumber:29},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:W},void 0,!1,{fileName:i,lineNumber:740,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:722,columnNumber:25},void 0),(e==null?void 0:e.propertystatus)==="Multiple"?l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total no. of Property Valuation"},void 0,!1,{fileName:i,lineNumber:747,columnNumber:37},void 0),l("input",{type:"number",className:"  form-control py-2   ",placeholder:"Enter Total no. of Property Valuation",value:e.multi_propertyvaluation||null,name:"multi_propertyvaluation",max:1,onChange:h,onInput:r=>{r.target.value=Math.max(1,Math.min(3,parseInt(r.target.value))).toString().slice(0,1)},onKeyDown:r=>{const a=r.key;a!=="Backspace"&&(isNaN(a)||a<1||a>3)&&r.preventDefault()}},void 0,!1,{fileName:i,lineNumber:750,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:746,columnNumber:33},void 0):null,(e==null?void 0:e.propertystatus)!=="Multiple"?l(f,{children:[l(S,{name:"propertyvaluation",label:"Rent / Sold amount",type:"text",register:k,placeholder:"Enter Rent / Sold amount",value:e.propertyvaluation||"",onChange:h},void 0,!1,{fileName:i,lineNumber:769,columnNumber:37},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"},void 0,!1,{fileName:i,lineNumber:779,columnNumber:41},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(r){return r.value===(e==null?void 0:e.employeeid)}),onChange:r=>{N({...e,employeeid:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:782,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:778,columnNumber:37},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"},void 0,!1,{fileName:i,lineNumber:801,columnNumber:41},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:V,value:V.filter(function(r){return r.value===(e==null?void 0:e.listingsource)}),onChange:r=>{N({...e,listingsource:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:804,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:800,columnNumber:37},void 0),(e==null?void 0:e.propertystatus)==="Rent"?l(f,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:i,lineNumber:826,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:829,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:825,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:832,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:835,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:831,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"},void 0,!1,{fileName:i,lineNumber:838,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:841,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:837,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"},void 0,!1,{fileName:i,lineNumber:844,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:847,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:843,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"},void 0,!1,{fileName:i,lineNumber:850,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:853,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:849,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"},void 0,!1,{fileName:i,lineNumber:856,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:859,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:855,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"},void 0,!1,{fileName:i,lineNumber:862,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:865,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:861,columnNumber:49},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"},void 0,!1,{fileName:i,lineNumber:868,columnNumber:53},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:871,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:867,columnNumber:49},void 0)]},void 0,!0):null]},void 0,!0):null,l("div",{className:"w-[100%] col-span-2",children:(e==null?void 0:e.propertystatus)==="Multiple"&&(e==null?void 0:e.multi_propertyvaluation)?l(f,{children:x>0&&l(f,{children:Array.from({length:x},(r,a)=>{var t,n,u,v,d,oe,re,ae,te,ne,me,se,ue,ce,de,Ne,ve,fe,be,pe,he,ye,ge;return l(f,{children:[a===0&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"bordertop"},void 0,!1,{fileName:i,lineNumber:887,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:886,columnNumber:61},void 0),l("div",{className:`w-[100%] col-span-3 ${a!==0?"mt-[1.25rem]":""}`,children:((n=(t=e==null?void 0:e.multivaluation)==null?void 0:t[a])==null?void 0:n.unlisted)!==!0?l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500 bg-success-500",children:"Listed"},void 0,!1,{fileName:i,lineNumber:894,columnNumber:73},void 0)},void 0,!1,{fileName:i,lineNumber:893,columnNumber:69},void 0):l("span",{className:"block w-full",children:l("span",{className:" inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500 bg-danger-500",children:"Unlisted"},void 0,!1,{fileName:i,lineNumber:899,columnNumber:73},void 0)},void 0,!1,{fileName:i,lineNumber:898,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:890,columnNumber:57},void 0),l("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5  mt-[30px]",children:[((v=(u=e==null?void 0:e.multivaluation)==null?void 0:u[a])==null?void 0:v.unlisted)===!0?l(f,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"},void 0,!1,{fileName:i,lineNumber:910,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:(oe=(d=e==null?void 0:e.multivaluation)==null?void 0:d[a])!=null&&oe.propertystatus?(ae=(re=e==null?void 0:e.multivaluation)==null?void 0:re[a])==null?void 0:ae.propertystatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:913,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:909,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"},void 0,!1,{fileName:i,lineNumber:916,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:(ne=(te=e==null?void 0:e.multivaluation)==null?void 0:te[a])!=null&&ne.propertyvaluation?(se=(me=e==null?void 0:e.multivaluation)==null?void 0:me[a])==null?void 0:se.propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:919,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:915,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"},void 0,!1,{fileName:i,lineNumber:922,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:((ce=(ue=e==null?void 0:e.multivaluation)==null?void 0:ue[a])==null?void 0:ce.employeeid)&&(_==null?void 0:_.length)?((de=_==null?void 0:_.find(c=>{var b,p;return(c==null?void 0:c._id)===((p=(b=e==null?void 0:e.multivaluation)==null?void 0:b[a])==null?void 0:p.employeeid)}))==null?void 0:de.email)||"knsi condition chal rahi hai?":"Not Available"},void 0,!1,{fileName:i,lineNumber:926,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:921,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"},void 0,!1,{fileName:i,lineNumber:931,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:(ve=(Ne=e==null?void 0:e.multivaluation)==null?void 0:Ne[a])!=null&&ve.listingsource?(be=(fe=e==null?void 0:e.multivaluation)==null?void 0:fe[a])==null?void 0:be.listingsource:"Not Available"},void 0,!1,{fileName:i,lineNumber:934,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:930,columnNumber:73},void 0)]},void 0,!0):l(f,{children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Listed for"},void 0,!1,{fileName:i,lineNumber:939,columnNumber:77},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Z,value:Z.filter(function(c){var b,p;return c.value===((p=(b=e==null?void 0:e.multivaluation)==null?void 0:b[a])==null?void 0:p.propertystatus)}),onChange:c=>Oe(c==null?void 0:c.value,a),styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:942,columnNumber:77},void 0),l("div",{className:" mt-2 text-danger-500 block text-sm",children:Te[a]},void 0,!1,{fileName:i,lineNumber:954,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:938,columnNumber:73},void 0),l(S,{label:"Rent / Sold amount",type:"number",placeholder:"Type your Rent / Sold amount",name:`propertyvaluation-${a}`,value:((he=(pe=e==null?void 0:e.multivaluation)==null?void 0:pe[a])==null?void 0:he.propertyvaluation)||"",register:k,onChange:c=>Be(c,a)},void 0,!1,{fileName:i,lineNumber:958,columnNumber:73},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Assign to Agent"},void 0,!1,{fileName:i,lineNumber:969,columnNumber:77},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(c){var b,p;return c.value===((p=(b=e==null?void 0:e.multivaluation)==null?void 0:b[a])==null?void 0:p.employeeid)}),onChange:c=>Ve(c==null?void 0:c.value,a),styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:972,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:968,columnNumber:73},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing source"},void 0,!1,{fileName:i,lineNumber:986,columnNumber:77},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:V,value:V.filter(function(c){var b,p;return c.value===((p=(b=e==null?void 0:e.multivaluation)==null?void 0:b[a])==null?void 0:p.listingsource)}),onChange:c=>$e(c==null?void 0:c.value,a),styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:989,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:985,columnNumber:73},void 0)]},void 0,!0),((ge=(ye=e==null?void 0:e.multivaluation)==null?void 0:ye[a])==null?void 0:ge.propertystatus)==="Rent"?l(f,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:i,lineNumber:1011,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:1014,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1010,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:1017,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:1020,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1016,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"},void 0,!1,{fileName:i,lineNumber:1023,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:1026,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1022,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"},void 0,!1,{fileName:i,lineNumber:1029,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:1032,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1028,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"},void 0,!1,{fileName:i,lineNumber:1035,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:1038,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1034,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"},void 0,!1,{fileName:i,lineNumber:1041,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:1044,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1040,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"},void 0,!1,{fileName:i,lineNumber:1047,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:1050,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1046,columnNumber:73},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"},void 0,!1,{fileName:i,lineNumber:1053,columnNumber:77},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:1056,columnNumber:77},void 0)]},void 0,!0,{fileName:i,lineNumber:1052,columnNumber:73},void 0)]},void 0,!0):null,l(f,{children:l(f,{},void 0,!1)},void 0,!1)]},a+1,!0,{fileName:i,lineNumber:905,columnNumber:57},void 0),x>1&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:1202,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:1201,columnNumber:61},void 0)]},void 0,!0)})},void 0,!1)},void 0,!1):null},void 0,!1,{fileName:i,lineNumber:877,columnNumber:25},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"listing type"},void 0,!1,{fileName:i,lineNumber:1213,columnNumber:29},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:K,value:K.filter(function(r){return r.value===(e==null?void 0:e.listingtype)}),onChange:r=>{N({...e,listingtype:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:1216,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:1212,columnNumber:25},void 0),l(S,{name:"keylocation",label:"keys location",type:"text",register:k,placeholder:"Enter keys location",value:e.keylocation||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1231,columnNumber:25},void 0),l(S,{name:"numberkeys",label:"Number of keys ",type:"text",register:k,placeholder:"Enter Number of keys ",value:e.numberkeys||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1240,columnNumber:25},void 0),l(S,{name:"numberaccesscard",label:"Number of access cards",type:"text",register:k,placeholder:"Enter Number of access cards",value:e.numberaccesscard||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1249,columnNumber:25},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"maintenance done"},void 0,!1,{fileName:i,lineNumber:1259,columnNumber:29},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(r){return r.value===(e==null?void 0:e.maintenance)}),onChange:r=>{N({...e,maintenance:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:1262,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:1258,columnNumber:25},void 0),l("div",{className:"",children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Transaction Status"},void 0,!1,{fileName:i,lineNumber:1278,columnNumber:29},void 0),l(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(r){return r.value===(e==null?void 0:e.transaction_status)}),onChange:r=>{N({...e,transaction_status:r==null?void 0:r.value})},styles:g,id:"hh"},void 0,!1,{fileName:i,lineNumber:1281,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:1277,columnNumber:25},void 0),l(S,{name:"property_reference",label:"property reference no",type:"text",register:k,placeholder:"Enter property reference no",value:e.property_reference||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1305,columnNumber:25},void 0),l(S,{name:"remarks",label:"remarks",type:"text",register:k,placeholder:"Enter remarks",value:e.remarks||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1314,columnNumber:25},void 0),l(S,{name:"trakheesipermit",label:"trakheesi permit",type:"text",register:k,placeholder:"Enter trakheesi permit",value:e.trakheesipermit||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1323,columnNumber:25},void 0),l(S,{name:"contractA",label:"contract A",type:"text",register:k,placeholder:"Enter contract A",value:e.contractA||"",onChange:h},void 0,!1,{fileName:i,lineNumber:1332,columnNumber:25},void 0),l(f,{},void 0,!1),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Location"},void 0,!1,{fileName:i,lineNumber:1381,columnNumber:29},void 0),m!=null&&m.propertylocation?l("a",{className:"  form-control py-2   overflow-hidden",target:"_blank",href:`${m!=null&&m.propertylocation?m==null?void 0:m.propertylocation:"#"}`,children:m!=null&&m.propertylocation?((le=m==null?void 0:m.propertylocation)==null?void 0:le.slice(0,80))+(((ie=m==null?void 0:m.propertylocation)==null?void 0:ie.length)>100,""):"Not Available"},void 0,!1,{fileName:i,lineNumber:1387,columnNumber:37},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:1388,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:1380,columnNumber:25},void 0),l("div",{id:"video",className:"w-[100%] col-span-2",children:[l("h3",{className:"text-[30px]",children:"Youtube Video"},void 0,!1,{fileName:i,lineNumber:1393,columnNumber:29},void 0),(m==null?void 0:m.youtubelink)&&Y?l("div",{className:"flex w-[100%] col-span-2 justify-between flex-wrap gap-y-[25px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:Y,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:700,style:{border:"1px solid #ccc",boxShadow:"1px 2px 20px rgba(1, 0, 0, 0.3)"}},void 0,!1,{fileName:i,lineNumber:1398,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:1397,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:1396,columnNumber:33},void 0):l("span",{className:"si-distance pl-[7px]",children:"Not available"},void 0,!1,{fileName:i,lineNumber:1412,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:1392,columnNumber:25},void 0),l("div",{className:"lg:col-span-2 col-span-1 mt-[25px] flex items-center justify-end gap-x-[25px] relative",children:[l("div",{className:`"ltr:text-right rtl:text-left " ${E===!0?"cursor-not-allowed	":""}`,children:E===!0?l("div",{className:` ${E===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"},void 0,!1,{fileName:i,lineNumber:1420,columnNumber:41},void 0):l(Ge,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-availability-sheet",children:"Cancel"},void 0,!1,{fileName:i,lineNumber:1421,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:1417,columnNumber:29},void 0),ke.pathname===`/update-availability-sheet/${C}`?l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${E===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",type:"button",onClick:Le,children:"Update"},void 0,!1,{fileName:i,lineNumber:1428,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:1427,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:1426,columnNumber:37},void 0):l("div",{className:"ltr:text-right rtl:text-left",children:l("div",{className:`${E===!0?"opacity-[0.7]":""}`,children:l("button",{className:"btn btn-dark  text-center",onClick:qe,type:"button",children:"Submit"},void 0,!1,{fileName:i,lineNumber:1433,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:1432,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:1431,columnNumber:37},void 0),E===!0?l("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:l("div",{className:"loader-spiner"},void 0,!1,{fileName:i,lineNumber:1441,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:1440,columnNumber:37},void 0):null]},void 0,!0,{fileName:i,lineNumber:1416,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:699,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:698,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:697,columnNumber:13},void 0)]},void 0,!0)};export{De as default};