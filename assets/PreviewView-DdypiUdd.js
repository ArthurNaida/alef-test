import{_ as d,o as s,c as o,r as f,d as u,u as m,a as p,b as t,e as r,t as n,F as x,f as h,g,h as y,w as k,i as b}from"./index-DxgNRTIK.js";const v={},w={class:"w-fit py-2.5 px-5 bg-gray-l rounded-[5px] text-black text-main-large font-bold"};function V(e,a){return s(),o("div",w,[f(e.$slots,"default")])}const C=d(v,[["render",V]]),i=e=>e?e%10===1&&e%100!==11?"год":e%10<5&&e%10>1&&!(e%100>11&&e%100<15)?"года":"лет":"",N={class:"text-main-large pl-[375px] py-[30px] flex flex-col gap-[60px]"},S={key:0,class:"flex flex-col gap-5"},B=r("h1",{class:"font-medium"},"Персональные данные",-1),$={class:"font-bold"},F={key:1,class:"font-medium"},L={key:2,class:"flex flex-col gap-5"},P=r("h1",{class:"font-medium"},"Дети",-1),T={class:"flex flex-col gap-5"},j=u({__name:"PreviewView",setup(e){const{user:a}=m(),{children:c}=p();return(D,E)=>(s(),o("div",N,[t(a).name&&t(a).age?(s(),o("div",S,[B,r("h2",$,n(t(a).name)+", "+n(t(a).age)+" "+n(t(i)(t(a).age)),1)])):(s(),o("h1",F,"Нет данных о пользователе")),t(c).length?(s(),o("div",L,[P,r("ul",T,[(s(!0),o(x,null,h(t(c),(l,_)=>(s(),o("li",{key:_},[y(C,null,{default:k(()=>[b(n(l.name)+", "+n(l.age)+" "+n(t(i)(l.age)),1)]),_:2},1024)]))),128))])])):g("",!0)]))}});export{j as default};
