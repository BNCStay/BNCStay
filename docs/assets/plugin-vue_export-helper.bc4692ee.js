var me=Object.defineProperty,ge=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var ne=(o,e,t)=>e in o?me(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))Se.call(e,t)&&ne(o,t,e[t]);if(oe)for(var t of oe(e))xe.call(e,t)&&ne(o,t,e[t]);return o},O=(o,e)=>ge(o,we(e));import{p as _,d as Z,h as S,q as B,s as _e,u as z,v as pe,x as k,r as Oe,T as Be,y as Te,z as Ae,A as Fe,B as Ee,C as H,D as Ce,E as V}from"./index.a10126c2.js";const ae={componentPrefix:"",componentSuffix:""};function He(o){return Array.isArray(o)?"array":typeof o}const Ue=o=>new Promise(e=>{requestAnimationFrame(t=>{o==null||o(),e(t)})}),Ke=(o,e,t)=>t?[...new Set([...[o].flat(2),...e])]:[...new Set([...e,...[o].flat(2)])];function De(o,e){const t=parseFloat(`${o}`);if(isNaN(t)||t===1/0)return e||0;if(typeof o=="number")return o>=0?o:0;if(typeof o=="string"){if(/^\d+(?:\.\d+)?s$/.test(o)){const s=t*1e3;return s>=0?s:0}if(/^\d+(?:\.\d+)?(?:ms)?$/.test(o))return t>=0?t:0}return 0}const $e=o=>o instanceof HTMLElement,G=o=>`${ae.componentPrefix}${o}${ae.componentSuffix}`,qe=function(o){var s;const{tag:e,slots:t,attrs:l,payload:a}=o;return e?_(e,p({},l),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,a.value)]}}):(s=t.default)==null?void 0:s.call(t,a.value)};function ke(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ze(){const o=window.matchMedia("(hover: none) and (pointer: coarse)");return ke()&&o.matches}const Ge={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"};function re(){return document.documentElement||document.querySelector("html")}function Pe(o){const e={};let t;for(t in o){const l=/^on[A-Z]/;if(l.test(t)){const a=t.replace(l,s=>s[2].toLowerCase());e[a]=o[t]}else e[t]=o[t]}return e}function We(o){const e={};let t;for(t in o)if(/^[a-z]/.test(t)&&!/^on[A-Z]/.test(t)){const a=`on${t[0].toUpperCase()}${t.slice(1)}`;e[a]=o[t]}else e[t]=o[t];return e}const Je=(o,e,t)=>(o-e)*t+e;var le=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},he={},ie=le&&le.__awaiter||function(o,e,t,l){function a(s){return s instanceof t?s:new t(function(d){d(s)})}return new(t||(t=Promise))(function(s,d){function n(u){try{y(l.next(u))}catch(T){d(T)}}function x(u){try{y(l.throw(u))}catch(T){d(T)}}function y(u){u.done?s(u.value):a(u.value).then(n,x)}y((l=l.apply(o,e||[])).next())})};Object.defineProperty(he,"__esModule",{value:!0});const q=o=>o instanceof HTMLElement;class je{constructor(e){Object.defineProperty(this,"$children",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"loop",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"preventScroll",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"closest",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"focusableNodes",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"index",{enumerable:!0,configurable:!0,writable:!0,value:-1});const{root:t,children:l="*",loop:a=!0,preventScroll:s=!1,closest:d}=e;q(t)&&(this.$children=[...t.querySelectorAll(`${l||"*"}`)],this.loop=a,this.preventScroll=s,this.closest=d||l,this.focusableNodes=this.$children.length?[...this.$children].filter(n=>q(n)&&(parseInt(n.getAttribute("tabindex")||"-1")>-1||n.tabIndex>-1)&&!n.getAttribute("disabled")?this.closest?n.closest(this.closest):n:!1):null,this.focusableNodes&&(this.index=this.focusableNodes.length&&this.focusableNodes.indexOf(this.focusableNodes.find(n=>n.isSameNode(n.ownerDocument.activeElement)))))}focus(e){return new Promise(t=>{if(!this.focusableNodes||!this.focusableNodes.length)return t(null);const l=typeof this.preventScroll=="object"?this.preventScroll.backward:this.preventScroll,a=this.focusableNodes[e];a.focus({preventScroll:l}),this.destroy(),t(a)})}forward(e=0){return ie(this,void 0,void 0,function*(){if(!this.focusableNodes||!this.focusableNodes.length)return null;const t=this.index+1+e>this.focusableNodes.length-1?this.loop?0:this.focusableNodes.length-1:this.index+1+e;return yield this.focus(t)})}backward(e=0){return ie(this,void 0,void 0,function*(){if(!this.focusableNodes||!this.focusableNodes.length)return null;const t=this.index-1-e<0?this.loop?this.focusableNodes.length-1:0:this.index-1-e;return yield this.focus(t)})}destroy(){this.$children=[],this.focusableNodes=null}}function U(){console.error("UiTrapFocus not setup properly")}const ue="**UiTrapFocus**";class Ne{constructor(e={}){Object.defineProperty(this,"isForward",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isBackward",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"children",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"closest",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"loop",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"preventScroll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"steps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_name",{enumerable:!0,configurable:!0,writable:!0,value:ue});const t=u=>!u.ctrlKey&&!u.metaKey&&!u.altKey&&/^tab$/i.test(u.code)||u.keyCode===9,{forward:l=u=>t(u)&&!u.shiftKey,backward:a=u=>t(u)&&u.shiftKey,children:s="",closest:d="",loop:n=!1,preventScroll:x=!1,steps:y=0}=e;this.isForward=l,this.isBackward=a,this.children=s,this.loop=n,this.closest=d,this.preventScroll=x,this.steps=y}controlledFocus(e){if(!q(e.currentTarget))throw new Error("Invalid event object");return new je({root:e.currentTarget,children:this.children,closest:this.closest,loop:this.loop,preventScroll:this.preventScroll})}get step(){return{forward:typeof this.steps=="object"?this.steps.forward:this.steps,backward:typeof this.steps=="object"?this.steps.backward:this.steps}}get sameInstance(){return this._name===ue}init(e){if(!this.sameInstance)return U(),Promise.resolve(null);const t=this.controlledFocus(e);return this.isForward(e)?(e.preventDefault(),t.forward(this.step.forward)):this.isBackward(e)?(e.preventDefault(),t.backward(this.step.backward)):Promise.resolve(null)}forward(e){return this.sameInstance?(e.preventDefault(),this.controlledFocus(e).forward(this.step.forward)):(U(),Promise.resolve(null))}backward(e){return this.sameInstance?(e.preventDefault(),this.controlledFocus(e).backward(this.step.backward)):(U(),Promise.resolve(null))}}var Ie=he.default=Ne;let se=0;function Le(o,e){return se+=.1,`${typeof o=="string"?o:"uid-"}${(performance.now()+se).toString(36)}${e||""}`.replace(/\./g,"_")}function Re(o){const e=l=>new RegExp(l,"i").test(o.code),t=o.keyCode;return e("space")||t===32?"space":e("enter")||t===13?"enter":e("escape")||t===27?"esc":e("tab")||t===9?"tab":e("arrowLeft")||t===37?"arrow_left":e("arrowUp")||t===38?"arrow_up":e("arrowRight")||t===39?"arrow_right":e("arrowDown")||t===40?"arrow_down":e("slash")||t===191||o.key==="/"?"slash":e("backspace")||t===8?"backspace":e("delete")||t===46?"delete":""}const Me={"data-fendui-overlay":""},ce=Z({name:G("Overlay"),inheritAttrs:!1,props:{zIndexOffset:{type:[String,Number],default:1e3},role:{type:String,default:void 0},tag:{type:String,default:void 0},open:{type:Boolean,default:void 0},modelValue:{type:Boolean,default:void 0},disabled:Boolean,route:{type:String,default:void 0},restoreScroll:Boolean,restoreFocus:{type:Boolean,default:!0},focusContent:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:void 0},alwaysRender:Boolean,alwaysShow:Boolean,tabFoward:{type:Function,default:void 0},tabBackward:{type:Function,default:void 0},transition:{type:[Boolean,Object],default:void 0},modal:Boolean,closeOnEsc:Boolean,scrollHtml:Boolean,disableTeleport:Boolean,htmlActiveClass:{type:String,default:void 0},closeOnClickOutside:Boolean,uiTransition:{type:Boolean,default:!0},delayActive:{type:[String,Number,Object],default:()=>0},teleportTo:{type:String,default:"body"},customTransition:Boolean,trapFocus:{type:Boolean,default:!0}},emits:["update:modelValue","click:outside","active:true","active:false","initial-focus","delayed-active:true","delayed-active:false","restore-focus"],setup(o,{emit:e,slots:t,attrs:l,expose:a}){const s=S(null),d=S(null),n=B(()=>o),x=S(n.value.open||!1),y=S(!1),u=S(0),T=B(()=>{const r=n.value.delayActive,i={open:0,close:0};if(typeof r=="object")i.open=parseFloat(String(r.open||r.enter||0)),i.close=parseFloat(String(r.close||r.leave||0));else{const g=parseFloat(String(r));i.open=g,i.close=g}return i}),h=B({get(){return typeof n.value.modelValue=="boolean"?n.value.modelValue:typeof n.value.open=="boolean"?n.value.open:x.value},set(r){if(typeof r=="boolean"&&!n.value.disabled){typeof n.value.modelValue=="boolean"&&e("update:modelValue",r),typeof n.value.open!="boolean"&&(x.value=r),e(`active:${r}`);const i=T.value[r?"open":"close"];i?(u.value&&_e(u.value),z(i,()=>{y.value=r,u.value=0,e(`delayed-active:${r}`)}).then(g=>{u.value=g})):y.value=r}}}),f=S(h.value===!0),c=S(h.value===!1),b=r=>h.value=typeof r=="boolean"?r:!h.value,v=S(Le()),A=`activator-${v.value}`,w=async r=>{if(!d.value)return;const i="$el"in d.value?d.value.$el:d.value;f.value&&$e(i)&&!i.contains(r.target)&&(await z(32),e("click:outside"),n.value.closeOnClickOutside&&b(!1))},E=r=>{re().removeEventListener("click",w);const g=p({},k.value);delete g.overlays[r],k.value=g},m=r=>{E(r);const i=p({},k.value);i.overlays[r]=k.value.overlays.size+1,k.value=i,re().addEventListener("click",w)};pe(()=>v.value,(r,i)=>{E(i),m(r)});const C=B(()=>Object.keys(k.value.overlays)),P=B(()=>C.value.indexOf(v.value)),R=B(()=>C.value[C.value.length-1]===v.value),j=B(()=>n.value.zIndex?n.value.zIndex:h.value||!c.value?Number(n.value.zIndexOffset)+P.value:void 0),F={before:r=>{c.value=!1,f.value=!1,m(v.value),s.value=document.activeElement,W("add"),z(1,()=>{if(!n.value.focusContent)return;const i=r.closest(".Overlay");i&&(i!=null&&i.contains(document.activeElement)||requestAnimationFrame(()=>{var g;(g=i.focus)==null||g.call(i),e("initial-focus")}))})},cancelled:()=>{E(v.value)},after:()=>{!h.value||(f.value=!0)}},$={before:()=>{f.value=!1},after:()=>{h.value||(E(v.value),W("remove"),c.value=!0)}},N={onBeforeEnter:F.before,onEnterCancelled:F.cancelled,onAfterEnter:F.after,onBeforeAppear:F.before,onAppearCancelled:F.cancelled,onAfterAppear:F.after,onBeforeLeave:()=>{n.value.restoreFocus&&s.value&&(s.value.focus(),e("restore-focus")),$.before()},onAfterLeave:$.after},I=B(()=>{const r={role:n.value.role,id:v.value,"aria-modal":n.value.modal?"true":void 0,"aria-labelledby":A,"aria-hidden":!h.value||void 0};return O(p(p({ref:d},r),l),{tabindex:h.value?"0":"-1",onKeydown:i=>{i.stopPropagation(),Re(i)==="esc"?b(!1):n.value.trapFocus&&new Ie({loop:!0}).init(i)},onVnodeBeforeUnmount:$.before,onVnodeUnmounted:$.after})}),M=B(()=>({toggle:b,open:()=>b(!0),close:()=>b(!1),active:h.value,id:v.value,zIndex:j.value,transitionEvents:Pe(N),delayedActive:y.value&&h.value,contentAttrs:I.value,afterEnter:f.value,afterLeave:c.value}));a(M.value);const W=r=>{if(r==="remove"&&k.value.overlays.size>1)return;const{htmlActiveClass:i,scrollHtml:g}=n.value;if(i||!g){const L=document.documentElement||document.querySelector("html");i&&L.classList[r](i),!g&&L.classList[r]("Overlay-active")}};return()=>{var g;const r=(g=t.activator)==null?void 0:g.call(t,O(p({},M.value),{attrs:{id:A,"aria-controls":v.value,"aria-expanded":h.value,"aria-hidden":h.value?"true":void 0,tabindex:h.value?"-1":void 0}})),i=()=>{const L=n.value.tag,J=O(p(p(p({},I.value),Me),h.value?{"data-overlay-index":String(P.value),"data-closest-overlay":R.value?"":void 0}:{}),{style:Object.assign({"--z-index":j.value},l.style||{}),class:["Overlay",l.class]}),Q=()=>{var Y,ee;const be=n.value.alwaysRender,ye=h.value||y.value,X=L?_(L,J,{default:()=>{var te;return[(te=t.default)==null?void 0:te.call(t,M.value)]}}):_(((ee=(Y=t.default)==null?void 0:Y.call(t,M.value))==null?void 0:ee[0])||"template",J);return be?Te(X,[[Ae,n.value.alwaysShow?!0:!c.value]]):ye?X:null};return[n.value.customTransition?Q():_(Oe("UiTransition"),p(p({},N),l),{default:()=>Q()})]};return[r?_(r[0]):null,_(Be,{to:n.value.teleportTo,disabled:n.value.disableTeleport},[i()])]}}}),de={threshold:0,rootMargin:"0px 0px 0px 0px",root:null},K={inactive:!0,boundingClientRect:void 0,intersectionRatio:0,intersectionRect:void 0,isIntersecting:!1,rootBounds:null,target:void 0,time:0,ratio:0},fe=o=>o instanceof HTMLElement,ve=Z({name:G("Intersection"),emits:["once-intersected","update:entry"],props:{config:{type:Object,default:()=>de},thresholdLength:{type:Number,default:void 0},once:Boolean},setup(o,{emit:e,slots:t}){const l=S(!1),a=S(K),s=S(null),d=B(()=>o),n=Ce(),x=()=>{var b,v;const c=n==null?void 0:n.vnode.el;c&&fe(c)&&((b=s.value)==null||b.unobserve(c)),(v=s.value)==null||v.disconnect(),H(()=>{s.value=null})},y=async()=>{var w;const c=n==null?void 0:n.vnode.el;if(s.value||!l.value||!fe(c))return;const b=p(p({},de),d.value.config),v=O(p({},b),{threshold:/string|number/i.test(typeof b.threshold)?b.threshold:1}),A=d.value.thresholdLength;if(A){const E=Array.from({length:A},(m,C)=>1/A*C);E.push(1),v.threshold=E}await H(),s.value=new IntersectionObserver(u,v),(w=s.value)==null||w.observe(c)},u=c=>{for(const b of c){const v=()=>{a.value=b,a.value.ratio=b.intersectionRatio,e("update:entry",a.value,s.value)};d.value.once&&b.isIntersecting?(v(),h(),e("once-intersected",a.value)):v()}},T=async()=>{!l.value||(a.value=K,await H(),y())},h=()=>{x(),a.value=K,l.value=!1},f=()=>{l.value=!0,T()};return Fe(f),Ee(h),pe(()=>d.value,()=>{h(),f()}),()=>{var c;return _((c=t.default)==null?void 0:c.call(t,a.value)[0])}}});const D={"data-fendui-sheet":""},Qe=Z({name:G("Sheet"),components:{Overlay:ce,Intersection:ve},props:{modelValue:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},disabled:Boolean,from:{type:String,default:"bottom"},snapMandatory:Boolean,swipeContentOnly:Boolean,thresholdLength:{type:Number,default:200},minThreshold:{type:Number,default:.01},disableRatio:Boolean,disableSwipe:Boolean},emits:["update:modelValue","active:true","active:false","update:ratio"],setup(o,{slots:e,emit:t,attrs:l}){const a=V(()=>o),s=S(null),d=S(!1),n=S(!1),x=S(),y=S(!1),u=V({get(){return typeof a.value.modelValue=="boolean"?a.value.modelValue:typeof a.value.open=="boolean"?a.value.open:d.value},set(f){typeof f=="boolean"&&!a.value.disabled&&(n.value=!1,typeof a.value.modelValue=="boolean"&&t("update:modelValue",f),typeof a.value.open!="boolean"&&(d.value=f),t(`active:${f}`))}}),T=V(()=>/^\s*(?:top|right|bottom|left)\s*$/.test(a.value.from)?a.value.from.trim():"bottom"),h=V(()=>({ratio:x.value}));return()=>_(ce,O(p({},l),{modelValue:u.value,delayActive:{open:16,close:0},alwaysRender:!0,customTransition:!0,"onUpdate:modelValue":f=>u.value=f,"onActive:true":()=>{y.value=!1},"onDelayed-active:true":()=>{if(s.value){const f=s.value,{from:c}=a.value;if(/^(?:bottom|left)$/.test(c)){const b=c==="bottom"?0:f.clientWidth,v=c==="left"?0:f.clientHeight;f.scrollTo(b,v)}else f.scrollTo(0,0);n.value=!0}}}),{activator:f=>{var c;return(c=e==null?void 0:e.activator)==null?void 0:c.call(e,p(p({},f),h.value))},default:f=>{var b,v,A;const c=O(p(p({},f),h.value),{swipedOut:y.value,rootScrolled:n.value});return _("div",O(p({ref:s},D),{class:["Sheet hide-scrollbar",T.value,{"snap-mandatory":a.value.snapMandatory,"snap-proximity":!a.value.snapMandatory,"swipe-content-only":a.value.swipeContentOnly,"disable-swipe":a.value.disableSwipe},l.class],style:Object.assign(p({},!n.value&&u.value||y.value?{pointerEvents:"none"}:{pointerEvents:c.delayedActive?void 0:"none"}),l.style||{},a.value.disableRatio?{}:{"--ratio":String(x.value)})}),[(b=e==null?void 0:e.prepend)==null?void 0:b.call(e,c),_("div",O(p({},D),{class:["content-wrapper",{"full-height":!c.afterEnter&&u.value}]}),[_("div",{class:"content",style:!n.value&&u.value||y.value?{opacity:"0",pointerEvents:"none"}:{}},[!c.afterLeave||u.value?_(ve,{thresholdLength:a.value.thresholdLength,"onUpdate:entry":w=>{if(w.inactive||a.value.disableRatio)return;if((()=>{var C,P,R,j,F,$,N,I;if(!c.afterEnter)return!0;const{from:m}=a.value;return m==="bottom"?(((C=w.boundingClientRect)==null?void 0:C.top)||0)>(((P=w.rootBounds)==null?void 0:P.top)||0):m==="top"?(((R=w.boundingClientRect)==null?void 0:R.bottom)||0)<(((j=w.rootBounds)==null?void 0:j.bottom)||0):m==="left"?(((F=w.boundingClientRect)==null?void 0:F.right)||0)>((($=w.rootBounds)==null?void 0:$.right)||0):m==="right"?(((N=w.boundingClientRect)==null?void 0:N.left)||0)<(((I=w.rootBounds)==null?void 0:I.left)||0):!0})()){let m=w.ratio;if(m>=.991&&(m=1),m<=.01&&(m=0),t("update:ratio",m),x.value=m,y.value=m<=a.value.minThreshold,!c.afterEnter)return;m<=a.value.minThreshold&&(u.value=!1,y.value=!0)}}},{default:()=>_("div",O(p({},D),{"aria-hidden":"true",class:"observer"}))}):null,(v=e==null?void 0:e.default)==null?void 0:v.call(e,c)])]),(A=e==null?void 0:e.append)==null?void 0:A.call(e,c)])}})}});var Xe=(o,e)=>{const t=o.__vccOpts||o;for(const[l,a]of e)t[l]=a;return t};export{Xe as _,Qe as a,De as b,G as c,Ke as d,ke as e,Re as f,ve as g,Je as h,Ze as i,We as j,ce as k,He as l,Ie as m,Ue as n,qe as o,Ge as s,Le as u};
