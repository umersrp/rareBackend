import{bt as ce,ca as ue,bK as se,r as m,cb as de,j as l,F as Ne,bM as fe,bL as be,e as ve,L as f}from"./index.e476e824.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\management-contract\\ManagementView.jsx";const ye=()=>{var p,h,g,y,x,C,k,D,w,_,F,S,M,j,A,L,I,E,U,V,B,P,O,$,z,H;const{id:a}=ce(),{data:e,error:J,isLoading:K,isFetching:T,isSuccess:q,refetch:G}=ue(a),R=localStorage.getItem("isAuth"),i=JSON.parse(R),{data:c}=se(i==null?void 0:i.roleid),[u,o]=m.exports.useState(!1),t=new URLSearchParams(window.location.search),s=t.get("delete"),[W,d]=m.exports.useState(!1),[X,Y]=m.exports.useState(""),[Z,pe]=m.exports.useState(""),[ee,he]=m.exports.useState(!1),[N,b]=m.exports.useState(!1);m.exports.useState(!1);const[le,v]=m.exports.useState(!1),[ne,me]=m.exports.useState(!1),[re]=de();m.exports.useEffect(()=>{var r,Q;s==="true"&&t&&((r=e==null?void 0:e.managementContract)==null?void 0:r.softdelete)===!1?o(!0):s==="true"&&t&&((Q=e==null?void 0:e.managementContract)==null?void 0:Q.softdelete)===!0&&(b(!0),o(!1))},[s,t,(p=e==null?void 0:e.managementContract)==null?void 0:p.softdelete]);const ie=async r=>{d(!0),Y(r)},ae=()=>{d(!1)},oe=async()=>{try{await re({_id:a,softdelete:!0}),o(!1),te()}catch(r){console.log(r,"error")}},te=async()=>{try{await G(),v(!0),b(!0),o(!1),d(!1)}catch{me(!0)}v(!1)};return l(Ne,{children:[(K||T&&le)&&l(fe,{},void 0,!1,{fileName:n,lineNumber:80,columnNumber:63},void 0),J||ne&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:n,lineNumber:81,columnNumber:40},void 0),q&&e&&l("div",{className:" space-y-5",children:[l(be,{showModal:W,handleClose:ae,loaderModal:ee,linkedData:Z,handleDeleteData:oe,dataId:X,moduleName:"Management Contract"},void 0,!1,{fileName:n,lineNumber:84,columnNumber:21},void 0),l("div",{children:l("div",{children:l(ve,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Management Contract"},void 0,!1,{fileName:n,lineNumber:89,columnNumber:37},void 0),u===!0&&N===!1?l("button",{onClick:()=>ie(a),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Management Contract"},void 0,!1,{fileName:n,lineNumber:92,columnNumber:45},void 0):null,N===!0&&u===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Management Contract is deleted"},void 0,!1,{fileName:n,lineNumber:98,columnNumber:45},void 0):null]},void 0,!0,{fileName:n,lineNumber:88,columnNumber:33},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"},void 0,!1,{fileName:n,lineNumber:107,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(h=e==null?void 0:e.property)!=null&&h.unitnumber?(g=e==null?void 0:e.property)==null?void 0:g.unitnumber:"Not Available"},void 0,!1,{fileName:n,lineNumber:110,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:106,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:n,lineNumber:113,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(y=e==null?void 0:e.property)!=null&&y.community_name?(x=e==null?void 0:e.property)==null?void 0:x.community_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:116,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:112,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:n,lineNumber:119,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(C=e==null?void 0:e.property)!=null&&C.project_name?(k=e==null?void 0:e.property)==null?void 0:k.project_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:122,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:118,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:n,lineNumber:125,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(D=e==null?void 0:e.property)!=null&&D.building_name?(w=e==null?void 0:e.property)==null?void 0:w.building_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:128,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:124,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract period"},void 0,!1,{fileName:n,lineNumber:131,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(_=e==null?void 0:e.managementContract)!=null&&_.contractperiod?(F=e==null?void 0:e.managementContract)==null?void 0:F.contractperiod:"Not Available"},void 0,!1,{fileName:n,lineNumber:134,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:130,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"},void 0,!1,{fileName:n,lineNumber:137,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(S=e==null?void 0:e.managementContract)!=null&&S.contractstartdate?new Date((M=e==null?void 0:e.managementContract)==null?void 0:M.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:140,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:136,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"},void 0,!1,{fileName:n,lineNumber:143,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(j=e==null?void 0:e.managementContract)!=null&&j.contractenddate?new Date((A=e==null?void 0:e.managementContract)==null?void 0:A.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:146,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:142,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"management fee"},void 0,!1,{fileName:n,lineNumber:149,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(L=e==null?void 0:e.managementContract)!=null&&L.managementfee?((I=e==null?void 0:e.managementContract)==null?void 0:I.managementfee)+" AED":"Not Available"},void 0,!1,{fileName:n,lineNumber:152,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:148,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"minimum management fee"},void 0,!1,{fileName:n,lineNumber:155,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:(E=e==null?void 0:e.managementContract)!=null&&E.minimum_managementfee?(U=e==null?void 0:e.managementContract)==null?void 0:U.minimum_managementfee:"Not Available"},void 0,!1,{fileName:n,lineNumber:158,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:154,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"management contract doc"},void 0,!1,{fileName:n,lineNumber:161,columnNumber:57},void 0),((V=e==null?void 0:e.managementContract)==null?void 0:V.management_contract)!==""&&((B=e==null?void 0:e.managementContract)==null?void 0:B.management_contract)!==void 0&&((P=e==null?void 0:e.managementContract)==null?void 0:P.management_contract)!==null&&((O=e==null?void 0:e.managementContract)==null?void 0:O.management_contract)!=="undefined"&&(($=e==null?void 0:e.managementContract)==null?void 0:$.management_contract)!=="null"?l("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:l("a",{target:"_blank",href:`http://dev-rare.srp.ai${(z=e==null?void 0:e.managementContract)==null?void 0:z.management_contract}`,children:decodeURIComponent((H=e==null?void 0:e.managementContract)==null?void 0:H.management_contract).split("/").pop()},void 0,!1,{fileName:n,lineNumber:167,columnNumber:69},void 0)},void 0,!1,{fileName:n,lineNumber:166,columnNumber:65},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:n,lineNumber:170,columnNumber:65},void 0)]},void 0,!0,{fileName:n,lineNumber:160,columnNumber:53},void 0)]},void 0,!0,{fileName:n,lineNumber:105,columnNumber:49},void 0)},void 0,!1,{fileName:n,lineNumber:104,columnNumber:45},void 0),u===!1&&N===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[i!=null&&i.type?l(f,{to:"/owner-managemnt-terms",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:n,lineNumber:182,columnNumber:65},void 0):l(f,{to:"/all-managementcontract",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:n,lineNumber:181,columnNumber:65},void 0),(c==null?void 0:c.updatemanagement)===!0&&l(f,{to:`/update-managementcontract/${a}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:n,lineNumber:186,columnNumber:65},void 0)]},void 0,!0,{fileName:n,lineNumber:178,columnNumber:53},void 0):null]},void 0,!0,{fileName:n,lineNumber:103,columnNumber:41},void 0)},void 0,!1,{fileName:n,lineNumber:102,columnNumber:37},void 0)},void 0,!1,{fileName:n,lineNumber:101,columnNumber:33},void 0)]},void 0,!0,{fileName:n,lineNumber:87,columnNumber:29},void 0)},void 0,!1,{fileName:n,lineNumber:86,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:85,columnNumber:21},void 0)]},void 0,!0,{fileName:n,lineNumber:83,columnNumber:17},void 0)]},void 0,!0)};export{ye as default};
