import{r as i,j as e,C as f,c as l,aC as r}from"./index.4de300c8.js";const b=()=>{const[t,o]=i.exports.useState(new Date),[c,n]=i.exports.useState(new Date),[s,d]=i.exports.useState(new Date),[m,p]=i.exports.useState(new Date),[h,u]=i.exports.useState(new Date);return e("div",{children:e(f,{title:"Date & Time Picker",children:l("div",{className:"grid xl:grid-cols-2  grid-cols-1 gap-5",children:[l("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Default Functionality"}),e(r,{className:"form-control py-2",value:t,onChange:a=>o(a),id:"default-picker"})]}),l("div",{children:[e("label",{className:"form-label",for:"date-time-picker",children:"Date & Time"}),e(r,{value:c,"data-enable-time":!0,id:"date-time-picker",className:"form-control py-2",onChange:a=>n(a)})]}),l("div",{children:[e("label",{className:"form-label",for:"range-picker",children:"Range"}),e(r,{value:s,id:"range-picker",className:"form-control py-2",onChange:a=>d(a),options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]}),l("div",{children:[e("label",{className:"form-label",for:"disabled-picker",children:"Disabled Range"}),e(r,{value:m,id:"disabled-picker",className:"form-control py-2",onChange:a=>p(a),options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date(new Date().getTime()+120*60*60*1e3)}]}})]}),l("div",{children:[e("label",{className:"form-label",id:"timepicker",children:"Basic 24hrs"}),e(r,{className:"form-control py-2",value:h,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:a=>u(a)})]}),l("div",{children:[e("label",{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"}),e(r,{value:t,id:"multi-dates-picker",className:"form-control py-2",options:{mode:"multiple"},onChange:a=>o(a)})]}),l("div",{children:[e("label",{className:"form-label",for:"hf-picker",children:"Human Friendly"}),e(r,{value:t,id:"hf-picker",className:"form-control py-2",onChange:a=>o(a),options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]}),l("div",{children:[e("label",{className:"form-label",for:"inline-picker",children:"Inline"}),e(r,{className:"form-control py-2",value:t,options:{inline:!0},onChange:a=>o(a)})]})]})})})};export{b as default};
