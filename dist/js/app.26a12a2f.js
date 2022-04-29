(function(){"use strict";var e={9223:function(e,t,n){var r=n(9242),a=n(3396);const i={class:"header"},o={class:"header__container container"};function s(e,t,n,r,s,c){const u=(0,a.up)("PageNavigation"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("header",i,[(0,a._)("div",o,[(0,a.Wm)(u)])]),(0,a.Wm)(l)],64)}const c={class:"page-navigation"},u={class:"page-navigation__list"},l={class:"page-navigation__item"},d=(0,a.Uk)(" Главная "),f={class:"page-navigation__item"},m=(0,a.Uk)(" Системы хранения "),v={class:"page-navigation__item"},p=(0,a.Uk)(" Комплекты стеллажных систем ");function g(e,t,n,r,i,o){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",c,[(0,a._)("ul",u,[(0,a._)("li",l,[(0,a.Wm)(s,{to:"/",class:"page-navigation__link"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("li",f,[(0,a.Wm)(s,{to:"/storage-systems",class:"page-navigation__link"},{default:(0,a.w5)((()=>[m])),_:1})]),(0,a._)("li",v,[(0,a.Wm)(s,{to:"/shelving-systems",class:"page-navigation__link"},{default:(0,a.w5)((()=>[p])),_:1})])])])}var h={name:"PageNavigation"},y=n(89);const _=(0,y.Z)(h,[["render",g]]);var b=_,w={components:{PageNavigation:b}};const I=(0,y.Z)(w,[["render",s]]);var S=I,k=n(678);const O=(0,a._)("div",{class:"container"},[(0,a._)("h1",{class:"section-title"},"Главная")],-1),j=[O];function C(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("main",null,j)}var N={name:"HomePage"};const M=(0,y.Z)(N,[["render",C]]);var P=M;const T=[{path:"/",name:"home",component:P},{path:"/storage-systems",name:"storage-systems",component:()=>n.e(81).then(n.bind(n,5081))},{path:"/shelving-systems",name:"shelving-systems",component:()=>n.e(676).then(n.bind(n,676))}],E=(0,k.p7)({history:(0,k.PO)("/vuejs-test/"),routes:T});var F=E,A=n(65),x=(n(6699),n(6265)),D=n.n(x),L={state(){return{items:[],selectedSort:"",selectedMaterial:"",sortOptions:[{value:"",name:"По умолчанию"},{value:"up",name:"Цена по возрастанию"},{value:"down",name:"Цена по убыванию"}],materials:[],favoritedItems:JSON.parse(localStorage.getItem("favorited"))||[],cart:JSON.parse(localStorage.getItem("cart"))||[]}},getters:{sortedItems(e){return[...e.items].sort(((t,n)=>{switch(e.selectedSort){case"up":return t.price.current_price-n.price.current_price;case"down":return n.price.current_price-t.price.current_price;default:return 0}}))},sortedAndFilteredItems(e,t){return t.sortedItems.filter((n=>{if(""!==e.selectedMaterial){const t=e.materials.find((t=>t.name===e.selectedMaterial));return t.id==n.material}return t.sortedItems}))}},mutations:{setItems(e,t){e.items=t.map((t=>{const n=e.favoritedItems.map((e=>e.id));return n.includes(t.id)?{...t,favorited:!0}:{...t,favorited:!1}}))},setSelectedSort(e,t){e.selectedSort=t},setSelectedMaterial(e,t){e.selectedMaterial=t},setMaterials(e,t){e.materials=t},setFavoritedItems(e,t){t.favorited||e.favoritedItems.includes(t)?e.favoritedItems=e.favoritedItems.filter((e=>e.id!==t.id)):e.favoritedItems.push(t),localStorage.setItem("favorited",JSON.stringify(e.favoritedItems))},setFavoritedItem(e,t){e.items=e.items.map((e=>e.id===t?{...e,favorited:!e.favorited}:e))},setCart(e,t){e.cart.push(t),localStorage.setItem("cart",JSON.stringify(e.cart))}},actions:{async fetchItems({commit:e}){try{const t=await D().get("/database/items.json");e("setItems",t.data)}catch(t){alert(t)}},async fetchMaterials({commit:e}){try{const t=await D().get("/database/materials.json");e("setMaterials",t.data)}catch(t){alert(t)}},addToFavorited({commit:e},t){e("setFavoritedItems",t)},addToCart({commit:e},t){e("setCart",t)},toggleFavoritedItem({commit:e},t){e("setFavoritedItem",t)}},namespaced:!0},W=(0,A.MT)({state:{},getters:{},mutations:{},actions:{},modules:{items:L}});(0,r.ri)(S).use(W).use(F).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],i=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{81:"1b887919",676:"94b306ef"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".0531594b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-test:";n.l=function(r,a,i,o){if(e[r])e[r].push(a);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[a];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vuejs-test/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===e||i===t)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return a();e(r,s,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={676:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvuejs_test"]=self["webpackChunkvuejs_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9223)}));r=n.O(r)})();
//# sourceMappingURL=app.26a12a2f.js.map