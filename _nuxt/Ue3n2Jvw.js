import{h as C,S as k,G as T,Y as B}from"./rYYxQZko.js";import{s as V}from"./CckZa7EV.js";import{u as A}from"./DMbCTdNL.js";import{_ as D,s as F,h as g,o as h,w as s,b as p,i as H,f as l,G as f,a as S,n as y,E as z,K as b,g as m,B as $,C as w,N as L}from"./CeUiy-qR.js";import"./CPeRLZbo.js";import"./B6HoZZN7.js";import"./D1Zxpgvn.js";import"./BAcX1fUI.js";import"./Bm92f-5u.js";import"./CxIZtCgj.js";import"./okK1K2Z2.js";const N={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",height:"h-screen max-h-96",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},O=$(w.ui.strategy,w.ui.slideover,N),P=F({components:{HDialog:B,HDialogPanel:T,TransitionRoot:k,TransitionChild:C},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:r}){const{ui:a,attrs:c}=A("slideover",b(e,"ui"),O,b(e,"class")),i=m({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),v=m(()=>{if(!e.transition)return{};let t,o;switch(e.side){case"left":t=a.value.translate.left,o=a.value.translate.left;break;case"right":t=a.value.translate.right,o=a.value.translate.right;break;case"top":t=a.value.translate.top,o=a.value.translate.top;break;case"bottom":t=a.value.translate.bottom,o=a.value.translate.bottom;break;default:t=a.value.translate.right,o=a.value.translate.right}return{...a.value.transition,enterFrom:t,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:o}}),n=m(()=>{switch(e.side){case"left":return"horizontal";case"right":return"horizontal";case"top":return"vertical";case"bottom":return"vertical";default:return"right"}});function u(t){if(e.preventClose){r("close-prevented");return}i.value=t,r("close")}const d=()=>{r("after-leave")};return V(()=>L()),{ui:a,attrs:c,isOpen:i,transitionClass:v,sideType:n,onAfterLeave:d,close:u}}});function R(e,r,a,c,i,v){const n=l("TransitionChild"),u=l("HDialogPanel"),d=l("HDialog"),t=l("TransitionRoot");return h(),g(t,{as:"template",appear:e.appear,show:e.isOpen,onAfterLeave:e.onAfterLeave},{default:s(()=>[p(d,f({class:[e.ui.wrapper,{"justify-end":e.side==="right"},{"items-end":e.side==="bottom"}]},e.attrs,{onClose:e.close}),{default:s(()=>[e.overlay?(h(),g(n,f({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:s(()=>[S("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):H("",!0),p(n,f({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:s(()=>[p(u,{class:y([e.ui.base,e.sideType==="horizontal"?[e.ui.width,"h-full"]:[e.ui.height,"w-full"],e.ui.background,e.ui.ring,e.ui.rounded,e.ui.padding,e.ui.shadow])},{default:s(()=>[z(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const W=D(P,[["render",R]]);export{W as default};
