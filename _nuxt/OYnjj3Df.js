import D from"./CBIgwUsS.js";import{_ as $,z as j,c as r,o as n,I as v,j as i,n as u,b as B,w as g,a as p,F as E,r as S,g as L,d,t as b,m as k,J as O,E as h,M,i as w,k as z,G as T,X as A,al as U}from"./81Hikam0.js";import{u as F,t as I}from"./BiscDnW4.js";import{u as K}from"./CJUnW9Pf.js";import"./Db-HThIW.js";const f=h(T.ui.strategy,T.ui.tooltip,I),P=j({components:{UKbd:D},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:m}=F("tooltip",M(e,"ui"),f,M(e,"class")),l=w(()=>A({},e.popper,o.value.popper)),[y,c]=K(l.value),a=z(!1);let t=null,s=null;const C=w(()=>!!(U().text||e.text));function N(){s&&(clearTimeout(s),s=null),!a.value&&(t=t||setTimeout(()=>{a.value=!0,t=null},e.openDelay))}function V(){t&&(clearTimeout(t),t=null),a.value&&(s=s||setTimeout(()=>{a.value=!1,s=null},e.closeDelay))}return{ui:o,attrs:m,popper:l,trigger:y,container:c,open:a,onMouseEnter:N,onMouseLeave:V,isVisible:C}}});function G(e,o,m,l,y,c){const a=D;return n(),r("div",k({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:o[0]||(o[0]=(...t)=>e.onMouseEnter&&e.onMouseEnter(...t)),onMouseleave:o[1]||(o[1]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))}),[v(e.$slots,"default",{open:e.open},()=>[o[2]||(o[2]=d(" Hover "))]),e.open&&!e.prevent&&e.isVisible?(n(),r("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[B(O,k({appear:""},e.ui.transition),{default:g(()=>{var t;return[p("div",null,[e.popper.arrow?(n(),r("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):i("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[v(e.$slots,"text",{},()=>[d(b(e.text),1)]),(t=e.shortcuts)!=null&&t.length?(n(),r("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(n(!0),r(E,null,S(e.shortcuts,s=>(n(),L(a,{key:s,size:"xs"},{default:g(()=>[d(b(s),1)]),_:2},1024))),128))],2)):i("",!0)],2)])]}),_:3},16)],2)):i("",!0)],16)}const Q=$(P,[["render",G]]);export{Q as default};
