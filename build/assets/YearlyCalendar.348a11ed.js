import{R as V,r,cg as Y,j as e,F as _,c as l,aq as W,ch as q,bQ as H,bO as Q,W as J,L as K,N as D,ci as X}from"./index.a065b7d1.js";const Z={menu:t=>({...t,backgroundColor:"white",zIndex:9999,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"4px",border:"1px solid #ccc"})},k=({booking:t,handleDataUpdate:f,setSelectedBooking:m})=>{const[x,u]=r.exports.useState(!1);return r.exports.useEffect(()=>{u(!0);const b=setTimeout(()=>{u(!1)},1500);return()=>clearTimeout(b)},[t]),l("div",{className:"sidebar overflow-hidden",children:[l("div",{className:"flex items-center justify-between",children:[e("h4",{className:"mb-4",children:"Reservation"}),e(J,{title:"Do you want to Cancel this booking?",label:"Cancel booking",labelClass:"btn btn inline-flex justify-center btn-danger py-[8px] px-[24px] rounded-[5px]",uncontrol:!0,alldata:t,onDataUpdate:f,bookingUpdate:!0,cancelbooking:!0,setSelectedBooking:m,children:e("h4",{className:"font-medium text-lg mb-3 text-slate-900 text-center",children:"Are you sure?"})})]}),x?l(_,{children:[e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{}),e(a,{})]}):l(_,{children:[e("h5",{className:"mb-4 borderBottom-calendar",children:"Property Details"}),l("div",{className:"flex border-line mb-4",children:[l("div",{className:"w-[100%] ",children:[l("p",{className:"capitalize  ",children:[e("b",{children:"Unit Number"}),":"]}),l("p",{className:"capitalize  ",children:[e("b",{children:"Owner Name"}),":"]})]}),l("div",{className:"text-right w-[100%]",children:[e("p",{className:"capitalize  boder-line",children:t.unitnumber?t.unitnumber:"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.owner_name?t.owner_name:"Not Available"})]})]}),e("h5",{className:"mb-4 borderBottom-calendar",children:"Guest Information"}),l("div",{className:"flex border-line",children:[l("div",{className:"w-[100%]",children:[l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Guest Name"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Mobile Number"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Total Occupants"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Confirmation Code"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Reservation Date"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Check-in Date"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Check-out Date"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"No of Nights"}),":"]}),l("p",{className:"capitalize  boder-line",children:[e("b",{children:"Tourism Fee"}),":"]})]}),l("div",{className:"text-right w-[100%]",children:[e("p",{className:"capitalize  boder-line",children:t.guestname?t.guestname:"Not Available"}),e("p",{className:"capitalize  boder-line ",children:t.mobilenumber?t.mobilenumber:"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.totaloccupants?t.totaloccupants:"0"}),e("p",{className:"capitalize  boder-line",children:t.confirmationcode?t.confirmationcode:"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.reservationdate?new Date(t.reservationdate).toDateString():"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.start_time?new Date(t.start_time).toDateString():"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.end_time?new Date(t.end_time).toDateString():"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.nonight?t.nonight:"Not Available"}),e("p",{className:"capitalize  boder-line",children:t.tourismfee?t.tourismfee:"0.00"})]})]}),e("div",{className:"w-[100%] col-span-3",children:e("div",{className:"borderBottom-calendar"})}),e("h5",{className:"mb-4",children:"Booking Information"}),l("p",{className:"capitalize",children:[e("b",{children:"TOTAL PAYOUT"}),": ",t.totalpayout?parseFloat(t.totalpayout).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]}),l("p",{className:"capitalize",children:[e("b",{children:"Total Collection All incl"}),": ",t.totalcollectall?parseFloat(t.totalcollectall).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]})]}),e("div",{className:"flex justify-center mt-[10px]",children:e(K,{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",target:"_blank",to:`/view-booking/${t._id}`,type:"button",children:"View Full Booking"})})]})},a=()=>e("div",{className:"shimmer-div mt-[10px]",children:e("p",{className:"shimmer-paragraph"})}),ee=()=>{const[t,f]=r.exports.useState([]),[m,x]=r.exports.useState([]),[u,b]=r.exports.useState(null),[O,w]=r.exports.useState(!1),[y,ae]=r.exports.useState(Y()),[P,j]=r.exports.useState(!1),[F,p]=r.exports.useState(!1);r.exports.useState("");const[N,R]=r.exports.useState([]);r.exports.useEffect(()=>{(async()=>{p(!0);try{const[n,d]=await Promise.all([await D.get("http://portals.rarehomesgroup.com/property/shortterm"),await D.get("http://portals.rarehomesgroup.com/booking/api/calenderbooking")]),g=n.data.data,S=d.data.data,z=g.map(s=>({id:s._id,title:l("div",{className:"flex",children:[console.log("222222",`http://portals.rarehomesgroup.com${s.propertyimages[0]}`),l("div",{className:" flex gap-x-2",children:[s.propertyimages[0]?e("img",{className:"max-w-[50%] h-[50%]",src:`http://portals.rarehomesgroup.com${s.propertyimages[0]}`}):e("img",{className:"max-w-[25%] h-[100%]",src:X}),e("p",{className:"text-[12px]",children:`${s.unitnumber} | ${s.projectname} | ${s.buildingname}`})]})]})})),v=g.map(s=>{const{_id:h,unitnumber:$,projectname:A,buildingname:B}=s;if(h!=""&&$!=""&&A!=""&&B!="")return{label:`${$} | ${A} | ${B}`,value:h}});console.log("selectedPropertyDatas",v),R(v),console.log(y.clone().startOf("month").valueOf());const i=S.map(s=>{let h=new Date(s.checkoutdate);return h.setDate(h.getDate()+1),{...s,id:s._id,group:s.propertyid,title:s.unitnumber+" | "+s.project_name+" | "+s.building_name,start_time:new Date(s.checkindate).valueOf(),end_time:h.valueOf()}});f(z),x(i),p(!1)}catch(n){console.error("Error fetching data:",n),p(!1)}})()},[]);const I=async()=>{p(!0),(async()=>{try{const[n,d]=await Promise.all([D.get("http://portals.rarehomesgroup.com/property/shortterm"),D.get("http://portals.rarehomesgroup.com/booking/api/cancelledbooking?cancelled=false")]),g=n.data,S=d.data,z=g.map(i=>({id:i._id,title:i.unitnumber+`
`+i.projectname+`
`+i.buildingname})),v=S.map(i=>{let s=new Date(i.checkoutdate);return s.setDate(s.getDate()+1),{...i,id:i._id,group:i.propertyid,title:i.unitnumber+" | "+i.project_name+" | "+i.building_name,start_time:new Date(i.checkindate).valueOf(),end_time:s.valueOf()}});f(z),x(v),b(null),w(!1),p(!1)}catch(n){console.error("Error fetching data:",n),p(!1)}})()},T=c=>{const n=m.find(d=>d.id===c);b(n),w(!0)},L=()=>{w(!1)},[o,C]=r.exports.useState({id:[]}),E=c=>{const n=c.map(d=>d.value);C({...o,id:n})},G=()=>{C({...o,id:[]})},U=()=>o.id.length==0?t:t.filter(c=>o.id.includes(c.id)),M=()=>o.id.length==0?m:m.filter(c=>o.id.includes(c.propertyid));return console.log("selectedPropertyData",N),e(_,{children:F===!1?l("div",{className:"relative",children:[e("div",{className:"w-[100%] col-span-3 p-5",children:e(W,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N.filter(c=>o==null?void 0:o.id.includes(c.value)),onChange:E,styles:Z,id:"hh",placeholder:"Select Property filter option...",isMulti:!0})}),o.id.length>0?e("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:e("button",{onClick:G,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Reset"})}):null,e("div",{className:"timeline-container",children:e(q,{groups:N?U():t,items:N?M():m,sidebarWidth:300,lineHeight:50,defaultTimeStart:y.clone().startOf("month"),defaultTimeEnd:y.clone().endOf("month"),onItemClick:T,touchScrollEnabled:!0,canMove:!1,canChangeGroup:!1})}),e("div",{className:`sidebar-container ${O?"show":""}`,children:l("div",{className:"sidebar-content",children:[e("img",{src:H,className:"w-[25px] cursor-pointer mb-[25px]",alt:"CancelIcon",onClick:L}),u&&e(k,{booking:u,reFetchData:P,setReFetchData:j,handleDataUpdate:I,setSelectedBooking:b})]})})]}):e(Q,{})})},le=V.memo(ee);export{le as default};