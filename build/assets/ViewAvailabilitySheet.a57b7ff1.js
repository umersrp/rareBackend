import{bu as H,bL as O,r as d,P as J,V as K,j as e,F as p,bN as Q,c as i,bM as W,C as G,L as T}from"./index.78be7783.js";const ll=()=>{var S;const{id:t}=H(),j=localStorage.getItem("isAuth"),N=JSON.parse(j),{data:v}=O(N==null?void 0:N.roleid),[l,A]=d.exports.useState(""),[a,L]=d.exports.useState(""),[n,M]=d.exports.useState(""),[y,F]=d.exports.useState(!1),f=new URLSearchParams(window.location.search),u=f.get("delete"),[_,g]=d.exports.useState(!1),[q,P]=d.exports.useState(""),[$,X]=d.exports.useState(""),[E,C]=d.exports.useState(!1),[k,w]=d.exports.useState(!1),[R,b]=d.exports.useState(!1),[m,U]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(t){const c=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${t}`)).json();c&&A(c)}})()},[t]),d.exports.useEffect(()=>{u==="true"&&f&&(l==null?void 0:l.softdelete)===!1?F(!0):u==="true"&&f&&(l==null?void 0:l.softdelete)===!0&&(w(!0),F(!1))},[u,f,l==null?void 0:l.softdelete]),d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.porpertyid){const c=await(await fetch(`http://dev-rare.srp.ai/property/${l==null?void 0:l.porpertyid}`)).json();c&&L(c)}})()},[l==null?void 0:l.porpertyid]),d.exports.useEffect(()=>{(l==null?void 0:l.multivaluation)&&(l==null?void 0:l.propertystatus)==="Multiple"&&(b(!0),(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/employees")).json();c&&U(c)})(),b(!1))},[l==null?void 0:l.multivaluation,l==null?void 0:l.propertystatus]),d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.employeeid){const c=await(await fetch(`http://dev-rare.srp.ai/employees/${l==null?void 0:l.employeeid}`)).json();c&&M(c)}})()},[l==null?void 0:l.employeeid]);const[r,I]=d.exports.useState({});d.exports.useEffect(()=>{l!=null&&l.porpertyid&&(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/propertydelete?propertyid=${l==null?void 0:l.porpertyid}`)).json();let h=c==null?void 0:c.filter(x=>(x==null?void 0:x.contractupdation)!=="terminated");I(h[0])})()},[l==null?void 0:l.porpertyid]);const[V]=J(),[B]=K(),z=async o=>{g(!0),P(o)};return e(p,{children:R===!0?e(Q,{}):i("div",{className:" space-y-5",children:[e(W,{showModal:_,handleClose:()=>{g(!1)},loaderModal:E,linkedData:$,handleDeleteData:async()=>{b(!0);try{if((l==null?void 0:l.unlisted)===!1){const s=new FormData;s.append("_id",l==null?void 0:l.porpertyid),s.append("unlisted",!1),s.append("is_available",!1),s.append("available_for",""),s.append("available_id","000000000000000000000000"),await V(s)}await B({_id:t,softdelete:!0}),(async()=>{if(t){const c=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/${t}`)).json();c&&A(c)}})(),w(!0),g(!1),C(!1),b(!1)}catch(o){console.log(o,"error")}},dataId:q,moduleName:"Availability Sheet"}),e("div",{children:e("div",{children:i(G,{children:[i("div",{className:"flex justify-between items-center mb-6",children:[i("div",{className:"flex items-center gap-x-[15px]",children:[e("h4",{className:"card-title",children:"View Availability Sheet"}),(l==null?void 0:l.propertystatus)!=="Multiple"?e(p,{children:(l==null?void 0:l.unlisted)===!1||(l==null?void 0:l.unlisted)===!0?e("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(l==null?void 0:l.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(l==null?void 0:l.unlisted)===!1?"Listed":"Unlisted"}):null}):null]}),y===!0&&k===!1?e("button",{onClick:()=>z(t),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Availability Sheet"}):null,k===!0&&y===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Availability Sheet is deleted"}):null]}),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:i("div",{className:"conten-box w-[100%]",children:[i("div",{children:[i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.porpertyid?a.unitnumber+" | "+(a==null?void 0:a.communityname)+" | "+(a==null?void 0:a.projectname)+" | "+(a==null?void 0:a.buildingname):"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertystatus?l==null?void 0:l.propertystatus:"Not Available"})]}),(l==null?void 0:l.propertystatus)==="Multiple"?i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total No. Of Property Valuation"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.multi_propertyvaluation?l==null?void 0:l.multi_propertyvaluation:"Not Available"})]}):null,(l==null?void 0:l.propertystatus)!=="Multiple"?i(p,{children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyvaluation?l==null?void 0:l.propertyvaluation:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.employeeid?(n==null?void 0:n.email)+" | "+(n==null?void 0:n.designation):"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingsource?l==null?void 0:l.listingsource:"Not Available"})]}),(l==null?void 0:l.propertystatus)==="Rent"?i(p,{children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.guestname?r==null?void 0:r.guestname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.email?r==null?void 0:r.email:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.passportnumber?r==null?void 0:r.passportnumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.nationality?r==null?void 0:r.nationality:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.mobilenumber?r==null?void 0:r.mobilenumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.rentalamount?r==null?void 0:r.rentalamount:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.contractstartdate?new Date(r==null?void 0:r.contractstartdate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.contractenddate?new Date(r==null?void 0:r.contractenddate).toDateString():"Not Available"})]})]}):null]}):null]}),(l==null?void 0:l.propertystatus)==="Multiple"?e(p,{children:(S=l==null?void 0:l.multivaluation)==null?void 0:S.map((o,s)=>{var c;return i("div",{children:[s===0&&e("div",{className:"w-[100%] col-span-3 mt-[20px]",children:e("div",{className:"bordertop"})}),(o==null?void 0:o.unlisted)===!1||(o==null?void 0:o.unlisted)===!0?e("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(o==null?void 0:o.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(o==null?void 0:o.unlisted)===!1?"Listed":"Unlisted"}):null,i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.propertystatus?o==null?void 0:o.propertystatus:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.propertyvaluation?o==null?void 0:o.propertyvaluation:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:(o==null?void 0:o.employeeid)&&(m==null?void 0:m.length)&&((c=m==null?void 0:m.find(h=>(h==null?void 0:h.employeeid)===(o==null?void 0:o.employeeid)))==null?void 0:c.email)||"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.listingsource?o==null?void 0:o.listingsource:"Not Available"})]}),(o==null?void 0:o.propertystatus)==="Rent"?i(p,{children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.guestname?r==null?void 0:r.guestname:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.email?r==null?void 0:r.email:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.passportnumber?r==null?void 0:r.passportnumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.nationality?r==null?void 0:r.nationality:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.mobilenumber?r==null?void 0:r.mobilenumber:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.rentalamount?r==null?void 0:r.rentalamount:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.contractstartdate?new Date(r==null?void 0:r.contractstartdate).toDateString():"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),e("p",{className:"  form-control py-2   ",children:r!=null&&r.contractenddate?new Date(r==null?void 0:r.contractenddate).toDateString():"Not Available"})]})]}):null]}),parseInt(l==null?void 0:l.multi_propertyvaluation)>1&&e("div",{className:"w-[100%] col-span-3 mt-[20px] mb-[20px]",children:e("div",{className:"borderBottom"})})]})})}):e(p,{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyvaluation?l==null?void 0:l.propertyvaluation:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.employeeid?(n==null?void 0:n.email)+" | "+(n==null?void 0:n.designation):"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingsource?l==null?void 0:l.listingsource:"Not Available"})]})]})}),i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingtype?l==null?void 0:l.listingtype:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"keys location"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.keylocation?l==null?void 0:l.keylocation:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Number of keys"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.numberkeys?l==null?void 0:l.numberkeys:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Number of access cards"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.numberaccesscard?l==null?void 0:l.numberaccesscard:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"maintenance done"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.maintenance?l==null?void 0:l.maintenance:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Wardrobe"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.wardrobe?l==null?void 0:l.wardrobe:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Remarks"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.remarks?l==null?void 0:l.remarks:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"trakheesi permit"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.trakheesipermit?l==null?void 0:l.trakheesipermit:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"contract A"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.contractA?l==null?void 0:l.contractA:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Key Location"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.key_location?l==null?void 0:l.key_location:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no. of keys"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noof_key?l==null?void 0:l.noof_key:"Not Available"})]}),i("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parking?l==null?void 0:l.parking:"Not Available"})]})]})]}),y===!1&&k===!1?i("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(T,{to:"/all-availability-sheet",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(v==null?void 0:v.updateavailability)&&(l==null?void 0:l.unlisted)===!1&&e(T,{to:`/update-availability-sheet/${t}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})})};export{ll as default};
