import{y as i,z as e,A as l,B as m,c as n,j as r,m as c}from"./index.aff5cc02.js";const d=i({email:e().email("Invalid email").required("Email is Required"),password:e().required("Password is Required")}).required(),p=()=>{const{register:s,formState:{errors:a},handleSubmit:o}=l({resolver:m(d)});return n("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[r(c,{name:"email",label:"email",type:"password",register:s,error:a.password}),r("button",{className:"btn btn-dark block w-full text-center",children:"Unlock"})]})};export{p as L};
