import{v as d,w as r,A as b,B as p,r as N,x as f,y as h,z as v,j as e,k as m,E as w}from"./index.a5c50dfb.js";import{C as x}from"./Checkbox.8642c489.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\auth\\common\\reg-from.jsx";const y=d({name:r().required("Name is Required"),email:r().email("Invalid email").required("Email is Required"),password:r().min(6,"Password must be at least 8 characters").max(20,"Password shouldn't be more than 20 characters").required("Please enter password"),confirmpassword:r().oneOf([b("password"),null],"Passwords must match")}).required(),E=()=>{const l=p(),[t,i]=N.exports.useState(!1),{register:s,formState:{errors:o},handleSubmit:n}=f({resolver:h(y),mode:"all"}),u=v();return e("form",{onSubmit:n(c=>{l(w(c)),setTimeout(()=>{u("/")},1500)}),className:"space-y-5 ",children:[e(m,{name:"name",label:"name",type:"text",placeholder:" Enter your name",register:s,error:o.name},void 0,!1,{fileName:a,lineNumber:51,columnNumber:7},void 0)," ",e(m,{name:"email",label:"email",type:"email",placeholder:" Enter your email",register:s,error:o.email},void 0,!1,{fileName:a,lineNumber:59,columnNumber:7},void 0),e(m,{name:"password",label:"password",type:"password",placeholder:" Enter your password",register:s,error:o.password},void 0,!1,{fileName:a,lineNumber:67,columnNumber:7},void 0),e(x,{label:"You accept our Terms and Conditions and Privacy Policy",value:t,onChange:()=>i(!t)},void 0,!1,{fileName:a,lineNumber:75,columnNumber:7},void 0),e("button",{className:"btn btn-dark block w-full text-center",children:"Create an account"},void 0,!1,{fileName:a,lineNumber:80,columnNumber:7},void 0)]},void 0,!0,{fileName:a,lineNumber:50,columnNumber:5},void 0)};export{E as R};
