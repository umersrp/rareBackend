import{bu as p,bL as m,r as s,j as e,F as v,C as h,c as r,L as c}from"./index.2690966c.js";const x=()=>{const{id:i}=p(),n=localStorage.getItem("isAuth"),d=JSON.parse(n),{data:t}=m(d==null?void 0:d.roleid),[l,o]=s.exports.useState("");return s.exports.useEffect(()=>{(async()=>{if(i){const a=await(await fetch(`http://dev-rare.srp.ai/developer/${i}`)).json();a&&o(a)}})()},[i]),e(v,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(h,{title:"View Developer",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:r("div",{className:"conten-box w-[100%]",children:[e("div",{children:r("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developername?l==null?void 0:l.developername:"Not Available"})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Code"}),e("p",{className:"  form-control py-2   ",children:l!=null&&l.developercode?l==null?void 0:l.developercode:"Not Available"})]})]})}),r("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(c,{to:"/all-developer",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(t==null?void 0:t.updatedeveloper)&&e(c,{to:`/update-developer/${i}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{x as default};
