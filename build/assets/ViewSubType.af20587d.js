import{bu as p,bL as m,r,j as e,F as b,C as h,c as s,L as d}from"./index.3e2a71f6.js";const N=()=>{const{id:i}=p(),n=localStorage.getItem("isAuth"),l=JSON.parse(n),{data:a}=m(l==null?void 0:l.roleid),[t,o]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{if(i){const c=await(await fetch(`http://portals.rarehomesgroup.com/subtype/${i}`)).json();c&&o(c)}})()},[i]),e(b,{children:e("div",{className:" space-y-5",children:e("div",{children:e("div",{children:e(h,{title:"View Sub Type",children:e("div",{children:e("div",{className:"flex z-[5] items-start relative justify-center",children:s("div",{className:"conten-box w-[100%]",children:[e("div",{children:s("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[s("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub Type Name"}),e("p",{className:"  form-control py-2   ",children:t!=null&&t.subtypename?t==null?void 0:t.subtypename:"Not Available"})]}),s("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Sub Type Code"}),e("p",{className:"  form-control py-2   ",children:t!=null&&t.subtypecode?t==null?void 0:t.subtypecode:"Not Available"})]})]})}),s("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:[e(d,{to:"/all-subtype",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"}),(a==null?void 0:a.updatesubtype)&&e(d,{to:`/update-subtype/${i}`,className:"btn btn inline-flex justify-center btn-dark",children:"Edit"})]})]})})})})})})})})};export{N as default};
