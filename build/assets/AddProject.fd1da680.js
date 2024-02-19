import{bu as w,A as F,ag as O,r as c,w as $,x as f,y as E,c as n,F as V,j as a,t as B,C as L,aq as T,l as v,z as U,K as N,Q as y}from"./index.288a2b39.js";const z={option:(s,l)=>({...s,fontSize:"14px"})},K=()=>{const{id:s}=w(),l=F(),d=O(),[e,i]=c.exports.useState(""),p=t=>{const{name:o,value:r}=t.target;i({...e,[o]:r})};c.exports.useEffect(()=>{(async()=>{if(s){const r=await(await fetch(`http://dev-rare.srp.ai/projectname/${s}`)).json();r&&i(r)}})()},[s]);const[u,b]=c.exports.useState([]);c.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/community").then(t=>t.json()).then(t=>{const o=t==null?void 0:t.map(r=>({label:r.communityname,value:r._id}));b(o)})},[]);const[m,x]=c.exports.useState(""),[h,C]=c.exports.useState("");let P={projectName:"Project Name",communityname:"Community Name"};const k=$({projectName:f().required(m),communityname:f().required(h)}).required(),{register:g,formState:{errors:A}}=E({resolver:U(k)}),j=()=>{let t=!1,o={projectName:x,communityname:C};return o&&Object.keys(o).length&&Object.keys(o).map(r=>{o[r](""),e[r]||(o[r](P[r]+" is required"),t=!0)}),t},S=async()=>{!(e!=null&&e.projectName)||!(e!=null&&e.communityname)?j():(await N.post("http://dev-rare.srp.ai/projectname",e),y.success(`${e.projectName} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{l("/all-project")},1500))},q=async t=>{t.preventDefault(),!(e!=null&&e.projectName)||!(e!=null&&e.communityname)?j():(await N.patch("http://dev-rare.srp.ai/projectname",e),y.success(`${e.projectName} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{l("/all-project")},1500))};return n(V,{children:[a(B,{}),a(L,{title:"Project Form",children:a("div",{children:n("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[n("div",{className:"w-[100%] col-span-2",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Community Name"}),a(T,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:u,value:u.filter(function(t){return t.value===(e==null?void 0:e.communityid)}),onChange:t=>{i({...e,communityid:t==null?void 0:t.value,communityname:t==null?void 0:t.label})},styles:z,id:"hh"}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:h})]}),n("div",{children:[a(v,{name:"projectName",label:"Project Name",type:"text",placeholder:"Enter Project name",register:g,error:m,value:e.projectName||"",onChange:p}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:m})]}),a(v,{name:"projectCode",label:"Project Code",type:"text",register:g,placeholder:"Enter Project code",value:e.projectCode||"",onChange:p}),n("div",{className:"lg:col-span-2 col-span-1",children:[d.pathname===`/update-project/${s}`?a("div",{className:"ltr:text-right rtl:text-left",children:a("button",{className:"btn btn-dark  text-center",onClick:q,type:"button",children:"Update"})}):null,d.pathname==="/add-project"?a("div",{className:"ltr:text-right rtl:text-left",children:a("button",{className:"btn btn-dark  text-center",onClick:S,type:"button",children:"Submit"})}):null]})]})})})]})};export{K as default};
