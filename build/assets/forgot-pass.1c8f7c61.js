import{w,x as u,r as t,y as S,z as C,c as g,j as s,l as E,J as N,K as q,Q as m}from"./index.1adaee61.js";const O=w({email:u().email("Invalid email").required("Email is Required"),password:u().required("Password is Required")}).required(),B=()=>{const[e,h]=t.exports.useState(""),p=l=>{const{name:i,value:a}=l.target;h({...e,[i]:a})},[v,o]=t.exports.useState(""),[d,r]=t.exports.useState(!1),[x,n]=t.exports.useState(""),[f,c]=t.exports.useState(""),{register:b,formState:{errors:y},handleSubmit:P}=S({resolver:C(O)}),k=async()=>{var l,i;if(!(e!=null&&e.email))o("Email is required");else if(!N.isEmail(e.email))o("Email is invalid");else{o("");try{r(!0);let a=await q.post("http://dev-rare.srp.ai/users/forgetpassword",{email:e==null?void 0:e.email});((l=a==null?void 0:a.data)==null?void 0:l.message)==="Verified krwa le"?(m.success("Email Send success fully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n("Email Send success fully please check your mail"),c(""),r(!1)):((i=a==null?void 0:a.data)==null?void 0:i.message)==="user nhi mila"&&(m.error("Invalid email",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(""),c("Invalid email"),r(!1))}catch{console.log("catch me araha hai?"),m.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(""),c("Something went wrong try later"),r(!1)}}};return g("form",{className:"space-y-4 ",children:[s(E,{name:"email",label:"email",type:"email",register:b,error:y.email,placeholder:"Enter your email",value:e.email||"",onChange:p}),s("div",{className:" mt-2 text-danger-500 block text-sm",children:v}),g("div",{className:"relative",children:[s("div",{className:"ltr:text-right rtl:text-left",children:s("div",{className:`${d===!0?"opacity-[0.7]":""}`,children:s("button",{type:"button",onClick:k,className:"btn btn-dark block w-full text-center",children:"Send recovery email"})})}),d===!0?s("div",{className:" absolute top-[0] w-[100%] black-bg flex justify-center h-[47px] button-style items-center",children:s("div",{className:"loader-spiner"})}):null]}),s("div",{className:" mt-2 text-black-500 block text-[18px]",children:x}),s("div",{className:" mt-2 text-danger-500 block text-[18px]",children:f})]})};export{B as F};
