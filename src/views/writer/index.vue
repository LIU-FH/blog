<template>
  <div>
    <md-toolbar class="bg-white" style="position: fixed;z-index: 8" md-elevation="1">
      <div class="w-full flex justify-between">
        <div class="flex items-center">
          <md-button to="/" class="md-icon-button" md-menu-trigger>
            <i class="icon-shouye text-lg" />
            <md-tooltip md-direction="bottom">首页</md-tooltip>
          </md-button>
        </div>
        <div class="flex items-center">
          <md-tabs md-sync-route>
            <md-tab id="writer" to="/writer" md-label="写作台" exact></md-tab>
            <md-tab id="writer-article" to="/writer/article" md-label="博文" exact></md-tab>
            <md-tab id="writer-doc" to="/writer/doc" md-label="文档"></md-tab>
            <md-tab id="writer-git" to="/writer/collector" md-label="收藏"></md-tab>
          </md-tabs>
          <md-button class="md-raised md-accent">登录</md-button>
        </div>
      </div>
    </md-toolbar>
    <router-view />
    <file-list/>
  </div>
</template>

<script>
import FileList from "./work/fileList";
export default {
  name: "Home",
  components: {FileList},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: #ffffff;
}
</style>