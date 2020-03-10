<template>
  <md-field>
    <label>地址</label>
    <md-input v-model="value.url" @input="handleChange"></md-input>
  </md-field>
</template>
<script>
export default {
  name: "typeDoc",
  props: ["value"],
  methods: {
    handleChange() {
      this.$emit("input", value);
    }
  }
};
</script>