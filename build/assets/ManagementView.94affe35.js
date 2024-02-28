import{bu as me,cb as ie,bL as de,r as a,cc as pe,c as n,F as fe,j as t,bN as he,bM as ue,f as ge,L as h}from"./index.89e71075.js";const xe=()=>{var b,N,y,x,v,C,k,w,D,S,_,F,M,j,A,I,L,B,E,U,P,V,$,z,H,Q;const{id:c}=me(),{data:e,error:O,isLoading:T,isFetching:q,isSuccess:G,refetch:K}=ie(c),W=localStorage.getItem("isAuth"),l=JSON.parse(W),{data:m}=de(l==null?void 0:l.roleid),[i,o]=a.exports.useState(!1),s=new URLSearchParams(window.location.search),d=s.get("delete"),[X,p]=a.exports.useState(!1),[Y,Z]=a.exports.useState(""),[R,be]=a.exports.useState(""),[ee,Ne]=a.exports.useState(!1),[f,u]=a.exports.useState(!1);a.exports.useState(!1);const[te,g]=a.exports.useState(!1),[ne,ae]=a.exports.useState(!1),[re]=pe();a.exports.useEffect(()=>{var r,J;d==="true"&&s&&((r=e==null?void 0:e.managementContract)==null?void 0:r.softdelete)===!1?o(!0):d==="true"&&s&&((J=e==null?void 0:e.managementContract)==null?void 0:J.softdelete)===!0&&(u(!0),o(!1))},[d,s,(b=e==null?void 0:e.managementContract)==null?void 0:b.softdelete]);const le=async r=>{p(!0),Z(r)},ce=()=>{p(!1)},oe=async()=>{try{await re({_id:c,softdelete:!0}),o(!1),se()}catch(r){console.log(r,"error")}},se=async()=>{try{await K(),g(!0),u(!0),o(!1),p(!1)}catch{ae(!0)}g(!1)};return n(fe,{children:[(T||q&&te)&&t(he,{}),O||ne&&t("p",{children:"Something went wrong"}),G&&e&&n("div",{className:" space-y-5",children:[t(ue,{showModal:X,handleClose:ce,loaderModal:ee,linkedData:R,handleDeleteData:oe,dataId:Y,moduleName:"Management Contract"}),t("div",{children:t("div",{children:n(ge,{children:[n("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"View Management Contract"}),i===!0&&f===!1?t("button",{onClick:()=>le(c),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Management Contract"}):null,f===!0&&i===!1?t("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Management Contract is deleted"}):null]}),t("div",{children:t("div",{className:"flex z-[5] items-start relative justify-center",children:n("div",{className:"conten-box w-[100%]",children:[t("div",{children:n("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Number"}),t("p",{className:"  form-control py-2   ",children:(N=e==null?void 0:e.property)!=null&&N.unitnumber?(y=e==null?void 0:e.property)==null?void 0:y.unitnumber:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),t("p",{className:"  form-control py-2   ",children:(x=e==null?void 0:e.property)!=null&&x.community_name?(v=e==null?void 0:e.property)==null?void 0:v.community_name:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),t("p",{className:"  form-control py-2   ",children:(C=e==null?void 0:e.property)!=null&&C.project_name?(k=e==null?void 0:e.property)==null?void 0:k.project_name:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),t("p",{className:"  form-control py-2   ",children:(w=e==null?void 0:e.property)!=null&&w.building_name?(D=e==null?void 0:e.property)==null?void 0:D.building_name:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract period"}),t("p",{className:"  form-control py-2   ",children:(S=e==null?void 0:e.managementContract)!=null&&S.contractperiod?(_=e==null?void 0:e.managementContract)==null?void 0:_.contractperiod:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract start date"}),t("p",{className:"  form-control py-2   ",children:(F=e==null?void 0:e.managementContract)!=null&&F.contractstartdate?new Date((M=e==null?void 0:e.managementContract)==null?void 0:M.contractstartdate).toDateString():"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"contract end date"}),t("p",{className:"  form-control py-2   ",children:(j=e==null?void 0:e.managementContract)!=null&&j.contractenddate?new Date((A=e==null?void 0:e.managementContract)==null?void 0:A.contractenddate).toDateString():"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"management fee"}),t("p",{className:"  form-control py-2   ",children:(I=e==null?void 0:e.managementContract)!=null&&I.managementfee?((L=e==null?void 0:e.managementContract)==null?void 0:L.managementfee)+" AED":"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"minimum management fee"}),t("p",{className:"  form-control py-2   ",children:(B=e==null?void 0:e.managementContract)!=null&&B.minimum_managementfee?(E=e==null?void 0:e.managementContract)==null?void 0:E.minimum_managementfee:"Not Available"})]}),n("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"management contract doc"}),((U=e==null?void 0:e.managementContract)==null?void 0:U.management_contract)!==""&&((P=e==null?void 0:e.managementContract)==null?void 0:P.management_contract)!==void 0&&((V=e==null?void 0:e.managementContract)==null?void 0:V.management_contract)!==null&&(($=e==null?void 0:e.managementContract)==null?void 0:$.management_contract)!=="undefined"&&((z=e==null?void 0:e.managementContract)==null?void 0:z.management_contract)!=="null"?t("div",{className:"form-control py-2 mt-[10px] flatpickr-input flex items-center justify-between",children:t("a",{target:"_blank",href:`http://portals.rarehomesgroup.com${(H=e==null?void 0:e.managementContract)==null?void 0:H.management_contract}`,children:decodeURIComponent((Q=e==null?void 0:e.managementContract)==null?void 0:Q.management_contract).split("/").pop()})}):t("p",{className:"  form-control py-2   ",children:"Not Available"})]})]})}),i===!1&&f===!1?n("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l!=null&&l.type?t(h,{to:"/owner-managemnt-terms",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}):t(h,{to:"/all-managementcontract",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(m==null?void 0:m.updatemanagement)===!0&&t(h,{to:`/update-managementcontract/${c}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})]})};export{xe as default};
