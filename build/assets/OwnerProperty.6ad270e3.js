import{bt as P,b$ as j,r as t,j as l,F as n,bN as _,e as $,L as C,I as f,c0 as O}from"./index.be4bdfd6.js";import{P as T}from"./pdf-icon.2fc2c516.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\property\\OwnerProperty.jsx";const I=({data:r,label:e})=>{const[c,d]=t.exports.useState(!1),a=(v,N)=>{O.exports.saveAs(v,N)},b=()=>{d(!0)},u=()=>{d(!1)};return l("div",{className:"thumbnail-container",children:[l("label",{htmlFor:"default-picker",className:"form-label",children:e},void 0,!1,{fileName:i,lineNumber:26,columnNumber:13},void 0),l("div",{className:"thumbnail-wrapper",children:r&&r!==void 0&&r!=="undefined"?l("div",{className:`thumbnail ${r.toLowerCase().endsWith(".pdf")?"pdf-image":""}`,children:[r.toLowerCase().endsWith(".pdf")?l("img",{src:T,alt:"PDF Thumbnail",className:"w-[250px] h-[250px]"},void 0,!1,{fileName:i,lineNumber:33,columnNumber:29},void 0):l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract"},void 0,!1,{fileName:i,lineNumber:39,columnNumber:29},void 0),l("div",{className:"thumbnail-buttons",children:l("div",{className:"flex items-center justify-center gap-x-[10px]",children:[l("button",{onClick:()=>a(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-download",children:l(f,{icon:"heroicons-outline:arrow-down-tray"},void 0,!1,{fileName:i,lineNumber:44,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:43,columnNumber:33},void 0),r.toLowerCase().endsWith(".pdf")?l("a",{target:"_blank",href:`http://dev-rare.srp.ai${r}`,className:"btn-view text-white",children:l(f,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:52,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:51,columnNumber:41},void 0):l("button",{onClick:b,className:"btn-view",children:l(f,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:i,lineNumber:49,columnNumber:45},void 0)},void 0,!1,{fileName:i,lineNumber:48,columnNumber:41},void 0)]},void 0,!0,{fileName:i,lineNumber:42,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:41,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:31,columnNumber:21},void 0):l("p",{className:"form-control py-2",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:29,columnNumber:13},void 0),c&&l("div",{className:"modal-overlay",children:l("div",{className:"modal",children:[l("img",{src:`http://dev-rare.srp.ai${r}`,alt:"Tenancy Contract",className:"w-[800px] object-contain"},void 0,!1,{fileName:i,lineNumber:65,columnNumber:25},void 0),l("div",{className:"flex gap-x-[20px] items-center mt-[20px] justify-end",children:[l("button",{onClick:()=>a(`http://dev-rare.srp.ai${r}`,`${decodeURIComponent(r).split("/").pop()}`),className:"btn-dark py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Download"},void 0,!1,{fileName:i,lineNumber:67,columnNumber:29},void 0),l("button",{onClick:u,className:"btn-secondary py-[8px] px-[24px] rounded-[5px] cursor-pointer select-none",children:"Close"},void 0,!1,{fileName:i,lineNumber:68,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:66,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:64,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:63,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:25,columnNumber:9},void 0)},B=()=>{var N,s,p,h,y,w,x,g,k,F;const{id:r}=P(),{data:e,error:c,isLoading:d,isFetching:a,isSuccess:b}=j(r),[u,v]=t.exports.useState("");return t.exports.useEffect(()=>{if(e!=null&&e.youtubelink){let m=e==null?void 0:e.youtubelink,o=m==null?void 0:m.replace("watch?v=","embed/");v(o)}},[e==null?void 0:e.youtubelink]),l(n,{children:[d||a&&l(_,{},void 0,!1,{fileName:i,lineNumber:92,columnNumber:41},void 0),c&&l("p",{children:"Something went wrong"},void 0,!1,{fileName:i,lineNumber:93,columnNumber:23},void 0),b&&e&&l("div",{className:" space-y-5",children:l("div",{children:l("div",{children:l($,{title:"View Property",children:l("div",{children:l("div",{className:"flex z-[5] items-start relative justify-center",children:l("div",{className:"conten-box w-[100%]",children:[l("div",{children:l("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5",children:[l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit number"},void 0,!1,{fileName:i,lineNumber:105,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.unitnumber?e==null?void 0:e.unitnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:108,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:104,columnNumber:53},void 0),(e==null?void 0:e.propertytype)==="Townhouse"||(e==null?void 0:e.propertytype)==="Villa"?l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Street Number"},void 0,!1,{fileName:i,lineNumber:113,columnNumber:65},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.streetnumber?e==null?void 0:e.streetnumber:"Not Available"},void 0,!1,{fileName:i,lineNumber:116,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:112,columnNumber:61},void 0):null,l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Usage"},void 0,!1,{fileName:i,lineNumber:120,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.usage?e==null?void 0:e.usage:"Not Available"},void 0,!1,{fileName:i,lineNumber:123,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:119,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type"},void 0,!1,{fileName:i,lineNumber:126,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertytype?e==null?void 0:e.propertytype:"Not Available"},void 0,!1,{fileName:i,lineNumber:129,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:125,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Status"},void 0,!1,{fileName:i,lineNumber:132,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.projectstatus?e==null?void 0:e.projectstatus:"Not Available"},void 0,!1,{fileName:i,lineNumber:135,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:131,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Transaction type"},void 0,!1,{fileName:i,lineNumber:138,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.transactiontype?e==null?void 0:e.transactiontype:"Not Available"},void 0,!1,{fileName:i,lineNumber:141,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:137,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Project Name"},void 0,!1,{fileName:i,lineNumber:144,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.project_name?e==null?void 0:e.project_name:"Not Avaiable"},void 0,!1,{fileName:i,lineNumber:147,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:143,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Name"},void 0,!1,{fileName:i,lineNumber:150,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.building_name?e==null?void 0:e.building_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:153,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:149,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Sub type"},void 0,!1,{fileName:i,lineNumber:156,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.subtype_name?e==null?void 0:e.subtype_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:159,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:155,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type Layout"},void 0,!1,{fileName:i,lineNumber:162,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.typelayout?e==null?void 0:e.typelayout:"Not Available"},void 0,!1,{fileName:i,lineNumber:165,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:161,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Tenancy Status"},void 0,!1,{fileName:i,lineNumber:168,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.tenancystatus?e==null?void 0:e.tenancystatus:"Not Availbale"},void 0,!1,{fileName:i,lineNumber:171,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:167,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Floor"},void 0,!1,{fileName:i,lineNumber:174,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.floor?e==null?void 0:e.floor:"Not Available"},void 0,!1,{fileName:i,lineNumber:177,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:173,columnNumber:53},void 0),(e==null?void 0:e.propertytype)==="Residential- Apartment"?l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Size Area"},void 0,!1,{fileName:i,lineNumber:182,columnNumber:65},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.sizearea?e==null?void 0:e.sizearea:"Not Available"},void 0,!1,{fileName:i,lineNumber:185,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:181,columnNumber:61},void 0):null,l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Size"},void 0,!1,{fileName:i,lineNumber:189,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.plotsize?e==null?void 0:e.plotsize:"Not Available"},void 0,!1,{fileName:i,lineNumber:192,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:188,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"build up area"},void 0,!1,{fileName:i,lineNumber:195,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.builduparea?e==null?void 0:e.builduparea:"Not Available"},void 0,!1,{fileName:i,lineNumber:198,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:194,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Community Name"},void 0,!1,{fileName:i,lineNumber:201,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.community_name?e==null?void 0:e.community_name:"Not Available"},void 0,!1,{fileName:i,lineNumber:204,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:200,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Association"},void 0,!1,{fileName:i,lineNumber:207,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.ownerassociation?e==null?void 0:e.ownerassociation:"Not Available"},void 0,!1,{fileName:i,lineNumber:210,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:206,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Full Bathroom"},void 0,!1,{fileName:i,lineNumber:213,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.nobathroom?e==null?void 0:e.nobathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:216,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:212,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Half Bathroom"},void 0,!1,{fileName:i,lineNumber:219,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.halfbathroom?e==null?void 0:e.halfbathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:222,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:218,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No of Bathroom"},void 0,!1,{fileName:i,lineNumber:225,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.totalbathroom?e==null?void 0:e.totalbathroom:"Not Available"},void 0,!1,{fileName:i,lineNumber:228,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:224,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Developer Name"},void 0,!1,{fileName:i,lineNumber:231,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.developer_name?e==null?void 0:e.developer_name:"Not available"},void 0,!1,{fileName:i,lineNumber:234,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:230,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Furnished"},void 0,!1,{fileName:i,lineNumber:237,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.furnished?e==null?void 0:e.furnished:"Not Available"},void 0,!1,{fileName:i,lineNumber:240,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:236,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Kitchen"},void 0,!1,{fileName:i,lineNumber:243,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.kitchen?e==null?void 0:e.kitchen:"Not Available"},void 0,!1,{fileName:i,lineNumber:246,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:242,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"No of parking"},void 0,!1,{fileName:i,lineNumber:249,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.noparking?e==null?void 0:e.noparking:"Not Available"},void 0,!1,{fileName:i,lineNumber:252,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:248,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Type Of Balcony"},void 0,!1,{fileName:i,lineNumber:255,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"},void 0,!1,{fileName:i,lineNumber:258,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:254,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Total Bedroom"},void 0,!1,{fileName:i,lineNumber:261,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.balcony?e==null?void 0:e.balcony:"Not available"},void 0,!1,{fileName:i,lineNumber:264,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:260,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Dewapremises"},void 0,!1,{fileName:i,lineNumber:267,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.dewapremises?e==null?void 0:e.dewapremises:"Not Available"},void 0,!1,{fileName:i,lineNumber:270,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:266,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"District"},void 0,!1,{fileName:i,lineNumber:273,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.district?e==null?void 0:e.district:"Not Available"},void 0,!1,{fileName:i,lineNumber:276,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:272,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Parking Bay"},void 0,!1,{fileName:i,lineNumber:279,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.parkingbay?e==null?void 0:e.parkingbay:"Not Available"},void 0,!1,{fileName:i,lineNumber:282,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:278,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Property View"},void 0,!1,{fileName:i,lineNumber:285,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.propertyview?e==null?void 0:e.propertyview:"Not available"},void 0,!1,{fileName:i,lineNumber:288,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:284,columnNumber:53},void 0),l(n,{},void 0,!1),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Location"},void 0,!1,{fileName:i,lineNumber:299,columnNumber:57},void 0),l("a",{className:"  form-control py-2   ",target:"_blank",href:`${e!=null&&e.propertylocation?e==null?void 0:e.propertylocation:"#"}`,children:e!=null&&e.propertylocation?((N=e==null?void 0:e.propertylocation)==null?void 0:N.slice(0,80))+(((s=e==null?void 0:e.propertylocation)==null?void 0:s.length)>100,""):"Not Available"},void 0,!1,{fileName:i,lineNumber:303,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:298,columnNumber:53},void 0),l(n,{},void 0,!1),l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"YOUTUBE Video"},void 0,!1,{fileName:i,lineNumber:330,columnNumber:57},void 0),e!=null&&e.youtubelink?l("div",{className:"flex w-[100%] col-span-2 justify-between mt-[34px] flex-wrap gap-y-[25px]",children:l("div",{className:"w-[100%] flex items-end justify-center",children:l("iframe",{title:"YouTube Link",src:u,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full",width:"100%",height:500},void 0,!1,{fileName:i,lineNumber:337,columnNumber:73},void 0)},void 0,!1,{fileName:i,lineNumber:336,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:335,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:340,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:329,columnNumber:53},void 0),l("div",{className:"w-[100%] col-span-2",children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Property Images"},void 0,!1,{fileName:i,lineNumber:344,columnNumber:57},void 0),((p=e==null?void 0:e.propertyimages)==null?void 0:p.length)!==0&&(e==null?void 0:e.propertyimages[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.propertyimages.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:353,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:352,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:349,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:358,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:343,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Floor Plan"},void 0,!1,{fileName:i,lineNumber:362,columnNumber:57},void 0),((h=e==null?void 0:e.floorplan)==null?void 0:h.length)!==0&&(e==null?void 0:e.floorplan[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.floorplan.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:371,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:370,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:367,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:376,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:361,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Building Elevation"},void 0,!1,{fileName:i,lineNumber:380,columnNumber:57},void 0),((y=e==null?void 0:e.buildingelevation)==null?void 0:y.length)!==0&&(e==null?void 0:e.buildingelevation[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.buildingelevation.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:389,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:388,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:385,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:394,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:379,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Typical Floor Plan"},void 0,!1,{fileName:i,lineNumber:398,columnNumber:57},void 0),((w=e==null?void 0:e.typicalfloorplan)==null?void 0:w.length)!==0&&(e==null?void 0:e.typicalfloorplan[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.typicalfloorplan.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:407,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:406,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:403,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:412,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:397,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Amenities images"},void 0,!1,{fileName:i,lineNumber:416,columnNumber:57},void 0),((x=e==null?void 0:e.amenitiesimages)==null?void 0:x.length)!==0&&(e==null?void 0:e.amenitiesimages[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.amenitiesimages.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:425,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:424,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:421,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:430,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:415,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Unit Plan Attachment"},void 0,!1,{fileName:i,lineNumber:434,columnNumber:57},void 0),((g=e==null?void 0:e.unitplanattachment)==null?void 0:g.length)!==0&&(e==null?void 0:e.unitplanattachment[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.unitplanattachment.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:443,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:442,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:439,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:448,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:433,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Plot Plan Attachment"},void 0,!1,{fileName:i,lineNumber:452,columnNumber:57},void 0),((k=e==null?void 0:e.plotplanattachment)==null?void 0:k.length)!==0&&(e==null?void 0:e.plotplanattachment[0])!==""?l("div",{className:"flex flex-wrap space-x-5 rtl:space-x-reverse",children:e==null?void 0:e.plotplanattachment.map((m,o)=>l("div",{className:"xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200",children:l("img",{src:"http://dev-rare.srp.ai"+m,alt:`Property Images ${o}`,className:"object-cover w-full h-full rounded"},void 0,!1,{fileName:i,lineNumber:461,columnNumber:81},void 0)},o,!1,{fileName:i,lineNumber:460,columnNumber:77},void 0))},void 0,!1,{fileName:i,lineNumber:457,columnNumber:65},void 0):l("p",{className:"regular text-[20px] leading-[27px] color-black mt-[20px]",children:"Not Available"},void 0,!1,{fileName:i,lineNumber:466,columnNumber:65},void 0)]},void 0,!0,{fileName:i,lineNumber:451,columnNumber:53},void 0),l("div",{className:"w-[100%] col-span-2",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-6 mt-10",children:"Owner Details"},void 0,!1,{fileName:i,lineNumber:470,columnNumber:57},void 0)},void 0,!1,{fileName:i,lineNumber:469,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Name"},void 0,!1,{fileName:i,lineNumber:475,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.owner_name?e==null?void 0:e.owner_name:"Not available"},void 0,!1,{fileName:i,lineNumber:478,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:474,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Owner Representative Name"},void 0,!1,{fileName:i,lineNumber:481,columnNumber:57},void 0),l("p",{className:"  form-control py-2   capitalize",children:e!=null&&e.representative_name?e==null?void 0:e.representative_name:"Not available"},void 0,!1,{fileName:i,lineNumber:484,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:480,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Purchased Date As Per Title Deed"},void 0,!1,{fileName:i,lineNumber:487,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.purchasedate?new Date(e==null?void 0:e.purchasedate).toDateString():"Not available"},void 0,!1,{fileName:i,lineNumber:490,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:486,columnNumber:53},void 0),l(n,{},void 0,!1),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"no of Owner Name as per title deed"},void 0,!1,{fileName:i,lineNumber:501,columnNumber:57},void 0),l("p",{className:"  form-control py-2   capitalize",children:e!=null&&e.no_ownernamedeed?e==null?void 0:e.no_ownernamedeed:"Not available"},void 0,!1,{fileName:i,lineNumber:504,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:500,columnNumber:53},void 0),(e==null?void 0:e.OwnerNameAsPerDeed)&&(e==null?void 0:e.no_ownernamedeed)&&(e==null?void 0:e.no_ownernamedeed)!=="0"?l(n,{children:(F=e==null?void 0:e.OwnerNameAsPerDeed)==null?void 0:F.map((m,o)=>{var A;return l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:["Owner Name as per title deed ",((A=e==null?void 0:e.OwnerNameAsPerDeed)==null?void 0:A.length)>1?" - "+(o+1):null]},void 0,!0,{fileName:i,lineNumber:513,columnNumber:81},void 0),l("p",{className:"  form-control py-2   capitalize",children:m!=null&&m.ownernameasperdeed?m==null?void 0:m.ownernameasperdeed:"Not available"},void 0,!1,{fileName:i,lineNumber:516,columnNumber:81},void 0)]},m==null?void 0:m._id,!0,{fileName:i,lineNumber:512,columnNumber:77},void 0)})},void 0,!1):null,l("div",{children:e!=null&&e.titledeeddocument?l(I,{data:e==null?void 0:e.titledeeddocument,label:"title deed document PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:526,columnNumber:65},void 0):l(n,{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"title deed document PDF/PNG/JPG"},void 0,!1,{fileName:i,lineNumber:528,columnNumber:69},void 0),l("p",{className:"  form-control py-2   capitalize",children:"Not available"},void 0,!1,{fileName:i,lineNumber:531,columnNumber:69},void 0)]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:523,columnNumber:53},void 0),l("div",{children:[l("label",{htmlFor:"default-picker",className:" form-label",children:"Purchase Value"},void 0,!1,{fileName:i,lineNumber:536,columnNumber:57},void 0),l("p",{className:"  form-control py-2   ",children:e!=null&&e.purchasevaue?e==null?void 0:e.purchasevaue:"Not available"},void 0,!1,{fileName:i,lineNumber:539,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:535,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:103,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:102,columnNumber:45},void 0),l("div",{className:"flex justify-end mt-10 text-right gap-x-[25px]",children:l(C,{to:"/owner-properties",className:"btn btn inline-flex justify-center btn-secondary",children:"Back"},void 0,!1,{fileName:i,lineNumber:544,columnNumber:49},void 0)},void 0,!1,{fileName:i,lineNumber:543,columnNumber:45},void 0)]},void 0,!0,{fileName:i,lineNumber:101,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:100,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:99,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:98,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:97,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:96,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:95,columnNumber:17},void 0)]},void 0,!0)};export{B as default};
