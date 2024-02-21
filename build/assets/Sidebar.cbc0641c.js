import{c as t,j as e,L as l,I as c}from"./index.4de300c8.js";import{I as i}from"./InputGroup.30129416.js";import{B as r}from"./Button.467e9984.js";const n="data:image/png;base64,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",d="/assets/t-2.32f10764.png",o="/assets/t-3.83a99eb4.png",m=[{cta:"Graphic Designer (214) "},{cta:"Engineering Jobs (514) "},{cta:"Mainframe Jobs (554)"},{cta:"Legal Jobs (457)"},{cta:"IT Jobs (1254) "},{cta:"R&D Jobs (554) "},{cta:"Government Jobs (350) "},{cta:"PSL Jobs (221)"}],A=[{img:n},{img:d},{img:o}],x=[{title:"Business",link:"#"},{title:"Consulting",link:"#"},{title:"Photographic",link:"#"},{title:"Investment",link:"#"},{title:"Camera",link:"#"},{title:"Assurance",link:"#"},{title:"Secutity",link:"#"}],h=()=>t("div",{className:"space-y-5 divide-y divide-slate-100 dark:divide-slate-700 -mx-6",children:[e("div",{className:"px-6",children:e(i,{type:"text",placeholder:"Search....",append:e(r,{icon:"heroicons-outline:search",className:"btn-dark dark:bg-slate-600"})})}),t("div",{className:"pt-4 px-6",children:[e("h4",{className:"text-slate-600 dark:text-slate-300 text-xl font-medium mb-4",children:"Latest Blogs Post"}),e("ul",{className:"list-item space-y-4",children:A.map((s,a)=>e("li",{children:t("div",{className:"flex space-x-4 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-20 w-20",children:e("img",{src:s.img,alt:"",className:"block w-full h-full"})})}),t("div",{className:"flex-1 flex flex-col",children:[t("h4",{className:"text-sm text-slate-600 font-regular leading-5 mb-4",children:[e(l,{to:"#",children:"Lorem ipsum dolor sit amet consectetur adipiscing"}),"."]}),e("span",{className:"text-xs text-slate-400",children:e(l,{to:"#",children:"Oct 09, 2021"})})]})]})},a))})]}),t("div",{className:"pt-4 px-6",children:[e("h4",{className:"text-slate-600 dark:text-slate-300 text-xl font-medium mb-4",children:"Category"}),e("ul",{className:"list-item space-y-6",children:m.map((s,a)=>e("li",{children:t(l,{to:"#",className:"flex space-x-1 items-start leading-[1] text-sm text-slate-500 dark:text-slate-300 hover:text-slate-900 transition duration-150 rtl:space-x-reverse",children:[e("span",{className:"text-sm",children:e(c,{icon:"heroicons:chevron-right-solid"})}),e("span",{children:s.cta})]})},a))})]}),t("div",{className:"pt-4 px-6",children:[e("h4",{className:"text-slate-600 dark:text-slate-300 text-xl font-medium mb-4",children:"Popular tags"}),e("ul",{className:"flex flex-wrap",children:x.map((s,a)=>e("li",{className:"mr-2 mb-2",children:e(l,{to:s.link,className:"text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 py-1 px-3 rounded-full hover:bg-slate-900 hover:text-white transition duration-150",children:e("span",{children:s.title})})},a))})]}),t("div",{className:"mx-6 bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 space-y-4",children:[e("h4",{className:"text-xl font-medium text-white",children:"Subscribe to our blog"}),e("div",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectet ur adipiscing elit."}),t("form",{action:"#",className:"space-y-4",children:[e("input",{type:"text",placeholder:"Enter your email",className:"form-control py-2 bg-transparent border-secondary-500 text-white placeholder:text-slate-400"}),e("button",{type:"button",className:"btn btn-light btn-sm w-full",children:"Subscribe"})]})]})]});export{h as S};
