import{x as m,y as o,z as t,A as n,j as e,l as u}from"./index.72434430.js";var r="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\auth\\common\\lock.jsx";const c=m({email:o().email("Invalid email").required("Email is Required"),password:o().required("Password is Required")}).required(),N=()=>{const{register:s,formState:{errors:a},handleSubmit:i}=t({resolver:n(c)});return e("form",{onSubmit:i(l=>{console.log(l)}),className:"space-y-4 ",children:[e(u,{name:"email",label:"email",type:"password",register:s,error:a.password},void 0,!1,{fileName:r,lineNumber:28,columnNumber:7},void 0),e("button",{className:"btn btn-dark block w-full text-center",children:"Unlock"},void 0,!1,{fileName:r,lineNumber:36,columnNumber:7},void 0)]},void 0,!0,{fileName:r,lineNumber:27,columnNumber:5},void 0)};export{N as L};
