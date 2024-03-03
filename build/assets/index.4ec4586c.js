import{x as d,y as t,z as m,A as c,j as e,c as o,l,E as b,am as p,f as n}from"./index.bbe51ac5.js";import{T as h}from"./Textarea.415b93e6.js";const g=d({password:t().required("Password is Required"),email:t().email("Invalid email").required("Email is Required")}).required(),w=()=>{const{register:r,formState:{errors:a},handleSubmit:i}=m({resolver:c(g)});return e("div",{children:o("form",{onSubmit:i(s=>{console.log(s)}),className:"space-y-4 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:a.email}),e(l,{name:"password",label:"password",type:"password",register:r,error:a.password}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})]})})},q=d({password:t().required("Password is Required"),email:t().email("Invalid email").required("Email is Required")}).required(),S=()=>{const{register:r,formState:{errors:a},handleSubmit:i}=m({resolver:c(q)});return e("div",{children:o("form",{onSubmit:i(s=>{console.log(s)}),className:"space-y-4 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:a.email,msgTooltip:!0}),e(l,{name:"password",label:"password",type:"password",register:r,error:a.password,msgTooltip:!0}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})]})})},f=d({password:t().required("Password is Required"),email:t().email("Invalid email").required("Email is Required"),username:t().required("Username is Required"),confirmpassword:t().required().oneOf([b("password")])}).required(),x=()=>{const{register:r,formState:{errors:a},handleSubmit:i}=m({resolver:c(f)});return e("div",{children:o("form",{onSubmit:i(s=>{console.log(s)}),className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:a.email}),e(l,{name:"password",label:"password",type:"password",register:r,error:a.password}),e(l,{name:"username",label:"username",type:"text",register:r,error:a.username}),e(l,{name:"confirmpassword",label:"confirmpassword",type:"password",register:r,error:a.confirmpassword}),e("div",{className:"lg:col-span-2 col-span-1",children:e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})})]})})},y=d({username:t().required(),number:p().required().positive(),betweenNumber:p().required("The Number between field is required").positive().min(1).max(10),alphabetic:t().required().matches(/^[a-zA-Z]+$/,"Must only consist of alphabetic characters"),length:t().required("The Min Character field is required").min(3),password:t().required().min(8),url:t().required("The URL field is required").url(),message:t().required("The Message field is required")}).required(),N=()=>{const{register:r,formState:{errors:a},handleSubmit:i}=m({resolver:c(y)});return e("div",{children:o("form",{onSubmit:i(s=>{console.log(s)}),className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e(l,{label:"Required",type:"text",placeholder:"Type your User Name",name:"username",register:r,error:a.username}),e(l,{label:"Must only consist of numbers",type:"text",placeholder:"Enter Number Only",name:"number",register:r,error:a.number}),e(l,{label:"Range Value",type:"text",placeholder:"Enter Number between 1 & 10",name:"betweenNumber",register:r,error:a.betweenNumber}),e(l,{label:"alphabetic characters",type:"text",placeholder:"Enter Character Only",name:"alphabetic",register:r,error:a.alphabetic}),e(l,{label:"Length should not be less than the specified length : 3",type:"text",placeholder:"Enter minimum 3 Characters",name:"length",register:r,error:a.length}),e(l,{label:"Password",type:"password",placeholder:"8+ characters, 1 Capital letter ",name:"re_password",register:r,error:a.password}),e(l,{label:"Must be a valid url",type:"url",placeholder:"Enter Valid URL",name:"re_url",register:r,error:a.url}),e(h,{label:"Message",placeholder:"Write Your Message",name:"re_msg",register:r,error:a.message}),e("div",{className:"lg:col-span-2 col-span-1",children:e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})})]})})},V=()=>o("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e(n,{title:"Simple Form Validation",children:e(w,{})}),e(n,{title:"Simple Form Validation With Tooltip",children:e(S,{})}),e("div",{className:"xl:col-span-2 col-span-1",children:e(n,{title:"Validating Multiple Rules",children:e(x,{})})})," ",e("div",{className:"xl:col-span-2 col-span-1",children:e(n,{title:"Validation Types",children:e(N,{})})})]});export{V as default};
