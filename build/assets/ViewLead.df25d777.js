import{bu as f,r as c,j as e,F as N,f as b,c as i,L as t}from"./index.a2dcacb2.js";const k=()=>{const{id:o}=f(),[l,d]=c.exports.useState(""),[v,r]=c.exports.useState(!1);c.exports.useEffect(()=>{(async()=>{if(o){r(!0);const n=await(await fetch(`http://portals.rarehomesgroup.com/users/${o}`)).json();n&&d(n)}})()},[o]);const[a,s]=c.exports.useState([]);return c.exports.useEffect(()=>{l!=null&&l.employeeid&&(async()=>{if(await(await fetch("http://portals.rarehomesgroup.com/employees/"+(l==null?void 0:l.employeeid))).json()){let p=(item==null?void 0:item.email)+(item==null?void 0:item.designation)?" | "+(item==null?void 0:item.designation):"";s(p)}})()},[l==null?void 0:l.employeeid]),e(N,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(b,{title:"View Lead",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:i("div",{className:"conten-box w-[100%]",children:[e("div",{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"First Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.firstname?l==null?void 0:l.firstname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Last Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.lastname?l==null?void 0:l.lastname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Email"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.email?l==null?void 0:l.email:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Contact no"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.contactno?l==null?void 0:l.contactno:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Nationality"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.passportno?l==null?void 0:l.passportno:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Date Of Birth"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.datebirth?new Date(l==null?void 0:l.datebirth).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assign To Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.employeeid?a:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Check-In Date"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.checkindate?new Date(l==null?void 0:l.checkindate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Check-Out Date"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.checkindate?new Date(l==null?void 0:l.checkoutdate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"location"}),l!=null&&l.location?e("a",{className:"  form-control py-2   overflow-hidden pr-[5pc] max-h-[38.68px]",href:l==null?void 0:l.location,target:"_blank",children:l==null?void 0:l.location}):e("p",{className:"  form-control py-2   ",children:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no.of guests"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.no_guests?l==null?void 0:l.no_guests:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Lead Status"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.lead_status?l==null?void 0:l.lead_status:"Not Available"})]}),(l==null?void 0:l.remarks)&&(l==null?void 0:l.remarks)!==""?i("div",{className:"lg:col-span-2 col-span-1",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Remarks"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.remarks?l==null?void 0:l.remarks:"Not Available"})]}):null]})}),i("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(t,{to:"/all-leads",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),e(t,{to:`/update-leads/${o}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{k as default};
