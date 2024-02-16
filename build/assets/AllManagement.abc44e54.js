import{R as Se,j as t,F as Ae,r as u,cc as Nl,b as pe,c as d,C as qe,G as yl,L as he,I as P,aq as O,bM as Cl,bP as kl,bL as Ge,T as _e,K as Sl,bX as _l,cb as Xe,bN as Al}from"./index.17c13ab6.js";import{G as jl}from"./GlobalFilter.22b7ff8a.js";const Ml=Se.forwardRef(({indeterminate:b,...N},g)=>{const i=Se.useRef(),A=g||i;return Se.useEffect(()=>{A.current.indeterminate=b},[A,b]),t(Ae,{children:t("input",{type:"checkbox",ref:A,...N,className:"table-checkbox"})})}),I={option:(b,N)=>({...b,fontSize:"14px"})},Pl=({showModal:b,handleClose:N,handleTerminateData:g,dataId:i})=>t("div",{className:"thumbnail-container",children:b&&t("div",{className:"modal-overlay-property",children:d("div",{className:"modal-new w-[850px]",children:[d("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[t("h5",{className:" text-[18px] capitalize",children:"Are You Sure you Want to Terminate this Property?"}),t("img",{src:kl,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:N})]}),t("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>g(i),children:"Terminate"})]})})}),Tl=({allData:b,handleDataUpdate:N,dataRole:g,forFilterData:i,handleClearFilter:A,handleFilterSearch:E,ForLong:f,ForShort:k})=>{const[be,T]=u.exports.useState(!1),[H,B]=u.exports.useState(!1),[ge,ve]=u.exports.useState(""),[s,y]=u.exports.useState(""),[je,fe]=u.exports.useState(!1),[Me,$]=u.exports.useState(!1),[xe,L]=u.exports.useState(!1),[Ne]=Nl(),[n,C]=u.exports.useState(""),j=e=>{const{name:l,value:a}=e.target;C({...n,[l]:a})},[m,ye]=u.exports.useState(!1),M=async e=>{T(!0),y(e)},S=()=>{T(!1)},Ue=async e=>{try{await Ne({_id:e,softdelete:!0}),N(),T(!1)}catch(l){console.log(l,"error")}},[X,Ye]=u.exports.useState("All Contracts"),[ze,Ce]=u.exports.useState([]),Pe=[{value:"All Contracts",label:"All Contracts"},{value:"Short Term",label:"Short Term"},{value:"Long Term",label:"Long Term"}];u.exports.useEffect(()=>{X==="All Contracts"?Ce(b):X==="Short Term"?Ce(k):X==="Long Term"&&Ce(f)},[X,b,f,k]);const Ve=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"Contract No.",accessor:e=>`${e._id}`,Cell:e=>{var c;const a=(((c=e==null?void 0:e.cell)==null?void 0:c.value)||"Not Available").match(/\d+/g);if(a){const p=a.join("").substring(0,6);return t("span",{children:"MC-"+p})}else return t("span",{children:"Not Available"})}},{Header:"Status",accessor:"minimum_managementfee",Cell:e=>{var l,a,c,r,p,o,x,h,v,_,q,G,U,Y,z,V,Q,J,K,W,Z,R,D,F,w,ee,le,te,ae,ne,se,ce,ie,de,ue,me;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((c=(a=(l=e==null?void 0:e.cell)==null?void 0:l.row)==null?void 0:a.original)==null?void 0:c.propertyid)&&((o=(p=(r=e==null?void 0:e.cell)==null?void 0:r.row)==null?void 0:p.original)==null?void 0:o.contractperiod)&&((v=(h=(x=e==null?void 0:e.cell)==null?void 0:x.row)==null?void 0:h.original)==null?void 0:v.contractstartdate)&&((G=(q=(_=e==null?void 0:e.cell)==null?void 0:_.row)==null?void 0:q.original)==null?void 0:G.contractenddate)&&((z=(Y=(U=e==null?void 0:e.cell)==null?void 0:U.row)==null?void 0:Y.original)==null?void 0:z.managementfee)&&((J=(Q=(V=e==null?void 0:e.cell)==null?void 0:V.row)==null?void 0:Q.original)==null?void 0:J.minimum_managementfee)?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((Z=(W=(K=e==null?void 0:e.cell)==null?void 0:K.row)==null?void 0:W.original)==null?void 0:Z.propertyid)&&((F=(D=(R=e==null?void 0:e.cell)==null?void 0:R.row)==null?void 0:D.original)==null?void 0:F.contractperiod)&&((le=(ee=(w=e==null?void 0:e.cell)==null?void 0:w.row)==null?void 0:ee.original)==null?void 0:le.contractstartdate)&&((ne=(ae=(te=e==null?void 0:e.cell)==null?void 0:te.row)==null?void 0:ae.original)==null?void 0:ne.contractenddate)&&((ie=(ce=(se=e==null?void 0:e.cell)==null?void 0:se.row)==null?void 0:ce.original)==null?void 0:ie.managementfee)&&((me=(ue=(de=e==null?void 0:e.cell)==null?void 0:de.row)==null?void 0:ue.original)==null?void 0:me.minimum_managementfee)?"Completed":"Not Completed"})})}},{Header:"Activity Status",accessor:e=>`${e.contractenddate}`,Cell:e=>{var l,a;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((l=e==null?void 0:e.cell)==null?void 0:l.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((a=e==null?void 0:e.cell)==null?void 0:a.value)>new Date?"Active":"Expired"})})}},{Header:"contract continuation",accessor:e=>`${e.contractupdation}`,Cell:e=>{var l,a,c,r,p,o,x,h,v,_;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((l=e==null?void 0:e.cell)==null?void 0:l.value)==="renew"||((a=e==null?void 0:e.cell)==null?void 0:a.value)==="renewed"?"text-success-500 bg-success-500":""} 
                                ${((c=e==null?void 0:e.cell)==null?void 0:c.value)===""||((r=e==null?void 0:e.cell)==null?void 0:r.value)==="undefined"||((p=e==null?void 0:e.cell)==null?void 0:p.value)===void 0?"bg-info-500 text-info-500":""}  ${((o=e==null?void 0:e.cell)==null?void 0:o.value)==="terminated"?"text-danger-500 bg-danger-500":""} `,children:((x=e==null?void 0:e.cell)==null?void 0:x.value)===""||((h=e==null?void 0:e.cell)==null?void 0:h.value)==="undefined"||((v=e==null?void 0:e.cell)==null?void 0:v.value)===void 0?"Pending":(_=e==null?void 0:e.cell)==null?void 0:_.value})})}},{Header:"contract period",accessor:"contractperiod",Cell:e=>{var l,a,c,r,p,o;return t("span",{children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!=="null"&&((c=e==null?void 0:e.cell)==null?void 0:c.value)!==null&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!=="undefined"&&((p=e==null?void 0:e.cell)==null?void 0:p.value)!==void 0?(o=e==null?void 0:e.cell)==null?void 0:o.value:"Not Available"})}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"project name",accessor:"project_name",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Owner Email",accessor:"owner_email",Cell:e=>{var l,a;return t("span",{className:"normal-case",children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"contract start date",accessor:"contractstartdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"contract end date",accessor:"contractenddate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"commencement date",accessor:"commencement_date",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"management fee",accessor:"managementfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"})}},{Header:"fixed amount",accessor:"fixed_amount",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"In-Terms Of Percentage Amount",accessor:"intermpercentage_amount",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value)+" AED":"Not Available"})}},{Header:"management contract doc",accessor:"management_contract",Cell:e=>{var l,a,c,r,p,o,x,h,v,_,q,G,U,Y,z,V,Q,J,K,W,Z,R,D,F,w,ee,le,te,ae,ne,se,ce,ie,de,ue,me,Le;return t("span",{className:"block w-full",children:((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((a=e==null?void 0:e.cell)==null?void 0:a.value)!==void 0&&((c=e==null?void 0:e.cell)==null?void 0:c.value)!==null&&((r=e==null?void 0:e.cell)==null?void 0:r.value)!=="undefined"&&((p=e==null?void 0:e.cell)==null?void 0:p.value)!=="null"&&((o=e==null?void 0:e.cell)==null?void 0:o.value)!==""?t("a",{href:`${((x=e==null?void 0:e.cell)==null?void 0:x.value)&&((h=e==null?void 0:e.cell)==null?void 0:h.value)!==void 0&&((v=e==null?void 0:e.cell)==null?void 0:v.value)!==null&&((_=e==null?void 0:e.cell)==null?void 0:_.value)!=="undefined"&&((q=e==null?void 0:e.cell)==null?void 0:q.value)!=="null"&&((G=e==null?void 0:e.cell)==null?void 0:G.value)!==""?(U=e==null?void 0:e.cell)==null?void 0:U.value:"#"}`,target:"_blank",className:`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((Y=e==null?void 0:e.cell)==null?void 0:Y.value)&&((z=e==null?void 0:e.cell)==null?void 0:z.value)!==void 0&&((V=e==null?void 0:e.cell)==null?void 0:V.value)!==null&&((Q=e==null?void 0:e.cell)==null?void 0:Q.value)!=="undefined"&&((J=e==null?void 0:e.cell)==null?void 0:J.value)!=="null"&&((K=e==null?void 0:e.cell)==null?void 0:K.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:((W=e==null?void 0:e.cell)==null?void 0:W.value)&&((Z=e==null?void 0:e.cell)==null?void 0:Z.value)!==void 0&&((R=e==null?void 0:e.cell)==null?void 0:R.value)!==null&&((D=e==null?void 0:e.cell)==null?void 0:D.value)!=="undefined"&&((F=e==null?void 0:e.cell)==null?void 0:F.value)!=="null"&&((w=e==null?void 0:e.cell)==null?void 0:w.value)!==""?"View":"Not Available"}):t("p",{className:`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((ee=e==null?void 0:e.cell)==null?void 0:ee.value)&&((le=e==null?void 0:e.cell)==null?void 0:le.value)!==void 0&&((te=e==null?void 0:e.cell)==null?void 0:te.value)!==null&&((ae=e==null?void 0:e.cell)==null?void 0:ae.value)!=="undefined"&&((ne=e==null?void 0:e.cell)==null?void 0:ne.value)!=="null"&&((se=e==null?void 0:e.cell)==null?void 0:se.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:((ce=e==null?void 0:e.cell)==null?void 0:ce.value)&&((ie=e==null?void 0:e.cell)==null?void 0:ie.value)!==void 0&&((de=e==null?void 0:e.cell)==null?void 0:de.value)!==null&&((ue=e==null?void 0:e.cell)==null?void 0:ue.value)!=="undefined"&&((me=e==null?void 0:e.cell)==null?void 0:me.value)!=="null"&&((Le=e==null?void 0:e.cell)==null?void 0:Le.value)!==""?"View":"Not Available"})})}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:e=>{var l,a;return t("span",{className:"normal-case",children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"created-on",accessor:"Created_At",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:e=>{var l,a;return t("span",{className:"normal-case",children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const l=localStorage.getItem("isAuth"),a=JSON.parse(l),{data:c}=Ge(a==null?void 0:a.roleid);if(!c)return null;const r=(c==null?void 0:c.readmanagement)===!0,p=(c==null?void 0:c.updatemanagement)===!0,o=(c==null?void 0:c.deletemanagement)===!0;return d("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[r&&t(_e,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:t(he,{className:"action-btn",to:`/view-managementcontract/${e==null?void 0:e.cell.value}`,type:"button",children:t(P,{icon:"heroicons:eye"})})}),p&&t(_e,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:t(he,{to:`/update-managementcontract/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:t(P,{icon:"heroicons:pencil-square"})})}),o&&t(_e,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("button",{className:"action-btn",type:"button",onClick:()=>M(e==null?void 0:e.cell.value),children:t(P,{icon:"heroicons:trash"})})})]})}}],Qe=u.exports.useMemo(()=>Ve,[]),Je=u.exports.useMemo(()=>ze),Ke=pe.exports.useTable({columns:Qe,data:Je,initialState:{pageIndex:0,pageSize:50}},pe.exports.useGlobalFilter,pe.exports.useSortBy,pe.exports.usePagination,pe.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(Ml,{...a()})}),Cell:({row:a})=>{var x;const[c,r]=u.exports.useState(""),p=h=>{h!=null&&h._id?$(!0):$(!1),r(v=>v===h?"":h),y(v=>v===h?"":h)},o=((x=a==null?void 0:a.original)==null?void 0:x._id)===(c==null?void 0:c._id);return u.exports.useEffect(()=>{fe(o)},[o]),t("div",{children:t("input",{type:"checkbox",...a.getToggleRowSelectedProps(),checked:o,onChange:()=>p(a.original),className:"table-checkbox"})})}},...l])}),{getTableProps:We,getTableBodyProps:Ze,headerGroups:Re,footerGroups:Hl,page:De,nextPage:Fe,previousPage:we,canNextPage:oe,canPreviousPage:re,pageOptions:Te,state:el,gotoPage:ke,pageCount:ll,setPageSize:tl,setGlobalFilter:al,prepareRow:nl}=Ke,{globalFilter:sl,pageIndex:He,pageSize:cl}=el,il=i==null?void 0:i.filter(e=>e.unitnumber!==void 0),Be=[...new Set(il.map(e=>e.unitnumber))].sort((e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),dl=i==null?void 0:i.filter(e=>e.community_name!==void 0),$e=[...[...new Set(dl.map(e=>e.communityid))].map(e=>{const l=i.find(a=>a.communityid===e);return l?{label:l.community_name,value:l.communityid}:null}).filter(Boolean)].sort((e,l)=>e.label.localeCompare(l.label)),ul=i==null?void 0:i.filter(e=>e.project_name!==void 0),Oe=[...[...new Set(ul.map(e=>e.projectnameid))].sort((e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"})).map(e=>{const l=i.find(a=>a.projectnameid===e);return l?{label:l.project_name,value:l.projectnameid}:null}).filter(Boolean)].sort((e,l)=>e.label.localeCompare(l.label)),ml=i==null?void 0:i.filter(e=>e.building_name!==void 0),Ie=[...[...new Set(ml.map(e=>e.buildingid))].sort((e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"})).map(e=>{const l=i.find(a=>a.buildingid===e);return l?{label:l.building_name,value:l.buildingid}:null}).filter(Boolean)].sort((e,l)=>e.label.localeCompare(l.label)),pl=i==null?void 0:i.filter(e=>e.owner_name!==void 0),Ee=[...[...new Set(pl.map(e=>e.owner_id))].sort((e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"})).map(e=>{const l=i.find(a=>a.owner_id===e);return l?{label:l.owner_name,value:l.owner_id}:null}).filter(Boolean)].sort((e,l)=>e.label.localeCompare(l.label)),ol=()=>{A(),C("")},rl=()=>{L(!0)},hl=()=>{L(!1)},bl=async e=>{try{await Sl.patch("http://dev-rare.srp.ai/managementcontract/api/managementcontractdelete",{_id:e,contractupdation:"terminated"}),L(!1),N()}catch(l){console.log(l,"error")}},gl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},vl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},fl={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},xl=[{name:gl,title:"Total Management Contract",count:b?b==null?void 0:b.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:vl,title:"Management Contract for Long Term",count:f?f==null?void 0:f.length:0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:fl,title:"Management Contract for Short Term",count:k?k==null?void 0:k.length:0,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}];return d(Ae,{children:[t("div",{className:"grid grid-cols-12 gap-5 mb-5",children:t("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:t(qe,{bodyClass:"p-4",children:t("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 col-span-1 gap-4",children:t(yl,{statistics:xl})})})})}),d("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:[s&&(s==null?void 0:s._id)&&(s==null?void 0:s.propertyid)&&(s==null?void 0:s.contractupdation)!=="terminated"&&(s==null?void 0:s.contractupdation)!=="renew"?t(he,{to:`/add-managementcontract?propertyid=${s==null?void 0:s.propertyid}&renew=renewed`,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Renew contract"}):null,s&&(s==null?void 0:s._id)&&(s==null?void 0:s.propertyid)&&(s==null?void 0:s.contractupdation)!=="renew"&&(s==null?void 0:s.contractupdation)!=="terminated"?t("button",{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",onClick:rl,children:"Terminate contract"}):null,d("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>ye(!m),children:[m===!0?t(P,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"}):t(P,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"}),t("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"})]}),t("div",{className:"w-[180px]",children:t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Pe,value:Pe.filter(function(e){return e.value===X}),onChange:e=>{Ye(e==null?void 0:e.value)},styles:I,id:"hh"})}),t(jl,{filter:sl,setFilter:al})]}),t(Pl,{showModal:xe,handleClose:hl,handleTerminateData:bl,dataId:s}),d("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${m===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[d("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Unit No."}),t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Be,value:Be.filter(function(e){if((n==null?void 0:n.unitnumber)!=="")return e.value===(n==null?void 0:n.unitnumber)}),onChange:e=>{j({target:{name:"unitnumber",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."}),n!=null&&n.unitnumber?t("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...n,unitnumber:""}),children:"Clear filter"}):null]}),d("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Community Name"}),t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:$e,value:$e.filter(function(e){if((n==null?void 0:n.communityid)!=="")return e.value===(n==null?void 0:n.communityid)}),onChange:e=>{j({target:{name:"communityid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."}),n!=null&&n.communityid?t("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...n,communityid:""}),children:"Clear filter"}):null]}),d("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Project Name"}),t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Oe,value:Oe.filter(function(e){if((n==null?void 0:n.projectnameid)!=="")return e.value===(n==null?void 0:n.projectnameid)}),onChange:e=>{j({target:{name:"projectnameid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."}),n!=null&&n.projectnameid?t("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...n,projectnameid:""}),children:"Clear filter"}):null]}),d("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Building Name"}),t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Ie,value:Ie.filter(function(e){if((n==null?void 0:n.buildingid)!=="")return e.value===(n==null?void 0:n.buildingid)}),onChange:e=>{j({target:{name:"buildingid",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."}),n!=null&&n.buildingid?t("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...n,buildingid:""}),children:"Clear filter"}):null]}),d("div",{children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Owner Name"}),t(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Ee,value:Ee.filter(function(e){if((n==null?void 0:n.owner_id)!=="")return e.value===(n==null?void 0:n.owner_id)}),onChange:e=>{j({target:{name:"owner_id",value:e.value}})},styles:I,id:"hh",placeholder:"Select..."}),n!=null&&n.owner_id?t("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>C({...n,owner_id:""}),children:"Clear filter"}):null]})]}),d("div",{className:`flex ${m===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[t("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>ol(),children:"Clear filter"}),t("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>E(n),children:"Search"})]}),t(Cl,{showModal:be,handleClose:S,loaderModal:H,linkedData:ge,handleDeleteData:Ue,dataId:s,moduleName:"Management Contract"}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:d("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...We,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>l.Header==="action"&&!((g==null?void 0:g.readmanagement)===!0||(g==null?void 0:g.updatemanagement)===!0||(g==null?void 0:g.deletemanagement)===!0)?t("th",{}):d("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:"table-th",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ze,children:De.map(e=>(nl(e),t("tr",{...e.getRowProps(),children:e.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),d("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[d("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:cl,onChange:e=>tl(Number(e.target.value)),children:[10,25,50].map(e=>d("option",{value:e,children:["Show ",e]},e))}),d("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",d("span",{children:[He+1," of ",Te.length]})]})]}),d("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${re?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ke(0),disabled:!re,children:t(P,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${re?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>we(),disabled:!re,children:"Prev"})}),Te.map((e,l)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${l===He?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>ke(l),children:e+1})},l)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${oe?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Fe(),disabled:!oe,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>ke(ll-1),disabled:!oe,className:` ${oe?"":"opacity-50 cursor-not-allowed"}`,children:t(P,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})},zl=()=>{const[b,N]=u.exports.useState(!1),[g,i]=u.exports.useState(!1),A=localStorage.getItem("isAuth"),E=JSON.parse(A),{data:f}=Ge(E==null?void 0:E.roleid),[k,be]=u.exports.useState(""),[T,H]=u.exports.useState(""),[B,ge]=u.exports.useState(""),[ve,s]=u.exports.useState(!1),{data:y,error:je,isLoading:fe,isFetching:Me,isSuccess:$,refetch:xe}=_l(),{data:L}=Xe("api/propertydelete?contractperiod=Short Term"),{data:Ne}=Xe("api/propertydelete?contractperiod=Long Term"),n=async()=>{N(!0);try{s(!0),await xe(),s(!1)}catch{i(!0)}N(!1)};u.exports.useEffect(()=>{$&&y&&(H(y),ge(y),be(y))},[y,$]);function C(m){if(m){const ye=T.filter(M=>{s(!0);let S=!0;return m.buildingid&&M.buildingid!==m.buildingid&&(S=!1),m.communityid&&M.communityid!==m.communityid&&(S=!1),m.projectnameid&&M.projectnameid!==m.projectnameid&&(S=!1),m.unitnumber&&M.unitnumber!==m.unitnumber&&(S=!1),m.owner_id&&M.owner_id!==m.owner_id&&(S=!1),S});H(ye),s(!1)}else H(B)}const j=async()=>{s(!0),H(B),s(!1)};return t(Ae,{children:t("div",{className:" space-y-5",children:d(qe,{children:[d("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"All Management Contract"}),(f==null?void 0:f.createmanagement)===!0&&t(he,{to:"/add-managementcontract",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Management Contract"})]}),(fe||Me&&b)&&ve===!0&&t(Al,{}),je||g&&t("p",{children:"No Management Contract found"}),$&&y&&(B==null?void 0:B.length)&&ve===!1&&t(Tl,{allData:T,handleDataUpdate:n,dataRole:f,ForShort:L,ForLong:Ne,handleFilterSearch:C,handleClearFilter:j,forFilterData:k})]})})})};export{zl as default};
