import{r,j as p}from"./index-1201cd26.js";import{c as l}from"./helper-03e0976d.js";const d=s=>{const{onKeyDown:n,onCompositionStart:e,onCompositionEnd:t}=s,a=r.useRef(!1),c=r.useCallback(o=>{a.current=!0,e==null||e(o)},[e]),i=r.useCallback(o=>{a.current=!1,t==null||t(o)},[t]),u=r.useCallback(o=>{if(n==null||n(o),a.current){o.stopPropagation();return}},[n]);return{onCompositionEnd:i,onCompositionStart:c,onKeyDown:u}},m=r.forwardRef(({className:s,...n},e)=>{const t=d(n);return p.jsx("input",{ref:e,className:l("min-w-0 flex-auto appearance-none rounded-lg border ring-accent/20 duration-200 sm:text-sm","bg-base-100 px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-zinc-400 focus:outline-none focus:ring-2","border-zinc-900/10 dark:border-zinc-700","focus:border-accent-focus dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500",s),...n,...t})});m.displayName="Input";export{m as I,d as u};
