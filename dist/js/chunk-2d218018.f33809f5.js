(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d218018"],{c8c0:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container mx-auto py-20"},[n("md-content",{staticClass:"p-3 md-elevation-7 mb-3"},[t._v(" "+t._s(t.article)+" ")])],1)},i=[],c=n("cebe"),o=n.n(c),s=n("a002"),l=n.n(s),r={name:"articleDetails",data:function(){return{article:{}}},watch:{$route:function(){this.loadData()}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;l.a.getItem("article_"+this.$route.params.id).then((function(a){o()({method:"GET",url:a.url}).then((function(n){a.details=n.data,t.article=a}))}))}}},u=r,d=n("2877"),h=Object(d["a"])(u,e,i,!1,null,"4375d9d6",null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d218018.f33809f5.js.map