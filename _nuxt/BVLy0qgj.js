import ne from"./BAbL9XWE.js";import{i as se,o as g,A as N,T as oe,a as P,N as Q,u as V,s as de}from"./D8IqAZZn.js";import{s as ce}from"./CXH_00Y6.js";import{u as fe,f as re}from"./D8PnY8rM.js";import{x as H,k as T,S as G,y as L,z as ue,C as K,i as h,A as X,M as W,B as pe,F as q,_ as ve,g as E,o as O,w as B,b as be,j as Y,a as j,c as Z,n as A,r as _,f as F,H as M,p as me,m as ge,L as ee,W as te,D as he,E as ae,t as le,d as ye,O as Ie}from"./DzgrQ1KD.js";import{O as z,T as D,i as Te,P as C,N as $}from"./BhAMcfWe.js";import{t as we}from"./CxIZtCgj.js";import{b as xe}from"./_oHKg1fT.js";import{u as ke}from"./DOTHCMZ0.js";import"./BqDu4LW9.js";const Pe={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:"",icon:"w-4 h-4 flex-shrink-0 me-2"}}};let $e=H({props:{onFocus:{type:Function,required:!0}},setup(e){let o=T(!0);return()=>o.value?G(re,{as:"button",type:"button",features:fe.Focusable,onFocus(v){v.preventDefault();let c,b=50;function u(){var t;if(b--<=0){c&&cancelAnimationFrame(c);return}if((t=e.onFocus)!=null&&t.call(e)){o.value=!1,cancelAnimationFrame(c);return}c=requestAnimationFrame(u)}c=requestAnimationFrame(u)}}):null}});var Se=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Se||{}),Oe=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Oe||{});let ie=Symbol("TabsContext");function R(e){let o=K(ie,null);if(o===null){let v=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,R),v}return o}let J=Symbol("TabsSSRContext"),Ae=H({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:v,emit:c}){var b;let u=T((b=e.selectedIndex)!=null?b:e.defaultIndex),t=T([]),l=T([]),d=h(()=>e.selectedIndex!==null),k=h(()=>d.value?e.selectedIndex:u.value);function f(a){var i;let p=z(s.tabs.value,g),n=z(s.panels.value,g),m=p.filter(w=>{var x;return!((x=g(w))!=null&&x.hasAttribute("disabled"))});if(a<0||a>p.length-1){let w=V(u.value===null?0:Math.sign(a-u.value),{[-1]:()=>1,0:()=>V(Math.sign(a),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=V(w,{0:()=>p.indexOf(m[0]),1:()=>p.indexOf(m[m.length-1])});x!==-1&&(u.value=x),s.tabs.value=p,s.panels.value=n}else{let w=p.slice(0,a),x=[...p.slice(a),...w].find(U=>m.includes(U));if(!x)return;let S=(i=p.indexOf(x))!=null?i:s.selectedIndex.value;S===-1&&(S=s.selectedIndex.value),u.value=S,s.tabs.value=p,s.panels.value=n}}let s={selectedIndex:h(()=>{var a,i;return(i=(a=u.value)!=null?a:e.defaultIndex)!=null?i:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:t,panels:l,setSelectedIndex(a){k.value!==a&&c("change",a),d.value||f(a)},registerTab(a){var i;if(t.value.includes(a))return;let p=t.value[u.value];if(t.value.push(a),t.value=z(t.value,g),!d.value){let n=(i=t.value.indexOf(p))!=null?i:u.value;n!==-1&&(u.value=n)}},unregisterTab(a){let i=t.value.indexOf(a);i!==-1&&t.value.splice(i,1)},registerPanel(a){l.value.includes(a)||(l.value.push(a),l.value=z(l.value,g))},unregisterPanel(a){let i=l.value.indexOf(a);i!==-1&&l.value.splice(i,1)}};X(ie,s);let r=T({tabs:[],panels:[]}),y=T(!1);L(()=>{y.value=!0}),X(J,h(()=>y.value?null:r.value));let I=h(()=>e.selectedIndex);return L(()=>{W([I],()=>{var a;return f((a=e.selectedIndex)!=null?a:e.defaultIndex)},{immediate:!0})}),pe(()=>{if(!d.value||k.value==null||s.tabs.value.length<=0)return;let a=z(s.tabs.value,g);a.some((i,p)=>g(s.tabs.value[p])!==g(i))&&s.setSelectedIndex(a.findIndex(i=>g(i)===g(s.tabs.value[k.value])))}),()=>{let a={selectedIndex:u.value};return G(q,[t.value.length<=0&&G($e,{onFocus:()=>{for(let i of t.value){let p=g(i);if((p==null?void 0:p.tabIndex)===0)return p.focus(),!0}return!1}}),N({theirProps:{...v,...oe(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:a,slots:o,attrs:v,name:"TabGroup"})])}}}),He=H({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:v}){let c=R("TabList");return()=>{let b={selectedIndex:c.selectedIndex.value},u={role:"tablist","aria-orientation":c.orientation.value};return N({ourProps:u,theirProps:e,slot:b,attrs:o,slots:v,name:"TabList"})}}}),Ce=H({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:v,expose:c}){var b;let u=(b=e.id)!=null?b:`headlessui-tabs-tab-${se()}`,t=R("Tab"),l=T(null);c({el:l,$el:l}),L(()=>t.registerTab(l)),ue(()=>t.unregisterTab(l));let d=K(J),k=h(()=>{if(d.value){let n=d.value.tabs.indexOf(u);return n===-1?d.value.tabs.push(u)-1:n}return-1}),f=h(()=>{let n=t.tabs.value.indexOf(l);return n===-1?k.value:n}),s=h(()=>f.value===t.selectedIndex.value);function r(n){var m;let w=n();if(w===D.Success&&t.activation.value==="auto"){let x=(m=Te(l))==null?void 0:m.activeElement,S=t.tabs.value.findIndex(U=>g(U)===x);S!==-1&&t.setSelectedIndex(S)}return w}function y(n){let m=t.tabs.value.map(w=>g(w)).filter(Boolean);if(n.key===P.Space||n.key===P.Enter){n.preventDefault(),n.stopPropagation(),t.setSelectedIndex(f.value);return}switch(n.key){case P.Home:case P.PageUp:return n.preventDefault(),n.stopPropagation(),r(()=>C(m,$.First));case P.End:case P.PageDown:return n.preventDefault(),n.stopPropagation(),r(()=>C(m,$.Last))}if(r(()=>V(t.orientation.value,{vertical(){return n.key===P.ArrowUp?C(m,$.Previous|$.WrapAround):n.key===P.ArrowDown?C(m,$.Next|$.WrapAround):D.Error},horizontal(){return n.key===P.ArrowLeft?C(m,$.Previous|$.WrapAround):n.key===P.ArrowRight?C(m,$.Next|$.WrapAround):D.Error}}))===D.Success)return n.preventDefault()}let I=T(!1);function a(){var n;I.value||(I.value=!0,!e.disabled&&((n=g(l))==null||n.focus({preventScroll:!0}),t.setSelectedIndex(f.value),we(()=>{I.value=!1})))}function i(n){n.preventDefault()}let p=ce(h(()=>({as:e.as,type:o.type})),l);return()=>{var n,m;let w={selected:s.value,disabled:(n=e.disabled)!=null?n:!1},{...x}=e,S={ref:l,onKeydown:y,onMousedown:i,onClick:a,id:u,role:"tab",type:p.value,"aria-controls":(m=g(t.panels.value[f.value]))==null?void 0:m.id,"aria-selected":s.value,tabIndex:s.value?0:-1,disabled:e.disabled?!0:void 0};return N({ourProps:S,theirProps:x,slot:w,attrs:o,slots:v,name:"Tab"})}}}),Ee=H({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:v}){let c=R("TabPanels");return()=>{let b={selectedIndex:c.selectedIndex.value};return N({theirProps:e,ourProps:{},slot:b,attrs:v,slots:o,name:"TabPanels"})}}}),Be=H({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:v,expose:c}){var b;let u=(b=e.id)!=null?b:`headlessui-tabs-panel-${se()}`,t=R("TabPanel"),l=T(null);c({el:l,$el:l}),L(()=>t.registerPanel(l)),ue(()=>t.unregisterPanel(l));let d=K(J),k=h(()=>{if(d.value){let r=d.value.panels.indexOf(u);return r===-1?d.value.panels.push(u)-1:r}return-1}),f=h(()=>{let r=t.panels.value.indexOf(l);return r===-1?k.value:r}),s=h(()=>f.value===t.selectedIndex.value);return()=>{var r;let y={selected:s.value},{tabIndex:I,...a}=e,i={ref:l,id:u,role:"tabpanel","aria-labelledby":(r=g(t.tabs.value[f.value]))==null?void 0:r.id,tabIndex:s.value?I:-1};return!s.value&&e.unmount&&!e.static?G(re,{as:"span","aria-hidden":!0,...i}):N({ourProps:i,theirProps:a,slot:y,attrs:o,slots:v,features:Q.Static|Q.RenderStrategy,visible:s.value,name:"TabPanel"})}}});const Fe=he(ae.ui.strategy,ae.ui.tabs,Pe),ze=H({components:{UIcon:ne,HTabGroup:Ae,HTabList:He,HTab:Ce,HTabPanels:Ee,HTabPanel:Be},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},content:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:v,attrs:c}=ke("tabs",ee(e,"ui"),Fe,ee(e,"class")),b=T(),u=T([]),t=T(),l=T(e.modelValue||e.defaultIndex);function d(f){var r;const s=(r=u.value[f])==null?void 0:r.$el;s&&t.value&&(t.value.style.top=`${s.offsetTop}px`,t.value.style.left=`${s.offsetLeft}px`,t.value.style.width=`${s.offsetWidth}px`,t.value.style.height=`${s.offsetHeight}px`)}function k(f){l.value=f,o("change",f),e.modelValue!==void 0&&o("update:modelValue",l.value),d(l.value)}return xe(b,()=>{d(l.value)}),W(()=>e.modelValue,f=>{l.value=f,d(l.value)}),W(()=>e.items,async()=>{await te(),d(l.value)},{deep:!0}),L(async()=>{await te(),d(l.value)}),de(()=>Ie()),{ui:v,attrs:c,listRef:b,itemRefs:u,markerRef:t,selectedIndex:l,onChange:k}}}),Le=["aria-label"],Ne={class:"truncate"};function Re(e,o,v,c,b,u){const t=ne,l=F("HTab"),d=F("HTabList"),k=F("HTabPanel"),f=F("HTabPanels"),s=F("HTabGroup");return O(),E(s,ge({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:B(()=>[be(d,{ref:"listRef",class:A([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:me([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:B(()=>[j("div",{ref:"markerRef",class:A(e.ui.list.marker.wrapper)},[j("div",{class:A([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(O(!0),Z(q,null,_(e.items,(r,y)=>(O(),E(l,{key:y,ref_for:!0,ref:"itemRefs",disabled:r.disabled,as:"template"},{default:B(({selected:I,disabled:a})=>[j("button",{"aria-label":r.ariaLabel,class:A([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,I?e.ui.list.tab.active:e.ui.list.tab.inactive])},[M(e.$slots,"icon",{item:r,index:y,selected:I,disabled:a},()=>[r.icon?(O(),E(t,{key:0,name:r.icon,class:A(e.ui.list.tab.icon)},null,8,["name","class"])):Y("",!0)]),M(e.$slots,"default",{item:r,index:y,selected:I,disabled:a},()=>[j("span",Ne,le(r.label),1)])],10,Le)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),e.content?(O(),E(f,{key:0,class:A(e.ui.container)},{default:B(()=>[(O(!0),Z(q,null,_(e.items,(r,y)=>(O(),E(k,{key:y,class:A(e.ui.base),unmount:e.unmount},{default:B(({selected:I})=>[M(e.$slots,r.slot||"item",{item:r,index:y,selected:I},()=>[ye(le(r.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])):Y("",!0)]),_:3},16,["vertical","selected-index","class","onChange"])}const Qe=ve(ze,[["render",Re]]);export{Qe as default};
