import{_ as O,r as B}from"./B4ke-jx7.js";import{u as h}from"./BiscDnW4.js";import{u as G}from"./DRxqLPlx.js";import{_ as j,z,c as o,o as r,a as U,j as w,n as S,I as d,F,r as N,g as E,a3 as I,w as $,m as i,E as A,M as m,i as T,G as l,a2 as s,d as _,t as D,B as L}from"./81Hikam0.js";const M={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},f=A(l.ui.strategy,l.ui.radioGroup,M),P=A(l.ui.strategy,l.ui.radio,B),q=z({components:{URadio:O},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Boolean],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>f.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:c,attrs:g}=h("radioGroup",m(e,"ui"),f,m(e,"class")),{ui:p}=h("radio",m(e,"uiRadio"),P),{emitFormChange:b,color:n,name:t}=G(e,f,!1);L("radio-group",{color:n,name:t});const y=a=>{u("update:modelValue",a),u("change",a),b()},v=a=>s(a,e.valueAttribute,s(a,e.optionAttribute)),C=a=>s(a,e.optionAttribute,s(a,e.valueAttribute)),R=a=>e.modelValue===v(a),V=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:v(a),label:C(a),selected:R(a)},k=T(()=>e.options.map(a=>V(a)));return{ui:c,uiRadio:p,attrs:g,normalizedOptions:k,onUpdate:y}}});function H(e,u,c,g,p,b){const n=O;return r(),o("div",{class:S(e.ui.wrapper)},[U("fieldset",i(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(r(),o("legend",{key:0,class:S(e.ui.legend)},[d(e.$slots,"legend",{},()=>[_(D(e.legend),1)])],2)):w("",!0),(r(!0),o(F,null,N(e.normalizedOptions,t=>(r(),E(n,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:y=>e.onUpdate(t.value)},I({_:2},[e.$slots.label?{name:"label",fn:$(()=>[d(e.$slots,"label",i({ref_for:!0},{option:t,selected:t.selected}))]),key:"0"}:void 0,e.$slots.help?{name:"help",fn:$(()=>[d(e.$slots,"help",i({ref_for:!0},{option:t,selected:t.selected}))]),key:"1"}:void 0]),1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const X=j(q,[["render",H]]);export{X as default};
