import{_ as V,s as $,c as q,o as F,a as A,E as H,G as R,n as x,B as D,K as B,r as h,W as E,v as z,L as G,g as P,C as m,P as J,Q as K,a0 as L,V as Q}from"./CeUiy-qR.js";import{u as U,c as W}from"./DMbCTdNL.js";import{u as X}from"./ChXrcxjd.js";const r=D(m.ui.strategy,m.ui.textarea,W),Y=$({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...m.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:l,attrs:c}=U("textarea",B(e,"ui"),r,B(e,"class")),{emitFormBlur:p,emitFormInput:v,inputId:s,color:y,size:g,name:C}=X(e,r),n=h(E({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),o=h(null),b=()=>{var a;e.autofocus&&((a=o.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!o.value)return;o.value.rows=e.rows;const a=o.value.style.overflow;o.value.style.overflow="hidden";const u=window.getComputedStyle(o.value),i=Number.parseInt(u.paddingTop),O=Number.parseInt(u.paddingBottom),k=i+O,M=Number.parseInt(u.lineHeight),{scrollHeight:T}=o.value,f=(T-k)/M;f>e.rows&&(o.value.rows=e.maxrows?Math.min(f,e.maxrows):f),o.value.style.overflow=a}},w=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=L(a)),n.value.nullify&&(a||(a=null)),t("update:modelValue",a),v()},I=a=>{d(),n.value.lazy||w(a.target.value)},S=a=>{const u=a.target.value;t("change",u),n.value.lazy&&w(u),n.value.trim&&(a.target.value=u.trim())},N=a=>{t("blur",a),p()};z(()=>{setTimeout(()=>{b()},e.autofocusDelay)}),G(()=>e.modelValue,()=>{Q(d)}),z(()=>{setTimeout(()=>{b(),d()},100)});const j=P(()=>{var u,i;const a=((i=(u=l.value.color)==null?void 0:u[y.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return J(K(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[g.value],e.padded?l.value.padding[g.value]:"p-0",a==null?void 0:a.replaceAll("{color}",y.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:c,name:C,inputId:s,textarea:o,textareaClass:j,onInput:I,onChange:S,onBlur:N}}}),Z=["id","value","name","rows","required","disabled","placeholder"];function _(e,t,l,c,p,v){return F(),q("div",{class:x(e.ui.wrapper)},[A("textarea",R({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:t[1]||(t[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:t[2]||(t[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,Z),H(e.$slots,"default")],2)}const le=V(Y,[["render",_]]);export{le as default};
