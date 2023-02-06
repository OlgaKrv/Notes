<template>
  <div class="blank-title-message">
    <p>Предупреждение - {{ getMes }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getMes() {
      return this.$store.getters.getMes;
    },
  },
};
</script>

<style lang="scss" scoped>
.blank-title-message {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838;
}
</style>
