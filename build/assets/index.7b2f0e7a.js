import{w as z,x as I,aU as L,aP as k,E as g,y as A,z as q,j as e,b5 as w,c as l,aW as B,aq as D,l as T,aX as H,aY as P,aZ as R,a_ as _,az as W,b6 as O,b0 as V,b7 as E,b8 as Z,I as o,b9 as J,ba as U,bb as X,a as F,bc as $,D as Y,q as G,bd as K,T as b,r as y,F as Q,t as ee,C,S,be as te,bf as ae,bg as le,bh as se}from"./index.9ea1484a.js";import{B as M}from"./Button.d82f7574.js";import{B as re}from"./Badge.e08fa7e5.js";import{M as ne}from"./Modal.2a300ea9.js";import{C as j}from"./Checkbox.adf5839d.js";import{L as ie}from"./ListLoading.be9417d4.js";const oe=z({title:I().required("Title is required"),assign:L().required("Assignee is required")}).required(),ce={multiValue:(a,t)=>t.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,t)=>t.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,t)=>t.data.isFixed?{...a,display:"none"}:a,option:(a,t)=>({...a,fontSize:"14px"})},de=[{value:"mahedi",label:"Mahedi Amin",image:H},{value:"sovo",label:"Sovo Haldar",image:P},{value:"rakibul",label:"Rakibul Islam",image:R},{value:"pritom",label:"Pritom Miha",image:_}],me=({data:a,...t})=>e(W.Option,{...t,children:l("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:a.label})]})}),he=()=>{var m,c;const{emailModal:a}=k(s=>s.email),t=g(),{register:i,control:h,formState:{errors:d},handleSubmit:u}=A({resolver:q(oe),mode:"all"});return e("div",{children:e(ne,{title:`Compose Eamil\r
`,activeModal:a,onClose:()=>t(w(!1)),children:l("form",{onSubmit:u(s=>{t(O({id:V(),title:s.title,image:s.assign[0].image,desc:"Hello World!",isfav:!1,sent:!1,draft:!0,spam:!1,trash:!1,personal:!1,social:!0,promotions:!0,lastime:"12:20 pm",business:!0,is_checked:!1,isread:!1,isspam:!0,isdelate:!1})),s.title="",s.assign="",t(w(!1))}),className:"space-y-4 ",children:[l("div",{className:d.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"To"}),e(B,{name:"assign",control:h,render:({field:s})=>e(D,{...s,options:de,styles:ce,isMulti:!0,className:"react-select",classNamePrefix:"select",components:{Option:me},id:"icon_s"})}),d.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((m=d.assign)==null?void 0:m.message)||((c=d.assign)==null?void 0:c.label.message)})]}),e(T,{name:"title",label:"Subject",type:"text",placeholder:"Enter title",register:i,error:d.title}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})]})})})},ue=({email:a})=>{const{isread:t,image:i,title:h,desc:d,lastime:u,is_checked:n,isfav:m,id:c}=a,s=g(),p=x=>N=>{s(U(x))},v=x=>N=>{s(X(x))};return l("li",{className:"flex px-7 space-x-6 group md:py-6 py-3 relative cursor-pointer hover:bg-slate-50 dark:hover:bg-transparent group items-center rtl:space-x-reverse",onClick:()=>{s(E(a)),s(Z(c))},children:[e("div",{children:e(j,{value:n,onChange:p(c),name:"email"})}),e("div",{children:l("label",{children:[e("input",{type:"checkbox",checked:m,className:"hidden",onChange:v(c)}),m?e(o,{icon:"heroicons-solid:star",className:"text-xl leading-[1] text-[#FFCE30] relative cursor-pointer"}):e(o,{icon:"heroicons:star",className:"text-xl leading-[1] relative cursor-pointer text-slate-400"})]})}),l("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full text-white",children:e("img",{src:i,alt:"",className:"block w-full h-full object-cover"})})}),e("div",{className:` flex-1 text-sm min-w-max  ${t===!0?"font-normal text-slate-800 dark:text-slate-400":"font-medium text-slate-900 dark:text-slate-300"}
    `,children:"Esther Howard"})]}),l("p",{className:"truncate",children:[e("span",{className:` text-sm
            ${t===!0?"font-normal dark:text-slate-300":"font-medium text-slate-900 dark:text-slate-300"}
          `,children:h.slice(0,18)}),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 font-normal",children:d})]}),e("div",{className:"grow"}),l("span",{children:[e("div",{className:"flex-1 flex space-x-4 items-center rtl:space-x-reverse",children:e("span",{className:"flex-none space-x-2 text-xs text-slate-900 dark:text-slate-300 rtl:space-x-reverse",children:e("span",{children:u})})}),e("span",{className:"absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 dark:text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 bg-white h-full w-[100px] flex flex-col items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible",onClick:x=>{s(J(c)),x.stopPropagation()},children:e(o,{icon:"heroicons-outline:trash",className:"transition duration-150 hover:text-danger-500"})})]})]})},pe=({filter:a,item:t,onClick:i})=>e("li",{children:l("label",{onClick:i,className:` flex items-center cursor-pointer px-2 py-3 rounded
                   ${a===t.value?"bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200":"  text-slate-600 dark:text-slate-300 "}
                      `,children:[l("div",{className:"flex-1 flex space-x-2 rtl:space-x-reverse",children:[e("span",{className:` text-xl
                        ${a===t.value?" text-slate-900 dark:text-slate-100":" text-slate-400 dark:text-slate-400"}
                `,children:e(o,{icon:t.icon})}),e("span",{className:` capitalize text-sm
                        ${a===t.value?" font-medium":"font-normal"}
                      `,children:t.name})]}),e("span",{className:"flex-none font-normal capitalize text-sm",children:t.count})]})}),xe=({onClick:a,item:t,filter:i})=>l("li",{onClick:a,className:` flex space-x-2 
                      text-sm capitalize py-2 cursor-pointer
                       items-center rtl:space-x-reverse
                        ${i===t.value?"font-medium text-slate-800 dark:text-slate-300":"font-normal text-slate-600 dark:text-slate-300"}
                        `,children:[e("span",{className:`
                                 ${t.value==="personal"?"bg-danger-500 ring-danger-500":""}
                  ${t.value==="social"?"bg-success-500 ring-success-500":""}
                  ${t.value==="promotions"?"bg-warning-500 ring-warning-500":""}
                  ${t.value==="business"?"bg-primary-500 ring-primary-500":""}
                                ${i===t.value?"ring-4":"ring-0"}
                                
                  inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150 `}),e("span",{className:"transition duration-150",children:t.name})]}),be=({onChange:a,checkboxChange:t,emails:i})=>{const{width:h,breakpoints:d}=F(),{mobileEmailSidebar:u}=k(s=>s.email),n=[{name:"Reset Sort",icon:"heroicons-outline:sort-ascending"},{name:"Sort A-Z ",icon:"heroicons-outline:sort-ascending"},{name:" Sort Z-A ",icon:"heroicons-outline:sort-descending"}],m=g(),c=()=>{m(K())};return l("div",{className:"md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md",children:[l("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[h<d.lg&&e("div",{className:"md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900\r dark:text-slate-400 flex flex-col justify-center items-center md:text-base\r text-sm rounded-full cursor-pointer",onClick:()=>m($(!u)),children:e(o,{icon:"heroicons-outline:menu-alt-2"})}),l("div",{className:"max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse",children:[e("div",{children:e(j,{value:i.every(s=>s.is_checked),onChange:c})}),e("div",{children:e("input",{onChange:a,type:"text",placeholder:"Search Email",className:"bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"})})]})]}),e("div",{className:"md:block hidden",children:e(Y,{classMenuItems:"w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100",children:e(o,{icon:"heroicons-outline:dots-vertical"})}),children:n.map((s,p)=>e(G.Item,{children:l("div",{className:`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(o,{icon:s.icon})}),e("span",{children:s.name})]})},p))})})]})},fe="/assets/inbox-1.44186c27.png",ge="/assets/inbox-2.6e8563db.png",ve="/assets/inbox-3.2f1cea25.png",Ne=()=>{const a=g(),{singleEmail:t}=k(i=>i.email);return l("div",{className:"absolute left-0 top-0 w-full h-full bg-white dark:bg-slate-800 z-[55] rounded-md p-6 overflow-y-auto",children:[l("div",{className:"flex items-center border-b border-slate-100 dark:border-slate-700 -mx-6 pb-6 mb-6 px-6",children:[e("div",{className:"flex-1",children:e(b,{content:"Back",placement:"top",arrow:!0,children:e("button",{className:"email-icon",type:"button",onClick:()=>{a(E())},children:e(o,{icon:"heroicons-outline:arrow-left"})})})}),l("div",{className:"flex-none flex items-center space-x-4 rtl:space-x-reverse",children:[e(b,{placement:"top",arrow:!0,content:"Forward",children:e("button",{className:"email-icon",type:"button",children:e(o,{icon:"heroicons-outline:logout"})})}),e(b,{placement:"top",arrow:!0,content:"Favorite",children:e("button",{className:"email-icon",children:e(o,{icon:"heroicons-outline:star"})})}),e(b,{placement:"top",arrow:!0,content:"Archive",children:e("button",{className:"email-icon",children:e(o,{icon:"heroicons-outline:archive"})})}),e(b,{placement:"top",arrow:!0,content:"Print",children:e("button",{className:"email-icon",children:e(o,{icon:"heroicons-outline:printer"})})}),e(b,{placement:"top",arrow:!0,content:"Delete",children:e("button",{className:"email-icon",children:e(o,{icon:"heroicons-outline:trash"})})}),e(b,{placement:"top",arrow:!0,content:"Action",children:e("button",{className:"email-icon",children:e(o,{icon:"heroicons-outline:dots-horizontal"})})})]})]}),l("div",{children:[e("div",{className:"text-lg font-medium text-slate-600 dark:text-slate-300",children:"Pay bills & win up to 600$ Cashback!"}),l("div",{className:"flex space-x-3 pt-4 pb-6 items-start rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full text-white",children:e("img",{src:t.image,alt:"",className:"block w-full h-full object-cover"})})}),e("div",{className:"flex-1",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300 font-medium leading-4",children:"Esther Howard"})})]}),l("div",{className:"text-sm text-slate-600 dark:text-slate-300 font-normal",children:["Hi Jane Cooper,",e("br",{}),e("br",{}),`Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog`,e("br",{}),e("br",{}),"posr with a bang With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.",e("br",{}),e("br",{}),"Best regards, ",e("br",{}),"Esther Howard"]}),l("div",{className:"border-t border-b py-4 my-6 border-slate-100 dark:border-slate-700 flex flex-wrap space-x-5 rtl:space-x-reverse",children:[l("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:fe,alt:"",className:"block w-full h-full object-cover"})}),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"})]}),l("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:ge,alt:"",className:"block w-full h-full object-cover"})}),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"})]}),l("div",{className:"text-center",children:[e("div",{className:"h-[95px] w-[150px] rounded",children:e("img",{src:ve,alt:"",className:"block w-full h-full object-cover"})}),e("button",{className:"text-sm text-primary-500 mt-2",type:"button",children:"Download"})]})]}),e("div",{children:e(M,{icon:"heroicons-outline:chat-alt-2",text:"Reply",className:"bg-slate-100 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm "})})]})]})},Fe=()=>{var x,N;const{width:a,breakpoints:t}=F(),i=g(),{mobileEmailSidebar:h,emails:d,search:u,filter:n,singleModal:m}=k(r=>r.email),[c,s]=y.exports.useState(!1),p=d.filter(r=>u?r.title.toLowerCase().includes(u.toLowerCase()):!0).filter(r=>{if(n==="all")return r;if(n==="fav")return r.isfav;if(n==="sent")return r.sent;if(n==="personal")return r.personal;if(n==="business")return r.business;if(n==="drafts")return r.draft;if(n==="spam"||n==="social"||n==="promotions")return r.isspam;if(n==="trash")return r.isdelate});y.exports.useEffect(()=>{s(!0),setTimeout(()=>{s(!1)},500),a<t.lg&&h&&i($(!1))},[n]);const v=r=>{i(se(r))};return l(Q,{children:[e(ee,{}),l("div",{className:"flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse",children:[e("div",{className:`transition-all duration-150 flex-none min-w-[260px] 
        ${a<t.lg?"absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]"}
        ${a<t.lg&&h?"left-0 ":"-left-full "}
        `,children:l(C,{bodyClass:" py-6 h-full flex flex-col",className:"h-full",children:[e("div",{className:"flex-1 h-full px-6",children:e(M,{icon:"heroicons-outline:plus",text:"Compose",className:"btn-dark w-full block  ",onClick:()=>i(w(!0))})}),l(S,{className:"h-full px-6 ",children:[e("ul",{className:"list mt-6",children:(x=te)==null?void 0:x.map((r,f)=>e(pe,{item:r,filter:n,onClick:()=>v(r.value)},f))}),e("div",{className:"block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase",children:"Tags"}),e("ul",{children:(N=ae)==null?void 0:N.map((r,f)=>e(xe,{item:r,filter:n,onClick:()=>v(r.value)},f))})]})]})}),a<t.lg&&h&&e("div",{className:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter\r backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"}),e("div",{className:"flex-1 md:w-[calc(100%-320px)]",children:l(C,{bodyClass:"p-0  h-full relative",className:"h-full",children:[e(be,{onChange:r=>i(le(r.target.value)),emails:p}),l(S,{className:"h-full all-todos overflow-x-hidden",children:[c&&e(ie,{count:p.length}),!c&&l("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full",children:[p.map((r,f)=>e(ue,{email:r},f)),p.length===0&&e("li",{className:"mx-6 mt-6",children:e(re,{label:"No Result Found",className:"bg-danger-500 text-white w-full block text-start"})})]})]}),m&&e(Ne,{})]})})]}),e(he,{})]})};export{Fe as default};
