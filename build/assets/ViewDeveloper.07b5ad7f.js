import{bu as p,bM as m,r as a,j as e,F as h,f as v,c as r,L as c}from"./index.da1c4237.js";const u=()=>{const{id:i}=p(),o=localStorage.getItem("isAuth"),t=JSON.parse(o),{data:d}=m(t==null?void 0:t.roleid),[l,n]=a.exports.useState("");return a.exports.useEffect(()=>{(async()=>{if(i){const s=await(await fetch(`http://portals.rarehomesgroup.com/developer/${i}`)).json();s&&n(s)}})()},[i]),e(h,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(v,{title:"View Developer",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:r("div",{className:"conten-box w-[100%]",children:[e("div",{children:r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developername?l==null?void 0:l.developername:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Code"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developercode?l==null?void 0:l.developercode:"Not Available"})]})]})}),r("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(c,{to:"/all-developer",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(d==null?void 0:d.updatedeveloper)&&e(c,{to:`/update-developer/${i}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{u as default};
