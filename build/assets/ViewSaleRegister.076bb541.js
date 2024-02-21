import{bt as u,r as n,bK as N,j as e,F as s,C as b,L as d}from"./index.1ebaab06.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\Sales-Transaction-Module\\SaleRegister\\ViewSaleRegister.jsx";const x=()=>{const{id:m}=u(),[i,c]=n.exports.useState(""),t=localStorage.getItem("isAuth"),r=JSON.parse(t),{data:a}=N(r==null?void 0:r.roleid);return n.exports.useEffect(()=>{(async()=>{if(m){const o=await(await fetch(`http://dev-rare.srp.ai/saleregister/${m}`)).json();o&&c(o)}})()},[m]),e(s,{children:e(b,{title:"Sale Register Form",children:e("div",{children:e("form",{className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:30,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Unit number"},void 0,!1,{fileName:l,lineNumber:38,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"unitnumer",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:40,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:39,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:37,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Community Name"},void 0,!1,{fileName:l,lineNumber:45,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"communityname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:47,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:44,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Project Name"},void 0,!1,{fileName:l,lineNumber:52,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"projectname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.projectname?i==null?void 0:i.projectname:"Not Available"},void 0,!1,{fileName:l,lineNumber:54,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:55,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:53,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:51,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Building Name"},void 0,!1,{fileName:l,lineNumber:59,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"buildingname",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.buildingname?i==null?void 0:i.buildingname:"Not Available"},void 0,!1,{fileName:l,lineNumber:61,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:62,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:60,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:58,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Floor Level"},void 0,!1,{fileName:l,lineNumber:66,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"floor",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.floor?i==null?void 0:i.floor:"Not Available"},void 0,!1,{fileName:l,lineNumber:68,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:69,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:67,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:65,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:75,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:74,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CHARGES & PAYMENTS"},void 0,!1,{fileName:l,lineNumber:78,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Sold For"},void 0,!1,{fileName:l,lineNumber:85,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"sold_for",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.sold_for?i==null?void 0:i.sold_for:"Not Available"},void 0,!1,{fileName:l,lineNumber:87,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:88,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:86,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:84,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"NOC Charges"},void 0,!1,{fileName:l,lineNumber:92,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"noc_charges",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.noc_charges?parseFloat(i==null?void 0:i.noc_charges).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:94,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:95,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:93,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:91,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"trustee fee amount"},void 0,!1,{fileName:l,lineNumber:99,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"trustee_fee_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.trustee_fee_amount?parseFloat(i==null?void 0:i.trustee_fee_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:101,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:102,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:100,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:98,columnNumber:33},void 0),e("div",{children:e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Trustee fee paid by buyer or seller"},void 0,!1,{fileName:l,lineNumber:107,columnNumber:41},void 0),e("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"trustee_buyer",checked:(i==null?void 0:i.trustee_buyer)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:110,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"buyer"},void 0,!1,{fileName:l,lineNumber:111,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:109,columnNumber:45},void 0),e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"trustee_seller",id:"",checked:(i==null?void 0:i.trustee_seller)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:114,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"seller"},void 0,!1,{fileName:l,lineNumber:115,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:113,columnNumber:45},void 0),e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"trustee_both",id:"",checked:(i==null?void 0:i.trustee_both)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:118,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"both"},void 0,!1,{fileName:l,lineNumber:119,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:117,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:108,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:106,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:105,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"transfer fee amount"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"transfer_fee_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.transfer_fee_amount?parseFloat(i==null?void 0:i.transfer_fee_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:127,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:128,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:126,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:124,columnNumber:33},void 0),e("div",{children:e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Transfer fee paid by buyer or seller"},void 0,!1,{fileName:l,lineNumber:133,columnNumber:41},void 0),e("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:[e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"transfer_buyer",checked:(i==null?void 0:i.transfer_buyer)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:136,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"buyer"},void 0,!1,{fileName:l,lineNumber:137,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:135,columnNumber:45},void 0),e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"transfer_seller",id:"",checked:(i==null?void 0:i.transfer_seller)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:140,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"seller"},void 0,!1,{fileName:l,lineNumber:141,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:139,columnNumber:45},void 0),e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"transfer_both",id:"",checked:(i==null?void 0:i.transfer_both)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:144,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"both"},void 0,!1,{fileName:l,lineNumber:145,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:143,columnNumber:45},void 0)]},void 0,!0,{fileName:l,lineNumber:134,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:132,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:131,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"commission amount"},void 0,!1,{fileName:l,lineNumber:151,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"commission_amount",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.commission_amount?parseFloat(i==null?void 0:i.commission_amount).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:l,lineNumber:153,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:154,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:152,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:150,columnNumber:33},void 0),e("div",{children:e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Vat on commission"},void 0,!1,{fileName:l,lineNumber:159,columnNumber:41},void 0),e("div",{className:"w-[100%] flex items-center gap-x-[45px] gap-y-[5px] justify-start flex-wrap",children:e("div",{className:"flex items-center gap-x-[10px] w-[13%]",children:[e("input",{type:"checkbox",name:"vat_on_commission",checked:(i==null?void 0:i.vat_on_commission)===!0,readOnly:!0},void 0,!1,{fileName:l,lineNumber:162,columnNumber:49},void 0),e("p",{className:"mt-[1px] regular text-[20px] leading-[27px] color-black",children:"Yes"},void 0,!1,{fileName:l,lineNumber:163,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:161,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:160,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:158,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:157,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:83,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:82,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:172,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:171,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"BUYER DETAILS"},void 0,!1,{fileName:l,lineNumber:175,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:174,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"buyer name"},void 0,!1,{fileName:l,lineNumber:182,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"buyer_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.buyer_name?i==null?void 0:i.buyer_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:184,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:185,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:183,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:181,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"buyer inhouse agent name"},void 0,!1,{fileName:l,lineNumber:189,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"buyer_inhouse_agent_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.buyer_inhouse_agent_name?i==null?void 0:i.buyer_inhouse_agent_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:191,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:192,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:190,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:188,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"buyer outside agent name"},void 0,!1,{fileName:l,lineNumber:196,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"buyer_outside_agent_name",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.buyer_outside_agent_name?i==null?void 0:i.buyer_outside_agent_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:198,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:199,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:197,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:195,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Transaction type"},void 0,!1,{fileName:l,lineNumber:203,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"transaction_type",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.transaction_type?i==null?void 0:i.transaction_type:"Not Available"},void 0,!1,{fileName:l,lineNumber:205,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:206,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:204,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:202,columnNumber:33},void 0),e("div",{className:"fromGroup       ",children:[e("label",{className:"block capitalize form-label  ",children:"Expected Transfer\xA0Date"},void 0,!1,{fileName:l,lineNumber:210,columnNumber:37},void 0),e("div",{className:"relative ",children:[e("input",{type:"text",name:"exoected_transfer_date",className:"  form-control py-2   ",placeholder:"Add placeholder",readonly:"",value:i!=null&&i.exoected_transfer_date?new Date(i==null?void 0:i.exoected_transfer_date).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:212,columnNumber:41},void 0),e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"},void 0,!1,{fileName:l,lineNumber:213,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:211,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:209,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:180,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:179,columnNumber:25},void 0),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(d,{to:"/all-saleregister",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:l,lineNumber:222,columnNumber:33},void 0),(a==null?void 0:a.updatesaleregister)===!0&&e(d,{to:`/saleregisterform/${m}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:l,lineNumber:225,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:221,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:220,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:29,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:27,columnNumber:13},void 0)},void 0,!1)};export{x as default};
