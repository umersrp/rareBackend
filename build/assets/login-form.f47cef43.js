import{w as x,x as m,y,z as v,r,A as P,c as d,j as t,l as p,L as N,Q as h}from"./index.f2f04dad.js";const k=x({email:m().email("Invalid email").required("Email is Required"),password:m().required("Password is Required")}).required(),A=()=>{const{register:i,formState:{errors:l},handleSubmit:g}=y({resolver:v(k),mode:"all"}),[s,w]=r.exports.useState(""),[O,n]=r.exports.useState(!1);r.exports.useEffect(()=>{const a=new URLSearchParams(window.location.search),e=a.get("success"),u=a.get("userData");if(e==="false")window.localStorage.removeItem("isAuth"),n(!1);else if(e==="true"&&u){n(!0);const S=JSON.parse(u);w(S)}},[]),r.exports.useEffect(()=>{const e=new URLSearchParams(window.location.search).get("success");(s==null?void 0:s.email)&&(s==null?void 0:s.password)&&e==="true"&&(window.localStorage.setItem("isAuth",JSON.stringify(s)),setTimeout(()=>{o("/dashboard")},1e3))},[s==null?void 0:s.email,s==null?void 0:s.password]);const o=P(),f=async a=>{let e=await fetch("http://dev-rare.srp.ai/users/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})});e=await e.json(),(e==null?void 0:e.result)==="user nhi mila"?h.error("Invalid credentials",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(window.localStorage.setItem("isAuth",JSON.stringify(e)),h.success("User logged in successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{o("/dashboard")},1500))},c=localStorage.getItem("isAuth");return r.exports.useEffect(()=>{const e=new URLSearchParams(window.location.search).get("success");e&&e==="false"?localStorage.removeItem("isAuth"):c&&setTimeout(()=>{o("/dashboard")},1e3)},[c]),d("form",{className:"space-y-4 ",children:[t(p,{name:"email",label:"email",type:"email",register:i,error:l.email,placeholder:"Enter your email"}),t(p,{name:"password",label:"password",type:"password",placeholder:"Enter your password",register:i,error:l.password,hasicon:!0}),t("div",{className:"flex justify-end",children:d(N,{to:"/forgot-password",className:"text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium",children:["Forgot Password?"," "]})}),t("button",{className:"btn btn-dark block w-full text-center",onClick:g(f),children:"Sign in"})]})};export{A as L};
