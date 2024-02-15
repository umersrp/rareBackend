import{j as e,C as i,c as t,l as r}from"./index.1adaee61.js";import{I as l}from"./InputGroup.460c86e2.js";const o=()=>e("div",{children:e(i,{title:"Input Mask",children:t("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e(r,{label:"Credit Card",isMask:!0,options:{creditCard:!0},placeholder:"0000 0000 0000 0000"}),e(l,{label:"Phone Number",prepend:"MY (+6)",placeholder:"Phone Number",id:"phoneNumber",options:{phone:!0,phoneRegionCode:"US"},isMask:!0}),e(r,{label:"Date",id:"date",options:{date:!0,datePattern:["Y","m","d"]},placeholder:"YYYY-MM-DD",isMask:!0}),e(r,{label:"Time",id:"time",options:{time:!0,timePattern:["h","m","s"]},placeholder:"HH:MM:SS",isMask:!0}),e(r,{label:"Numeral Formatting",id:"nu",options:{numeral:!0},placeholder:"10,000",isMask:!0}),e(r,{label:"Blocks",id:"block",options:{blocks:[4,3,3],uppercase:!0},placeholder:"Block[1,4,7]",isMask:!0}),e(r,{label:"Delimiters",id:"delimiters",options:{delimiter:"\xB7",blocks:[3,3,3],uppercase:!0},placeholder:"Delimiter: '.'",isMask:!0}),e(r,{label:"Custom Delimiters",id:"customDelimiter",options:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0},placeholder:"Delimiter: ['.', '.', '-']",isMask:!0}),e(r,{label:"prefix",id:"prefix",options:{prefix:"+88",blocks:[3,3,3,4],uppercase:!0},placeholder:"+88",isMask:!0})]})})});export{o as default};
