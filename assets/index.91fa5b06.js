import{d as w,r as m,o as s,c as g,w as c,a as x,t as p,b as h,e as v,F as u,f as d,_ as b,g as M,h as S,i as P,u as A,M as D,j as L,L as H,k as Z,l as W,m as I,n as z}from"./vendor.8a108907.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}};O();const V=w({props:{menuInfo:null},setup(o){return(n,e)=>{const r=m("router-link"),t=b,i=m("sub-menu",!0),l=M;return s(),g(l,{key:o.menuInfo.name},{title:c(()=>[x(p(o.menuInfo.name),1)]),default:c(()=>[(s(!0),h(u,null,v(o.menuInfo.children,a=>(s(),h(u,{key:a.name},[a.children?(s(),g(i,{"menu-info":a,key:a.name},null,8,["menu-info"])):(s(),g(t,{key:a.name},{default:c(()=>[d(r,{to:a.path},{default:c(()=>[x(p(a.name),1)]),_:2},1032,["to"])]),_:2},1024))],64))),128))]),_:1})}}}),j="modulepreload",B={},T="./",_=function(n,e){return!e||e.length===0?n():Promise.all(e.map(r=>{if(r=`${T}${r}`,r in B)return;B[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":j,t||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),t)return new Promise((a,f)=>{l.addEventListener("load",a),l.addEventListener("error",f)})})).then(()=>n())};var y=(o,n)=>{const e=o.__vccOpts||o;for(const[r,t]of n)e[r]=t;return e};const $={};function R(o,n){return s(),h("div",null,"\u6B22\u8FCE\u8BBF\u95EEzmj\u7684\u9996\u9875")}var N=y($,[["render",R]]),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const q={};function U(o,n){return s(),h("div",null,"\u6211\u662Fpage1")}var K=y(q,[["render",U]]),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const J={};function Q(o,n){return s(),h("div",null,"\u6211\u662Fpage2")}var X=y(J,[["render",Q]]),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});function Y(o){switch(o){case"../views/Index.vue":return _(()=>Promise.resolve().then(function(){return C}),void 0);case"../views/Page1.vue":return _(()=>Promise.resolve().then(function(){return E}),void 0);case"../views/Page2.vue":return _(()=>Promise.resolve().then(function(){return G}),void 0);default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function k(){const{routes:o}=e0();return o}const t0=S({history:P(),routes:k()});function e0(){const o={"../views/Index.vue":C,"../views/Page1.vue":E,"../views/Page2.vue":G},n=[];return Object.keys(o).forEach(e=>{if(console.log(e),e==="./index.ts")return;let r=e.replace(/(\.\.\/views\/|\.vue)/g,""),t="/"+r.toLowerCase();r==="Index"&&(t="/"),n.push({path:t,name:r,component:()=>Y(`../views/${r}.vue`)})}),{context:o,routes:n}}const o0=w({setup(o){const n=r=>{console.log("select",r.key)},e=k();return(r,t)=>{const i=m("router-link"),l=b,a=D;return s(),h("div",null,[d(a,{mode:"inline",onSelect:n},{default:c(()=>[(s(!0),h(u,null,v(A(e),f=>(s(),h(u,{key:f.name},[f.children?(s(),g(V,{key:f.name,"menu-info":f},null,8,["menu-info"])):(s(),g(l,{key:f.name},{default:c(()=>[d(i,{to:f.path},{default:c(()=>[x(p(f.name),1)]),_:2},1032,["to"])]),_:2},1024))],64))),128))]),_:1})])}}});const r0=x("Header"),n0=w({setup(o){return(n,e)=>{const r=H,t=Z,i=m("router-view"),l=W,a=L;return s(),g(a,null,{default:c(()=>[d(r,{style:{color:"white"}},{default:c(()=>[r0]),_:1}),d(a,null,{default:c(()=>[d(t,{collapsedWidth:"0",breakpoint:"md"},{default:c(()=>[d(o0)]),_:1}),d(l,null,{default:c(()=>[d(i)]),_:1})]),_:1})]),_:1})}}});if(typeof window!="undefined"){let o=function(){let n=document.body,e=document.getElementById("__svg__icons__dom__1639560765934__");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.id="__svg__icons__dom__1639560765934__"),e.innerHTML=`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Alarm"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Alarm_a"><stop stop-color="#C6B9FE" offset="0%" /><stop stop-color="#A883FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Alarm_a)" width="34" height="34" rx="4" /><path d="M8 8h18v18H8z" /><g stroke="#FFF" stroke-linejoin="round"><path d="M12.429 17.834c0-2.391 2.046-4.33 4.571-4.33s4.571 1.939 4.571 4.33v6.929H12.43v-6.929Z" /><path stroke-linecap="round" d="M17 9v1.126M21.571 11.252l-1.142 1.126M23.857 16.765l-1.143.233M9 16.765l1.143.233M11.286 11.252l1.143 1.126M9 24.763h16" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Calibaration"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Calibaration_a"><stop stop-color="#C6B7FE" offset="0%" /><stop stop-color="#AB87FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Calibaration_a)" width="34" height="34" rx="4" /><rect fill="#FFF" transform="rotate(-180 17 18)" x="15" y="16" width="4" height="4" rx="1" /><rect fill="#FFF" transform="rotate(-180 17.5 3.5)" x="17" width="1" height="7" rx=".5" /><path d="M34 17.5a.5.5 0 0 1-.5.5h-6a.5.5 0 1 1 0-1h6a.5.5 0 0 1 .5.5ZM7 17.5a.5.5 0 0 1-.5.5h-6a.5.5 0 1 1 0-1h6a.5.5 0 0 1 .5.5Z" fill="#FFF" /><rect fill="#FFF" transform="rotate(-180 17.5 30.5)" x="17" y="27" width="1" height="7" rx=".5" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Dashboard"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Dashboard_a"><stop stop-color="#C5B6FE" offset="0%" /><stop stop-color="#AB87FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Dashboard_a)" width="34" height="34" rx="4" /><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"><path d="M11.136 24.5C9.507 22.91 8.5 20.713 8.5 18.287c0-4.853 4.03-8.787 9-8.787s9 3.934 9 8.787c0 2.426-1.007 4.623-2.636 6.213M17.5 24.5v-7M17.5 11.5v-2M22.507 14.12l1.554-1.258M23.574 19.653l1.949.45M10.9 19.235l-1.95.45M12.334 13.786l-1.555-1.258" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Datalog"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="99.566%" id="icon-Datalog_a"><stop stop-color="#93B7FE" offset="0%" /><stop stop-color="#8A8AFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Datalog_a)" width="34" height="34" rx="4" /><g transform="translate(12 9)" fill="#FFF"><rect y="1" width="1" height="14" rx=".5" /><rect x="5" y="4" width="1" height="9" rx=".5" /><rect x="10" width="1" height="16" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Diagnostic"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Diagnostic_a"><stop stop-color="#C6B8FE" offset="0%" /><stop stop-color="#A985FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Diagnostic_a)" width="34" height="34" rx="4" /><path stroke="#FFF" stroke-linejoin="round" d="M1 18.276h5.564l3.224 5.993L15.091 8l4.31 21 6.076-15.026 2.26 4.302H33" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Engineering"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Engineering_a"><stop stop-color="#FDACA1" offset="0%" /><stop stop-color="#FD7271" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Engineering_a)" width="34" height="34" rx="6" /><path d="M7 7h20v20H7z" /><g fill="#FFF" fill-rule="nonzero"><path d="m7.843 15.2 7.683 4.376c.448.26.957.399 1.474.399.522 0 1.026-.137 1.462-.4l7.688-4.37c.534-.288.867-.892.85-1.543-.02-.641-.38-1.229-.921-1.498L18.312 8.31a2.929 2.929 0 0 0-2.624 0l-7.771 3.857c-.554.283-.896.844-.916 1.495-.02.643.303 1.233.842 1.539Zm.549-2.101 7.767-3.854a1.86 1.86 0 0 1 1.683 0l7.764 3.854c.2.098.333.333.34.592.007.26-.11.494-.3.595l-7.71 4.385-.013.007c-.27.164-.59.25-.923.25a1.88 1.88 0 0 1-.947-.257l-7.689-4.376a.67.67 0 0 1-.312-.602c.007-.266.138-.489.34-.594Zm17.822 7.659-9.08 5.163a.25.25 0 0 1-.264-.003l-9.084-5.16a.525.525 0 0 0-.716.193.52.52 0 0 0 .194.712l9.077 5.158a1.308 1.308 0 0 0 1.311.003l9.08-5.16a.52.52 0 0 0 .194-.713.519.519 0 0 0-.712-.193Z" /><path d="m26.214 16.936-9.081 5.181a.249.249 0 0 1-.263-.002l-9.084-5.179a.524.524 0 1 0-.522.909l9.076 5.176a1.304 1.304 0 0 0 1.312.002l9.084-5.176a.525.525 0 0 0-.522-.91Z" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Help"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Help_a"><stop stop-color="#FDDF6C" offset="0%" /><stop stop-color="#EEC959" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Help_a)" width="34" height="34" rx="4" /><path d="M18.782 17.92a5.618 5.618 0 0 0-.489.217.833.833 0 0 0-.475.765c-.004.147.002.298-.03.44-.09.414-.475.697-.864.654a.844.844 0 0 1-.765-.836c-.045-1.207.444-2.086 1.509-2.612a4.69 4.69 0 0 1 .44-.195c1.444-.536 2.347-2.006 2.187-3.561-.16-1.564-1.358-2.836-2.86-3.038a3.27 3.27 0 0 0-2.6.787 3.468 3.468 0 0 0-1.172 2.514 1.447 1.447 0 0 1-.038.334.825.825 0 0 1-.896.61.847.847 0 0 1-.729-.872c.015-1.26.399-2.392 1.217-3.33 1.344-1.541 3.033-2.126 4.981-1.618 1.967.512 3.186 1.864 3.661 3.901.081.348.096.712.141 1.07-.044 2.14-1.288 3.997-3.218 4.77ZM16 23a.997.997 0 0 1 1-1c.552 0 1 .443 1 .999v1.002A.997.997 0 0 1 17 25c-.552 0-1-.443-1-.999v-1.002V23Z" fill="#FFF" fill-rule="nonzero" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-HW-Config"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-HW-Config_a"><stop stop-color="#AEFD9E" offset="0%" /><stop stop-color="#5CE76E" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-HW-Config_a)" width="34" height="34" rx="4" /><text font-family="PingFangSC-Medium, PingFang SC" font-size="12" font-weight="400" fill="#FFF" transform="translate(7 8)">
                        <tspan x="0" y="18">HW</tspan>
                    </text><path d="M19.547 8c1.49.338 2.835.966 3.937 1.805a1.994 1.994 0 0 0-.294 1.034c0 1.293 1.28 2.34 2.858 2.34h.04a6.515 6.515 0 0 1 .418 2.822H7.494a6.496 6.496 0 0 1 .418-2.821h.04c1.578 0 2.858-1.048 2.858-2.341 0-.371-.106-.722-.294-1.034 1.102-.839 2.446-1.467 3.937-1.805.473.759 1.436 1.278 2.547 1.278 1.111 0 2.074-.52 2.547-1.278Z" stroke="#FFF" stroke-linejoin="round" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 35" id="icon-HW-Infor"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-HW-Infor_a"><stop stop-color="#FDDF6C" offset="0%" /><stop stop-color="#EDC858" offset="100%" /></linearGradient></defs><g transform="translate(0 .5)" fill="none" fill-rule="evenodd"><rect fill="url(#icon-HW-Infor_a)" width="34" height="34" rx="4" /><g transform="translate(7 9)" fill="#FFF"><text font-family="PingFangSC-Medium, PingFang SC" font-size="12" font-weight="400">
                        <tspan x="0" y="15.5">HW</tspan>
                    </text><rect transform="rotate(-90 5.5 .5)" x="5" y="-3.5" width="1" height="8" rx=".5" /><rect transform="rotate(-90 10 3.5)" x="9.5" y="-5" width="1" height="17" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Log"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Log_a"><stop stop-color="#C7BBFE" offset="0%" /><stop stop-color="#A782FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Log_a)" width="34" height="34" rx="4" /><g transform="translate(9 10)" fill="#FFF"><rect transform="rotate(-90 3.5 .5)" x="3" y="-2.5" width="1" height="6" rx=".5" /><rect transform="rotate(-90 8 4.5)" x="7.5" y="-3" width="1" height="15" rx=".5" /><rect transform="rotate(-90 8 7.5)" x="7.5" width="1" height="15" rx=".5" /><rect transform="rotate(-90 8 10.5)" x="7.5" y="3" width="1" height="15" rx=".5" /><rect transform="rotate(-90 8 13.5)" x="7.5" y="6" width="1" height="15" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Logic-Analyzer"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Logic-Analyzer_a"><stop stop-color="#92B5FF" offset="0%" /><stop stop-color="#8C8DFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Logic-Analyzer_a)" width="34" height="34" rx="4" /><g transform="translate(9 12)" fill="#FFF"><rect transform="rotate(150 8.5 5.5)" x="8" width="1" height="11" rx=".5" /><rect transform="rotate(-150 8.5 5.5)" x="8" width="1" height="11" rx=".5" /><rect transform="rotate(90 3.5 1)" x="3" y="-2" width="1" height="6" rx=".5" /><rect transform="rotate(90 13.5 1)" x="13" y="-2" width="1" height="6" rx=".5" /><rect transform="rotate(90 13.5 10)" x="13" y="7" width="1" height="6" rx=".5" /><rect transform="rotate(90 3.5 10)" x="3" y="7" width="1" height="6" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Oscilloscope"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Oscilloscope_a"><stop stop-color="#92B5FF" offset="0%" /><stop stop-color="#8C8EFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Oscilloscope_a)" width="34" height="34" rx="4" /><path d="M1 16.684c1.903-5.66 3.478-9.018 4.87-7.178C7.184 11.244 9.282 21 11.783 21c2.5 0 3.168-11.494 5.677-11.494C19.97 9.506 20.162 21 22.828 21c2.666 0 2.758-11.494 5.299-11.494C29.82 9.506 31.445 13.337 33 21" stroke="#FFF" stroke-linecap="round" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Pattern-Viewer"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Pattern-Viewer_a"><stop stop-color="#92B6FE" offset="0%" /><stop stop-color="#8C8CFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Pattern-Viewer_a)" width="34" height="34" rx="4" /><g transform="translate(9 10)" fill="#FFF"><rect transform="rotate(-180 1 2)" y="1" width="2" height="2" rx="1" /><rect transform="rotate(-180 15 2)" x="14" y="1" width="2" height="2" rx="1" /><rect transform="rotate(-180 5.5 2.5)" x="5" width="1" height="5" rx=".5" /><rect transform="rotate(-180 10.5 2.5)" x="10" width="1" height="5" rx=".5" /><rect transform="rotate(-180 10.5 10.5)" x="10" y="7" width="1" height="7" rx=".5" /><rect transform="rotate(-180 15.5 12)" x="15" y="10" width="1" height="4" rx=".5" /><rect transform="rotate(-180 5.5 12)" x="5" y="10" width="1" height="4" rx=".5" /><rect transform="rotate(-180 .5 11)" y="8" width="1" height="6" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Performance"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Performance_a"><stop stop-color="#C6B9FE" offset="0%" /><stop stop-color="#A883FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Performance_a)" width="34" height="34" rx="4" /><g transform="translate(5 5)" stroke="#FFF"><path d="M21 6.6v.9h0v9.9a3.6 3.6 0 0 1-3.6 3.6H6.6A3.6 3.6 0 0 1 3 17.4V6.6A3.6 3.6 0 0 1 6.6 3h10.8" stroke-linecap="round" /><path stroke-linecap="round" d="m5.072 14.332 5.772-6.314 2.483 2.57 5.142-4.785.917-.917" /><rect x=".5" y=".5" width="23" height="23" rx="4" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Production"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Production_a"><stop stop-color="#FDABA0" offset="0%" /><stop stop-color="#FD7372" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Production_a)" width="34" height="34" rx="6" /><path d="M5 5h24v24H5z" /><path d="M13.9 25H12.86a.793.793 0 0 1-.554-.222.751.751 0 0 1-.231-.542v-.595c0-.082-.089-.2-.168-.225l-.018-.004-.808-.323-.02-.01c-.073-.038-.215-.017-.274.04l-.435.423a.787.787 0 0 1-.556.225.794.794 0 0 1-.557-.225l-.74-.717a.751.751 0 0 1 0-1.083l.436-.423c.058-.057.08-.2.041-.273l-.008-.017-.333-.784-.004-.017c-.026-.078-.146-.166-.23-.166h-.613a.802.802 0 0 1-.556-.222.751.751 0 0 1-.231-.541v-1.014c0-.203.082-.396.23-.54a.794.794 0 0 1 .557-.225h.615c.084 0 .204-.086.23-.166l.005-.017.332-.784.008-.017c.04-.071.018-.212-.04-.27l-.434-.424a.748.748 0 0 1 0-1.083l.735-.715a.794.794 0 0 1 .557-.224.79.79 0 0 1 .556.224l.438.424c.058.056.202.077.278.04l.017-.009.807-.323.017-.004c.08-.025.168-.14.168-.224v-.598c0-.204.082-.397.23-.541a.79.79 0 0 1 .557-.225h1.044c.209 0 .407.08.556.225.149.144.23.335.23.54v.599c0 .081.09.199.171.224l.017.004.807.323.017.009c.073.037.22.016.278-.04l.436-.424a.794.794 0 0 1 .556-.224c.21 0 .408.08.554.224l.738.717a.748.748 0 0 1 0 1.083l-.436.424c-.058.056-.08.199-.04.27l.008.017.332.784.004.017c.026.08.147.166.23.166h.613c.21 0 .408.08.557.224.148.145.23.336.23.542V19.3a.751.751 0 0 1-.23.54.79.79 0 0 1-.557.225h-.612c-.084 0-.205.086-.23.166l-.005.015-.339.784-.008.017c-.04.071-.018.214.04.273l.436.421a.751.751 0 0 1 0 1.083l-.737.717a.782.782 0 0 1-.554.225h-.003a.787.787 0 0 1-.556-.227l-.433-.422c-.059-.056-.205-.077-.278-.04l-.018.011-.808.323-.015.004c-.082.025-.17.143-.17.225v.595a.751.751 0 0 1-.231.542.806.806 0 0 1-.557.222Zm-1.75-2.293c.394.128.691.527.691.934v.595c0 .007.005.011.005.011s.004.004.013.004H13.9c.007 0 .011-.002.013-.004 0 0 .004-.004.004-.01v-.596c0-.407.296-.804.693-.934l.744-.298a1.06 1.06 0 0 1 1.166.179l.434.423c.004.005.008.005.01.005s.007 0 .011-.005l.74-.719c.004-.004.004-.006.004-.013 0-.002 0-.006-.004-.012l-.436-.422a.993.993 0 0 1-.185-1.135l.306-.723c.134-.384.541-.674.96-.674h.612c.006 0 .008-.002.01-.004a.016.016 0 0 0 .005-.01v-1.016c0-.006-.004-.01-.004-.012-.003-.002-.005-.004-.011-.004h-.613c-.418 0-.825-.288-.96-.674l-.305-.723a.994.994 0 0 1 .185-1.135l.436-.424c.004-.004.004-.01.004-.01a.016.016 0 0 0-.004-.01l-.74-.718c-.004-.005-.009-.005-.01-.005a.031.031 0 0 0-.014.005l-.433.428a1.06 1.06 0 0 1-1.167.18l-.741-.298c-.397-.13-.693-.526-.693-.933v-.598c0-.006-.004-.01-.004-.01-.002-.003-.006-.007-.01-.007h-1.044c-.007 0-.011.002-.011.004-.002.002-.004.004-.004.01v.599c0 .407-.296.805-.693.933l-.744.298a1.06 1.06 0 0 1-1.164-.18l-.435-.422c-.005-.004-.011-.004-.013-.004-.003 0-.007 0-.013.004l-.738.717c-.004.004-.004.009-.004.013 0 0 0 .004.004.008l.436.424a.99.99 0 0 1 .185 1.135l-.306.723c-.132.386-.541.674-.96.674h-.614c-.007 0-.01.002-.01.004-.003.002-.005.004-.005.013V19.3c0 .006.004.01.004.012 0 0 .004.005.01.005H8.4c.419 0 .826.289.96.673l.306.724a.993.993 0 0 1-.185 1.134l-.436.422c-.004.004-.004.01-.004.01 0 .003 0 .007.004.013l.738.717c.004.005.008.005.01.005.003 0 .007 0 .011-.005l.436-.423a1.057 1.057 0 0 1 1.164-.179l.746.298Zm1.23-1.296c-1.483 0-2.69-1.175-2.69-2.616 0-1.443 1.207-2.618 2.69-2.618 1.484 0 2.692 1.175 2.692 2.618 0 1.441-1.208 2.616-2.691 2.616Zm0-4.485c-1.058 0-1.92.84-1.92 1.87 0 1.03.862 1.868 1.92 1.868 1.06 0 1.922-.837 1.922-1.869s-.863-1.869-1.921-1.869Zm8.848-.692a.694.694 0 0 1-.434-.153.65.65 0 0 1-.239-.447l-.039-.43a.126.126 0 0 0-.054-.06l-.017-.005-.015-.004-.597-.183-.018-.008a.118.118 0 0 0-.075.017l-.287.331a.691.691 0 0 1-.95.08l-.579-.474a.643.643 0 0 1-.082-.927l.287-.33a.113.113 0 0 0 .005-.08l-.011-.014-.009-.015-.287-.539-.006-.017c-.009-.016-.05-.04-.071-.042l-.44.038a.691.691 0 0 1-.492-.15.659.659 0 0 1-.24-.448l-.064-.732a.648.648 0 0 1 .158-.48.674.674 0 0 1 .459-.23l.442-.036a.113.113 0 0 0 .062-.055l.005-.017.004-.014.188-.581.006-.017a.117.117 0 0 0-.02-.076l-.338-.275a.644.644 0 0 1-.082-.925l.485-.562a.696.696 0 0 1 .953-.08l.341.28c.017.01.063.012.08.004l.017-.01.015-.01.554-.276.016-.006c.017-.009.04-.049.04-.07l-.038-.43a.648.648 0 0 1 .155-.478.69.69 0 0 1 .46-.233l.752-.063a.68.68 0 0 1 .491.153.648.648 0 0 1 .238.447l.038.43a.12.12 0 0 0 .057.061l.017.004.015.005.595.182.017.008a.133.133 0 0 0 .078-.018l.287-.332a.691.691 0 0 1 .95-.08l.579.472a.659.659 0 0 1 .239.447.648.648 0 0 1-.155.478l-.287.33a.113.113 0 0 0-.004.08l.01.014.009.015.285.537.006.014c.009.017.052.042.071.042l.44-.037a.683.683 0 0 1 .492.153.648.648 0 0 1 .237.447l.065.732a.643.643 0 0 1-.158.48.674.674 0 0 1-.46.23l-.441.039a.12.12 0 0 0-.063.054l-.004.017-.004.015-.188.578-.006.017a.12.12 0 0 0 .019.076l.339.277a.648.648 0 0 1 .08.927l-.488.562a.683.683 0 0 1-.95.078l-.337-.277a.116.116 0 0 0-.08-.005l-.015.011-.572.287-.015.007c-.017.008-.043.048-.043.069l.039.428a.646.646 0 0 1-.157.48.678.678 0 0 1-.46.23l-.752.064a.4.4 0 0 1-.054.004Zm-.58-1.817c.334.08.606.389.636.722l.03.338.565-.046-.03-.338c-.03-.334.185-.682.5-.818l.511-.256a.883.883 0 0 1 .975.07l.27.22.366-.422-.27-.22a.822.822 0 0 1-.237-.921l.173-.535a.865.865 0 0 1 .741-.619l.35-.03-.05-.549-.35.03a.874.874 0 0 1-.84-.487l-.263-.497a.821.821 0 0 1 .073-.946l.227-.263-.436-.354-.226.262a.876.876 0 0 1-.947.23l-.548-.167a.853.853 0 0 1-.636-.722l-.03-.34-.565.047.03.34a.844.844 0 0 1-.5.818l-.511.256a.887.887 0 0 1-.975-.072l-.27-.22-.364.422.27.22a.822.822 0 0 1 .237.92l-.172.534a.863.863 0 0 1-.742.618l-.35.03.048.55.35-.03c.344-.027.7.18.838.487l.263.497a.825.825 0 0 1-.073.948l-.227.26.436.356.226-.262a.876.876 0 0 1 .947-.23l.55.17Zm.608-.8c-.483 0-.947-.164-1.32-.47a1.97 1.97 0 0 1-.724-1.36 1.944 1.944 0 0 1 .476-1.458c.354-.409.85-.658 1.398-.705.547-.046 1.08.12 1.498.464.42.344.677.826.725 1.36a1.944 1.944 0 0 1-.477 1.457 2.061 2.061 0 0 1-1.576.711Zm.006-3.25a1.286 1.286 0 0 0-.985.445 1.23 1.23 0 0 0 .155 1.762c.263.216.595.316.938.29.343-.03.654-.185.873-.441a1.23 1.23 0 0 0-.155-1.762 1.292 1.292 0 0 0-.826-.294Z" fill="#FFF" fill-rule="nonzero" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Shmoo"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="99.53%" id="icon-Shmoo_a"><stop stop-color="#92B5FE" offset="0%" /><stop stop-color="#8C8CFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Shmoo_a)" width="34" height="34" rx="4" /><g fill="#FFF"><path d="m21.75 24.531-.433-.25 3.25-5.63a.5.5 0 0 1 .866.5l-3 5.197a.5.5 0 0 1-.683.183Z" /><path d="m21.933 24.482-.433.25a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .866-.5l1.75 3.031Z" /><g transform="translate(9 18)"><rect transform="rotate(-135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /><rect transform="rotate(135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /></g><g transform="translate(9 10)"><rect transform="rotate(-135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /><rect transform="rotate(135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /></g><g transform="translate(19 10)"><rect transform="rotate(-135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /><rect transform="rotate(135 3.5 3.5)" x="3" width="1" height="7" rx=".5" /></g></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Software-Update"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Software-Update_a"><stop stop-color="#C6BAFE" offset="0%" /><stop stop-color="#A783FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Software-Update_a)" width="34" height="34" rx="4" /><g fill="#FFF" fill-rule="nonzero"><path d="m17.364 10.219-.008-.007c-.369-.285-.964-.282-1.327.007l-5.797 4.619c-.31.246-.31.646 0 .892a.94.94 0 0 0 1.12 0l5.344-4.259 5.452 4.344a.902.902 0 0 0 .56.185.902.902 0 0 0 .56-.185c.31-.246.31-.645 0-.892l-5.904-4.704Z" /><path d="M16.75 13c-.414 0-.75.299-.75.668v9.164c0 .37.336.668.75.668s.75-.299.75-.668v-9.164c0-.37-.336-.668-.75-.668Z" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Summary"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Summary_a"><stop stop-color="#92B6FE" offset="0%" /><stop stop-color="#8B8BFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Summary_a)" width="34" height="34" rx="4" /><g transform="translate(8 10)" fill="#FFF"><rect y="4" width="1" height="11" rx=".5" /><rect transform="rotate(-90 7.5 9.5)" x="7" y="2" width="1" height="15" rx=".5" /><rect transform="rotate(-90 7.5 4.5)" x="7" y="-3" width="1" height="15" rx=".5" /><rect transform="rotate(-90 4 .5)" x="3.5" y="-3.5" width="1" height="8" rx=".5" /><rect transform="rotate(-90 9 14.5)" x="8.5" y="5.5" width="1" height="18" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-SW-Config"><defs><linearGradient x1="50%" y1="1.319%" x2="50%" y2="100%" id="icon-SW-Config_a"><stop stop-color="#ADFD9D" offset="0%" /><stop stop-color="#5FE870" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-SW-Config_a)" width="34" height="34" rx="4" /><text font-family="PingFangSC-Medium, PingFang SC" font-size="12" font-weight="400" fill="#FFF" transform="translate(7 8)">
                        <tspan x="0" y="18">SW</tspan>
                    </text><path d="M19.547 8c1.49.338 2.835.966 3.937 1.805a1.994 1.994 0 0 0-.294 1.034c0 1.293 1.28 2.34 2.858 2.34h.04a6.515 6.515 0 0 1 .418 2.822H7.494a6.496 6.496 0 0 1 .418-2.821h.04c1.578 0 2.858-1.048 2.858-2.341 0-.371-.106-.722-.294-1.034 1.102-.839 2.446-1.467 3.937-1.805.473.759 1.436 1.278 2.547 1.278 1.111 0 2.074-.52 2.547-1.278Z" stroke="#FFF" stroke-linejoin="round" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 35" id="icon-SW-Infor"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-SW-Infor_a"><stop stop-color="#FDDF6C" offset="0%" /><stop stop-color="#EEC959" offset="100%" /></linearGradient></defs><g transform="translate(0 .5)" fill="none" fill-rule="evenodd"><rect fill="url(#icon-SW-Infor_a)" width="34" height="34" rx="4" /><g transform="translate(7 9)" fill="#FFF"><text font-family="PingFangSC-Medium, PingFang SC" font-size="12" font-weight="400">
                        <tspan x="0" y="15.5">SW</tspan>
                    </text><rect transform="rotate(-90 5.5 .5)" x="5" y="-3.5" width="1" height="8" rx=".5" /><rect transform="rotate(-90 10 3.5)" x="9.5" y="-5" width="1" height="17" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-System-Viewer"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-System-Viewer_a"><stop stop-color="#93B6FE" offset="0%" /><stop stop-color="#8A89FF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-System-Viewer_a)" width="34" height="34" rx="4" /><g transform="translate(8 8)"><rect stroke="#FFF" x="4" y="4" width="11" height="11" rx="2" /><rect stroke="#FFF" x="7" y="7" width="5" height="5" rx="1" /><g transform="translate(0 5)" fill="#FFF"><rect transform="rotate(-90 2.5 1)" x="2" y="-1" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 4.5)" x="2" y="2.5" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 8)" x="2" y="6" width="1" height="4" rx=".5" /></g><g transform="translate(14 5)" fill="#FFF"><rect transform="rotate(-90 2.5 1)" x="2" y="-1" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 4.5)" x="2" y="2.5" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 8)" x="2" y="6" width="1" height="4" rx=".5" /></g><g transform="rotate(-90 5 0)" fill="#FFF"><rect transform="rotate(-90 2.5 1)" x="2" y="-1" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 4.5)" x="2" y="2.5" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 8)" x="2" y="6" width="1" height="4" rx=".5" /></g><g transform="rotate(-90 12 7)" fill="#FFF"><rect transform="rotate(-90 2.5 1)" x="2" y="-1" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 4.5)" x="2" y="2.5" width="1" height="4" rx=".5" /><rect transform="rotate(-90 2.5 8)" x="2" y="6" width="1" height="4" rx=".5" /></g></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Test-Editor"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon-Test-Editor_a"><stop stop-color="#92B6FE" offset="0%" /><stop stop-color="#8B8BFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Test-Editor_a)" width="34" height="34" rx="4" /><g transform="translate(8 13)" fill="#FFF"><rect transform="rotate(-90 5.5 .5)" x="5" y="-5" width="1" height="11" rx=".5" /><rect transform="rotate(-90 7.5 4.5)" x="7" y="-3" width="1" height="15" rx=".5" /><rect transform="rotate(-90 9 8.5)" x="8.5" y="-.5" width="1" height="18" rx=".5" /></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="icon-Wafer-Map"><defs><linearGradient x1="50%" y1=".83%" x2="50%" y2="100%" id="icon-Wafer-Map_a"><stop stop-color="#92B5FF" offset="0%" /><stop stop-color="#8D8FFF" offset="100%" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect fill="url(#icon-Wafer-Map_a)" width="34" height="34" rx="4" /><g transform="translate(8 8)"><rect stroke="#FFF" x=".5" y=".5" width="17" height="17" rx="8.5" /><g transform="translate(2)" fill="#FFF"><rect transform="rotate(-180 7 9)" x="6.5" width="1" height="18" rx=".5" /><rect transform="rotate(-180 10.25 9)" x="9.75" y="1" width="1" height="16" rx=".5" /><rect transform="rotate(-180 13.5 9)" x="13" y="3" width="1" height="12" rx=".5" /><rect transform="rotate(-180 .5 9)" y="3" width="1" height="12" rx=".5" /><rect transform="rotate(-180 3.75 9)" x="3.25" y="1" width="1" height="16" rx=".5" /></g><g transform="rotate(-90 8 8)" fill="#FFF"><rect transform="rotate(-180 7 9)" x="6.5" width="1" height="18" rx=".5" /><rect transform="rotate(-180 10.25 9)" x="9.75" y="1" width="1" height="16" rx=".5" /><rect transform="rotate(-180 13.5 9)" x="13" y="3" width="1" height="12" rx=".5" /><rect transform="rotate(-180 .5 9)" y="3" width="1" height="12" rx=".5" /><rect transform="rotate(-180 3.75 9)" x="3.25" y="1" width="1" height="16" rx=".5" /></g></g></g></symbol>`,n.insertBefore(e,n.firstChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()}const i0={en:{menu:{console:"zmj"}},zhCn:{menu:{console:"\u63A7\u5236\u53F0"}}},l0=I({locale:"en",fallbackLocale:"en",messages:i0}),F=z(n0);F.use(t0);F.use(l0);F.mount("#app");