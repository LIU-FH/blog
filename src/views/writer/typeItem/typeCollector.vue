<template>
  <div>
    <md-field>
      <label>官网</label>
      <md-input v-model="value.website" @input="handleChange"></md-input>
    </md-field>
    <md-field>
      <label>GitHub</label>
      <md-input v-model="value.github" @input="handleChange"></md-input>
    </md-field>
    <md-field>
      <label>用例</label>
      <md-input v-model="value.example" @input="handleChange"></md-input>
    </md-field>
  </div>
</template>
<script>
export default {
  name: "typeCollector",
  props: ["value"],
  methods: {
    handleChange() {
      this.$emit("input", value);
    }
  }
};
</script>