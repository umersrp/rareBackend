import{bu as o,bL as h,r as c,j as e,F as f,C as p,c as t,L as r}from"./index.f2f04dad.js";const x=()=>{const{id:s}=o(),d=localStorage.getItem("isAuth"),a=JSON.parse(d),{data:n}=h(a==null?void 0:a.roleid),[i,m]=c.exports.useState("");return c.exports.useEffect(()=>{(async()=>{if(s){const l=await(await fetch(`http://dev-rare.srp.ai/amenities/${s}`)).json();l&&m(l)}})()},[s]),e(f,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(p,{title:"View Amenities",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:t("div",{className:"conten-box w-[100%]",children:[e("div",{children:t("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[t("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities Name"}),e("p",{className:"  form-control py-2   ",children:i!=null&&i.amenitiesname?i==null?void 0:i.amenitiesname:"Not Available"})]}),t("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities Code"}),e("p",{className:"  form-control py-2   ",children:i!=null&&i.amenitiescode?i==null?void 0:i.amenitiescode:"Not Available"})]})]})}),t("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(r,{to:"/all-amenities",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(n==null?void 0:n.updateamenities)&&e(r,{to:`/update-amenities/${s}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{x as default};
