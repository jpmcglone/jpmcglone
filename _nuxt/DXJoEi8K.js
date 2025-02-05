import I from"./BoRGBAFn.js";import{_ as S,s as j,c as k,o as l,E as s,G as N,B,K as O,g as n,C as d,Q as g,P as $,h as v,i as c,n as p,t as _}from"./CeUiy-qR.js";import{u as A}from"./DMbCTdNL.js";import{a as U}from"./DICr5v9t.js";import"./o6_QIKWb.js";const E={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},gap:{xs:"gap-0.5",sm:"gap-1",md:"gap-1",lg:"gap-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},icon:{base:"flex-shrink-0",size:{xs:"h-4 w-4",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-5 w-5"}},default:{size:"sm",variant:"solid",color:"primary"}},t=B(d.ui.strategy,d.ui.badge,E),G=j({components:{UIcon:I},inheritAttrs:!1,props:{size:{type:String,default:()=>t.default.size,validator(e){return Object.keys(t.size).includes(e)}},color:{type:String,default:()=>t.default.color,validator(e){return[...d.ui.colors,...Object.keys(t.color)].includes(e)}},variant:{type:String,default:()=>t.default.variant,validator(e){return[...Object.keys(t.variant),...Object.values(t.color).flatMap(a=>Object.keys(a))].includes(e)}},label:{type:[String,Number],default:null},icon:{type:String,default:null},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:u}=A("badge",O(e,"ui"),t),{size:r,rounded:m}=U({ui:a,props:e}),y=n(()=>e.icon&&e.leading||e.icon&&!e.trailing||!e.trailing||e.leadingIcon),i=n(()=>e.icon&&e.trailing||e.trailing||e.trailingIcon),x=n(()=>{var f,b;const o=((b=(f=a.value.color)==null?void 0:f[e.color])==null?void 0:b[e.variant])||a.value.variant[e.variant];return $(g(a.value.base,a.value.font,m.value,a.value.size[r.value],a.value.gap[r.value],o==null?void 0:o.replaceAll("{color}",e.color)),e.class)}),h=n(()=>e.leadingIcon||e.icon),w=n(()=>e.trailingIcon||e.icon),C=n(()=>g(a.value.icon.base,a.value.icon.size[r.value])),z=n(()=>g(a.value.icon.base,a.value.icon.size[r.value]));return{attrs:u,isLeading:y,isTrailing:i,badgeClass:x,leadingIconName:h,trailingIconName:w,leadingIconClass:C,trailingIconClass:z}}}),L={key:0};function M(e,a,u,r,m,y){const i=I;return l(),k("span",N({class:e.badgeClass},e.attrs),[s(e.$slots,"leading",{},()=>[e.isLeading&&e.leadingIconName?(l(),v(i,{key:0,name:e.leadingIconName,class:p(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):c("",!0)]),s(e.$slots,"default",{},()=>[e.label?(l(),k("span",L,_(e.label),1)):c("",!0)]),s(e.$slots,"trailing",{},()=>[e.isTrailing&&e.trailingIconName?(l(),v(i,{key:0,name:e.trailingIconName,class:p(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):c("",!0)])],16)}const Q=S(G,[["render",M]]);export{Q as default};
