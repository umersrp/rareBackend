import{bt as he,B as ye,af as xe,r as p,x as je,y as G,z as we,j as t,F as J,t as Fe,e as ke,ap as K,l as W,an as A,bP as E,A as Ce,c2 as j,M as k,Q as C}from"./index.432a31b5.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\building\\AddBuilding.jsx";const X={option:(x,w)=>({...x,fontSize:"14px"})},Be=()=>{var H,Q,R;const{id:x}=he(),w=ye(),Y=xe(),[e,h]=p.exports.useState(""),M=i=>{const{name:l,value:m}=i.target;h({...e,[l]:m})};p.exports.useEffect(()=>{(async()=>{if(x){const m=await(await fetch(`http://dev-rare.srp.ai/buildingname/${x}`)).json();m&&h(m)}})()},[x]);const[O,Z]=p.exports.useState([]);p.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/projectname").then(i=>i.json()).then(i=>{const l=i==null?void 0:i.map(m=>({label:m.projectName,value:m._id}));Z(l)})},[]);const[T,D]=p.exports.useState([]);p.exports.useState([]),p.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/amenities").then(i=>i.json()).then(i=>{const l=i==null?void 0:i.map(m=>({label:m.amenitiesname,value:m._id}));D(l)})},[]);const[f,S]=p.exports.useState([]),[ee,I]=p.exports.useState(""),ie=i=>{const l=i.target.files,m=Array.from(l).map(n=>n),c=5*1024*1024,s=m.filter(n=>n.size>c);s.length>0?(I(`The following image are too large: ${s.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),S([])):(S(m),I(""))},le=i=>{S([...f.filter(m=>m!==i)]);for(var l=0;l<f.length;l++)f[l]===i&&f.splice(l,1)},ne=i=>{h({...e,typicalfloorplan:e==null?void 0:e.typicalfloorplan.filter(m=>m!==i)});for(var l=0;l<(e==null?void 0:e.typicalfloorplan.length);l++)(e==null?void 0:e.typicalfloorplan[l])===i&&(e==null||e.typicalfloorplan.splice(l,1))},[g,P]=p.exports.useState([]),[oe,U]=p.exports.useState(""),te=i=>{const l=i.target.files,m=Array.from(l).map(n=>n),c=5*1024*1024,s=m.filter(n=>n.size>c);s.length>0?(U(`The following image are too large: ${s.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),P([])):(P(m),U(""))},ae=i=>{P([...g.filter(m=>m!==i)]);for(var l=0;l<g.length;l++)g[l]===i&&g.splice(l,1)},me=i=>{h({...e,buildingelevation:e==null?void 0:e.buildingelevation.filter(m=>m!==i)});for(var l=0;l<(e==null?void 0:e.buildingelevation.length);l++)(e==null?void 0:e.buildingelevation[l])===i&&(e==null||e.buildingelevation.splice(l,1))},[b,B]=p.exports.useState([]),[re,_]=p.exports.useState(""),se=i=>{const l=i.target.files,m=Array.from(l).map(n=>n),c=5*1024*1024,s=m.filter(n=>n.size>c);s.length>0?(_(`The following image are too large: ${s.map(n=>n.name).join(", ")}. Maximum file size is 1MB.`),B([])):(B(m),_(""))},de=i=>{B([...b.filter(m=>m!==i)]);for(var l=0;l<b.length;l++)b[l]===i&&b.splice(l,1)},ce=i=>{h({...e,amenitiesimages:e==null?void 0:e.amenitiesimages.filter(m=>m!==i)});for(var l=0;l<(e==null?void 0:e.amenitiesimages.length);l++)(e==null?void 0:e.amenitiesimages[l])===i&&(e==null||e.amenitiesimages.splice(l,1))},[q,pe]=p.exports.useState(""),[$,ue]=p.exports.useState("");let fe={projectName:"Project Name",buildingname:"Building Name"};const ge=je({projectName:G().required(q),buildingname:G().required($)}).required(),{register:L,formState:{errors:Se}}=we({resolver:Ce(ge)}),V=()=>{let i=!1,l={projectName:pe,buildingname:ue};return l&&Object.keys(l).length&&Object.keys(l).map(m=>{l[m](""),e[m]||(l[m](fe[m]+" is required"),i=!0)}),i},[z,F]=p.exports.useState(!1),be=async()=>{var i,l;if(!(e!=null&&e.projectname)||!(e!=null&&e.buildingname))V();else try{F(!0);let m=[];f.length&&m.push(j(f,"typicalFloorPlan")),g.length&&m.push(j(g,"buildingelevation")),b.length&&m.push(j(b,"amenitiesimages"));let c=await Promise.all(m);const s=new FormData;if(c.length){let n=[];for(let r=0;r<c.length;r++){let o=c[r].data.files;n.push(o)}let d=[];for(let r of n)for(let o of r){let u=o;d.push(u)}let y=[],v=[],N=[];for(let r of d)if(r.includes("typicalFloorPlan")){let o=r;y.push(o)}else if(r.includes("buildingelevation")){let o=r;v.push(o)}else if(r.includes("amenitiesimages")){let o=r;N.push(o)}if(s.append("buildingname",e.buildingname===void 0?"":e.buildingname),s.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),s.append("projectname",e.projectname===void 0?"":e.projectname),e!=null&&e.projectnameid&&s.append("projectnameid",e.projectnameid),y.length)for(let r=0;r<y.length;r++)s.append("typicalfloorplan",y[r]);if(v.length)for(let r=0;r<v.length;r++)s.append("buildingelevation",v[r]);if(N.length)for(let r=0;r<N.length;r++)s.append("amenitiesimages",N[r]);if((e==null?void 0:e.amenities)&&((i=e==null?void 0:e.amenities)==null?void 0:i.length))for(let r=0;r<(e==null?void 0:e.amenities.length);r++)s.append("amenities",e==null?void 0:e.amenities[r]);await k.post("http://dev-rare.srp.ai/buildingname",s),C.success(`${e.buildingname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}else{if(e!=null&&e.projectnameid&&s.append("projectnameid",e.projectnameid),s.append("buildingname",e.buildingname===void 0?"":e.buildingname),s.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),s.append("projectname",e.projectname===void 0?"":e.projectname),(e==null?void 0:e.amenities)&&((l=e==null?void 0:e.amenities)==null?void 0:l.length))for(let n=0;n<(e==null?void 0:e.amenities.length);n++)s.append("amenities",e==null?void 0:e.amenities[n]);await k.post("http://dev-rare.srp.ai/buildingname",s),C.success(`${e.buildingname} created successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}}catch(m){console.log(m,"error"),F(!1)}},ve=async i=>{var l,m;if(i.preventDefault(),!(e!=null&&e.projectname)||!(e!=null&&e.buildingname))V();else try{F(!0);let c=[];f.length&&c.push(j(f,"typicalFloorPlan")),g.length&&c.push(j(g,"buildingelevation")),b.length&&c.push(j(b,"amenitiesimages"));let s=await Promise.all(c);const n=new FormData;if(s.length){let d=[];for(let o=0;o<s.length;o++){let u=s[o].data.files;d.push(u)}let y=[];for(let o of d)for(let u of o){let Ne=u;y.push(Ne)}let v=[],N=[],r=[];for(let o of y)if(o.includes("typicalFloorPlan")){let u=o;v.push(u)}else if(o.includes("buildingelevation")){let u=o;N.push(u)}else if(o.includes("amenitiesimages")){let u=o;r.push(u)}if(e!=null&&e.projectnameid&&n.append("projectnameid",e.projectnameid),n.append("_id",e._id),n.append("buildingname",e.buildingname===void 0?"":e.buildingname),n.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),n.append("projectname",e.projectname===void 0?"":e.projectname),v.length)for(let o=0;o<v.length;o++)n.append("typicalfloorplan",v[o]);if(N.length)for(let o=0;o<N.length;o++)n.append("buildingelevation",N[o]);if(r.length)for(let o=0;o<r.length;o++)n.append("amenitiesimages",r[o]);for(let o=0;o<(e==null?void 0:e.typicalfloorplan.length);o++)n.append("typicalfloorplan",e==null?void 0:e.typicalfloorplan[o]);for(let o=0;o<(e==null?void 0:e.buildingelevation.length);o++)n.append("buildingelevation",e==null?void 0:e.buildingelevation[o]);for(let o=0;o<(e==null?void 0:e.amenitiesimages.length);o++)n.append("amenitiesimages",e==null?void 0:e.amenitiesimages[o]);if((e==null?void 0:e.amenities)&&((l=e==null?void 0:e.amenities)==null?void 0:l.length))for(let o=0;o<(e==null?void 0:e.amenities.length);o++)n.append("amenities",e==null?void 0:e.amenities[o]);await k.patch("http://dev-rare.srp.ai/buildingname",n),C.success(`${e.buildingname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}else{if(e!=null&&e.projectnameid&&n.append("projectnameid",e.projectnameid),n.append("_id",e._id),n.append("buildingname",e.buildingname===void 0?"":e.buildingname),n.append("buildingcode",e.buildingcode===void 0?"":e.buildingcode),n.append("projectname",e.projectname===void 0?"":e.projectname),e!=null&&e.typicalfloorplan.length)for(let d=0;d<(e==null?void 0:e.typicalfloorplan.length);d++)n.append("typicalfloorplan",e==null?void 0:e.typicalfloorplan[d]);else n.append("typicalfloorplan",[]);if(e!=null&&e.buildingelevation.length)for(let d=0;d<(e==null?void 0:e.buildingelevation.length);d++)n.append("buildingelevation",e==null?void 0:e.buildingelevation[d]);else n.append("buildingelevation",[]);if(e!=null&&e.amenitiesimages.length)for(let d=0;d<(e==null?void 0:e.amenitiesimages.length);d++)n.append("amenitiesimages",e==null?void 0:e.amenitiesimages[d]);else n.append("amenitiesimages",[]);if((e==null?void 0:e.amenities)&&((m=e==null?void 0:e.amenities)==null?void 0:m.length))for(let d=0;d<(e==null?void 0:e.amenities.length);d++)n.append("amenities",e==null?void 0:e.amenities[d]);await k.patch("http://dev-rare.srp.ai/buildingname",n),C.success(`${e.buildingname} updated successfully`,{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{w("/all-buildings")},1500)}}catch(c){console.log("error",c),F(!1)}};return t(J,{children:[t(Fe,{},void 0,!1,{fileName:a,lineNumber:553,columnNumber:13},void 0),t(ke,{title:"Building Form",children:t("div",{children:t("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-2",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Project Name"},void 0,!1,{fileName:a,lineNumber:558,columnNumber:29},void 0),t(K,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:O,value:O.filter(function(i){return i.value===(e==null?void 0:e.projectnameid)}),onChange:i=>{h({...e,projectnameid:i==null?void 0:i.value,projectname:i==null?void 0:i.label})},styles:X,id:"hh"},void 0,!1,{fileName:a,lineNumber:561,columnNumber:29},void 0),t("div",{className:" mt-2 text-danger-500 block text-sm",children:q},void 0,!1,{fileName:a,lineNumber:575,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:557,columnNumber:25},void 0),t("div",{children:[t(W,{name:"buildingname",label:"Building Name",type:"text",placeholder:"Enter Building name",register:L,error:$,value:e.buildingname||"",onChange:M},void 0,!1,{fileName:a,lineNumber:580,columnNumber:29},void 0),t("div",{className:" mt-2 text-danger-500 block text-sm",children:$},void 0,!1,{fileName:a,lineNumber:590,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:579,columnNumber:25},void 0),t(W,{name:"buildingcode",label:"Building Code",type:"text",register:L,placeholder:"Enter Project code",value:e.buildingcode||"",onChange:M},void 0,!1,{fileName:a,lineNumber:594,columnNumber:25},void 0),t("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Select Amenities"},void 0,!1,{fileName:a,lineNumber:604,columnNumber:29},void 0),t(K,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T.filter(function(i){var l;return(l=e==null?void 0:e.amenities)==null?void 0:l.includes(i.value)}),onChange:i=>{h({...e,amenities:i.map(l=>l.value)})},isMulti:!0,styles:X,id:"hh"},void 0,!1,{fileName:a,lineNumber:607,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:603,columnNumber:25},void 0),t("div",{className:"w-[100%]",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Typical Floor Plan"},void 0,!1,{fileName:a,lineNumber:626,columnNumber:29},void 0),t(A,{name:"typicalfloorplan",selectedFiles:f,onChange:ie,removeFile:le,multiple:!0,preview:!0},void 0,!1,{fileName:a,lineNumber:629,columnNumber:29},void 0),t("div",{className:" mt-2 text-danger-500 block text-sm",children:ee},void 0,!1,{fileName:a,lineNumber:637,columnNumber:29},void 0),((H=e==null?void 0:e.typicalfloorplan)==null?void 0:H.length)&&(e==null?void 0:e.typicalfloorplan[0])!==""?t("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.typicalfloorplan.map((i,l)=>t("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[t("img",{src:E,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>ne(i)},void 0,!1,{fileName:a,lineNumber:644,columnNumber:53},void 0),t("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:a,lineNumber:645,columnNumber:53},void 0)]},l,!0,{fileName:a,lineNumber:643,columnNumber:49},void 0))},void 0,!1,{fileName:a,lineNumber:640,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:625,columnNumber:25},void 0),t("div",{className:"w-[100%]",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Building Elevation"},void 0,!1,{fileName:a,lineNumber:656,columnNumber:29},void 0),t(A,{name:"buildingelevation",selectedFiles:g,onChange:te,removeFile:ae,multiple:!0,preview:!0},void 0,!1,{fileName:a,lineNumber:659,columnNumber:29},void 0),t("div",{className:" mt-2 text-danger-500 block text-sm",children:oe},void 0,!1,{fileName:a,lineNumber:667,columnNumber:29},void 0),((Q=e==null?void 0:e.buildingelevation)==null?void 0:Q.length)&&(e==null?void 0:e.buildingelevation[0])!==""?t("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.buildingelevation.map((i,l)=>t("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[t("img",{src:E,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>me(i)},void 0,!1,{fileName:a,lineNumber:674,columnNumber:53},void 0),t("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:a,lineNumber:675,columnNumber:53},void 0)]},l,!0,{fileName:a,lineNumber:673,columnNumber:49},void 0))},void 0,!1,{fileName:a,lineNumber:670,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:655,columnNumber:25},void 0),t("div",{className:"w-[100%]",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Amenities images"},void 0,!1,{fileName:a,lineNumber:686,columnNumber:29},void 0),t(A,{name:"amenitiesimages",selectedFiles:b,onChange:se,removeFile:de,multiple:!0,preview:!0},void 0,!1,{fileName:a,lineNumber:689,columnNumber:29},void 0),t("div",{className:" mt-2 text-danger-500 block text-sm",children:re},void 0,!1,{fileName:a,lineNumber:697,columnNumber:29},void 0),((R=e==null?void 0:e.amenitiesimages)==null?void 0:R.length)&&(e==null?void 0:e.amenitiesimages[0])!==""?t("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.amenitiesimages.map((i,l)=>t("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200 relative",children:[t("img",{src:E,alt:"CancelIcon",className:"absolute top-[0] right-[0] w-[25px] cursor-pointer bg-white",onClick:()=>ce(i)},void 0,!1,{fileName:a,lineNumber:704,columnNumber:53},void 0),t("img",{src:"http://dev-rare.srp.ai"+i,alt:`Property Images ${l}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:a,lineNumber:705,columnNumber:53},void 0)]},l,!0,{fileName:a,lineNumber:703,columnNumber:49},void 0))},void 0,!1,{fileName:a,lineNumber:700,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:685,columnNumber:25},void 0),t(J,{},void 0,!1),t("div",{className:"lg:col-span-2 col-span-1 relative",children:[Y.pathname===`/update-building/${x}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${z===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:ve,children:"Update"},void 0,!1,{fileName:a,lineNumber:736,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:735,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:734,columnNumber:37},void 0):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${z===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:be,type:"button",children:"Submit"},void 0,!1,{fileName:a,lineNumber:741,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:740,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:739,columnNumber:37},void 0),z===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"},void 0,!1,{fileName:a,lineNumber:749,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:748,columnNumber:37},void 0):null]},void 0,!0,{fileName:a,lineNumber:731,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:556,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:555,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:554,columnNumber:13},void 0)]},void 0,!0)};export{Be as default};
