import{A as n,j as h,k as j,h as v}from"./Bepo3oWq.js";const B=(a,m,f=!0)=>{const z=n("form-events",void 0),e=n("form-group",void 0),I=n("form-inputs",void 0);e&&(!f||a!=null&&a.legend?e.inputId.value=void 0:a!=null&&a.id&&(e.inputId.value=a==null?void 0:a.id),I&&(I.value[e.name.value]=e.inputId.value));const F=h(!1);function c(l,d){z&&z.emit({type:l,path:d})}function g(){c("blur",e==null?void 0:e.name.value),F.value=!0}function i(){c("change",e==null?void 0:e.name.value)}const b=j(()=>{(F.value||e!=null&&e.eagerValidation.value)&&c("input",e==null?void 0:e.name.value)},300);return{inputId:v(()=>(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value)),name:v(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:v(()=>{var d;const l=m.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((d=m.default)==null?void 0:d.size)}),color:v(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:g,emitFormInput:b,emitFormChange:i}};export{B as u};
