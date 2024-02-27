import{v as N,w as a,x as b,y as v,j as e,k as l,A as h,am as p,e as c}from"./index.a5c50dfb.js";import{T as g}from"./Textarea.9b68c9fb.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-validation\\Simple.jsx";const x=N({password:a().required("Password is Required"),email:a().email("Invalid email").required("Email is Required")}).required(),w=()=>{const{register:r,formState:{errors:i},handleSubmit:n}=b({resolver:v(x)});return e("div",{children:e("form",{onSubmit:n(d=>{console.log(d)}),className:"space-y-4 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:i.email},void 0,!1,{fileName:t,lineNumber:30,columnNumber:9},void 0),e(l,{name:"password",label:"password",type:"password",register:r,error:i.password},void 0,!1,{fileName:t,lineNumber:37,columnNumber:9},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:t,lineNumber:46,columnNumber:11},void 0)},void 0,!1,{fileName:t,lineNumber:45,columnNumber:9},void 0)]},void 0,!0,{fileName:t,lineNumber:29,columnNumber:7},void 0)},void 0,!1,{fileName:t,lineNumber:28,columnNumber:5},void 0)};var u="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-validation\\SimpleTooltip.jsx";const S=N({password:a().required("Password is Required"),email:a().email("Invalid email").required("Email is Required")}).required(),q=()=>{const{register:r,formState:{errors:i},handleSubmit:n}=b({resolver:v(S)});return e("div",{children:e("form",{onSubmit:n(d=>{console.log(d)}),className:"space-y-4 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:i.email,msgTooltip:!0},void 0,!1,{fileName:u,lineNumber:30,columnNumber:9},void 0),e(l,{name:"password",label:"password",type:"password",register:r,error:i.password,msgTooltip:!0},void 0,!1,{fileName:u,lineNumber:38,columnNumber:9},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:u,lineNumber:48,columnNumber:11},void 0)},void 0,!1,{fileName:u,lineNumber:47,columnNumber:9},void 0)]},void 0,!0,{fileName:u,lineNumber:29,columnNumber:7},void 0)},void 0,!1,{fileName:u,lineNumber:28,columnNumber:5},void 0)};var s="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-validation\\multiple-rules.jsx";const y=N({password:a().required("Password is Required"),email:a().email("Invalid email").required("Email is Required"),username:a().required("Username is Required"),confirmpassword:a().required().oneOf([h("password")])}).required(),V=()=>{const{register:r,formState:{errors:i},handleSubmit:n}=b({resolver:v(y)});return e("div",{children:e("form",{onSubmit:n(d=>{console.log(d)}),className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e(l,{name:"email",label:"email",type:"email",register:r,error:i.email},void 0,!1,{fileName:s,lineNumber:38,columnNumber:9},void 0),e(l,{name:"password",label:"password",type:"password",register:r,error:i.password},void 0,!1,{fileName:s,lineNumber:45,columnNumber:9},void 0),e(l,{name:"username",label:"username",type:"text",register:r,error:i.username},void 0,!1,{fileName:s,lineNumber:52,columnNumber:9},void 0),e(l,{name:"confirmpassword",label:"confirmpassword",type:"password",register:r,error:i.confirmpassword},void 0,!1,{fileName:s,lineNumber:59,columnNumber:9},void 0),e("div",{className:"lg:col-span-2 col-span-1",children:e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:s,lineNumber:69,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:s,lineNumber:33,columnNumber:5},void 0)};var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-validation\\validation-types.jsx";const F=N({username:a().required(),number:p().required().positive(),betweenNumber:p().required("The Number between field is required").positive().min(1).max(10),alphabetic:a().required().matches(/^[a-zA-Z]+$/,"Must only consist of alphabetic characters"),length:a().required("The Min Character field is required").min(3),password:a().required().min(8),url:a().required("The URL field is required").url(),message:a().required("The Message field is required")}).required(),j=()=>{const{register:r,formState:{errors:i},handleSubmit:n}=b({resolver:v(F)});return e("div",{children:e("form",{onSubmit:n(d=>{console.log(d)}),className:"lg:grid-cols-2 grid gap-5 grid-cols-1 ",children:[e(l,{label:"Required",type:"text",placeholder:"Type your User Name",name:"username",register:r,error:i.username},void 0,!1,{fileName:o,lineNumber:50,columnNumber:9},void 0),e(l,{label:"Must only consist of numbers",type:"text",placeholder:"Enter Number Only",name:"number",register:r,error:i.number},void 0,!1,{fileName:o,lineNumber:58,columnNumber:9},void 0),e(l,{label:"Range Value",type:"text",placeholder:"Enter Number between 1 & 10",name:"betweenNumber",register:r,error:i.betweenNumber},void 0,!1,{fileName:o,lineNumber:66,columnNumber:9},void 0),e(l,{label:"alphabetic characters",type:"text",placeholder:"Enter Character Only",name:"alphabetic",register:r,error:i.alphabetic},void 0,!1,{fileName:o,lineNumber:75,columnNumber:9},void 0),e(l,{label:"Length should not be less than the specified length : 3",type:"text",placeholder:"Enter minimum 3 Characters",name:"length",register:r,error:i.length},void 0,!1,{fileName:o,lineNumber:84,columnNumber:9},void 0),e(l,{label:"Password",type:"password",placeholder:"8+ characters, 1 Capital letter ",name:"re_password",register:r,error:i.password},void 0,!1,{fileName:o,lineNumber:92,columnNumber:9},void 0),e(l,{label:"Must be a valid url",type:"url",placeholder:"Enter Valid URL",name:"re_url",register:r,error:i.url},void 0,!1,{fileName:o,lineNumber:100,columnNumber:9},void 0),e(g,{label:"Message",placeholder:"Write Your Message",name:"re_msg",register:r,error:i.message},void 0,!1,{fileName:o,lineNumber:108,columnNumber:9},void 0),e("div",{className:"lg:col-span-2 col-span-1",children:e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:o,lineNumber:118,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:117,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:116,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:46,columnNumber:7},void 0)},void 0,!1,{fileName:o,lineNumber:45,columnNumber:5},void 0)};var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-validation\\index.jsx";const E=()=>e("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[e(c,{title:"Simple Form Validation",children:e(w,{},void 0,!1,{fileName:m,lineNumber:12,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:11,columnNumber:7},void 0),e(c,{title:"Simple Form Validation With Tooltip",children:e(q,{},void 0,!1,{fileName:m,lineNumber:15,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:14,columnNumber:7},void 0),e("div",{className:"xl:col-span-2 col-span-1",children:e(c,{title:"Validating Multiple Rules",children:e(V,{},void 0,!1,{fileName:m,lineNumber:19,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:18,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:17,columnNumber:7},void 0)," ",e("div",{className:"xl:col-span-2 col-span-1",children:e(c,{title:"Validation Types",children:e(j,{},void 0,!1,{fileName:m,lineNumber:24,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:23,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:22,columnNumber:7},void 0)]},void 0,!0,{fileName:m,lineNumber:10,columnNumber:5},void 0);export{E as default};
