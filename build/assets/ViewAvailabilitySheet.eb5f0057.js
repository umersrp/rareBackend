import{bt as H,bL as O,r as d,bZ as J,c3 as K,j as e,F as p,bN as Q,c as r,bM as W,f as Z,L as T}from"./index.8a3fa8e4.js";const ll=()=>{var S;const{id:t}=H(),j=localStorage.getItem("isAuth"),N=JSON.parse(j),{data:y}=O(N==null?void 0:N.roleid),[l,A]=d.exports.useState(""),[a,L]=d.exports.useState(""),[n,M]=d.exports.useState(""),[v,F]=d.exports.useState(!1),f=new URLSearchParams(window.location.search),u=f.get("delete"),[_,g]=d.exports.useState(!1),[q,P]=d.exports.useState(""),[$,G]=d.exports.useState(""),[E,R]=d.exports.useState(!1),[k,w]=d.exports.useState(!1),[U,b]=d.exports.useState(!1),[m,C]=d.exports.useState("");d.exports.useEffect(()=>{(async()=>{if(t){const i=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/${t}`)).json();i&&A(i)}})()},[t]),d.exports.useEffect(()=>{u==="true"&&f&&(l==null?void 0:l.softdelete)===!1?F(!0):u==="true"&&f&&(l==null?void 0:l.softdelete)===!0&&(w(!0),F(!1))},[u,f,l==null?void 0:l.softdelete]),d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.porpertyid){const i=await(await fetch(`http://portals.rarehomesgroup.com/property/${l==null?void 0:l.porpertyid}`)).json();i&&L(i)}})()},[l==null?void 0:l.porpertyid]),d.exports.useEffect(()=>{(l==null?void 0:l.multivaluation)&&(l==null?void 0:l.propertystatus)==="Multiple"&&(b(!0),(async()=>{const i=await(await fetch("http://portals.rarehomesgroup.com/employees")).json();i&&C(i)})(),b(!1))},[l==null?void 0:l.multivaluation,l==null?void 0:l.propertystatus]),d.exports.useEffect(()=>{(async()=>{if(l!=null&&l.employeeid){const i=await(await fetch(`http://portals.rarehomesgroup.com/employees/${l==null?void 0:l.employeeid}`)).json();i&&M(i)}})()},[l==null?void 0:l.employeeid]);const[o,I]=d.exports.useState({});d.exports.useEffect(()=>{l!=null&&l.porpertyid&&(async()=>{const i=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/api/propertydelete?propertyid=${l==null?void 0:l.porpertyid}`)).json();let h=i==null?void 0:i.filter(x=>(x==null?void 0:x.contractupdation)!=="terminated");I(h[0])})()},[l==null?void 0:l.porpertyid]);const[B]=J(),[V]=K(),z=async c=>{g(!0),P(c)};return e(p,{children:U===!0?e(Q,{}):r("div",{className:" space-y-5",children:[e(W,{showModal:_,handleClose:()=>{g(!1)},loaderModal:E,linkedData:$,handleDeleteData:async()=>{b(!0);try{if((l==null?void 0:l.unlisted)===!1){const s=new FormData;s.append("_id",l==null?void 0:l.porpertyid),s.append("unlisted",!1),s.append("is_available",!1),s.append("available_for",""),s.append("available_id","000000000000000000000000"),await B(s)}await V({_id:t,softdelete:!0}),(async()=>{if(t){const i=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/${t}`)).json();i&&A(i)}})(),w(!0),g(!1),R(!1),b(!1)}catch(c){console.log(c,"error")}},dataId:q,moduleName:"Availability Sheet"}),e("div",{children:e("div",{children:r(Z,{children:[r("div",{className:"flex justify-between items-center mb-6",children:[r("div",{className:"flex items-center gap-x-[15px]",children:[e("h4",{className:"card-title",children:"View Availability Sheet"}),(l==null?void 0:l.propertystatus)!=="Multiple"?e(p,{children:(l==null?void 0:l.unlisted)===!1||(l==null?void 0:l.unlisted)===!0?e("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(l==null?void 0:l.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(l==null?void 0:l.unlisted)===!1?"Listed":"Unlisted"}):null}):null]}),v===!0&&k===!1?e("button",{onClick:()=>z(t),className:"btn-dark py-[8px] px-[24px] rounded-[5px] flex items-center gap-x-[5px]",children:"Delete Availability Sheet"}):null,k===!0&&v===!1?e("p",{className:"capitalize text-slate-500 dark:text-slate-400",children:"This Availability Sheet is deleted"}):null]}),e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:r("div",{className:"conten-box w-[100%]",children:[r("div",{children:[r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[r("div",{className:"w-[100%] col-span-2",children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Property Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.porpertyid?a.unitnumber+" | "+(a==null?void 0:a.communityname)+" | "+(a==null?void 0:a.projectname)+" | "+(a==null?void 0:a.buildingname):"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertystatus?l==null?void 0:l.propertystatus:"Not Available"})]}),(l==null?void 0:l.propertystatus)==="Multiple"?r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Total No. Of Property Valuation"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.multi_propertyvaluation?l==null?void 0:l.multi_propertyvaluation:"Not Available"})]}):null,(l==null?void 0:l.propertystatus)!=="Multiple"?r(p,{children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyvaluation?l==null?void 0:l.propertyvaluation:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.employeeid?(n==null?void 0:n.email)+" | "+(n==null?void 0:n.designation):"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingsource?l==null?void 0:l.listingsource:"Not Available"})]}),(l==null?void 0:l.propertystatus)==="Rent"?r(p,{children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"})]})]}):null]}):null]}),(l==null?void 0:l.propertystatus)==="Multiple"?e(p,{children:(S=l==null?void 0:l.multivaluation)==null?void 0:S.map((c,s)=>{var i;return r("div",{children:[s===0&&e("div",{className:"w-[100%] col-span-3 mt-[20px]",children:e("div",{className:"bordertop"})}),(c==null?void 0:c.unlisted)===!1||(c==null?void 0:c.unlisted)===!0?e("p",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(c==null?void 0:c.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:(c==null?void 0:c.unlisted)===!1?"Listed":"Unlisted"}):null,r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Listed for"}),e("p",{className:"  form-control py-2   ",children:c!=null&&c.propertystatus?c==null?void 0:c.propertystatus:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:c!=null&&c.propertyvaluation?c==null?void 0:c.propertyvaluation:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:(c==null?void 0:c.employeeid)&&(m==null?void 0:m.length)&&((i=m==null?void 0:m.find(h=>(h==null?void 0:h.employeeid)===(c==null?void 0:c.employeeid)))==null?void 0:i.email)||"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:c!=null&&c.listingsource?c==null?void 0:c.listingsource:"Not Available"})]}),(c==null?void 0:c.propertystatus)==="Rent"?r(p,{children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Name"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.guestname?o==null?void 0:o.guestname:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant Email"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.email?o==null?void 0:o.email:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant passport number"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.passportnumber?o==null?void 0:o.passportnumber:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant nationality"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.nationality?o==null?void 0:o.nationality:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenant phone number"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.mobilenumber?o==null?void 0:o.mobilenumber:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy rental amount"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.rentalamount?o==null?void 0:o.rentalamount:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract start date"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.contractstartdate?new Date(o==null?void 0:o.contractstartdate).toDateString():"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy contract end date"}),e("p",{className:"  form-control py-2   ",children:o!=null&&o.contractenddate?new Date(o==null?void 0:o.contractenddate).toDateString():"Not Available"})]})]}):null]}),parseInt(l==null?void 0:l.multi_propertyvaluation)>1&&e("div",{className:"w-[100%] col-span-3 mt-[20px] mb-[20px]",children:e("div",{className:"borderBottom"})})]})})}):e(p,{children:r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Rent / Sold amount"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.propertyvaluation?l==null?void 0:l.propertyvaluation:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Assigned Agent"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.employeeid?(n==null?void 0:n.email)+" | "+(n==null?void 0:n.designation):"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing source"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingsource?l==null?void 0:l.listingsource:"Not Available"})]})]})}),r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-[20px]",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"listing type"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.listingtype?l==null?void 0:l.listingtype:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"keys location"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.keylocation?l==null?void 0:l.keylocation:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Number of keys"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.numberkeys?l==null?void 0:l.numberkeys:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Number of access cards"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.numberaccesscard?l==null?void 0:l.numberaccesscard:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"maintenance done"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.maintenance?l==null?void 0:l.maintenance:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Wardrobe"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.wardrobe?l==null?void 0:l.wardrobe:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Remarks"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.remarks?l==null?void 0:l.remarks:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"trakheesi permit"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.trakheesipermit?l==null?void 0:l.trakheesipermit:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"contract A"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.contractA?l==null?void 0:l.contractA:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Key Location"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.key_location?l==null?void 0:l.key_location:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"no. of keys"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.noof_key?l==null?void 0:l.noof_key:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"parking"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.parking?l==null?void 0:l.parking:"Not Available"})]})]})]}),v===!1&&k===!1?r("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(T,{to:"/all-availability-sheet",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(y==null?void 0:y.updateavailability)&&(l==null?void 0:l.unlisted)===!1&&e(T,{to:`/update-availability-sheet/${t}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]}):null]})})})]})})})]})})};export{ll as default};
