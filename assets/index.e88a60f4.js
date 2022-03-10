var q=Object.defineProperty,z=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,I=(t,e)=>{for(var n in e||(e={}))H.call(e,n)&&T(t,n,e[n]);if(L)for(var n of L(e))W.call(e,n)&&T(t,n,e[n]);return t},N=(t,e)=>z(t,U(e));import{c as j,u as G,d as f,a as O,E as K,o as c,b as d,w as u,e as i,f as p,r as k,z as J,g as Q,h as X,T as Y,i as h,j as b,k as Z,t as P,l as ee,F as S,m as A,n as te,p as ne,q as F,s as oe,v as re,x as ae,y as se,A as ce,B as ie,C,D as R,G as le,H as ue,I as de}from"./vendor.d7d25ace.js";import"https://at.alicdn.com/t/font_2621077_hhkmkcfvwsh.js";const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};_e();const M=Symbol(),me=j({state:{locale:"zhCn",count:0,name:"Vue",isSidebarOpened:!0},getters:{count(t){return t.count}},actions:{},mutations:{changeLanguage(t,e){t.locale=e}}});function y(){return G(M)}const pe=f({setup(t){const e=y(),n={zhCn:J,en:Q};let r=O(()=>n[e.state.locale]);return(o,a)=>{const s=k("router-view"),l=K;return c(),d(l,{locale:p(r)},{default:u(()=>[i(s)]),_:1},8,["locale"])}}}),he="modulepreload",V={},fe="./",v=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${fe}${r}`,r in V)return;V[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":he,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((l,_)=>{s.addEventListener("load",l),s.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var w=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n};const ve={};function be(t,e){const n=k("router-view");return c(),d(n,null,{default:u(({Component:r})=>[i(Y,{name:"el-fade-in-linear",mode:"out-in"},{default:u(()=>[(c(),d(X(r)))]),_:2},1024)]),_:1})}var B=w(ve,[["render",be]]);const ge={class:"svg-icon","aria-hidden":"true"},ye=["xlink:href"],$=f({props:{name:{type:String,default:"",required:!0}},setup(t){return(e,n)=>(c(),h("svg",ge,[b("use",{"xlink:href":"#"+t.name},null,8,ye)]))}}),Ee=f({props:{item:{type:null,required:!0}},setup(t){y();const e=Z(),n=(r=[],o)=>{const a=r.filter(s=>{var l;return(l=s==null?void 0:s.meta)!=null&&l.hidden?!1:(e.value=s,!0)});return a.length===1?!0:a.length===0?(e.value=N(I({},o),{noShowingChildren:!0}),!0):!1};return(r,o)=>{var E;const a=$,s=te,l=k("MenuItem",!0),_=ne;return n(t.item.children,t.item)?(c(),h(S,{key:0},[(E=t.item.meta)!=null&&E.hidden?ee("",!0):(c(),d(s,{key:0,index:t.item.path,route:t.item.path},{default:u(()=>{var m,g;return[i(a,{name:(g=(m=t.item)==null?void 0:m.meta)==null?void 0:g.icon},null,8,["name"]),b("span",null,P(t.item.name),1)]}),_:1},8,["index","route"]))],64)):(c(),d(_,{key:1,index:t.item.path},{title:u(()=>{var m,g;return[i(a,{name:(g=(m=t.item)==null?void 0:m.meta)==null?void 0:g.icon},null,8,["name"]),b("span",null,P(t.item.name),1)]}),default:u(()=>[(c(!0),h(S,null,A(t.item.children,m=>(c(),d(l,{item:m},null,8,["item"]))),256))]),_:1},8,["index"]))}}});const xe=f({setup(t){const e=y(),n=F(),r=O(()=>n.options.routes);return(o,a)=>{const s=oe,l=re;return c(),d(l,null,{default:u(()=>[i(s,{router:"",collapse:!p(e).state.isSidebarOpened,"background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#fff"},{default:u(()=>[(c(!0),h(S,null,A(p(r),_=>(c(),d(Ee,{item:_,"base-path":_.path},null,8,["item","base-path"]))),256))]),_:1},8,["collapse"])]),_:1})}}});var Se=w(xe,[["__scopeId","data-v-84ba08c6"]]);const Ce=f({setup(t){const e=F();return O(()=>e.options.routes),(n,r)=>null}});const Oe={style:{"text-align":"right"}},ke=R(" \u4E2D\u6587 "),we=R(" English "),$e=f({setup(t){const e=y(),n=r=>{e.commit("changeLanguage",r)};return(r,o)=>{const a=$,s=ae,l=se,_=ce,E=ie;return c(),h("div",{class:C({navbar:!0,"is-sidebar-opened":p(e).state.isSidebarOpened})},[b("span",{onClick:o[0]||(o[0]=m=>p(e).state.isSidebarOpened=!p(e).state.isSidebarOpened),style:{cursor:"pointer"}},[p(e).state.isSidebarOpened?(c(),d(a,{key:0,class:"navbar-hamburger",name:"outdent"})):(c(),d(a,{key:1,class:"navbar-hamburger",name:"indent"}))]),i(Ce),b("div",Oe,[i(E,{class:"avatar",trigger:"click",onCommand:n},{dropdown:u(()=>[i(_,null,{default:u(()=>[i(l,{command:"zhCn"},{default:u(()=>[ke]),_:1}),i(l,{command:"en"},{default:u(()=>[we]),_:1})]),_:1})]),default:u(()=>[i(s,{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),_:1})])],2)}}}),x=f({setup(t){const e=y();return(n,r)=>(c(),h(S,null,[i(Se,{class:C({"sidebar-container":!0})}),b("div",{class:C({"main-container":!0,"is-sidebar-opened":p(e).state.isSidebarOpened})},[i($e),i(B)],2)],64))}}),De={},Le={class:"page_wrapper"};function Te(t,e){return c(),h("div",Le,"NotFound")}var Ie=w(De,[["render",Te]]);const Ne=[{path:"/",component:x,redirect:"/dashboard",name:"Dashboard",meta:{title:"Dashboard",icon:"dashboard"},children:[{path:"dashboard",name:"Dashboard",component:()=>v(()=>import("./Dashboard.b0a52e39.js"),["assets/Dashboard.b0a52e39.js","assets/Dashboard.b2942166.css","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"])}]},{path:"/data",component:x,name:"Data",meta:{title:"Data",icon:"database"},children:[{path:"/data/table",name:"Table",component:B,meta:{title:"Table",icon:"table"},children:[{path:"/data/table/list",name:"TableList",component:()=>v(()=>import("./TableList.d282ca92.js"),["assets/TableList.d282ca92.js","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"]),meta:{title:"TableList",icon:"table-list"}},{path:"/data/table/edit",name:"TableEdit",component:()=>v(()=>import("./TableEdit.4276e9eb.js"),["assets/TableEdit.4276e9eb.js","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"]),meta:{title:"TableEdit",icon:"table-edit"}}]},{path:"/data/form",name:"Form",component:()=>v(()=>import("./Form.71182787.js"),["assets/Form.71182787.js","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"]),meta:{title:"Form",icon:"form"}}]},{path:"/system",component:x,name:"System",meta:{title:"System",icon:"setting"},children:[{path:"/system",name:"System",component:()=>v(()=>import("./System.5df2021c.js"),["assets/System.5df2021c.js","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"]),meta:{title:"User",icon:"user"}},{path:"/system/user",name:"User",component:()=>v(()=>import("./User.e5c678eb.js"),["assets/User.e5c678eb.js","assets/vendor.d7d25ace.js","assets/vendor.fa31c689.css"]),meta:{title:"User",icon:"user"}}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:x,meta:{title:"NotFound",icon:"404",hidden:!0},children:[{path:"",name:"NotFound",component:Ie}]}],Pe=le({history:ue(),routes:Ne});const D=de(pe);D.component("svg-icon",$);D.use(Pe).use(me,M);D.mount("#app");export{w as _};
