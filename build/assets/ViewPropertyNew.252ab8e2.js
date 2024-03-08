import{bu as d,r as i,j as l,c as t,f as c,I as a}from"./index.da1c4237.js";const h=()=>{const{id:s}=d(),[e,r]=i.exports.useState("");return i.exports.useState(""),i.exports.useEffect(()=>{(async()=>{if(s){const x=await(await fetch(`http://portals.rarehomesgroup.com/property/${s}`)).json();x&&r(x)}})()},[s]),l("div",{children:t("div",{className:"space-y-5 profile-page",children:[l("div",{className:"profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-slate-900 dark:bg-slate-700 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"}),t("div",{className:"grid grid-cols-12 gap-6",children:[l("div",{className:"lg:col-span-4 col-span-12",children:l(c,{title:"Property info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Unit number"}),l("div",{href:"mailto:someone@example.com",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Usage"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Type"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertytype?e==null?void 0:e.propertytype:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Transaction type"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.transactiontype?e==null?void 0:e.transactiontype:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Project Name"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.projectname?e==null?void 0:e.projectname:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Building Name"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.buildingname?e==null?void 0:e.buildingname:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Sub type"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.subtype?e==null?void 0:e.subtype:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Type Layout"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.typelayout?e==null?void 0:e.typelayout:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Tenancy Status"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.tenancystatus?e==null?void 0:e.tenancystatus:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Floor"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Plot Size"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.plotsize?e==null?void 0:e.plotsize:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Community Name"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.communityname?e==null?void 0:e.communityname:"Not Available"})]})]})]})})}),l("div",{className:"lg:col-span-4 col-span-12",children:l(c,{title:"Property info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Association"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.ownerassociation?e==null?void 0:e.ownerassociation:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Full Bathroom"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.nobathroom?e==null?void 0:e.nobathroom:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Half Bathroom"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.halfbathroom?e==null?void 0:e.halfbathroom:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Furnished"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.furnished?e==null?void 0:e.furnished:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Kitchen"}),l("div",{href:"tel:0189749676767",className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"No of parking"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.noparking?e==null?void 0:e.noparking:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Balcony"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Dewapremises"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.dewapremises?e==null?void 0:e.dewapremises:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"District"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.district?e==null?void 0:e.district:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Parking Bay"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Property View"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertyview?e==null?void 0:e.propertyview:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Location"}),e!=null&&e.propertylocation?l("a",{target:"_blank",href:`${e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"#"}`,className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"Not Available"}):l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"Not Available"})]})]})]})})}),l("div",{className:"lg:col-span-4 col-span-12",children:l(c,{title:"Owner info",children:t("ul",{className:"list space-y-8",children:[t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:phone-arrow-up-right"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Name"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.customername?e==null?void 0:e.customername:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Purchased Date As Per Title Deed"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:map"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Owner Name as per title deed"}),l("div",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.ownernamedeed?e==null?void 0:e.ownernamedeed:"Not Available"})]})]}),t("li",{className:"flex space-x-3 rtl:space-x-reverse",children:[l("div",{className:"flex-none text-2xl text-slate-600 dark:text-slate-300",children:l(a,{icon:"heroicons:envelope"})}),t("div",{className:"flex-1",children:[l("div",{className:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]",children:"Purchase Value"}),l("p",{className:"text-base text-slate-600 dark:text-slate-50",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not Available"})]})]})]})})})]})]})})};export{h as default};
