import{_ as C,s as b,c as l,i as u,o as p,b as h,w as k,a as d,n as c,E as O,G as m,H as V,K as f,h as s,X as j,P as B,Q as E,B as M,C as g}from"./Bepo3oWq.js";import{o as $}from"./Bw4IL3HP.js";import{e as A,u as N}from"./zeLF7e_h.js";import{u as P}from"./BnvuFnrx.js";const T={wrapper:"relative",container:"z-20 group",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{placement:"bottom-start",scroll:!1},arrow:A},z=M(g.ui.strategy,g.ui.contextMenu,T),F=b({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},virtualElement:{type:Object,required:!0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{ui:a,attrs:n}=N("contextMenu",f(e,"ui"),z),t=s(()=>j({},e.popper,a.value.popper)),r=s({get(){return e.modelValue},set(w){o("update:modelValue",w)}}),v=f(e,"virtualElement"),[,i]=P(t.value,v),y=s(()=>B(E(a.value.container,a.value.width),e.class));return $(i,()=>{r.value=!1}),{ui:a,attrs:n,isOpen:r,wrapperClass:y,popper:t,container:i}}});function S(e,o,a,n,t,r){return e.isOpen?(p(),l("div",m({key:0,ref:"container",class:e.wrapperClass},e.attrs),[h(V,m({appear:""},e.ui.transition),{default:k(()=>[d("div",null,[e.popper.arrow?(p(),l("div",{key:0,"data-popper-arrow":"",class:c(Object.values(e.ui.arrow))},null,2)):u("",!0),d("div",{class:c([e.ui.base,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background])},[O(e.$slots,"default")],2)])]),_:3},16)],16)):u("",!0)}const J=C(F,[["render",S]]);export{J as default};
