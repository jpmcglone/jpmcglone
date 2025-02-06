import{_ as w,x as g,c as E,o as _,H as O,Y as $,Z as j,P as A,k as v,y as F,z as J,$ as P,O as Y,A as y}from"./DzgrQ1KD.js";import{c as k}from"./_oHKg1fT.js";class d extends Error{constructor(r){super(r),this.message=r,Object.setPrototypeOf(this,d.prototype)}}const B=g({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:r,emit:t}){const l=Y(),s=k(`form-${l}`),o=v(null);F(()=>{s.on(async n=>{var u;n.type!=="submit"&&((u=e.validateOn)!=null&&u.includes(n.type))&&await p(n.path,{silent:!0})})}),J(()=>{s.reset()});const a=v([]);y("form-errors",a),y("form-events",s);const h=v({});y("form-inputs",h);async function S(){let n=await e.validate(e.state);if(e.schema){const{errors:u,result:i}=await D(e.state,e.schema);u?n=n.concat(u):o.value=i}return n}async function p(n,u={silent:!1}){let i=n;if(n&&!Array.isArray(n)&&(i=[n]),i){const f=a.value.filter(c=>!i.includes(c.path)),m=(await S()).filter(c=>i.includes(c.path));a.value=f.concat(m)}else a.value=await S();if(a.value.length>0){if(u.silent)return!1;throw new d(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function b(n){var i;const u=n;try{(i=e.validateOn)!=null&&i.includes("submit")&&await p(),u.data=e.schema?o.value:e.state,t("submit",u)}catch(f){if(!(f instanceof d))throw f;const m={...u,errors:a.value.map(c=>({...c,id:h.value[c.path]}))};t("error",m)}}return r({validate:p,errors:a,setErrors(n,u){u?a.value=a.value.filter(i=>i.path!==u).concat(n):a.value=n},async submit(){await b(new Event("submit"))},getErrors(n){return n?a.value.filter(u=>u.path===n):a.value},clear(n){n?a.value=a.value.filter(u=>u.path!==n):a.value=[]}}),{onSubmit:b,errors:P(a)}}});function V(e){return e.validate&&e.__isYupSchema__}function Z(e){return e.inner!==void 0}function z(e){return"schema"in e&&typeof e.coercer=="function"&&typeof e.validator=="function"&&typeof e.refiner=="function"}function I(e){return e.validateAsync!==void 0&&e.id!==void 0}function M(e){return e.isJoi===!0}function U(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}function q(e){return e.parse!==void 0}async function x(e,r){const t=await("_parse"in r?r._parse(e):"_run"in r?r._run({typed:!1,value:e},{}):r(e));return!t.issues||t.issues.length===0?{errors:null,result:"output"in t?t.output:"value"in t?t.value:null}:{errors:t.issues.map(s=>{var o;return{path:((o=s.path)==null?void 0:o.map(a=>a.key).join("."))||"",message:s.message}}),result:null}}async function C(e,r){try{return{errors:null,result:await r.validateAsync(e,{abortEarly:!1})}}catch(t){if(M(t))return{errors:t.details.map(s=>({path:s.path.join("."),message:s.message})),result:null};throw t}}async function H(e,r){const t=await r.safeParseAsync(e);return t.success===!1?{errors:t.error.issues.map(s=>({path:s.path.join("."),message:s.message})),result:null}:{result:t.data,errors:null}}async function N(e,r){const[t,l]=r.validate(e);return t?{errors:t.failures().map(o=>({message:o.message,path:o.path.join(".")})),result:null}:{errors:null,result:l}}async function R(e,r){try{return{errors:null,result:await r.validate(e,{abortEarly:!1})}}catch(t){if(Z(t))return{errors:t.inner.map(s=>({path:s.path??"",message:s.message})),result:null};throw t}}function D(e,r){if(q(r))return H(e,r);if(I(r))return C(e,r);if(U(r))return x(e,r);if(V(r))return R(e,r);if(z(r))return N(e,r);throw new Error("Form validation failed: Unsupported form schema")}function G(e,r,t,l,s,o){return _(),E("form",{onSubmit:r[0]||(r[0]=A((...a)=>e.onSubmit&&e.onSubmit(...a),["prevent"]))},[O(e.$slots,"default",$(j({errors:e.errors})))],32)}const Q=w(B,[["render",G]]);export{Q as default};
