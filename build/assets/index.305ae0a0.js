import{x as u,y as t,E as y,r as b,z as q,A as S,j as e,e as F,I as P,l as o}from"./index.6ea38f67.js";import{I as E}from"./InputGroup.9a68f8f6.js";import{T as $}from"./Textarea.43980083.js";import{B as f}from"./Button.0ca2c0f1.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-wizard\\HorizentalWizard.jsx";const x=[{id:1},{id:2},{id:3}];let w=u().shape({username:t().required(" User name is required"),fullname:t().required("Full name is required"),email:t().email("Email is not valid").required("Email is required"),password:t().required("Password is required").min(8,"Password must be at least 8 characters"),confirmpass:t().required("Confirm Password is required").oneOf([y("password"),null],"Passwords must match")}),j=u().shape({}),L=u().shape({});const C=()=>{const[r,c]=b.exports.useState(0);let d;switch(r){case 0:d=w;break;case 1:d=j;break;case 2:d=L;break;default:d=w}b.exports.useEffect(()=>{},[r]);const{register:i,formState:{errors:m},handleSubmit:v,watch:z}=q({resolver:S(d),mode:"all"}),p=n=>{let s=x.length;r===s-1?console.log(n):c(r+1)},h=()=>{c(r-1)};return e("div",{children:e(F,{title:"Customer Form",children:e("div",{children:[e("div",{className:"flex z-[5] items-center relative justify-center md:mx-8",children:x.map((n,s)=>e("div",{className:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none group",children:[e("div",{className:`${r>=s?"bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"}  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`,children:r<=s?e("span",{children:[" ",s+1]},void 0,!0,{fileName:a,lineNumber:133,columnNumber:21},void 0):e("span",{className:"text-3xl",children:e(P,{icon:"bx:check-double"},void 0,!1,{fileName:a,lineNumber:136,columnNumber:23},void 0)},void 0,!1,{fileName:a,lineNumber:135,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:126,columnNumber:17},void 0),e("div",{className:`${r>=s?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-700"} absolute top-1/2 h-[2px] w-full`},void 0,!1,{fileName:a,lineNumber:141,columnNumber:17},void 0),e("div",{className:` ${r>=s?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`,children:e("span",{className:"w-max",children:n.title},void 0,!1,{fileName:a,lineNumber:153,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:147,columnNumber:17},void 0)]},s,!0,{fileName:a,lineNumber:122,columnNumber:15},void 0))},void 0,!1,{fileName:a,lineNumber:120,columnNumber:11},void 0),e("div",{className:"conten-box ",children:e("form",{onSubmit:v(p),children:[r===0&&e("div",{children:e("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[e(o,{label:"Username",type:"text",placeholder:"Type your User Name",name:"username",error:m.username,register:i},void 0,!1,{fileName:a,lineNumber:169,columnNumber:21},void 0),e(o,{label:"Full name",type:"text",placeholder:"Full name",name:"fullname",error:m.fullname,register:i},void 0,!1,{fileName:a,lineNumber:177,columnNumber:21},void 0),e(o,{label:"Email",type:"email",placeholder:"Type your email",name:"email",error:m.email,register:i},void 0,!1,{fileName:a,lineNumber:185,columnNumber:21},void 0),e(E,{label:"Phone Number",type:"text",placeholder:"Phone Number",name:"phone",register:i},void 0,!1,{fileName:a,lineNumber:193,columnNumber:21},void 0),e(o,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:m.password,hasicon:!0,register:i},void 0,!1,{fileName:a,lineNumber:202,columnNumber:21},void 0),e(o,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:m.confirmpass,register:i,hasicon:!0},void 0,!1,{fileName:a,lineNumber:211,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:163,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:162,columnNumber:17},void 0),r===1&&e("div",{children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5 pt-10",children:[e(o,{label:"First name",type:"text",placeholder:"First name",name:"fname",error:m.fname,register:i},void 0,!1,{fileName:a,lineNumber:232,columnNumber:21},void 0),e(o,{label:"Last name",type:"text",placeholder:"Last name",name:"lname",error:m.lname,register:i},void 0,!1,{fileName:a,lineNumber:240,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:226,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:225,columnNumber:17},void 0),r===2&&e("div",{children:e("div",{className:"grid grid-cols-1 gap-5 pt-10",children:e($,{label:"Address",type:"text",placeholder:"Write Address",name:"address",error:m.address,register:i},void 0,!1,{fileName:a,lineNumber:259,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:253,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:252,columnNumber:17},void 0),e("div",{className:`${r>0?"flex justify-between":" text-right"} mt-10`,children:[r!==0&&e(f,{text:"prev",className:"btn-dark",onClick:h},void 0,!1,{fileName:a,lineNumber:295,columnNumber:19},void 0),e(f,{text:r!==x.length-1?"next":"submit",className:"btn-dark",type:"submit"},void 0,!1,{fileName:a,lineNumber:301,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:290,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:160,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:159,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:119,columnNumber:9},void 0)},void 0,!1,{fileName:a,lineNumber:118,columnNumber:7},void 0)},void 0,!1,{fileName:a,lineNumber:117,columnNumber:5},void 0)};var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-wizard\\Vertical.jsx";const g=[{id:1,title:"Account Details"},{id:2,title:"Personal info-500"},{id:3,title:"Address"},{id:4,title:"Social Links"}];let k=u().shape({username:t().required(" User name is required"),fullname:t().required("Full name is required"),email:t().email("Email is not valid").required("Email is required"),phone:t().required("Phone number is required").matches(/^[0-9]{12}$/,"Phone number is not valid"),password:t().required("Password is required").min(8,"Password must be at least 8 characters"),confirmpass:t().required("Confirm Password is required").oneOf([y("password"),null],"Passwords must match")}),U=u().shape({fname:t().required(" First name is required"),lname:t().required(" Last name is required")}),_=u().shape({address:t().required(" Address is required")});const O=/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;let T=u().shape({fburl:t().required("Facebook url is required").matches(O,"Facebook url is not valid")});const D=()=>{const[r,c]=b.exports.useState(0);let d;switch(r){case 0:d=k;break;case 1:d=U;break;case 2:d=_;break;case 3:d=T;break;default:d=k}b.exports.useEffect(()=>{},[r]);const{register:i,formState:{errors:m},handleSubmit:v,watch:z}=q({resolver:S(d),mode:"all"}),p=n=>{let s=g.length;r===s-1?console.log(n):c(r+1)},h=()=>{c(r-1)};return e("div",{children:e(F,{title:"Vertical",children:e("div",{className:"grid gap-5 grid-cols-12",children:[e("div",{className:"lg:col-span-3 col-span-12",children:e("div",{className:"flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]",children:g.map((n,s)=>e("div",{className:"relative z-[1] flex-1 last:flex-none",children:[e("div",{className:`   ${r>=s?"bg-slate-900 text-white ring-slate-900 dark:bg-slate-900 dark:ring-slate-700  dark:ring-offset-slate-500 ring-offset-2":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 text-opacity-70 dark:bg-slate-700 dark:ring-slate-700"} 
            transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium
            `,children:r<=s?e("span",{children:[" ",s+1]},void 0,!0,{fileName:l,lineNumber:133,columnNumber:23},void 0):e("span",{className:"text-3xl",children:e(P,{icon:"bx:check-double"},void 0,!1,{fileName:l,lineNumber:136,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:135,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:123,columnNumber:19},void 0),e("div",{className:` ${r>=s?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-600"} absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]`},void 0,!1,{fileName:l,lineNumber:141,columnNumber:19},void 0),e("div",{className:` ${r>=s?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"} absolute top-0 ltr:left-full rtl:right-full ltr:pl-4 rtl:pr-4 text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full`,children:e("span",{className:"w-max block",children:n.title},void 0,!1,{fileName:l,lineNumber:155,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:148,columnNumber:19},void 0)]},s,!0,{fileName:l,lineNumber:122,columnNumber:17},void 0))},void 0,!1,{fileName:l,lineNumber:120,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:119,columnNumber:11},void 0),e("div",{className:"conten-box lg:col-span-9 col-span-12",children:e("form",{onSubmit:v(p),children:[r===0&&e("div",{children:e("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-3 md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Account Details"},void 0,!1,{fileName:l,lineNumber:168,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:167,columnNumber:21},void 0),e(o,{label:"Username",type:"text",placeholder:"Type your User Name",name:"username",error:m.username,register:i},void 0,!1,{fileName:l,lineNumber:172,columnNumber:21},void 0),e(o,{label:"Full name",type:"text",placeholder:"Full name",name:"fullname",error:m.fullname,register:i},void 0,!1,{fileName:l,lineNumber:180,columnNumber:21},void 0),e(o,{label:"Email",type:"email",placeholder:"Type your email",name:"email",error:m.email,register:i},void 0,!1,{fileName:l,lineNumber:188,columnNumber:21},void 0),e(E,{label:"Phone Number",type:"text",prepend:"MY (+6)",placeholder:"Phone Number",name:"phone",error:m.phone,register:i},void 0,!1,{fileName:l,lineNumber:196,columnNumber:21},void 0),e(o,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"password",error:m.password,hasicon:!0,register:i},void 0,!1,{fileName:l,lineNumber:205,columnNumber:21},void 0),e(o,{label:"Confirm Password",type:"password",placeholder:"Password",name:"confirmpass",error:m.confirmpass,register:i,hasicon:!0},void 0,!1,{fileName:l,lineNumber:214,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:166,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:165,columnNumber:17},void 0),r===1&&e("div",{children:e("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Personal info-500"},void 0,!1,{fileName:l,lineNumber:231,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:230,columnNumber:21},void 0),e(o,{label:"First name",type:"text",placeholder:"First name",name:"fname",error:m.fname,register:i},void 0,!1,{fileName:l,lineNumber:235,columnNumber:21},void 0),e(o,{label:"Last name",type:"text",placeholder:"Last name",name:"lname",error:m.lname,register:i},void 0,!1,{fileName:l,lineNumber:243,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:229,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:228,columnNumber:17},void 0),r===2&&e("div",{children:e("div",{className:"grid grid-cols-1 gap-5",children:[e("div",{className:"",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Address"},void 0,!1,{fileName:l,lineNumber:258,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:257,columnNumber:21},void 0),e($,{label:"Address",type:"text",placeholder:"Write Address",name:"address",error:m.address,register:i},void 0,!1,{fileName:l,lineNumber:262,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:256,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:255,columnNumber:17},void 0),r===3&&e("div",{children:e("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e("div",{className:"lg:col-span-3 md:col-span-2 col-span-1",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6",children:"Enter Your Address"},void 0,!1,{fileName:l,lineNumber:277,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:276,columnNumber:21},void 0),e(o,{label:"Facebook",type:"text",placeholder:"https://www.facebook.com/profile",name:"fburl",error:m.fburl,register:i},void 0,!1,{fileName:l,lineNumber:281,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:275,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:274,columnNumber:17},void 0),e("div",{className:`${r>0?"flex justify-between":" text-right"} mt-10`,children:[r!==0&&e(f,{text:"prev",className:"btn-dark",onClick:h},void 0,!1,{fileName:l,lineNumber:299,columnNumber:19},void 0),e(f,{text:r!==g.length-1?"next":"submit",className:"btn-dark",type:"submit"},void 0,!1,{fileName:l,lineNumber:305,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:293,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:163,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:162,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:118,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:117,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:116,columnNumber:5},void 0)};var N="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\form-wizard\\index.jsx";const Z=()=>e("div",{className:" space-y-5",children:[e("div",{children:e(D,{},void 0,!1,{fileName:N,lineNumber:9,columnNumber:9},void 0)},void 0,!1,{fileName:N,lineNumber:8,columnNumber:7},void 0),e("div",{children:e(C,{},void 0,!1,{fileName:N,lineNumber:12,columnNumber:9},void 0)},void 0,!1,{fileName:N,lineNumber:11,columnNumber:7},void 0)]},void 0,!0,{fileName:N,lineNumber:7,columnNumber:5},void 0);export{Z as default};
