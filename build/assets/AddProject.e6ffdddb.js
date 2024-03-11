import{bt as O,B as E,af as q,r as n,x as V,y as b,z as $,j as a,F as w,t as B,e as L,ap as U,l as h,A,M as j,Q as g}from"./index.f75f4411.js";var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\project\\AddProject.jsx";const T={option:(i,s)=>({...i,fontSize:"14px"})},H=()=>{const{id:i}=O(),s=E(),u=q(),[e,m]=n.exports.useState(""),d=t=>{const{name:l,value:r}=t.target;m({...e,[l]:r})};n.exports.useEffect(()=>{(async()=>{if(i){const r=await(await fetch(`http://dev-rare.srp.ai/projectname/${i}`)).json();r&&m(r)}})()},[i]);const[N,y]=n.exports.useState([]);n.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/community").then(t=>t.json()).then(t=>{const l=t==null?void 0:t.map(r=>({label:r.communityname,value:r._id}));y(l)})},[]);const[c,x]=n.exports.useState(""),[p,C]=n.exports.useState("");let P={projectName:"Project Name",communityname:"Community Name"};const k=V({projectName:b().required(c),communityname:b().required(p)}).required(),{register:v,formState:{errors:_}}=$({resolver:A(k)}),f=()=>{let t=!1,l={projectName:x,communityname:C};return l&&Object.keys(l).length&&Object.keys(l).map(r=>{l[r](""),e[r]||(l[r](P[r]+" is required"),t=!0)}),t},S=async()=>{!(e!=null&&e.projectName)||!(e!=null&&e.communityname)?f():(await j.post("http://dev-rare.srp.ai/projectname",e),g.success(`${e.projectName} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{s("/all-project")},1500))},F=async t=>{t.preventDefault(),!(e!=null&&e.projectName)||!(e!=null&&e.communityname)?f():(await j.patch("http://dev-rare.srp.ai/projectname",e),g.success(`${e.projectName} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{s("/all-project")},1500))};return a(w,{children:[a(B,{},void 0,!1,{fileName:o,lineNumber:145,columnNumber:13},void 0),a(L,{title:"Project Form",children:a("div",{children:a("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[a("div",{className:"w-[100%] col-span-2",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Community Name"},void 0,!1,{fileName:o,lineNumber:150,columnNumber:29},void 0),a(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N.filter(function(t){return t.value===(e==null?void 0:e.communityid)}),onChange:t=>{m({...e,communityid:t==null?void 0:t.value,communityname:t==null?void 0:t.label})},styles:T,id:"hh"},void 0,!1,{fileName:o,lineNumber:153,columnNumber:29},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:p},void 0,!1,{fileName:o,lineNumber:167,columnNumber:29},void 0)]},void 0,!0,{fileName:o,lineNumber:149,columnNumber:25},void 0),a("div",{children:[a(h,{name:"projectName",label:"Project Name",type:"text",placeholder:"Enter Project name",register:v,error:c,value:e.projectName||"",onChange:d},void 0,!1,{fileName:o,lineNumber:172,columnNumber:29},void 0),a("div",{className:" mt-2 text-danger-500 block text-sm",children:c},void 0,!1,{fileName:o,lineNumber:182,columnNumber:29},void 0)]},void 0,!0,{fileName:o,lineNumber:171,columnNumber:25},void 0),a(h,{name:"projectCode",label:"Project Code",type:"text",register:v,placeholder:"Enter Project code",value:e.projectCode||"",onChange:d},void 0,!1,{fileName:o,lineNumber:186,columnNumber:25},void 0),a("div",{className:"lg:col-span-2 col-span-1",children:[u.pathname===`/update-project/${i}`?a("div",{className:"ltr:text-right rtl:text-left",children:a("button",{className:"btn btn-dark  text-center",onClick:F,type:"button",children:"Update"},void 0,!1,{fileName:o,lineNumber:199,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:198,columnNumber:37},void 0):null,u.pathname==="/add-project"?a("div",{className:"ltr:text-right rtl:text-left",children:a("button",{className:"btn btn-dark  text-center",onClick:S,type:"button",children:"Submit"},void 0,!1,{fileName:o,lineNumber:206,columnNumber:41},void 0)},void 0,!1,{fileName:o,lineNumber:205,columnNumber:37},void 0):null]},void 0,!0,{fileName:o,lineNumber:195,columnNumber:25},void 0)]},void 0,!0,{fileName:o,lineNumber:148,columnNumber:21},void 0)},void 0,!1,{fileName:o,lineNumber:147,columnNumber:17},void 0)},void 0,!1,{fileName:o,lineNumber:146,columnNumber:13},void 0)]},void 0,!0)};export{H as default};
