import{c as T}from"./index.186db273.js";import{r as a,j as i}from"./index.821ab456.js";const N=["xxl","xl","lg","md","sm","xs"],u="xs",B=a.exports.createContext({prefixes:{},breakpoints:N,minBreakpoint:u});function A(r,t){const{prefixes:s}=a.exports.useContext(B);return r||s[t]||t}const g=a.exports.forwardRef(({bsPrefix:r,className:t,striped:s,bordered:p,borderless:$,hover:f,size:c,variant:x,responsive:o,...m},d)=>{const e=A(r,"table"),b=T(t,e,x&&`${e}-${x}`,c&&`${e}-${c}`,s&&`${e}-${typeof s=="string"?`striped-${s}`:"striped"}`,p&&`${e}-bordered`,$&&`${e}-borderless`,f&&`${e}-hover`),l=i("table",{...m,className:b,ref:d});if(o){let n=`${e}-responsive`;return typeof o=="string"&&(n=`${n}-${o}`),i("div",{className:n,children:l})}return l});export{g as T};
