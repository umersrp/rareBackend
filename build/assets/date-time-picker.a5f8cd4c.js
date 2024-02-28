import{r,j as e,e as f,aA as a}from"./index.5e95c51c.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\forms\\date-time-picker.jsx";const p=()=>{const[m,o]=r.exports.useState(new Date),[n,u]=r.exports.useState(new Date),[d,t]=r.exports.useState(new Date),[c,s]=r.exports.useState(new Date),[N,b]=r.exports.useState(new Date);return e("div",{children:e(f,{title:"Date & Time Picker",children:e("div",{className:"grid xl:grid-cols-2  grid-cols-1 gap-5",children:[e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Default Functionality"},void 0,!1,{fileName:l,lineNumber:16,columnNumber:13},void 0),e(a,{className:"form-control py-2",value:m,onChange:i=>o(i),id:"default-picker"},void 0,!1,{fileName:l,lineNumber:20,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:15,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"date-time-picker",children:"Date & Time"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:13},void 0),e(a,{value:n,"data-enable-time":!0,id:"date-time-picker",className:"form-control py-2",onChange:i=>u(i)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:27,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"range-picker",children:"Range"},void 0,!1,{fileName:l,lineNumber:40,columnNumber:13},void 0),e(a,{value:d,id:"range-picker",className:"form-control py-2",onChange:i=>t(i),options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}},void 0,!1,{fileName:l,lineNumber:43,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:39,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"disabled-picker",children:"Disabled Range"},void 0,!1,{fileName:l,lineNumber:55,columnNumber:13},void 0),e(a,{value:c,id:"disabled-picker",className:"form-control py-2",onChange:i=>s(i),options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date(new Date().getTime()+120*60*60*1e3)}]}},void 0,!1,{fileName:l,lineNumber:58,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:54,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",id:"timepicker",children:"Basic 24hrs"},void 0,!1,{fileName:l,lineNumber:76,columnNumber:13},void 0),e(a,{className:"form-control py-2",value:N,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:i=>b(i)},void 0,!1,{fileName:l,lineNumber:79,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:75,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"},void 0,!1,{fileName:l,lineNumber:93,columnNumber:13},void 0),e(a,{value:m,id:"multi-dates-picker",className:"form-control py-2",options:{mode:"multiple"},onChange:i=>o(i)},void 0,!1,{fileName:l,lineNumber:96,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:92,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"hf-picker",children:"Human Friendly"},void 0,!1,{fileName:l,lineNumber:105,columnNumber:13},void 0),e(a,{value:m,id:"hf-picker",className:"form-control py-2",onChange:i=>o(i),options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},void 0,!1,{fileName:l,lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:104,columnNumber:11},void 0),e("div",{children:[e("label",{className:"form-label",for:"inline-picker",children:"Inline"},void 0,!1,{fileName:l,lineNumber:121,columnNumber:13},void 0),e(a,{className:"form-control py-2",value:m,options:{inline:!0},onChange:i=>o(i)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:120,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:13,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:12,columnNumber:5},void 0)};export{p as default};
