import{w as V,x as w,bu as A,r as a,A as M,y as _,z,c as r,j as e,l as v,K as T,bS as $,bT as G,bU as K,bV as Y,u as B,F as H,t as J,L as g,v as n}from"./index.c655dec6.js";import{I as O}from"./property-login.5fd0035c.js";const Q=V({email:w().email("Invalid email").required("Email is Required"),password:w().required("Password is Required")}).required(),W=()=>{const{id:o}=A(),[s,d]=a.exports.useState(""),m=l=>{const{name:t,value:c}=l.target;d({...s,[t]:c})};a.exports.useEffect(()=>{(async()=>{if(o){const c=await(await fetch(`http://dev-rare.srp.ai/users/${o}`)).json();c&&d({...c,password:"",confirmpass:""})}})()},[o]);const N=M(),[P,p]=a.exports.useState(""),[u,X]=a.exports.useState(!1),[k,Z]=a.exports.useState(""),[y,D]=a.exports.useState(""),{register:h,formState:{errors:ee},handleSubmit:se}=_({resolver:z(Q)}),[i,S]=a.exports.useState(""),[C,te]=a.exports.useState(10),[L,ae]=a.exports.useState(!0),[j,re]=a.exports.useState(!0),[q,le]=a.exports.useState(!0),[I,oe]=a.exports.useState(!0),[x,ce]=a.exports.useState(""),[f,ie]=a.exports.useState(""),R=l=>{let t="";j&&(t=t+$),L&&(t=t+G),q&&(t=t+K),I&&(t=t+Y),S(E(t))},E=l=>{let t="";const c=l.length;for(let b=0;b<C;b++){const U=Math.round(Math.random()*c);t=t+l.charAt(U)}return t};a.exports.useEffect(()=>{i&&d({...s,password:i,confirmpass:i})},[i]);const F=async()=>{try{!(s!=null&&s.password)||!(s!=null&&s.confirmpass)?p("All values are required"):(s==null?void 0:s.password)!==(s==null?void 0:s.confirmpass)?p("Password are not matching"):(await T.patch("http://dev-rare.srp.ai/users/api/specific/userupdate",{_id:s==null?void 0:s._id,password:s==null?void 0:s.password,confirmpass:s==null?void 0:s.confirmpass}),setTimeout(()=>{N("/")},1500))}catch(l){console.log(l,"error")}};return r("form",{className:"space-y-4 ",children:[r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"email"}),e("p",{className:"  form-control py-2   ",children:s==null?void 0:s.email})]}),r("div",{children:[e(v,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:x,hasicon:!0,register:h,onChange:m,value:s.password||""}),r("div",{className:"flex items-center justify-between",children:[e("div",{className:" text-danger-500 block text-sm",children:x}),e("button",{type:"button",onClick:R,className:"generator__btn justify-end text-[12px]",children:"Generate Password"})]})]}),r("div",{children:[e(v,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:f,register:h,hasicon:!0,onChange:m,value:s.confirmpass||""}),e("div",{className:" mt-2 text-danger-500 block text-sm",children:f})]}),e("div",{className:" mt-2 text-danger-500 block text-sm",children:P}),r("div",{className:"relative",children:[e("div",{className:"ltr:text-right rtl:text-left",children:e("div",{className:`${u===!0?"opacity-[0.7]":""}`,children:e("button",{type:"button",onClick:F,className:"btn btn-dark block w-full text-center",children:"Set Password"})})}),u===!0?e("div",{className:" absolute top-[0] w-[100%] black-bg flex justify-center h-[47px] button-style items-center",children:e("div",{className:"loader-spiner"})}):null]}),e("div",{className:" mt-2 text-black-500 block text-[18px]",children:k}),e("div",{className:" mt-2 text-danger-500 block text-[18px]",children:y})]})},me=()=>{const[o]=B();return r(H,{children:[e(J,{}),e("div",{className:"loginwrapper",children:r("div",{className:"lg-inner-column",children:[r("div",{className:"left-column relative z-[1]",children:[e("div",{className:"max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20",children:e(g,{to:"/",children:e("img",{src:o?n:n,alt:"",className:"mb-10 w-[220px]"})})}),e("div",{className:"absolute left-0 bottom-[-130px] h-full w-full z-[-1]",children:e("img",{src:O,alt:"",className:"h-full w-full object-contain"})})]}),e("div",{className:"right-column relative",children:r("div",{className:"inner-content h-full flex flex-col bg-white dark:bg-slate-800",children:[r("div",{className:"auth-box2 flex flex-col justify-center h-full",children:[e("div",{className:"mobile-logo text-center mb-6 lg:hidden block",children:e(g,{to:"/",children:e("img",{src:o?n:n,alt:"",className:"mx-auto"})})}),r("div",{className:"text-center 2xl:mb-10 mb-5",children:[e("h4",{className:"font-medium mb-4",children:"Reset You Password"}),e("div",{className:"text-slate-500 dark:text-slate-400 text-base",children:"Reset Password with Rare."})]}),e(W,{})]}),e("div",{className:"auth-footer text-center",children:"Copyright 2023, Rare All Rights Reserved."})]})})]})})]})};export{me as default};
