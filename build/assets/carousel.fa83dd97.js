import{j as n,e as D}from"./index.72434430.js";import{g as q,$ as T,n as R,e as V,b as U,c as X,S as Y,E as W,a as C}from"./effect-cards.min.248ee5e2.js";function G(e,y,u,f){const r=q();return e.params.createElements&&Object.keys(f).forEach(d=>{if(!u[d]&&u.auto===!0){let m=e.$el.children(`.${f[d]}`)[0];m||(m=r.createElement("div"),m.className=f[d],e.$el.append(m)),u[d]=m,y[d]=m}}),u}function J({swiper:e,extendParams:y,on:u,emit:f}){y({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function r(i){let s;return i&&(s=T(i),e.params.uniqueNavElements&&typeof i=="string"&&s.length>1&&e.$el.find(i).length===1&&(s=e.$el.find(i))),s}function d(i,s){const a=e.params.navigation;i&&i.length>0&&(i[s?"addClass":"removeClass"](a.disabledClass),i[0]&&i[0].tagName==="BUTTON"&&(i[0].disabled=s),e.params.watchOverflow&&e.enabled&&i[e.isLocked?"addClass":"removeClass"](a.lockClass))}function m(){if(e.params.loop)return;const{$nextEl:i,$prevEl:s}=e.navigation;d(s,e.isBeginning&&!e.params.rewind),d(i,e.isEnd&&!e.params.rewind)}function b(i){i.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),f("navigationPrev"))}function v(i){i.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),f("navigationNext"))}function p(){const i=e.params.navigation;if(e.params.navigation=G(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;const s=r(i.nextEl),a=r(i.prevEl);s&&s.length>0&&s.on("click",v),a&&a.length>0&&a.on("click",b),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(i.lockClass),a&&a.addClass(i.lockClass))}function h(){const{$nextEl:i,$prevEl:s}=e.navigation;i&&i.length&&(i.off("click",v),i.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",b),s.removeClass(e.params.navigation.disabledClass))}u("init",()=>{e.params.navigation.enabled===!1?$():(p(),m())}),u("toEdge fromEdge lock unlock",()=>{m()}),u("destroy",()=>{h()}),u("enable disable",()=>{const{$nextEl:i,$prevEl:s}=e.navigation;i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),u("click",(i,s)=>{const{$nextEl:a,$prevEl:l}=e.navigation,o=s.target;if(e.params.navigation.hideOnClick&&!T(o).is(l)&&!T(o).is(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let c;a?c=a.hasClass(e.params.navigation.hiddenClass):l&&(c=l.hasClass(e.params.navigation.hiddenClass)),f(c===!0?"navigationShow":"navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),l&&l.toggleClass(e.params.navigation.hiddenClass)}});const x=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),p(),m()},$=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),h()};Object.assign(e.navigation,{enable:x,disable:$,update:m,init:p,destroy:h})}function S(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K({swiper:e,extendParams:y,on:u,emit:f}){const r="swiper-pagination";y({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let d,m=0;function b(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function v(a,l){const{bulletActiveClass:o}=e.params.pagination;a[l]().addClass(`${o}-${l}`)[l]().addClass(`${o}-${l}-${l}`)}function p(){const a=e.rtl,l=e.params.pagination;if(b())return;const o=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let g;const E=e.params.loop?Math.ceil((o-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(g=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),g>o-1-e.loopedSlides*2&&(g-=o-e.loopedSlides*2),g>E-1&&(g-=E),g<0&&e.params.paginationType!=="bullets"&&(g=E+g)):typeof e.snapIndex<"u"?g=e.snapIndex:g=e.activeIndex||0,l.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const N=e.pagination.bullets;let k,O,F;if(l.dynamicBullets&&(d=N.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",`${d*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&e.previousIndex!==void 0&&(m+=g-(e.previousIndex-e.loopedSlides||0),m>l.dynamicMainBullets-1?m=l.dynamicMainBullets-1:m<0&&(m=0)),k=Math.max(g-m,0),O=k+(Math.min(N.length,l.dynamicMainBullets)-1),F=(O+k)/2),N.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(B=>`${l.bulletActiveClass}${B}`).join(" ")),c.length>1)N.each(B=>{const M=T(B),I=M.index();I===g&&M.addClass(l.bulletActiveClass),l.dynamicBullets&&(I>=k&&I<=O&&M.addClass(`${l.bulletActiveClass}-main`),I===k&&v(M,"prev"),I===O&&v(M,"next"))});else{const B=N.eq(g),M=B.index();if(B.addClass(l.bulletActiveClass),l.dynamicBullets){const I=N.eq(k),A=N.eq(O);for(let L=k;L<=O;L+=1)N.eq(L).addClass(`${l.bulletActiveClass}-main`);if(e.params.loop)if(M>=N.length){for(let L=l.dynamicMainBullets;L>=0;L-=1)N.eq(N.length-L).addClass(`${l.bulletActiveClass}-main`);N.eq(N.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else v(I,"prev"),v(A,"next");else v(I,"prev"),v(A,"next")}}if(l.dynamicBullets){const B=Math.min(N.length,l.dynamicMainBullets+4),M=(d*B-d)/2-F*d,I=a?"right":"left";N.css(e.isHorizontal()?I:"top",`${M}px`)}}if(l.type==="fraction"&&(c.find(S(l.currentClass)).text(l.formatFractionCurrent(g+1)),c.find(S(l.totalClass)).text(l.formatFractionTotal(E))),l.type==="progressbar"){let N;l.progressbarOpposite?N=e.isHorizontal()?"vertical":"horizontal":N=e.isHorizontal()?"horizontal":"vertical";const k=(g+1)/E;let O=1,F=1;N==="horizontal"?O=k:F=k,c.find(S(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${O}) scaleY(${F})`).transition(e.params.speed)}l.type==="custom"&&l.renderCustom?(c.html(l.renderCustom(e,g+1,E)),f("paginationRender",c[0])):f("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](l.lockClass)}function h(){const a=e.params.pagination;if(b())return;const l=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,o=e.pagination.$el;let c="";if(a.type==="bullets"){let g=e.params.loop?Math.ceil((l-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&g>l&&(g=l);for(let E=0;E<g;E+=1)a.renderBullet?c+=a.renderBullet.call(e,E,a.bulletClass):c+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;o.html(c),e.pagination.bullets=o.find(S(a.bulletClass))}a.type==="fraction"&&(a.renderFraction?c=a.renderFraction.call(e,a.currentClass,a.totalClass):c=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`,o.html(c)),a.type==="progressbar"&&(a.renderProgressbar?c=a.renderProgressbar.call(e,a.progressbarFillClass):c=`<span class="${a.progressbarFillClass}"></span>`,o.html(c)),a.type!=="custom"&&f("paginationRender",e.pagination.$el[0])}function x(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let l=T(a.el);l.length!==0&&(e.params.uniqueNavElements&&typeof a.el=="string"&&l.length>1&&(l=e.$el.find(a.el),l.length>1&&(l=l.filter(o=>T(o).parents(".swiper")[0]===e.el))),a.type==="bullets"&&a.clickable&&l.addClass(a.clickableClass),l.addClass(a.modifierClass+a.type),l.addClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(l.addClass(`${a.modifierClass}${a.type}-dynamic`),m=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&l.addClass(a.progressbarOppositeClass),a.clickable&&l.on("click",S(a.bulletClass),function(c){c.preventDefault();let g=T(this).index()*e.params.slidesPerGroup;e.params.loop&&(g+=e.loopedSlides),e.slideTo(g)}),Object.assign(e.pagination,{$el:l,el:l[0]}),e.enabled||l.addClass(a.lockClass))}function $(){const a=e.params.pagination;if(b())return;const l=e.pagination.$el;l.removeClass(a.hiddenClass),l.removeClass(a.modifierClass+a.type),l.removeClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&l.off("click",S(a.bulletClass))}u("init",()=>{e.params.pagination.enabled===!1?s():(x(),h(),p())}),u("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&p()}),u("snapIndexChange",()=>{e.params.loop||p()}),u("slidesLengthChange",()=>{e.params.loop&&(h(),p())}),u("snapGridLengthChange",()=>{e.params.loop||(h(),p())}),u("destroy",()=>{$()}),u("enable disable",()=>{const{$el:a}=e.pagination;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),u("lock unlock",()=>{p()}),u("click",(a,l)=>{const o=l.target,{$el:c}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&c&&c.length>0&&!T(o).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&o===e.navigation.nextEl||e.navigation.prevEl&&o===e.navigation.prevEl))return;const g=c.hasClass(e.params.pagination.hiddenClass);f(g===!0?"paginationShow":"paginationHide"),c.toggleClass(e.params.pagination.hiddenClass)}});const i=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),x(),h(),p()},s=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),$()};Object.assign(e.pagination,{enable:i,disable:s,render:h,update:p,init:x,destroy:$})}function Q({swiper:e,extendParams:y,on:u,emit:f}){let r;e.autoplay={running:!1,paused:!1},y({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function d(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const a=e.slides.eq(e.activeIndex);let l=e.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(l=a.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=R(()=>{let o;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),o=e.slidePrev(e.params.speed,!0,!0),f("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?b():(o=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),f("autoplay")):(o=e.slidePrev(e.params.speed,!0,!0),f("autoplay")):e.params.loop?(e.loopFix(),o=e.slideNext(e.params.speed,!0,!0),f("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?b():(o=e.slideTo(0,e.params.speed,!0,!0),f("autoplay")):(o=e.slideNext(e.params.speed,!0,!0),f("autoplay")),(e.params.cssMode&&e.autoplay.running||o===!1)&&d()},l)}function m(){return typeof r<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,f("autoplayStart"),d(),!0)}function b(){return!e.autoplay.running||typeof r>"u"?!1:(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,f("autoplayStop"),!0)}function v(a){!e.autoplay.running||e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,a===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,d()):["transitionend","webkitTransitionEnd"].forEach(l=>{e.$wrapperEl[0].addEventListener(l,h)}))}function p(){const a=q();a.visibilityState==="hidden"&&e.autoplay.running&&v(),a.visibilityState==="visible"&&e.autoplay.paused&&(d(),e.autoplay.paused=!1)}function h(a){!e||e.destroyed||!e.$wrapperEl||a.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(l=>{e.$wrapperEl[0].removeEventListener(l,h)}),e.autoplay.paused=!1,e.autoplay.running?d():b())}function x(){e.params.autoplay.disableOnInteraction?b():(f("autoplayPause"),v()),["transitionend","webkitTransitionEnd"].forEach(a=>{e.$wrapperEl[0].removeEventListener(a,h)})}function $(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,f("autoplayResume"),d())}function i(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",x),e.$el.on("mouseleave",$))}function s(){e.$el.off("mouseenter",x),e.$el.off("mouseleave",$)}u("init",()=>{e.params.autoplay.enabled&&(m(),q().addEventListener("visibilitychange",p),i())}),u("beforeTransitionStart",(a,l,o)=>{e.autoplay.running&&(o||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(l):b())}),u("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?b():v())}),u("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&d()}),u("destroy",()=>{s(),e.autoplay.running&&b(),q().removeEventListener("visibilitychange",p)}),Object.assign(e.autoplay,{pause:v,run:d,start:m,stop:b})}function Z({swiper:e,extendParams:y,on:u}){y({fadeEffect:{crossFade:!1,transformEl:null}}),V({effect:"fade",swiper:e,on:u,setTranslate:()=>{const{slides:d}=e,m=e.params.fadeEffect;for(let b=0;b<d.length;b+=1){const v=e.slides.eq(b);let h=-v[0].swiperSlideOffset;e.params.virtualTranslate||(h-=e.translate);let x=0;e.isHorizontal()||(x=h,h=0);const $=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(v[0].progress),0):1+Math.min(Math.max(v[0].progress,-1),0);U(m,v).css({opacity:$}).transform(`translate3d(${h}px, ${x}px, 0px)`)}},setTransition:d=>{const{transformEl:m}=e.params.fadeEffect;(m?e.slides.find(m):e.slides).transition(d),X({swiper:e,duration:d,transformEl:m,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}var _="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Carousel.jsx";const P=({spaceBetween:e=20,slidesPerView:y=1,onSlideChange:u=()=>{},onSwiper:f,children:r,pagination:d,className:m="main-caro",navigation:b,autoplay:v,effect:p})=>n("div",{children:n(Y,{spaceBetween:e,slidesPerView:y,onSlideChange:u,onSwiper:f,modules:[K,J,Q,Z,W],pagination:d,navigation:b,className:m,autoplay:v,effect:p,children:r},void 0,!1,{fileName:_,lineNumber:30,columnNumber:7},void 0)},void 0,!1,{fileName:_,lineNumber:29,columnNumber:5},void 0),j="/assets/c1.e1ae159b.png",z="/assets/c2.042737a0.png",H="/assets/c3.7e31ec53.png";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\components\\carousel.jsx";const ae=()=>n("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[n(D,{title:"Basic Example",children:n(P,{pagination:!0,navigation:!0,className:"main-caro",children:[n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${j})`}},void 0,!1,{fileName:t,lineNumber:17,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:16,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${z})`}},void 0,!1,{fileName:t,lineNumber:25,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:24,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${H})`}},void 0,!1,{fileName:t,lineNumber:33,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:32,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:15,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:14,columnNumber:7},void 0),n(D,{title:"Basic Example",children:n(P,{pagination:!0,navigation:!0,children:[n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${j})`},children:n("div",{className:"pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white",children:n("div",{className:"max-w-sm",children:[n("h2",{className:"text-xl font-medium text-white",children:"Lorem ipsum"},void 0,!1,{fileName:t,lineNumber:53,columnNumber:19},void 0),n("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.."},void 0,!1,{fileName:t,lineNumber:56,columnNumber:19},void 0)]},void 0,!0,{fileName:t,lineNumber:52,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:51,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:45,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:44,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${z})`},children:n("div",{className:"pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white",children:n("div",{className:"max-w-sm",children:[n("h2",{className:"text-xl font-medium text-white",children:"Lorem ipsum"},void 0,!1,{fileName:t,lineNumber:73,columnNumber:19},void 0),n("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.."},void 0,!1,{fileName:t,lineNumber:76,columnNumber:19},void 0)]},void 0,!0,{fileName:t,lineNumber:72,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:71,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:64,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${H})`},children:n("div",{className:"pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white",children:n("div",{className:"max-w-sm",children:[n("h2",{className:"text-xl font-medium text-white",children:"Lorem ipsum"},void 0,!1,{fileName:t,lineNumber:93,columnNumber:19},void 0),n("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.."},void 0,!1,{fileName:t,lineNumber:96,columnNumber:19},void 0)]},void 0,!0,{fileName:t,lineNumber:92,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:91,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:85,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:84,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:43,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:42,columnNumber:7},void 0),n(D,{title:"Carousel Interval",children:n(P,{pagination:!0,navigation:!0,className:"main-caro",autoplay:{delay:2500,disableOnInteraction:!1},children:[n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${j})`}},void 0,!1,{fileName:t,lineNumber:117,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:116,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${z})`}},void 0,!1,{fileName:t,lineNumber:125,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:124,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${H})`}},void 0,!1,{fileName:t,lineNumber:133,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:132,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:107,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:106,columnNumber:7},void 0),n(D,{title:"Crossfade",children:n(P,{pagination:!0,navigation:!0,className:"main-caro",effect:"fade",children:[n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${j})`}},void 0,!1,{fileName:t,lineNumber:150,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:149,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${z})`}},void 0,!1,{fileName:t,lineNumber:158,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:157,columnNumber:11},void 0),n(C,{children:n("div",{className:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] ",style:{backgroundImage:`url(${H})`}},void 0,!1,{fileName:t,lineNumber:166,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:165,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:143,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:142,columnNumber:7},void 0)]},void 0,!0,{fileName:t,lineNumber:13,columnNumber:5},void 0);export{ae as default};
