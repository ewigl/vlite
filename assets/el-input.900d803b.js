var je=Object.defineProperty,Ke=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var xe=(a,l,o)=>l in a?je(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,Q=(a,l)=>{for(var o in l||(l={}))Ue.call(l,o)&&xe(a,o,l[o]);if(we)for(var o of we(l))We.call(l,o)&&xe(a,o,l[o]);return a},Se=(a,l)=>Ke(a,Re(l));import{a as Ve,ac as Xe,o as r,c as h,g as z,j as p,ad as Ye,E as Ae,ae as Ce,b as qe,af as Je,d as Z,ag as Ee,z as Qe,ah as G,ai as Ze,aj as Ge,ak as et,T as tt,al as at,u as Ie,Q as ee,m as _,am as ot,C as te,J as $,U as $e,q as st,an as nt,ao as lt,L as it,M as rt,f as u,F as ae,n as c,e as t,r as O,ap as ze,s as w,v as A,aa as oe,a1 as T,k as ke,a3 as ut,N as dt,t as j,h as ct,W as pt,Y as Pe,w as ft}from"./index.93b56758.js";import{U as se}from"./validator.e0f5a70a.js";function vt(a){return a==null}const yt=Ve({name:"View"}),mt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ht=z("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),gt=[ht];function bt(a,l,o,s,f,g){return r(),h("svg",mt,gt)}var wt=Xe(yt,[["render",bt]]);const xt=a=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(a),St=["class","style"],Ct=/^on[A-Z]/,Et=(a={})=>{const{excludeListeners:l=!1,excludeKeys:o=[]}=a,s=o.concat(St),f=Ae();return f?p(()=>{var g;return Ye(Object.entries((g=f.proxy)==null?void 0:g.$attrs).filter(([v])=>!s.includes(v)&&!(l&&Ct.test(v))))}):p(()=>({}))};let m;const It=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,$t=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(a){const l=window.getComputedStyle(a),o=l.getPropertyValue("box-sizing"),s=Number.parseFloat(l.getPropertyValue("padding-bottom"))+Number.parseFloat(l.getPropertyValue("padding-top")),f=Number.parseFloat(l.getPropertyValue("border-bottom-width"))+Number.parseFloat(l.getPropertyValue("border-top-width"));return{contextStyle:$t.map(v=>`${v}:${l.getPropertyValue(v)}`).join(";"),paddingSize:s,borderSize:f,boxSizing:o}}function Ne(a,l=1,o){var s;m||(m=document.createElement("textarea"),document.body.appendChild(m));const{paddingSize:f,borderSize:g,boxSizing:v,contextStyle:F}=zt(a);m.setAttribute("style",`${F};${It}`),m.value=a.value||a.placeholder||"";let d=m.scrollHeight;const C={};v==="border-box"?d=d+g:v==="content-box"&&(d=d-f),m.value="";const y=m.scrollHeight-f;if(Ce(l)){let b=y*l;v==="border-box"&&(b=b+f+g),d=Math.max(b,d),C.minHeight=`${b}px`}if(Ce(o)){let b=y*o;v==="border-box"&&(b=b+f+g),d=Math.min(b,d)}return C.height=`${d}px`,(s=m.parentNode)==null||s.removeChild(m),m=void 0,C}const kt=qe({size:Je,disabled:Boolean,modelValue:{type:Z([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Z([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ee,default:""},prefixIcon:{type:Ee,default:""},label:{type:String},tabindex:{type:[Number,String]},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Z([Object,Array,String]),default:()=>Qe({})}}),Pt={[se]:a=>G(a),input:a=>G(a),change:a=>G(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},Nt=["type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder"],Vt=["tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],At={name:"ElInput",inheritAttrs:!1},Tt=Ve(Se(Q({},At),{props:kt,emits:Pt,setup(a,{expose:l,emit:o}){const s=a,f={suffix:"append",prefix:"prepend"},g=Ae(),v=Ze(),F=Ge(),d=Et(),{form:C,formItem:y}=et(),b=tt(),E=at(),n=Ie("input"),ne=Ie("textarea"),K=ee(),k=ee(),M=_(!1),R=_(!1),P=_(!1),U=_(!1),W=ee(s.inputStyle),N=p(()=>K.value||k.value),le=p(()=>{var e;return(e=C==null?void 0:C.statusIcon)!=null?e:!1}),B=p(()=>(y==null?void 0:y.validateState)||""),ie=p(()=>ot[B.value]),Te=p(()=>[v.style,s.inputStyle]),re=p(()=>[s.inputStyle,W.value,{resize:s.resize}]),x=p(()=>vt(s.modelValue)?"":String(s.modelValue)),L=p(()=>s.clearable&&!E.value&&!s.readonly&&!!x.value&&(M.value||R.value)),X=p(()=>s.showPassword&&!E.value&&!s.readonly&&(!!x.value||M.value)),V=p(()=>s.showWordLimit&&!!d.value.maxlength&&(s.type==="text"||s.type==="textarea")&&!E.value&&!s.readonly&&!s.showPassword),Y=p(()=>Array.from(x.value).length),Fe=p(()=>!!V.value&&Y.value>Number(d.value.maxlength)),Me=p(()=>!!F.suffix||!!s.suffixIcon||L.value||s.showPassword||V.value||!!B.value&&le.value),D=()=>{const{type:e,autosize:i}=s;if(!(!pt||e!=="textarea"))if(i){const I=Pe(i)?i.minRows:void 0,S=Pe(i)?i.maxRows:void 0;W.value=Q({},Ne(k.value,I,S))}else W.value={minHeight:Ne(k.value).minHeight}},H=()=>{const e=N.value;!e||e.value===x.value||(e.value=x.value)},ue=e=>{const{el:i}=g.vnode;if(!i)return;const S=Array.from(i.querySelectorAll(`.${n.e(e)}`)).find(Oe=>Oe.parentNode===i);if(!S)return;const be=f[e];F[be]?S.style.transform=`translateX(${e==="suffix"?"-":""}${i.querySelector(`.${n.be("group",be)}`).offsetWidth}px)`:S.removeAttribute("style")},q=()=>{ue("prefix"),ue("suffix")},J=async e=>{const{value:i}=e.target;P.value||i!==x.value&&(o(se,i),o("input",i),await $(),H())},de=e=>{o("change",e.target.value)},ce=e=>{o("compositionstart",e),P.value=!0},pe=e=>{var i;o("compositionupdate",e);const I=(i=e.target)==null?void 0:i.value,S=I[I.length-1]||"";P.value=!xt(S)},fe=e=>{o("compositionend",e),P.value&&(P.value=!1,J(e))},Be=()=>{U.value=!U.value,ve()},ve=async()=>{var e;await $(),(e=N.value)==null||e.focus()},Le=()=>{var e;return(e=N.value)==null?void 0:e.blur()},ye=e=>{M.value=!0,o("focus",e)},me=e=>{var i;M.value=!1,o("blur",e),s.validateEvent&&((i=y==null?void 0:y.validate)==null||i.call(y,"blur").catch(I=>$e()))},De=e=>{R.value=!1,o("mouseleave",e)},He=e=>{R.value=!0,o("mouseenter",e)},he=e=>{o("keydown",e)},_e=()=>{var e;(e=N.value)==null||e.select()},ge=()=>{o(se,""),o("change",""),o("clear"),o("input","")};return te(()=>s.modelValue,()=>{var e;$(()=>D()),s.validateEvent&&((e=y==null?void 0:y.validate)==null||e.call(y,"change").catch(i=>$e()))}),te(x,()=>H()),te(()=>s.type,async()=>{await $(),H(),D(),q()}),st(async()=>{H(),q(),await $(),D()}),nt(async()=>{await $(),q()}),l({input:K,textarea:k,ref:N,textareaStyle:re,autosize:lt(s,"autosize"),focus:ve,blur:Le,select:_e,clear:ge,resizeTextarea:D}),(e,i)=>it((r(),h("div",{class:c([e.type==="textarea"?t(ne).b():t(n).b(),t(n).m(t(b)),t(n).is("disabled",t(E)),t(n).is("exceed",t(Fe)),{[t(n).b("group")]:e.$slots.prepend||e.$slots.append,[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend,[t(n).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(n).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(n).m("suffix--password-clear")]:t(L)&&t(X)},e.$attrs.class]),style:ct(t(Te)),onMouseenter:He,onMouseleave:De},[u(" input "),e.type!=="textarea"?(r(),h(ae,{key:0},[u(" prepend slot "),e.$slots.prepend?(r(),h("div",{key:0,class:c(t(n).be("group","prepend"))},[O(e.$slots,"prepend")],2)):u("v-if",!0),z("input",ze({ref_key:"input",ref:K,class:t(n).e("inner")},t(d),{type:e.showPassword?U.value?"text":"password":e.type,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:ce,onCompositionupdate:pe,onCompositionend:fe,onInput:J,onFocus:ye,onBlur:me,onChange:de,onKeydown:he}),null,16,Nt),u(" prefix slot "),e.$slots.prefix||e.prefixIcon?(r(),h("span",{key:1,class:c(t(n).e("prefix"))},[z("span",{class:c(t(n).e("prefix-inner"))},[O(e.$slots,"prefix"),e.prefixIcon?(r(),w(t(T),{key:0,class:c(t(n).e("icon"))},{default:A(()=>[(r(),w(oe(e.prefixIcon)))]),_:1},8,["class"])):u("v-if",!0)],2)],2)):u("v-if",!0),u(" suffix slot "),t(Me)?(r(),h("span",{key:2,class:c(t(n).e("suffix"))},[z("span",{class:c(t(n).e("suffix-inner"))},[!t(L)||!t(X)||!t(V)?(r(),h(ae,{key:0},[O(e.$slots,"suffix"),e.suffixIcon?(r(),w(t(T),{key:0,class:c(t(n).e("icon"))},{default:A(()=>[(r(),w(oe(e.suffixIcon)))]),_:1},8,["class"])):u("v-if",!0)],64)):u("v-if",!0),t(L)?(r(),w(t(T),{key:1,class:c([t(n).e("icon"),t(n).e("clear")]),onMousedown:i[0]||(i[0]=dt(()=>{},["prevent"])),onClick:ge},{default:A(()=>[ke(t(ut))]),_:1},8,["class"])):u("v-if",!0),t(X)?(r(),w(t(T),{key:2,class:c([t(n).e("icon"),t(n).e("clear")]),onClick:Be},{default:A(()=>[ke(t(wt))]),_:1},8,["class"])):u("v-if",!0),t(V)?(r(),h("span",{key:3,class:c(t(n).e("count"))},[z("span",{class:c(t(n).e("count-inner"))},j(t(Y))+" / "+j(t(d).maxlength),3)],2)):u("v-if",!0)],2),t(B)&&t(ie)&&t(le)?(r(),w(t(T),{key:0,class:c([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(B)==="validating")])},{default:A(()=>[(r(),w(oe(t(ie))))]),_:1},8,["class"])):u("v-if",!0)],2)):u("v-if",!0),u(" append slot "),e.$slots.append?(r(),h("div",{key:3,class:c(t(n).be("group","append"))},[O(e.$slots,"append")],2)):u("v-if",!0)],64)):(r(),h(ae,{key:1},[u(" textarea "),z("textarea",ze({ref_key:"textarea",ref:k,class:t(ne).e("inner")},t(d),{tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(re),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:ce,onCompositionupdate:pe,onCompositionend:fe,onInput:J,onFocus:ye,onBlur:me,onChange:de,onKeydown:he}),null,16,Vt),t(V)?(r(),h("span",{key:0,class:c(t(n).e("count"))},j(t(Y))+" / "+j(t(d).maxlength),3)):u("v-if",!0)],64))],38)),[[rt,e.type!=="hidden"]])}})),Lt=ft(Tt);export{Lt as E,xt as i};
