import{r as x,c9 as u}from"./index.6ea38f67.js";import{u as N,j as c}from"./ThemeProvider.1dd0d041.js";const j=x.exports.forwardRef(({bsPrefix:l,className:f,striped:e,bordered:d,borderless:i,hover:n,size:a,variant:o,responsive:r,...m},p)=>{const s=N(l,"table"),b=u(f,s,o&&`${s}-${o}`,a&&`${s}-${a}`,e&&`${s}-${typeof e=="string"?`striped-${e}`:"striped"}`,d&&`${s}-bordered`,i&&`${s}-borderless`,n&&`${s}-hover`),$=c("table",{...m,className:b,ref:p});if(r){let t=`${s}-responsive`;return typeof r=="string"&&(t=`${t}-${r}`),c("div",{className:t,children:$})}return $});export{j as T};
