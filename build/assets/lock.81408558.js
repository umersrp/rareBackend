import{w as i,x as e,y as l,z as n,c as m,j as r,l as c}from"./index.4b2918c9.js";const d=i({email:e().email("Invalid email").required("Email is Required"),password:e().required("Password is Required")}).required(),p=()=>{const{register:s,formState:{errors:a},handleSubmit:o}=l({resolver:n(d)});return m("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[r(c,{name:"email",label:"email",type:"password",register:s,error:a.password}),r("button",{className:"btn btn-dark block w-full text-center",children:"Unlock"})]})};export{p as L};
