(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8794,736,876],{80755:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},24760:function(e,t,n){var r=n(92238),o=n(58834);e.exports=function(e,t){return e&&r(t,o(t),e)}},15212:function(e,t,n){var r=n(92238),o=n(53342);e.exports=function(e,t){return e&&r(t,o(t),e)}},23845:function(e,t,n){var r=n(20014),o=n(80755),l=n(5100),u=n(24760),a=n(15212),i=n(28057),c=n(61984),s=n(88456),f=n(25512),p=n(90393),d=n(90179),v=n(65064),b=n(7635),m=n(54199),y=n(71660),g=n(2428),h=n(7757),E=n(97985),P=n(6627),w=n(22480),S=n(58834),T=n(53342),j="[object Arguments]",x="[object Function]",A="[object Object]",C={};C[j]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object DataView]"]=C["[object Boolean]"]=C["[object Date]"]=C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Map]"]=C["[object Number]"]=C[A]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object Symbol]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Error]"]=C[x]=C["[object WeakMap]"]=!1,e.exports=function e(t,n,O,I,R,D){var F,M=1&n,k=2&n,N=4&n;if(O&&(F=R?O(t,I,R,D):O(t)),void 0!==F)return F;if(!P(t))return t;var z=g(t);if(z){if(F=b(t),!M)return c(t,F)}else{var B=v(t),Y=B==x||"[object GeneratorFunction]"==B;if(h(t))return i(t,M);if(B==A||B==j||Y&&!R){if(F=k||Y?{}:y(t),!M)return k?f(t,a(F,t)):s(t,u(F,t))}else{if(!C[B])return R?t:{};F=m(t,B,M)}}D||(D=new r);var V=D.get(t);if(V)return V;D.set(t,F),w(t)?t.forEach(function(r){F.add(e(r,n,O,r,t,D))}):E(t)&&t.forEach(function(r,o){F.set(o,e(r,n,O,o,t,D))});var L=N?k?d:p:k?T:S,$=z?void 0:L(t);return o($||t,function(r,o){$&&(r=t[o=r]),l(F,o,e(r,n,O,o,t,D))}),F}},88579:function(e,t,n){var r=n(6627),o=Object.create,l=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=l},62512:function(e,t,n){var r=n(65064),o=n(89109);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},8516:function(e,t,n){var r=n(65064),o=n(89109);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},54675:function(e,t,n){var r=n(39069);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},28057:function(e,t,n){e=n.nmd(e);var r=n(73401),o=t&&!t.nodeType&&t,l=o&&e&&!e.nodeType&&e,u=l&&l.exports===o?r.Buffer:void 0,a=u?u.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=a?a(n):new e.constructor(n);return e.copy(r),r}},39493:function(e,t,n){var r=n(54675);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},55543:function(e){var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},43866:function(e,t,n){var r=n(66293),o=r?r.prototype:void 0,l=o?o.valueOf:void 0;e.exports=function(e){return l?Object(l.call(e)):{}}},50507:function(e,t,n){var r=n(54675);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},61984:function(e){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},92238:function(e,t,n){var r=n(5100),o=n(80897);e.exports=function(e,t,n,l){var u=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var c=t[a],s=l?l(n[c],e[c],c,n,e):void 0;void 0===s&&(s=e[c]),u?o(n,c,s):r(n,c,s)}return n}},88456:function(e,t,n){var r=n(92238),o=n(69128);e.exports=function(e,t){return r(e,o(e),t)}},25512:function(e,t,n){var r=n(92238),o=n(55456);e.exports=function(e,t){return r(e,o(e),t)}},7635:function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,r=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},54199:function(e,t,n){var r=n(54675),o=n(39493),l=n(55543),u=n(43866),a=n(50507);e.exports=function(e,t,n){var i=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new i(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(e,n);case"[object Map]":case"[object Set]":return new i;case"[object Number]":case"[object String]":return new i(e);case"[object RegExp]":return l(e);case"[object Symbol]":return u(e)}}},71660:function(e,t,n){var r=n(88579),o=n(8187),l=n(92403);e.exports=function(e){return"function"!=typeof e.constructor||l(e)?{}:r(o(e))}},17806:function(e,t,n){var r=n(23845);e.exports=function(e){return r(e,5)}},68039:function(e,t,n){var r=n(790),o=n(65064),l=n(43735),u=n(2428),a=n(71701),i=n(7757),c=n(92403),s=n(56868),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(u(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||s(e)||l(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!r(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}},97985:function(e,t,n){var r=n(62512),o=n(52715),l=n(20126),u=l&&l.isMap,a=u?o(u):r;e.exports=a},22480:function(e,t,n){var r=n(8516),o=n(52715),l=n(20126),u=l&&l.isSet,a=u?o(u):r;e.exports=a},20736:function(e,t,n){"use strict";let r,o,l,u;n.d(t,{V:function(){return eo}});var a=n(92379),i=n(26970),c=n(97757),s=n(64775),f=n(27192),p=n(44137),d=n(78461),v=n(26569),b=n(35165),m=n(74214),y=n(42652),g=n(24980),h=n(78749),E=n(29555),P=n(15750),w=n(36458);function S(e,t){let n=(0,a.useRef)([]),r=(0,y.z)(e);(0,a.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var T=((r=T||{})[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r);let j=Object.assign((0,c.yV)(function(e,t){let n=(0,a.useRef)(null),r=(0,s.T)(n,t),{initialFocus:o,containers:l,features:u=30,...f}=e;(0,v.H)()||(u=1);let p=(0,E.i)(n);!function({ownerDocument:e},t){let n=(0,a.useRef)(null);(0,P.O)(null==e?void 0:e.defaultView,"focusout",e=>{!t||n.current||(n.current=e.target)},!0),S(()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,m.C5)(n.current),n.current=null)},[t]);let r=(0,a.useRef)(!1);(0,a.useEffect)(()=>(r.current=!1,()=>{r.current=!0,(0,w.Y)(()=>{r.current&&((0,m.C5)(n.current),n.current=null)})}),[])}({ownerDocument:p},!!(16&u));let d=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,a.useRef)(null),l=(0,h.t)();return S(()=>{if(!r)return;let u=t.current;u&&(0,w.Y)(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(u.contains(t)){o.current=t;return}null!=n&&n.current?(0,m.C5)(n.current):(0,m.jA)(u,m.TO.First)===m.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:p,container:n,initialFocus:o},!!(2&u));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,h.t)();(0,P.O)(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let u=new Set(null==n?void 0:n.current);u.add(t);let a=r.current;if(!a)return;let i=e.target;i&&i instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(u,i)?(r.current=i,(0,m.C5)(i)):(e.preventDefault(),e.stopPropagation(),(0,m.C5)(a)):(0,m.C5)(r.current)},!0)}({ownerDocument:p,container:n,containers:l,previousActiveElement:d},!!(8&u));let T=(0,g.l)(),j=(0,y.z)(()=>{let e=n.current;e&&(0,i.E)(T.current,{[g.N.Forwards]:()=>(0,m.jA)(e,m.TO.First),[g.N.Backwards]:()=>(0,m.jA)(e,m.TO.Last)})});return a.createElement(a.Fragment,null,!!(4&u)&&a.createElement(b._,{as:"button",type:"button",onFocus:j,features:b.A.Focusable}),(0,c.sY)({ourProps:{ref:r},theirProps:f,defaultTag:"div",name:"FocusTrap"}),!!(4&u)&&a.createElement(b._,{as:"button",type:"button",onFocus:j,features:b.A.Focusable}))}),{features:T});var x=n(75370),A=n(78697);let C=new Set,O=new Map;function I(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function R(e){let t=O.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var D=n(95295);let F=(0,a.createContext)(!1);function M(e){return a.createElement(F.Provider,{value:e.force},e.children)}var k=n(71661);let N=a.Fragment,z=(0,c.yV)(function(e,t){let n=(0,a.useRef)(null),r=(0,s.T)((0,s.h)(e=>{n.current=e}),t),o=(0,E.i)(n),l=function(e){let t=(0,a.useContext)(F),n=(0,a.useContext)(Y),r=(0,E.i)(e),[o,l]=(0,a.useState)(()=>{if(!t&&null!==n||k.s)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,a.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,a.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[u]=(0,a.useState)(()=>{var e;return k.s?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),i=(0,v.H)(),f=(0,a.useRef)(!1);return(0,A.e)(()=>{if(f.current=!1,!(!l||!u))return l.contains(u)||(u.setAttribute("data-headlessui-portal",""),l.appendChild(u)),()=>{f.current=!0,(0,w.Y)(()=>{var e;f.current&&l&&u&&(l.removeChild(u),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))})}},[l,u]),i&&l&&u?(0,D.createPortal)((0,c.sY)({ourProps:{ref:r},theirProps:e,defaultTag:N,name:"Portal"}),u):null}),B=a.Fragment,Y=(0,a.createContext)(null),V=Object.assign(z,{Group:(0,c.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,s.T)(t)};return a.createElement(Y.Provider,{value:n},(0,c.sY)({ourProps:o,theirProps:r,defaultTag:B,name:"Popover.Group"}))})}),L=(0,a.createContext)(null),$=(0,c.yV)(function(e,t){let n=function e(){let t=(0,a.useContext)(L);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),r=`headlessui-description-${(0,d.M)()}`,o=(0,s.T)(t);(0,A.e)(()=>n.register(r),[r,n.register]);let l={ref:o,...n.props,id:r};return(0,c.sY)({ourProps:l,theirProps:e,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})});var H=n(70232);let _=(0,a.createContext)(()=>{});_.displayName="StackContext";var U=((o=U||{})[o.Add=0]="Add",o[o.Remove=1]="Remove",o);function G({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,a.useContext)(_),u=(0,y.z)((...e)=>{null==t||t(...e),l(...e)});return(0,A.e)(()=>{let e=void 0===o||!0===o;return e&&u(0,n,r),()=>{e&&u(1,n,r)}},[u,n,r,o]),a.createElement(_.Provider,{value:u},e)}var W=n(23508),Z=n(65033),J=((l=J||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),K=((u=K||{})[u.SetTitleId=0]="SetTitleId",u);let q={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},Q=(0,a.createContext)(null);function X(e){let t=(0,a.useContext)(Q);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return t}function ee(e,t){return(0,i.E)(t.type,q,e,t)}Q.displayName="DialogContext";let et=c.AN.RenderStrategy|c.AN.Static,en=(0,c.yV)(function(e,t){var n;let{open:r,onClose:o,initialFocus:l,__demoMode:u=!1,...p}=e,[m,g]=(0,a.useState)(0),h=(0,H.oJ)();void 0===r&&null!==h&&(r=(0,i.E)(h,{[H.ZM.Open]:!0,[H.ZM.Closed]:!1}));let w=(0,a.useRef)(new Set),S=(0,a.useRef)(null),T=(0,s.T)(S,t),D=(0,a.useRef)(null),F=(0,E.i)(S),k=e.hasOwnProperty("open")||null!==h,N=e.hasOwnProperty("onClose");if(!k&&!N)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!k)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof r)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);if("function"!=typeof o)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let z=r?0:1,[B,Y]=(0,a.useReducer)(ee,{titleId:null,descriptionId:null,panelRef:(0,a.createRef)()}),$=(0,y.z)(()=>o(!1)),_=(0,y.z)(e=>Y({type:0,id:e})),J=!!(0,v.H)()&&!u&&0===z,K=m>1,q=null!==(0,a.useContext)(Q);(function(e,t=!0){(0,A.e)(()=>{if(!t||!e.current)return;let n=e.current,r=(0,x.r)(n);if(r){for(let e of(C.add(n),O.keys()))e.contains(n)&&(R(e),O.delete(e));return r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let t of C)if(e.contains(t))return;1===C.size&&(O.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),I(e))}}),()=>{if(C.delete(n),C.size>0)r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!O.has(e)){for(let t of C)if(e.contains(t))return;O.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),I(e)}});else for(let e of O.keys())R(e),O.delete(e)}}},[t])})(S,!!K&&J),(0,W.O)(()=>{var e,t;return[...Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(!(e instanceof HTMLElement)||e.contains(D.current)||B.panelRef.current&&e.contains(B.panelRef.current))),null!=(t=B.panelRef.current)?t:S.current]},$,J&&!K),(0,P.O)(null==F?void 0:F.defaultView,"keydown",e=>{e.defaultPrevented||e.key===f.R.Escape&&0===z&&(K||(e.preventDefault(),e.stopPropagation(),$()))}),n=0===z&&!q,(0,a.useEffect)(()=>{var e;if(!n||!F)return;let t=(0,Z.k)();function r(e,n,r){let o=e.style.getPropertyValue(n);return Object.assign(e.style,{[n]:r}),t.add(()=>{Object.assign(e.style,{[n]:o})})}let o=F.documentElement,l=(null!=(e=F.defaultView)?e:window).innerWidth-o.clientWidth;if(r(o,"overflow","hidden"),l>0){let e=o.clientWidth-o.offsetWidth;r(o,"paddingRight",`${l-e}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){let e=window.pageYOffset;r(o,"position","fixed"),r(o,"marginTop",`-${e}px`),r(o,"width","100%"),t.add(()=>window.scrollTo(0,e))}return t.dispose},[F,n]),(0,a.useEffect)(()=>{if(0!==z||!S.current)return;let e=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&$()});return e.observe(S.current),()=>e.disconnect()},[z,S,$]);let[X,en]=function(){let[e,t]=(0,a.useState)([]);return[e.length>0?e.join(" "):void 0,(0,a.useMemo)(()=>function(e){let n=(0,y.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,a.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return a.createElement(L.Provider,{value:r},e.children)},[t])]}(),er=`headlessui-dialog-${(0,d.M)()}`,eo=(0,a.useMemo)(()=>[{dialogState:z,close:$,setTitleId:_},B],[z,B,$,_]),el=(0,a.useMemo)(()=>({open:0===z}),[z]),eu={ref:T,id:er,role:"dialog","aria-modal":0===z||void 0,"aria-labelledby":B.titleId,"aria-describedby":X};return a.createElement(G,{type:"Dialog",enabled:0===z,element:S,onUpdate:(0,y.z)((e,t,n)=>{"Dialog"===t&&(0,i.E)(e,{[U.Add](){w.current.add(n),g(e=>e+1)},[U.Remove](){w.current.add(n),g(e=>e-1)}})})},a.createElement(M,{force:!0},a.createElement(V,null,a.createElement(Q.Provider,{value:eo},a.createElement(V.Group,{target:S},a.createElement(M,{force:!1},a.createElement(en,{slot:el,name:"Dialog.Description"},a.createElement(j,{initialFocus:l,containers:w,features:J?(0,i.E)(K?"parent":"leaf",{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},(0,c.sY)({ourProps:eu,theirProps:p,slot:el,defaultTag:"div",features:et,visible:0===z,name:"Dialog"})))))))),a.createElement(b._,{features:b.A.Hidden,ref:D}))}),er=(0,c.yV)(function(e,t){let[{dialogState:n,close:r}]=X("Dialog.Overlay"),o=(0,s.T)(t),l=`headlessui-dialog-overlay-${(0,d.M)()}`,u=(0,y.z)(e=>{if(e.target===e.currentTarget){if((0,p.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),r()}}),i=(0,a.useMemo)(()=>({open:0===n}),[n]);return(0,c.sY)({ourProps:{ref:o,id:l,"aria-hidden":!0,onClick:u},theirProps:e,slot:i,defaultTag:"div",name:"Dialog.Overlay"})}),eo=Object.assign(en,{Backdrop:(0,c.yV)(function(e,t){let[{dialogState:n},r]=X("Dialog.Backdrop"),o=(0,s.T)(t),l=`headlessui-dialog-backdrop-${(0,d.M)()}`;(0,a.useEffect)(()=>{if(null===r.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[r.panelRef]);let u=(0,a.useMemo)(()=>({open:0===n}),[n]);return a.createElement(M,{force:!0},a.createElement(V,null,(0,c.sY)({ourProps:{ref:o,id:l,"aria-hidden":!0},theirProps:e,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,c.yV)(function(e,t){let[{dialogState:n},r]=X("Dialog.Panel"),o=(0,s.T)(t,r.panelRef),l=`headlessui-dialog-panel-${(0,d.M)()}`,u=(0,a.useMemo)(()=>({open:0===n}),[n]),i=(0,y.z)(e=>{e.stopPropagation()});return(0,c.sY)({ourProps:{ref:o,id:l,onClick:i},theirProps:e,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:er,Title:(0,c.yV)(function(e,t){let[{dialogState:n,setTitleId:r}]=X("Dialog.Title"),o=`headlessui-dialog-title-${(0,d.M)()}`,l=(0,s.T)(t);(0,a.useEffect)(()=>(r(o),()=>r(null)),[o,r]);let u=(0,a.useMemo)(()=>({open:0===n}),[n]);return(0,c.sY)({ourProps:{ref:l,id:o},theirProps:e,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:$})},20876:function(e,t,n){"use strict";let r,o;n.d(t,{J:function(){return B}});var l=n(92379),u=n(26970),a=n(97757),i=n(64775),c=n(78461),s=n(27192),f=n(44137),p=n(74214),d=n(70232),v=n(14482),b=n(23508),m=n(75370),y=n(29555),g=n(15750),h=n(35165),E=n(42652),P=n(24980),w=((r=w||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),S=((o=S||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let T={0:e=>({...e,popoverState:(0,u.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},j=(0,l.createContext)(null);function x(e){let t=(0,l.useContext)(j);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}j.displayName="PopoverContext";let A=(0,l.createContext)(null);function C(e){let t=(0,l.useContext)(A);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}A.displayName="PopoverAPIContext";let O=(0,l.createContext)(null);function I(){return(0,l.useContext)(O)}O.displayName="PopoverGroupContext";let R=(0,l.createContext)(null);function D(e,t){return(0,u.E)(t.type,T,e,t)}R.displayName="PopoverPanelContext";let F=(0,a.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,c.M)()}`,o=`headlessui-popover-panel-${(0,c.M)()}`,s=(0,l.useRef)(null),f=(0,i.T)(t,(0,i.h)(e=>{s.current=e})),v=(0,l.useReducer)(D,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:m,button:h,panel:P,beforePanelSentinel:w,afterPanelSentinel:S},T]=v,x=(0,y.i)(null!=(n=s.current)?n:h);(0,l.useEffect)(()=>T({type:3,buttonId:r}),[r,T]),(0,l.useEffect)(()=>T({type:5,panelId:o}),[o,T]);let C=(0,l.useMemo)(()=>{if(!h||!P)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(h))^Number(null==e?void 0:e.contains(P)))return!0;return!1},[h,P]),O=(0,l.useMemo)(()=>({buttonId:r,panelId:o,close:()=>T({type:1})}),[r,o,T]),R=I(),F=null==R?void 0:R.registerPopover,M=(0,E.z)(()=>{var e;return null!=(e=null==R?void 0:R.isFocusWithinPopoverGroup())?e:(null==x?void 0:x.activeElement)&&((null==h?void 0:h.contains(x.activeElement))||(null==P?void 0:P.contains(x.activeElement)))});(0,l.useEffect)(()=>null==F?void 0:F(O),[F,O]),(0,g.O)(null==x?void 0:x.defaultView,"focus",e=>{var t,n,r,o;0===m&&(M()||!h||!P||null!=(n=null==(t=w.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=S.current)?void 0:r.contains)&&o.call(r,e.target)||T({type:1}))},!0),(0,b.O)([h,P],(e,t)=>{T({type:1}),(0,p.sP)(t,p.tJ.Loose)||(e.preventDefault(),null==h||h.focus())},0===m);let k=(0,E.z)(e=>{T({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:h:h;null==t||t.focus()}),N=(0,l.useMemo)(()=>({close:k,isPortalled:C}),[k,C]),z=(0,l.useMemo)(()=>({open:0===m,close:k}),[m,k]);return l.createElement(j.Provider,{value:v},l.createElement(A.Provider,{value:N},l.createElement(d.up,{value:(0,u.E)(m,{0:d.ZM.Open,1:d.ZM.Closed})},(0,a.sY)({ourProps:{ref:f},theirProps:e,slot:z,defaultTag:"div",name:"Popover"}))))}),M=(0,a.yV)(function(e,t){let[n,r]=x("Popover.Button"),{isPortalled:o}=C("Popover.Button"),d=(0,l.useRef)(null),b=`headlessui-focus-sentinel-${(0,c.M)()}`,m=I(),g=null==m?void 0:m.closeOthers,w=(0,l.useContext)(R),S=null!==w&&w===n.panelId,T=(0,i.T)(d,t,S?null:e=>r({type:2,button:e})),j=(0,i.T)(d,t),A=(0,y.i)(d),O=(0,E.z)(e=>{var t,o,l;if(S){if(1===n.popoverState)return;switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0});break;case s.R.Escape:if(0!==n.popoverState)return null==g?void 0:g(n.buttonId);if(!d.current||(null==A?void 0:A.activeElement)&&!d.current.contains(A.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),D=(0,E.z)(e=>{S||e.key===s.R.Space&&e.preventDefault()}),F=(0,E.z)(t=>{var o,l;(0,f.P)(t.currentTarget)||e.disabled||(S?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0}),null==(l=n.button)||l.focus()))}),M=(0,E.z)(e=>{e.preventDefault(),e.stopPropagation()}),k=0===n.popoverState,N=(0,l.useMemo)(()=>({open:k}),[k]),z=(0,v.f)(e,d),B=S?{ref:j,type:z,onKeyDown:O,onClick:F}:{ref:T,id:n.buttonId,type:z,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:O,onKeyUp:D,onClick:F,onMouseDown:M},Y=(0,P.l)(),V=(0,E.z)(()=>{let e=n.panel;e&&(0,u.E)(Y.current,{[P.N.Forwards]:()=>(0,p.jA)(e,p.TO.First),[P.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return l.createElement(l.Fragment,null,(0,a.sY)({ourProps:B,theirProps:e,slot:N,defaultTag:"button",name:"Popover.Button"}),k&&!S&&o&&l.createElement(h._,{id:b,features:h.A.Focusable,as:"button",type:"button",onFocus:V}))}),k=a.AN.RenderStrategy|a.AN.Static,N=(0,a.yV)(function(e,t){let[{popoverState:n},r]=x("Popover.Overlay"),o=(0,i.T)(t),u=`headlessui-popover-overlay-${(0,c.M)()}`,s=(0,d.oJ)(),p=null!==s?s===d.ZM.Open:0===n,v=(0,E.z)(e=>{if((0,f.P)(e.currentTarget))return e.preventDefault();r({type:1})}),b=(0,l.useMemo)(()=>({open:0===n}),[n]);return(0,a.sY)({ourProps:{ref:o,id:u,"aria-hidden":!0,onClick:v},theirProps:e,slot:b,defaultTag:"div",features:k,visible:p,name:"Popover.Overlay"})}),z=a.AN.RenderStrategy|a.AN.Static,B=Object.assign(F,{Button:M,Overlay:N,Panel:(0,a.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,f]=x("Popover.Panel"),{close:v,isPortalled:b}=C("Popover.Panel"),m=`headlessui-focus-sentinel-before-${(0,c.M)()}`,g=`headlessui-focus-sentinel-after-${(0,c.M)()}`,w=(0,l.useRef)(null),S=(0,i.T)(w,t,e=>{f({type:4,panel:e})}),T=(0,y.i)(w),j=(0,d.oJ)(),A=null!==j?j===d.ZM.Open:0===o.popoverState,O=(0,E.z)(e=>{var t;if(e.key===s.R.Escape){if(0!==o.popoverState||!w.current||(null==T?void 0:T.activeElement)&&!w.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),f({type:1}),null==(t=o.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&f({type:4,panel:null})},[o.popoverState,e.unmount,e.static,f]),(0,l.useEffect)(()=>{if(!n||0!==o.popoverState||!w.current)return;let e=null==T?void 0:T.activeElement;w.current.contains(e)||(0,p.jA)(w.current,p.TO.First)},[n,w,o.popoverState]);let I=(0,l.useMemo)(()=>({open:0===o.popoverState,close:v}),[o,v]),D={ref:S,id:o.panelId,onKeyDown:O,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,u;let a=e.relatedTarget;!a||!w.current||null!=(t=w.current)&&t.contains(a)||(f({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,a))||(null==(u=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:u.call(l,a)))&&a.focus({preventScroll:!0}))}:void 0,tabIndex:-1},F=(0,P.l)(),M=(0,E.z)(()=>{let e=w.current;e&&(0,u.E)(F.current,{[P.N.Forwards]:()=>{(0,p.jA)(e,p.TO.First)},[P.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),k=(0,E.z)(()=>{let e=w.current;e&&(0,u.E)(F.current,{[P.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,p.GO)(),l=r.indexOf(o.button),u=r.slice(0,l+1),a=[...r.slice(l+1),...u];for(let r of a.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=a.indexOf(r);-1!==e&&a.splice(e,1)}(0,p.jA)(a,p.TO.First,!1)},[P.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return l.createElement(R.Provider,{value:o.panelId},A&&b&&l.createElement(h._,{id:m,ref:o.beforePanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:M}),(0,a.sY)({ourProps:D,theirProps:r,slot:I,defaultTag:"div",features:z,visible:A,name:"Popover.Panel"}),A&&b&&l.createElement(h._,{id:g,ref:o.afterPanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:k}))}),Group:(0,a.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,i.T)(n,t),[o,u]=(0,l.useState)([]),c=(0,E.z)(e=>{u(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),s=(0,E.z)(e=>(u(t=>[...t,e]),()=>c(e))),f=(0,E.z)(()=>{var e;let t=(0,m.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),p=(0,E.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),d=(0,l.useMemo)(()=>({registerPopover:s,unregisterPopover:c,isFocusWithinPopoverGroup:f,closeOthers:p}),[s,c,f,p]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(O.Provider,{value:d},(0,a.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},15750:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(92379),o=n(22088);function l(e,t,n,l){let u=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)},[e,t,l])}},24980:function(e,t,n){"use strict";let r;n.d(t,{N:function(){return u},l:function(){return a}});var o=n(92379),l=n(22088),u=((r=u||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function a(){var e,t;let n,r=(0,o.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,l.E)(t),(0,o.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},35165:function(e,t,n){"use strict";let r;n.d(t,{A:function(){return l},_:function(){return u}});var o=n(97757),l=((r=l||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let u=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})}}]);
//# sourceMappingURL=8794-b2b0f487fd7ecb3b.js.map