(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213c7a"],{adab:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mx-auto py-24"},[e("div",{staticClass:"grid grid-cols-3 gap-6"},t._l(t.docListData,(function(a,s){return e("div",{key:s,staticClass:"md-elevation-2"},[e("md-toolbar",{attrs:{"md-elevation":1}},[e("span",{staticClass:"md-title"},[t._v(t._s(a.title))])]),e("md-list",t._l(a.children,(function(a,s){return e("md-list-item",{key:s},[e("md-avatar",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.pic,expression:"item.pic"}],staticClass:"rounded-sm object-cover"})]),e("span",{staticClass:"md-list-item-text"},[t._v(t._s(a.title))]),e("md-button",{staticClass:"md-icon-button md-list-action",attrs:{href:a.content.url,target:"_blank"}},[e("i",{staticClass:"icon-fenxiang"}),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("查看")])],1)],1)})),1)],1)})),0)])},i=[],n=e("5530"),c=e("5880"),o={name:"doc",data:function(){return{}},mounted:function(){document.documentElement.scrollTop=0,this.loadData()},methods:Object(n["a"])({},Object(c["mapActions"])(["docList"]),{loadData:function(){var t={sort:"-created_at"};this.docList({params:t})}}),computed:Object(n["a"])({},Object(c["mapGetters"])(["docListData"]))},d=o,l=e("2877"),r=Object(l["a"])(d,s,i,!1,null,"c3866eba",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d213c7a.cfa3d2ed.js.map