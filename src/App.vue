<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<script>
let scrollEven = false;
import { mapActions } from "vuex";
import localforage from "localforage";

export default {
  name: "App",
  mounted: function() {
    localforage.clear();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    ...mapActions(["scrollTop", "scrollBottom", "initDone"]),
    handleScroll() {
      if (!scrollEven) {
        let scrollTopHeight =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        this.scrollTop(scrollTopHeight);
        let windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        this.scrollBottom(scrollHeight - scrollTopHeight - windowHeight);
        setTimeout(() => {
          scrollEven = false;
        }, 300);
      }
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.max-height-none .md-content {
  max-height: none !important;
}

.mdEditor .v-note-op {
  padding: 5px !important;
  padding-right: 100px !important;
}

.mdEditor.v-note-wrapper {
  z-index: 0 !important;
}

.tabs-h-full .md-tabs-content {
  flex: 1;
}

.tabs-h-full .md-tabs-container,
.tabs-h-full .md-tab {
  height: 100%;
}

.md-menu-content {
  max-width: 500px !important;
  width: 500px !important;
}
.md-elevation-1 {
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1) !important;
}
.md-elevation-2 {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !important;
}
.md-elevation-4 {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1) !important;
}
</style>
