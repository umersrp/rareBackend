import{x as _,y as x,bt as M,r as i,B as A,z as O,A as $,j as e,l as w,M as z,bS as T,bT as G,bU as B,bV as Y,u as H,F as J,t as K,L as g,v as d}from"./index.9c32dce1.js";import{I as Q}from"./property-login.5fd0035c.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forget-password\\forgot-pass.jsx";const W=_({email:x().email("Invalid email").required("Email is Required"),password:x().required("Password is Required")}).required(),X=()=>{const{id:t}=M(),[s,c]=i.exports.useState(""),u=o=>{const{name:a,value:m}=o.target;c({...s,[a]:m})};i.exports.useEffect(()=>{(async()=>{if(t){const m=await(await fetch(`http://dev-rare.srp.ai/users/${t}`)).json();m&&c({...m,password:"",confirmpass:""})}})()},[t]);const P=A(),[k,N]=i.exports.useState(""),[f,Z]=i.exports.useState(!1),[y,D]=i.exports.useState(""),[S,ee]=i.exports.useState(""),{register:b,formState:{errors:se},handleSubmit:le}=O({resolver:$(W)}),[n,j]=i.exports.useState(""),[C,re]=i.exports.useState(10),[L,ae]=i.exports.useState(!0),[F,ie]=i.exports.useState(!0),[R,oe]=i.exports.useState(!0),[E,te]=i.exports.useState(!0),[v,me]=i.exports.useState(""),[p,ne]=i.exports.useState(""),q=o=>{let a="";F&&(a=a+T),L&&(a=a+G),R&&(a=a+B),E&&(a=a+Y),j(I(a))},I=o=>{let a="";const m=o.length;for(let h=0;h<C;h++){const V=Math.round(Math.random()*m);a=a+o.charAt(V)}return a};i.exports.useEffect(()=>{n&&c({...s,password:n,confirmpass:n})},[n]);const U=async()=>{try{!(s!=null&&s.password)||!(s!=null&&s.confirmpass)?N("All values are required"):(s==null?void 0:s.password)!==(s==null?void 0:s.confirmpass)?N("Password are not matching"):(await z.patch("http://dev-rare.srp.ai/users/api/specific/userupdate",{_id:s==null?void 0:s._id,password:s==null?void 0:s.password,confirmpass:s==null?void 0:s.confirmpass}),setTimeout(()=>{P("/")},1500))}catch(o){console.log(o,"error")}};return e("form",{className:"space-y-4 ",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"email"},void 0,!1,{fileName:l,lineNumber:203,columnNumber:9},void 0),e("p",{className:"  form-control py-2   ",children:s==null?void 0:s.email},void 0,!1,{fileName:l,lineNumber:206,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:202,columnNumber:7},void 0),e("div",{children:[e(w,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:v,hasicon:!0,register:b,onChange:u,value:s.password||""},void 0,!1,{fileName:l,lineNumber:209,columnNumber:9},void 0),e("div",{className:"flex items-center justify-between",children:[e("div",{className:" text-danger-500 block text-sm",children:v},void 0,!1,{fileName:l,lineNumber:221,columnNumber:11},void 0),e("button",{type:"button",onClick:q,className:"generator__btn justify-end text-[12px]",children:"Generate Password"},void 0,!1,{fileName:l,lineNumber:224,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:220,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:208,columnNumber:7},void 0),e("div",{children:[e(w,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:p,register:b,hasicon:!0,onChange:u,value:s.confirmpass||""},void 0,!1,{fileName:l,lineNumber:230,columnNumber:9},void 0),e("div",{className:" mt-2 text-danger-500 block text-sm",children:p},void 0,!1,{fileName:l,lineNumber:241,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:229,columnNumber:7},void 0),e("div",{className:" mt-2 text-danger-500 block text-sm",children:k},void 0,!1,{fileName:l,lineNumber:245,columnNumber:7},void 0),e("div",{className:"relative",children:[e("div",{className:"ltr:text-right rtl:text-left",children:e("div",{className:`${f===!0?"opacity-[0.7]":""}`,children:e("button",{type:"button",onClick:U,className:"btn btn-dark block w-full text-center",children:"Set Password"},void 0,!1,{fileName:l,lineNumber:251,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:250,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:249,columnNumber:9},void 0),f===!0?e("div",{className:" absolute top-[0] w-[100%] black-bg flex justify-center h-[47px] button-style items-center",children:e("div",{className:"loader-spiner"},void 0,!1,{fileName:l,lineNumber:259,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:258,columnNumber:13},void 0):null]},void 0,!0,{fileName:l,lineNumber:248,columnNumber:7},void 0),e("div",{className:" mt-2 text-black-500 block text-[18px]",children:y},void 0,!1,{fileName:l,lineNumber:263,columnNumber:7},void 0),e("div",{className:" mt-2 text-danger-500 block text-[18px]",children:S},void 0,!1,{fileName:l,lineNumber:266,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:187,columnNumber:5},void 0)};var r="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forget-password\\ForgetPassword.jsx";const ue=()=>{const[t]=H();return e(J,{children:[e(K,{},void 0,!1,{fileName:r,lineNumber:17,columnNumber:13},void 0),e("div",{className:"loginwrapper",children:e("div",{className:"lg-inner-column",children:[e("div",{className:"left-column relative z-[1]",children:[e("div",{className:"max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20",children:e(g,{to:"/",children:e("img",{src:t?d:d,alt:"",className:"mb-10 w-[220px]"},void 0,!1,{fileName:r,lineNumber:23,columnNumber:33},void 0)},void 0,!1,{fileName:r,lineNumber:22,columnNumber:29},void 0)},void 0,!1,{fileName:r,lineNumber:21,columnNumber:25},void 0),e("div",{className:"absolute left-0 bottom-[-130px] h-full w-full z-[-1]",children:e("img",{src:Q,alt:"",className:"h-full w-full object-contain"},void 0,!1,{fileName:r,lineNumber:34,columnNumber:29},void 0)},void 0,!1,{fileName:r,lineNumber:33,columnNumber:25},void 0)]},void 0,!0,{fileName:r,lineNumber:20,columnNumber:21},void 0),e("div",{className:"right-column relative",children:e("div",{className:"inner-content h-full flex flex-col bg-white dark:bg-slate-800",children:[e("div",{className:"auth-box2 flex flex-col justify-center h-full",children:[e("div",{className:"mobile-logo text-center mb-6 lg:hidden block",children:e(g,{to:"/",children:e("img",{src:t?d:d,alt:"",className:"mx-auto"},void 0,!1,{fileName:r,lineNumber:46,columnNumber:41},void 0)},void 0,!1,{fileName:r,lineNumber:45,columnNumber:37},void 0)},void 0,!1,{fileName:r,lineNumber:44,columnNumber:33},void 0),e("div",{className:"text-center 2xl:mb-10 mb-5",children:[e("h4",{className:"font-medium mb-4",children:"Reset You Password"},void 0,!1,{fileName:r,lineNumber:54,columnNumber:37},void 0),e("div",{className:"text-slate-500 dark:text-slate-400 text-base",children:"Reset Password with Rare."},void 0,!1,{fileName:r,lineNumber:55,columnNumber:37},void 0)]},void 0,!0,{fileName:r,lineNumber:53,columnNumber:33},void 0),e(X,{},void 0,!1,{fileName:r,lineNumber:63,columnNumber:33},void 0)]},void 0,!0,{fileName:r,lineNumber:43,columnNumber:29},void 0),e("div",{className:"auth-footer text-center",children:"Copyright 2023, Rare All Rights Reserved."},void 0,!1,{fileName:r,lineNumber:75,columnNumber:29},void 0)]},void 0,!0,{fileName:r,lineNumber:42,columnNumber:25},void 0)},void 0,!1,{fileName:r,lineNumber:41,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:19,columnNumber:17},void 0)},void 0,!1,{fileName:r,lineNumber:18,columnNumber:13},void 0)]},void 0,!0)};export{ue as default};
