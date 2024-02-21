import{w as d,x as a,B as u,E as p,r as h,y as b,z as w,A as x,c as y,j as e,l as t,H as f}from"./index.4de300c8.js";import{C as g}from"./Checkbox.8740576e.js";const q=d({name:a().required("Name is Required"),email:a().email("Invalid email").required("Email is Required"),password:a().min(6,"Password must be at least 8 characters").max(20,"Password shouldn't be more than 20 characters").required("Please enter password"),confirmpassword:a().oneOf([u("password"),null],"Passwords must match")}).required(),S=()=>{const n=p(),[o,l]=h.exports.useState(!1),{register:r,formState:{errors:s},handleSubmit:m}=b({resolver:w(q),mode:"all"}),c=x();return y("form",{onSubmit:m(i=>{n(f(i)),setTimeout(()=>{c("/")},1500)}),className:"space-y-5 ",children:[e(t,{name:"name",label:"name",type:"text",placeholder:" Enter your name",register:r,error:s.name})," ",e(t,{name:"email",label:"email",type:"email",placeholder:" Enter your email",register:r,error:s.email}),e(t,{name:"password",label:"password",type:"password",placeholder:" Enter your password",register:r,error:s.password}),e(g,{label:"You accept our Terms and Conditions and Privacy Policy",value:o,onChange:()=>l(!o)}),e("button",{className:"btn btn-dark block w-full text-center",children:"Create an account"})]})};export{S as R};
