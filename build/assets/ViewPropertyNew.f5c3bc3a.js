import{bt as d,r,j as l,e as t,I as a}from"./index.e476e824.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\properties\\ViewPropertyNew.jsx";const u=()=>{const{id:m}=d(),[e,n]=r.exports.useState("");return r.exports.useState(""),r.exports.useEffect(()=>{(async()=>{if(m){const o=await(await fetch(`http://dev-rare.srp.ai/property/${m}`)).json();o&&n(o)}})()},[m]),l("div",{children:l("div",{className:"space-y-5 profile-page",children:[l("div",{className:"profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-slate-900 dark:bg-slate-700 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"},void 0,!1,{fileName:i,lineNumber:28,columnNumber:17},void 0),l("div",{className:"grid grid-cols-12 gap-6",children:[l("div",{className:"lg:col-span-4 col-span-12",children:l(t,{title:"Property info",children:l("ul",{className:"list space-y-8",children:[l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"},void 0,!1,{fileName:i,lineNumber:36,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:35,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Unit number"},void 0,!1,{fileName:i,lineNumber:39,columnNumber:41},void 0),l("div",{href:"mailto:someone@example.com",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:42,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:38,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:34,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:53,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:52,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Usage"},void 0,!1,{fileName:i,lineNumber:56,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"},void 0,!1,{fileName:i,lineNumber:59,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:55,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:51,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:70,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:69,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Type"},void 0,!1,{fileName:i,lineNumber:73,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertytype?e==null?void 0:e.propertytype:"Not Available"},void 0,!1,{fileName:i,lineNumber:76,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:72,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:68,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:87,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:86,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Transaction type"},void 0,!1,{fileName:i,lineNumber:90,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.transactiontype?e==null?void 0:e.transactiontype:"Not Available"},void 0,!1,{fileName:i,lineNumber:93,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:89,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:85,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:104,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:103,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:107,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"},void 0,!1,{fileName:i,lineNumber:110,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:106,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:102,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:121,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:120,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:124,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"},void 0,!1,{fileName:i,lineNumber:127,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:123,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:119,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:138,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:137,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Sub type"},void 0,!1,{fileName:i,lineNumber:141,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.subtype?e==null?void 0:e.subtype:"Not Available"},void 0,!1,{fileName:i,lineNumber:144,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:140,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:136,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:155,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:154,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Type Layout"},void 0,!1,{fileName:i,lineNumber:158,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.typelayout?e==null?void 0:e.typelayout:"Not Available"},void 0,!1,{fileName:i,lineNumber:161,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:157,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:153,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:172,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:171,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Tenancy Status"},void 0,!1,{fileName:i,lineNumber:175,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.tenancystatus?e==null?void 0:e.tenancystatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:178,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:174,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:170,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:189,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:188,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Floor"},void 0,!1,{fileName:i,lineNumber:192,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:195,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:191,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:187,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:222,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:221,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Plot Size"},void 0,!1,{fileName:i,lineNumber:225,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.plotsize?e==null?void 0:e.plotsize:"Not Available"},void 0,!1,{fileName:i,lineNumber:228,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:224,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:220,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:239,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:238,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:242,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"},void 0,!1,{fileName:i,lineNumber:245,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:241,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:237,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:33,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:32,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:31,columnNumber:21},void 0),l("div",{className:"lg:col-span-4 col-span-12",children:l(t,{title:"Property info",children:l("ul",{className:"list space-y-8",children:[l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:264,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:263,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Association"},void 0,!1,{fileName:i,lineNumber:267,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.ownerassociation?e==null?void 0:e.ownerassociation:"Not Available"},void 0,!1,{fileName:i,lineNumber:270,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:266,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:262,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:281,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:280,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Full Bathroom"},void 0,!1,{fileName:i,lineNumber:284,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.nobathroom?e==null?void 0:e.nobathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:287,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:283,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:279,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:298,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:297,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Half Bathroom"},void 0,!1,{fileName:i,lineNumber:301,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.halfbathroom?e==null?void 0:e.halfbathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:304,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:300,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:296,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:332,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:331,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Furnished"},void 0,!1,{fileName:i,lineNumber:335,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.furnished?e==null?void 0:e.furnished:"Not Available"},void 0,!1,{fileName:i,lineNumber:338,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:334,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:330,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:349,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:348,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Kitchen"},void 0,!1,{fileName:i,lineNumber:352,columnNumber:41},void 0),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"},void 0,!1,{fileName:i,lineNumber:355,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:351,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:347,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"},void 0,!1,{fileName:i,lineNumber:365,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:364,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"No of parking"},void 0,!1,{fileName:i,lineNumber:368,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.noparking?e==null?void 0:e.noparking:"Not Available"},void 0,!1,{fileName:i,lineNumber:371,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:367,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:363,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:381,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:380,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Balcony"},void 0,!1,{fileName:i,lineNumber:384,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not Available"},void 0,!1,{fileName:i,lineNumber:387,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:383,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:379,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"},void 0,!1,{fileName:i,lineNumber:397,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:396,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Dewapremises"},void 0,!1,{fileName:i,lineNumber:400,columnNumber:41},void 0),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.dewapremises?e==null?void 0:e.dewapremises:"Not Available"},void 0,!1,{fileName:i,lineNumber:403,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:399,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:395,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"},void 0,!1,{fileName:i,lineNumber:411,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:410,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"District"},void 0,!1,{fileName:i,lineNumber:414,columnNumber:41},void 0),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.district?e==null?void 0:e.district:"Not Available"},void 0,!1,{fileName:i,lineNumber:417,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:413,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:409,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"},void 0,!1,{fileName:i,lineNumber:424,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:423,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Parking Bay"},void 0,!1,{fileName:i,lineNumber:427,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"},void 0,!1,{fileName:i,lineNumber:430,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:426,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:422,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:440,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:439,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Property View"},void 0,!1,{fileName:i,lineNumber:443,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertyview?e==null?void 0:e.propertyview:"Not Available"},void 0,!1,{fileName:i,lineNumber:446,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:442,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:438,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:456,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:455,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Location"},void 0,!1,{fileName:i,lineNumber:459,columnNumber:41},void 0),e!=null&&e.propertylocation?l("a",{target:"_blank",href:`${e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"#"}`,className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"Not Available"},void 0,!1,{fileName:i,lineNumber:464,columnNumber:49},void 0):l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"Not Available"},void 0,!1,{fileName:i,lineNumber:469,columnNumber:49},void 0)]},void 0,!0,{fileName:i,lineNumber:458,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:454,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:259,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:258,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:257,columnNumber:21},void 0),l("div",{className:"lg:col-span-4 col-span-12",children:l(t,{title:"Owner info",children:l("ul",{className:"list space-y-8",children:[l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"},void 0,!1,{fileName:i,lineNumber:486,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:485,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Name"},void 0,!1,{fileName:i,lineNumber:489,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.customername?e==null?void 0:e.customername:"Not Available"},void 0,!1,{fileName:i,lineNumber:492,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:488,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:484,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"},void 0,!1,{fileName:i,lineNumber:502,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:501,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Purchased Date As Per Title Deed"},void 0,!1,{fileName:i,lineNumber:505,columnNumber:41},void 0),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:508,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:504,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:500,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"},void 0,!1,{fileName:i,lineNumber:516,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:515,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Name as per title deed"},void 0,!1,{fileName:i,lineNumber:519,columnNumber:41},void 0),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.ownernamedeed?e==null?void 0:e.ownernamedeed:"Not Available"},void 0,!1,{fileName:i,lineNumber:522,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:518,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:514,columnNumber:33},void 0),l("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"},void 0,!1,{fileName:i,lineNumber:529,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:528,columnNumber:37},void 0),l("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Purchase Value"},void 0,!1,{fileName:i,lineNumber:532,columnNumber:41},void 0),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"},void 0,!1,{fileName:i,lineNumber:535,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:531,columnNumber:37},void 0)]},void 0,!0,{fileName:i,lineNumber:527,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:483,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:482,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:481,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:30,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:27,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:26,columnNumber:9},void 0)};export{u as default};
