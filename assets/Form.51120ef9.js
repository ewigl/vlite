import{d as E,W as g,X as w,Y as C,Z as U,_ as P,$ as S,M as R,a0 as h,a1 as A,a2 as G,a3 as O,a4 as B,a5 as F,U as I,a6 as D,o as N,b as T,w as o,f as t,e,j as Z,D as _}from"./vendor.17605bd6.js";/* empty css               *//* empty css                 *//* empty css               */const j=Z("span",{class:"text-gray-500"},"-",-1),z=_("Create"),M=_("Cancel"),J=E({setup(W){const l=g({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c=()=>{console.log("submit!")};return(X,a)=>{const i=w,d=C,m=U,f=P,V=S,r=R,b=h,v=A,s=G,y=O,u=B,k=F,p=I,x=D;return N(),T(x,{ref:"formRef",model:t(l),"label-width":"120px"},{default:o(()=>[e(d,{label:"Activity name"},{default:o(()=>[e(i,{modelValue:t(l).name,"onUpdate:modelValue":a[0]||(a[0]=n=>t(l).name=n)},null,8,["modelValue"])]),_:1}),e(d,{label:"Activity zone"},{default:o(()=>[e(f,{modelValue:t(l).region,"onUpdate:modelValue":a[1]||(a[1]=n=>t(l).region=n),placeholder:"please select your zone"},{default:o(()=>[e(m,{label:"Zone one",value:"shanghai"}),e(m,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Activity time"},{default:o(()=>[e(r,{span:11},{default:o(()=>[e(V,{modelValue:t(l).date1,"onUpdate:modelValue":a[2]||(a[2]=n=>t(l).date1=n),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(r,{span:2,class:"text-center"},{default:o(()=>[j]),_:1}),e(r,{span:11},{default:o(()=>[e(b,{modelValue:t(l).date2,"onUpdate:modelValue":a[3]||(a[3]=n=>t(l).date2=n),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{label:"Instant delivery"},{default:o(()=>[e(v,{modelValue:t(l).delivery,"onUpdate:modelValue":a[4]||(a[4]=n=>t(l).delivery=n)},null,8,["modelValue"])]),_:1}),e(d,{label:"Activity type"},{default:o(()=>[e(y,{modelValue:t(l).type,"onUpdate:modelValue":a[5]||(a[5]=n=>t(l).type=n)},{default:o(()=>[e(s,{label:"Online activities",name:"type"}),e(s,{label:"Promotion activities",name:"type"}),e(s,{label:"Offline activities",name:"type"}),e(s,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Resources"},{default:o(()=>[e(k,{modelValue:t(l).resource,"onUpdate:modelValue":a[6]||(a[6]=n=>t(l).resource=n)},{default:o(()=>[e(u,{label:"Sponsor"}),e(u,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Activity form"},{default:o(()=>[e(i,{modelValue:t(l).desc,"onUpdate:modelValue":a[7]||(a[7]=n=>t(l).desc=n),type:"textarea"},null,8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(p,{type:"primary",onClick:c},{default:o(()=>[z]),_:1}),e(p,null,{default:o(()=>[M]),_:1})]),_:1})]),_:1},8,["model"])}}});export{J as default};
