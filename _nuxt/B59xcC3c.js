import d from"./Ds8Afp0w.js";import{_ as C,z as y,g as _,o as s,c as r,j as k,a as v,F as $,r as u,b as N,a3 as h,w as b,I as S,m as a,n as j,aN as B,M as z,s as U,i as V,R as x,S as A,E,G as f}from"./81Hikam0.js";import{u as F}from"./BiscDnW4.js";import{u as I}from"./BE6Xdn3W.js";import"./B-AMXkFO.js";import"./Z-Q1UEnP.js";import"./DQ9e9R0_.js";import"./CLIcE03p.js";import"./C8DTJv2C.js";import"./CpYU9SZX.js";import"./DQ5gMIdq.js";import"./Bf_abw1o.js";import"./41BtbCCm.js";import"./CHOj1P8S.js";import"./Db-HThIW.js";const M={wrapper:"fixed flex flex-col justify-end z-[55]",position:"bottom-0 end-0",width:"w-full sm:w-96",container:"px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"},O=E(f.ui.strategy,f.ui.notifications,M),R=y({components:{UNotification:d},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:o,attrs:i}=F("notifications",z(t,"ui"),O),n=I(),c=U("notifications",()=>[]),p=V(()=>x(A(o.value.wrapper,o.value.position,o.value.width),t.class));return{ui:o,attrs:i,toast:n,notifications:c,wrapperClass:p}}});function T(t,o,i,n,c,p){const w=d;return s(),_(B,{to:"body"},[t.notifications.length?(s(),r("div",a({key:0,class:t.wrapperClass,role:"region"},t.attrs),[v("div",{class:j(t.ui.container)},[(s(!0),r($,null,u(t.notifications,e=>(s(),r("div",{key:e.id},[N(w,a({ref_for:!0},e,{class:e.click&&"cursor-pointer",onClick:l=>e.click&&e.click(e),onClose:l=>t.toast.remove(e.id)}),h({_:2},[u(t.$slots,(l,m)=>({name:m,fn:b(g=>[S(t.$slots,m,a({ref_for:!0},g))])}))]),1040,["class","onClick","onClose"])]))),128))],2)],16)):k("",!0)])}const ot=C(R,[["render",T]]);export{ot as default};
