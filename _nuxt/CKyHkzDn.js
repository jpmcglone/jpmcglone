import V from"./CY7a4Djt.js";import{_ as Q,s as R,c as y,o as I,a as X,E as b,i as j,G as H,n as c,B as Y,K as $,h as i,j as k,X as Z,v as _,C as f,Q as g,P as x,a0 as ee,b as O}from"./Bepo3oWq.js";import{u as ae,i as le}from"./zeLF7e_h.js";import{u as ne}from"./BlWlclPn.js";import{a as ie}from"./CZSPVsby.js";import"./CufT31xv.js";const t=Y(f.ui.strategy,f.ui.input,le),te=R({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>t.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(t.size).includes(e)}},color:{type:String,default:()=>t.default.color,validator(e){return[...f.ui.colors,...Object.keys(t.color)].includes(e)}},variant:{type:String,default:()=>t.default.variant,validator(e){return[...Object.keys(t.variant),...Object.values(t.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:p}){const{ui:a,attrs:C}=ae("input",$(e,"ui"),t,$(e,"class")),{size:B,rounded:v}=ie({ui:a,props:e}),{emitFormBlur:s,emitFormInput:M,size:w,color:o,inputId:A,name:F}=ne(e,t),u=i(()=>B.value??w.value),d=k(Z({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),S=k(null),G=()=>{var l;e.autofocus&&((l=S.value)==null||l.focus())},z=l=>{d.value.trim&&(l=l.trim()),(d.value.number||e.type==="number")&&(l=ee(l)),d.value.nullify&&(l||(l=null)),n("update:modelValue",l),M()},q=l=>{d.value.lazy||z(l.target.value)},T=l=>{if(e.type==="file"){const r=l.target.files;n("change",r)}else{const r=l.target.value;n("change",r),d.value.lazy&&z(r),d.value.trim&&(l.target.value=r.trim())}},W=l=>{s(),n("blur",l)};_(()=>{setTimeout(()=>{G()},e.autofocusDelay)});const U=i(()=>{var r,N;const l=((N=(r=a.value.color)==null?void 0:r[o.value])==null?void 0:N[e.variant])||a.value.variant[e.variant];return x(g(a.value.base,a.value.form,v.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[u.value],e.padded?a.value.padding[u.value]:"p-0",l==null?void 0:l.replaceAll("{color}",o.value),(m.value||p.leading)&&a.value.leading.padding[u.value],(h.value||p.trailing)&&a.value.trailing.padding[u.value]),e.inputClass)}),m=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),h=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),E=i(()=>e.loading&&!m.value?e.loadingIcon:e.trailingIcon||e.icon),L=i(()=>g(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[u.value])),P=i(()=>g(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[u.value],e.loading&&a.value.icon.loading)),J=i(()=>g(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[u.value])),K=i(()=>g(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[u.value],e.loading&&!m.value&&a.value.icon.loading));return{ui:a,attrs:C,name:F,inputId:A,input:S,isLeading:m,isTrailing:h,inputClass:U,leadingIconName:D,leadingIconClass:P,leadingWrapperIconClass:L,trailingIconName:E,trailingIconClass:K,trailingWrapperIconClass:J,onInput:q,onChange:T,onBlur:W}}}),oe=["id","name","type","required","placeholder","disabled"];function ue(e,n,p,a,C,B){const v=V;return I(),y("div",{class:c(e.type==="hidden"?"hidden":e.ui.wrapper)},[X("input",H({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:n[0]||(n[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:n[1]||(n[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:n[2]||(n[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,oe),b(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(I(),y("span",{key:0,class:c(e.leadingWrapperIconClass)},[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[O(v,{name:e.leadingIconName,class:c(e.leadingIconClass)},null,8,["name","class"])])],2)):j("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(I(),y("span",{key:1,class:c(e.trailingWrapperIconClass)},[b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[O(v,{name:e.trailingIconName,class:c(e.trailingIconClass)},null,8,["name","class"])])],2)):j("",!0)],2)}const ve=Q(te,[["render",ue]]);export{ve as default};
