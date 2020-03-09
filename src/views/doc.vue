<template>
  <div class="container mx-auto py-24">
    <div class="grid grid-cols-3 gap-6">
      <div class="md-elevation-2" v-for="(docItem, index) in docListData" :key="index">
        <md-toolbar :md-elevation="1">
          <span class="md-title">{{docItem.title}}</span>
        </md-toolbar>
        <md-list>
          <md-list-item v-for="(item,index1) in docItem.children" :key="index1">
            <md-avatar>
              <img class="rounded-sm object-cover" v-lazy="item.pic" />
            </md-avatar>
            <span class="md-list-item-text">{{item.title}}</span>
            <md-button
              :href="item.content.url"
              target="_blank"
              class="md-icon-button md-list-action"
            >
              <i class="icon-fenxiang" />
              <md-tooltip md-direction="bottom">查看</md-tooltip>
            </md-button>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "doc",
  data: () => ({}),

  mounted() {
    document.documentElement.scrollTop = 0;
    this.loadData();
  },
  methods: {
    ...mapActions(["docList"]),
    loadData() {
      let params = {
        sort: "-created_at"
      };
      this.docList({
        params: params
      });
    }
  },
  computed: {
    ...mapGetters(["docListData"])
  }
};
</script>

<style scoped>
</style>