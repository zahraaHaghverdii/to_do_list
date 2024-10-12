import{r as h,j as e,R as ve}from"./react-BoCgrMEy.js";import{r as ke,c as we}from"./react-dom-BteWw1fd.js";import{f as Te,d as i,o as Se,l as w}from"./styled-components-CrPQfjIl.js";import{u as R,a as D,b as $,Q as Ce,c as Me,R as Le}from"./@tanstack-Dheh11Fb.js";import{N as De,u as te,B as $e}from"./react-router-dom-i7KvxDxu.js";import{a as Be,O as ze,d as z,e as Ee,f as Oe,g as S}from"./react-router-B_0cNaIP.js";import{H as Ie,a as Fe,b as _e,c as Ne,d as Re,L as He,e as Pe,S as qe,F as We,f as Ae,I as Ke,g as Qe,G as Ue,B as ne,h as se,i as ie,j as Je,C as ae,M as de,k as Ge,R as Xe,l as Ze}from"./react-icons-BAdsKxVI.js";import{_ as b,I as Ve}from"./react-hot-toast-Cov577MU.js";import{a as Ye}from"./@supabase-wmVCiJp4.js";import{R as H,A as eo,C as le,X as ce,Y as ue,T as P,a as oo,P as ro,b as to,c as no,L as me,B as so,d as io}from"./recharts-D6m_B4fc.js";import{f as I,p as ge}from"./date-fns-Ci5HKP_o.js";import{u as ao}from"./react-hook-form-t5XkmuoL.js";import"./scheduler-CzFDRTuY.js";import"./tslib-wbdO-F7s.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./use-sync-external-store-NBuSk-CY.js";import"./@remix-run-D3kAHpSt.js";import"./goober-vt3s6TGe.js";import"./clsx-B-dksMZM.js";import"./lodash-CBs2PRnG.js";import"./react-is-8JwjhRSi.js";import"./react-smooth-BDeTfrGu.js";import"./prop-types-CM2wb6Cq.js";import"./fast-equals-C7I1S-bJ.js";import"./tiny-invariant-BaFNuDhB.js";import"./d3-shape-DjFPhhqo.js";import"./d3-path-CimkQT29.js";import"./victory-vendor-6_AdwBXU.js";import"./d3-scale-BYIooUZQ.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-g_qRI3rN.js";import"./d3-time-format-BKO53YJi.js";import"./d3-time-QpEiTrED.js";import"./d3-interpolate-CvRPKVI0.js";import"./d3-color-9lF95FHy.js";import"./d3-format-CzD4bSOQ.js";import"./recharts-scale-DiOBu8nk.js";import"./decimal.js-light-B5-9uEc-.js";import"./eventemitter3-YRZ0Q8RD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const lo=Te`
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

  --color-darkLight-back-50: #517ee799;
  --color-darkLight-color-50: #fff;
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

`,co=(o={})=>({breakpoints:{...{mini_mobile:"400px",mobile:"767px",mini_tablet:"768px",tablet:"888px",max_tablet:"970px",desktop:"1024px"},...o}});function uo(o,r){const[t,n]=h.useState(function(){const s=localStorage.getItem(r);return s?JSON.parse(s):o});return h.useEffect(function(){localStorage.setItem(r,JSON.stringify(t))},[t,r]),[t,n]}const he=h.createContext();function mo({children:o}){const[r,t]=uo(!1,"isDarkMode");function n(){t(s=>!s)}return h.useEffect(function(){r?(document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode")):(document.documentElement.classList.remove("dark-mode"),document.documentElement.classList.add("light-mode"))},[r]),e.jsx(he.Provider,{value:{toggleDarkMode:n,isDarkMode:r},children:o})}function q(){const o=h.useContext(he);if(o===void 0)throw console.error("The context used is not in the provider"),new Error("The context used is not in the provider");return o}const go=i.div`
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
    background: none;
  }
`;function ho(){const{toggleDarkMode:o,isDarkMode:r}=q();return e.jsx(go,{onClick:o,children:r?e.jsx(Ie,{}):e.jsx(Fe,{})})}const xo=i.div`
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
`;function po(){return e.jsx(xo,{children:e.jsx(_e,{})})}const fo=i.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`,bo=i.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;function yo(){return e.jsx(fo,{children:e.jsx(bo,{src:"/user-avator.webp",alt:"user"})})}const jo=i.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;
`;function vo(){return e.jsxs(jo,{children:[e.jsx("li",{children:e.jsx(ho,{})}),e.jsx("li",{children:e.jsx(po,{})}),e.jsx("li",{children:e.jsx(yo,{})})]})}const ko=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,wo=i.img`
  height: 4.6rem;
  width: auto;
  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    height: 3.5rem;
  }
`,To=i.p`
  color: var(--color-grey-400);
  font-size: 2.8rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.04em;
  margin-left: 0.5rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;function So(){return e.jsxs(ko,{children:[e.jsx(wo,{src:"/logo.png",alt:"logo"}),e.jsx(To,{children:"To Do List"})]})}const Co=i.div`
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
`;function Mo(){return e.jsxs(Co,{children:[e.jsx(So,{}),e.jsx(vo,{})]})}const Lo=i.ul`
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
`,O=i(De)`
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
`;function Do(){return e.jsxs(Lo,{children:[e.jsx("li",{children:e.jsxs(O,{to:"/",children:[e.jsx(Ne,{}),e.jsx("span",{children:"Home"})]})}),e.jsx("li",{children:e.jsxs(O,{to:"/task-management",children:[e.jsx(Re,{}),e.jsx("span",{children:"Task Management"})]})}),e.jsx("li",{children:e.jsxs(O,{to:"/tasks",children:[e.jsx(He,{}),e.jsx("span",{children:"All Tasks"})]})}),e.jsx("li",{children:e.jsxs(O,{to:"/setting",children:[e.jsx(Pe,{}),e.jsx("span",{children:"Settings"})]})})]})}const $o=i.div`
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
`;function Bo(){return e.jsx($o,{children:e.jsx(Do,{})})}const zo=i.div`
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
`,Eo=i.div`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  grid-area: main;

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    padding: 1rem 0;
    height: 82vh;
  }
`,Oo=i.div`
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
`,Io=i.p`
  color: var(--color-grey-400);
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;function Fo(){let r=Be().pathname;return r=r.replace(/^\//,"").replace(/\/$/,"").replace(/-/g," "),e.jsx(Se,{theme:co,children:e.jsxs(zo,{children:[e.jsx(Mo,{}),e.jsx(Eo,{children:e.jsxs(Oo,{children:[e.jsx(Io,{children:r||"Dashboard"}),e.jsx(ze,{})]})}),e.jsx(Bo,{})]})})}const _o=i.div`
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
`,Ho=i.p`
  font-size: 1.4rem;
  line-height: 0.5;
  font-weight: 500;
  color: var(--color-grey-400);
`;function N({lengthTask:o,status:r,icon:t,color:n,backgroundColor:s}){return e.jsxs(_o,{children:[e.jsx(No,{color:n,backgroundColor:s,children:t}),e.jsxs(Ro,{children:[e.jsx("h3",{children:o})," ",r]}),e.jsxs(Ho,{children:["task ",r]})]})}const Po="https://rryymecbtyrgohrvsfyf.supabase.co",qo="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeXltZWNidHlyZ29ocnZzZnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNDI4MDEsImV4cCI6MjA0MjkxODgwMX0.bgkoO0ULZoI5-WV45MUkrdeZM5LhP3jVoR5FRutm-8g",B=Ye(Po,qo);function Wo(){const o=new Date;return o.setUTCHours(0,0,0,0),o.toISOString()}function Ao(){const o=new Date;return o.setUTCHours(23,59,59,999),o.toISOString()}async function Ko(){const{data:o,error:r}=await B.from("tasks").select("*").order("created_at",{ascending:!0});if(r)throw console.error(r),b.error(r.message),new Error(r.message);return o}async function Qo(o){let{data:r,error:t}=await B.from("tasks").select("*").eq("id",o).single();if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function Uo(o){const{data:r,error:t}=await B.from("tasks").insert([o]).select();if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function F(o,r){const{data:t,error:n}=await B.from("tasks").update(r).eq("id",o).select();if(n)throw console.error(n),b.error(n.message),new Error(n.message);return t}async function Jo(o){const{data:r,error:t}=await B.from("tasks").delete().select().eq("id",o);if(t)throw console.error(t),b.error(t.message),new Error(t.message);return r}async function Go(){const{data:o,error:r}=await B.from("tasks").select("*").or("status.eq.all,status.eq.doing,status.eq.done").gte("created_at",Wo()).lt("created_at",Ao()).order("created_at");if(r)throw console.error(r),new Error("Task could not get loaded");return o}function E(){const{data:o,isLoading:r}=R({queryFn:Ko,queryKey:["Tasks"]});return{tasks:o,isLoading:r}}function Xo(){const{tasks:o}=E(),r=o==null?void 0:o.filter(s=>s.status==="all"),t=o==null?void 0:o.filter(s=>s.status==="doing"),n=o==null?void 0:o.filter(s=>s.status==="done");return e.jsxs(e.Fragment,{children:[e.jsx(N,{status:"On the waiting list",lengthTask:r==null?void 0:r.length,icon:e.jsx(qe,{}),color:"#4f46e5"}),e.jsx(N,{status:"doing",lengthTask:t==null?void 0:t.length,icon:e.jsx(We,{}),color:"#7ff3a7"}),e.jsx(N,{status:"done",lengthTask:n==null?void 0:n.length,icon:e.jsx(Ae,{}),color:"#b8bbc0"})]})}function xe(){const{data:o,isLoading:r}=R({queryKey:["Tasks-today"],queryFn:Go}),t=o==null?void 0:o.filter(s=>s.status==="all"||s.status==="doing"),n=o==null?void 0:o.filter(s=>s.status==="done");return{taskToday:o,taskDone:n,isLoading:r,taskDoingAndAll:t}}const Zo={small:w`
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
  `},Vo={primary:w`
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

  ${o=>Zo[o.sizes]}
  ${o=>Vo[o.variations]}
`;j.defaultProps={sizes:"medium",variations:"primary"};const pe=i.div`
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${o=>o.status==="all"?"#4f46e5":o.status==="doing"?"#7ff3a7":o.status==="done"?"#b8bbc0":"#bb5588eb"};
`,Yo=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`,er=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & span {
    width: 129px;
    overflow: hidden;
    text-transform: capitalize;
  }
`;function or({task:o}){const r=z();return e.jsxs(Yo,{children:[e.jsxs(er,{children:[e.jsx(pe,{status:o.status}),e.jsx("span",{children:o.title})]}),e.jsx(j,{sizes:"small",onClick:()=>r(`/task-management/${o.id}`),children:o.status})]})}const rr=i.div`
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
`,tr=i.span`
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
`;function M(){return e.jsx(rr,{children:e.jsx(tr,{})})}const nr=i.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
`,sr=i.h2`
  color: var(--color-grey-600);
`,ir=i.ul`
  overflow: auto;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,ar=i.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;function dr(){const{taskDoingAndAll:o,isLoading:r}=xe();return e.jsxs(nr,{children:[e.jsx(sr,{children:"Today"}),r?e.jsx(M,{}):(o==null?void 0:o.length)>0?e.jsx(ir,{children:o==null?void 0:o.map(t=>e.jsx(or,{task:t},t.id))}):e.jsx(ar,{children:"You have nothing to do today..."})]})}const W=i.div`
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
`,lr=i.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;function cr(){const{isDarkMode:o}=q(),{tasks:r,isLoading:t}=E(),n=l=>I(ge(l),"EEE, MMM dd yyyy"),s=r==null?void 0:r.reduce((l,c)=>{const g=n(c.created_at);return l[g]||(l[g]={done:0,doing:0,all:0}),c.status==="done"?l[g].done+=1:c.status==="doing"?l[g].doing+=1:c.status==="all"&&(l[g].all+=1),l},{}),a=Object.keys(s||{}).map(l=>({date:l,done:s[l].done,doing:s[l].doing,all:s[l].all,total:s[l].all+s[l].doing+s[l].done})),d=o?{tasks:{stroke:"#4f46e5",fill:"#4f46e5"},text:"#e5e7eb",background:"#18212f"}:{tasks:{stroke:"#4f46e5",fill:"#c7d2fe"},text:"#374151",background:"#fff"},m=({active:l,payload:c,label:g})=>{if(l&&c&&c.length){const x=c[0].payload;return e.jsxs("div",{style:{backgroundColor:d.background,padding:"10px",borderRadius:"5px",color:d.text,fontSize:"1.3rem"},children:[e.jsx("p",{children:`Date: ${g}`}),e.jsx("p",{children:`Done: ${x.done}`}),e.jsx("p",{children:`Doing: ${x.doing}`}),e.jsx("p",{children:`Remaining: ${x.all}`})]})}return null};return e.jsxs(W,{gridColumn:"2 / span 2",children:[e.jsx(lr,{children:"Line chart of all tasks"}),t?e.jsx(M,{}):(r==null?void 0:r.length)>0?e.jsx(H,{width:"100%",height:250,children:e.jsxs(eo,{data:a,width:"100%",children:[e.jsx(le,{strokeDasharray:1}),e.jsx(ce,{dataKey:"date",tick:{fill:d.text},tickLine:{stroke:d.text}}),e.jsx(ue,{tick:{fill:d.text},tickLine:{stroke:d.text}}),e.jsx(P,{content:e.jsx(m,{})}),e.jsx(oo,{type:"monotone",dataKey:"total",stroke:d.tasks.stroke,fill:d.tasks.fill,strokeWidth:1,name:"All Tasks"})]})}):e.jsx("p",{children:"Not Task"})]})}const ur=i.h2`
  color: var(--color-grey-600);
`;function mr(){var d,m,l,c,g,x;const{taskToday:o,isLoading:r}=xe(),t=(d=o==null?void 0:o.filter(p=>p.status==="doing"))==null?void 0:d.length,n=(m=o==null?void 0:o.filter(p=>p.status==="done"))==null?void 0:m.length,s=(l=o==null?void 0:o.filter(p=>p.status==="all"))==null?void 0:l.length,a=[{value:t,status:`doing (${t})`,color:"#7ff3a7"},{value:n,status:`done (${n})`,color:"#b8bbc0"},{value:s,status:`all (${s})`,color:"#4f46e5"}];return console.log(a),console.log(((c=a[0])==null?void 0:c.value)!==0||((g=a[1])==null?void 0:g.value)!==0||((x=a[3])==null?void 0:x.value)!==0),e.jsxs(W,{gridColumn:"3 /span 1 ",children:[e.jsx(ur,{children:"Today's activity"}),r?e.jsx(M,{}):t===0&&n===0&&s===0?e.jsx("p",{children:"Not Task Today"}):e.jsx(H,{width:"100%",height:240,children:e.jsxs(ro,{children:[e.jsx(P,{contentStyle:{backgroundColor:" var(--color-grey-50)"},itemStyle:{color:"var(--color-grey-700)"}}),e.jsx(to,{data:a,dataKey:"value",nameKey:"status",innerRadius:50,outerRadius:80,paddingAngle:4,cx:"50%",cy:"50%",children:a.map(p=>e.jsx(no,{stroke:p.color,fill:p.color},p.status))}),e.jsx(me,{layout:"horizontal",align:"center",verticalAlign:"bottom",iconSize:10,iconType:"circle",wrapperStyle:{display:"flex",justifyContent:"center",marginTop:"10px",fontSize:"13px"}})]})})]})}const gr=i.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;function hr(){const{tasks:o,isLoading:r}=E(),{isDarkMode:t}=q(),n=o==null?void 0:o.reduce((d,m)=>{const l=I(ge(m.created_at),"EEE, MMM dd yyyy");return d[l]?m.status==="done"&&(d[l].done+=1,d[l].done=Math.round(d[l].done)):d[l]={done:.1},d},{}),s=Object.keys(n||{}).map(d=>({date:d,done:n[d].done})),a=t?{tasks:{stroke:"#4f46e5",fill:"#4f46e5"},text:"#e5e7eb",background:"#fff"}:{tasks:{stroke:"#4f46e5",fill:"#c7d2fe"},text:"#374151",background:"#18212f"};return e.jsxs(W,{gridColumn:"1 / span 2 ",children:[e.jsx(gr,{children:"Tasks done on each date"}),r?e.jsx(M,{}):(o==null?void 0:o.length)>0?e.jsx(H,{width:"100%",height:250,children:e.jsxs(so,{data:s,children:[e.jsx(le,{strokeDasharray:"2 2"}),e.jsx(ce,{dataKey:"date",tick:{fill:a.text},tickLine:{stroke:a.text}}),e.jsx(ue,{tick:{fill:a.text},tickLine:{stroke:a.text}}),e.jsx(P,{contentStyle:{backgroundColor:" var(--color-grey-50)"},itemStyle:{color:"var(--color-grey-700)"}}),e.jsx(me,{}),e.jsx(io,{dataKey:"done",barSize:20,fill:a.tasks.stroke})]})}):e.jsx("p",{children:"Not Task"})]})}const xr=i.div`
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
`;function pr(){return e.jsxs(xr,{children:[e.jsx(Xo,{}),e.jsx(dr,{}),e.jsx(cr,{}),e.jsx(hr,{}),e.jsx(mr,{})]})}function fr(){return e.jsx(e.Fragment,{children:e.jsx(pr,{})})}function br(o){const r=h.useRef();return h.useEffect(function(){function t(n){r.current&&!r.current.contains(n.target)&&o()}return document.addEventListener("click",t,!0),()=>document.removeEventListener("click",t,!0)},[o]),r}const yr=i.div`
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
`,jr=i.div`
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
`,vr=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,kr=i.span`
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
`,A=h.createContext();function u({children:o}){const[r,t]=h.useState(""),n=t,s=()=>t("");return e.jsx(A.Provider,{value:{openName:r,close:s,open:n},children:o})}function wr({children:o,opens:r}){const{open:t}=h.useContext(A);return h.cloneElement(o,{onClick:()=>t(r)})}function Tr({children:o,name:r}){const{openName:t,close:n}=h.useContext(A),s=br(n);return r!==t?null:ke.createPortal(e.jsx(yr,{children:e.jsx(jr,{ref:s,children:e.jsxs(vr,{children:[e.jsx(kr,{onClick:()=>n(),children:e.jsx(Ke,{})}),h.cloneElement(o,{onCloseModal:n})]})})}),document.body)}u.OpenModal=wr;u.WindowModal=Tr;const K=i.span`
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
`,Sr=i.div`
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
`,Cr=i.label`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-grey-500);
  padding-top: 0.5rem;
  text-transform: uppercase;
`,Mr=i.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function ee({error:o,label:r,children:t}){return e.jsxs(e.Fragment,{children:[e.jsxs(Sr,{children:[r&&e.jsx(Cr,{htmlFor:t.props.id,children:r}),t]}),o&&e.jsx(Mr,{children:o})]})}const Lr=i.form`
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
`;function Dr(){const o=D(),{mutate:r,isLoading:t}=$({mutationFn:Uo,onSuccess:()=>{b.success("New task added successfully"),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>{b.error(n.message)}});return{newTask:r,isLoading:t}}function $r(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:({id:n,newTask:s})=>F(n,s),onSuccess:n=>{b.success(`Successfully edit task #${n[0].id}`),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>b.error(n.message)});return{updateTask:r,isLoadingUpdateTask:t}}function Q({taskEdite:o={},onCloseModal:r}){var C,Z;const{id:t,...n}=o,{register:s,handleSubmit:a,reset:d,formState:m}=ao({defaultValues:t?n:{}}),{errors:l}=m,{newTask:c,isLoading:g}=Dr(),{updateTask:x,isLoadingUpdateTask:p}=$r(),y=!!t;function f(V){y?x({id:t,newTask:V},{onSuccess:()=>{d(),r()}}):c(V,{onSuccess:()=>{d(),r()}})}return e.jsxs(Lr,{onSubmit:a(f),type:r&&"modal",children:[e.jsx(ee,{label:"Title Task",error:(C=l==null?void 0:l.title)==null?void 0:C.message,children:e.jsx(Y,{type:"text",id:"title",placeholder:"Add title task ...",...s("title",{required:"Forms should not be empty"})})}),e.jsx(ee,{label:"Description Task",error:(Z=l==null?void 0:l.description)==null?void 0:Z.message,children:e.jsx(Y,{type:"text",id:"description",placeholder:"Add description task ...",...s("description",{required:"Forms should not be empty"})})}),e.jsxs(K,{children:[e.jsx(j,{variations:"secondary",sizes:"medium",type:"reset",onClick:r,children:"Cancel"}),e.jsx(j,{variations:"primary",sizes:"medium",disabled:g||p,children:y?"Edite task":"Create task"})]})]})}function Br(){return e.jsxs(u,{children:[e.jsx(K,{children:e.jsx(u.OpenModal,{opens:"add",children:e.jsxs(j,{children:[e.jsx(Qe,{})," add new task"]})})}),e.jsx(u.WindowModal,{name:"add",children:e.jsx(Q,{})})]})}function fe(){const o=D(),{mutate:r,isLoading:t}=$({mutationFn:Jo,onSuccess:n=>{b.success(`delete task # ${n[0].id}`),o.invalidateQueries({queryKey:["Tasks"]})},onError:n=>{b.error(n.message)}});return{deleteTask:r,isLoading:t}}const L=i.button`
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
`,zr=i.div`
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
`;function v({children:o,subject:r,disabled:t,onCloseModal:n,resourceName:s,onConfirm:a,status:d,onBack:m}){return e.jsxs(zr,{children:[e.jsxs("h3",{children:[r," ",s]}),e.jsx("p",{children:o}),e.jsxs("div",{children:[r!=="back-doing"&&e.jsx(j,{variations:r==="Delete"?"danger":"primary",sizes:"medium",disabled:t,onClick:a,children:r}),e.jsx(j,{variations:"secondary",sizes:"medium",disabled:t,onClick:n,children:"Cancel"}),d==="doing"||d==="done"?e.jsx(j,{variations:"secondary",sizes:"medium",disabled:t,onClick:m,children:"Back"}):""]})]})}function U(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:n=>F(n,{status:"doing",created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully doing`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{doingTask:r,isLoadingDoingTask:t}}function J(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:n=>F(n,{status:"done",created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully done`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{doneTask:r,isLoadingDoneTask:t}}function G(){const o=D(),{mutate:r,isLoading:t}=$({mutationKey:["Tasks"],mutationFn:({id:n,status:s})=>F(n,{status:s,created_at:new Date}),onSuccess:n=>{b.success(`Task # ${n[0].id} successfully Back`),o.invalidateQueries({active:!0})},onError:n=>{b.error(n.message)}});return{backTask:r,isLoadingBackTask:t}}const Er=i.div`
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
`;function be({children:o}){return e.jsx(Er,{children:e.jsxs("span",{children:[e.jsx(Ue,{}),I(new Date(o),"EEE, MMM dd yyyy")]})})}const Or=i.div`
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
`,Ir=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  right: 1rem;
  left: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-grey-200);
`,Fr=i.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
`;function _r({task:o}){const{deleteTask:r,isLoading:t}=fe(),{doingTask:n,isLoadingDoingTask:s}=U(),{doneTask:a,isLoadingDoneTask:d}=J(),{backTask:m,isLoadingBackTask:l}=G(),{id:c,title:g,status:x,created_at:p}=o,y=z();function f(){x==="doing"?m({id:c,status:"all"}):x==="done"&&m({id:c,status:"doing"})}return e.jsxs(u,{children:[e.jsxs(Or,{children:[e.jsx("h2",{children:o.title}),e.jsx("p",{children:o.description}),e.jsxs(Ir,{children:[e.jsx(be,{children:p}),e.jsxs(Fr,{children:[o.status==="done"?e.jsx(u.OpenModal,{opens:"done",children:e.jsx(L,{children:e.jsx(ne,{})})}):o.status==="doing"?e.jsx(u.OpenModal,{opens:"doing",children:e.jsx(L,{children:e.jsx(se,{})})}):e.jsx(u.OpenModal,{opens:"all",children:e.jsx(L,{children:e.jsx(ie,{})})}),e.jsx(L,{colorhover:"#15803d",onClick:()=>y(`/task-management/${c}`),children:e.jsx(Je,{})}),o.status==="done"?"":e.jsx(u.OpenModal,{opens:"update",children:e.jsx(L,{colorhover:"#4f46e5",children:e.jsx(ae,{})})}),e.jsx(u.OpenModal,{opens:"delete",children:e.jsx(L,{colorhover:"#991b1b",children:e.jsx(de,{})})})]})]})]}),e.jsx(u.WindowModal,{name:"update",children:e.jsx(Q,{taskEdite:o})}),e.jsx(u.WindowModal,{name:"delete",children:e.jsxs(v,{subject:"Delete",resourceName:o.title,disabled:t,onConfirm:()=>r(o.id),children:["Are you sure you want to delete this (",o.title,") permanently? This action cannot be undone."]})}),e.jsx(u.WindowModal,{name:"all",children:e.jsxs(v,{subject:"doing",resourceName:g,status:x,disabled:s||l,onConfirm:()=>n(c),children:["Do you want the task (",g,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing",children:e.jsxs(v,{subject:"done",resourceName:g,status:x,disabled:d||l,onConfirm:()=>a(c),onBack:f,children:["Do you want the task (",g,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done",children:e.jsxs(v,{subject:"back-doing",resourceName:g,status:x,disabled:s||l,onConfirm:()=>n(c),onBack:f,children:["Do you want the task of completing your intensity (",g,") to return to all lists?"]})})]})}const Nr=i.div`
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
`,Hr=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    width: 100%;
  }
`,Pr=i.span`
  color: var(--color-grey-700);
  width: 100%;
  margin-bottom: 0.3rem;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qr=i.div`
  color: var(--color-grey-400);
  text-align: center;
  margin-top: 5rem;
`,Wr=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  /* @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    height: 336px;
    overflow-y: auto;
    border: 1px solid var(--color-grey-50);
  } */
`;function Ar(){const{tasks:o,isLoading:r}=E(),t=["all","doing","done"],n=[...new Set(o==null?void 0:o.map(a=>a.status))],s=[...t,...n.filter(a=>!t.includes(a))];return e.jsxs(Nr,{children:[r&&e.jsx(M,{}),e.jsx(Rr,{columns:s.length,children:s.map(a=>e.jsxs(Hr,{children:[e.jsxs(Pr,{status:a,children:[e.jsx(pe,{status:a}),a.toUpperCase(),"(",o==null?void 0:o.filter(d=>d.status===a).length,")"]}),e.jsx(Wr,{children:(o==null?void 0:o.filter(d=>d.status===a).length)===0?e.jsx(qr,{children:"There is no task"}):o==null?void 0:o.filter(d=>d.status===a).map(d=>e.jsx(_r,{task:d},d.id))})]},a))})]})}const Kr=i.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;function Qr(){return e.jsxs(e.Fragment,{children:[e.jsx(Kr,{children:e.jsx(Br,{})}),e.jsx(Ar,{})]})}function Ur(){return e.jsx(e.Fragment,{children:e.jsx(Qr,{})})}const Jr=i.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${o=>o.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function Gr({options:o}){const[r,t]=te(),n=r.get("sortBy")||"";function s(a){r.set("sortBy",a.target.value),t(r)}return e.jsx(Jr,{value:n,onChange:s,children:o==null?void 0:o.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})}function Xr(){return e.jsx(Gr,{options:[{value:"All",label:"Status All"},{value:"all",label:"Status Waiting"},{value:"doing",label:"Status doing"},{value:"done",label:"Status done"}]})}const Zr=i.div`
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
`,Vr=i(ye)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,Yr=i(ye)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,et=i.footer`
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
`,ot=i.section`
  margin: 0.4rem 0;
`,je=i.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,X=h.createContext();function T({children:o,columns:r}){return e.jsx(X.Provider,{value:{columns:r},children:e.jsx(Zr,{role:"table",children:o})})}function rt({children:o}){const{columns:r}=h.useContext(X);return e.jsx(Vr,{columns:r,role:"row",children:o})}function tt({children:o}){const{columns:r}=h.useContext(X);return e.jsx(Yr,{columns:r,role:"row",children:o})}function nt({data:o,render:r}){return(o==null?void 0:o.length)===0?e.jsx(je,{children:"not data cabin"}):e.jsx(ot,{children:o==null?void 0:o.map(r)})}T.HeaderTable=rt;T.Body=nt;T.RowTable=tt;T.Footer=et;T.Empty=je;const st=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative; /* اضافه کردن position relative */
`,it=i.button`
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
`,at=i.ul`
  z-index: 1;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  position: absolute; /* تغییر position به absolute */
  top: ${o=>o.position+"px"};
  width: max-content;
`,dt=i.button`
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
`,_=h.createContext();function k({children:o}){const[r,t]=h.useState(""),[n,s]=h.useState(null);return e.jsx(_.Provider,{value:{openId:r,setOpenId:t,position:n,setPosition:s},children:e.jsx(st,{children:o})})}function lt({openDropdown:o}){const{setOpenId:r,openId:t,setPosition:n}=h.useContext(_);function s(a){r(t===""||t!==o?o:"");const d=a.target.closest("button").getBoundingClientRect();n(d.height+8)}return e.jsx(it,{onClick:s,children:e.jsx(Ge,{})})}function ct({children:o,nameDropdown:r}){const{openId:t,position:n}=h.useContext(_);return t!==r?null:e.jsx(at,{position:n,children:o})}function ut({children:o,icon:r,onClick:t}){const{setOpenId:n}=h.useContext(_);function s(){t==null||t(),n("")}return e.jsx("li",{onClick:s,children:e.jsxs(dt,{children:[e.jsx("span",{children:r}),o]})})}k.OpenDropdown=lt;k.WindowDropdown=ct;k.ButtonDropdown=ut;const oe=i.div`
  white-space: nowrap; /* جلوگیری از شکستن خط */
  overflow: hidden; /* پنهان کردن بخش‌های اضافی متن */
  text-overflow: ellipsis; /* نمایش سه نقطه */
`,mt=i.div`
  padding: 0.3rem;
  font-size: 13px;
  text-align: center;
  border-radius: var(--border-radius-md);
  background: ${o=>o.status==="all"?"#4f46e5":o.status==="doing"?"#7ff3a7":o.status==="done"?"#b8bbc0":"#bb5588eb"};
  color: var(--color-grey-0);
`;function gt({task:o}){const{deleteTask:r,isLoading:t}=fe(),{doingTask:n,isLoadingDoingTask:s}=U(),{doneTask:a,isLoadingDoneTask:d}=J(),{backTask:m,isLoadingBackTask:l}=G(),c=z(),{id:g}=o,x=o.status==="all",p=o.status==="doing",y=o.status==="done";function f(){p?(m({id:g,status:"all"}),c("/")):y&&(m({id:g,status:"doing"}),c("/"))}return e.jsxs(T.RowTable,{children:[e.jsx(oe,{children:o.title}),e.jsx(oe,{children:o.description}),e.jsx(mt,{status:o.status,children:o.status}),e.jsx("div",{children:I(o.created_at,"EEE, MMM dd yyyy")}),e.jsx("div",{children:e.jsx(u,{children:e.jsxs(k,{children:[e.jsx(k.OpenDropdown,{openDropdown:o.id}),e.jsxs(k.WindowDropdown,{nameDropdown:o.id,children:[e.jsx(u.OpenModal,{opens:"delete",children:e.jsx(k.ButtonDropdown,{icon:e.jsx(de,{}),children:"Delete"})}),o.status!=="done"&&e.jsx(u.OpenModal,{opens:"edite",children:e.jsx(k.ButtonDropdown,{icon:e.jsx(ae,{}),children:"edite"})}),e.jsx(u.OpenModal,{opens:x?"all":p?"doing":y?"done":"",children:e.jsx(k.ButtonDropdown,{icon:x?e.jsx(ie,{}):p?e.jsx(se,{}):y&&e.jsx(ne,{}),children:o.status})})]}),e.jsx(u.WindowModal,{name:"delete",children:e.jsxs(v,{subject:"Delete",resourceName:o.title,disabled:t,onConfirm:()=>r(o.id),children:["Are you sure you want to delete this (",o.title,") permanently? This action cannot be undone."]})}),e.jsx(u.WindowModal,{name:"edite",children:e.jsx(Q,{taskEdite:o})}),e.jsx(u.WindowModal,{name:"all",children:e.jsxs(v,{subject:"doing",resourceName:o.title,status:o.status,disabled:s||l,onConfirm:()=>(n(g),c("/")),children:["Do you want the task (",o.title,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing",children:e.jsxs(v,{subject:"done",resourceName:o.title,status:o.status,disabled:d||l,onConfirm:()=>(a(g),c("/")),onBack:f,children:["Do you want the task (",o.title,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done",children:e.jsxs(v,{subject:"back-doing",resourceName:o.title,status:o.status,disabled:s||l,onConfirm:()=>(n(g),c("/")),onBack:f,children:["Do you want the task of completing your intensity (",o.title,") to return to all lists?"]})})]})})})]},o.id)}const ht=i.footer`
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
`,xt=i.div`
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
`;function pt({totalPages:o,setCurrentPage:r,currentPage:t,numberPage:n,currentItems:s}){const a=d=>{d>=1&&d<=o&&r(d)};return e.jsx(ht,{children:o<=1&&n>(s==null?void 0:s.length)?console.log("no"):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Page ",t," of ",o]}),e.jsxs(xt,{children:[e.jsx(re,{onClick:()=>a(t-1),disabled:t===1,children:e.jsx(Xe,{})}),Array.from({length:o},(d,m)=>e.jsx("span",{onClick:()=>a(m+1),style:{color:t===m+1?"var(--color-brand-200)":"var(--color--grey--0)",fontWeight:t===m+1?900:200},children:m+1},m)),e.jsx(re,{onClick:()=>a(t+1),disabled:t===o,children:e.jsx(Ze,{})})]})]})})}const ft=i.div`
  @media (max-width: ${({theme:o})=>o.breakpoints.max_tablet}) {
    width: 750px;
    overflow-x: auto;
  }
`;function bt(){const{tasks:o,isLoading:r}=E(),[t,n]=h.useState([]),[s]=te(),a=s.get("sortBy")||"",d=["doing","done","all"],m=h.useMemo(()=>o?d.includes(a)?o.filter(f=>f.status===a):o:[],[o,a]);h.useEffect(()=>{n(m)},[m]);const l=8,[c,g]=h.useState(1),x=l,p=h.useMemo(()=>Math.ceil(t.length/x),[t,x]),y=h.useMemo(()=>t.slice((c-1)*x,c*x),[t,c,x]);return e.jsxs(e.Fragment,{children:[e.jsx(T,{columns:"1fr 1fr 1fr 1fr .1fr ",children:e.jsxs(ft,{children:[e.jsxs(T.HeaderTable,{children:[e.jsx("div",{children:"title"}),e.jsx("div",{children:"description"}),e.jsx("div",{children:"status"}),e.jsx("div",{children:"date"}),e.jsx("div",{})]}),r&&e.jsx(M,{}),e.jsx(T.Body,{data:y,render:(f,C)=>e.jsx(gt,{task:f,index:C},f.id)})]})}),e.jsx(pt,{setCurrentPage:g,currentPage:c,totalPages:p})]})}function yt(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(Xr,{})}),e.jsx(bt,{})]})}function jt(){return e.jsx(yt,{})}function vt(){return e.jsx("p",{children:"Settings"})}function kt(){return e.jsx("p",{children:"login"})}function wt(){return e.jsx("p",{children:"Page Not Found"})}function Tt(){const{id:o}=Ee(),{data:r={},isLoading:t}=R({queryKey:["Tasks",o],queryFn:()=>Qo(o)});return{taskId:r,isLoading:t}}function St(){const o=z();return()=>o(-1)}const Ct=i.div`
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
`,Mt=i.div`
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
`,Dt=i.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;function $t(){const{taskId:o,isLoading:r}=Tt(),{status:t,title:n,description:s,created_at:a=new Date,id:d}=o,{doingTask:m,isLoadingDoingTask:l}=U(),{doneTask:c,isLoadingDoneTask:g}=J(),{backTask:x,isLoadingBackTask:p}=G(),y=St(),f=z();function C(){t==="doing"?(x({id:d,status:"all"}),f("/task-management")):t==="done"&&(x({id:d,status:"doing"}),f("/task-management"))}return e.jsx(Ct,{children:r?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsxs(Mt,{status:t,children:[e.jsxs("h2",{children:["Status : ",t]}),e.jsx("span",{children:e.jsx(be,{children:a})})]}),e.jsxs(Lt,{children:[e.jsx("h1",{children:n}),e.jsx("p",{children:s})]}),e.jsxs(Dt,{children:[e.jsx(j,{onClick:()=>y(),variations:"secondary",children:"Back"}),e.jsxs(u,{children:[t==="done"?e.jsx(u.OpenModal,{opens:"done-details",children:e.jsx(j,{children:"back doing"})}):t==="doing"?e.jsx(u.OpenModal,{opens:"doing-details",children:e.jsx(j,{children:"done"})}):e.jsx(u.OpenModal,{opens:"all-details",children:e.jsx(j,{children:"doing"})}),e.jsx(u.WindowModal,{name:"all-details",children:e.jsxs(v,{subject:"doing",resourceName:n,status:t,disabled:l||p,onConfirm:()=>(m(d),f("/task-management")),children:["Do you want the task (",n,") to be placed in the doing list?"]})}),e.jsx(u.WindowModal,{name:"doing-details",children:e.jsxs(v,{subject:"done",resourceName:n,status:t,disabled:g||p,onConfirm:()=>(c(d),f("/task-management")),onBack:C,children:["Do you want the task (",n,") to be placed in the done list?"]})}),e.jsx(u.WindowModal,{name:"done-details",children:e.jsx(v,{subject:"back-doing",resourceName:n,status:t,disabled:l||p,onConfirm:()=>(m(d),f("/task-management")),onBack:C,children:"Do you want the task of completing your intensity (title) to return to all lists?"})})]})]})]})})}function Bt(){const o=new Ce({defaultOptions:{queries:{staleTime:0}}});return e.jsx(mo,{children:e.jsxs(Me,{client:o,children:[e.jsx(Le,{initialIsOpen:!1}),e.jsx(lo,{}),e.jsx($e,{children:e.jsxs(Oe,{children:[e.jsxs(S,{path:"/to_do_list/",element:e.jsx(Fo,{}),children:[e.jsx(S,{path:"/to_do_list/",element:e.jsx(fr,{})}),e.jsx(S,{path:"/to_do_list/task-management",element:e.jsx(Ur,{})}),e.jsx(S,{path:"/to_do_list/task-management/:id",element:e.jsx($t,{})}),e.jsx(S,{path:"/to_do_list/tasks",element:e.jsx(jt,{})}),e.jsx(S,{path:"/setting",element:e.jsx(vt,{})})]}),e.jsx(S,{path:"/to_do_list/login",element:e.jsx(kt,{})}),e.jsx(S,{path:"*",element:e.jsx(wt,{})})]})}),e.jsx(Ve,{position:"top-center",gutter:12,containerStyle:{margin:"8px"},toastOptions:{success:{duration:3e3},error:{duration:4500},style:{fontSize:"16px",maxWidth:"500px",padding:"15px 24px",background:"var( --color-grey-0)",color:"var( --color-grey-70)"}}})]})})}we.createRoot(document.getElementById("root")).render(e.jsx(ve.StrictMode,{children:e.jsx(Bt,{})}));
