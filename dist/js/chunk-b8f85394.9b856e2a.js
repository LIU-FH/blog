(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8f85394"],{"0bf8":function(t,a,e){"use strict";var i=e("75e8"),s=e.n(i);s.a},"75e8":function(t,a,e){},8398:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-toolbar",{staticClass:"bg-white",staticStyle:{position:"fixed","z-index":"8"},attrs:{"md-elevation":"1"}},[e("div",{staticClass:"w-full flex justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"mr-5 ml-1"},[e("md-button",{staticClass:"md-icon-button",attrs:{to:"/"}},[e("i",{staticClass:"icon-shouye text-lg"})])],1),e("md-field",[e("label",[t._v("Search")]),e("md-input",{model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}})],1),e("md-button",{staticClass:"md-raised",on:{click:t.onSearch}},[t._v("搜索")])],1),e("div",{staticClass:"flex items-center"},[e("md-button",{staticClass:"md-raised",attrs:{href:"http://assets.liufh.com",target:"_blank"}},[t._v("资源管理器")]),e("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){return t.showEdit()}}},[t._v("新建")])],1)])]),e("div",{staticClass:"w-screen h-screen flex flex-col"},[e("md-toolbar",{staticClass:"flex-none"},[e("h3",{staticClass:"md-title"},[t._v("博文")])]),e("md-table",{staticClass:"flex-1 max-height-none",attrs:{"md-sort":"name","md-sort-order":"asc"},scopedSlots:t._u([{key:"md-table-row",fn:function(a){var i=a.item;return e("md-table-row",{},[e("md-table-cell",{attrs:{"md-label":"ID","md-sort-by":"id"}},[t._v(t._s(i.id))]),e("md-table-cell",{attrs:{"md-label":"分类"}},[t._v(t._s(t.types[i.type]))]),e("md-table-cell",{attrs:{"md-label":"标题"}},[t._v(t._s(i.title))]),e("md-table-cell",{attrs:{"md-label":"展示图"}},[e("div",{staticClass:"bg-local bg-cover bg-center bg-no-repeat h-20 w-32 rounded",style:i.pic?"background-image: url("+i.pic+")":""})]),e("md-table-cell",{attrs:{"md-label":"内容"}},[e("code",[t._v(t._s(i.tags.join(",")))])]),e("md-table-cell",{attrs:{"md-label":"描述"}},[t._v(t._s(i.desc))]),e("md-table-cell",{attrs:{"md-label":"内容"}},[t._v(t._s(i.content))]),e("md-table-cell",{attrs:{"md-label":"状态","md-sort-by":"status"}},[t._v(" "+t._s(i.status?"开启":"关闭")+" ")]),e("md-table-cell",{attrs:{"md-label":"更新时间","md-sort-by":"updated_at"}},[t._v(t._s(i.updated_at))]),e("md-table-cell",{attrs:{"md-label":"操作"}},[e("md-button",{staticClass:"md-icon-button",on:{click:function(a){return t.showEdit(i)}}},[e("i",{staticClass:"icon-bianji"}),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("编辑")])],1),e("md-button",{staticClass:"md-icon-button",on:{click:function(a){return t.del(i.id)}}},[e("i",{staticClass:"icon-shanchu"}),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("删除")])],1)],1)],1)}}]),model:{value:t.list,callback:function(a){t.list=a},expression:"list"}})],1),e("edit-article",{ref:"editArticle"})],1)},s=[],l=e("5530"),o=e("5880"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(a){t.showDialog=a},"update:md-active":function(a){t.showDialog=a}}},[e("md-dialog-title",{staticClass:"text-center"},[t._v("文章")]),e("md-dialog-content",{staticClass:"md-scrollbar",staticStyle:{width:"550px","padding-bottom":"0"}},[e("md-field",[e("label",[t._v("标题")]),e("md-input",{model:{value:t.fromData.title,callback:function(a){t.$set(t.fromData,"title",a)},expression:"fromData.title"}})],1),e("md-field",[e("md-select",{attrs:{placeholder:"类型"},model:{value:t.fromData.type,callback:function(a){t.$set(t.fromData,"type",a)},expression:"fromData.type"}},[e("md-option",{attrs:{value:0}},[t._v("博文")]),e("md-option",{attrs:{value:1}},[t._v("收藏")]),e("md-option",{attrs:{value:2}},[t._v("文档")]),e("md-option",{attrs:{value:3}},[t._v("速查表")])],1)],1),t._l(t.contentArr(t.fromData.type),(function(a,i){return e("md-field",{key:i},[e("label",[t._v(t._s(a.name))]),e("md-input",{model:{value:t.fromData.content[a.key],callback:function(e){t.$set(t.fromData.content,a.key,e)},expression:"fromData.content[item.key]"}})],1)})),e("md-field",[e("label",[t._v("展示图")]),e("md-input",{model:{value:t.fromData.pic,callback:function(a){t.$set(t.fromData,"pic",a)},expression:"fromData.pic"}})],1),e("md-chips",{attrs:{"md-limit":5,"md-placeholder":"标签"},model:{value:t.fromData.tags,callback:function(a){t.$set(t.fromData,"tags",a)},expression:"fromData.tags"}}),e("md-field",[e("label",[t._v("描述")]),e("md-input",{model:{value:t.fromData.desc,callback:function(a){t.$set(t.fromData,"desc",a)},expression:"fromData.desc"}})],1)],2),e("md-dialog-actions",[e("div",{staticClass:"mb-3 flex items-center justify-between w-full"},[e("md-switch",{attrs:{value:1},model:{value:t.fromData.status,callback:function(a){t.$set(t.fromData,"status",a)},expression:"fromData.status"}},[t._v("是否发布")]),e("div",[e("md-button",{staticClass:"md-primary",on:{click:function(a){t.showDialog=!1}}},[t._v("关闭")]),e("md-button",{staticClass:"md-primary",on:{click:t.doSubmit}},[t._v("保存")])],1)],1)])],1),e("div",{on:{click:function(a){t.showDialog=!0}}},[t._t("default")],2)],1)},n=[],d=e("ade3"),r={name:"editArticle",data:function(){return{showDialog:!1,value:"",fromData:{id:0,title:"",type:0,pic:"",tags:[],desc:"",content:{},status:1},contentKeys:[[{key:"url",name:"地址"}],[{key:"github",name:"GitHub"},{key:"website",name:"官网"},{key:"example",name:"用例"}],[{key:"url",name:"地址"}],[{key:"url",name:"地址"}]]}},watch:{articleAddData:function(t){this.showDialog=!1},articleEditData:function(t){this.showDialog=!1}},methods:Object(l["a"])({},Object(o["mapActions"])(["articleAdd","articleEdit"]),{doSubmit:function(){this.fromData.id?this.articleEdit({params:this.fromData,path:{id:this.fromData.id}}):this.articleAdd({params:this.fromData})},showEdit:function(t){t||(t=JSON.parse(JSON.stringify(this.fromData)));var a=this.contentArr(t.type);t.content||(t.content={});for(var e=0;e<a.length;e++)t.content&&t.content[a[e].key]||Object.assign(t.content,Object(d["a"])({},a[e].key,""));this.fromData=t,this.showDialog=!0},contentArr:function(t){return t>-1?this.contentKeys[t]:[]}}),computed:Object(l["a"])({},Object(o["mapGetters"])(["articleAddData","articleEditData"]))},m=r,u=e("2877"),f=Object(u["a"])(m,c,n,!1,null,"096d90af",null),b=f.exports,h={name:"Home",components:{EditArticle:b},data:function(){return{page:0,keyword:"",types:["博文","收藏","文档","速查表"],list:[]}},watch:{writerListData:function(){this.list=this.writerListData.data},articleDelData:function(){this.loadData()},articleAddData:function(){this.loadData()},articleEditData:function(){this.loadData()}},mounted:function(){this.loadData()},methods:Object(l["a"])({},Object(o["mapActions"])(["writerList","articleDel"]),{loadData:function(){var t={sort:"-updated_at"};this.keyword&&(t.filter={title:this.keyword,tags:this.keyword,desc:this.keyword}),this.writerList({params:t,cache:!1})},onSearch:function(){this.page=0,this.loadData()},showEdit:function(t){this.$refs.editArticle.showEdit(t)},del:function(t){this.articleDel({path:{id:t}})}}),computed:Object(l["a"])({},Object(o["mapGetters"])(["writerListData","articleDelData","articleEditData","articleAddData"]))},p=h,v=(e("0bf8"),Object(u["a"])(p,i,s,!1,null,"ffaa91f0",null));a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-b8f85394.9b856e2a.js.map