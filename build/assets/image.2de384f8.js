import{j as e,c as l,C as m}from"./index.b447658d.js";const a=({wrapperClass:t="custom-class",src:s,className:c,alt:i="image-title"})=>e("div",{className:`relative ${t}`,children:s?e("img",{src:s,alt:i,className:`max-w-full block ${c}`}):l("div",{className:"bg-neutral-300 w-full h-[200px] flex flex-col items-center justify-center font-medium rounded-md text-xl text-slate-900 capitalize",children:["Please Set Image",e("code",{className:"text-sm text-primary-500 lowercase mt-3",children:'[src="images/all-img/image-1.png"]'})]})}),r="/assets/image-1.7cb9ebd9.png",n="/assets/image-2.d5c69ef8.png",d="/assets/image-3.e1ab9ff8.png",g="/assets/thumb-1.99dacc0e.png",o="/assets/thumb-2.dfb96599.png",p="/assets/thumb-3.3dc5faa9.png",u="/assets/thumb-4.dff1bf1d.png",f="/assets/thumb-5.0472f40b.png",b="/assets/thumb-6.6fca5971.png",h=[{src:g},{src:o},{src:p},{src:u},{src:f},{src:b}],v=()=>e("div",{children:l("div",{className:"space-y-5",children:[e(m,{title:"Images",children:e(a,{src:r,alt:"image one",className:"rounded-md"})}),l(m,{title:"Responsive images",children:[e("span",{className:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5",children:"Small image with fluid"}),e(a,{src:n,alt:"Small image with fluid:",className:"rounded-md mb-6"}),e("span",{className:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5",children:"Large image with fluid-grow:"}),e(a,{src:d,alt:"Small image with fluid-grow:",className:"rounded-md w-full "})]}),e(m,{title:"Responsive images",children:e("div",{className:"grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:h.map((t,s)=>e(a,{src:t.src,alt:"thumb-1",className:"rounded-md border-4 border-slate-300"},s))})})]})});export{v as default};
