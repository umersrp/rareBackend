import{bu as s,bL as h,r as a,j as i,F as y,C as f,c as l,L as d}from"./index.39225be0.js";const b=()=>{const{id:c}=s(),o=localStorage.getItem("isAuth"),t=JSON.parse(o),{data:n}=h(t==null?void 0:t.roleid),[e,m]=a.exports.useState("");return a.exports.useEffect(()=>{(async()=>{if(c){const r=await(await fetch(`http://dev-rare.srp.ai/community/${c}`)).json();r&&m(r)}})()},[c]),i(y,{children:i("div",{className:" space-y-5",children:i("div",{children:i("div",{children:i(f,{title:"View Community",children:i("div",{children:i("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[i("div",{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"}),i("p",{className:"  form-control py-2   ",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"})]}),l("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Community Code"}),i("p",{className:"  form-control py-2   ",children:e!=null&&e.communitycode?e==null?void 0:e.communitycode:"Not Available"})]}),l("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"Country Name"}),i("p",{className:"  form-control py-2   ",children:e!=null&&e.country?e==null?void 0:e.country:"Not Available"})]}),l("div",{children:[i("label",{htmlFor:"default-picker",className:" form-label",children:"City Name"}),i("p",{className:"  form-control py-2   ",children:e!=null&&e.city?e==null?void 0:e.city:"Not Available"})]})]})}),l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[i(d,{to:"/all-community",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(n==null?void 0:n.updatecommunity)===!0&&i(d,{to:`/update-community/${c}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{b as default};
