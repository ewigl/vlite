import{d as m,C as _,D as u,G as h,o as x,b as v,m as t,w as s,H as g,I as f,J as y,p as c}from"./vendor.67a18931.js";import{_ as B}from"./index.ec116aee.js";const l=e=>(f("data-v-312fe77b"),e=e(),y(),e),E={class:"page_wrapper"},I=l(()=>c("div",{id:"echartsExample",class:"e-charts"},null,-1)),S=l(()=>c("div",{id:"echartsExample2",class:"e-charts"},null,-1)),C=m({setup(e){const{proxy:n}=g();let d={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},p={title:{text:"Basic Radar Chart"},legend:{data:["Allocated Budget","Actual Spending"]},radar:{indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Technology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"Actual Spending"}]}]};return _(()=>{let o=document.getElementById("echartsExample");n.echarts.init(o).setOption(d);let a=document.getElementById("echartsExample2");n.echarts.init(a).setOption(p)}),(o,i)=>{const a=u,r=h;return x(),v("div",E,[t(r,null,{default:s(()=>[t(a,{span:12},{default:s(()=>[I]),_:1}),t(a,{span:12},{default:s(()=>[S]),_:1})]),_:1})])}}});var A=B(C,[["__scopeId","data-v-312fe77b"]]);export{A as default};
