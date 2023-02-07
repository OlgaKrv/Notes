<template>
  <div class="wrapper__search">
    <!-- Search input -->
    <input
      class="small_text"
      type="text"
      :placeholder="placeholder"
      v-model="search"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return { search: this.value };
  },
  watch: {
    search(val) {
      this.$emit("search", val);
    },
  },
};
</script>

<style scoped>
svg {
  color: #e4e4e4;
}
/* Search */
.wrapper__search {
  position: relative;
  width: 80%;
  display: flex;
  align-items: left;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 20px;
  font-size: 16px;
  width: 60%;
  height: auto;
}
</style>
