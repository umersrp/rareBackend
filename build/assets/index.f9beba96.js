import{w as c,x as d,B as N,r as p,y as k,z as y,j as e,C as q,c as l,I as S,l as i}from"./index.3f28faea.js";import{I as P}from"./InputGroup.397875a0.js";import{T as F}from"./Textarea.ddea4913.js";import{B as h}from"./Button.dac1c4b8.js";const f=[{id:1},{id:2},{id:3}];let w=c().shape({username:d().required(" User name is required"),fullname:d().required("Full name is required"),email:d().email("Email is not valid").required("Email is required"),password:d().required("Password is required").min(8,"Password must be at least 8 characters"),confirmpass:d().required("Confirm Password is required").oneOf([N("password"),null],"Passwords must match")}),E=c().shape({}),z=c().shape({});const L=()=>{const[a,m]=p.exports.useState(0);let n;switch(a){case 0:n=w;break;case 1:n=E;break;case 2:n=z;break;default:n=w}p.exports.useEffect(()=>{},[a]);const{register:r,formState:{errors:t},handleSubmit:u,watch:$}=k({resolver:y(n),mode:"all"}),b=o=>{let s=f.length;a===s-1?console.log(o):m(a+1)},x=()=>{m(a-1)};return e("div",{children:e(q,{title:"Customer Form",children:l("div",{children:[e("div",{className:"flex z-[5] items-center relative justify-center md:mx-8",children:f.map((o,s)=>l("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none group",children:[e("div",{className:`${a>=s?"bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"}  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`,children:a<=s?l("span",{children:[" ",s+1]}):e("span",{className:"text-3xl",children:e(S,{icon:"bx:check-double"})})}),e("div",{className:`${a>=s?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-700"} absolute top-1/2 h-[2px] w-full`}),e("div",{className:` ${a>=s?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`,children:e("span",{className:"w-max",children:o.title})})]},s))}),e("div",{className:"conten-box ",children:l("form",{onSubmit:u(b),children:[a===0&&e("div",{children:l("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[e(i,{label:"Username",type:"text",placeholder:"Type your User Name",name:"username",error:t.username,register:r}),e(i,{label:"Full name",type:"text",placeholder:"Full name",name:"fullname",error:t.fullname,register:r}),e(i,{label:"Email",type:"email",placeholder:"Type your email",name:"email",error:t.email,register:r}),e(P,{label:"Phone Number",type:"text",placeholder:"Phone Number",name:"phone",register:r}),e(i,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:t.password,hasicon:!0,register:r}),e(i,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:t.confirmpass,register:r,hasicon:!0})]})}),a===1&&e("div",{children:l("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[e(i,{label:"First name",type:"text",placeholder:"First name",name:"fname",error:t.fname,register:r}),e(i,{label:"Last name",type:"text",placeholder:"Last name",name:"lname",error:t.lname,register:r})]})}),a===2&&e("div",{children:e("div",{className:"grid grid-cols-1 gap-5 pt-10",children:e(F,{label:"Address",type:"text",placeholder:"Write Address",name:"address",error:t.address,register:r})})}),l("div",{className:`${a>0?"flex justify-between":" text-right"} mt-10`,children:[a!==0&&e(h,{text:"prev",className:"btn-dark",onClick:x}),e(h,{text:a!==f.length-1?"next":"submit",className:"btn-dark",type:"submit"})]})]})})]})})})},g=[{id:1,title:"Account Details"},{id:2,title:"Personal info-500"},{id:3,title:"Address"},{id:4,title:"Social Links"}];let v=c().shape({username:d().required(" User name is required"),fullname:d().required("Full name is required"),email:d().email("Email is not valid").required("Email is required"),phone:d().required("Phone number is required").matches(/^[0-9]{12}$/,"Phone number is not valid"),password:d().required("Password is required").min(8,"Password must be at least 8 characters"),confirmpass:d().required("Confirm Password is required").oneOf([N("password"),null],"Passwords must match")}),C=c().shape({fname:d().required(" First name is required"),lname:d().required(" Last name is required")}),j=c().shape({address:d().required(" Address is required")});const T=/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;let U=c().shape({fburl:d().required("Facebook url is required").matches(T,"Facebook url is not valid")});const W=()=>{const[a,m]=p.exports.useState(0);let n;switch(a){case 0:n=v;break;case 1:n=C;break;case 2:n=j;break;case 3:n=U;break;default:n=v}p.exports.useEffect(()=>{},[a]);const{register:r,formState:{errors:t},handleSubmit:u,watch:$}=k({resolver:y(n),mode:"all"}),b=o=>{let s=g.length;a===s-1?console.log(o):m(a+1)},x=()=>{m(a-1)};return e("div",{children:e(q,{title:"Vertical",children:l("div",{className:"grid gap-5 grid-cols-12",children:[e("div",{className:"lg:col-span-3 col-span-12",children:e("div",{className:"flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]",children:g.map((o,s)=>l("div",{className:"relative z-[1] flex-1 last:flex-none",children:[e("div",{className:`   ${a>=s?"bg-slate-900 text-white ring-slate-900 dark:bg-slate-900 dark:ring-slate-700  dark:ring-offset-slate-500 ring-offset-2":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 text-opacity-70 dark:bg-slate-700 dark:ring-slate-700"} 
            transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium
            `,children:a<=s?l("span",{children:[" ",s+1]}):e("span",{className:"text-3xl",children:e(S,{icon:"bx:check-double"})})}),e("div",{className:` ${a>=s?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-600"} absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]`}),e("div",{className:` ${a>=s?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-0 ltr:left-full rtl:right-full ltr:pl-4 rtl:pr-4 text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full`,children:e("span",{className:"w-max block",children:o.title})})]},s))})}),e("div",{className:"conten-box lg:col-span-9 col-span-12",children:l("form",{onSubmit:u(b),children:[a===0&&e("div",{children:l("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-3 md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Account Details"})}),e(i,{label:"Username",type:"text",placeholder:"Type your User Name",name:"username",error:t.username,register:r}),e(i,{label:"Full name",type:"text",placeholder:"Full name",name:"fullname",error:t.fullname,register:r}),e(i,{label:"Email",type:"email",placeholder:"Type your email",name:"email",error:t.email,register:r}),e(P,{label:"Phone Number",type:"text",prepend:"MY (+6)",placeholder:"Phone Number",name:"phone",error:t.phone,register:r}),e(i,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:t.password,hasicon:!0,register:r}),e(i,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:t.confirmpass,register:r,hasicon:!0})]})}),a===1&&e("div",{children:l("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Personal info-500"})}),e(i,{label:"First name",type:"text",placeholder:"First name",name:"fname",error:t.fname,register:r}),e(i,{label:"Last name",type:"text",placeholder:"Last name",name:"lname",error:t.lname,register:r})]})}),a===2&&e("div",{children:l("div",{className:"grid grid-cols-1 gap-5",children:[e("div",{className:"",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Address"})}),e(F,{label:"Address",type:"text",placeholder:"Write Address",name:"address",error:t.address,register:r})]})}),a===3&&e("div",{children:l("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-3 md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Address"})}),e(i,{label:"Facebook",type:"text",placeholder:"https://www.facebook.com/profile",name:"fburl",error:t.fburl,register:r})]})}),l("div",{className:`${a>0?"flex justify-between":" text-right"} mt-10`,children:[a!==0&&e(h,{text:"prev",className:"btn-dark",onClick:x}),e(h,{text:a!==g.length-1?"next":"submit",className:"btn-dark",type:"submit"})]})]})})]})})})},_=()=>l("div",{className:" space-y-5",children:[e("div",{children:e(W,{})}),e("div",{children:e(L,{})})]});export{_ as default};
