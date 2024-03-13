import{bt as z,bL as H,r as d,bZ as J,c3 as K,j as l,F as u,bN as Q,bM as W,e as Z,L as T}from"./index.750e0c44.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\avaiblity-sheet\\ViewAvailabilitySheet.jsx";const ee=()=>{var S;const{id:N}=z(),j=localStorage.getItem("isAuth"),t=JSON.parse(j),{data:p}=H(t==null?void 0:t.roleid),[e,A]=d.exports.useState(""),[a,L]=d.exports.useState(""),[c,_]=d.exports.useState(""),[h,F]=d.exports.useState(!1),f=new URLSearchParams(window.location.search),y=f.get("delete"),[M,g]=d.exports.useState(!1),[q,P]=d.exports.useState(""),[E,G]=d.exports.useState(""),[$,R]=d.exports.useState(!1),[k,w]=d.exports.useState(!1),[U,v]=d.exports.useState(!1),[s,V]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(N){const m=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${N}`)).json();m&&A(m)}})()},[N]),d.exports.useEffect(()=>{y==="true"&&f&&(e==null?void 0:e.softdelete)===!1?F(!0):y==="true"&&f&&(e==null?void 0:e.softdelete)===!0&&(w(!0),F(!1))},[y,f,e==null?void 0:e.softdelete]),d.exports.useEffect(()=>{(async()=>{if(e!=null&&e.porpertyid){const m=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.porpertyid}`)).json();m&&L(m)}})()},[e==null?void 0:e.porpertyid]),d.exports.useEffect(()=>{(e==null?void 0:e.multivaluation)&&(e==null?void 0:e.propertystatus)==="Multiple"&&(v(!0),(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/employees")).json();m&&V(m)})(),v(!1))},[e==null?void 0:e.multivaluation,e==null?void 0:e.propertystatus]),d.exports.useEffect(()=>{(async()=>{if(e!=null&&e.employeeid){const m=await(await fetch(`http://dev-rare.srp.ai/employees/${e==null?void 0:e.employeeid}`)).json();m&&_(m)}})()},[e==null?void 0:e.employeeid]);const[o,C]=d.exports.useState({});d.exports.useEffect(()=>{e!=null&&e.porpertyid&&(async()=>{const m=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${e==null?void 0:e.porpertyid}`)).json();let b=m==null?void 0:m.filter(x=>(x==null?void 0:x.contractupdation)!=="terminated");C(b[0])})()},[e==null?void 0:e.porpertyid]);const[I]=J(),[B]=K(),O=async r=>{g(!0),P(r)};return l(u,{children:U===!0?l(Q,{},void 0,!1,{fileName:i,lineNumber:165,columnNumber:37},void 0):l("div",{className:" space-y-5",children:[l(W,{showModal:M,handleClose:()=>{g(!1)},loaderModal:$,linkedData:E,handleDeleteData:async()=>{v(!0);try{if((e==null?void 0:e.unlisted)===!1){const n=new FormData;n.append("_id",e==null?void 0:e.porpertyid),n.append("unlisted",!1),n.append("is_available",!1),n.append("available_for",""),n.append("available_id","000000000000000000000000"),await I(n)}await B({_id:N,softdelete:!0}),(async()=>{if(N){const m=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${N}`)).json();m&&A(m)}})(),w(!0),g(!1),R(!1),v(!1)}catch(r){console.log(r,"error")}},dataId:q,moduleName:"Availability Sheet"},void 0,!1,{fileName:i,lineNumber:167,columnNumber:25},void 0),l("div",{children:l("div",{children:l(Z,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("div",{className:"flex items-center gap-x-[15px]",children:[l("h4",{className:"card-title",children:"View Availability Sheet"},void 0,!1,{fileName:i,lineNumber:173,columnNumber:45},void 0),(e==null?void 0:e.propertystatus)!=="Multiple"?l(u,{children:(e==null?void 0:e.unlisted)===!1||(e==null?void 0:e.unlisted)===!0?l("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(e==null?void 0:e.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(e==null?void 0:e.unlisted)===!1?"Listed":"Unlisted"},void 0,!1,{fileName:i,lineNumber:178,columnNumber:61},void 0):null},void 0,!1):null]},void 0,!0,{fileName:i,lineNumber:172,columnNumber:41},void 0),h===!0&&k===!1?l("button",{onClick:()=>O(N),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Availability Sheet"},void 0,!1,{fileName:i,lineNumber:188,columnNumber:49},void 0):null,k===!0&&h===!1?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Availability Sheet is deleted"},void 0,!1,{fileName:i,lineNumber:194,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:171,columnNumber:37},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:[l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Property Name"},void 0,!1,{fileName:i,lineNumber:203,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.porpertyid?a.unitnumber+" | "+(a==null?void 0:a.communityname)+" | "+(a==null?void 0:a.projectname)+" | "+(a==null?void 0:a.buildingname):"Not Available"},void 0,!1,{fileName:i,lineNumber:206,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:202,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"},void 0,!1,{fileName:i,lineNumber:209,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertystatus?e==null?void 0:e.propertystatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:212,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:208,columnNumber:57},void 0),(e==null?void 0:e.propertystatus)==="Multiple"?l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total No. Of Property Valuation"},void 0,!1,{fileName:i,lineNumber:217,columnNumber:69},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.multi_propertyvaluation?e==null?void 0:e.multi_propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:220,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:216,columnNumber:65},void 0):null,(e==null?void 0:e.propertystatus)!=="Multiple"?l(u,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"},void 0,!1,{fileName:i,lineNumber:227,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertyvaluation?e==null?void 0:e.propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:230,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:226,columnNumber:69},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"},void 0,!1,{fileName:i,lineNumber:233,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.employeeid?(c==null?void 0:c.email)+" | "+(c==null?void 0:c.designation):"Not Available"},void 0,!1,{fileName:i,lineNumber:236,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:232,columnNumber:69},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"},void 0,!1,{fileName:i,lineNumber:239,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.listingsource?e==null?void 0:e.listingsource:"Not Available"},void 0,!1,{fileName:i,lineNumber:242,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:238,columnNumber:69},void 0),(e==null?void 0:e.propertystatus)==="Rent"?l(u,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:i,lineNumber:248,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:251,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:247,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:254,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:257,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:253,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"},void 0,!1,{fileName:i,lineNumber:260,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:263,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:259,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"},void 0,!1,{fileName:i,lineNumber:266,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:269,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:265,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"},void 0,!1,{fileName:i,lineNumber:272,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:275,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:271,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"},void 0,!1,{fileName:i,lineNumber:278,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:281,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:277,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"},void 0,!1,{fileName:i,lineNumber:284,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:287,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:283,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"},void 0,!1,{fileName:i,lineNumber:290,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:293,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:289,columnNumber:81},void 0)]},void 0,!0):null]},void 0,!0):null]},void 0,!0,{fileName:i,lineNumber:201,columnNumber:53},void 0),(e==null?void 0:e.propertystatus)==="Multiple"?l(u,{children:(S=e==null?void 0:e.multivaluation)==null?void 0:S.map((r,n)=>{var m;return l("div",{children:[n===0&&l("div",{className:"w-[100%] col-span-3 mt-[20px]",children:l("div",{className:"bordertop"},void 0,!1,{fileName:i,lineNumber:308,columnNumber:85},void 0)},void 0,!1,{fileName:i,lineNumber:307,columnNumber:81},void 0),(r==null?void 0:r.unlisted)===!1||(r==null?void 0:r.unlisted)===!0?l("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(r==null?void 0:r.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(r==null?void 0:r.unlisted)===!1?"Listed":"Unlisted"},void 0,!1,{fileName:i,lineNumber:313,columnNumber:85},void 0):null,l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"},void 0,!1,{fileName:i,lineNumber:320,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:r!=null&&r.propertystatus?r==null?void 0:r.propertystatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:323,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:319,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"},void 0,!1,{fileName:i,lineNumber:326,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:r!=null&&r.propertyvaluation?r==null?void 0:r.propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:329,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:325,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"},void 0,!1,{fileName:i,lineNumber:332,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:(r==null?void 0:r.employeeid)&&(s==null?void 0:s.length)&&((m=s==null?void 0:s.find(b=>(b==null?void 0:b.employeeid)===(r==null?void 0:r.employeeid)))==null?void 0:m.email)||"Not Available"},void 0,!1,{fileName:i,lineNumber:336,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:331,columnNumber:81},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"},void 0,!1,{fileName:i,lineNumber:341,columnNumber:85},void 0),l("p",{className:"  form-control py-2   ",children:r!=null&&r.listingsource?r==null?void 0:r.listingsource:"Not Available"},void 0,!1,{fileName:i,lineNumber:344,columnNumber:85},void 0)]},void 0,!0,{fileName:i,lineNumber:340,columnNumber:81},void 0),(r==null?void 0:r.propertystatus)==="Rent"?l(u,{children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"},void 0,!1,{fileName:i,lineNumber:350,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:353,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:349,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"},void 0,!1,{fileName:i,lineNumber:356,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:359,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:355,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"},void 0,!1,{fileName:i,lineNumber:362,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:365,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:361,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"},void 0,!1,{fileName:i,lineNumber:368,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:371,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:367,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"},void 0,!1,{fileName:i,lineNumber:374,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:377,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:373,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"},void 0,!1,{fileName:i,lineNumber:380,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"},void 0,!1,{fileName:i,lineNumber:383,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:379,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"},void 0,!1,{fileName:i,lineNumber:386,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:389,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:385,columnNumber:93},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"},void 0,!1,{fileName:i,lineNumber:392,columnNumber:97},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:395,columnNumber:97},void 0)]},void 0,!0,{fileName:i,lineNumber:391,columnNumber:93},void 0)]},void 0,!0):null]},void 0,!0,{fileName:i,lineNumber:318,columnNumber:77},void 0),parseInt(e==null?void 0:e.multi_propertyvaluation)>1&&l("div",{className:"w-[100%] col-span-3 mt-[20px] mb-[20px]",children:l("div",{className:"borderBottom"},void 0,!1,{fileName:i,lineNumber:402,columnNumber:85},void 0)},void 0,!1,{fileName:i,lineNumber:401,columnNumber:81},void 0)]},void 0,!0,{fileName:i,lineNumber:305,columnNumber:73},void 0)})},void 0,!1):l(u,{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"},void 0,!1,{fileName:i,lineNumber:412,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertyvaluation?e==null?void 0:e.propertyvaluation:"Not Available"},void 0,!1,{fileName:i,lineNumber:415,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:411,columnNumber:69},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"},void 0,!1,{fileName:i,lineNumber:418,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.employeeid?(c==null?void 0:c.email)+" | "+(c==null?void 0:c.designation):"Not Available"},void 0,!1,{fileName:i,lineNumber:421,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:417,columnNumber:69},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"},void 0,!1,{fileName:i,lineNumber:424,columnNumber:73},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.listingsource?e==null?void 0:e.listingsource:"Not Available"},void 0,!1,{fileName:i,lineNumber:427,columnNumber:73},void 0)]},void 0,!0,{fileName:i,lineNumber:423,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:410,columnNumber:65},void 0)},void 0,!1),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"listing type"},void 0,!1,{fileName:i,lineNumber:459,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.listingtype?e==null?void 0:e.listingtype:"Not Available"},void 0,!1,{fileName:i,lineNumber:462,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:458,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"keys location"},void 0,!1,{fileName:i,lineNumber:465,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.keylocation?e==null?void 0:e.keylocation:"Not Available"},void 0,!1,{fileName:i,lineNumber:468,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:464,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Number of keys"},void 0,!1,{fileName:i,lineNumber:471,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.numberkeys?e==null?void 0:e.numberkeys:"Not Available"},void 0,!1,{fileName:i,lineNumber:474,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:470,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Number of access cards"},void 0,!1,{fileName:i,lineNumber:477,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.numberaccesscard?e==null?void 0:e.numberaccesscard:"Not Available"},void 0,!1,{fileName:i,lineNumber:480,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:476,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"maintenance done"},void 0,!1,{fileName:i,lineNumber:483,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.maintenance?e==null?void 0:e.maintenance:"Not Available"},void 0,!1,{fileName:i,lineNumber:486,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:482,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Wardrobe"},void 0,!1,{fileName:i,lineNumber:489,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.wardrobe?e==null?void 0:e.wardrobe:"Not Available"},void 0,!1,{fileName:i,lineNumber:492,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:488,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Remarks"},void 0,!1,{fileName:i,lineNumber:495,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.remarks?e==null?void 0:e.remarks:"Not Available"},void 0,!1,{fileName:i,lineNumber:498,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:494,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"trakheesi permit"},void 0,!1,{fileName:i,lineNumber:501,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.trakheesipermit?e==null?void 0:e.trakheesipermit:"Not Available"},void 0,!1,{fileName:i,lineNumber:504,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:500,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"contract A"},void 0,!1,{fileName:i,lineNumber:507,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.contractA?e==null?void 0:e.contractA:"Not Available"},void 0,!1,{fileName:i,lineNumber:510,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:506,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Key Location"},void 0,!1,{fileName:i,lineNumber:513,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.key_location?e==null?void 0:e.key_location:"Not Available"},void 0,!1,{fileName:i,lineNumber:516,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:512,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"no. of keys"},void 0,!1,{fileName:i,lineNumber:519,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.noof_key?e==null?void 0:e.noof_key:"Not Available"},void 0,!1,{fileName:i,lineNumber:522,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:518,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"parking"},void 0,!1,{fileName:i,lineNumber:525,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.parking?e==null?void 0:e.parking:"Not Available"},void 0,!1,{fileName:i,lineNumber:528,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:524,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:457,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:200,columnNumber:49},void 0),h===!1&&k===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(T,{to:"/all-availability-sheet",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:535,columnNumber:61},void 0),(p==null?void 0:p.updateavailability)&&(e==null?void 0:e.unlisted)===!1&&l(T,{to:`/update-availability-sheet/${N}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:538,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:534,columnNumber:57},void 0):null]},void 0,!0,{fileName:i,lineNumber:199,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:198,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:197,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:170,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:169,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:168,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:166,columnNumber:21},void 0)},void 0,!1)};export{ee as default};
