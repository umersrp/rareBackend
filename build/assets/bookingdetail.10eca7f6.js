import{af as v,r as n,j as e,F as x,e as g,ag as w}from"./index.e476e824.js";import{E as y}from"./jspdf.es.min.f15927dd.js";import k from"./html2canvas.esm.0eae2bf4.js";const c="/assets/rareLogo.b94c2643.png";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\bookingdetail.jsx";function C(_){var o,u;const r=v(),s=n.exports.useRef(null),i=(o=r.state)==null?void 0:o.data,a=(u=r==null?void 0:r.state)==null?void 0:u.obj;n.exports.useState(!1);var m=new y("portrait","mm","a4");const d=()=>{const b=s.current,h={scale:1.8,scrollY:10,scrollX:10,windowWidth:document.documentElement.offsetWidth,windowHeight:document.documentElement.offsetHeight};+k(b,h).then(t=>{const f=t.toDataURL(""),N=m.internal.pageSize.getWidth(),p=t.height*N/t.width*1.1;m.addImage(f,"JPEG",0,0,N,p),m.save(`${i.bookingnumber}.pdf`)})};return n.exports.useEffect(()=>{d()},[]),e(x,{children:e("div",{ref:s,children:e(g,{children:[e("div",{className:"w-[100% ]col-span-3",children:[e("div",{className:"bg-black-500 p-[20px]",children:[e("h4",{className:"text-[24px] text-white dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:i.community_name+" | "+i.building_name+" | "+i.project_name+" | "+i.unitnumber},void 0,!1,{fileName:l,lineNumber:68,columnNumber:29},this),e("div",{className:"flex gap-2",children:[e("p",{className:"text-white ",children:i.checkindate},void 0,!1,{fileName:l,lineNumber:72,columnNumber:33},this),e("div",{className:"border-r-2"},void 0,!1,{fileName:l,lineNumber:73,columnNumber:33},this),e("p",{className:"text-white ",children:i.checkout_date},void 0,!1,{fileName:l,lineNumber:74,columnNumber:33},this),e("div",{className:"border-r-2"},void 0,!1,{fileName:l,lineNumber:75,columnNumber:33},this),e("p",{className:"text-white ",children:i.confirmationcode},void 0,!1,{fileName:l,lineNumber:76,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:71,columnNumber:29},this)]},void 0,!0,{fileName:l,lineNumber:67,columnNumber:25},this),e("div",{className:"bg-black-500 p-[20px] mt-2",children:[e("div",{className:"flex justify-between",children:[e("h4",{className:"text-[24px] text-white dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:i.community_name+" | "+i.building_name+" | "+i.project_name+" | "+i.unitnumber},void 0,!1,{fileName:l,lineNumber:81,columnNumber:33},this),e("span",{className:"text-green-400 font-semibold flex",children:["Booked ",e(w,{icon:"heroicons-outline:check-circle",className:"w-[30px] h-[25px]"},void 0,!1,{fileName:l,lineNumber:84,columnNumber:92},this)]},void 0,!0,{fileName:l,lineNumber:84,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:80,columnNumber:29},this),e("div",{className:"flex gap-2",children:[e("p",{className:"text-white ",children:i.checkindate},void 0,!1,{fileName:l,lineNumber:88,columnNumber:33},this),e("div",{className:"border-r-2"},void 0,!1,{fileName:l,lineNumber:89,columnNumber:33},this),e("p",{className:"text-white ",children:i.checkout_date},void 0,!1,{fileName:l,lineNumber:90,columnNumber:33},this),e("div",{className:"border-r-2"},void 0,!1,{fileName:l,lineNumber:91,columnNumber:33},this),e("p",{className:"text-white ",children:[i.nonight," Night's"]},void 0,!0,{fileName:l,lineNumber:92,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:87,columnNumber:29},this)]},void 0,!0,{fileName:l,lineNumber:79,columnNumber:25},this)]},void 0,!0,{fileName:l,lineNumber:66,columnNumber:21},this),e("div",{className:"flex gap-2",children:[e("div",{className:" bg-white  border border-gray-300 overflow-hidden",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Your reservation is Booked"},void 0,!1,{fileName:l,lineNumber:100,columnNumber:33},this)},void 0,!1,{fileName:l,lineNumber:99,columnNumber:29},this),e("div",{className:"w-[100%] p-[20px] ",children:[e("div",{className:"flex  ",children:[e("img",{src:c,alt:c,className:"w-20 h-20  mr-4"},void 0,!1,{fileName:l,lineNumber:106,columnNumber:37},this),e("div",{children:[e("div",{className:"flex gap-2",children:[e("h4",{className:"text-[24px] dark:text-slate-300 ",children:i!=null&&i.building_name?i==null?void 0:i.building_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:117,columnNumber:49},this),e("div",{className:"border-r-2 border-gray-900"},void 0,!1,{fileName:l,lineNumber:120,columnNumber:49},this),e("h4",{className:"text-[24px] dark:text-slate-300 ",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:122,columnNumber:49},this)]},void 0,!0,{fileName:l,lineNumber:116,columnNumber:45},this),e("p",{className:"text-blue-500 cursor-pointer",onClick:m.link(-50,-50,150,150,{url:`${a.propertylocation}`}),children:"View Location"},void 0,!1,{fileName:l,lineNumber:126,columnNumber:45},this),e("p",{className:"text-black-500",children:["Tel:",e("a",{className:"text-red-500",href:"tel:+92 320 8231685",children:" +92 320 8231685"},void 0,!1,{fileName:l,lineNumber:127,columnNumber:79},this)]},void 0,!0,{fileName:l,lineNumber:127,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:115,columnNumber:41},this),e("div",{children:[e("div",{className:"flex gap-2",children:[e("h4",{className:"text-[24px] dark:text-slate-300 ",children:i!=null&&i.building_name?i==null?void 0:i.building_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:135,columnNumber:45},this),e("div",{className:"border-r-2 border-gray-900"},void 0,!1,{fileName:l,lineNumber:138,columnNumber:45},this),e("h4",{className:"text-[24px] dark:text-slate-300 ",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:140,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:134,columnNumber:41},this),e("p",{className:"text-blue-500 cursor-pointer",onClick:m.link(-50,-50,150,150,{url:`${a.propertylocation}`}),children:"View Location"},void 0,!1,{fileName:l,lineNumber:144,columnNumber:41},this),e("p",{className:"text-red-500",children:"Tel: 111 222 333"},void 0,!1,{fileName:l,lineNumber:145,columnNumber:41},this)]},void 0,!0,{fileName:l,lineNumber:133,columnNumber:37},this)]},void 0,!0,{fileName:l,lineNumber:104,columnNumber:33},this),e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:156,columnNumber:37},this)},void 0,!1,{fileName:l,lineNumber:155,columnNumber:33},this),e("div",{className:"mb-4 p-[10px]",children:[e("h1",{className:"text-[18px] mb-2",children:"Check iN"},void 0,!1,{fileName:l,lineNumber:159,columnNumber:37},this),e("p",{className:"text-[16px] list-item  font-semibold mb-5",children:"Check-in-time start at 3pm. "},void 0,!1,{fileName:l,lineNumber:160,columnNumber:37},this),e("p",{className:"text-[16px] list-item  font-semibold mb-5",children:"If a late check-in is planned.Contact RARE directly for the late check-in policy  "},void 0,!1,{fileName:l,lineNumber:161,columnNumber:37},this)]},void 0,!0,{fileName:l,lineNumber:158,columnNumber:33},this),e("div",{className:"p-[10px]",children:[e("h1",{className:"text-[18px] font-bold mb-2",children:"Import Hotel Information"},void 0,!1,{fileName:l,lineNumber:165,columnNumber:37},this),e("div",{children:[e("span",{className:"text-[16px] font-semibold mb-5",children:"Although RARE does not charge fees to change or cancel your booking, RARE all-inclusive may still charge a fee in accordance with its own rules and regulations."},void 0,!1,{fileName:l,lineNumber:167,columnNumber:41},this),e("p",{className:"text-[16px] list-item font-semibold mb-5",children:" Cancellation or changes made after 11:59 PM (Romance Daylight Time)"},void 0,!1,{fileName:l,lineNumber:169,columnNumber:41},this),e("p",{className:"text-[16px] list-item font-semibold mb-5",children:"to additional rules and restrictions. Please refer to your online itinerary for further details. "},void 0,!1,{fileName:l,lineNumber:170,columnNumber:41},this)]},void 0,!0,{fileName:l,lineNumber:166,columnNumber:37},this)]},void 0,!0,{fileName:l,lineNumber:164,columnNumber:33},this),e("div",{className:"w-[100%] col-span-3 mb-6",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:179,columnNumber:37},this)},void 0,!1,{fileName:l,lineNumber:178,columnNumber:33},this),e("div",{className:"flex justify-center rounded-md  gap-x-5 w-full lg:w-[300px]",children:[e("div",{className:" pr-4",children:[e("p",{className:"text-[16px] font-bold mb-6",children:"Room"},void 0,!1,{fileName:l,lineNumber:184,columnNumber:41},this),e("p",{className:"text-[16px] font-bold mb-7",children:"Reserved For"},void 0,!1,{fileName:l,lineNumber:185,columnNumber:41},this)]},void 0,!0,{fileName:l,lineNumber:183,columnNumber:37},this),e("div",{children:[e("div",{className:"flex flex-col",children:[e("span",{className:"text-[14px] font-bold ",children:a.subtype},void 0,!1,{fileName:l,lineNumber:189,columnNumber:45},this),e("span",{className:"text-[14px] font-bold mb-4 ",children:"includes:All-inclusive"},void 0,!1,{fileName:l,lineNumber:190,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:188,columnNumber:41},this),e("div",{children:[e("p",{className:"text-[14px] font-bold",children:i.guestname},void 0,!1,{fileName:l,lineNumber:193,columnNumber:45},this),e("p",{className:"text-[14px] font-bold mb-4",children:[i.noadults," adults"]},void 0,!0,{fileName:l,lineNumber:194,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:192,columnNumber:41},this)]},void 0,!0,{fileName:l,lineNumber:187,columnNumber:37},this)]},void 0,!0,{fileName:l,lineNumber:181,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:103,columnNumber:29},this)]},void 0,!0,{fileName:l,lineNumber:98,columnNumber:25},this),e("div",{children:[e("div",{className:"max-w-sm mx-auto bg-white  border border-gray-300 overflow-hidden  ",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Price summary "},void 0,!1,{fileName:l,lineNumber:208,columnNumber:37},this)},void 0,!1,{fileName:l,lineNumber:207,columnNumber:33},this),e("div",{className:"px-6 py-4",children:e("div",{className:"font-bold text-xl mb-2 flex flex-col items-center p-4",children:[e("div",{className:"flex justify-center rounded-md gap-x-20 w-full lg:w-[220px]",children:[e("div",{className:" pr-4",children:e("span",{className:"text-[18px]",children:"Total Collected"},void 0,!1,{fileName:l,lineNumber:216,columnNumber:49},this)},void 0,!1,{fileName:l,lineNumber:215,columnNumber:45},this),e("div",{children:e("span",{className:"text-[14px]",children:[Number(i.totalcollectall).toFixed(2)," AED"]},void 0,!0,{fileName:l,lineNumber:219,columnNumber:49},this)},void 0,!1,{fileName:l,lineNumber:218,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:213,columnNumber:41},this),e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:225,columnNumber:45},this)},void 0,!1,{fileName:l,lineNumber:224,columnNumber:41},this),e("div",{children:[e("span",{className:"text-[16px]",children:"Guests Price:40%"},void 0,!1,{fileName:l,lineNumber:229,columnNumber:45},this),e("div",{className:"font-bold text-xl mb-1 flex flex-col items-start  p-2",children:e("div",{className:"flex justify-start  rounded-md  gap-x-5 w-full lg:w-[220px]",children:[e("div",{className:" pr-4 ",children:[e("span",{className:"text-[14px]",children:"Room Price "},void 0,!1,{fileName:l,lineNumber:234,columnNumber:57},this),e("p",{className:"text-[14px]",children:[i.nonight," nights"]},void 0,!0,{fileName:l,lineNumber:235,columnNumber:57},this),e("p",{className:"text-[14px]",children:"Vat"},void 0,!1,{fileName:l,lineNumber:236,columnNumber:57},this)]},void 0,!0,{fileName:l,lineNumber:233,columnNumber:53},this),e("div",{children:[e("span",{className:"text-[14px]",children:[Number(i.roomrenthostpayable).toFixed(2)," AED"]},void 0,!0,{fileName:l,lineNumber:239,columnNumber:57},this),e("p",{className:"text-[14px]",children:[i.tourismfee," /nights"]},void 0,!0,{fileName:l,lineNumber:240,columnNumber:57},this),e("p",{className:"text-[14px]",children:[Number(i.totalvatper).toFixed(2)," AED"]},void 0,!0,{fileName:l,lineNumber:241,columnNumber:57},this)]},void 0,!0,{fileName:l,lineNumber:238,columnNumber:53},this)]},void 0,!0,{fileName:l,lineNumber:231,columnNumber:49},this)},void 0,!1,{fileName:l,lineNumber:230,columnNumber:45},this),e("div",{children:e("p",{className:"text-[14px] leading-[25px]",children:"Rates in AED are based on current exchange rates, which may vary at the time of travel. The final payment will be settled in the local currency directly with the hotel. "},void 0,!1,{fileName:l,lineNumber:246,columnNumber:49},this)},void 0,!1,{fileName:l,lineNumber:245,columnNumber:45},this)]},void 0,!0,{fileName:l,lineNumber:228,columnNumber:41},this)]},void 0,!0,{fileName:l,lineNumber:211,columnNumber:37},this)},void 0,!1,{fileName:l,lineNumber:210,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:206,columnNumber:29},this),e("div",{className:"max-w-sm mx-auto bg-white border border-gray-300 overflow-hidden mt-4",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Additional Hotel Service"},void 0,!1,{fileName:l,lineNumber:256,columnNumber:37},this)},void 0,!1,{fileName:l,lineNumber:255,columnNumber:33},this),e("div",{className:"px-6 py-4",children:[e("p",{className:"text-[16px] font-bold mb-2",children:"The below fees and deposits only apply if they are included in your selected room rate."},void 0,!1,{fileName:l,lineNumber:260,columnNumber:37},this),e("p",{className:"text-[16px] mb-2",children:"The following fees and deposits are charged by the property at the time of service, check-in, or check-out:"},void 0,!1,{fileName:l,lineNumber:268,columnNumber:37},this),e("p",{className:"text-[16px] list-item mb-2",children:"Fee for high-speed internet (wired) in public areas: AED (for 30 minutes; rate may vary)."},void 0,!1,{fileName:l,lineNumber:269,columnNumber:37},this),e("p",{className:"text-[16px] list-item",children:"Rollaway beds are available for an additional fee."},void 0,!1,{fileName:l,lineNumber:270,columnNumber:37},this)]},void 0,!0,{fileName:l,lineNumber:258,columnNumber:33},this)]},void 0,!0,{fileName:l,lineNumber:254,columnNumber:29},this)]},void 0,!0,{fileName:l,lineNumber:205,columnNumber:25},this)]},void 0,!0,{fileName:l,lineNumber:97,columnNumber:21},this)]},void 0,!0,{fileName:l,lineNumber:65,columnNumber:17},this)},void 0,!1,{fileName:l,lineNumber:64,columnNumber:13},this)},void 0,!1)}export{C as default};
