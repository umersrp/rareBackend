import{x as v,y as d,z as b,A as S,r as t,B as x,j as a,l as f,L as y,Q as p}from"./index.82c9eb36.js";var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\auth\\common\\login-form.jsx";const P=v({email:d().email("Invalid email").required("Email is Required"),password:d().required("Password is Required")}).required(),j=()=>{const{register:l,formState:{errors:u},handleSubmit:g}=b({resolver:S(P),mode:"all"}),[s,h]=t.exports.useState(""),[O,n]=t.exports.useState(!1);t.exports.useEffect(()=>{const r=new URLSearchParams(window.location.search),e=r.get("success"),c=r.get("userData");if(e==="false")window.localStorage.removeItem("isAuth"),n(!1);else if(e==="true"&&c){n(!0);const N=JSON.parse(c);h(N)}},[]),t.exports.useEffect(()=>{const e=new URLSearchParams(window.location.search).get("success");(s==null?void 0:s.email)&&(s==null?void 0:s.password)&&e==="true"&&(window.localStorage.setItem("isAuth",JSON.stringify(s)),setTimeout(()=>{i("/dashboard")},1e3))},[s==null?void 0:s.email,s==null?void 0:s.password]);const i=x(),w=async r=>{let e=await fetch("http://dev-rare.srp.ai/users/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})});e=await e.json(),(e==null?void 0:e.result)==="user nhi mila"?p.error("Invalid credentials",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(window.localStorage.setItem("isAuth",JSON.stringify(e)),p.success("User logged in successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{i("/dashboard")},1500))},m=localStorage.getItem("isAuth");return t.exports.useEffect(()=>{const e=new URLSearchParams(window.location.search).get("success");e&&e==="false"?localStorage.removeItem("isAuth"):m&&setTimeout(()=>{i("/dashboard")},1e3)},[m]),a("form",{className:"space-y-4 ",children:[a(f,{name:"email",label:"email",type:"email",register:l,error:u.email,placeholder:"Enter your email"},void 0,!1,{fileName:o,lineNumber:131,columnNumber:7},void 0),a(f,{name:"password",label:"password",type:"password",placeholder:"Enter your password",register:l,error:u.password,hasicon:!0},void 0,!1,{fileName:o,lineNumber:140,columnNumber:7},void 0),a("div",{className:"flex justify-end",children:a(y,{to:"/forgot-password",className:"text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium",children:["Forgot Password?"," "]},void 0,!0,{fileName:o,lineNumber:156,columnNumber:9},void 0)},void 0,!1,{fileName:o,lineNumber:150,columnNumber:7},void 0),a("button",{className:"btn btn-dark block w-full text-center",onClick:g(w),children:"Sign in"},void 0,!1,{fileName:o,lineNumber:164,columnNumber:7},void 0)]},void 0,!0,{fileName:o,lineNumber:130,columnNumber:5},void 0)};export{j as L};
