function v(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(B)}function D(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function yt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function bt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(e.dirty.length,r.length);for(let u=0;u<l;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function wt(t,e,n,i,r,o){if(r){const l=O(e,n,i,o);t.p(l,r)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in U;let $=!1;function V(){$=!0}function X(){$=!1}function Y(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:Y(1,r,b=>e[n[b]].claim_order,c))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const o=[],l=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);o.reverse(),l.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<l.length;s++){for(;c<o.length&&l[s].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(l[s],f)}}function tt(t,e){if($){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){$&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function Tt(){return S("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){I(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const s=n(u);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const s=n(u);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];n[u.name]||o.push(u.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Mt(t,e,n){return lt(t,e,n,G)}function st(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function St(t){return st(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function kt(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n);if(n===i)return new H(void 0,e);I(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const o=r.slice(1,r.length-1);for(const l of o)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(o,e)}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ct(t,e){t.value=e??""}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ht(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Pt(t){const e=t.querySelector(":checked");return e&&e.__value}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}class ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class H extends ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}}function qt(t,e){return new t(e)}let y;function p(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function Bt(t){T().$$.on_mount.push(t)}function Dt(t){T().$$.after_update.push(t)}function Ot(t){T().$$.on_destroy.push(t)}function Gt(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ct(e,n,{cancelable:i});return r.slice().forEach(l=>{l.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],P=[];let m=[];const q=[],z=Promise.resolve();let A=!1;function F(){A||(A=!0,z.then(R))}function It(){return F(),z}function M(t){m.push(t)}const N=new Set;let _=0;function R(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ut(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;q.length;)q.pop()();A=!1,N.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function at(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function Wt(){d={r:0,c:[],p:d}}function zt(){d.r||g(d.c),d=d.p}function ft(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...dt];function Rt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||M(()=>{const l=t.$$.on_mount.map(B).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),o.forEach(M)}function ht(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,r,o,l,u=[-1]){const s=y;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...k)=>{const L=k.length?k[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=L)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](L),f&&mt(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){V();const a=rt(e.target);c.fragment&&c.fragment.l(a),a.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&ft(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),X(),R()}p(s)}class Qt{$destroy(){ht(this,1),this.$destroy=v}$on(e,n){if(!D(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_t as A,ht as B,bt as C,wt as D,vt as E,xt as F,tt as G,v as H,gt as I,yt as J,M as K,Ht as L,Nt as M,g as N,Pt as O,H as P,kt as Q,Ct as R,Qt as S,Et as T,Gt as U,Ot as V,$t as a,nt as b,St as c,Ft as d,Tt as e,zt as f,ft as g,E as h,Kt as i,Dt as j,G as k,Mt as l,rt as m,At as n,Bt as o,jt as p,S as q,st as r,pt as s,It as t,Lt as u,Wt as v,P as w,qt as x,Rt as y,Jt as z};
