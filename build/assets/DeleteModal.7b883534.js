import{j as e,b as l,cd as o,cc as d}from"./index.50bb4499.js";const m=({showModal:t,handleClose:i,loaderModal:n,linkedData:s,handleDeleteData:r,dataId:a,moduleName:c})=>e("div",{className:"thumbnail-container",children:t&&e("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[800px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${c}?`}),e("img",{src:o,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:i})]}),n===!0?e(d,{}):e("div",{className:"",children:s!=null&&s.length?e("p",{children:`This ${c} is already linked. Please first delete those entries which are linked it with`}):e("button",{className:"btn btn inline-flex justify-center btn-danger",onClick:()=>r(a),children:"Delete"})})]})})});export{m as D};