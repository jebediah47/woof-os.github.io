function B(){}function en(n,t){for(const e in t)n[e]=t[e];return n}function L(n){return n()}function j(){return Object.create(null)}function m(n){n.forEach(L)}function q(n){return typeof n=="function"}function cn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function D(n){return Object.keys(n).length===0}function rn(n){const t={};for(const e in n)e[0]!=="$"&&(t[e]=n[e]);return t}let $=!1;function z(){$=!0}function H(){$=!1}function I(n,t,e,l){for(;n<t;){const r=n+(t-n>>1);e(r)<=l?n=r+1:t=r}return n}function P(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const i=[];for(let o=0;o<t.length;o++){const s=t[o];s.claim_order!==void 0&&i.push(s)}t=i}const e=new Int32Array(t.length+1),l=new Int32Array(t.length);e[0]=-1;let r=0;for(let i=0;i<t.length;i++){const o=t[i].claim_order,s=(r>0&&t[e[r]].claim_order<=o?r+1:I(1,r,p=>t[e[p]].claim_order,o))-1;l[i]=e[s]+1;const f=s+1;e[f]=i,r=Math.max(f,r)}const a=[],c=[];let u=t.length-1;for(let i=e[r]+1;i!=0;i=l[i-1]){for(a.push(t[i-1]);u>=i;u--)c.push(t[u]);u--}for(;u>=0;u--)c.push(t[u]);a.reverse(),c.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<c.length;i++){for(;o<a.length&&c[i].claim_order>=a[o].claim_order;)o++;const s=o<a.length?a[o]:null;n.insertBefore(c[i],s)}}function W(n,t){if($){for(P(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function ln(n,t,e){$&&!e?W(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function F(n){n.parentNode.removeChild(n)}function G(n){return document.createElement(n)}function J(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function E(n){return document.createTextNode(n)}function on(){return E(" ")}function un(){return E("")}function an(n,t,e,l){return n.addEventListener(t,e,l),()=>n.removeEventListener(t,e,l)}function fn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function K(n){return Array.from(n.childNodes)}function Q(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function M(n,t,e,l,r=!1){Q(n);const a=(()=>{for(let c=n.claim_info.last_index;c<n.length;c++){const u=n[c];if(t(u)){const i=e(u);return i===void 0?n.splice(c,1):n[c]=i,r||(n.claim_info.last_index=c),u}}for(let c=n.claim_info.last_index-1;c>=0;c--){const u=n[c];if(t(u)){const i=e(u);return i===void 0?n.splice(c,1):n[c]=i,r?i===void 0&&n.claim_info.last_index--:n.claim_info.last_index=c,u}}return l()})();return a.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,a}function O(n,t,e,l){return M(n,r=>r.nodeName===t,r=>{const a=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||a.push(u.name)}a.forEach(c=>r.removeAttribute(c))},()=>l(t))}function sn(n,t,e){return O(n,t,e,G)}function dn(n,t,e){return O(n,t,e,J)}function R(n,t){return M(n,e=>e.nodeType===3,e=>{const l=""+t;if(e.data.startsWith(l)){if(e.data.length!==l.length)return e.splitText(l.length)}else e.data=l},()=>E(t),!0)}function _n(n){return R(n," ")}let k;function h(n){k=n}const _=[],A=[],g=[],C=[],V=Promise.resolve();let w=!1;function X(){w||(w=!0,V.then(T))}function v(n){g.push(n)}const b=new Set;let y=0;function T(){const n=k;do{for(;y<_.length;){const t=_[y];y++,h(t),Y(t.$$)}for(h(null),_.length=0,y=0;A.length;)A.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];b.has(e)||(b.add(e),e())}g.length=0}while(_.length);for(;C.length;)C.pop()();w=!1,b.clear(),h(n)}function Y(n){if(n.fragment!==null){n.update(),m(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(v)}}const x=new Set;let d;function hn(){d={r:0,c:[],p:d}}function mn(){d.r||m(d.c),d=d.p}function Z(n,t){n&&n.i&&(x.delete(n),n.i(t))}function pn(n,t,e,l){if(n&&n.o){if(x.has(n))return;x.add(n),d.c.push(()=>{x.delete(n),l&&(e&&n.d(1),l())}),n.o(t)}}function yn(n,t){const e={},l={},r={$$scope:1};let a=n.length;for(;a--;){const c=n[a],u=t[a];if(u){for(const i in c)i in u||(l[i]=1);for(const i in u)r[i]||(e[i]=u[i],r[i]=1);n[a]=u}else for(const i in c)r[i]=1}for(const c in l)c in e||(e[c]=void 0);return e}function gn(n){return typeof n=="object"&&n!==null?n:{}}function xn(n){n&&n.c()}function $n(n,t){n&&n.l(t)}function U(n,t,e,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=n.$$;r&&r.m(t,e),l||v(()=>{const i=a.map(L).filter(q);c?c.push(...i):m(i),n.$$.on_mount=[]}),u.forEach(v)}function nn(n,t){const e=n.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function tn(n,t){n.$$.dirty[0]===-1&&(_.push(n),X(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function bn(n,t,e,l,r,a,c,u=[-1]){const i=k;h(n);const o=n.$$={fragment:null,ctx:null,props:a,update:B,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:j(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};c&&c(o.root);let s=!1;if(o.ctx=e?e(n,t.props||{},(f,p,...N)=>{const S=N.length?N[0]:p;return o.ctx&&r(o.ctx[f],o.ctx[f]=S)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](S),s&&tn(n,f)),p}):[],o.update(),s=!0,m(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){z();const f=K(t.target);o.fragment&&o.fragment.l(f),f.forEach(F)}else o.fragment&&o.fragment.c();t.intro&&Z(n.$$.fragment),U(n,t.target,t.anchor,t.customElement),H(),T()}h(i)}class wn{$destroy(){nn(this,1),this.$destroy=B}$on(t,e){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(e),()=>{const r=l.indexOf(e);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Z as A,nn as B,en as C,rn as D,hn as E,wn as S,J as a,on as b,sn as c,K as d,G as e,dn as f,F as g,_n as h,bn as i,R as j,fn as k,ln as l,W as m,an as n,B as o,xn as p,un as q,m as r,cn as s,E as t,$n as u,U as v,yn as w,gn as x,pn as y,mn as z};