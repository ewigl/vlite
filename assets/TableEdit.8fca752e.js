import{d as h,Q as w,O as b,R as x,S as E,U as N,P as T,o as C,b as k,w as t,e as o,j as n,f as y,V as D,t as s,D as r}from"./vendor.17605bd6.js";/* empty css                        *//* empty css               */const S={style:{display:"flex","align-items":"center"}},A={style:{"margin-left":"10px"}},B=r("Edit"),G=r("Delete"),z=h({setup(L){const c=(a,l)=>{console.log(a,l)},i=(a,l)=>{console.log(a,l)},m=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(a,l)=>{const u=w,d=b,p=x,f=E,_=N,g=T;return C(),k(g,{data:m,style:{width:"100%"}},{default:t(()=>[o(d,{label:"Date",width:"180"},{default:t(e=>[n("div",S,[o(u,null,{default:t(()=>[o(y(D))]),_:1}),n("span",A,s(e.row.date),1)])]),_:1}),o(d,{label:"Name",width:"180"},{default:t(e=>[o(f,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:t(()=>[n("div",null,"name: "+s(e.row.name),1),n("div",null,"address: "+s(e.row.address),1)]),reference:t(()=>[o(p,null,{default:t(()=>[r(s(e.row.name),1)]),_:2},1024)]),_:2},1024)]),_:1}),o(d,{label:"Operations"},{default:t(e=>[o(_,{size:"small",onClick:v=>c(e.$index,e.row)},{default:t(()=>[B]),_:2},1032,["onClick"]),o(_,{size:"small",type:"danger",onClick:v=>i(e.$index,e.row)},{default:t(()=>[G]),_:2},1032,["onClick"])]),_:1})]),_:1})}}});export{z as default};
