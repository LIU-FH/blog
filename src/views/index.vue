<template>
  <div>
    <md-toolbar
      class="w-full"
      style="position: fixed;z-index: 8;transition:none"
      :md-elevation="isTransparent ? 0 : 4"
      :class="isTransparent ? 'md-transparent':'bg-white'"
    >
      <div class="ml-2 flex items-center absolute left-0 top-0 h-full">
        <img class="w-32" src="../assets/img/logo.png" />
      </div>
      <div class="container mx-auto">
        <md-button
          v-for="(item,index) in navData"
          :key="index"
          :class="$route.name === item.name ? 'md-raised md-primary':''"
          :to="item.to"
          :disabled="item.disabled"
        >{{item.title}}</md-button>
      </div>
      <div class="absolute right-0 top-0 h-full flex items-center pr-5 search">
        <md-button class="md-icon-button">
          <i class="icon-search text-lg" />
        </md-button>
        <md-button to="/writer" class="md-icon-button">
          <i class="icon-xiezuo text-lg" />
        </md-button>
        <md-button class="md-icon-button">
          <i class="icon-shezhi text-lg" />
        </md-button>
      </div>
    </md-toolbar>
    <div style="min-height:85vh">
      <router-view />
    </div>
    <div class="h-32 flex items-center justify-center bg-white">
      <a style="color: #718096;" href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备17016057号</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: () => ({
    navData: [
      { title: "首页", to: "/", name: "home" },
      { title: "博文", to: "/article", name: "article" },
      { title: "文档", to: "/doc", name: "doc" },
      { title: "收藏", to: "/collector", name: "collector" },
      // {title: '工具', to: '/tool', name: 'tool', disabled: true},
      { title: "关于", to: "/about", name: "about", disabled: true }
    ]
  }),

  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["scrollTopData"]),
    isTransparent() {
      return this.scrollTopData < 30 && this.$route.name === "home";
    }
  }
};
</script>

<style lang="scss" scoped>
.md-transparent,
.md-transparent a,
.md-transparent i,
.md-transparent p {
  color: white;
}

.bg-white {
  background-color: #ffffff;
}

.md-toolbar,
.md-toolbar-row {
  transition: 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>