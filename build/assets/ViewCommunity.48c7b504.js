import{bu as s,bL as h,r,j as l,F as y,f,c as i,L as a}from"./index.93a34628.js";const b=()=>{const{id:c}=s(),d=localStorage.getItem("isAuth"),t=JSON.parse(d),{data:n}=h(t==null?void 0:t.roleid),[e,m]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{if(c){const o=await(await fetch(`http://portals.rarehomesgroup.com/community/${c}`)).json();o&&m(o)}})()},[c]),l(y,{children:l("div",{className:" space-y-5",children:l("div",{children:l("div",{children:l(f,{title:"View Community",children:l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:i("div",{className:"conten-box w-[100%]",children:[l("div",{children:i("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Code"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.communitycode?e==null?void 0:e.communitycode:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Country Name"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.country?e==null?void 0:e.country:"Not Available"})]}),i("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"City Name"}),l("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"})]})]})}),i("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[l(a,{to:"/all-community",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(n==null?void 0:n.updatecommunity)===!0&&l(a,{to:`/update-community/${c}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{b as default};
