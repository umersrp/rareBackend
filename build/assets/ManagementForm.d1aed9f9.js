import{bt as Ce,B as we,af as Pe,r,bX as Fe,ce as Me,cj as je,ck as Ae,ci as Te,x as Ie,y as Oe,z as Be,c,F as T,j as t,t as Le,f as Ee,ap as D,aB as I,l as O,bP as Ue,an as ze,L as $e,A as Ve,bQ as ee,Q as P}from"./index.f5cdfd20.js";const te={option:(u,N)=>({...u,fontSize:"14px"})},He=()=>{const{id:u}=Ce(),N=we(),ae=Pe(),[e,s]=r.exports.useState(""),g=a=>{const{name:n,value:l}=a.target;s({...e,[n]:l})},B=new URLSearchParams(window.location.search),k=B.get("propertyid"),S=B.get("renew");r.exports.useEffect(()=>{k!=null&&s(a=>({...a,propertyid:k}))},[k]),r.exports.useEffect(()=>{S!=null&&s(a=>({...a,contractupdation:S}))},[S]);const L=[{value:"Long Term",label:"Long Term"},{value:"Short Term",label:"Short Term"}],{data:C}=Fe(),{data:o,isSuccess:E}=Me(u),{data:F}=je(),[U,h]=r.exports.useState(!1);r.exports.useEffect(()=>{const a=n=>{var Y,K,W,Z;const{_id:l,propertyid:Ne,contractstartdate:J,contractenddate:_e}=n,{contractstartdate:ke,contractenddate:X,propertyid:Se}=e;return l!==(e==null?void 0:e._id)&&J&&X&&((Y=new Date(J))==null?void 0:Y.toISOString())<((K=new Date(X))==null?void 0:K.toISOString())&&((W=new Date(_e))==null?void 0:W.toISOString())>((Z=new Date(ke))==null?void 0:Z.toISOString())&&Ne===Se?(h(!0),!0):(h(!1),d(""),m(""),!1)};if((e==null?void 0:e.contractstartdate)&&(e==null?void 0:e.contractenddate)&&(e==null?void 0:e.propertyid))for(let n=0;n<(C==null?void 0:C.length);n++){const l=C[n];if(a(l)){h(!0);break}else{h(!1),d(""),m("");break}}else h(!1),d(""),m("")},[e==null?void 0:e.contractstartdate,e==null?void 0:e.contractenddate,e==null?void 0:e.propertyid]);const[ne,z]=r.exports.useState("");r.exports.useEffect(()=>{var a,n,l;u&&o&&E&&(s(o==null?void 0:o.managementContract),z(((a=o==null?void 0:o.managementContract)==null?void 0:a.management_contract)&&((n=o==null?void 0:o.managementContract)==null?void 0:n.management_contract)!==void 0?(l=o==null?void 0:o.managementContract)==null?void 0:l.management_contract:""))},[u,o,E]);const[$]=Ae(),[V]=Te(),[G,le]=r.exports.useState([]);r.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(a=>a.json()).then(a=>{const n=a==null?void 0:a.map(l=>({label:l.unitnumber+" | "+l.communityname+" | "+l.projectname+" | "+l.buildingname,value:l._id}));le(n)})},[]),r.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const l=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.propertyid}`)).json();l&&s({...e,unitnumber:l==null?void 0:l.unitnumber,buildingname:l==null?void 0:l.building_name,projectname:l==null?void 0:l.project_name,communityname:l==null?void 0:l.community_name})}})()},[e==null?void 0:e.propertyid]);const[_,ce]=r.exports.useState(null),re=a=>{ce(a.target.files[0]),s({...e,management_contract:a.target.files[0]})},oe=()=>{s({...e,management_contract:""}),z("")},[R,M]=r.exports.useState(!1);r.exports.useState(!1);const[f,ie]=r.exports.useState([]);r.exports.useEffect(()=>{(e==null?void 0:e.managementfee)&&(e==null?void 0:e.minimum_managementfee)?parseFloat(e==null?void 0:e.managementfee)<=parseFloat(e==null?void 0:e.minimum_managementfee)?M(!0):parseFloat(e==null?void 0:e.managementfee)>parseFloat(e==null?void 0:e.minimum_managementfee)&&M(!1):M(!1)},[e==null?void 0:e.managementfee,e==null?void 0:e.minimum_managementfee]);const[x,q]=r.exports.useState(null);r.exports.useEffect(()=>{if(e.propertyid&&e){const a=F==null?void 0:F.filter(n=>n.propertyid===e.propertyid&&new Date(n.contractstartdate)<=new Date&&new Date(n.contractenddate)>=new Date&&n.contractupdation!=="terminated");ie(a)}},[e==null?void 0:e.propertyid,e==null?void 0:e.managementfee,e]),r.exports.useEffect(()=>{var a;if((f==null?void 0:f.length)>0&&((a=f[0])==null?void 0:a.rentalamount)){const n=(f[0].rentalamount*.05).toFixed(2);q(n)}else q(null)},[f]);const[Q,p]=r.exports.useState(""),[se,w]=r.exports.useState(""),[de,d]=r.exports.useState(""),[me,m]=r.exports.useState(""),[Ge,v]=r.exports.useState(""),[pe,y]=r.exports.useState("");let ge={propertyid:"Property name"};const ue=Ie({propertyid:Oe().required(Q)}).required(),{register:j,formState:{errors:Re}}=Be({resolver:Ve(ue)}),H=()=>{let a=!1,n={propertyid:p};return n&&Object.keys(n).length&&Object.keys(n).map(l=>{n[l](""),e[l]||(n[l](ge[l]+" is required"),a=!0)}),a},he=a=>{const{checked:n}=a.target;s({...e,interm_percent:n})},fe=a=>{const{checked:n}=a.target;s({...e,doc_signed:n,doc_un_signed:!1})},xe=a=>{const{checked:n}=a.target;s({...e,doc_un_signed:n,doc_signed:!1})},[b,A]=r.exports.useState(!1),ve=localStorage.getItem("isAuth"),i=JSON.parse(ve),ye=async()=>{if(!e.propertyid)H();else if(U===!0)p("Property is already Listed"),d("Property is already Listed"),m("Property is already Listed");else if(R===!0)v("Management Fee Should be greater"),y("Minimum Management Fee shuold be smaller"),p("");else{let a="";_!==null&&(a=await ee(_,"management_contact_doc"),a=a.data.files[0]),A(!0),x!==null?(await $({...e,createdBy:i==null?void 0:i._id,managementfee:x,management_contract:a}),v(""),y(""),p(""),w(""),d(""),m(""),P.success("New Management Contract created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{N("/all-managementcontract")},1500)):(await $({...e,createdBy:i==null?void 0:i._id,management_contract:a}),v(""),y(""),p(""),w(""),d(""),m(""),P.success("New Management Contract created successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{N("/all-managementcontract")},1500))}},be=async a=>{if(a.preventDefault(),!e.propertyid)H();else if(U===!0)p("Property is already Listed"),d("Property is already Listed"),m("Property is already Listed");else if(R===!0)v("Management Fee Should be greater"),y("Minimum Management Fee shuold be smaller"),p("");else{let n=e==null?void 0:e.management_contract;_!==null&&(n=await ee(_,"management_contact_doc"),n=n.data.files[0]),x!==null?(A(!0),await V({...e,updatedBy:i==null?void 0:i._id,management_contract:n,managementfee:x}),v(""),y(""),p(""),w(""),d(""),m(""),P.success("Management Contract updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{N("/all-managementcontract")},1500)):(A(!0),await V({...e,updatedBy:i==null?void 0:i._id,management_contract:n,managementfee:""}),v(""),y(""),p(""),w(""),d(""),m(""),P.success("Management Contract updated successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{N("/all-managementcontract")},1500))}};return c(T,{children:[t(Le,{}),t(Ee,{title:"management contract Form",children:t("div",{children:c("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),c("div",{className:"w-[100%] col-span-3",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Enter your Property"}),t(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:G,value:G.filter(function(a){return a.value===(e==null?void 0:e.propertyid)}),onChange:a=>{s({...e,propertyid:a==null?void 0:a.value})},styles:te,id:"hh",placeholder:"Select and Search property"}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:Q})]}),t(T,{children:e!=null&&e.propertyid?t(T,{children:t("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Unit number"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Community Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Project Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Building Name"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]})})}):null}),e!=null&&e.propertyid?t("div",{className:"w-[100%] col-span-3",children:t("div",{className:"borderBottom"})}):null,c("div",{className:"flex items-center gap-x-[10px] w-[100%]",children:[t("input",{type:"checkbox",name:"interm_percent",checked:(e==null?void 0:e.interm_percent)===!0,onChange:he}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:" In-Terms of Percentage"})]}),t("div",{className:"w-[100%] col-span-3",children:c("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[c("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"contract period"}),t(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:L,value:L.filter(function(a){return a.value===(e==null?void 0:e.contractperiod)}),onChange:a=>{g({target:{name:"contractperiod",value:a.value}})},styles:te,id:"hh"}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:se})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"}),t(I,{className:"form-control py-2",name:"contractstartdate",value:e.contractstartdate||"",onChange:a=>{g({target:{name:"contractstartdate",value:a[0]}})},id:"default-picker",options:{maxDate:new Date(e==null?void 0:e.contractenddate)||null},placeholder:"Select contract start Date"}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:de})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"}),t(I,{className:"form-control py-2",name:"contractenddate",value:e.contractenddate||"",onChange:a=>{g({target:{name:"contractenddate",value:a[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.contractstartdate)||null},placeholder:"Select contract end Date"}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:me})]}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"commencement date"}),t(I,{className:"form-control py-2",name:"commencement_date",value:e.commencement_date||"",onChange:a=>{g({target:{name:"commencement_date",value:a[0]}})},id:"default-picker",options:{minDate:new Date(e==null?void 0:e.contractstartdate)||null},placeholder:"Select Commencement Date"})]}),c("div",{className:"fromGroup       ",children:[t("label",{className:"block capitalize form-label  ",children:"Management fee in terms of %"}),c("div",{className:"relative ",children:[t("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:x?x+" AED":"Not Available"}),t("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),c("div",{children:[t(O,{label:"minimum management fee",type:"number",placeholder:"Type your minimum management fee",name:"minimum_managementfee",value:e.minimum_managementfee||"",register:j,onChange:g}),t("div",{className:" mt-2 text-danger-500 block text-sm capitalize",children:pe})]}),t("div",{children:(e==null?void 0:e.interm_percent)===!0?t(O,{label:"In-Terms of Percentage amount",type:"number",placeholder:"Type your In-Terms of Percentage amount",name:"intermpercentage_amount",value:e.intermpercentage_amount||"",register:j,onChange:g}):t(O,{label:"fixed amount",type:"number",placeholder:"Type your fixed amount",name:"fixed_amount",value:e.fixed_amount||"",register:j,onChange:g})}),c("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"management contract doc"}),ne!==""?c("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:[t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${e==null?void 0:e.management_contract}`,children:decodeURIComponent(e==null?void 0:e.management_contract).split("/").pop()}),t("img",{src:Ue,className:"w-[17px] cursor-pointer",alt:"CancelIcon",onClick:oe})]}):t(ze,{name:"basic",selectedFile:_,onChange:re})]}),c("div",{className:"flex items-end gap-x-[25px]",children:[c("div",{className:"flex items-center gap-x-[5px]",children:[t("input",{type:"checkbox",name:"doc_signed",checked:(e==null?void 0:e.doc_signed)===!0,onChange:fe}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:" Signed"})]}),c("div",{className:"flex items-center gap-x-[5px]",children:[t("input",{type:"checkbox",name:"doc_un_signed",checked:(e==null?void 0:e.doc_un_signed)===!0,onChange:xe}),t("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:" Unsigned"})]})]})]})}),c("div",{className:"lg:col-span-3 col-span-1 flex items-center justify-end gap-x-[25px] relative",children:[t("div",{className:`"ltr:text-right rtl:text-left " ${b===!0?"cursor-not-allowed	":""}`,children:b===!0?t("div",{className:` ${b===!0?"cursor-not-allowed	btn btn-secondary  text-center py-[12px] px-[25px]":"btn btn-secondary  text-center py-[15.5px] px-[25px]"}`,children:"Cancel"}):t($e,{className:"btn btn-secondary  text-center py-[15.5px] px-[25px]",to:"/all-managementcontract",children:"Cancel"})}),ae.pathname===`/update-managementcontract/${u}`?t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${b===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",type:"button",onClick:be,children:"Update"})})}):t("div",{className:"ltr:text-right rtl:text-left",children:t("div",{className:`${b===!0?"opacity-[0.7]":""}`,children:t("button",{className:"btn btn-dark  text-center",onClick:ye,type:"button",children:"Submit"})})}),b===!0?t("div",{className:" absolute top-[0] right-[0] w-[95px] black-bg flex justify-center h-[47px] button-style items-center",children:t("div",{className:"loader-spiner"})}):null]})]})})})]})};export{He as default};