import{r as n,O as L,P as Q,j as e,F as z,M as a,V as d,I as B,J as f,Q as D}from"./index.f7c12b39.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Modal.jsx";const W=({activeModal:V,onClose:y,noFade:o,disableBackdrop:v,className:g="max-w-xl",children:w,footerContent:_,centered:T,scrollContent:k,themeClass:j="bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700",title:M="Basic Modal",uncontrol:A,label:E="Basic Modal",labelClass:H,alldata:r,ref:R,onDataUpdate:m,unlisted:c,bookingUpdate:N,cancelbooking:p,setSelectedBooking:Y,bookingtable:b,cancelkrnihai:u,deletebooking:h,alreadyBooking:G})=>{const[C,$]=n.exports.useState(!1),s=()=>{$(!1)},I=()=>{$(!C)},q=()=>null,[P]=L(),[O]=Q(),[S,l]=n.exports.useState(!1),J=async()=>{if(N&&N!==void 0&&N!=="undefined"){if(p&&p!==void 0&&p!=="undefined"){l(!0);try{await f.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:r==null?void 0:r._id,cancelled:!0}),m(),setTimeout(()=>{s()},1500),l(!1)}catch(t){console.log(t,"error"),l(!1),setTimeout(()=>{s()},1500)}}else if(b&&b!==void 0&&b!=="undefined"){if(u===!0&&u!==void 0&&u!=="undefined"){l(!0);try{await f.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:r==null?void 0:r._id,cancelled:!0}),m(),setTimeout(()=>{s()},1500),l(!1)}catch(t){console.log(t,"error"),l(!1),setTimeout(()=>{s()},1500)}}else if(u===!1&&u!==void 0&&u!=="undefined"){l(!0);try{await f.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:r==null?void 0:r._id,cancelled:!1}),m(),setTimeout(()=>{s()},1500),l(!1)}catch(t){console.log(t,"error"),l(!1),setTimeout(()=>{s()},1500)}}else if(h&&h!==void 0&&h!=="undefined"){l(!0);try{await f.patch("http://dev-rare.srp.ai/booking/api/updatebooking",{_id:r==null?void 0:r._id,softdelete:!0}),m(),setTimeout(()=>{s()},1500),l(!1)}catch(t){console.log(t,"error"),l(!1),setTimeout(()=>{s()},1500)}}}}else if(r!=null&&r.porpertyid){l(!0);const t=new FormData;t.append("_id",r==null?void 0:r.porpertyid),t.append("unlisted",c);try{await P(t),await O({_id:r==null?void 0:r._id,unlisted:c,unlist_date:new Date}),m(),setTimeout(()=>{s()},1500)}catch(x){console.log(x,"error"),D.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s()}}else if(r!=null&&r.available_id){l(!0);const t=new FormData;t.append("_id",r==null?void 0:r._id),t.append("unlisted",c);try{await P(t),await O({_id:r==null?void 0:r.available_id,unlisted:c,unlist_date:new Date}),m(),setTimeout(()=>{s()},1500)}catch(x){console.log(x,"error"),D.error("Something went wrong",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s()}}};return e(z,{children:A?e(z,{children:[e("button",{type:"button",onClick:I,className:`btn ${H}`,children:E},void 0,!1,{fileName:i,lineNumber:201,columnNumber:11},void 0),e(a,{appear:!0,show:C,as:n.exports.Fragment,children:e(d,{as:"div",className:"relative z-[99999]",onClose:v?q:s,children:[!v&&e(a.Child,{as:n.exports.Fragment,enter:o?"":"duration-300 ease-out",enterFrom:o?"":"opacity-0",enterTo:o?"":"opacity-100",leave:o?"":"duration-200 ease-in",leaveFrom:o?"":"opacity-100",leaveTo:o?"":"opacity-0",children:e("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm"},void 0,!1,{fileName:i,lineNumber:224,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:215,columnNumber:17},void 0),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:`flex min-h-full justify-center text-center p-6 ${T?"items-center":"items-start "}`,children:e(a.Child,{as:n.exports.Fragment,enter:o?"":"duration-300  ease-out",enterFrom:o?"":"opacity-0 scale-95",enterTo:o?"":"opacity-100 scale-100",leave:o?"":"duration-200 ease-in",leaveFrom:o?"":"opacity-100 scale-100",leaveTo:o?"":"opacity-0 scale-95",children:e(d.Panel,{className:`w-full transform overflow-hidden rounded-md
                 bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-alll ${g}`,children:[e("div",{className:`relative overflow-hidden py-4 px-5 text-white flex justify-between  ${j}`,children:[e("h2",{className:"capitalize leading-6 tracking-wider font-medium text-base text-white",children:M},void 0,!1,{fileName:i,lineNumber:249,columnNumber:25},void 0),e("button",{onClick:s,className:"text-[22px]",children:e(B,{icon:"heroicons-outline:x"},void 0,!1,{fileName:i,lineNumber:253,columnNumber:27},void 0)},void 0,!1,{fileName:i,lineNumber:252,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:246,columnNumber:23},void 0),e("div",{className:`px-6 py-8 ${k?"overflow-y-auto max-h-[400px]":""}`,children:w},void 0,!1,{fileName:i,lineNumber:256,columnNumber:23},void 0),e("div",{className:"flex justify-end p-[24px] relative w-[100%]",children:[e("button",{onClick:J,className:`btn-dark py-[8px] px-[24px] rounded-[5px] select-none ${S===!0?"opacity-[0.7]":""}`,children:"Yes"},void 0,!1,{fileName:i,lineNumber:268,columnNumber:25},void 0),S===!0?e("div",{className:" absolute top-[27%] right-[4%] w-[76px] black-bg flex select-none justify-center h-[38px] button-style items-center",children:e("div",{className:"loader-spiner"},void 0,!1,{fileName:i,lineNumber:274,columnNumber:31},void 0)},void 0,!1,{fileName:i,lineNumber:273,columnNumber:29},void 0):null]},void 0,!0,{fileName:i,lineNumber:267,columnNumber:23},void 0)]},void 0,!0,{fileName:i,lineNumber:242,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:233,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:229,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:228,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:209,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:208,columnNumber:11},void 0)]},void 0,!0):e(a,{appear:!0,show:V,as:n.exports.Fragment,children:e(d,{as:"div",className:"relative z-[99999]",onClose:y,children:[e(a.Child,{as:n.exports.Fragment,enter:o?"":"duration-300 ease-out",enterFrom:o?"":"opacity-0",enterTo:o?"":"opacity-100",leave:o?"":"duration-200 ease-in",leaveFrom:o?"":"opacity-100",leaveTo:o?"":"opacity-0",children:!v&&e("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm"},void 0,!1,{fileName:i,lineNumber:298,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:288,columnNumber:13},void 0),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:`flex min-h-full justify-center text-center p-6 ${T?"items-center":"items-start "}`,children:e(a.Child,{as:n.exports.Fragment,enter:o?"":"duration-300  ease-out",enterFrom:o?"":"opacity-0 scale-95",enterTo:o?"":"opacity-100 scale-100",leave:o?"":"duration-200 ease-in",leaveFrom:o?"":"opacity-100 scale-100",leaveTo:o?"":"opacity-0 scale-95",children:e(d.Panel,{className:`w-full transform overflow-hidden rounded-md
                 bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-alll ${g}`,children:[e("div",{className:`relative overflow-hidden py-4 px-5 text-white flex justify-between  ${j}`,children:[e("h2",{className:"capitalize leading-6 tracking-wider font-medium text-base text-white",children:M},void 0,!1,{fileName:i,lineNumber:323,columnNumber:23},void 0),e("button",{onClick:y,className:"text-[22px]",children:e(B,{icon:"heroicons-outline:x"},void 0,!1,{fileName:i,lineNumber:327,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:326,columnNumber:23},void 0)]},void 0,!0,{fileName:i,lineNumber:320,columnNumber:21},void 0),e("div",{className:`px-6 py-8 ${k?"overflow-y-auto max-h-[400px]":""}`,children:w},void 0,!1,{fileName:i,lineNumber:330,columnNumber:21},void 0),_&&e("div",{className:"px-4 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700",children:_},void 0,!1,{fileName:i,lineNumber:337,columnNumber:23},void 0)]},void 0,!0,{fileName:i,lineNumber:316,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:307,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:303,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:302,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:287,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:286,columnNumber:9},void 0)},void 0,!1)};export{W as M};
