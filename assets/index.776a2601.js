import{d,r as g,o as i,c as p,a as t,t as _,F as f,p as h,b as v,e as l,f as y,g as b,h as k}from"./vendor.7c781359.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};V();var I="./assets/logo.03d6d6da.png";var S=(n,s)=>{const a=n.__vccOpts||n;for(const[r,e]of s)a[r]=e;return a};const c=n=>(h("data-v-7bad3d28"),n=n(),v(),n),E=c(()=>t("p",null,[l(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),L=c(()=>t("p",null,[l("See "),t("code",null,"README.md"),l(" for more information.")],-1)),N=c(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),x=c(()=>t("p",null,[l(" Edit "),t("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),A=d({props:{msg:null},setup(n){const s=g(0);return(a,r)=>(i(),p(f,null,[t("h1",null,_(n.msg),1),E,L,N,t("button",{type:"button",onClick:r[0]||(r[0]=e=>s.value++)},"count is: "+_(s.value),1),x],64))}});var D=S(A,[["__scopeId","data-v-7bad3d28"]]);const O=t("img",{alt:"Vue logo",src:I},null,-1),j=d({setup(n){return(s,a)=>(i(),p(f,null,[O,y(D,{msg:s.$t("menu.console")},null,8,["msg"])],64))}}),C={en:{menu:{console:"console"}},zhCn:{menu:{console:"\u63A7\u5236\u53F0"}}},F=b({locale:"en",fallbackLocale:"en",messages:C}),m=k(j);m.use(F);m.mount("#app");
