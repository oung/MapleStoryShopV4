(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76a072c9"],{3016:function(t,a,e){},5651:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"py-4"},[e("div",{staticClass:"table-responsive-sm mb-3"},[t.orders.length?e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.sortOrder,(function(a){return e("tr",{key:a.id,class:{"text-secondary":!a.is_paid}},[e("td",{staticClass:"align-middle"},[t._v(" "+t._s(t._f("date")(a.create_at))+" ")]),e("td",{staticClass:"align-middle"},[a.user?e("span",{domProps:{textContent:t._s(a.user.email)}}):t._e()]),e("td",{staticClass:"align-middle"},[e("ul",{staticClass:"list-unstyled mt-auto mb-auto"},t._l(a.products,(function(a,s){return e("li",{key:s},[e("p",{staticClass:"text-nowrap m-0 p-0"},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.qty)+" "+t._s(a.product.unit)+" ")])])})),0)]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(a.total))+" ")]),e("td",{staticClass:"align-middle"},[a.is_paid?e("span",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-danger"},[t._v("尚未啟用")])])])})),0)]):t._e()]),e("Pagination",{attrs:{"child-paginations":t.pagination},on:{changeCurrentPage:t.getOrders}})],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{staticClass:"text-nowrap"},[t._v(" 購買時間 ")]),e("th",{staticClass:"text-nowrap"},[t._v(" Email ")]),e("th",{staticClass:"text-nowrap"},[t._v(" 購買款項 ")]),e("th",{staticClass:"text-nowrap"},[t._v(" 應付金額 ")]),e("th",{staticClass:"text-nowrap"},[t._v(" 是否付款 ")])])])}],i=e("1da1"),r=(e("96cf"),e("d722")),c=e("608c"),l={components:{Pagination:c["a"]},data:function(){return{orders:[],pagination:{}}},computed:{sortOrder:function(){var t=this,a=[];return t.orders.length&&(a=t.orders.sort((function(t,a){var e=t.is_paid?1:0,s=a.is_paid?1:0;return s-e}))),a}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=arguments,a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,n=a,n.$store.dispatch("global/updateLoading",!0),e.next=5,Object(r["h"])(s);case 5:i=e.sent,n.$store.dispatch("global/updateLoading",!1),n.orders=i.data.orders,n.pagination=i.data.pagination;case 9:case"end":return e.stop()}}),e)})))()}}},o=l,u=(e("e5f6"),e("2877")),d=Object(u["a"])(o,s,n,!1,null,"535d59e3",null);a["default"]=d.exports},"608c":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.childPaginations.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getCurrentPage(t.childPaginations.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.childPaginations.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.childPaginations.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getCurrentPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.childPaginations.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getCurrentPage(t.childPaginations.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],i={name:"Product",props:{childPaginations:{type:Object,default:function(){return{}}}},methods:{getCurrentPage:function(t){this.$emit("changeCurrentPage",t)}}},r=i,c=(e("9d8f"),e("2877")),l=Object(c["a"])(r,s,n,!1,null,"2d1cf7f4",null);a["a"]=l.exports},"9d8f":function(t,a,e){"use strict";e("3016")},e5f6:function(t,a,e){"use strict";e("f73e")},f73e:function(t,a,e){}}]);
//# sourceMappingURL=chunk-76a072c9.afa34da2.js.map