<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="text-center">文章</md-dialog-title>
      <md-dialog-content style="width: 550px;padding-bottom:0" class="md-scrollbar">
        <md-field>
          <label>标题</label>
          <md-input v-model="fromData.title"></md-input>
        </md-field>

        <md-field>
          <label>展示图</label>
          <md-input v-model="fromData.pic"></md-input>
        </md-field>
        <md-chips v-model="fromData.tags" :md-limit="5" md-placeholder="标签"></md-chips>
        <md-field>
          <label>描述</label>
          <md-input v-model="fromData.desc"></md-input>
        </md-field>
        <md-field>
          <md-select v-model="fromData.type" placeholder="类型">
            <md-option :value="0">博文</md-option>
            <md-option :value="1">收藏</md-option>
            <md-option :value="2">文档</md-option>
            <md-option :value="3">速查表</md-option>
          </md-select>
        </md-field>
        <component v-model="fromData.content" v-bind:is="typeItems[fromData.type]"></component>
      </md-dialog-content>
      <md-dialog-actions>
        <div class="mb-3 flex items-center justify-between w-full">
          <md-switch v-model="fromData.status" :value="1">是否发布</md-switch>
          <div>
            <md-button class="md-primary" @click="showDialog = false">关闭</md-button>
            <md-button class="md-primary" @click="doSubmit">保存</md-button>
          </div>
        </div>
      </md-dialog-actions>
    </md-dialog>
    <div @click="showDialog = true">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TypeArticle from "./typeItem/typeArticle";
import TypeDoc from "./typeItem/typeDoc";
import TypeCollector from "./typeItem/typeCollector";
import TypeCheatsheet from "./typeItem/typeCheatsheet";
export default {
  name: "editArticle",
  components: { TypeCollector, TypeDoc, TypeArticle, TypeCheatsheet },
  data: () => ({
    showDialog: false,
    value: "",
    fromData: {
      id: 0,
      title: "",
      type: 0,
      pic: "",
      tags: [],
      desc: "",
      content: {},
      status: 1
    },
    typeItems: ["TypeArticle", "TypeCollector", "TypeDoc", "TypeCheatsheet"]
  }),
  watch: {
    articleAddData: function(val) {
      this.showDialog = false;
    },
    articleEditData: function(val) {
      this.showDialog = false;
    }
  },
  methods: {
    ...mapActions(["articleAdd", "articleEdit"]),
    doSubmit() {
      if (this.fromData.id) {
        this.articleEdit({
          params: this.fromData,
          path: { id: this.fromData.id }
        });
      } else {
        this.articleAdd({
          params: this.fromData
        });
      }
    },
    showEdit(item) {
      if (!item) {
        item = JSON.parse(JSON.stringify(this.fromData));
      }
      this.fromData = item;
      this.showDialog = true;
    },
    contentArr(type) {
      return type > -1 ? this.contentKeys[type] : [];
    }
  },
  computed: {
    ...mapGetters(["articleAddData", "articleEditData"])
  }
};
</script>

<style scoped>
</style>
