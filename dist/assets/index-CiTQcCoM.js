import{r as h,j as e,R as ve}from"./react-BoCgrMEy.js";import{r as ke,c as we}from"./react-dom-BteWw1fd.js";import{f as Te,d as i,o as Se,l as w}from"./styled-components-CrPQfjIl.js";import{u as P,a as D,b as $,Q as Ce,c as Le,R as Me}from"./@tanstack-Dheh11Fb.js";import{N as De,u as te,B as $e}from"./react-router-dom-i7KvxDxu.js";import{a as Be,O as ze,d as z,e as Ee,f as Oe,g as S}from"./react-router-B_0cNaIP.js";import{H as Ie,a as Fe,b as Ne,c as Re,d as Pe,L as He,S as _e,F as qe,e as We,I as Ae,f as Ke,G as Qe,B as ne,g as se,h as ie,i as Ue,C as ae,M as de,j as Je,R as Ge,k as Xe}from"./react-icons-BfxI2Wzl.js";import{_ as b,I as Ze}from"./react-hot-toast-Cov577MU.js";import{a as Ve}from"./@supabase-wmVCiJp4.js";import{R as H,A as Ye,C as le,X as ce,Y as ue,T as _,a as eo,P as oo,b as ro,c as to,L as me,B as no,d as so}from"./recharts-D6m_B4fc.js";import{f as O,p as ge}from"./date-fns-Ci5HKP_o.js";import{u as io}from"./react-hook-form-t5XkmuoL.js";import"./scheduler-CzFDRTuY.js";import"./tslib-wbdO-F7s.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./use-sync-external-store-NBuSk-CY.js";import"./@remix-run-D3kAHpSt.js";import"./goober-vt3s6TGe.js";import"./clsx-B-dksMZM.js";import"./lodash-CBs2PRnG.js";import"./react-is-8JwjhRSi.js";import"./react-smooth-BDeTfrGu.js";import"./prop-types-CM2wb6Cq.js";import"./fast-equals-C7I1S-bJ.js";import"./tiny-invariant-BaFNuDhB.js";import"./d3-shape-DjFPhhqo.js";import"./d3-path-CimkQT29.js";import"./victory-vendor-6_AdwBXU.js";import"./d3-scale-BYIooUZQ.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-g_qRI3rN.js";import"./d3-time-format-BKO53YJi.js";import"./d3-time-QpEiTrED.js";import"./d3-interpolate-CvRPKVI0.js";import"./d3-color-9lF95FHy.js";import"./d3-format-CzD4bSOQ.js";import"./recharts-scale-DiOBu8nk.js";import"./decimal.js-light-B5-9uEc-.js";import"./eventemitter3-YRZ0Q8RD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const ao=Te`
:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  // light-mode
  /* Grey */
  &,&.light-mode{
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-darkLight-back-50: #cbdbff99;
 --color-darkLight-color-50: #b7b4b4;
  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  }

  //dark-mode
  &.dark-mode{
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  

  --color-darkLight-back-50: rgba(255, 204, 133, 0.24);
 --color-darkLight-color-50: #E5780B;
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
  }

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

::-webkit-scrollbar {
  width:5px;
}
::-webkit-scrollbar-thumb {
  background: var(--color-grey-400);
  border-radius: 10px;
}

`,lo=(o={})=>({breakpoints:{...{mini_mobile:"400px",mobile:"767px",mini_tablet:"768px",tablet:"888px",max_tablet:"970px",desktop:"1024px"},...o}});function co(o,r){const[t,n]=h.useState(function(){const s=localStorage.getItem(r);return s?JSON.parse(s):o});return h.useEffect(function(){localStorage.setItem(r,JSON.stringify(t))},[t,r]),[t,n]}const he=h.createContext();function uo({children:o}){const[r,t]=co(!1,"isDarkMode");function n(){t(s=>!s)}return h.useEffect(function(){r?(document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode")):(document.documentElement.classList.remove("dark-mode"),document.documentElement.classList.add("light-mode"))},[r]),e.jsx(he.Provider,{value:{toggleDarkMode:n,isDarkMode:r},children:o})}function q(){const o=h.useContext(he);if(o===void 0)throw console.error("The context used is not in the provider"),new Error("The context used is not in the provider");return o}const mo=i.div`
  background: var(--color-darkLight-back-50);
  box-shadow: var(--shadow-sm);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  cursor: pointer;

  & svg {
    color: var(--color-darkLight-color-50);
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    color: var(--color-darkLight-color-50);
    background: none;
  }
`;function go(){const{toggleDarkMode:o,isDarkMode:r}=q();return e.jsx(mo,{onClick:o,children:r?e.jsx(Ie,{}):e.jsx(Fe,{})})}const ho=i.div`
  background: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  cursor: pointer;

  & svg {
    color: var(--color-brand-500);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    background: none;
  }
`;function xo(){return e.jsx(ho,{children:e.jsx(Ne,{})})}const po=i.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`,fo=i.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;function bo(){return e.jsx(po,{children:e.jsx(fo,{src:"user-avator.webp",alt:"user"})})}const yo=i.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;
`;function jo(){return e.jsxs(yo,{children:[e.jsx("li",{children:e.jsx(go,{})}),e.jsx("li",{children:e.jsx(xo,{})}),e.jsx("li",{children:e.jsx(bo,{})})]})}const vo=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ko=i.img`
  height: 4.6rem;
  width: auto;
  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    height: 3.5rem;
  }
`,wo=i.p`
  color: var(--color-grey-400);
  font-size: 2.8rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.04em;
  margin-left: 0.5rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;function To(){return e.jsxs(vo,{children:[e.jsx(ko,{src:"logo.png",alt:"logo"}),e.jsx(wo,{children:"To Do List"})]})}const So=i.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  height: 7rem;
  border-bottom: 1px solid var(--color-grey-100);

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    padding: 1rem 2.4rem;
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`;function Co(){return e.jsxs(So,{children:[e.jsx(To,{}),e.jsx(jo,{})]})}const Lo=i.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    overflow-x: auto;
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mini_mobile}) {
    gap: 2.5rem;
  }
`,N=i(De)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.2rem 0.5rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    & span {
      display: none;
    }
    & svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;function Mo(){return e.jsxs(Lo,{children:[e.jsx("li",{children:e.jsxs(N,{to:"/",children:[e.jsx(Re,{}),e.jsx("span",{children:"Home"})]})}),e.jsx("li",{children:e.jsxs(N,{to:"/task-management",children:[e.jsx(Pe,{}),e.jsx("span",{children:"Task Management"})]})}),e.jsx("li",{children:e.jsxs(N,{to:"/tasks",children:[e.jsx(He,{}),e.jsx("span",{children:"All Tasks"})]})})]})}const Do=i.div`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3.2rem 1rem;
  width: 20rem;
  grid-area: sidebar;

  //باعث میشه هر div داخل سایدبار به اندازه gap فاصله بگیره به صورت عمودی
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    width: 100%;
    padding: 1rem 2.4rem;
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`;function $o(){return e.jsx(Do,{children:e.jsx(Mo,{})})}const Bo=i.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 170px 1fr; /* main 1 واحد و sidebar عرض ثابت */
  grid-template-rows: auto 1fr; /* header خودکار و بخش‌های پایین قابل تنظیم */
  height: 100vh; /* پر کردن کل صفحه */

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`,zo=i.div`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  grid-area: main;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    padding: 1rem 0;
    height: 82vh;
  }
`,Eo=i.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    padding: 1rem 2.4rem;
    max-width: 100%;
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`,Oo=i.p`
  color: var(--color-grey-400);
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;function Io(){let r=Be().pathname;return r=r.replace(/^\//,"").replace(/\/$/,"").replace(/-/g," "),e.jsx(Se,{theme:lo,children:e.jsxs(Bo,{children:[e.jsx(Co,{}),e.jsx(zo,{children:e.jsxs(Eo,{children:[e.jsx(Oo,{children:r||"Dashboard"}),e.jsx(ze,{})]})}),e.jsx($o,{})]})})}const Fo=i.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`,No=i.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: ${o=>o.backgroundColor};

  & svg {
    width: 4.2rem;
    height: 4.2rem;
    color: ${o=>o.color};
  }
`,Ro=i.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  align-self: end;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-500);

  & h3 {
    font-weight: 600;
    font-size: 2.8rem;
  }
`,Po=i.p`
  font-size: 1.4rem;
  line-height: 0.5;
  font-weight: 500;
  color: var(--color-grey-400);
`;function R({lengthTask:o,status:r,icon:t,color:n,backgroundColor:s}){return e.jsxs(Fo,{children:[e.jsx(No,{color:n,backgroundColor:s,children:t}),e.jsxs(Ro,{children:[e.jsx("h3",{children:o})," ",r]}),e.jsxs(Po,{children:["task ",r]})]})}const Ho="https://rryymecbtyrgohrvsfyf.supabase.co",_o="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeXltZWNidHlyZ29ocnZzZnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNDI4MDEsImV4cCI6MjA0MjkxODgwMX0.bgkoO0ULZoI5-WV45MUkrdeZM5LhP3jVoR5FRutm-8g",B=Ve(Ho,_o);function qo(){const o=new Date;return o.setUTCHours(0,0,0,0),o.toISOString()}function Wo(){const o=new Date;return o.setUTCHours(23,59,59,999),o.toISOString()}async function Ao(){const{data:o,error:r}=await B.from("tasks").select("*").order("created_at",{ascending:!0});if(r)throw console.error(r),b.error(r.message),new Error(r.message);return o}async function Ko(o){let{data:r,error:t}=await B.from("tasks").select("*").eq("id",o).single();if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function Qo(o){const{data:r,error:t}=await B.from("tasks").insert([o]).select();if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function I(o,r){const{data:t,error:n}=await B.from("tasks").update(r).eq("id",o).select();if(n)throw console.error(n),b.error(n.message),new Error(n.message);return t}async function Uo(o){const{data:r,error:t}=await B.from("tasks").delete().select().eq("id",o);if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function Jo(){const{data:o,error:r}=await B.from("tasks").select("*").or("status.eq.all,status.eq.doing,status.eq.done").gte("created_at",qo()).lt("created_at",Wo()).order("created_at");if(r)throw console.error(r),new Error("Task could not get loaded");return o}function E(){const{data:o,isLoading:r}=P({queryFn:Ao,queryKey:["Tasks"]});return{tasks:o,isLoading:r}}function Go(){const{tasks:o}=E(),r=o==null?void 0:o.filter(s=>s.status==="all"),t=o==null?void 0:o.filter(s=>s.status==="doing"),n=o==null?void 0:o.filter(s=>s.status==="done");return e.jsxs(e.Fragment,{children:[e.jsx(R,{status:"On the waiting list",lengthTask:r==null?void 0:r.length,icon:e.jsx(_e,{}),color:"#4f46e5"}),e.jsx(R,{status:"doing",lengthTask:t==null?void 0:t.length,icon:e.jsx(qe,{}),color:"#7ff3a7"}),e.jsx(R,{status:"done",lengthTask:n==null?void 0:n.length,icon:e.jsx(We,{}),color:"#b8bbc0"})]})}function xe(){const{data:o,isLoading:r}=P({queryKey:["Tasks-today"],queryFn:Jo}),t=o==null?void 0:o.filter(s=>s.status==="all"||s.status==="doing"),n=o==null?void 0:o.filter(s=>s.status==="done");return{taskToday:o,taskDone:n,isLoading:r,taskDoingAndAll:t}}const Xo={small:w`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,medium:w`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,large:w`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},Zo={primary:w`
    color: var(--color-brand-50);
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:w`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,danger:w`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `},j=i.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  text-transform: capitalize;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  ${o=>Xo[o.sizes]}
  ${o=>Zo[o.variations]}
`;j.defaultProps={sizes:"medium",variations:"primary"};const pe=i.div`
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${o=>o.status==="all"?"#4f46e5":o.status==="doing"?"#7ff3a7":o.status==="done"?"#b8bbc0":"#bb5588eb"};
`,Vo=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`,Yo=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & span {
    width: 129px;
    overflow: hidden;
    text-transform: capitalize;
  }
`;function er({task:o}){const r=z();return e.jsxs(Vo,{children:[e.jsxs(Yo,{children:[e.jsx(pe,{status:o.status}),e.jsx("span",{children:o.title})]}),e.jsx(j,{sizes:"small",onClick:()=>r(`/task-management/${o.id}`),children:o.status})]})}const or=i.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ebeaea57;
  backdrop-filter: blur(1px);
`,rr=i.span`
  width: 50px;
  height: 50px;
  border: 5px dotted var(--color-brand-700);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20% auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function L(){return e.jsx(or,{children:e.jsx(rr,{})})}const tr=i.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
`,nr=i.h2`
  color: var(--color-grey-600);
`,sr=i.ul`
  overflow: auto;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,ir=i.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;function ar(){const{taskDoingAndAll:o,isLoading:r}=xe();return e.jsxs(tr,{children:[e.jsx(nr,{children:"Today"}),r?e.jsx(L,{}):(o==null?void 0:o.length)>0?e.jsx(sr,{children:o==null?void 0:o.map(t=>e.jsx(er,{task:t},t.id))}):e.jsx(ir,{children:"You have nothing to do today..."})]})}const W=i.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: ${o=>o.gridColumn};
  /* grid-column: 2 / span 2; */
  padding-top: 2.4rem;
`,dr=i.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;function lr(){const{isDarkMode:o}=q(),{tasks:r,isLoading:t}=E(),n=l=>O(ge(l),"EEE, MMM dd yyyy"),s=r==null?void 0:r.reduce((l,c)=>{const g=n(c.created_at);return l[g]||(l[g]={done:0,doing:0,all:0}),c.status==="done"?l[g].done+=1:c.status==="doing"?l[g].doing+=1:c.status==="all"&&(l[g].all+=1),l},{}),a=Object.keys(s||{}).map(l=>({date:l,done:s[l].done,doing:s[l].doing,all:s[l].all,total:s[l].all+s[l].doing+s[l].done})),d=o?{tasks:{stroke:"#4f46e5",fill:"#4f46e5"},text:"#e5e7eb",background:"#18212f"}:{tasks:{stroke:"#4f46e5",fill:"#c7d2fe"},text:"#374151",background:"#fff"},m=({active:l,payload:c,label:g})=>{if(l&&c&&c.length){const x=c[0].payload;return e.jsxs("div",{style:{backgroundColor:d.background,padding:"10px",borderRadius:"5px",color:d.text,fontSize:"1.3rem"},children:[e.jsx("p",{children:`Date: ${g}`}),e.jsx("p",{children:`Done: ${x.done}`}),e.jsx("p",{children:`Doing: ${x.doing}`}),e.jsx("p",{children:`Remaining: ${x.all}`})]})}return null};return e.jsxs(W,{gridColumn:"2 / span 2",children:[e.jsx(dr,{children:"Line chart of all tasks"}),t?e.jsx(L,{}):(r==null?void 0:r.length)>0?e.jsx(H,{width:"100%",height:250,children:e.jsxs(Ye,{data:a,width:"100%",children:[e.jsx(le,{strokeDasharray:1}),e.jsx(ce,{dataKey:"date",tick:{fill:d.text},tickLine:{stroke:d.text}}),e.jsx(ue,{tick:{fill:d.text},tickLine:{stroke:d.text}}),e.jsx(_,{content:e.jsx(m,{})}),e.jsx(eo,{type:"monotone",dataKey:"total",stroke:d.tasks.stroke,fill:d.tasks.fill,strokeWidth:1,name:"All Tasks"})]})}):e.jsx("p",{children:"Not Task"})]})}const cr=i.h2`
  color: var(--color-grey-600);
`;function ur(){var d,m,l,c,g,x;const{taskToday:o,isLoading:r}=xe(),t=(d=o==null?void 0:o.filter(p=>p.status==="doing"))==null?void 0:d.length,n=(m=o==null?void 0:o.filter(p=>p.status==="done"))==null?void 0:m.length,s=(l=o==null?void 0:o.filter(p=>p.status==="all"))==null?void 0:l.length,a=[{value:t,status:`doing (${t})`,color:"#7ff3a7"},{value:n,status:`done (${n})`,color:"#b8bbc0"},{value:s,status:`all (${s})`,color:"#4f46e5"}];return console.log(a),console.log(((c=a[0])==null?void 0:c.value)!==0||((g=a[1])==null?void 0:g.value)!==0||((x=a[3])==null?void 0:x.value)!==0),e.jsxs(W,{gridColumn:"3 /span 1 ",children:[e.jsx(cr,{children:"Today's activity"}),r?e.jsx(L,{}):t===0&&n===0&&s===0?e.jsx("p",{children:"Not Task Today"}):e.jsx(H,{width:"100%",height:240,children:e.jsxs(oo,{children:[e.jsx(_,{contentStyle:{backgroundColor:" var(--color-grey-50)"},itemStyle:{color:"var(--color-grey-700)"}}),e.jsx(ro,{data:a,dataKey:"value",nameKey:"status",innerRadius:50,outerRadius:80,paddingAngle:4,cx:"50%",cy:"50%",children:a.map(p=>e.jsx(to,{stroke:p.color,fill:p.color},p.status))}),e.jsx(me,{layout:"horizontal",align:"center",verticalAlign:"bottom",iconSize:10,iconType:"circle",wrapperStyle:{display:"flex",justifyContent:"center",marginTop:"10px",fontSize:"13px"}})]})})]})}const mr=i.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;function gr(){const{tasks:o,isLoading:r}=E(),{isDarkMode:t}=q(),n=o==null?void 0:o.reduce((d,m)=>{const l=O(ge(m.created_at),"EEE, MMM dd yyyy");return d[l]?m.status==="done"&&(d[l].done+=1,d[l].done=Math.round(d[l].done)):d[l]={done:.1},d},{}),s=Object.keys(n||{}).map(d=>({date:d,done:n[d].done})),a=t?{tasks:{stroke:"#4f46e5",fill:"#4f46e5"},text:"#e5e7eb",background:"#fff"}:{tasks:{stroke:"#4f46e5",fill:"#c7d2fe"},text:"#374151",background:"#18212f"};return e.jsxs(W,{gridColumn:"1 / span 2 ",children:[e.jsx(mr,{children:"Tasks done on each date"}),r?e.jsx(L,{}):(o==null?void 0:o.length)>0?e.jsx(H,{width:"100%",height:250,children:e.jsxs(no,{data:s,children:[e.jsx(le,{strokeDasharray:"2 2"}),e.jsx(ce,{dataKey:"date",tick:{fill:a.text},tickLine:{stroke:a.text}}),e.jsx(ue,{tick:{fill:a.text},tickLine:{stroke:a.text}}),e.jsx(_,{contentStyle:{backgroundColor:" var(--color-grey-50)"},itemStyle:{color:"var(--color-grey-700)"}}),e.jsx(me,{}),e.jsx(so,{dataKey:"done",barSize:20,fill:a.tasks.stroke})]})}):e.jsx("p",{children:"Not Task"})]})}const hr=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;function xr(){return e.jsxs(hr,{children:[e.jsx(Go,{}),e.jsx(ar,{}),e.jsx(lr,{}),e.jsx(gr,{}),e.jsx(ur,{})]})}function pr(){return e.jsx(e.Fragment,{children:e.jsx(xr,{})})}function fr(o){const r=h.useRef();return h.useEffect(function(){function t(n){r.current&&!r.current.contains(n.target)&&o()}return document.addEventListener("click",t,!0),()=>document.removeEventListener("click",t,!0)},[o]),r}const br=i.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #c5c5c554;
  backdrop-filter: blur(1px);
`,yr=i.div`
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-600);
  border-radius: var(--border-radius-md);
  width: 40%;
  height: auto;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    width: 90%;
  }
`,jr=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,vr=i.span`
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  text-align: left;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-grey-500);
  }
`,A=h.createContext();function u({children:o}){const[r,t]=h.useState(""),n=t,s=()=>t("");return e.jsx(A.Provider,{value:{openName:r,close:s,open:n},children:o})}function kr({children:o,opens:r}){const{open:t}=h.useContext(A);return h.cloneElement(o,{onClick:()=>t(r)})}function wr({children:o,name:r}){const{openName:t,close:n}=h.useContext(A),s=fr(n);return r!==t?null:ke.createPortal(e.jsx(br,{children:e.jsx(yr,{ref:s,children:e.jsxs(jr,{children:[e.jsx(vr,{onClick:()=>n(),children:e.jsx(Ae,{})}),h.cloneElement(o,{onCloseModal:n})]})})}),document.body)}u.OpenModal=kr;u.WindowModal=wr;const K=i.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin: 3.2rem 0;
`,Y=i.input`
  width: 100%;
  background: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  margin-bottom: 7px;
  border: none;
`,Tr=i.div`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--color-grey-50);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,Sr=i.label`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-grey-500);
  padding-top: 0.5rem;
  text-transform: uppercase;
`,Cr=i.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function ee({error:o,label:r,children:t}){return e.jsxs(e.Fragment,{children:[e.jsxs(Tr,{children:[r&&e.jsx(Sr,{htmlFor:t.props.id,children:r}),t]}),o&&e.jsx(Cr,{children:o})]})}const Lr=i.form`
  ${o=>o.type!=="modal"&&w`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${o=>o.type==="modal"&&w`
      /* width: 80rem; */
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;function Mr(){const o=D(),{mutate:r,isLoading:t}=$({mutationFn:Qo,onSuccess:()=>{b.success("New task added successfully"),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>{b.error(n.message)}});return{newTask:r,isLoading:t}}function Dr(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:({id:n,newTask:s})=>I(n,s),onSuccess:n=>{b.success(`Successfully edit task #${n[0].id}`),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>b.error(n.message)});return{updateTask:r,isLoadingUpdateTask:t}}function Q({taskEdite:o={},onCloseModal:r}){var C,Z;const{id:t,...n}=o,{register:s,handleSubmit:a,reset:d,formState:m}=io({defaultValues:t?n:{}}),{errors:l}=m,{newTask:c,isLoading:g}=Mr(),{updateTask:x,isLoadingUpdateTask:p}=Dr(),y=!!t;function f(V){y?x({id:t,newTask:V},{onSuccess:()=>{d(),r()}}):c(V,{onSuccess:()=>{d(),r()}})}return e.jsxs(Lr,{onSubmit:a(f),type:r&&"modal",children:[e.jsx(ee,{label:"Title Task",error:(C=l==null?void 0:l.title)==null?void 0:C.message,children:e.jsx(Y,{type:"text",id:"title",placeholder:"Add title task ...",...s("title",{required:"Forms should not be empty"})})}),e.jsx(ee,{label:"Description Task",error:(Z=l==null?void 0:l.description)==null?void 0:Z.message,children:e.jsx(Y,{type:"text",id:"description",placeholder:"Add description task ...",...s("description",{required:"Forms should not be empty"})})}),e.jsxs(K,{children:[e.jsx(j,{variations:"secondary",sizes:"medium",type:"reset",onClick:r,children:"Cancel"}),e.jsx(j,{variations:"primary",sizes:"medium",disabled:g||p,children:y?"Edite task":"Create task"})]})]})}function $r(){return e.jsxs(u,{children:[e.jsx(K,{children:e.jsx(u.OpenModal,{opens:"add",children:e.jsxs(j,{children:[e.jsx(Ke,{})," add new task"]})})}),e.jsx(u.WindowModal,{name:"add",children:e.jsx(Q,{})})]})}function fe(){const o=D(),{mutate:r,isLoading:t}=$({mutationFn:Uo,onSuccess:n=>{b.success(`delete task # ${n[0].id}`),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>{b.error(n.message)}});return{deleteTask:r,isLoading:t}}const M=i.button`
  background: none;
  border: none;
  padding: 0.6rem 0;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-400);

    &:hover {
      ${o=>o.colorhover&&w`
          transition: all 0.5s ease-in-out;
          color: ${o.colorhover};
        `}
    }
  }
`,Br=i.div`
  /* width: 40rem; */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h3 {
    text-transform: capitalize;
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;function v({children:o,subject:r,disabled:t,onCloseModal:n,resourceName:s,onConfirm:a,status:d,onBack:m}){return e.jsxs(Br,{children:[e.jsxs("h3",{children:[r," ",s]}),e.jsx("p",{children:o}),e.jsxs("div",{children:[r!=="back-doing"&&e.jsx(j,{variations:r==="Delete"?"danger":"primary",sizes:"medium",disabled:t,onClick:a,children:r}),e.jsx(j,{variations:"secondary",sizes:"medium",disabled:t,onClick:n,children:"Cancel"}),d==="doing"||d==="done"?e.jsx(j,{variations:"secondary",sizes:"medium",disabled:t,onClick:m,children:"Back"}):""]})]})}function U(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:n=>I(n,{status:"doing",created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully doing`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{doingTask:r,isLoadingDoingTask:t}}function J(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:n=>I(n,{status:"done",created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully done`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{doneTask:r,isLoadingDoneTask:t}}function G(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:({id:n,status:s})=>I(n,{status:s,created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully Back`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{backTask:r,isLoadingBackTask:t}}const zr=i.div`
  & span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--color-grey-400);
    font-size: 1.3rem;
    &::before {
      content: none;
    }
  }
`;function be({children:o}){return e.jsx(zr,{children:e.jsxs("span",{children:[e.jsx(Qe,{}),O(new Date(o),"EEE, MMM dd yyyy")]})})}const Er=i.div`
  background: var(--color-grey-50);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  height: 16rem;
  padding: 1rem 1.5rem;
  /* overflow-y: auto; */
  position: relative;

  max-width: 100%; /* عرض کارت از عرض ستون فراتر نرود */

  & h2 {
    color: var(--color-grey-700);
  }
  & p {
    color: var(--color-grey-500);
    height: 6rem;
    overflow-y: auto;
    width: 100%;
    /* @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
      height: 3.2rem;
    } */
    /* Removing scrollbars for webkit, firefox, and ms, respectively */
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`,Or=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  right: 1rem;
  left: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-grey-200);
`,Ir=i.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
`;function Fr({task:o}){const{deleteTask:r,isLoading:t}=fe(),{doingTask:n,isLoadingDoingTask:s}=U(),{doneTask:a,isLoadingDoneTask:d}=J(),{backTask:m,isLoadingBackTask:l}=G(),{id:c,title:g,status:x,created_at:p}=o,y=z();function f(){x==="doing"?m({id:c,status:"all"}):x==="done"&&m({id:c,status:"doing"})}return e.jsxs(u,{children:[e.jsxs(Er,{children:[e.jsx("h2",{children:o.title}),e.jsx("p",{children:o.description}),e.jsxs(Or,{children:[e.jsx(be,{children:p}),e.jsxs(Ir,{children:[o.status==="done"?e.jsx(u.OpenModal,{opens:"done",children:e.jsx(M,{children:e.jsx(ne,{})})}):o.status==="doing"?e.jsx(u.OpenModal,{opens:"doing",children:e.jsx(M,{children:e.jsx(se,{})})}):e.jsx(u.OpenModal,{opens:"all",children:e.jsx(M,{children:e.jsx(ie,{})})}),e.jsx(M,{colorhover:"#15803d",onClick:()=>y(`/task-management/${c}`),children:e.jsx(Ue,{})}),o.status==="done"?"":e.jsx(u.OpenModal,{opens:"update",children:e.jsx(M,{colorhover:"#4f46e5",children:e.jsx(ae,{})})}),e.jsx(u.OpenModal,{opens:"delete",children:e.jsx(M,{colorhover:"#991b1b",children:e.jsx(de,{})})})]})]})]}),e.jsx(u.WindowModal,{name:"update",children:e.jsx(Q,{taskEdite:o})}),e.jsx(u.WindowModal,{name:"delete",children:e.jsxs(v,{subject:"Delete",resourceName:o.title,disabled:t,onConfirm:()=>r(o.id),children:["Are you sure you want to delete this (",o.title,") permanently? This action cannot be undone."]})}),e.jsx(u.WindowModal,{name:"all",children:e.jsxs(v,{subject:"doing",resourceName:g,status:x,disabled:s||l,onConfirm:()=>n(c),children:["Do you want the task (",g,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing",children:e.jsxs(v,{subject:"done",resourceName:g,status:x,disabled:d||l,onConfirm:()=>a(c),onBack:f,children:["Do you want the task (",g,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done",children:e.jsxs(v,{subject:"back-doing",resourceName:g,status:x,disabled:s||l,onConfirm:()=>n(c),onBack:f,children:["Do you want the task of completing your intensity (",g,") to return to all lists?"]})})]})}const Nr=i.div`
  overflow-x: auto;
  margin-top: 1rem;
`,Rr=i.div`
  display: grid;
  gap: 25px;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  ); /* سه ستون برابر با حداقل عرض صفر و حداکثر 1fr */

  @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    display: flex;
    flex-direction: column;
  }
`,Pr=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    width: 100%;
  }
`,Hr=i.span`
  color: var(--color-grey-700);
  width: 100%;
  margin-bottom: 0.3rem;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,_r=i.div`
  color: var(--color-grey-400);
  text-align: center;
  margin-top: 5rem;
`,qr=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  /* @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    height: 336px;
    overflow-y: auto;
    border: 1px solid var(--color-grey-50);
  } */
`;function Wr(){const{tasks:o,isLoading:r}=E(),t=["all","doing","done"],n=[...new Set(o==null?void 0:o.map(a=>a.status))],s=[...t,...n.filter(a=>!t.includes(a))];return e.jsxs(Nr,{children:[r&&e.jsx(L,{}),e.jsx(Rr,{columns:s.length,children:s.map(a=>e.jsxs(Pr,{children:[e.jsxs(Hr,{status:a,children:[e.jsx(pe,{status:a}),a.toUpperCase(),"(",o==null?void 0:o.filter(d=>d.status===a).length,")"]}),e.jsx(qr,{children:(o==null?void 0:o.filter(d=>d.status===a).length)===0?e.jsx(_r,{children:"There is no task"}):o==null?void 0:o.filter(d=>d.status===a).map(d=>e.jsx(Fr,{task:d},d.id))})]},a))})]})}const Ar=i.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;function Kr(){return e.jsxs(e.Fragment,{children:[e.jsx(Ar,{children:e.jsx($r,{})}),e.jsx(Wr,{})]})}function Qr(){return e.jsx(e.Fragment,{children:e.jsx(Kr,{})})}const Ur=i.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${o=>o.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function Jr({options:o}){const[r,t]=te(),n=r.get("sortBy")||"";function s(a){r.set("sortBy",a.target.value),t(r)}return e.jsx(Ur,{value:n,onChange:s,children:o==null?void 0:o.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})}function Gr(){return e.jsx(Jr,{options:[{value:"All",label:"Status All"},{value:"all",label:"Status Waiting"},{value:"doing",label:"Status doing"},{value:"done",label:"Status done"}]})}const Xr=i.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px 7px 0 0;
  border-bottom: none;
  overflow: auto;
  position: relative;

  scrollbar-width: none; /* برای مرورگرهای فایرفاکس */

  /* مخفی کردن اسکرول بار برای مرورگرهای Webkit مثل کروم و سافاری */
  ::-webkit-scrollbar {
    display: none;
  }
`,ye=i.div`
  display: grid;
  grid-template-columns: ${o=>o.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,Zr=i(ye)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,Vr=i(ye)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,Yr=i.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  width: inherit;
  overflow-x: hidden;

  &:not(:has(*)) {
    display: none;
  }
`,et=i.section`
  margin: 0.4rem 0;
`,je=i.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,X=h.createContext();function T({children:o,columns:r}){return e.jsx(X.Provider,{value:{columns:r},children:e.jsx(Xr,{role:"table",children:o})})}function ot({children:o}){const{columns:r}=h.useContext(X);return e.jsx(Zr,{columns:r,role:"row",children:o})}function rt({children:o}){const{columns:r}=h.useContext(X);return e.jsx(Vr,{columns:r,role:"row",children:o})}function tt({data:o,render:r}){return(o==null?void 0:o.length)===0?e.jsx(je,{children:"not data cabin"}):e.jsx(et,{children:o==null?void 0:o.map(r)})}T.HeaderTable=ot;T.Body=tt;T.RowTable=rt;T.Footer=Yr;T.Empty=je;const nt=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative; /* اضافه کردن position relative */
`,st=i.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,it=i.ul`
  z-index: 1;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  position: absolute; /* تغییر position به absolute */
  top: ${o=>o.position+"px"};
  width: max-content;
`,at=i.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,F=h.createContext();function k({children:o}){const[r,t]=h.useState(""),[n,s]=h.useState(null);return e.jsx(F.Provider,{value:{openId:r,setOpenId:t,position:n,setPosition:s},children:e.jsx(nt,{children:o})})}function dt({openDropdown:o}){const{setOpenId:r,openId:t,setPosition:n}=h.useContext(F);function s(a){r(t===""||t!==o?o:"");const d=a.target.closest("button").getBoundingClientRect();n(d.height+8)}return e.jsx(st,{onClick:s,children:e.jsx(Je,{})})}function lt({children:o,nameDropdown:r}){const{openId:t,position:n}=h.useContext(F);return t!==r?null:e.jsx(it,{position:n,children:o})}function ct({children:o,icon:r,onClick:t}){const{setOpenId:n}=h.useContext(F);function s(){t==null||t(),n("")}return e.jsx("li",{onClick:s,children:e.jsxs(at,{children:[e.jsx("span",{children:r}),o]})})}k.OpenDropdown=dt;k.WindowDropdown=lt;k.ButtonDropdown=ct;const oe=i.div`
  white-space: nowrap; /* جلوگیری از شکستن خط */
  overflow: hidden; /* پنهان کردن بخش‌های اضافی متن */
  text-overflow: ellipsis; /* نمایش سه نقطه */
`,ut=i.div`
  padding: 0.3rem;
  font-size: 13px;
  text-align: center;
  border-radius: var(--border-radius-md);
  background: ${o=>o.status==="all"?"#4f46e5":o.status==="doing"?"#7ff3a7":o.status==="done"?"#b8bbc0":"#bb5588eb"};
  color: var(--color-grey-0);
`;function mt({task:o}){const{deleteTask:r,isLoading:t}=fe(),{doingTask:n,isLoadingDoingTask:s}=U(),{doneTask:a,isLoadingDoneTask:d}=J(),{backTask:m,isLoadingBackTask:l}=G(),c=z(),{id:g}=o,x=o.status==="all",p=o.status==="doing",y=o.status==="done";function f(){p?(m({id:g,status:"all"}),c("/")):y&&(m({id:g,status:"doing"}),c("/"))}return e.jsxs(T.RowTable,{children:[e.jsx(oe,{children:o.title}),e.jsx(oe,{children:o.description}),e.jsx(ut,{status:o.status,children:o.status}),e.jsx("div",{children:O(o.created_at,"EEE, MMM dd yyyy")}),e.jsx("div",{children:e.jsx(u,{children:e.jsxs(k,{children:[e.jsx(k.OpenDropdown,{openDropdown:o.id}),e.jsxs(k.WindowDropdown,{nameDropdown:o.id,children:[e.jsx(u.OpenModal,{opens:"delete",children:e.jsx(k.ButtonDropdown,{icon:e.jsx(de,{}),children:"Delete"})}),o.status!=="done"&&e.jsx(u.OpenModal,{opens:"edite",children:e.jsx(k.ButtonDropdown,{icon:e.jsx(ae,{}),children:"edite"})}),e.jsx(u.OpenModal,{opens:x?"all":p?"doing":y?"done":"",children:e.jsx(k.ButtonDropdown,{icon:x?e.jsx(ie,{}):p?e.jsx(se,{}):y&&e.jsx(ne,{}),children:o.status})})]}),e.jsx(u.WindowModal,{name:"delete",children:e.jsxs(v,{subject:"Delete",resourceName:o.title,disabled:t,onConfirm:()=>r(o.id),children:["Are you sure you want to delete this (",o.title,") permanently? This action cannot be undone."]})}),e.jsx(u.WindowModal,{name:"edite",children:e.jsx(Q,{taskEdite:o})}),e.jsx(u.WindowModal,{name:"all",children:e.jsxs(v,{subject:"doing",resourceName:o.title,status:o.status,disabled:s||l,onConfirm:()=>(n(g),c("/")),children:["Do you want the task (",o.title,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing",children:e.jsxs(v,{subject:"done",resourceName:o.title,status:o.status,disabled:d||l,onConfirm:()=>(a(g),c("/")),onBack:f,children:["Do you want the task (",o.title,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done",children:e.jsxs(v,{subject:"back-doing",resourceName:o.title,status:o.status,disabled:s||l,onConfirm:()=>(n(g),c("/")),onBack:f,children:["Do you want the task of completing your intensity (",o.title,") to return to all lists?"]})})]})})})]},o.id)}const gt=i.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;

  border: 1px solid var(--color-grey-200);
  border-top: none;
  border-radius: 0 0 7px 7px;

  &:not(:has(*)) {
    display: none;
  }
`,ht=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color--grey--0);
  gap: 1rem;

  & span {
    display: flex;
    cursor: pointer;
    font-size: 1.8rem;
    gap: 0.5rem;
  }
`,re=i.button`
  background: none;
  border: none;
  outline: none;
  color: var(--color--grey--0);
  font-size: 3rem;
  cursor: pointer;

  &:disabled {
    color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;function xt({totalPages:o,setCurrentPage:r,currentPage:t,numberPage:n,currentItems:s}){const a=d=>{d>=1&&d<=o&&r(d)};return e.jsx(gt,{children:o<=1&&n>(s==null?void 0:s.length)?console.log("no"):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Page ",t," of ",o]}),e.jsxs(ht,{children:[e.jsx(re,{onClick:()=>a(t-1),disabled:t===1,children:e.jsx(Ge,{})}),Array.from({length:o},(d,m)=>e.jsx("span",{onClick:()=>a(m+1),style:{color:t===m+1?"var(--color-brand-200)":"var(--color--grey--0)",fontWeight:t===m+1?900:200},children:m+1},m)),e.jsx(re,{onClick:()=>a(t+1),disabled:t===o,children:e.jsx(Xe,{})})]})]})})}const pt=i.div`
  @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    width: 750px;
    overflow-x: auto;
  }
`;function ft(){const{tasks:o,isLoading:r}=E(),[t,n]=h.useState([]),[s]=te(),a=s.get("sortBy")||"",d=["doing","done","all"],m=h.useMemo(()=>o?d.includes(a)?o.filter(f=>f.status===a):o:[],[o,a]);h.useEffect(()=>{n(m)},[m]);const l=8,[c,g]=h.useState(1),x=l,p=h.useMemo(()=>Math.ceil(t.length/x),[t,x]),y=h.useMemo(()=>t.slice((c-1)*x,c*x),[t,c,x]);return e.jsxs(e.Fragment,{children:[e.jsx(T,{columns:"1fr 1fr 1fr 1fr .1fr ",children:e.jsxs(pt,{children:[e.jsxs(T.HeaderTable,{children:[e.jsx("div",{children:"title"}),e.jsx("div",{children:"description"}),e.jsx("div",{children:"status"}),e.jsx("div",{children:"date"}),e.jsx("div",{})]}),r&&e.jsx(L,{}),e.jsx(T.Body,{data:y,render:(f,C)=>e.jsx(mt,{task:f,index:C},f.id)})]})}),e.jsx(xt,{setCurrentPage:g,currentPage:c,totalPages:p})]})}function bt(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(Gr,{})}),e.jsx(ft,{})]})}function yt(){return e.jsx(bt,{})}function jt(){return e.jsx("p",{children:"Settings"})}function vt(){return e.jsx("p",{children:"login"})}function kt(){return e.jsx("p",{children:"Page Not Found"})}function wt(){const{id:o}=Ee(),{data:r={},isLoading:t}=P({queryKey:["Tasks",o],queryFn:()=>Ko(o)});return{taskId:r,isLoading:t}}function Tt(){const o=z();return()=>o(-1)}const St=i.div`
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
`,Ct=i.div`
  background-color: ${({status:o})=>o==="all"?"#4f46e5":o==="doing"?"#7ff3a7":o==="done"?"#b8bbc0":"#bb5588eb"};
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  border-bottom: 1px solid var(--color-grey-300);
  color: var(--color-grey-0);
  padding: 1rem;

  & span {
    color: var(--color-grey-800);
  }
`,Lt=i.div`
  padding: 1rem;
`,Mt=i.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;function Dt(){const{taskId:o,isLoading:r}=wt(),{status:t,title:n,description:s,created_at:a=new Date,id:d}=o,{doingTask:m,isLoadingDoingTask:l}=U(),{doneTask:c,isLoadingDoneTask:g}=J(),{backTask:x,isLoadingBackTask:p}=G(),y=Tt(),f=z();function C(){t==="doing"?(x({id:d,status:"all"}),f("/task-management")):t==="done"&&(x({id:d,status:"doing"}),f("/task-management"))}return e.jsx(St,{children:r?e.jsx(L,{}):e.jsxs(e.Fragment,{children:[e.jsxs(Ct,{status:t,children:[e.jsxs("h2",{children:["Status : ",t]}),e.jsx("span",{children:e.jsx(be,{children:a})})]}),e.jsxs(Lt,{children:[e.jsx("h1",{children:n}),e.jsx("p",{children:s})]}),e.jsxs(Mt,{children:[e.jsx(j,{onClick:()=>y(),variations:"secondary",children:"Back"}),e.jsxs(u,{children:[t==="done"?e.jsx(u.OpenModal,{opens:"done-details",children:e.jsx(j,{children:"back doing"})}):t==="doing"?e.jsx(u.OpenModal,{opens:"doing-details",children:e.jsx(j,{children:"done"})}):e.jsx(u.OpenModal,{opens:"all-details",children:e.jsx(j,{children:"doing"})}),e.jsx(u.WindowModal,{name:"all-details",children:e.jsxs(v,{subject:"doing",resourceName:n,status:t,disabled:l||p,onConfirm:()=>(m(d),f("/task-management")),children:["Do you want the task (",n,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing-details",children:e.jsxs(v,{subject:"done",resourceName:n,status:t,disabled:g||p,onConfirm:()=>(c(d),f("/task-management")),onBack:C,children:["Do you want the task (",n,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done-details",children:e.jsx(v,{subject:"back-doing",resourceName:n,status:t,disabled:l||p,onConfirm:()=>(m(d),f("/task-management")),onBack:C,children:"Do you want the task of completing your intensity (title) to return to all lists?"})})]})]})]})})}function $t(){const o=new Ce({defaultOptions:{queries:{staleTime:0}}});return e.jsx(uo,{children:e.jsxs(Le,{client:o,children:[e.jsx(Me,{initialIsOpen:!1}),e.jsx(ao,{}),e.jsx($e,{basename:"/to_do_list",children:e.jsxs(Oe,{children:[e.jsxs(S,{path:"/",element:e.jsx(Io,{}),children:[e.jsx(S,{path:"/",element:e.jsx(pr,{})}),e.jsx(S,{path:"/task-management",element:e.jsx(Qr,{})}),e.jsx(S,{path:"/task-management/:id",element:e.jsx(Dt,{})}),e.jsx(S,{path:"/tasks",element:e.jsx(yt,{})}),e.jsx(S,{path:"/setting",element:e.jsx(jt,{})})]}),e.jsx(S,{path:"/login",element:e.jsx(vt,{})}),e.jsx(S,{path:"*",element:e.jsx(kt,{})})]})}),e.jsx(Ze,{position:"top-center",gutter:12,containerStyle:{margin:"8px"},toastOptions:{success:{duration:3e3},error:{duration:4500},style:{fontSize:"16px",maxWidth:"500px",padding:"15px 24px",background:"var( --color-grey-0)",color:"var( --color-grey-70)"}}})]})})}we.createRoot(document.getElementById("root")).render(e.jsx(ve.StrictMode,{children:e.jsx($t,{})}));
