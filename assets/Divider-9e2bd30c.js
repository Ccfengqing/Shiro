import{r as b,R as Q,j}from"./index-1201cd26.js";import{c as ee}from"./helper-03e0976d.js";let ie=0;function $(e,t){const o=`atom${++ie}`,S={toString:()=>o};return typeof e=="function"?S.read=e:(S.init=e,S.read=function(E){return E(this)},S.write=function(E,u,a){return u(this,typeof a=="function"?a(E(this)):a)}),t&&(S.write=t),S}const q=e=>"init"in e,Y=e=>!!e.write,x=new WeakMap,ue=(e,t)=>{x.set(e,t),e.catch(()=>{}).finally(()=>x.delete(e))},G=(e,t)=>{const o=x.get(e);o&&(x.delete(e),o(t))},H=(e,t)=>{e.status="fulfilled",e.value=t},K=(e,t)=>{e.status="rejected",e.reason=t},ce=e=>typeof(e==null?void 0:e.then)=="function",U=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),X=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),L=e=>!!e&&"v"in e&&e.v instanceof Promise,le=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,T=e=>{if("e"in e)throw e.e;return e.v},te=()=>{const e=new WeakMap,t=new WeakMap,o=new Map;let S,E;const u=n=>e.get(n),a=(n,s)=>{const l=e.get(n);if(e.set(n,s),o.has(n)||o.set(n,l),L(l)){const r="v"in s?s.v instanceof Promise?s.v:Promise.resolve(s.v):Promise.reject(s.e);l.v!==r&&G(l.v,r)}},c=(n,s,l)=>{const r=new Map;let f=!1;l.forEach((h,i)=>{!h&&i===n&&(h=s),h&&(r.set(i,h),s.d.get(i)!==h&&(f=!0))}),(f||s.d.size!==r.size)&&(s.d=r)},v=(n,s,l)=>{const r=u(n),f={d:(r==null?void 0:r.d)||new Map,v:s};if(l&&c(n,f,l),U(r,f)&&r.d===f.d)return r;if(L(r)&&L(f)&&le(r,f)){if(r.d===f.d)return r;f.v=r.v}return a(n,f),f},R=(n,s,l,r)=>{if(ce(s)){let f;const h=()=>{const d=u(n);if(!L(d)||d.v!==i)return;const m=v(n,i,l);t.has(n)&&d.d!==m.d&&P(n,m,d.d)},i=new Promise((d,m)=>{let p=!1;s.then(w=>{p||(p=!0,H(i,w),d(w),h())},w=>{p||(p=!0,K(i,w),m(w),h())}),f=w=>{p||(p=!0,w.then(A=>H(i,A),A=>K(i,A)),d(w))}});return i.orig=s,i.status="pending",ue(i,d=>{d&&f(d),r==null||r()}),v(n,i,l)}return v(n,s,l)},g=(n,s,l)=>{const r=u(n),f={d:(r==null?void 0:r.d)||new Map,e:s};return l&&c(n,f,l),X(r,f)&&r.d===f.d?r:(a(n,f),f)},_=(n,s)=>{const l=u(n);if(!s&&l&&(t.has(n)||Array.from(l.d).every(([p,w])=>{if(p===n)return!0;const A=_(p);return A===w||U(A,w)})))return l;const r=new Map;let f=!0;const h=p=>{if(p===n){const A=u(p);if(A)return r.set(p,A),T(A);if(q(p))return r.set(p,void 0),p.init;throw new Error("no atom init")}const w=_(p);return r.set(p,w),T(w)};let i,d;const m={get signal(){return i||(i=new AbortController),i.signal},get setSelf(){return!d&&Y(n)&&(d=(...p)=>{if(!f)return D(n,...p)}),d}};try{const p=n.read(h,m);return R(n,p,r,()=>i==null?void 0:i.abort())}catch(p){return g(n,p,r)}finally{f=!1}},z=n=>T(_(n)),V=n=>{let s=t.get(n);return s||(s=O(n)),s},M=(n,s)=>!s.l.size&&(!s.t.size||s.t.size===1&&s.t.has(n)),N=n=>{const s=t.get(n);s&&M(n,s)&&y(n)},I=n=>{const s=new Map,l=new WeakMap,r=i=>{var d;const m=new Set((d=t.get(i))==null?void 0:d.t);return o.forEach((p,w)=>{var A;(A=u(w))!=null&&A.d.has(i)&&m.add(w)}),m},f=i=>{r(i).forEach(d=>{d!==i&&(s.set(d,(s.get(d)||new Set).add(i)),l.set(d,(l.get(d)||0)+1),f(d))})};f(n);const h=i=>{r(i).forEach(d=>{var m;if(d!==i){let p=l.get(d);if(p&&l.set(d,--p),!p){let w=!!((m=s.get(d))!=null&&m.size);if(w){const A=u(d),se=_(d,!0);w=!U(A,se)}w||s.forEach(A=>A.delete(d))}h(d)}})};h(n)},B=(n,...s)=>{let l=!0;const r=i=>T(_(i)),f=(i,...d)=>{let m;if(i===n){if(!q(i))throw new Error("atom not writable");const p=u(i),w=R(i,d[0]);U(p,w)||I(i)}else m=B(i,...d);if(!l){const p=W()}return m},h=n.write(r,f,...s);return l=!1,h},D=(n,...s)=>{const l=B(n,...s),r=W();return l},O=(n,s,l)=>{var r;const f=l||[];(r=u(n))==null||r.d.forEach((i,d)=>{const m=t.get(d);m?m.t.add(n):d!==n&&O(d,n,f)}),_(n);const h={t:new Set(s&&[s]),l:new Set};if(t.set(n,h),Y(n)&&n.onMount){const{onMount:i}=n;f.push(()=>{const d=i((...m)=>D(n,...m));d&&(h.u=d)})}return l||f.forEach(i=>i()),h},y=n=>{var s;const l=(s=t.get(n))==null?void 0:s.u;l&&l(),t.delete(n);const r=u(n);r&&(L(r)&&G(r.v),r.d.forEach((f,h)=>{if(h!==n){const i=t.get(h);i&&(i.t.delete(n),M(h,i)&&y(h))}}))},P=(n,s,l)=>{const r=new Set(s.d.keys());l==null||l.forEach((f,h)=>{if(r.has(h)){r.delete(h);return}const i=t.get(h);i&&(i.t.delete(n),M(h,i)&&y(h))}),r.forEach(f=>{const h=t.get(f);h?h.t.add(n):t.has(n)&&O(f,n)})},W=()=>{let n;for(;o.size;){const s=Array.from(o);o.clear(),s.forEach(([l,r])=>{const f=u(l);if(f){const h=t.get(l);h&&f.d!==(r==null?void 0:r.d)&&P(l,f,r==null?void 0:r.d),h&&!(!L(r)&&(U(r,f)||X(r,f)))&&h.l.forEach(i=>i())}})}};return{get:z,set:D,sub:(n,s)=>{const l=V(n),r=W(),f=l.l;return f.add(s),()=>{f.delete(s),N(n)}}}};let k;const ne=()=>(k||(k=te()),k),fe=b.createContext(void 0),oe=e=>{const t=b.useContext(fe);return(e==null?void 0:e.store)||t||ne()},de=e=>typeof(e==null?void 0:e.then)=="function",ae=Q.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function ve(e,t){const o=oe(t),[[S,E,u],a]=b.useReducer(R=>{const g=o.get(e);return Object.is(R[0],g)&&R[1]===o&&R[2]===e?R:[g,o,e]},void 0,()=>[o.get(e),o,e]);let c=S;(E!==o||u!==e)&&(a(),c=o.get(e));const v=t==null?void 0:t.delay;return b.useEffect(()=>{const R=o.sub(e,()=>{if(typeof v=="number"){setTimeout(a,v);return}a()});return a(),R},[o,e,v]),b.useDebugValue(c),de(c)?ae(c):c}function he(e,t){const o=oe(t);return b.useCallback((...E)=>o.set(e,...E),[o,e])}function Ie(e,t){return[ve(e,t),he(e,t)]}const Ee=Symbol(),J=(e,t,o)=>(t.has(o)?t:t.set(o,e())).get(o),Se=new WeakMap,pe=(e,t,o,S)=>{const E=J(()=>new WeakMap,Se,t),u=J(()=>new WeakMap,E,o);return J(e,u,S)};function Be(e,t,o=Object.is){return pe(()=>{const S=Symbol(),E=([a,c])=>{if(c===S)return t(a);const v=t(a,c);return o(c,v)?c:v},u=$(a=>{const c=a(u),v=a(e);return v instanceof Promise||c instanceof Promise?Promise.all([v,c]).then(E):E([v,c])});return u.init=S,u},e,t,o)}const Re=e=>typeof(e==null?void 0:e.then)=="function";function we(e){let t,o;const S={getItem:(E,u)=>{var a,c;const v=g=>{if(g=g||"",t!==g){try{o=JSON.parse(g)}catch{return u}t=g}return o},R=(c=(a=e())==null?void 0:a.getItem(E))!=null?c:null;return Re(R)?R.then(v):v(R)},setItem:(E,u)=>{var a;return(a=e())==null?void 0:a.setItem(E,JSON.stringify(u))},removeItem:E=>{var u;return(u=e())==null?void 0:u.removeItem(E)}};return typeof window<"u"&&typeof window.addEventListener=="function"&&window.Storage&&(S.subscribe=(E,u,a)=>{if(!(e()instanceof window.Storage))return()=>{};const c=v=>{if(v.storageArea===e()&&v.key===E){let R;try{R=JSON.parse(v.newValue||"")}catch{R=a}u(R)}};return window.addEventListener("storage",c),()=>{window.removeEventListener("storage",c)}}),S}const ge=we(()=>typeof window<"u"?window.localStorage:void 0);function Ue(e,t,o=ge,S){const E=S==null?void 0:S.unstable_getOnInit,u=$(E?o.getItem(e,t):t);return u.onMount=c=>{E||c(o.getItem(e,t));let v;return o.subscribe&&(v=o.subscribe(e,c,t)),v},$(c=>c(u),(c,v,R)=>{const g=typeof R=="function"?R(c(u)):R;return g===Ee?(v(u,t),o.removeItem(e)):g instanceof Promise?g.then(_=>(v(u,_),o.setItem(e,_))):(v(u,g),o.setItem(e,g))})}let re=ne(),me=e=>{re=e},je=()=>re;const Ae=te();me(Ae);var F=new Map,C=new WeakMap,Z=0,_e=void 0;function be(e){return e?(C.has(e)||(Z+=1,C.set(e,Z.toString())),C.get(e)):"0"}function De(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?be(e.root):e[t]}`).toString()}function Oe(e){let t=De(e),o=F.get(t);if(!o){const S=new Map;let E;const u=new IntersectionObserver(a=>{a.forEach(c=>{var v;const R=c.isIntersecting&&E.some(g=>c.intersectionRatio>=g);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=R),(v=S.get(c.target))==null||v.forEach(g=>{g(R,c)})})},e);E=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),o={id:t,observer:u,elements:S},F.set(t,o)}return o}function Me(e,t,o={},S=_e){if(typeof window.IntersectionObserver>"u"&&S!==void 0){const v=e.getBoundingClientRect();return t(S,{isIntersecting:S,target:e,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:v,intersectionRect:v,rootBounds:v}),()=>{}}const{id:E,observer:u,elements:a}=Oe(o);let c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),u.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(a.delete(e),u.unobserve(e)),a.size===0&&(u.disconnect(),F.delete(E))}}function ye({threshold:e,delay:t,trackVisibility:o,rootMargin:S,root:E,triggerOnce:u,skip:a,initialInView:c,fallbackInView:v,onChange:R}={}){var g;const[_,z]=b.useState(null),V=b.useRef(),[M,N]=b.useState({inView:!!c,entry:void 0});V.current=R,b.useEffect(()=>{if(a||!_)return;let O;return O=Me(_,(y,P)=>{N({inView:y,entry:P}),V.current&&V.current(y,P),P.isIntersecting&&u&&O&&(O(),O=void 0)},{root:E,rootMargin:S,threshold:e,trackVisibility:o,delay:t},v),()=>{O&&O()}},[Array.isArray(e)?e.toString():e,_,E,S,u,a,o,v,t]);const I=(g=M.entry)==null?void 0:g.target,B=b.useRef();!_&&I&&!u&&!a&&B.current!==I&&(B.current=I,N({inView:!!c,entry:void 0}));const D=[z,M.inView,M.entry];return D.ref=D[0],D.inView=D[1],D.entry=D[2],D}const Ne=e=>{const{placeholder:t=null,offset:o=0,...S}=e,{ref:E,inView:u}=ye({triggerOnce:!0,rootMargin:`${o||0}px`,...S}),[a,c]=Q.useState(!1);return b.useEffect(()=>{u&&c(!0)},[u]),j.jsxs(j.Fragment,{children:[!a&&j.jsx("span",{"data-hide-print":!0,"data-testid":"lazyload-indicator",ref:E}),u?e.children:t]})},Te=e=>{const{className:t,...o}=e;return j.jsx("hr",{className:ee("my-4 h-[0.5px] border-0 bg-always-black !bg-opacity-30 dark:bg-always-white",t),...o})},Ce=e=>{const{className:t,...o}=e;return j.jsx("span",{className:ee("mx-4 inline-block h-full w-[0.5px] select-none bg-always-black !bg-opacity-30 text-transparent dark:bg-always-white",t),...o,children:"w"})};export{Te as D,Ne as L,$ as a,ye as b,Ue as c,he as d,Ce as e,oe as f,je as g,Ie as h,me as i,Ae as j,Be as s,ve as u};
