"use strict";(self["webpackChunkvuejs_test"]=self["webpackChunkvuejs_test"]||[]).push([[676],{676:function(e,t,s){s.r(t),s.d(t,{default:function(){return he}});var a=s(3396);const i={class:"shelving"},l={class:"shelving__container container"},d=(0,a._)("h1",{class:"shelving__title section-title"}," Комплекты стеллажных систем ",-1),r={class:"shelving__filters"};function o(e,t,s,o,n,c){const m=(0,a.up)("ItemsSorter"),u=(0,a.up)("ItemsFilter"),v=(0,a.up)("CardList");return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("section",i,[(0,a._)("div",l,[d,(0,a._)("div",r,[(0,a.Wm)(m,{class:"shelving__filter",options:e.sortOptions,modelValue:e.selectedSort,"onUpdate:modelValue":e.setSelectedSort},null,8,["options","modelValue","onUpdate:modelValue"]),(0,a.Wm)(u,{class:"shelving__filter",options:e.materials,modelValue:e.selectedMaterial,"onUpdate:modelValue":e.setSelectedMaterial},null,8,["options","modelValue","onUpdate:modelValue"])]),(0,a.Wm)(v,{items:e.sortedAndFilteredItems},null,8,["items"])])])])}const n={class:"cards"};function c(e,t,s,i,l,d){const r=(0,a.up)("CardItem");return(0,a.wg)(),(0,a.iD)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.items,(e=>((0,a.wg)(),(0,a.j4)(r,{key:e.id,item:e},null,8,["item"])))),128))])}var m=s(7139);const u={class:"card"},v={key:0,class:"card__label"},C={class:"card__preview"},p=["src","alt"],_={class:"card__info"},g={class:"card__code"},h={class:"card__name"},w={class:"card__price"},f={class:"card__current-price"},L={class:"card__actions"};function b(e,t,s,i,l,d){const r=(0,a.up)("AddCart"),o=(0,a.up)("AddFavorited");return(0,a.wg)(),(0,a.iD)("article",u,[s.item.price.old_price?((0,a.wg)(),(0,a.iD)("span",v,"Скидка")):(0,a.kq)("",!0),(0,a._)("div",C,[(0,a._)("img",{src:s.item.image.url,alt:s.item.name},null,8,p)]),(0,a._)("div",_,[(0,a._)("div",g,(0,m.zw)(s.item.code),1),(0,a._)("div",h,(0,m.zw)(s.item.name),1),(0,a._)("div",w,[(0,a._)("div",{class:(0,m.C_)(["card__old-price",s.item.price.old_price?"mr":null])},(0,m.zw)(d.getTruncNumber(s.item.price.old_price)),3),(0,a._)("div",f,(0,m.zw)(d.getTruncNumber(s.item.price.current_price)),1)]),(0,a._)("div",L,[(0,a.Wm)(r,{class:"card__btn card__btn--cart",onClick:t[0]||(t[0]=e=>d.addToCartHandler(s.item)),isActive:l.isAddedToCart},null,8,["isActive"]),(0,a.Wm)(o,{class:"card__btn card__btn--favorite",isFavorited:s.item.favorited,onClick:t[1]||(t[1]=e=>d.addToFavoritedHandler(s.item))},null,8,["isFavorited"])])])])}const I=e=>((0,a.dD)("data-v-bdb46f94"),e=e(),(0,a.Cn)(),e),A={type:"button",class:"btn"},F=["fill"],M=I((()=>(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.0979 1.44916e-05C12.795 0 11.9551 0.155217 10.9924 0.626465C10.6359 0.800937 10.3015 1.01105 9.99095 1.25618C9.69235 1.0248 9.37131 0.824326 9.0296 0.655321C8.04816 0.169898 7.16523 0 5.90907 0C2.54477 0 0.0999756 2.78754 0.0999756 6.40789C0.0999756 9.14198 1.62442 11.7831 4.46393 14.3369C5.95438 15.6774 7.85737 17.004 9.22022 17.7097L9.99998 18.1135L10.7797 17.7097C12.1426 17.004 14.0456 15.6774 15.536 14.3369C18.3755 11.7831 19.9 9.14198 19.9 6.40789C19.9 2.82586 17.4321 0.0138225 14.0979 1.44916e-05ZM18.1 6.40793C18.1 8.54995 16.8276 10.7544 14.3324 12.9986C12.972 14.2221 11.2231 15.4449 10 16.0864C8.77695 15.4449 7.02806 14.2221 5.66767 12.9986C3.17246 10.7544 1.90002 8.54995 1.90002 6.40793C1.90002 3.73298 3.5953 1.80004 5.90911 1.80004C6.90787 1.80004 7.52333 1.91847 8.23164 2.2688C8.65002 2.47573 9.01981 2.74897 9.3399 3.09043L10.0021 3.79687L10.6583 3.08483C10.9856 2.72969 11.3608 2.45023 11.7837 2.24322C12.4713 1.90668 13.0483 1.80004 14.0942 1.80004C16.3794 1.80952 18.1 3.7701 18.1 6.40793Z"},null,-1))),y=[M];function D(e,t,s,i,l,d){return(0,a.wg)(),(0,a.iD)("button",A,[((0,a.wg)(),(0,a.iD)("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:s.isFavorited?"red":"#000000",xmlns:"http://www.w3.org/2000/svg"},y,8,F))])}var S={name:"AddFavorited",props:{isFavorited:{type:Boolean}}},T=s(89);const Z=(0,T.Z)(S,[["render",D],["__scopeId","data-v-bdb46f94"]]);var V=Z;const k=e=>((0,a.dD)("data-v-0258ee27"),e=e(),(0,a.Cn)(),e),H=["disabled"],O={key:0,width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x=k((()=>(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.66412 1.80229C3.50428 1.80194 3.3502 1.82003 3.20378 1.85443C3.00307 1.41204 2.73794 1.01515 2.4364 0.713604C1.92459 0.201799 1.1174 0 0 0V1.8C0.682603 1.8 1.07541 1.8982 1.1636 1.9864C1.50378 2.32657 1.8 3.01776 1.8 3.6L1.80905 3.72728L2.69093 9.90046C1.21532 9.97702 0.0721779 11.1229 0.00110572 12.5554L0 13.5C0.0871391 14.9795 1.22648 16.1177 2.64892 16.1985L2.85323 16.1989C3.22356 17.2481 4.22398 18 5.4 18C6.5756 18 7.57571 17.2487 7.94636 16.2H10.0536C10.4243 17.2487 11.4244 18 12.6 18C14.0912 18 15.3 16.7912 15.3 15.3C15.3 13.8088 14.0912 12.6 12.6 12.6C11.4244 12.6 10.4243 13.3513 10.0536 14.4H7.94636C7.57571 13.3513 6.5756 12.6 5.4 12.6C4.2244 12.6 3.22429 13.3513 2.85364 14.4H2.7C2.24101 14.3725 1.82928 13.9612 1.79838 13.4461L1.8 12.6C1.82427 12.1332 2.23318 11.7243 2.7446 11.6989L4.52132 11.6993L4.5342 11.7H13.6052L13.738 11.6578C14.4204 11.4413 14.9667 10.9275 15.2253 10.2623L15.3201 10.0746L15.6282 9.46429C15.9469 8.83253 16.2656 8.19968 16.5762 7.58142C17.3369 6.06697 17.8153 5.1045 17.9213 4.86815C18.4654 3.65441 17.3632 2.72022 16.2366 2.70032L3.66412 1.80229ZM13.2924 9.89997H4.60154C4.54375 9.88391 4.49972 9.83495 4.4911 9.77399L3.60919 3.60063L16.104 4.4954C15.8854 4.94126 15.4879 5.73762 14.9676 6.77345L14.9546 6.79941C14.6576 7.39065 14.3393 8.02262 14.0211 8.65354L13.7134 9.26309L13.5968 9.49393L13.5529 9.59597C13.5058 9.72695 13.4125 9.83459 13.2924 9.89997ZM12.6 16.1999C13.097 16.1999 13.5 15.797 13.5 15.2999C13.5 14.8029 13.097 14.3999 12.6 14.3999C12.1029 14.3999 11.7 14.8029 11.7 15.2999C11.7 15.797 12.1029 16.1999 12.6 16.1999ZM6.3 15.2999C6.3 15.797 5.89706 16.1999 5.4 16.1999C4.90294 16.1999 4.5 15.797 4.5 15.2999C4.5 14.8029 4.90294 14.3999 5.4 14.3999C5.89706 14.3999 6.3 14.8029 6.3 15.2999Z",fill:"black"},null,-1))),z=[x],B={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=k((()=>(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.99997 19.8999C4.53235 19.8999 0.099968 15.4676 0.099968 9.99994C0.099968 4.53233 4.53235 0.0999451 9.99997 0.0999451C15.4676 0.0999451 19.9 4.53233 19.9 9.99994C19.9 15.4676 15.4676 19.8999 9.99997 19.8999ZM9.99997 18.0999C14.4735 18.0999 18.1 14.4734 18.1 9.99994C18.1 5.52644 14.4735 1.89994 9.99997 1.89994C5.52646 1.89994 1.89997 5.52644 1.89997 9.99994C1.89997 14.4734 5.52646 18.0999 9.99997 18.0999ZM12.9636 6.66355L8.19997 11.4272L6.13637 9.36355L4.86358 10.6363L8.19997 13.9727L14.2364 7.93635L12.9636 6.66355Z",fill:"#27AE60"},null,-1))),j=[W];function U(e,t,s,i,l,d){return(0,a.wg)(),(0,a.iD)("button",{type:"button",class:"btn",disabled:s.isActive},[s.isActive?((0,a.wg)(),(0,a.iD)("svg",B,j)):((0,a.wg)(),(0,a.iD)("svg",O,z))],8,H)}var K={name:"AddCart",props:{isActive:{type:Boolean}}};const N=(0,T.Z)(K,[["render",U],["__scopeId","data-v-0258ee27"]]);var Y=N,q=s(65),$={name:"CardItem",components:{AddFavorited:V,AddCart:Y},props:{item:{type:Object}},data(){return{isAddedToCart:!1}},methods:{...(0,q.nv)({addToFavorited:"items/addToFavorited",addToCart:"items/addToCart",toggleFavoritedItem:"items/toggleFavoritedItem"}),getTruncNumber(e){return e?Math.trunc(e):null},addToFavoritedHandler(e){this.isFavorited=!this.isFavorited,this.addToFavorited(e),this.toggleFavoritedItem(e.id)},addToCartHandler(e){this.isAddedToCart=!this.isAddedToCart,this.addToCart(e),setTimeout((()=>{this.isAddedToCart=!this.isAddedToCart}),500)}}};const E=(0,T.Z)($,[["render",b],["__scopeId","data-v-028f8aa0"]]);var P=E,G={name:"CardList",components:{CardItem:P},props:{items:{type:Array,required:!0}}};const J=(0,T.Z)(G,[["render",c],["__scopeId","data-v-1d4390b0"]]);var Q=J;const R=e=>((0,a.dD)("data-v-47f3beec"),e=e(),(0,a.Cn)(),e),X={class:"select-control"},ee=R((()=>(0,a._)("span",{class:"select-control__title"},"Сортировать по:",-1))),te=["value"],se=["value"];function ae(e,t,s,i,l,d){return(0,a.wg)(),(0,a.iD)("label",X,[ee,(0,a._)("select",{value:s.modelValue,onChange:t[0]||(t[0]=(...e)=>d.changeOptions&&d.changeOptions(...e)),class:"select-control__select"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.options,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.value,value:e.value},(0,m.zw)(e.name),9,se)))),128))],40,te)])}var ie={name:"ItemsSorter",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""}},methods:{changeOptions(e){this.$emit("update:modelValue",e.target.value)}}};const le=(0,T.Z)(ie,[["render",ae],["__scopeId","data-v-47f3beec"]]);var de=le;const re=e=>((0,a.dD)("data-v-07e200ec"),e=e(),(0,a.Cn)(),e),oe={class:"select-control"},ne=re((()=>(0,a._)("span",{class:"select-control__title"},"Материал:",-1))),ce=["value"],me=["value"];function ue(e,t,s,i,l,d){return(0,a.wg)(),(0,a.iD)("label",oe,[ne,(0,a._)("select",{value:s.modelValue,onChange:t[0]||(t[0]=(...e)=>d.changeOptions&&d.changeOptions(...e)),class:"select-control__select"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.options,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:""!==e.value?e.name:""},(0,m.zw)(e.name),9,me)))),128))],40,ce)])}var ve={name:"ItemsFilter",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""}},methods:{changeOptions(e){this.$emit("update:modelValue",e.target.value)}}};const Ce=(0,T.Z)(ve,[["render",ue],["__scopeId","data-v-07e200ec"]]);var pe=Ce,_e={name:"ShelvingSystemsPage",components:{CardList:Q,ItemsSorter:de,ItemsFilter:pe},methods:{...(0,q.OI)({setItems:"items/setItems",setSelectedSort:"items/setSelectedSort",setSelectedMaterial:"items/setSelectedMaterial",setMaterials:"items/setMaterials"}),...(0,q.nv)({fetchItems:"items/fetchItems",fetchMaterials:"items/fetchMaterials"})},mounted(){this.fetchItems(),this.fetchMaterials()},computed:{...(0,q.rn)({items:e=>e.items.items,sortOptions:e=>e.items.sortOptions,materials:e=>e.items.materials,selectedSort:e=>e.items.selectedSort,selectedMaterial:e=>e.items.selectedMaterial}),...(0,q.Se)({sortedItems:"items/sortedItems",sortedAndFilteredItems:"items/sortedAndFilteredItems"})}};const ge=(0,T.Z)(_e,[["render",o]]);var he=ge}}]);
//# sourceMappingURL=676.94b306ef.js.map