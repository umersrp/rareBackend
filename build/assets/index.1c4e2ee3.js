import{v as V,w as I,aT as z,aO as j,B as y,x as B,y as T,j as e,b4 as S,aV as A,ap as H,k as q,aW as U,aX as W,aY as Z,aZ as J,ay as X,b5 as Y,a$ as G,b6 as L,b7 as K,I as c,b8 as Q,b9 as ee,ba as le,a as D,bb as M,D as ie,q as ae,bc as re,T as g,r as $,F as oe,s as me,e as _,S as O,bd as se,be as ne,bf as te,bg as ue}from"./index.e476e824.js";import{B as R}from"./Button.b3cc2ec2.js";import{B as de}from"./Badge.554310d7.js";import{M as ce}from"./Modal.c6f6ddf6.js";import{C as P}from"./Checkbox.f529bb37.js";import{L as Ne}from"./ListLoading.fccff085.js";var d="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\ComposeEmail.jsx";const be=V({title:I().required("Title is required"),assign:z().required("Assignee is required")}).required(),ve={multiValue:(a,i)=>i.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,i)=>i.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,i)=>i.data.isFixed?{...a,display:"none"}:a,option:(a,i)=>({...a,fontSize:"14px"})},fe=[{value:"mahedi",label:"Mahedi Amin",image:U},{value:"sovo",label:"Sovo Haldar",image:W},{value:"rakibul",label:"Rakibul Islam",image:Z},{value:"pritom",label:"Pritom Miha",image:J}],pe=({data:a,...i})=>e(X.Option,{...i,children:e("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"},void 0,!1,{fileName:d,lineNumber:62,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:61,columnNumber:11},void 0)},void 0,!1,{fileName:d,lineNumber:60,columnNumber:9},void 0),e("span",{className:"flex-1",children:a.label},void 0,!1,{fileName:d,lineNumber:69,columnNumber:9},void 0)]},void 0,!0,{fileName:d,lineNumber:59,columnNumber:7},void 0)},void 0,!1,{fileName:d,lineNumber:58,columnNumber:5},void 0),he=()=>{var v,N;const{emailModal:a}=j(r=>r.email),i=y(),{register:u,control:f,formState:{errors:b},handleSubmit:p}=B({resolver:T(be),mode:"all"});return e("div",{children:e(ce,{title:`Compose Eamil\r
`,activeModal:a,onClose:()=>i(S(!1)),children:e("form",{onSubmit:p(r=>{i(Y({id:G(),title:r.title,image:r.assign[0].image,desc:"Hello World!",isfav:!1,sent:!1,draft:!0,spam:!1,trash:!1,personal:!1,social:!0,promotions:!0,lastime:"12:20 pm",business:!0,is_checked:!1,isread:!1,isspam:!0,isdelate:!1})),r.title="",r.assign="",i(S(!1))}),className:"space-y-4 ",children:[e("div",{className:b.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"To"},void 0,!1,{fileName:d,lineNumber:127,columnNumber:13},void 0),e(A,{name:"assign",control:f,render:({field:r})=>e(H,{...r,options:fe,styles:ve,isMulti:!0,className:"react-select",classNamePrefix:"select",components:{Option:pe},id:"icon_s"},void 0,!1,{fileName:d,lineNumber:134,columnNumber:17},void 0)},void 0,!1,{fileName:d,lineNumber:130,columnNumber:13},void 0),b.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((v=b.assign)==null?void 0:v.message)||((N=b.assign)==null?void 0:N.label.message)},void 0,!1,{fileName:d,lineNumber:149,columnNumber:15},void 0)]},void 0,!0,{fileName:d,lineNumber:126,columnNumber:11},void 0),e(q,{name:"title",label:"Subject",type:"text",placeholder:"Enter title",register:u,error:b.title},void 0,!1,{fileName:d,lineNumber:154,columnNumber:11},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:d,lineNumber:166,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:165,columnNumber:11},void 0)]},void 0,!0,{fileName:d,lineNumber:125,columnNumber:9},void 0)},void 0,!1,{fileName:d,lineNumber:119,columnNumber:7},void 0)},void 0,!1,{fileName:d,lineNumber:118,columnNumber:5},void 0)};var s="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\Emails.jsx";const xe=({email:a})=>{const{isread:i,image:u,title:f,desc:b,lastime:p,is_checked:n,isfav:v,id:N}=a,r=y(),h=x=>F=>{r(ee(x))},C=x=>F=>{r(le(x))};return e("li",{className:"flex px-7 space-x-6 group md:py-6 py-3 relative cursor-pointer hover:bg-slate-50 dark:hover:bg-transparent group items-center rtl:space-x-reverse",onClick:()=>{r(L(a)),r(K(N))},children:[e("div",{children:e(P,{value:n,onChange:h(N),name:"email"},void 0,!1,{fileName:s,lineNumber:39,columnNumber:9},void 0)},void 0,!1,{fileName:s,lineNumber:38,columnNumber:7},void 0),e("div",{children:e("label",{children:[e("input",{type:"checkbox",checked:v,className:"hidden",onChange:C(N)},void 0,!1,{fileName:s,lineNumber:44,columnNumber:11},void 0),v?e(c,{icon:"heroicons-solid:star",className:"text-xl leading-[1] text-[#FFCE30] relative cursor-pointer"},void 0,!1,{fileName:s,lineNumber:51,columnNumber:13},void 0):e(c,{icon:"heroicons:star",className:"text-xl leading-[1] relative cursor-pointer text-slate-400"},void 0,!1,{fileName:s,lineNumber:56,columnNumber:13},void 0)]},void 0,!0,{fileName:s,lineNumber:43,columnNumber:9},void 0)},void 0,!1,{fileName:s,lineNumber:42,columnNumber:7},void 0),e("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full text-white",children:e("img",{src:u,alt:"",className:"block w-full h-full object-cover"},void 0,!1,{fileName:s,lineNumber:67,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:66,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:65,columnNumber:9},void 0),e("div",{className:` flex-1 text-sm min-w-max  ${i===!0?"font-normal text-slate-800 dark:text-slate-400":"font-medium text-slate-900 dark:text-slate-300"}
    `,children:"Esther Howard"},void 0,!1,{fileName:s,lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:64,columnNumber:7},void 0),e("p",{className:"truncate",children:[e("span",{className:` text-sm
            ${i===!0?"font-normal dark:text-slate-300":"font-medium text-slate-900 dark:text-slate-300"}
          `,children:f.slice(0,18)},void 0,!1,{fileName:s,lineNumber:87,columnNumber:9},void 0),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 font-normal",children:b},void 0,!1,{fileName:s,lineNumber:99,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:86,columnNumber:7},void 0),e("div",{className:"grow"},void 0,!1,{fileName:s,lineNumber:104,columnNumber:7},void 0),e("span",{children:[e("div",{className:"flex-1 flex space-x-4 items-center rtl:space-x-reverse",children:e("span",{className:"flex-none space-x-2 text-xs text-slate-900 dark:text-slate-300 rtl:space-x-reverse",children:e("span",{children:p},void 0,!1,{fileName:s,lineNumber:109,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:108,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:107,columnNumber:9},void 0),e("span",{className:"absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 dark:text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 bg-white h-full w-[100px] flex flex-col items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible",onClick:x=>{r(Q(N)),x.stopPropagation()},children:e(c,{icon:"heroicons-outline:trash",className:"transition duration-150 hover:text-danger-500"},void 0,!1,{fileName:s,lineNumber:119,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:112,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:106,columnNumber:7},void 0)]},void 0,!0,{fileName:s,lineNumber:30,columnNumber:5},void 0)};var k="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\Topfilter.jsx";const ge=({filter:a,item:i,onClick:u})=>e("li",{children:e("label",{onClick:u,className:` flex items-center cursor-pointer px-2 py-3 rounded
                   ${a===i.value?"bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200":"  text-slate-600 dark:text-slate-300 "}
                      `,children:[e("div",{className:"flex-1 flex space-x-2 rtl:space-x-reverse",children:[e("span",{className:` text-xl
                        ${a===i.value?" text-slate-900 dark:text-slate-100":" text-slate-400 dark:text-slate-400"}
                `,children:e(c,{icon:i.icon},void 0,!1,{fileName:k,lineNumber:26,columnNumber:13},void 0)},void 0,!1,{fileName:k,lineNumber:17,columnNumber:11},void 0),e("span",{className:` capitalize text-sm
                        ${a===i.value?" font-medium":"font-normal"}
                      `,children:i.name},void 0,!1,{fileName:k,lineNumber:28,columnNumber:11},void 0)]},void 0,!0,{fileName:k,lineNumber:16,columnNumber:9},void 0),e("span",{className:"flex-none font-normal capitalize text-sm",children:i.count},void 0,!1,{fileName:k,lineNumber:38,columnNumber:9},void 0)]},void 0,!0,{fileName:k,lineNumber:6,columnNumber:7},void 0)},void 0,!1,{fileName:k,lineNumber:5,columnNumber:5},void 0);var E="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\BottomFilter.jsx";const ke=({onClick:a,item:i,filter:u})=>e("li",{onClick:a,className:` flex space-x-2 
                      text-sm capitalize py-2 cursor-pointer
                       items-center rtl:space-x-reverse
                        ${u===i.value?"font-medium text-slate-800 dark:text-slate-300":"font-normal text-slate-600 dark:text-slate-300"}
                        `,children:[e("span",{className:`
                                 ${i.value==="personal"?"bg-danger-500 ring-danger-500":""}
                  ${i.value==="social"?"bg-success-500 ring-success-500":""}
                  ${i.value==="promotions"?"bg-warning-500 ring-warning-500":""}
                  ${i.value==="business"?"bg-primary-500 ring-primary-500":""}
                                ${u===i.value?"ring-4":"ring-0"}
                                
                  inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150 `},void 0,!1,{fileName:E,lineNumber:17,columnNumber:7},void 0),e("span",{className:"transition duration-150",children:i.name},void 0,!1,{fileName:E,lineNumber:43,columnNumber:7},void 0)]},void 0,!0,{fileName:E,lineNumber:5,columnNumber:5},void 0);var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\EmailHeader.jsx";const we=({onChange:a,checkboxChange:i,emails:u})=>{const{width:f,breakpoints:b}=D(),{mobileEmailSidebar:p}=j(r=>r.email),n=[{name:"Reset Sort",icon:"heroicons-outline:sort-ascending"},{name:"Sort A-Z ",icon:"heroicons-outline:sort-ascending"},{name:" Sort Z-A ",icon:"heroicons-outline:sort-descending"}],v=y(),N=()=>{v(re())};return e("div",{className:"md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md",children:[e("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[f<b.lg&&e("div",{className:"md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900\r dark:text-slate-400 flex flex-col justify-center items-center md:text-base\r text-sm rounded-full cursor-pointer",onClick:()=>v(M(!p)),children:e(c,{icon:"heroicons-outline:menu-alt-2"},void 0,!1,{fileName:t,lineNumber:44,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:36,columnNumber:11},void 0),e("div",{className:"max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse",children:[e("div",{children:e(P,{value:u.every(r=>r.is_checked),onChange:N},void 0,!1,{fileName:t,lineNumber:49,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:48,columnNumber:11},void 0),e("div",{children:e("input",{onChange:a,type:"text",placeholder:"Search Email",className:"bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"},void 0,!1,{fileName:t,lineNumber:56,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:55,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:47,columnNumber:9},void 0)]},void 0,!0,{fileName:t,lineNumber:34,columnNumber:7},void 0),e("div",{className:"md:block hidden",children:e(ie,{classMenuItems:"w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100",children:e(c,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:t,lineNumber:70,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:69,columnNumber:13},void 0),children:n.map((r,h)=>e(ae.Item,{children:e("div",{className:`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(c,{icon:r.icon},void 0,!1,{fileName:t,lineNumber:83,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:82,columnNumber:17},void 0),e("span",{children:r.name},void 0,!1,{fileName:t,lineNumber:85,columnNumber:17},void 0)]},void 0,!0,{fileName:t,lineNumber:76,columnNumber:15},void 0)},h,!1,{fileName:t,lineNumber:75,columnNumber:13},void 0))},void 0,!1,{fileName:t,lineNumber:66,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:65,columnNumber:7},void 0)]},void 0,!0,{fileName:t,lineNumber:33,columnNumber:5},void 0)},ye="/assets/inbox-1.44186c27.png",Ce="/assets/inbox-2.6e8563db.png",Fe="/assets/inbox-3.2f1cea25.png";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\EmailDetails.jsx";const je=()=>{const a=y(),{singleEmail:i}=j(u=>u.email);return e("div",{className:"absolute left-0 top-0 w-full h-full bg-white dark:bg-slate-800 z-[55] rounded-md p-6 overflow-y-auto",children:[e("div",{className:"flex items-center border-b border-slate-100 dark:border-slate-700 -mx-6 pb-6 mb-6 px-6",children:[e("div",{className:"flex-1",children:e(g,{content:"Back",placement:"top",arrow:!0,children:e("button",{className:"email-icon",type:"button",onClick:()=>{a(L())},children:e(c,{icon:"heroicons-outline:arrow-left"},void 0,!1,{fileName:l,lineNumber:30,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:23,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:21,columnNumber:9},void 0),e("div",{className:"flex-none flex items-center space-x-4 rtl:space-x-reverse",children:[e(g,{placement:"top",arrow:!0,content:"Forward",children:e("button",{className:"email-icon",type:"button",children:e(c,{icon:"heroicons-outline:logout"},void 0,!1,{fileName:l,lineNumber:37,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:11},void 0),e(g,{placement:"top",arrow:!0,content:"Favorite",children:e("button",{className:"email-icon",children:e(c,{icon:"heroicons-outline:star"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:41,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:40,columnNumber:11},void 0),e(g,{placement:"top",arrow:!0,content:"Archive",children:e("button",{className:"email-icon",children:e(c,{icon:"heroicons-outline:archive"},void 0,!1,{fileName:l,lineNumber:47,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:45,columnNumber:11},void 0),e(g,{placement:"top",arrow:!0,content:"Print",children:e("button",{className:"email-icon",children:e(c,{icon:"heroicons-outline:printer"},void 0,!1,{fileName:l,lineNumber:52,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:51,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:50,columnNumber:11},void 0),e(g,{placement:"top",arrow:!0,content:"Delete",children:e("button",{className:"email-icon",children:e(c,{icon:"heroicons-outline:trash"},void 0,!1,{fileName:l,lineNumber:57,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:56,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:55,columnNumber:11},void 0),e(g,{placement:"top",arrow:!0,content:"Action",children:e("button",{className:"email-icon",children:e(c,{icon:"heroicons-outline:dots-horizontal"},void 0,!1,{fileName:l,lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:61,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:60,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:34,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:20,columnNumber:7},void 0),e("div",{children:[e("div",{className:"text-lg font-medium text-slate-600 dark:text-slate-300",children:"Pay bills & win up to 600$ Cashback!"},void 0,!1,{fileName:l,lineNumber:69,columnNumber:9},void 0),e("div",{className:"flex space-x-3 pt-4 pb-6 items-start rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full text-white",children:e("img",{src:i.image,alt:"",className:"block w-full h-full object-cover"},void 0,!1,{fileName:l,lineNumber:75,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:74,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:73,columnNumber:11},void 0),e("div",{className:"flex-1",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300 font-medium leading-4",children:"Esther Howard"},void 0,!1,{fileName:l,lineNumber:83,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:82,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:72,columnNumber:9},void 0),e("div",{className:"text-sm text-slate-600 dark:text-slate-300 font-normal",children:["Hi Jane Cooper,",e("br",{},void 0,!1,{fileName:l,lineNumber:90,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:91,columnNumber:11},void 0),`Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog`,e("br",{},void 0,!1,{fileName:l,lineNumber:97,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:98,columnNumber:11},void 0),"posr with a bang With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.",e("br",{},void 0,!1,{fileName:l,lineNumber:104,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:105,columnNumber:11},void 0),"Best regards, ",e("br",{},void 0,!1,{fileName:l,lineNumber:106,columnNumber:25},void 0),"Esther Howard"]},void 0,!0,{fileName:l,lineNumber:88,columnNumber:9},void 0),e("div",{className:"border-t border-b py-4 my-6 border-slate-100 dark:border-slate-700 flex flex-wrap space-x-5 rtl:space-x-reverse",children:[e("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:ye,alt:"",className:"block w-full h-full object-cover"},void 0,!1,{fileName:l,lineNumber:112,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:111,columnNumber:13},void 0),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"},void 0,!1,{fileName:l,lineNumber:118,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:110,columnNumber:11},void 0),e("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:Ce,alt:"",className:"block w-full h-full object-cover"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:13},void 0),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"},void 0,!1,{fileName:l,lineNumber:131,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:123,columnNumber:11},void 0),e("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:Fe,alt:"",className:"block w-full h-full object-cover"},void 0,!1,{fileName:l,lineNumber:138,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:137,columnNumber:13},void 0),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"},void 0,!1,{fileName:l,lineNumber:144,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:136,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:109,columnNumber:9},void 0),e("div",{children:e(R,{icon:"heroicons-outline:chat-alt-2",text:"Reply",className:"bg-slate-100 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm "},void 0,!1,{fileName:l,lineNumber:151,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:150,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:19,columnNumber:5},void 0)};var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\email\\index.jsx";const De=()=>{var x,F;const{width:a,breakpoints:i}=D(),u=y(),{mobileEmailSidebar:f,emails:b,search:p,filter:n,singleModal:v}=j(o=>o.email),[N,r]=$.exports.useState(!1),h=b.filter(o=>p?o.title.toLowerCase().includes(p.toLowerCase()):!0).filter(o=>{if(n==="all")return o;if(n==="fav")return o.isfav;if(n==="sent")return o.sent;if(n==="personal")return o.personal;if(n==="business")return o.business;if(n==="drafts")return o.draft;if(n==="spam"||n==="social"||n==="promotions")return o.isspam;if(n==="trash")return o.isdelate});$.exports.useEffect(()=>{r(!0),setTimeout(()=>{r(!1)},500),a<i.lg&&f&&u(M(!1))},[n]);const C=o=>{u(ue(o))};return e(oe,{children:[e(me,{},void 0,!1,{fileName:m,lineNumber:79,columnNumber:7},void 0),e("div",{className:"flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse",children:[e("div",{className:`transition-all duration-150 flex-none min-w-[260px] 
        ${a<i.lg?"absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]"}
        ${a<i.lg&&f?"left-0 ":"-left-full "}
        `,children:e(_,{bodyClass:" py-6 h-full flex flex-col",className:"h-full",children:[e("div",{className:"flex-1 h-full px-6",children:e(R,{icon:"heroicons-outline:plus",text:"Compose",className:"btn-dark w-full block  ",onClick:()=>u(S(!0))},void 0,!1,{fileName:m,lineNumber:98,columnNumber:15},void 0)},void 0,!1,{fileName:m,lineNumber:97,columnNumber:13},void 0),e(O,{className:"h-full px-6 ",children:[e("ul",{className:"list mt-6",children:(x=se)==null?void 0:x.map((o,w)=>e(ge,{item:o,filter:n,onClick:()=>C(o.value)},w,!1,{fileName:m,lineNumber:109,columnNumber:19},void 0))},void 0,!1,{fileName:m,lineNumber:107,columnNumber:15},void 0),e("div",{className:"block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase",children:"Tags"},void 0,!1,{fileName:m,lineNumber:117,columnNumber:15},void 0),e("ul",{children:(F=ne)==null?void 0:F.map((o,w)=>e(ke,{item:o,filter:n,onClick:()=>C(o.value)},w,!1,{fileName:m,lineNumber:122,columnNumber:19},void 0))},void 0,!1,{fileName:m,lineNumber:120,columnNumber:15},void 0)]},void 0,!0,{fileName:m,lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:m,lineNumber:96,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:82,columnNumber:9},void 0),a<i.lg&&f&&e("div",{className:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter\r backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"},void 0,!1,{fileName:m,lineNumber:135,columnNumber:11},void 0),e("div",{className:"flex-1 md:w-[calc(100%-320px)]",children:e(_,{bodyClass:"p-0  h-full relative",className:"h-full",children:[e(we,{onChange:o=>u(te(o.target.value)),emails:h},void 0,!1,{fileName:m,lineNumber:142,columnNumber:13},void 0),e(O,{className:"h-full all-todos overflow-x-hidden",children:[N&&e(Ne,{count:h.length},void 0,!1,{fileName:m,lineNumber:147,columnNumber:29},void 0),!N&&e("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full",children:[h.map((o,w)=>e(xe,{email:o},w,!1,{fileName:m,lineNumber:151,columnNumber:21},void 0)),h.length===0&&e("li",{className:"mx-6 mt-6",children:e(de,{label:"No Result Found",className:"bg-danger-500 text-white w-full block text-start"},void 0,!1,{fileName:m,lineNumber:155,columnNumber:23},void 0)},void 0,!1,{fileName:m,lineNumber:154,columnNumber:21},void 0)]},void 0,!0,{fileName:m,lineNumber:149,columnNumber:17},void 0)]},void 0,!0,{fileName:m,lineNumber:146,columnNumber:13},void 0),v&&e(je,{},void 0,!1,{fileName:m,lineNumber:164,columnNumber:29},void 0)]},void 0,!0,{fileName:m,lineNumber:141,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:140,columnNumber:9},void 0)]},void 0,!0,{fileName:m,lineNumber:81,columnNumber:7},void 0),e(he,{},void 0,!1,{fileName:m,lineNumber:168,columnNumber:7},void 0)]},void 0,!0)};export{De as default};
