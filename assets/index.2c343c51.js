var q=Object.defineProperty,H=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var N=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P=(t,e)=>{for(var n in e||(e={}))W.call(e,n)&&N(t,n,e[n]);if(F)for(var n of F(e))j.call(e,n)&&N(t,n,e[n]);return t},A=(t,e)=>H(t,U(e));import{c as G,u as J,d as v,a as O,E as K,o as i,b as d,w as u,e as c,f as _,r as D,z as Q,g as X,h as f,i as g,j as Y,t as B,k as Z,F as k,l as T,m as ee,n as te,p as V,q as ne,s as oe,v as re,x as ae,y as se,A as ce,B as w,C as M,D as ie,T as le,G as ue,H as de,I as _e,J as me}from"./vendor.dbac778e.js";import"https://at.alicdn.com/t/font_3317867_0i6s39wwemwi.js";const pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};pe();const z=Symbol(),he=G({state:{locale:"zhCn",isSidebarOpened:localStorage.getItem("isSidebarOpened")==="true"},getters:{},actions:{},mutations:{changeLanguage(t,e){t.locale=e},toggleSidebar(t){t.isSidebarOpened=!t.isSidebarOpened,localStorage.setItem("isSidebarOpened",t.isSidebarOpened.toString())}}});function x(){return J(z)}const fe=v({setup(t){const e=x(),n={zhCn:Q,en:X};let r=O(()=>n[e.state.locale]);return(o,s)=>{const a=D("router-view"),l=K;return i(),d(l,{locale:_(r)},{default:u(()=>[c(a)]),_:1},8,["locale"])}}}),ve="modulepreload",R={},ge="./",E=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${ge}${r}`,r in R)return;R[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ve,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((l,m)=>{a.addEventListener("load",l),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const be={class:"svg-icon","aria-hidden":"true"},ye=["xlink:href"],$=v({props:{name:{type:String,default:"",required:!0}},setup(t){return(e,n)=>(i(),f("svg",be,[g("use",{"xlink:href":"#"+t.name},null,8,ye)]))}}),Se=v({props:{item:null},setup(t){x();const e=Y(),n=(r=[],o)=>{const s=r.filter(a=>{var l;return(l=a==null?void 0:a.meta)!=null&&l.hidden?!1:(e.value=a,!0)});return s.length===1?!0:s.length===0?(e.value=A(P({},o),{noShowingChildren:!0}),!0):!1};return(r,o)=>{var p;const s=$,a=ee,l=D("MenuItem",!0),m=te;return n(t.item.children,t.item)?(i(),f(k,{key:0},[(p=t.item.meta)!=null&&p.hidden?Z("",!0):(i(),d(a,{key:0,index:t.item.path,route:t.item.path},{default:u(()=>{var h,b,y,S;return[c(s,{name:(b=(h=t.item)==null?void 0:h.meta)==null?void 0:b.icon},null,8,["name"]),g("span",null,B((S=(y=t.item)==null?void 0:y.meta)==null?void 0:S.title),1)]}),_:1},8,["index","route"]))],64)):(i(),d(m,{key:1,index:t.item.path},{title:u(()=>{var h,b,y,S;return[c(s,{name:(b=(h=t.item)==null?void 0:h.meta)==null?void 0:b.icon},null,8,["name"]),g("span",null,B((S=(y=t.item)==null?void 0:y.meta)==null?void 0:S.title),1)]}),default:u(()=>[(i(!0),f(k,null,T(t.item.children,h=>(i(),d(l,{item:h},null,8,["item"]))),256))]),_:1},8,["index"]))}}});var I=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n};const Ee=v({setup(t){const e=x(),n=V(),r=O(()=>n.options.routes),o=O(()=>n.currentRoute.value.path);return(s,a)=>{const l=ne,m=oe;return i(),d(m,null,{default:u(()=>[c(l,{router:"","default-active":_(o),collapse:!_(e).state.isSidebarOpened,"background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#fff"},{default:u(()=>[(i(!0),f(k,null,T(_(r),p=>(i(),d(Se,{item:p,"base-path":p.path},null,8,["item","base-path"]))),256))]),_:1},8,["default-active","collapse"])]),_:1})}}});var xe=I(Ee,[["__scopeId","data-v-281de507"]]);const Ce=v({setup(t){const e=V();return O(()=>e.options.routes),(n,r)=>null}});const Oe={style:{"text-align":"right"}},ke=M(" \u4E2D\u6587"),we=M(" English"),De=v({setup(t){const e=x(),n=o=>{e.commit("changeLanguage",o)},r=()=>{e.commit("toggleSidebar")};return(o,s)=>{const a=re,l=ae,m=se,p=ce;return i(),f("div",{class:w({navbar:!0,"is-sidebar-opened":_(e).state.isSidebarOpened})},[g("span",{onClick:r,style:{cursor:"pointer"}},[c($,{class:"navbar-hamburger",name:_(e).state.isSidebarOpened?"outdent":"indent"},null,8,["name"])]),c(Ce),g("div",Oe,[c(p,{class:"avatar",trigger:"click",onCommand:n},{dropdown:u(()=>[c(m,null,{default:u(()=>[c(l,{command:"zhCn"},{default:u(()=>[ke]),_:1}),c(l,{command:"en"},{default:u(()=>[we]),_:1})]),_:1})]),default:u(()=>[c(a,{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),_:1})])],2)}}}),$e={};function Ie(t,e){const n=D("router-view");return i(),d(n,null,{default:u(({Component:r})=>[c(le,{name:"el-fade-in-linear",mode:"out-in"},{default:u(()=>[(i(),d(ie(r)))]),_:2},1024)]),_:1})}var Le=I($e,[["render",Ie]]);const C=v({setup(t){const e=x();return(n,r)=>{const o=ue;return i(),f(k,null,[c(xe,{class:w({"sidebar-container":!0,"is-sidebar-opened":_(e).state.isSidebarOpened})},null,8,["class"]),g("div",{class:w({"main-container":!0,"is-sidebar-opened":_(e).state.isSidebarOpened})},[c(De),c(Le),c(o)],2)],64)}}}),Fe={};function Ne(t,e){return i(),f("div",null,"NotFound")}var Pe=I(Fe,[["render",Ne]]);const Ae=[{path:"/",component:C,redirect:"/dashboard",name:"Dashboard",meta:{title:"\u9996\u9875",icon:"dashboard"},children:[{path:"/",name:"Dashboard",component:()=>E(()=>import("./Dashboard.d2c1a740.js"),["assets/Dashboard.d2c1a740.js","assets/Dashboard.960a8741.css","assets/vendor.dbac778e.js","assets/vendor.acb0bc3a.css"])}]},{path:"/data",component:C,name:"Data",meta:{title:"\u6570\u636E",icon:"database"},children:[{path:"/data/table",name:"Table",meta:{title:"\u8868\u683C",icon:"table"},component:()=>E(()=>import("./TableEdit.73b30f5f.js"),["assets/TableEdit.73b30f5f.js","assets/TableEdit.4e724b7f.css","assets/vendor.dbac778e.js","assets/vendor.acb0bc3a.css"])},{path:"/data/form",name:"Form",component:()=>E(()=>import("./Form.05dd07de.js"),["assets/Form.05dd07de.js","assets/vendor.dbac778e.js","assets/vendor.acb0bc3a.css"]),meta:{title:"\u8868\u5355",icon:"form"}}]},{path:"/system",component:C,name:"System",meta:{title:"\u7CFB\u7EDF",icon:"setting"},children:[{path:"/system",name:"System",component:()=>E(()=>import("./System.4fa17bf2.js"),["assets/System.4fa17bf2.js","assets/System.ef9e8c61.css","assets/vendor.dbac778e.js","assets/vendor.acb0bc3a.css"]),meta:{title:"\u7CFB\u7EDF",icon:"setting"}},{path:"/system/user",name:"User",component:()=>E(()=>import("./User.6b6f3b5b.js"),["assets/User.6b6f3b5b.js","assets/User.0e752283.css","assets/vendor.dbac778e.js","assets/vendor.acb0bc3a.css"]),meta:{title:"\u7528\u6237",icon:"user"}}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:C,meta:{title:"NotFound",icon:"404",hidden:!0},children:[{path:"",name:"NotFound",component:Pe}]}],Be=de({history:_e(),routes:Ae});const L=me(fe);L.component("svg-icon",$);L.use(Be).use(he,z);L.mount("#app");export{I as _,$ as a};
