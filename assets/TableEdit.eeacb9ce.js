var Y=Object.defineProperty;var k=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var C=(i,e,n)=>e in i?Y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,b=(i,e)=>{for(var n in e||(e={}))J.call(e,n)&&C(i,n,e[n]);if(k)for(var n of k(e))R.call(e,n)&&C(i,n,e[n]);return i};import{d as F,R as w,k as g,L as z,S as j,P as L,U as Q,V as W,W as X,Q as Z,X as q,Y as G,Z as H,_ as K,$ as ee,o as D,i as te,e as o,f as r,w as t,D as s,t as p,j as E,b as S}from"./vendor.a8ab573b.js";/* empty css                     *//* empty css                 *//* empty css                        *//* empty css               */const le=s(" Add "),oe={style:{color:"brown"}},ae={style:{color:"cornflowerblue"}},ne=s(" Edit "),re=s(" Delete "),ie=s("Cancel"),de=s(" Confirm Add "),se=s(" Confirm Edit "),ve=F({setup(i){const e=w({title:"",date:"",content:""});let n=0;const u=g(!1),_=g(!1),f=g(),c=w(localStorage.getItem("TableData")?JSON.parse(localStorage.getItem("TableData")||"[]"):[]);z(()=>{console.log("onTableEditMounted")});const T=(d,a)=>{_.value=!0,u.value=!0,e.title=a.title,e.date=a.date,e.content=a.content,n=d},x=()=>{f.value.validate(async d=>{d&&(c.splice(n,1,b({},e)),localStorage.setItem("TableData",JSON.stringify(c)),u.value=!1)})},I=(d,a)=>(c.splice(d,1),localStorage.setItem("TableData",JSON.stringify(c)),!0),N=()=>{console.log("addData"),f.value.validate(async d=>{d&&(c.push(b({},e)),localStorage.setItem("TableData",JSON.stringify(c)))}),u.value=!1};return(d,a)=>{const m=j,v=L,O=Q,P=W,$=X,h=Z,V=q,y=G,A=H,B=K,M=ee;return D(),te("div",null,[o(m,{type:"primary",onClick:a[0]||(a[0]=()=>{u.value=!0,_.value=!1,r(e).title="",r(e).date="",r(e).content=""})},{default:t(()=>[le]),_:1}),o(h,{data:r(c),stripe:""},{default:t(()=>[o(v,{label:"Date",align:"center"},{default:t(l=>[s(p(l.row.date),1)]),_:1}),o(v,{label:"Title",align:"center"},{default:t(l=>[o(P,{placement:"top"},{default:t(()=>[E("div",oe,"title: "+p(l.row.title),1),E("div",ae," content: "+p(l.row.content),1)]),reference:t(()=>[o(O,null,{default:t(()=>[s(p(l.row.title),1)]),_:2},1024)]),_:2},1024)]),_:1}),o(v,{label:"Operations",align:"center"},{default:t(l=>[o(m,{type:"text",size:"small",onClick:U=>T(l.$index,l.row)},{default:t(()=>[ne]),_:2},1032,["onClick"]),o($,{title:"Are you sure to delete this?",onConfirm:U=>I(l.$index,l.row)},{reference:t(()=>[o(m,{type:"text",size:"small",style:{color:"red"}},{default:t(()=>[re]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),o(M,{ref_key:"formRef",ref:f,modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=l=>u.value=l),title:_.value?"Edit":"Add",width:"32%"},{footer:t(()=>[E("span",null,[o(m,{onClick:a[4]||(a[4]=l=>u.value=!1)},{default:t(()=>[ie]),_:1}),_.value?(D(),S(m,{key:1,type:"primary",onClick:x},{default:t(()=>[se]),_:1})):(D(),S(m,{key:0,type:"primary",onClick:N},{default:t(()=>[de]),_:1}))])]),default:t(()=>[o(B,{ref_key:"formRef",ref:f,model:r(e),"label-width":"4rem","label-position":"top"},{default:t(()=>[o(y,{label:"title",prop:"title"},{default:t(()=>[o(V,{modelValue:r(e).title,"onUpdate:modelValue":a[1]||(a[1]=l=>r(e).title=l)},null,8,["modelValue"])]),_:1}),o(y,{label:"date",prop:"date"},{default:t(()=>[o(A,{style:{width:"100%"},modelValue:r(e).date,"onUpdate:modelValue":a[2]||(a[2]=l=>r(e).date=l),"value-format":"YYYY-MM-DD",type:"date"},null,8,["modelValue"])]),_:1}),o(y,{label:"content",prop:"content"},{default:t(()=>[o(V,{type:"textarea",rows:4,modelValue:r(e).content,"onUpdate:modelValue":a[3]||(a[3]=l=>r(e).content=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{ve as default};
