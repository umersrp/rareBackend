import{bu as T,bM as J,r,j as t,F as $,bO as E,c as s,f as W,L as v,bQ as Y,N as G}from"./index.97b86580.js";const K=({showModal:i,handleClose:b,loaderModal:p,linkedData:n,handleDeleteData:e,dataId:N,moduleName:f,PropertyData:o,buildingData:c,projectName:j})=>t("div",{className:"thumbnail-container",children:i&&t("div",{className:"modal-overlay-property",children:s("div",{className:"modal-new w-[850px]",children:[s("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[t("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${f}?`}),t("img",{src:Y,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:b})]}),p===!0?t(E,{}):s($,{children:[n!=null&&n.length?t("div",{className:"data-list-modal",children:s($,{children:[s("h4",{className:"text-[16px] mb-[10px]",children:[t("span",{className:"font-bold",children:f})," ",j," is linked with the following modules:"]}),o!=null&&o.length?t("ul",{className:" mb-[10px] text-start",children:s("li",{className:"list-disc ml-[30px]",children:[t("span",{className:"font-semibold mr-[5px]",children:"Property: "}),o==null?void 0:o.map((l,d)=>s(v,{className:" mr-[5px] hover:underline",to:`/view-property/${l==null?void 0:l._id}?delete=true`,children:[l==null?void 0:l.unitnumber,d!==o.length-1?",":null]},d+1))]})}):null,c!=null&&c.length?t("ul",{className:" mb-[10px] text-start",children:s("li",{className:"list-disc ml-[30px]",children:[t("span",{className:"font-semibold mr-[5px]",children:"Building Name: "}),c==null?void 0:c.map((l,d)=>s(v,{className:" mr-[5px] hover:underline",to:`/view-building/${l==null?void 0:l._id}?delete=true`,children:[l==null?void 0:l.buildingname,d!==c.length-1?",":null]},d+1))]})}):null]})}):null,s("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(o==null?void 0:o.length)||(c==null?void 0:c.length)?t("p",{className:" mt-[10px]",children:`This ${f} is already linked. Please first delete these entries which are linked it with`}):null,!(n!=null&&n.length)&&!(o!=null&&o.length)&&!(c!=null&&c.length)?t("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>e(N),children:"Delete"}):null]})]})]})})}),P=()=>{const{id:i}=T(),b=localStorage.getItem("isAuth"),p=JSON.parse(b),{data:n}=J(p==null?void 0:p.roleid),[e,N]=r.exports.useState(""),[f,o]=r.exports.useState(""),[c,j]=r.exports.useState(!1),l=new URLSearchParams(window.location.search),d=l.get("delete"),[q,g]=r.exports.useState(!1),[M,B]=r.exports.useState(""),[F,U]=r.exports.useState(""),[z,w]=r.exports.useState(!1),[y,I]=r.exports.useState(!1),[V,L]=r.exports.useState(!1),[_,S]=r.exports.useState(""),[H,C]=r.exports.useState("");r.exports.useEffect(()=>{(async()=>{if(i){const a=await(await fetch(`http://portals.rarehomesgroup.com/projectname/${i}`)).json();a&&N(a)}})()},[i]),r.exports.useEffect(()=>{(async()=>{if(e!=null&&e.communityid){const a=await(await fetch(`http://portals.rarehomesgroup.com/community/${e==null?void 0:e.communityid}`)).json();a&&o(a==null?void 0:a.communityname)}})()},[e==null?void 0:e.communityid]),r.exports.useEffect(()=>{d==="true"&&l&&(e==null?void 0:e.softdelete)===!1?j(!0):d==="true"&&l&&(e==null?void 0:e.softdelete)===!0&&(I(!0),j(!1))},[d,l,e==null?void 0:e.softdelete]);const O=async m=>{if(g(!0),w(!0),m)try{const h=`http://portals.rarehomesgroup.com/buildingname/api/projectnamedelete?projectnameid=${m}`,a=`http://portals.rarehomesgroup.com/property/api/advancesearch?projectnameid=${m}&softdelete=false`,u=await fetch(h);if(!u.ok&&u.status!==400)throw new Error(`API 1 failed with status: ${u.status}`);const k=u.status===400?[]:await u.json(),x=await fetch(a);if(!x.ok&&x.status!==400)throw new Error(`API 2 failed with status: ${x.status}`);const A=x.status===400?[]:await x.json(),Q=[...k,...A];C(k),S(A),U(Q),B(m),w(!1)}catch(h){console.error("Error fetching data:",h),w(!1)}};return t($,{children:V===!0?t(E,{}):s("div",{className:" space-y-5",children:[t(K,{showModal:q,handleClose:()=>{g(!1),S(""),C("")},loaderModal:z,linkedData:F,handleDeleteData:async()=>{try{await G.patch("http://portals.rarehomesgroup.com/projectname/api/projectdelete",{_id:i,softdelete:!0}),L(!0),(async()=>{if(i){const a=await(await fetch(`http://portals.rarehomesgroup.com/projectname/${i}`)).json();a&&N(a)}})(),S(""),C(""),I(!0),g(!1),w(!1),L(!1)}catch(m){console.log(m,"error")}},dataId:M,moduleName:"Project Name",PropertyData:_,buildingData:H,projectName:e==null?void 0:e.projectName}),t("div",{children:t("div",{children:s(W,{children:[s("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"View Project"}),c===!0&&y===!1?t("button",{onClick:()=>O(i),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Project"}):null,y===!0&&c===!1?t("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Project is deleted"}):null]}),t("div",{children:t("div",{className:"flex z-[5] items-start relative justify-center",children:s("div",{className:"conten-box w-[100%]",children:[t("div",{children:s("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[s("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),t("p",{className:"  form-control py-2   ",children:e!=null&&e.projectName?e==null?void 0:e.projectName:"Not Available"})]}),s("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Project Code"}),t("p",{className:"  form-control py-2   ",children:e!=null&&e.projectCode?e==null?void 0:e.projectCode:"Not Available"})]}),s("div",{children:[t("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),t("p",{className:"  form-control py-2   ",children:e!=null&&e.communityid?f:"Not Available"})]})]})}),c===!1&&y===!1?s("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[t(v,{to:"/all-project",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(n==null?void 0:n.updateproject)&&t(v,{to:`/update-project/${i}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})})};export{P as default};
