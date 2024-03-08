import{bu as m,r as s,bM as p,j as l,F as x,f as h,c as a,L as o}from"./index.da1c4237.js";const N=()=>{const{id:t}=m(),[e,n]=s.exports.useState(""),d=localStorage.getItem("isAuth"),r=JSON.parse(d),{data:c}=p(r==null?void 0:r.roleid);return s.exports.useEffect(()=>{(async()=>{if(t){const i=await(await fetch(`http://portals.rarehomesgroup.com/saleregister/${t}`)).json();i&&n(i)}})()},[t]),l(x,{children:l(h,{title:"Sale Register Form",children:l("div",{children:a("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"})}),l("div",{className:"w-[100%] col-span-3",children:a("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Unit number"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Community Name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Project Name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Building Name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Floor Level"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]})}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CHARGES & PAYMENTS"})}),l("div",{className:"w-[100%] col-span-3",children:a("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Sold For"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"sold_for",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.sold_for?e==null?void 0:e.sold_for:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"NOC Charges"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"noc_charges",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.noc_charges?parseFloat(e==null?void 0:e.noc_charges).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"trustee fee amount"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"trustee_fee_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.trustee_fee_amount?parseFloat(e==null?void 0:e.trustee_fee_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),l("div",{children:a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Trustee fee paid by buyer or seller"}),a("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"trustee_buyer",checked:(e==null?void 0:e.trustee_buyer)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"buyer"})]}),a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"trustee_seller",id:"",checked:(e==null?void 0:e.trustee_seller)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"seller"})]}),a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"trustee_both",id:"",checked:(e==null?void 0:e.trustee_both)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"both"})]})]})]})}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"transfer fee amount"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"transfer_fee_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.transfer_fee_amount?parseFloat(e==null?void 0:e.transfer_fee_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),l("div",{children:a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Transfer fee paid by buyer or seller"}),a("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"transfer_buyer",checked:(e==null?void 0:e.transfer_buyer)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"buyer"})]}),a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"transfer_seller",id:"",checked:(e==null?void 0:e.transfer_seller)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"seller"})]}),a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"transfer_both",id:"",checked:(e==null?void 0:e.transfer_both)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"both"})]})]})]})}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"commission amount"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"commission_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.commission_amount?parseFloat(e==null?void 0:e.commission_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),l("div",{children:a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Vat on commission"}),l("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:a("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[l("input",{type:"checkbox",name:"vat_on_commission",checked:(e==null?void 0:e.vat_on_commission)===!0,readOnly:!0}),l("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"Yes"})]})})]})})]})}),l("div",{className:"w-[100%] col-span-3",children:l("div",{className:"borderBottom"})}),l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"BUYER DETAILS"})}),l("div",{className:"w-[100%] col-span-3",children:a("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"buyer name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"buyer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.buyer_name?e==null?void 0:e.buyer_name:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"buyer inhouse agent name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"buyer_inhouse_agent_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.buyer_inhouse_agent_name?e==null?void 0:e.buyer_inhouse_agent_name:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"buyer outside agent name"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"buyer_outside_agent_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.buyer_outside_agent_name?e==null?void 0:e.buyer_outside_agent_name:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Transaction type"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"transaction_type",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.transaction_type?e==null?void 0:e.transaction_type:"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]}),a("div",{className:"fromGroup       ",children:[l("label",{className:"block capitalize form-label  ",children:"Expected Transfer\xA0Date"}),a("div",{className:"relative ",children:[l("input",{type:"text",name:"exoected_transfer_date",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:e!=null&&e.exoected_transfer_date?new Date(e==null?void 0:e.exoected_transfer_date).toDateString():"Not Available"}),l("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"})]})]})]})}),l("div",{className:"w-[100%] col-span-3",children:a("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(o,{to:"/all-saleregister",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(c==null?void 0:c.updatesaleregister)===!0&&l(o,{to:`/saleregisterform/${t}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})})]})})})})};export{N as default};
