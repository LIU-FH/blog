<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="flex items-center">
      <div class="flex-grow-0 pr-5">
        <md-field>
          <label>标题</label>
          <md-input v-model="item.name" @input="handleChange"></md-input>
        </md-field>
      </div>
      <div class="flex-grow">
        <md-field>
          <label>地址</label>
          <md-input v-model="item.url" @input="handleChange"></md-input>
        </md-field>
      </div>
      <i @click="delItem(index)" class="icon-guanbi cursor-pointer" />
    </div>
    <p @click="addItem" class="cursor-pointer pb-2">新增</p>
  </div>
</template>
<script>
export default {
  name: "typeCheatsheet",
  props: ["value"],
  data: () => ({
    list: []
  }),
  watch: {
    value: function() {
      this.initData();
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      if (Array.isArray(this.value) && this.value.length > 0) {
        this.list = this.value;
      } else {
        this.list = [{ name: "", url: "" }];
      }
    },
    handleChange() {
      this.$emit("input", this.list);
    },
    addItem() {
      this.list.push({ name: "", url: "" });
    },
    delItem(index) {
      if (this.list.length > 0) {
        this.list.splice(index, 1);
      }
    }
  }
};
</script>