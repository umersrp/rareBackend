import{ag as u,r as n,j as e,F as g,c as t,C as v,ah as w}from"./index.33fc8c4f.js";import{E as y}from"./jspdf.es.min.2d80ac13.js";import k from"./html2canvas.esm.0eae2bf4.js";const h="/assets/rareLogo.b94c2643.png";function F(_){var d,o;const s=u(),r=n.exports.useRef(null),l=(d=s.state)==null?void 0:d.data,i=(o=s==null?void 0:s.state)==null?void 0:o.obj;n.exports.useState(!1);var a=new y("portrait","mm","a4");const p=()=>{const x=r.current,b={scale:1.8,scrollY:10,scrollX:10,windowWidth:document.documentElement.offsetWidth,windowHeight:document.documentElement.offsetHeight};+k(x,b).then(c=>{const N=c.toDataURL(""),m=a.internal.pageSize.getWidth(),f=c.height*m/c.width*1.1;a.addImage(N,"JPEG",0,0,m,f),a.save(`${l.bookingnumber}.pdf`)})};return n.exports.useEffect(()=>{p()},[]),e(g,{children:e("div",{ref:r,children:t(v,{children:[t("div",{className:"w-[100% ]col-span-3",children:[t("div",{className:"bg-black-500 p-[20px]",children:[e("h4",{className:"text-[24px] text-white dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:l.community_name+" | "+l.building_name+" | "+l.project_name+" | "+l.unitnumber}),t("div",{className:"flex gap-2",children:[e("p",{className:"text-white ",children:l.checkindate}),e("div",{className:"border-r-2"}),e("p",{className:"text-white ",children:l.checkout_date}),e("div",{className:"border-r-2"}),e("p",{className:"text-white ",children:l.confirmationcode})]})]}),t("div",{className:"bg-black-500 p-[20px] mt-2",children:[t("div",{className:"flex justify-between",children:[e("h4",{className:"text-[24px] text-white dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:l.community_name+" | "+l.building_name+" | "+l.project_name+" | "+l.unitnumber}),t("span",{className:"text-green-400 font-semibold flex",children:["Booked ",e(w,{icon:"heroicons-outline:check-circle",className:"w-[30px] h-[25px]"})]})]}),t("div",{className:"flex gap-2",children:[e("p",{className:"text-white ",children:l.checkindate}),e("div",{className:"border-r-2"}),e("p",{className:"text-white ",children:l.checkout_date}),e("div",{className:"border-r-2"}),t("p",{className:"text-white ",children:[l.nonight," Night's"]})]})]})]}),t("div",{className:"flex gap-2",children:[t("div",{className:" bg-white  border border-gray-300 overflow-hidden",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Your reservation is Booked"})}),t("div",{className:"w-[100%] p-[20px] ",children:[t("div",{className:"flex  ",children:[e("img",{src:h,alt:h,className:"w-20 h-20  mr-4"}),t("div",{children:[t("div",{className:"flex gap-2",children:[e("h4",{className:"text-[24px] dark:text-slate-300 ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"}),e("div",{className:"border-r-2 border-gray-900"}),e("h4",{className:"text-[24px] dark:text-slate-300 ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Available"})]}),e("p",{className:"text-blue-500 cursor-pointer",onClick:a.link(-50,-50,150,150,{url:`${i.propertylocation}`}),children:"View Location"}),t("p",{className:"text-black-500",children:["Tel:",e("a",{className:"text-red-500",href:"tel:+92 320 8231685",children:" +92 320 8231685"})]})]}),t("div",{children:[t("div",{className:"flex gap-2",children:[e("h4",{className:"text-[24px] dark:text-slate-300 ",children:l!=null&&l.building_name?l==null?void 0:l.building_name:"Not Available"}),e("div",{className:"border-r-2 border-gray-900"}),e("h4",{className:"text-[24px] dark:text-slate-300 ",children:l!=null&&l.project_name?l==null?void 0:l.project_name:"Not Available"})]}),e("p",{className:"text-blue-500 cursor-pointer",onClick:a.link(-50,-50,150,150,{url:`${i.propertylocation}`}),children:"View Location"}),e("p",{className:"text-red-500",children:"Tel: 111 222 333"})]})]}),e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"})}),t("div",{className:"mb-4 p-[10px]",children:[e("h1",{className:"text-[18px] mb-2",children:"Check iN"}),e("p",{className:"text-[16px] list-item  font-semibold mb-5",children:"Check-in-time start at 3pm. "}),e("p",{className:"text-[16px] list-item  font-semibold mb-5",children:"If a late check-in is planned.Contact RARE directly for the late check-in policy  "})]}),t("div",{className:"p-[10px]",children:[e("h1",{className:"text-[18px] font-bold mb-2",children:"Import Hotel Information"}),t("div",{children:[e("span",{className:"text-[16px] font-semibold mb-5",children:"Although RARE does not charge fees to change or cancel your booking, RARE all-inclusive may still charge a fee in accordance with its own rules and regulations."}),e("p",{className:"text-[16px] list-item font-semibold mb-5",children:" Cancellation or changes made after 11:59 PM (Romance Daylight Time)"}),e("p",{className:"text-[16px] list-item font-semibold mb-5",children:"to additional rules and restrictions. Please refer to your online itinerary for further details. "})]})]}),e("div",{className:"w-[100%] col-span-3 mb-6",children:e("div",{className:"borderBottom"})}),t("div",{className:"flex justify-center rounded-md  gap-x-5 w-full lg:w-[300px]",children:[t("div",{className:" pr-4",children:[e("p",{className:"text-[16px] font-bold mb-6",children:"Room"}),e("p",{className:"text-[16px] font-bold mb-7",children:"Reserved For"})]}),t("div",{children:[t("div",{className:"flex flex-col",children:[e("span",{className:"text-[14px] font-bold ",children:i.subtype}),e("span",{className:"text-[14px] font-bold mb-4 ",children:"includes:All-inclusive"})]}),t("div",{children:[e("p",{className:"text-[14px] font-bold",children:l.guestname}),t("p",{className:"text-[14px] font-bold mb-4",children:[l.noadults," adults"]})]})]})]})]})]}),t("div",{children:[t("div",{className:"max-w-sm mx-auto bg-white  border border-gray-300 overflow-hidden  ",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Price summary "})}),e("div",{className:"px-6 py-4",children:t("div",{className:"font-bold text-xl mb-2 flex flex-col items-center p-4",children:[t("div",{className:"flex justify-center rounded-md gap-x-20 w-full lg:w-[220px]",children:[e("div",{className:" pr-4",children:e("span",{className:"text-[18px]",children:"Total Collected"})}),e("div",{children:t("span",{className:"text-[14px]",children:[Number(l.totalcollectall).toFixed(2)," AED"]})})]}),e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"})}),t("div",{children:[e("span",{className:"text-[16px]",children:"Guests Price:40%"}),e("div",{className:"font-bold text-xl mb-1 flex flex-col items-start  p-2",children:t("div",{className:"flex justify-start  rounded-md  gap-x-5 w-full lg:w-[220px]",children:[t("div",{className:" pr-4 ",children:[e("span",{className:"text-[14px]",children:"Room Price "}),t("p",{className:"text-[14px]",children:[l.nonight," nights"]}),e("p",{className:"text-[14px]",children:"Vat"})]}),t("div",{children:[t("span",{className:"text-[14px]",children:[Number(l.roomrenthostpayable).toFixed(2)," AED"]}),t("p",{className:"text-[14px]",children:[l.tourismfee," /nights"]}),t("p",{className:"text-[14px]",children:[Number(l.totalvatper).toFixed(2)," AED"]})]})]})}),e("div",{children:e("p",{className:"text-[14px] leading-[25px]",children:"Rates in AED are based on current exchange rates, which may vary at the time of travel. The final payment will be settled in the local currency directly with the hotel. "})})]})]})})]}),t("div",{className:"max-w-sm mx-auto bg-white border border-gray-300 overflow-hidden mt-4",children:[e("div",{className:"bg-gray-100 p-[20px] w-[100%] font-semibold",children:e("span",{children:"Additional Hotel Service"})}),t("div",{className:"px-6 py-4",children:[e("p",{className:"text-[16px] font-bold mb-2",children:"The below fees and deposits only apply if they are included in your selected room rate."}),e("p",{className:"text-[16px] mb-2",children:"The following fees and deposits are charged by the property at the time of service, check-in, or check-out:"}),e("p",{className:"text-[16px] list-item mb-2",children:"Fee for high-speed internet (wired) in public areas: AED (for 30 minutes; rate may vary)."}),e("p",{className:"text-[16px] list-item",children:"Rollaway beds are available for an additional fee."})]})]})]})]})]})})})}export{F as default};
