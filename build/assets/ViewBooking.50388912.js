import{bu as u,bL as B,r as c,j as e,F as O,bN as V,c as i,bM as Y,C as G,L as y,K as U}from"./index.c655dec6.js";const z=()=>{const{id:n}=u(),x=localStorage.getItem("isAuth"),a=JSON.parse(x),{data:d}=B(a==null?void 0:a.roleid),[l,f]=c.exports.useState(""),[g,s]=c.exports.useState(!1),r=new URLSearchParams(window.location.search),h=r.get("delete"),[A,p]=c.exports.useState(!1),[S,L]=c.exports.useState(""),[T,_]=c.exports.useState(""),[P,w]=c.exports.useState(!1),[N,b]=c.exports.useState(!1),[E,v]=c.exports.useState(!1);c.exports.useEffect(()=>{(async()=>{if(n){const m=await(await fetch(`http://dev-rare.srp.ai/booking/${n}`)).json();m&&f(m)}})()},[n]),c.exports.useEffect(()=>{h==="true"&&r&&(l==null?void 0:l.softdelete)===!1?s(!0):h==="true"&&r&&(l==null?void 0:l.softdelete)===!0&&(b(!0),s(!1))},[h,r,l==null?void 0:l.softdelete]);let C=l==null?void 0:l.passportpdf;const[R,F]=c.exports.useState("");c.exports.useEffect(()=>{if((l==null?void 0:l.passportpdf)!==null||(l==null?void 0:l.passportpdf)!=="null"){let t=l!=null&&l.passportpdf?C.split("-"):"Not Available";F(t)}else F("")},[]);const[o,M]=c.exports.useState("");c.exports.useEffect(()=>{(async()=>{if(l!=null&&l.propertyid){const m=await(await fetch(`http://dev-rare.srp.ai/property/${l==null?void 0:l.propertyid}`)).json();m&&M(m)}})()},[l==null?void 0:l.propertyid]);const j=async t=>{p(!0),L(t)};return e(O,{children:E===!0?e(V,{}):i("div",{className:" space-y-5",children:[e(Y,{showModal:A,handleClose:()=>{p(!1)},loaderModal:P,linkedData:T,handleDeleteData:async()=>{v(!0);try{await U.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:n,softdelete:!0}),s(!1),(async()=>{if(n){const m=await(await fetch(`http://dev-rare.srp.ai/booking/${n}`)).json();m&&f(m)}})(),b(!0),p(!1),w(!1),v(!1)}catch(t){console.log(t,"error")}},dataId:S,moduleName:"Booking"}),e("div",{children:e("div",{children:i(G,{children:[i("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"View Booking"}),g===!0?e("button",{onClick:()=>j(n),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Booking"}):null,N===!0?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Booking is deleted"}):null]}),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:i("div",{className:"conten-box w-[100%]",children:[i("div",{children:[e("h4",{className:"text-[20px]",children:"PROPERTY DETAILS"}),i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.unitnumber?o==null?void 0:o.unitnumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.buildingname?o==null?void 0:o.buildingname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Level"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.floor?o==null?void 0:o.floor:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.communityname?o==null?void 0:o.communityname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.projectname?o==null?void 0:o.projectname:"Not Available"})]})]}),e("div",{className:"borderBottom mt-[25px]"}),e("h4",{className:"text-[20px] mt-[25px]",children:"CUSTOMER DETAILS"}),i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.guestname?l==null?void 0:l.guestname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Check in Type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.checkintype?l==null?void 0:l.checkintype:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Nationality"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nationality?l==null?void 0:l.nationality:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"passport no"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.passportnumber?l==null?void 0:l.passportnumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Passport PDF"}),l!=null&&l.passportpdf?e("a",{href:`${l!=null&&l.passportpdf?"http://dev-rare.srp.ai"+(l==null?void 0:l.passportpdf):"#"}`,target:"_blank",className:"form-control py-2 ",children:l!=null&&l.passportpdf?R[1]:"Not Available"}):e("p",{className:"  form-control py-2   ",children:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Mobile Number"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.mobilenumber?l==null?void 0:l.mobilenumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Email"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.email?l==null?void 0:l.email:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Adults"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noadults?l==null?void 0:l.noadults:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Children"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nochildern?l==null?void 0:l.nochildern:"0"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No. Of Occupants"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totaloccupants?l==null?void 0:l.totaloccupants:"Not Available"})]})]}),e("div",{className:"borderBottom mt-[25px]"}),e("h4",{className:"text-[20px] mt-[25px]",children:"RESERVATION DETAILS"}),i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Confirmation Code/ Ref"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.confirmationcode?l==null?void 0:l.confirmationcode:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Reservation Date"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.reservationdate?new Date(l==null?void 0:l.reservationdate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Booking Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.bookingagent?l==null?void 0:l.bookingagent:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Mode of Payment"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.modepayment?l==null?void 0:l.modepayment:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.checkindate?new Date(l==null?void 0:l.checkindate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.checkoutdate?new Date(l==null?void 0:l.checkoutdate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"No. of Nights"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.nonight?l==null?void 0:l.nonight:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tourism Fee /Unit"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.tourismfee?l==null?void 0:l.tourismfee:"Not Available"})]})]}),e("div",{className:"borderBottom mt-[25px]"}),e("h4",{className:"text-[20px] mt-[25px]",children:"RESERVATION PAYOUT DETAILS"}),i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Security Deposit Amount"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.securitydeposit?l==null?void 0:l.securitydeposit.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"TOTAL PAYOUT"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalpayout?l==null?void 0:l.totalpayout.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Host Service Fee (portal)"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.hostservicefee?l==null?void 0:l.hostservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Collection All incl"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalcollectall?l==null?void 0:l.totalcollectall.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Cleaning Fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.cleaningfee?l==null?void 0:l.cleaningfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"TOTAL ADDITIONAL FEE"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totaladditionalfee?l==null?void 0:l.totaladditionalfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room rent + GM+VAT"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalroomrent?l==null?void 0:l.totalroomrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Room Rent Amount: ( Incl. portal fee)"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.roomrentamount?l==null?void 0:l.roomrentamount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Room Rent Amount: (host Payable)"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.roomrenthostpayable?parseFloat(l==null?void 0:l.roomrenthostpayable).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Service Fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.guestservicefee?l==null?void 0:l.guestservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Guest Management Fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.guestmanagementfee?l==null?void 0:l.guestmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Host Management Fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.hostmanagementfee?l==null?void 0:l.hostmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room Rent Amount (incl. GM FEE)"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.guestservicefee)&&(l==null?void 0:l.guestservicefee)>0?(parseFloat(l!=null&&l.roomrentamount?l==null?void 0:l.roomrentamount:0)+parseFloat(l!=null&&l.guestmanagementfee?l==null?void 0:l.guestmanagementfee:0)+parseFloat(l!=null&&l.guestservicefee?l==null?void 0:l.guestservicefee:0)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):(parseFloat(l!=null&&l.roomrentamount?l==null?void 0:l.roomrentamount:0)+parseFloat(l!=null&&l.guestmanagementfee?l==null?void 0:l.guestmanagementfee:0)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Booking Room Rent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.vatperbookingrent?l==null?void 0:l.vatperbookingrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Service fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.vatperservicefee?l==null?void 0:l.vatperservicefee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Cleaning fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.vatpercleaningfee?l==null?void 0:l.vatpercleaningfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% on Guest Management"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.vatperguestmanagementfee?l==null?void 0:l.vatperguestmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"VAT 5% On Host Management Fee"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.vatperhostmanagementfee?l==null?void 0:l.vatperhostmanagementfee.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Payout Vat"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalvatper?l==null?void 0:l.totalvatper.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Room rent + GM+VAT"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalroomrent?l==null?void 0:l.totalroomrent.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Audit Difference"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.auditdiff?l==null?void 0:l.auditdiff:"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total Collection All incl"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.totalcollectall?l==null?void 0:l.totalcollectall.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"DTCM uploaded"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.dtcm_uploaded)===!0?"Yes":"No"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Passport & ID collected"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.passortid_collected)===!0?"Yes":"No"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Signature verified as per Passport"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.sign_verified)===!0?"Yes":"No"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Smart code provided"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.smartcode_provided)===!0?"Yes":"No"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Payment collected"}),e("p",{className:"  form-control py-2   ",children:(l==null?void 0:l.payment_collected)===!0?"Yes":"No"})]})]})]}),g===!1&&N===!1?i("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(y,{to:"/all-booking",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(d==null?void 0:d.updatebooking)===!0&&e(y,{to:`/update-booking/${n}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})})};export{z as default};
