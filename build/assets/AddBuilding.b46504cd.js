import{bu as ye,A as xe,ag as je,r as p,w as Ne,x as Z,y as we,c as m,F as G,j as a,t as Fe,C as ke,aq as J,l as R,ao as A,bP as M,z as Ce,bZ as N,K as k,Q as C}from"./index.17c13ab6.js";const W={option:(j,w)=>({...j,fontSize:"14px"})},Be=()=>{var V,K,Q;const{id:j}=ye(),w=xe(),X=je(),[e,y]=p.exports.useState(""),E=i=>{const{name:l,value:o}=i.target;y({...e,[l]:o})};p.exports.useEffect(()=>{(async()=>{if(j){const o=await(await fetch(`http://dev-rare.srp.ai/buildingname/${j}`)).json();o&&y(o)}})()},[j]);const[O,Y]=p.exports.useState([]);p.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/projectname").then(i=>i.json()).then(i=>{const l=i==null?void 0:i.map(o=>({label:o.projectName,value:o._id}));Y(l)})},[]);const[T,D]=p.exports.useState([]);p.exports.useState([]),p.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/amenities").then(i=>i.json()).then(i=>{const l=i==null?void 0:i.map(o=>({label:o.amenitiesname,value:o._id}));D(l)})},[]);const[f,S]=p.exports.useState([]),[ee,I]=p.exports.useState(""),ie=i=>{const l=i.target.files,o=Array.from(l).map(n=>n),d=5*1024*1024,r=o.filter(n=>n.size>d);r.length>0?(I(`The following image are too large: ${r.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),S([])):(S(o),I(""))},le=i=>{S([...f.filter(o=>o!==i)]);for(var l=0;l<f.length;l++)f[l]===i&&f.splice(l,1)},ne=i=>{y({...e,typicalfloorplan:e==null?void 0:e.typicalfloorplan.filter(o=>o!==i)});for(var l=0;l<(e==null?void 0:e.typicalfloorplan.length);l++)(e==null?void 0:e.typicalfloorplan[l])===i&&(e==null||e.typicalfloorplan.splice(l,1))},[h,P]=p.exports.useState([]),[te,q]=p.exports.useState(""),oe=i=>{const l=i.target.files,o=Array.from(l).map(n=>n),d=5*1024*1024,r=o.filter(n=>n.size>d);r.length>0?(q(`The following image are too large: ${r.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),P([])):(P(o),q(""))},ae=i=>{P([...h.filter(o=>o!==i)]);for(var l=0;l<h.length;l++)h[l]===i&&h.splice(l,1)},se=i=>{y({...e,buildingelevation:e==null?void 0:e.buildingelevation.filter(o=>o!==i)});for(var l=0;l<(e==null?void 0:e.buildingelevation.length);l++)(e==null?void 0:e.buildingelevation[l])===i&&(e==null||e.buildingelevation.splice(l,1))},[b,B]=p.exports.useState([]),[re,U]=p.exports.useState(""),ce=i=>{const l=i.target.files,o=Array.from(l).map(n=>n),d=5*1024*1024,r=o.filter(n=>n.size>d);r.length>0?(U(`The following image are too large: ${r.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),B([])):(B(o),U(""))},de=i=>{B([...b.filter(o=>o!==i)]);for(var l=0;l<b.length;l++)b[l]===i&&b.splice(l,1)},pe=i=>{y({...e,amenitiesimages:e==null?void 0:e.amenitiesimages.filter(o=>o!==i)});for(var l=0;l<(e==null?void 0:e.amenitiesimages.length);l++)(e==null?void 0:e.amenitiesimages[l])===i&&(e==null||e.amenitiesimages.splice(l,1))},[_,me]=p.exports.useState(""),[$,ge]=p.exports.useState("");let fe={projectName:"Project Name",buildingname:"Building Name"};const he=Ne({projectName:Z().required(_),buildingname:Z().required($)}).required(),{register:L,formState:{errors:Se}}=we({resolver:Ce(he)}),H=()=>{let i=!1,l={projectName:me,buildingname:ge};return l&&Object.keys(l).length&&Object.keys(l).map(o=>{l[o](""),e[o]||(l[o](fe[o]+" is required"),i=!0)}),i},[z,F]=p.exports.useState(!1),be=async()=>{var i,l;if(!(e!=null&&e.projectname)||!(e!=null&&e.buildingname))H();else try{F(!0);let o=[];f.length&&o.push(N(f,"typicalFloorPlan")),h.length&&o.push(N(h,"buildingelevation")),b.length&&o.push(N(b,"amenitiesimages"));let d=await Promise.all(o);const r=new FormData;if(d.length){let n=[];for(let s=0;s<d.length;s++){let t=d[s].data.files;n.push(t)}let c=[];for(let s of n)for(let t of s){let g=t;c.push(g)}let x=[],v=[],u=[];for(let s of c)if(s.includes("typicalFloorPlan")){let t=s;x.push(t)}else if(s.includes("buildingelevation")){let t=s;v.push(t)}else if(s.includes("amenitiesimages")){let t=s;u.push(t)}if(r.append("buildingname",e.buildingname===void 0?"":e.buildingname),r.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),r.append("projectname",e.projectname===void 0?"":e.projectname),e!=null&&e.projectnameid&&r.append("projectnameid",e.projectnameid),x.length)for(let s=0;s<x.length;s++)r.append("typicalfloorplan",x[s]);if(v.length)for(let s=0;s<v.length;s++)r.append("buildingelevation",v[s]);if(u.length)for(let s=0;s<u.length;s++)r.append("amenitiesimages",u[s]);if((e==null?void 0:e.amenities)&&((i=e==null?void 0:e.amenities)==null?void 0:i.length))for(let s=0;s<(e==null?void 0:e.amenities.length);s++)r.append("amenities",e==null?void 0:e.amenities[s]);await k.post("http://dev-rare.srp.ai/buildingname",r),C.success(`${e.buildingname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}else{if(e!=null&&e.projectnameid&&r.append("projectnameid",e.projectnameid),r.append("buildingname",e.buildingname===void 0?"":e.buildingname),r.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),r.append("projectname",e.projectname===void 0?"":e.projectname),(e==null?void 0:e.amenities)&&((l=e==null?void 0:e.amenities)==null?void 0:l.length))for(let n=0;n<(e==null?void 0:e.amenities.length);n++)r.append("amenities",e==null?void 0:e.amenities[n]);await k.post("http://dev-rare.srp.ai/buildingname",r),C.success(`${e.buildingname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}}catch(o){console.log(o,"error"),F(!1)}},ve=async i=>{var l,o;if(i.preventDefault(),!(e!=null&&e.projectname)||!(e!=null&&e.buildingname))H();else try{F(!0);let d=[];f.length&&d.push(N(f,"typicalFloorPlan")),h.length&&d.push(N(h,"buildingelevation")),b.length&&d.push(N(b,"amenitiesimages"));let r=await Promise.all(d);const n=new FormData;if(r.length){let c=[];for(let t=0;t<r.length;t++){let g=r[t].data.files;c.push(g)}let x=[];for(let t of c)for(let g of t){let ue=g;x.push(ue)}let v=[],u=[],s=[];for(let t of x)if(t.includes("typicalFloorPlan")){let g=t;v.push(g)}else if(t.includes("buildingelevation")){let g=t;u.push(g)}else if(t.includes("amenitiesimages")){let g=t;s.push(g)}if(e!=null&&e.projectnameid&&n.append("projectnameid",e.projectnameid),n.append("_id",e._id),n.append("buildingname",e.buildingname===void 0?"":e.buildingname),n.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),n.append("projectname",e.projectname===void 0?"":e.projectname),v.length)for(let t=0;t<v.length;t++)n.append("typicalfloorplan",v[t]);if(u.length)for(let t=0;t<u.length;t++)n.append("buildingelevation",u[t]);if(s.length)for(let t=0;t<s.length;t++)n.append("amenitiesimages",s[t]);for(let t=0;t<(e==null?void 0:e.typicalfloorplan.length);t++)n.append("typicalfloorplan",e==null?void 0:e.typicalfloorplan[t]);for(let t=0;t<(e==null?void 0:e.buildingelevation.length);t++)n.append("buildingelevation",e==null?void 0:e.buildingelevation[t]);for(let t=0;t<(e==null?void 0:e.amenitiesimages.length);t++)n.append("amenitiesimages",e==null?void 0:e.amenitiesimages[t]);if((e==null?void 0:e.amenities)&&((l=e==null?void 0:e.amenities)==null?void 0:l.length))for(let t=0;t<(e==null?void 0:e.amenities.length);t++)n.append("amenities",e==null?void 0:e.amenities[t]);await k.patch("http://dev-rare.srp.ai/buildingname",n),C.success(`${e.buildingname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}else{if(e!=null&&e.projectnameid&&n.append("projectnameid",e.projectnameid),n.append("_id",e._id),n.append("buildingname",e.buildingname===void 0?"":e.buildingname),n.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),n.append("projectname",e.projectname===void 0?"":e.projectname),e!=null&&e.typicalfloorplan.length)for(let c=0;c<(e==null?void 0:e.typicalfloorplan.length);c++)n.append("typicalfloorplan",e==null?void 0:e.typicalfloorplan[c]);else n.append("typicalfloorplan",[]);if(e!=null&&e.buildingelevation.length)for(let c=0;c<(e==null?void 0:e.buildingelevation.length);c++)n.append("buildingelevation",e==null?void 0:e.buildingelevation[c]);else n.append("buildingelevation",[]);if(e!=null&&e.amenitiesimages.length)for(let c=0;c<(e==null?void 0:e.amenitiesimages.length);c++)n.append("amenitiesimages",e==null?void 0:e.amenitiesimages[c]);else n.append("amenitiesimages",[]);if((e==null?void 0:e.amenities)&&((o=e==null?void 0:e.amenities)==null?void 0:o.length))for(let c=0;c<(e==null?void 0:e.amenities.length);c++)n.append("amenities",e==null?void 0:e.amenities[c]);await k.patch("http://dev-rare.srp.ai/buildingname",n),C.success(`${e.buildingname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}}catch(d){console.log("error",d),F(!1)}};return m(G,{children:[a(Fe,{}),a(ke,{title:"Building Form",children:a("div",{children:m("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[m("div",{className:"w-[100%] col-span-2",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Project Name"}),a(J,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(i){return i.value===(e==null?void 0:e.projectnameid)}),onChange:i=>{y({...e,projectnameid:i==null?void 0:i.value,projectname:i==null?void 0:i.label})},styles:W,id:"hh"}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:_})]}),m("div",{children:[a(R,{name:"buildingname",label:"Building Name",type:"text",placeholder:"Enter Building name",register:L,error:$,value:e.buildingname||"",onChange:E}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:$})]}),a(R,{name:"buildingcode",label:"Building Code",type:"text",register:L,placeholder:"Enter Project code",value:e.buildingcode||"",onChange:E}),m("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Select Amenities"}),a(J,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T.filter(function(i){var l;return(l=e==null?void 0:e.amenities)==null?void 0:l.includes(i.value)}),onChange:i=>{y({...e,amenities:i.map(l=>l.value)})},isMulti:!0,styles:W,id:"hh"})]}),m("div",{className:"w-[100%]",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Typical Floor Plan"}),a(A,{name:"typicalfloorplan",selectedFiles:f,onChange:ie,removeFile:le,multiple:!0,preview:!0}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:ee}),((V=e==null?void 0:e.typicalfloorplan)==null?void 0:V.length)&&(e==null?void 0:e.typicalfloorplan[0])!==""?a("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.typicalfloorplan.map((i,l)=>m("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[a("img",{src:M,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>ne(i)}),a("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"})]},l))}):null]}),m("div",{className:"w-[100%]",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Building Elevation"}),a(A,{name:"buildingelevation",selectedFiles:h,onChange:oe,removeFile:ae,multiple:!0,preview:!0}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:te}),((K=e==null?void 0:e.buildingelevation)==null?void 0:K.length)&&(e==null?void 0:e.buildingelevation[0])!==""?a("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.buildingelevation.map((i,l)=>m("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[a("img",{src:M,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>se(i)}),a("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"})]},l))}):null]}),m("div",{className:"w-[100%]",children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Amenities images"}),a(A,{name:"amenitiesimages",selectedFiles:b,onChange:ce,removeFile:de,multiple:!0,preview:!0}),a("div",{className:" mt-2 text-danger-500 block text-sm",children:re}),((Q=e==null?void 0:e.amenitiesimages)==null?void 0:Q.length)&&(e==null?void 0:e.amenitiesimages[0])!==""?a("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.amenitiesimages.map((i,l)=>m("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[a("img",{src:M,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>pe(i)}),a("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"})]},l))}):null]}),a(G,{}),m("div",{className:"lg:col-span-2 col-span-1 relative",children:[X.pathname===`/update-building/${j}`?a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${z===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",type:"button",onClick:ve,children:"Update"})})}):a("div",{className:"ltr:text-right rtl:text-left",children:a("div",{className:`${z===!0?"opacity-[0.7]":""}`,children:a("button",{className:"btn btn-dark  text-center",onClick:be,type:"button",children:"Submit"})})}),z===!0?a("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:a("div",{className:"loader-spiner"})}):null]})]})})})]})};export{Be as default};
