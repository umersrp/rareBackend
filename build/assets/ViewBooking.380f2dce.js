import{bt as j,bK as O,r as m,j as l,F as V,bM as B,bL as _,C as U,L as k,J as Y}from"./index.26a0f8e4.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\ViewBooking.jsx";const z=()=>{const{id:n}=j(),y=localStorage.getItem("isAuth"),a=JSON.parse(y),{data:N}=O(a==null?void 0:a.roleid),[e,b]=m.exports.useState(""),[v,t]=m.exports.useState(!1),c=new URLSearchParams(window.location.search),u=c.get("delete"),[x,f]=m.exports.useState(!1),[A,S]=m.exports.useState(""),[L,G]=m.exports.useState(""),[T,P]=m.exports.useState(!1),[s,h]=m.exports.useState(!1),[E,p]=m.exports.useState(!1);m.exports.useEffect(()=>{(async()=>{if(n){const d=await(await fetch(`http://dev-rare.srp.ai/booking/${n}`)).json();d&&b(d)}})()},[n]),m.exports.useEffect(()=>{u==="true"&&c&&(e==null?void 0:e.softdelete)===!1?t(!0):u==="true"&&c&&(e==null?void 0:e.softdelete)===!0&&(h(!0),t(!1))},[u,c,e==null?void 0:e.softdelete]);let w=e==null?void 0:e.passportpdf;const[C,g]=m.exports.useState("");m.exports.useEffect(()=>{if((e==null?void 0:e.passportpdf)!==null||(e==null?void 0:e.passportpdf)!=="null"){let r=e!=null&&e.passportpdf?w.split("-"):"Not Available";g(r)}else g("")},[]);const[o,R]=m.exports.useState("");m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const d=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();d&&R(d)}})()},[e==null?void 0:e.propertyid]);const M=async r=>{f(!0),S(r)};return l(V,{children:E===!0?l(B,{},void 0,!1,{fileName:i,lineNumber:110,columnNumber:37},void 0):l("div",{className:" space-y-5",children:[l(_,{showModal:x,handleClose:()=>{f(!1)},loaderModal:T,linkedData:L,handleDeleteData:async()=>{p(!0);try{await Y.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:n,softdelete:!0}),t(!1),(async()=>{if(n){const d=await(await fetch(`http://dev-rare.srp.ai/booking/${n}`)).json();d&&b(d)}})(),h(!0),f(!1),P(!1),p(!1)}catch(r){console.log(r,"error")}},dataId:A,moduleName:"Booking"},void 0,!1,{fileName:i,lineNumber:112,columnNumber:25},void 0),l("div",{children:l("div",{children:l(U,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"View Booking"},void 0,!1,{fileName:i,lineNumber:118,columnNumber:41},void 0),v===!0?l("button",{onClick:()=>M(n),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Booking"},void 0,!1,{fileName:i,lineNumber:121,columnNumber:49},void 0):null,s===!0?l("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Booking is deleted"},void 0,!1,{fileName:i,lineNumber:127,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:117,columnNumber:37},void 0),l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:[l("h4",{className:"text-[20px]",children:"PROPERTY DETAILS"},void 0,!1,{fileName:i,lineNumber:134,columnNumber:53},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"},void 0,!1,{fileName:i,lineNumber:137,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.unitnumber?o==null?void 0:o.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:140,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:136,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:143,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.buildingname?o==null?void 0:o.buildingname:"Not Available"},void 0,!1,{fileName:i,lineNumber:146,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:142,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Level"},void 0,!1,{fileName:i,lineNumber:149,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.floor?o==null?void 0:o.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:152,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:148,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:155,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.communityname?o==null?void 0:o.communityname:"Not Available"},void 0,!1,{fileName:i,lineNumber:158,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:154,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:161,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:o!=null&&o.projectname?o==null?void 0:o.projectname:"Not Available"},void 0,!1,{fileName:i,lineNumber:164,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:160,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:135,columnNumber:53},void 0),l("div",{className:"borderBottom mt-[25px]"},void 0,!1,{fileName:i,lineNumber:167,columnNumber:53},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"CUSTOMER DETAILS"},void 0,!1,{fileName:i,lineNumber:169,columnNumber:53},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Name"},void 0,!1,{fileName:i,lineNumber:173,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.guestname?e==null?void 0:e.guestname:"Not Available"},void 0,!1,{fileName:i,lineNumber:176,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:172,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check in Type"},void 0,!1,{fileName:i,lineNumber:179,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.checkintype?e==null?void 0:e.checkintype:"Not Available"},void 0,!1,{fileName:i,lineNumber:182,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:178,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Nationality"},void 0,!1,{fileName:i,lineNumber:185,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.nationality?e==null?void 0:e.nationality:"Not Available"},void 0,!1,{fileName:i,lineNumber:188,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:184,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"},void 0,!1,{fileName:i,lineNumber:191,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.passportnumber?e==null?void 0:e.passportnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:194,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:190,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Passport PDF"},void 0,!1,{fileName:i,lineNumber:197,columnNumber:61},void 0),e!=null&&e.passportpdf?l("a",{href:`${e!=null&&e.passportpdf?"http://dev-rare.srp.ai"+(e==null?void 0:e.passportpdf):"#"}`,target:"_blank",className:"form-control py-2 ",children:e!=null&&e.passportpdf?C[1]:"Not Available"},void 0,!1,{fileName:i,lineNumber:202,columnNumber:69},void 0):l("p",{className:"  form-control py-2   ",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:209,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:196,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Mobile Number"},void 0,!1,{fileName:i,lineNumber:213,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.mobilenumber?e==null?void 0:e.mobilenumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:216,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:212,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Email"},void 0,!1,{fileName:i,lineNumber:219,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.email?e==null?void 0:e.email:"Not Available"},void 0,!1,{fileName:i,lineNumber:222,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:218,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Adults"},void 0,!1,{fileName:i,lineNumber:225,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.noadults?e==null?void 0:e.noadults:"Not Available"},void 0,!1,{fileName:i,lineNumber:228,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:224,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Children"},void 0,!1,{fileName:i,lineNumber:231,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.nochildern?e==null?void 0:e.nochildern:"0"},void 0,!1,{fileName:i,lineNumber:234,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:230,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No. Of Occupants"},void 0,!1,{fileName:i,lineNumber:237,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totaloccupants?e==null?void 0:e.totaloccupants:"Not Available"},void 0,!1,{fileName:i,lineNumber:240,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:236,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:171,columnNumber:53},void 0),l("div",{className:"borderBottom mt-[25px]"},void 0,!1,{fileName:i,lineNumber:244,columnNumber:53},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"RESERVATION DETAILS"},void 0,!1,{fileName:i,lineNumber:246,columnNumber:53},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Confirmation Code/ Ref"},void 0,!1,{fileName:i,lineNumber:250,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.confirmationcode?e==null?void 0:e.confirmationcode:"Not Available"},void 0,!1,{fileName:i,lineNumber:253,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:249,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Reservation Date"},void 0,!1,{fileName:i,lineNumber:256,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.reservationdate?new Date(e==null?void 0:e.reservationdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:259,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:255,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Booking Agent"},void 0,!1,{fileName:i,lineNumber:262,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.bookingagent?e==null?void 0:e.bookingagent:"Not Available"},void 0,!1,{fileName:i,lineNumber:265,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:261,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Mode of Payment"},void 0,!1,{fileName:i,lineNumber:268,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.modepayment?e==null?void 0:e.modepayment:"Not Available"},void 0,!1,{fileName:i,lineNumber:271,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:267,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"},void 0,!1,{fileName:i,lineNumber:274,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.checkindate?new Date(e==null?void 0:e.checkindate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:277,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:273,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"},void 0,!1,{fileName:i,lineNumber:280,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.checkoutdate?new Date(e==null?void 0:e.checkoutdate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:283,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:279,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Nights"},void 0,!1,{fileName:i,lineNumber:286,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.nonight?e==null?void 0:e.nonight:"Not Available"},void 0,!1,{fileName:i,lineNumber:289,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:285,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tourism Fee /Unit"},void 0,!1,{fileName:i,lineNumber:292,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.tourismfee?e==null?void 0:e.tourismfee:"Not Available"},void 0,!1,{fileName:i,lineNumber:295,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:291,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:248,columnNumber:53},void 0),l("div",{className:"borderBottom mt-[25px]"},void 0,!1,{fileName:i,lineNumber:299,columnNumber:53},void 0),l("h4",{className:"text-[20px] mt-[25px]",children:"RESERVATION PAYOUT DETAILS"},void 0,!1,{fileName:i,lineNumber:301,columnNumber:53},void 0),l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"},void 0,!1,{fileName:i,lineNumber:305,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.securitydeposit?e==null?void 0:e.securitydeposit.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:308,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:304,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"TOTAL PAYOUT"},void 0,!1,{fileName:i,lineNumber:311,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalpayout?e==null?void 0:e.totalpayout.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:314,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:310,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Host Service Fee (portal)"},void 0,!1,{fileName:i,lineNumber:317,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.hostservicefee?e==null?void 0:e.hostservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:320,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:316,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Collection All incl"},void 0,!1,{fileName:i,lineNumber:323,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalcollectall?e==null?void 0:e.totalcollectall.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:326,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:322,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Cleaning Fee"},void 0,!1,{fileName:i,lineNumber:329,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.cleaningfee?e==null?void 0:e.cleaningfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:332,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:328,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"TOTAL ADDITIONAL FEE"},void 0,!1,{fileName:i,lineNumber:335,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totaladditionalfee?e==null?void 0:e.totaladditionalfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:338,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:334,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room rent + GM+VAT"},void 0,!1,{fileName:i,lineNumber:341,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalroomrent?e==null?void 0:e.totalroomrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:344,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:340,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Room Rent Amount: ( Incl. portal fee)"},void 0,!1,{fileName:i,lineNumber:347,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.roomrentamount?e==null?void 0:e.roomrentamount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:350,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:346,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Room Rent Amount: (host Payable)"},void 0,!1,{fileName:i,lineNumber:353,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.roomrenthostpayable?parseFloat(e==null?void 0:e.roomrenthostpayable).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:356,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:352,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Service Fee"},void 0,!1,{fileName:i,lineNumber:359,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.guestservicefee?e==null?void 0:e.guestservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:362,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:358,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Management Fee"},void 0,!1,{fileName:i,lineNumber:365,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.guestmanagementfee?e==null?void 0:e.guestmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:368,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:364,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Host Management Fee"},void 0,!1,{fileName:i,lineNumber:371,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.hostmanagementfee?e==null?void 0:e.hostmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:374,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:370,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room Rent Amount (incl. GM FEE)"},void 0,!1,{fileName:i,lineNumber:377,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.guestservicefee)&&(e==null?void 0:e.guestservicefee)>0?(parseFloat(e!=null&&e.roomrentamount?e==null?void 0:e.roomrentamount:0)+parseFloat(e!=null&&e.guestmanagementfee?e==null?void 0:e.guestmanagementfee:0)+parseFloat(e!=null&&e.guestservicefee?e==null?void 0:e.guestservicefee:0)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):(parseFloat(e!=null&&e.roomrentamount?e==null?void 0:e.roomrentamount:0)+parseFloat(e!=null&&e.guestmanagementfee?e==null?void 0:e.guestmanagementfee:0)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})},void 0,!1,{fileName:i,lineNumber:380,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:376,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Booking Room Rent"},void 0,!1,{fileName:i,lineNumber:390,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.vatperbookingrent?e==null?void 0:e.vatperbookingrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:393,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:389,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Service fee"},void 0,!1,{fileName:i,lineNumber:396,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.vatperservicefee?e==null?void 0:e.vatperservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:399,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:395,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Cleaning fee"},void 0,!1,{fileName:i,lineNumber:402,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.vatpercleaningfee?e==null?void 0:e.vatpercleaningfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:405,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:401,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Guest Management"},void 0,!1,{fileName:i,lineNumber:408,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.vatperguestmanagementfee?e==null?void 0:e.vatperguestmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:411,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:407,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% On Host Management Fee"},void 0,!1,{fileName:i,lineNumber:414,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.vatperhostmanagementfee?e==null?void 0:e.vatperhostmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:417,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:413,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Payout Vat"},void 0,!1,{fileName:i,lineNumber:420,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalvatper?e==null?void 0:e.totalvatper.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:423,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:419,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room rent + GM+VAT"},void 0,!1,{fileName:i,lineNumber:426,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalroomrent?e==null?void 0:e.totalroomrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:429,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:425,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Audit Difference"},void 0,!1,{fileName:i,lineNumber:432,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.auditdiff?e==null?void 0:e.auditdiff:"0.00"},void 0,!1,{fileName:i,lineNumber:435,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:431,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Collection All incl"},void 0,!1,{fileName:i,lineNumber:438,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalcollectall?e==null?void 0:e.totalcollectall.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},void 0,!1,{fileName:i,lineNumber:441,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:437,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"DTCM uploaded"},void 0,!1,{fileName:i,lineNumber:444,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.dtcm_uploaded)===!0?"Yes":"No"},void 0,!1,{fileName:i,lineNumber:447,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:443,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Passport & ID collected"},void 0,!1,{fileName:i,lineNumber:450,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.passortid_collected)===!0?"Yes":"No"},void 0,!1,{fileName:i,lineNumber:453,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:449,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Signature verified as per Passport"},void 0,!1,{fileName:i,lineNumber:456,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.sign_verified)===!0?"Yes":"No"},void 0,!1,{fileName:i,lineNumber:459,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:455,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Smart code provided"},void 0,!1,{fileName:i,lineNumber:462,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.smartcode_provided)===!0?"Yes":"No"},void 0,!1,{fileName:i,lineNumber:465,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:461,columnNumber:57},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Payment collected"},void 0,!1,{fileName:i,lineNumber:468,columnNumber:61},void 0),l("p",{className:"  form-control py-2   ",children:(e==null?void 0:e.payment_collected)===!0?"Yes":"No"},void 0,!1,{fileName:i,lineNumber:471,columnNumber:61},void 0)]},void 0,!0,{fileName:i,lineNumber:467,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:303,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:133,columnNumber:49},void 0),v===!1&&s===!1?l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(k,{to:"/all-booking",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:478,columnNumber:61},void 0),(N==null?void 0:N.updatebooking)===!0&&l(k,{to:`/update-booking/${n}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"},void 0,!1,{fileName:i,lineNumber:481,columnNumber:69},void 0)]},void 0,!0,{fileName:i,lineNumber:477,columnNumber:57},void 0):null]},void 0,!0,{fileName:i,lineNumber:132,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:131,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:130,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:116,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:114,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:113,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:111,columnNumber:21},void 0)},void 0,!1)};export{z as default};
