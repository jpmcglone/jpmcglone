import{h as b,S as T,G as k,Y as B}from"./D_MMP_ZN.js";import{s as D}from"./D8IqAZZn.js";import{u as H}from"./DOTHCMZ0.js";import{_ as V,x as A,g as y,o as g,w as t,b as p,j as F,a as d,f as n,m,n as r,H as L,L as v,i as h,D as O,E as C,O as $}from"./DzgrQ1KD.js";import"./D2MR9rp9.js";import"./BhAMcfWe.js";import"./DOgN0ZJw.js";import"./D8PnY8rM.js";import"./Bm92f-5u.js";import"./CxIZtCgj.js";import"./Gqs4EdRy.js";const j={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},P=O(C.ui.strategy,C.ui.modal,j),R=A({components:{HDialog:B,HDialogPanel:k,TransitionRoot:T,TransitionChild:b},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:a}){const{ui:l,attrs:f}=H("modal",v(e,"ui"),P,v(e,"class")),i=h({get(){return e.modelValue},set(o){a("update:modelValue",o)}}),c=h(()=>e.transition?{...l.value.transition}:{});function s(o){if(e.preventClose){a("close-prevented");return}i.value=o,a("close")}const u=()=>{a("after-leave")};return D(()=>$()),{ui:l,attrs:f,isOpen:i,transitionClass:c,onAfterLeave:u,close:s}}});function S(e,a,l,f,i,c){const s=n("TransitionChild"),u=n("HDialogPanel"),o=n("HDialog"),w=n("TransitionRoot");return g(),y(w,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:t(()=>[p(o,m({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:t(()=>[e.overlay?(g(),y(s,m({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:t(()=>[d("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):F("",!0),d("div",{class:r(e.ui.inner)},[d("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[p(s,m({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:t(()=>[p(u,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:t(()=>[L(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const Q=V(R,[["render",S]]);export{Q as default};
